package k4;

/*
 * Übung k4/U1: Suchen (Kapitel 4)
 *
 * a) linear(arr, x): Index von x oder -1.
 * b) binaer(arr, x): Index von x in einem SORTIERTEN Array oder -1, mit binärer Suche
 *    (links, rechts, mitte). Keine Schleife über alle Elemente!
 * c) schritte(arr, x): wie viele Durchläufe braucht deine binäre Suche? (gleiche Logik,
 *    nur mitzählen). Für ein Array mit 1023 Elementen sind es höchstens 10.
 */
public class U1_Suchen {

    public static int linear(int[] arr, int x) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                return i;
            }
        }
        return -1;
    }

    public static int binaer(int[] arr, int x) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = (l + r) / 2;
            if (arr[m] == x) return m;
            if (arr[m] < x) l = m + 1;
            else r = m - 1;
        }
        return -1;
    }

    public static int schritte(int[] arr, int x) {
        int l = 0, r = arr.length - 1, n = 0;
        while (l <= r) {
            n++;
            int m = (l + r) / 2;
            if (arr[m] == x) return n;
            if (arr[m] < x) l = m + 1;
            else r = m - 1;
        }
        return n;
    }

    public static void main(String[] args) {
        int[] arr = {-10, -3, 0, 5, 7, 17, 23, 27, 30};
        pruefe(() -> linear(arr, 17), 5);
        pruefe(() -> linear(arr, 32), -1);
        pruefe(() -> binaer(arr, -3), 1);
        pruefe(() -> binaer(arr, 30), 8);
        pruefe(() -> binaer(arr, 6), -1);
        int[] gross = new int[1023];
        for (int i = 0; i < gross.length; i++) gross[i] = 2 * i;
        pruefe(() -> binaer(gross, 1000), 500);
        pruefe(() -> schritte(gross, 2045) <= 10, true);
        pruefe(() -> schritte(arr, 7), 1);
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
