package k3;

/*
 * Übung k3/U2: Objekte, die neue Objekte liefern (Kapitel 3, Tutorium 3 Bruchrechnung)
 *
 * Die Klasse Bruch hat zaehler und nenner. Ergänze:
 * - ggt(a, b) als static-Methode (größter gemeinsamer Teiler, für a, b >= 0;
 *   ggt(a, 0) = a). Tipp: Euklid: solange b != 0: (a, b) = (b, a % b).
 * - gekuerzt(): NEUER Bruch, durch den ggt von |zaehler| und nenner geteilt.
 * - plus(anderer): NEUER, gekürzter Bruch a/b + c/d = (a*d + c*b) / (b*d).
 * - mal(anderer): NEUER, gekürzter Bruch.
 * Der Bruch selbst (this) wird nie verändert. toString ist schon fertig.
 */
class Bruch {
    private final int zaehler;
    private final int nenner;

    public Bruch(int zaehler, int nenner) {
        this.zaehler = zaehler;
        this.nenner = nenner;
    }

    public static int ggt(int a, int b) {
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public Bruch gekuerzt() {
        int g = ggt(Math.abs(zaehler), nenner);
        if (g == 0) {
            return this;
        }
        return new Bruch(zaehler / g, nenner / g);
    }

    public Bruch plus(Bruch b) {
        return new Bruch(zaehler * b.nenner + b.zaehler * nenner, nenner * b.nenner).gekuerzt();
    }

    public Bruch mal(Bruch b) {
        return new Bruch(zaehler * b.zaehler, nenner * b.nenner).gekuerzt();
    }

    @Override
    public String toString() {
        return zaehler + "/" + nenner;
    }
}

public class U2_Bruch {
    public static void main(String[] args) {
        Bruch halb = new Bruch(1, 2);
        Bruch viertel = new Bruch(1, 4);
        pruefe(() -> Bruch.ggt(12, 18), 6);
        pruefe(() -> Bruch.ggt(7, 0), 7);
        pruefe(() -> String.valueOf(new Bruch(6, 8).gekuerzt()), "3/4");
        pruefe(() -> String.valueOf(new Bruch(-4, 6).gekuerzt()), "-2/3");
        pruefe(() -> String.valueOf(halb.plus(viertel)), "3/4");
        pruefe(() -> String.valueOf(halb.mal(viertel)), "1/8");
        pruefe(() -> String.valueOf(halb), "1/2");   // halb unverändert?
        ende();
    }

    // ---------------------------------------------------------------
    // Ab hier: Testcode. Den musst du nicht verstehen, nicht ändern.
    // ---------------------------------------------------------------
    private static int nr = 0, ok = 0;

    private static void pruefe(java.util.function.Supplier<Object> aufruf, Object erwartet) {
        nr++;
        Object bekommen;
        try {
            bekommen = aufruf.get();
        } catch (Exception e) {
            bekommen = "Exception " + e.getClass().getSimpleName();
        }
        if (gleich(erwartet, bekommen)) {
            ok++;
            System.out.println("Test " + nr + ": richtig");
        } else {
            System.out.println("Test " + nr + ": falsch (erwartet " + text(erwartet) + ", bekommen " + text(bekommen) + ")");
        }
    }

    private static boolean gleich(Object a, Object b) {
        if (a instanceof Double && b instanceof Double) {
            return Math.abs((Double) a - (Double) b) < 1e-9;
        }
        return text(a).equals(text(b));
    }

    private static String text(Object o) {
        if (o instanceof int[]) return java.util.Arrays.toString((int[]) o);
        if (o instanceof int[][]) return java.util.Arrays.deepToString((int[][]) o);
        if (o instanceof String) return "\"" + o + "\"";
        return String.valueOf(o);
    }

    private static void ende() {
        System.out.println(ok + " von " + nr + " Tests bestanden");
    }
}
