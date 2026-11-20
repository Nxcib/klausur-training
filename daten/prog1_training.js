// Programmieren 1: Training (Nachverfolgen, Code-Puzzle, Auf Papier)
// Erzeugt von werkzeuge/prog1_training.py. Alle Tabellenwerte und Ausgaben stammen aus echten Java-Läufen (JDK 25).
// Nicht von Hand ändern: im Skript ändern und neu erzeugen.
window.TRAINING = window.TRAINING || {};
window.TRAINING.prog1 = {
 "kapitel": {
  "k0": [
   {
    "typ": "trace",
    "titel": "Tauschen ohne Hilfsvariable",
    "text": "Drei Zuweisungen tauschen die Werte von a und b. Trag nach jeder markierten Zeile die Werte ein.",
    "code": "int a = 3;\nint b = 4;              // A\na = a + b;              // B\nb = a - b;              // C\na = a - b;              // D\nSystem.out.println(\"a=\" + a + \", b=\" + b);",
    "spalten": [
     "a",
     "b"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "3",
       "4"
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "7",
       "4"
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "7",
       "3"
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "4",
       "3"
      ]
     }
    ],
    "ausgabe": "a=4, b=3",
    "erklaerung": "Eine Zuweisung rechnet erst die rechte Seite mit den aktuellen Werten aus und überschreibt dann die linke Variable. Bei C ist a schon 7, also b = 7 - 4 = 3."
   },
   {
    "typ": "trace",
    "titel": "Ein Algorithmus: Dezimal nach binär",
    "text": "while kommt erst in Kapitel 2. Hier reicht: Der Block in den geschweiften Klammern wiederholt sich, solange n > 0 gilt. Bei A trägst du nach jedem Durchlauf n und bits ein.",
    "code": "int n = 13;\nString bits = \"\";\nwhile (n > 0) {\n    bits = (n % 2) + bits;\n    n = n / 2;          // A\n}\nSystem.out.println(bits);",
    "spalten": [
     "n",
     "bits"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "6",
       "1"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "3",
       "01"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "1",
       "101"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "0",
       "1101"
      ]
     }
    ],
    "ausgabe": "1101",
    "erklaerung": "n % 2 ist der Rest beim Teilen durch 2, also das letzte Bit. Es wird VORNE an bits gehängt. n / 2 ist Ganzzahldivision: 13 / 2 = 6. So entsteht 1101 von hinten nach vorne."
   },
   {
    "typ": "parsons",
    "titel": "Das erste Programm zusammensetzen",
    "text": "Bau ein vollständiges Programm, das Hallo, Welt! ausgibt. Zwei Zeilen gehören nicht hinein.",
    "zeilen": [
     "public class Hallo {",
     "public static void main(String[] args) {",
     "System.out.println(\"Hallo, Welt!\");",
     "}",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "public void main(String args) {",
      "warum": "Der Kopf von main ist immer public static void main(String[] args). Ohne static und ohne [] startet Java das Programm nicht."
     },
     {
      "zeile": "System.out.println(Hallo, Welt!);",
      "warum": "Text muss in doppelten Anführungszeichen stehen, sonst sucht Java Variablen namens Hallo und Welt."
     }
    ],
    "rahmen": "    // ... deine Zeilen ...",
    "ausgabe": "Hallo, Welt!"
   },
   {
    "typ": "parsons",
    "titel": "Zwei Werte tauschen mit Hilfsvariable",
    "text": "Tausche die Werte von a und b, sodass am Ende 9 5 ausgegeben wird.",
    "zeilen": [
     "int a = 5;",
     "int b = 9;",
     "int tmp = a;",
     "a = b;",
     "b = tmp;",
     "System.out.println(a + \" \" + b);"
    ],
    "frei": [
     [
      0,
      1
     ]
    ],
    "ablenker": [
     {
      "zeile": "a = tmp;",
      "warum": "tmp hält den alten Wert von a. Den bekommt b, nicht wieder a."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n    // ... deine Zeilen ...\n    }\n}",
    "ausgabe": "9 5"
   },
   {
    "typ": "papier",
    "titel": "Rechteck: Fläche und Umfang",
    "text": "Schreib ein vollständiges Java-Programm mit der Klasse Rechteck. In main legst du breite = 7 und hoehe = 3 als int an und gibst aus:\nFlaeche: 21\nUmfang: 20",
    "code": null,
    "punkte": 4,
    "minuten": 5,
    "loesung": "public class Rechteck {\n    public static void main(String[] args) {\n        int breite = 7;\n        int hoehe = 3;\n        System.out.println(\"Flaeche: \" + breite * hoehe);\n        System.out.println(\"Umfang: \" + 2 * (breite + hoehe));\n    }\n}",
    "test": null,
    "testAusgabe": "Flaeche: 21\nUmfang: 20",
    "checkliste": [
     "Klassenkopf public class Rechteck { mit schließender Klammer am Ende",
     "main-Kopf exakt: public static void main(String[] args)",
     "Variablen mit Typ deklariert (int breite = 7;)",
     "Klammern beim Umfang: 2 * (breite + hoehe), nicht 2 * breite + hoehe",
     "Jede Anweisung endet mit Semikolon, Text steht in \"...\""
    ]
   }
  ],
  "k1": [
   {
    "typ": "trace",
    "titel": "Ganzzahldivision und Modulo",
    "text": "Achte darauf, welchen Typ die Werte rechts haben, nicht nur die Variable links.",
    "code": "int x = 17;\nint y = 5;\nint q = x / y;                 // A\nint r = x % y;                 // B\ndouble d = x / y;              // C\ndouble e = (double) x / y;     // D",
    "spalten": [
     "q",
     "r",
     "d",
     "e"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "3",
       null,
       null,
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "3",
       "2",
       null,
       null
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "3",
       "2",
       "3.0",
       null
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "3",
       "2",
       "3.0",
       "3.4"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "17 / 5 rechnet mit zwei int und schneidet ab: 3. Daran ändert auch double d nichts, die Division ist schon fertig, bevor zugewiesen wird: 3.0. Erst der Cast (double) x macht die Rechnung zur Kommarechnung: 3.4. Ein Strich bedeutet: Die Variable gibt es an dieser Stelle noch nicht."
   },
   {
    "typ": "trace",
    "titel": "x++ und ++x",
    "text": "x++ liefert erst den alten Wert und erhöht dann. ++x erhöht erst und liefert dann den neuen Wert.",
    "code": "int x = 5;\nint y = x++;          // A\nint z = ++x;          // B\nx += y * 2;           // C\nz -= x % 4;           // D",
    "spalten": [
     "x",
     "y",
     "z"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "6",
       "5",
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "7",
       "5",
       "7"
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "17",
       "5",
       "7"
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "17",
       "5",
       "6"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "A: y bekommt 5, danach wird x zu 6. B: x wird erst 7, dann bekommt z die 7. C: x = 7 + 5 * 2 = 17. D: 17 % 4 = 1, also z = 6."
   },
   {
    "typ": "trace",
    "titel": "char ist auch eine Zahl",
    "text": "Ein char ist intern eine Zahl ('A' ist 65). Achte darauf, wann gerechnet und wann ein String gebaut wird.",
    "code": "char c = 'A';\nint n = c + 2;              // A\nchar d = (char) n;          // B\nString s = \"\" + c + d;      // C\ns = s + (c + 1);            // D",
    "spalten": [
     "n",
     "d",
     "s"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "67",
       null,
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "67",
       "C",
       null
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "67",
       "C",
       "AC"
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "67",
       "C",
       "AC66"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "c + 2 rechnet mit der Zahl 65: n = 67. (char) 67 ist 'C'. Bei C steht links ein String, also wird angehängt: \"AC\". Bei D rechnen die Klammern zuerst c + 1 = 66 als Zahl, dann wird \"66\" angehängt: \"AC66\"."
   },
   {
    "typ": "trace",
    "titel": "String-Methoden",
    "text": "Zähle die Positionen ab 0. substring(von, bis) nimmt von einschließlich bis ausschließlich.",
    "code": "String w = \"Informatik\";\nint len = w.length();             // A\nString t = w.substring(2, 5);     // B\nchar c = w.charAt(len - 1);       // C\nboolean b = t.equals(\"for\");      // D",
    "spalten": [
     "len",
     "t",
     "c",
     "b"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "10",
       null,
       null,
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "10",
       "for",
       null,
       null
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "10",
       "for",
       "k",
       null
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "10",
       "for",
       "k",
       "true"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "\"Informatik\" hat 10 Zeichen, Positionen 0 bis 9. substring(2, 5) nimmt Position 2, 3, 4: \"for\". charAt(9) ist das letzte Zeichen 'k'. equals vergleicht den Inhalt: true."
   },
   {
    "typ": "parsons",
    "titel": "Durchschnitt als Kommazahl",
    "text": "Berechne den Durchschnitt von drei ganzen Zahlen als double und gib ihn aus. Erwartet: Schnitt: 6.333333333333333",
    "zeilen": [
     "int a = 4;",
     "int b = 7;",
     "int c = 8;",
     "int summe = a + b + c;",
     "double schnitt = summe / 3.0;",
     "System.out.println(\"Schnitt: \" + schnitt);"
    ],
    "frei": [
     [
      0,
      1,
      2
     ]
    ],
    "ablenker": [
     {
      "zeile": "double schnitt = summe / 3;",
      "warum": "summe / 3 sind zwei int: Ganzzahldivision, Ergebnis 6.0 statt 6.33. Mit 3.0 wird als Kommazahl gerechnet."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n    // ... deine Zeilen ...\n    }\n}",
    "ausgabe": "Schnitt: 6.333333333333333"
   },
   {
    "typ": "parsons",
    "titel": "Gerade und zweistellig?",
    "text": "Prüfe, ob n gerade UND zweistellig ist, und gib das Ergebnis aus (true).",
    "zeilen": [
     "int n = 42;",
     "boolean gerade = n % 2 == 0;",
     "boolean zweistellig = n >= 10 && n <= 99;",
     "boolean beides = gerade && zweistellig;",
     "System.out.println(beides);"
    ],
    "frei": [
     [
      1,
      2
     ]
    ],
    "ablenker": [
     {
      "zeile": "boolean gerade = n / 2 == 0;",
      "warum": "n / 2 ist die Hälfte, nicht der Rest. Gerade heißt: Rest 0 beim Teilen durch 2, also n % 2 == 0."
     },
     {
      "zeile": "boolean zweistellig = 10 <= n <= 99;",
      "warum": "Mathematisch richtig, in Java ein Compilerfehler. Zwei Vergleiche verbindet man mit &&."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n    // ... deine Zeilen ...\n    }\n}",
    "ausgabe": "true"
   },
   {
    "typ": "parsons",
    "titel": "Sekunden in Stunden, Minuten, Sekunden",
    "text": "Rechne 3725 Sekunden um. Erwartet: 1:2:5",
    "zeilen": [
     "int sekunden = 3725;",
     "int h = sekunden / 3600;",
     "int rest = sekunden % 3600;",
     "int m = rest / 60;",
     "int s = rest % 60;",
     "System.out.println(h + \":\" + m + \":\" + s);"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "int m = sekunden / 60;",
      "warum": "Das wären alle Minuten (62), auch die, die schon in der Stunde stecken. Erst den Rest nach den Stunden nehmen."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n    // ... deine Zeilen ...\n    }\n}",
    "ausgabe": "1:2:5"
   },
   {
    "typ": "papier",
    "titel": "Celsius in Fahrenheit",
    "text": "Schreib eine Methode static double fahrenheit(double celsius), die nach F = C · 9/5 + 32 umrechnet. Rufe sie in main für 25 auf und gib das Ergebnis aus (77.0).",
    "code": null,
    "punkte": 4,
    "minuten": 5,
    "loesung": "static double fahrenheit(double celsius) {\n    return celsius * 9 / 5 + 32;\n}",
    "test": "System.out.println(fahrenheit(25));\nSystem.out.println(fahrenheit(-40));",
    "testAusgabe": "77.0\n-40.0",
    "checkliste": [
     "Rückgabetyp double und return statt println in der Methode",
     "Keine Ganzzahldivision: celsius * 9 / 5 oder 9.0 / 5, aber NICHT 9 / 5 * celsius (9 / 5 ist 1)",
     "Methode ist static, damit main sie ohne Objekt aufrufen kann",
     "Aufruf in main: System.out.println(fahrenheit(25));"
    ]
   },
   {
    "typ": "papier",
    "titel": "Initialen aus einem Namen",
    "text": "Gegeben ist String name = \"Ada Lovelace\";. Gib die Initialen mit Punkten aus: A.L.\nDer Code soll für jeden Namen aus Vor- und Nachname mit genau einem Leerzeichen funktionieren.",
    "code": null,
    "punkte": 5,
    "minuten": 6,
    "loesung": "String name = \"Ada Lovelace\";\nint leer = name.indexOf(' ');\nchar vor = name.charAt(0);\nchar nach = name.charAt(leer + 1);\nSystem.out.println(vor + \".\" + nach + \".\");",
    "test": null,
    "testAusgabe": "A.L.",
    "checkliste": [
     "Position des Leerzeichens mit indexOf(' ') oder indexOf(\" \") gesucht, nicht fest 3 eingesetzt",
     "Nachname beginnt bei leer + 1",
     "charAt liefert char; ausgegeben mit \".\" dazwischen, damit ein String entsteht",
     "Falle bedacht: vor + nach ohne String dazwischen wäre eine Zahl (65 + 76)"
    ]
   }
  ],
  "k2": [
   {
    "typ": "trace",
    "titel": "for-Schleife: Summe der Quadrate",
    "text": "Trag bei A nach jedem Schleifendurchlauf i und summe ein.",
    "code": "int summe = 0;\nfor (int i = 1; i <= 4; i++) {\n    summe += i * i;       // A\n}\nSystem.out.println(summe);",
    "spalten": [
     "i",
     "summe"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "1",
       "1"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "5"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "3",
       "14"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "4",
       "30"
      ]
     }
    ],
    "ausgabe": "30",
    "erklaerung": "Die Schleife läuft für i = 1, 2, 3, 4. Nach dem Durchlauf mit i = 4 wird i zu 5, die Bedingung 5 <= 4 ist false, Schluss. Darum taucht i = 5 in der Tabelle nicht auf."
   },
   {
    "typ": "trace",
    "titel": "while: Collatz-Folge",
    "text": "Ist n gerade, wird es halbiert, sonst 3n + 1. Wie viele Schritte bis 1?",
    "code": "int n = 6;\nint schritte = 0;\nwhile (n != 1) {\n    if (n % 2 == 0) {\n        n = n / 2;\n    } else {\n        n = 3 * n + 1;\n    }\n    schritte++;           // A\n}",
    "spalten": [
     "n",
     "schritte"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "3",
       "1"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "10",
       "2"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "5",
       "3"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "16",
       "4"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "8",
       "5"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "4",
       "6"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "7"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "1",
       "8"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1. Acht Durchläufe. Sobald n = 1 ist, wird die Bedingung n != 1 false und die Schleife endet."
   },
   {
    "typ": "trace",
    "titel": "Maximum und seine Position",
    "text": "Die Schleife beginnt bei i = 1, weil a[0] schon der Startwert ist.",
    "code": "int[] a = {3, 1, 4, 1, 5};\nint max = a[0];\nint pos = 0;\nfor (int i = 1; i < a.length; i++) {\n    if (a[i] > max) {\n        max = a[i];\n        pos = i;\n    }                     // A\n}",
    "spalten": [
     "i",
     "max",
     "pos"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "1",
       "3",
       "0"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "4",
       "2"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "3",
       "4",
       "2"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "4",
       "5",
       "4"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "Nur wenn a[i] echt größer ist, ändern sich max und pos. Bei i = 3 ist a[3] = 1 nicht größer als 4, also bleibt alles."
   },
   {
    "typ": "trace",
    "titel": "Arrays sind Referenzen",
    "text": "b = a kopiert nur den Verweis (beide zeigen auf dasselbe Array). clone() legt ein neues Array an.",
    "code": "int[] a = {1, 2, 3};\nint[] b = a;\nint[] c = a.clone();\nb[0] = 9;                     // A\nc[1] = 7;                     // B\na = new int[] {0, 0, 0};      // C",
    "spalten": [
     "a",
     "b",
     "c"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "[9, 2, 3]",
       "[9, 2, 3]",
       "[1, 2, 3]"
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "[9, 2, 3]",
       "[9, 2, 3]",
       "[1, 7, 3]"
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "[0, 0, 0]",
       "[9, 2, 3]",
       "[1, 7, 3]"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "A: Über b wird das gemeinsame Array geändert, a sieht die 9 auch. B: c ist eine eigene Kopie, a und b bleiben. C: a zeigt jetzt auf ein neues Array, b zeigt weiter auf das alte [9, 2, 3]."
   },
   {
    "typ": "trace",
    "titel": "continue und break",
    "text": "continue springt zum nächsten Durchlauf, break verlässt die Schleife ganz. A wird nur erreicht, wenn keins von beiden gegriffen hat.",
    "code": "int s = 0;\nfor (int i = 0; i < 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    if (s > 10) {\n        break;\n    }\n    s += i;               // A\n}\nSystem.out.println(s);",
    "spalten": [
     "i",
     "s"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "1",
       "1"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "3"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "4",
       "7"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "5",
       "12"
      ]
     }
    ],
    "ausgabe": "12",
    "erklaerung": "i = 0 und 3 werden übersprungen (Vielfache von 3). Nach i = 5 ist s = 12. Bei i = 6 wieder continue, bei i = 7 ist s > 10 und break beendet alles."
   },
   {
    "typ": "trace",
    "titel": "Rekursion: Fakultät auf dem Rückweg",
    "text": "A wird erst erreicht, wenn der rekursive Aufruf zurückgekommen ist. In welcher Reihenfolge?",
    "code": "static int f(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    int r = n * f(n - 1);   // A\n    return r;\n}\n\n// in main:\nint x = f(4);\nSystem.out.println(x);",
    "spalten": [
     "n",
     "r"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "2",
       "2"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "3",
       "6"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "4",
       "24"
      ]
     }
    ],
    "ausgabe": "24",
    "erklaerung": "f(4) ruft f(3), das ruft f(2), das ruft f(1). f(1) liefert sofort 1. Erst dann rechnet f(2) fertig (r = 2), dann f(3) (r = 6), zuletzt f(4) (r = 24). Die innerste Ebene wird zuerst fertig."
   },
   {
    "typ": "parsons",
    "titel": "Gerade Zahlen im Array zählen",
    "text": "Die Methode zählt, wie viele Werte im Array gerade sind. Für {4, 7, 10, 3, 8} kommt 3 heraus.",
    "zeilen": [
     "static int zaehleGerade(int[] a) {",
     "int anzahl = 0;",
     "for (int x : a) {",
     "if (x % 2 == 0) {",
     "anzahl++;",
     "}",
     "}",
     "return anzahl;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "int anzahl;",
      "warum": "Lokale Variablen haben keinen Startwert. anzahl++ auf eine nicht initialisierte Variable ist ein Compilerfehler."
     },
     {
      "zeile": "for (int i = 0; i <= a.length; i++) {",
      "warum": "Mit <= greift die Schleife auf a[a.length] zu, das gibt es nicht: ArrayIndexOutOfBoundsException."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        System.out.println(zaehleGerade(new int[] {4, 7, 10, 3, 8}));\n    }\n}",
    "ausgabe": "3"
   },
   {
    "typ": "parsons",
    "titel": "Array umdrehen",
    "text": "Dreh das Array an Ort und Stelle um. Aus [1, 2, 3, 4, 5] wird [5, 4, 3, 2, 1].",
    "zeilen": [
     "static void umdrehen(int[] a) {",
     "for (int i = 0; i < a.length / 2; i++) {",
     "int tmp = a[i];",
     "a[i] = a[a.length - 1 - i];",
     "a[a.length - 1 - i] = tmp;",
     "}",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "for (int i = 0; i < a.length; i++) {",
      "warum": "Läuft die Schleife über das ganze Array, wird jedes Paar zweimal getauscht und alles steht wieder wie vorher. Nur bis zur Mitte."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3, 4, 5};\n        umdrehen(a);\n        System.out.println(Arrays.toString(a));\n    }\n}",
    "ausgabe": "[5, 4, 3, 2, 1]"
   },
   {
    "typ": "parsons",
    "titel": "Quersumme rekursiv",
    "text": "Quersumme von 4721 ist 14. Die Rekursion nimmt die letzte Ziffer ab und ruft sich mit dem Rest auf.",
    "zeilen": [
     "static int quersumme(int n) {",
     "if (n < 10) {",
     "return n;",
     "}",
     "return n % 10 + quersumme(n / 10);",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "return quersumme(n) + n % 10;",
      "warum": "Ruft sich mit demselben n auf, wird also nie kleiner: StackOverflowError. Jeder Aufruf muss dem Abbruch näher kommen."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        System.out.println(quersumme(4721));\n    }\n}",
    "ausgabe": "14"
   },
   {
    "typ": "parsons",
    "titel": "Zeilensummen einer Matrix",
    "text": "Gib für jede Zeile eines 2D-Arrays die Summe zurück. Für {{1, 2, 3}, {4, 5}, {6}} kommt [6, 9, 6] heraus.",
    "zeilen": [
     "static int[] zeilenSummen(int[][] m) {",
     "int[] s = new int[m.length];",
     "for (int i = 0; i < m.length; i++) {",
     "for (int j = 0; j < m[i].length; j++) {",
     "s[i] += m[i][j];",
     "}",
     "}",
     "return s;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "for (int j = 0; j < m.length; j++) {",
      "warum": "m.length ist die Anzahl der Zeilen. Die Länge EINER Zeile ist m[i].length, und die kann je Zeile anders sein."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        int[][] m = {{1, 2, 3}, {4, 5}, {6}};\n        System.out.println(Arrays.toString(zeilenSummen(m)));\n    }\n}",
    "ausgabe": "[6, 9, 6]"
   },
   {
    "typ": "papier",
    "titel": "Palindrom prüfen",
    "text": "Schreib static boolean istPalindrom(String s). Sie liefert true, wenn s vorwärts und rückwärts gleich ist (\"otto\", \"\", \"a\"), sonst false. Groß- und Kleinschreibung zählt. Keine fertigen Methoden wie reverse benutzen.",
    "code": null,
    "punkte": 6,
    "minuten": 8,
    "loesung": "static boolean istPalindrom(String s) {\n    for (int i = 0; i < s.length() / 2; i++) {\n        if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {\n            return false;\n        }\n    }\n    return true;\n}",
    "test": "System.out.println(istPalindrom(\"otto\"));\nSystem.out.println(istPalindrom(\"anna\"));\nSystem.out.println(istPalindrom(\"Otto\"));\nSystem.out.println(istPalindrom(\"\"));\nSystem.out.println(istPalindrom(\"abc\"));",
    "testAusgabe": "true\ntrue\nfalse\ntrue\nfalse",
    "checkliste": [
     "Vergleich Zeichen für Zeichen mit charAt, von außen nach innen",
     "Gegenstück richtig berechnet: s.length() - 1 - i",
     "Schleife nur bis zur Mitte (oder ganz, aber ohne Indexfehler)",
     "return false sofort beim ersten Unterschied, return true erst NACH der Schleife",
     "Leerer String liefert true, ohne Absturz",
     "char mit != verglichen (bei char ist das richtig, bei String wäre equals nötig)"
    ]
   },
   {
    "typ": "papier",
    "titel": "Werte über einer Grenze herausfiltern",
    "text": "Schreib static int[] groesserAls(int[] a, int grenze). Sie liefert ein NEUES Array mit allen Werten aus a, die größer als grenze sind, in der ursprünglichen Reihenfolge. Das Ergebnis-Array soll genau so lang sein wie nötig. Keine ArrayList.\nBeispiel: groesserAls({5, 1, 8, 3, 9}, 4) ergibt [5, 8, 9].",
    "code": null,
    "punkte": 8,
    "minuten": 10,
    "loesung": "static int[] groesserAls(int[] a, int grenze) {\n    int anzahl = 0;\n    for (int x : a) {\n        if (x > grenze) {\n            anzahl++;\n        }\n    }\n    int[] erg = new int[anzahl];\n    int pos = 0;\n    for (int x : a) {\n        if (x > grenze) {\n            erg[pos] = x;\n            pos++;\n        }\n    }\n    return erg;\n}",
    "test": "System.out.println(Arrays.toString(groesserAls(new int[] {5, 1, 8, 3, 9}, 4)));\nSystem.out.println(Arrays.toString(groesserAls(new int[] {1, 2}, 10)));\nSystem.out.println(Arrays.toString(groesserAls(new int[] {}, 0)));",
    "testAusgabe": "[5, 8, 9]\n[]\n[]",
    "checkliste": [
     "Erst zählen, dann das Array mit genau dieser Länge anlegen (zwei Durchläufe)",
     "Eigener Zähler pos für das Ziel-Array, nicht i aus dem Quell-Array",
     "Echt größer: x > grenze",
     "Ergebnis mit return zurückgegeben, a selbst nicht verändert",
     "Funktioniert auch, wenn kein Wert passt (leeres Array, kein null)"
    ]
   },
   {
    "typ": "papier",
    "titel": "Potenz rekursiv",
    "text": "Schreib static long potenz(int basis, int exp) rekursiv, ohne Schleife und ohne Math.pow. exp ist nie negativ. potenz(2, 10) = 1024, potenz(5, 0) = 1.",
    "code": null,
    "punkte": 4,
    "minuten": 5,
    "loesung": "static long potenz(int basis, int exp) {\n    if (exp == 0) {\n        return 1;\n    }\n    return basis * potenz(basis, exp - 1);\n}",
    "test": "System.out.println(potenz(2, 10));\nSystem.out.println(potenz(5, 0));\nSystem.out.println(potenz(3, 4));",
    "testAusgabe": "1024\n1\n81",
    "checkliste": [
     "Abbruchfall exp == 0 liefert 1",
     "Rekursiver Aufruf mit exp - 1, kommt also dem Abbruch näher",
     "Ergebnis des Aufrufs wird mit basis multipliziert und zurückgegeben",
     "Keine Schleife, kein Math.pow"
    ]
   },
   {
    "typ": "papier",
    "titel": "Code verändern: Dreieck auf dem Kopf",
    "text": "Dieser Code gibt ein Dreieck aus (1, 2, 3, 4 Sterne). Ändere ihn so, dass das Dreieck auf dem Kopf steht: erst 4 Sterne, dann 3, 2, 1. Schreib nur den geänderten Code auf.",
    "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 0; j < i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
    "punkte": 4,
    "minuten": 6,
    "loesung": "for (int i = 4; i >= 1; i--) {\n    for (int j = 0; j < i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
    "test": null,
    "testAusgabe": "****\n***\n**\n*",
    "checkliste": [
     "Äußere Schleife zählt rückwärts: Start 4, Bedingung i >= 1, i--",
     "Innere Schleife unverändert: sie druckt i Sterne",
     "print in der inneren, println nach der inneren Schleife",
     "Andere richtige Lösung: äußere Schleife lassen und innen j < 5 - i"
    ]
   }
  ],
  "k3": [
   {
    "typ": "trace",
    "titel": "Zwei Variablen, ein Objekt",
    "text": "k2 = k1 kopiert keinen Kontostand, sondern den Verweis. Ab dann ändern beide Namen dasselbe Objekt, bis einer neu zugewiesen wird.",
    "code": "class Konto {\n    private int stand;\n    Konto(int start) {\n        stand = start;\n    }\n    void einzahlen(int betrag) {\n        stand += betrag;\n    }\n    int getStand() {\n        return stand;\n    }\n}\n\n// in main:\nKonto k1 = new Konto(100);\nKonto k2 = k1;                    // A\nk2.einzahlen(50);                 // B\nk1 = new Konto(20);               // C\nk1.einzahlen(k2.getStand());      // D",
    "spalten": [
     "k1.getStand()",
     "k2.getStand()",
     "k1 == k2"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "100",
       "100",
       "true"
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "150",
       "150",
       "true"
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "20",
       "150",
       "false"
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "170",
       "150",
       "false"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "A und B: ein Objekt, zwei Namen. Die 50 über k2 sieht man auch über k1. C: k1 bekommt ein neues Objekt mit 20, k2 hält das alte mit 150. Ab jetzt ist k1 == k2 false. D: 20 + 150 = 170."
   },
   {
    "typ": "trace",
    "titel": "static: ein Zähler für alle Objekte",
    "text": "naechste ist static, gehört also der Klasse und existiert nur einmal. nummer gibt es in jedem Objekt einzeln.",
    "code": "class Ticket {\n    static int naechste = 1;\n    int nummer;\n    Ticket() {\n        nummer = naechste;\n        naechste++;\n    }\n}\n\n// in main:\nTicket a = new Ticket();      // A\nTicket b = new Ticket();      // B\nTicket c = b;                 // C\nTicket d = new Ticket();      // D",
    "spalten": [
     "Ticket.naechste",
     "a.nummer",
     "b.nummer",
     "d.nummer"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "2",
       "1",
       null,
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "3",
       "1",
       "2",
       null
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "3",
       "1",
       "2",
       null
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "4",
       "1",
       "2",
       "3"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "Jedes new erhöht den gemeinsamen Zähler. Ticket c = b erzeugt kein Objekt, darum bekommt d die Nummer 3 und nicht 4."
   },
   {
    "typ": "trace",
    "titel": "Konstruktor-Kette und dynamische Bindung",
    "text": "Keine Tabelle, nur die Ausgabe. Zwei Regeln: Der Konstruktor der Oberklasse läuft zuerst. Welche Methode läuft, entscheidet das echte Objekt, nicht der Typ der Variable.",
    "code": "class Tier {\n    Tier() {\n        System.out.println(\"Tier gebaut\");\n    }\n    String laut() {\n        return \"...\";\n    }\n    void sprich() {\n        System.out.println(laut());\n    }\n}\nclass Hund extends Tier {\n    Hund() {\n        super();\n        System.out.println(\"Hund gebaut\");\n    }\n    String laut() {\n        return \"Wuff\";\n    }\n}\n\n// in main:\nTier t = new Hund();\nt.sprich();\nTier u = new Tier();\nu.sprich();",
    "spalten": [],
    "zeilen": [],
    "ausgabe": "Tier gebaut\nHund gebaut\nWuff\nTier gebaut\n...",
    "erklaerung": "new Hund() ruft zuerst den Tier-Konstruktor (super()), dann den Rest des Hund-Konstruktors. t.sprich() steht nur in Tier, ruft aber laut() auf dem echten Objekt auf, einem Hund: Wuff. u ist wirklich ein Tier: ..."
   },
   {
    "typ": "parsons",
    "titel": "Klasse Punkt",
    "text": "Bau die Klasse Punkt mit privaten Attributen, Konstruktor, Getter und toString. main gibt (3, 4) und dann 3 aus.",
    "zeilen": [
     "class Punkt {",
     "private int x;",
     "private int y;",
     "Punkt(int x, int y) {",
     "this.x = x;",
     "this.y = y;",
     "}",
     "int getX() {",
     "return x;",
     "}",
     "public String toString() {",
     "return \"(\" + x + \", \" + y + \")\";",
     "}",
     "}"
    ],
    "frei": [
     [
      1,
      2
     ],
     [
      4,
      5
     ]
    ],
    "ablenker": [
     {
      "zeile": "x = x;",
      "warum": "Im Konstruktor verdeckt der Parameter x das Attribut x. x = x weist den Parameter sich selbst zu, das Attribut bleibt 0. Darum this.x = x."
     },
     {
      "zeile": "void Punkt(int x, int y) {",
      "warum": "Ein Konstruktor hat KEINEN Rückgabetyp. Mit void ist es eine normale Methode, die new nie aufruft."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n        Punkt p = new Punkt(3, 4);\n        System.out.println(p);\n        System.out.println(p.getX());\n    }\n}\n    // ... deine Zeilen ...",
    "ausgabe": "(3, 4)\n3"
   },
   {
    "typ": "parsons",
    "titel": "Abstrakte Klasse und Unterklasse",
    "text": "Form hat eine abstrakte Methode flaeche(). Kreis erbt davon und rechnet die Fläche aus. main gibt 3.14 aus.",
    "zeilen": [
     "abstract class Form {",
     "abstract double flaeche();",
     "}",
     "class Kreis extends Form {",
     "private double r;",
     "Kreis(double r) {",
     "this.r = r;",
     "}",
     "double flaeche() {",
     "return Math.PI * r * r;",
     "}",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "class Kreis implements Form {",
      "warum": "implements gilt für Interfaces. Form ist eine abstrakte Klasse, davon erbt man mit extends."
     },
     {
      "zeile": "abstract double flaeche() {",
      "warum": "Eine abstrakte Methode hat keinen Rumpf, nur den Kopf mit Semikolon."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n        Form f = new Kreis(1);\n        System.out.println(Math.round(f.flaeche() * 100) / 100.0);\n    }\n}\n    // ... deine Zeilen ...",
    "ausgabe": "3.14"
   },
   {
    "typ": "parsons",
    "titel": "equals richtig überschreiben",
    "text": "Zwei Brüche sind gleich, wenn sie denselben Wert haben (1/2 und 2/4). Ergänze equals in der Klasse Bruch. main gibt true und false aus.",
    "zeilen": [
     "public boolean equals(Object o) {",
     "if (!(o instanceof Bruch)) {",
     "return false;",
     "}",
     "Bruch b = (Bruch) o;",
     "return zaehler * b.nenner == b.zaehler * nenner;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "public boolean equals(Bruch o) {",
      "warum": "Mit Parameter Bruch statt Object ist das Überladen, nicht Überschreiben. Ruft jemand equals über eine Object-Variable auf, läuft die alte Version von Object und vergleicht nur Adressen."
     },
     {
      "zeile": "return this == o;",
      "warum": "== vergleicht, ob es dasselbe Objekt ist. Gefragt ist der gleiche Wert."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n        Object a = new Bruch(1, 2);\n        System.out.println(a.equals(new Bruch(2, 4)));\n        System.out.println(a.equals(\"1/2\"));\n    }\n}\nclass Bruch {\n    int zaehler, nenner;\n    Bruch(int z, int n) {\n        zaehler = z;\n        nenner = n;\n    }\n    // ... deine Zeilen ...\n}",
    "ausgabe": "true\nfalse"
   },
   {
    "typ": "papier",
    "titel": "Klasse Artikel",
    "text": "Schreib eine Klasse Artikel mit den privaten Attributen name (String), preis (double) und menge (int).\n1. Konstruktor mit allen drei Werten. Ist menge negativ, wird 0 gespeichert.\n2. Getter getName().\n3. Methode gesamtpreis(), die preis · menge liefert.\n4. toString(), die zum Beispiel Stift x3 = 4.5 liefert.",
    "code": null,
    "punkte": 8,
    "minuten": 10,
    "loesung": "class Artikel {\n    private String name;\n    private double preis;\n    private int menge;\n\n    Artikel(String name, double preis, int menge) {\n        this.name = name;\n        this.preis = preis;\n        if (menge < 0) {\n            this.menge = 0;\n        } else {\n            this.menge = menge;\n        }\n    }\n\n    String getName() {\n        return name;\n    }\n\n    double gesamtpreis() {\n        return preis * menge;\n    }\n\n    public String toString() {\n        return name + \" x\" + menge + \" = \" + gesamtpreis();\n    }\n}",
    "test": "Artikel a = new Artikel(\"Stift\", 1.5, 3);\nSystem.out.println(a);\nSystem.out.println(a.getName());\nSystem.out.println(new Artikel(\"Heft\", 2.0, -4));",
    "testAusgabe": "Stift x3 = 4.5\nStift\nHeft x0 = 0.0",
    "checkliste": [
     "Alle Attribute private, mit Typ",
     "Konstruktor ohne Rückgabetyp, heißt genau wie die Klasse",
     "this.name = name, wo Parameter und Attribut gleich heißen",
     "Negative Menge abgefangen (if oder Math.max(0, menge))",
     "Getter und gesamtpreis mit return und passendem Rückgabetyp",
     "toString ist public, liefert String (return, kein println)"
    ]
   },
   {
    "typ": "papier",
    "titel": "Interface Fahrzeug",
    "text": "1. Schreib ein Interface Fahrzeug mit der Methode int raeder().\n2. Zwei Klassen Auto (4 Räder) und Fahrrad (2 Räder), die es implementieren.\n3. Eine Methode static int alleRaeder(Fahrzeug[] f), die die Räder aller Fahrzeuge im Array zusammenzählt.",
    "code": null,
    "punkte": 8,
    "minuten": 10,
    "loesung": "interface Fahrzeug {\n    int raeder();\n}\n\nclass Auto implements Fahrzeug {\n    public int raeder() {\n        return 4;\n    }\n}\n\nclass Fahrrad implements Fahrzeug {\n    public int raeder() {\n        return 2;\n    }\n}\n\nclass Werkstatt {\n    static int alleRaeder(Fahrzeug[] f) {\n        int summe = 0;\n        for (Fahrzeug x : f) {\n            summe += x.raeder();\n        }\n        return summe;\n    }\n}",
    "test": "Fahrzeug[] f = {new Auto(), new Fahrrad(), new Auto()};\nSystem.out.println(Werkstatt.alleRaeder(f));",
    "testAusgabe": "10",
    "checkliste": [
     "interface mit Methodenkopf und Semikolon, ohne Rumpf",
     "Klassen mit implements Fahrzeug",
     "Implementierte Methode ist public (Interface-Methoden sind automatisch public)",
     "Array-Typ Fahrzeug[]: Auto und Fahrrad passen beide hinein",
     "Schleife ruft x.raeder() auf, dynamische Bindung wählt die richtige Version"
    ]
   },
   {
    "typ": "papier",
    "titel": "Fortlaufende Mitgliedsnummer",
    "text": "Schreib eine Klasse Mitglied. Jedes neue Mitglied bekommt automatisch eine Nummer: das erste 1, das zweite 2 und so weiter. Die Nummer soll man lesen, aber nicht von außen ändern können. Außerdem: eine Klassenmethode anzahl(), die sagt, wie viele Mitglieder es gibt.",
    "code": null,
    "punkte": 5,
    "minuten": 6,
    "loesung": "class Mitglied {\n    private static int zaehler = 0;\n    private final int nummer;\n\n    Mitglied() {\n        zaehler++;\n        nummer = zaehler;\n    }\n\n    int getNummer() {\n        return nummer;\n    }\n\n    static int anzahl() {\n        return zaehler;\n    }\n}",
    "test": "Mitglied a = new Mitglied();\nMitglied b = new Mitglied();\nSystem.out.println(a.getNummer() + \" \" + b.getNummer());\nSystem.out.println(Mitglied.anzahl());",
    "testAusgabe": "1 2\n2",
    "checkliste": [
     "Zähler ist static (einer für alle), Nummer nicht static (eine pro Objekt)",
     "Beides private, Lesen nur über Getter",
     "Zähler im Konstruktor erhöht und der Nummer zugewiesen",
     "anzahl() ist static und wird über Mitglied.anzahl() aufgerufen",
     "Bonus: final bei nummer, damit sie nach dem Konstruktor fest ist"
    ]
   }
  ],
  "k4": [
   {
    "typ": "trace",
    "titel": "Binäre Suche Schritt für Schritt",
    "text": "Gesucht ist 23. Bei A trägst du in jedem Durchlauf die Grenzen, die Mitte und den Wert in der Mitte ein.",
    "code": "int[] a = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\nint ziel = 23;\nint links = 0;\nint rechts = a.length - 1;\nwhile (links <= rechts) {\n    int mitte = (links + rechts) / 2;     // A\n    if (a[mitte] == ziel) {\n        break;\n    } else if (a[mitte] < ziel) {\n        links = mitte + 1;\n    } else {\n        rechts = mitte - 1;\n    }\n}",
    "spalten": [
     "links",
     "rechts",
     "mitte",
     "a[mitte]"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "0",
       "9",
       "4",
       "16"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "5",
       "9",
       "7",
       "56"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "5",
       "6",
       "5",
       "23"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "(0 + 9) / 2 = 4, a[4] = 16 ist zu klein, also rechts weitersuchen: links = 5. (5 + 9) / 2 = 7, a[7] = 56 zu groß: rechts = 6. (5 + 6) / 2 = 5, a[5] = 23 gefunden. Drei Schritte statt sechs bei linearer Suche."
   },
   {
    "typ": "trace",
    "titel": "Bubble Sort: ein Durchlauf",
    "text": "Nur der erste Durchlauf. Nach A siehst du, wie die größte Zahl nach rechts wandert.",
    "code": "int[] a = {5, 1, 4, 2};\nfor (int j = 0; j < a.length - 1; j++) {\n    if (a[j] > a[j + 1]) {\n        int tmp = a[j];\n        a[j] = a[j + 1];\n        a[j + 1] = tmp;\n    }                   // A\n}",
    "spalten": [
     "j",
     "a"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "0",
       "[1, 5, 4, 2]"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "1",
       "[1, 4, 5, 2]"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "[1, 4, 2, 5]"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "Jeder Vergleich tauscht benachbarte Werte, wenn der linke größer ist. Die 5 wird bei jedem Schritt mitgenommen und steht nach dem Durchlauf ganz rechts. Für das ganze Sortieren braucht man bis zu n - 1 solcher Durchläufe."
   },
   {
    "typ": "trace",
    "titel": "Stack: push, pop, peek",
    "text": "Ein Stack ist ein Tellerstapel. push legt oben drauf, pop nimmt oben weg, peek schaut nur. Java zeigt den Stack mit dem obersten Element zuerst.",
    "code": "ArrayDeque<Integer> s = new ArrayDeque<>();\ns.push(3);                // A\ns.push(7);                // B\nint x = s.pop();          // C\ns.push(x * 2);            // D\ns.push(1);                // E\nint y = s.peek();         // F",
    "spalten": [
     "s",
     "x",
     "y"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "[3]",
       null,
       null
      ]
     },
     {
      "stelle": "B",
      "werte": [
       "[7, 3]",
       null,
       null
      ]
     },
     {
      "stelle": "C",
      "werte": [
       "[3]",
       "7",
       null
      ]
     },
     {
      "stelle": "D",
      "werte": [
       "[14, 3]",
       "7",
       null
      ]
     },
     {
      "stelle": "E",
      "werte": [
       "[1, 14, 3]",
       "7",
       null
      ]
     },
     {
      "stelle": "F",
      "werte": [
       "[1, 14, 3]",
       "7",
       "1"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "pop bei C nimmt die zuletzt gelegte 7 weg (LIFO: last in, first out). Bei D kommt 14 obendrauf. peek bei F liefert die oberste 1, ohne sie zu entfernen."
   },
   {
    "typ": "trace",
    "titel": "HashMap: Wörter zählen",
    "text": "getOrDefault(s, 0) liefert den bisherigen Zähler oder 0, wenn das Wort noch nicht drin ist.",
    "code": "String[] w = {\"a\", \"b\", \"a\", \"c\", \"a\"};\nHashMap<String, Integer> m = new HashMap<>();\nfor (String s : w) {\n    m.put(s, m.getOrDefault(s, 0) + 1);     // A\n}",
    "spalten": [
     "s",
     "m"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "a",
       "{a=1}"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "b",
       "{a=1, b=1}"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "a",
       "{a=2, b=1}"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "c",
       "{a=2, b=1, c=1}"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "a",
       "{a=3, b=1, c=1}"
      ]
     }
    ],
    "ausgabe": null,
    "erklaerung": "put mit einem Schlüssel, der schon drin ist, überschreibt den alten Wert. Jeder Schlüssel kommt in einer Map nur einmal vor. Hinweis: Bei HashMap ist die Reihenfolge der Ausgabe nicht garantiert, hier ist sie zufällig alphabetisch."
   },
   {
    "typ": "parsons",
    "titel": "Lineare Suche",
    "text": "Liefere die Position von x im Array oder -1, wenn x nicht vorkommt. Erwartet: 2 und -1.",
    "zeilen": [
     "static int suche(int[] a, int x) {",
     "for (int i = 0; i < a.length; i++) {",
     "if (a[i] == x) {",
     "return i;",
     "}",
     "}",
     "return -1;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "if (a[i] = x) {",
      "warum": "= ist Zuweisung, == ist Vergleich. In Java ist das ein Compilerfehler, weil int kein boolean ist."
     },
     {
      "zeile": "} else { return -1; }",
      "warum": "Dann würde die Suche schon beim ersten nicht passenden Element aufgeben. -1 erst, wenn ALLE angeschaut sind, also nach der Schleife."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        int[] a = {4, 8, 15, 16};\n        System.out.println(suche(a, 15));\n        System.out.println(suche(a, 7));\n    }\n}",
    "ausgabe": "2\n-1"
   },
   {
    "typ": "parsons",
    "titel": "Binäre Suche iterativ",
    "text": "Das Array ist sortiert. Liefere die Position von x oder -1. Erwartet: 5 und -1.",
    "zeilen": [
     "static int binaer(int[] a, int x) {",
     "int links = 0;",
     "int rechts = a.length - 1;",
     "while (links <= rechts) {",
     "int mitte = (links + rechts) / 2;",
     "if (a[mitte] == x) {",
     "return mitte;",
     "} else if (a[mitte] < x) {",
     "links = mitte + 1;",
     "} else {",
     "rechts = mitte - 1;",
     "}",
     "}",
     "return -1;",
     "}"
    ],
    "frei": [
     [
      1,
      2
     ]
    ],
    "ablenker": [
     {
      "zeile": "while (links < rechts) {",
      "warum": "Mit < wird der letzte verbleibende Kandidat (links == rechts) nie angeschaut. Suchst du z. B. das letzte Element, liefert die Methode fälschlich -1."
     },
     {
      "zeile": "links = mitte;",
      "warum": "Dann kann die Schleife hängen bleiben (links bleibt gleich). Die Mitte ist schon geprüft, also mitte + 1."
     }
    ],
    "rahmen": "public class Main {\n    // ... deine Zeilen ...\n    public static void main(String[] args) {\n        int[] a = {2, 5, 8, 12, 16, 23, 38};\n        System.out.println(binaer(a, 23));\n        System.out.println(binaer(a, 9));\n    }\n}",
    "ausgabe": "5\n-1"
   },
   {
    "typ": "parsons",
    "titel": "Verkettete Liste: hinten anhängen",
    "text": "Hänge einen neuen Knoten ans Ende der Liste. Ist die Liste leer, wird er zum Kopf. Erwartet: 1 2 3",
    "zeilen": [
     "void anhaengen(int wert) {",
     "Knoten neu = new Knoten(wert);",
     "if (kopf == null) {",
     "kopf = neu;",
     "return;",
     "}",
     "Knoten k = kopf;",
     "while (k.next != null) {",
     "k = k.next;",
     "}",
     "k.next = neu;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "while (k != null) {",
      "warum": "Dann läuft k über das Ende hinaus und ist am Schluss null. k.next = neu wirft eine NullPointerException. Man muss beim LETZTEN Knoten stehen bleiben."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n        Liste l = new Liste();\n        l.anhaengen(1);\n        l.anhaengen(2);\n        l.anhaengen(3);\n        l.ausgeben();\n    }\n}\nclass Knoten {\n    int wert;\n    Knoten next;\n    Knoten(int w) {\n        wert = w;\n    }\n}\nclass Liste {\n    Knoten kopf;\n    // ... deine Zeilen ...\n    void ausgeben() {\n        for (Knoten k = kopf; k != null; k = k.next) {\n            System.out.print(k.wert + \" \");\n        }\n        System.out.println();\n    }\n}",
    "ausgabe": "1 2 3 "
   },
   {
    "typ": "papier",
    "titel": "Selection Sort schreiben",
    "text": "Schreib static void selectionSort(int[] a), die a aufsteigend sortiert: Such im unsortierten Rest das Minimum und tausch es an den Anfang des Rests. Keine Methoden aus Arrays benutzen.",
    "code": null,
    "punkte": 8,
    "minuten": 10,
    "loesung": "static void selectionSort(int[] a) {\n    for (int i = 0; i < a.length - 1; i++) {\n        int min = i;\n        for (int j = i + 1; j < a.length; j++) {\n            if (a[j] < a[min]) {\n                min = j;\n            }\n        }\n        int tmp = a[i];\n        a[i] = a[min];\n        a[min] = tmp;\n    }\n}",
    "test": "int[] a = {29, 10, 14, 37, 13};\nselectionSort(a);\nSystem.out.println(Arrays.toString(a));\nint[] b = {};\nselectionSort(b);\nSystem.out.println(Arrays.toString(b));",
    "testAusgabe": "[10, 13, 14, 29, 37]\n[]",
    "checkliste": [
     "Äußere Schleife: Position i, an die das nächste Minimum kommt",
     "Innere Schleife beginnt bei i + 1",
     "Es wird die POSITION des Minimums gemerkt, nicht nur der Wert",
     "Tausch mit Hilfsvariable erst NACH der inneren Schleife",
     "Rückgabetyp void: das Array wird an Ort und Stelle sortiert",
     "Kein Indexfehler bei leerem Array"
    ]
   },
   {
    "typ": "papier",
    "titel": "Knoten eines Binärbaums zählen",
    "text": "Gegeben ist class Knoten { int wert; Knoten links, rechts; }. Schreib static int anzahl(Knoten k) rekursiv. Sie zählt alle Knoten im Baum unter k (k mitgezählt). Ein leerer Baum (null) hat 0 Knoten.",
    "code": null,
    "punkte": 5,
    "minuten": 6,
    "loesung": "class Knoten {\n    int wert;\n    Knoten links, rechts;\n    Knoten(int w, Knoten l, Knoten r) {\n        wert = w;\n        links = l;\n        rechts = r;\n    }\n\n    static int anzahl(Knoten k) {\n        if (k == null) {\n            return 0;\n        }\n        return 1 + anzahl(k.links) + anzahl(k.rechts);\n    }\n}",
    "test": "Knoten baum = new Knoten(8, new Knoten(3, new Knoten(1, null, null), null), new Knoten(10, null, null));\nSystem.out.println(Knoten.anzahl(baum));\nSystem.out.println(Knoten.anzahl(null));",
    "testAusgabe": "4\n0",
    "checkliste": [
     "Abbruch: k == null liefert 0 (das prüft man ZUERST, sonst NullPointerException)",
     "1 für den Knoten selbst plus beide Teilbäume",
     "Rekursion auf k.links und k.rechts",
     "Der Konstruktor in der Lösung ist nur für den Test da, er war nicht gefragt"
    ]
   },
   {
    "typ": "papier",
    "titel": "Komplexität bestimmen",
    "text": "Gib für jede Methode die Laufzeit in O-Notation an (n = a.length) und begründe in einem Satz.",
    "code": "static int m1(int[] a) {\n    return a[0] + a[a.length - 1];\n}\n\nstatic int m2(int[] a) {\n    int s = 0;\n    for (int i = 0; i < a.length; i++) {\n        for (int j = i; j < a.length; j++) {\n            s += a[j];\n        }\n    }\n    return s;\n}\n\nstatic int m3(int[] a) {\n    int s = 0;\n    for (int i = 1; i < a.length; i = i * 2) {\n        s += a[i];\n    }\n    return s;\n}",
    "punkte": 6,
    "minuten": 6,
    "loesung": "m1: O(1). Zwei Zugriffe, egal wie groß das Array ist.\nm2: O(n²). Die innere Schleife läuft n + (n-1) + ... + 1 = n(n+1)/2 Mal. Konstanten und kleinere Terme fallen weg.\nm3: O(log n). i verdoppelt sich in jedem Schritt, nach etwa log2(n) Schritten ist i >= n.",
    "test": null,
    "testAusgabe": null,
    "checkliste": [
     "m1 als O(1) erkannt",
     "m2 als O(n²) erkannt, obwohl die innere Schleife bei i beginnt",
     "m3 als O(log n) erkannt, wegen i = i * 2",
     "Jeweils mit kurzer Begründung (Anzahl Durchläufe)"
    ]
   }
  ],
  "k5": [
   {
    "typ": "trace",
    "titel": "try, catch, finally in einer Schleife",
    "text": "Bei i = 3 gibt es a[3] nicht. Achte darauf, was bei einem Fehler übersprungen wird und was trotzdem läuft.",
    "code": "int[] a = {10, 0, 5};\nint summe = 0;\nfor (int i = 0; i < 4; i++) {\n    try {\n        summe += 100 / a[i];\n        System.out.println(\"ok \" + i);\n    } catch (ArithmeticException e) {\n        System.out.println(\"durch 0\");\n    } catch (ArrayIndexOutOfBoundsException e) {\n        System.out.println(\"zu weit\");\n    } finally {\n        summe++;\n    }                   // A\n}",
    "spalten": [
     "i",
     "summe"
    ],
    "zeilen": [
     {
      "stelle": "A",
      "werte": [
       "0",
       "11"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "1",
       "12"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "2",
       "33"
      ]
     },
     {
      "stelle": "A",
      "werte": [
       "3",
       "34"
      ]
     }
    ],
    "ausgabe": "ok 0\ndurch 0\nok 2\nzu weit",
    "erklaerung": "Fliegt im try eine Exception, wird der Rest des try übersprungen (kein \"ok\") und der passende catch läuft. finally läuft IMMER, darum steigt summe in jedem Durchlauf um 1. 100/10 + 1 = 11, dann +1 = 12, dann + 100/5 + 1 = 33, dann +1 = 34."
   },
   {
    "typ": "trace",
    "titel": "finally gegen return",
    "text": "Keine Tabelle, nur die Ausgabe. Was passiert zuerst: das return oder das finally?",
    "code": "static int f(int x) {\n    try {\n        System.out.println(\"try\");\n        if (x < 0) {\n            throw new IllegalArgumentException(\"negativ\");\n        }\n        return x * 2;\n    } catch (IllegalArgumentException e) {\n        System.out.println(\"catch \" + e.getMessage());\n        return -1;\n    } finally {\n        System.out.println(\"finally\");\n    }\n}\n\n// in main:\nSystem.out.println(f(3));\nSystem.out.println(f(-2));",
    "spalten": [],
    "zeilen": [],
    "ausgabe": "try\nfinally\n6\ntry\ncatch negativ\nfinally\n-1",
    "erklaerung": "return x * 2 merkt sich den Wert 6, dann läuft finally, erst danach kommt die 6 beim Aufrufer an und wird ausgegeben. Darum steht \"finally\" VOR 6. Bei -2: throw, catch gibt die Nachricht aus, merkt sich -1, finally, dann -1."
   },
   {
    "typ": "parsons",
    "titel": "Eigene Exception werfen",
    "text": "abheben soll eine eigene checked Exception werfen, wenn zu wenig Geld da ist. Erwartet: Fehler: Nur 30 da",
    "zeilen": [
     "void abheben(int betrag) throws ZuWenigGeld {",
     "if (betrag > stand) {",
     "throw new ZuWenigGeld(\"Nur \" + stand + \" da\");",
     "}",
     "stand -= betrag;",
     "}"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "void abheben(int betrag) throw ZuWenigGeld {",
      "warum": "Im Methodenkopf heißt es throws (mit s): Es kündigt an, dass die Methode werfen KANN."
     },
     {
      "zeile": "throws new ZuWenigGeld(\"Nur \" + stand + \" da\");",
      "warum": "Im Rumpf heißt es throw (ohne s): Das wirft die Exception tatsächlich."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) {\n        Konto k = new Konto();\n        try {\n            k.abheben(50);\n        } catch (ZuWenigGeld e) {\n            System.out.println(\"Fehler: \" + e.getMessage());\n        }\n    }\n}\nclass ZuWenigGeld extends Exception {\n    ZuWenigGeld(String msg) {\n        super(msg);\n    }\n}\nclass Konto {\n    int stand = 30;\n    // ... deine Zeilen ...\n}",
    "ausgabe": "Fehler: Nur 30 da"
   },
   {
    "typ": "parsons",
    "titel": "Thread starten und warten",
    "text": "Starte einen Thread und warte, bis er fertig ist, bevor main weitermacht. Erwartet: im Thread, dann fertig.",
    "zeilen": [
     "Thread t = new Thread(() -> {",
     "System.out.println(\"im Thread\");",
     "});",
     "t.start();",
     "t.join();",
     "System.out.println(\"fertig\");"
    ],
    "frei": [],
    "ablenker": [
     {
      "zeile": "t.run();",
      "warum": "run() führt den Code im aktuellen Thread aus, es entsteht kein neuer Thread. Nur start() startet parallel."
     },
     {
      "zeile": "t.wait();",
      "warum": "wait() gehört zu Monitoren und synchronized. Auf das Ende eines Threads wartet man mit join()."
     }
    ],
    "rahmen": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n    // ... deine Zeilen ...\n    }\n}",
    "ausgabe": "im Thread\nfertig"
   },
   {
    "typ": "papier",
    "titel": "Zahl einlesen ohne Absturz",
    "text": "Schreib static int zahlOderNull(String s). Sie wandelt s mit Integer.parseInt in eine Zahl um. Ist s keine gültige Zahl, liefert sie 0, statt abzustürzen.",
    "code": null,
    "punkte": 4,
    "minuten": 5,
    "loesung": "static int zahlOderNull(String s) {\n    try {\n        return Integer.parseInt(s);\n    } catch (NumberFormatException e) {\n        return 0;\n    }\n}",
    "test": "System.out.println(zahlOderNull(\"42\"));\nSystem.out.println(zahlOderNull(\"4x2\"));\nSystem.out.println(zahlOderNull(\"-7\"));",
    "testAusgabe": "42\n0\n-7",
    "checkliste": [
     "parseInt steht im try",
     "Gefangen wird NumberFormatException (oder allgemeiner Exception)",
     "Beide Wege haben ein return",
     "Bonus: null abfangen. parseInt(null) wirft ebenfalls NumberFormatException, ist also schon abgedeckt"
    ]
   }
  ]
 },
 "projekt": {
  "k0": [
   "U1_Begruessung",
   "U2_Verkettung",
   "U3_Zeilen"
  ],
  "k1": [
   "U1_Variablen",
   "U2_Modulo",
   "U3_Casting",
   "U4_Strings"
  ],
  "k2": [
   "U1_Verzweigungen",
   "U2_Schleifen",
   "U3_Arrays",
   "U4_Methoden_Rekursion",
   "U5_2DArrays"
  ],
  "k3": [
   "U1_Konto",
   "U2_Bruch",
   "U3_Formen",
   "U4_Interface_Equals"
  ],
  "k4": [
   "U1_Suchen",
   "U2_Sortieren",
   "U3_Stack",
   "U4_Collections"
  ],
  "k5": [
   "U1_Exceptions",
   "U2_EigeneException",
   "U3_Threads"
  ]
 }
};
