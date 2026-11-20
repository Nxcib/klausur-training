package k1;

/*
 * Übung k1/U2: Ganzzahldivision und Modulo (Kapitel 1, Lektion „Rechnen“)
 *
 * a) istGerade(n): true, wenn n gerade ist (auch für negative Zahlen).
 * b) letzteZiffer(n): letzte Ziffer einer nicht negativen Zahl. letzteZiffer(357) = 7.
 * c) zeitText(sekunden): wandelt Sekunden in "h:m:s" um, ohne führende Nullen.
 *    Beispiel: zeitText(3725) liefert "1:2:5" (1 Stunde, 2 Minuten, 5 Sekunden).
 */
public class U2_Modulo {

    public static boolean istGerade(int n) {
        return n % 2 == 0;
    }

    public static int letzteZiffer(int n) {
        return n % 10;
    }

    public static String zeitText(int sekunden) {
        int h = sekunden / 3600;
        int rest = sekunden % 3600;
        int m = rest / 60;
        int s = rest % 60;
        return h + ":" + m + ":" + s;
    }

    public static void main(String[] args) {
        pruefe(() -> istGerade(4), true);
        pruefe(() -> istGerade(7), false);
        pruefe(() -> istGerade(-6), true);
        pruefe(() -> letzteZiffer(357), 7);
        pruefe(() -> letzteZiffer(0), 0);
        pruefe(() -> zeitText(3725), "1:2:5");
        pruefe(() -> zeitText(59), "0:0:59");
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
