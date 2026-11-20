package k1;

/*
 * Übung k1/U3: Typumwandlung (Kapitel 1, Lektion „Typecast“)
 *
 * a) ganzerTeil(x): schneidet die Nachkommastellen ab. ganzerTeil(3.99) = 3.
 * b) runden(x): rundet kaufmännisch auf eine ganze Zahl (int). runden(2.5) = 3.
 *    Tipp: Math.round liefert long, also noch nach int casten.
 * c) celsiusZuFahrenheit(c): F = C * 9 / 5 + 32 als double.
 *    Achtung: celsiusZuFahrenheit(37) muss 98.6 sein. Wo lauert die Ganzzahldivision?
 * d) buchstabe(n): der n-te Großbuchstabe, 0 = 'A', 1 = 'B', ... (char rechnen!)
 */
public class U3_Casting {

    public static int ganzerTeil(double x) {
        return (int) x;
    }

    public static int runden(double x) {
        return (int) Math.round(x);
    }

    public static double celsiusZuFahrenheit(int c) {
        return c * 9.0 / 5 + 32;
    }

    public static char buchstabe(int n) {
        return (char) ('A' + n);
    }

    public static void main(String[] args) {
        pruefe(() -> ganzerTeil(3.99), 3);
        pruefe(() -> ganzerTeil(-2.7), -2);
        pruefe(() -> runden(2.5), 3);
        pruefe(() -> runden(2.49), 2);
        pruefe(() -> celsiusZuFahrenheit(100), 212.0);
        pruefe(() -> celsiusZuFahrenheit(37), 37 * 9.0 / 5 + 32);
        pruefe(() -> buchstabe(0), 'A');
        pruefe(() -> buchstabe(25), 'Z');
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
