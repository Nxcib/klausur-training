package k2;

/*
 * Übung k2/U2: Schleifen (Kapitel 2)
 *
 * a) summeBis(n): 1 + 2 + ... + n (für n < 1 ist das Ergebnis 0).
 * b) fakultaet(n): n! = 1 * 2 * ... * n, 0! = 1. Rückgabe long.
 * c) quersumme(n): Summe der Ziffern einer nicht negativen Zahl. quersumme(3572) = 17.
 * d) zaehlenText(n): "1 2 3 ... n" mit Leerzeichen dazwischen, ohne Leerzeichen am Ende.
 */
public class U2_Schleifen {

    public static int summeBis(int n) {
        int s = 0;
        for (int i = 1; i <= n; i++) {
            s += i;
        }
        return s;
    }

    public static long fakultaet(int n) {
        long f = 1;
        for (int i = 2; i <= n; i++) {
            f *= i;
        }
        return f;
    }

    public static int quersumme(int n) {
        int s = 0;
        while (n > 0) {
            s += n % 10;
            n /= 10;
        }
        return s;
    }

    public static String zaehlenText(int n) {
        String s = "";
        for (int i = 1; i <= n; i++) {
            if (i > 1) {
                s += " ";
            }
            s += i;
        }
        return s;
    }

    public static void main(String[] args) {
        pruefe(() -> summeBis(10), 55);
        pruefe(() -> summeBis(0), 0);
        pruefe(() -> fakultaet(5), 120L);
        pruefe(() -> fakultaet(0), 1L);
        pruefe(() -> fakultaet(20), 2432902008176640000L);
        pruefe(() -> quersumme(3572), 17);
        pruefe(() -> quersumme(0), 0);
        pruefe(() -> zaehlenText(4), "1 2 3 4");
        pruefe(() -> zaehlenText(1), "1");
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
