package k2;

/*
 * Übung k2/U1: if und switch (Kapitel 2)
 *
 * a) max3(a, b, c): die größte von drei Zahlen, nur mit if (ohne Math.max).
 * b) notenText(note): 1 -> "sehr gut", 2 -> "gut", 3 -> "befriedigend",
 *    4 -> "ausreichend", 5 -> "nicht bestanden", sonst "ungültig". Mit switch.
 * c) istSchaltjahr(jahr): durch 4 teilbar, aber nicht durch 100,
 *    außer es ist durch 400 teilbar. 2000 ja, 1900 nein, 2024 ja, 2026 nein.
 */
public class U1_Verzweigungen {

    public static int max3(int a, int b, int c) {
        // TODO
        return 0;
    }

    public static String notenText(int note) {
        // TODO: switch mit break
        return "";
    }

    public static boolean istSchaltjahr(int jahr) {
        // TODO
        return false;
    }

    public static void main(String[] args) {
        pruefe(() -> max3(1, 2, 3), 3);
        pruefe(() -> max3(9, -2, 9), 9);
        pruefe(() -> max3(-5, -1, -9), -1);
        pruefe(() -> notenText(2), "gut");
        pruefe(() -> notenText(5), "nicht bestanden");
        pruefe(() -> notenText(7), "ungültig");
        pruefe(() -> istSchaltjahr(2000), true);
        pruefe(() -> istSchaltjahr(1900), false);
        pruefe(() -> istSchaltjahr(2024), true);
        pruefe(() -> istSchaltjahr(2026), false);
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
