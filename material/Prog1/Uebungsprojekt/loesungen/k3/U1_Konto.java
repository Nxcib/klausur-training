package k3;

/*
 * Übung k3/U1: Klasse, Konstruktor, Kapselung (Kapitel 3)
 *
 * Vervollständige die Klasse Konto:
 * - Konstruktor: setzt inhaber, Startguthaben 0.
 * - einzahlen(betrag): nur positive Beträge erhöhen den Stand, sonst passiert nichts.
 * - abheben(betrag): nur wenn betrag > 0 und genug Geld da ist. Rückgabe true bei Erfolg.
 * - getStand(), getInhaber(): Getter.
 * - toString(): "Konto von <inhaber>: <stand> Euro", z. B. "Konto von Ada: 50.0 Euro".
 * Die Attribute bleiben private.
 */
class Konto {
    private String inhaber;
    private double stand;

    public Konto(String inhaber) {
        this.inhaber = inhaber;
        this.stand = 0;
    }

    public void einzahlen(double betrag) {
        if (betrag > 0) {
            stand += betrag;
        }
    }

    public boolean abheben(double betrag) {
        if (betrag > 0 && betrag <= stand) {
            stand -= betrag;
            return true;
        }
        return false;
    }

    public double getStand() {
        return stand;
    }

    public String getInhaber() {
        return inhaber;
    }

    @Override
    public String toString() {
        return "Konto von " + inhaber + ": " + stand + " Euro";
    }
}

public class U1_Konto {
    public static void main(String[] args) {
        Konto k = new Konto("Ada");
        pruefe(() -> k.getInhaber(), "Ada");
        k.einzahlen(100);
        k.einzahlen(-20);
        pruefe(() -> k.getStand(), 100.0);
        pruefe(() -> k.abheben(30), true);
        pruefe(() -> k.abheben(500), false);
        pruefe(() -> k.abheben(-5), false);
        pruefe(() -> k.getStand(), 70.0);
        pruefe(() -> k.toString(), "Konto von Ada: 70.0 Euro");
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
