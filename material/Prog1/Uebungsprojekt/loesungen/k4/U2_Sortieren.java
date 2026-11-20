package k4;

/*
 * Übung k4/U2: Sortieren (Kapitel 4)
 *
 * Sortiere jeweils IN PLACE (das übergebene Array wird verändert, kein neues Array):
 * a) bubbleSort(arr)
 * b) selectionSort(arr)
 * c) istSortiert(arr): true, wenn aufsteigend sortiert (gleiche Nachbarn erlaubt).
 * Arrays.sort ist hier verboten, es geht ums Üben.
 */
public class U2_Sortieren {

    public static void bubbleSort(int[] arr) {
        for (int ende = arr.length; ende > 1; ende--) {
            for (int i = 0; i < ende - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    int t = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = t;
                }
            }
        }
    }

    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) min = j;
            }
            int t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
    }

    public static boolean istSortiert(int[] arr) {
        for (int i = 0; i + 1 < arr.length; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int[] a = {-10, 23, 27, 5, 7, 30, 17, 0, -3};
        int[] b = a.clone();
        bubbleSort(a);
        selectionSort(b);
        int[] soll = {-10, -3, 0, 5, 7, 17, 23, 27, 30};
        pruefe(() -> a, soll);
        pruefe(() -> b, soll);
        int[] leer = {};
        bubbleSort(leer);
        pruefe(() -> leer, new int[0]);
        pruefe(() -> istSortiert(new int[]{1, 2, 2, 5}), true);
        pruefe(() -> istSortiert(new int[]{3, 1}), false);
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
