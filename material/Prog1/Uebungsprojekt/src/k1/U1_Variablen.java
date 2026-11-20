package k1;

/*
 * Übung k1/U1: Variablen und Rechnen (Kapitel 1)
 *
 * a) summe(a, b, c): Summe dreier ganzer Zahlen.
 * b) mittelwert(a, b, c): Durchschnitt als double. Achtung Ganzzahldivision:
 *    mittelwert(1, 2, 2) muss 1.6666666666666667 sein, nicht 1.0.
 * c) bruttoPreis(netto): Netto plus 19 % Mehrwertsteuer.
 *    Beispiel: bruttoPreis(100.0) liefert 119.0.
 */
public class U1_Variablen {

    public static int summe(int a, int b, int c) {
        // TODO
        return 0;
    }

    public static double mittelwert(int a, int b, int c) {
        // TODO
        return 0;
    }

    public static double bruttoPreis(double netto) {
        // TODO
        return 0;
    }

    public static void main(String[] args) {
        pruefe(() -> summe(1, 2, 3), 6);
        pruefe(() -> summe(-5, 5, 0), 0);
        pruefe(() -> mittelwert(1, 2, 3), 2.0);
        pruefe(() -> mittelwert(1, 2, 2), 5 / 3.0);
        pruefe(() -> bruttoPreis(100.0), 119.0);
        pruefe(() -> bruttoPreis(0.0), 0.0);
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
