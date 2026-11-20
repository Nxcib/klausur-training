package k2;

/*
 * Übung k2/U5: Zweidimensionale Arrays (Kapitel 2)
 *
 * a) einmaleins(n): n x n-Tabelle, Zelle [i][j] = (i + 1) * (j + 1).
 *    einmaleins(3) = {{1, 2, 3}, {2, 4, 6}, {3, 6, 9}}.
 * b) zeilensummen(m): Array mit der Summe jeder Zeile.
 * c) transponiert(m): Zeilen und Spalten vertauscht (m ist rechteckig).
 *    {{1, 2, 3}, {4, 5, 6}} wird zu {{1, 4}, {2, 5}, {3, 6}}.
 */
public class U5_2DArrays {

    public static int[][] einmaleins(int n) {
        // TODO
        return null;
    }

    public static int[] zeilensummen(int[][] m) {
        // TODO
        return null;
    }

    public static int[][] transponiert(int[][] m) {
        // TODO
        return null;
    }

    public static void main(String[] args) {
        pruefe(() -> einmaleins(3), new int[][]{{1, 2, 3}, {2, 4, 6}, {3, 6, 9}});
        pruefe(() -> zeilensummen(new int[][]{{1, 2}, {3, 4}, {5, 6}}), new int[]{3, 7, 11});
        pruefe(() -> transponiert(new int[][]{{1, 2, 3}, {4, 5, 6}}), new int[][]{{1, 4}, {2, 5}, {3, 6}});
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
