// Programmieren 1 (Prof. Dr.-Ing. David Bermbach, 3S, TU Berlin), WiSe 2026/27
// Gegliedert nach Vorlesungsblöcken: Foundations, Imperative Programming, OOP, Algorithmen und Datenstrukturen, Advanced Concepts.
// Stand: 18.11.2026. Erzeugt aus scratchpad/p1check/k0.py ... k5.py (build.py).
// Jeder Code mit Ausgabe und jede Ausgabe-/Wert-/Fehlerfrage wurde mit javac/java (JDK 25) ausgeführt und abgeglichen.
// Klausur laut Kick-off und Altklausur WS24/25: schriftlich, 90 Min. + 10 Min. Einlesezeit, keine Hilfsmittel,
// „(mostly) coding on paper“, Antworten auf Deutsch oder Englisch. Zulassung: PASS/BONUS in mind. 75 % der Assignments.
// Die bewerteten Assignments (Übungsaufgaben) sind hier bewusst NICHT enthalten.

window.FAECHER = window.FAECHER || [];
window.FAECHER.push({
 "id": "prog1",
 "name": "Programmieren 1",
 "kurz": "Prog 1",
 "klausur": {
  "datum": "2027-02-17T14:00:00",
  "text": "Mi 17.02.2027, 14:00 (90 Min.), 2. Termin Fr 09.04.2027. Anmeldung bis 24.01.2027"
 },
 "quelle": "Vorlesung (Kick-off, Foundations, Skript Imperative Programming, OOP), Tutorien 0–5 mit Musterlösungen, Altklausuren WS 24/25 und WS 14/15 (ISIS)",
 "formelnTitel": "Syntax",
 "aufgabenTitel": "Übungen aus Tutorium und Altklausur",
 "anleitung": [
  "Programmieren lernst du durch Selbermachen, nicht durch Lesen. Jedes Kapitel hat oben im Lernblatt einen Kasten „Dein Weg durch dieses Kapitel“. Geh ihn der Reihe nach durch.",
  "Lektionen lesen und jedes Beispiel in IntelliJ selbst abtippen und ausführen. Nicht kopieren: In der Klausur schreibst du auf Papier, ohne IDE. Die Finger müssen die Syntax kennen.",
  "Dann der Reiter „Training“. Zuerst „Nachverfolgen“: Du führst Code im Kopf aus und trägst die Variablenwerte in eine Tabelle ein. Das ist die Grundlage für alles andere und kommt in der Klausur als „Was gibt der Code aus?“ dran.",
  "Danach „Code-Puzzle“: Die Zeilen eines Programms sind gemischt, ein oder zwei gehören nicht hinein. So lernst du den Aufbau, bevor du alles selbst schreiben musst.",
  "Dann das Übungsprojekt in IntelliJ: material/Prog1/Uebungsprojekt/ öffnen (File > Open), src als Sources Root markieren. Jede Klasse testet deine Lösung selbst. Erst wenn alle Tests „richtig“ sind, in loesungen/ vergleichen. Häng ruhig 20 Minuten an einer Aufgabe, bevor du nachschaust: Genau da lernst du am meisten.",
  "Zum Schluss „Auf Papier“: Uhr an, Stift, keine Hilfe. Danach mit der Musterlösung vergleichen und ehrlich abhaken. Mindestens einmal pro Woche, weil die Klausur auf Papier stattfindet.",
  "Quiz des Kapitels (Ziel 80 %) und ab dann täglich 10 Minuten fällige Karteikarten. Die Karten sind für Begriffe und typische Fallen (== bei Strings, Ganzzahldivision, Off-by-one), nicht für Syntax. Syntax lernst du durchs Schreiben, der Reiter „Syntax“ ist nur zum Nachschlagen."
 ],

 "kapitel": [
  {
   "id": "k0",
   "titel": "Kapitel 0: Start – vom Algorithmus zum ersten Programm",
   "abschnitt": "VL ab 15.10.2026 (Kick-off, Foundations), Tutorium 0 und 1 ab 26.10.",
   "seiten": "Folien 00-KickOff, 01-Foundations, Skript Imperative Programming Abschnitt 1, Tutorium 0 (Intro IntelliJ), Tutorium 1 (Grundlagen)",
   "kurz": [
     "Algorithmus: endliche Folge eindeutiger Anweisungen, die ein Problem löst.",
     "javac übersetzt .java in Bytecode (.class), die JVM führt ihn aus. Start mit java HelloWorld, ohne Endung.",
     "Jedes Programm braucht public static void main(String[] args). Die public class heißt wie die Datei.",
     "Anweisungen enden mit Semikolon, Blöcke stehen in { }. Java unterscheidet Groß- und Kleinschreibung.",
     "+ verkettet von links nach rechts: „x“ + 1 + 2 ergibt x12.",
     "Drei Fehlerarten: Compilerfehler (kein gültiges Java), Laufzeitfehler (Exception), logischer Fehler (läuft, rechnet aber falsch)."
   ],
   "quellen": [
    {
     "name": "Vorlesung 0: Kick-off",
     "pfad": "material/Prog1/Vorlesung/P1_00-KickOff.pdf"
    },
    {
     "name": "Vorlesung 1: Foundations",
     "pfad": "material/Prog1/Vorlesung/P1_01-Foundations.pdf"
    },
    {
     "name": "Skript: Imperative Programming",
     "pfad": "material/Prog1/Vorlesung/P1_02-Skript_Imperative_Programming.pdf"
    },
    {
     "name": "Tutorium 0: Intro IntelliJ",
     "pfad": "material/Prog1/Tutorien/P1_00_Intro_IntelliJ.pdf"
    },
    {
     "name": "Tutorium 1: Grundlagen",
     "pfad": "material/Prog1/Tutorien/P1_Prog1_TUT1_Grundlagen.pdf"
    },
    {
     "name": "Code: HelloWorld-Projekt (Zip)",
     "pfad": "material/Prog1/Code/P1_HelloWorld.zip"
    }
   ],
   "lektionen": [
    {
     "titel": "Was ist ein Algorithmus?",
     "text": [
      "Programmieren heißt: einem Computer genau sagen, was er tun soll. Ein Computer ist dabei sehr fleißig, aber dumm. Er versteht keine Andeutungen. Alles muss Schritt für Schritt und eindeutig dastehen, wie ein Kochrezept für jemanden, der noch nie gekocht hat.",
      "So eine Schrittfolge heißt Algorithmus: eine endliche Folge von eindeutigen Anweisungen, die ein Problem löst. Endlich heißt: Sie hört irgendwann auf. Eindeutig heißt: Jeder Schritt lässt nur eine Deutung zu. Ein Algorithmus hat meist eine Eingabe (input, was hineingeht, beim Rezept die Zutaten) und eine Ausgabe (output, was herauskommt, das fertige Gericht).",
      "Beispiel aus der Vorlesung: die kleinste Zahl in einer Menge finden. Nimm die erste Zahl als bisheriges Minimum. Vergleiche sie mit der nächsten. Ist die kleiner, merk dir die. Weiter bis zur letzten Zahl.",
      "Man kann einen Algorithmus in normaler Sprache, als Pseudocode (strukturierte Beschreibung in Stichworten, keine echte Programmiersprache), als Flussdiagramm (Kästchen und Pfeile) oder als Programmcode aufschreiben. Unten lässt du den Computer erst einmal nur die Schritte ausgeben, die du dir ausgedacht hast. Wie der Computer selbst rechnet und vergleicht, lernst du in Kapitel 1 und 2. Was System.out.println bedeutet, kommt in Lektion 4. Für jetzt: Es schreibt den Text in den Anführungszeichen auf den Bildschirm."
     ],
     "code": "System.out.println(\"Zahlen: 7, 3, 9\");\nSystem.out.println(\"Schritt 1: bisheriges Minimum ist 7\");\nSystem.out.println(\"Schritt 2: 3 ist kleiner als 7, neues Minimum 3\");\nSystem.out.println(\"Schritt 3: 9 ist nicht kleiner als 3, Minimum bleibt 3\");\nSystem.out.println(\"Ergebnis: 3\");",
     "ausgabe": "Zahlen: 7, 3, 9\nSchritt 1: bisheriges Minimum ist 7\nSchritt 2: 3 ist kleiner als 7, neues Minimum 3\nSchritt 3: 9 ist nicht kleiner als 3, Minimum bleibt 3\nErgebnis: 3",
     "merke": "Ein Algorithmus ist endlich, eindeutig und hat meist Eingabe und Ausgabe."
    },
    {
     "titel": "Vom Quellcode zur Ausführung: Compiler, Bytecode, JVM",
     "text": [
      "Die CPU (Prozessor) versteht nur Maschinencode, also Nullen und Einsen. Du schreibst aber Quellcode (source code), lesbaren Text. Irgendwer muss übersetzen.",
      "Es gibt zwei klassische Wege. Ein Compiler übersetzt den ganzen Quellcode einmal in Maschinencode. Das ist schnell bei der Ausführung, muss aber für jede Plattform neu übersetzt werden. Ein Interpreter übersetzt Zeile für Zeile während des Laufs. Das läuft überall, ist aber langsamer.",
      "Java kombiniert beides. Der Java-Compiler javac übersetzt deine Datei HelloWorld.java in Bytecode (HelloWorld.class). Bytecode ist noch plattformunabhängig. Die Java Virtual Machine (JVM, eine Art Übersetzer-Programm auf jedem Rechner) führt diesen Bytecode dann aus. Deshalb läuft dasselbe .class-File auf Mac, Windows und Linux.",
      "Im Terminal sieht das so aus: javac HelloWorld.java erzeugt HelloWorld.class. java HelloWorld startet das Programm (ohne .class am Ende!). IntelliJ macht beide Schritte für dich, wenn du auf den grünen Play-Pfeil klickst.",
      "Alltagsvergleich: Der Compiler ist wie ein Übersetzer, der ein ganzes Buch einmal übersetzt. Der Interpreter ist wie ein Dolmetscher, der Satz für Satz live übersetzt. Java übersetzt erst in eine Zwischensprache (Bytecode), die jede JVM vor Ort versteht, so wie ein Buch auf Englisch, das überall auf der Welt jemand vorlesen kann."
     ],
     "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
     "ausgabe": "Hello, World!",
     "merke": "javac übersetzt .java in Bytecode (.class), java startet die JVM, die den Bytecode ausführt."
    },
    {
     "titel": "Aufbau eines Java-Programms: class, main, Blöcke",
     "text": [
      "Zeile 1: public class HelloWorld. In Java steht jeder ausführbare Code in einer Klasse (class). Was Klassen genau sind, kommt in Kapitel 3. Für jetzt: Die public class muss genau so heißen wie die Datei. public class HelloWorld gehört in HelloWorld.java. Java unterscheidet Groß- und Kleinschreibung (case-sensitive): helloworld ist etwas anderes als HelloWorld.",
      "Zeile 2: public static void main(String[] args). Das ist die main-Methode, der Einstiegspunkt. Die JVM sucht genau diese Zeile und fängt dort an. Schreib sie am Anfang einfach jedes Mal so ab. In Kapitel 2 verstehst du jedes Wort.",
      "Geschweifte Klammern { } öffnen und schließen einen Block. Der Block der Klasse umschließt den Block der main-Methode. Einrückung ist in Java nur für dich und andere Menschen da, nicht für den Compiler. Trotzdem: immer sauber einrücken. In IntelliJ macht das Code > Reformat Code.",
      "Jede Anweisung (statement) endet mit einem Semikolon. Fehlt es, meldet der Compiler einen Fehler.",
      "Begriffe kurz: Eine Klasse ist hier erst einmal einfach der Behälter für dein Programm, wie ein Ordner mit einem Namen. Eine Methode ist ein benannter Ablauf von Anweisungen, wie ein Rezept mit Überschrift. main ist das Rezept, mit dem jedes Programm anfängt. Eine Anweisung (statement) ist ein einzelner Befehl, wie ein Satz im Rezept."
     ],
     "code": "public class Banane {\n    public static void main(String[] args) {\n        System.out.println(\"Banane!\");\n        System.out.println(\"Noch eine Banane!\");\n    }\n}",
     "ausgabe": "Banane!\nNoch eine Banane!",
     "merke": "Dateiname = Name der public class, Programmstart = main-Methode, jede Anweisung endet mit ;"
    },
    {
     "titel": "Ausgabe auf der Konsole: println und print",
     "text": [
      "Die Konsole ist das Textfenster, in dem dein Programm schreibt. In IntelliJ ist sie unten. System.out.println(...) gibt aus, was in den Klammern steht, und macht danach einen Zeilenumbruch. System.out.print(...) macht keinen Zeilenumbruch. Die nächste Ausgabe landet dann in derselben Zeile.",
      "Text steht in doppelten Anführungszeichen \"...\". Das nennt man String-Literal. Zahlen kannst du direkt hineinschreiben. Ein leeres System.out.println() erzeugt nur einen Zeilenumbruch.",
      "Mit + hängst du Text und Werte aneinander. Das heißt Verkettung (concatenation). Achtung, kommt in Klausuren oft: \"1+2=\" + 1 + 2 ergibt 1+2=12, weil von links nach rechts gerechnet wird und links schon ein String steht. Mit Klammern \"1+2=\" + (1 + 2) kommt 1+2=3 heraus.",
      "System.out.println liest sich so: System (das System) . out (sein Ausgabekanal, die Konsole) . println (die Methode „print line“, schreibe eine Zeile). Der Punkt heißt jeweils „davon das ...“."
     ],
     "code": "System.out.print(\"A\");\nSystem.out.print(\"B\");\nSystem.out.println(\"C\");\nSystem.out.println();\nSystem.out.println(\"1+2=\" + 1 + 2);\nSystem.out.println(\"1+2=\" + (1 + 2));\nSystem.out.println(1 + 2 + \" ist das Ergebnis\");",
     "ausgabe": "ABC\n\n1+2=12\n1+2=3\n3 ist das Ergebnis",
     "merke": "Steht links vom + ein String, wird verkettet. Steht links eine Zahl, wird erst gerechnet."
    },
    {
     "titel": "Kommentare",
     "text": [
      "Kommentare sind Notizen für Menschen. Der Compiler ignoriert sie. Es gibt drei Arten.",
      "// Zeilenkommentar: alles nach // bis zum Zeilenende. /* Blockkommentar */: kann über mehrere Zeilen gehen. Praktisch, um zum Testen Code kurz „auszuschalten“. /** Javadoc-Kommentar */: steht vor Klassen und Methoden und beschreibt sie. Daraus erzeugt das Werkzeug javadoc eine HTML-Dokumentation (mehr in Kapitel 2)."
     ],
     "code": "// Das hier ist ein Zeilenkommentar\nSystem.out.println(\"eins\"); // Kommentar hinter einer Anweisung\n/* Diese Zeile wird nicht ausgeführt:\nSystem.out.println(\"zwei\");\n*/\nSystem.out.println(\"drei\");",
     "ausgabe": "eins\ndrei",
     "merke": "// eine Zeile, /* ... */ mehrere Zeilen, /** ... */ Javadoc."
    },
    {
     "titel": "Drei Arten von Fehlern",
     "text": [
      "Compilerfehler (Syntaxfehler): Der Code ist kein gültiges Java. javac bricht ab, es entsteht keine .class-Datei. Beispiele: fehlendes Semikolon, string statt String, Klammer vergessen, Variable nicht deklariert.",
      "Laufzeitfehler: Der Code kompiliert, aber beim Ausführen geht etwas schief. Java wirft dann eine Exception (Ausnahme) und bricht ab. Beispiele: Division einer ganzen Zahl durch 0 (ArithmeticException), Zugriff auf eine Array-Stelle, die es nicht gibt (ArrayIndexOutOfBoundsException).",
      "Logischer Fehler: Das Programm läuft, rechnet aber falsch. Der Computer merkt nichts. Den findest du nur durch Testen.",
      "In den Altklausuren gibt es fast immer eine Aufgabe: „Compilerfehler oder Laufzeitfehler? Nenne die Ursache.“ Im Beispiel unten wird „Start“ noch ausgegeben. Danach bricht das Programm mit java.lang.ArithmeticException: / by zero ab. „Ende“ erscheint nie.",
      "Eine Exception ist eine Fehlermeldung, die Java beim Ausführen erzeugt, wenn etwas Unmögliches verlangt wird. Wie ein Feueralarm unterbricht sie das Programm sofort. Wie man sie abfängt, lernst du in Kapitel 5."
     ],
     "code": "public class Fehler {\n    public static void main(String[] args) {\n        System.out.println(\"Start\");\n        int x = 10 / 0;   // kompiliert, stürzt aber beim Ausführen ab\n        System.out.println(\"Ende\");\n    }\n}",
     "ausgabe": "Start",
     "merke": "Compilerfehler: es läuft gar nicht. Laufzeitfehler: es läuft und bricht mit einer Exception ab. Logischer Fehler: es läuft und ist falsch."
    },
    {
     "titel": "IntelliJ und Kommandozeilenparameter (args)",
     "text": [
      "In IntelliJ ist ein Projekt ein Ordner mit deinem Code und Einstellungen. Deine .java-Dateien liegen im Ordner src. Neue Klasse: Rechtsklick auf src > New > Java Class. Starten: grüner Pfeil neben main. Wichtig fürs Semester: Unter Editor > General > Inline Completion die automatische Codevervollständigung ausschalten. Du sollst die Syntax selbst können, in der Klausur hast du keine IDE.",
      "main bekommt ein Array args mit den Kommandozeilenparametern. Startest du im Terminal java IntegerAdder 10 2, dann ist args[0] der Text \"10\" und args[1] der Text \"2\". In IntelliJ trägst du sie unter Run > Edit Configurations > Program arguments ein. Ohne Parameter ist args nicht null, sondern hat die Länge 0.",
      "Die Parameter sind immer Strings. Integer.parseInt(\"10\") macht daraus die Zahl 10. Das Beispiel ist das IntegerAdder-Programm aus Tutorium 0, hier ohne Parameter gestartet.",
      "Zum Code: String[] args ist eine Reihe nummerierter Fächer für Texte (ein Array, genau erklärt in Kapitel 2). args.length ist die Anzahl der Fächer. if (...) heißt „wenn die Bedingung stimmt, dann“ (Kapitel 2). return beendet main hier vorzeitig. Integer.parseInt macht aus dem Text \"10\" die Zahl 10, mit der man rechnen kann (Kapitel 1)."
     ],
     "code": "public class IntegerAdder {\n    public static void main(String[] args) {\n        System.out.println(\"Anzahl Parameter: \" + args.length);\n        if (args.length < 2) {\n            System.out.println(\"Fehler, keine Argumente gegeben.\");\n            return;\n        }\n        System.out.println(args[0] + \" + \" + args[1] + \" = \" + (Integer.parseInt(args[0]) + Integer.parseInt(args[1])));\n    }\n}",
     "ausgabe": "Anzahl Parameter: 0\nFehler, keine Argumente gegeben.",
     "merke": "args enthält die Startparameter als Strings, args.length ist ohne Parameter 0."
    },
    {
     "titel": "Zahlen im Computer: binär und hexadezimal",
     "text": [
      "Der Computer speichert alles als Bits (binary digit, 0 oder 1). 8 Bit sind ein Byte. Ganze Zahlen stehen im Binärsystem: Jede Stelle ist eine Zweierpotenz. 10110111 binär = 128 + 32 + 16 + 4 + 2 + 1 = 183. Mit 8 Bit und Vorzeichen passen die Zahlen von -128 bis 127 hinein.",
      "Kommazahlen werden als Gleitkommazahl (floating point) gespeichert, nach dem Standard IEEE 754. Dabei geht Genauigkeit verloren. Das erklärt später, warum 0.1 + 0.2 in Java nicht genau 0.3 ist.",
      "Hexadezimal (Basis 16, Ziffern 0–9 und A–F) ist kürzer zu lesen. 0x1A = 1·16 + 10 = 26. In Java schreibst du binäre Zahlen mit 0b davor und hexadezimale mit 0x davor. println gibt sie dezimal aus."
     ],
     "code": "System.out.println(0b10110111);\nSystem.out.println(0x1A);\nSystem.out.println(0b1010 + 0x10);",
     "ausgabe": "183\n26\n26",
     "merke": "Binär: Stellenwerte 1, 2, 4, 8, 16, ... ; in Java 0b... für binär und 0x... für hexadezimal."
    }
   ],
   "zusammenfassung": [
    "Algorithmus: endliche Folge eindeutiger Anweisungen zur Lösung eines Problems, meist mit Eingabe und Ausgabe. Darstellbar als Text, Pseudocode, Flussdiagramm oder Code.",
    "Compiler übersetzt einmal (schnell, plattformabhängig), Interpreter übersetzt beim Laufen (langsam, überall). Java: javac erzeugt plattformunabhängigen Bytecode (.class), die JVM führt ihn aus.",
    "Terminal: javac HelloWorld.java, dann java HelloWorld (ohne Endung). IntelliJ: grüner Play-Pfeil neben main.",
    "Jedes Programm braucht eine Klasse und eine main-Methode: public static void main(String[] args). Die public class heißt wie die Datei. Java ist case-sensitive.",
    "Anweisungen enden mit Semikolon. Blöcke stehen in { }. Einrückung ist nur für Menschen.",
    "println gibt aus und bricht die Zeile um, print nicht. + verkettet Strings; Auswertung von links nach rechts: \"x\" + 1 + 2 ergibt x12.",
    "Kommentare: // Zeile, /* Block */, /** Javadoc */.",
    "Fehlerarten: Compilerfehler (kein gültiges Java), Laufzeitfehler (Exception beim Ausführen, z. B. ArithmeticException), logischer Fehler (läuft, rechnet falsch).",
    "args enthält Kommandozeilenparameter als Strings, ohne Parameter Länge 0. Integer.parseInt wandelt in int um.",
    "Binär: Stellenwerte sind Zweierpotenzen (10110111 = 183). 1 Byte = 8 Bit. Java-Literale 0b... (binär) und 0x... (hexadezimal)."
   ],
   "karten": [
    {
     "f": "Was ist ein Algorithmus?",
     "a": "Eine endliche Folge von präzisen, eindeutigen Anweisungen, die ein Problem löst. Meist mit Eingabe und Ausgabe.",
     "q": "01-Foundations, Folie 19"
    },
    {
     "f": "Was macht javac, was macht java?",
     "a": "javac (Java-Compiler) übersetzt Quellcode (.java) in Bytecode (.class). java startet die JVM, die den Bytecode ausführt: java HelloWorld, ohne .class.",
     "q": "01-Foundations, Folie 27; Tutorium 1, Aufgabe 4"
    },
    {
     "f": "Warum ist Java plattformunabhängig?",
     "a": "Weil javac nicht Maschinencode, sondern Bytecode erzeugt. Den führt auf jedem Rechner eine JVM aus. Die JVM ist plattformabhängig, der Bytecode nicht.",
     "q": "01-Foundations, Folie 27"
    },
    {
     "f": "Compiler oder Interpreter: Vor- und Nachteile?",
     "a": "Compiler: schnelle Ausführung, Quellcode bleibt geheim, muss je Plattform neu übersetzt werden. Interpreter: übersetzt bei jedem Lauf Zeile für Zeile, langsamer, Quellcode wird mitgeliefert, läuft überall.",
     "q": "01-Foundations, Folie 26"
    },
    {
     "f": "Wie muss die Datei heißen, die public class Konto enthält?",
     "a": "Konto.java. Groß- und Kleinschreibung muss stimmen. Pro Datei höchstens eine public class.",
     "q": "Skript Imperative Programming, Abschnitt 1"
    },
    {
     "f": "Wie lautet der Kopf der main-Methode?",
     "a": "public static void main(String[] args)",
     "q": "Skript Imperative Programming, Abschnitt 1 und 10.2"
    },
    {
     "f": "Unterschied zwischen print und println?",
     "a": "println macht nach der Ausgabe einen Zeilenumbruch, print nicht.",
     "q": "Skript Imperative Programming, Abschnitt 1"
    },
    {
     "f": "Was gibt diese Zeile aus?",
     "code": "System.out.println(\"Summe: \" + 2 + 3);",
     "a": "Summe: 23. Links steht ein String, also wird verkettet. Für 5 brauchst du Klammern: \"Summe: \" + (2 + 3).",
     "q": "Skript Imperative Programming, Abschnitt 5.1"
    },
    {
     "f": "Was gibt diese Zeile aus?",
     "code": "System.out.println(2 + 3 + \" Summe\");",
     "a": "5 Summe. Von links: erst 2 + 3 = 5 (zwei Zahlen), dann wird mit dem String verkettet.",
     "q": "Skript Imperative Programming, Abschnitt 5.1"
    },
    {
     "f": "Welche drei Kommentar-Arten gibt es in Java?",
     "a": "// Zeilenkommentar, /* Blockkommentar */, /** Javadoc-Kommentar */.",
     "q": "Skript Imperative Programming, Abschnitt 1"
    },
    {
     "f": "Was ist der Unterschied zwischen Compilerfehler und Laufzeitfehler?",
     "a": "Compilerfehler: javac lehnt den Code ab, es entsteht kein Programm. Laufzeitfehler: Der Code kompiliert, beim Ausführen wird eine Exception geworfen, das Programm bricht ab.",
     "q": "Altklausur WS14/15, Aufgabe 1"
    },
    {
     "f": "Anfängerfehler: Was stimmt hier nicht?",
     "code": "public class Test {\n    public static void main(String[] args) {\n        System.out.println(\"Hallo\")\n    }\n}",
     "a": "Das Semikolon nach println(\"Hallo\") fehlt. Compilerfehler: ';' expected.",
     "q": "Tutorium 2, Aufgabe 2"
    },
    {
     "f": "Anfängerfehler: Was stimmt hier nicht?",
     "code": "public class Test {\n    public static void main(string[] args) {\n        System.out.println(\"Hallo\");\n    }\n}",
     "a": "string muss String heißen (großes S). Java ist case-sensitive. Compilerfehler: cannot find symbol.",
     "q": "Tutorium 2, Aufgabe 2"
    },
    {
     "f": "Was steht in args, wenn du java Rechner 5 7 aufrufst?",
     "a": "args.length ist 2, args[0] ist der String \"5\", args[1] der String \"7\". Zum Rechnen erst Integer.parseInt(args[0]).",
     "q": "Tutorium 0, Aufgabe 1.5; Skript Abschnitt 10.2"
    },
    {
     "f": "Wie viel ist 10110111 binär in dezimal?",
     "a": "128 + 32 + 16 + 4 + 2 + 1 = 183.",
     "q": "01-Foundations, Folie 15"
    },
    {
     "f": "Welchen Zahlenbereich hat eine 8-Bit-Ganzzahl mit Vorzeichen?",
     "a": "-128 bis 127. Das ist der Java-Typ byte.",
     "q": "01-Foundations, Folie 15"
    },
    {
     "f": "Was ist 0x1A dezimal?",
     "a": "1 · 16 + 10 = 26. 0x kennzeichnet in Java eine Hexadezimalzahl.",
     "q": "01-Foundations, Folie 17"
    },
    {
     "f": "Was darfst du laut Kick-off in Prog 1 nicht benutzen?",
     "a": "LLMs (ChatGPT und Co.), außer eine Aufgabe verlangt es ausdrücklich. Außerdem in IntelliJ die Inline Completion ausschalten. Fremden Code nur mit Quellenangabe als Kommentar.",
     "q": "00-KickOff, Folien 41–44; Tutorium 0, Aufgabe 1.7"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "System.out.print(\"Hallo \");\nSystem.out.print(\"Welt\");\nSystem.out.println(\"!\");\nSystem.out.println(\"Tschüss\");",
     "loesung": "Hallo Welt!\nTschüss",
     "erklaerung": "Zeile 1: print schreibt „Hallo “ und bleibt in der Zeile. Zeile 2: print hängt „Welt“ direkt an. Zeile 3: println hängt „!“ an und macht danach den Zeilenumbruch. Zeile 4: „Tschüss“ steht deshalb in der neuen Zeile. Ergebnis: Hallo Welt! und darunter Tschüss.",
     "q": "Skript Abschnitt 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.println(\"Ergebnis: \" + 4 + 2);",
     "loesung": "Ergebnis: 42",
     "erklaerung": "Java rechnet von links nach rechts. Schritt 1: \"Ergebnis: \" + 4. Links steht Text, also wird die 4 als Zeichen angehängt: \"Ergebnis: 4\". Schritt 2: \"Ergebnis: 4\" + 2. Wieder Text links, also anhängen: \"Ergebnis: 42\". Gerechnet wird nie, weil schon ganz links ein Text steht.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.println(4 + 2 + \" Ergebnis \" + 4 + 2);",
     "loesung": "6 Ergebnis 42",
     "erklaerung": "Von links: Schritt 1: 4 + 2, beides Zahlen, also wird gerechnet: 6. Schritt 2: 6 + \" Ergebnis \": jetzt ist ein Text dabei, also anhängen: \"6 Ergebnis \". Schritt 3 und 4: + 4 und + 2 werden nur noch angehängt: \"6 Ergebnis 42\". Merke: Ab dem ersten Text wird nur noch verkettet.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.println(\"A\" + (1 + 1) + \"B\");\nSystem.out.println('A' + 1);",
     "loesung": "A2B\n66",
     "erklaerung": "Zeile 1: Klammern zuerst: 1 + 1 = 2. Dann \"A\" + 2 + \"B\" = A2B. Zeile 2: 'A' in einfachen Anführungszeichen ist ein char, ein einzelnes Zeichen. Intern ist jedes Zeichen eine Nummer (Unicode), 'A' hat die 65. char + int rechnet mit dieser Nummer: 65 + 1 = 66. Es entsteht kein Text, weil kein String beteiligt ist.",
     "q": "Skript Abschnitt 2 und 4"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus? (Was nach dem Absturz auf der Fehlerkonsole steht, lässt du weg.)",
     "code": "public class Ablauf {\n    public static void main(String[] args) {\n        System.out.println(\"eins\");\n        System.out.println(5 / 0);\n        System.out.println(\"zwei\");\n    }\n}",
     "loesung": "eins",
     "erklaerung": "Zeile 3 gibt „eins“ aus. Zeile 4 will 5 / 0 berechnen. Mit ganzen Zahlen ist das unmöglich, Java wirft eine ArithmeticException (Feueralarm). Das Programm bricht genau hier ab. Zeile 5 wird nie erreicht. Die Fehlermeldung selbst erscheint im Fehlerkanal, nicht als normale Ausgabe.",
     "q": "Altklausur WS14/15, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.println(\"a\");\n// System.out.println(\"b\");\n/* System.out.println(\"c\"); */ System.out.println(\"d\");",
     "loesung": "a\nd",
     "erklaerung": "Zeile 1 gibt a aus. Zeile 2 beginnt mit //, die ganze Zeile ist Kommentar und wird ignoriert. Zeile 3: Der Blockkommentar /* ... */ endet vor System.out.println(\"d\"). Was danach steht, ist wieder normaler Code und wird ausgeführt: d.",
     "q": "Skript Abschnitt 1"
    },
    {
     "typ": "text",
     "frage": "Das Programm wird ohne Parameter gestartet. Was gibt es aus?",
     "code": "public class Start {\n    public static void main(String[] args) {\n        System.out.println(args.length);\n        System.out.println(\"args ist null: \" + (args == null));\n    }\n}",
     "loesung": "0\nargs ist null: false",
     "erklaerung": "Das Programm wurde ohne Parameter gestartet. Java übergibt dann trotzdem ein Array, nur eben ein leeres. Zeile 3: args.length ist 0. Zeile 4: args == null fragt, ob gar kein Array da ist. Das ist falsch (false), es ist ja ein leeres da.",
     "q": "Skript Abschnitt 10.2"
    },
    {
     "typ": "zahl",
     "frage": "Welche Zahl gibt dieser Code aus?",
     "code": "System.out.println(0b1101);",
     "loesung": 13,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "0b heißt: binäre Zahl. Stellenwerte von rechts: 1, 2, 4, 8. Die Ziffern 1101 bedeuten 1·8 + 1·4 + 0·2 + 1·1 = 13. println gibt immer dezimal aus.",
     "q": "01-Foundations, Folie 15"
    },
    {
     "typ": "zahl",
     "frage": "Welche Zahl gibt dieser Code aus?",
     "code": "System.out.println(0xFF);",
     "loesung": 255,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "0x heißt: hexadezimal (Basis 16). F steht für 15. Stellenwerte von rechts: 1, 16. FF = 15·16 + 15·1 = 255.",
     "q": "01-Foundations, Folie 17"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler? Was passiert?",
     "code": "public class Hallo {\n    public static void main(String[] args) {\n        System.out.println(\"Hallo\")\n    }\n}",
     "optionen": [
      "Compilerfehler: Semikolon fehlt",
      "Laufzeitfehler: NullPointerException",
      "Es wird Hallo ausgegeben",
      "Compilerfehler: main muss klein geschrieben werden"
     ],
     "richtig": 0,
     "erklaerung": "Jede Anweisung endet mit ;. javac meldet: ';' expected. Es entsteht keine .class-Datei.",
     "q": "Tutorium 2, Aufgabe 2"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler? Was passiert?",
     "code": "public class Hallo {\n    public static void main(String[] args) {\n        system.out.println(\"Hallo\");\n    }\n}",
     "optionen": [
      "Läuft und gibt Hallo aus",
      "Compilerfehler: system ist unbekannt, es muss System heißen",
      "Laufzeitfehler beim Ausführen",
      "Compilerfehler: Klassenname muss klein sein"
     ],
     "richtig": 1,
     "erklaerung": "Java ist case-sensitive. Die Klasse heißt System mit großem S.",
     "q": "Skript Abschnitt 1"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler? Was passiert?",
     "code": "public class Teilen {\n    public static void main(String[] args) {\n        int kuchen = 12;\n        int gaeste = 0;\n        System.out.println(kuchen / gaeste);\n    }\n}",
     "optionen": [
      "Compilerfehler: Division durch 0",
      "Ausgabe: 0",
      "Laufzeitfehler: ArithmeticException (/ by zero)",
      "Ausgabe: Infinity"
     ],
     "richtig": 2,
     "erklaerung": "Der Compiler prüft keine Werte, er kompiliert. Erst beim Ausführen wird durch 0 geteilt. Bei ganzen Zahlen (int) wirft Java dann eine ArithmeticException. Infinity gibt es nur bei Kommazahlen (double).",
     "q": "Altklausur WS14/15, Aufgabe 1"
    },
    {
     "typ": "mc",
     "frage": "Du hast die Datei Rechner.java. Welche Befehle kompilieren und starten das Programm im Terminal?",
     "optionen": [
      "java Rechner.java, dann javac Rechner",
      "javac Rechner.java, dann java Rechner",
      "javac Rechner, dann java Rechner.class",
      "run Rechner.java"
     ],
     "richtig": 1,
     "erklaerung": "javac bekommt die Quelldatei mit Endung, java bekommt den Klassennamen ohne Endung.",
     "q": "Tutorium 1, Aufgabe 4"
    },
    {
     "typ": "mc",
     "frage": "Was erzeugt javac aus HelloWorld.java?",
     "optionen": [
      "Maschinencode für den Prozessor (HelloWorld.exe)",
      "Bytecode in HelloWorld.class",
      "Eine neue Datei HelloWorld.java",
      "Nichts, javac führt das Programm direkt aus"
     ],
     "richtig": 1,
     "erklaerung": "javac erzeugt Bytecode. Den führt danach die JVM aus. Maschinencode erzeugt erst die JVM während der Ausführung.",
     "q": "01-Foundations, Folie 27"
    },
    {
     "typ": "mc",
     "frage": "Was ist die Aufgabe der Java Virtual Machine (JVM)?",
     "optionen": [
      "Sie übersetzt Quellcode in Bytecode",
      "Sie führt Bytecode auf dem jeweiligen Rechner aus",
      "Sie ist der Texteditor für Java",
      "Sie prüft den Code auf Plagiate"
     ],
     "richtig": 1,
     "erklaerung": "Der Compiler (javac) macht Quellcode zu Bytecode, die JVM führt den Bytecode aus. So läuft derselbe Bytecode auf allen Plattformen.",
     "q": "01-Foundations, Folie 27"
    },
    {
     "typ": "mc",
     "frage": "Was gehört NICHT zu einem Algorithmus im Sinne der Vorlesung?",
     "optionen": [
      "Die Anweisungen sind eindeutig",
      "Die Zahl der Anweisungen ist endlich",
      "Er darf mehrdeutige Anweisungen enthalten, die der Computer selbst auslegt",
      "Er hat meist eine Eingabe und eine Ausgabe"
     ],
     "richtig": 2,
     "erklaerung": "Computer können nichts auslegen. Jede Anweisung muss präzise und eindeutig sein.",
     "q": "01-Foundations, Folie 19"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.print(\"x\");\nSystem.out.println(\"y\");\nSystem.out.print(\"z\");\nSystem.out.println();\nSystem.out.println(\"w\");",
     "loesung": "xy\nz\nw",
     "erklaerung": "Zeile 1: xy (erst print, dann println). Zeile 2: z, das leere println() beendet sie. Zeile 3: w.",
     "q": "Skript Abschnitt 1"
    }
   ],
   "formeln": [
    {
     "name": "Grundgerüst eines Programms",
     "code": "public class Name {\n    public static void main(String[] args) {\n        // Anweisungen\n    }\n}",
     "text": "Die Datei muss Name.java heißen. Die JVM startet in main.",
     "q": "Skript Abschnitt 1"
    },
    {
     "name": "Ausgabe",
     "code": "System.out.println(\"Text\");  // mit Zeilenumbruch\nSystem.out.print(\"Text\");    // ohne Zeilenumbruch\nSystem.out.println();          // nur Zeilenumbruch",
     "text": "Text in doppelten Anführungszeichen, jede Anweisung mit ; abschließen.",
     "q": "Skript Abschnitt 1"
    },
    {
     "name": "Verkettung mit +",
     "code": "System.out.println(\"Wert: \" + x);\nSystem.out.println(\"Summe: \" + (a + b));",
     "text": "Sobald links ein String steht, hängt + an. Rechnungen in Klammern setzen.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "name": "Kommentare",
     "code": "// Zeilenkommentar\n/* Blockkommentar\n   über mehrere Zeilen */\n/** Javadoc-Kommentar vor Klasse oder Methode */",
     "text": "Der Compiler ignoriert Kommentare.",
     "q": "Skript Abschnitt 1"
    },
    {
     "name": "Kompilieren und starten im Terminal",
     "code": "javac HelloWorld.java   // erzeugt HelloWorld.class\njava HelloWorld         // startet, ohne Endung\njava Rechner 10 2       // mit Parametern in args",
     "text": "javac braucht den Dateinamen, java den Klassennamen.",
     "q": "Tutorium 1, Aufgabe 4"
    },
    {
     "name": "Kommandozeilenparameter",
     "code": "args.length                     // Anzahl Parameter\nString erster = args[0];        // erster Parameter\nint zahl = Integer.parseInt(args[0]);",
     "text": "Parameter kommen immer als String. Ohne Parameter ist args leer, nicht null.",
     "q": "Skript Abschnitt 10.2; Tutorium 0, Aufgabe 1.5"
    },
    {
     "name": "Binär- und Hex-Literale",
     "code": "int b = 0b1011;   // binär = 11\nint h = 0x1A;     // hexadezimal = 26\nint g = 1_000_000; // Unterstriche zur Lesbarkeit",
     "text": "println gibt solche Zahlen immer dezimal aus.",
     "q": "Skript Abschnitt 2; 01-Foundations, Folie 17"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 0, Aufgabe 1.2: Erstes Programm in IntelliJ",
     "q": "Tutorium 0 (Intro IntelliJ)",
     "text": "Lege in IntelliJ ein neues Projekt HelloWorld an (File > New > Project, Java). Erstelle in src die Klasse HelloWorld (Rechtsklick auf src > New > Java Class). Das Programm soll „Banane!“ ausgeben. Starte es über den Play-Pfeil. Ersetze danach „Banane“ durch deinen Namen und starte erneut.",
     "loesung": [
      "Projekt anlegen, im Ordner src die Klasse anlegen. Der Dateiname ist dann automatisch HelloWorld.java.",
      "Klassengerüst und main-Methode schreiben (selbst tippen, nicht kopieren).",
      "In main eine println-Anweisung mit dem Text in doppelten Anführungszeichen.",
      "Grüner Pfeil neben main > Run. Unten öffnet sich die Konsole mit „Banane!“."
     ],
     "loesungCode": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Banane!\");\n    }\n}"
    },
    {
     "titel": "Tutorium 1, Aufgabe 2 und 4: Im Terminal kompilieren und ausführen",
     "q": "Tutorium 1 (Grundlagen)",
     "text": "Erstelle im Terminal (macOS: Programme > Dienstprogramme > Terminal) einen Ordner prog1_tutorium, darin mit nano die Datei HelloWorld.java mit einem Hello-World-Programm. Prüfe mit java -version, ob ein JDK installiert ist. Kompiliere und starte das Programm. Schau danach mit ls, was sich im Ordner verändert hat.",
     "loesung": [
      "mkdir prog1_tutorium legt den Ordner an, cd prog1_tutorium wechselt hinein.",
      "nano HelloWorld.java öffnet den Editor. Code eintippen, mit Ctrl+O speichern, Ctrl+X beenden.",
      "java -version zeigt die installierte Java-Version (bei dir JDK 25).",
      "javac HelloWorld.java kompiliert. ls zeigt danach zusätzlich HelloWorld.class: den Bytecode.",
      "java HelloWorld startet das Programm und gibt Hello world aus."
     ],
     "loesungCode": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello world\");\n    }\n}"
    },
    {
     "titel": "Tutorium 0, Aufgabe 1.5: Kommandozeilenparameter (IntegerAdder)",
     "q": "Tutorium 0 (Intro IntelliJ); Code HelloWorld.zip",
     "text": "Importiere das Projekt HelloWorld.zip (File > Open). Starte IntegerAdder einmal ohne Parameter. Trage dann unter IntegerAdder > Edit Configurations > Program arguments „10 2“ ein und starte erneut. Erwartet: 10 + 2 = 12. Erkläre, was im Code passiert.",
     "loesung": [
      "Ohne Parameter ist args.length 0. Die if-Bedingung args.length < 2 ist wahr, das Programm gibt die Fehlermeldung aus und verlässt main mit return.",
      "Mit „10 2“ ist args[0] = \"10\" und args[1] = \"2\", beides Strings.",
      "Integer.parseInt macht daraus die Zahlen 10 und 2. Die Klammer um die Summe sorgt dafür, dass gerechnet und nicht verkettet wird.",
      "Ohne die Klammer käme 10 + 2 = 102 heraus."
     ],
     "loesungCode": "public class IntegerAdder {\n    public static void main(String[] args) {\n        if (args.length < 2) {\n            System.out.println(\"Fehler, keine Argumente gegeben.\");\n            return;\n        }\n        System.out.println(args[0] + \" + \" + args[1] + \" = \"\n                + (Integer.parseInt(args[0]) + Integer.parseInt(args[1])));\n    }\n}"
    }
   ]
  },
  {
   "id": "k1",
   "titel": "Kapitel 1: Grundlagen – Variablen, Datentypen, Operatoren, Strings",
   "abschnitt": "VL ab 22.10.2026 (Imperative Programming, Skript Abschnitt 2–6), Tutorium 2 Aufgaben 1–7, 21, 25",
   "seiten": "Skript Imperative Programming, Abschnitt 2 (Variablen), 3 (Eingabe), 4 (Typecasts), 5 (Operatoren), 6 (Math); OOP-Folien 40–48 (String, Wrapper)",
   "kurz": [
     "Variable = Name + Typ + Wert. int x = 5; heißt: rechts ausrechnen, links speichern.",
     "Ganzzahldivision schneidet ab: 7 / 2 = 3. Ein double reicht für Kommarechnung: 7 / 2.0 = 3.5.",
     "% ist der Rest: 7 % 2 = 1. x++ liefert den alten Wert, ++x den neuen.",
     "Von klein nach groß wird automatisch umgewandelt. Umgekehrt explizit: (int) 3.99 = 3, es wird abgeschnitten.",
     "Überlauf: Integer.MAX_VALUE + 1 = Integer.MIN_VALUE. double nie mit == vergleichen.",
     "Strings sind unveränderlich. Inhalt immer mit equals vergleichen, nie mit ==."
   ],
   "quellen": [
    {
     "name": "Skript: Imperative Programming",
     "pfad": "material/Prog1/Vorlesung/P1_02-Skript_Imperative_Programming.pdf"
    },
    {
     "name": "Vorlesung 3: OOP (String, Wrapper-Klassen)",
     "pfad": "material/Prog1/Vorlesung/P1_03-OOP.pdf"
    },
    {
     "name": "Tutorium 2: Imperatives Programmieren",
     "pfad": "material/Prog1/Tutorien/P1_02-imperatives-programmieren.pdf"
    },
    {
     "name": "Code: Musterlösungen Tutorium 2 (Zip)",
     "pfad": "material/Prog1/Code/P1_tut02_ml.zip"
    },
    {
     "name": "Code: Prog1Tools (IOTools)",
     "pfad": "material/Prog1/Code/P1_Prog1Tools.zip"
    }
   ],
   "lektionen": [
    {
     "titel": "Variablen: ein Karton mit Namen und Typ",
     "text": [
      "Ein Programm muss sich Werte merken. Dafür gibt es Variablen. Stell dir einen Karton vor: Er hat einen Namen (Bezeichner, identifier) und eine Größe (Typ). Du kannst etwas hineinlegen und hineinschauen.",
      "Deklaration (Variable anlegen): Typ Name; also int alter; Zuweisung (Wert hineinlegen) mit =: alter = 20; Beides zusammen: int alter = 20; Das = ist keine mathematische Gleichheit. Es heißt: Rechne rechts aus und lege das Ergebnis links in den Karton.",
      "Namen bestehen aus Buchstaben, Ziffern, Unterstrich und Dollarzeichen und beginnen mit einem Buchstaben. Konvention: lowerCamelCase und sprechend, also anzahlStudierende statt a. Schlüsselwörter wie int, class, for, do sind als Namen verboten.",
      "Eine Variable gilt nur in dem Block { }, in dem sie deklariert wurde, und in den Blöcken darin. In einem Block darf derselbe Name nicht zweimal deklariert werden. Lokale Variablen (in Methoden) haben keinen Startwert. Wer sie liest, bevor etwas zugewiesen wurde, bekommt einen Compilerfehler.",
      "Alltagsvergleich zum Typ: Ein Karton für Schuhe (int) nimmt keine Waschmaschine (Kommazahl) auf. Der Typ legt fest, was in die Variable passt und wie viel Speicher sie bekommt."
     ],
     "code": "int alter;              // Deklaration\nalter = 20;             // Zuweisung\nint naechstesJahr = alter + 1;\nalter = alter + 5;      // rechts erst rechnen (20 + 5), dann zuweisen\nSystem.out.println(alter);\nSystem.out.println(naechstesJahr);",
     "ausgabe": "25\n21",
     "merke": "= heißt „weise zu“: erst die rechte Seite ausrechnen, dann links speichern."
    },
    {
     "titel": "Die primitiven Datentypen",
     "text": [
      "Java hat acht primitive Datentypen (eingebaute Grundtypen). Ganze Zahlen: byte (8 Bit, -128 bis 127), short (16 Bit), int (32 Bit, ca. ±2,1 Milliarden), long (64 Bit). Kommazahlen: float (32 Bit) und double (64 Bit). Dazu boolean (true oder false) und char (ein einzelnes Zeichen, 16 Bit Unicode).",
      "Literale sind feste Werte im Code. 42 ist ein int, 42L ein long. 3.14 ist ein double, 3.14f ein float. 'a' (einfache Anführungszeichen) ist ein char, \"a\" (doppelte) ist ein String. Sonderzeichen in char und String: '\\n' Zeilenumbruch, '\\t' Tabulator, '\\\"' Anführungszeichen, '\\\\' Backslash.",
      "String ist kein primitiver Typ, sondern eine Klasse. Er verhält sich aber an vielen Stellen ähnlich (Literal \"...\", Verkettung mit +).",
      "Im Alltag reichen fast immer int, double, boolean, char und String.",
      "Wozu so viele Typen? Wie bei Kartons in verschiedenen Größen: Ein kleiner Typ (byte) spart Platz, ein großer (long) fasst größere Zahlen. boolean ist ein Lichtschalter mit nur zwei Stellungen (an/aus = true/false)."
     ],
     "code": "int anzahl = 42;\nlong weltbevoelkerung = 8_100_000_000L;\ndouble preis = 2.99;\nfloat f = 1.5f;\nboolean bestanden = true;\nchar note = 'A';\nString name = \"Ronja\";\nSystem.out.println(anzahl + \" \" + weltbevoelkerung + \" \" + preis + \" \" + f);\nSystem.out.println(bestanden + \" \" + note + \" \" + name);\nSystem.out.println(\"Tab:\\t|Zeilenumbruch:\\nneue Zeile\");",
     "ausgabe": "42 8100000000 2.99 1.5\ntrue A Ronja\nTab:\t|Zeilenumbruch:\nneue Zeile",
     "merke": "Ganzzahlliterale sind int, Kommaliterale sind double. 'x' ist ein char, \"x\" ein String."
    },
    {
     "titel": "Rechnen: + - * / und % (Modulo)",
     "text": [
      "Die Grundrechenarten kennst du. Es gilt Punkt vor Strich, Klammern zuerst, sonst von links nach rechts.",
      "Der wichtigste Stolperstein: Ganzzahldivision. Sind beide Operanden ganze Zahlen, ist auch das Ergebnis ganzzahlig. Die Nachkommastellen werden abgeschnitten, nicht gerundet. 7 / 2 ist 3, 11 / 5 ist 2, -7 / 2 ist -3. Ist mindestens ein Operand ein double, wird mit Komma gerechnet: 7 / 2.0 ist 3.5.",
      "Java prüft bei jedem Operator die beiden Operanden: Passen beide in int, wird in int gerechnet. Sonst in long, dann float, dann double. Deshalb ist 5.0 / 2 gleich 2.5.",
      "% (Modulo) liefert den Rest der Ganzzahldivision. 7 % 2 ist 1, 10 % 3 ist 1, 12 % 4 ist 0. Typische Anwendungen: gerade Zahl prüfen (x % 2 == 0), letzte Ziffer (x % 10), Sekunden in Minuten zerlegen. Bei negativen Zahlen hat der Rest das Vorzeichen der linken Zahl: -7 % 3 ist -1.",
      "Alltagsvergleich Modulo: 17 Bonbons auf 5 Kinder verteilen. Jedes Kind bekommt 17 / 5 = 3, übrig bleiben 17 % 5 = 2."
     ],
     "code": "System.out.println(7 / 2);\nSystem.out.println(7 / 2.0);\nSystem.out.println(7 % 2);\nSystem.out.println(-7 / 2);\nSystem.out.println(-7 % 3);\nSystem.out.println(2 + 3 * 4);\nSystem.out.println((2 + 3) * 4);\nint sekunden = 125;\nSystem.out.println(sekunden / 60 + \" min \" + sekunden % 60 + \" s\");",
     "ausgabe": "3\n3.5\n1\n-3\n-1\n14\n20\n2 min 5 s",
     "merke": "int / int schneidet ab (7 / 2 = 3). % liefert den Rest (7 % 2 = 1)."
    },
    {
     "titel": "Inkrement und Dekrement: x++ und ++x",
     "text": [
      "x++ und ++x erhöhen x um 1, x-- und --x verringern um 1. Allein in einer Zeile ist das gleich. Der Unterschied zeigt sich, wenn der Ausdruck weiterverwendet wird.",
      "Post-Inkrement x++: Der Ausdruck hat den alten Wert, danach wird x erhöht. Pre-Inkrement ++x: x wird zuerst erhöht, der Ausdruck hat den neuen Wert. Merkhilfe aus dem Skript: Steht ++ vorne, wird zuerst gezählt. Steht der Name vorne, wird zuerst gelesen.",
      "Fiese Klausurfalle: x = x++; lässt x unverändert. Rechts wird der alte Wert gemerkt, x wird erhöht, dann überschreibt die Zuweisung x wieder mit dem alten Wert."
     ],
     "code": "int x = 42;\nint a = x++;   // a = 42, danach x = 43\nint b = ++x;   // x = 44, b = 44\nint c = x--;   // c = 44, danach x = 43\nint d = --x;   // x = 42, d = 42\nSystem.out.println(a + \" \" + b + \" \" + c + \" \" + d + \" \" + x);\nint y = 5;\ny = y++;\nSystem.out.println(y);",
     "ausgabe": "42 44 44 42 42\n5",
     "merke": "x++ liefert den alten Wert, ++x den neuen. x = x++ ändert x nicht."
    },
    {
     "titel": "Zuweisung kurz: +=, -=, *=, /=, %=",
     "text": [
      "a += b ist die Kurzform von a = a + b. Das gibt es auch für -, *, / und %. Das macht Code lesbarer, wenn eine Variable schrittweise verändert wird.",
      "Eine Zuweisung ist selbst ein Ausdruck mit dem zugewiesenen Wert. Deshalb geht a = b = 5; (von rechts: b bekommt 5, dann a). Kommt selten vor, aber in Klausuren schon.",
      "Ein Detail: Bei += wird automatisch in den Typ links zurückgecastet. int i = 10; i += 2.7; ergibt 12, ohne Compilerfehler. i = i + 2.7; dagegen kompiliert nicht."
     ],
     "code": "int punkte = 10;\npunkte += 5;    // 15\npunkte -= 3;    // 12\npunkte *= 2;    // 24\npunkte /= 5;    // 4 (Ganzzahldivision)\npunkte %= 3;    // 1\nSystem.out.println(punkte);\nint a, b;\na = b = 7;\nSystem.out.println(a + b);\nint i = 10;\ni += 2.7;\nSystem.out.println(i);",
     "ausgabe": "1\n14\n12",
     "merke": "a op= b heißt a = (Typ von a) (a op b)."
    },
    {
     "titel": "Typumwandlung (Typecast): implizit und explizit",
     "text": [
      "Von klein nach groß wandelt Java automatisch um (implizit): byte → short → int → long → float → double, außerdem char → int. Der kleine Karton passt in den großen, es geht nichts verloren. int i = 'A'; ergibt 65.",
      "Von groß nach klein musst du es ausdrücklich verlangen (expliziter Cast): (Zieltyp) Wert. Dabei kann Information verloren gehen. (int) 3.99 ergibt 3, denn es wird abgeschnitten, nicht gerundet. (byte) 200 ergibt -56, weil nur die unteren 8 Bit übrig bleiben.",
      "Der Cast gilt nur für den direkt folgenden Operanden. (double) 7 / 2 ist 3.5, weil erst 7 zu 7.0 wird. (double) (7 / 2) ist 3.0, weil zuerst ganzzahlig 3 gerechnet wird.",
      "Strings sind keine Zahlen. Aus \"42\" wird eine Zahl mit Integer.parseInt(\"42\") oder Double.parseDouble(\"2.5\"). Umgekehrt geht es mit \"\" + 42 oder String.valueOf(42).",
      "Alltagsvergleich: Von klein nach groß ist, als würdest du Schuhe in einen Kühlschrankkarton legen, passt immer. Von groß nach klein musst du etwas abschneiden. Deshalb verlangt Java dann den ausdrücklichen Cast als Zeichen: „Ja, ich weiß, es kann etwas verloren gehen.“"
     ],
     "code": "double d = 3.99;\nint i = (int) d;\nSystem.out.println(i);\nSystem.out.println((char) 66);\nSystem.out.println((int) 'a');\nSystem.out.println((byte) 200);\nSystem.out.println((double) 7 / 2);\nSystem.out.println((double) (7 / 2));\nint zahl = Integer.parseInt(\"42\") + 1;\nSystem.out.println(zahl);",
     "ausgabe": "3\nB\n97\n-56\n3.5\n3.0\n43",
     "merke": "Klein → groß automatisch, groß → klein nur mit Cast. (int) schneidet Nachkommastellen ab."
    },
    {
     "titel": "Grenzen der Genauigkeit: Überlauf und Rundungsfehler",
     "text": [
      "Ein int hat nur 32 Bit. Wird der größte Wert (Integer.MAX_VALUE = 2147483647) überschritten, springt die Zahl ins Negative. Das heißt Überlauf (overflow). Java meldet dabei keinen Fehler.",
      "Kommazahlen werden binär gespeichert. Viele Dezimalbrüche wie 0.1 lassen sich binär nicht exakt darstellen. Deshalb ist 0.1 + 0.2 nicht genau 0.3. Bei sehr großen Zahlen gehen zusätzlich Stellen verloren: 1e20 + 1 ist wieder 1e20.",
      "Folge für die Praxis: double-Werte nie mit == vergleichen. Stattdessen prüfen, ob der Abstand winzig ist: Math.abs(a - b) < 0.00001. Für Geld rechnet man in Cent mit long oder mit BigDecimal.",
      "Eine Gleitkomma-Division durch 0 wirft übrigens keinen Fehler, sondern liefert Infinity (1.0 / 0) oder NaN (0.0 / 0). Nur die Ganzzahldivision durch 0 wirft eine ArithmeticException."
     ],
     "code": "int max = Integer.MAX_VALUE;\nSystem.out.println(max);\nSystem.out.println(max + 1);\ndouble summe = 0.1 + 0.2;\nSystem.out.println(summe);\nSystem.out.println(summe == 0.3);\nSystem.out.println(Math.abs(summe - 0.3) < 0.00001);\nSystem.out.println(1e20 + 1 == 1e20);\nSystem.out.println(1.0 / 0);",
     "ausgabe": "2147483647\n-2147483648\n0.30000000000000004\nfalse\ntrue\ntrue\nInfinity",
     "merke": "int läuft still über, double ist ungenau: Kommazahlen nie mit == vergleichen."
    },
    {
     "titel": "Vergleiche und logische Operatoren",
     "text": [
      "Vergleichsoperatoren liefern einen boolean: == (gleich), != (ungleich), <, >, <=, >=. Achtung: = ist Zuweisung, == ist Vergleich.",
      "Logische Operatoren verknüpfen booleans: && (UND, beide true), || (ODER, mindestens einer true), ! (NICHT, dreht um). Daneben gibt es ^ (XOR, genau einer true).",
      "&& und || sind Kurzschluss-Operatoren (short-circuit). Steht das Ergebnis nach dem linken Teil fest, wird der rechte nicht mehr ausgewertet. Bei false && ... ist das Ergebnis schon false. Das schützt vor Fehlern: n != 0 && 10 / n > 1 teilt nie durch 0. Die Varianten & und | werten immer beide Seiten aus.",
      "Eine Kette wie 3 < a < 5 gibt es in Java nicht. 3 < a ist schon ein boolean, und boolean < 5 ist ein Compilerfehler. Richtig: 3 < a && a < 5."
     ],
     "code": "int a = 4;\nSystem.out.println(a == 4);\nSystem.out.println(a != 4);\nSystem.out.println(3 < a && a < 5);\nSystem.out.println(a < 0 || a > 3);\nSystem.out.println(!(a > 3));\nint n = 0;\nSystem.out.println(n != 0 && 10 / n > 1);   // rechter Teil wird nicht ausgewertet\nint zaehler = 0;\nboolean r = (a > 10) & (++zaehler > 0);       // & wertet beide Seiten aus\nSystem.out.println(r + \" \" + zaehler);",
     "ausgabe": "true\nfalse\ntrue\ntrue\nfalse\nfalse\nfalse 1",
     "merke": "&& und || brechen ab, sobald das Ergebnis feststeht. & und | werten immer beide Seiten aus."
    },
    {
     "titel": "Die Klasse Math",
     "text": [
      "Begriffe: Eine Klasse wie Math ist hier ein Werkzeugkasten mit Namen. Eine Methode ist ein Werkzeug darin, das du mit Math.werkzeug(...) benutzt. Was in den Klammern steht, sind die Parameter (die Eingaben). Was herauskommt, heißt Rückgabewert. Wie du eigene Methoden schreibst, kommt in Kapitel 2.",
      "Mathematik-Funktionen stehen in der Klasse Math. Du rufst sie mit Math.name(...) auf. Die wichtigsten: Math.sqrt(x) Wurzel, Math.pow(a, b) Potenz a hoch b, Math.abs(x) Betrag, Math.max(a, b) und Math.min(a, b), Math.round(x) kaufmännisch runden (liefert long), Math.ceil(x) aufrunden und Math.floor(x) abrunden (liefern double), Math.random() Zufallszahl in [0, 1). Konstanten: Math.PI und Math.E.",
      "Würfeln von 1 bis 6: (int) (Math.random() * 6) + 1. Math.random() * 6 liegt in [0, 6), der Cast schneidet auf 0 bis 5 ab, +1 macht 1 bis 6.",
      "Beispiel aus dem Skript: die Hypotenuse eines rechtwinkligen Dreiecks mit Satz des Pythagoras."
     ],
     "code": "double a = 1.5, b = 2.5;\ndouble c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));\nSystem.out.println(\"Hypotenuse: \" + c);\nSystem.out.println(Math.max(3, 8) + \" \" + Math.abs(-4.5));\nSystem.out.println(Math.round(2.5) + \" \" + Math.round(2.4));\nSystem.out.println(Math.ceil(2.1) + \" \" + Math.floor(2.9));\nint wurf = (int) (Math.random() * 6) + 1;\nSystem.out.println(wurf >= 1 && wurf <= 6);",
     "ausgabe": "Hypotenuse: 2.9154759474226504\n8 4.5\n3 2\n3.0 2.0\ntrue",
     "merke": "Math.pow und Math.sqrt liefern double. Math.random() liegt in [0, 1)."
    },
    {
     "titel": "Strings: Länge, Zeichen, Teilstrings und equals",
     "text": [
      "Begriffe: Ein String ist ein Objekt, also ein Ding im Speicher, das Daten (die Zeichen) und Fähigkeiten (Methoden) mitbringt. s.length() heißt: „s, sag mir deine Länge.“ Die Klammern gehören zum Methodenaufruf. Objekte und Klassen erklärt Kapitel 3 genau. Hier reicht: Ein String ist ein Textbaustein, den man fragen kann.",
      "Ein String ist eine Zeichenkette. Wichtige Methoden: s.length() (Anzahl Zeichen), s.charAt(i) (Zeichen an Position i, gezählt ab 0), s.substring(von, bis) (Teilstring von einschließlich bis ausschließlich), s.indexOf(\"x\") (erste Position oder -1), s.toUpperCase(), s.contains(\"x\"), s.replace(\"a\", \"b\").",
      "Strings sind unveränderlich (immutable). Methoden wie toUpperCase oder replace ändern s nicht, sie liefern einen neuen String. s.toUpperCase(); allein bewirkt also nichts. Du musst das Ergebnis speichern: s = s.toUpperCase();",
      "Der häufigste Anfängerfehler: Strings mit == vergleichen. == prüft, ob es dasselbe Objekt im Speicher ist, nicht ob der Inhalt gleich ist. Für den Inhalt immer s1.equals(s2) (oder equalsIgnoreCase). Bei Literalen geht == manchmal zufällig gut, weil Java gleiche Literale zusammenlegt. Bei eingelesenen oder zusammengesetzten Strings nicht.",
      "Zum häufigen Verändern gibt es StringBuilder (oder StringBuffer, threadsicher): append hängt an, reverse dreht um, toString liefert den fertigen String.",
      "Warum ist == bei Strings gefährlich? Die Variable enthält nicht den Text selbst, sondern einen Verweis, wo der Text im Speicher liegt (wie eine Hausadresse). == vergleicht die Adressen. Zwei gleiche Briefe in zwei verschiedenen Häusern haben verschiedene Adressen. equals vergleicht den Inhalt der Briefe."
     ],
     "code": "String s = \"Programmieren\";\nSystem.out.println(s.length());\nSystem.out.println(s.charAt(0) + \" \" + s.charAt(s.length() - 1));\nSystem.out.println(s.substring(0, 7));\nSystem.out.println(s.indexOf(\"mm\") + \" \" + s.indexOf(\"x\"));\ns.toUpperCase();                 // Ergebnis wird weggeworfen\nSystem.out.println(s);\nString a = \"Java\";\nString b = new String(\"Java\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));\nStringBuilder sb = new StringBuilder(\"text\");\nsb.reverse().append(\"!\");\nSystem.out.println(sb.toString());",
     "ausgabe": "13\nP n\nProgram\n6 -1\nProgrammieren\nfalse\ntrue\ntxet!",
     "merke": "Strings immer mit equals vergleichen, nie mit ==. String-Methoden ändern den String nicht, sie liefern einen neuen."
    },
    {
     "titel": "Eingabe von der Tastatur",
     "text": [
      "Begriffe: Eine Bibliothek (library) ist fertiger Code von anderen, den du mitbenutzt, wie ein Werkzeugkoffer, den du dir ausleihst. Ein Paket (package) ist ein Ordner für Klassen. import sagt Java, aus welchem Ordner es eine Klasse holen soll.",
      "In Prog 1 liest du Eingaben mit der Bibliothek Prog1Tools (Klasse IOTools). Einbinden: import Prog1Tools.IOTools; ganz oben in der Datei, und die Bibliothek in IntelliJ unter File > Project Structure > Libraries hinzufügen (Tutorium 0, Aufgabe 1.6).",
      "Methoden: IOTools.readInteger(), readInt(), readDouble(), readString() (ein Wort), readLine() (ganze Zeile), readChar(), readBoolean(). Jede gibt es auch mit einem Text in Klammern, der vorher als Aufforderung ausgegeben wird: IOTools.readInteger(\"Alter: \"). Gibt man etwas Falsches ein, fragt IOTools erneut.",
      "Zu import und package: Klassen liegen in Paketen (packages), die den Ordnern entsprechen. Liegt deine Klasse in src/k1, steht oben package k1; Klassen aus anderen Paketen holst du mit import paket.Klasse; herein. String, System und Math sind immer da.",
      "Ohne Prog1Tools geht es mit der Standardklasse java.util.Scanner: Scanner sc = new Scanner(System.in); int n = sc.nextInt(); String zeile = sc.nextLine(); Das Beispiel unten ist Tutorium 2, Aufgabe 3. Eingabe hier: Ronja und 20."
     ],
     "code": "import Prog1Tools.IOTools;\n\npublic class Texteingabe {\n    public static void main(String[] args) {\n        String name = IOTools.readLine(\"Name: \");\n        int alter = IOTools.readInteger(\"Alter: \");\n        System.out.println();\n        System.out.println(\"Hallo \" + name + \", du bist mindestens \" + alter * 365 + \" Tage alt.\");\n    }\n}",
     "ausgabe": "Name: Alter: \nHallo Ronja, du bist mindestens 7300 Tage alt.",
     "merke": "import Prog1Tools.IOTools; dann IOTools.readInteger(\"Text\"), readDouble, readLine."
    }
   ],
   "zusammenfassung": [
    "Variable = Name + Typ + Wert. Deklaration int x; Zuweisung x = 5; zusammen int x = 5; = heißt „rechts ausrechnen, links speichern“.",
    "Acht primitive Typen: byte, short, int, long (ganz), float, double (Komma), boolean, char. String ist eine Klasse. Literale: 42 int, 42L long, 3.14 double, 3.14f float, 'a' char, \"a\" String.",
    "Gültigkeitsbereich: Eine Variable gilt in ihrem Block und darin verschachtelten Blöcken. Lokale Variablen müssen vor dem Lesen einen Wert haben.",
    "Ganzzahldivision schneidet ab: 7 / 2 = 3, -7 / 2 = -3. Ein double-Operand reicht für Kommarechnung: 7 / 2.0 = 3.5. % ist der Rest: 7 % 2 = 1, -7 % 3 = -1.",
    "x++ liefert den alten Wert und erhöht danach, ++x erhöht zuerst. x = x++ lässt x unverändert. a += b heißt a = a + b (mit automatischem Rückcast).",
    "Implizite Casts von klein nach groß (byte → short → int → long → float → double, char → int). Explizit (int) 3.99 = 3 (abschneiden), (byte) 200 = -56. Der Cast bindet stärker als * und /.",
    "Überlauf: Integer.MAX_VALUE + 1 = Integer.MIN_VALUE. Rundungsfehler: 0.1 + 0.2 = 0.30000000000000004. double nie mit == vergleichen, sondern Math.abs(a - b) < eps.",
    "Vergleich ==, !=, <, >, <=, >= liefert boolean. && und || mit Kurzschluss, & und | ohne. 3 < a < 5 ist ein Compilerfehler.",
    "Math: sqrt, pow, abs, max, min, round, ceil, floor, random, PI. Würfel: (int) (Math.random() * 6) + 1.",
    "Strings: length(), charAt(i), substring(von, bis), indexOf, equals. Strings sind immutable. Inhalt vergleichen nur mit equals, nie mit ==."
   ],
   "karten": [
    {
     "f": "Was ist der Unterschied zwischen Deklaration und Initialisierung?",
     "a": "Deklaration legt die Variable mit Typ und Namen an (int x;). Initialisierung gibt ihr den ersten Wert (x = 5;). Beides zusammen: int x = 5;",
     "q": "Skript Abschnitt 2"
    },
    {
     "f": "Nenne die acht primitiven Datentypen.",
     "a": "byte, short, int, long, float, double, boolean, char.",
     "q": "Skript Abschnitt 2, Tabelle 1"
    },
    {
     "f": "Welchen Typ hat das Literal 3.0, welchen 3.0f, welchen 3L, welchen '3'?",
     "a": "3.0 double, 3.0f float, 3L long, '3' char.",
     "q": "Skript Abschnitt 2"
    },
    {
     "f": "Was ergibt 17 / 5 und 17 % 5 in Java?",
     "a": "17 / 5 = 3 (Ganzzahldivision, abgeschnitten), 17 % 5 = 2 (Rest).",
     "q": "Skript Abschnitt 5.1; Tutorium 2, Aufgabe 1"
    },
    {
     "f": "Anfängerfehler Ganzzahldivision: Was gibt das aus?",
     "code": "double schnitt = 7 / 2;\nSystem.out.println(schnitt);",
     "a": "3.0. Rechts steht int / int, das ergibt 3. Erst danach wird 3 zu 3.0 umgewandelt. Richtig: 7 / 2.0 oder (double) 7 / 2.",
     "q": "Tutorium 2, Aufgabe 7"
    },
    {
     "f": "Was ist der Unterschied zwischen x++ und ++x?",
     "a": "x++ (Post-Inkrement): Ausdruck hat den alten Wert, danach wird erhöht. ++x (Pre-Inkrement): erst erhöhen, Ausdruck hat den neuen Wert.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "f": "Welchen Wert hat x danach?",
     "code": "int x = 5;\nx = x++;\nSystem.out.println(x);",
     "a": "5. x++ liefert 5, erhöht x auf 6, dann überschreibt die Zuweisung x wieder mit 5.",
     "q": "Tutorium 2, Aufgabe 25"
    },
    {
     "f": "Was ergibt (int) 9.99 und (int) -9.99?",
     "a": "9 und -9. Der Cast schneidet die Nachkommastellen ab (Richtung 0), er rundet nicht.",
     "q": "Skript Abschnitt 4"
    },
    {
     "f": "In welche Richtung castet Java automatisch?",
     "a": "Von klein nach groß: byte → short → int → long → float → double, außerdem char → int. Umgekehrt nur mit explizitem Cast.",
     "q": "Skript Abschnitt 4, Abbildung 1"
    },
    {
     "f": "Was gibt (double) 7 / 2 aus, was (double) (7 / 2)?",
     "a": "3.5 und 3.0. Der Cast wirkt nur auf den direkt folgenden Operanden. Mit Klammer wird zuerst ganzzahlig 3 gerechnet.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "f": "Warum darf man double-Werte nicht mit == vergleichen?",
     "a": "Kommazahlen sind binär nur angenähert gespeichert. 0.1 + 0.2 ist 0.30000000000000004, also != 0.3. Besser: Math.abs(a - b) < 0.00001.",
     "q": "Skript Abschnitt 5.2; Tutorium 2, Aufgabe 6"
    },
    {
     "f": "Was passiert bei Integer.MAX_VALUE + 1?",
     "a": "Überlauf: Das Ergebnis ist Integer.MIN_VALUE (-2147483648). Kein Fehler, keine Exception.",
     "q": "Tutorium 2, Aufgabe 6"
    },
    {
     "f": "Was ist Kurzschlussauswertung (short-circuit)?",
     "a": "Bei && und || wird der rechte Operand nicht mehr ausgewertet, wenn das Ergebnis schon feststeht (false && ..., true || ...). & und | werten immer beide Seiten aus.",
     "q": "Skript Abschnitt 5.3"
    },
    {
     "f": "Anfängerfehler String-Vergleich: Warum ist das falsch?",
     "code": "String eingabe = new String(\"ja\");\nif (eingabe == \"ja\") {\n    System.out.println(\"Bestätigt\");\n}",
     "a": "== vergleicht bei Objekten die Referenzen (Speicheradressen), nicht den Inhalt. Hier sind es zwei verschiedene Objekte, es wird nichts ausgegeben. Richtig: eingabe.equals(\"ja\").",
     "q": "03-OOP, Folie 41 und 66"
    },
    {
     "f": "Was gibt dieser Code aus?",
     "code": "String s = \"hallo\";\ns.toUpperCase();\nSystem.out.println(s);",
     "a": "hallo. Strings sind unveränderlich. toUpperCase liefert einen neuen String, der hier verworfen wird. Richtig: s = s.toUpperCase();",
     "q": "03-OOP, Folie 40"
    },
    {
     "f": "Was liefert \"Informatik\".substring(2, 5)?",
     "a": "\"for\". Index 2 einschließlich bis Index 5 ausschließlich, also die Zeichen an 2, 3, 4.",
     "q": "String-API"
    },
    {
     "f": "Wie wandelst du den String \"123\" in einen int um?",
     "a": "int z = Integer.parseInt(\"123\"); Für double: Double.parseDouble(\"1.5\").",
     "q": "03-OOP, Folie 46"
    },
    {
     "f": "Wie erzeugst du eine ganze Zufallszahl von 1 bis 6?",
     "a": "(int) (Math.random() * 6) + 1",
     "q": "Skript Abschnitt 6 und 9.2"
    },
    {
     "f": "Welche Fehler stecken hier? (Tutorium 2, Aufgabe 21)",
     "code": "int a = 0x1, c = 1e2;\nint mo, di, mi, do, fr;",
     "a": "1e2 ist ein double-Literal (100.0) und passt nicht ohne Cast in int. do ist ein Schlüsselwort (do-while) und darf kein Variablenname sein. Beides Compilerfehler.",
     "q": "Tutorium 2, Aufgabe 21"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int a = 10 / 3;\ndouble b = 10 / 3.0;\nint c = 10 % 3;\nSystem.out.println(a);\nSystem.out.println(c);\nSystem.out.println(b > 3.33);",
     "loesung": "3\n1\ntrue",
     "erklaerung": "Zeile 1: 10 / 3, beide ganze Zahlen → Ganzzahldivision, der Rest fällt weg: a = 3. Zeile 2: 10 / 3.0, eine Kommazahl dabei → b = 3.3333333333333335. Zeile 3: 10 % 3 ist der Rest von 10 : 3, also c = 1. Ausgabe: 3, dann 1, dann der Vergleich b > 3.33: 3.333... ist größer, also true.",
     "q": "Tutorium 2, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus? (Tutorium 2, Aufgabe 25)",
     "code": "int a = 1;\na++;\nSystem.out.println(a);\na = a++;\nSystem.out.println(a);\na = ++a;\nSystem.out.println(a);\na = a + 1;\nSystem.out.println(a);\na = --a;\nSystem.out.println(a);\na += a;\nSystem.out.println(a);\na -= a + 1;\nSystem.out.println(a);\na = (a--) - (--a);\nSystem.out.println(a);",
     "loesung": "2\n2\n3\n4\n3\n6\n-1\n2",
     "erklaerung": "a startet bei 1. a++ → 2, Ausgabe 2. a = a++: rechts wird der alte Wert 2 gemerkt, a kurz 3, dann überschreibt die Zuweisung mit 2 → Ausgabe 2. a = ++a: erst erhöhen auf 3, dann zuweisen → 3. a = a + 1 → 4. a = --a: erst verringern auf 3, zuweisen → 3. a += a heißt a = 3 + 3 → 6. a -= a + 1 heißt a = 6 - (6 + 1) = -1. Letzte Zeile: a-- liefert den alten Wert -1, danach ist a = -2. --a macht a = -3 und liefert -3. -1 - (-3) = 2.",
     "q": "Tutorium 2, Aufgabe 25"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus? (nach Tutorium 2, Aufgabe 7)",
     "code": "int a = 65;\nSystem.out.println(\"(char) a: \" + (char) a);\nchar d = 'Z' - 1;\nSystem.out.println(\"d: \" + d);\nSystem.out.println(\"(int) d: \" + (int) d);\nint e = 3 / 2;\nSystem.out.println(\"e: \" + e);\ndouble f = 3 / 2;\nSystem.out.println(\"f: \" + f);\ndouble g = 3.0 / 2;\nSystem.out.println(\"g: \" + g);\nSystem.out.println(\"(int) g: \" + (int) g);",
     "loesung": "(char) a: A\nd: Y\n(int) d: 89\ne: 1\nf: 1.0\ng: 1.5\n(int) g: 1",
     "erklaerung": "Zeile 2: (char) 65 macht aus der Nummer 65 das Zeichen mit dieser Nummer: A. Zeile 3: 'Z' hat die Nummer 90, minus 1 = 89, das ist Y. Zeile 5: (int) d zeigt die Nummer 89. Zeile 6: 3 / 2 mit ganzen Zahlen = 1. Zeile 8: double f = 3 / 2: rechts wird zuerst ganzzahlig 1 gerechnet, erst dann wird daraus 1.0. Zeile 10: 3.0 / 2 rechnet mit Komma: 1.5. Zeile 12: (int) 1.5 schneidet ab: 1.",
     "q": "Tutorium 2, Aufgabe 7"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus? (Tutorium 2, Aufgabe 7, zweiter Teil)",
     "code": "double h = 0x12345;\nSystem.out.println(\"h: \" + h);\nSystem.out.println(\"(int) h: \" + (int) h);\nint i = 012;\nSystem.out.println(\"i: \" + i);\nfloat j = 0.2f * 0.1f * 10.0f;\nSystem.out.println(\"j: \" + j);\nSystem.out.println(\"(int) j: \" + (int) j);",
     "loesung": "h: 74565.0\n(int) h: 74565\ni: 10\nj: 0.20000002\n(int) j: 0",
     "erklaerung": "Zeile 1: 0x12345 ist hexadezimal: 1·65536 + 2·4096 + 3·256 + 4·16 + 5 = 74565, als double 74565.0. Zeile 3: (int) entfernt nur das .0. Zeile 4: Eine führende 0 bedeutet Oktalzahl (Basis 8): 012 = 1·8 + 2 = 10. Zeile 6: float rechnet ungenau, 0.2 · 0.1 · 10 ergibt 0.20000002. Zeile 8: (int) schneidet die Nachkommastellen ab: 0.",
     "q": "Tutorium 2, Aufgabe 7"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int x = 7;\nint y = 2;\nSystem.out.println(x / y * y);\nSystem.out.println(x / y * 1.0);\nSystem.out.println(x * 1.0 / y);",
     "loesung": "6\n3.0\n3.5",
     "erklaerung": "Java rechnet bei gleichem Vorrang von links nach rechts. Zeile 3: 7 / 2 = 3 (ganzzahlig), 3 * 2 = 6. Zeile 4: 7 / 2 = 3, erst danach * 1.0 = 3.0, der Rest ist schon weg. Zeile 5: 7 * 1.0 = 7.0, jetzt ist es eine Kommazahl, 7.0 / 2 = 3.5. Die Reihenfolge entscheidet.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat x am Ende?",
     "code": "int x = 3;\nint y = x++ + ++x;\nx = y - x;",
     "loesung": 3,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Zeile 1: x = 3. Zeile 2 von links: x++ liefert 3, danach ist x = 4. ++x erhöht auf 5 und liefert 5. y = 3 + 5 = 8. Zeile 3: x = 8 - 5 = 3.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat ergebnis?",
     "code": "int ergebnis = 2 + 3 * 4 % 5 - 6 / 4;",
     "loesung": 3,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Vorrang: *, / und % vor + und -, untereinander von links. 3 * 4 = 12. 12 % 5 = 2 (12 : 5 = 2 Rest 2). 6 / 4 = 1 (ganzzahlig). Übrig: 2 + 2 - 1 = 3.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat z?",
     "code": "int z = (int) 7.9 + (int) -2.5 + 17 % 4;",
     "loesung": 6,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "(int) 7.9 = 7, (int) -2.5 = -2 (abschneiden Richtung 0), 17 % 4 = 1. 7 - 2 + 1 = 6.",
     "q": "Skript Abschnitt 4"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "String s = \"Hallo\";\nString t = \"Hal\";\nt = t + \"lo\";\nSystem.out.println(s.equals(t));\nSystem.out.println(s.length() + t.charAt(1));\nSystem.out.println(\"\" + s.length() + t.charAt(1));",
     "loesung": "true\n102\n5a",
     "erklaerung": "Zeile 2–3: t wird aus \"Hal\" + \"lo\" zusammengesetzt, ein neues String-Objekt. Zeile 4: equals vergleicht den Inhalt: beide „Hallo“ → true. Zeile 5: s.length() ist 5 (eine Zahl), t.charAt(1) ist das Zeichen 'a' (Nummer 97). Zahl + Zeichen wird gerechnet: 102. Zeile 6: Mit \"\" vorne ist es Text, also werden 5 und a angehängt: 5a.",
     "q": "03-OOP, Folie 40–41"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int a = 5;\nboolean b = a > 3 || ++a > 10;\nSystem.out.println(b + \" \" + a);\nboolean c = a > 3 | ++a > 10;\nSystem.out.println(c + \" \" + a);",
     "loesung": "true 5\ntrue 6",
     "erklaerung": "Zeile 2: a > 3 ist true. Bei || (oder) steht damit das Ergebnis schon fest, Java schaut den rechten Teil gar nicht an. ++a passiert nicht, a bleibt 5. Zeile 4: | ohne Kurzschluss wertet beide Seiten aus. ++a macht a = 6, 6 > 10 ist false, aber true | false ist true.",
     "q": "Skript Abschnitt 5.3"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "double d = 0.1 * 3;\nSystem.out.println(d);\nSystem.out.println(d == 0.3);\nSystem.out.println(1.0 / 0);",
     "loesung": "0.30000000000000004\nfalse\nInfinity",
     "erklaerung": "Zeile 1: 0.1 lässt sich im Binärsystem nicht exakt speichern (wie 1/3 im Dezimalsystem 0,333...). 0.1 * 3 ergibt deshalb 0.30000000000000004. Zeile 3: Das ist nicht genau 0.3, also false. Zeile 4: Eine Kommazahl durch 0 liefert in Java den Sonderwert Infinity (unendlich) statt eines Fehlers.",
     "q": "Skript Abschnitt 5.2; Tutorium 2, Aufgabe 6"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "int i = 25.0;",
     "optionen": [
      "Kein Fehler, i wird 25",
      "Compilerfehler: possible lossy conversion from double to int",
      "Laufzeitfehler: NumberFormatException",
      "i wird 0"
     ],
     "richtig": 1,
     "erklaerung": "25.0 ist ein double. Von groß nach klein castet Java nicht automatisch. Richtig: int i = 25; oder int i = (int) 25.0;",
     "q": "Tutorium 2, Aufgabe 2"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "int a = 4;\nif (3 < a < 5) {\n    a = a * a;\n}",
     "optionen": [
      "Kein Fehler, a wird 16",
      "Compilerfehler: < kann nicht auf boolean und int angewendet werden",
      "Laufzeitfehler",
      "a bleibt 4, weil die Bedingung false ist"
     ],
     "richtig": 1,
     "erklaerung": "3 < a ergibt true. true < 5 ist kein gültiger Ausdruck. Richtig: 3 < a && a < 5.",
     "q": "Tutorium 2, Aufgabe 21"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "boolean b = true;\nSystem.out.println(3 + b + \"=3true\");",
     "optionen": [
      "Ausgabe: 3true=3true",
      "Ausgabe: 4=3true",
      "Compilerfehler: + ist für int und boolean nicht definiert",
      "Laufzeitfehler"
     ],
     "richtig": 2,
     "erklaerung": "Von links wird zuerst 3 + b ausgewertet. Zahl plus boolean gibt es nicht. Erst wenn links ein String steht, wird verkettet: \"\" + 3 + b.",
     "q": "Tutorium 2, Aufgabe 21"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "int summe;\nfor (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}\nSystem.out.println(summe);",
     "optionen": [
      "Ausgabe 0 1 2 0",
      "Compilerfehler: variable summe might not have been initialized",
      "Laufzeitfehler: NullPointerException",
      "Compilerfehler: i ist unbekannt"
     ],
     "richtig": 1,
     "erklaerung": "Lokale Variablen haben keinen Standardwert. Wer sie liest, bevor etwas zugewiesen wurde, bekommt einen Compilerfehler. Richtig: int summe = 0;",
     "q": "Skript Abschnitt 2"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "String zahl = \"12a\";\nint z = Integer.parseInt(zahl);\nSystem.out.println(z);",
     "optionen": [
      "Compilerfehler",
      "Laufzeitfehler: NumberFormatException",
      "Ausgabe: 12",
      "Ausgabe: 0"
     ],
     "richtig": 1,
     "erklaerung": "Der Compiler kennt den Inhalt nicht, es kompiliert. Beim Ausführen kann \"12a\" nicht als Zahl gelesen werden: NumberFormatException.",
     "q": "03-OOP, Folie 46"
    },
    {
     "typ": "mc",
     "frage": "Was gibt dieser Code aus?",
     "code": "byte b = (byte) 130;\nSystem.out.println(b);",
     "optionen": [
      "130",
      "-126",
      "127",
      "Compilerfehler"
     ],
     "richtig": 1,
     "erklaerung": "byte reicht nur bis 127. Beim Cast bleiben die unteren 8 Bit: 130 - 256 = -126.",
     "q": "Skript Abschnitt 4"
    },
    {
     "typ": "mc",
     "frage": "Welche Zeile kompiliert NICHT?",
     "optionen": [
      "long l = 5;",
      "double d = 'a';",
      "float f = 1.5;",
      "char c = 65;"
     ],
     "richtig": 2,
     "erklaerung": "1.5 ist ein double-Literal, double → float verliert Genauigkeit. Richtig wäre 1.5f. Die anderen gehen: int → long, char → double automatisch, und eine konstante 65 passt in char.",
     "q": "Skript Abschnitt 2 und 4",
     "code": "float f = 1.5;"
    },
    {
     "typ": "mc",
     "frage": "Was gibt Math.round(-2.5) zurück?",
     "code": "System.out.println(Math.round(-2.5));",
     "optionen": [
      "-3",
      "-2",
      "-2.5",
      "-3.0"
     ],
     "richtig": 1,
     "erklaerung": "Math.round rundet auf die nächste ganze Zahl, bei .5 Richtung plus unendlich: -2.5 wird -2. Ergebnis ist ein long, daher ohne .0.",
     "q": "Math-API"
    }
   ],
   "formeln": [
    {
     "name": "Variable deklarieren und zuweisen",
     "code": "int anzahl;           // Deklaration\nanzahl = 3;           // Zuweisung\ndouble preis = 2.99;  // beides\nint a = 1, b = 2;     // mehrere",
     "text": "Typ Name = Wert; Lokale Variablen vor dem ersten Lesen initialisieren.",
     "q": "Skript Abschnitt 2"
    },
    {
     "name": "Primitive Typen und Literale",
     "code": "byte b = 127;  short s = 1000;  int i = 42;  long l = 42L;\nfloat f = 3.14f;  double d = 3.14;\nboolean ok = true;  char c = 'x';\nString text = \"Hallo\";",
     "text": "Ganzzahl-Literale sind int, Kommazahl-Literale double.",
     "q": "Skript Abschnitt 2, Tabelle 1"
    },
    {
     "name": "Konstante",
     "code": "final double MWST = 0.19;\nstatic final int MAX = 100;   // als Klassenkonstante",
     "text": "final verhindert spätere Zuweisung. Konstanten schreibt man GROSS.",
     "q": "03-OOP, Folie 17"
    },
    {
     "name": "Arithmetik",
     "code": "a + b   a - b   a * b\na / b   // bei zwei int: ganzzahlig, abgeschnitten\na % b   // Rest der Division",
     "text": "Punkt vor Strich, sonst von links nach rechts.",
     "q": "Skript Abschnitt 5.1"
    },
    {
     "name": "Inkrement und Kurzzuweisung",
     "code": "x++;  ++x;  x--;  --x;\nx += 5;   // x = x + 5\nx *= 2;   // x = x * 2",
     "text": "x++ liefert alten Wert, ++x neuen Wert.",
     "q": "Skript Abschnitt 5.1 und 5.4"
    },
    {
     "name": "Typecast",
     "code": "int i = (int) 3.99;        // 3\ndouble d = (double) 7 / 2; // 3.5\nchar c = (char) 65;        // 'A'\nint z = Integer.parseInt(\"42\");\ndouble w = Double.parseDouble(\"2.5\");",
     "text": "(Zieltyp) Wert. Gilt nur für den direkt folgenden Operanden.",
     "q": "Skript Abschnitt 4"
    },
    {
     "name": "Vergleich und Logik",
     "code": "==  !=  <  >  <=  >=\na && b   // UND (Kurzschluss)\na || b   // ODER (Kurzschluss)\n!a       // NICHT",
     "text": "Ergebnis ist immer boolean. Bereich: x > 0 && x < 10.",
     "q": "Skript Abschnitt 5.2 und 5.3"
    },
    {
     "name": "Math",
     "code": "Math.sqrt(x)  Math.pow(a, b)  Math.abs(x)\nMath.max(a, b)  Math.min(a, b)  Math.round(x)\nMath.random()   // [0, 1)\nMath.PI",
     "text": "Würfel: (int) (Math.random() * 6) + 1",
     "q": "Skript Abschnitt 6, Tabelle 5"
    },
    {
     "name": "String-Methoden",
     "code": "s.length()          s.charAt(i)\ns.substring(von, bis)  s.indexOf(\"x\")\ns.equals(t)         s.equalsIgnoreCase(t)\ns.toUpperCase()     s.contains(\"x\")",
     "text": "Strings sind unveränderlich, Methoden liefern neue Strings. Vergleich mit equals.",
     "q": "03-OOP, Folie 40–41"
    },
    {
     "name": "Eingabe mit IOTools",
     "code": "import Prog1Tools.IOTools;\n...\nint n = IOTools.readInteger(\"Zahl: \");\ndouble d = IOTools.readDouble(\"Betrag: \");\nString zeile = IOTools.readLine(\"Name: \");",
     "text": "Prog1Tools muss als Library im Projekt eingebunden sein.",
     "q": "Skript Abschnitt 3"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 2, Aufgabe 1: Modulo-Operator",
     "q": "Tutorium 2, Aufgabe 1; Musterlösung Modulo.java",
     "text": "Schreibe ein Programm, das 10/3, 10/3.0 und 10%3 berechnet, die Ergebnisse in passenden Variablen speichert und ausgibt.",
     "loesung": [
      "10/3: beide Operanden int, also Ganzzahldivision. Ergebnis 3, passender Typ int.",
      "10/3.0: ein Operand double, also Kommarechnung. Ergebnis 3.3333333333333335, Typ double.",
      "10%3: Rest der Division, 1, Typ int.",
      "Ausgabe mit println und Verkettung."
     ],
     "loesungCode": "public class Modulo {\n    public static void main(String[] args) {\n        int i = 10 / 3;\n        int j = 10 % 3;\n        double d = 10 / 3.0;\n        System.out.println(\"Double-Division: 10/3.0 = \" + d);\n        System.out.println(\"Integer-Division:  10/3 = \" + i);\n        System.out.println(\"Rest:              10%3 = \" + j);\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 2: Fehlersuche (7 Fehler)",
     "q": "Tutorium 2, Aufgabe 2",
     "text": "Finde und korrigiere die 7 Fehler in dieser Klasse.",
     "code": "public class Fehler {\npublic static void main(string [] ohweh) {\nint i=25.0; /* wir definieren ein\nint f=4; paar Variablen */\nSystem.out.print(25+\" geteilt\")\nSystem.out.println(\" durch 4 ist \"+i/f+\", Kontrolle: 6.25)\";\n)\n}",
     "loesung": [
      "1. string muss String heißen (case-sensitive).",
      "2. int i = 25.0 geht nicht, double passt nicht in int. Da 6.25 herauskommen soll: double i = 25.0;",
      "3. Der Blockkommentar schließt erst nach „paar Variablen */“. Damit ist int f=4; auskommentiert und f unbekannt. Kommentar vor der Deklaration schließen.",
      "4. Nach print(25+\" geteilt\") fehlt das Semikolon.",
      "5. Das schließende Anführungszeichen von \", Kontrolle: 6.25\" steht hinter der Klammer. Richtig: \", Kontrolle: 6.25\");",
      "6. Die schließende Klammer ) am Ende muss eine geschweifte } sein (Ende von main).",
      "7. Mit int i und int f wäre i/f = 6 (Ganzzahldivision). Erst mit double i kommt 6.25 heraus.",
      "Der Parametername ohweh ist erlaubt, der Name args ist nur Konvention."
     ],
     "loesungCode": "public class Fehler {\n    public static void main(String[] ohweh) {\n        double i = 25.0; /* wir definieren ein paar Variablen */\n        int f = 4;\n        System.out.print(25 + \" geteilt\");\n        System.out.println(\" durch 4 ist \" + i / f + \", Kontrolle: 6.25\");\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 4: Sekunden zerlegen mit Modulo",
     "q": "Tutorium 2, Aufgabe 4; Musterlösung Sekunden.java",
     "text": "Ein Sekundenwert in einer int-Variablen sec soll in Jahre, Tage, Stunden, Minuten und Sekunden zerlegt werden. Beispiel: 158036521 Sekunden entsprechen 5 Jahren, 4 Tagen, 3 Stunden, 2 Minuten und 1 Sekunde. (Ein Jahr = 365 Tage.)",
     "loesung": [
      "Ein Jahr hat 365 · 24 · 3600 = 31.536.000 Sekunden. sec / 31536000 ergibt die ganzen Jahre (Ganzzahldivision).",
      "sec % 31536000 ist der Rest, der nicht mehr für ein ganzes Jahr reicht. Mit dem Rest weiterrechnen.",
      "Genauso für Tage (86400 s), Stunden (3600 s) und Minuten (60 s). Was übrig bleibt, sind Sekunden.",
      "Das Muster „/ für den ganzen Teil, % für den Rest“ brauchst du oft, z. B. auch für Ziffern einer Zahl (/ 10 und % 10)."
     ],
     "loesungCode": "public class Sekunden {\n    public static void main(String[] args) {\n        int sec = 158036521;\n        System.out.println(sec + \" Sekunden entsprechen:\");\n        int jahre = sec / (365 * 24 * 3600);\n        sec = sec % (365 * 24 * 3600);\n        int tage = sec / (24 * 3600);\n        sec = sec % (24 * 3600);\n        int stunden = sec / 3600;\n        sec = sec % 3600;\n        int minuten = sec / 60;\n        sec = sec % 60;\n        System.out.println(jahre + \" Jahren,\");\n        System.out.println(tage + \" Tagen,\");\n        System.out.println(stunden + \" Stunden,\");\n        System.out.println(minuten + \" Minuten und\");\n        System.out.println(sec + \" Sekunden.\");\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 5: Raviolita (Konservendose berechnen)",
     "q": "Tutorium 2, Aufgabe 5",
     "text": "Aus einem Blechstück mit Länge u (Umfang der Dose, cm) und Breite h (Höhe der Dose, cm) sollen berechnet werden: Diagonale lDiag = Wurzel(u² + h²), Durchmesser des Bodens dBoden = u / π, Bodenfläche fBoden = π · (dBoden / 2)², Mantelfläche fMantel = u · h, Gesamtfläche fGesamt = 2 · fBoden + fMantel, Volumen v = fBoden · h. Teste mit u = 30 und h = 10.",
     "loesung": [
      "Variablen als double anlegen, denn alle Ergebnisse sind Kommazahlen.",
      "π ist Math.PI, die Wurzel Math.sqrt, Quadrate als x * x oder Math.pow(x, 2).",
      "Die Formeln der Reihe nach umsetzen, weil spätere Werte frühere brauchen (fBoden braucht dBoden).",
      "Mit println ausgeben. Kontrolle: lDiag = 31.62..., dBoden = 9.549..., v = 716.19..."
     ],
     "loesungCode": "public class Raviolita {\n    public static void main(String[] args) {\n        double u = 30, h = 10;\n        double lDiag = Math.sqrt(u * u + h * h);\n        double dBoden = u / Math.PI;\n        double fBoden = Math.PI * (dBoden / 2) * (dBoden / 2);\n        double fMantel = u * h;\n        double fGesamt = 2 * fBoden + fMantel;\n        double v = fBoden * h;\n        System.out.println(\"Diagonale:    \" + lDiag);\n        System.out.println(\"Durchmesser:  \" + dBoden);\n        System.out.println(\"Bodenflaeche: \" + fBoden);\n        System.out.println(\"Mantelflaeche: \" + fMantel);\n        System.out.println(\"Gesamtflaeche: \" + fGesamt);\n        System.out.println(\"Volumen:      \" + v);\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 6: Rundungsfehler",
     "q": "Tutorium 2, Aufgabe 6; Musterlösung RundFehl.java",
     "text": "Berechne mit double s = x1·y1 + x2·y2 + ... + x6·y6 für x1 = 10^20, y1 = 10^20, x2 = 1223, y2 = 2, x3 = 10^18, y3 = -10^22, x4 = 10^15, y4 = 10^13, x5 = 3, y5 = 2111, x6 = -10^12, y6 = 10^16. Das richtige Ergebnis ist 8779. Was liefert Java und warum?",
     "loesung": [
      "Die Produkte sind riesig: 10^40, -10^40, 10^28, -10^28 und dazwischen kleine Werte wie 2446 und 6333.",
      "Ein double hat nur etwa 15–16 gültige Dezimalstellen. 10^40 + 2446 ist für einen double einfach wieder 10^40, die kleine Zahl geht verloren (Auslöschung).",
      "Die großen Werte heben sich danach exakt gegenseitig auf. Übrig bleibt 0 statt 8779.",
      "Merke: Die Reihenfolge der Rechnung entscheidet mit über das Ergebnis. Rechnet man die großen Paare zuerst zusammen, kommt das richtige Ergebnis heraus."
     ],
     "loesungCode": "public class RundFehl {\n    public static void main(String[] args) {\n        double x1 = 1e20, x2 = 1223, x3 = 1e18, x4 = 1e15, x5 = 3, x6 = -1e12;\n        double y1 = 1e20, y2 = 2, y3 = -1e22, y4 = 1e13, y5 = 2111, y6 = 1e16;\n        double s = x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + x5 * y5 + x6 * y6;\n        System.out.println(\"s = \" + s);\n        double t = (x1 * y1 + x3 * y3) + (x4 * y4 + x6 * y6) + x2 * y2 + x5 * y5;\n        System.out.println(\"umsortiert: \" + t);\n    }\n}"
    }
   ]
  },
  {
   "id": "k2",
   "titel": "Kapitel 2: Imperatives Programmieren – Verzweigungen, Schleifen, Arrays, Methoden, Rekursion",
   "abschnitt": "VL ca. 26.10.–12.11.2026 (Skript Abschnitt 7–10, Folien Recursion und Javadoc), Tutorium 2",
   "seiten": "Skript Imperative Programming, Abschnitt 7 (if, switch), 8 (Arrays), 9 (Schleifen), 10 (Methoden, Überladen, Varargs); Folien 02-ImperativeRest (Rekursion, Javadoc)",
   "kurz": [
     "if braucht eine boolean-Bedingung. Typischer Fehler: if (x); mit Semikolon ist ein leerer Zweig.",
     "switch springt zum passenden case und läuft ohne break einfach weiter (fall-through).",
     "while prüft vorher, do-while nachher (mindestens ein Durchlauf). for (int i = 0; i < n; i++) wiederholt n-mal.",
     "Arrays haben feste Länge, Index 0 bis length - 1. Falscher Index gibt ArrayIndexOutOfBoundsException.",
     "Arrays sind Referenzen: b = a kopiert nur den Verweis. Parameter sind Kopien (call by value).",
     "Rekursion: Methode ruft sich mit kleinerem Problem auf und braucht einen Basisfall, sonst StackOverflowError."
   ],
   "quellen": [
    {
     "name": "Skript: Imperative Programming",
     "pfad": "material/Prog1/Vorlesung/P1_02-Skript_Imperative_Programming.pdf"
    },
    {
     "name": "Vorlesung 2b: Recursion und Javadoc",
     "pfad": "material/Prog1/Vorlesung/P1_02-ImperativeRest.pdf"
    },
    {
     "name": "Tutorium 2: Imperatives Programmieren",
     "pfad": "material/Prog1/Tutorien/P1_02-imperatives-programmieren.pdf"
    },
    {
     "name": "Code: Musterlösungen Tutorium 2 (Zip)",
     "pfad": "material/Prog1/Code/P1_tut02_ml.zip"
    },
    {
     "name": "Altklausur WS 14/15",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Hauptklausur_WS1415_ohne_Lo_sung.pdf"
    },
    {
     "name": "Altklausur WS 24/25",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Erstklausur_WS2425_ohne_Lo_sungen.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Verzweigung mit if und else",
     "text": [
      "Alltagsvergleich: if ist eine Weggabelung mit Schild. „Wenn es regnet, nimm den linken Weg, sonst den rechten.“ Die Bedingung in den runden Klammern ist die Frage auf dem Schild, ihre Antwort ist true (ja) oder false (nein).",
      "Bisher lief jedes Programm Zeile für Zeile durch. Mit if entscheidet das Programm: Ist die Bedingung in den runden Klammern true, wird der Block ausgeführt. Mit else gibst du an, was sonst passieren soll. Die Bedingung muss ein boolean sein.",
      "Mehrere Fälle schreibst du als Kette else if. Java prüft von oben nach unten und nimmt den ersten passenden Zweig. Im Zweig else if (note < 3) weißt du also schon, dass note >= 2 ist.",
      "Setze immer geschweifte Klammern, auch bei nur einer Anweisung. Ohne Klammern gehört nur die nächste Anweisung zum if, egal wie eingerückt ist. Apples Sicherheitslücke von 2014 („goto fail“) entstand genau so. Ein weiterer Klassiker: if (x > 0); mit Semikolon. Das Semikolon ist eine leere Anweisung, der folgende Block wird immer ausgeführt."
     ],
     "code": "int note = 2;\nif (note == 1) {\n    System.out.println(\"sehr gut\");\n} else if (note < 3) {\n    System.out.println(\"gut\");\n} else if (note < 5) {\n    System.out.println(\"bestanden\");\n} else {\n    System.out.println(\"nicht bestanden\");\n}\nint x = -5;\nif (x > 0)\n    System.out.println(\"positiv\");\n    System.out.println(\"Diese Zeile kommt immer, trotz Einrückung\");",
     "ausgabe": "gut\nDiese Zeile kommt immer, trotz Einrückung",
     "merke": "Immer { } setzen. Ohne Klammern gehört nur eine Anweisung zum if."
    },
    {
     "titel": "switch-case: viele Fälle für einen Wert",
     "text": [
      "switch prüft einen Ausdruck (int, char, String oder enum) gegen feste Werte. Jeder case ist eine Einsprungstelle. Ab dort wird alles ausgeführt, auch die folgenden cases, bis ein break kommt. Das heißt fall-through. default fängt alle übrigen Werte ab.",
      "Fall-through ist nützlich, wenn mehrere Werte dasselbe tun sollen (case 3: case 4: case 5:). Vergisst du ein break, ist es ein Fehler, den der Compiler nicht meldet.",
      "In der Vorlesung wird nur der klassische switch mit case ...: und break verwendet (Java-7-Stil). Neuere Formen mit -> sind erlaubt, aber in der Klausur gibt es dafür keine Teilpunkte. Bleib beim klassischen switch.",
      "Alltagsvergleich: switch ist wie ein Aufzug. Du steigst im Stockwerk mit der passenden Nummer ein (case). Ohne break fährt der Aufzug weiter nach unten und hält in jedem weiteren Stockwerk."
     ],
     "code": "int tag = 3;\nswitch (tag) {\n    case 1: System.out.println(\"Montag\"); break;\n    case 2: System.out.println(\"Dienstag\"); break;\n    case 3: System.out.println(\"Mittwoch\");     // kein break!\n    case 4: System.out.println(\"Donnerstag\"); break;\n    default: System.out.println(\"Wochenende oder Freitag\");\n}\nString farbe = \"rot\";\nswitch (farbe) {\n    case \"rot\":\n    case \"gelb\": System.out.println(\"warm\"); break;\n    default: System.out.println(\"kalt\");\n}",
     "ausgabe": "Mittwoch\nDonnerstag\nwarm",
     "merke": "Ohne break läuft switch in den nächsten case weiter."
    },
    {
     "titel": "while: wiederholen, solange eine Bedingung gilt",
     "text": [
      "Alltagsvergleich: „Solange der Teller nicht leer ist, iss einen Bissen.“ Ist der Teller schon leer, isst du gar nicht erst.",
      "Eine Schleife (loop) wiederholt Anweisungen. while (Bedingung) { ... } prüft die Bedingung vor jedem Durchlauf. Ist sie am Anfang schon false, läuft die Schleife null Mal.",
      "Im Block muss sich etwas ändern, das die Bedingung irgendwann false macht. Sonst hast du eine Endlosschleife.",
      "while passt, wenn du vorher nicht weißt, wie oft wiederholt wird. Beispiel: Ziffern einer Zahl zerlegen, bis nichts mehr übrig ist (Tutorium 2, Aufgabe 15)."
     ],
     "code": "int zahl = 3572;\nint quersumme = 0;\nwhile (zahl > 0) {\n    int ziffer = zahl % 10;   // letzte Ziffer\n    quersumme += ziffer;\n    zahl = zahl / 10;         // letzte Ziffer abschneiden\n}\nSystem.out.println(\"Quersumme: \" + quersumme);",
     "ausgabe": "Quersumme: 17",
     "merke": "while prüft vor dem Durchlauf und läuft eventuell kein einziges Mal."
    },
    {
     "titel": "do-while: mindestens einmal",
     "text": [
      "Alltagsvergleich: „Probier einen Bissen, und solange es dir schmeckt, iss weiter.“ Probiert wird auf jeden Fall einmal.",
      "do { ... } while (Bedingung); prüft die Bedingung erst nach dem Durchlauf. Der Block läuft also mindestens einmal. Am Ende steht ein Semikolon.",
      "Typischer Einsatz: Eingaben wiederholen, bis sie gültig sind. „Frage nach dem Nenner, solange er 0 ist.“ IOTools macht das intern genauso.",
      "Unten siehst du den Unterschied direkt: Die Bedingung ist von Anfang an false. while läuft nicht, do-while einmal."
     ],
     "code": "int i = 10;\nwhile (i < 5) {\n    System.out.println(\"while: \" + i);\n    i++;\n}\nint j = 10;\ndo {\n    System.out.println(\"do-while: \" + j);\n    j++;\n} while (j < 5);",
     "ausgabe": "do-while: 10",
     "merke": "do-while führt den Block mindestens einmal aus. Semikolon nach while(...) nicht vergessen."
    },
    {
     "titel": "for-Schleife und for-each",
     "text": [
      "for (Start; Bedingung; Schritt) { ... } fasst die drei Teile einer Zählschleife zusammen. Ablauf: 1. Start einmal ausführen (int i = 0). 2. Bedingung prüfen. 3. Block ausführen. 4. Schritt ausführen (i++). Weiter bei 2.",
      "Die Zählvariable i gilt nur in der Schleife. Für Arrays der Länge n läuft i von 0 bis n - 1, also i < n. i <= n ist der klassische Off-by-one-Fehler (einer zu viel).",
      "for-each (erweiterte for-Schleife): for (int wert : array) { ... } läuft über alle Elemente, ohne Index. Bequem, wenn du den Index nicht brauchst. Du kannst damit aber das Array nicht verändern, weil wert nur eine Kopie ist.",
      "Schleifen lassen sich verschachteln. Die innere läuft bei jedem Durchlauf der äußeren komplett durch. So entsteht das Sternchen-Dreieck aus Tutorium 2, Aufgabe 14."
     ],
     "code": "for (int i = 1; i <= 3; i++) {\n    System.out.print(i + \" \");\n}\nSystem.out.println();\nint[] werte = {4, 8, 15};\nfor (int w : werte) {\n    System.out.print(w * 2 + \" \");\n}\nSystem.out.println();\nfor (int zeile = 1; zeile <= 4; zeile++) {\n    for (int s = 1; s <= zeile; s++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
     "ausgabe": "1 2 3 \n8 16 30 \n*\n**\n***\n****",
     "merke": "for (int i = 0; i < n; i++) läuft genau n Mal: 0 bis n - 1."
    },
    {
     "titel": "break und continue",
     "text": [
      "break beendet die Schleife sofort. Das Programm macht nach der Schleife weiter.",
      "continue beendet nur den aktuellen Durchlauf. Bei for geht es mit dem Schritt (i++) weiter, bei while und do-while direkt mit der Bedingung.",
      "Bei verschachtelten Schleifen wirken beide nur auf die innerste Schleife. Beides macht Code oft lesbarer, weil man weniger verschachtelte ifs braucht."
     ],
     "code": "for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n        continue;          // gerade Zahlen überspringen\n    }\n    if (i > 7) {\n        break;             // ab 8 aufhören\n    }\n    System.out.print(i + \" \");\n}\nSystem.out.println();",
     "ausgabe": "1 3 5 7",
     "merke": "break verlässt die Schleife, continue springt zum nächsten Durchlauf."
    },
    {
     "titel": "Arrays: viele Werte gleichen Typs",
     "text": [
      "Alltagsvergleich: Ein Array ist wie eine Reihe nummerierter Schließfächer am Bahnhof. Alle Fächer sind gleich groß (gleicher Typ), die Nummerierung beginnt bei 0, und die Zahl der Fächer steht fest, sobald die Reihe gebaut ist.",
      "Ein Array ist eine Reihe von Variablen gleichen Typs unter einem Namen. Jede Zelle hat einen Index ab 0. Ein Array der Länge 5 hat die Indizes 0 bis 4. Die Länge steht in arr.length (ohne Klammern, anders als bei String.length()).",
      "Anlegen: int[] arr = new int[5]; Die Länge ist danach fest. Neue int-Arrays sind mit 0 gefüllt, double mit 0.0, boolean mit false, String und andere Objekte mit null. Oder direkt mit Werten: int[] arr = {3, 1, 4};",
      "Greifst du auf einen Index außerhalb von 0 bis length - 1 zu, gibt es eine ArrayIndexOutOfBoundsException. Hat die Array-Variable den Wert null (nie erzeugt), gibt es eine NullPointerException.",
      "Arrays.toString(arr) (aus java.util) macht eine lesbare Ausgabe. System.out.println(arr) allein gibt nur Typ und Adresse aus, z. B. [I@1b6d3586."
     ],
     "code": "int[] noten = new int[4];\nnoten[0] = 2;\nnoten[3] = 1;\nSystem.out.println(noten.length);\nSystem.out.println(Arrays.toString(noten));\nString[] namen = new String[2];\nSystem.out.println(namen[0]);\nint[] primzahlen = {2, 3, 5, 7, 11};\nint summe = 0;\nfor (int i = 0; i < primzahlen.length; i++) {\n    summe += primzahlen[i];\n}\nSystem.out.println(\"Summe: \" + summe);",
     "ausgabe": "4\n[2, 0, 0, 1]\nnull\nSumme: 28",
     "merke": "Indizes laufen von 0 bis length - 1. arr.length ohne Klammern."
    },
    {
     "titel": "Arrays sind Referenzen: Kopien und 2D-Arrays",
     "text": [
      "Eine Array-Variable enthält nicht die Werte selbst, sondern einen Verweis (Referenz) auf den Speicherbereich. Im Bild des Skripts: Im Karton liegt ein Zettel mit der Adresse der Garage, in der die Werte stehen. Arrays sind Referenzdatentypen.",
      "int[] b = a; kopiert nur den Zettel (flache Kopie, shallow copy). a und b zeigen danach auf dasselbe Array. Änderst du b[0], ändert sich auch a[0]. Für eine echte Kopie (tiefe Kopie, deep copy) brauchst du ein neues Array und kopierst jeden Wert, z. B. mit einer Schleife oder a.clone().",
      "Aus demselben Grund vergleicht a == b nur, ob beide auf dasselbe Array zeigen. Für den Inhalt: Arrays.equals(a, b) oder selbst Element für Element vergleichen (Tutorium 2, Aufgabe 17).",
      "Ein 2D-Array ist ein Array von Arrays. int[][] m = new int[2][3]; hat 2 Zeilen mit je 3 Spalten. m[1][2] ist Zeile 1, Spalte 2. m.length ist die Zeilenzahl, m[0].length die Spaltenzahl."
     ],
     "code": "int[] a = {42, 24};\nint[] b = a;          // flache Kopie: gleiche Referenz\nb[1] = 6;\nSystem.out.println(a[1]);\nint[] tief = new int[a.length];\nfor (int i = 0; i < a.length; i++) {\n    tief[i] = a[i];   // tiefe Kopie\n}\na[0] = 123;\nSystem.out.println(tief[0]);\nSystem.out.println(a == b);\nSystem.out.println(Arrays.equals(tief, new int[]{42, 6}));\nint[][] m = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(m.length + \" Zeilen, \" + m[0].length + \" Spalten, m[1][2] = \" + m[1][2]);",
     "ausgabe": "6\n42\ntrue\ntrue\n2 Zeilen, 3 Spalten, m[1][2] = 6",
     "merke": "b = a kopiert nur die Referenz. == vergleicht Referenzen, Arrays.equals den Inhalt."
    },
    {
     "titel": "Methoden: Code mit Namen, Parametern und Rückgabewert",
     "text": [
      "Alltagsvergleich: Eine Methode ist wie ein Rezept mit Überschrift. Die Parameter sind die Zutaten, die man beim Kochen mitgibt, der Rückgabewert ist das fertige Gericht. Wer das Rezept aufruft, muss nicht wissen, wie es innen funktioniert.",
      "Eine Methode bündelt Code unter einem Namen. So schreibst du ihn einmal und rufst ihn oft auf. Aufbau: public static Rückgabetyp name(Parameterliste) { Rumpf }. Die erste Zeile heißt Methodenkopf. static heißt hier: Klassenmethode, ohne Objekt aufrufbar (mehr in Kapitel 3).",
      "Parameter sind die Eingaben, z. B. (int a, int b). Beim Aufruf werden die übergebenen Werte (Argumente) in die Parameter kopiert. Der Rückgabetyp ist der Typ der Ausgabe. return wert; beendet die Methode und liefert den Wert zurück. Jeder mögliche Weg durch die Methode muss mit return enden. Gibt eine Methode nichts zurück, ist der Typ void.",
      "Java übergibt immer Kopien (call by value). Bei primitiven Typen wird der Wert kopiert: Ändert die Methode den Parameter, merkt der Aufrufer nichts. Bei Arrays und Objekten wird die Referenz kopiert: Die Methode kann über die Kopie des Zettels dieselbe Garage verändern. Das sieht der Aufrufer."
     ],
     "code": "public class Methoden {\n    public static int max(int a, int b) {\n        if (a > b) {\n            return a;\n        }\n        return b;\n    }\n\n    public static void verdopple(int x) {\n        x = x * 2;            // ändert nur die Kopie\n    }\n\n    public static void verdoppleAlle(int[] arr) {\n        for (int i = 0; i < arr.length; i++) {\n            arr[i] = arr[i] * 2;   // ändert das Original-Array\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(max(3, 9));\n        int zahl = 5;\n        verdopple(zahl);\n        System.out.println(zahl);\n        int[] feld = {1, 2, 3};\n        verdoppleAlle(feld);\n        System.out.println(Arrays.toString(feld));\n    }\n}",
     "ausgabe": "9\n5\n[2, 4, 6]",
     "merke": "Parameter sind Kopien. Primitive Werte bleiben beim Aufrufer gleich, Array-Inhalte nicht."
    },
    {
     "titel": "Überladen (Overloading) und Varargs",
     "text": [
      "Alltagsvergleich: Das Wort „öffnen“ bedeutet bei einer Tür, einer Flasche und einer Datei jeweils etwas anderes, aber jeder weiß aus dem Zusammenhang, was gemeint ist. So wählt Java beim Überladen anhand der Parametertypen die passende Methode.",
      "Mehrere Methoden dürfen gleich heißen, wenn sich ihre Parameterlisten unterscheiden (Anzahl, Typen oder Reihenfolge der Typen). Name plus Parametertypen heißen Signatur. Der Rückgabetyp und die Parameternamen zählen nicht zur Signatur. Math.abs gibt es so für int, long, float und double.",
      "Welche Methode wird aufgerufen? Java sucht die spezifischste (most specific). Schritt 1: alle Methoden, zu denen die Argumente passen, auch mit impliziten Casts. Schritt 2: die, deren Parametertypen sich in alle anderen umwandeln lassen. Exakte Treffer gewinnen also. Gibt es zwei gleich gute, ist der Aufruf mehrdeutig: Compilerfehler.",
      "Varargs (variable Argumentanzahl): int... werte nimmt beliebig viele ints entgegen. In der Methode ist werte ein int[]. Ein Varargs-Parameter muss der letzte sein, und es gibt nur einen. Java zieht Varargs-Methoden erst heran, wenn keine normale Methode passt."
     ],
     "code": "public class Ueberladen {\n    static void zeige(int x)     { System.out.println(\"int \" + x); }\n    static void zeige(long x)    { System.out.println(\"long \" + x); }\n    static void zeige(double x)  { System.out.println(\"double \" + x); }\n    static void zeige(int... xs) { System.out.println(\"varargs mit \" + xs.length + \" Werten\"); }\n\n    public static void main(String[] args) {\n        byte b = 1;\n        zeige(5);       // passt exakt\n        zeige(5L);\n        zeige(b);       // byte -> int ist der kleinste Schritt\n        zeige(2.5f);    // float -> double\n        zeige(1, 2, 3); // nur varargs passt\n        zeige();\n    }\n}",
     "ausgabe": "int 5\nlong 5\nint 1\ndouble 2.5\nvarargs mit 3 Werten\nvarargs mit 0 Werten",
     "merke": "Überladen = gleicher Name, andere Parametertypen. Java wählt die spezifischste passende Methode."
    },
    {
     "titel": "Rekursion: eine Methode ruft sich selbst auf",
     "text": [
      "Alltagsvergleich: Matroschka-Puppen. Du öffnest eine Puppe und findest eine kleinere, öffnest die und so weiter, bis die kleinste nicht mehr aufgeht (Basisfall). Dann setzt du sie in umgekehrter Reihenfolge wieder zusammen.",
      "Rekursion heißt: Eine Methode ruft sich selbst auf, mit einem kleineren Problem. Damit das endet, braucht sie eine Abbruchbedingung (Basisfall), z. B. if (n <= 1) return 1;",
      "Beispiel Fakultät: n! = n · (n - 1)!, und 1! = 1. Jeder Aufruf bekommt einen eigenen Rahmen auf dem Aufrufstapel (call stack) mit eigenen Variablen. fac(5) wartet auf fac(4), das wartet auf fac(3) und so weiter. Erst fac(1) liefert direkt 1. Dann werden die Ergebnisse rückwärts zusammengesetzt: 2, 6, 24, 120.",
      "Nachteile laut Vorlesung: mehr Rechenzeit (jeder Aufruf kostet etwas), mehr Speicher, und bei zu tiefer Rekursion ein StackOverflowError. Fehlt die Abbruchbedingung, passiert genau das. Vorteil: Manche Probleme (Bäume, Fibonacci, Türme von Hanoi) lassen sich rekursiv viel kürzer schreiben.",
      "Jede Schleife lässt sich als Rekursion schreiben und umgekehrt. In der Klausur WS 24/25 sollte eine for-Schleife (Potenz) rekursiv nachgebaut werden."
     ],
     "code": "public class Rekursion {\n    static int fac(int n) {\n        if (n <= 1) {\n            return 1;               // Basisfall\n        }\n        return n * fac(n - 1);      // rekursiver Aufruf\n    }\n\n    static void countdown(int n) {\n        if (n == 0) {\n            System.out.println(\"Start!\");\n            return;\n        }\n        System.out.print(n + \" \");\n        countdown(n - 1);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(fac(5));\n        countdown(3);\n    }\n}",
     "ausgabe": "120\n3 2 1 Start!",
     "merke": "Rekursion braucht immer einen Basisfall, sonst StackOverflowError."
    },
    {
     "titel": "Gültigkeitsbereich (Scope) und Javadoc",
     "text": [
      "Eine Variable ist nur in ihrem Block sichtbar, ab der Deklaration bis zur schließenden Klammer. Eine in if deklarierte Variable gibt es nach dem if nicht mehr. Die Zählvariable einer for-Schleife gibt es nach der Schleife nicht mehr. Parameter und lokale Variablen einer Methode gibt es nur in dieser Methode.",
      "In einem inneren Block darfst du keinen Namen erneut deklarieren, der außen schon existiert. In zwei getrennten Geschwisterblöcken (z. B. if und else) darf derselbe Name vorkommen. Altklausur WS 14/15, Aufgabe 1B: a wird in if und else deklariert und danach ausgegeben. Das ist ein Compilerfehler, weil a draußen unbekannt ist.",
      "Javadoc: Ein Kommentar /** ... */ direkt vor einer Klasse oder Methode beschreibt sie. Tags: @param name Beschreibung, @return Beschreibung, bei Klassen @author. Daraus erzeugt javadoc eine HTML-Dokumentation wie die Java-API. In IntelliJ zeigt F1 auf einem Methodennamen diese Doku an."
     ],
     "code": "public class Scope {\n    /**\n     * Liefert das Quadrat einer Zahl.\n     *\n     * @param x die Zahl\n     * @return x mal x\n     */\n    public static int quadrat(int x) {\n        int ergebnis = x * x;   // lokal, nur in quadrat sichtbar\n        return ergebnis;\n    }\n\n    public static void main(String[] args) {\n        int summe = 0;\n        for (int i = 1; i <= 3; i++) {\n            summe += quadrat(i);\n        }\n        // i und ergebnis sind hier nicht mehr sichtbar\n        if (summe > 10) {\n            String text = \"groß\";\n            System.out.println(summe + \" ist \" + text);\n        } else {\n            String text = \"klein\";   // erlaubt: Geschwisterblock\n            System.out.println(summe + \" ist \" + text);\n        }\n    }\n}",
     "ausgabe": "14 ist groß",
     "merke": "Eine Variable lebt von ihrer Deklaration bis zur schließenden Klammer ihres Blocks."
    }
   ],
   "zusammenfassung": [
    "if (Bedingung) { } else if (...) { } else { }. Bedingung muss boolean sein. Immer geschweifte Klammern setzen. if (x); mit Semikolon ist ein leerer Zweig.",
    "switch (int, char, String, enum): Einsprung beim passenden case, Ausführung bis break (fall-through). default für alle übrigen Werte.",
    "while prüft vorher (0 bis n Durchläufe), do-while prüft nachher (mindestens 1 Durchlauf), for für Zählschleifen, for-each zum Durchlaufen ohne Index.",
    "break verlässt die (innerste) Schleife, continue springt zum nächsten Durchlauf.",
    "Arrays: feste Länge, Index 0 bis length - 1, Standardwerte 0 / 0.0 / false / null. Fehler: ArrayIndexOutOfBoundsException (falscher Index), NullPointerException (Array nie erzeugt).",
    "Arrays sind Referenzen: b = a kopiert nur den Verweis (flache Kopie). == vergleicht Referenzen, Arrays.equals den Inhalt. 2D-Array = Array von Arrays.",
    "Methode: Sichtbarkeit static Rückgabetyp name(Parameter). return beendet und liefert den Wert. void = keine Rückgabe. Parameter sind Kopien (call by value): Primitive ändern sich beim Aufrufer nicht, Array-Inhalte schon.",
    "Überladen: gleicher Name, andere Parametertypen. Aufgerufen wird die spezifischste passende Methode. Varargs (int... xs) zuletzt und nur einmal, werden erst genommen, wenn nichts anderes passt.",
    "Rekursion: Methode ruft sich selbst mit kleinerem Problem auf, braucht Basisfall. Kostet mehr Zeit und Speicher als eine Schleife, Gefahr: StackOverflowError.",
    "Scope: Variablen gelten nur in ihrem Block. Javadoc /** */ mit @param und @return dokumentiert Methoden."
   ],
   "karten": [
    {
     "f": "Was ist der Unterschied zwischen while und do-while?",
     "a": "while prüft die Bedingung vor jedem Durchlauf (kann 0-mal laufen). do-while prüft danach, der Block läuft mindestens einmal.",
     "q": "Skript Abschnitt 9.2 und 9.3"
    },
    {
     "f": "In welcher Reihenfolge laufen die Teile einer for-Schleife ab?",
     "a": "1. Initialisierung (einmal). 2. Bedingung prüfen. 3. Rumpf ausführen. 4. Update (z. B. i++). Dann wieder 2.",
     "q": "Skript Abschnitt 9.1"
    },
    {
     "f": "Was passiert bei switch ohne break?",
     "a": "Fall-through: Nach dem passenden case werden auch alle folgenden cases ausgeführt, bis ein break oder das Ende von switch kommt.",
     "q": "Skript Abschnitt 7.2"
    },
    {
     "f": "Welche Typen darf man in switch verwenden (Vorlesungsstand)?",
     "a": "Alles, was sich implizit in int umwandeln lässt (byte, short, char, int), außerdem String und enum. Kein long, double, boolean.",
     "q": "Skript Abschnitt 7.2"
    },
    {
     "f": "Was ist der Unterschied zwischen break und continue?",
     "a": "break beendet die Schleife sofort. continue beendet nur den aktuellen Durchlauf und macht mit dem nächsten weiter.",
     "q": "Skript Abschnitt 9.4"
    },
    {
     "f": "Anfängerfehler Off-by-one: Was passiert?",
     "code": "int[] a = {1, 2, 3};\nfor (int i = 0; i <= a.length; i++) {\n    System.out.println(a[i]);\n}",
     "a": "Es werden 1, 2, 3 ausgegeben, dann wird a[3] gelesen: ArrayIndexOutOfBoundsException. Richtig: i < a.length.",
     "q": "Skript Abschnitt 8"
    },
    {
     "f": "Anfängerfehler NullPointerException: Was passiert?",
     "code": "int[] a = null;\nSystem.out.println(a.length);",
     "a": "NullPointerException zur Laufzeit. a zeigt auf kein Array. Erst mit a = new int[...] gibt es ein Array.",
     "q": "Skript Abschnitt 8"
    },
    {
     "f": "Welche Standardwerte haben die Zellen von new int[3], new boolean[3], new String[3]?",
     "a": "0, false, null.",
     "q": "Skript Abschnitt 2, Tabelle 2; Abschnitt 8"
    },
    {
     "f": "Was ist der Unterschied zwischen flacher und tiefer Kopie eines Arrays?",
     "a": "Flach (int[] b = a;): nur die Referenz wird kopiert, beide Variablen zeigen auf dasselbe Array. Tief: neues Array anlegen und jeden Wert kopieren, danach sind sie unabhängig.",
     "q": "Skript Abschnitt 8, Abbildung 3"
    },
    {
     "f": "Warum kann man zwei int-Arrays nicht mit a == b auf gleichen Inhalt prüfen?",
     "a": "== vergleicht die Referenzen, also ob beide auf dasselbe Array zeigen. Für den Inhalt Arrays.equals(a, b) oder Länge und alle Elemente in einer Schleife vergleichen.",
     "q": "Tutorium 2, Aufgabe 17"
    },
    {
     "f": "Was bedeutet call by value in Java?",
     "a": "Beim Aufruf werden die Werte der Argumente in die Parameter kopiert. Bei primitiven Typen der Wert selbst, bei Arrays und Objekten die Referenz. Deshalb kann eine Methode Array-Inhalte ändern, aber nicht die Variable des Aufrufers umbiegen.",
     "q": "Skript Abschnitt 10.1, Abbildung 5"
    },
    {
     "f": "Was gehört zur Signatur einer Methode?",
     "a": "Der Name und die Folge der Parametertypen. Nicht: Rückgabetyp, Parameternamen, Modifier.",
     "q": "Skript Abschnitt 10.3"
    },
    {
     "f": "Wann ist ein überladener Aufruf mehrdeutig?",
     "a": "Wenn nach dem Aussortieren mindestens zwei passende Methoden übrig bleiben, von denen keine spezifischer ist als die andere. Beispiel: m(long, int) und m(int, long) mit m(byte, byte) aufgerufen. Compilerfehler.",
     "q": "Skript Abschnitt 10.3, Beispiel 2"
    },
    {
     "f": "Welche Regeln gelten für Varargs?",
     "a": "Schreibweise Typ... name. In der Methode ein Array. Nur ein Varargs-Parameter pro Methode, und er muss der letzte sein. Aufruf mit beliebig vielen Werten oder einem Array.",
     "q": "Skript Abschnitt 10.4"
    },
    {
     "f": "Was braucht jede Rekursion, und was passiert ohne?",
     "a": "Einen Basisfall (Abbruchbedingung), der ohne erneuten Aufruf zurückkehrt. Ohne ihn ruft sich die Methode endlos auf, bis der Stack voll ist: StackOverflowError.",
     "q": "02-ImperativeRest, Folie 6 und 8"
    },
    {
     "f": "Nachteile von Rekursion gegenüber Schleifen?",
     "a": "Höhere Laufzeitkosten (jeder Methodenaufruf hat Overhead), mehr Speicher (ein Stack-Rahmen pro Aufruf), Gefahr eines Stack Overflow.",
     "q": "02-ImperativeRest, Folie 8"
    },
    {
     "f": "Was gibt fac(4) zurück?",
     "code": "static int fac(int n) {\n    if (n == 1) return 1;\n    return n * fac(n - 1);\n}",
     "a": "24. fac(4) = 4 · fac(3) = 4 · 3 · fac(2) = 4 · 3 · 2 · fac(1) = 24.",
     "q": "02-ImperativeRest, Folie 9–20"
    },
    {
     "f": "Welche Javadoc-Tags gehören an eine Methode?",
     "a": "@param für jeden Parameter, @return für den Rückgabewert. An Klassen: @author, optional @version, @since, @see.",
     "q": "02-ImperativeRest, Folie 24–27"
    },
    {
     "f": "Anfängerfehler Scope: Was meldet der Compiler?",
     "code": "for (int i = 0; i < 3; i++) {\n    int quadrat = i * i;\n}\nSystem.out.println(quadrat);",
     "a": "cannot find symbol: quadrat. Die Variable wurde im Schleifenblock deklariert und existiert danach nicht mehr. Lösung: vor der Schleife deklarieren.",
     "q": "Skript Abschnitt 2 (Blöcke)"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int x = 7;\nif (x > 5) {\n    System.out.println(\"A\");\n} else if (x > 3) {\n    System.out.println(\"B\");\n}\nif (x % 2 == 0) {\n    System.out.println(\"C\");\n} else {\n    System.out.println(\"D\");\n}",
     "loesung": "A\nD",
     "erklaerung": "Zeile 1: x = 7. Zeile 2: 7 > 5 ist true, also wird A ausgegeben. Weil der erste Zweig genommen wurde, prüft Java das else if (x > 3) gar nicht mehr. Zeile 7: neues, unabhängiges if. 7 % 2 ist der Rest von 7 : 2, also 1. 1 == 0 ist false, also läuft der else-Zweig: D.",
     "q": "Skript Abschnitt 7.1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus? (Tutorium 2, Aufgabe 9, Beispiel A)",
     "code": "int x = 0;\nif (x < 5)\n    if (x < 0)\n        System.out.println(\"x < 0\");\nelse\n    System.out.println(\"x >= 5\");",
     "loesung": "x >= 5",
     "erklaerung": "Dangling else: Ein else gehört immer zum nächsten offenen if, egal wie es eingerückt ist. Hier also zu if (x < 0). Weil 0 < 0 false ist, läuft der else-Zweig und gibt fälschlich x >= 5 aus. Mit Klammern wäre das nicht passiert.",
     "q": "Tutorium 2, Aufgabe 9"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int n = 2;\nswitch (n) {\n    case 1: System.out.print(\"eins \");\n    case 2: System.out.print(\"zwei \");\n    case 3: System.out.print(\"drei \");\n        break;\n    case 4: System.out.print(\"vier \");\n    default: System.out.print(\"andere \");\n}\nSystem.out.println(\"ende\");",
     "loesung": "zwei drei ende",
     "erklaerung": "n = 2: Java springt direkt zu case 2 und gibt „zwei “ aus. Dort steht kein break, also läuft es einfach in case 3 weiter: „drei “. Dort steht break, Java verlässt den switch. Danach „ende“. case 1, case 4 und default werden nicht ausgeführt.",
     "q": "Skript Abschnitt 7.2"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int i = 0;\nwhile (i < 10) {\n    i += 3;\n}\nSystem.out.println(i);\nint k = 5;\ndo {\n    k--;\n} while (k > 10);\nSystem.out.println(k);",
     "loesung": "12\n4",
     "erklaerung": "Erste Schleife: i = 0, 0 < 10 → i = 3. 3 < 10 → 6. 6 < 10 → 9. 9 < 10 → 12. 12 < 10 ist false → Ende, Ausgabe 12. Zweite Schleife: k = 5. do führt den Rumpf zuerst aus: k = 4. Dann die Prüfung 4 > 10: false → Ende. Ausgabe 4.",
     "q": "Skript Abschnitt 9.2 und 9.3"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "for (int i = 0; i < 3; i++) {\n    for (int j = i; j < 3; j++) {\n        System.out.print(i + \"\" + j + \" \");\n    }\n    System.out.println();\n}",
     "loesung": "00 01 02\n11 12\n22",
     "erklaerung": "i = 0: j läuft von 0 bis 2 → 00 01 02, dann Zeilenumbruch. i = 1: j von 1 bis 2 → 11 12. i = 2: j nur 2 → 22. i = 3: 3 < 3 ist false, Schluss. Das \"\" zwischen i und j macht daraus Text, sonst würde i + j addiert.",
     "q": "Skript Abschnitt 9.1"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat summe am Ende?",
     "code": "int summe = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    if (i == 8) {\n        break;\n    }\n    summe += i;\n}",
     "loesung": 19,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "i = 1: kein Vielfaches von 3, nicht 8 → summe 1. i = 2 → 3. i = 3: 3 % 3 == 0 → continue, überspringen. i = 4 → 7. i = 5 → 12. i = 6: überspringen. i = 7 → 19. i = 8: i == 8 → break, die Schleife endet sofort. Ergebnis 19.",
     "q": "Skript Abschnitt 9.4"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "int[] a = {1, 2, 3};\nint[] b = a;\nb[0] = 99;\nint[] c = {99, 2, 3};\nSystem.out.println(a[0]);\nSystem.out.println(a == b);\nSystem.out.println(a == c);\nSystem.out.println(Arrays.equals(a, c));",
     "loesung": "99\ntrue\nfalse\ntrue",
     "erklaerung": "Zeile 1: a zeigt auf ein Array [1, 2, 3]. Zeile 2: b = a kopiert nur den Verweis, beide zeigen auf dasselbe Array (zwei Schlüssel für dasselbe Schließfach). Zeile 3: b[0] = 99 ändert also auch, was a sieht. Zeile 4: c ist ein zweites, eigenes Array mit gleichem Inhalt. Ausgaben: a[0] ist 99. a == b: gleiches Array → true. a == c: verschiedene Arrays → false, auch wenn der Inhalt gleich ist. Arrays.equals vergleicht den Inhalt → true.",
     "q": "Skript Abschnitt 8; Tutorium 2, Aufgabe 17"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class Aufruf {\n    static void aendere(int x, int[] arr) {\n        x = 100;\n        arr[0] = 100;\n        arr = new int[]{7, 7};\n        arr[1] = 7;\n    }\n\n    public static void main(String[] args) {\n        int zahl = 1;\n        int[] feld = {1, 1};\n        aendere(zahl, feld);\n        System.out.println(zahl + \" \" + feld[0] + \" \" + feld[1]);\n    }\n}",
     "loesung": "1 100 1",
     "erklaerung": "Beim Aufruf bekommt die Methode Kopien: x ist eine Kopie der Zahl 1, arr eine Kopie des Verweises auf feld. Zeile 3: x = 100 ändert nur die Kopie, zahl bleibt 1. Zeile 4: arr[0] = 100 geht über den kopierten Verweis zum echten Array, feld[0] wird 100. Zeile 5: arr zeigt jetzt auf ein neues Array. Zeile 6 ändert nur dieses neue Array. feld[1] bleibt 1. Ausgabe: 1 100 1.",
     "q": "Skript Abschnitt 10.1, Abbildung 5"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (Altklausur WS 14/15, Aufgabe 2)",
     "code": "public class Foo {\n    static void bar(int a, double b) { System.out.print(\"ID \"); }\n    static void bar(int a, int b) { System.out.print(\"II \"); }\n    static void bar(double a, long b) { System.out.print(\"DL \"); }\n    static void bar(float... a) { System.out.print(\"FS \"); }\n    static void bar(int a, byte b) { System.out.print(\"IB \"); }\n    static void bar(double a, double b) { System.out.print(\"DD \"); }\n\n    public static void main(String[] args) {\n        int i = 0;\n        long l = 0;\n        float f = 0;\n        double d = 0;\n        char c = '0';\n        bar(i, f);\n        bar(d, i);\n        bar(i, c, i);\n        bar(i, c);\n        bar(l, c);\n    }\n}",
     "loesung": "ID DL FS II DL",
     "erklaerung": "bar(i, f): float passt nur in double, Kandidaten ID und DD, (int, double) ist spezifischer. bar(d, i): erstes Argument double, Kandidaten DL und DD, DL spezifischer. bar(i, c, i): drei Argumente, nur Varargs. bar(i, c): char → int ist erlaubt, char → byte nicht, II ist am spezifischsten. bar(l, c): long passt nicht in int, also DL.",
     "q": "Altklausur WS 14/15, Aufgabe 2"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class Rek {\n    static int f(int n) {\n        if (n <= 0) {\n            return 0;\n        }\n        System.out.print(n + \" \");\n        return n + f(n - 2);\n    }\n\n    public static void main(String[] args) {\n        int r = f(5);\n        System.out.println(\"= \" + r);\n    }\n}",
     "loesung": "5 3 1 = 9",
     "erklaerung": "f(5): 5 > 0, gibt „5 “ aus, rechnet 5 + f(3). f(3): gibt „3 “ aus, rechnet 3 + f(1). f(1): gibt „1 “ aus, rechnet 1 + f(-1). f(-1): Basisfall, liefert 0. Jetzt rückwärts zusammensetzen: f(1) = 1 + 0 = 1, f(3) = 3 + 1 = 4, f(5) = 5 + 4 = 9. main gibt „= 9“ aus.",
     "q": "02-ImperativeRest, Folie 9–20"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert liefert mystery(4)?",
     "code": "public class M {\n    static int mystery(int n) {\n        if (n == 0) return 1;\n        return 2 * mystery(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(mystery(4));\n    }\n}",
     "loesung": 16,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "mystery(4) = 2 · mystery(3) = 2 · 2 · mystery(2) = 2 · 2 · 2 · mystery(1) = 2 · 2 · 2 · 2 · mystery(0). mystery(0) ist der Basisfall und liefert 1. Also 2 · 2 · 2 · 2 · 1 = 16.",
     "q": "02-ImperativeRest"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat m[1][2] + m.length + m[0].length?",
     "code": "int[][] m = new int[3][4];\nfor (int i = 0; i < m.length; i++) {\n    for (int j = 0; j < m[i].length; j++) {\n        m[i][j] = i * 10 + j;\n    }\n}",
     "loesung": 19,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "new int[3][4] legt 3 Zeilen mit je 4 Spalten an. Die Schleifen füllen jede Zelle mit i · 10 + j, also Zeile 1, Spalte 2 mit 12. m.length ist die Zahl der Zeilen: 3. m[0].length die Zahl der Spalten: 4. 12 + 3 + 4 = 19.",
     "q": "Skript Abschnitt 8; Tutorium 2, Aufgabe 18"
    },
    {
     "typ": "mc",
     "frage": "Altklausur WS 14/15, Aufgabe 1A: Compiler- oder Laufzeitfehler?",
     "code": "int[] a;\na[0] = 1;\nSystem.out.println(a[-1] + a[0] + a[1]);",
     "optionen": [
      "Compilerfehler: a wurde nicht initialisiert",
      "Laufzeitfehler: ArrayIndexOutOfBoundsException wegen a[-1]",
      "Laufzeitfehler: NullPointerException",
      "Ausgabe: 1"
     ],
     "richtig": 0,
     "erklaerung": "a ist nur deklariert, nie mit new int[...] erzeugt. Der Compiler erkennt das: variable a might not have been initialized. Der negative Index wäre erst danach ein Laufzeitproblem.",
     "q": "Altklausur WS 14/15, Aufgabe 1"
    },
    {
     "typ": "mc",
     "frage": "Altklausur WS 14/15, Aufgabe 1B: Compiler- oder Laufzeitfehler?",
     "code": "int i = 3;\nif (i > 2) {\n    int a = 7;\n} else {\n    int a = 5;\n}\nSystem.out.println(a);",
     "optionen": [
      "Ausgabe 7",
      "Compilerfehler: a ist außerhalb der Blöcke nicht sichtbar",
      "Compilerfehler: a wird doppelt deklariert",
      "Laufzeitfehler"
     ],
     "richtig": 1,
     "erklaerung": "Beide a sind lokal in ihrem Block. Doppelt ist es nicht, weil if- und else-Block Geschwister sind. Aber nach den Blöcken gibt es kein a mehr: cannot find symbol.",
     "q": "Altklausur WS 14/15, Aufgabe 1"
    },
    {
     "typ": "mc",
     "frage": "Altklausur WS 14/15, Aufgabe 1C: Compiler- oder Laufzeitfehler?",
     "code": "int i = 0;\nwhile (i < 5) {\n    System.out.println(\"1/i=\" + (1 / i++));\n    i -= 1;\n}",
     "optionen": [
      "Endlosschleife ohne Fehler",
      "Compilerfehler",
      "Laufzeitfehler: ArithmeticException (/ by zero)",
      "Ausgabe 1/i=1 fünfmal"
     ],
     "richtig": 2,
     "erklaerung": "Im ersten Durchlauf ist i = 0. i++ liefert den alten Wert 0, also wird 1 / 0 gerechnet: ArithmeticException. (Ohne den Fehler wäre es eine Endlosschleife, weil i -= 1 das ++ wieder aufhebt.)",
     "q": "Altklausur WS 14/15, Aufgabe 1"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler? (Tutorium 2, Aufgabe 9, Beispiel C)",
     "code": "int x = 0;\nif (x > 0);\n    System.out.println(\"1/x = \" + (1 / x));",
     "optionen": [
      "Kein Fehler, nichts wird ausgegeben",
      "Compilerfehler wegen des Semikolons",
      "Das Semikolon beendet das if, die Division wird immer ausgeführt: ArithmeticException",
      "Ausgabe 1/x = 0"
     ],
     "richtig": 2,
     "erklaerung": "if (x > 0); hat eine leere Anweisung als Rumpf. Die println-Zeile gehört nicht mehr zum if und läuft immer, mit x = 0.",
     "q": "Tutorium 2, Aufgabe 9"
    },
    {
     "typ": "mc",
     "frage": "Was gibt der Code aus? (Tutorium 2, Aufgabe 9, Beispiel D: Tauschen)",
     "code": "int x = 0, y = 4;\nif (y > x) {\n    x = y;\n    y = x;\n}\nSystem.out.println(\"x = \" + x + \" y = \" + y);",
     "optionen": [
      "x = 4 y = 0",
      "x = 4 y = 4",
      "x = 0 y = 4",
      "x = 0 y = 0"
     ],
     "richtig": 1,
     "erklaerung": "Nach x = y ist der alte Wert von x verloren. Zum Tauschen braucht man eine Hilfsvariable: int tmp = x; x = y; y = tmp;",
     "q": "Tutorium 2, Aufgabe 9"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "public class Max {\n    static int max(int a, int b) {\n        if (a > b) {\n            return a;\n        } else if (b > a) {\n            return b;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(max(2, 3));\n    }\n}",
     "optionen": [
      "Kein Fehler, Ausgabe 3",
      "Compilerfehler: missing return statement",
      "Laufzeitfehler bei a == b",
      "Compilerfehler: else if ist ohne else nicht erlaubt"
     ],
     "richtig": 1,
     "erklaerung": "Wenn a == b ist, erreicht die Methode ihr Ende ohne return. Der Compiler verlangt, dass jeder Weg einen Wert zurückgibt. Lösung: das letzte else if durch else ersetzen.",
     "q": "Skript Abschnitt 10.1"
    },
    {
     "typ": "mc",
     "frage": "Was passiert bei diesem Aufruf?",
     "code": "public class Mehrdeutig {\n    static void m(long a, int b) { System.out.println(\"LI\"); }\n    static void m(int a, long b) { System.out.println(\"IL\"); }\n    public static void main(String[] args) {\n        byte x = 1, y = 2;\n        m(x, y);\n    }\n}",
     "optionen": [
      "Ausgabe LI",
      "Ausgabe IL",
      "Compilerfehler: reference to m is ambiguous",
      "Laufzeitfehler"
     ],
     "richtig": 2,
     "erklaerung": "Beide Methoden passen, aber keine ist spezifischer als die andere. Das ist Beispiel 2 aus dem Skript: Compilerfehler.",
     "q": "Skript Abschnitt 10.3, Beispiel 2"
    },
    {
     "typ": "mc",
     "frage": "Was passiert hier?",
     "code": "public class Ohne {\n    static int summe(int n) {\n        return n + summe(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(summe(3));\n    }\n}",
     "optionen": [
      "Ausgabe 6",
      "Compilerfehler",
      "Laufzeitfehler: StackOverflowError",
      "Ausgabe 0"
     ],
     "richtig": 2,
     "erklaerung": "Es fehlt der Basisfall. summe ruft sich mit 2, 1, 0, -1, ... endlos auf, bis der Stack voll ist.",
     "q": "02-ImperativeRest, Folie 8"
    }
   ],
   "formeln": [
    {
     "name": "if / else if / else",
     "code": "if (x > 0) {\n    ...\n} else if (x == 0) {\n    ...\n} else {\n    ...\n}",
     "text": "Erster passender Zweig wird ausgeführt, die anderen nicht.",
     "q": "Skript Abschnitt 7.1"
    },
    {
     "name": "switch",
     "code": "switch (wert) {\n    case 1: ...; break;\n    case 2:\n    case 3: ...; break;   // 2 und 3 gleich behandeln\n    default: ...;\n}",
     "text": "Ohne break läuft es in den nächsten case weiter.",
     "q": "Skript Abschnitt 7.2"
    },
    {
     "name": "while",
     "code": "while (bedingung) {\n    ...\n}",
     "text": "Prüft vorher, 0 bis n Durchläufe.",
     "q": "Skript Abschnitt 9.2"
    },
    {
     "name": "do-while",
     "code": "do {\n    ...\n} while (bedingung);",
     "text": "Prüft nachher, mindestens ein Durchlauf. Semikolon am Ende.",
     "q": "Skript Abschnitt 9.3"
    },
    {
     "name": "for-Schleife",
     "code": "for (int i = 0; i < n; i++) {\n    ...\n}",
     "text": "Läuft genau n Mal mit i = 0 bis n - 1.",
     "q": "Skript Abschnitt 9.1"
    },
    {
     "name": "for-each",
     "code": "for (int wert : array) {\n    ...\n}",
     "text": "Durchläuft alle Elemente ohne Index. Zum Ändern der Zellen normale for-Schleife nehmen.",
     "q": "Skript Abschnitt 9.1"
    },
    {
     "name": "Array anlegen und benutzen",
     "code": "int[] a = new int[5];        // 5 Nullen\nint[] b = {3, 1, 4};\na[0] = 7;\nint n = a.length;           // ohne ()\nSystem.out.println(Arrays.toString(b));",
     "text": "Index 0 bis length - 1. Arrays.toString braucht import java.util.Arrays.",
     "q": "Skript Abschnitt 8"
    },
    {
     "name": "2D-Array",
     "code": "int[][] m = new int[zeilen][spalten];\nint[][] k = {{1, 2}, {3, 4}};\nfor (int i = 0; i < m.length; i++)\n    for (int j = 0; j < m[i].length; j++)\n        m[i][j] = 0;",
     "text": "m.length = Zeilen, m[i].length = Spalten der Zeile i.",
     "q": "Skript Abschnitt 8"
    },
    {
     "name": "Methode definieren",
     "code": "public static int summe(int a, int b) {\n    return a + b;\n}\npublic static void gruesse(String name) {\n    System.out.println(\"Hallo \" + name);\n}",
     "text": "Rückgabetyp vor dem Namen, void wenn nichts zurückkommt.",
     "q": "Skript Abschnitt 10.1"
    },
    {
     "name": "Varargs",
     "code": "public static int summe(int... werte) {\n    int s = 0;\n    for (int w : werte) s += w;\n    return s;\n}\nsumme();  summe(1, 2);  summe(new int[]{1, 2, 3});",
     "text": "Nur ein Varargs-Parameter, immer als letzter.",
     "q": "Skript Abschnitt 10.4"
    },
    {
     "name": "Rekursion (Schema)",
     "code": "static int fac(int n) {\n    if (n <= 1) return 1;       // Basisfall\n    return n * fac(n - 1);      // kleineres Problem\n}",
     "text": "Basisfall zuerst, dann Aufruf mit kleinerem Argument.",
     "q": "02-ImperativeRest, Folie 7"
    },
    {
     "name": "Javadoc",
     "code": "/**\n * Liefert das Maximum.\n * @param a erste Zahl\n * @param b zweite Zahl\n * @return die größere Zahl\n */",
     "text": "Steht direkt vor der Methode. Klassen bekommen @author.",
     "q": "02-ImperativeRest, Folie 27"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 2, Aufgabe 8: Verschachtelte Fallunterscheidung",
     "q": "Tutorium 2, Aufgabe 8",
     "text": "Welcher Wert e wird von diesem Code berechnet? Finde eine kürzere Variante mit nur drei if-Anweisungen.",
     "code": "if (b > a)\n    if (c > b)\n        if (d > c) e = d;\n        else e = c;\n    else\n        if (d > b) e = d;\n        else e = b;\nelse\n    if (c > a)\n        if (d > c) e = d;\n        else e = c;\n    else\n        if (d > a) e = d;\n        else e = a;",
     "loesung": [
      "Verfolge einen Zweig: b > a, c > b, d > c ergibt e = d. Ist d nicht größer als c, ist e = c. Es wird jeweils der größte bisher gesehene Wert weitergereicht.",
      "e ist also das Maximum von a, b, c und d.",
      "Kürzer: e = a setzen und dann mit drei einzelnen ifs prüfen, ob b, c oder d größer ist.",
      "Noch kürzer ginge Math.max(Math.max(a, b), Math.max(c, d)), aber gefragt waren drei ifs."
     ],
     "loesungCode": "public class Maximum {\n    public static void main(String[] args) {\n        double a = 3, b = 9, c = 4, d = 7;\n        double e = a;\n        if (b > e) e = b;\n        if (c > e) e = c;\n        if (d > e) e = d;\n        System.out.println(\"e = \" + e);\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 10: Ein Algorithmus, drei Schleifen",
     "q": "Tutorium 2, Aufgabe 10",
     "text": "Algorithmus: 1. Lies n ein. 2. Setze i auf 3. 3. Solange i < 2n: (a) erhöhe i um 1, (b) gib 3.14 / (2i - 1) aus. Implementiere ihn mit while, for und do-while (hier mit festem n = 3 statt Eingabe).",
     "loesung": [
      "while: Bedingung i < 2 * n vor jedem Durchlauf prüfen, im Rumpf erst i++, dann ausgeben.",
      "for: for (int i = 3; i < 2 * n; ) mit i++ im Rumpf, weil das Erhöhen vor der Ausgabe passieren muss. Oder for (int i = 4; i <= 2 * n; i++) und dann direkt ausgeben.",
      "do-while: läuft mindestens einmal. Damit es bei kleinem n (z. B. n = 1, also 2n = 2 < 3) nicht fälschlich einmal ausgibt, die Bedingung mit if davor absichern.",
      "Für n = 3 laufen alle drei Varianten mit i = 4, 5, 6 und geben 3.14/7, 3.14/9, 3.14/11 aus."
     ],
     "loesungCode": "public class DreiSchleifen {\n    public static void main(String[] args) {\n        int n = 3;\n        int i = 3;\n        while (i < 2 * n) {\n            i++;\n            System.out.println(3.14 / (2 * i - 1));\n        }\n        for (int k = 3; k < 2 * n; ) {\n            k++;\n            System.out.println(3.14 / (2 * k - 1));\n        }\n        int j = 3;\n        if (j < 2 * n) {\n            do {\n                j++;\n                System.out.println(3.14 / (2 * j - 1));\n            } while (j < 2 * n);\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 15: Ziffern zerlegen mit while und switch",
     "q": "Tutorium 2, Aufgabe 15; Musterlösung Zerlegung.java",
     "text": "Lies eine positive ganze Zahl ein, zerlege sie in ihre Ziffern und gib die Ziffern in umgekehrter Reihenfolge als Wort aus. Beispiel 35725: fuenf zwei sieben fuenf drei.",
     "loesung": [
      "Die letzte Ziffer ist zahl % 10. Danach zahl = zahl / 10, damit fällt sie weg.",
      "Das wiederholen, solange zahl != 0 ist (while, weil die Anzahl der Ziffern vorher unbekannt ist).",
      "Die Ziffer mit switch in ein Wort übersetzen, jeder case mit break.",
      "Weil wir von hinten abschneiden, kommen die Ziffern automatisch in umgekehrter Reihenfolge."
     ],
     "loesungCode": "public class Zerlegung {\n    public static void main(String[] args) {\n        int zahl = 35725;\n        while (zahl != 0) {\n            int rest = zahl % 10;\n            zahl = zahl / 10;\n            String ziffer = \"\";\n            switch (rest) {\n                case 0: ziffer = \"null\"; break;\n                case 1: ziffer = \"eins\"; break;\n                case 2: ziffer = \"zwei\"; break;\n                case 3: ziffer = \"drei\"; break;\n                case 4: ziffer = \"vier\"; break;\n                case 5: ziffer = \"fuenf\"; break;\n                case 6: ziffer = \"sechs\"; break;\n                case 7: ziffer = \"sieben\"; break;\n                case 8: ziffer = \"acht\"; break;\n                case 9: ziffer = \"neun\"; break;\n            }\n            System.out.println(ziffer);\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 17: Zwei Arrays vergleichen",
     "q": "Tutorium 2, Aufgabe 17",
     "text": "Warum kann man zwei Variablen a und b vom Typ int[] nicht mit a == b vergleichen? Schreibe Code, der true liefert, genau dann wenn alle Komponenten übereinstimmen.",
     "loesung": [
      "a und b sind Referenzen. a == b ist nur true, wenn beide auf dasselbe Array-Objekt zeigen. Zwei verschiedene Arrays mit gleichem Inhalt liefern false.",
      "Zuerst null und die Längen prüfen. Verschiedene Längen bedeuten: nicht gleich.",
      "Dann Element für Element vergleichen. Beim ersten Unterschied sofort false zurückgeben.",
      "Kommt die Schleife ohne Unterschied durch, true zurückgeben. (Fertig gibt es das als Arrays.equals(a, b).)"
     ],
     "loesungCode": "public class ArrayVergleich {\n    static boolean gleich(int[] a, int[] b) {\n        if (a == null || b == null) {\n            return a == b;\n        }\n        if (a.length != b.length) {\n            return false;\n        }\n        for (int i = 0; i < a.length; i++) {\n            if (a[i] != b[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = {1, 2, 3};\n        System.out.println(a == b);\n        System.out.println(gleich(a, b));\n        System.out.println(gleich(a, new int[]{1, 2}));\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 19 und 20: n-dimensionale Arrays und verschachtelte for-Schleife",
     "q": "Tutorium 2, Aufgabe 19 und 20",
     "text": "a) Ergänze die alternative Form von int[][][] feld = new int[6][10][7]; mit new int[6][][] und zwei Schleifen. b) Schreibe eine verschachtelte for-Schleife, die diese Tabelle ausgibt: Zeile 1: 1 2 3 4 5 6 7 8, Zeile 2: 2 3 ... 9, bis Zeile 8: 8 9 ... 15.",
     "loesung": [
      "a) Die erste Dimension hat 6 Einträge (d1 < 6). Jeder Eintrag bekommt ein neues int[10][] (zweite Dimension). Jeder davon (d2 < 10) ein neues int[7].",
      "b) Äußere Schleife für die Zeilen i = 1 bis 8, innere für die Spalten j = 0 bis 7. Der Wert ist i + j.",
      "Nach jeder Zeile ein println() für den Zeilenumbruch."
     ],
     "loesungCode": "public class Mehrdimensional {\n    public static void main(String[] args) {\n        int[][][] feld = new int[6][][];\n        for (int d1 = 0; d1 < feld.length; d1++) {\n            feld[d1] = new int[10][];\n            for (int d2 = 0; d2 < feld[d1].length; d2++) {\n                feld[d1][d2] = new int[7];\n            }\n        }\n        System.out.println(feld.length + \" \" + feld[0].length + \" \" + feld[0][0].length);\n        for (int i = 1; i <= 8; i++) {\n            for (int j = 0; j < 8; j++) {\n                System.out.print((i + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 22: Zahlen sortieren (Bubble Sort)",
     "q": "Tutorium 2, Aufgabe 22; Musterlösung Bubblesort.java",
     "text": "Sortiere ein int-Array aufsteigend: count - 1 Mal wiederholen: Für j von 0 bis count - 2: ist zahl[j] > zahl[j + 1], tausche die beiden. Danach ausgeben. Beispiel: 86 47 22 58 61 12 ergibt 12 22 47 58 61 86.",
     "loesung": [
      "Äußere Schleife: count - 1 Durchgänge.",
      "Innere Schleife: benachbarte Paare j und j + 1 vergleichen. j läuft nur bis count - 2, sonst wäre j + 1 außerhalb des Arrays (Off-by-one).",
      "Tauschen immer über eine Hilfsvariable: int k = zahl[j]; zahl[j] = zahl[j + 1]; zahl[j + 1] = k;",
      "Nach jedem Durchgang ist das größte noch unsortierte Element ganz hinten angekommen („aufgestiegen wie eine Blase“). Mehr dazu in Kapitel 4."
     ],
     "loesungCode": "public class Bubblesort {\n    public static void main(String[] args) {\n        int[] zahl = {86, 47, 22, 58, 61, 12};\n        int count = zahl.length;\n        for (int i = 0; i < count - 1; i++) {\n            for (int j = 0; j < count - 1; j++) {\n                if (zahl[j] > zahl[j + 1]) {\n                    int k = zahl[j];\n                    zahl[j] = zahl[j + 1];\n                    zahl[j + 1] = k;\n                }\n            }\n        }\n        for (int i = 0; i < count; i++) {\n            System.out.print(zahl[i] + \" \");\n        }\n        System.out.println();\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 26: Fibonacci iterativ und rekursiv",
     "q": "Tutorium 2, Aufgabe 26; Musterlösung Fibonacci.java",
     "text": "Die Fibonacci-Folge beginnt mit 0 und 1, jede weitere Zahl ist die Summe der beiden vorherigen. Berechne die n-te Fibonacci-Zahl einmal mit einer while-Schleife und einmal rekursiv. Vergleiche die Laufzeit für größere n mit System.currentTimeMillis().",
     "loesung": [
      "Rekursiv: Basisfall n <= 1 liefert n. Sonst fib(n - 1) + fib(n - 2). Das ist eine direkte Übersetzung der Definition.",
      "Iterativ: zwei Variablen a = 0 und b = 1. In jedem Schritt c = a + b, dann a = b, b = c. Nach n Schritten steht das Ergebnis in a.",
      "Die rekursive Version ruft dieselben Werte immer wieder neu auf. Die Zahl der Aufrufe wächst exponentiell. Für n = 40 dauert sie spürbar, die Schleife braucht praktisch keine Zeit.",
      "Das bestätigt die Folie: Rekursion ist oft eleganter, aber teurer."
     ],
     "loesungCode": "public class Fibonacci {\n    static int fibRek(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return fibRek(n - 1) + fibRek(n - 2);\n    }\n\n    static int fibIter(int n) {\n        int a = 0, b = 1;\n        while (n >= 1) {\n            int c = a + b;\n            a = b;\n            b = c;\n            n--;\n        }\n        return a;\n    }\n\n    public static void main(String[] args) {\n        for (int n = 0; n <= 10; n++) {\n            System.out.print(fibIter(n) + \" \");\n        }\n        System.out.println();\n        System.out.println(fibRek(20) == fibIter(20));\n        long start = System.currentTimeMillis();\n        fibRek(30);\n        long dauer = System.currentTimeMillis() - start;\n        System.out.println(dauer >= 0);\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 27: Array rekursiv ausgeben",
     "q": "Tutorium 2, Aufgabe 27; Musterlösung Printer.java",
     "text": "Schreibe die Methode print, die ein int-Array im Format [1, 2, 3] ausgibt, rekursiv statt mit for-Schleife.",
     "loesung": [
      "Rekursion über den Index: Eine Hilfsmethode bekommt das Array und die aktuelle Position i.",
      "Basisfall: i == array.length. Dann die schließende Klammer ausgeben und fertig.",
      "Bei i == 0 zuerst die öffnende Klammer ausgeben.",
      "Element an Position i ausgeben, dahinter \", \", außer beim letzten Element. Dann rekursiv mit i + 1 weiter."
     ],
     "loesungCode": "public class Printer {\n    static void printRecursive(int[] array) {\n        print(array, 0);\n    }\n\n    private static void print(int[] array, int i) {\n        if (i == 0) {\n            System.out.print(\"[\");\n        }\n        if (i == array.length) {\n            System.out.println(\"]\");\n            return;\n        }\n        System.out.print(array[i]);\n        if (i != array.length - 1) {\n            System.out.print(\", \");\n        }\n        print(array, i + 1);\n    }\n\n    public static void main(String[] args) {\n        printRecursive(new int[]{1, 2, 3, 4, 5});\n        printRecursive(new int[]{});\n    }\n}"
    },
    {
     "titel": "Tutorium 2, Aufgabe 29: Methode überladen",
     "q": "Tutorium 2, Aufgabe 29; Musterlösung Overloading.java",
     "text": "Die vorhandene Methode greet(long age, char name) enthält einen Schreibfehler („Hallöle“) und soll nicht gelöscht werden. Der Aufruf greet(100, 't') soll künftig eine neue, korrigierte Methode treffen. Schreibe sie.",
     "loesung": [
      "Der Aufruf übergibt ein int (100) und einen char ('t'). Die alte Methode passt nur über den impliziten Cast int → long.",
      "Eine Überladung greet(int age, char name) passt exakt und ist damit spezifischer. Java wählt sie automatisch.",
      "Die alte Methode bleibt stehen, wird von diesem Aufruf aber nicht mehr getroffen."
     ],
     "loesungCode": "public class Overloading {\n    public static void main(String[] args) {\n        greet(100, 't');\n    }\n\n    public static void greet(long age, char name) {\n        System.out.println(\"Hallöle, \" + name + \", du bist so alt: \" + age);\n    }\n\n    public static void greet(int age, char name) {\n        System.out.println(\"Hallo, \" + name + \", du bist so alt: \" + age);\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 10: Rekursion (6 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 10",
     "text": "Gegeben ist die iterative Methode mysteryIterative(double base, int exponent), die base hoch exponent berechnet, und der Einstieg mysteryRecursive(base, exponent), der mysteryRecursive(base, exponent, 1) aufruft. Schreibe die fehlende Überladung mysteryRecursive(double base, int exponent, double currentResult) so, dass sie dasselbe rekursiv berechnet.",
     "code": "public static double mysteryIterative(double base, int exponent) {\n    double result = 1;\n    for (int i = 0; i < exponent; i++) {\n        result *= base;\n    }\n    return result;\n}\n\npublic static double mysteryRecursive(double base, int exponent) {\n    double currentResult = 1;\n    return mysteryRecursive(base, exponent, currentResult);\n}\n// Your implementation here:",
     "loesung": [
      "Die Schleife multipliziert exponent Mal mit base. Der Zähler läuft von 0 bis exponent - 1.",
      "Rekursiv übernimmt exponent die Rolle des Zählers: Jeder Aufruf multipliziert einmal und ruft sich mit exponent - 1 auf.",
      "currentResult trägt das Zwischenergebnis mit (wie result in der Schleife).",
      "Basisfall: exponent <= 0. Dann ist nichts mehr zu multiplizieren, currentResult wird zurückgegeben.",
      "Kontrolle mit main: beide Varianten liefern für (4, 5) den Wert 1024.0."
     ],
     "loesungCode": "public class Mystery {\n    public static void main(String[] args) {\n        System.out.println(mysteryIterative(4, 5));\n        System.out.println(mysteryRecursive(4, 5));\n    }\n\n    public static double mysteryIterative(double base, int exponent) {\n        double result = 1;\n        for (int i = 0; i < exponent; i++) {\n            result *= base;\n        }\n        return result;\n    }\n\n    public static double mysteryRecursive(double base, int exponent) {\n        double currentResult = 1;\n        return mysteryRecursive(base, exponent, currentResult);\n    }\n\n    public static double mysteryRecursive(double base, int exponent, double currentResult) {\n        if (exponent <= 0) {\n            return currentResult;\n        }\n        return mysteryRecursive(base, exponent - 1, currentResult * base);\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 1c: Boolean-Quadrat erzeugen (4 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 1c",
     "text": "Implementiere eine Methode create, die ein quadratisches boolean-Array (2D) zurückgibt. Die Seitenlänge wird als ganzzahliger Parameter übergeben. Eine Zelle soll true sein, wenn die Position im inneren Array ohne Rest durch drei teilbar ist, sonst false. Bei ungültigem Parameter soll null zurückgegeben werden.",
     "loesung": [
      "Ungültig ist eine Seitenlänge kleiner als 1 (negativ würde sogar eine NegativeArraySizeException auslösen). Dann return null.",
      "new boolean[n][n] anlegen. Alle Zellen sind danach false.",
      "Zwei Schleifen: i für das äußere Array, j für die Position im inneren Array.",
      "Zelle setzen: feld[i][j] = (j % 3 == 0). Der Vergleich liefert direkt den boolean, ein if ist nicht nötig. Position 0 zählt als teilbar (0 % 3 == 0)."
     ],
     "loesungCode": "public class Create {\n    public static boolean[][] create(int n) {\n        if (n <= 0) {\n            return null;\n        }\n        boolean[][] feld = new boolean[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                feld[i][j] = (j % 3 == 0);\n            }\n        }\n        return feld;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(Arrays.deepToString(create(4)));\n        System.out.println(create(-1));\n    }\n}"
    }
   ]
  },
  {
   "id": "k3",
   "titel": "Kapitel 3: Objektorientierung – Klassen, Objekte, Vererbung, Interfaces",
   "abschnitt": "VL ab 13.11.2026 (Part III: Object-Oriented Programming), Tutorium 3",
   "seiten": "Folien 03-OOP: III-A Classes and Objects, III-B Data Representation Classes, III-C Inheritance and Object Creation, III-D Abstract Types and Enums, III-E Advanced OOP Concepts",
   "kurz": [
     "Klasse = Bauplan mit Attributen und Methoden. Objekt = Instanz davon, erzeugt mit new.",
     "Konstruktor heißt wie die Klasse und hat keinen Rückgabetyp. this.x = x unterscheidet Attribut und Parameter.",
     "Kapselung: Attribute private, Zugriff über Getter und Setter. static gehört zur Klasse, nicht zum Objekt.",
     "== vergleicht Referenzen, equals den Inhalt. Zugriff auf null gibt eine NullPointerException.",
     "Vererbung mit extends, super(...) steht als erste Zeile im Konstruktor. Jede Klasse erbt von Object.",
     "Dynamische Bindung: Der deklarierte Typ bestimmt, was erlaubt ist, der tatsächliche Typ, welche Methode läuft."
   ],
   "quellen": [
    {
     "name": "Vorlesung 3: Object-Oriented Programming",
     "pfad": "material/Prog1/Vorlesung/P1_03-OOP.pdf"
    },
    {
     "name": "Tutorium 3: Objektorientierung",
     "pfad": "material/Prog1/Tutorien/P1_03-objektorientierung.pdf"
    },
    {
     "name": "Code: Musterlösungen Tutorium 3 (Zip)",
     "pfad": "material/Prog1/Code/P1_tut03_ml.zip"
    },
    {
     "name": "Code: Vorlage Tutorium 3 (Zip)",
     "pfad": "material/Prog1/Code/P1_tut03_vorlage.zip"
    },
    {
     "name": "Altklausur WS 24/25",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Erstklausur_WS2425_ohne_Lo_sungen.pdf"
    },
    {
     "name": "Altklausur WS 14/15",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Hauptklausur_WS1415_ohne_Lo_sung.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Klassen und Objekte: Bauplan und Haus",
     "text": [
      "Bisher standen Daten lose nebeneinander: ein Array für Adressen, eins für Baujahre, eins für Besitzer. Nichts verbindet sie. Objektorientierung bündelt zusammengehörige Daten und das Verhalten dazu.",
      "Eine Klasse (class) ist ein Bauplan. Sie beschreibt, welche Eigenschaften (Attribute, Felder, Instanzvariablen) und Fähigkeiten (Methoden) ihre Objekte haben. Ein Objekt (Instanz) ist ein konkretes Ding nach diesem Plan. Klasse House, Objekte: dein Haus, mein Haus.",
      "Ein Objekt erzeugst du mit new: House h = new House(); Die Variable h ist, wie bei Arrays, eine Referenz auf das Objekt. Auf Attribute greifst du mit Punkt zu: h.owner = \"Ronja\"; Attribute ohne Zuweisung haben Standardwerte (0, false, null), anders als lokale Variablen.",
      "Jedes Objekt hat seine eigenen Attributwerte. Ändern von h1.owner lässt h2.owner unberührt.",
      "Alltagsvergleich: Die Klasse ist der Bauplan beim Architekten, das Objekt das gebaute Haus. Nach einem Plan kann man viele Häuser bauen, jedes mit eigener Hausnummer und eigenen Bewohnern."
     ],
     "code": "class House {\n    String owner;\n    int yearBuilt;\n    boolean hasGarden;\n}\n\npublic class Siedlung {\n    public static void main(String[] args) {\n        House h1 = new House();\n        h1.owner = \"Ronja\";\n        h1.yearBuilt = 1998;\n        House h2 = new House();\n        h2.owner = \"Lea\";\n        System.out.println(h1.owner + \" \" + h1.yearBuilt + \" \" + h1.hasGarden);\n        System.out.println(h2.owner + \" \" + h2.yearBuilt);\n    }\n}",
     "ausgabe": "Ronja 1998 false\nLea 0",
     "merke": "Klasse = Bauplan, Objekt = Exemplar. new erzeugt ein Objekt, die Variable hält eine Referenz darauf."
    },
    {
     "titel": "Instanzmethoden und this",
     "text": [
      "Methoden ohne static heißen Instanzmethoden. Sie gehören zu einem Objekt und werden über das Objekt aufgerufen: konto.einzahlen(50); In der Methode kannst du direkt auf die Attribute genau dieses Objekts zugreifen.",
      "this ist die Referenz auf das aktuelle Objekt, also das Objekt vor dem Punkt beim Aufruf. Du brauchst this, wenn ein Parameter genauso heißt wie ein Attribut. Dann verdeckt der Parameter das Attribut (shadowing). this.stand ist das Attribut, stand der Parameter.",
      "Häufiger Fehler: Im Setter stand = stand; schreiben. Das weist den Parameter sich selbst zu, das Attribut bleibt unverändert.",
      "Alltagsvergleich: this ist wie das Wort „ich“. Wenn jedes Konto sagt „mein Stand“, meint jedes seinen eigenen."
     ],
     "code": "class Konto {\n    double stand;\n\n    void einzahlen(double betrag) {\n        stand = stand + betrag;      // Attribut dieses Objekts\n    }\n\n    void setStandFalsch(double stand) {\n        stand = stand;               // Parameter = Parameter, Attribut unverändert\n    }\n\n    void setStand(double stand) {\n        this.stand = stand;          // Attribut = Parameter\n    }\n}\n\npublic class Bank {\n    public static void main(String[] args) {\n        Konto k = new Konto();\n        k.einzahlen(50);\n        k.einzahlen(25);\n        System.out.println(k.stand);\n        k.setStandFalsch(1000);\n        System.out.println(k.stand);\n        k.setStand(1000);\n        System.out.println(k.stand);\n    }\n}",
     "ausgabe": "75.0\n75.0\n1000.0",
     "merke": "this zeigt auf das Objekt, für das die Methode gerade läuft. this.x = x; setzt das Attribut."
    },
    {
     "titel": "Konstruktoren",
     "text": [
      "Ein Konstruktor (constructor) baut ein Objekt beim new fertig zusammen, typischerweise setzt er die Attribute. Er heißt genau wie die Klasse und hat keinen Rückgabetyp, auch nicht void.",
      "Schreibst du keinen Konstruktor, erzeugt der Compiler einen leeren Standardkonstruktor ohne Parameter. Sobald du selbst einen Konstruktor schreibst, gibt es diesen Standardkonstruktor nicht mehr. new Punkt() ist dann ein Compilerfehler, wenn du ihn nicht selbst dazuschreibst (Tutorium 3, Aufgabe 11.5).",
      "Konstruktoren lassen sich überladen. Mit this(...) als erster Zeile ruft ein Konstruktor einen anderen derselben Klasse auf. So steht die Logik nur an einer Stelle.",
      "Alltagsvergleich: Der Konstruktor ist die Endmontage in der Fabrik. Bevor das Auto ausgeliefert wird, bekommt es Farbe und Nummernschild."
     ],
     "code": "class Punkt {\n    double x, y;\n\n    Punkt(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    Punkt() {\n        this(0, 0);          // ruft den anderen Konstruktor auf\n    }\n\n    double abstandZumUrsprung() {\n        return Math.sqrt(x * x + y * y);\n    }\n}\n\npublic class PunktTest {\n    public static void main(String[] args) {\n        Punkt p = new Punkt(3, 4);\n        Punkt q = new Punkt();\n        System.out.println(p.abstandZumUrsprung());\n        System.out.println(q.x + \" \" + q.y);\n    }\n}",
     "ausgabe": "5.0\n0.0 0.0",
     "merke": "Konstruktor = Name der Klasse, kein Rückgabetyp. Eigener Konstruktor → kein automatischer Standardkonstruktor mehr."
    },
    {
     "titel": "Kapselung: private, Getter und Setter",
     "text": [
      "Kapselung (encapsulation, data hiding) heißt: Die Daten eines Objekts sind von außen nicht direkt zugänglich. Zugriff gibt es nur über Methoden. So kann die Klasse ungültige Werte verhindern, z. B. einen Nenner 0.",
      "Zugriffsmodifikatoren (access modifiers): private sieht nur die eigene Klasse. Ohne Modifier (package-private) sehen es alle Klassen im selben Paket. protected sieht zusätzlich jede Unterklasse. public sieht jeder.",
      "Gute Praxis laut Vorlesung: alle Attribute private, Zugriff über Getter (getName()) und Setter (setName(...)). Bei boolean heißt der Getter isName() (z. B. isOpen()). Ausnahme: Konstanten wie public static final double PI.",
      "Greift Code von außen auf ein private-Attribut zu, ist das ein Compilerfehler: x has private access in Klasse.",
      "Alltagsvergleich: Ein Geldautomat. Du kommst nicht direkt an das Geld im Tresor (private), sondern nur über die Tasten (Methoden). Der Automat prüft, ob die Abhebung erlaubt ist."
     ],
     "code": "class Bruch {\n    private int zaehler;\n    private int nenner = 1;\n\n    public int getNenner() {\n        return nenner;\n    }\n\n    public void setNenner(int nenner) {\n        if (nenner != 0) {           // Schutz vor ungültigem Wert\n            this.nenner = nenner;\n        }\n    }\n}\n\npublic class Kapselung {\n    public static void main(String[] args) {\n        Bruch b = new Bruch();\n        b.setNenner(0);\n        System.out.println(b.getNenner());\n        b.setNenner(4);\n        System.out.println(b.getNenner());\n        // b.nenner = 0;   wäre ein Compilerfehler: nenner has private access\n    }\n}",
     "ausgabe": "1\n4",
     "merke": "private < (package) < protected < public. Attribute private, Zugriff über Getter und Setter."
    },
    {
     "titel": "static: Klassenvariablen und Klassenmethoden",
     "text": [
      "Ein Attribut mit static gehört der Klasse, nicht dem einzelnen Objekt. Es existiert genau einmal, egal wie viele Objekte es gibt. Alle Objekte teilen es. Zugriff über den Klassennamen: Haustier.naechsteId.",
      "Typisches Beispiel aus Tutorium 3, Aufgabe 11: Eine Klassenvariable nextUniqueId zählt mit, jeder Konstruktor gibt dem neuen Tier die nächste Nummer (Instanzvariable uniqueId) und erhöht den Zähler.",
      "static-Methoden (Klassenmethoden) wie Math.sqrt oder main brauchen kein Objekt. Deshalb gibt es in ihnen kein this, und sie können nicht direkt auf Instanzvariablen zugreifen. Fehlermeldung: non-static variable cannot be referenced from a static context.",
      "final macht eine Variable unveränderlich. public static final int MAX = 10; ist eine Konstante.",
      "Alltagsvergleich: Das schwarze Brett im Flur gehört allen Bewohnern gemeinsam (static), der Briefkasten jedem einzeln (Instanzvariable)."
     ],
     "code": "class Haustier {\n    private static int nextUniqueId = 1;   // gehört der Klasse\n    private final int uniqueId;            // gehört dem Objekt\n    private String name;\n\n    Haustier(String name) {\n        this.name = name;\n        this.uniqueId = nextUniqueId;\n        nextUniqueId++;\n    }\n\n    static int getNextUniqueId() {\n        return nextUniqueId;\n    }\n\n    public String toString() {\n        return name + \" (#\" + uniqueId + \")\";\n    }\n}\n\npublic class Tierheim {\n    public static void main(String[] args) {\n        Haustier a = new Haustier(\"May\");\n        Haustier b = new Haustier(\"Gadze\");\n        Haustier c = new Haustier(\"Grigri\");\n        System.out.println(a + \", \" + b + \", \" + c);\n        System.out.println(Haustier.getNextUniqueId());\n    }\n}",
     "ausgabe": "May (#1), Gadze (#2), Grigri (#3)\n4",
     "merke": "static = einmal pro Klasse, von allen Objekten geteilt. Kein this in static-Methoden."
    },
    {
     "titel": "Referenzen, null, == und equals, toString",
     "text": [
      "Objektvariablen enthalten Referenzen. Punkt q = p; erzeugt kein neues Objekt, beide zeigen auf dasselbe. Ändert man q.x, ändert sich p.x mit. Zeichne dir in Klausuraufgaben Kästchen für Objekte und Pfeile für Referenzen.",
      "null heißt: zeigt auf kein Objekt. Ein Methodenaufruf oder Attributzugriff auf null wirft eine NullPointerException.",
      "Jede Klasse erbt automatisch von Object (Kapitel Vererbung). Von dort kommen equals und toString. equals vergleicht standardmäßig nur die Referenzen (wie ==). Für inhaltliche Gleichheit überschreibst du equals in deiner Klasse (und dann auch hashCode).",
      "toString liefert eine Textdarstellung. Ohne Überschreiben kommt Klassenname@Hashcode heraus, z. B. Punkt@1b6d3586. println(obj) und \"Text\" + obj rufen toString automatisch auf. Deshalb überschreibt man toString in fast jeder Klasse.",
      "Alltagsvergleich zur Referenz: Die Variable ist ein Zettel mit einer Hausadresse. Zwei Zettel mit derselben Adresse führen zum selben Haus. Streichst du über den einen Zettel die Haustür an, sieht man es auch, wenn man mit dem anderen Zettel hingeht."
     ],
     "code": "class Punkt {\n    int x, y;\n\n    Punkt(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (!(o instanceof Punkt)) {\n            return false;\n        }\n        Punkt p = (Punkt) o;\n        return x == p.x && y == p.y;\n    }\n\n    @Override\n    public int hashCode() {\n        return 31 * x + y;\n    }\n\n    @Override\n    public String toString() {\n        return \"(\" + x + \", \" + y + \")\";\n    }\n}\n\npublic class Referenzen {\n    public static void main(String[] args) {\n        Punkt p = new Punkt(1, 2);\n        Punkt q = p;\n        q.x = 9;\n        System.out.println(p);\n        Punkt r = new Punkt(9, 2);\n        System.out.println(p == r);\n        System.out.println(p.equals(r));\n        Punkt n = null;\n        System.out.println(\"n ist \" + n);\n    }\n}",
     "ausgabe": "(9, 2)\nfalse\ntrue\nn ist null",
     "merke": "== vergleicht Referenzen, equals (wenn überschrieben) den Inhalt. println ruft toString auf."
    },
    {
     "titel": "Wrapper-Klassen und Autoboxing",
     "text": [
      "Zu jedem primitiven Typ gibt es eine Wrapper-Klasse, die den Wert als Objekt verpackt: int → Integer, double → Double, char → Character, boolean → Boolean, long → Long und so weiter. Das braucht man für Datenstrukturen wie ArrayList<Integer>, die nur Objekte speichern (Kapitel 4).",
      "Seit Java 5 wandelt Java automatisch um: Autoboxing (int → Integer) und Unboxing (Integer → int). Integer i = 5; und int j = i + 1; funktionieren einfach.",
      "Die Wrapper haben nützliche Klassenmethoden: Integer.parseInt(\"5\"), Double.parseDouble(\"2.5\"), Integer.MAX_VALUE, Character.isDigit('7').",
      "Falle: Integer-Objekte mit == vergleichen. Java hält die Werte von -128 bis 127 in einem Cache, da zeigt == zufällig auf dasselbe Objekt. Bei 128 nicht mehr. Wrapper deshalb wie alle Objekte mit equals vergleichen."
     ],
     "code": "Integer a = 100, b = 100;\nInteger c = 1000, d = 1000;\nSystem.out.println(a == b);\nSystem.out.println(c == d);\nSystem.out.println(c.equals(d));\nint summe = c + d;            // Unboxing\nSystem.out.println(summe);\nSystem.out.println(Integer.parseInt(\"41\") + 1);\nSystem.out.println(Character.isDigit('7'));",
     "ausgabe": "true\nfalse\ntrue\n2000\n42\ntrue",
     "merke": "Wrapper sind Objekte: mit equals vergleichen. Autoboxing wandelt automatisch zwischen int und Integer."
    },
    {
     "titel": "Vererbung: extends und super",
     "text": [
      "Alltagsvergleich: Kinder erben Eigenschaften der Eltern und haben zusätzlich eigene. Ein Turm ist ein Gebäude mit allem, was Gebäude haben, plus einem Zweck.",
      "Ein Turm, eine Hundehütte und ein Mietshaus sind alles Gebäude. Gemeinsames (Höhe, Besitzer) gehört in die Oberklasse Building. Jede Unterklasse erbt es mit extends und ergänzt Eigenes: class Tower extends Building. Eine Klasse hat genau eine direkte Oberklasse.",
      "Die Unterklasse erbt alle Attribute und Methoden. private-Attribute der Oberklasse sind zwar vorhanden, aber in der Unterklasse nicht direkt sichtbar. protected-Attribute schon.",
      "Konstruktoren werden nicht vererbt. Die Unterklasse ruft mit super(...) in der ersten Zeile einen Konstruktor der Oberklasse auf. Steht dort weder this(...) noch super(...), setzt der Compiler automatisch super(); ein. Hat die Oberklasse keinen parameterlosen Konstruktor, ist das ein Compilerfehler.",
      "Ein Objekt der Unterklasse ist auch ein Objekt der Oberklasse. Building b = new Tower(...); ist erlaubt (ein Turm ist ein Gebäude), umgekehrt nicht."
     ],
     "code": "class Building {\n    protected int height;\n    protected String owner;\n\n    Building(int height, String owner) {\n        this.height = height;\n        this.owner = owner;\n    }\n\n    String info() {\n        return owner + \", \" + height + \" m\";\n    }\n}\n\nclass Tower extends Building {\n    private String purpose;\n\n    Tower(String purpose, int height, String owner) {\n        super(height, owner);        // Konstruktor der Oberklasse\n        this.purpose = purpose;\n    }\n\n    String getPurpose() {\n        return purpose;\n    }\n}\n\npublic class Stadt {\n    public static void main(String[] args) {\n        Tower t = new Tower(\"Fernsehturm\", 368, \"Berlin\");\n        System.out.println(t.info());          // geerbte Methode\n        System.out.println(t.getPurpose());\n        Building b = t;                        // ein Tower ist ein Building\n        System.out.println(b.height);\n    }\n}",
     "ausgabe": "Berlin, 368 m\nFernsehturm\n368",
     "merke": "extends erbt Attribute und Methoden. Konstruktoren nicht: super(...) muss die erste Zeile sein."
    },
    {
     "titel": "Überschreiben und dynamische Bindung",
     "text": [
      "Eine Unterklasse kann eine geerbte Methode überschreiben (override): gleiche Signatur, neues Verhalten. Die Annotation @Override darüber lässt den Compiler prüfen, dass es die Methode oben wirklich gibt. Verwechsle das nicht mit Überladen (gleicher Name, andere Parameter).",
      "Welche Version läuft, entscheidet die JVM zur Laufzeit nach dem echten Objekt. Das heißt dynamische Bindung (dynamic binding). Regel der Vorlesung: Der deklarierte Typ der Variable bestimmt, welche Aufrufe der Compiler erlaubt. Der tatsächliche Typ des Objekts bestimmt, welche Implementierung ausgeführt wird.",
      "Das ist Polymorphie (Vielgestaltigkeit): Eine Variable vom Typ Building kann ein Tower oder eine Kennel sein und verhält sich jeweils passend.",
      "Mit super.methode() rufst du in der überschreibenden Methode die Version der Oberklasse auf, z. B. um sie nur zu ergänzen. Achtung: Bei static-Methoden und bei Attributen gibt es keine dynamische Bindung, dort zählt der deklarierte Typ.",
      "Alltagsvergleich: Alle Tiere „geben Laut“, aber der Hund bellt und die Katze miaut. Wer „Tier, gib Laut!“ ruft, bekommt je nach echtem Tier etwas anderes zu hören. Das ist Polymorphie."
     ],
     "code": "class Building {\n    void paint() {\n        System.out.println(\"Building\");\n    }\n}\n\nclass Tower extends Building {\n    @Override\n    void paint() {\n        super.paint();\n        System.out.println(\"Tower\");\n    }\n}\n\nclass Kennel extends Building { }\n\npublic class Bindung {\n    public static void main(String[] args) {\n        Building[] stadt = {new Building(), new Tower(), new Kennel()};\n        for (Building b : stadt) {\n            b.paint();\n            System.out.println(\"--\");\n        }\n    }\n}",
     "ausgabe": "Building\n--\nBuilding\nTower\n--\nBuilding\n--",
     "merke": "Deklarierter Typ: was darf ich aufrufen? Tatsächlicher Typ: welche Version läuft?"
    },
    {
     "titel": "Reihenfolge der Objekterzeugung",
     "text": [
      "Diese Aufgabe kommt in jeder Altklausur: „Was gibt das Programm aus?“ mit static-Feldern, Instanzfeldern und Konstruktoren über mehrere Vererbungsstufen.",
      "Phase 1, Klassen laden (einmal pro Klasse, beim ersten Zugriff): Erst wird die Oberklasse geladen, dann die Klasse selbst. Beim Laden werden die static-Variablen und static-Blöcke in der Reihenfolge ausgeführt, in der sie im Code stehen. Die Klasse mit main wird als erste geladen.",
      "Phase 2, bei jedem new: Der Konstruktor ruft (explizit oder implizit) super() auf, das geht hoch bis Object. Dann wird von oben nach unten für jede Klasse: erst die Instanzvariablen initialisieren, dann der restliche Konstruktorrumpf ausgeführt.",
      "Kurz: static von oben nach unten, dann pro new: Oberklasse (Felder, Konstruktor), dann Unterklasse (Felder, Konstruktor). Das Beispiel ist Tutorium 3, Aufgabe 12."
     ],
     "code": "class Tiger {\n    Tiger() {\n        System.out.println(\"Tiger\");\n    }\n}\n\nclass Monkey extends Tiger {\n    Monkey() {\n        System.out.println(\"Monkey\");\n    }\n}\n\nclass Squirrel extends Monkey {\n    Tiger t = new Tiger();\n    Squirrel() {\n        System.out.println(\"Squirrel\");\n    }\n}\n\npublic class TestSquirrel {\n    Monkey m = new Monkey();\n    static Tiger t = new Tiger();\n\n    public static void main(String[] args) {\n        Squirrel s = new Squirrel();\n    }\n}",
     "ausgabe": "Tiger\nTiger\nMonkey\nTiger\nSquirrel",
     "merke": "Erst static (beim Laden), dann pro new von der obersten Klasse abwärts: Felder, dann Konstruktorrumpf."
    },
    {
     "titel": "Abstrakte Klassen und Interfaces",
     "text": [
      "Was ist „ein Gebäude“ an sich? Nichts Konkretes. Eine abstrakte Klasse (abstract class) kann man nicht mit new erzeugen. Sie kann abstrakte Methoden haben: nur der Kopf, kein Rumpf, Semikolon am Ende. Jede konkrete Unterklasse muss sie implementieren. Sonst muss sie selbst abstract sein.",
      "Oft ruft eine normale Methode der abstrakten Klasse abstrakte Methoden auf (repair ruft replaceRoof und paint). Was genau passiert, legt jede Unterklasse fest.",
      "Ein Interface beschreibt Fähigkeiten über Klassenhierarchien hinweg, z. B. CanSwim für Hausboot, Ente und Fisch. Eine Klasse kann nur eine Klasse erweitern (extends), aber beliebig viele Interfaces implementieren (implements). Methoden in Interfaces sind automatisch public abstract, Felder automatisch public static final. Seit Java 8 gibt es default-Methoden mit Rumpf.",
      "Faustregel der Vorlesung: Ist es in erster Linie ein XY (Substantiv)? Abstrakte Klasse. Ist es eine Zusatzfähigkeit (Adjektiv, „kann schwimmen“)? Interface.",
      "Alltagsvergleich: Eine abstrakte Klasse ist wie das Wort „Fahrzeug“: Es gibt kein Fahrzeug an sich, nur Autos, Busse, Fahrräder. Ein Interface ist wie ein Führerschein: Er bescheinigt eine Fähigkeit, und eine Person kann mehrere haben."
     ],
     "code": "abstract class House {\n    abstract void moveIn();\n}\n\ninterface CanSwim {\n    void swim();\n}\n\nclass HouseBoat extends House implements CanSwim {\n    @Override\n    void moveIn() {\n        System.out.println(\"Home sweet home!\");\n    }\n\n    @Override\n    public void swim() {\n        System.out.println(\"I am sailing!\");\n    }\n}\n\nclass Duck implements CanSwim {\n    @Override\n    public void swim() {\n        System.out.println(\"quack!\");\n    }\n}\n\npublic class Lake {\n    static void letThemSwim(CanSwim... swimmers) {\n        for (CanSwim cs : swimmers) {\n            cs.swim();\n        }\n    }\n\n    public static void main(String[] args) {\n        HouseBoat hb = new HouseBoat();\n        hb.moveIn();\n        letThemSwim(hb, new Duck());\n    }\n}",
     "ausgabe": "Home sweet home!\nI am sailing!\nquack!",
     "merke": "abstract class: nicht instanziierbar, eine Oberklasse. interface: Fähigkeit, beliebig viele pro Klasse."
    },
    {
     "titel": "Enums, innere und anonyme Klassen",
     "text": [
      "Ein enum ist ein Typ mit einer festen Liste von Werten: enum Farbe { WEISS, GRAU, GELB; } Statt int-Konstanten, bei denen jemand pickColor(42) übergeben könnte, erlaubt der Compiler nur gültige Werte. Jeder Wert ist ein Objekt, das es genau einmal gibt, deshalb geht == hier. Farbe.values() liefert alle Werte als Array, Farbe.valueOf(\"GRAU\") den passenden Wert. Enums funktionieren in switch und können Methoden haben.",
      "Eine innere Klasse steht in einer anderen Klasse (Gebäude enthält Aufzug). Eine nicht-statische innere Klasse gehört zu einem Objekt der äußeren und kann auf dessen Attribute zugreifen, auch private. Erzeugen von außen: aussen.new Innen(). Eine static innere Klasse braucht kein äußeres Objekt.",
      "Eine anonyme Klasse implementiert ein Interface (oder erweitert eine Klasse) direkt an der Stelle, wo sie gebraucht wird, ohne Namen: new CanSwim() { public void swim() { ... } }; Nützlich für einmalige Implementierungen.",
      "Alltagsvergleich: Ein enum ist wie die Auswahl auf einer Getränkekarte. Du kannst nur bestellen, was draufsteht."
     ],
     "code": "enum Farbe {\n    WEISS, GRAU, GELB;\n\n    boolean istHell() {\n        return this == WEISS || this == GELB;\n    }\n}\n\ninterface Gruss {\n    void sag();\n}\n\npublic class Extras {\n    private String name = \"Prog1\";\n\n    class Innen {\n        void zeige() {\n            System.out.println(\"Innen sieht \" + name);\n        }\n    }\n\n    public static void main(String[] args) {\n        for (Farbe f : Farbe.values()) {\n            System.out.print(f + \":\" + f.istHell() + \" \");\n        }\n        System.out.println();\n        System.out.println(Farbe.valueOf(\"GRAU\").ordinal());\n        Extras aussen = new Extras();\n        Extras.Innen i = aussen.new Innen();\n        i.zeige();\n        Gruss g = new Gruss() {\n            public void sag() {\n                System.out.println(\"Hallo aus der anonymen Klasse\");\n            }\n        };\n        g.sag();\n    }\n}",
     "ausgabe": "WEISS:true GRAU:false GELB:true \n1\nInnen sieht Prog1\nHallo aus der anonymen Klasse",
     "merke": "enum = feste Werteliste, Vergleich mit == erlaubt. Innere Klassen sehen die privaten Attribute der äußeren."
    }
   ],
   "zusammenfassung": [
    "Klasse = Bauplan mit Attributen (Zustand) und Methoden (Verhalten). Objekt = Instanz, erzeugt mit new. Objektvariablen speichern Referenzen. Attribute haben Standardwerte (0, false, null).",
    "Instanzmethoden arbeiten auf einem Objekt, this ist die Referenz darauf. this.x = x; unterscheidet Attribut und gleichnamigen Parameter.",
    "Konstruktor: Name der Klasse, kein Rückgabetyp, überladbar, this(...) ruft einen anderen auf. Wer einen eigenen schreibt, verliert den automatischen Standardkonstruktor.",
    "Sichtbarkeit: private (Klasse), ohne Modifier (Paket), protected (Paket + Unterklassen), public (alle). Attribute private, Zugriff über Getter/Setter (bei boolean isX()).",
    "static: Klassenvariable/-methode, einmal pro Klasse, Zugriff über Klassenname, kein this. final: unveränderlich, Konstanten public static final.",
    "== vergleicht Referenzen, equals den Inhalt (wenn überschrieben, dann auch hashCode). toString wird von println und + automatisch aufgerufen. Zugriff auf null → NullPointerException.",
    "Wrapper (Integer, Double, ...) mit Autoboxing. Vergleich mit equals, == nur im Cache -128 bis 127 zufällig true. String ist immutable, StringBuffer/StringBuilder veränderbar.",
    "Vererbung mit extends (eine Oberklasse). Konstruktoren werden nicht vererbt, super(...) als erste Zeile, sonst automatisch super(). Jede Klasse erbt von Object.",
    "Überschreiben = gleiche Signatur in Unterklasse (@Override). Dynamische Bindung: deklarierter Typ bestimmt erlaubte Aufrufe, tatsächlicher Typ die ausgeführte Version. super.m() ruft die Oberklassenversion.",
    "Objekterzeugung: static-Initialisierung beim Laden (Oberklasse zuerst, Reihenfolge im Code), dann pro new von oben nach unten Instanzfelder, dann Konstruktorrumpf.",
    "abstract class: nicht instanziierbar, kann abstrakte Methoden haben. interface: nur Methodenköpfe (public abstract), Konstanten, default-Methoden; eine Klasse kann viele implementieren. enum: feste Werteliste."
   ],
   "karten": [
    {
     "f": "Was ist der Unterschied zwischen Klasse und Objekt?",
     "a": "Die Klasse ist der Bauplan (welche Attribute und Methoden). Ein Objekt (Instanz) ist ein konkretes Exemplar mit eigenen Attributwerten, erzeugt mit new.",
     "q": "03-OOP, Folie 9–12"
    },
    {
     "f": "Was passiert bei Haustier d; und was bei d = new Haustier();?",
     "a": "Haustier d; legt nur eine Referenzvariable an (als Attribut null, lokal uninitialisiert). Erst new Haustier() erzeugt ein Objekt im Speicher, d zeigt danach darauf.",
     "q": "Tutorium 3, Aufgabe 11.2"
    },
    {
     "f": "Wofür braucht man this?",
     "a": "this ist die Referenz auf das aktuelle Objekt. Man braucht es, wenn ein Parameter das gleichnamige Attribut verdeckt (this.name = name), oder um this(...) einen anderen Konstruktor aufzurufen.",
     "q": "03-OOP, Folie 31–35"
    },
    {
     "f": "Woran erkennt man einen Konstruktor?",
     "a": "Er heißt genau wie die Klasse und hat keinen Rückgabetyp (auch nicht void). Er wird bei new aufgerufen.",
     "q": "03-OOP, Folie 36–38"
    },
    {
     "f": "Gibt es new Haustier() noch, wenn du Haustier(String name, int alter) schreibst?",
     "a": "Nein. Der automatische Standardkonstruktor entsteht nur, wenn die Klasse gar keinen Konstruktor hat. new Haustier() ist dann ein Compilerfehler, außer du schreibst Haustier() selbst.",
     "q": "Tutorium 3, Aufgabe 11.5"
    },
    {
     "f": "Nenne die vier Sichtbarkeitsstufen von eng nach weit.",
     "a": "private (nur eigene Klasse), ohne Modifier/package (gleiches Paket), protected (Paket + Unterklassen), public (überall).",
     "q": "03-OOP, Folie 26"
    },
    {
     "f": "Unterschied Klassenvariable und Instanzvariable?",
     "a": "Klassenvariable (static) existiert einmal pro Klasse, alle Objekte teilen sie, Zugriff über Klassenname. Instanzvariable existiert pro Objekt mit eigenem Wert.",
     "q": "03-OOP, Folie 13–16; Tutorium 3, Aufgabe 11.6"
    },
    {
     "f": "Warum kann main nicht direkt auf ein Instanzattribut zugreifen?",
     "a": "main ist static und läuft ohne Objekt. Es gibt kein this. Erst ein Objekt erzeugen, dann obj.attribut.",
     "q": "03-OOP, Folie 18–21"
    },
    {
     "f": "Wie verhinderst du, dass andere nextUniqueId überschreiben, aber lesen können?",
     "a": "private static int nextUniqueId; plus public static int getNextUniqueId() als Getter, ohne Setter.",
     "q": "Tutorium 3, Aufgabe 11.14"
    },
    {
     "f": "Warum muss man toString nicht selbst aufrufen bei System.out.println(d1)?",
     "a": "println(Object) ruft String.valueOf(obj) auf, und das ruft obj.toString() (oder liefert \"null\"). Dasselbe passiert bei \"Text\" + obj.",
     "q": "03-OOP, Folie 65"
    },
    {
     "f": "Was macht equals standardmäßig (von Object geerbt)?",
     "a": "return this == obj; also nur Referenzvergleich. Für Inhaltsvergleich in der eigenen Klasse überschreiben, dann auch hashCode passend überschreiben.",
     "q": "03-OOP, Folie 64"
    },
    {
     "f": "Was gibt das aus?",
     "code": "Integer a = 127, b = 127;\nInteger c = 128, d = 128;\nSystem.out.println((a == b) + \" \" + (c == d));",
     "a": "true false. -128 bis 127 kommen aus einem Cache (dasselbe Objekt), 128 nicht. Wrapper immer mit equals vergleichen.",
     "q": "03-OOP, Folie 45–47"
    },
    {
     "f": "Werden Konstruktoren vererbt? Was macht super(...)?",
     "a": "Nein. super(...) ruft als erste Anweisung einen Konstruktor der direkten Oberklasse auf. Fehlt this(...) oder super(...), fügt der Compiler super() ein.",
     "q": "03-OOP, Folie 69–71"
    },
    {
     "f": "Überladen oder Überschreiben?",
     "a": "Überladen (overloading): gleicher Name, andere Parameterliste, meist in derselben Klasse, Auswahl zur Compilezeit. Überschreiben (overriding): gleiche Signatur in einer Unterklasse, Auswahl zur Laufzeit (dynamische Bindung).",
     "q": "03-OOP, Folie 58–60; Skript Abschnitt 10.3"
    },
    {
     "f": "Was bestimmt der deklarierte Typ, was der tatsächliche Typ?",
     "a": "Deklarierter Typ (Variable): welche Methoden der Compiler erlaubt. Tatsächlicher Typ (Objekt): welche Implementierung zur Laufzeit läuft.",
     "q": "03-OOP, Folie 59–60, 86"
    },
    {
     "f": "In welcher Reihenfolge läuft die Objekterzeugung ab?",
     "a": "Beim ersten Zugriff: Klassen laden, Oberklasse zuerst, static-Felder und static-Blöcke in Code-Reihenfolge. Bei new: Konstruktorkette hoch bis Object, dann von oben nach unten je Klasse Instanzfelder initialisieren und Konstruktorrumpf ausführen.",
     "q": "03-OOP, Folie 73–79"
    },
    {
     "f": "Abstrakte Klasse oder Interface?",
     "a": "Abstrakte Klasse: „ist ein“ (Substantiv), kann Zustand und fertige Methoden haben, nur eine Oberklasse. Interface: Zusatzfähigkeit (Adjektiv, CanSwim), Methoden automatisch public abstract, Felder public static final, mehrere pro Klasse.",
     "q": "03-OOP, Folie 94"
    },
    {
     "f": "Was passiert hier?",
     "code": "abstract class Form {\n    abstract double flaeche();\n}\npublic class Test {\n    public static void main(String[] args) {\n        Form f = new Form();\n    }\n}",
     "a": "Compilerfehler: Form is abstract; cannot be instantiated. Abstrakte Klassen kann man nicht mit new erzeugen, nur ihre konkreten Unterklassen.",
     "q": "03-OOP, Folie 84"
    },
    {
     "f": "Was passiert hier?",
     "code": "Object o = \"Hallo\";\nInteger i = (Integer) o;",
     "a": "Kompiliert, aber zur Laufzeit ClassCastException: o zeigt auf einen String, der kein Integer ist. Vorher mit instanceof prüfen.",
     "q": "03-OOP, Folie 58–60"
    },
    {
     "f": "Wozu enums statt int-Konstanten?",
     "a": "Bei int-Konstanten kann man jeden int übergeben (pickColor(42)), Fehler erst zur Laufzeit. Ein enum lässt nur die definierten Werte zu, der Compiler prüft es.",
     "q": "03-OOP, Folie 97–99"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "class Zaehler {\n    int wert;\n    static int gesamt;\n\n    void plus() {\n        wert++;\n        gesamt++;\n    }\n}\n\npublic class Z {\n    public static void main(String[] args) {\n        Zaehler a = new Zaehler();\n        Zaehler b = new Zaehler();\n        a.plus();\n        a.plus();\n        b.plus();\n        System.out.println(a.wert + \" \" + b.wert + \" \" + Zaehler.gesamt);\n    }\n}",
     "loesung": "2 1 3",
     "erklaerung": "Zeile 1–2 in main: zwei Zaehler-Objekte a und b, jedes mit eigenem wert = 0. gesamt ist static, es gibt ihn nur einmal für alle. a.plus() zweimal: a.wert = 2, gesamt = 2. b.plus(): b.wert = 1, gesamt = 3. Ausgabe: 2 1 3.",
     "q": "03-OOP, Folie 13–16"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "class Box {\n    int inhalt;\n}\n\npublic class Refs {\n    static void setze(Box b, int x) {\n        b.inhalt = x;\n        b = new Box();\n        b.inhalt = 99;\n    }\n\n    public static void main(String[] args) {\n        Box a = new Box();\n        Box c = a;\n        c.inhalt = 5;\n        setze(a, 7);\n        System.out.println(a.inhalt + \" \" + c.inhalt);\n    }\n}",
     "loesung": "7 7",
     "erklaerung": "Zeile 1: a zeigt auf eine neue Box (inhalt 0). Zeile 2: c = a, beide zeigen auf dieselbe Box. Zeile 3: inhalt = 5. setze(a, 7): b ist eine Kopie des Verweises, b.inhalt = 7 ändert die gemeinsame Box. b = new Box() lässt b auf eine andere Box zeigen, 99 landet dort. a und c merken davon nichts. Ausgabe: 7 7.",
     "q": "03-OOP; Skript Abschnitt 10.1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (nach Folie 58)",
     "code": "class Building {\n    void paint() { System.out.println(\"Building\"); }\n}\n\nclass Tower extends Building {\n    void paint() { System.out.println(\"Tower\"); }\n}\n\nclass Kennel extends Building { }\n\npublic class Paint {\n    public static void main(String[] args) {\n        Building b = new Building();\n        Tower t = new Tower();\n        Kennel k = new Kennel();\n        Building bt = t;\n        Building bk = k;\n        b.paint();\n        t.paint();\n        k.paint();\n        bt.paint();\n        bk.paint();\n    }\n}",
     "loesung": "Building\nTower\nBuilding\nTower\nBuilding",
     "erklaerung": "b ist ein Building → Building. t ist ein Tower, Tower überschreibt paint → Tower. k ist eine Kennel, Kennel hat kein eigenes paint, also die geerbte Version → Building. bt hat den Typ Building, zeigt aber auf einen Tower. Entscheidend ist das echte Objekt → Tower. bk zeigt auf die Kennel → Building.",
     "q": "03-OOP, Folie 58"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (Altklausur WS 14/15, Aufgabe 3)",
     "code": "public class Vererbung {\n    public static void main(String[] args) {\n        Apfel a = new Apfel();\n    }\n}\n\nclass Apfel extends Frucht {\n    static Print mp = new Print(\"Boskop!\");\n    Print mp2 = new Print(\"Gala!\");\n    public Apfel() {\n        System.out.print(\"Jonagold!\");\n    }\n}\n\nclass Frucht extends Essbar {\n    Print mp2 = new Print(\"Banane!\");\n    public Frucht() {\n        System.out.print(\"Kirsche!\");\n    }\n}\n\nclass Essbar {\n    static Print mp = new Print(\"Essbar!\");\n}\n\nclass Print {\n    public Print(String msg) {\n        System.out.print(msg);\n    }\n}",
     "loesung": "Essbar!Boskop!Banane!Kirsche!Gala!Jonagold!",
     "erklaerung": "new Apfel() braucht die Klasse Apfel, diese braucht Frucht, diese Essbar. Geladen wird von oben: Essbar druckt Essbar! (static), Frucht hat nichts static, Apfel druckt Boskop! (static). Dann wird das Objekt gebaut, von oben nach unten: Frucht-Feld Banane!, Frucht-Konstruktor Kirsche!, Apfel-Feld Gala!, Apfel-Konstruktor Jonagold!.",
     "q": "Altklausur WS 14/15, Aufgabe 3"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (nach Folie 78)",
     "code": "class Helper {\n    Helper(String s) { System.out.println(s); }\n}\n\nclass GrandParent {\n    GrandParent() { System.out.println(\"grandparent\"); }\n}\n\nclass Parent extends GrandParent {\n    Helper hp = new Helper(\"instance parent\");\n    Parent() { System.out.println(\"parent\"); }\n}\n\nclass Sub extends Parent {\n    Helper hs = new Helper(\"instance sub\");\n    Sub() { this(\"this call sub\"); System.out.println(\"back in sub\"); }\n    Sub(String s) { System.out.println(s); }\n}\n\npublic class Erzeugung {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}",
     "loesung": "grandparent\ninstance parent\nparent\ninstance sub\nthis call sub\nback in sub",
     "erklaerung": "new Sub() startet Sub(). Erste Zeile: this(\"this call sub\") springt in Sub(String). Dessen erste (unsichtbare) Zeile ist super(), also Parent(), dort ebenso super() → GrandParent(): gibt grandparent aus. Zurück in Parent: erst Felder (instance parent), dann Rumpf (parent). Zurück in Sub: Felder (instance sub), dann Rumpf von Sub(String): this call sub. Zuletzt der Rest von Sub(): back in sub.",
     "q": "03-OOP, Folie 77–78"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (nach Folie 76)",
     "code": "class Helper {\n    Helper(String s) { System.out.println(s); }\n}\n\nclass SuperClass {\n    static { System.out.println(\"super static\"); }\n    static Helper superHelper = new Helper(\"super\");\n}\n\nclass Child extends SuperClass {\n    static Helper childHelper = new Helper(\"child\");\n}\n\npublic class TestClassLoader extends SuperClass {\n    static Helper helper1 = new Helper(\"helper\");\n    static { System.out.println(\"static\"); }\n\n    public static void main(String[] args) {\n        System.out.println(\"main\");\n        Child c = new Child();\n    }\n}",
     "loesung": "super static\nsuper\nhelper\nstatic\nmain\nchild",
     "erklaerung": "Um main zu starten, lädt Java die Klasse TestClassLoader. Vorher muss die Oberklasse SuperClass geladen sein: static-Block „super static“, dann Feld „super“. Dann die static-Teile von TestClassLoader in Code-Reihenfolge: „helper“, „static“. main läuft: „main“. new Child(): SuperClass ist schon geladen, nur Child kommt dazu: „child“. Child hat keinen eigenen Konstruktor-Text.",
     "q": "03-OOP, Folie 76"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (nach Folie 85)",
     "code": "abstract class Building {\n    void repair() {\n        replaceRoof();\n        paint();\n    }\n    abstract void replaceRoof();\n    abstract void paint();\n}\n\nclass Tower extends Building {\n    void replaceRoof() { System.out.println(\"Need a helicopter.\"); }\n    void paint() { System.out.println(\"Have fun climbing!\"); }\n}\n\nclass Kennel extends Building {\n    void replaceRoof() { System.out.println(\"Need some wood.\"); }\n    void paint() { System.out.println(\"Don't get bitten!\"); }\n}\n\npublic class MainClass {\n    public static void main(String[] args) {\n        Building b = new Kennel();\n        b.repair();\n        new Tower().paint();\n    }\n}",
     "loesung": "Need some wood.\nDon't get bitten!\nHave fun climbing!",
     "erklaerung": "b hat den Typ Building, zeigt aber auf eine Kennel. b.repair() läuft in Building und ruft replaceRoof() und paint(). Weil das echte Objekt eine Kennel ist, laufen deren Versionen: Need some wood., Don't get bitten!. new Tower().paint() ruft die Tower-Version: Have fun climbing!.",
     "q": "03-OOP, Folie 85"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (Altklausur WS 24/25, Aufgabe 9a)",
     "code": "interface Print {\n    void print(String text);\n}\n\nclass CustomPrinter implements Print {\n    String lastPrint = \"\";\n\n    public void print(String text) {\n        System.out.println(text);\n        lastPrint = text;\n    }\n\n    public class CustomInnerPrinter implements Print {\n        public void print(String text) {\n            System.out.println(text + lastPrint);\n            lastPrint = text;\n        }\n    }\n}\n\npublic class Write {\n    public static void main(String[] args) {\n        new CustomPrinter().new CustomInnerPrinter().print(\"ABC\");\n        Print p = new CustomPrinter();\n        p.print(\"DEF\");\n        Print p2 = ((CustomPrinter) p).new CustomInnerPrinter();\n        p2.print(\"GHI\");\n    }\n}",
     "loesung": "ABC\nDEF\nGHIDEF",
     "erklaerung": "Zeile 1 in main: neues CustomPrinter-Objekt (lastPrint = \"\") und dazu ein inneres Objekt. Dessen print gibt \"ABC\" + \"\" aus: ABC. Zeile 2–3: neues CustomPrinter p, p.print(\"DEF\") nutzt die äußere Version: DEF, und lastPrint von p wird \"DEF\". Zeile 4: inneres Objekt, das zu p gehört. Zeile 5: es gibt \"GHI\" + p.lastPrint aus: GHIDEF.",
     "q": "Altklausur WS 24/25, Aufgabe 9a"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat x am Ende?",
     "code": "class A {\n    int x = 1;\n    A() { x = x * 10; }\n}\n\nclass B extends A {\n    B() { super(); x = x + 5; }\n}\n\npublic class Wert {\n    public static void main(String[] args) {\n        B b = new B();\n        System.out.println(b.x);\n    }\n}",
     "loesung": 15,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "new B() ruft B(), das ruft super() → A(). Zuerst werden die Felder von A angelegt: x = 1. A-Rumpf: x = 1 · 10 = 10. Zurück in B: x = 10 + 5 = 15.",
     "q": "03-OOP, Folie 77"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "class Tier {\n    private String name;\n    Tier(String name) { this.name = name; }\n}\n\nclass Hund extends Tier {\n    Hund() {\n        System.out.println(\"Wuff\");\n    }\n}",
     "optionen": [
      "Kein Fehler",
      "Compilerfehler: Tier hat keinen parameterlosen Konstruktor, das implizite super() schlägt fehl",
      "Compilerfehler: name ist private",
      "Laufzeitfehler: NullPointerException"
     ],
     "richtig": 1,
     "erklaerung": "Hund() beginnt ohne super(...), also fügt der Compiler super() ein. Tier hat aber nur Tier(String). Lösung: super(\"Hund\"); als erste Zeile.",
     "q": "03-OOP, Folie 69"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "class Konto {\n    private double stand;\n}\n\npublic class Bank {\n    public static void main(String[] args) {\n        Konto k = new Konto();\n        k.stand = 100;\n    }\n}",
     "optionen": [
      "Kein Fehler, stand wird 100",
      "Compilerfehler: stand has private access in Konto",
      "Laufzeitfehler: IllegalAccessException",
      "Compilerfehler: Konto hat keinen Konstruktor"
     ],
     "richtig": 1,
     "erklaerung": "private ist nur in der eigenen Klasse sichtbar. Bank ist eine andere Klasse. Einen Konstruktor hat Konto trotzdem: den automatischen Standardkonstruktor.",
     "q": "03-OOP, Folie 26–27"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "class Tier {\n    void laut() { System.out.println(\"...\"); }\n}\n\nclass Katze extends Tier {\n    void laut() { System.out.println(\"Miau\"); }\n    void schnurren() { System.out.println(\"Rrrr\"); }\n}\n\npublic class Zoo {\n    public static void main(String[] args) {\n        Tier t = new Katze();\n        t.laut();\n        t.schnurren();\n    }\n}",
     "optionen": [
      "Ausgabe: Miau, Rrrr",
      "Compilerfehler: schnurren ist im Typ Tier nicht definiert",
      "Laufzeitfehler: ClassCastException",
      "Ausgabe: ..., Rrrr"
     ],
     "richtig": 1,
     "erklaerung": "Der deklarierte Typ Tier bestimmt, welche Aufrufe erlaubt sind. Tier kennt kein schnurren. Erst ((Katze) t).schnurren() kompiliert.",
     "q": "03-OOP, Folie 59–60"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "class Tier { }\nclass Katze extends Tier { }\nclass Hund extends Tier { }\n\npublic class Cast {\n    public static void main(String[] args) {\n        Tier t = new Hund();\n        Katze k = (Katze) t;\n        System.out.println(\"geschafft\");\n    }\n}",
     "optionen": [
      "Ausgabe: geschafft",
      "Compilerfehler: inkompatible Typen",
      "Laufzeitfehler: ClassCastException",
      "Laufzeitfehler: NullPointerException"
     ],
     "richtig": 2,
     "erklaerung": "Der Compiler erlaubt den Cast, weil ein Tier eine Katze sein könnte. Zur Laufzeit ist es aber ein Hund.",
     "q": "03-OOP"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "class Punkt {\n    int x;\n    Punkt(int x) { this.x = x; }\n}\n\npublic class P {\n    public static void main(String[] args) {\n        Punkt p = new Punkt();\n        System.out.println(p.x);\n    }\n}",
     "optionen": [
      "Ausgabe 0",
      "Compilerfehler: Konstruktor Punkt() existiert nicht",
      "Laufzeitfehler",
      "Ausgabe null"
     ],
     "richtig": 1,
     "erklaerung": "Mit dem eigenen Konstruktor Punkt(int) gibt es keinen automatischen Standardkonstruktor mehr.",
     "q": "Tutorium 3, Aufgabe 11.5"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "class Person {\n    String name;\n}\n\npublic class Leute {\n    public static void main(String[] args) {\n        Person[] team = new Person[3];\n        team[0] = new Person();\n        team[0].name = \"Ada\";\n        System.out.println(team[1].name);\n    }\n}",
     "optionen": [
      "Ausgabe: null",
      "Ausgabe: Ada",
      "Laufzeitfehler: NullPointerException",
      "Compilerfehler"
     ],
     "richtig": 2,
     "erklaerung": "new Person[3] legt nur drei Referenzen an, alle null. Nur team[0] bekommt ein Objekt. team[1].name greift auf null zu.",
     "q": "Skript Abschnitt 8; 03-OOP"
    },
    {
     "typ": "mc",
     "frage": "Was gibt dieser Code aus?",
     "code": "class Punkt {\n    int x;\n    Punkt(int x) { this.x = x; }\n}\n\npublic class Gleich {\n    public static void main(String[] args) {\n        Punkt a = new Punkt(1);\n        Punkt b = new Punkt(1);\n        System.out.println(a.equals(b));\n    }\n}",
     "optionen": [
      "true",
      "false",
      "Compilerfehler, equals fehlt",
      "1"
     ],
     "richtig": 1,
     "erklaerung": "Punkt überschreibt equals nicht. Die geerbte Version aus Object vergleicht nur Referenzen, und das sind zwei verschiedene Objekte.",
     "q": "03-OOP, Folie 64"
    },
    {
     "typ": "mc",
     "frage": "Welche Aussage über Interfaces stimmt?",
     "optionen": [
      "Eine Klasse kann nur ein Interface implementieren",
      "Felder in Interfaces sind automatisch public static final",
      "Interfaces haben Konstruktoren",
      "Methoden in Interfaces sind automatisch private"
     ],
     "richtig": 1,
     "erklaerung": "Felder sind Konstanten, Methoden automatisch public abstract (außer default/static). Eine Klasse kann beliebig viele Interfaces implementieren.",
     "q": "03-OOP, Folie 91 und 94"
    },
    {
     "typ": "mc",
     "frage": "Was gibt dieser Code aus?",
     "code": "class A {\n    String name = \"A\";\n    String getName() { return name; }\n}\n\nclass B extends A {\n    String name = \"B\";\n    String getName() { return name; }\n}\n\npublic class Feld {\n    public static void main(String[] args) {\n        A x = new B();\n        System.out.println(x.name + x.getName());\n    }\n}",
     "optionen": [
      "AA",
      "AB",
      "BA",
      "BB"
     ],
     "richtig": 1,
     "erklaerung": "Attribute werden nicht dynamisch gebunden: x.name nimmt den deklarierten Typ A. Methoden schon: getName läuft in B.",
     "q": "03-OOP, Folie 59"
    }
   ],
   "formeln": [
    {
     "name": "Klasse mit Attributen, Konstruktor, Methoden",
     "code": "public class Konto {\n    private String inhaber;\n    private double stand;\n\n    public Konto(String inhaber) {\n        this.inhaber = inhaber;\n    }\n\n    public void einzahlen(double betrag) {\n        stand += betrag;\n    }\n\n    public double getStand() {\n        return stand;\n    }\n}",
     "text": "Reihenfolge laut Vorlesung: Felder, Konstruktoren, Methoden.",
     "q": "03-OOP, Folie 13–38"
    },
    {
     "name": "Objekt erzeugen und benutzen",
     "code": "Konto k = new Konto(\"Ronja\");\nk.einzahlen(50);\ndouble s = k.getStand();",
     "text": "new ruft den Konstruktor auf, Punkt für Attribute und Methoden.",
     "q": "03-OOP, Folie 14"
    },
    {
     "name": "Getter und Setter",
     "code": "public int getAlter() { return alter; }\npublic void setAlter(int alter) {\n    if (alter >= 0) this.alter = alter;\n}\npublic boolean isAktiv() { return aktiv; }",
     "text": "Setter können ungültige Werte abfangen. boolean-Getter heißen isX().",
     "q": "03-OOP, Folie 28–30"
    },
    {
     "name": "Konstruktoren verketten",
     "code": "Punkt() {\n    this(0, 0);             // anderer Konstruktor dieser Klasse\n}\nTower(int h, String o, String p) {\n    super(h, o);            // Konstruktor der Oberklasse\n    this.purpose = p;\n}",
     "text": "this(...) oder super(...) muss die erste Anweisung sein.",
     "q": "03-OOP, Folie 37, 69–70"
    },
    {
     "name": "static und final",
     "code": "private static int anzahl = 0;        // Klassenvariable\npublic static final double MWST = 0.19; // Konstante\npublic static int getAnzahl() { return anzahl; }\nKonto.getAnzahl();                     // Aufruf über Klasse",
     "text": "static gehört der Klasse, final ist unveränderlich.",
     "q": "03-OOP, Folie 13–17"
    },
    {
     "name": "Vererbung und Überschreiben",
     "code": "class Tower extends Building {\n    @Override\n    void paint() {\n        super.paint();      // Version der Oberklasse\n        System.out.println(\"Tower\");\n    }\n}",
     "text": "Gleiche Signatur, @Override lässt den Compiler prüfen.",
     "q": "03-OOP, Folie 58 und 68"
    },
    {
     "name": "toString und equals überschreiben",
     "code": "@Override\npublic String toString() {\n    return \"(\" + x + \", \" + y + \")\";\n}\n@Override\npublic boolean equals(Object o) {\n    if (!(o instanceof Punkt)) return false;\n    Punkt p = (Punkt) o;\n    return x == p.x && y == p.y;\n}",
     "text": "Parameter von equals ist Object, nicht Punkt. Mit equals auch hashCode überschreiben.",
     "q": "03-OOP, Folie 64"
    },
    {
     "name": "abstrakte Klasse",
     "code": "public abstract class Form {\n    abstract double flaeche();      // kein Rumpf\n    void zeige() {\n        System.out.println(flaeche());\n    }\n}",
     "text": "Nicht instanziierbar. Konkrete Unterklassen müssen alle abstrakten Methoden implementieren.",
     "q": "03-OOP, Folie 84–87"
    },
    {
     "name": "Interface",
     "code": "interface CanSwim {\n    void swim();                    // automatisch public abstract\n    default void dive() { ... }     // seit Java 8\n}\nclass Duck extends Bird implements CanSwim, CanFly { ... }",
     "text": "extends eine Klasse, implements beliebig viele Interfaces. Implementierte Methoden müssen public sein.",
     "q": "03-OOP, Folie 91–94"
    },
    {
     "name": "enum",
     "code": "enum Farbe { WEISS, GRAU, GELB; }\nFarbe f = Farbe.GRAU;\nFarbe.values();          // alle Werte\nFarbe.valueOf(\"GELB\");   // String -> Wert\nswitch (f) { case GRAU: ...; break; }",
     "text": "Feste Werteliste, Vergleich mit == erlaubt.",
     "q": "03-OOP, Folie 99–104"
    },
    {
     "name": "instanceof und Cast",
     "code": "if (t instanceof Katze) {\n    Katze k = (Katze) t;\n    k.schnurren();\n}",
     "text": "Erst prüfen, dann casten. Sonst droht ClassCastException.",
     "q": "03-OOP"
    },
    {
     "name": "Anonyme und innere Klasse",
     "code": "CanSwim c = new CanSwim() {\n    public void swim() { System.out.println(\"blub\"); }\n};\nAussen a = new Aussen();\nAussen.Innen i = a.new Innen();",
     "text": "Anonym: einmalige Implementierung ohne Namen. Innere Klasse braucht ein äußeres Objekt (außer static).",
     "q": "03-OOP, III-E"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 3, Aufgabe 9: Bruchrechnung objektorientiert",
     "q": "Tutorium 3, Aufgabe 1–4 und 9; Musterlösung Bruch.java",
     "text": "Schreibe eine Klasse Bruch mit zaehler und nenner: Klassenmethode ggt(int, int), Konstruktor mit zaehler und nenner und ein leerer Konstruktor, toString, kuerze() (neuer, gekürzter Bruch), kehrwert(), neg(), mul, div, add, sub (jeweils mit einem anderen Bruch, Ergebnis neuer gekürzter Bruch) und wert() als double. Teste mit 1/2 und 3/4.",
     "loesung": [
      "ggt nach dem Verfahren aus Aufgabe 1: Ist a oder b 0, das andere zurückgeben. Sonst mit Beträgen so lange die kleinere von der größeren abziehen, bis beide gleich sind.",
      "ggt ist static, weil es nur mit zwei ints rechnet und kein Objekt braucht. Alle anderen Methoden sind Instanzmethoden, weil sie mit zaehler und nenner dieses Bruchs arbeiten.",
      "kuerze teilt beide durch den ggt und liefert ein neues Objekt. Die Methoden verändern this nicht.",
      "mul: Zähler mal Zähler, Nenner mal Nenner, dann kürzen. div ist mul mit dem Kehrwert. add nach a/b + c/d = (a·d + c·b) / (b·d). sub ist add mit dem negativen Bruch.",
      "wert: (double) zaehler / nenner. Ohne Cast wäre es Ganzzahldivision."
     ],
     "loesungCode": "public class Bruch {\n    private int zaehler;\n    private int nenner;\n\n    public Bruch(int zaehler, int nenner) {\n        this.zaehler = zaehler;\n        this.nenner = nenner;\n    }\n\n    public Bruch() {\n        this(0, 1);\n    }\n\n    public static int ggt(int a, int b) {\n        if (a == 0) return b;\n        if (b == 0) return a;\n        int x = Math.abs(a), y = Math.abs(b);\n        while (x != y) {\n            if (x > y) x = x - y;\n            else y = y - x;\n        }\n        return x;\n    }\n\n    public Bruch kuerze() {\n        int g = ggt(zaehler, nenner);\n        return new Bruch(zaehler / g, nenner / g);\n    }\n\n    public Bruch kehrwert() { return new Bruch(nenner, zaehler); }\n    public Bruch neg() { return new Bruch(-zaehler, nenner); }\n    public double wert() { return (double) zaehler / nenner; }\n\n    public Bruch mul(Bruch b) { return new Bruch(zaehler * b.zaehler, nenner * b.nenner).kuerze(); }\n    public Bruch div(Bruch b) { return mul(b.kehrwert()); }\n    public Bruch add(Bruch b) {\n        return new Bruch(zaehler * b.nenner + b.zaehler * nenner, nenner * b.nenner).kuerze();\n    }\n    public Bruch sub(Bruch b) { return add(b.neg()); }\n\n    @Override\n    public String toString() { return zaehler + \"/\" + nenner; }\n\n    public static void main(String[] args) {\n        Bruch a = new Bruch(1, 2);\n        Bruch b = new Bruch(3, 4);\n        System.out.println(\"Multiplikation: \" + a.mul(b));\n        System.out.println(\"Division: \" + a.div(b));\n        System.out.println(\"Addition: \" + a.add(b));\n        System.out.println(\"Subtraktion: \" + a.sub(b));\n        System.out.println(\"Doublewert: \" + a.wert());\n        System.out.println(\"Kehrwert: \" + a.kehrwert());\n        System.out.println(\"negativ: \" + a.neg());\n        System.out.println(\"gekuerzt: \" + new Bruch(6, 8).kuerze());\n    }\n}"
    },
    {
     "titel": "Tutorium 3, Aufgabe 8: Punkte und Strecken",
     "q": "Tutorium 3, Aufgabe 8; Musterlösung Punkt.java, Strecke.java",
     "text": "Klasse Punkt mit privaten double x und y, Getter, toString im Format (x, y). Klasse Strecke mit zwei privaten Punkten p und q, Konstruktor mit zwei Punkten, getLaenge() nach dist(p, q) = Wurzel((xp - xq)² + (yp - yq)²) über die Getter, toString in der Form pq. (Das Einlesen per read() lassen wir hier weg.)",
     "loesung": [
      "Punkt kapselt seine Koordinaten (private) und gibt sie nur über getX() und getY() heraus.",
      "Strecke hat zwei Attribute vom Typ Punkt. Das ist Komposition: Ein Objekt besteht aus anderen Objekten.",
      "getLaenge darf nicht auf p.x zugreifen (private in Punkt), sondern nutzt p.getX().",
      "toString von Strecke ruft die toString-Methoden der Punkte auf, automatisch durch die Verkettung mit +."
     ],
     "loesungCode": "class Punkt {\n    private double x, y;\n\n    Punkt(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    public double getX() { return x; }\n    public double getY() { return y; }\n\n    @Override\n    public String toString() { return \"(\" + x + \", \" + y + \")\"; }\n}\n\nclass Strecke {\n    private Punkt p, q;\n\n    Strecke(Punkt p, Punkt q) {\n        this.p = p;\n        this.q = q;\n    }\n\n    public double getLaenge() {\n        double dx = p.getX() - q.getX();\n        double dy = p.getY() - q.getY();\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n\n    @Override\n    public String toString() { return p + \"\" + q; }\n}\n\npublic class TestStrecke {\n    public static void main(String[] args) {\n        Strecke s = new Strecke(new Punkt(1, 1), new Punkt(4, 5));\n        System.out.println(s + \" hat die Länge \" + s.getLaenge());\n    }\n}"
    },
    {
     "titel": "Tutorium 3, Aufgabe 11: Haustier (gemischte OOP-Fragen)",
     "q": "Tutorium 3, Aufgabe 11",
     "text": "Erweitere die Klasse Haustier (name, alter, altersDifferenz) um: bestFriend (Haustier), uniqueId (int), Klassenvariable nextUniqueId, Konstruktoren, die uniqueId setzen und nextUniqueId erhöhen, hasBestFriend() und toString(). Welche Werte haben uniqueId und nextUniqueId nach den drei Zeilen d1 = new Haustier(\"May\", 7); d2 = new Haustier(\"Gadze\", 12, d1); d3 = new Haustier(\"Grigri\", 17, d2);?",
     "loesung": [
      "bestFriend ist eine Referenz auf ein anderes Haustier-Objekt (oder null).",
      "nextUniqueId ist static: Es gibt den Zähler einmal für alle Tiere. Startwert 0.",
      "Konstruktor: uniqueId = nextUniqueId; nextUniqueId++; Der zweite Konstruktor ruft mit this(name, alter) den ersten auf und setzt danach bestFriend.",
      "Werte: nach d1: d1.uniqueId = 0, nextUniqueId = 1. Nach d2: d2.uniqueId = 1, nextUniqueId = 2. Nach d3: d3.uniqueId = 2, nextUniqueId = 3.",
      "Damit niemand nextUniqueId von außen überschreibt: private machen und nur einen static Getter anbieten.",
      "hasBestFriend: return bestFriend != null;"
     ],
     "loesungCode": "public class Haustier {\n    private static int nextUniqueId = 0;\n    private String name;\n    private int alter;\n    private int uniqueId;\n    private Haustier bestFriend;\n\n    public Haustier(String name, int alter) {\n        this.name = name;\n        this.alter = alter;\n        this.uniqueId = nextUniqueId;\n        nextUniqueId++;\n    }\n\n    public Haustier(String name, int alter, Haustier bestFriend) {\n        this(name, alter);\n        this.bestFriend = bestFriend;\n    }\n\n    public int altersDifferenz(int alter) {\n        return Math.abs(alter - this.alter);\n    }\n\n    public boolean hasBestFriend() {\n        return bestFriend != null;\n    }\n\n    public static int getNextUniqueId() {\n        return nextUniqueId;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (\" + alter + \" Jahre, ID \" + uniqueId + \")\"\n                + (hasBestFriend() ? \", bester Freund: \" + bestFriend.name : \"\");\n    }\n\n    public static void main(String[] args) {\n        Haustier d1 = new Haustier(\"May\", 7);\n        Haustier d2 = new Haustier(\"Gadze\", 12, d1);\n        Haustier d3 = new Haustier(\"Grigri\", 17, d2);\n        System.out.println(d1);\n        System.out.println(d3);\n        System.out.println(\"nextUniqueId = \" + getNextUniqueId());\n        System.out.println(d1.altersDifferenz(10) + \" \" + d1.hasBestFriend());\n    }\n}"
    },
    {
     "titel": "Tutorium 3, Aufgabe 15: FarbFernseher erbt von Fernseher",
     "q": "Tutorium 3, Aufgabe 15; Musterlösung Fernseher.java, FarbFernseher.java",
     "text": "Gegeben ist Fernseher (raum, volume 0–50, program 1–99, Konstruktor, getVolume, change(String einstellung, int wert), toString). Schreibe FarbFernseher extends Fernseher mit privatem farbwert (0–50), Konstruktor mit super(...), überschriebenem change (auch \"color\"), istAngenehmerAls(FarbFernseher anderer) und toString mit super.toString().",
     "loesung": [
      "Konstruktor: super(raum, volume, program) als erste Zeile, dann farbwert auf 0 bis 50 begrenzen mit Math.max(0, Math.min(wert, 50)).",
      "change überschreiben: Ist die Einstellung \"color\" (Vergleich mit equals!), farbwert ändern und begrenzen. Sonst super.change(...) aufrufen, damit volume und program weiter funktionieren.",
      "istAngenehmerAls: eigene Lautstärke kleiner als die des anderen (über getVolume(), volume ist private in Fernseher), eigener Farbwert kleiner 40 und größer als der des anderen. Auf anderer.farbwert darfst du zugreifen, weil private pro Klasse gilt, nicht pro Objekt.",
      "toString: super.toString() + \", c=\" + farbwert."
     ],
     "loesungCode": "class Fernseher {\n    private String raum;\n    private int volume;\n    private int program;\n\n    public Fernseher(String ra, int vo, int pr) {\n        raum = ra;\n        volume = Math.max(0, Math.min(vo, 50));\n        program = Math.max(1, Math.min(pr, 99));\n    }\n\n    public int getVolume() { return volume; }\n\n    public void change(String einstell, int wert) {\n        if (einstell.equals(\"volume\")) {\n            volume = Math.max(0, Math.min(volume + wert, 50));\n        } else if (einstell.equals(\"program\")) {\n            program = Math.max(1, Math.min(program + wert, 99));\n        }\n    }\n\n    public String toString() {\n        return \"Fernseher im \" + raum + \": v=\" + volume + \", p=\" + program;\n    }\n}\n\nclass FarbFernseher extends Fernseher {\n    private int farbwert;\n\n    public FarbFernseher(String ra, int vo, int pr, int farbwert) {\n        super(ra, vo, pr);\n        this.farbwert = Math.max(0, Math.min(farbwert, 50));\n    }\n\n    @Override\n    public void change(String regler, int wert) {\n        if (regler.equals(\"color\")) {\n            farbwert = Math.max(0, Math.min(farbwert + wert, 50));\n        } else {\n            super.change(regler, wert);\n        }\n    }\n\n    public boolean istAngenehmerAls(FarbFernseher anderer) {\n        return getVolume() < anderer.getVolume()\n                && farbwert < 40 && farbwert > anderer.farbwert;\n    }\n\n    @Override\n    public String toString() {\n        return super.toString() + \", c=\" + farbwert;\n    }\n}\n\npublic class FarbFernseherDemo {\n    public static void main(String[] args) {\n        FarbFernseher f1 = new FarbFernseher(\"Wohnzimmer\", 6, 7, 8);\n        FarbFernseher f2 = new FarbFernseher(\"Schlafzimmer\", 35, 15, 20);\n        System.out.println(f1);\n        System.out.println(f2);\n        System.out.println(f1.istAngenehmerAls(f2) + \" \" + f2.istAngenehmerAls(f1));\n        f1.change(\"volume\", -5);\n        f1.change(\"color\", 15);\n        System.out.println(f1);\n        System.out.println(f1.istAngenehmerAls(f2));\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 3: Objekte verfolgen (10 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 3",
     "text": "Gib für f.a, f.b, f.c, f2.a, f2.b, f2.c, f3.a, f3.b, f4.a, f4.b den Wert an der Stelle //hier an. Tipp aus der Klausur: Skizziere, welche Objekte wie erstellt und verändert werden.",
     "code": "public class Foo {\n    protected int a, b;\n    private static int c = 6;\n\n    static Foo buildFoo(int a, int b) {\n        Foo f = new Foo();\n        f.a = a;\n        f.b = b;\n        return f;\n    }\n    void invert() {\n        int temp = this.a;\n        this.a = this.b;\n        this.b = temp;\n    }\n    Foo redo(Foo other) {\n        Foo f = new Foo();\n        f.a = other.a - this.a;\n        f.b = other.b + this.b;\n        return f;\n    }\n    void replace(int a, int b) {\n        a = b;\n    }\n    void overwrite() {\n        a = 42;\n        b = ++c;\n    }\n    public static void main(String[] args) {\n        Foo f = buildFoo(3, 2);\n        Foo f2 = buildFoo(5, 1);\n        Foo f3 = Bar.cloneFoo(f);\n        f.invert();\n        Foo f4 = f.redo(f2);\n        f.overwrite();\n        f2.overwrite();\n        f4.replace(9, 3);\n        f3.overwrite();\n        f3.invert();\n        //hier\n    }\n}\n\nclass Bar extends Foo {\n    void invert() {\n        this.a = -a;\n        this.b = -b;\n    }\n    static Bar cloneFoo(Foo foo) {\n        Bar b = new Bar();\n        b.a = foo.a;\n        b.b = foo.b;\n        return b;\n    }\n}",
     "loesung": [
      "f = (3, 2), f2 = (5, 1). f3 ist ein Bar-Objekt mit Kopie der Werte von f: (3, 2). Es ist ein eigenes Objekt, keine Referenz auf f.",
      "f.invert(): f ist ein Foo, also tauschen: f = (2, 3).",
      "f4 = f.redo(f2): a = f2.a - f.a = 5 - 2 = 3, b = f2.b + f.b = 1 + 3 = 4. f4 = (3, 4).",
      "f.overwrite(): a = 42, c wird 7, b = 7. f2.overwrite(): a = 42, c = 8, b = 8.",
      "f4.replace(9, 3) ändert nur den Parameter a, nicht das Attribut. f4 bleibt (3, 4).",
      "f3.overwrite(): a = 42, c = 9, b = 9. f3.invert(): f3 ist ein Bar, dynamische Bindung nimmt Bar.invert: a = -42, b = -9.",
      "c ist static, also für alle gleich: 9.",
      "Ergebnis: f.a = 42, f.b = 7, f.c = 9, f2.a = 42, f2.b = 8, f2.c = 9, f3.a = -42, f3.b = -9, f4.a = 3, f4.b = 4."
     ],
     "loesungCode": "public class Foo {\n    protected int a, b;\n    private static int c = 6;\n\n    static Foo buildFoo(int a, int b) { Foo f = new Foo(); f.a = a; f.b = b; return f; }\n    void invert() { int temp = this.a; this.a = this.b; this.b = temp; }\n    Foo redo(Foo other) { Foo f = new Foo(); f.a = other.a - this.a; f.b = other.b + this.b; return f; }\n    void replace(int a, int b) { a = b; }\n    void overwrite() { a = 42; b = ++c; }\n\n    public static void main(String[] args) {\n        Foo f = buildFoo(3, 2);\n        Foo f2 = buildFoo(5, 1);\n        Foo f3 = Bar.cloneFoo(f);\n        f.invert();\n        Foo f4 = f.redo(f2);\n        f.overwrite();\n        f2.overwrite();\n        f4.replace(9, 3);\n        f3.overwrite();\n        f3.invert();\n        System.out.println(\"f.a=\" + f.a + \" f.b=\" + f.b + \" f.c=\" + f.c);\n        System.out.println(\"f2.a=\" + f2.a + \" f2.b=\" + f2.b + \" f2.c=\" + f2.c);\n        System.out.println(\"f3.a=\" + f3.a + \" f3.b=\" + f3.b);\n        System.out.println(\"f4.a=\" + f4.a + \" f4.b=\" + f4.b);\n    }\n}\n\nclass Bar extends Foo {\n    void invert() { this.a = -a; this.b = -b; }\n    static Bar cloneFoo(Foo foo) { Bar b = new Bar(); b.a = foo.a; b.b = foo.b; return b; }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 4: Vererbung und Initialisierungsreihenfolge (6 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 4",
     "text": "Was gibt das Programm beim Ausführen der Klasse Caesar aus? Zur Auswahl: Gallia!Est!Omnis!Divisa!In!Partes!Tres! / Tres!In!Partes!Divisa!Est!Omnis!Gallia! / Divisa!Gallia!Tres!Partes!In!Omnis!Est! / Tres!In!Est!Partes!Divisa!Omnis!Gallia! / Tres!In!Est!Partes!Omnis!Divisa!Gallia! / Est!In!Tres!Omnis!Partes!Gallia!Divisa!",
     "code": "public class Caesar {\n    public static void main(String[] args) {\n        Veni a = new Veni();\n    }\n}\nclass Vici {\n    static Printme mp = new Printme(\"Tres!\");\n}\nclass Vidi extends Vici {\n    static Printme mp1 = new Printme(\"In!\");\n    Printme mp2 = new Printme(\"Partes!\");\n    public Vidi() {\n        System.out.print(\"Divisa!\");\n    }\n}\nclass Veni extends Vidi {\n    static Printme mp = new Printme(\"Est!\");\n    Printme mp2 = new Printme(\"Omnis!\");\n    public Veni() {\n        System.out.print(\"Gallia!\");\n    }\n}\nclass Printme {\n    public Printme(String msg) {\n        System.out.print(msg);\n    }\n}",
     "loesung": [
      "Phase 1 (Klassen laden): new Veni() braucht Veni, dafür zuerst Vidi, dafür zuerst Vici. static-Teile von oben nach unten: Tres! (Vici), In! (Vidi), Est! (Veni).",
      "Phase 2 (Objekt bauen): Veni() ruft implizit super(), Vidi() ruft super() bis Object.",
      "Abwärts: Vidi-Instanzfeld Partes!, Vidi-Konstruktor Divisa!, dann Veni-Instanzfeld Omnis!, Veni-Konstruktor Gallia!.",
      "Antwort: Tres!In!Est!Partes!Divisa!Omnis!Gallia! (vierte Option). Falle: Option 5 setzt Omnis! vor Divisa!, aber die Felder einer Klasse kommen erst nach dem Konstruktor der Oberklasse."
     ],
     "loesungCode": "public class Caesar {\n    public static void main(String[] args) {\n        Veni a = new Veni();\n        System.out.println();\n    }\n}\nclass Vici {\n    static Printme mp = new Printme(\"Tres!\");\n}\nclass Vidi extends Vici {\n    static Printme mp1 = new Printme(\"In!\");\n    Printme mp2 = new Printme(\"Partes!\");\n    public Vidi() { System.out.print(\"Divisa!\"); }\n}\nclass Veni extends Vidi {\n    static Printme mp = new Printme(\"Est!\");\n    Printme mp2 = new Printme(\"Omnis!\");\n    public Veni() { System.out.print(\"Gallia!\"); }\n}\nclass Printme {\n    public Printme(String msg) { System.out.print(msg); }\n}"
    },
    {
     "titel": "Altklausur WS 14/15, Aufgabe 4: Baumhäuser (10 Punkte)",
     "q": "Altklausur WS 14/15, Aufgabe 4",
     "text": "Gib an der Stelle //hier die Werte von bUndCBenachbart, b.breite, b.hoehe, c.breite, c.hoehe, d.breite, d.hoehe, e.breite, e.hoehe und Baumhaus.naechsteNummer an.",
     "code": "public class Hausbauer {\n    static Baumhaus bauHaus(int hoehe, int breite) {\n        Baumhaus b = new Baumhaus();\n        b.hoehe = hoehe;\n        b.breite = breite;\n        return b;\n    }\n    static Baumhaus machBreiter(Baumhaus b) {\n        Baumhaus bb = new Baumhaus();\n        bb.hoehe = b.hoehe;\n        bb.breite = b.breite + 1;\n        return bb;\n    }\n    static Baumhaus machHoeher(Baumhaus b) {\n        b.hoehe++;\n        return b;\n    }\n    public static void main(String[] args) {\n        Baumhaus b = bauHaus(2, 3);\n        Baumhaus c = machBreiter(b);\n        c.nachbar = b;\n        Baumhaus d = machHoeher(b);\n        d.nachbar = b;\n        ++c.hoehe;\n        Baumhaus e = machHoeher(b);\n        e.nachbar = c;\n        e.breite = b.breite - 1;\n        c.hoehe++;\n        c.breite -= 2;\n        boolean bUndCBenachbart = (b.nachbar == c || c.nachbar == b);\n        //hier\n    }\n}\nclass Baumhaus {\n    public int hoehe;\n    public int breite;\n    public Baumhaus nachbar;\n    public int nummer = ++naechsteNummer;\n    static int naechsteNummer = 0;\n}",
     "loesung": [
      "Entscheidend: Welche Methoden erzeugen ein neues Objekt? bauHaus und machBreiter rufen new auf, machHoeher nicht. Es gibt also nur zwei Objekte. naechsteNummer = 2.",
      "b = Objekt 1 (h 2, br 3). c = Objekt 2 (h 2, br 4), c.nachbar = b.",
      "d = machHoeher(b) liefert dasselbe Objekt wie b: b.hoehe = 3. d ist nur ein zweiter Name für b. d.nachbar = b, also zeigt b auf sich selbst.",
      "++c.hoehe: c.hoehe = 3. e = machHoeher(b): wieder Objekt 1, hoehe = 4. e.nachbar = c, also jetzt b.nachbar = c. e.breite = b.breite - 1 = 2 (auch b.breite, da gleiches Objekt).",
      "c.hoehe++: 4. c.breite -= 2: 2.",
      "bUndCBenachbart: b.nachbar == c ist true.",
      "Ergebnis: true, b.breite 2, b.hoehe 4, c.breite 2, c.hoehe 4, d.breite 2, d.hoehe 4, e.breite 2, e.hoehe 4, naechsteNummer 2."
     ],
     "loesungCode": "public class Hausbauer {\n    static Baumhaus bauHaus(int hoehe, int breite) {\n        Baumhaus b = new Baumhaus(); b.hoehe = hoehe; b.breite = breite; return b;\n    }\n    static Baumhaus machBreiter(Baumhaus b) {\n        Baumhaus bb = new Baumhaus(); bb.hoehe = b.hoehe; bb.breite = b.breite + 1; return bb;\n    }\n    static Baumhaus machHoeher(Baumhaus b) { b.hoehe++; return b; }\n\n    public static void main(String[] args) {\n        Baumhaus b = bauHaus(2, 3);\n        Baumhaus c = machBreiter(b);\n        c.nachbar = b;\n        Baumhaus d = machHoeher(b);\n        d.nachbar = b;\n        ++c.hoehe;\n        Baumhaus e = machHoeher(b);\n        e.nachbar = c;\n        e.breite = b.breite - 1;\n        c.hoehe++;\n        c.breite -= 2;\n        boolean bUndCBenachbart = (b.nachbar == c || c.nachbar == b);\n        System.out.println(bUndCBenachbart + \" b=\" + b.breite + \"/\" + b.hoehe + \" c=\" + c.breite + \"/\" + c.hoehe\n                + \" d=\" + d.breite + \"/\" + d.hoehe + \" e=\" + e.breite + \"/\" + e.hoehe + \" n=\" + Baumhaus.naechsteNummer);\n    }\n}\nclass Baumhaus {\n    public int hoehe;\n    public int breite;\n    public Baumhaus nachbar;\n    public int nummer = ++naechsteNummer;\n    static int naechsteNummer = 0;\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 8a: Vererbungshierarchie entwerfen (6 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 8a",
     "text": "Für Fahrzeug, Bus, Fahrrad, Haltestelle, Personenbefördernd und FahrzeugFarbe (Braun, Blau, Schwarz, Silber): Gib jeweils an, ob du es als abstract class, class, interface oder enum umsetzt und was es per extends bzw. implements erweitert.",
     "loesung": [
      "Fahrzeug: abstract class (es gibt kein Fahrzeug „an sich“, nur Busse und Fahrräder), extends keine, implements keine.",
      "Bus: class, extends Fahrzeug, implements Personenbefördernd.",
      "Fahrrad: class, extends Fahrzeug, implements keine (oder Personenbefördernd, wenn man es begründet; üblich ist keine).",
      "FahrzeugFarbe: enum mit BRAUN, BLAU, SCHWARZ, SILBER. Enums können nicht erben (sie erben implizit von Enum).",
      "Haltestelle: class, keine Vererbung. Sie ist kein Fahrzeug.",
      "Personenbefördernd: interface (Adjektiv = Zusatzfähigkeit). Faustregel der Vorlesung: Substantiv → Klasse, Adjektiv → Interface."
     ],
     "loesungCode": "abstract class Fahrzeug {\n    protected FahrzeugFarbe farbe;\n}\n\ninterface Personenbefoerdernd {\n    int getSitzplaetze();\n}\n\nclass Bus extends Fahrzeug implements Personenbefoerdernd {\n    public int getSitzplaetze() { return 40; }\n}\n\nclass Fahrrad extends Fahrzeug { }\n\nclass Haltestelle {\n    String name = \"Ernst-Reuter-Platz\";\n}\n\nenum FahrzeugFarbe { BRAUN, BLAU, SCHWARZ, SILBER }\n\npublic class Verkehr {\n    public static void main(String[] args) {\n        Fahrzeug f = new Bus();\n        f.farbe = FahrzeugFarbe.SILBER;\n        System.out.println(((Personenbefoerdernd) f).getSitzplaetze() + \" \" + f.farbe);\n    }\n}"
    }
   ]
  },
  {
   "id": "k4",
   "titel": "Kapitel 4: Algorithmen und Datenstrukturen – Suchen, Sortieren, Listen, Bäume, Generics",
   "abschnitt": "Vorlesung folgt (ca. Dezember 2026), Tutoriumsmaterial liegt vor (Tutorium 4)",
   "seiten": "Tutorium 4 (Algorithmen und Datenstrukturen) mit Musterlösung; Kick-off Folie 24 (Themenüberblick); Altklausuren",
   "kurz": [
     "Lineare Suche prüft alles, O(n), auch unsortiert. Binäre Suche halbiert, O(log n), nur auf sortierten Daten.",
     "O-Notation: Wachstum im schlimmsten Fall ohne Konstanten. Zwei verschachtelte Schleifen bis n ergeben O(n²).",
     "Bubble, Selection und Insertion Sort sind O(n²), Arrays.sort ist O(n log n).",
     "Verkettete Liste: vorne einfügen O(1), Indexzugriff O(n). Array-basierte Liste: Indexzugriff O(1).",
     "Stack ist LIFO (push, pop), Queue ist FIFO (offer, poll).",
     "Suchbaum: links kleiner, rechts größer. Inorder (links, Knoten, rechts) liefert die sortierte Reihenfolge."
   ],
   "quellen": [
    {
     "name": "Tutorium 4: Algorithmen und Datenstrukturen",
     "pfad": "material/Prog1/Tutorien/P1_04-algoDat.pdf"
    },
    {
     "name": "Code: Musterlösungen Tutorium 4 (Zip)",
     "pfad": "material/Prog1/Code/P1_04_algoDat_ml_.zip"
    },
    {
     "name": "Altklausur WS 24/25",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Erstklausur_WS2425_ohne_Lo_sungen.pdf"
    },
    {
     "name": "Altklausur WS 14/15",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Hauptklausur_WS1415_ohne_Lo_sung.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Lineare Suche: eins nach dem anderen anschauen",
     "text": [
      "Suchen heißt: In einer Sammlung von Werten (hier einem Array, siehe Kapitel 2) die Stelle finden, an der ein bestimmter Wert steht. Alltag: Du suchst in einem ungeordneten Stapel Klausuren deine eigene. Du nimmst Blatt für Blatt, bis du sie hast.",
      "Genau das ist die lineare Suche (linear search). Eine Schleife läuft vom Index 0 bis zum Ende. Ist der Wert gefunden, gibt die Methode den Index zurück. Kommt die Schleife ohne Treffer durch, gibt sie -1 zurück. -1 ist ein vereinbartes Zeichen für „nicht gefunden“, weil es keinen Index -1 gibt.",
      "Vorteil: funktioniert immer, auch bei unsortierten Daten. Nachteil: Im schlimmsten Fall schaust du alle n Werte an. Bei einer Million Werte also eine Million Vergleiche."
     ],
     "code": "public class LinearSearch {\n    static int linearSearch(int[] arr, int gesucht) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == gesucht) {\n                return i;          // gefunden: Index zurückgeben\n            }\n        }\n        return -1;                 // alles angeschaut, nichts gefunden\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {-10, -3, 0, 5, 7, 17, 23, 27, 30};\n        System.out.println(linearSearch(arr, -3));\n        System.out.println(linearSearch(arr, 17));\n        System.out.println(linearSearch(arr, 32));\n    }\n}",
     "ausgabe": "1\n5\n-1",
     "merke": "Lineare Suche: jedes Element prüfen, Index zurückgeben, sonst -1. Geht immer, ist aber langsam."
    },
    {
     "titel": "Binäre Suche: halbieren statt durchblättern",
     "text": [
      "Alltag: Du suchst „Müller“ im Telefonbuch. Du schlägst in der Mitte auf, siehst „Klein“ und weißt: Müller steht weiter hinten. Die vordere Hälfte ist erledigt. Dann wieder die Mitte der hinteren Hälfte, und so weiter. Das geht nur, weil das Telefonbuch sortiert ist.",
      "Die binäre Suche (binary search) macht das mit einem sortierten Array. Zwei Indizes links und rechts begrenzen den Bereich, in dem der Wert noch stehen kann. mitte = (links + rechts) / 2 (Ganzzahldivision). Ist arr[mitte] der Wert: fertig. Ist er kleiner als gesucht: links = mitte + 1. Ist er größer: rechts = mitte - 1. Sobald links > rechts, ist der Bereich leer: -1.",
      "Jeder Schritt halbiert den Bereich. Bei einer Million Werte reichen etwa 20 Schritte, denn 2 hoch 20 ist ungefähr eine Million. Bedingung: Das Array muss sortiert sein. Sonst liefert die binäre Suche falsche Ergebnisse.",
      "Die Ausgabe unten zeigt die Zwischenschritte für die Suche nach 17 im Array aus Tutorium 4, Aufgabe 1."
     ],
     "code": "public class BinarySearch {\n    static int binarySearch(int[] arr, int gesucht) {\n        int links = 0;\n        int rechts = arr.length - 1;\n        while (links <= rechts) {\n            int mitte = (links + rechts) / 2;\n            System.out.println(\"links=\" + links + \" rechts=\" + rechts + \" mitte=\" + mitte + \" Wert=\" + arr[mitte]);\n            if (arr[mitte] == gesucht) {\n                return mitte;\n            } else if (arr[mitte] < gesucht) {\n                links = mitte + 1;     // rechte Hälfte weitersuchen\n            } else {\n                rechts = mitte - 1;    // linke Hälfte weitersuchen\n            }\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {-10, -3, 0, 5, 7, 17, 23, 27, 30};\n        System.out.println(\"Index: \" + binarySearch(arr, 17));\n    }\n}",
     "ausgabe": "links=0 rechts=8 mitte=4 Wert=7\nlinks=5 rechts=8 mitte=6 Wert=23\nlinks=5 rechts=5 mitte=5 Wert=17\nIndex: 5",
     "merke": "Binäre Suche nur auf sortierten Daten. Jeder Schritt halbiert den Suchbereich."
    },
    {
     "titel": "Komplexität und O-Notation: Wie wächst der Aufwand?",
     "text": [
      "Ein schneller Rechner hilft wenig, wenn der Algorithmus schlecht ist. Deshalb fragt man: Wie wächst die Zahl der Schritte, wenn die Eingabe größer wird? Die Größe der Eingabe nennt man n (z. B. Länge des Arrays). Die Antwort heißt Komplexität (Laufzeitkomplexität).",
      "Die O-Notation (sprich „Groß-O“) beschreibt nur das Wachstum im schlimmsten Fall und ignoriert konstante Faktoren. 3n + 5 Schritte ist O(n). Alltag: Ob du pro Klausur 2 oder 3 Sekunden brauchst, ist egal. Wichtig ist, ob sich der Aufwand bei doppelt so vielen Klausuren verdoppelt oder vervierfacht.",
      "Die wichtigsten Klassen, von schnell nach langsam: O(1) konstant (Array-Zugriff arr[5]). O(log n) logarithmisch (binäre Suche, n wird immer halbiert). O(n) linear (eine Schleife über alles, lineare Suche). O(n log n) (gute Sortierverfahren wie Merge Sort, Quicksort im Mittel). O(n²) quadratisch (zwei verschachtelte Schleifen über alles, Bubble Sort). O(2 hoch n) exponentiell (naive rekursive Fibonacci).",
      "Faustregeln: Eine Schleife bis n ist O(n). Zwei verschachtelte Schleifen bis n sind O(n²). Eine Schleife, die eine feste Zahl Male läuft (z. B. 5), zählt als Konstante. Eine Variable, die in jedem Schritt halbiert oder verdoppelt wird, deutet auf O(log n). Das Beispiel zählt die Schritte direkt mit."
     ],
     "code": "public class Zaehlen {\n    public static void main(String[] args) {\n        int n = 16;\n        int linear = 0, quadratisch = 0, logarithmisch = 0;\n        for (int i = 0; i < n; i++) {\n            linear++;\n        }\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                quadratisch++;\n            }\n        }\n        for (int k = n; k > 1; k = k / 2) {\n            logarithmisch++;\n        }\n        System.out.println(linear + \" \" + quadratisch + \" \" + logarithmisch);\n    }\n}",
     "ausgabe": "16 256 4",
     "merke": "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n). Verschachtelte Schleifen multiplizieren sich."
    },
    {
     "titel": "Sortieren: Bubble Sort, Selection Sort, Insertion Sort",
     "text": [
      "Sortieren heißt: Werte in aufsteigende (oder absteigende) Reihenfolge bringen. Das ist die Voraussetzung für die binäre Suche. Alle drei Verfahren hier sortieren in place, also direkt im selben Array, ohne Kopie.",
      "Bubble Sort: Vergleiche immer zwei Nachbarn und tausche, wenn sie falsch herum stehen. Nach einem Durchgang ist das größte Element ganz hinten, es ist „aufgestiegen“ wie eine Luftblase. Das wiederholt man n - 1 Mal.",
      "Selection Sort (Auswahl): Suche das kleinste Element im unsortierten Rest und tausche es an die erste freie Stelle. Alltag: Aus einem Stapel immer die kleinste Karte heraussuchen und links ablegen.",
      "Insertion Sort (Einfügen): Nimm das nächste Element und schiebe es nach links, bis es an der richtigen Stelle im schon sortierten Teil steht. Alltag: So sortieren die meisten Menschen Spielkarten auf der Hand. Alle drei sind O(n²). Insertion Sort ist bei fast sortierten Daten sehr schnell. Java selbst nutzt Arrays.sort (für int-Arrays ein Dual-Pivot-Quicksort, O(n log n))."
     ],
     "code": "public class Sortieren {\n    static void bubbleSort(int[] arr) {\n        for (int ende = arr.length; ende > 1; ende--) {\n            for (int i = 0; i < ende - 1; i++) {\n                if (arr[i] > arr[i + 1]) {\n                    int tmp = arr[i];\n                    arr[i] = arr[i + 1];\n                    arr[i + 1] = tmp;\n                }\n            }\n        }\n    }\n\n    static void selectionSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++) {\n            int minIndex = i;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j] < arr[minIndex]) {\n                    minIndex = j;\n                }\n            }\n            int tmp = arr[i];\n            arr[i] = arr[minIndex];\n            arr[minIndex] = tmp;\n        }\n    }\n\n    static void insertionSort(int[] arr) {\n        for (int i = 1; i < arr.length; i++) {\n            int key = arr[i];\n            int j = i - 1;\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];   // größere Werte nach rechts schieben\n                j--;\n            }\n            arr[j + 1] = key;\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] a = {-10, 23, 27, 5, 7, 30, 17, 0, -3};\n        int[] b = a.clone();\n        int[] c = a.clone();\n        bubbleSort(a);\n        selectionSort(b);\n        insertionSort(c);\n        System.out.println(Arrays.toString(a));\n        System.out.println(Arrays.equals(a, b) && Arrays.equals(b, c));\n    }\n}",
     "ausgabe": "[-10, -3, 0, 5, 7, 17, 23, 27, 30]\ntrue",
     "merke": "Bubble: Nachbarn tauschen. Selection: Minimum nach vorn. Insertion: einsortieren wie Spielkarten. Alle O(n²)."
    },
    {
     "titel": "Listen: wachsende Arrays",
     "text": [
      "Ein Array hat eine feste Länge. Oft weißt du aber vorher nicht, wie viele Werte kommen. Eine Liste (list) ist eine Datenstruktur, die beliebig wachsen kann. Datenstruktur heißt: eine bestimmte Art, Daten im Speicher zu ordnen, damit bestimmte Operationen schnell gehen.",
      "Eine Möglichkeit ist eine Liste auf Basis eines Arrays (Tutorium 4, Aufgabe 17). Intern liegt ein Array, dazu ein Zähler size für die belegten Plätze. Ist das Array voll, legt add ein doppelt so großes an und kopiert alles hinüber. Alltag: Dein Bücherregal ist voll, du kaufst ein doppelt so großes und stellst alle Bücher um.",
      "So arbeitet Javas ArrayList. Zugriff per Index ist O(1). Einfügen am Ende meist O(1). Einfügen oder Löschen vorne ist O(n), weil alle anderen Werte verschoben werden müssen."
     ],
     "code": "class IntListe {\n    private int[] daten = new int[2];\n    private int size = 0;\n\n    void add(int wert) {\n        if (size == daten.length) {                 // voll?\n            int[] neu = new int[daten.length * 2];  // doppelt so groß\n            for (int i = 0; i < size; i++) {\n                neu[i] = daten[i];\n            }\n            daten = neu;\n            System.out.println(\"vergrößert auf \" + daten.length);\n        }\n        daten[size] = wert;\n        size++;\n    }\n\n    int get(int index) {\n        return daten[index];\n    }\n\n    int size() {\n        return size;\n    }\n}\n\npublic class ListeTest {\n    public static void main(String[] args) {\n        IntListe l = new IntListe();\n        for (int i = 1; i <= 5; i++) {\n            l.add(i * 10);\n        }\n        System.out.println(l.size() + \" Werte, der letzte ist \" + l.get(l.size() - 1));\n    }\n}",
     "ausgabe": "vergrößert auf 4\nvergrößert auf 8\n5 Werte, der letzte ist 50",
     "merke": "Array-basierte Liste: schneller Indexzugriff, beim Vollwerden in ein doppelt so großes Array umziehen."
    },
    {
     "titel": "Verkettete Liste: jedes Element kennt seinen Nachfolger",
     "text": [
      "Die zweite Art, eine Liste zu bauen: die verkettete Liste (linked list). Alltag: eine Schnitzeljagd. An jeder Station liegt ein Hinweis (Wert) und ein Zettel, wo die nächste Station ist (Referenz). Wer nur die erste Station kennt, findet alle anderen.",
      "Jedes Element ist ein Objekt einer kleinen Klasse Node (Knoten) mit zwei Attributen: value (der Wert) und next (Referenz auf den nächsten Knoten, beim letzten null). Die Liste selbst merkt sich nur den ersten Knoten, den Kopf (head).",
      "Vorne einfügen ist O(1): neuer Knoten, dessen next ist der alte Kopf, und er wird der neue Kopf. Kein Verschieben nötig. Dafür ist der Zugriff auf das i-te Element O(n), weil man von vorne durchlaufen muss.",
      "Durchlaufen geht immer gleich: Node aktuell = head; while (aktuell != null) { ... aktuell = aktuell.next; }"
     ],
     "code": "class Node {\n    int value;\n    Node next;\n\n    Node(int value, Node next) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\nclass LinkedIntList {\n    private Node head;\n\n    void addFirst(int value) {\n        head = new Node(value, head);\n    }\n\n    boolean contains(int value) {\n        Node aktuell = head;\n        while (aktuell != null) {\n            if (aktuell.value == value) {\n                return true;\n            }\n            aktuell = aktuell.next;\n        }\n        return false;\n    }\n\n    @Override\n    public String toString() {\n        String s = \"\";\n        for (Node n = head; n != null; n = n.next) {\n            s += n.value + \" -> \";\n        }\n        return s + \"null\";\n    }\n}\n\npublic class VerketteteListe {\n    public static void main(String[] args) {\n        LinkedIntList l = new LinkedIntList();\n        l.addFirst(17);\n        l.addFirst(9);\n        l.addFirst(3);\n        System.out.println(l);\n        System.out.println(l.contains(9) + \" \" + l.contains(10));\n    }\n}",
     "ausgabe": "3 -> 9 -> 17 -> null\ntrue false",
     "merke": "Verkettete Liste: Knoten mit Wert und next-Referenz. Vorne einfügen O(1), Zugriff per Index O(n)."
    },
    {
     "titel": "Stack und Queue: LIFO und FIFO",
     "text": [
      "Ein Stack (Stapel) funktioniert wie ein Tellerstapel. Du legst oben drauf (push) und nimmst oben weg (pop). Der zuletzt hingelegte Teller kommt zuerst wieder heraus: LIFO, last in, first out. peek schaut oben nach, ohne wegzunehmen. Anwendungen: Zurück-Knopf im Browser, Klammern prüfen, der Aufrufstapel von Methoden (Kapitel 2, Rekursion).",
      "Eine Queue (Warteschlange) funktioniert wie die Schlange an der Mensakasse. Wer zuerst kommt, wird zuerst bedient: FIFO, first in, first out. enqueue stellt hinten an, dequeue nimmt vorne weg.",
      "Beide lassen sich mit einer verketteten Liste bauen. Der Stack arbeitet nur am Kopf. Die Queue nimmt vorne weg und hängt hinten an, dafür merkt man sich zusätzlich das Ende (tail).",
      "In Java nutzt man fertige Klassen: ArrayDeque kann beides. Als Stack: push, pop, peek. Als Queue: offer (hinten anstellen), poll (vorne entnehmen, null wenn leer)."
     ],
     "code": "Deque<String> stack = new ArrayDeque<>();\nstack.push(\"a\");\nstack.push(\"b\");\nstack.push(\"c\");\nSystem.out.println(stack.pop() + stack.pop() + stack.peek());\n\nQueue<String> queue = new ArrayDeque<>();\nqueue.offer(\"a\");\nqueue.offer(\"b\");\nqueue.offer(\"c\");\nSystem.out.println(queue.poll() + queue.poll() + queue.peek());",
     "ausgabe": "cba\nabc",
     "merke": "Stack = LIFO (Tellerstapel), Queue = FIFO (Warteschlange)."
    },
    {
     "titel": "Binärbäume und binäre Suchbäume",
     "text": [
      "Ein Baum (tree) ist eine Datenstruktur, die sich verzweigt wie ein Stammbaum, nur auf dem Kopf: oben die Wurzel (root), unten die Blätter (leaves). Bei einem Binärbaum hat jeder Knoten höchstens zwei Kinder: left und right. Ein Knoten ist also wie ein Listenknoten, nur mit zwei Referenzen statt einer.",
      "Ein binärer Suchbaum (BST) hat eine Ordnungsregel: Alles im linken Teilbaum ist kleiner als der Knoten, alles im rechten größer. Suchen geht dann wie bei der binären Suche: kleiner → links weiter, größer → rechts weiter. Einfügen genauso, bis man auf null trifft, dort kommt der neue Knoten hin.",
      "Problem: Fügt man sortierte Werte ein (1, 2, 3, 4, ...), hängt jeder neue Knoten rechts an. Der Baum wird zu einer Liste, Suchen kostet O(n) statt O(log n). Danach fragte die Klausur WS 24/25 (Aufgabe 5d).",
      "Durchlaufen (Traversierung) geht rekursiv in drei Reihenfolgen. Pre-Order: Knoten, links, rechts. In-Order: links, Knoten, rechts (bei einem Suchbaum kommt dabei die sortierte Reihenfolge heraus). Post-Order: links, rechts, Knoten."
     ],
     "code": "class TreeNode {\n    int value;\n    TreeNode left, right;\n\n    TreeNode(int value) {\n        this.value = value;\n    }\n\n    void insert(int v) {\n        if (v < value) {\n            if (left == null) left = new TreeNode(v);\n            else left.insert(v);\n        } else {\n            if (right == null) right = new TreeNode(v);\n            else right.insert(v);\n        }\n    }\n\n    String preOrder() {\n        return value + \" \" + (left == null ? \"\" : left.preOrder()) + (right == null ? \"\" : right.preOrder());\n    }\n\n    String inOrder() {\n        return (left == null ? \"\" : left.inOrder()) + value + \" \" + (right == null ? \"\" : right.inOrder());\n    }\n\n    String postOrder() {\n        return (left == null ? \"\" : left.postOrder()) + (right == null ? \"\" : right.postOrder()) + value + \" \";\n    }\n}\n\npublic class Baum {\n    public static void main(String[] args) {\n        TreeNode root = new TreeNode(10);\n        int[] werte = {5, 17, 3, 7, 21, 19, 28};\n        for (int w : werte) {\n            root.insert(w);\n        }\n        System.out.println(\"pre:  \" + root.preOrder());\n        System.out.println(\"in:   \" + root.inOrder());\n        System.out.println(\"post: \" + root.postOrder());\n    }\n}",
     "ausgabe": "pre:  10 5 3 7 17 21 19 28 \nin:   3 5 7 10 17 19 21 28 \npost: 3 7 5 19 28 21 17 10",
     "merke": "Suchbaum: links kleiner, rechts größer. In-Order liefert die Werte sortiert."
    },
    {
     "titel": "Generics: Datenstrukturen für jeden Typ",
     "text": [
      "Unsere IntListe kann nur ints speichern. Für Strings müsste man alles noch einmal schreiben. Generics lösen das: Man schreibt die Klasse einmal mit einem Typ-Platzhalter, meist T genannt. Alltag: Eine Box mit Etikettenhalter. Erst beim Benutzen steckt man das Etikett „Bücher“ oder „Schuhe“ hinein.",
      "Schreibweise: class Box<T> { private T inhalt; ... }. Benutzen: Box<String> b = new Box<>(); Ab dann prüft der Compiler, dass nur Strings hineinkommen, und beim Herausholen ist kein Cast nötig. Die leeren spitzen Klammern rechts (<>) heißen Diamond-Operator, Java ergänzt den Typ selbst.",
      "Für T dürfen nur Klassen eingesetzt werden, keine primitiven Typen. Statt Box<int> schreibt man Box<Integer> (Wrapper-Klasse, Kapitel 3). Autoboxing erledigt die Umwandlung.",
      "Mit T extends Comparable<T> verlangt man, dass T vergleichbar ist, also eine Methode compareTo hat. a.compareTo(b) liefert eine negative Zahl, wenn a kleiner ist, 0 bei Gleichheit, sonst eine positive Zahl. Integer und String können das schon."
     ],
     "code": "class Box<T> {\n    private T inhalt;\n\n    void lege(T inhalt) {\n        this.inhalt = inhalt;\n    }\n\n    T hole() {\n        return inhalt;\n    }\n}\n\npublic class Generisch {\n    static <T extends Comparable<T>> T max(T[] werte) {\n        T bester = werte[0];\n        for (T w : werte) {\n            if (w.compareTo(bester) > 0) {\n                bester = w;\n            }\n        }\n        return bester;\n    }\n\n    public static void main(String[] args) {\n        Box<String> b = new Box<>();\n        b.lege(\"Buch\");\n        String s = b.hole();          // kein Cast nötig\n        Box<Integer> z = new Box<>();\n        z.lege(42);                   // Autoboxing int -> Integer\n        System.out.println(s + \" \" + (z.hole() + 1));\n        System.out.println(max(new Integer[]{3, 9, 4}) + \" \" + max(new String[]{\"Kiwi\", \"Apfel\", \"Zitrone\"}));\n        System.out.println(\"Apfel\".compareTo(\"Birne\") < 0);\n    }\n}",
     "ausgabe": "Buch 43\n9 Zitrone\ntrue",
     "merke": "Generics: Klasse einmal mit Platzhalter T schreiben, beim Benutzen den Typ einsetzen. Nur Klassen, keine primitiven Typen."
    },
    {
     "titel": "Java Collections: ArrayList, LinkedList, HashMap, HashSet",
     "text": [
      "Java liefert fertige Datenstrukturen im Paket java.util (import java.util.*;). Sie heißen zusammen Collections. Die wichtigsten Interfaces und Klassen:",
      "List (Reihenfolge, Duplikate erlaubt, Index): ArrayList (Array-basiert, schneller Indexzugriff) und LinkedList (verkettet, schnelles Einfügen vorne). Methoden: add, get(i), set(i, x), remove(i), size(), contains.",
      "Set (Menge, keine Duplikate): HashSet. add liefert false, wenn der Wert schon drin ist. Alltag: eine Gästeliste, auf der jeder nur einmal stehen kann.",
      "Map (Zuordnung Schlüssel → Wert): HashMap. Alltag: ein Wörterbuch oder Telefonbuch, Name → Nummer. put(schluessel, wert), get(schluessel) (null wenn nicht vorhanden), containsKey, getOrDefault. Jeder Schlüssel kommt nur einmal vor. put mit vorhandenem Schlüssel überschreibt. Zugriff im Mittel O(1). Die Reihenfolge bei HashSet und HashMap ist nicht festgelegt. Für sortierte Ausgabe gibt es TreeSet und TreeMap.",
      "Guter Stil: Variable mit dem Interface-Typ deklarieren, Objekt mit der konkreten Klasse erzeugen. List<String> l = new ArrayList<>(); So kannst du später die Implementierung austauschen (coding to an interface, Kapitel 3)."
     ],
     "code": "List<String> namen = new ArrayList<>();\nnamen.add(\"Ada\");\nnamen.add(\"Linus\");\nnamen.add(\"Ada\");\nnamen.remove(0);\nSystem.out.println(namen + \" \" + namen.size() + \" \" + namen.get(1));\n\nSet<String> menge = new HashSet<>(namen);\nSystem.out.println(menge.size() + \" \" + menge.add(\"Grace\") + \" \" + menge.add(\"Ada\"));\n\nMap<String, Integer> alter = new HashMap<>();\nalter.put(\"Ada\", 36);\nalter.put(\"Linus\", 54);\nalter.put(\"Ada\", 37);\nSystem.out.println(alter.get(\"Ada\") + \" \" + alter.get(\"Bob\") + \" \" + alter.getOrDefault(\"Bob\", 0));\nMap<String, Integer> sortiert = new TreeMap<>(alter);\nSystem.out.println(sortiert);",
     "ausgabe": "[Linus, Ada] 2 Ada\n2 true false\n37 null 0\n{Ada=37, Linus=54}",
     "merke": "List: Reihenfolge und Duplikate. Set: keine Duplikate. Map: Schlüssel → Wert, Schlüssel eindeutig."
    }
   ],
   "zusammenfassung": [
    "Lineare Suche: alle Elemente prüfen, O(n), funktioniert auch unsortiert. Rückgabe Index oder -1.",
    "Binäre Suche: nur auf sortierten Daten, Bereich jedes Mal halbieren (links, rechts, mitte), O(log n).",
    "O-Notation beschreibt das Wachstum des Aufwands im schlimmsten Fall, ohne Konstanten: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n). Verschachtelte Schleifen bis n: O(n²).",
    "Bubble Sort (Nachbarn tauschen), Selection Sort (Minimum nach vorn), Insertion Sort (einsortieren): alle O(n²). Arrays.sort ist O(n log n).",
    "Array-basierte Liste: verdoppelt bei Bedarf das interne Array, Indexzugriff O(1). Verkettete Liste: Knoten mit value und next, vorne einfügen O(1), Indexzugriff O(n).",
    "Stack: LIFO, push/pop/peek. Queue: FIFO, enqueue/dequeue (Java: offer/poll). ArrayDeque kann beides.",
    "Binärbaum: Knoten mit left und right. Suchbaum: links kleiner, rechts größer. Traversierung pre (K, L, R), in (L, K, R, sortiert), post (L, R, K). Sortiert eingefügt entartet er zur Liste.",
    "Generics: class Box<T>, Box<String> b = new Box<>(); nur Klassen als Typargument (Integer statt int). T extends Comparable<T> erlaubt compareTo.",
    "Collections: List (ArrayList, LinkedList), Set (HashSet, keine Duplikate), Map (HashMap, Schlüssel → Wert). Mit Interface-Typ deklarieren."
   ],
   "karten": [
    {
     "f": "Was ist Voraussetzung für die binäre Suche, und warum?",
     "a": "Die Daten müssen sortiert sein. Nur dann weiß man nach einem Vergleich mit der Mitte, in welcher Hälfte der Wert liegen muss, und kann die andere Hälfte wegwerfen. Wie beim Telefonbuch.",
     "q": "Tutorium 4, Aufgabe 1 und 3"
    },
    {
     "f": "Wie viele Vergleiche braucht die binäre Suche bei etwa 1.000.000 Elementen höchstens?",
     "a": "Etwa 20, weil jeder Vergleich den Bereich halbiert und 2 hoch 20 ≈ 1.000.000. Die lineare Suche bräuchte bis zu 1.000.000.",
     "q": "Tutorium 4, Aufgabe 4"
    },
    {
     "f": "Was beschreibt die O-Notation?",
     "a": "Wie der Aufwand eines Algorithmus mit der Eingabegröße n wächst, im schlimmsten Fall und ohne konstante Faktoren. Sie sagt nicht, wie viele Sekunden etwas dauert.",
     "q": "Tutorium 4, Aufgabe 14"
    },
    {
     "f": "Ist ein O(n)-Algorithmus immer schneller als ein O(n²)-Algorithmus?",
     "a": "Nein. Für kleine n kann der O(n²)-Algorithmus wegen kleinerer Konstanten schneller sein. O sagt nur, was bei großem n passiert.",
     "q": "Tutorium 4, Aufgabe 14"
    },
    {
     "f": "Welche Komplexität hat diese Methode?",
     "code": "static void myCoolFunction(int n) {\n    while (n > 1) {\n        n = n / 2;\n    }\n}",
     "a": "O(log n). n wird in jedem Durchlauf halbiert, also gibt es etwa log2(n) Durchläufe.",
     "q": "Tutorium 4, Aufgabe 15 (3)"
    },
    {
     "f": "Welche Komplexität hat diese Methode?",
     "code": "static void trickyMethod(int n) {\n    int i = 0;\n    while (i < n) {\n        for (int j = 0; j < 5; j++) { ... }\n        i += 1;\n    }\n}",
     "a": "O(n). Die innere Schleife läuft immer genau 5 Mal, das ist eine Konstante. 5n wird zu O(n).",
     "q": "Tutorium 4, Aufgabe 15 (6)"
    },
    {
     "f": "Welche Komplexität hat diese Methode?",
     "code": "static void trickyMethod2(int n) {\n    for (int i = 1; i < n; i *= 2)\n        for (int j = 0; j < n; j++) { ... }\n}",
     "a": "O(n log n). Die äußere Schleife verdoppelt i, läuft also log n Mal. Die innere läuft jedes Mal n Mal.",
     "q": "Tutorium 4, Aufgabe 15 (7)"
    },
    {
     "f": "Welche Komplexität hat recursionAdventure (ruft sich zweimal mit x - 1 und x - 2 auf)?",
     "a": "O(2^n), exponentiell. Jeder Aufruf erzeugt zwei neue, wie bei der naiven Fibonacci-Rekursion.",
     "q": "Tutorium 4, Aufgabe 15 (4)"
    },
    {
     "f": "Wie funktioniert Bubble Sort in einem Satz, und welche Komplexität hat er?",
     "a": "Benachbarte Paare vergleichen und bei falscher Reihenfolge tauschen, das so oft wiederholen, bis nichts mehr getauscht wird. O(n²).",
     "q": "Tutorium 4, Aufgabe 8–9"
    },
    {
     "f": "Was ist der Unterschied zwischen Insertion Sort und Selection Sort?",
     "a": "Selection Sort sucht im unsortierten Rest das Minimum und tauscht es nach vorn. Insertion Sort nimmt das nächste Element und schiebt es im sortierten Teil an die richtige Stelle (wie Spielkarten auf der Hand).",
     "q": "Tutorium 4, Aufgabe 8–9"
    },
    {
     "f": "ArrayList oder LinkedList: Wann was?",
     "a": "ArrayList bei viel Zugriff per Index (get(i) ist O(1)). LinkedList bei vielen Einfügungen und Löschungen am Anfang (O(1) statt O(n) Verschieben).",
     "q": "Tutorium 4, Aufgabe 37"
    },
    {
     "f": "Was bedeuten LIFO und FIFO, und welche Struktur gehört dazu?",
     "a": "LIFO (last in, first out): Stack, wie ein Tellerstapel. FIFO (first in, first out): Queue, wie eine Warteschlange an der Kasse.",
     "q": "Tutorium 4, Aufgabe 24"
    },
    {
     "f": "Welche Datenstruktur für den Zurück-Knopf im Browser? Welche für eine Ticketschlange?",
     "a": "Browser: Stack (die zuletzt besuchte Seite kommt zuerst). Ticketschalter: Queue (wer zuerst kommt, wird zuerst bedient).",
     "q": "Tutorium 4, Aufgabe 16"
    },
    {
     "f": "Welche Datenstruktur: Name → Telefonnummer schnell finden, keine doppelten Namen?",
     "a": "Eine Map, konkret HashMap<String, String>. Schlüssel sind eindeutig, Zugriff im Mittel O(1).",
     "q": "Tutorium 4, Aufgabe 16c"
    },
    {
     "f": "Was ist die Regel eines binären Suchbaums?",
     "a": "Für jeden Knoten: alle Werte im linken Teilbaum sind kleiner, alle im rechten größer. Dadurch kann man beim Suchen bei jedem Knoten eine Hälfte ignorieren.",
     "q": "Tutorium 4, Aufgabe 32"
    },
    {
     "f": "Warum ist es schlecht, sortierte Werte in einen Suchbaum einzufügen?",
     "a": "Jeder neue Wert ist größer als alle bisherigen und hängt immer rechts an. Der Baum wird zu einer langen Kette (wie eine Liste). Suchen kostet dann O(n) statt O(log n).",
     "q": "Altklausur WS 24/25, Aufgabe 5d"
    },
    {
     "f": "Pre-, In- und Post-Order: In welcher Reihenfolge?",
     "a": "Pre-Order: Knoten, links, rechts. In-Order: links, Knoten, rechts. Post-Order: links, rechts, Knoten. Das Wort sagt, wann der Knoten selbst drankommt.",
     "q": "Tutorium 4, Aufgabe 28–29"
    },
    {
     "f": "Warum kompiliert List<int> nicht?",
     "a": "Typargumente von Generics müssen Klassen sein, int ist primitiv. Richtig: List<Integer>. Autoboxing wandelt int automatisch um.",
     "q": "Tutorium 4, Aufgabe 47"
    },
    {
     "f": "Warum ist ArrayList<Integer> kein Subtyp von ArrayList<Number>?",
     "a": "Sonst könnte man über die ArrayList<Number>-Variable ein Double in eine Liste legen, die nur Integer enthalten darf. Lösung: Wildcard ArrayList<? extends Number> zum Lesen.",
     "q": "Tutorium 4, Aufgabe 51"
    },
    {
     "f": "Was liefert a.compareTo(b)?",
     "a": "Eine negative Zahl, wenn a kleiner als b ist, 0 bei Gleichheit, eine positive Zahl, wenn a größer ist. Bei Strings alphabetisch (genauer: nach Zeichencodes).",
     "q": "Tutorium 4, Aufgabe 48"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "Deque<Integer> stack = new ArrayDeque<>();\nstack.push(1);\nstack.push(2);\nSystem.out.println(stack.pop());\nstack.push(3);\nstack.push(4);\nSystem.out.println(stack.pop());\nSystem.out.println(stack.peek());\nSystem.out.println(stack.size());",
     "loesung": "2\n4\n3\n2",
     "erklaerung": "Zeile für Zeile: push 1, push 2 → Stapel (unten→oben) 1 2. pop nimmt das oberste: 2. push 3, push 4 → 1 3 4. pop: 4. peek schaut nur oben nach: 3 (bleibt liegen). Übrig sind 1 und 3, size 2.",
     "q": "Tutorium 4, Aufgabe 24"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "Queue<String> q = new ArrayDeque<>();\nq.offer(\"A\");\nq.offer(\"B\");\nSystem.out.println(q.poll());\nq.offer(\"C\");\nSystem.out.println(q.poll());\nSystem.out.println(q.poll());\nSystem.out.println(q.poll());",
     "loesung": "A\nB\nC\nnull",
     "erklaerung": "Warteschlange: A und B stellen sich an. poll holt den Ersten: A. C stellt sich hinten an (Schlange: B C). poll: B, poll: C. Jetzt ist die Schlange leer, poll liefert null statt einen Fehler zu werfen.",
     "q": "Tutorium 4, Aufgabe 24"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "List<Integer> l = new ArrayList<>();\nl.add(5);\nl.add(7);\nl.add(0, 3);\nl.set(2, 9);\nSystem.out.println(l);\nl.remove(Integer.valueOf(5));\nSystem.out.println(l + \" \" + l.size() + \" \" + l.contains(7));",
     "loesung": "[3, 5, 9]\n[3, 9] 2 false",
     "erklaerung": "add(5), add(7) → [5, 7]. add(0, 3) fügt an Index 0 ein → [3, 5, 7]. set(2, 9) ersetzt Index 2 → [3, 5, 9]. remove(Integer.valueOf(5)) entfernt den Wert 5 (nicht den Index 5!) → [3, 9]. 7 ist nicht mehr drin.",
     "q": "Tutorium 4, Aufgabe 37–38"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "Map<String, Integer> zaehler = new HashMap<>();\nString[] woerter = {\"ja\", \"nein\", \"ja\", \"ja\"};\nfor (String w : woerter) {\n    zaehler.put(w, zaehler.getOrDefault(w, 0) + 1);\n}\nSystem.out.println(zaehler.get(\"ja\") + \" \" + zaehler.get(\"nein\") + \" \" + zaehler.get(\"vielleicht\"));",
     "loesung": "3 1 null",
     "erklaerung": "Für jedes Wort: bisherigen Zähler holen (0, wenn neu), 1 addieren, wieder speichern. „ja“ kommt dreimal, „nein“ einmal. Ein Schlüssel, der nie hineingelegt wurde, liefert bei get null. Genau dieses Muster brauchst du für Moby Dick (Tutorium 5, Aufgabe 11).",
     "q": "Tutorium 4, Aufgabe 43–45; Tutorium 5, Aufgabe 11"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "Set<Integer> s = new HashSet<>();\nint[] werte = {4, 2, 4, 7, 2};\nint doppelt = 0;\nfor (int w : werte) {\n    if (!s.add(w)) {\n        doppelt++;\n    }\n}\nSystem.out.println(s.size() + \" \" + doppelt);",
     "loesung": "3 2",
     "erklaerung": "add liefert true, wenn der Wert neu ist, false, wenn er schon drin war. 4 neu, 2 neu, 4 doppelt, 7 neu, 2 doppelt. Im Set bleiben {2, 4, 7}, also 3 Werte, und 2 Duplikate.",
     "q": "Tutorium 4, Aufgabe 41"
    },
    {
     "typ": "text",
     "frage": "Wie sieht das Array nach dem ERSTEN Durchgang der äußeren Schleife von Bubble Sort aus?",
     "code": "int[] a = {5, 1, 4, 2, 8};\nfor (int i = 0; i < a.length - 1; i++) {\n    if (a[i] > a[i + 1]) {\n        int tmp = a[i];\n        a[i] = a[i + 1];\n        a[i + 1] = tmp;\n    }\n}\nSystem.out.println(Arrays.toString(a));",
     "loesung": "[1, 4, 2, 5, 8]",
     "erklaerung": "Paar für Paar: 5 > 1 tauschen → 1 5 4 2 8. 5 > 4 tauschen → 1 4 5 2 8. 5 > 2 tauschen → 1 4 2 5 8. 5 < 8 bleibt. Die 5 ist nach rechts „aufgestiegen“, bis sie auf die größere 8 traf. Die 8 steht ganz hinten.",
     "q": "Tutorium 4, Aufgabe 8"
    },
    {
     "typ": "zahl",
     "frage": "Wie oft wird die Zeile mit schritte++ ausgeführt?",
     "code": "int n = 10;\nint schritte = 0;\nfor (int i = 0; i < n; i++) {\n    for (int j = i; j < n; j++) {\n        schritte++;\n    }\n}",
     "loesung": 55,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Für i = 0 läuft j 10 Mal, für i = 1 9 Mal, ..., für i = 9 einmal. 10 + 9 + ... + 1 = 55 = n(n+1)/2. Das ist immer noch O(n²), weil n²/2 nur um den Faktor 1/2 kleiner ist.",
     "q": "Tutorium 4, Aufgabe 15"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Durchläufe der while-Schleife braucht die binäre Suche, um festzustellen, dass 32 nicht im Array ist?",
     "code": "int[] arr = {-10, -3, 0, 5, 7, 17, 23, 27, 30};\nint links = 0, rechts = arr.length - 1, durchlaeufe = 0;\nwhile (links <= rechts) {\n    durchlaeufe++;\n    int mitte = (links + rechts) / 2;\n    if (arr[mitte] == 32) break;\n    else if (arr[mitte] < 32) links = mitte + 1;\n    else rechts = mitte - 1;\n}",
     "loesung": 4,
     "toleranz": 0,
     "einheit": "Durchläufe",
     "erklaerung": "1: mitte 4 (7 < 32) → links = 5. 2: mitte 6 (23 < 32) → links = 7. 3: mitte 7 (27 < 32) → links = 8. 4: mitte 8 (30 < 32) → links = 9. Jetzt links > rechts, Schluss. Vier Durchläufe, die lineare Suche hätte neun gebraucht.",
     "q": "Tutorium 4, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Gegeben ist der Suchbaum, der durch Einfügen von 8, 3, 10, 1, 6, 14, 4 (in dieser Reihenfolge) entsteht. Was gibt der Code aus (Pre-Order)?",
     "code": "class N {\n    int v; N l, r;\n    N(int v) { this.v = v; }\n    void insert(int x) {\n        if (x < v) { if (l == null) l = new N(x); else l.insert(x); }\n        else { if (r == null) r = new N(x); else r.insert(x); }\n    }\n    void pre() {\n        System.out.print(v + \" \");\n        if (l != null) l.pre();\n        if (r != null) r.pre();\n    }\n}\n\npublic class Pre {\n    public static void main(String[] args) {\n        N root = new N(8);\n        for (int x : new int[]{3, 10, 1, 6, 14, 4}) root.insert(x);\n        root.pre();\n        System.out.println();\n    }\n}",
     "loesung": "8 3 1 6 4 10 14",
     "erklaerung": "Aufbau: 8 Wurzel. 3 < 8 links. 10 > 8 rechts. 1 < 8, < 3: links von 3. 6 < 8, > 3: rechts von 3. 14: rechts von 10. 4 < 8, > 3, < 6: links von 6. Pre-Order = erst Knoten, dann links komplett, dann rechts: 8, (3, 1, (6, 4)), (10, 14).",
     "q": "Tutorium 4, Aufgabe 28–33"
    },
    {
     "typ": "mc",
     "frage": "Welche Komplexität hat diese Methode aus Tutorium 4, Aufgabe 15 (1)?",
     "code": "static void someMethod(int[][] arr) {\n    for (int i = 0; i < arr.length; i++) {\n        for (int j = 0; j < arr[i].length; j++) {\n            int x = (i * j) % 7;\n        }\n    }\n}",
     "optionen": [
      "O(1)",
      "O(n)",
      "O(n · m) bzw. O(n²) bei quadratischem Array",
      "O(log n)"
     ],
     "richtig": 2,
     "erklaerung": "Für jede der n Zeilen läuft die innere Schleife über alle m Spalten. Insgesamt n · m Schritte, bei n = m also n².",
     "q": "Tutorium 4, Aufgabe 15"
    },
    {
     "typ": "mc",
     "frage": "Welche Komplexität hat diese Methode aus Tutorium 4, Aufgabe 15 (5)?",
     "code": "static void usefulFunction(int[] arr) {\n    for (Integer i : arr) {\n        return;\n    }\n}",
     "optionen": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
     ],
     "richtig": 1,
     "erklaerung": "Schon im ersten Durchlauf steht return. Die Schleife läuft höchstens einmal, egal wie lang das Array ist. Konstanter Aufwand.",
     "q": "Tutorium 4, Aufgabe 15"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "List<int> zahlen = new ArrayList<>();\nzahlen.add(3);",
     "optionen": [
      "Kein Fehler",
      "Compilerfehler: Generics brauchen eine Klasse, int ist primitiv",
      "Laufzeitfehler beim add",
      "Compilerfehler: ArrayList braucht eine Startgröße"
     ],
     "richtig": 1,
     "erklaerung": "Für T sind nur Klassen erlaubt. Richtig: List<Integer>. Der Wert 3 wird dann automatisch in ein Integer verpackt (Autoboxing).",
     "q": "Tutorium 4, Aufgabe 47"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "ArrayList<Number> list = new ArrayList<Integer>();",
     "optionen": [
      "Kein Fehler, Integer ist eine Number",
      "Compilerfehler: ArrayList<Integer> ist kein Subtyp von ArrayList<Number>",
      "Laufzeitfehler: ClassCastException",
      "Warnung, aber es läuft"
     ],
     "richtig": 1,
     "erklaerung": "Integer ist zwar eine Number, aber eine Liste von Integern ist keine Liste von Numbers. Sonst könnte man über list ein Double hineinlegen. Mit Wildcard geht es: ArrayList<? extends Number> list = new ArrayList<Integer>();",
     "q": "Tutorium 4, Aufgabe 51"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "List<String> l = new ArrayList<>();\nl.add(\"a\");\nl.add(\"b\");\nSystem.out.println(l.get(2));",
     "optionen": [
      "Ausgabe null",
      "Ausgabe b",
      "Laufzeitfehler: IndexOutOfBoundsException",
      "Compilerfehler"
     ],
     "richtig": 2,
     "erklaerung": "Die Liste hat die Indizes 0 und 1. Index 2 gibt es nicht. Wie beim Array, nur heißt die Exception hier IndexOutOfBoundsException.",
     "q": "Tutorium 4, Aufgabe 17"
    },
    {
     "typ": "mc",
     "frage": "Welche Datenstruktur passt am besten? Ein Musikprogramm soll vorherige und kommende Songs speichern, man springt vor und zurück und fügt zwischendurch Lieder ein. (Tutorium 4, Aufgabe 16e)",
     "optionen": [
      "Stack",
      "Doppelt verkettete Liste",
      "HashSet",
      "Binärer Suchbaum"
     ],
     "richtig": 1,
     "erklaerung": "Jeder Knoten kennt Vorgänger und Nachfolger, also geht vor und zurück in O(1). Einfügen an der aktuellen Stelle ist ebenfalls billig. Ein Stack könnte nur in eine Richtung.",
     "q": "Tutorium 4, Aufgabe 16"
    },
    {
     "typ": "mc",
     "frage": "Welche Collection passt? Für eine fixe Menge Feuerwehrautos soll man schnell über das Kennzeichen den Standort finden. (Altklausur WS 24/25, Aufgabe 5c)",
     "optionen": [
      "ArrayList",
      "HashMap",
      "LinkedList",
      "PriorityQueue"
     ],
     "richtig": 1,
     "erklaerung": "Zugriff über einen Schlüssel (Kennzeichen) auf einen Wert (Standort): HashMap, im Mittel O(1). Für die anderen Fälle der Aufgabe: fortlaufende IDs ab 0 → ArrayList; Feuer nach Priorität → PriorityQueue; Prozess-ID (String) → Daten: HashMap.",
     "q": "Altklausur WS 24/25, Aufgabe 5c"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieser Code aus?",
     "code": "System.out.println(\"Apfel\".compareTo(\"Banane\") < 0);\nSystem.out.println(Integer.valueOf(5).compareTo(3) > 0);\nSystem.out.println(\"abc\".compareTo(\"abc\"));",
     "loesung": "true\ntrue\n0",
     "erklaerung": "compareTo liefert negativ, wenn das erste vorne einsortiert wird (A vor B). 5 ist größer als 3, also positiv. Gleiche Strings: 0.",
     "q": "Tutorium 4, Aufgabe 48"
    }
   ],
   "formeln": [
    {
     "name": "Lineare Suche",
     "code": "for (int i = 0; i < arr.length; i++)\n    if (arr[i] == x) return i;\nreturn -1;",
     "text": "O(n), funktioniert auch unsortiert.",
     "q": "Tutorium 4, Aufgabe 2"
    },
    {
     "name": "Binäre Suche",
     "code": "int l = 0, r = arr.length - 1;\nwhile (l <= r) {\n    int m = (l + r) / 2;\n    if (arr[m] == x) return m;\n    else if (arr[m] < x) l = m + 1;\n    else r = m - 1;\n}\nreturn -1;",
     "text": "Nur auf sortierten Arrays, O(log n).",
     "q": "Tutorium 4, Aufgabe 3"
    },
    {
     "name": "Tauschen zweier Array-Elemente",
     "code": "int tmp = a[i];\na[i] = a[j];\na[j] = tmp;",
     "text": "Ohne Hilfsvariable ginge ein Wert verloren.",
     "q": "Tutorium 2, Aufgabe 9 und 22"
    },
    {
     "name": "Knoten einer verketteten Liste",
     "code": "class Node {\n    int value;\n    Node next;\n}\nfor (Node n = head; n != null; n = n.next) { ... }",
     "text": "Durchlaufen bis next == null.",
     "q": "Tutorium 4, Aufgabe 19"
    },
    {
     "name": "Stack und Queue in Java",
     "code": "Deque<Integer> stack = new ArrayDeque<>();\nstack.push(1); stack.pop(); stack.peek();\nQueue<Integer> q = new ArrayDeque<>();\nq.offer(1); q.poll(); q.peek();",
     "text": "pop/peek bzw. poll/peek: Leer → pop wirft Exception, poll liefert null.",
     "q": "Tutorium 4, Aufgabe 39"
    },
    {
     "name": "Baumknoten und Traversierung",
     "code": "class TreeNode { int value; TreeNode left, right; }\nvoid inOrder(TreeNode n) {\n    if (n == null) return;\n    inOrder(n.left);\n    System.out.print(n.value + \" \");\n    inOrder(n.right);\n}",
     "text": "Pre: Knoten zuerst, Post: Knoten zuletzt.",
     "q": "Tutorium 4, Aufgabe 29"
    },
    {
     "name": "Generische Klasse",
     "code": "class Box<T> {\n    private T inhalt;\n    T hole() { return inhalt; }\n    void lege(T x) { inhalt = x; }\n}\nBox<String> b = new Box<>();",
     "text": "T ist ein Platzhalter für eine Klasse.",
     "q": "Tutorium 4, Aufgabe 46"
    },
    {
     "name": "Generische Methode mit Schranke",
     "code": "static <T extends Comparable<T>> T max(T[] a) {\n    T m = a[0];\n    for (T x : a) if (x.compareTo(m) > 0) m = x;\n    return m;\n}",
     "text": "<T> vor dem Rückgabetyp, extends verlangt compareTo.",
     "q": "Tutorium 4, Aufgabe 50"
    },
    {
     "name": "List",
     "code": "List<String> l = new ArrayList<>();\nl.add(\"x\"); l.add(0, \"y\"); l.get(0); l.set(0, \"z\");\nl.remove(0); l.size(); l.contains(\"x\");",
     "text": "Mit Interface-Typ deklarieren.",
     "q": "Tutorium 4, Aufgabe 37–38"
    },
    {
     "name": "Map und Set",
     "code": "Map<String, Integer> m = new HashMap<>();\nm.put(\"a\", 1); m.get(\"a\"); m.containsKey(\"a\");\nm.getOrDefault(\"b\", 0);\nfor (String k : m.keySet()) { ... }\nSet<Integer> s = new HashSet<>(); s.add(3); s.contains(3);",
     "text": "Map: Schlüssel → Wert. Set: keine Duplikate.",
     "q": "Tutorium 4, Aufgabe 41–45"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 4, Aufgabe 3: Binäre Suche iterativ und rekursiv",
     "q": "Tutorium 4, Aufgabe 3",
     "text": "Implementiere die binäre Suche einmal iterativ und einmal rekursiv. Rückgabe: Index des gesuchten Werts oder -1. Teste mit {-10, -3, 0, 5, 7, 17, 23, 27, 30} und den Werten -3, 17 und 32.",
     "loesung": [
      "Iterativ: links und rechts als Grenzen, solange links <= rechts die Mitte prüfen und eine Hälfte verwerfen.",
      "Rekursiv: Die Grenzen werden zu Parametern. Basisfall 1: links > rechts → -1 (Bereich leer). Basisfall 2: arr[mitte] == x → mitte.",
      "Sonst ruft sich die Methode mit der passenden Hälfte selbst auf: (mitte + 1, rechts) oder (links, mitte - 1).",
      "Eine öffentliche Methode mit nur (arr, x) startet die Rekursion mit (0, arr.length - 1). So muss der Aufrufer die Grenzen nicht kennen."
     ],
     "loesungCode": "public class BinSuche {\n    static int iterativ(int[] arr, int x) {\n        int links = 0, rechts = arr.length - 1;\n        while (links <= rechts) {\n            int mitte = (links + rechts) / 2;\n            if (arr[mitte] == x) return mitte;\n            if (arr[mitte] < x) links = mitte + 1;\n            else rechts = mitte - 1;\n        }\n        return -1;\n    }\n\n    static int rekursiv(int[] arr, int x) {\n        return rekursiv(arr, x, 0, arr.length - 1);\n    }\n\n    private static int rekursiv(int[] arr, int x, int links, int rechts) {\n        if (links > rechts) return -1;\n        int mitte = (links + rechts) / 2;\n        if (arr[mitte] == x) return mitte;\n        if (arr[mitte] < x) return rekursiv(arr, x, mitte + 1, rechts);\n        return rekursiv(arr, x, links, mitte - 1);\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {-10, -3, 0, 5, 7, 17, 23, 27, 30};\n        for (int x : new int[]{-3, 17, 32}) {\n            System.out.println(x + \": \" + iterativ(arr, x) + \" \" + rekursiv(arr, x));\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 4, Aufgabe 5: Minimum, Maximum und Median",
     "q": "Tutorium 4, Aufgabe 5",
     "text": "Schreibe drei Methoden für ein int-Array: Minimum, Maximum und Median. Für den Median ist das Array aufsteigend sortiert. Bei gerader Länge ist der Median der Durchschnitt der beiden mittleren Werte. Wähle einen passenden Rückgabetyp.",
     "loesung": [
      "Minimum: Mit dem ersten Element als Kandidat starten (nicht mit 0, sonst falsch bei nur positiven Zahlen), dann jedes kleinere übernehmen. Maximum genauso.",
      "Median: Bei ungerader Länge n ist es das Element an n / 2. Bei gerader Länge der Durchschnitt von n / 2 - 1 und n / 2.",
      "Rückgabetyp des Medians: double, weil der Durchschnitt zweier ints eine Kommazahl sein kann (2 und 5 → 3.5).",
      "Achtung Ganzzahldivision: (a + b) / 2.0 statt (a + b) / 2."
     ],
     "loesungCode": "public class Statistik {\n    static int min(int[] a) {\n        int m = a[0];\n        for (int x : a) if (x < m) m = x;\n        return m;\n    }\n\n    static int max(int[] a) {\n        int m = a[0];\n        for (int x : a) if (x > m) m = x;\n        return m;\n    }\n\n    static double median(int[] sortiert) {\n        int n = sortiert.length;\n        if (n % 2 == 1) return sortiert[n / 2];\n        return (sortiert[n / 2 - 1] + sortiert[n / 2]) / 2.0;\n    }\n\n    public static void main(String[] args) {\n        int[] a = {7, 2, 9, 4};\n        System.out.println(min(a) + \" \" + max(a));\n        System.out.println(median(new int[]{1, 2, 5, 9}) + \" \" + median(new int[]{1, 3, 8}));\n    }\n}"
    },
    {
     "titel": "Tutorium 4, Aufgabe 24 und 26: Stack mit verketteter Liste, Klammern prüfen",
     "q": "Tutorium 4, Aufgabe 24 und 26; Musterlösung Check.java",
     "text": "Implementiere einen Stack für char auf Basis von class Node { char value; Node next; } mit push, pop, peek, isEmpty. Prüfe damit, ob ein String korrekt geschachtelte Klammern enthält: \"()\" → true, \"([])\" → true, \"([]]\" → false, \"(([]))\" → true, \"{[(])}\" → false, \")(\" → false.",
     "loesung": [
      "Stack: nur am Kopf arbeiten. push: neuer Knoten wird Kopf, sein next ist der alte Kopf. pop: Wert des Kopfes merken, Kopf = Kopf.next, Wert zurückgeben.",
      "Klammerprüfung: Zeichen für Zeichen durchgehen. Öffnende Klammer → push.",
      "Schließende Klammer: Ist der Stack leer, gibt es keine passende öffnende → false. Sonst pop und prüfen, ob die geholte Klammer die passende öffnende ist. Sonst false.",
      "Am Ende muss der Stack leer sein. Bleibt etwas übrig, wurde eine Klammer nicht geschlossen.",
      "Warum ein Stack? Die zuletzt geöffnete Klammer muss als erste geschlossen werden. Genau das ist LIFO."
     ],
     "loesungCode": "class CharStack {\n    private static class Node {\n        char value;\n        Node next;\n        Node(char value, Node next) { this.value = value; this.next = next; }\n    }\n\n    private Node head;\n\n    void push(char c) { head = new Node(c, head); }\n\n    char pop() {\n        char v = head.value;\n        head = head.next;\n        return v;\n    }\n\n    char peek() { return head.value; }\n\n    boolean isEmpty() { return head == null; }\n}\n\npublic class Check {\n    static boolean checkBrackets(String s) {\n        CharStack stack = new CharStack();\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (c == '(' || c == '[' || c == '{') {\n                stack.push(c);\n            } else if (c == ')' || c == ']' || c == '}') {\n                if (stack.isEmpty()) return false;\n                char top = stack.pop();\n                if ((c == ')' && top != '(') || (c == ']' && top != '[') || (c == '}' && top != '{')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n\n    public static void main(String[] args) {\n        String[] tests = {\"()\", \"([])\", \"([]]\", \"(([]))\", \"{[(])}\", \")(\"};\n        for (String t : tests) {\n            System.out.println(t + \" -> \" + checkBrackets(t));\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 4, Aufgabe 28: Binärbaum in Pre-, In- und Post-Order",
     "q": "Tutorium 4, Aufgabe 28 und 32",
     "text": "Gegeben ist der Baum: Wurzel 10, links 5 (Kinder 3 und 7), rechts 17 (rechtes Kind 21 mit Kindern 19 und 28). a) Gib ihn in Pre-, In- und Post-Order an. b) Ist es ein binärer Suchbaum? c) Füge -5, 99 und 14 ein.",
     "loesung": [
      "Pre-Order (Knoten, links, rechts): 10 5 3 7 17 21 19 28.",
      "In-Order (links, Knoten, rechts): 3 5 7 10 17 19 21 28. Sie ist aufsteigend sortiert.",
      "Post-Order (links, rechts, Knoten): 3 7 5 19 28 21 17 10.",
      "b) Ja: Für jeden Knoten sind links nur kleinere und rechts nur größere Werte. Das sieht man auch daran, dass die In-Order sortiert ist.",
      "c) -5: kleiner als 10, 5, 3 → links von 3. 99: größer als 10, 17, 21, 28 → rechts von 28. 14: größer als 10, kleiner als 17 → links von 17 (dort war noch frei).",
      "In-Order danach: -5 3 5 7 10 14 17 19 21 28 99."
     ],
     "loesungCode": "public class Baum28 {\n    static class Node {\n        int v; Node l, r;\n        Node(int v) { this.v = v; }\n    }\n\n    static Node insert(Node n, int x) {\n        if (n == null) return new Node(x);\n        if (x < n.v) n.l = insert(n.l, x);\n        else n.r = insert(n.r, x);\n        return n;\n    }\n\n    static String pre(Node n)  { return n == null ? \"\" : n.v + \" \" + pre(n.l) + pre(n.r); }\n    static String in(Node n)   { return n == null ? \"\" : in(n.l) + n.v + \" \" + in(n.r); }\n    static String post(Node n) { return n == null ? \"\" : post(n.l) + post(n.r) + n.v + \" \"; }\n\n    public static void main(String[] args) {\n        Node root = null;\n        for (int x : new int[]{10, 5, 17, 3, 7, 21, 19, 28}) root = insert(root, x);\n        System.out.println(pre(root));\n        System.out.println(in(root));\n        System.out.println(post(root));\n        for (int x : new int[]{-5, 99, 14}) insert(root, x);\n        System.out.println(in(root));\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 2a: Generische Klasse Node (7 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 2a",
     "text": "Gegeben sind StringNode und IntNode (Binärbaumknoten mit final value, left, right, add und privatem set). Schreibe eine generische Klasse Node, die beide ersetzt, mit gleicher Zahl an Attributen und Methoden. Sie soll so benutzt werden: Node<String> a = new Node<>(\"Tatü\"); a.add(\"Tata\"); Node<Integer> b = new Node<>(7); b.add(9);",
     "loesung": [
      "Beide Klassen unterscheiden sich nur im Typ von value. Also wird der Typ zum Parameter T.",
      "add benutzt this.value.compareTo(value). Das muss für T funktionieren, deshalb die Schranke T extends Comparable<T>. Ohne sie meldet der Compiler, dass T kein compareTo hat.",
      "left und right sind vom Typ Node<T>, die Methode set nimmt Node<T> und T.",
      "Die Logik von add und set wird unverändert übernommen. (Achtung, Original-Eigenheit: Größere Werte kommen hier nach links. Das ist so gegeben und soll nur übernommen werden.)"
     ],
     "loesungCode": "public class Node<T extends Comparable<T>> {\n    final T value;\n    Node<T> left;\n    Node<T> right;\n\n    public Node(T value) {\n        this.value = value;\n    }\n\n    public void add(T value) {\n        if (this.value.compareTo(value) < 0) {\n            left = set(left, value);\n        } else {\n            right = set(right, value);\n        }\n    }\n\n    private Node<T> set(Node<T> node, T value) {\n        if (node == null) {\n            return new Node<>(value);\n        } else {\n            node.add(value);\n            return node;\n        }\n    }\n\n    public static void main(String[] args) {\n        Node<String> a = new Node<>(\"Tatü\");\n        a.add(\"Tata\");\n        Node<Integer> b = new Node<>(7);\n        b.add(9);\n        System.out.println(a.right.value + \" \" + b.left.value);\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 2b: Stack mit push und pop (6 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 2b",
     "text": "Gegeben ist MyStackElement (public Integer value, public MyStackElement next, Konstruktor MyStackElement(Integer value, MyStackElement next)). Vervollständige in MyStack (private MyStackElement top = null;) die Methoden push(Integer value) und pop().",
     "loesung": [
      "push: Ein neues Element wird das oberste. Sein next zeigt auf das bisherige oberste. Ein Satz Code: top = new MyStackElement(value, top);",
      "pop: Zuerst den Fehlerfall behandeln: Ist top null (Stack leer), null zurückgeben, sonst gäbe es eine NullPointerException.",
      "Sonst den Wert von top merken, top auf top.next setzen (das alte oberste fällt weg), gemerkten Wert zurückgeben.",
      "Beide Methoden sind O(1), weil nur am Kopf gearbeitet wird."
     ],
     "loesungCode": "class MyStackElement {\n    public Integer value;\n    public MyStackElement next;\n\n    MyStackElement(Integer value, MyStackElement next) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\npublic class MyStack {\n    private MyStackElement top = null;\n\n    public void push(Integer value) {\n        top = new MyStackElement(value, top);\n    }\n\n    public Integer pop() {\n        if (top == null) {\n            return null;\n        }\n        Integer v = top.value;\n        top = top.next;\n        return v;\n    }\n\n    public static void main(String[] args) {\n        MyStack s = new MyStack();\n        s.push(1);\n        s.push(2);\n        s.push(3);\n        System.out.println(s.pop() + \" \" + s.pop() + \" \" + s.pop() + \" \" + s.pop());\n    }\n}"
    },
    {
     "titel": "Altklausur WS 14/15, Aufgabe 6c: Warteschlange haengeAn (7 Punkte)",
     "q": "Altklausur WS 14/15, Aufgabe 6c",
     "text": "Gegeben ist Warteschlange<T> mit private Eintrag<T> anfang, entnehme() (nimmt vorne weg) und toString(); dazu class Eintrag<T> { T wert; Eintrag<T> naechster; }. Ergänze haengeAn(T wert), die neue Elemente am Ende der Queue einfügt. Achte auf korrekte Generics.",
     "loesung": [
      "Neuen Eintrag<T> erzeugen und wert setzen. naechster bleibt null, denn er wird das letzte Element.",
      "Sonderfall leere Schlange (anfang == null): Der neue Eintrag wird der Anfang. Fertig.",
      "Sonst vom Anfang bis zum letzten Eintrag laufen (solange aktuell.naechster != null) und dort den neuen anhängen.",
      "Generics: überall Eintrag<T> schreiben, nicht den rohen Typ Eintrag. Das Durchlaufen kostet O(n). Mit einem zusätzlichen Attribut ende ginge es in O(1)."
     ],
     "loesungCode": "class Eintrag<T> {\n    T wert;\n    Eintrag<T> naechster;\n}\n\npublic class Warteschlange<T> {\n    private Eintrag<T> anfang;\n\n    public T entnehme() {\n        if (anfang == null) return null;\n        Eintrag<T> ergebnis = anfang;\n        anfang = ergebnis.naechster;\n        return ergebnis.wert;\n    }\n\n    public void haengeAn(T wert) {\n        Eintrag<T> neu = new Eintrag<>();\n        neu.wert = wert;\n        if (anfang == null) {\n            anfang = neu;\n            return;\n        }\n        Eintrag<T> aktuell = anfang;\n        while (aktuell.naechster != null) {\n            aktuell = aktuell.naechster;\n        }\n        aktuell.naechster = neu;\n    }\n\n    public String toString() {\n        StringBuffer res = new StringBuffer(\"[\");\n        Eintrag<T> aktuell = anfang;\n        while (aktuell != null) {\n            res.append(aktuell.wert + \" \");\n            aktuell = aktuell.naechster;\n        }\n        return res.toString().trim() + \"]\";\n    }\n\n    public static void main(String[] args) {\n        Warteschlange<String> w = new Warteschlange<>();\n        w.haengeAn(\"a\");\n        w.haengeAn(\"b\");\n        w.haengeAn(\"c\");\n        System.out.println(w + \" \" + w.entnehme() + \" \" + w);\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 1b und 5: highestValue, Komplexität, Pre-Order",
     "q": "Altklausur WS 24/25, Aufgabe 1b, 5a und 5e",
     "text": "a) Implementiere highestValue(Number[] arr), die das größte Element zurückgibt, bei ungültigen Parametern null (Hinweis: doubleValue() liefert den Wert als double). b) In welcher Komplexitätsklasse liegt method(int x, int... ints) aus Aufgabe 5a (eine Schleife über ints, innen nur ifs und Rechnungen)? c) Gib den sortierten Binärbaum aus Aufgabe 5e in Pre-Order an und füge 14 ein. (Den Baum haben wir aus dem PDF-Text rekonstruiert: 15; links 5 mit 3 und 12; 12 mit 10 und 13; unter 10 links 6, unter 6 rechts 7; rechts 16, darunter rechts 20 mit 18 und 23. Prüfe das am Original-PDF.)",
     "loesung": [
      "a) Ungültig sind arr == null und ein leeres Array. Einzelne null-Einträge kann man überspringen.",
      "Mit dem ersten gültigen Element als Kandidat starten, dann über doubleValue() vergleichen. Zurückgegeben wird das Number-Objekt selbst, nicht der double.",
      "b) Die Schleife läuft einmal über alle n Elemente. Innen gibt es keine weitere Schleife, nur konstante Arbeit. Also O(n). Das ints[i] = ints[i] / 2 sieht nach O(log n) aus, steht aber nicht in einer Schleife.",
      "c) Pre-Order (Knoten, links, rechts): 15-5-3-12-10-6-7-13-16-20-18-23.",
      "14 einfügen: 14 < 15 → links zu 5. 14 > 5 → rechts zu 12. 14 > 12 → rechts zu 13. 14 > 13 → rechtes Kind von 13."
     ],
     "loesungCode": "public class Klausur2425 {\n    public static Number highestValue(Number[] arr) {\n        if (arr == null || arr.length == 0) return null;\n        Number best = null;\n        for (Number n : arr) {\n            if (n == null) continue;\n            if (best == null || n.doubleValue() > best.doubleValue()) best = n;\n        }\n        return best;\n    }\n\n    static class N {\n        int v; N l, r;\n        N(int v) { this.v = v; }\n    }\n\n    static N ins(N n, int x) {\n        if (n == null) return new N(x);\n        if (x < n.v) n.l = ins(n.l, x); else n.r = ins(n.r, x);\n        return n;\n    }\n\n    static String pre(N n) {\n        if (n == null) return \"\";\n        String s = n.v + \"\";\n        String links = pre(n.l), rechts = pre(n.r);\n        if (!links.isEmpty()) s += \"-\" + links;\n        if (!rechts.isEmpty()) s += \"-\" + rechts;\n        return s;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(highestValue(new Number[]{3, 7.5, -2, 7L}));\n        System.out.println(highestValue(new Number[]{}));\n        N root = null;\n        for (int x : new int[]{15, 5, 16, 3, 12, 20, 10, 13, 18, 23, 6, 7}) root = ins(root, x);\n        System.out.println(pre(root));\n        ins(root, 14);\n        System.out.println(pre(root));\n    }\n}"
    }
   ]
  },
  {
   "id": "k5",
   "titel": "Kapitel 5: Fortgeschrittenes – Exceptions, Threads, Dateien und Sockets",
   "abschnitt": "Vorlesung folgt (ca. Januar 2027), Tutoriumsmaterial liegt vor (Tutorium 5)",
   "seiten": "Tutorium 5 (Advanced Concepts) mit Musterlösung; Kick-off Folie 25 (Failure handling, Concurrency, Sockets and Streams); Altklausuren",
   "kurz": [
     "try { riskant } catch (Typ e) { behandeln } finally { läuft immer }. Nach dem Fehler entfällt der Rest des try.",
     "Checked Exceptions (z. B. IOException) fangen oder mit throws ankündigen. Bei unchecked (RuntimeException) ist das keine Pflicht.",
     "catch-Reihenfolge: speziell vor allgemein, sonst Compilerfehler wegen unerreichbarem catch.",
     "Thread mit start() starten, nicht mit run(). join() wartet aufs Ende, die Reihenfolge ist nicht vorhersagbar.",
     "counter++ ist nicht atomar (Race Condition). synchronized mit demselben Lock lässt nur einen Thread hinein.",
     "Sockets: ServerSocket(port).accept() wartet auf Clients, new Socket(host, port) verbindet."
   ],
   "quellen": [
    {
     "name": "Tutorium 5: Advanced Concepts",
     "pfad": "material/Prog1/Tutorien/P1_05-advanced.pdf"
    },
    {
     "name": "Code: Musterlösungen Tutorium 5 (Zip)",
     "pfad": "material/Prog1/Code/P1_tut05_ml.zip"
    },
    {
     "name": "Altklausur WS 24/25",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Erstklausur_WS2425_ohne_Lo_sungen.pdf"
    },
    {
     "name": "Altklausur WS 14/15",
     "pfad": "material/Prog1/Altklausuren/P1_Prog1_Hauptklausur_WS1415_ohne_Lo_sung.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Exceptions: Fehler abfangen mit try und catch",
     "text": [
      "Eine Exception (Ausnahme) ist ein Objekt, das Java erzeugt, wenn zur Laufzeit etwas schiefgeht: Division durch 0, falscher Array-Index, null. Man sagt, die Exception wird geworfen (thrown). Ohne Gegenmaßnahme bricht das Programm ab. Alltag: ein Feueralarm. Er unterbricht alles, was gerade läuft.",
      "Mit try { ... } catch (Typ e) { ... } fängst du sie. Der riskante Code steht im try-Block. Tritt dort eine passende Exception auf, springt Java sofort in den catch-Block. Der Rest des try-Blocks wird übersprungen. Danach läuft das Programm normal weiter. Alltag: Der Feueralarm wird von der Feuerwehr (catch) behandelt, danach geht der Betrieb weiter.",
      "e.getMessage() liefert die Fehlermeldung. Mehrere catch-Blöcke sind möglich, Java nimmt den ersten passenden. Ein catch für eine Oberklasse (z. B. RuntimeException) fängt auch alle Unterklassen.",
      "finally { ... } läuft immer, ob ein Fehler auftrat oder nicht. Dort räumt man auf, z. B. eine Datei schließen.",
      "Alltagsvergleich zu finally: Egal ob das Kochen klappt oder anbrennt, am Ende machst du den Herd aus."
     ],
     "code": "public class Fangen {\n    public static void main(String[] args) {\n        int[] zahlen = {10, 5, 0};\n        for (int i = 0; i <= 3; i++) {\n            try {\n                System.out.println(100 / zahlen[i]);\n            } catch (ArithmeticException e) {\n                System.out.println(\"Division durch 0: \" + e.getMessage());\n            } catch (ArrayIndexOutOfBoundsException e) {\n                System.out.println(\"Index \" + i + \" gibt es nicht\");\n            } finally {\n                System.out.println(\"fertig mit \" + i);\n            }\n        }\n        System.out.println(\"Programm läuft weiter\");\n    }\n}",
     "ausgabe": "10\nfertig mit 0\n20\nfertig mit 1\nDivision durch 0: / by zero\nfertig mit 2\nIndex 3 gibt es nicht\nfertig mit 3\nProgramm läuft weiter",
     "merke": "try: riskanter Code. catch: Behandlung. finally: läuft immer."
    },
    {
     "titel": "Exceptions werfen, checked und unchecked, eigene Exceptions",
     "text": [
      "Du kannst selbst Exceptions werfen: throw new IllegalArgumentException(\"Zahl muss positiv sein\"); So meldet eine Methode, dass sie mit den Parametern nichts anfangen kann (Tutorium 5, Aufgabe 1).",
      "Java unterscheidet zwei Arten. Unchecked Exceptions erben von RuntimeException (z. B. ArithmeticException, NullPointerException, IllegalArgumentException). Sie entstehen meist durch Programmierfehler. Der Compiler zwingt dich nicht, sie zu behandeln.",
      "Checked Exceptions erben direkt von Exception (z. B. IOException beim Dateizugriff). Sie beschreiben Probleme, mit denen man rechnen muss, auch bei korrektem Code (Datei fehlt, Netzwerk weg). Der Compiler verlangt: Entweder du fängst sie mit try-catch, oder die Methode kündigt sie im Kopf mit throws an: void lies() throws IOException. Sonst Compilerfehler: unreported exception.",
      "Eigene Exception: eine Klasse, die von Exception (checked) oder RuntimeException (unchecked) erbt, mit einem Konstruktor, der die Meldung an super(message) weitergibt. Beispiel BucketFullException aus Tutorium 5, Aufgabe 2."
     ],
     "code": "class BucketFullException extends Exception {\n    public BucketFullException(String message) {\n        super(message);\n    }\n}\n\npublic class Werfen {\n    static String[] bucket = new String[2];\n\n    static void put(String s) throws BucketFullException {\n        for (int i = 0; i < bucket.length; i++) {\n            if (bucket[i] == null) {\n                bucket[i] = s;\n                return;\n            }\n        }\n        throw new BucketFullException(\"Bucket ist voll, \" + s + \" passt nicht\");\n    }\n\n    static int addPositive(int a, int b) {\n        if (a < 0 || b < 0) {\n            throw new IllegalArgumentException(\"Beide Zahlen müssen positiv sein\");\n        }\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        try {\n            put(\"A\");\n            put(\"B\");\n            put(\"C\");\n            System.out.println(\"wird nicht erreicht\");\n        } catch (BucketFullException e) {\n            System.out.println(e.getMessage());\n        }\n        try {\n            System.out.println(addPositive(2, 3));\n            System.out.println(addPositive(-1, 3));\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Fehler: \" + e.getMessage());\n        }\n    }\n}",
     "ausgabe": "Bucket ist voll, C passt nicht\n5\nFehler: Beide Zahlen müssen positiv sein",
     "merke": "Checked (extends Exception): fangen oder mit throws ankündigen. Unchecked (extends RuntimeException): freiwillig."
    },
    {
     "titel": "Dateien lesen und schreiben (Streams)",
     "text": [
      "Ein Stream (Datenstrom) ist wie ein Wasserschlauch: Daten fließen der Reihe nach hindurch, von einer Quelle (Datei, Tastatur, Netzwerk) zu einem Ziel. Für Text nimmt man Reader (lesen) und Writer (schreiben). BufferedReader liest zeilenweise mit readLine(), das am Dateiende null liefert. BufferedWriter schreibt, newLine() macht einen Zeilenumbruch.",
      "Dateizugriffe können scheitern, deshalb werfen sie die checked IOException. Streams müssen am Ende geschlossen werden (close), sonst bleiben Systemressourcen belegt. Das geht am sichersten mit try-with-resources: try (BufferedReader r = new BufferedReader(new FileReader(datei))) { ... }. Java schließt den Stream am Ende automatisch, auch bei einer Exception.",
      "Das typische Lesemuster: String zeile; while ((zeile = reader.readLine()) != null) { ... } Die Zuweisung in der Klammer liefert den gelesenen Wert, der dann mit null verglichen wird (Skript Abschnitt 5.4).",
      "Das Beispiel schreibt drei Zeilen in eine temporäre Datei und liest sie in eine ArrayList zurück (wie Altklausur WS 14/15, Aufgabe 7)."
     ],
     "code": "import java.io.*;\nimport java.util.*;\n\npublic class DateiDemo {\n    public static void main(String[] args) {\n        try {\n            File datei = File.createTempFile(\"prog1\", \".txt\");\n            try (BufferedWriter w = new BufferedWriter(new FileWriter(datei))) {\n                w.write(\"Ada;36\");\n                w.newLine();\n                w.write(\"Linus;54\");\n                w.newLine();\n                w.write(\"Grace;85\");\n            }\n            List<String> zeilen = new ArrayList<>();\n            try (BufferedReader r = new BufferedReader(new FileReader(datei))) {\n                String zeile;\n                while ((zeile = r.readLine()) != null) {\n                    zeilen.add(zeile);\n                }\n            }\n            System.out.println(zeilen.size() + \" Zeilen: \" + zeilen);\n            System.out.println(\"Name in Zeile 2: \" + zeilen.get(1).split(\";\")[0]);\n            datei.delete();\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n    }\n}",
     "ausgabe": "3 Zeilen: [Ada;36, Linus;54, Grace;85]\nName in Zeile 2: Linus",
     "merke": "try-with-resources schließt Streams automatisch. readLine() liefert am Ende null."
    },
    {
     "titel": "Threads: mehrere Dinge gleichzeitig",
     "text": [
      "Ein Thread (Faden) ist ein eigener Ausführungsstrang innerhalb eines Programms. Mehrere Threads laufen parallel, z. B. auf mehreren Prozessorkernen. Alltag: In einer Küche kochen mehrere Köche gleichzeitig, jeder an seinem Gericht.",
      "Zwei Wege: Eine Klasse erbt von Thread und überschreibt run(). Oder eine Klasse implementiert das Interface Runnable (nur run()) und wird einem Thread übergeben: new Thread(new MeinRunnable()). Runnable ist meist besser, weil die Klasse dann noch von einer anderen Klasse erben kann.",
      "Wichtig: start() startet einen neuen Thread, der dann run() ausführt. Wer run() direkt aufruft, führt den Code ganz normal im aktuellen Thread aus, nichts läuft parallel. Ein Klausurklassiker.",
      "In welcher Reihenfolge parallele Threads drankommen, ist nicht vorhersagbar. t.join() wartet, bis Thread t fertig ist. Im Beispiel sorgt join dafür, dass die Ausgabe immer gleich aussieht (Tutorium 5, Aufgabe 6).",
      "Neue Schreibweise im Code: () -> System.out.println(...) ist ein Lambda-Ausdruck, eine Kurzform für eine anonyme Klasse (Kapitel 3), die nur die eine Methode run() des Interfaces Runnable hat. Lies es als „ohne Eingabe → tu dies“. new Thread(() -> { ... }) heißt also: ein Thread, der beim Start den Block in den geschweiften Klammern ausführt."
     ],
     "code": "class CountUpDown extends Thread {\n    private final int bis;\n    private final boolean hoch;\n\n    CountUpDown(int bis, boolean hoch) {\n        this.bis = bis;\n        this.hoch = hoch;\n    }\n\n    @Override\n    public void run() {\n        for (int i = 1; i <= bis; i++) {\n            System.out.print((hoch ? i : bis - i + 1) + \" \");\n        }\n        System.out.println();\n    }\n}\n\npublic class ThreadDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread hoch = new CountUpDown(5, true);\n        Thread runter = new CountUpDown(5, false);\n        hoch.start();\n        hoch.join();          // warten, bis hoch fertig ist\n        runter.start();\n        runter.join();\n        Runnable r = () -> System.out.println(\"Runnable in \" + Thread.currentThread().getName());\n        Thread t = new Thread(r, \"Koch-1\");\n        t.start();\n        t.join();\n        System.out.println(\"main ist fertig\");\n    }\n}",
     "ausgabe": "1 2 3 4 5 \n5 4 3 2 1 \nRunnable in Koch-1\nmain ist fertig",
     "merke": "start() startet einen neuen Thread, run() direkt aufgerufen läuft im selben. join() wartet aufs Ende."
    },
    {
     "titel": "Race Conditions und synchronized",
     "text": [
      "Greifen mehrere Threads auf dieselbe Variable zu, kann es schiefgehen. counter++ sieht aus wie ein Schritt, sind aber drei: Wert lesen, 1 addieren, zurückschreiben. Wird ein Thread dazwischen unterbrochen und ein anderer schreibt, geht eine Erhöhung verloren. Das heißt Race Condition (Wettlaufsituation). Alltag: Zwei Leute tragen gleichzeitig Striche auf einer Strichliste nach, beide lesen „7“ und schreiben „8“. Ein Strich fehlt.",
      "Lösung: Der kritische Abschnitt darf immer nur von einem Thread gleichzeitig betreten werden. synchronized macht genau das. Jedes Objekt hat ein Schloss (Lock, Monitor). synchronized (lockObjekt) { ... } wartet, bis das Schloss frei ist, nimmt es, führt den Block aus und gibt es frei. Alltag: Eine Toilette mit Schlüssel.",
      "Eine synchronized-Instanzmethode benutzt this als Lock, eine static synchronized-Methode das Klassenobjekt. Alle Threads müssen dasselbe Lock benutzen, sonst schützt es nichts.",
      "Brauchst du zwei Ressourcen gleichzeitig (Altklausur WS 24/25, Aufgabe 7: Förmchen und Schaufel), verschachtelst du zwei synchronized-Blöcke, und zwar in allen Threads in derselben Reihenfolge. Sonst kann ein Deadlock entstehen: Thread A hält das Förmchen und wartet auf die Schaufel, Thread B umgekehrt, beide warten ewig."
     ],
     "code": "public class SharedCounter {\n    static int unsicher = 0;\n    static int sicher = 0;\n    static final Object LOCK = new Object();\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread[] threads = new Thread[4];\n        for (int t = 0; t < threads.length; t++) {\n            threads[t] = new Thread(() -> {\n                for (int i = 0; i < 100_000; i++) {\n                    unsicher++;                 // nicht geschützt\n                    synchronized (LOCK) {\n                        sicher++;               // geschützt\n                    }\n                }\n            });\n            threads[t].start();\n        }\n        for (Thread t : threads) {\n            t.join();\n        }\n        System.out.println(\"sicher = \" + sicher);\n        System.out.println(\"unsicher <= 400000: \" + (unsicher <= 400_000));\n    }\n}",
     "ausgabe": "sicher = 400000\nunsicher <= 400000: true",
     "merke": "counter++ ist nicht atomar. Gemeinsame Daten nur in synchronized-Blöcken mit demselben Lock ändern."
    },
    {
     "titel": "wait, notifyAll und Producer-Consumer",
     "text": [
      "Oft wartet ein Thread auf einen anderen. Ein Producer (Erzeuger) legt Werte in eine Warteschlange, ein Consumer (Verbraucher) nimmt sie heraus. Alltag: Ein Bäcker legt Brötchen ins Regal, Kunden nehmen sie. Ist das Regal leer, warten die Kunden.",
      "Ständiges Nachschauen in einer Schleife (busy waiting) verschwendet Rechenzeit. Besser: wait() legt den Thread schlafen und gibt das Lock frei. notifyAll() weckt alle wartenden Threads. Beides darf nur innerhalb von synchronized auf demselben Objekt aufgerufen werden, sonst gibt es eine IllegalMonitorStateException. wait steht immer in einer while-Schleife, weil nach dem Aufwachen die Bedingung erneut geprüft werden muss.",
      "Java bringt das fertig mit: BlockingQueue (z. B. LinkedBlockingQueue). put blockiert, wenn voll, take blockiert, wenn leer. poll dagegen wartet nicht und liefert null.",
      "Das Beispiel zeigt eine selbst gebaute blockierende Queue mit Platz für ein Element (wie MyBlockingQueue aus Tutorium 5, Aufgabe 7)."
     ],
     "code": "class EinPlatzQueue {\n    private Integer wert = null;\n\n    synchronized void put(int x) throws InterruptedException {\n        while (wert != null) {\n            wait();                 // Platz belegt: warten\n        }\n        wert = x;\n        notifyAll();                // Wartende wecken\n    }\n\n    synchronized int take() throws InterruptedException {\n        while (wert == null) {\n            wait();                 // nichts da: warten\n        }\n        int x = wert;\n        wert = null;\n        notifyAll();\n        return x;\n    }\n}\n\npublic class ProducerConsumer {\n    public static void main(String[] args) throws InterruptedException {\n        EinPlatzQueue q = new EinPlatzQueue();\n        Thread producer = new Thread(() -> {\n            try {\n                for (int i = 1; i <= 4; i++) {\n                    q.put(i * 10);\n                }\n            } catch (InterruptedException e) {\n                return;\n            }\n        });\n        producer.start();\n        int summe = 0;\n        for (int i = 0; i < 4; i++) {\n            int x = q.take();\n            System.out.print(x + \" \");\n            summe += x;\n        }\n        System.out.println(\"Summe \" + summe);\n        producer.join();\n    }\n}",
     "ausgabe": "10 20 30 40 Summe 100",
     "merke": "wait und notifyAll nur in synchronized. wait immer in einer while-Schleife."
    },
    {
     "titel": "Interrupts: einen Thread höflich stoppen",
     "text": [
      "Einen Thread hart abzuschießen ist gefährlich, er könnte Daten halb geschrieben zurücklassen. Stattdessen sendet man ihm mit t.interrupt() ein Signal: „Bitte hör auf.“ Was dann passiert, entscheidet der Code des Threads selbst.",
      "Schläft der Thread gerade (Thread.sleep) oder wartet er (wait, join), wirft Java dort eine InterruptedException. Im catch-Block beendet man dann meist run() mit return. Läuft er gerade normal, kann er mit Thread.currentThread().isInterrupted() nachsehen.",
      "Fängt man die InterruptedException und macht einfach weiter (SimplyUninterruptible, Tutorium 5, Aufgabe 5), ignoriert der Thread das Signal. Das ist meist ein Fehler."
     ],
     "code": "public class InterruptDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> {\n            try {\n                while (true) {\n                    Thread.sleep(100);\n                }\n            } catch (InterruptedException e) {\n                System.out.println(\"unterbrochen, ich höre auf\");\n            }\n        });\n        t.start();\n        Thread.sleep(250);\n        t.interrupt();\n        t.join();\n        System.out.println(\"lebt noch: \" + t.isAlive());\n    }\n}",
     "ausgabe": "unterbrochen, ich höre auf\nlebt noch: false",
     "merke": "interrupt() ist eine Bitte. Im sleep/wait kommt sie als InterruptedException an."
    },
    {
     "titel": "Sockets: Programme über das Netzwerk verbinden",
     "text": [
      "Ein Socket ist ein Verbindungsendpunkt im Netzwerk. Alltag: ein Telefon. Ein Rechner hat eine Adresse (IP, z. B. localhost für den eigenen Rechner) und viele Ports (Durchwahlnummern 0 bis 65535). Ein Server wartet auf einer Durchwahl auf Anrufe, ein Client ruft dort an.",
      "Server: ServerSocket server = new ServerSocket(9090); Socket client = server.accept(); accept blockiert, bis jemand anruft, und liefert dann einen Socket für genau dieses Gespräch. Client: Socket s = new Socket(\"localhost\", 9090);",
      "Über einen Socket fließen Streams: getInputStream() zum Lesen, getOutputStream() zum Schreiben. Für Text verpackt man sie: new BufferedReader(new InputStreamReader(s.getInputStream())) und new PrintWriter(s.getOutputStream(), true) (true = sofort abschicken).",
      "Damit ein Server viele Clients gleichzeitig bedienen kann (Altklausur WS 24/25, Aufgabe 6), startet er nach jedem accept einen neuen Thread für diesen Client und wartet sofort wieder auf den nächsten. Im Beispiel laufen Server und Client im selben Programm, damit es ohne zweites Fenster geht. Port 0 heißt: Das Betriebssystem wählt einen freien Port."
     ],
     "code": "import java.io.*;\nimport java.net.*;\n\npublic class EchoDemo {\n    public static void main(String[] args) throws Exception {\n        ServerSocket server = new ServerSocket(0);\n        int port = server.getLocalPort();\n        Thread serverThread = new Thread(() -> {\n            try (Socket client = server.accept();\n                 BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));\n                 PrintWriter out = new PrintWriter(client.getOutputStream(), true)) {\n                String zeile;\n                while ((zeile = in.readLine()) != null && !zeile.equals(\"end\")) {\n                    out.println(\"Echo: \" + zeile.toUpperCase());\n                }\n            } catch (IOException e) {\n                System.out.println(\"Server-Fehler: \" + e.getMessage());\n            }\n        });\n        serverThread.start();\n\n        try (Socket s = new Socket(\"localhost\", port);\n             PrintWriter out = new PrintWriter(s.getOutputStream(), true);\n             BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()))) {\n            out.println(\"hallo\");\n            System.out.println(in.readLine());\n            out.println(\"prog1\");\n            System.out.println(in.readLine());\n            out.println(\"end\");\n        }\n        serverThread.join();\n        server.close();\n        System.out.println(\"Verbindung beendet\");\n    }\n}",
     "ausgabe": "Echo: HALLO\nEcho: PROG1\nVerbindung beendet",
     "merke": "ServerSocket.accept() wartet auf einen Client. Pro Client ein eigener Thread, damit viele gleichzeitig gehen."
    }
   ],
   "zusammenfassung": [
    "Exception = Fehlerobjekt zur Laufzeit. try { riskant } catch (Typ e) { behandeln } finally { immer }. Nach einem Fehler springt Java sofort in den passenden catch, der Rest des try entfällt.",
    "throw new XyException(\"Text\") wirft selbst. Eigene Exceptions erben von Exception oder RuntimeException und reichen die Meldung mit super(message) weiter.",
    "Unchecked (RuntimeException und Unterklassen): Programmierfehler, keine Pflicht zur Behandlung. Checked (Exception, z. B. IOException): fangen oder mit throws im Methodenkopf ankündigen, sonst Compilerfehler.",
    "catch-Reihenfolge: speziell vor allgemein. Ein catch (Exception e) vor catch (IOException e) macht den zweiten unerreichbar: Compilerfehler.",
    "Dateien: BufferedReader/FileReader (readLine bis null), BufferedWriter/FileWriter. Immer schließen, am besten mit try-with-resources.",
    "Threads: extends Thread oder implements Runnable, Start mit start() (nicht run()). join() wartet aufs Ende. Reihenfolge paralleler Threads ist nicht vorhersagbar.",
    "Race Condition: counter++ ist nicht atomar. synchronized (lock) { } lässt nur einen Thread gleichzeitig hinein. Alle müssen dasselbe Lock nutzen. Zwei Locks immer in derselben Reihenfolge holen (Deadlock-Gefahr).",
    "wait() gibt das Lock frei und schläft, notifyAll() weckt. Nur in synchronized, wait in while-Schleife. BlockingQueue: put/take blockieren.",
    "interrupt() bittet einen Thread aufzuhören. In sleep/wait wird daraus eine InterruptedException.",
    "Sockets: ServerSocket(port).accept() wartet auf Clients, new Socket(host, port) verbindet. Kommunikation über Input-/OutputStreams. Pro Client ein Thread für parallele Bedienung."
   ],
   "karten": [
    {
     "f": "Was ist eine Exception?",
     "a": "Ein Objekt, das einen Fehler zur Laufzeit beschreibt. Java wirft es, wenn etwas schiefgeht. Wird es nicht gefangen, bricht das Programm mit einer Fehlermeldung ab, wie ein Feueralarm, auf den niemand reagiert.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "f": "Unterschied zwischen checked und unchecked Exceptions?",
     "a": "Unchecked erben von RuntimeException, meist Programmierfehler (NullPointerException), der Compiler verlangt keine Behandlung. Checked erben von Exception, Probleme der Umgebung (IOException), müssen gefangen oder mit throws angekündigt werden.",
     "q": "Tutorium 5, Aufgabe 1 und 2"
    },
    {
     "f": "Was ist der Unterschied zwischen throw und throws?",
     "a": "throw wirft eine Exception (Anweisung im Rumpf): throw new IllegalArgumentException(...). throws kündigt im Methodenkopf an, dass die Methode eine checked Exception weitergeben kann: void lies() throws IOException.",
     "q": "Tutorium 5, Aufgabe 2"
    },
    {
     "f": "Wann läuft ein finally-Block?",
     "a": "Immer: nach normalem Ende des try, nach einem catch und auch, wenn im try ein return steht. Deshalb gehört Aufräumen (Dateien schließen) dorthin.",
     "q": "Java-Grundlagen Exceptions"
    },
    {
     "f": "Wie schreibst du eine eigene checked Exception?",
     "code": "class BucketFullException extends Exception {\n    public BucketFullException(String message) {\n        super(message);\n    }\n}",
     "a": "Klasse erbt von Exception (für unchecked: RuntimeException). Konstruktor gibt die Meldung mit super(message) an die Oberklasse, damit getMessage() sie liefert.",
     "q": "Tutorium 5, Aufgabe 2; Musterlösung BucketFullException.java"
    },
    {
     "f": "Anfängerfehler: Was meldet der Compiler?",
     "code": "import java.io.*;\npublic class Lesen {\n    public static void main(String[] args) {\n        BufferedReader r = new BufferedReader(new FileReader(\"a.txt\"));\n    }\n}",
     "a": "unreported exception FileNotFoundException; must be caught or declared to be thrown. FileReader wirft eine checked Exception. Lösung: try-catch oder main(...) throws IOException.",
     "q": "Tutorium 5, Aufgabe 10"
    },
    {
     "f": "Was ist try-with-resources?",
     "a": "try (Ressource r = ...) { ... }: Die in Klammern geöffnete Ressource (Stream, Socket) wird am Ende automatisch geschlossen, auch wenn eine Exception fliegt. Kein extra finally nötig.",
     "q": "Altklausur WS 14/15, Aufgabe 7"
    },
    {
     "f": "Wie liest man eine Textdatei zeilenweise?",
     "acode": "try (BufferedReader r = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String zeile;\n    while ((zeile = r.readLine()) != null) {\n        liste.add(zeile);\n    }\n}",
     "a": "Mit BufferedReader um einen FileReader, readLine() in einer Schleife bis null.",
     "q": "Altklausur WS 14/15, Aufgabe 7"
    },
    {
     "f": "Thread erben oder Runnable implementieren?",
     "a": "Meist Runnable: Die Klasse bleibt frei, von einer anderen Klasse zu erben (Java erlaubt nur eine Oberklasse), und Aufgabe (Runnable) und Ausführung (Thread) sind getrennt.",
     "q": "Tutorium 5, Aufgabe 3"
    },
    {
     "f": "Was ist der Unterschied zwischen t.start() und t.run()?",
     "a": "start() erzeugt einen neuen Thread, der run() parallel ausführt. run() direkt aufgerufen ist ein normaler Methodenaufruf im aktuellen Thread, nichts läuft parallel.",
     "q": "Tutorium 5, Aufgabe 3"
    },
    {
     "f": "Was macht join()?",
     "a": "t.join() lässt den aufrufenden Thread warten, bis t fertig ist. Damit erzwingt man eine Reihenfolge, z. B. erst hochzählen, dann runterzählen.",
     "q": "Tutorium 5, Aufgabe 6"
    },
    {
     "f": "Warum ist counter++ mit mehreren Threads gefährlich?",
     "a": "counter++ besteht aus Lesen, Addieren, Schreiben. Zwei Threads können denselben alten Wert lesen und beide denselben neuen schreiben. Eine Erhöhung geht verloren (Race Condition). Lösung: synchronized oder AtomicInteger.",
     "q": "Tutorium 5, Aufgabe 8"
    },
    {
     "f": "Was bewirkt synchronized?",
     "a": "Nur ein Thread gleichzeitig darf einen mit demselben Lock geschützten Abschnitt ausführen. Andere warten, bis das Lock frei ist. Wie eine Toilette mit nur einem Schlüssel.",
     "q": "Tutorium 5, Aufgabe 7"
    },
    {
     "f": "Was passiert bei einem synchronized-Block mit einer Klassenvariable als Lock, wenn es mehrere Sandkasten-Objekte gibt?",
     "a": "Alle Sandkasten-Instanzen teilen dasselbe Lock. Dann kann in allen Sandkästen zusammen nur ein Kind gleichzeitig backen, auch wenn sie unabhängig wären. Korrekt, aber unnötig langsam.",
     "q": "Altklausur WS 24/25, Aufgabe 7b"
    },
    {
     "f": "Was ist ein Deadlock?",
     "a": "Zwei Threads warten gegenseitig auf ein Lock, das der andere hält. Keiner kommt weiter. Vermeiden: Locks immer in derselben Reihenfolge holen.",
     "q": "Altklausur WS 24/25, Aufgabe 7"
    },
    {
     "f": "Warum müssen wait() und notifyAll() in synchronized stehen?",
     "a": "Sie arbeiten mit dem Lock des Objekts: wait gibt es frei, notifyAll weckt Wartende auf diesem Lock. Ohne das Lock zu halten gibt es eine IllegalMonitorStateException. So ist auch die Prüfung der Bedingung vor Störungen geschützt.",
     "q": "Tutorium 5, Aufgabe 9"
    },
    {
     "f": "Was macht ServerSocket.accept()?",
     "a": "Es blockiert, bis ein Client sich verbindet, und liefert dann einen Socket für diese Verbindung. Für den nächsten Client muss man accept erneut aufrufen, meist in einer Schleife.",
     "q": "Tutorium 5, Aufgabe 12; Altklausur WS 24/25, Aufgabe 6"
    },
    {
     "f": "Wie bedient ein Server viele Clients gleichzeitig?",
     "a": "In einer Endlosschleife accept() aufrufen und für jeden neuen Socket einen eigenen Thread starten, der mit diesem Client redet. Der Hauptthread wartet sofort wieder auf den nächsten.",
     "q": "Altklausur WS 24/25, Aufgabe 6"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T1 {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"A\");\n            int x = 5 / 0;\n            System.out.println(\"B\");\n        } catch (ArithmeticException e) {\n            System.out.println(\"C\");\n        } finally {\n            System.out.println(\"D\");\n        }\n        System.out.println(\"E\");\n    }\n}",
     "loesung": "A\nC\nD\nE",
     "erklaerung": "Zeile für Zeile: A wird ausgegeben. 5 / 0 wirft eine ArithmeticException, B wird übersprungen. Der passende catch gibt C aus. finally läuft immer: D. Weil der Fehler behandelt ist, geht es danach normal weiter: E.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T2 {\n    public static void main(String[] args) {\n        try {\n            String s = null;\n            System.out.println(\"1\");\n            System.out.println(s.length());\n        } catch (ArithmeticException e) {\n            System.out.println(\"2\");\n        } catch (RuntimeException e) {\n            System.out.println(\"3\");\n        }\n        System.out.println(\"4\");\n    }\n}",
     "loesung": "1\n3\n4",
     "erklaerung": "1 wird ausgegeben. s.length() auf null wirft eine NullPointerException. Der erste catch passt nicht (ArithmeticException). Der zweite fängt RuntimeException, und NullPointerException ist eine Unterklasse davon: 3. Danach 4.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T3 {\n    static int f() {\n        try {\n            return 1;\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(f());\n    }\n}",
     "loesung": "finally\n1",
     "erklaerung": "return 1 merkt sich den Rückgabewert, aber bevor die Methode wirklich verlassen wird, läuft finally und gibt „finally“ aus. Erst dann bekommt main die 1 und gibt sie aus.",
     "q": "Java-Grundlagen Exceptions"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T4 {\n    static int parse(String s) {\n        try {\n            return Integer.parseInt(s);\n        } catch (NumberFormatException e) {\n            return -1;\n        }\n    }\n\n    public static void main(String[] args) {\n        int summe = 0;\n        for (String s : new String[]{\"4\", \"x\", \"10\"}) {\n            summe += parse(s);\n        }\n        System.out.println(summe);\n    }\n}",
     "loesung": "13",
     "erklaerung": "\"4\" → 4. \"x\" ist keine Zahl, parseInt wirft NumberFormatException, catch liefert -1. \"10\" → 10. 4 + (-1) + 10 = 13.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T5 {\n    static void pruefe(int alter) {\n        if (alter < 0) {\n            throw new IllegalArgumentException(\"negativ: \" + alter);\n        }\n        System.out.println(\"ok \" + alter);\n    }\n\n    public static void main(String[] args) {\n        try {\n            pruefe(20);\n            pruefe(-3);\n            pruefe(30);\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
     "loesung": "ok 20\nnegativ: -3",
     "erklaerung": "pruefe(20) läuft durch. pruefe(-3) wirft die Exception, sie fliegt aus der Methode heraus bis zum catch in main. pruefe(30) wird deshalb nie aufgerufen.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus? (Kein Thread wird parallel gestartet!)",
     "code": "public class T6 {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println(\"im Thread: \" + Thread.currentThread().getName()));\n        t.run();\n        System.out.println(\"main: \" + Thread.currentThread().getName());\n    }\n}",
     "loesung": "im Thread: main\nmain: main",
     "erklaerung": "t.run() ist ein normaler Methodenaufruf. Der Code läuft im aktuellen Thread, und der heißt main. Mit t.start() liefe er in einem neuen Thread (Name Thread-0), und die Reihenfolge wäre nicht festgelegt.",
     "q": "Tutorium 5, Aufgabe 3"
    },
    {
     "typ": "text",
     "frage": "Was gibt dieses Programm aus?",
     "code": "public class T7 {\n    static int zaehler = 0;\n\n    static synchronized void plus() {\n        zaehler++;\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread a = new Thread(() -> { for (int i = 0; i < 1000; i++) plus(); });\n        Thread b = new Thread(() -> { for (int i = 0; i < 1000; i++) plus(); });\n        a.start();\n        b.start();\n        a.join();\n        b.join();\n        System.out.println(zaehler);\n    }\n}",
     "loesung": "2000",
     "erklaerung": "Beide Threads erhöhen je 1000 Mal. Weil plus synchronized ist, kann immer nur einer gleichzeitig zählen, keine Erhöhung geht verloren. join sorgt dafür, dass main erst ausgibt, wenn beide fertig sind.",
     "q": "Tutorium 5, Aufgabe 8"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat ergebnis am Ende?",
     "code": "int ergebnis = 0;\nint[] a = {1, 2, 3};\nfor (int i = 0; i < 5; i++) {\n    try {\n        ergebnis += a[i];\n    } catch (ArrayIndexOutOfBoundsException e) {\n        ergebnis += 10;\n    } finally {\n        ergebnis += 100;\n    }\n}",
     "loesung": 526,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "i = 0, 1, 2: 1 + 2 + 3 = 6. i = 3 und 4: Index gibt es nicht, je 10, zusammen 20. finally fünfmal: 500. 6 + 20 + 500 = 526.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "import java.io.*;\n\npublic class Reihenfolge {\n    public static void main(String[] args) {\n        try {\n            new FileReader(\"x.txt\").close();\n        } catch (Exception e) {\n            System.out.println(\"allgemein\");\n        } catch (IOException e) {\n            System.out.println(\"IO\");\n        }\n    }\n}",
     "optionen": [
      "Kein Fehler, Ausgabe: allgemein",
      "Compilerfehler: IOException wurde schon von catch (Exception e) gefangen, der zweite catch ist unerreichbar",
      "Laufzeitfehler: FileNotFoundException",
      "Ausgabe: IO"
     ],
     "richtig": 1,
     "erklaerung": "Java prüft catch-Blöcke von oben. Exception fängt alles, also auch IOException. Der zweite Block könnte nie drankommen, das ist ein Compilerfehler. Regel: speziell vor allgemein.",
     "q": "Java-Grundlagen Exceptions"
    },
    {
     "typ": "mc",
     "frage": "Wo ist der Fehler?",
     "code": "class MeineException extends Exception {\n    MeineException(String m) { super(m); }\n}\n\npublic class Pflicht {\n    static void f() {\n        throw new MeineException(\"Problem\");\n    }\n}",
     "optionen": [
      "Kein Fehler",
      "Compilerfehler: unreported exception MeineException; must be caught or declared to be thrown",
      "Laufzeitfehler",
      "Compilerfehler: Exceptions brauchen keinen Konstruktor"
     ],
     "richtig": 1,
     "erklaerung": "MeineException erbt von Exception, ist also checked. f muss sie entweder fangen oder im Kopf ankündigen: static void f() throws MeineException.",
     "q": "Tutorium 5, Aufgabe 2"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "public class Monitor {\n    public static void main(String[] args) throws InterruptedException {\n        Object o = new Object();\n        o.wait();\n    }\n}",
     "optionen": [
      "main wartet für immer",
      "Compilerfehler",
      "Laufzeitfehler: IllegalMonitorStateException",
      "Nichts, das Programm endet sofort"
     ],
     "richtig": 2,
     "erklaerung": "wait() darf nur aufrufen, wer das Lock des Objekts hält, also innerhalb von synchronized (o) { ... }. Sonst wirft Java sofort diese Exception.",
     "q": "Tutorium 5, Aufgabe 9"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "public class Unbehandelt {\n    public static void main(String[] args) {\n        int[] a = new int[2];\n        try {\n            a[2] = 1;\n        } catch (NullPointerException e) {\n            System.out.println(\"gefangen\");\n        }\n        System.out.println(\"weiter\");\n    }\n}",
     "optionen": [
      "Ausgabe: gefangen, weiter",
      "Ausgabe: weiter",
      "Laufzeitfehler: ArrayIndexOutOfBoundsException, „weiter“ erscheint nicht",
      "Compilerfehler"
     ],
     "richtig": 2,
     "erklaerung": "Der catch fängt nur NullPointerException. Die ArrayIndexOutOfBoundsException passt nicht, fliegt weiter aus main heraus und beendet das Programm.",
     "q": "Java-Grundlagen Exceptions"
    },
    {
     "typ": "mc",
     "frage": "Was passiert?",
     "code": "public class Doppelt {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println(\"läuft\"));\n        t.start();\n        t.start();\n    }\n}",
     "optionen": [
      "„läuft“ wird zweimal ausgegeben",
      "Laufzeitfehler: IllegalThreadStateException beim zweiten start",
      "Compilerfehler",
      "Endlosschleife"
     ],
     "richtig": 1,
     "erklaerung": "Ein Thread-Objekt kann nur einmal gestartet werden. Für eine zweite Ausführung braucht man ein neues Thread-Objekt.",
     "q": "Tutorium 5, Aufgabe 3"
    },
    {
     "typ": "mc",
     "frage": "Die Klasse MessageQueue (Altklausur WS 14/15, Aufgabe 8) speichert Nachrichten in einer ArrayList, mehrere Threads rufen enqueue und dequeue auf. Was ist das Problem?",
     "optionen": [
      "Keins, ArrayList ist threadsicher",
      "dequeue prüft size() > 0 und entfernt danach. Dazwischen kann ein anderer Thread das letzte Element nehmen, dann gibt es eine Exception oder kaputte Daten",
      "Generics funktionieren nicht mit Threads",
      "enqueue blockiert für immer"
     ],
     "richtig": 1,
     "erklaerung": "Prüfen und Entfernen sind zwei Schritte. Ohne synchronized können zwei Threads beide size() == 1 sehen und beide remove(0) versuchen. Außerdem ist ArrayList intern nicht threadsicher. Lösung: enqueue und dequeue synchronized machen.",
     "q": "Altklausur WS 14/15, Aufgabe 8"
    },
    {
     "typ": "mc",
     "frage": "Welche Ausgabe ist bei diesem Code möglich?",
     "code": "public class Parallel {\n    public static void main(String[] args) throws InterruptedException {\n        Thread t = new Thread(() -> System.out.print(\"A\"));\n        t.start();\n        System.out.print(\"B\");\n        t.join();\n        System.out.println();\n    }\n}",
     "optionen": [
      "Nur AB",
      "Nur BA",
      "AB oder BA",
      "Nur B"
     ],
     "richtig": 2,
     "erklaerung": "Nach start() laufen beide Threads parallel. Wer zuerst druckt, ist nicht festgelegt. Das join steht erst nach dem print(\"B\"), es erzwingt also keine Reihenfolge, nur dass am Ende beide fertig sind.",
     "q": "Tutorium 5, Aufgabe 6"
    }
   ],
   "formeln": [
    {
     "name": "try / catch / finally",
     "code": "try {\n    // riskanter Code\n} catch (ArithmeticException e) {\n    System.out.println(e.getMessage());\n} catch (Exception e) {\n    // allgemeiner zuletzt\n} finally {\n    // läuft immer\n}",
     "text": "Speziellere catch-Blöcke zuerst.",
     "q": "Tutorium 5, Aufgabe 1"
    },
    {
     "name": "Exception werfen und ankündigen",
     "code": "void put(String s) throws BucketFullException {\n    if (voll) throw new BucketFullException(\"voll\");\n}\nthrow new IllegalArgumentException(\"Wert ungültig\");",
     "text": "throw wirft, throws kündigt (checked) Exceptions im Kopf an.",
     "q": "Tutorium 5, Aufgabe 2"
    },
    {
     "name": "Eigene Exception",
     "code": "class MeineException extends Exception {          // checked\n    MeineException(String msg) { super(msg); }\n}\nclass MeinFehler extends RuntimeException { ... } // unchecked",
     "text": "Meldung mit super(msg) weiterreichen.",
     "q": "Tutorium 5, Aufgabe 2"
    },
    {
     "name": "Datei zeilenweise lesen",
     "code": "try (BufferedReader r = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String zeile;\n    while ((zeile = r.readLine()) != null) {\n        liste.add(zeile);\n    }\n} catch (IOException e) {\n    throw new RuntimeException(e);\n}",
     "text": "try-with-resources schließt den Reader automatisch.",
     "q": "Altklausur WS 14/15, Aufgabe 7"
    },
    {
     "name": "Datei schreiben",
     "code": "try (BufferedWriter w = new BufferedWriter(new FileWriter(\"out.csv\"))) {\n    w.write(\"Name;Alter\");\n    w.newLine();\n}",
     "text": "FileWriter(datei, true) hängt an statt zu überschreiben.",
     "q": "Tutorium 5, Aufgabe 10"
    },
    {
     "name": "Thread starten",
     "code": "Thread t = new Thread(() -> { ... });   // oder new Thread(new MeinRunnable())\nt.start();\nt.join();   // warten (wirft InterruptedException)\n\nclass Mein extends Thread {\n    public void run() { ... }\n}",
     "text": "Immer start(), nie run() direkt.",
     "q": "Tutorium 5, Aufgabe 3 und 6"
    },
    {
     "name": "synchronized",
     "code": "synchronized void plus() { zaehler++; }        // Lock: this\nsynchronized (lockObjekt) {                    // Block\n    ...\n}\nsynchronized (foermchen) { synchronized (schaufel) { ... } }",
     "text": "Alle Threads müssen dasselbe Lock benutzen. Mehrere Locks immer gleiche Reihenfolge.",
     "q": "Tutorium 5, Aufgabe 7; Altklausur WS 24/25, Aufgabe 7"
    },
    {
     "name": "wait / notifyAll",
     "code": "synchronized T take() throws InterruptedException {\n    while (leer()) wait();\n    T x = entferne();\n    notifyAll();\n    return x;\n}",
     "text": "wait immer in while, beides nur in synchronized.",
     "q": "Tutorium 5, Aufgabe 7 und 9"
    },
    {
     "name": "Server mit Thread pro Client",
     "code": "ServerSocket server = new ServerSocket(9090);\nwhile (true) {\n    Socket client = server.accept();\n    new Thread(() -> bediene(client)).start();\n}",
     "text": "accept blockiert bis ein Client kommt.",
     "q": "Altklausur WS 24/25, Aufgabe 6"
    },
    {
     "name": "Client und Text-Streams",
     "code": "Socket s = new Socket(\"localhost\", 9090);\nBufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));\nPrintWriter out = new PrintWriter(s.getOutputStream(), true);\nout.println(\"hallo\");\nString antwort = in.readLine();",
     "text": "true im PrintWriter: jede Zeile sofort senden.",
     "q": "Tutorium 5, Aufgabe 12"
    }
   ],
   "aufgaben": [
    {
     "titel": "Tutorium 5, Aufgabe 1: addPositive mit IllegalArgumentException",
     "q": "Tutorium 5, Aufgabe 1; Musterlösung AddPositive.java",
     "text": "Schreibe addPositive(int a, int b), die zwei positive Zahlen addiert und sonst eine IllegalArgumentException wirft. In main sollen so lange zwei Zahlen eingelesen werden, bis der Aufruf klappt. (Hier mit Eingabe -1, 5, dann 2, 3.)",
     "loesung": [
      "In der Methode zuerst die Parameter prüfen. Sind sie ungültig: throw new IllegalArgumentException(\"...\"). Sonst die Summe zurückgeben.",
      "IllegalArgumentException ist unchecked. Man muss sie nicht im Kopf ankündigen, darf es aber zur Dokumentation.",
      "main: Endlosschleife while (true). Im try einlesen, addPositive aufrufen, Ergebnis ausgeben, dann break.",
      "Im catch die Meldung ausgeben. Die Schleife läuft weiter und fragt neu.",
      "Unchecked passt hier, weil ungültige Parameter ein Fehler des Aufrufers sind, den er vermeiden kann."
     ],
     "loesungCode": "import Prog1Tools.IOTools;\n\npublic class AddPositive {\n    public static int addPositive(int a, int b) {\n        if (a < 0 || b < 0) {\n            throw new IllegalArgumentException(\"Beide Zahlen muessen positiv sein\");\n        }\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        while (true) {\n            try {\n                int a = IOTools.readInt(\"Erste Zahl: \");\n                int b = IOTools.readInt(\"Zweite Zahl: \");\n                System.out.println();\n                System.out.println(\"Summe: \" + addPositive(a, b));\n                break;\n            } catch (IllegalArgumentException e) {\n                System.out.println(e.getMessage() + \", bitte nochmal\");\n            }\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 5, Aufgabe 2: ThreeStringBucket mit eigener Exception",
     "q": "Tutorium 5, Aufgabe 2; Musterlösung ThreeStringBucket.java",
     "text": "Eine Klasse ThreeStringBucket speichert genau drei Strings in einem Array, mit Methoden zum Hinzufügen, Lesen und Löschen. Ist der Bucket voll, soll put eine eigene checked Exception BucketFullException werfen. Welche Fehler können sonst passieren?",
     "loesung": [
      "Mögliche Fehler: Bucket voll (put), Index außerhalb 0 bis 2 (get, remove), leerer Platz (get liefert null).",
      "BucketFullException extends Exception, mit Konstruktor (String message) und super(message). Weil sie checked ist, muss put sie mit throws ankündigen.",
      "Für falsche Indizes reicht eine IllegalArgumentException (unchecked), das ist ein Fehler des Aufrufers.",
      "put sucht die erste freie Stelle (null), legt den String ab und gibt den Index zurück. Gibt es keine, throw new BucketFullException(...).",
      "In main muss der put-Aufruf im try stehen, sonst kompiliert es nicht."
     ],
     "loesungCode": "class BucketFullException extends Exception {\n    public BucketFullException(String message) {\n        super(message);\n    }\n}\n\npublic class ThreeStringBucket {\n    private final String[] bucket = new String[3];\n\n    public int put(String value) throws BucketFullException {\n        for (int i = 0; i < bucket.length; i++) {\n            if (bucket[i] == null) {\n                bucket[i] = value;\n                return i;\n            }\n        }\n        throw new BucketFullException(\"Bucket is full\");\n    }\n\n    public String get(int index) {\n        if (index < 0 || index >= bucket.length) {\n            throw new IllegalArgumentException(\"Index out of bounds\");\n        }\n        return bucket[index];\n    }\n\n    public void remove(int index) {\n        if (index < 0 || index >= bucket.length) {\n            throw new IllegalArgumentException(\"Index out of bounds\");\n        }\n        bucket[index] = null;\n    }\n\n    public static void main(String[] args) {\n        ThreeStringBucket b = new ThreeStringBucket();\n        try {\n            b.put(\"Hello\");\n            b.put(\"World\");\n            b.put(\"!\");\n            b.put(\"This should fail\");\n        } catch (BucketFullException e) {\n            System.out.println(e.getMessage());\n        }\n        b.remove(1);\n        System.out.println(b.get(0) + \" \" + b.get(1) + \" \" + b.get(2));\n        try {\n            b.get(5);\n        } catch (IllegalArgumentException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}"
    },
    {
     "titel": "Tutorium 5, Aufgabe 8: SharedCounter – Race Condition zeigen und beheben",
     "q": "Tutorium 5, Aufgabe 8; Musterlösung SharedCounter.java, SharedCounterThreadsafe.java",
     "text": "Eine Klasse SharedCounter extends Thread hat static int counter und erhöht ihn in run() hundertmal mit counter++. In main werden viele Instanzen gestartet, in einer Liste gespeichert, alle gejoint und dann counter ausgegeben. Warum stimmt das Ergebnis nicht immer? Wie stellst du das richtige Ergebnis sicher? (Hier mit 1.000 statt 100.000 Threads.)",
     "loesung": [
      "counter++ besteht aus Lesen, Addieren, Schreiben. Zwei Threads können denselben Wert lesen, beide schreiben dann denselben neuen Wert. Erhöhungen gehen verloren.",
      "Erwartet wäre Anzahl Threads mal 100. Ohne Schutz kommt manchmal weniger heraus, je nach Zufall der Ablaufplanung.",
      "Lösung: das Erhöhen in synchronized (SharedCounter.class) { counter++; } setzen. Wichtig ist ein gemeinsames Lock für alle Threads. synchronized auf this würde nichts nützen, weil jeder Thread ein eigenes Objekt ist.",
      "Alternative: AtomicInteger mit incrementAndGet().",
      "join für alle Threads ist nötig, damit main erst ausgibt, wenn alle fertig sind."
     ],
     "loesungCode": "import java.util.*;\n\npublic class SharedCounter extends Thread {\n    static int counter = 0;\n\n    @Override\n    public void run() {\n        for (int i = 0; i < 100; i++) {\n            synchronized (SharedCounter.class) {\n                counter++;\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        List<Thread> threads = new ArrayList<>();\n        for (int i = 0; i < 1000; i++) {\n            Thread t = new SharedCounter();\n            threads.add(t);\n            t.start();\n        }\n        for (Thread t : threads) {\n            t.join();\n        }\n        System.out.println(counter);\n    }\n}"
    },
    {
     "titel": "Tutorium 5, Aufgabe 7: MyBlockingQueue mit synchronized, wait und notifyAll",
     "q": "Tutorium 5, Aufgabe 7; Musterlösung MyThreadSafeQueue.java, MyBlockingQueue.java",
     "text": "Schreibe eine Queue für bis zu 10 Elemente. Erst threadsicher mit synchronized (bei voller Queue wirft enqueue eine QueueFullException), dann als MyBlockingQueue, in der enqueue wartet, bis Platz ist, und dequeue wartet, bis ein Element da ist (wait und notifyAll).",
     "loesung": [
      "Speicher: ein Array der Größe 10 als Ringpuffer mit Indizes kopf, ende und einem Zähler anzahl. Oder intern eine LinkedList.",
      "Threadsicher: enqueue und dequeue synchronized machen. Dann kann immer nur ein Thread gleichzeitig darin arbeiten.",
      "Blockierend: In enqueue while (anzahl == 10) wait(); in dequeue while (anzahl == 0) wait(); Nach jeder Änderung notifyAll(), damit wartende Threads die neue Lage prüfen.",
      "while statt if, weil ein geweckter Thread nicht sicher ist, dass die Bedingung noch gilt (ein anderer könnte schneller gewesen sein).",
      "Test: Ein Producer legt 20 Zahlen hinein, obwohl nur 10 Platz haben. Er wartet, bis der Consumer Platz schafft."
     ],
     "loesungCode": "public class MyBlockingQueue {\n    private final int[] daten = new int[10];\n    private int kopf = 0, ende = 0, anzahl = 0;\n\n    public synchronized void enqueue(int x) throws InterruptedException {\n        while (anzahl == daten.length) {\n            wait();\n        }\n        daten[ende] = x;\n        ende = (ende + 1) % daten.length;\n        anzahl++;\n        notifyAll();\n    }\n\n    public synchronized int dequeue() throws InterruptedException {\n        while (anzahl == 0) {\n            wait();\n        }\n        int x = daten[kopf];\n        kopf = (kopf + 1) % daten.length;\n        anzahl--;\n        notifyAll();\n        return x;\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        MyBlockingQueue q = new MyBlockingQueue();\n        Thread producer = new Thread(() -> {\n            try {\n                for (int i = 1; i <= 20; i++) q.enqueue(i);\n            } catch (InterruptedException e) {\n                return;\n            }\n        });\n        producer.start();\n        int summe = 0;\n        for (int i = 0; i < 20; i++) summe += q.dequeue();\n        producer.join();\n        System.out.println(\"Summe: \" + summe);\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 6: Server mit parallelen Clients (12 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 6",
     "text": "Implementiere einen einfachen Server, der über main gestartet wird und auf Port 9090 wartet. Mit einem BufferedReader soll er alles lesen, was der Client sendet, und auf der Konsole ausgeben. Die Verbindung wird geschlossen, sobald der Client „end“ sendet oder die Verbindung schließt. Der Server soll theoretisch unbegrenzt viele parallele Anfragen bedienen, Exceptions beim Lesen sollen gefangen werden. Tipp: ServerSocket, Socket, Thread, InputStreamReader.",
     "loesung": [
      "main: new ServerSocket(9090), dann Endlosschleife: Socket client = server.accept();",
      "Für jeden Client sofort einen neuen Thread starten, der nur mit diesem Client redet. Der Hauptthread geht direkt zurück zu accept. So sind beliebig viele Clients gleichzeitig möglich.",
      "Im Client-Thread: BufferedReader über new InputStreamReader(client.getInputStream()).",
      "Lesen in while ((zeile = in.readLine()) != null): null heißt, der Client hat die Verbindung geschlossen. Ist zeile.equals(\"end\"), mit break aufhören.",
      "Ausgeben mit System.out.println(zeile).",
      "Exceptions fangen: try-with-resources um Socket und Reader schließt beides automatisch, catch (IOException e) gibt den Fehler aus.",
      "Der Code ist kompiliert, aber nicht im Test ausgeführt, weil der Server endlos läuft. Die Lektion „Sockets“ zeigt dasselbe Muster in einem ausführbaren Beispiel."
     ],
     "loesungCode": "import java.io.*;\nimport java.net.*;\n\npublic class Server {\n    public static void main(String[] args) throws IOException {\n        ServerSocket server = new ServerSocket(9090);\n        while (true) {\n            Socket client = server.accept();\n            new Thread(() -> bediene(client)).start();\n        }\n    }\n\n    private static void bediene(Socket client) {\n        try (Socket s = client;\n             BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()))) {\n            String zeile;\n            while ((zeile = in.readLine()) != null) {\n                if (zeile.equals(\"end\")) {\n                    break;\n                }\n                System.out.println(zeile);\n            }\n        } catch (IOException e) {\n            System.out.println(\"Fehler beim Lesen: \" + e.getMessage());\n        }\n    }\n}"
    },
    {
     "titel": "Altklausur WS 24/25, Aufgabe 7: Sandkasten synchronisieren (4 Punkte)",
     "q": "Altklausur WS 24/25, Aufgabe 7",
     "text": "50 Kind-Threads rufen je 100 Mal Sandkasten.getSandkasten().backeKuchen() auf. Darin werden foermchen.backeKuchen() und schaufel.backeKuchen() aufgerufen. Ergänze backeKuchen() so, dass immer nur ein Kind gleichzeitig backt und dabei alleinigen Zugriff auf Förmchen UND Schaufel hat. Möglichst effizient. b) Was würde ein synchronized-Block mit einer Klassenvariable als Lock bewirken, wenn mehrere Sandkasten-Instanzen parallel benutzt werden?",
     "code": "public void backeKuchen() {\n    foermchen.backeKuchen();\n    schaufel.backeKuchen();\n}\n// weitere Methoden, die exklusiven Zugriff auf foermchen oder schaufel benötigen",
     "loesung": [
      "Andere Methoden brauchen nur das Förmchen oder nur die Schaufel. Deshalb nicht ein globales Lock nehmen, sondern genau die beiden Objekte als Locks benutzen.",
      "Verschachtelt: synchronized (foermchen) { synchronized (schaufel) { ... } }. Erst wenn ein Kind beide hat, backt es.",
      "Effizient: Andere Methoden, die nur die Schaufel brauchen, werden nur gesperrt, solange die Schaufel wirklich belegt ist.",
      "Deadlock vermeiden: Alle Methoden, die beide brauchen, müssen sie in derselben Reihenfolge sperren (immer erst Förmchen, dann Schaufel).",
      "b) Eine Klassenvariable (static) gibt es nur einmal. Alle Sandkästen würden dasselbe Lock teilen, also könnte insgesamt nur ein Kind in allen Sandkästen gleichzeitig backen. Korrekt, aber unnötig langsam."
     ],
     "loesungCode": "public class Sandkasten {\n    private final Foermchen foermchen = new Foermchen();\n    private final Schaufel schaufel = new Schaufel();\n    private final static Sandkasten sandkasten = new Sandkasten();\n    static int gebacken = 0;\n\n    private Sandkasten() { }\n\n    public static Sandkasten getSandkasten() { return sandkasten; }\n\n    public void backeKuchen() {\n        synchronized (foermchen) {\n            synchronized (schaufel) {\n                foermchen.backeKuchen();\n                schaufel.backeKuchen();\n                gebacken++;\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Kind[] kinder = new Kind[50];\n        for (int i = 0; i < 50; i++) {\n            kinder[i] = new Kind(\"Kind-\" + i);\n            kinder[i].start();\n        }\n        for (Kind k : kinder) k.join();\n        System.out.println(\"Kuchen: \" + gebacken);\n    }\n}\n\nclass Foermchen {\n    public void backeKuchen() { /* in der Klausur: println mit Thread-Namen */ }\n}\n\nclass Schaufel {\n    public void backeKuchen() { }\n}\n\nclass Kind extends Thread {\n    public Kind(String name) { super.setName(name); }\n\n    public void run() {\n        for (int i = 0; i < 100; i++) {\n            Sandkasten.getSandkasten().backeKuchen();\n        }\n    }\n}"
    },
    {
     "titel": "Altklausur WS 14/15, Aufgabe 7: Datei in eine ArrayList einlesen (8 Punkte)",
     "q": "Altklausur WS 14/15, Aufgabe 7",
     "text": "Lies die Textdatei „file.txt“ zeilenweise ein und speichere jede Zeile in einer ArrayList. IOExceptions sollen in eine neue RuntimeException verpackt und geworfen werden. Stelle sicher, dass danach keine Systemressourcen offen bleiben. Tipp: BufferedReader.",
     "loesung": [
      "ArrayList<String> anlegen.",
      "BufferedReader um einen FileReader(\"file.txt\") in einem try-with-resources öffnen. Damit wird er in jedem Fall geschlossen (Ressourcen nicht in undefiniertem Zustand).",
      "while ((zeile = reader.readLine()) != null) liste.add(zeile);",
      "catch (IOException e) { throw new RuntimeException(e); } verpackt die checked in eine unchecked Exception.",
      "Ohne try-with-resources: reader im finally mit close() schließen, dabei auf null prüfen, und die IOException von close ebenfalls behandeln. Das ist länger und fehleranfälliger.",
      "Unten ein Test, der erst eine Datei anlegt und dann die Methode benutzt."
     ],
     "loesungCode": "import java.io.*;\nimport java.util.*;\n\npublic class EinlesenTest {\n    static List<String> einlesen(String pfad) {\n        List<String> zeilen = new ArrayList<>();\n        try (BufferedReader reader = new BufferedReader(new FileReader(pfad))) {\n            String zeile;\n            while ((zeile = reader.readLine()) != null) {\n                zeilen.add(zeile);\n            }\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n        return zeilen;\n    }\n\n    public static void main(String[] args) throws IOException {\n        File f = File.createTempFile(\"file\", \".txt\");\n        try (PrintWriter w = new PrintWriter(new FileWriter(f))) {\n            w.println(\"erste Zeile\");\n            w.println(\"zweite Zeile\");\n        }\n        System.out.println(einlesen(f.getPath()));\n        f.delete();\n        try {\n            einlesen(\"gibt-es-nicht.txt\");\n        } catch (RuntimeException e) {\n            System.out.println(\"verpackt: \" + e.getCause().getClass().getSimpleName());\n        }\n    }\n}"
    }
   ]
  }
 ]
});
