package k0;

/*
 * Übung k0/U2: Rechnen oder Verketten? (Kapitel 0, Lektion „println und print“)
 *
 * a) rechnung(a, b) soll den Text "a + b = Summe" liefern.
 *    Beispiel: rechnung(2, 3) liefert "2 + 3 = 5" (nicht "2 + 3 = 23"!).
 * b) zusammen(a, b) soll die beiden Zahlen als Text hintereinander liefern.
 *    Beispiel: zusammen(2, 3) liefert "23".
 * Tipp: Klammern entscheiden, ob gerechnet oder angehängt wird.
 */
public class U2_Verkettung {

    public static String rechnung(int a, int b) {
        // TODO
        return "";
    }

    public static String zusammen(int a, int b) {
        // TODO (Tipp: mit "" anfangen)
        return "";
    }

    public static void main(String[] args) {
        pruefe(() -> rechnung(2, 3), "2 + 3 = 5");
        pruefe(() -> rechnung(10, -4), "10 + -4 = 6");
        pruefe(() -> zusammen(2, 3), "23");
        pruefe(() -> zusammen(10, 0), "100");
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
