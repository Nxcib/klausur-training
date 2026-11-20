package k5;

/*
 * Übung k5/U3: Threads, join und synchronized (Kapitel 5)
 *
 * a) parallelSumme(arr): Zwei Threads summieren je eine Hälfte des Arrays
 *    (erster Thread Index 0 bis mitte-1, zweiter mitte bis Ende). Mit join warten,
 *    dann beide Teilsummen addieren. Tipp: Teilsummen in einem long[2] speichern,
 *    jeder Thread schreibt in sein eigenes Fach.
 * b) Zaehler.plus() wird von vielen Threads gleichzeitig aufgerufen. Sorge mit
 *    synchronized dafür, dass keine Erhöhung verloren geht.
 * c) zaehleParallel(threads, proThread): startet die Threads, die jeweils proThread-mal
 *    plus() aufrufen, wartet auf alle und liefert den Endstand.
 */
class Zaehler {
    private int wert = 0;

    public synchronized void plus() {
        wert++;
    }

    public int getWert() {
        return wert;
    }
}

public class U3_Threads {

    static long parallelSumme(int[] arr) throws InterruptedException {
        long[] teil = new long[2];
        int mitte = arr.length / 2;
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < mitte; i++) teil[0] += arr[i];
        });
        Thread t2 = new Thread(() -> {
            for (int i = mitte; i < arr.length; i++) teil[1] += arr[i];
        });
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        return teil[0] + teil[1];
    }

    static int zaehleParallel(int threads, int proThread) throws InterruptedException {
        Zaehler z = new Zaehler();
        Thread[] t = new Thread[threads];
        for (int i = 0; i < threads; i++) {
            t[i] = new Thread(() -> {
                for (int k = 0; k < proThread; k++) z.plus();
            });
            t[i].start();
        }
        for (Thread th : t) th.join();
        return z.getWert();
    }

    public static void main(String[] args) {
        int[] arr = new int[1_000_000];
        for (int i = 0; i < arr.length; i++) arr[i] = i % 7;
        long soll = 0;
        for (int x : arr) soll += x;
        long sollFinal = soll;
        pruefe(() -> { try { return parallelSumme(arr); } catch (InterruptedException e) { return -1L; } }, sollFinal);
        pruefe(() -> { try { return parallelSumme(new int[]{5}); } catch (InterruptedException e) { return -1L; } }, 5L);
        pruefe(() -> { try { return zaehleParallel(8, 50_000); } catch (InterruptedException e) { return -1; } }, 400_000);
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
