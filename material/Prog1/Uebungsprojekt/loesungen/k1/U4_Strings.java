package k1;

/*
 * Übung k1/U4: Strings (Kapitel 1, Lektion „Strings“)
 *
 * a) initialen(vorname, nachname): "N.K." für ("Necib", "Kaya").
 * b) gleicherText(a, b): true, wenn beide Strings denselben Inhalt haben.
 *    Nicht mit == vergleichen!
 * c) zaehle(text, zeichen): wie oft kommt zeichen in text vor?
 *    Tipp: for-Schleife über text.length() und text.charAt(i) (Schleifen: Kapitel 2).
 */
public class U4_Strings {

    public static String initialen(String vorname, String nachname) {
        return vorname.charAt(0) + "." + nachname.charAt(0) + ".";
    }

    public static boolean gleicherText(String a, String b) {
        return a.equals(b);
    }

    public static int zaehle(String text, char zeichen) {
        int anzahl = 0;
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == zeichen) {
                anzahl++;
            }
        }
        return anzahl;
    }

    public static void main(String[] args) {
        pruefe(() -> initialen("Necib", "Kaya"), "N.K.");
        pruefe(() -> initialen("ada", "Lovelace"), "a.L.");
        pruefe(() -> gleicherText("Java", new String("Java")), true);
        pruefe(() -> gleicherText("Java", "java"), false);
        pruefe(() -> zaehle("Programmieren", 'm'), 2);
        pruefe(() -> zaehle("", 'x'), 0);
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
