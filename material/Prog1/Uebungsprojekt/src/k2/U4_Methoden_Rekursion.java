package k2;

/*
 * Übung k2/U4: Rekursion (Kapitel 2, Lektion „Rekursion“)
 *
 * Alle drei Methoden OHNE Schleife, nur mit Rekursion (Methode ruft sich selbst auf).
 * a) potenz(basis, exp): basis hoch exp für exp >= 0. potenz(2, 10) = 1024.
 * b) fib(n): n-te Fibonacci-Zahl, fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2).
 * c) istPalindrom(s): liest sich s vorwärts und rückwärts gleich? "otto" ja, "Anna" nein
 *    (Groß-/Kleinschreibung zählt). Tipp: erstes und letztes Zeichen vergleichen,
 *    dann mit s.substring(1, s.length() - 1) weiter. Basisfall: Länge 0 oder 1.
 */
public class U4_Methoden_Rekursion {

    public static long potenz(int basis, int exp) {
        // TODO
        return 0;
    }

    public static int fib(int n) {
        // TODO
        return -1;
    }

    public static boolean istPalindrom(String s) {
        // TODO
        return false;
    }

    public static void main(String[] args) {
        pruefe(() -> potenz(2, 10), 1024L);
        pruefe(() -> potenz(5, 0), 1L);
        pruefe(() -> fib(0), 0);
        pruefe(() -> fib(10), 55);
        pruefe(() -> istPalindrom("otto"), true);
        pruefe(() -> istPalindrom("Anna"), false);
        pruefe(() -> istPalindrom("rentner"), true);
        pruefe(() -> istPalindrom(""), true);
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
