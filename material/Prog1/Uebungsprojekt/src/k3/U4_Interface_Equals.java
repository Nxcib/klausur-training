package k3;

/*
 * Übung k3/U4: Interface, equals und static (Kapitel 3)
 *
 * a) Das Interface Bewertbar verlangt int punkte(). Student implementiert es:
 *    punkte() liefert die Summe der Klausurpunkte (Array).
 * b) equals in Student: zwei Studenten sind gleich, wenn die Matrikelnummer gleich ist.
 *    (hashCode passend: die Matrikelnummer zurückgeben.)
 * c) Klassenvariable anzahl: zählt, wie viele Student-Objekte erzeugt wurden.
 *    getAnzahl() ist static.
 */
interface Bewertbar {
    int punkte();
}

class Student implements Bewertbar {
    // TODO: Klassenvariable anzahl
    private final int matrikel;
    private final int[] klausurpunkte;

    Student(int matrikel, int... klausurpunkte) {
        this.matrikel = matrikel;
        this.klausurpunkte = klausurpunkte;
        // TODO: mitzählen
    }

    static int getAnzahl() {
        return -1; // TODO
    }

    @Override
    public int punkte() {
        return 0; // TODO
    }

    @Override
    public boolean equals(Object o) {
        return super.equals(o); // TODO
    }

    @Override
    public int hashCode() {
        return matrikel;
    }
}

public class U4_Interface_Equals {
    public static void main(String[] args) {
        Student a = new Student(4711, 30, 25, 20);
        Student b = new Student(4711);
        Student c = new Student(1234, 10);
        Bewertbar x = a;
        pruefe(() -> x.punkte(), 75);
        pruefe(() -> c.punkte(), 10);
        pruefe(() -> a.equals(b), true);
        pruefe(() -> a.equals(c), false);
        pruefe(() -> a.equals("4711"), false);
        pruefe(() -> Student.getAnzahl(), 3);
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
