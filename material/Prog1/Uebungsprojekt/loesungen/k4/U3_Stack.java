package k4;

/*
 * Übung k4/U3: Stack mit verketteter Liste (Kapitel 4, Lektionen „Verkettete Liste“ und „Stack“)
 *
 * IntStack speichert ints in Knoten (Node). Ergänze push, pop, peek, isEmpty, size.
 * - pop und peek auf leerem Stack: werfen eine IllegalStateException.
 * Danach: umdrehen(text) in U3_Stack soll einen String mit Hilfe eines Stacks umdrehen
 * (Zeichen als int speichern: push(c), dann (char) pop()).
 */
class IntStack {
    private static class Node {
        int value;
        Node next;

        Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }

    private Node head;
    private int size;

    public void push(int x) {
        head = new Node(x, head);
        size++;
    }

    public int pop() {
        if (head == null) {
            throw new IllegalStateException("Stack ist leer");
        }
        int v = head.value;
        head = head.next;
        size--;
        return v;
    }

    public int peek() {
        if (head == null) {
            throw new IllegalStateException("Stack ist leer");
        }
        return head.value;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public int size() {
        return size;
    }
}

public class U3_Stack {

    static String umdrehen(String text) {
        IntStack s = new IntStack();
        for (int i = 0; i < text.length(); i++) {
            s.push(text.charAt(i));
        }
        StringBuilder sb = new StringBuilder();
        while (!s.isEmpty()) {
            sb.append((char) s.pop());
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        IntStack s = new IntStack();
        pruefe(() -> s.isEmpty(), true);
        s.push(1);
        s.push(2);
        s.push(3);
        pruefe(() -> s.size(), 3);
        pruefe(() -> s.pop(), 3);
        pruefe(() -> s.peek(), 2);
        pruefe(() -> s.pop() + s.pop(), 3);
        pruefe(() -> s.pop(), "Exception IllegalStateException");
        pruefe(() -> umdrehen("Prog1"), "1gorP");
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
