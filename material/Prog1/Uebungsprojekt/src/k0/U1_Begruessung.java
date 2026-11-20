package k0;

/*
 * Übung k0/U1: Begrüßung (Kapitel 0, Ausgabe und Strings verketten)
 *
 * Schreibe die Methode gruss. Sie bekommt einen Namen und gibt den Text
 * "Hallo, <Name>!" zurück. Beispiel: gruss("Necib") liefert "Hallo, Necib!".
 * Achte genau auf Komma, Leerzeichen und Ausrufezeichen.
 *
 * Starten: grüner Pfeil neben main. Unten in der Konsole siehst du pro Test
 * "richtig" oder "falsch (erwartet ..., bekommen ...)".
 */
public class U1_Begruessung {

    public static String gruss(String name) {
        // TODO: Text zusammensetzen und zurückgeben
        return "";
    }

    public static void main(String[] args) {
        System.out.println(gruss("Welt"));   // so sieht dein Ergebnis aus
        pruefe(() -> gruss("Necib"), "Hallo, Necib!");
        pruefe(() -> gruss("Ada"), "Hallo, Ada!");
        pruefe(() -> gruss(""), "Hallo, !");
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
