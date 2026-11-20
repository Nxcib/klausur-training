package k5;

/*
 * Übung k5/U2: Eigene checked Exception (Kapitel 5, Tutorium 5 Aufgabe 2)
 *
 * a) Schreibe die Klasse ZuWenigGeldException (checked, erbt von Exception) mit einem
 *    Konstruktor (String meldung), der die Meldung an super weitergibt.
 *    (Im Gerüst ist sie schon angelegt, aber noch falsch: Sie erbt von RuntimeException
 *    und reicht die Meldung nicht weiter.)
 * b) Geldbeutel.ausgeben(betrag) wirft sie mit der Meldung "nur <inhalt> Euro da",
 *    wenn betrag > inhalt. Sonst wird abgezogen.
 * c) kaufe(g, preis) in U2_EigeneException fängt die Exception und liefert dann
 *    "abgelehnt: <Meldung>", bei Erfolg "gekauft".
 */
class ZuWenigGeldException extends RuntimeException {   // TODO: checked machen
    public ZuWenigGeldException(String meldung) {
        // TODO: Meldung weitergeben
    }
}

class Geldbeutel {
    private int inhalt;

    Geldbeutel(int inhalt) {
        this.inhalt = inhalt;
    }

    void ausgeben(int betrag) throws ZuWenigGeldException {
        inhalt -= betrag; // TODO: vorher prüfen
    }

    int getInhalt() {
        return inhalt;
    }
}

public class U2_EigeneException {

    static String kaufe(Geldbeutel g, int preis) {
        // TODO: try/catch
        return "";
    }

    public static void main(String[] args) {
        Geldbeutel g = new Geldbeutel(10);
        pruefe(() -> kaufe(g, 4), "gekauft");
        pruefe(() -> g.getInhalt(), 6);
        pruefe(() -> kaufe(g, 8), "abgelehnt: nur 6 Euro da");
        pruefe(() -> g.getInhalt(), 6);
        pruefe(() -> Exception.class.isAssignableFrom(ZuWenigGeldException.class)
                && !RuntimeException.class.isAssignableFrom(ZuWenigGeldException.class), true);
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
