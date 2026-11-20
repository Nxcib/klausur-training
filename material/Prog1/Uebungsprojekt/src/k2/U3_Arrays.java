package k2;

/*
 * Übung k2/U3: Arrays (Kapitel 2)
 *
 * a) summe(arr): Summe aller Elemente.
 * b) maximum(arr): größtes Element (arr hat mindestens ein Element).
 *    Achtung: nicht mit 0 starten, das Array kann nur negative Zahlen enthalten.
 * c) umgedreht(arr): NEUES Array mit den Elementen in umgekehrter Reihenfolge.
 *    Das Original darf sich nicht ändern.
 * d) anzahlGroesserAls(arr, grenze): wie viele Elemente sind größer als grenze?
 */
public class U3_Arrays {

    public static int summe(int[] arr) {
        // TODO
        return 0;
    }

    public static int maximum(int[] arr) {
        // TODO
        return 0;
    }

    public static int[] umgedreht(int[] arr) {
        // TODO
        return null;
    }

    public static int anzahlGroesserAls(int[] arr, int grenze) {
        // TODO
        return -1;
    }

    public static void main(String[] args) {
        int[] a = {3, -1, 7, 2};
        pruefe(() -> summe(a), 11);
        pruefe(() -> summe(new int[0]), 0);
        pruefe(() -> maximum(a), 7);
        pruefe(() -> maximum(new int[]{-8, -3, -5}), -3);
        pruefe(() -> umgedreht(a), new int[]{2, 7, -1, 3});
        pruefe(() -> a, new int[]{3, -1, 7, 2});   // Original unverändert?
        pruefe(() -> anzahlGroesserAls(a, 2), 2);
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
