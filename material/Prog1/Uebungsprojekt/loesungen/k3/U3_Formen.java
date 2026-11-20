package k3;

/*
 * Übung k3/U3: Vererbung, abstrakte Klassen, Polymorphie (Kapitel 3)
 *
 * Form ist abstrakt und hat die abstrakte Methode flaeche().
 * Ergänze:
 * - Rechteck(breite, hoehe) mit flaeche() = breite * hoehe.
 * - Quadrat(seite) erbt von Rechteck und ruft dessen Konstruktor mit super(...) auf.
 * - Kreis(radius) mit flaeche() = Math.PI * r * r.
 * - name() soll in jeder Klasse den Klassennamen als Text liefern ("Rechteck", ...).
 * - gesamtFlaeche(formen) in U3_Formen: Summe aller Flächen (Polymorphie!).
 */
abstract class Form {
    abstract double flaeche();

    abstract String name();

    @Override
    public String toString() {
        return name() + " mit Fläche " + flaeche();
    }
}

class Rechteck extends Form {
    private final double breite, hoehe;

    Rechteck(double breite, double hoehe) {
        this.breite = breite;
        this.hoehe = hoehe;
    }

    @Override
    double flaeche() {
        return breite * hoehe;
    }

    @Override
    String name() {
        return "Rechteck";
    }
}

class Quadrat extends Rechteck {
    Quadrat(double seite) {
        super(seite, seite);
    }

    @Override
    String name() {
        return "Quadrat";
    }
}

class Kreis extends Form {
    private final double radius;

    Kreis(double radius) {
        this.radius = radius;
    }

    @Override
    double flaeche() {
        return Math.PI * radius * radius;
    }

    @Override
    String name() {
        return "Kreis";
    }
}

public class U3_Formen {

    static double gesamtFlaeche(Form[] formen) {
        double s = 0;
        for (Form f : formen) {
            s += f.flaeche();
        }
        return s;
    }

    public static void main(String[] args) {
        Form[] formen = {new Rechteck(2, 3), new Quadrat(4), new Kreis(1)};
        pruefe(() -> formen[0].flaeche(), 6.0);
        pruefe(() -> formen[1].flaeche(), 16.0);
        pruefe(() -> formen[1].name(), "Quadrat");
        pruefe(() -> formen[2].flaeche(), Math.PI);
        pruefe(() -> formen[1] instanceof Rechteck, true);
        pruefe(() -> gesamtFlaeche(formen), 22 + Math.PI);
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
