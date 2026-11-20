package k0;

/*
 * Übung k0/U3: Zeilen und Kommentare (Kapitel 0)
 *
 * a) zweiZeilen(oben, unten) soll einen Text liefern, in dem oben und unten
 *    durch einen Zeilenumbruch getrennt sind. Der Zeilenumbruch im Text heißt \n.
 *    Beispiel: zweiZeilen("A", "B") liefert "A\nB".
 * b) In der Methode zahl stehen drei Zeilen, von denen eine auskommentiert werden
 *    muss, damit 42 herauskommt. Kommentiere die richtige Zeile mit // aus.
 */
public class U3_Zeilen {

    public static String zweiZeilen(String oben, String unten) {
        // TODO
        return "";
    }

    public static int zahl() {
        int x = 40;
        x = x + 2;
        x = x * 10;   // TODO: diese oder eine andere Zeile auskommentieren?
        return x;
    }

    public static void main(String[] args) {
        System.out.println(zweiZeilen("erste Zeile", "zweite Zeile"));
        pruefe(() -> zweiZeilen("A", "B"), "A\nB");
        pruefe(() -> zweiZeilen("Hallo", ""), "Hallo\n");
        pruefe(() -> zahl(), 42);
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
