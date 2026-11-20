package k5;

/*
 * Übung k5/U1: Exceptions fangen und werfen (Kapitel 5)
 *
 * a) zahlOderStandard(text, standard): Integer.parseInt(text), bei NumberFormatException
 *    wird standard zurückgegeben.
 * b) pruefeAlter(alter): wirft eine IllegalArgumentException mit der Meldung
 *    "ungültiges Alter: <alter>", wenn alter < 0 oder > 150. Sonst gibt sie alter zurück.
 * c) sicherTeilen(a, b): a / b als int; bei Division durch 0 die ArithmeticException
 *    fangen und 0 zurückgeben.
 */
public class U1_Exceptions {

    public static int zahlOderStandard(String text, int standard) {
        try {
            return Integer.parseInt(text);
        } catch (NumberFormatException e) {
            return standard;
        }
    }

    public static int pruefeAlter(int alter) {
        if (alter < 0 || alter > 150) {
            throw new IllegalArgumentException("ungültiges Alter: " + alter);
        }
        return alter;
    }

    public static int sicherTeilen(int a, int b) {
        try {
            return a / b;
        } catch (ArithmeticException e) {
            return 0;
        }
    }

    public static void main(String[] args) {
        pruefe(() -> zahlOderStandard("42", -1), 42);
        pruefe(() -> zahlOderStandard("4x2", -1), -1);
        pruefe(() -> pruefeAlter(30), 30);
        pruefe(() -> pruefeAlter(-3), "Exception IllegalArgumentException");
        pruefe(() -> {
            try {
                pruefeAlter(200);
                return "keine Exception";
            } catch (IllegalArgumentException e) {
                return e.getMessage();
            }
        }, "ungültiges Alter: 200");
        pruefe(() -> sicherTeilen(7, 2), 3);
        pruefe(() -> sicherTeilen(7, 0), 0);
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
