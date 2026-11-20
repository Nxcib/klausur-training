package k4;

import java.util.*;

/*
 * Übung k4/U4: Collections und Generics (Kapitel 4)
 *
 * a) haeufigkeiten(woerter): Map Wort -> Anzahl. Benutze HashMap und getOrDefault.
 *    Rückgabe als TreeMap, damit die Ausgabe sortiert ist.
 * b) ohneDuplikate(liste): neue Liste ohne doppelte Werte, Reihenfolge des ersten
 *    Auftretens bleibt. Tipp: ein HashSet merkt sich, was schon da war.
 * c) generisch: maximum(liste) für jede Liste von vergleichbaren Werten
 *    (T extends Comparable<T>), mit compareTo.
 */
public class U4_Collections {

    public static Map<String, Integer> haeufigkeiten(String[] woerter) {
        Map<String, Integer> m = new HashMap<>();
        for (String w : woerter) {
            m.put(w, m.getOrDefault(w, 0) + 1);
        }
        return new TreeMap<>(m);
    }

    public static List<Integer> ohneDuplikate(List<Integer> liste) {
        Set<Integer> gesehen = new HashSet<>();
        List<Integer> ergebnis = new ArrayList<>();
        for (Integer x : liste) {
            if (gesehen.add(x)) {
                ergebnis.add(x);
            }
        }
        return ergebnis;
    }

    public static <T extends Comparable<T>> T maximum(List<T> liste) {
        T max = liste.get(0);
        for (T x : liste) {
            if (x.compareTo(max) > 0) {
                max = x;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        pruefe(() -> String.valueOf(haeufigkeiten(new String[]{"ja", "nein", "ja", "ja"})), "{ja=3, nein=1}");
        pruefe(() -> String.valueOf(haeufigkeiten(new String[]{})), "{}");
        pruefe(() -> String.valueOf(ohneDuplikate(List.of(4, 2, 4, 7, 2))), "[4, 2, 7]");
        pruefe(() -> maximum(List.of(3, 9, 4)), 9);
        pruefe(() -> maximum(List.of("Kiwi", "Apfel", "Zitrone")), "Zitrone");
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
