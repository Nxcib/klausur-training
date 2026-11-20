// Technische Grundlagen der Informatik (TGI/TechGI, Orr Dunkelman, FG SecT, TU Berlin), WiSe 2026/27
// Gegliedert nach Kapiteln: 0 Einführung, 1 Boolesche Logik, 2 Boolesche Arithmetik, 3 Speicher, 4 Maschinensprache (Hack).
// Stand: 18.11.2026. Erzeugt aus scratchpad/tgicheck/k0.py ... k4.py (build.py).
// Alle Wahrheitstabellen, Vereinfachungen, Umrechnungen, ALU-Rechnungen, Flip-Flop-Verläufe und Hack-Programme
// wurden mit Python geprüft (itertools-Wahrheitstabellen, Bitmasken, eigener Hack-Assembler/Simulator).
// Klausur: schriftlich, Deutsch, 90 Min., keine Hilfsmittel. Zulassung: 80 % aller ISIS-Quiz-Punkte.
// Die ISIS-Quizze sind bewusst NICHT nachgebildet. Zu Blatt 03 steht nur die Aufgabenstellung (Lösung folgt nach ISIS).

window.FAECHER = window.FAECHER || [];
window.FAECHER.push({
 "id": "tgi",
 "name": "Technische Grundlagen der Informatik",
 "kurz": "TGI",
 "klausur": {
  "datum": "2027-02-26T15:00:00",
  "text": "Fr 26.02.2027, 15:00, HE 101 (90 Min., auf Deutsch, keine Hilfsmittel). 2. Termin Fr 09.04.2027"
 },
 "quelle": "Folien Intro und Lecture 1–4 (Nand to Tetris, Nisan/Schocken), Buchkapitel 1–3 und Computer Architecture, Aufgabenblätter 1–3 mit Lösungsvorschlägen zu Blatt 1 und 2 (ISIS, Stand 18.11.2026)",
 "aufgabenTitel": "Aufgaben aus den Übungsblättern",
 "anleitung": [
  "Fang bei Kapitel 0 an und geh die Kapitel der Reihe nach durch. Jedes Kapitel benutzt die Bausteine des vorigen: ohne Gatter keine ALU, ohne ALU und Speicher keine Maschinensprache.",
  "Lies jede Lektion ganz und rechne das Beispiel im Kasten selbst auf Papier nach, bevor du weiterliest. Neue Begriffe werden beim ersten Auftreten erklärt. Wenn du einen vergessen hast, geh eine Lektion zurück.",
  "In der Klausur ist kein Taschenrechner erlaubt. Übe deshalb Umrechnungen (Binär, Dezimal, Hex, Zweierkomplement) und Zweierpotenzen bis 2^16 von Hand, bis sie sitzen. Bei Wahrheitstabellen und Hack-Programmen hilft immer eine saubere Tabelle Zeile für Zeile.",
  "Dann die Karteikarten: Antwort erst laut sagen, dann aufdecken. Die englischen Begriffe in Klammern brauchst du, um die Folien zu lesen. In der Klausur schreibst du Deutsch.",
  "Danach die Aufgaben aus den Übungsblättern: erst selbst lösen, dann die Lösung Schritt für Schritt vergleichen. Zu Blatt 03 gibt es noch keinen offiziellen Lösungsvorschlag. Dort steht stattdessen eine eigene Übung mit Lösung.",
  "Zum Schluss das Quiz des Kapitels, mit dem Ziel 80 Prozent. Es ersetzt nicht die ISIS-Quizze für die Zulassung, die machst du dort selbst. Falsche Fragen nach einem Tag wiederholen, den Spickzettel vor der Klausur aus dem Kopf aufschreiben."
 ],
 "kapitel": [
  {
   "id": "k0",
   "titel": "Kapitel 0: Einführung",
   "abschnitt": "Erste Vorlesung (Organisation und Intro), kein Übungsblatt",
   "seiten": "TechGI_01_intro (Organisation, Themen, Literatur), Intro.pdf (Nand to Tetris, Folien 1–25), Lecture 1 S. 5–11 (Bits)",
   "quellen": [
    {
     "name": "Organisation und Themen (TechGI_01_intro)",
     "pfad": "material/TGI/00 Intro/TechGI_01_intro.pdf"
    },
    {
     "name": "Intro: From Nand to Tetris",
     "pfad": "material/TGI/00 Intro/Intro.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Worum es in TGI geht",
     "text": [
      "Du tippst in Java oder Python „print(1)“, und auf dem Bildschirm erscheint eine 1. Dazwischen passiert eine Menge, die man normalerweise nicht sieht. TGI (Technische Grundlagen der Informatik) macht genau diesen unsichtbaren Teil sichtbar: Wie ist ein Computer gebaut, und wie führt er ein Programm aus?",
      "Ein Computer ist eine Maschine, die Eingaben nach festen Regeln in Ausgaben verwandelt. Er besteht aus Hardware (das, was man anfassen kann: Chips, Leitungen, Speicher) und Software (Programme, also Anweisungen, die die Hardware ausführt).",
      "Die Vorlesung zeigt das an einem Beispiel (Intro, Folien 4–8): Ein kurzes Programm, das 1, 2, 3 ausgibt, wird zuerst übersetzt (translate) in Binärcode, also lange Reihen aus Nullen und Einsen. Diese Reihen führt die Hardware aus (execute). Zwei Fragen bleiben offen: Wie wird übersetzt (Software-Frage)? Und was ist das für eine Maschine, die Nullen und Einsen ausführen kann (Hardware-Frage)?",
      "Der erste Teil von TGI beantwortet die Hardware-Frage. Später im Modul kommen Betriebssysteme, Rechnernetze und verteilte Systeme dazu (TechGI_01_intro, Folien 8–12)."
     ],
     "code": "Ein Programm (hohe Sprache):     Übersetzt in Binärcode (Hack):\n\ni = 1                            0000000000010000\nwhile (i < 4) {                  1110111111001000\n   print(i);                     0000000000010001\n   i = i + 1;                    1110101010001000\n}                                ...\n\nIn Kapitel 4 lernst du, diese Binärzeilen zu lesen.",
     "merke": "Hardware führt Nullen und Einsen aus. Software sind Anweisungen. TGI zeigt, wie aus einfachen Bausteinen eine Maschine wird, die Programme ausführt."
    },
    {
     "titel": "Bit: die kleinste Informationseinheit",
     "text": [
      "Ein Bit (kurz für binary digit, Binärziffer) kann genau zwei Zustände haben. Wie man diese Zustände nennt, ist egal: aus und an, nein und ja, falsch und wahr (false, true), 0 und 1 (Lecture 1, S. 5). Ein Lichtschalter ist ein gutes Bild für ein Bit.",
      "Warum gerade zwei Zustände? Technisch ist es einfach und robust, nur zwischen „Strom“ und „kein Strom“ (bzw. hohe und niedrige Spannung) zu unterscheiden. Zehn Spannungsstufen sauber auseinanderzuhalten wäre viel fehleranfälliger.",
      "Mehrere Bits zusammen können mehr Zustände darstellen. Mit 1 Bit hast du 2 Zustände, mit 2 Bits 4 (00, 01, 10, 11), mit 3 Bits 8. Jedes neue Bit verdoppelt die Anzahl, weil jeder bisherige Zustand einmal mit 0 und einmal mit 1 weitergeht.",
      "Allgemein: N Bits können $2^N$ verschiedene Zustände darstellen (Lecture 1, S. 10–11). Umgekehrt: Willst du n verschiedene Dinge unterscheiden, brauchst du so viele Bits, dass $2^N \\ge n$ gilt. Für 100 Dinge reichen 7 Bits ($2^7 = 128$), 6 Bits wären zu wenig ($2^6 = 64$)."
     ],
     "code": "Alle Zustände von 3 Bits, systematisch aufgezählt (wie Zählen):\n\nb2 b1 b0\n 0  0  0\n 0  0  1\n 0  1  0\n 0  1  1\n 1  0  0\n 1  0  1\n 1  1  0\n 1  1  1     -> 8 Zeilen = 2^3",
     "merke": "N Bits ergeben 2^N Zustände. Jedes zusätzliche Bit verdoppelt die Zahl der Möglichkeiten."
    },
    {
     "titel": "Byte, Wort und die Zweierpotenzen",
     "text": [
      "8 Bits zusammen heißen ein Byte. Ein Byte hat $2^8 = 256$ Zustände, zum Beispiel die Zahlen 0 bis 255.",
      "Ein Wort (word) ist die Anzahl Bits, die ein Computer auf einmal verarbeitet. Beim Hack-Computer aus der Vorlesung sind das 16 Bits. Ein 16-Bit-Wort hat $2^{16} = 65536$ Zustände.",
      "In der Klausur ist kein Taschenrechner erlaubt. Die Zweierpotenzen bis $2^{16}$ solltest du deshalb auswendig können. Sie tauchen überall auf: beim Umrechnen von Zahlen, bei Wertebereichen und bei Speichergrößen.",
      "Ein Trick zum Merken: $2^{10} = 1024$, also ungefähr tausend. Daher heißt 1024 auch „1K“. $2^{14} = 16 \\cdot 1024 = 16384$ ist „16K“, genau so groß ist der Datenspeicher (RAM) des Hack-Computers."
     ],
     "code": "Zweierpotenzen (auswendig lernen):\n\n2^0  = 1        2^6  = 64        2^12 = 4096\n2^1  = 2        2^7  = 128       2^13 = 8192\n2^2  = 4        2^8  = 256       2^14 = 16384\n2^3  = 8        2^9  = 512       2^15 = 32768\n2^4  = 16       2^10 = 1024      2^16 = 65536\n2^5  = 32       2^11 = 2048",
     "merke": "1 Byte = 8 Bit = 256 Zustände. Hack-Wort = 16 Bit. 2^10 = 1024 = 1K."
    },
    {
     "titel": "Abstraktion und Implementierung",
     "text": [
      "Ein Computer ist zu kompliziert, um ihn auf einmal zu verstehen. Deshalb zerlegt man ihn in Module (modules): abgegrenzte Teilsysteme, die man einzeln bauen und testen kann (Intro, Folie 25).",
      "Jedes Modul hat zwei Seiten. Die Abstraktion (abstraction), auch Schnittstelle (interface), sagt, WAS das Modul tut. Die Implementierung (implementation) sagt, WIE es das intern schafft (Intro, Folie 23).",
      "Alltagsvergleich: Beim Autofahren kennst du die Schnittstelle (Lenkrad, Gas, Bremse). Wie der Motor innen arbeitet, musst du dafür nicht wissen. Der Mechaniker dagegen arbeitet an der Implementierung.",
      "Die Regel aus der Vorlesung (Intro, Folie 24): Wenn du ein Modul als Baustein benutzt, achte nur darauf, was es tut, nicht wie. Wenn du ein Modul baust, nimm Module der Ebene darunter als fertige Bausteine und ordne sie so an, dass das gewünschte Verhalten herauskommt. So kann man Schicht für Schicht einen ganzen Computer bauen, ohne je alles gleichzeitig im Kopf haben zu müssen."
     ],
     "merke": "Abstraktion = was ein Modul tut (Schnittstelle). Implementierung = wie es das tut. Benutzen: nur die Abstraktion beachten. Bauen: Bausteine der Ebene darunter verwenden."
    },
    {
     "titel": "Der Fahrplan: From Nand to Tetris",
     "text": [
      "Etwa die Hälfte der Vorlesung folgt dem Buch „The Elements of Computing Systems“ von Noam Nisan und Shimon Schocken, bekannt als Nand to Tetris. Die Idee: Man beginnt mit einem einzigen, sehr einfachen Baustein, dem NAND-Gatter, und baut daraus Schritt für Schritt einen vollständigen Computer, auf dem man am Ende sogar Tetris spielen kann.",
      "Ein Gatter (gate) ist eine winzige Schaltung, die aus einem oder mehreren Bits ein Ergebnis-Bit berechnet. Was NAND genau ist, lernst du in Kapitel 1.",
      "Die Hardware-Hälfte besteht aus den Projekten 1 bis 6 (Intro, Folie 10). Die Ebenen bauen streng aufeinander auf: Aus Gattern werden Chips wie die Recheneinheit (ALU) und der Speicher (RAM), daraus der Computer, dessen Maschinensprache man dann programmiert.",
      "In TGI kommen die Kapitel in dieser Reihenfolge: 1 Boolesche Logik (Gatter), 2 Boolesche Arithmetik (Rechnen, ALU), 3 Speicher (Register, RAM), 4 Maschinensprache. Diese Plattform folgt genau dieser Reihenfolge. Überspring nichts, denn jedes Kapitel benutzt die Bausteine des vorigen."
     ],
     "code": "Ebenen von unten nach oben (Hardware-Teil):\n\nNAND-Gatter\n  -> elementare Gatter (Not, And, Or, Xor, Mux ...)   Projekt 1, Kapitel 1\n  -> Rechenchips: Addierer, ALU                       Projekt 2, Kapitel 2\n  -> Speicherchips: Register, RAM, Zähler             Projekt 3, Kapitel 3\n  -> Maschinensprache (Hack)                          Projekt 4, Kapitel 4\n  -> Computer (CPU + Speicher)                        Projekt 5\n  -> Assembler (Übersetzer)                           Projekt 6",
     "merke": "Nand to Tetris: aus einem einzigen Gattertyp (NAND) Schicht für Schicht einen ganzen Computer bauen."
    },
    {
     "titel": "Organisation: Zulassung und Klausur",
     "text": [
      "Die Vorlesung ist donnerstags 16–18 Uhr in A 151, auf Englisch. Die Übungen (Tutorien) sind auf Deutsch, und die Klausur ist auf Deutsch. Deshalb lernst du hier die deutschen Begriffe und siehst die englischen in Klammern, so wie sie auf den Folien stehen.",
      "Zulassung zur Klausur: Jede Woche gibt es auf ISIS ein Quiz. Du brauchst 80 Prozent aller Punkte, gezählt über alle Quizze zusammen, nicht pro Quiz (TechGI_01_intro, Folie 3–4). Die Quizze bearbeitest du selbst auf ISIS. Diese Plattform bildet sie absichtlich nicht nach.",
      "Klausur: schriftlich, 90 Minuten, ohne Hilfsmittel. Kein Taschenrechner und keine Notizen. 1. Termin Fr 26.02.2027, 15:00–17:30, HE 101. 2. Termin Fr 09.04.2027, 14:00–16:30, HE 101.",
      "Was das für dich heißt: Umrechnungen zwischen Binär, Dezimal und Zweierkomplement, Wahrheitstabellen und kleine Hack-Programme musst du sicher von Hand können. Übe deshalb alles auf Papier."
     ],
     "merke": "Zulassung: 80 % aller ISIS-Quiz-Punkte. Klausur: 90 Minuten, Deutsch, ohne Taschenrechner."
    }
   ],
   "zusammenfassung": [
    "Ein Computer verwandelt Eingaben nach festen Regeln in Ausgaben. Hardware führt aus, Software sagt, was.",
    "Programme werden in Binärcode übersetzt (translate) und dann von der Hardware ausgeführt (execute).",
    "Ein Bit hat zwei Zustände (0/1, falsch/wahr, aus/an). N Bits ergeben 2^N Zustände.",
    "1 Byte = 8 Bit = 256 Zustände. Der Hack-Computer arbeitet mit 16-Bit-Wörtern (65536 Zustände).",
    "Abstraktion = was ein Modul tut. Implementierung = wie es das tut. Bauen mit Modulen der Ebene darunter.",
    "Nand to Tetris: aus NAND-Gattern Schritt für Schritt Gatter, ALU, RAM, Computer und Maschinensprache.",
    "Zweierpotenzen bis 2^16 auswendig: 2^10 = 1024, 2^14 = 16384, 2^15 = 32768, 2^16 = 65536.",
    "Zulassung: 80 % aller Quizpunkte auf ISIS. Klausur 90 Minuten ohne Hilfsmittel, 26.02.2027 bzw. 09.04.2027."
   ],
   "karten": [
    {
     "f": "Was ist ein Bit?",
     "a": "Die kleinste Informationseinheit (binary digit). Hat genau zwei Zustände, die man 0/1, falsch/wahr oder aus/an nennt.",
     "q": "Lecture 1, S. 5"
    },
    {
     "f": "Wie viele Zustände können N Bits darstellen?",
     "a": "2^N. Jedes zusätzliche Bit verdoppelt die Anzahl.",
     "q": "Lecture 1, S. 10–11"
    },
    {
     "f": "Wie viele Bits brauchst du, um 100 verschiedene Dinge zu unterscheiden?",
     "a": "7 Bits, denn 2^7 = 128 ≥ 100, aber 2^6 = 64 < 100.",
     "q": "Eigene Übung"
    },
    {
     "f": "Was ist ein Byte, wie viele Zustände hat es?",
     "a": "8 Bits. 2^8 = 256 Zustände, z. B. die Zahlen 0 bis 255.",
     "q": "Allgemeinwissen"
    },
    {
     "f": "Wie breit ist ein Wort beim Hack-Computer?",
     "a": "16 Bit. Damit gibt es 2^16 = 65536 verschiedene Bitmuster.",
     "q": "Lecture 4, S. 22"
    },
    {
     "f": "Was ist 2^10, 2^14, 2^15, 2^16?",
     "a": "1024, 16384, 32768, 65536.",
     "q": "Lecture 2, S. 21"
    },
    {
     "f": "Abstraktion vs. Implementierung?",
     "a": "Abstraktion (Schnittstelle): was ein Modul tut. Implementierung: wie es intern funktioniert. Ein Modul hat eine Schnittstelle, aber viele mögliche Implementierungen.",
     "q": "Intro, Folie 23; Lecture 1, S. 46"
    },
    {
     "f": "Was ist ein Modul?",
     "a": "Ein klar beschriebenes Teilsystem, das man unabhängig von den anderen bauen und testen kann (unit-tested).",
     "q": "Intro, Folie 25"
    },
    {
     "f": "Was heißt „translate“ und „execute“ im Intro?",
     "a": "Translate: Programm aus einer hohen Sprache in Binärcode übersetzen. Execute: Die Hardware führt den Binärcode aus.",
     "q": "Intro, Folien 6–7"
    },
    {
     "f": "Welcher Baustein ist der Startpunkt von Nand to Tetris?",
     "a": "Das NAND-Gatter. Aus ihm allein lässt sich jede boolesche Funktion und damit ein ganzer Computer bauen.",
     "q": "Intro, Folie 9; Lecture 1, S. 26–28"
    },
    {
     "f": "Was gehört zum Hardware-Teil von Nand to Tetris?",
     "a": "Projekte 1–6: Gatter, ALU, Speicher, Maschinensprache, Computer, Assembler.",
     "q": "Intro, Folien 10 und 25"
    },
    {
     "f": "Welche Regel gilt beim Benutzen und beim Bauen eines Moduls?",
     "a": "Benutzen: nur darauf achten, was es tut. Bauen: Module der Ebene darunter als fertige Bausteine nehmen und passend anordnen.",
     "q": "Intro, Folie 24"
    },
    {
     "f": "Wie bekommst du die Klausurzulassung in TGI?",
     "a": "Mit 80 % aller Punkte aus den wöchentlichen ISIS-Quizzen (über alle Quizze zusammen).",
     "q": "TechGI_01_intro, Folie 3"
    },
    {
     "f": "Welche Hilfsmittel sind in der TGI-Klausur erlaubt?",
     "a": "Keine. Kein Taschenrechner, keine Notizen. 90 Minuten, auf Deutsch.",
     "q": "ISIS, Kursinfo"
    },
    {
     "f": "Welche großen Themen umfasst das Modul?",
     "a": "Aufbau und Arbeitsweise eines Computers (Prozessor, Assembler), Betriebssysteme, Rechnernetze (TCP/IP, OSI-Modell), verteilte Systeme.",
     "q": "TechGI_01_intro, Folien 8–12"
    }
   ],
   "quiz": [
    {
     "typ": "zahl",
     "frage": "Wie viele verschiedene Zustände können 5 Bits darstellen?",
     "loesung": 32,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^5 = 2 · 2 · 2 · 2 · 2 = 32.",
     "q": "Lecture 1, S. 10–11"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele verschiedene Zustände können 16 Bits darstellen?",
     "loesung": 65536,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^16 = 65536. Das ist die Zahl der Bitmuster in einem Hack-Wort.",
     "q": "Lecture 1, S. 11"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Bits brauchst du mindestens, um 26 Buchstaben zu unterscheiden?",
     "loesung": 5,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^4 = 16 reicht nicht, 2^5 = 32 ≥ 26. Also 5 Bits.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Bits brauchst du mindestens für 1000 verschiedene Werte?",
     "loesung": 10,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^9 = 512 < 1000, 2^10 = 1024 ≥ 1000. Also 10 Bits.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Wie viel ist 2^7?",
     "loesung": 128,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^7 = 2^6 · 2 = 64 · 2 = 128.",
     "q": "Lecture 2, S. 21"
    },
    {
     "typ": "zahl",
     "frage": "Wie viel ist 2^15?",
     "loesung": 32768,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^15 = 2^10 · 2^5 = 1024 · 32 = 32768.",
     "q": "Lecture 2, S. 21"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Bits hat ein Byte?",
     "loesung": 8,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Ein Byte sind 8 Bits und hat 2^8 = 256 Zustände.",
     "q": "Allgemeinwissen"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Zeilen hat eine Liste aller Kombinationen von 3 Bits?",
     "loesung": 8,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^3 = 8: 000, 001, 010, 011, 100, 101, 110, 111.",
     "q": "Lecture 1, S. 9"
    },
    {
     "typ": "zahl",
     "frage": "Wie viel ist 3K, wenn 1K = 1024?",
     "loesung": 3072,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "3 · 1024 = 3072.",
     "q": "Eigene Übung"
    },
    {
     "typ": "mc",
     "frage": "Was beschreibt die Abstraktion (Schnittstelle) eines Moduls?",
     "optionen": [
      "Wie das Modul intern verdrahtet ist",
      "Was das Modul tut",
      "Aus welchem Material der Chip ist",
      "Wie schnell das Modul ist"
     ],
     "richtig": 1,
     "erklaerung": "Die Abstraktion sagt, WAS ein Modul tut. Das WIE ist die Implementierung.",
     "q": "Intro, Folie 23"
    },
    {
     "typ": "mc",
     "frage": "Du baust ein neues Modul. Was benutzt du laut Vorlesung als Bausteine?",
     "optionen": [
      "Module der Ebene darüber",
      "Module der Ebene darunter, als fertige Bausteine",
      "Nur Transistoren",
      "Beliebige Module, Hauptsache es funktioniert"
     ],
     "richtig": 1,
     "erklaerung": "Beim Bauen nimmst du Module der Ebene darunter und ordnest sie so an, dass die gewünschte Funktion entsteht.",
     "q": "Intro, Folie 24"
    },
    {
     "typ": "mc",
     "frage": "Mit welchem einzelnen Gattertyp beginnt Nand to Tetris?",
     "optionen": [
      "AND",
      "OR",
      "NAND",
      "XOR"
     ],
     "richtig": 2,
     "erklaerung": "Aus NAND allein lässt sich jede boolesche Funktion bauen. Deshalb ist es der Startpunkt.",
     "q": "Lecture 1, S. 26–28"
    },
    {
     "typ": "mc",
     "frage": "Welche Aussage zur Klausurzulassung stimmt?",
     "optionen": [
      "80 % in jedem einzelnen Quiz",
      "80 % aller Quizpunkte zusammen",
      "Bestehen eines Probetests",
      "Keine Zulassung nötig"
     ],
     "richtig": 1,
     "erklaerung": "Gezählt werden 80 % aller Punkte über alle Quizze, nicht pro Quiz.",
     "q": "TechGI_01_intro, Folie 3"
    },
    {
     "typ": "mc",
     "frage": "Warum benutzen Computer gerade zwei Zustände pro Bit?",
     "optionen": [
      "Weil Mathematiker es so wollten",
      "Weil zwei Zustände (Spannung hoch oder niedrig) technisch einfach und robust zu unterscheiden sind",
      "Weil Dezimalzahlen nicht speicherbar sind",
      "Weil es schneller zu tippen ist"
     ],
     "richtig": 1,
     "erklaerung": "Zwei Spannungsstufen lassen sich zuverlässig unterscheiden. Mehr Stufen wären fehleranfälliger.",
     "q": "Lecture 1, S. 5"
    }
   ],
   "formeln": [
    {
     "name": "Zustände von N Bits",
     "tex": "\\text{Zustände} = 2^N",
     "text": "Jedes Bit verdoppelt die Anzahl der möglichen Bitmuster.",
     "q": "Lecture 1, S. 11",
     "bsp": "N = 3 → 8, N = 8 → 256, N = 16 → 65536"
    },
    {
     "name": "Benötigte Bits für n Werte",
     "tex": "N = \\lceil \\log_2 n \\rceil",
     "text": "Kleinstes N mit 2^N ≥ n.",
     "q": "Eigene Ergänzung",
     "bsp": "n = 100 → N = 7 (2^7 = 128)"
    },
    {
     "name": "Zweierpotenzen",
     "code": "2^0=1    2^4=16    2^8=256     2^12=4096\n2^1=2    2^5=32    2^9=512     2^13=8192\n2^2=4    2^6=64    2^10=1024   2^14=16384\n2^3=8    2^7=128   2^11=2048   2^15=32768\n                               2^16=65536",
     "text": "Auswendig können, kein Taschenrechner in der Klausur.",
     "q": "Lecture 2, S. 21"
    },
    {
     "name": "Einheiten",
     "code": "1 Byte    = 8 Bit\n1 Hack-Wort = 16 Bit\n1K        = 1024 = 2^10\n16K       = 16384 = 2^14",
     "text": "Byte und Wort.",
     "q": "Lecture 4, S. 22"
    },
    {
     "name": "Ebenen von Nand to Tetris (Hardware)",
     "code": "NAND -> Gatter -> ALU, RAM -> Computer -> Maschinensprache -> Assembler",
     "text": "Jede Ebene benutzt nur die darunter.",
     "q": "Intro, Folie 25"
    }
   ],
   "aufgaben": [
    {
     "titel": "Eigene Übung: Bits zählen",
     "q": "Eigene Übung",
     "text": "a) Wie viele Zustände haben 4, 6 und 12 Bits? b) Wie viele Bits brauchst du mindestens für 10, 64 und 65 verschiedene Werte?",
     "loesung": [
      "a) 2^4 = 16, 2^6 = 64, 2^12 = 4096.",
      "b) 10 Werte: 2^3 = 8 reicht nicht, 2^4 = 16 reicht. Also 4 Bits.",
      "64 Werte: 2^6 = 64 reicht genau. Also 6 Bits.",
      "65 Werte: 2^6 = 64 ist eins zu wenig, also 7 Bits (2^7 = 128)."
     ]
    },
    {
     "titel": "Eigene Übung: Abstraktion im Alltag",
     "q": "Eigene Übung",
     "text": "Nenne für eine Kaffeemaschine die Abstraktion (Schnittstelle) und Teile der Implementierung. Erkläre, warum man als Benutzer nur die Abstraktion braucht.",
     "loesung": [
      "Abstraktion: Knopf „Kaffee“, Wassertank, Ausgabe. Du weißt: Knopf drücken ergibt Kaffee.",
      "Implementierung: Pumpe, Heizspirale, Ventile, Steuerung. Das ist Sache des Herstellers.",
      "Als Benutzer reicht die Abstraktion, weil du nur wissen musst, was die Maschine tut. Der Hersteller könnte die Pumpe austauschen, ohne dass du etwas anders bedienen musst. Genau so kann man einen Chip intern anders bauen, solange die Schnittstelle gleich bleibt."
     ]
    }
   ]
  },
  {
   "id": "k1",
   "titel": "Kapitel 1: Boolesche Logik",
   "abschnitt": "Vorlesung Kapitel 1 (Boolean Logic), Blatt 01 (Tutorien ab 03.11.2026)",
   "seiten": "Lecture 1 (Boolean Logic), Buch Kapitel 1 (Nisan/Schocken), Aufgabenblatt 1 mit Lösungsvorschlag",
   "quellen": [
    {
     "name": "Lecture 1: Boolean Logic (Folien)",
     "pfad": "material/TGI/01 Boolean Logic/Lecture1.pdf"
    },
    {
     "name": "Buch Kapitel 1: Boolean Logic",
     "pfad": "material/TGI/01 Boolean Logic/Chapter1.pdf"
    },
    {
     "name": "Aufgabenblatt 1",
     "pfad": "material/TGI/01 Boolean Logic/Tutorium1.pdf"
    },
    {
     "name": "Aufgabenblatt 1: Lösungsvorschlag",
     "pfad": "material/TGI/01 Boolean Logic/Tutorium1_Lösung.pdf"
    },
    {
     "name": "Tutorium 1: Mitschrift (handschriftlich)",
     "pfad": "material/TGI/01 Boolean Logic/TuT_1.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Wahrheitswerte und boolesche Funktionen",
     "text": [
      "Boolesche Logik ist nach George Boole (1815–1864) benannt. Sie rechnet nicht mit Zahlen wie 7 oder 3,5, sondern nur mit zwei Werten: 0 (falsch, false) und 1 (wahr, true). Eine boolesche Variable (boolean variable) ist ein Platzhalter, der einen dieser beiden Werte hat, zum Beispiel x oder a.",
      "Eine boolesche Funktion (Boolean function) bekommt eine oder mehrere boolesche Variablen und liefert wieder 0 oder 1 (Lecture 1, S. 15). Alltagsbeispiel: „Ich gehe raus, wenn es nicht regnet UND ich Zeit habe.“ Eingaben sind „regnet“ und „Zeit“, Ausgabe ist „gehe raus“.",
      "Die einfachste Art, eine boolesche Funktion vollständig aufzuschreiben, ist die Wahrheitstabelle (truth table). Sie listet jede mögliche Kombination der Eingaben in einer Zeile und daneben das Ergebnis. Bei n Eingaben hat sie $2^n$ Zeilen, denn jede Eingabe kann 0 oder 1 sein (siehe Kapitel 0).",
      "So schreibst du die Zeilen ohne Lücken auf: Zähle in Binär von 0 bis $2^n - 1$. Die rechte Spalte wechselt in jeder Zeile, die mittlere alle 2 Zeilen, die linke alle 4 Zeilen. Diese Reihenfolge benutzen auch Folien und Buch.",
      "Einfache Funktionen wie AND nennt man auch Operatoren (operators), ihre Eingaben Operanden (operands). Statt f(x, y) schreibt man dann x f y, also „x And y“ statt „And(x, y)“ (Lecture 1, S. 15)."
     ],
     "code": "Beispiel: f(x, y) = 1 genau dann, wenn x = 1 und y = 1 (Lecture 1, S. 12–14)\n\nx  y | f\n-----+--\n0  0 | 0\n0  1 | 0\n1  0 | 0\n1  1 | 1",
     "merke": "Wahrheitstabelle mit n Eingaben: 2^n Zeilen, in Binär-Zählreihenfolge 00…0 bis 11…1."
    },
    {
     "titel": "Die drei Grundoperationen: AND, OR, NOT",
     "text": [
      "AND (Und, Konjunktion) liefert 1 nur dann, wenn beide Eingaben 1 sind. Alltagsbild: zwei Schalter hintereinander (in Reihe) vor einer Lampe. Die Lampe leuchtet nur, wenn beide Schalter an sind.",
      "OR (Oder, Disjunktion) liefert 1, wenn mindestens eine Eingabe 1 ist, also auch, wenn beide 1 sind. Alltagsbild: zwei Schalter nebeneinander (parallel). Einer reicht, damit die Lampe leuchtet.",
      "NOT (Nicht, Negation) hat nur eine Eingabe und dreht sie um: aus 0 wird 1, aus 1 wird 0.",
      "Schreibweisen: Die Folien schreiben And, Or, Not. Das Übungsblatt benutzt $a \\land b$ für And, $a \\lor b$ für Or und $\\neg a$ für Not. Das Buch schreibt $x \\cdot y$ (oder xy) für And, $x + y$ für Or und $\\bar{x}$ für Not. Gemeint ist immer dasselbe. Achtung: $+$ heißt hier Oder, nicht Plus. Es gilt also $1 + 1 = 1$.",
      "Ein Gatter (logic gate) ist ein Chip, der so eine Funktion in Hardware umsetzt (Lecture 1, S. 31). Elementare Gatter (elementary gates) sind Nand, And, Or, Not. Zusammengesetzte Gatter (composite gates) wie Mux oder Addierer baut man aus ihnen."
     ],
     "code": "a  b | a AND b  a OR b  NOT a\n-----------------------------\n0  0 |       0       0      1\n0  1 |       0       1      1\n1  0 |       0       1      0\n1  1 |       1       1      0",
     "merke": "AND: nur 1 und 1 ergibt 1. OR: mindestens eine 1 ergibt 1. NOT: dreht um."
    },
    {
     "titel": "NAND, NOR, XOR und die Zahl aller Funktionen",
     "text": [
      "NAND heißt Not-And: erst AND, dann das Ergebnis umdrehen. NAND liefert also nur bei 1 und 1 eine 0, sonst immer 1 (Lecture 1, S. 19). NOR ist Not-Or: nur bei 0 und 0 kommt 1 heraus.",
      "XOR (exclusive or, exklusives Oder) liefert 1, wenn die Eingaben verschieden sind, und 0, wenn sie gleich sind. Alltagsbild: eine Treppenhauslampe mit zwei Schaltern unten und oben. Jeder Schalter kann die Lampe umschalten. Das Gegenteil von XOR heißt Äquivalenz (equivalence, auch XNOR): 1, wenn beide Eingaben gleich sind.",
      "Als Formel aus AND, OR, NOT: $a \\text{ Xor } b = (a \\land \\neg b) \\lor (\\neg a \\land b)$ (Lecture 1, S. 39). Lies das so: „a ist 1 und b ist 0, oder a ist 0 und b ist 1“.",
      "Wie viele verschiedene Funktionen mit zwei Eingaben gibt es überhaupt? Die Tabelle hat 4 Zeilen. In jede Ergebniszeile kann man 0 oder 1 schreiben, also gibt es $2^4 = 16$ Möglichkeiten. Allgemein gibt es bei n Eingaben $2^{2^n}$ boolesche Funktionen (Lecture 1, S. 22). Bei 3 Eingaben sind das schon $2^8 = 256$."
     ],
     "code": "a  b | a NAND b  a NOR b  a XOR b\n---------------------------------\n0  0 |        1        1        0\n0  1 |        1        0        1\n1  0 |        1        0        1\n1  1 |        0        0        0",
     "merke": "NAND = Not(And): nur 1,1 ergibt 0. XOR: 1 bei verschiedenen Eingaben. Bei n Eingaben gibt es 2^(2^n) Funktionen."
    },
    {
     "titel": "Ausdrücke auswerten und Tabellen aufstellen",
     "text": [
      "Ein boolescher Ausdruck (Boolean expression) verbindet Variablen mit Operatoren, zum Beispiel $(x \\lor y) \\land \\neg z$. Auswerten heißt: Werte einsetzen und von innen nach außen rechnen, genau wie bei Klammern in der Schule.",
      "Beispiel aus der Vorlesung (Lecture 1, S. 24): Not(x Or (y And z)) für x = 0, y = 1, z = 1. Schritt 1: innere Klammer y And z = 1 And 1 = 1. Schritt 2: x Or 1 = 0 Or 1 = 1. Schritt 3: Not(1) = 0. Ergebnis 0.",
      "Ohne Klammern gilt üblicherweise: Not bindet am stärksten, dann And, dann Or (wie Punkt- vor Strichrechnung). Setz in der Klausur lieber Klammern, dann gibt es keine Missverständnisse.",
      "Für die ganze Wahrheitstabelle gehst du Zeile für Zeile vor. Tipp: Lege für jeden Teilausdruck eine Hilfsspalte an. Das ist zwar mehr Schreibarbeit, aber du machst kaum Fehler. Unten das Beispiel aus dem Buch (Figure 1.1): $f(x,y,z) = (x \\lor y) \\land \\neg z$. Die Hilfsspalten sind „x OR y“ und „NOT z“, f ist ihr AND."
     ],
     "code": "x  y  z | x OR y  NOT z  f\n--------------------------\n0  0  0 |      0      1  0\n0  0  1 |      0      0  0\n0  1  0 |      1      1  1\n0  1  1 |      1      0  0\n1  0  0 |      1      1  1\n1  0  1 |      1      0  0\n1  1  0 |      1      1  1\n1  1  1 |      1      0  0",
     "merke": "Von innen nach außen auswerten. Für Tabellen Hilfsspalten pro Teilausdruck anlegen."
    },
    {
     "titel": "Die Gesetze der Booleschen Algebra",
     "text": [
      "Mit Zahlen gibt es Rechenregeln wie a + b = b + a. Für boolesche Ausdrücke gibt es ähnliche Gesetze. Mit ihnen formt man Ausdrücke um, ohne die Funktion zu ändern. Zwei Ausdrücke sind gleich (äquivalent), wenn sie in jeder Zeile der Wahrheitstabelle dasselbe Ergebnis liefern. Genau so kannst du jedes Gesetz prüfen.",
      "Kommutativgesetz: Reihenfolge egal, $a \\land b = b \\land a$. Assoziativgesetz: Klammerung egal bei gleichem Operator, $(a \\land b) \\land c = a \\land (b \\land c)$. Distributivgesetz: ausmultiplizieren, $a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$. Anders als bei Zahlen geht es auch umgekehrt: $a \\lor (b \\land c) = (a \\lor b) \\land (a \\lor c)$.",
      "De-Morgan-Gesetze: Ein Not über einer Klammer wandert hinein, und dabei wird And zu Or und Or zu And. $\\neg(a \\land b) = \\neg a \\lor \\neg b$ und $\\neg(a \\lor b) = \\neg a \\land \\neg b$. Alltagsbild: „Nicht (Kaffee und Kuchen)“ heißt „kein Kaffee oder kein Kuchen“.",
      "Komplementärgesetz: $a \\land \\neg a = 0$ (etwas kann nicht zugleich wahr und falsch sein) und $a \\lor \\neg a = 1$. Extremalgesetz: $a \\land 0 = 0$, $a \\lor 1 = 1$, $a \\land 1 = a$, $a \\lor 0 = a$. Idempotenz: $a \\land a = a$, $a \\lor a = a$. Doppelnegation: $\\neg\\neg a = a$.",
      "Diese Liste steht als Cheatsheet auf Blatt 01. Ein nützliches Zusatzgesetz ist die Absorption: $a \\land (a \\lor b) = a$. Man kann es aus den anderen herleiten: $a \\land (a \\lor b) = (a \\lor 0) \\land (a \\lor b) = a \\lor (0 \\land b) = a \\lor 0 = a$."
     ],
     "code": "Prüfung von De Morgan per Wahrheitstabelle:\n\na  b | a AND b  NOT(a AND b)  NOT a OR NOT b\n--------------------------------------------\n0  0 |       0             1               1\n0  1 |       0             1               1\n1  0 |       0             1               1\n1  1 |       1             0               0\n\nDie letzten beiden Spalten sind in jeder Zeile gleich, also ist das Gesetz richtig.",
     "merke": "De Morgan: Not wandert in die Klammer, And und Or tauschen. Äquivalenz prüft man über die Wahrheitstabelle."
    },
    {
     "titel": "Ausdrücke vereinfachen, Schritt für Schritt",
     "text": [
      "Vereinfachen heißt: einen Ausdruck mit den Gesetzen so umformen, dass weniger Operatoren übrig bleiben. Weniger Operatoren bedeuten weniger Gatter, also eine billigere und schnellere Schaltung.",
      "Vorgehen: 1. Not-Klammern mit De Morgan auflösen. 2. Gemeinsame Variablen mit dem Distributivgesetz ausklammern. 3. Nach $a \\land \\neg a$ oder $a \\lor \\neg a$ suchen und durch 0 oder 1 ersetzen. 4. Mit dem Extremalgesetz die 0 und 1 wegräumen. Schreib bei jedem Schritt das Gesetz dazu, so wie im Lösungsvorschlag von Blatt 01.",
      "Beispiel 1 im Kasten: $(a \\land b) \\lor (a \\land \\neg b)$. Das a steckt in beiden Teilen, also ausklammern. Dann steht $b \\lor \\neg b$ da, und das ist immer 1.",
      "Beispiel 2: $\\neg(\\neg a \\lor b) \\lor b$. Erst De Morgan, dann das Distributivgesetz in der Oder-Form.",
      "Zum Schluss immer kurz testen: Setz eine Zeile ein, zum Beispiel a = 1, b = 0, und vergleiche Anfang und Ende. Stimmt eine Zeile nicht, ist irgendwo ein Fehler."
     ],
     "code": "Beispiel 1:\n  (a ∧ b) ∨ (a ∧ ¬b)\n= a ∧ (b ∨ ¬b)          Distributivgesetz (a ausklammern)\n= a ∧ 1                 Komplementärgesetz\n= a                     Extremalgesetz\n\nBeispiel 2:\n  ¬(¬a ∨ b) ∨ b\n= (¬¬a ∧ ¬b) ∨ b        De Morgan\n= (a ∧ ¬b) ∨ b          Doppelnegation\n= (a ∨ b) ∧ (¬b ∨ b)    Distributivgesetz (Oder-Form)\n= (a ∨ b) ∧ 1           Komplementärgesetz\n= a ∨ b                 Extremalgesetz\n\nTest Beispiel 2 mit a = 0, b = 0: Anfang ¬(1 ∨ 0) ∨ 0 = 0, Ende 0 ∨ 0 = 0. Passt.",
     "merke": "Reihenfolge: De Morgan, ausklammern, a ∧ ¬a bzw. a ∨ ¬a ersetzen, 0 und 1 wegräumen. Am Ende eine Zeile testen."
    },
    {
     "titel": "Von der Tabelle zur Formel: Normalformen",
     "text": [
      "Oft ist nur die Wahrheitstabelle gegeben, und du sollst eine Formel finden. Dafür gibt es ein Verfahren, das immer funktioniert: die kanonische Darstellung (canonical representation), auch disjunktive Normalform (DNF) genannt (Buch Kapitel 1, Lecture 1 S. 26).",
      "Ein Literal ist eine Variable oder ihre Negation, also x oder $\\neg x$. Vorgehen: 1. Such alle Zeilen, in denen f = 1 ist. 2. Bilde für jede solche Zeile einen Term, der nur genau in dieser Zeile 1 ist: alle Variablen mit And verbinden, und jede Variable, die in der Zeile 0 ist, mit Not versehen. 3. Verbinde alle Terme mit Or.",
      "Warum funktioniert das? Jeder Term ist ein „Detektor“ für genau eine Zeile. Das Or sagt: f ist 1, wenn irgendeiner der Detektoren anschlägt. Daraus folgt der wichtige Satz: Jede boolesche Funktion lässt sich mit And, Or und Not allein schreiben.",
      "Im Kasten das Beispiel aus dem Buch: f ist 1 in den Zeilen 010, 100 und 110. Die DNF ist oft lang. Man kann sie danach mit den Gesetzen vereinfachen. Hier kommt am Ende $(x \\lor y) \\land \\neg z$ heraus.",
      "Ergänzung (nicht auf den Folien): Die konjunktive Normalform (KNF) geht spiegelbildlich. Man nimmt die Zeilen mit f = 0, bildet für jede einen Oder-Term, der nur dort 0 ist (Variablen, die in der Zeile 1 sind, bekommen ein Not), und verbindet die Terme mit And."
     ],
     "code": "f aus Buch Figure 1.1, Zeilen mit f = 1:\n\nx y z | f   Term\n0 1 0 | 1   ¬x ∧ y ∧ ¬z\n1 0 0 | 1   x ∧ ¬y ∧ ¬z\n1 1 0 | 1   x ∧ y ∧ ¬z\n\nDNF: f = (¬x ∧ y ∧ ¬z) ∨ (x ∧ ¬y ∧ ¬z) ∨ (x ∧ y ∧ ¬z)\n\nVereinfachen: ¬z steckt überall, also ausklammern:\nf = ¬z ∧ ((¬x ∧ y) ∨ (x ∧ ¬y) ∨ (x ∧ y))\n  = ¬z ∧ (x ∨ y)        (die Klammer ist 1, sobald x oder y 1 ist)",
     "merke": "DNF: pro 1-Zeile ein And-Term aller Variablen (0 → Not), alle Terme mit Or verbinden."
    },
    {
     "titel": "Alles aus NAND",
     "text": [
      "Jetzt der Grund, warum Nand to Tetris mit NAND anfängt. Satz (Lecture 1, S. 26): Jede boolesche Funktion lässt sich nur mit NAND-Gattern bauen. Man sagt: NAND ist funktional vollständig (universal).",
      "Beweisidee in drei Schritten. 1. Not geht mit NAND: $\\text{Not}(x) = x \\text{ Nand } x$. Wenn beide Eingaben gleich sind, ist And(x, x) = x, und das Not dreht es um. 2. And geht: $x \\text{ And } y = \\text{Not}(x \\text{ Nand } y)$, und das Not baust du wie in Schritt 1. 3. Or geht mit De Morgan: $x \\text{ Or } y = \\text{Not}(\\text{Not}(x) \\text{ And } \\text{Not}(y)) = (x \\text{ Nand } x) \\text{ Nand } (y \\text{ Nand } y)$.",
      "Da jede Funktion als DNF aus And, Or und Not geschrieben werden kann (vorige Lektion) und diese drei aus NAND gehen, geht alles aus NAND. Praktische Folge: Wer ein gutes physisches NAND-Gatter hat, kann daraus jeden Chip und damit einen ganzen Computer bauen. Dasselbe gilt übrigens auch für NOR.",
      "Rezept für Aufgaben wie Blatt 01, 3.1: Formel so umformen, dass nur noch Nand vorkommt. Dazu immer wieder die drei Ersetzungen oben benutzen. Für Oder mit Not hilft De Morgan direkt: $a \\lor \\neg b = \\neg(\\neg a \\land b) = (\\neg a) \\text{ Nand } b$.",
      "Ein eigenes Beispiel: XOR aus vier NAND-Gattern. Der Kasten rechnet alle vier Zeilen durch."
     ],
     "code": "XOR aus 4 NAND-Gattern:\n  t   = a Nand b\n  u   = a Nand t\n  v   = b Nand t\n  out = u Nand v\n\na  b | t  u=a NAND t  v=b NAND t  out\n-------------------------------------\n0  0 | 1           1           1    0\n0  1 | 1           1           0    1\n1  0 | 1           0           1    1\n1  1 | 0           1           1    0\n\nDie Spalte out ist genau XOR (0, 1, 1, 0).",
     "merke": "Not(x) = x Nand x. And = Not(Nand). Or(x, y) = (x Nand x) Nand (y Nand y)."
    },
    {
     "titel": "Multiplexer (Mux) und Demultiplexer (DMux)",
     "text": [
      "Ein Multiplexer (Mux) ist ein Umschalter. Er hat zwei Dateneingänge a und b und einen Auswahleingang sel (selection bit). Ist sel = 0, gibt er a aus, ist sel = 1, gibt er b aus (Buch Kapitel 1). Alltagsbild: der Eingangswahlschalter am Fernseher, der entscheidet, ob du HDMI 1 oder HDMI 2 siehst.",
      "Als Formel: $\\text{out} = (a \\land \\neg sel) \\lor (b \\land sel)$. Lies das so: Wenn sel = 0, ist der rechte Teil 0 und der linke ist a. Wenn sel = 1, ist der linke Teil 0 und der rechte ist b.",
      "Ein Demultiplexer (DMux) macht das Gegenteil: Er hat einen Eingang in und leitet ihn je nach sel an einen von zwei Ausgängen. sel = 0: a = in, b = 0. sel = 1: a = 0, b = in. Formeln: $a = in \\land \\neg sel$, $b = in \\land sel$. Alltagsbild: eine Weiche bei der Eisenbahn.",
      "Mehrwege-Varianten: Ein Mux4Way16 wählt mit zwei Auswahlbits sel[1..0] einen von vier 16-Bit-Eingängen: 00 → a, 01 → b, 10 → c, 11 → d. Ein Mux8Way16 braucht drei Auswahlbits. Allgemein braucht man für m Eingänge $\\log_2 m$ Auswahlbits.",
      "Warum ist das wichtig? In Kapitel 3 liest der Arbeitsspeicher (RAM) mit einem Mux aus genau einem Register und schreibt mit einem DMux in genau ein Register. Der Mux ist also die Grundlage dafür, Speicher über eine Adresse anzusprechen."
     ],
     "code": "Mux, vollständige Wahrheitstabelle:\n\na  b  sel | out\n---------------\n0  0    0 |   0\n0  0    1 |   0\n0  1    0 |   0\n0  1    1 |   1\n1  0    0 |   1\n1  0    1 |   0\n1  1    0 |   1\n1  1    1 |   1\n\nKurz: sel = 0 -> out = a, sel = 1 -> out = b\n\nDMux:   sel | a   b\n         0  | in  0\n         1  | 0   in",
     "merke": "Mux: sel wählt, welcher Eingang durchkommt. DMux: sel wählt, zu welchem Ausgang der Eingang geht."
    },
    {
     "titel": "Busse und Mehrbit-Gatter",
     "text": [
      "Oft will man nicht ein Bit, sondern eine ganze Reihe von Bits gemeinsam behandeln, zum Beispiel eine 16-Bit-Zahl. Eine solche Gruppe von Leitungen heißt Bus (bus) (Lecture 1, S. 50). Alltagsbild: ein Flachbandkabel mit 16 Adern.",
      "Die Bits eines Busses werden von rechts nach links nummeriert, beginnend bei 0. Bit 0 ganz rechts ist das niedrigstwertige Bit (LSB, least significant bit), das Bit ganz links das höchstwertige (MSB, most significant bit). Bei a = 0110 ist also a[0] = 0, a[1] = 1, a[2] = 1, a[3] = 0.",
      "Mehrbit-Gatter (multi-bit gates) wenden ein Gatter auf jede Stelle einzeln an. And16 verknüpft a[0] mit b[0], a[1] mit b[1] und so weiter. Man nennt das bitweise (bit-wise). Mux16 schaltet einen ganzen 16-Bit-Bus um, mit nur einem sel-Bit für alle 16 Stellen.",
      "Mehrwege-Gatter (multi-way gates) verknüpfen alle Bits eines Busses zu einem Ergebnis. Or8Way liefert 1, wenn mindestens eines der 8 Eingangsbits 1 ist. And4Way aus der Vorlesung liefert 1 nur, wenn alle 4 Bits 1 sind. Man baut es als Kette: erst a[0] And a[1], das Ergebnis And a[2], das Ergebnis And a[3] (Lecture 1, S. 56)."
     ],
     "code": "Bitweises And von 4-Bit-Bussen (And4):\n\nIndex:   3 2 1 0\na:       1 1 0 0\nb:       1 0 1 0\nout:     1 0 0 0     (out[i] = a[i] And b[i])\n\nOr8Way(00100000) = 1   (eine 1 reicht)\nOr8Way(00000000) = 0",
     "merke": "Bus = mehrere Bits als Einheit. a[0] ist das rechte Bit (LSB). Mehrbit-Gatter arbeiten bitweise."
    },
    {
     "titel": "Chips beschreiben: HDL",
     "text": [
      "Wie beschreibt man einen Chip, bevor man ihn baut? Mit einer Hardwarebeschreibungssprache (HDL, hardware description language) (Lecture 1, S. 47). Im Kurs gibt es eine einfache HDL aus dem Buch, in der Praxis nutzt man zum Beispiel VHDL oder Verilog.",
      "Eine HDL-Datei hat drei Teile: den Namen (CHIP), die Ein- und Ausgänge (IN, OUT) und die Bauteile (PARTS). Jede Zeile in PARTS ist ein Gatter, das mit benannten Leitungen verbunden wird. Eine Leitung wie nota ist eine interne Verbindung, eine Art Draht mit Namen.",
      "Die HDL ist beschreibend (deklarativ), nicht ein Ablaufplan. Die Reihenfolge der Zeilen spielt keine Rolle (Lecture 1, S. 47). Es wird nichts „nacheinander ausgeführt“, sondern ein Schaltplan als Text beschrieben.",
      "Der Ablauf beim Chipbau (Lecture 1, S. 37): Architektur entwerfen, in HDL beschreiben, im Hardware-Simulator testen, optimieren, in Silizium umsetzen. Unten der Xor-Chip aus der Vorlesung. Er setzt genau die Formel $(a \\land \\neg b) \\lor (\\neg a \\land b)$ um."
     ],
     "code": "CHIP Xor {\n    IN a, b;\n    OUT out;\n    PARTS:\n    Not (in=a, out=nota);\n    Not (in=b, out=notb);\n    And (a=a, b=notb, out=aAndNotb);\n    And (a=nota, b=b, out=notaAndb);\n    Or  (a=aAndNotb, b=notaAndb, out=out);\n}",
     "merke": "HDL beschreibt einen Schaltplan als Text. Die Reihenfolge der Zeilen ist egal."
    }
   ],
   "zusammenfassung": [
    "Boolesche Werte: 0 (falsch) und 1 (wahr). Eine boolesche Funktion bildet Bits auf ein Bit ab.",
    "Wahrheitstabelle mit n Eingaben hat 2^n Zeilen. Es gibt 2^(2^n) verschiedene Funktionen, bei n = 2 also 16.",
    "AND: nur 1,1 → 1. OR: mindestens eine 1 → 1. NOT: umdrehen. NAND: nur 1,1 → 0. XOR: verschieden → 1.",
    "Gesetze: kommutativ, assoziativ, distributiv (beide Richtungen), De Morgan, Komplementär, Extremal, Idempotenz, Doppelnegation.",
    "Vereinfachen: De Morgan, ausklammern, a ∧ ¬a = 0 bzw. a ∨ ¬a = 1, Extremalgesetz. Am Ende eine Zeile testen.",
    "DNF: pro 1-Zeile ein And-Term aller Variablen, Terme mit Or verbinden. Daher reichen And, Or, Not für jede Funktion.",
    "NAND ist universal: Not(x) = x Nand x, And = Not(Nand), Or über De Morgan. Also lässt sich jeder Computer aus NAND bauen.",
    "Mux: sel = 0 → a, sel = 1 → b. DMux leitet in auf a oder b. m Eingänge brauchen log2(m) Auswahlbits.",
    "Bus: Gruppe von Bits, a[0] ist das LSB rechts. Mehrbit-Gatter arbeiten bitweise.",
    "HDL beschreibt Chips deklarativ. Die Reihenfolge der Zeilen spielt keine Rolle."
   ],
   "karten": [
    {
     "f": "Wie viele Zeilen hat eine Wahrheitstabelle mit n Eingängen?",
     "a": "2^n. Bei 3 Eingängen 8 Zeilen, bei 4 Eingängen 16.",
     "q": "Buch Kapitel 1"
    },
    {
     "f": "Wie viele boolesche Funktionen mit n Eingängen gibt es?",
     "a": "2^(2^n). Bei n = 2 sind es 2^4 = 16.",
     "q": "Lecture 1, S. 22"
    },
    {
     "f": "Wahrheitstabelle von NAND?",
     "a": "00 → 1, 01 → 1, 10 → 1, 11 → 0. Also Not(And).",
     "q": "Lecture 1, S. 19",
     "acode": "a b | NAND\n0 0 |  1\n0 1 |  1\n1 0 |  1\n1 1 |  0"
    },
    {
     "f": "Wann liefert XOR eine 1?",
     "a": "Wenn die beiden Eingaben verschieden sind (01 oder 10).",
     "q": "Lecture 1, S. 20"
    },
    {
     "f": "XOR als Formel aus And, Or, Not?",
     "a": "(a ∧ ¬b) ∨ (¬a ∧ b)",
     "q": "Lecture 1, S. 39"
    },
    {
     "f": "Die beiden De-Morgan-Gesetze?",
     "a": "¬(a ∧ b) = ¬a ∨ ¬b und ¬(a ∨ b) = ¬a ∧ ¬b. Not wandert hinein, And und Or tauschen.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "f": "Distributivgesetz in beiden Formen?",
     "a": "a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c) und a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c).",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "f": "Komplementär- und Extremalgesetz?",
     "a": "a ∧ ¬a = 0, a ∨ ¬a = 1. a ∧ 0 = 0, a ∨ 1 = 1, a ∧ 1 = a, a ∨ 0 = a.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "f": "Wie prüfst du, ob zwei Ausdrücke gleich sind?",
     "a": "Beide Wahrheitstabellen aufstellen. Gleich, wenn sie in jeder Zeile dasselbe Ergebnis liefern.",
     "q": "Buch Kapitel 1"
    },
    {
     "f": "Wie bildest du die DNF (kanonische Darstellung) aus einer Tabelle?",
     "a": "Für jede Zeile mit f = 1 einen And-Term aller Variablen bilden, Variablen mit Wert 0 negieren. Alle Terme mit Or verbinden.",
     "q": "Buch Kapitel 1; Lecture 1, S. 26"
    },
    {
     "f": "Not, And und Or nur aus NAND?",
     "a": "Not(x) = x Nand x. x And y = (x Nand y) Nand (x Nand y). x Or y = (x Nand x) Nand (y Nand y).",
     "q": "Lecture 1, S. 26; Buch Kapitel 1"
    },
    {
     "f": "Warum kann man jeden Computer aus NAND bauen?",
     "a": "Jede Funktion ist als DNF aus And, Or, Not darstellbar, und diese drei lassen sich aus NAND bauen. Ein Computer realisiert boolesche Funktionen.",
     "q": "Lecture 1, S. 26–28"
    },
    {
     "f": "Was macht ein Mux?",
     "a": "Gibt a aus, wenn sel = 0, und b, wenn sel = 1. Formel: (a ∧ ¬sel) ∨ (b ∧ sel).",
     "q": "Buch Kapitel 1"
    },
    {
     "f": "Was macht ein DMux?",
     "a": "Leitet in an a (sel = 0) oder b (sel = 1) weiter. Der andere Ausgang ist 0.",
     "q": "Buch Kapitel 1"
    },
    {
     "f": "Was ist ein Bus? Was sind LSB und MSB?",
     "a": "Eine Gruppe von Bits, die als Einheit behandelt wird. LSB = Bit 0 ganz rechts (niedrigstwertig), MSB = Bit ganz links (höchstwertig).",
     "q": "Lecture 1, S. 50"
    },
    {
     "f": "Was macht Or8Way?",
     "a": "Liefert 1, wenn mindestens eines der 8 Eingangsbits 1 ist.",
     "q": "Buch Kapitel 1"
    },
    {
     "f": "Spielt in HDL die Reihenfolge der Zeilen eine Rolle?",
     "a": "Nein. HDL ist deklarativ und beschreibt einen Schaltplan als Text.",
     "q": "Lecture 1, S. 47"
    },
    {
     "f": "Wie viele Auswahlbits braucht ein Mux mit 8 Eingängen?",
     "a": "3, denn 2^3 = 8 (Mux8Way16 hat sel[3]).",
     "q": "Buch Kapitel 1"
    }
   ],
   "quiz": [
    {
     "typ": "zahl",
     "frage": "Berechne (a ∨ ¬b) ∧ c für a = 0, b = 0, c = 1.",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Schritt 1: ¬b = ¬0 = 1. Schritt 2: a ∨ 1 = 0 ∨ 1 = 1. Schritt 3: 1 ∧ c = 1 ∧ 1 = 1.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Berechne Not(x And y) Or z für x = 1, y = 1, z = 0.",
     "loesung": 0,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x And y = 1. Not(1) = 0. 0 Or z = 0 Or 0 = 0.",
     "q": "Eigene Übung (wie Lecture 1, S. 24)"
    },
    {
     "typ": "zahl",
     "frage": "Berechne Not(x Or (y And z)) für x = 0, y = 1, z = 1.",
     "loesung": 0,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "y And z = 1. x Or 1 = 1. Not(1) = 0.",
     "q": "Lecture 1, S. 24"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Zeilen hat die Wahrheitstabelle einer Funktion mit 4 Eingängen?",
     "loesung": 16,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^4 = 16.",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele verschiedene boolesche Funktionen mit 3 Eingängen gibt es?",
     "loesung": 256,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Die Tabelle hat 2^3 = 8 Zeilen. In jede kann 0 oder 1 stehen: 2^8 = 256.",
     "q": "Lecture 1, S. 22"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele NAND-Gatter brauchst du mindestens für ein AND?",
     "loesung": 2,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x And y = Not(x Nand y). Ein NAND für x Nand y, ein zweites als Not: (x Nand y) Nand (x Nand y).",
     "q": "Lecture 1, S. 26"
    },
    {
     "typ": "zahl",
     "frage": "Ein Mux hat a = 0, b = 1, sel = 1. Welchen Wert hat out?",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "sel = 1 wählt b. out = b = 1.",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "zahl",
     "frage": "Gatterkette: x = 1 geht in ein NOT, dessen Ausgang mit y = 0 in ein OR, dessen Ausgang in ein NOT. Welchen Wert hat der Ausgang?",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "NOT(1) = 0. 0 OR 0 = 0. NOT(0) = 1.",
     "q": "Eigene Übung"
    },
    {
     "typ": "mc",
     "frage": "Welche Wahrheitstabelle (Ergebnisspalte für ab = 00, 01, 10, 11) hat XOR?",
     "optionen": [
      "0001",
      "0111",
      "0110",
      "1110"
     ],
     "richtig": 2,
     "erklaerung": "XOR ist 1 bei verschiedenen Eingaben: 00 → 0, 01 → 1, 10 → 1, 11 → 0. 0001 ist AND, 0111 ist OR, 1110 ist NAND.",
     "q": "Lecture 1, S. 20"
    },
    {
     "typ": "mc",
     "frage": "Vereinfache ¬(a ∧ ¬b) ∧ a.",
     "optionen": [
      "a",
      "a ∧ b",
      "a ∨ b",
      "0"
     ],
     "richtig": 1,
     "erklaerung": "De Morgan: ¬(a ∧ ¬b) = ¬a ∨ b. Dann (¬a ∨ b) ∧ a = (¬a ∧ a) ∨ (b ∧ a) = 0 ∨ (a ∧ b) = a ∧ b. Test a = 1, b = 0: Anfang ¬(1 ∧ 1) ∧ 1 = 0, Ende 1 ∧ 0 = 0.",
     "q": "Eigene Übung"
    },
    {
     "typ": "text",
     "frage": "Vereinfache (a ∨ b) ∧ (a ∨ ¬b) so weit wie möglich. Gib nur den Ergebnisausdruck an.",
     "loesung": [
      "a",
      "(a)"
     ],
     "erklaerung": "Distributivgesetz rückwärts: (a ∨ b) ∧ (a ∨ ¬b) = a ∨ (b ∧ ¬b) = a ∨ 0 = a.",
     "q": "Eigene Übung"
    },
    {
     "typ": "mc",
     "frage": "Welches Gesetz wurde benutzt: ¬(a ∨ b) = ¬a ∧ ¬b?",
     "optionen": [
      "Distributivgesetz",
      "De-Morgan-Gesetz",
      "Idempotenzgesetz",
      "Komplementärgesetz"
     ],
     "richtig": 1,
     "erklaerung": "Not über einer Oder-Klammer wird zu einem And der negierten Variablen: De Morgan.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "typ": "mc",
     "frage": "Welcher Ausdruck ist gleich x Or y?",
     "optionen": [
      "(x Nand y) Nand (x Nand y)",
      "(x Nand x) Nand (y Nand y)",
      "x Nand y",
      "Not(x) Nand y"
     ],
     "richtig": 1,
     "erklaerung": "Nach De Morgan ist x Or y = Not(Not x And Not y) = (Not x) Nand (Not y) = (x Nand x) Nand (y Nand y). Option 1 ist And, Option 3 ist Nand, Option 4 ist x Or Not(y).",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "mc",
     "frage": "Ein DMux bekommt in = 1 und sel = 0. Was liegt an den Ausgängen?",
     "optionen": [
      "a = 1, b = 0",
      "a = 0, b = 1",
      "a = 1, b = 1",
      "a = 0, b = 0"
     ],
     "richtig": 0,
     "erklaerung": "sel = 0 leitet in an a weiter, b bleibt 0.",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "mc",
     "frage": "Ein Mux4Way16 bekommt sel = 10. Welcher Eingang wird ausgegeben?",
     "optionen": [
      "a",
      "b",
      "c",
      "d"
     ],
     "richtig": 2,
     "erklaerung": "00 → a, 01 → b, 10 → c, 11 → d.",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "text",
     "frage": "Bitweises AND der 4-Bit-Busse a = 1100 und b = 1010. Was ist out?",
     "loesung": [
      "1000"
     ],
     "erklaerung": "Stelle für Stelle: 1∧1 = 1, 1∧0 = 0, 0∧1 = 0, 0∧0 = 0. Ergebnis 1000.",
     "q": "Lecture 1, S. 57"
    },
    {
     "typ": "zahl",
     "frage": "Der Bus a hat den Wert 0110 (links a[3], rechts a[0]). Welchen Wert hat a[1]?",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Von rechts gezählt: a[0] = 0, a[1] = 1, a[2] = 1, a[3] = 0.",
     "q": "Lecture 1, S. 50"
    },
    {
     "typ": "mc",
     "frage": "Eine Funktion f(x, y) ist genau in den Zeilen 01 und 10 gleich 1. Welche DNF stimmt?",
     "optionen": [
      "(x ∧ y) ∨ (¬x ∧ ¬y)",
      "(¬x ∧ y) ∨ (x ∧ ¬y)",
      "x ∨ y",
      "¬x ∧ ¬y"
     ],
     "richtig": 1,
     "erklaerung": "Zeile 01: x = 0, y = 1 → ¬x ∧ y. Zeile 10 → x ∧ ¬y. Mit Or verbinden. Das ist XOR.",
     "q": "Buch Kapitel 1"
    },
    {
     "typ": "mc",
     "frage": "Spielt in der HDL des Kurses die Reihenfolge der PARTS-Zeilen eine Rolle?",
     "optionen": [
      "Ja, sie werden von oben nach unten ausgeführt",
      "Nein, HDL beschreibt einen Schaltplan deklarativ",
      "Nur bei Not-Gattern",
      "Nur bei Bussen"
     ],
     "richtig": 1,
     "erklaerung": "HDL ist deklarativ. Die Zeilen beschreiben Bauteile und Verbindungen, keine Abfolge.",
     "q": "Lecture 1, S. 47"
    },
    {
     "typ": "zahl",
     "frage": "Berechne f(x, y, z) = (x ∨ y) ∧ ¬z für x = 1, y = 0, z = 1.",
     "loesung": 0,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x ∨ y = 1. ¬z = 0. 1 ∧ 0 = 0. (Buch Figure 1.1, Zeile 101.)",
     "q": "Buch Kapitel 1, Figure 1.1"
    }
   ],
   "formeln": [
    {
     "name": "Kommutativ- und Assoziativgesetz",
     "tex": "a \\land b = b \\land a,\\quad (a \\land b) \\land c = a \\land (b \\land c)\\quad(\\text{ebenso mit } \\lor)",
     "text": "Reihenfolge und Klammerung sind bei gleichem Operator egal.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "name": "Distributivgesetz",
     "tex": "a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c),\\quad a \\lor (b \\land c) = (a \\lor b) \\land (a \\lor c)",
     "text": "Gilt in beiden Richtungen, anders als bei Zahlen.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "name": "De-Morgan-Gesetze",
     "tex": "\\neg(a \\land b) = \\neg a \\lor \\neg b,\\quad \\neg(a \\lor b) = \\neg a \\land \\neg b",
     "text": "Not wandert in die Klammer, And und Or tauschen.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "name": "Komplementär- und Extremalgesetz",
     "tex": "a \\land \\neg a = 0,\\; a \\lor \\neg a = 1,\\; a \\land 0 = 0,\\; a \\lor 1 = 1,\\; a \\land 1 = a,\\; a \\lor 0 = a",
     "text": "Damit räumst du nach dem Ausklammern auf.",
     "q": "Blatt 01, Cheatsheet"
    },
    {
     "name": "Idempotenz, Doppelnegation, Absorption",
     "tex": "a \\land a = a,\\; a \\lor a = a,\\; \\neg\\neg a = a,\\; a \\land (a \\lor b) = a",
     "text": "Absorption ist nicht auf dem Cheatsheet, lässt sich aber herleiten.",
     "q": "Blatt 01, Cheatsheet; Absorption eigene Ergänzung"
    },
    {
     "name": "Alles aus NAND",
     "code": "Not(x)    = x Nand x\nx And y   = (x Nand y) Nand (x Nand y)\nx Or y    = (x Nand x) Nand (y Nand y)\nx Or ¬y   = (x Nand x) Nand y",
     "text": "Grundlage von Nand to Tetris.",
     "q": "Lecture 1, S. 26; Buch Kapitel 1"
    },
    {
     "name": "XOR",
     "tex": "a \\oplus b = (a \\land \\neg b) \\lor (\\neg a \\land b)",
     "text": "1 bei verschiedenen Eingaben.",
     "q": "Lecture 1, S. 39"
    },
    {
     "name": "Mux und DMux",
     "tex": "\\text{Mux: } out = (a \\land \\neg sel) \\lor (b \\land sel),\\quad \\text{DMux: } a = in \\land \\neg sel,\\; b = in \\land sel",
     "text": "sel wählt den Eingang bzw. Ausgang.",
     "q": "Buch Kapitel 1"
    },
    {
     "name": "Anzahl Zeilen und Funktionen",
     "tex": "\\text{Zeilen} = 2^n,\\quad \\text{Funktionen} = 2^{2^n}",
     "text": "n Eingänge.",
     "q": "Lecture 1, S. 22",
     "bsp": "n = 2: 4 Zeilen, 16 Funktionen"
    },
    {
     "name": "HDL-Grundgerüst",
     "code": "CHIP Name {\n    IN a, b;\n    OUT out;\n    PARTS:\n    Gatter(eingang=leitung, out=leitung);\n}",
     "text": "Schnittstelle oben, Bauteile unten.",
     "q": "Lecture 1, S. 39–45"
    }
   ],
   "aufgaben": [
    {
     "titel": "Blatt 01, Aufgabe 3.1: Boolesche Funktion als Schaltnetz (nur NAND)",
     "q": "Aufgabenblatt 1, Aufgabe 3.1 mit Lösungsvorschlag",
     "text": "Implementiere die folgenden Formeln ausschließlich mit NAND-Gattern. Forme die Formel dazu so um, dass nur noch Nand vorkommt. 1. a And b. 2. a Or Not(b). 3. Not(a) And (Not(b) Or c).",
     "loesung": [
      "Teil 1: And ist das umgedrehte Nand. a And b = Not(a Nand b). Das äußere Not baust du als „x Nand x“ mit x = a Nand b. Ergebnis: (a Nand b) Nand (a Nand b). Das sind 2 Gatter, weil a Nand b nur einmal gebaut und zweimal benutzt wird.",
      "Teil 2: De Morgan rückwärts. a Or Not(b) = Not(Not(a) And b) = Not(a) Nand b. Not(a) baust du als a Nand a. Ergebnis: (a Nand a) Nand b.",
      "Teil 3, Schritt 1: Not(a) = a Nand a.",
      "Teil 3, Schritt 2: Not(b) Or c = Not(b And Not(c)) (De Morgan) = b Nand Not(c) = b Nand (c Nand c).",
      "Teil 3, Schritt 3: Setze x = a Nand a und z = b Nand (c Nand c). Dann ist der Ausdruck x And z = Not(x Nand z) = (x Nand z) Nand (x Nand z).",
      "Probe für Teil 3 mit a = 0, b = 1, c = 1: Original: Not(0) And (Not(1) Or 1) = 1 And 1 = 1. NAND-Version: x = 0 Nand 0 = 1, c Nand c = 0, z = 1 Nand 0 = 1, x Nand z = 0, 0 Nand 0 = 1. Gleich.",
      "Das Schaltnetz zeichnest du direkt aus den Formeln: Jedes Nand ist ein Gatter, jede Variable, die mehrfach vorkommt (x, z), ist eine Leitung, die sich verzweigt."
     ],
     "loesungCode": "1)  a And b     = (a Nand b) Nand (a Nand b)\n2)  a Or Not(b)  = (a Nand a) Nand b\n3)  x = a Nand a\n    z = b Nand (c Nand c)\n    Not(a) And (Not(b) Or c) = (x Nand z) Nand (x Nand z)"
    },
    {
     "titel": "Blatt 01, Aufgabe 3.2: Schaltnetz als boolesche Funktion",
     "q": "Aufgabenblatt 1, Aufgabe 3.2 mit Lösungsvorschlag",
     "text": "Welche boolesche Funktion wird vom Schaltnetz auf Blatt 01 implementiert? Lies zuerst die Formel ab und vereinfache dann. (Das Schaltbild gibt es nur als Grafik im PDF. Laut Lösungsvorschlag ergibt das Ablesen die Formel unten.)",
     "code": "Abgelesene Formel:\n(¬(a ∧ b) ∧ ¬d) ∧ ¬((c ∨ d) ∨ ¬(a ∧ b))",
     "loesung": [
      "Abgelesen: (¬(a ∧ b) ∧ ¬d) ∧ ¬((c ∨ d) ∨ ¬(a ∧ b)).",
      "De Morgan auf den linken Teil: ¬(a ∧ b) ∧ ¬d = ¬((a ∧ b) ∨ d).",
      "Jetzt stehen zwei Nots mit And dazwischen: ¬X ∧ ¬Y. De Morgan rückwärts: ¬(X ∨ Y) = ¬(((a ∧ b) ∨ d) ∨ ((c ∨ d) ∨ ¬(a ∧ b))).",
      "Kommutativ- und Assoziativgesetz: Klammern weglassen und umsortieren: ¬((a ∧ b) ∨ ¬(a ∧ b) ∨ d ∨ c ∨ d).",
      "Komplementärgesetz: (a ∧ b) ∨ ¬(a ∧ b) = 1. Also ¬(1 ∨ d ∨ c ∨ d).",
      "Extremalgesetz: 1 ∨ irgendwas = 1. Also ¬1 = 0.",
      "Ergebnis: Das Schaltnetz ist die Nullfunktion. Die Ausgabe ist immer 0, egal welche Eingänge anliegen. (Mit Python über alle 16 Eingangskombinationen nachgeprüft.)"
     ]
    },
    {
     "titel": "Eigene Übung: DNF aufstellen und vereinfachen",
     "q": "Eigene Übung",
     "text": "Die Funktion f(x, y, z) ist genau in den Zeilen 001, 011 und 111 gleich 1, sonst 0. a) Stelle die DNF auf. b) Vereinfache sie.",
     "loesung": [
      "a) Zeile 001 → ¬x ∧ ¬y ∧ z. Zeile 011 → ¬x ∧ y ∧ z. Zeile 111 → x ∧ y ∧ z.",
      "DNF: f = (¬x ∧ ¬y ∧ z) ∨ (¬x ∧ y ∧ z) ∨ (x ∧ y ∧ z).",
      "b) Die ersten beiden Terme unterscheiden sich nur in y: (¬x ∧ z) ∧ (¬y ∨ y) = ¬x ∧ z.",
      "Jetzt f = (¬x ∧ z) ∨ (x ∧ y ∧ z). z ausklammern: f = z ∧ (¬x ∨ (x ∧ y)).",
      "Distributiv in der Oder-Form: ¬x ∨ (x ∧ y) = (¬x ∨ x) ∧ (¬x ∨ y) = 1 ∧ (¬x ∨ y) = ¬x ∨ y.",
      "Ergebnis: f = z ∧ (¬x ∨ y). Probe Zeile 101: 1 ∧ (0 ∨ 0) = 0, in der Tabelle steht 0. Passt."
     ]
    },
    {
     "titel": "Eigene Übung: XOR aus NAND",
     "q": "Eigene Übung",
     "text": "Baue XOR nur aus NAND-Gattern und prüfe deine Schaltung mit einer vollständigen Wahrheitstabelle.",
     "loesung": [
      "Idee: t = a Nand b ist 0 nur bei a = b = 1.",
      "u = a Nand t und v = b Nand t. out = u Nand v.",
      "Tabelle: siehe Lösungskasten. out ist 0, 1, 1, 0, also XOR.",
      "Das sind 4 Gatter. Der Weg über die Formel (a ∧ ¬b) ∨ (¬a ∧ b) mit den Standard-Ersetzungen bräuchte deutlich mehr."
     ],
     "loesungCode": "a  b | t  u=a NAND t  v=b NAND t  out\n-------------------------------------\n0  0 | 1           1           1    0\n0  1 | 1           1           0    1\n1  0 | 1           0           1    1\n1  1 | 0           1           1    0"
    }
   ]
  },
  {
   "id": "k2",
   "titel": "Kapitel 2: Boolesche Arithmetik",
   "abschnitt": "Vorlesung Kapitel 2 (Boolean Arithmetic), Blatt 02 (Tutorien ab 10.11.2026)",
   "seiten": "Lecture 2 (Boolean Arithmetic), Buch Kapitel 2, Aufgabenblatt 2 mit Lösungsvorschlag",
   "quellen": [
    {
     "name": "Lecture 2: Boolean Arithmetic (Folien)",
     "pfad": "material/TGI/02 Boolean Arithmetic/Lecture2.pdf"
    },
    {
     "name": "Buch Kapitel 2: Boolean Arithmetic",
     "pfad": "material/TGI/02 Boolean Arithmetic/boolean_arithmetic_book.pdf"
    },
    {
     "name": "Aufgabenblatt 2",
     "pfad": "material/TGI/02 Boolean Arithmetic/Tutorium2.pdf"
    },
    {
     "name": "Aufgabenblatt 2: Lösungsvorschlag",
     "pfad": "material/TGI/02 Boolean Arithmetic/Tutorium2_Lösung.pdf"
    },
    {
     "name": "Tutorium 2: Mitschrift (handschriftlich)",
     "pfad": "material/TGI/02 Boolean Arithmetic/TuT_2.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Zahl und Zahldarstellung: das Stellenwertsystem",
     "text": [
      "Die Zeichenfolge „17“ ist nicht die Zahl siebzehn selbst, sondern ein vereinbarter Code dafür, eine Zahldarstellung (numeral) (Lecture 2, S. 12). Die Römer hätten XVII geschrieben. Die Zahl ist dieselbe, nur die Darstellung ist anders.",
      "Wir benutzen ein Stellenwertsystem (positional numeral system). Es gibt eine feste Menge von Ziffern (digits), darunter die 0. Die Anzahl der Ziffern heißt Basis (base). Im Dezimalsystem ist die Basis 10 (Ziffern 0 bis 9).",
      "Der Wert einer Ziffer hängt von ihrer Position ab. Positionen zählt man von rechts nach links, beginnend bei 0. Die Ziffer an Position i zählt, wie oft $\\text{Basis}^i$ im Wert steckt (Lecture 2, S. 15). Als Formel: $\\text{Wert} = \\sum_{i=0}^{n-1} d_i \\cdot \\text{Basis}^i$.",
      "Das Verfahren funktioniert mit jeder Basis. Computer benutzen Basis 2, das Binärsystem (binary). Es gibt nur die Ziffern 0 und 1, und die Stellen sind $2^0 = 1$, $2^1 = 2$, $2^2 = 4$, $2^3 = 8$ und so weiter. Eine Binärziffer ist genau ein Bit.",
      "Damit klar ist, welche Basis gemeint ist, schreibt man sie klein unten dran: $1101_2$ ist binär, $13_{10}$ ist dezimal. Beides ist dieselbe Zahl."
     ],
     "code": "Dezimal, Basis 10:\n  6507 = 6·10^3 + 5·10^2 + 0·10^1 + 7·10^0\n       = 6000  + 500   + 0     + 7\n\nBinär, Basis 2:\n  1101_2 = 1·2^3 + 1·2^2 + 0·2^1 + 1·2^0\n         = 8     + 4     + 0     + 1     = 13_10",
     "merke": "Ziffer an Position i (von rechts, ab 0) zählt Basis^i. Binär: Stellenwerte 1, 2, 4, 8, 16, …"
    },
    {
     "titel": "Binär nach Dezimal umrechnen",
     "text": [
      "Das ist die leichtere Richtung. Du schreibst über jede Binärziffer ihren Stellenwert und addierst die Stellenwerte, unter denen eine 1 steht. Die Nullen fallen weg.",
      "Tipp ohne Taschenrechner: Schreib die Stellenwerte von rechts nach links auf (1, 2, 4, 8, 16, 32, 64, 128, …). Jeder ist das Doppelte des vorigen. So kannst du sie nicht verwechseln.",
      "Beispiel aus der Vorlesung (Lecture 2, S. 21): $110101_2$. Die Einsen stehen an den Positionen 5, 4, 2 und 0. Also $2^5 + 2^4 + 2^2 + 2^0 = 32 + 16 + 4 + 1 = 53$.",
      "Zweites Beispiel (Übungsaufgabe der Folie): $1011010_2 = 64 + 16 + 8 + 2 = 90$."
     ],
     "code": "Stellenwert:  64  32  16   8   4   2   1\nBits:          1   0   1   1   0   1   0\nEinsen bei:   64      16   8       2\n\n1011010_2 = 64 + 16 + 8 + 2 = 90",
     "merke": "Binär → Dezimal: Stellenwerte über die Bits schreiben, die mit 1 addieren."
    },
    {
     "titel": "Dezimal nach Binär umrechnen",
     "text": [
      "Methode 1 aus der Vorlesung (Lecture 2, S. 21): größte passende Zweierpotenz. Frage: Welche ist die größte Zweierpotenz, die noch in die Zahl passt? Zieh sie ab und mach mit dem Rest weiter, bis 0 übrig ist. Jede benutzte Potenz bekommt eine 1, alle anderen eine 0.",
      "Beispiel 53: Die größte passende Potenz ist 32 ($2^5$). Rest 21. Davon passt 16 ($2^4$), Rest 5. Dann 4 ($2^2$), Rest 1. Dann 1 ($2^0$), Rest 0. Einsen an den Positionen 5, 4, 2, 0, also $110101_2$.",
      "Methode 2: fortgesetztes Teilen durch 2. Teile die Zahl durch 2 und notiere den Rest (0 oder 1). Teile das Ergebnis wieder durch 2, bis 0 herauskommt. Die Reste von unten nach oben gelesen ergeben die Binärzahl. Warum? Der Rest beim Teilen durch 2 ist genau das letzte Bit. Das Teilen schiebt die Zahl um eine Stelle nach rechts.",
      "Beide Methoden liefern dasselbe. Methode 1 ist bei kleinen Zahlen schneller, Methode 2 ist mechanischer und dadurch sicherer bei großen Zahlen. Mach immer die Probe in die andere Richtung.",
      "Wenn eine feste Bitbreite verlangt ist (zum Beispiel 8 Bit), füllst du links mit Nullen auf: 53 in 8 Bit ist 00110101."
     ],
     "code": "Methode 2 für 90:\n  90 : 2 = 45 Rest 0\n  45 : 2 = 22 Rest 1\n  22 : 2 = 11 Rest 0\n  11 : 2 = 5 Rest 1\n  5 : 2 = 2 Rest 1\n  2 : 2 = 1 Rest 0\n  1 : 2 = 0 Rest 1\nReste von unten nach oben: 1011010\n\nProbe: 64 + 16 + 8 + 2 = 90\n\nVorlesungsbeispiel: 523 = 512 + 8 + 2 + 1 = 1000001011_2",
     "merke": "Größte passende Zweierpotenz abziehen, oder: durch 2 teilen, Reste von unten nach oben lesen."
    },
    {
     "titel": "Hexadezimal: Kurzschrift für Bitmuster",
     "text": [
      "16-Bit-Zahlen in Binär sind lang und unübersichtlich. Deshalb gibt es das Hexadezimalsystem (hexadecimal, kurz hex), die Basis 16. Es braucht 16 Ziffern: 0 bis 9 und dann A = 10, B = 11, C = 12, D = 13, E = 14, F = 15. Hexzahlen schreibt man oft mit dem Präfix 0x, zum Beispiel 0x4000.",
      "Der Trick: $16 = 2^4$. Deshalb entspricht eine Hexziffer genau 4 Bits. Zum Umrechnen von Binär nach Hex teilst du die Bits von rechts in Vierergruppen und ersetzt jede Gruppe durch ihre Hexziffer. Rückwärts schreibst du jede Hexziffer als 4 Bits.",
      "Wo es im Kurs vorkommt: In der Hack-Speicherkarte im Buchkapitel (computer_architecture.pdf, Diagramm 5.6) beginnt der Bildschirmspeicher bei 0x4000 = 16384 und die Tastatur liegt bei 0x6000 = 24576. Hinweis: Dort steht für den RAM „0x0000–0x5FFF“. Gemeint ist 0x0000–0x3FFF (0 bis 16383), denn ab 0x4000 beginnt der Bildschirm.",
      "Hex steht in den Vorlesungsfolien bisher nicht im Mittelpunkt. Lern es trotzdem, es kostet wenig und macht das Lesen von Bitmustern viel leichter."
     ],
     "code": "Binär -> Hex:   1011 0110\n                  B    6     -> 0xB6\nDezimal:        11·16 + 6 = 176 + 6 = 182\n\nHex -> Binär:   0x2A = 0010 1010 = 32 + 8 + 2 = 42\n\nHack-Speicher: 0x4000 = 4·16^3 = 4·4096 = 16384 (SCREEN)\n               0x6000 = 6·4096 = 24576        (KBD)",
     "merke": "Eine Hexziffer = 4 Bits. A–F stehen für 10–15. Binär in Vierergruppen von rechts teilen."
    },
    {
     "titel": "Binäre Addition von Hand",
     "text": [
      "Addition ist die Grundlage aller Rechenarten im Computer (Lecture 2, S. 25). Subtraktion bekommt man über negative Zahlen „geschenkt“, Multiplikation und Division lassen sich aus Additionen bauen.",
      "Binär addierst du wie schriftlich im Dezimalsystem: von rechts nach links, Stelle für Stelle, mit Übertrag (carry). Es gibt nur vier Fälle: 0 + 0 = 0. 0 + 1 = 1. 1 + 1 = 10, also schreibe 0, Übertrag 1. 1 + 1 + 1 (mit Übertrag) = 11, also schreibe 1, Übertrag 1.",
      "Computer rechnen mit einer festen Zahl von Bits, zum Beispiel n = 4 oder n = 16. Entsteht ganz links noch ein Übertrag, passt er nicht mehr hinein. Das nennt man Überlauf (overflow). Die Hack-Plattform ignoriert ihn einfach, das Bit fällt weg (Lecture 2, S. 30). Warum das sogar sinnvoll ist, siehst du beim Zweierkomplement.",
      "Das Verfahren ist für jede Bitbreite dasselbe. Der Computer macht für 16 Bit genau das, was du unten für 8 Bit machst."
     ],
     "code": "  109 + 54 in 8 Bit:\n\nÜbertrag:  1 1 1 1 1 0 0\n           0 1 1 0 1 1 0 1     (109)\n         + 0 0 1 1 0 1 1 0     ( 54)\n         -----------------\n           1 0 1 0 0 0 1 1     (163)\n\nProbe: 128 + 32 + 2 + 1 = 163",
     "merke": "1 + 1 = 0 Übertrag 1. 1 + 1 + 1 = 1 Übertrag 1. Übertrag über das linke Bit hinaus = Überlauf, wird ignoriert."
    },
    {
     "titel": "Der Halbaddierer",
     "text": [
      "Jetzt bauen wir die Addition aus Gattern. Der erste Baustein ist der Halbaddierer (half adder). Er addiert zwei einzelne Bits a und b (Buch Kapitel 2, Figure 2.2).",
      "Die Summe zweier Bits ist höchstens 2, also binär 10. Dafür braucht man zwei Ausgabebits: sum (das rechte Bit der Summe) und carry (das linke Bit, der Übertrag).",
      "Schau dir die Tabelle an. Die carry-Spalte ist genau AND, und die sum-Spalte ist genau XOR. Also: $\\text{sum} = a \\oplus b$, $\\text{carry} = a \\land b$. Ein Halbaddierer besteht also aus einem XOR- und einem AND-Gatter.",
      "Warum „halb“? Er kann keinen Übertrag von der Stelle rechts davon aufnehmen. Für die rechteste Stelle einer Addition reicht das, für alle anderen nicht."
     ],
     "code": "a  b | carry  sum\n-----------------\n0  0 |     0    0\n0  1 |     0    1\n1  0 |     0    1\n1  1 |     1    0\n\nsum = a XOR b      carry = a AND b",
     "merke": "Halbaddierer: sum = a XOR b, carry = a AND b."
    },
    {
     "titel": "Der Volladdierer",
     "text": [
      "Ab der zweiten Stelle müssen drei Bits addiert werden: a, b und der Übertrag c von rechts. Das macht der Volladdierer (full adder) (Buch Kapitel 2, Figure 2.3). Ausgänge sind wieder sum und carry.",
      "Die Summe dreier Bits ist höchstens 3, binär 11. sum ist 1, wenn eine ungerade Anzahl der Eingänge 1 ist: $\\text{sum} = a \\oplus b \\oplus c$. carry ist 1, wenn mindestens zwei Eingänge 1 sind (Mehrheit): $\\text{carry} = (a \\land b) \\lor (a \\land c) \\lor (b \\land c)$.",
      "Bau aus zwei Halbaddierern: Der erste addiert a und b und liefert s1 und c1. Der zweite addiert s1 und c und liefert die endgültige sum und c2. Der Gesamtübertrag ist c1 OR c2. Beide können nie gleichzeitig 1 sein, deshalb reicht OR.",
      "Beispiel a = 1, b = 1, c = 1: Erster Halbaddierer: 1 + 1 ergibt s1 = 0, c1 = 1. Zweiter: 0 + 1 ergibt sum = 1, c2 = 0. carry = 1 OR 0 = 1. Ergebnis 11, also 3. Stimmt."
     ],
     "code": "a  b  c | carry  sum\n--------------------\n0  0  0 |     0    0\n0  0  1 |     0    1\n0  1  0 |     0    1\n0  1  1 |     1    0\n1  0  0 |     0    1\n1  0  1 |     1    0\n1  1  0 |     1    0\n1  1  1 |     1    1\n\nAufbau:  HA1(a, b)  -> s1, c1\n         HA2(s1, c) -> sum, c2\n         carry = c1 OR c2",
     "merke": "Volladdierer: sum = a XOR b XOR c, carry = Mehrheit. Aus 2 Halbaddierern + 1 OR."
    },
    {
     "titel": "Der Addierer für n Bits und der Inkrementierer",
     "text": [
      "Ein Addierer (adder) für n-Bit-Zahlen ist eine Kette: Für Bit 0 genügt ein Halbaddierer (es gibt keinen Übertrag von rechts), für Bit 1 bis n−1 je ein Volladdierer. Der carry-Ausgang jeder Stelle geht in den c-Eingang der nächsten Stelle. Genau wie beim schriftlichen Rechnen wandert der Übertrag von rechts nach links. Man nennt das Ripple-Carry-Addierer (rippeln = durchsickern).",
      "Der Add16 des Kurses addiert zwei 16-Bit-Zahlen. Der Übertrag aus der höchsten Stelle wird weggeworfen. Ein Überlauf wird weder erkannt noch behandelt (Buch, Figure 2.4).",
      "Der Inkrementierer Inc16 rechnet out = in + 1. Man baut ihn als Add16 mit b = 0000000000000001. Die Hack-CPU braucht ihn später für den Programmzähler, der nach jedem Befehl um 1 weiterzählt.",
      "Im Kasten addiert der Addierer 0101 + 0011 Stelle für Stelle. Jede Zeile ist ein Baustein der Kette."
     ],
     "code": "0101 + 0011 (5 + 3) mit 4 Bit:\n\nBit 0: HA(1, 1)    -> sum 0, carry 1\nBit 1: FA(0, 1, 1) -> sum 0, carry 1\nBit 2: FA(1, 0, 1) -> sum 0, carry 1\nBit 3: FA(0, 0, 1) -> sum 1, carry 0\n\nErgebnis (Bit 3..0): 1000 = 8",
     "merke": "n-Bit-Addierer = 1 Halbaddierer + (n−1) Volladdierer in Kette. Inc16 = Add16 mit b = 1."
    },
    {
     "titel": "Negative Zahlen: warum nicht einfach ein Vorzeichenbit?",
     "text": [
      "Mit n Bits kann man die vorzeichenlosen (unsigned) Zahlen von 0 bis $2^n - 1$ darstellen (Lecture 2, S. 36). Mit 4 Bits also 0 bis 15. Aber wie stellt man negative Zahlen dar?",
      "Erste Idee: Das linke Bit (MSB) ist das Vorzeichen, 0 für plus und 1 für minus, der Rest ist der Betrag. Das heißt Vorzeichen-Betrag-Darstellung (sign-magnitude). Dann wäre 1011 die −3.",
      "Die Vorlesung zeigt die Probleme (Lecture 2, S. 37): Es gibt zwei Nullen, 0000 (+0) und 1000 (−0). code(x) + code(−x) ergibt nicht code(0): 0011 + 1011 = 1110, das wäre −6 statt 0. Außerdem wachsen die Codes nicht gleichmäßig mit der Zahl. Man bräuchte also eigene Schaltungen für das Rechnen mit Vorzeichen.",
      "Die Lösung, die alle heutigen Computer benutzen, ist das Zweierkomplement. Das kommt in der nächsten Lektion."
     ],
     "code": "Vorzeichen-Betrag mit 4 Bit (nicht verwendet):\n0000 = +0     1000 = -0   <- zwei Nullen\n0011 = +3     1011 = -3\n0011 + 1011 = 1110 = -6   <- falsch, sollte 0 sein",
     "merke": "Vorzeichen-Betrag hat zwei Nullen und rechnet falsch. Deshalb Zweierkomplement."
    },
    {
     "titel": "Das Zweierkomplement",
     "text": [
      "Definition (Lecture 2, S. 38): Mit n Bits wird eine negative Zahl −x durch den Code von $2^n - x$ dargestellt. Positive Zahlen und 0 bleiben, wie sie sind. Beispiel mit n = 4: −6 wird zu $16 - 6 = 10 = 1010_2$.",
      "Bequemer Rechenweg ohne große Zahlen (Blatt 02): Schreib den Betrag x binär mit n Bits, dreh alle Bits um (invertieren, aus 0 wird 1 und umgekehrt) und addiere 1. Für −6: 6 = 0110, invertiert 1001, plus 1 ergibt 1010. Das funktioniert in beide Richtungen: Aus 1010 wird invertiert 0101, plus 1 ergibt 0110 = 6.",
      "Zurückrechnen in Dezimal: Ist das MSB 0, ist die Zahl positiv und wird normal gelesen. Ist das MSB 1, hat das MSB den Stellenwert $-2^{n-1}$, alle anderen Stellen zählen normal positiv. Beispiel 1010 mit 4 Bit: $-8 + 2 = -6$. Das ist die schnellste Methode für die Klausur.",
      "Wertebereich: Mit n Bits gehen die Zahlen von $-2^{n-1}$ bis $2^{n-1} - 1$. Mit 4 Bit −8 bis 7, mit 16 Bit −32768 bis 32767. Es gibt eine negative Zahl mehr als positive, weil die 0 bei den „positiven“ Codes mitzählt.",
      "Erkennungszeichen: Alle negativen Zahlen beginnen mit 1, alle anderen mit 0. Und −1 ist immer „alles Einsen“, also 1111 bei 4 Bit."
     ],
     "code": "4-Bit-Codes:  Bits  vorzeichenlos  Zweierkomplement\n0000    0    0\n0001    1    1\n0010    2    2\n0011    3    3\n0100    4    4\n0101    5    5\n0110    6    6\n0111    7    7\n1000    8   -8\n1001    9   -7\n1010   10   -6\n1011   11   -5\n1100   12   -4\n1101   13   -3\n1110   14   -2\n1111   15   -1\n\n-20 mit 8 Bit:  20 = 00010100\n invertieren:        11101011\n +1:                 11101100\n Probe: -128 + 64 + 32 + 8 + 4 = -20",
     "merke": "Negieren = alle Bits invertieren, dann +1. Rücklesen: MSB zählt −2^(n−1). Bereich −2^(n−1) bis 2^(n−1)−1."
    },
    {
     "titel": "Rechnen im Zweierkomplement und Überlauf",
     "text": [
      "Das Schöne am Zweierkomplement: Man addiert ganz normal binär und wirft einen Übertrag über das linke Bit weg. Das entspricht Rechnen modulo $2^n$ (Lecture 2, S. 39–42). Derselbe Addierer funktioniert also für vorzeichenlose und vorzeichenbehaftete Zahlen. Für die Hardware ist das ein riesiger Vorteil.",
      "Subtraktion ist Addition der Gegenzahl: $x - y = x + (-y)$. Du bildest also das Zweierkomplement von y und addierst.",
      "Überlauf (overflow) heißt: Das richtige Ergebnis liegt außerhalb des Wertebereichs. Vorzeichenlos erkennst du ihn am Übertrag aus dem linken Bit. Vorzeichenbehaftet gilt die Faustregel aus Folie und Blatt 02: Ein Überlauf tritt nur auf, wenn beide Summanden dasselbe Vorzeichen haben und das Ergebnis das andere. Zwei positive Zahlen ergeben dann scheinbar eine negative.",
      "Wichtig: Ob es ein Überlauf ist, hängt davon ab, wie du die Bits deutest. 0011 + 1111 = 1 0010. Vorzeichenlos (3 + 15 = 18) ist das ein Überlauf, vorzeichenbehaftet (3 + (−1) = 2) stimmt das Ergebnis."
     ],
     "code": "7 - 3 mit 4 Bit:  -3 = 1101\n    0111\n  + 1101\n  ------\n  1 0100   -> Übertrag weg -> 0100 = 4   richtig\n\n3 + (-5):  0011 + 1011 = 1110 = -8 + 4 + 2 = -2   richtig\n\n5 + 4:     0101 + 0100 = 1001 = -7\n           beide positiv, Ergebnis negativ -> Überlauf (9 > 7)\n\n(-6) + (-4): 1010 + 1100 = 1 0110 -> 0110 = 6\n           beide negativ, Ergebnis positiv -> Überlauf (-10 < -8)",
     "merke": "Normal addieren, Übertrag wegwerfen. Überlauf vorzeichenbehaftet: gleiche Vorzeichen rein, anderes raus."
    },
    {
     "titel": "Die Hack-ALU",
     "text": [
      "Die ALU (arithmetic logic unit, Rechenwerk) ist der Teil der CPU, der rechnet. Sie bekommt zwei Eingaben x und y und berechnet daraus eine Funktion (Lecture 2, S. 48). Welche Funktionen die Hardware kann, ist eine Abwägung: Was die ALU nicht kann, muss später Software erledigen. Hardware ist schneller, Software billiger.",
      "Die Hack-ALU arbeitet mit 16-Bit-Zahlen im Zweierkomplement. Sechs Steuerbits (control bits) legen fest, was sie rechnet. Sie werden in dieser Reihenfolge angewendet (Lecture 2, S. 62): zx: wenn 1, x = 0. nx: wenn 1, x = !x (bitweise invertieren). zy: wenn 1, y = 0. ny: wenn 1, y = !y. f: wenn 1, out = x + y, sonst out = x & y (bitweises And). no: wenn 1, out = !out.",
      "Mit diesen sechs einfachen Schritten entstehen 18 nützliche Funktionen (Tabelle im Kasten). Möglich wären $2^6 = 64$ Kombinationen, aber nur diese 18 sind dokumentiert. Beispiel x − 1 (Buch): zx = nx = 0, x bleibt. zy = ny = 1, y wird erst 0 und dann 1111…1, also −1. f = 1 addiert: x + (−1) = x − 1. no = 0.",
      "Zusätzlich hat die ALU zwei Ausgabebits: zr = 1, wenn out = 0 ist, und ng = 1, wenn out < 0 ist (Lecture 2, S. 73). Die CPU braucht sie später für bedingte Sprünge (Kapitel 4).",
      "Rechne Beispiele am besten mit 4 Bit, wie die Folien (Lecture 2, S. 68–71). Unten x − y mit x = 5, y = 3 und den Bits 010011. Der Trick dahinter: $x - y = !(!x + y)$."
     ],
     "code": "zx nx zy ny  f no | out\n 1  0  1  0  1  0 | 0\n 1  1  1  1  1  1 | 1\n 1  1  1  0  1  0 | -1\n 0  0  1  1  0  0 | x\n 1  1  0  0  0  0 | y\n 0  0  1  1  0  1 | !x\n 1  1  0  0  0  1 | !y\n 0  0  1  1  1  1 | -x\n 1  1  0  0  1  1 | -y\n 0  1  1  1  1  1 | x+1\n 1  1  0  1  1  1 | y+1\n 0  0  1  1  1  0 | x-1\n 1  1  0  0  1  0 | y-1\n 0  0  0  0  1  0 | x+y\n 0  1  0  0  1  1 | x-y\n 0  0  0  1  1  1 | y-x\n 0  0  0  0  0  0 | x&y\n 0  1  0  1  0  1 | x|y\n\nBeispiel 4 Bit, x = 0101 (5), y = 0011 (3), Bits 010011 (x-y):\n zx=0: x bleibt 0101     nx=1: x = 1010\n zy=0: y bleibt 0011     ny=0: y bleibt 0011\n f=1:  out = 1010 + 0011 = 1101\n no=1: out = !1101 = 0010 = 2      zr = 0, ng = 0",
     "merke": "Reihenfolge: zx, nx, zy, ny, dann f (1 = Plus, 0 = And), dann no. zr: out = 0. ng: out < 0."
    }
   ],
   "zusammenfassung": [
    "Stellenwertsystem: Ziffer an Position i zählt Basis^i. Binär: Stellenwerte 1, 2, 4, 8, …",
    "Binär → Dezimal: Stellenwerte der Einsen addieren. Dezimal → Binär: größte Zweierpotenz abziehen oder durch 2 teilen und Reste rückwärts lesen.",
    "Hex: Basis 16, A–F = 10–15, eine Hexziffer = 4 Bit. 0x4000 = 16384, 0x6000 = 24576.",
    "Binäre Addition mit Übertrag. Übertrag über das linke Bit hinaus (Überlauf) wird ignoriert.",
    "Halbaddierer: sum = a XOR b, carry = a AND b. Volladdierer: sum = a XOR b XOR c, carry = Mehrheit, aus 2 HA + OR.",
    "n-Bit-Addierer: Kette aus 1 HA und n−1 VA. Inc16 = +1.",
    "Zweierkomplement: −x = 2^n − x = invertieren + 1. MSB hat den Wert −2^(n−1). Bereich −2^(n−1) … 2^(n−1)−1.",
    "Vorzeichenlos mit n Bit: 0 … 2^n − 1. Überlauf vorzeichenbehaftet: gleiche Vorzeichen der Summanden, anderes Vorzeichen im Ergebnis.",
    "Hack-ALU: 16 Bit, 6 Steuerbits zx, nx, zy, ny, f, no, 18 Funktionen, Statusbits zr (out = 0) und ng (out < 0)."
   ],
   "karten": [
    {
     "f": "Wie rechnest du 110101₂ in Dezimal um?",
     "a": "Stellenwerte der Einsen addieren: 32 + 16 + 4 + 1 = 53.",
     "q": "Lecture 2, S. 21"
    },
    {
     "f": "Wie rechnest du 53 in Binär um (Methode der Folien)?",
     "a": "Größte passende Zweierpotenz abziehen: 53 − 32 = 21, − 16 = 5, − 4 = 1, − 1 = 0. Einsen bei 32, 16, 4, 1: 110101.",
     "q": "Lecture 2, S. 21"
    },
    {
     "f": "Was ist die Restmethode für Dezimal → Binär?",
     "a": "Wiederholt durch 2 teilen, Reste notieren, Reste von unten nach oben lesen.",
     "q": "Eigene Ergänzung"
    },
    {
     "f": "Wie rechnest du Binär in Hex um?",
     "a": "Bits von rechts in Vierergruppen teilen und jede Gruppe als Hexziffer (0–9, A–F) schreiben. 1011 0110 = 0xB6.",
     "q": "Eigene Ergänzung"
    },
    {
     "f": "Halbaddierer: Ein- und Ausgänge, Formeln?",
     "a": "Eingänge a, b. sum = a XOR b, carry = a AND b.",
     "q": "Buch Kapitel 2, Figure 2.2"
    },
    {
     "f": "Volladdierer: Formeln und Aufbau?",
     "a": "sum = a XOR b XOR c, carry = (a∧b) ∨ (a∧c) ∨ (b∧c). Aufbau: zwei Halbaddierer, deren carry-Ausgänge mit OR verbunden werden.",
     "q": "Buch Kapitel 2, Figure 2.3"
    },
    {
     "f": "Wie ist ein 16-Bit-Addierer aufgebaut?",
     "a": "Kette: Bit 0 Halbaddierer, Bit 1–15 Volladdierer. Carry wandert von rechts nach links. Der letzte Übertrag fällt weg.",
     "q": "Buch Kapitel 2, Figure 2.4"
    },
    {
     "f": "Wertebereich mit n Bit, vorzeichenlos und im Zweierkomplement?",
     "a": "Vorzeichenlos: 0 … 2^n − 1. Zweierkomplement: −2^(n−1) … 2^(n−1) − 1.",
     "q": "Lecture 2, S. 36 und 44; Blatt 02, 2.4"
    },
    {
     "f": "Wie bildest du −x im Zweierkomplement?",
     "a": "Alle Bits von x invertieren, dann 1 addieren. Gleichwertig: Code von 2^n − x.",
     "q": "Lecture 2, S. 38; Blatt 02, 2.1"
    },
    {
     "f": "Wie liest du eine Zweierkomplement-Zahl mit MSB = 1 schnell ab?",
     "a": "Das MSB zählt −2^(n−1), die anderen Stellen normal. 1010 (4 Bit) = −8 + 2 = −6.",
     "q": "Blatt 02, Lösung 2.1"
    },
    {
     "f": "Warum gibt es im Zweierkomplement −8, aber nicht +8 mit 4 Bit?",
     "a": "Der Bereich −8 … 7 ist nicht symmetrisch. Invertieren + 1 von 1000 ergibt wieder 1000.",
     "q": "Blatt 02, Lösung 2.1c"
    },
    {
     "f": "Wann tritt bei vorzeichenbehafteter Addition ein Überlauf auf?",
     "a": "Wenn beide Summanden dasselbe Vorzeichen haben und das Ergebnis das andere.",
     "q": "Lecture 2, S. 43; Blatt 02, Lösung 2.2"
    },
    {
     "f": "Was sind die Nachteile der Vorzeichen-Betrag-Darstellung?",
     "a": "Zwei Nullen (+0, −0), code(x) + code(−x) ≠ code(0), Codes nicht monoton, eigene Rechenschaltungen nötig.",
     "q": "Lecture 2, S. 37"
    },
    {
     "f": "Die sechs Steuerbits der Hack-ALU und ihre Wirkung?",
     "a": "zx: x = 0. nx: x = !x. zy: y = 0. ny: y = !y. f: 1 → x + y, 0 → x & y. no: out = !out. In dieser Reihenfolge.",
     "q": "Lecture 2, S. 62"
    },
    {
     "f": "Was bedeuten zr und ng?",
     "a": "zr = 1, wenn out = 0. ng = 1, wenn out < 0 (MSB = 1).",
     "q": "Lecture 2, S. 73"
    },
    {
     "f": "Steuerbits für x + y, x − y und x & y?",
     "a": "x + y: 000010. x − y: 010011. x & y: 000000.",
     "q": "Lecture 2, S. 53"
    },
    {
     "f": "Warum ist das Zweierkomplement gut für Hardware?",
     "a": "Addition mit Vorzeichen ist dieselbe Schaltung wie ohne Vorzeichen (modulo 2^n). Subtraktion ist Addition der Gegenzahl.",
     "q": "Lecture 2, S. 44"
    },
    {
     "f": "Was ist 0x4000 und 0x6000 dezimal?",
     "a": "0x4000 = 4 · 4096 = 16384 (Bildschirmspeicher). 0x6000 = 6 · 4096 = 24576 (Tastatur).",
     "q": "computer_architecture.pdf, Diagramm 5.6"
    }
   ],
   "quiz": [
    {
     "typ": "text",
     "frage": "Rechne 37 in Binär um (ohne führende Nullen).",
     "loesung": [
      "100101",
      "0b100101",
      "100101_2"
     ],
     "erklaerung": "37 − 32 = 5, 5 − 4 = 1, 1 − 1 = 0. Einsen bei 32, 4, 1: 100101.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Rechne 1101101₂ in Dezimal um.",
     "loesung": 109,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "64 + 32 + 8 + 4 + 1 = 109.",
     "q": "Eigene Übung"
    },
    {
     "typ": "text",
     "frage": "Rechne 200 in Binär um, 8 Bit.",
     "loesung": [
      "11001000",
      "0b11001000"
     ],
     "erklaerung": "200 − 128 = 72, 72 − 64 = 8, 8 − 8 = 0. Einsen bei 128, 64, 8: 11001000.",
     "q": "Eigene Übung"
    },
    {
     "typ": "text",
     "frage": "Schreib 11001000₂ als Hexzahl (ohne 0x).",
     "loesung": [
      "C8",
      "c8",
      "0xC8",
      "0xc8"
     ],
     "erklaerung": "Vierergruppen: 1100 = 12 = C, 1000 = 8. Ergebnis C8. Probe: 12 · 16 + 8 = 200.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Wie viel ist 0x2A dezimal?",
     "loesung": 42,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2 · 16 + 10 = 42. Binär 0010 1010.",
     "q": "Eigene Übung"
    },
    {
     "typ": "text",
     "frage": "Stelle −6 im 4-Bit-Zweierkomplement dar.",
     "loesung": [
      "1010",
      "0b1010"
     ],
     "erklaerung": "6 = 0110. Invertieren: 1001. Plus 1: 1010. Probe: −8 + 2 = −6.",
     "q": "Eigene Übung (Methode Blatt 02)"
    },
    {
     "typ": "text",
     "frage": "Stelle −20 im 8-Bit-Zweierkomplement dar.",
     "loesung": [
      "11101100",
      "0b11101100"
     ],
     "erklaerung": "20 = 00010100. Invertieren: 11101011. Plus 1: 11101100. Probe: −128 + 64 + 32 + 8 + 4 = −20.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Dezimalwert hat 10010110 als 8-Bit-Zweierkomplement?",
     "loesung": -106,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "MSB = 1, zählt −128. Rest: 16 + 4 + 2 = 22. −128 + 22 = −106.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Wie viel ist 1111111111111111 als 16-Bit-Zweierkomplement?",
     "loesung": -1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Alles Einsen ist immer −1. Probe: invertieren 000…0, plus 1 = 1, also war es −1.",
     "q": "Lecture 2, S. 38"
    },
    {
     "typ": "zahl",
     "frage": "Kleinste darstellbare Zahl im 10-Bit-Zweierkomplement?",
     "loesung": -512,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "−2^(n−1) = −2^9 = −512.",
     "q": "Eigene Übung"
    },
    {
     "typ": "zahl",
     "frage": "Größte vorzeichenlose Zahl mit 12 Bit?",
     "loesung": 4095,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^12 − 1 = 4096 − 1 = 4095.",
     "q": "Eigene Übung"
    },
    {
     "typ": "mc",
     "frage": "4-Bit-Zweierkomplement: 0110 + 0011. Was passiert?",
     "optionen": [
      "Ergebnis 1001 = 9, korrekt",
      "Ergebnis 1001 = −7, Überlauf",
      "Ergebnis 0001, Übertrag weg, korrekt",
      "Ergebnis 1001 = −1, korrekt"
     ],
     "richtig": 1,
     "erklaerung": "6 + 3 = 9 liegt außerhalb von −8 … 7. Bitweise: 1001 = −8 + 1 = −7. Zwei positive Summanden, negatives Ergebnis: Überlauf.",
     "q": "Eigene Übung"
    },
    {
     "typ": "text",
     "frage": "Berechne 3 + (−5) im 4-Bit-Zweierkomplement. Gib das 4-Bit-Ergebnis an.",
     "loesung": [
      "1110",
      "0b1110"
     ],
     "erklaerung": "−5 = 1011. 0011 + 1011 = 1110. Probe: −8 + 4 + 2 = −2 = 3 − 5. Kein Überlauf, denn die Vorzeichen der Summanden sind verschieden.",
     "q": "Eigene Übung"
    },
    {
     "typ": "mc",
     "frage": "Volladdierer mit a = 1, b = 0, c = 1. Welche Ausgänge?",
     "optionen": [
      "sum = 0, carry = 1",
      "sum = 1, carry = 0",
      "sum = 1, carry = 1",
      "sum = 0, carry = 0"
     ],
     "richtig": 0,
     "erklaerung": "1 + 0 + 1 = 2 = 10₂. Rechtes Bit sum = 0, linkes Bit carry = 1.",
     "q": "Buch Kapitel 2, Figure 2.3"
    },
    {
     "typ": "mc",
     "frage": "Welche Gatter bilden einen Halbaddierer?",
     "optionen": [
      "OR für sum, AND für carry",
      "XOR für sum, AND für carry",
      "AND für sum, XOR für carry",
      "NAND für sum, OR für carry"
     ],
     "richtig": 1,
     "erklaerung": "sum = a XOR b (1 bei genau einer 1), carry = a AND b (1 nur bei 1 + 1).",
     "q": "Buch Kapitel 2, Figure 2.2"
    },
    {
     "typ": "text",
     "frage": "Hack-ALU mit 4-Bit-Werten: x = 0101, Steuerbits zx nx zy ny f no = 0 0 1 1 0 1. Welche 4 Bits gibt sie aus?",
     "loesung": [
      "1010",
      "0b1010"
     ],
     "erklaerung": "zx = 0, nx = 0: x = 0101. zy = 1: y = 0000, ny = 1: y = 1111. f = 0: out = x & y = 0101. no = 1: out = 1010. Das ist !x (Zeile „!x“ der Tabelle), dezimal −6.",
     "q": "Lecture 2, S. 53 und 62"
    },
    {
     "typ": "text",
     "frage": "Hack-ALU mit 4-Bit-Werten: x = 0110 (6), y = 0010 (2), Steuerbits 000010 (x + y). Welche 4 Bits gibt sie aus?",
     "loesung": [
      "1000",
      "0b1000"
     ],
     "erklaerung": "Keine Vorbehandlung, f = 1: 0110 + 0010 = 1000. no = 0. Als Zweierkomplement ist 1000 = −8, ng = 1. Das ist ein Überlauf, denn 8 passt nicht in 4 Bit mit Vorzeichen.",
     "q": "Lecture 2, S. 53"
    },
    {
     "typ": "zahl",
     "frage": "Hack-ALU: x = 3, y = 3, Bits 010011 (x − y). Welchen Wert hat zr?",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x − y = 0, und zr = 1 genau dann, wenn out = 0.",
     "q": "Lecture 2, S. 73"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele verschiedene Steuerbit-Kombinationen hat die Hack-ALU?",
     "loesung": 64,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "6 Steuerbits: 2^6 = 64. Dokumentiert sind davon 18 Funktionen.",
     "q": "Buch Kapitel 2"
    }
   ],
   "formeln": [
    {
     "name": "Stellenwertsystem",
     "tex": "\\text{Wert} = \\sum_{i=0}^{n-1} d_i \\cdot b^i",
     "text": "d_i ist die Ziffer an Position i, gezählt von rechts ab 0.",
     "q": "Lecture 2, S. 15",
     "bsp": "1101₂ = 8 + 4 + 0 + 1 = 13"
    },
    {
     "name": "Wertebereiche mit n Bit",
     "tex": "\\text{unsigned: } [0,\\, 2^n - 1] \\qquad \\text{Zweierkomplement: } [-2^{n-1},\\, 2^{n-1} - 1]",
     "text": "Vorzeichenlos und Zweierkomplement.",
     "q": "Lecture 2, S. 36 und 44; Blatt 02, Lösung 2.4",
     "bsp": "n = 8: 0…255 bzw. −128…127"
    },
    {
     "name": "Zweierkomplement",
     "tex": "-x \\;\\hat{=}\\; 2^n - x = \\overline{x} + 1, \\qquad \\text{Wert} = -b_{n-1} 2^{n-1} + \\sum_{i=0}^{n-2} b_i 2^i",
     "text": "Gegenzahl bilden. Rücklesen über das negative MSB.",
     "q": "Lecture 2, S. 38; Blatt 02",
     "bsp": "−6 (4 Bit): 0110 → 1001 → 1010"
    },
    {
     "name": "Halbaddierer",
     "tex": "\\text{sum} = a \\oplus b, \\quad \\text{carry} = a \\land b",
     "text": "Addiert 2 Bits.",
     "q": "Buch Kapitel 2, Figure 2.2"
    },
    {
     "name": "Volladdierer",
     "tex": "\\text{sum} = a \\oplus b \\oplus c, \\quad \\text{carry} = ab \\lor ac \\lor bc",
     "text": "Addiert 3 Bits.",
     "q": "Buch Kapitel 2, Figure 2.3"
    },
    {
     "name": "Überlauf (vorzeichenbehaftet)",
     "code": "pos + pos = neg  -> Überlauf\nneg + neg = pos  -> Überlauf\npos + neg        -> nie Überlauf",
     "text": "Gleiche Vorzeichen rein, anderes raus.",
     "q": "Lecture 2, S. 43; Blatt 02, Lösung 2.2"
    },
    {
     "name": "Hack-ALU: Ablauf",
     "code": "if zx: x = 0\nif nx: x = !x\nif zy: y = 0\nif ny: y = !y\nif f:  out = x + y   else: out = x & y\nif no: out = !out\nzr = (out == 0),  ng = (out < 0)",
     "text": "Reihenfolge der Steuerbits.",
     "q": "Lecture 2, S. 62–73"
    },
    {
     "name": "Hack-ALU: Funktionstabelle",
     "code": "zx nx zy ny  f no | out\n 1  0  1  0  1  0 | 0\n 1  1  1  1  1  1 | 1\n 1  1  1  0  1  0 | -1\n 0  0  1  1  0  0 | x\n 1  1  0  0  0  0 | y\n 0  0  1  1  0  1 | !x\n 1  1  0  0  0  1 | !y\n 0  0  1  1  1  1 | -x\n 1  1  0  0  1  1 | -y\n 0  1  1  1  1  1 | x+1\n 1  1  0  1  1  1 | y+1\n 0  0  1  1  1  0 | x-1\n 1  1  0  0  1  0 | y-1\n 0  0  0  0  1  0 | x+y\n 0  1  0  0  1  1 | x-y\n 0  0  0  1  1  1 | y-x\n 0  0  0  0  0  0 | x&y\n 0  1  0  1  0  1 | x|y",
     "text": "Steuerbits zx nx zy ny f no.",
     "q": "Lecture 2, S. 53"
    },
    {
     "name": "Hex-Ziffern",
     "code": "0=0000 1=0001 2=0010 3=0011 4=0100 5=0101 6=0110 7=0111\n8=1000 9=1001 A=1010 B=1011 C=1100 D=1101 E=1110 F=1111",
     "text": "Eine Hexziffer = 4 Bit.",
     "q": "Eigene Ergänzung"
    }
   ],
   "aufgaben": [
    {
     "titel": "Blatt 02, Aufgabe 2.1: Das Zweierkomplement",
     "q": "Aufgabenblatt 2, Aufgabe 2.1 mit Lösungsvorschlag",
     "text": "a) Stelle im 4-Bit-Zweierkomplement dar oder begründe, warum es nicht geht: i) 5, ii) −3, iii) 8, iv) −5. b) Vergleiche 5 und −5. Wie erhält man die eine Darstellung aus der anderen? c) Stelle −8 dar und wende das Verfahren aus b) an, um +8 zu erhalten. Was stellst du fest?",
     "loesung": [
      "a) i) 5 = 0101.",
      "ii) 3 = 0011. Invertieren: 1100. Plus 1: 1101. Probe: −8 + 4 + 1 = −3.",
      "iii) 8 ist nicht darstellbar, weil der Wertebereich mit 4 Bit −8 … 7 ist.",
      "iv) 5 = 0101. Invertieren: 1010. Plus 1: 1011. Probe: −8 + 2 + 1 = −5.",
      "b) 5 = 0101 und −5 = 1011. Man erhält die eine aus der anderen, indem man alle Bits invertiert und 1 addiert: 0101 → 1010 → 1011 und 1011 → 0100 → 0101. Das Verfahren funktioniert in beide Richtungen.",
      "c) −8 = 1000. Invertieren: 0111. Plus 1: 1000. Man erhält wieder −8, nicht +8. Grund: Der Bereich −8 … 7 ist nicht symmetrisch, es gibt eine negative Zahl mehr. −8 hat kein darstellbares Gegenstück."
     ]
    },
    {
     "titel": "Blatt 02, Aufgabe 2.2: Darstellung von ganzen Zahlen",
     "q": "Aufgabenblatt 2, Aufgabe 2.2 mit Lösungsvorschlag",
     "text": "Rechne mit 4 Bit (vorzeichenlos 0 … 15, vorzeichenbehaftet −8 … 7). Ist das Ergebnis korrekt? Wenn nein, was ist passiert? 1. (vorzeichenlos) 5 + 4. 2. (vorzeichenlos) 3 + 15. 3. (vorzeichenbehaftet) 2 + (−6). 4. (vorzeichenbehaftet) 4 + 6.",
     "loesung": [
      "1. 0101 + 0100 = 1001 = 9. Korrekt.",
      "2. 0011 + 1111 = 10010. Das fünfte Bit passt nicht und verpufft. Übrig bleibt 0010 = 2. Falsch, vorzeichenloser Überlauf (unsigned overflow): 18 liegt außerhalb von 0 … 15.",
      "3. −6 = 1010. 0010 + 1010 = 1100 = −8 + 4 = −4. Korrekt.",
      "4. 0100 + 0110 = 1010 = −6. Falsch, vorzeichenbehafteter Überlauf (signed overflow): 10 liegt außerhalb von −8 … 7. Hier fällt kein Bit weg, der Übertrag läuft ins Vorzeichenbit. Zwei positive Summanden ergeben scheinbar eine negative Zahl.",
      "Merke: Ob überläuft, hängt von der Deutung ab. 0011 + 1111 ist vorzeichenlos ein Überlauf (3 + 15), vorzeichenbehaftet aber richtig (3 + (−1) = 2). 0100 + 0110 ist vorzeichenlos richtig (4 + 6 = 10), vorzeichenbehaftet ein Überlauf."
     ]
    },
    {
     "titel": "Blatt 02, Aufgabe 2.3: Umwandlungen zwischen Zahlensystemen",
     "q": "Aufgabenblatt 2, Aufgabe 2.3 mit Lösungsvorschlag",
     "text": "Wandle um und gib den Rechenweg an. 1. 13₁₀ → Basis 2. 2. 45₁₀ → Basis 2. 3. 93₁₀ → Basis 2. 4. 1010₂ → Basis 10. 5. 110010₂ → Basis 10. 6. 11010110₂ → Basis 10.",
     "loesung": [
      "1. 13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ = 1101₂.",
      "2. 45 = 32 + 8 + 4 + 1 = 2⁵ + 2³ + 2² + 2⁰ = 101101₂.",
      "3. 93 = 64 + 16 + 8 + 4 + 1 = 2⁶ + 2⁴ + 2³ + 2² + 2⁰ = 1011101₂.",
      "4. 1010₂ = 2³ + 2¹ = 8 + 2 = 10.",
      "5. 110010₂ = 2⁵ + 2⁴ + 2¹ = 32 + 16 + 2 = 50.",
      "6. 11010110₂ = 2⁷ + 2⁶ + 2⁴ + 2² + 2¹ = 128 + 64 + 16 + 4 + 2 = 214."
     ]
    },
    {
     "titel": "Blatt 02, Aufgabe 2.4: Ganzzahlige Wertebereiche",
     "q": "Aufgabenblatt 2, Aufgabe 2.4 mit Lösungsvorschlag",
     "text": "Gib die kleinste und größte darstellbare Zahl an. 1. Zweierkomplement, 7 Bit. 2. Vorzeichenlos, 16 Bit. 3. Zweierkomplement, 13 Bit. 4. Vorzeichenlos, 20 Bit.",
     "loesung": [
      "Allgemein: vorzeichenlos [0 … 2ⁿ − 1], Zweierkomplement [−2ⁿ⁻¹ … 2ⁿ⁻¹ − 1].",
      "1. [−2⁶ … 2⁶ − 1] = [−64 … 63].",
      "2. [0 … 2¹⁶ − 1] = [0 … 65535].",
      "3. [−2¹² … 2¹² − 1] = [−4096 … 4095].",
      "4. [0 … 2²⁰ − 1] = [0 … 1048575]. Ohne Taschenrechner: 2²⁰ = 2¹⁰ · 2¹⁰ = 1024 · 1024 = 1048576."
     ]
    },
    {
     "titel": "Eigene Übung: Hack-ALU von Hand",
     "q": "Eigene Übung (Lecture 2, S. 62)",
     "text": "Rechne mit 4 Bit. x = 0101 (5). a) Steuerbits 001111 (−x). b) Steuerbits 011111 (x + 1). Gib jeweils out, zr und ng an.",
     "loesung": [
      "a) zx = 0, nx = 0: x = 0101. zy = 1, ny = 1: y = 1111. f = 1: 0101 + 1111 = 1 0100, Übertrag weg: 0100. no = 1: out = 1011 = −8 + 2 + 1 = −5. zr = 0, ng = 1.",
      "b) zx = 0, nx = 1: x = 1010. zy = 1, ny = 1: y = 1111. f = 1: 1010 + 1111 = 1 1001, Übertrag weg: 1001. no = 1: out = 0110 = 6. zr = 0, ng = 0.",
      "Beide Ergebnisse stimmen mit der Tabelle überein: −5 und 5 + 1 = 6."
     ]
    }
   ]
  },
  {
   "id": "k3",
   "titel": "Kapitel 3: Speicher",
   "abschnitt": "Vorlesung Kapitel 3 (Memory), Blatt 03 (D-Flip-Flops, Tutorien ab 16.11.2026)",
   "seiten": "Lecture 3 (Memory), Buch Kapitel 3 (memory.pdf), Aufgabenblatt 3 (ohne Lösung)",
   "quellen": [
    {
     "name": "Lecture 3: Memory (Folien)",
     "pfad": "material/TGI/03 Memory/Lecture3.pdf"
    },
    {
     "name": "Buch Kapitel 3: Memory",
     "pfad": "material/TGI/03 Memory/memory.pdf"
    },
    {
     "name": "Aufgabenblatt 3: D-Flip-Flops (Aufgaben)",
     "pfad": "material/TGI/04 Machine Language/TechGI-Übungsblatt-03-Aufgaben.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Kombinatorische und sequentielle Logik",
     "text": [
      "Alle Chips aus Kapitel 1 und 2 haben eine Gemeinsamkeit: Ihr Ausgang hängt nur von den aktuellen Eingängen ab. Gleiche Eingabe, gleiche Ausgabe, egal was vorher war. Das heißt kombinatorische Logik (combinational logic) (Lecture 3, S. 5–6). Die ALU ist der „oberste“ kombinatorische Chip.",
      "Alltagsbild: ein einfacher Taschenrechner ohne Speichertaste. Er zeigt immer nur das Ergebnis der aktuellen Eingabe und vergisst alles sofort.",
      "Ein Computer muss sich aber Dinge merken. Software braucht Variablen (x = 17 soll auch später noch 17 sein) und Schleifen, die Schritt für Schritt ablaufen (Lecture 3, S. 8). Dafür braucht man Chips, deren Ausgang auch davon abhängt, was früher war. Das heißt sequentielle Logik (sequential logic).",
      "Alltagsbild: ein Zählwerk an der Supermarkttür. Ob es 41 oder 42 anzeigt, hängt davon ab, wie viele Leute vorher durchgegangen sind, nicht nur vom aktuellen Kunden.",
      "Faustregel (Lecture 3, S. 57–58): Kombinatorische Chips rechnen (ALU, Addierer, Mux). Sequentielle Chips speichern (Register, RAM, Zähler)."
     ],
     "merke": "Kombinatorisch: Ausgang hängt nur von den aktuellen Eingängen ab. Sequentiell: Ausgang hängt auch von früheren Eingängen ab, also von einem gespeicherten Zustand."
    },
    {
     "titel": "Zeit und Takt",
     "text": [
      "In echter Hardware braucht alles Zeit. Ein Signal muss durch Leitungen laufen (Laufzeitverzögerung, propagation delay), und ein Gatter braucht einen Moment, bis sein Ausgang stimmt (computation delay). Wenn die ALU 7 + 11 rechnen soll, zeigt sie ganz kurz noch Unsinn, bis sich alle Signale beruhigt haben (Lecture 3, S. 9 und 21).",
      "Die Lösung: Man teilt die Zeit in gleich lange Abschnitte und schaut nur am Ende jedes Abschnitts auf die Ausgänge. Das nennt man diskrete Zeit (discrete time). Der Taktgeber (clock) liefert dazu ein Signal, das ständig zwischen 0 und 1 wechselt, wie ein Metronom beim Musizieren. Ein Durchgang heißt Takt oder Zyklus (cycle). Die beiden Hälften heißen in den Folien tick und tock.",
      "Die Taktlänge ist eine Entwurfsentscheidung: etwas länger als die größte Verzögerung im Chip (Lecture 3, S. 11 und 22). Dann sind am Ende jedes Takts alle Signale stabil, und kombinatorische Chips scheinen „sofort“ zu reagieren.",
      "Physisch erzeugt ein Oszillator den Takt, meist mit einem Quarzkristall. In Schaltplänen zeigt ein kleines Dreieck am Chip, dass dort der Takt angeschlossen ist (Lecture 3, S. 28).",
      "Für dich heißt das: In allen Aufgaben dieses Kapitels rechnest du in Zeitschritten t = 1, 2, 3, … und fragst immer, welchen Wert ein Signal in diesem Schritt hat."
     ],
     "merke": "Takt (clock) = ständiges 0-1-Signal. Man beobachtet Ausgänge nur am Ende eines Takts. Taktlänge > größte Verzögerung."
    },
    {
     "titel": "Das D-Flip-Flop (DFF)",
     "text": [
      "Das einfachste sequentielle Bauteil ist das D-Flip-Flop (data flip-flop, DFF). Es hat einen Eingang in (oft D genannt) und einen Ausgang out (oft Q genannt). Seine ganze Regel lautet (Lecture 3, S. 61): $out(t+1) = in(t)$. Der Ausgang zeigt den Eingang aus dem vorigen Zeitschritt.",
      "Alltagsbild: ein Bote, der jede Nachricht genau einen Tag später zustellt. Was du heute abgibst, kommt morgen an. Dadurch „merkt“ sich das DFF einen Wert für genau einen Takt.",
      "Im Kurs ist das DFF ein fertiger Grundbaustein, so wie NAND in Kapitel 1. Wie man es aus Gattern mit Rückkopplung baut, ist Elektrotechnik und wird nicht verlangt (Lecture 1, S. 35: Der Kurs behandelt keine physische Umsetzung).",
      "So rechnest du eine Tabelle: Schreib die Zeile in auf. Die Zeile out ist dieselbe Zeile, um einen Schritt nach rechts verschoben. Für den ersten Schritt brauchst du einen Startwert, meist 0."
     ],
     "code": "Eigenes Beispiel, Zeitschrittmodell der Vorlesung:\n\nt      1  2  3  4  5  6  7\nin     1  0  1  1  0  0  1\nout    0  1  0  1  1  0  0\n\n(out(1) = 0 als Startwert angenommen)\n\nout ist in, um einen Schritt nach rechts verschoben.",
     "merke": "DFF: out(t+1) = in(t). Der Ausgang ist der Eingang von einem Takt vorher."
    },
    {
     "titel": "Flankengesteuerte Flip-Flops in Tabellen (wie im Übungsblatt)",
     "text": [
      "Auf Blatt 03 werden DFFs etwas genauer mit einer Tabelle beschrieben. Jede Spalte ist ein kurzes Zeitintervall. Der Takt CLK ist eine eigene Zeile, die 0 oder 1 ist.",
      "Positiv flankengesteuert (positive edge-triggered) heißt: Das Flip-Flop reagiert nur, wenn CLK von 0 auf 1 wechselt. Diesen Moment nennt man steigende Flanke (rising edge). Sie liegt zwischen Spalte t−1 und t, wenn CLK in t−1 gleich 0 und in t gleich 1 ist.",
      "Bei einer steigenden Flanke übernimmt das Flip-Flop den Wert, der unmittelbar vorher (in Spalte t−1) an D anliegt. Der Ausgang Q zeigt den neuen Wert ab Spalte t. Zwischen zwei Flanken bleibt Q unverändert, egal was D macht. Q' (auf dem Blatt als Q mit Strich geschrieben) ist immer das Gegenteil von Q.",
      "Rezept: 1. Alle Spalten markieren, in denen CLK von 0 auf 1 springt. 2. Q startet mit dem Anfangswert (meist 0). 3. Q bis zur ersten markierten Spalte unverändert fortschreiben. 4. In einer markierten Spalte t den D-Wert aus Spalte t−1 ablesen und als neues Q eintragen. 5. Weiter bis zur nächsten Markierung.",
      "Daraus folgt: Nur der D-Wert direkt vor einer Flanke zählt. Ändert sich D zwischen zwei Flanken und wieder zurück, merkt Q davon nichts. Im Beispiel ist D in Spalte 4 kurz 1 und in Spalte 5 wieder 0. Keiner der beiden Werte steht direkt vor einer Flanke (die Flanken liegen bei 1, 4, 7, 10, abgetastet werden also die Spalten 0, 3, 6, 9). Q reagiert deshalb nicht darauf.",
      "Das Beispiel benutzt eigene Signale, nicht die von Blatt 03. Rechne es selbst nach, bevor du die Zeile Q anschaust."
     ],
     "code": "t      0  1  2  3  4  5  6  7  8  9 10 11\nCLK    0  1  1  0  1  1  0  1  1  0  1  1\n          ^        ^        ^        ^      (^ = steigende Flanke)\nD      1  1  0  0  1  0  1  1  0  0  0  1\nQ      0  1  1  1  0  0  0  1  1  1  0  0\nQ'     1  0  0  0  1  1  1  0  0  0  1  1   (Q' = nicht Q)\n\nFlanke bei t=1: D(0) = 1 -> Q = 1 ab t=1\nFlanke bei t=4: D(3) = 0 -> Q = 0 ab t=4\nFlanke bei t=7: D(6) = 1 -> Q = 1 ab t=7\nFlanke bei t=10: D(9) = 0 -> Q = 0 ab t=10",
     "merke": "Steigende Flanke: CLK springt von 0 auf 1. Q übernimmt D aus der Spalte direkt davor und hält den Wert bis zur nächsten Flanke."
    },
    {
     "titel": "Schaltwerke: Flip-Flops und Gatter zusammen",
     "text": [
      "Ein Schaltwerk ist eine Schaltung aus Flip-Flops und Gattern. Die Gatter rechnen (kombinatorisch), die Flip-Flops speichern. Gatterlaufzeiten werden in den Tabellen vernachlässigt: Ein Gatterausgang ergibt sich in jeder Spalte direkt aus den Werten derselben Spalte.",
      "Vorgehen: 1. Für jeden D-Eingang und jeden Ausgang eine boolesche Gleichung aufschreiben, zum Beispiel D2 = Q1. 2. Die Tabelle Spalte für Spalte von links nach rechts füllen. In jeder Spalte zuerst die Q-Werte bestimmen (sie ändern sich nur an Flanken), dann daraus die Gatterausgänge berechnen. 3. An jeder steigenden Flanke übernimmt jedes Flip-Flop seinen D-Wert aus der Spalte davor. Wichtig: Alle Flip-Flops am selben Takt schalten gleichzeitig und benutzen die alten Werte.",
      "Eigenes Beispiel (nicht die Schaltung von Blatt 03): zwei DFFs hintereinander. D1 = X, D2 = Q1 und Y = Q1 AND NOT Q2. Was macht das? Q1 ist der Wert von X bei der letzten Flanke, Q2 der Wert bei der vorletzten Flanke. Y ist 1, wenn X jetzt 1 ist, aber vorher 0 war. Die Schaltung meldet also für genau einen Takt: „X ist gerade von 0 auf 1 gesprungen.“ So etwas heißt Flankenerkennung.",
      "Im Kasten liegen die Flanken bei allen ungeraden t, weil CLK 0, 1, 0, 1, … ist. Bei t = 3 übernimmt Q1 den Wert X(2) = 1 und Q2 den alten Wert Q1(2) = 0. Damit wird Y in Spalte 3 zu 1 AND NOT 0 = 1. Bei t = 5 übernimmt Q2 die 1 aus Q1, Y wird wieder 0."
     ],
     "code": "t      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15\nCLK    0  1  0  1  0  1  0  1  0  1  0  1  0  1  0  1\nX      0  1  1  1  0  0  1  0  1  1  1  0  0  0  1  1\nD1     0  1  1  1  0  0  1  0  1  1  1  0  0  0  1  1   (D1 = X)\nQ1     0  0  0  1  1  0  0  1  1  1  1  1  1  0  0  1\nD2     0  0  0  1  1  0  0  1  1  1  1  1  1  0  0  1   (D2 = Q1)\nQ2     0  0  0  0  0  1  1  0  0  1  1  1  1  1  1  0\nY      0  0  0  1  1  0  0  1  1  0  0  0  0  0  0  1   (Y = Q1 AND NOT Q2)",
     "merke": "Erst Gleichungen für D und Y aufstellen. An jeder Flanke übernehmen alle Flip-Flops gleichzeitig ihren alten D-Wert. Gatter rechnen in jeder Spalte direkt."
    },
    {
     "titel": "Das 1-Bit-Register (Bit)",
     "text": [
      "Ein DFF merkt sich einen Wert nur für einen Takt. Wir wollen aber einen Wert so lange behalten, bis wir ihn bewusst ändern. Das leistet das 1-Bit-Register, im Kurs Bit genannt (Lecture 3, S. 32).",
      "Es hat einen Eingang in, einen Steuereingang load und einen Ausgang out. Die Regel: Wenn load(t) = 1, dann $out(t+1) = in(t)$ (laden, loading). Sonst $out(t+1) = out(t)$ (speichern, storing).",
      "Aufbau (Lecture 3, S. 71): ein DFF und ein Mux davor. Der Mux wählt mit sel = load zwischen dem alten Wert (der Ausgang des DFF wird zurückgeführt) und dem neuen Wert in. So bekommt das DFF bei load = 0 immer wieder seinen eigenen Wert und hält ihn fest.",
      "Benutzung (Lecture 3, S. 43): Lesen geht immer, out zeigt ständig den gespeicherten Wert. Schreiben: in = v setzen und load = 1. Ab dem nächsten Zeitschritt zeigt out den Wert v, bis zum nächsten Laden. Gute Praxis: Nach dem Schreiben load wieder auf 0 setzen.",
      "Alltagsbild: ein Notizzettel an der Kühlschranktür. Du kannst jederzeit draufschauen. Neu beschrieben wird er nur, wenn du bewusst zum Stift greifst (load = 1)."
     ],
     "code": "Eigenes Beispiel:\n\nt      1  2  3  4  5  6  7  8\nin     1  1  0  0  1  0  0  1\nload   0  1  0  0  0  1  0  0\nout    0  0  1  1  1  1  0  0\n\n(out(1) = 0 als Startwert)\n\nt=2: load = 1, in = 1 -> out(3) = 1\nt=6: load = 1, in = 0 -> out(7) = 0\nsonst behält out den alten Wert, auch wenn in sich ändert.",
     "merke": "Bit: wenn load, dann out(t+1) = in(t), sonst out(t+1) = out(t). Aufbau: Mux + DFF mit Rückführung."
    },
    {
     "titel": "Register und RAM",
     "text": [
      "Ein Register (register) mit w Bits ist einfach w 1-Bit-Register nebeneinander, die sich ein gemeinsames load teilen. Der Hack-Computer benutzt w = 16. Das Verhalten ist genau wie beim 1-Bit-Register, nur mit 16 Bits auf einmal (Lecture 3, S. 44 und 73).",
      "Ein RAM (random access memory, Arbeitsspeicher) ist eine Reihe von n Registern, die über eine Nummer, die Adresse (address), angesprochen werden (Lecture 3, S. 47). Alltagsbild: eine Wand mit nummerierten Schließfächern. Mit der Fachnummer kommst du an genau ein Fach.",
      "Wie viele Adressbits braucht man? Mit k Bits kann man $2^k$ Adressen bilden. Für n Register braucht man also $k = \\log_2 n$ Bits. Beispiel: RAM8 hat 8 Register und braucht 3 Adressbits (000 bis 111).",
      "Benutzung (Lecture 3, S. 48): Lesen von Register i: address = i setzen, out zeigt RAM[i]. Schreiben von v in Register i: address = i, in = v, load = 1. Ab dem nächsten Zeitschritt gilt RAM[i] = v. Alle anderen Register bleiben unverändert.",
      "Aufbau: Lesen erledigt ein Mux, der aus allen Registern das mit der passenden Adresse auswählt. Schreiben erledigt ein DMux, der das load-Signal nur an dieses eine Register weiterleitet (Lecture 3, S. 78–80). Das Speichern ist sequentiell, die Adressierung kombinatorisch. Deshalb ist jedes Register gleich schnell erreichbar, egal wie groß der RAM ist. Daher der Name „random access“, wahlfreier Zugriff.",
      "Größere RAMs baut man aus kleineren: RAM64 aus 8 RAM8, RAM512 aus 8 RAM64 und so weiter bis RAM16K, den der Hack-Computer braucht."
     ],
     "code": "Chip     Register n   Adressbits k = log2(n)\nRAM8              8      3\nRAM64            64      6\nRAM512          512      9\nRAM4K          4096     12\nRAM16K        16384     14\n\nRAM schreiben:  address = i, in = v, load = 1  ->  ab t+1 gilt RAM[i] = v\nRAM lesen:      address = i                    ->  out = RAM[i]",
     "merke": "Register = w Bits mit gemeinsamem load. RAM = n Register mit Adresse, k = log2(n) Adressbits. Lesen per Mux, Schreiben per DMux."
    },
    {
     "titel": "Der Zähler: Programmzähler (PC)",
     "text": [
      "Ein Programm besteht aus Befehlen, die nacheinander im Speicher stehen. Der Computer muss sich merken, welcher Befehl als Nächstes dran ist. Das erledigt ein besonderes Register, der Programmzähler (program counter, PC) (Lecture 3, S. 52). Er enthält die Adresse des nächsten Befehls.",
      "Der PC kann drei Dinge (Lecture 3, S. 53): zurücksetzen (reset, PC = 0, um beim ersten Befehl zu beginnen), laden (load, PC = n, um zu einem anderen Befehl zu springen) und hochzählen (inc, PC++, um zum nächsten Befehl zu gehen).",
      "Wenn mehrere Steuerbits gleichzeitig 1 sind, gilt eine feste Rangfolge (Lecture 3, S. 54): reset vor load vor inc. Formal: if reset(t): out(t+1) = 0, else if load(t): out(t+1) = in(t), else if inc(t): out(t+1) = out(t) + 1, else out(t+1) = out(t).",
      "Alltagsbild: das Lesezeichen in einem Kochbuch. Normalerweise blätterst du eine Seite weiter (inc). Manchmal steht da „weiter auf Seite 20“ (load). Und bei einem neuen Gericht fängst du vorne an (reset).",
      "Im Kasten ein eigenes Beispiel. Achte auf t = 4: load und inc sind beide 1, load gewinnt. Bei t = 7: reset gewinnt gegen inc."
     ],
     "code": "Eigenes Beispiel, Startwert out(1) = 5:\n\nt       1   2   3   4   5   6   7   8\nin      0   0   0  20   0   0   0   0\nreset   0   0   0   0   0   0   1   0\nload    0   0   0   1   0   0   0   0\ninc     1   1   1   1   1   0   1   1\nout     5   6   7   8  20  21  21   0\n\nt=4: load (vor inc) -> out(5) = 20\nt=6: alle 0       -> out(7) = out(6) = 21\nt=7: reset        -> out(8) = 0",
     "merke": "PC: reset > load > inc > halten. Normal zählt er um 1 weiter, bei Sprüngen wird er geladen."
    },
    {
     "titel": "Überblick: von NAND bis zum Speicher",
     "text": [
      "Jetzt sind alle Bausteine für den Computer da. Zusammengefasst als Kette: NAND → Gatter (Kapitel 1) → Addierer, ALU (Kapitel 2) für das Rechnen. DFF → Bit → Register → RAM und PC (Kapitel 3) für das Speichern.",
      "Die Grenze zwischen beiden Welten: Kombinatorische Chips haben keinen Zustand und brauchen keinen Takt. Sequentielle Chips haben einen Zustand, und der ändert sich nur an Taktflanken. Das DFF ist der einzige sequentielle Grundbaustein, alles andere Speichernde wird daraus gebaut.",
      "In Kapitel 4 benutzt du den Speicher dann als Programmierer: Die Register heißen A und D, der RAM ist der Datenspeicher, und der PC bestimmt, welcher Befehl als Nächstes läuft."
     ],
     "code": "Rechnen (kombinatorisch):  NAND -> Not/And/Or/Xor/Mux -> Addierer -> ALU\nSpeichern (sequentiell):   DFF -> Bit -> Register(16) -> RAM8 -> ... -> RAM16K\n                                              -> PC",
     "merke": "DFF ist der Grundbaustein aller Speicher. Rechnen ist kombinatorisch, Speichern sequentiell."
    }
   ],
   "zusammenfassung": [
    "Kombinatorische Logik: Ausgang hängt nur von den aktuellen Eingängen ab (ALU, Mux). Sequentielle Logik: Ausgang hängt auch von früheren Eingängen ab (Register, RAM).",
    "Takt (clock): Zeit wird in Zyklen geteilt. Taktlänge etwas größer als die größte Verzögerung. Ausgänge nur am Zyklusende betrachten.",
    "DFF: out(t+1) = in(t). Grundbaustein jeder Speicherschaltung, im Kurs fertig vorgegeben.",
    "Flankengesteuert (Blatt 03): Bei steigender Flanke (CLK 0 → 1 zwischen t−1 und t) übernimmt Q den D-Wert aus Spalte t−1, ab Spalte t sichtbar. Sonst bleibt Q gleich.",
    "Schaltwerk: erst Gleichungen für D-Eingänge und Ausgänge, dann Spalte für Spalte. Alle Flip-Flops schalten gleichzeitig mit den alten Werten.",
    "Bit (1-Bit-Register): load = 1 → out(t+1) = in(t), sonst halten. Aufbau aus Mux und DFF mit Rückführung.",
    "Register = w Bits mit gemeinsamem load (Hack: 16). RAM = n Register, k = log2(n) Adressbits, Lesen per Mux, Schreiben per DMux.",
    "RAM-Familie: RAM8 (3 Bit), RAM64 (6), RAM512 (9), RAM4K (12), RAM16K (14).",
    "PC: reset > load > inc > halten. Enthält die Adresse des nächsten Befehls."
   ],
   "karten": [
    {
     "f": "Kombinatorische vs. sequentielle Logik?",
     "a": "Kombinatorisch: Ausgang nur aus den aktuellen Eingängen (ALU, Mux). Sequentiell: Ausgang hängt auch von früheren Eingängen ab, hat einen Zustand (Register, RAM, PC).",
     "q": "Lecture 3, S. 5–6 und 57–58"
    },
    {
     "f": "Wozu dient der Takt (clock)?",
     "a": "Er teilt die Zeit in Zyklen. Man beobachtet Ausgänge nur am Zyklusende, damit Laufzeitverzögerungen keine Rolle spielen.",
     "q": "Lecture 3, S. 10–11"
    },
    {
     "f": "Wie lang wählt man einen Taktzyklus?",
     "a": "Etwas länger als die größte Verzögerung (propagation und computation delay) im Chip.",
     "q": "Lecture 3, S. 11 und 22"
    },
    {
     "f": "Regel des D-Flip-Flops?",
     "a": "out(t+1) = in(t). Der Ausgang ist der Eingang aus dem vorigen Zeitschritt.",
     "q": "Lecture 3, S. 61"
    },
    {
     "f": "Was ist eine steigende Flanke?",
     "a": "Der Wechsel des Taktsignals CLK von 0 auf 1. In der Tabelle zwischen Spalte t−1 (CLK = 0) und t (CLK = 1).",
     "q": "Blatt 03, Hinweise"
    },
    {
     "f": "Welchen D-Wert übernimmt ein positiv flankengesteuertes DFF?",
     "a": "Den Wert unmittelbar vor der Flanke, also aus Spalte t−1. Q zeigt ihn ab Spalte t.",
     "q": "Blatt 03, Hinweise"
    },
    {
     "f": "Warum ändert eine D-Änderung zwischen zwei Flanken Q oft nicht?",
     "a": "Q übernimmt nur den Wert direkt vor einer steigenden Flanke. Was D dazwischen macht, wird nicht abgetastet.",
     "q": "Blatt 03, Hinweise"
    },
    {
     "f": "Was ist Q mit Strich (Q')?",
     "a": "Der negierte Ausgang des Flip-Flops: immer das Gegenteil von Q.",
     "q": "Blatt 03"
    },
    {
     "f": "Regel des 1-Bit-Registers (Bit)?",
     "a": "if load(t): out(t+1) = in(t), else out(t+1) = out(t).",
     "q": "Lecture 3, S. 32"
    },
    {
     "f": "Wie ist ein 1-Bit-Register aufgebaut?",
     "a": "Ein Mux vor einem DFF. sel = load. Der Mux wählt zwischen dem zurückgeführten DFF-Ausgang (halten) und in (laden).",
     "q": "Lecture 3, S. 71"
    },
    {
     "f": "Wie viele Adressbits braucht ein RAM mit n Registern?",
     "a": "k = log2(n). RAM8: 3, RAM64: 6, RAM512: 9, RAM4K: 12, RAM16K: 14.",
     "q": "Lecture 3, S. 47 und 82"
    },
    {
     "f": "Wie schreibt man den Wert v in RAM-Register i?",
     "a": "address = i, in = v, load = 1. Ab dem nächsten Zeitschritt gilt RAM[i] = v.",
     "q": "Lecture 3, S. 48"
    },
    {
     "f": "Welche Chips erledigen Lesen und Schreiben im RAM?",
     "a": "Lesen: ein Mux wählt das Register mit der Adresse aus. Schreiben: ein DMux leitet load nur an dieses Register.",
     "q": "Lecture 3, S. 78–79"
    },
    {
     "f": "Warum heißt es „Random Access“ Memory?",
     "a": "Jedes Register ist unabhängig von der RAM-Größe in einem Zyklus erreichbar.",
     "q": "Lecture 3, S. 49"
    },
    {
     "f": "Was speichert der Programmzähler (PC)?",
     "a": "Die Adresse des Befehls, der als Nächstes geholt und ausgeführt wird.",
     "q": "Lecture 3, S. 52"
    },
    {
     "f": "Rangfolge der PC-Steuerbits?",
     "a": "reset (out = 0) vor load (out = in) vor inc (out + 1). Sonst halten.",
     "q": "Lecture 3, S. 54"
    },
    {
     "f": "Was ist der sequentielle Grundbaustein des Kurses?",
     "a": "Das DFF. Bit, Register, RAM und PC werden daraus gebaut.",
     "q": "Lecture 3, S. 75"
    }
   ],
   "quiz": [
    {
     "typ": "mc",
     "frage": "Welcher Chip ist sequentiell?",
     "optionen": [
      "Mux",
      "ALU",
      "Register",
      "Halbaddierer"
     ],
     "richtig": 2,
     "erklaerung": "Ein Register speichert einen Zustand über die Zeit. Mux, ALU und Halbaddierer sind kombinatorisch.",
     "q": "Lecture 3, S. 57–58"
    },
    {
     "typ": "mc",
     "frage": "Ein DFF bekommt in = 1, 0, 0, 1 in den Schritten t = 1, 2, 3, 4. Was ist out(5)?",
     "optionen": [
      "0",
      "1",
      "hängt vom Startwert ab",
      "unbestimmt"
     ],
     "richtig": 1,
     "erklaerung": "out(t+1) = in(t), also out(5) = in(4) = 1.",
     "q": "Lecture 3, S. 61"
    },
    {
     "typ": "text",
     "frage": "Positiv flankengesteuertes DFF, Startwert Q = 0. CLK = 0 1 0 1 0 1 und D = 1 0 0 1 1 0 (Spalten t = 0 … 5). Gib die Q-Zeile als 6 Ziffern an.",
     "loesung": [
      "011001",
      "0 1 1 0 0 1"
     ],
     "erklaerung": "Flanken bei t = 1, 3, 5. t = 1: D(0) = 1 → Q = 1. t = 3: D(2) = 0 → Q = 0. t = 5: D(4) = 1 → Q = 1. Dazwischen hält Q. Ergebnis 0 1 1 0 0 1.",
     "q": "Eigene Übung (Methode Blatt 03)"
    },
    {
     "typ": "text",
     "frage": "Positiv flankengesteuertes DFF, Startwert Q = 0. CLK = 0 0 1 1 0 1 1 0 und D = 0 1 0 0 1 1 0 1 (t = 0 … 7). Gib die Q-Zeile als 8 Ziffern an.",
     "loesung": [
      "00111111",
      "0 0 1 1 1 1 1 1"
     ],
     "erklaerung": "Flanken bei t = 2 (CLK 0 → 1) und t = 5. t = 2: D(1) = 1 → Q = 1. t = 5: D(4) = 1 → Q bleibt 1. Die 0 bei D(2), D(3) und D(6) wird nie abgetastet.",
     "q": "Eigene Übung (Methode Blatt 03)"
    },
    {
     "typ": "zahl",
     "frage": "In welcher Spalte liegt die erste steigende Flanke, wenn CLK = 1 1 0 0 0 1 1 0 (t = 0 … 7)?",
     "loesung": 5,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Eine steigende Flanke braucht CLK = 0 in t−1 und 1 in t. Das ist zuerst bei t = 5 der Fall. Bei t = 0 ist CLK zwar 1, aber es gibt keinen Wechsel von 0.",
     "q": "Blatt 03, Hinweise"
    },
    {
     "typ": "zahl",
     "frage": "1-Bit-Register, Startwert out(1) = 0. In t = 1, 2, 3, 4 gilt in = 1, 1, 0, 0 und load = 0, 1, 0, 0. Welchen Wert hat out(5)?",
     "loesung": 1,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "t = 2: load = 1, in = 1 → out(3) = 1. Danach load = 0, der Wert bleibt: out(4) = out(5) = 1.",
     "q": "Lecture 3, S. 32"
    },
    {
     "typ": "zahl",
     "frage": "16-Bit-Register, Startwert 0. In t = 1 … 4 gilt in = 4, 7, 9, 2 und load = 0, 1, 0, 0. Welchen Wert hat out(5)?",
     "loesung": 7,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Nur bei t = 2 wird geladen: out(3) = 7. Danach bleibt 7 stehen, obwohl in sich ändert.",
     "q": "Lecture 3, S. 44"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Adressbits braucht ein RAM mit 4096 Registern?",
     "loesung": 12,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^12 = 4096, also k = 12 (RAM4K).",
     "q": "Lecture 3, S. 82"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Adressbits braucht ein RAM mit 2048 Registern?",
     "loesung": 11,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "2^11 = 2048, also k = 11.",
     "q": "Lecture 3, S. 47"
    },
    {
     "typ": "zahl",
     "frage": "Aus wie vielen RAM8-Chips besteht ein RAM64?",
     "loesung": 8,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "64 / 8 = 8. Die oberen 3 Adressbits wählen den RAM8, die unteren 3 das Register darin.",
     "q": "Lecture 3, S. 81"
    },
    {
     "typ": "zahl",
     "frage": "Wie viele Bits speichert ein RAM16K mit 16-Bit-Registern insgesamt?",
     "loesung": 262144,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "16384 Register · 16 Bit = 262144 Bit.",
     "q": "Lecture 3, S. 82"
    },
    {
     "typ": "zahl",
     "frage": "PC mit Startwert 0. In t = 1 … 4: (inc = 1), (inc = 1), (load = 1, in = 9), (inc = 1). Welchen Wert hat out(5)?",
     "loesung": 10,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "out(2) = 1, out(3) = 2, out(4) = 9 (geladen), out(5) = 10.",
     "q": "Lecture 3, S. 54"
    },
    {
     "typ": "zahl",
     "frage": "PC hat den Wert 3. Im nächsten Schritt sind reset = 1, load = 1 (in = 7) und inc = 1. Welchen Wert hat der PC danach?",
     "loesung": 0,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "reset hat Vorrang vor load und inc.",
     "q": "Lecture 3, S. 54"
    },
    {
     "typ": "mc",
     "frage": "Was passiert im RAM, wenn load = 0 ist?",
     "optionen": [
      "Alle Register werden gelöscht",
      "Der RAM behält seinen Zustand, out zeigt RAM[address]",
      "RAM[address] wird auf in gesetzt",
      "Der RAM gibt 0 aus"
     ],
     "richtig": 1,
     "erklaerung": "Bei load = 0 wird nichts geschrieben. Gelesen wird aber immer: out = RAM[address].",
     "q": "Lecture 3, S. 48"
    },
    {
     "typ": "mc",
     "frage": "Warum wählt man die Taktlänge etwas größer als die größte Verzögerung?",
     "optionen": [
      "Damit der Computer Strom spart",
      "Damit am Ende jedes Takts alle Signale stabil sind",
      "Damit der PC schneller zählt",
      "Damit der RAM größer wird"
     ],
     "richtig": 1,
     "erklaerung": "Nur wenn alle Signale sich beruhigt haben, sind die Ausgänge am Zyklusende korrekt.",
     "q": "Lecture 3, S. 11 und 22"
    },
    {
     "typ": "mc",
     "frage": "Schaltwerk mit D1 = X, D2 = Q1, Y = Q1 AND NOT Q2. Wann ist Y = 1?",
     "optionen": [
      "Immer wenn X = 1 ist",
      "Einen Takt lang, nachdem X (abgetastet) von 0 auf 1 gewechselt hat",
      "Nur wenn X dauerhaft 0 ist",
      "Nie"
     ],
     "richtig": 1,
     "erklaerung": "Q1 ist der zuletzt abgetastete X-Wert, Q2 der davor. Y = 1 heißt: jetzt 1, vorher 0.",
     "q": "Eigenes Beispiel (Lektion Schaltwerke)"
    },
    {
     "typ": "mc",
     "frage": "Welcher Baustein steckt neben dem DFF im 1-Bit-Register?",
     "optionen": [
      "Ein Mux",
      "Ein Volladdierer",
      "Ein XOR",
      "Ein zweiter Takt"
     ],
     "richtig": 0,
     "erklaerung": "Der Mux wählt mit load zwischen dem alten Wert und dem neuen Eingang.",
     "q": "Lecture 3, S. 71"
    }
   ],
   "formeln": [
    {
     "name": "D-Flip-Flop",
     "tex": "out(t+1) = in(t)",
     "text": "Ausgang = Eingang vom vorigen Schritt.",
     "q": "Lecture 3, S. 61"
    },
    {
     "name": "Positive Flanke (Spaltenmodell)",
     "code": "Flanke zwischen t-1 und t, wenn CLK(t-1) = 0 und CLK(t) = 1\nan der Flanke: Q(t) = D(t-1)\nsonst:         Q(t) = Q(t-1)\nQ' = NOT Q",
     "text": "Regel aus den Hinweisen von Blatt 03.",
     "q": "Blatt 03, Hinweise"
    },
    {
     "name": "1-Bit-Register (Bit)",
     "code": "if load(t): out(t+1) = in(t)\nelse:       out(t+1) = out(t)",
     "text": "Laden oder halten.",
     "q": "Lecture 3, S. 32"
    },
    {
     "name": "RAM-Adressbits",
     "tex": "k = \\log_2 n",
     "text": "n Register.",
     "q": "Lecture 3, S. 47",
     "bsp": "RAM8: 3, RAM64: 6, RAM512: 9, RAM4K: 12, RAM16K: 14"
    },
    {
     "name": "RAM benutzen",
     "code": "lesen:     address = i            -> out = RAM[i]\nschreiben: address = i, in = v, load = 1 -> RAM[i] = v ab t+1",
     "text": "Lesen geht immer, Schreiben mit load.",
     "q": "Lecture 3, S. 48"
    },
    {
     "name": "Programmzähler (PC)",
     "code": "if reset(t):     out(t+1) = 0\nelse if load(t): out(t+1) = in(t)\nelse if inc(t):  out(t+1) = out(t) + 1\nelse:            out(t+1) = out(t)",
     "text": "Rangfolge reset > load > inc.",
     "q": "Lecture 3, S. 54"
    }
   ],
   "aufgaben": [
    {
     "titel": "Blatt 03, Aufgabe 3.1: D-Flip-Flop",
     "q": "Aufgabenblatt 3, Aufgabe 3.1 (noch ohne Lösungsvorschlag)",
     "text": "Gegeben ist ein positiv flankengesteuertes D-Flip-Flop mit dem Verlauf von CLK und D (Tabelle). Zum Zeitpunkt t = 0 ist Q = 0. 1. Markiere alle steigenden Taktflanken. 2. Ergänze den Verlauf des Ausgangs Q. 3. Zu welchen Zeitpunkten ändert sich D, ohne dass sich dies auf Q auswirkt? Warum?",
     "code": "t    0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19\nCLK  0  0  1  1  0  0  1  1  0  0  1  1  0  0  1  1  0  0  1  1\nD    0  1  1  0  0  0  1  1  1  0  0  1  0  1  0  0  1  0  1  1\nQ    0",
     "loesung": [
      "Lösung folgt, sobald der offizielle Lösungsvorschlag auf ISIS ist.",
      "Bis dahin: Die Methode ist in der Lektion „Flankengesteuerte Flip-Flops in Tabellen“ an eigenen Signalen vorgerechnet. Die eigene Übung unten hat eine Lösung zum Vergleichen."
     ]
    },
    {
     "titel": "Blatt 03, Aufgabe 3.2: Schaltwerk mit zwei D-Flip-Flops",
     "q": "Aufgabenblatt 3, Aufgabe 3.2 (noch ohne Lösungsvorschlag)",
     "text": "Ein Schaltwerk aus zwei D-Flip-Flops FF1 und FF2 am selben Takt CLK, einem XOR- und einem AND-Gatter (Schaltbild nur als Grafik im PDF). Eingang X, Ausgang Y. 1. Stelle die booleschen Gleichungen für D1, D2 und Y auf. 2. Ergänze die Verläufe von D1, D2, Q2 und Y. 3. X sei dauerhaft 1: Welche Zustände (Q1, Q2) werden ab (0, 0) durchlaufen? Wie oft ist Y = 1, bezogen auf die Anzahl der Taktflanken? Wofür könnte man die Schaltung verwenden? 4. Was passiert, wenn X dauerhaft 0 ist? Betrachte alle vier Startzustände.",
     "code": "t    0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17\nCLK  0  1  0  1  0  1  0  1  0  1  0  1  0  1  0  1  0  1\nX    1  1  1  0  1  1  1  1  1  1  1  0  0  0  0  1  0  0\nD1\nD2\nQ2   0\nY",
     "loesung": [
      "Lösung folgt, sobald der offizielle Lösungsvorschlag auf ISIS ist.",
      "Bis dahin: Das Vorgehen (Gleichungen ablesen, dann Spalte für Spalte, alle Flip-Flops schalten gleichzeitig) steht in der Lektion „Schaltwerke“, mit einer anderen Schaltung vorgerechnet."
     ]
    },
    {
     "titel": "Eigene Übung: D-Flip-Flop mit unregelmäßigem Takt",
     "q": "Eigene Übung (Methode wie Blatt 03)",
     "text": "Positiv flankengesteuertes DFF, Startwert Q = 0. Markiere die steigenden Flanken und ergänze Q. Welche Änderungen von D wirken sich nicht auf Q aus?",
     "code": "t      0  1  2  3  4  5  6  7  8  9\nCLK    0  1  0  0  1  1  0  1  0  1\nD      1  0  1  1  0  1  0  0  1  1\nQ      0  ?  ?  ?  ?  ?  ?  ?  ?  ?",
     "loesung": [
      "Flanken: CLK springt von 0 auf 1 bei t = 1, 4, 7 und 9. (Bei t = 5 ist CLK schon vorher 1, also keine Flanke.)",
      "t = 1: D(0) = 1 → Q = 1. t = 4: D(3) = 1 → Q bleibt 1. t = 7: D(6) = 0 → Q = 0. t = 9: D(8) = 1 → Q = 1.",
      "Ohne Wirkung sind zum Beispiel die Änderung bei t = 1 (D wird 0) und die bei t = 2 (D wird wieder 1): Bei der nächsten Flanke (t = 4) zählt nur D(3) = 1, und Q war schon 1. Ebenso D(4) = 0 und D(5) = 1, die zwischen den Flanken liegen.",
      "Grund: Ein flankengesteuertes DFF schaut nur auf den D-Wert direkt vor einer steigenden Flanke."
     ],
     "loesungCode": "t      0  1  2  3  4  5  6  7  8  9\nCLK    0  1  0  0  1  1  0  1  0  1\n          ^        ^        ^     ^\nD      1  0  1  1  0  1  0  0  1  1\nQ      0  1  1  1  1  1  1  0  0  1"
    },
    {
     "titel": "Eigene Übung: Schaltwerk mit einem Flip-Flop",
     "q": "Eigene Übung (Methode wie Blatt 03)",
     "text": "Ein DFF mit D = NOT Q, Ausgang Y = Q AND X. Startwert Q = 0. Ergänze Q, D und Y. Was macht die Schaltung mit Q?",
     "code": "t      0  1  2  3  4  5  6  7  8  9 10 11\nCLK    0  1  0  1  0  1  0  1  0  1  0  1\nX      1  1  1  1  0  0  1  1  1  1  1  1\nQ      0  ?  ?  ?  ?  ?  ?  ?  ?  ?  ?  ?",
     "loesung": [
      "Gleichungen: D = NOT Q, Y = Q AND X.",
      "Flanken bei allen ungeraden t (CLK = 0, 1, 0, 1, …). An jeder Flanke wird Q zu NOT Q aus der Spalte davor, Q wechselt also bei jeder Flanke.",
      "Q: 0 1 1 0 0 1 1 0 0 1 1 0. D ist in jeder Spalte das Gegenteil von Q.",
      "Y = Q AND X. Bei t = 5 ist Q = 1, aber X = 0, also Y = 0.",
      "Bedeutung: Q schaltet bei jeder Flanke um. Q hat damit die halbe Frequenz des Takts. So etwas heißt Frequenzteiler (Taktteiler). X wirkt wie ein Freigabesignal für den Ausgang."
     ],
     "loesungCode": "t      0  1  2  3  4  5  6  7  8  9 10 11\nCLK    0  1  0  1  0  1  0  1  0  1  0  1\nX      1  1  1  1  0  0  1  1  1  1  1  1\nQ      0  1  1  0  0  1  1  0  0  1  1  0\nD      1  0  0  1  1  0  0  1  1  0  0  1   (D = NOT Q)\nY      0  1  1  0  0  0  1  0  0  1  1  0   (Y = Q AND X)"
    }
   ]
  },
  {
   "id": "k4",
   "titel": "Kapitel 4: Maschinensprache (Hack)",
   "abschnitt": "Vorlesung Kapitel 4 (Machine Language), aktuelle Woche, noch kein Übungsblatt mit Lösung",
   "seiten": "Lecture 4 (Machine Language), Intro (Binärcode-Beispiel), Buchkapitel computer_architecture.pdf (Abschnitt 5.2: CPU, Speicherkarte, Bildschirm, Tastatur)",
   "quellen": [
    {
     "name": "Lecture 4: Machine Language (Folien)",
     "pfad": "material/TGI/04 Machine Language/Lecture4.pdf"
    },
    {
     "name": "Buchkapitel: Computer Architecture (Hack-Plattform)",
     "pfad": "material/TGI/04 Machine Language/computer_architecture.pdf"
    },
    {
     "name": "Tutorium 3: Mitschrift (handschriftlich)",
     "pfad": "material/TGI/04 Machine Language/TuT_3.pdf"
    },
    {
     "name": "Intro (Binärcode-Beispiel, Folien 6–8)",
     "pfad": "material/TGI/00 Intro/Intro.pdf"
    }
   ],
   "lektionen": [
    {
     "titel": "Ein Computer, viele Programme: das Stored-Program-Konzept",
     "text": [
      "Bisher hast du Chips gebaut, die genau eine Sache tun. Ein Computer ist anders: Dieselbe Hardware kann viele verschiedene Programme ausführen (Lecture 4, S. 6). Die Folien zeigen dazu Meilensteine von 1843 bis 1945, darunter die universelle Turingmaschine (1936) als theoretisches Modell eines Universalrechners.",
      "Die Von-Neumann-Architektur (Lecture 4, S. 10) besteht aus der CPU (central processing unit, Prozessor) mit ALU und Registern, dem Speicher (memory) und Ein- und Ausgabe (input, output). Die CPU holt sich einen Befehl aus dem Speicher, führt ihn aus und holt den nächsten.",
      "Stored-Program-Konzept (Lecture 4, S. 11): Das Programm steht im Speicher, genau wie die Daten. Programme sind auch nur Bitmuster. Deshalb kann man ein anderes Programm laden, ohne die Hardware zu ändern. Alltagsbild: ein Küchenroboter, dem man jedes Mal ein anderes Rezept einlegt.",
      "Maschinensprache (machine language) ist die Sprache, die die CPU direkt versteht. Ein Programm darin ist eine Folge von Befehlen (instructions), jeder Befehl ein Bitmuster."
     ],
     "merke": "Programme stehen wie Daten im Speicher (stored program). Die CPU holt Befehl für Befehl und führt ihn aus."
    },
    {
     "titel": "Register, Assembler und Sprünge allgemein",
     "text": [
      "Aus Sicht der Maschinensprache ist ein Computer eine CPU, die Register bearbeitet (Lecture 4, S. 13). Es gibt wenige Register direkt in der CPU, die man über ihren Namen anspricht, und sehr viele Register im Speicher, die man über ihre Adresse anspricht. Ein Register in der CPU ist schnell, weil der Weg kurz ist.",
      "Typische Befehle (in einer erfundenen Beispielsyntax, Lecture 4, S. 15): add R1, R2 heißt R1 ← R1 + R2. load R1, 137 heißt R1 ← Memory[137]. jgt R1, 15 heißt: wenn R1 > 0, springe zu Befehl 15. Die Syntax unterscheidet sich von Computer zu Computer, die Idee ist immer gleich: Register bearbeiten.",
      "Normalerweise führt die CPU den nächsten Befehl aus. Ein Sprung (branching) lässt sie woanders weitermachen, zum Beispiel am Anfang einer Schleife. Ein bedingter Sprung (conditional branching) springt nur, wenn eine Bedingung erfüllt ist (Lecture 4, S. 16–19).",
      "Bitmuster schreibt niemand gern von Hand. Deshalb gibt es Assemblersprache (assembly language): dieselben Befehle als lesbarer Text mit Namen statt Zahlen. Ein Programm namens Assembler übersetzt den Text in Binärcode (Lecture 4, S. 20). Statt Zeilennummern benutzt man symbolische Namen (Labels). Das macht Programme lesbar und verschiebbar."
     ],
     "merke": "Maschinensprache bearbeitet Register. Assembler übersetzt lesbare Befehle in Bitmuster. Sprünge ändern, welcher Befehl als Nächstes kommt."
    },
    {
     "titel": "Der Hack-Computer: ROM, RAM und die Register A, D, M",
     "text": [
      "Hack ist der 16-Bit-Computer aus Nand to Tetris (Lecture 4, S. 22). Er hat zwei getrennte Speicher. Der ROM (read-only memory, Befehlsspeicher) enthält das Programm. Er kann nur gelesen werden. Der RAM (Datenspeicher) enthält die Daten und kann gelesen und beschrieben werden. Beide bestehen aus 16-Bit-Registern mit den Adressen 0, 1, 2, …",
      "In der CPU gibt es zwei Register. D (data register) speichert nur Daten. A (address register) kann Daten speichern, dient aber vor allem als Adresse.",
      "M ist kein eigenes Register, sondern ein Name: M steht für das RAM-Register, dessen Adresse gerade in A steht, also $M = RAM[A]$ (Lecture 4, S. 23). Steht in A die 100, dann ist M dasselbe wie RAM[100]. Alltagsbild: A ist der Zeigefinger, der auf ein Schließfach zeigt, und M ist der Inhalt dieses Fachs.",
      "Auch der ROM wird über A angesprochen: ROM[A] ist der Befehl, zu dem ein Sprung führen würde. Ob gerade RAM[A] oder ROM[A] gemeint ist, hängt vom Befehl ab (Lecture 4, S. 24–25).",
      "Laden eines Programms: Der erste Befehl kommt an ROM-Adresse 0, der nächste an Adresse 1 und so weiter (Lecture 4, S. 49). Der Programmzähler PC aus Kapitel 3 zeigt auf den aktuellen Befehl."
     ],
     "code": "CPU:  A (Adresse/Daten)    D (Daten)        PC (nächster Befehl)\nROM:  ROM[0], ROM[1], ...  das Programm, nur lesbar\nRAM:  RAM[0], RAM[1], ...  die Daten\n\nM = RAM[A]   (das Register, auf das A gerade zeigt)",
     "merke": "Hack: 16 Bit, ROM für Befehle, RAM für Daten. Register A und D. M = RAM[A]."
    },
    {
     "titel": "Der A-Befehl: @wert",
     "text": [
      "Hack hat nur zwei Arten von Befehlen: den A-Befehl (A-instruction, A für address) und den C-Befehl (C-instruction, C für compute) (Lecture 4, S. 28).",
      "Der A-Befehl hat die Form @xxx, wobei xxx eine nicht-negative Zahl ist. Bedeutung: $A \\leftarrow xxx$ (Lecture 4, S. 29). Nach @19 steht in A die 19.",
      "Nebenwirkung: Damit ist automatisch RAM[19] als M ausgewählt (und ROM[19] als Sprungziel). Fast jeder Zugriff auf den Speicher beginnt deshalb mit einem A-Befehl.",
      "Konstanten bekommt man nur über A in die CPU. Um D auf 1954 zu setzen, schreibst du @1954 und dann D=A. Einen Befehl „D=1954“ gibt es nicht, weil im C-Befehl nur 0, 1 und −1 als Konstanten erlaubt sind.",
      "Wichtig: Mit @ kann man nur Zahlen von 0 bis 32767 laden, denn ein Bit des 16-Bit-Befehls wird gebraucht, um ihn als A-Befehl zu kennzeichnen. Negative Konstanten bildest du anschließend, zum Beispiel @5 und D=-A."
     ],
     "code": "@1954     // A = 1954\nD=A       // D = 1954\n\n@23\nD=D+A     // D = D + 23",
     "merke": "@xxx setzt A auf xxx und wählt damit M = RAM[xxx] aus. Konstanten kommen nur über A in die CPU."
    },
    {
     "titel": "Der C-Befehl: dest = comp ; jump",
     "text": [
      "Der C-Befehl hat drei Teile: $\\text{dest} = \\text{comp} \\,;\\, \\text{jump}$. comp ist die Rechnung, die die ALU ausführt. dest (destination, Ziel) sagt, wohin das Ergebnis geschrieben wird. jump sagt, ob danach gesprungen wird. dest und jump dürfen fehlen.",
      "comp darf sein (Lecture 4, S. 30; ALU-Tabelle aus Kapitel 2): 0, 1, −1, D, A, !D, !A, −D, −A, D+1, A+1, D−1, A−1, D+A, D−A, A−D, D&A, D|A. Statt A darf überall M stehen: M, !M, −M, M+1, M−1, D+M, D−M, M−D, D&M, D|M. Mehr gibt es nicht. „D=D+5“ ist also kein gültiger Befehl, die 5 muss erst über @5 nach A.",
      "dest ist eine beliebige Kombination aus A, D und M, zum Beispiel D, M, MD oder AM. Bei MD wird das Ergebnis in beide geschrieben.",
      "Das wichtigste Muster (Lecture 4, S. 40): Um mit einer Speicherzelle zu arbeiten, benutzt du ein Paar. Der A-Befehl wählt die Zelle aus, der C-Befehl arbeitet mit M. Beispiel: RAM[100] = 17. Zuerst @17, D=A (A dient als Datenregister), dann @100, M=D (A dient als Adresse).",
      "Ein häufiger Fehler: Nach @100 ist der alte Wert von A weg. Was du noch brauchst, musst du vorher in D sichern. Im Beispiel RAM[3] = RAM[3] − 15 unten steht die 15 deshalb erst in D, bevor @3 den Wert von A überschreibt."
     ],
     "code": "RAM[3] = RAM[3] - 15   (Startwert RAM[3] = 40):\n\n@15\nD=A       // D = 15\n@3\nM=M-D     // RAM[3] = RAM[3] - D\n\nAblauf:\n  0  @15        A = 15     D = 0      \n  1  D=A        A = 15     D = 15     \n  2  @3         A = 3      D = 15     \n  3  M=M-D      A = 3      D = 15     RAM[3] = 25",
     "merke": "C-Befehl: dest = comp ; jump. Nur Konstanten 0, 1, −1 direkt. Speicherzugriff immer als Paar: @adresse, dann Befehl mit M."
    },
    {
     "titel": "Sprünge in Hack",
     "text": [
      "Ein Sprung funktioniert in Hack in zwei Schritten (Lecture 4, S. 57): Der A-Befehl wählt das Ziel (die ROM-Adresse), ein C-Befehl mit jump-Teil springt dorthin. Unbedingt springen: @7 und dann 0;JMP. Das „0;“ ist nötig, weil jeder C-Befehl eine Rechnung haben muss.",
      "Bedingte Sprünge vergleichen das Ergebnis der comp-Rechnung mit 0 (Lecture 4, S. 59): JGT (größer 0), JGE (größer oder gleich 0), JLT (kleiner 0), JLE (kleiner oder gleich 0), JEQ (gleich 0), JNE (ungleich 0), JMP (immer). Meist steht D davor, also D;JGT. Erlaubt ist aber jede comp-Rechnung, etwa D+1;JEQ.",
      "Vergleiche zweier Zahlen baust du über eine Differenz: „Ist x < y?“ heißt „Ist x − y < 0?“. Beispiel aus der Vorlesung (Lecture 4, S. 65): if (RAM[3] < 100) goto 12. Erst D = RAM[3] − 100 berechnen, dann @12 und D;JLT.",
      "Hier siehst du, warum die ALU die Statusbits zr (Ergebnis = 0) und ng (Ergebnis < 0) hat (Kapitel 2). Daraus entscheidet die CPU, ob die Sprungbedingung erfüllt ist."
     ],
     "code": "// if (RAM[3] < 100) goto 12\n@3\nD=M\n@100\nD=D-A     // D = RAM[3] - 100\n@12\nD;JLT     // springe, wenn D < 0\n\nMit RAM[3] = 40:  D = -60 < 0  -> Sprung zu ROM[12]\nMit RAM[3] = 150: D = 50       -> kein Sprung, weiter mit Befehl 6",
     "merke": "Ziel mit @ wählen, dann comp;JXX. Vergleiche über Differenz und Vergleich mit 0."
    },
    {
     "titel": "Symbole: vordefinierte Namen, Variablen, Labels",
     "text": [
      "Nach @ darf statt einer Zahl auch ein Symbol stehen (Lecture 4, S. 67). Der Assembler ersetzt es durch eine Zahl. Es gibt drei Arten.",
      "Vordefinierte Symbole (Lecture 4, S. 72): R0 bis R15 stehen für die Adressen 0 bis 15 („virtuelle Register“). @R2 ist dasselbe wie @2, aber man sieht sofort, dass ein Speicherregister gemeint ist. Dazu kommen SCREEN = 16384 und KBD = 24576 (Bildschirm und Tastatur, eigene Lektion).",
      "Variablen (Lecture 4, S. 69): Benutzt du ein neues Symbol wie @i oder @sum, das nirgends als Label definiert ist, legt der Assembler eine Variable an. Die erste bekommt RAM-Adresse 16, die nächste 17 und so weiter, in der Reihenfolge des ersten Auftretens. Du musst dich um die Adressen nicht kümmern.",
      "Labels (Lecture 4, S. 75): Eine Zeile (NAME) ist kein Befehl, sondern eine Sprungmarke. Der Assembler bindet NAME an die Adresse des nächsten echten Befehls. Labels zählen beim Durchnummerieren nicht mit. @LOOP gefolgt von 0;JMP springt dann zu dieser Stelle.",
      "Im Kasten das Beispiel der Vorlesung. Die Befehle werden ab 0 gezählt, die Label-Zeilen nicht. Der erste Befehl nach (LOOP) hat die Nummer 4, deshalb ist LOOP = 4. Nach (CONT) käme Befehl 12, also CONT = 12. Die Variable i bekommt Adresse 16."
     ],
     "code": "Nr.  Code\n 0   @1000\n 1   D=A\n 2   @i          // neue Variable -> i = 16\n 3   M=D         // i = 1000\n     (LOOP)      // LOOP = 4\n 4   @i\n 5   D=M\n 6   @CONT\n 7   D;JEQ       // if (i == 0) goto CONT\n 8   @i\n 9   M=M-1       // i = i - 1\n10   @LOOP\n11   0;JMP       // goto LOOP\n     (CONT)      // CONT = 12",
     "merke": "R0–R15 = Adressen 0–15. Neue Symbole = Variablen ab Adresse 16. (LABEL) = Adresse des nächsten Befehls."
    },
    {
     "titel": "Erste ganze Programme: Add und Signum",
     "text": [
      "Gute Praxis (Lecture 4, S. 78): Schreib zuerst Pseudocode, also das Programm in einfacher Sprache mit if und goto. Übersetze dann Zeile für Zeile in Hack.",
      "Ein zweiter wichtiger Punkt (Lecture 4, S. 80–83): Der Speicher ist nie leer. Nach dem letzten Befehl stehen im ROM irgendwelche Bitmuster, die die CPU sonst als Befehle ausführen würde. Deshalb endet jedes Hack-Programm mit einer Endlosschleife: (END), @END, 0;JMP.",
      "Programm Add (Lecture 4, S. 44–45 und 77): RAM[2] = RAM[0] + RAM[1] + 17. Rechne den Ablauf im Kasten mit RAM[0] = 5 und RAM[1] = 8 nach. Am Ende steht 30 in RAM[2].",
      "Programm Signum (Lecture 4, S. 78): Ist R0 ≥ 0, wird R1 = 1, sonst R1 = −1. Pseudocode: if (R0 ≥ 0) goto POS. R1 = −1. goto END. POS: R1 = 1. END. In Hack wird jedes goto ein Paar aus @Ziel und Sprungbefehl."
     ],
     "code": "// Add.asm: RAM[2] = RAM[0] + RAM[1] + 17\n   @R0\n   D=M        // D = RAM[0]\n   @R1\n   D=D+M      // D = D + RAM[1]\n   @17\n   D=D+A      // D = D + 17\n   @R2\n   M=D        // RAM[2] = D\n(END)\n   @END\n   0;JMP      // Endlosschleife\n\nAblauf mit RAM[0] = 5, RAM[1] = 8:\n  0  @R0        A = 0      D = 0      \n  1  D=M        A = 0      D = 5      \n  2  @R1        A = 1      D = 5      \n  3  D=D+M      A = 1      D = 13     \n  4  @17        A = 17     D = 13     \n  5  D=D+A      A = 17     D = 30     \n  6  @R2        A = 2      D = 30     \n  7  M=D        A = 2      D = 30     RAM[2] = 30\n  8  @END       A = 8      D = 30     \n\n// Signum.asm: if R0 >= 0 then R1 = 1 else R1 = -1\n   @R0\n   D=M\n   @POS\n   D;JGE      // if R0 >= 0 goto POS\n   @R1\n   M=-1       // R1 = -1\n   @END\n   0;JMP      // goto END\n(POS)\n   @R1\n   M=1        // R1 = 1\n(END)\n   @END\n   0;JMP\n\nAblauf mit RAM[0] = -3:\n  0  @R0        A = 0      D = 0      \n  1  D=M        A = 0      D = -3     \n  2  @POS       A = 8      D = -3     \n  3  D;JGE      A = 8      D = -3     \n  4  @R1        A = 1      D = -3     \n  5  M=-1       A = 1      D = -3     RAM[1] = -1\n  6  @END       A = 10     D = -3     \n  7  0;JMP      A = 10     D = -3     \n 10  @END       A = 10     D = -3     ",
     "merke": "Erst Pseudocode, dann Hack. Jedes Programm endet mit (END) @END 0;JMP."
    },
    {
     "titel": "Schleifen: Summe von 1 bis N",
     "text": [
      "Eine Schleife (loop) wiederholt Befehle. In Hack gibt es kein while. Du baust es aus einem Label am Schleifenanfang, einer Abbruchbedingung mit bedingtem Sprung und einem unbedingten Sprung zurück.",
      "Beispiel aus der Vorlesung (Lecture 4, S. 87–88): R1 = 1 + 2 + … + R0. Pseudocode: i = 1. sum = 0. LOOP: if (i > R0) goto STOP. sum = sum + i. i = i + 1. goto LOOP. STOP: R1 = sum.",
      "Die Bedingung i > R0 wird zu D = i − R0 und D;JGT. Ist i − R0 > 0, ist die Schleife fertig.",
      "Verfolge den Ablauf im Kasten mit R0 = 2. Die Variablen bekommen die Adressen i = 16 und sum = 17. Achte darauf, wie sich RAM[16] und RAM[17] ändern. Am Ende steht 1 + 2 = 3 in RAM[1]. Diese Art Tabelle (Befehl, A, D, Speicher) ist auch die beste Methode für Klausurfragen der Art „Welchen Wert hat … nach diesem Code?“."
     ],
     "code": "// Sum1ToN: R1 = 1 + 2 + ... + R0\n   @i\n   M=1        // i = 1\n   @sum\n   M=0        // sum = 0\n(LOOP)\n   @i\n   D=M\n   @R0\n   D=D-M      // D = i - R0\n   @STOP\n   D;JGT      // if (i > R0) goto STOP\n   @sum\n   D=M\n   @i\n   D=D+M      // D = sum + i\n   @sum\n   M=D        // sum = sum + i\n   @i\n   M=M+1      // i = i + 1\n   @LOOP\n   0;JMP      // goto LOOP\n(STOP)\n   @sum\n   D=M\n   @R1\n   M=D        // R1 = sum\n(END)\n   @END\n   0;JMP\n\nAblauf mit R0 = 2 (i = RAM[16], sum = RAM[17], R1 = RAM[1]):\n  0  @i         A = 16     D = 0      \n  1  M=1        A = 16     D = 0      RAM[16] = 1\n  2  @sum       A = 17     D = 0      \n  3  M=0        A = 17     D = 0      RAM[17] = 0\n  4  @i         A = 16     D = 0      \n  5  D=M        A = 16     D = 1      \n  6  @R0        A = 0      D = 1      \n  7  D=D-M      A = 0      D = -1     \n  8  @STOP      A = 20     D = -1     \n  9  D;JGT      A = 20     D = -1     \n 10  @sum       A = 17     D = -1     \n 11  D=M        A = 17     D = 0      \n 12  @i         A = 16     D = 0      \n 13  D=D+M      A = 16     D = 1      \n 14  @sum       A = 17     D = 1      \n 15  M=D        A = 17     D = 1      RAM[17] = 1\n 16  @i         A = 16     D = 1      \n 17  M=M+1      A = 16     D = 1      RAM[16] = 2\n 18  @LOOP      A = 4      D = 1      \n 19  0;JMP      A = 4      D = 1      \n  4  @i         A = 16     D = 1      \n  5  D=M        A = 16     D = 2      \n  6  @R0        A = 0      D = 2      \n  7  D=D-M      A = 0      D = 0      \n  8  @STOP      A = 20     D = 0      \n  9  D;JGT      A = 20     D = 0      \n 10  @sum       A = 17     D = 0      \n 11  D=M        A = 17     D = 1      \n 12  @i         A = 16     D = 1      \n 13  D=D+M      A = 16     D = 3      \n 14  @sum       A = 17     D = 3      \n 15  M=D        A = 17     D = 3      RAM[17] = 3\n 16  @i         A = 16     D = 3      \n 17  M=M+1      A = 16     D = 3      RAM[16] = 3\n 18  @LOOP      A = 4      D = 3      \n 19  0;JMP      A = 4      D = 3      \n  4  @i         A = 16     D = 3      \n  5  D=M        A = 16     D = 3      \n  6  @R0        A = 0      D = 3      \n  7  D=D-M      A = 0      D = 1      \n  8  @STOP      A = 20     D = 1      \n  9  D;JGT      A = 20     D = 1      \n 20  @sum       A = 17     D = 1      \n 21  D=M        A = 17     D = 3      \n 22  @R1        A = 1      D = 3      \n 23  M=D        A = 1      D = 3      RAM[1] = 3\n 24  @END       A = 24     D = 3      ",
     "merke": "Schleife = Label + Abbruchtest mit bedingtem Sprung + @LOOP 0;JMP zurück. Bei Fragen zum Ergebnis: Tabelle mit A, D und Speicher führen."
    },
    {
     "titel": "Zeiger und Arrays",
     "text": [
      "Manchmal steht die Adresse, die du brauchst, selbst im Speicher. Eine Zahl, die als Adresse benutzt wird, heißt Zeiger (pointer). Alltagsbild: ein Zettel im Schließfach 0, auf dem steht „schau in Fach 1015“.",
      "In Hack setzt du dafür A mit einem C-Befehl, etwa A=M oder A=D+M (Lecture 4, S. 90). Danach zeigt M auf die neue Adresse. Beispiel RAM[RAM[R0]] = −1: @R0, dann A=M (A = Inhalt von R0, etwa 1015), dann M=−1 (schreibt in RAM[1015]).",
      "Lesen über einen Zeiger (Lecture 4, S. 91): R1 = RAM[RAM[R0]]. Der Kasten zeigt es mit R0 = 1013 und RAM[1013] = 75.",
      "Arrays: Ein Array arr ist ein Speicherblock, und die Variable arr enthält die Startadresse (Basisadresse). Der Zugriff arr[j] geht immer nach demselben Muster: $A = arr + j$ (Lecture 4, S. 110–112). Im Code: @arr, D=M, @j, A=D+M, dann arbeitet M mit arr[j]. So übersetzt später auch ein Compiler jeden Arrayzugriff.",
      "PointerDemo (Lecture 4, S. 106–107) setzt mit dieser Technik die ersten R1 Speicherzellen ab Adresse R0 auf −1. Es steht als ausführbares Programm im Spickzettel."
     ],
     "code": "// R1 = RAM[RAM[R0]]\n@R0\nA=M\nD=M\n@R1\nM=D\n\nAblauf mit RAM[0] = 1013, RAM[1013] = 75:\n  0  @R0        A = 0      D = 0      \n  1  A=M        A = 1013   D = 0      \n  2  D=M        A = 1013   D = 75     \n  3  @R1        A = 1      D = 75     \n  4  M=D        A = 1      D = 75     RAM[1] = 75\n\nArrayzugriff arr[j]:\n@arr\nD=M       // D = Basisadresse\n@j\nA=D+M     // A = arr + j\n          // jetzt ist M = arr[j]",
     "merke": "Zeiger: A mit einem C-Befehl setzen (A=M, A=D+M), danach ist M die Zelle, auf die gezeigt wird. arr[j]: A = arr + j."
    },
    {
     "titel": "Hack-Befehle als Bitmuster",
     "text": [
      "Der Assembler übersetzt jeden Befehl in 16 Bits. Das Format steht im Buchkapitel (computer_architecture.pdf, Abschnitt 5.2). Das erste Bit unterscheidet die beiden Befehlsarten.",
      "A-Befehl: Das erste Bit ist 0, die übrigen 15 Bits sind die Zahl. @17 ist 0000000000010001. Deshalb geht @ nur bis $2^{15} - 1 = 32767$.",
      "C-Befehl: Format 111a cccc ccdd djjj. Die ersten drei Bits sind 1. Das a-Bit sagt, ob die ALU A (a = 0) oder M (a = 1) als zweiten Eingang benutzt. Die sechs c-Bits sind genau die ALU-Steuerbits zx, nx, zy, ny, f, no aus Kapitel 2, mit x = D und y = A bzw. M. Die drei d-Bits sagen, wohin geschrieben wird, in der Reihenfolge A, D, M. Die drei j-Bits geben an, bei welchem Ergebnis gesprungen wird: kleiner 0, gleich 0, größer 0.",
      "Damit kannst du den Binärcode aus dem Intro lesen (Intro, Folie 6). Die ersten zehn Zeilen ergeben: i = 1 (@16, M=1), sum = 0 (@17, M=0), dann D = i − R0 (@16, D=M, @0, D=D−M) und ein bedingter Sprung (@18, D;JGT). Das ist der Anfang einer Schleife wie Sum1ToN.",
      "Diese Lektion ist eine Ergänzung aus dem Buch. Die Vorlesungsfolien zu Kapitel 4 arbeiten nur mit der symbolischen Schreibweise."
     ],
     "code": "C-Befehl: 1 1 1 a c1 c2 c3 c4 c5 c6 d1 d2 d3 j1 j2 j3\n\nd-Bits (A D M):  000 kein Ziel, 001 M, 010 D, 011 MD, 100 A, 101 AM, 110 AD, 111 AMD\nj-Bits (<0 =0 >0): 000 kein Sprung, 001 JGT, 010 JEQ, 011 JGE,\n                   100 JLT, 101 JNE, 110 JLE, 111 JMP\n\nBeispiel D=A:   111 0 110000 010 000  -> 1110110000010000\nBeispiel D;JGT: 111 0 001100 000 001  -> 1110001100000001\n\nIntro-Programm entschlüsselt:\n0000000000010000  @16\n1110111111001000  M=1\n0000000000010001  @17\n1110101010001000  M=0\n0000000000010000  @16\n1111110000010000  D=M\n0000000000000000  @0\n1111010011010000  D=D-M\n0000000000010010  @18\n1110001100000001  D;JGT",
     "merke": "A-Befehl: 0 + 15 Bit Zahl. C-Befehl: 111 a cccccc ddd jjj. c-Bits = ALU-Steuerbits, d = A D M, j = <0 =0 >0."
    },
    {
     "titel": "Ein- und Ausgabe: Bildschirm und Tastatur",
     "text": [
      "Hack spricht Bildschirm und Tastatur über den Speicher an. Das heißt speicherabgebildete Ein- und Ausgabe (memory-mapped I/O) (computer_architecture.pdf, Abschnitt 5.2). Ein Teil des Adressraums gehört nicht zum normalen RAM, sondern zu einem Gerät.",
      "Aufteilung des Datenspeichers: Adressen 0 bis 16383 sind normaler RAM (16K). Ab 16384 (Symbol SCREEN, hex 0x4000) liegen 8192 Wörter für den Bildschirm. Adresse 24576 (Symbol KBD, hex 0x6000) ist die Tastatur.",
      "Bildschirm: 256 Zeilen mal 512 Pixel, schwarz-weiß. Jedes Bit ist ein Pixel (1 = schwarz, 0 = weiß). Eine Bildschirmzeile braucht 512 / 16 = 32 Wörter. Das Pixel in Zeile r und Spalte c steckt im Wort $SCREEN + 32 \\cdot r + c / 16$ (ganzzahlig geteilt), und zwar im Bit $c \\bmod 16$, gezählt vom rechten Bit (LSB) aus.",
      "Tastatur: RAM[24576] enthält den Code der gerade gedrückten Taste, oder 0, wenn keine gedrückt ist. Ein Programm, das auf eine Taste wartet, liest also immer wieder @KBD, D=M und springt zurück, solange D = 0 ist."
     ],
     "code": "Adresse          Inhalt\n0 ... 15         R0 ... R15 (virtuelle Register)\n16 ...           Variablen (vom Assembler vergeben)\n... 16383        Ende des RAM (16K)\n16384 ... 24575  Bildschirm (SCREEN, 8K Wörter)\n24576            Tastatur (KBD)\n\nPixel Zeile 10, Spalte 37:\nWort = 16384 + 32·10 + 37/16 = 16384 + 320 + 2 = 16706\nBit  = 37 mod 16 = 5",
     "merke": "SCREEN = 16384, 32 Wörter pro Zeile, Pixel (r, c) im Wort SCREEN + 32r + c/16, Bit c mod 16. KBD = 24576, 0 = keine Taste."
    }
   ],
   "zusammenfassung": [
    "Stored-Program-Konzept: Programme stehen wie Daten im Speicher. Von-Neumann-Architektur: CPU (ALU, Register), Speicher, Ein-/Ausgabe.",
    "Hack: 16 Bit, ROM für Befehle, RAM für Daten, Register A und D. M = RAM[A].",
    "A-Befehl @xxx: A = xxx (0 … 32767), wählt RAM[xxx] als M und ROM[xxx] als Sprungziel.",
    "C-Befehl dest = comp ; jump. comp aus der ALU-Tabelle (Konstanten nur 0, 1, −1), dest aus A, D, M.",
    "Speicherzugriff als Paar: @adresse, dann Befehl mit M. Werte, die du noch brauchst, vorher in D sichern.",
    "Sprung: @ZIEL, dann comp;JXX. JGT, JGE, JLT, JLE, JEQ, JNE vergleichen comp mit 0, JMP springt immer.",
    "Symbole: R0–R15 = 0–15, SCREEN = 16384, KBD = 24576. Neue Symbole sind Variablen ab 16. (LABEL) = Adresse des nächsten Befehls.",
    "Programme: erst Pseudocode, dann Hack. Ende immer mit (END) @END 0;JMP.",
    "Zeiger: A=M oder A=D+M, danach ist M die Zielzelle. arr[j] über A = arr + j.",
    "Binär: A-Befehl 0vvv…v, C-Befehl 111a cccccc ddd jjj."
   ],
   "karten": [
    {
     "f": "Was ist das Stored-Program-Konzept?",
     "a": "Das Programm steht wie die Daten im Speicher. Dieselbe Hardware kann dadurch beliebige Programme ausführen.",
     "q": "Lecture 4, S. 11"
    },
    {
     "f": "Welche Speicher und Register hat Hack?",
     "a": "ROM (Befehle, nur lesen), RAM (Daten), Register A (Adresse/Daten) und D (Daten). Alles 16 Bit.",
     "q": "Lecture 4, S. 22–26"
    },
    {
     "f": "Was ist M in Hack?",
     "a": "Das RAM-Register, dessen Adresse in A steht: M = RAM[A].",
     "q": "Lecture 4, S. 23"
    },
    {
     "f": "Was macht @17?",
     "a": "A = 17. Damit ist RAM[17] als M ausgewählt und ROM[17] als Sprungziel.",
     "q": "Lecture 4, S. 29"
    },
    {
     "f": "Aufbau eines C-Befehls?",
     "a": "dest = comp ; jump. comp: Rechnung der ALU. dest: Ziel (A, D, M oder Kombination). jump: Sprungbedingung. dest und jump sind optional.",
     "q": "Lecture 4, S. 30"
    },
    {
     "f": "Wie setzt du D auf 1954?",
     "a": "@1954, dann D=A. Konstanten außer 0, 1, −1 kommen nur über den A-Befehl.",
     "q": "Lecture 4, S. 33–34",
     "acode": "@1954\nD=A"
    },
    {
     "f": "Wie schreibst du RAM[100] = 17?",
     "a": "Erst den Wert über A nach D holen, dann die Adresse wählen.",
     "q": "Lecture 4, S. 37–38",
     "acode": "@17\nD=A\n@100\nM=D"
    },
    {
     "f": "Wie kopierst du RAM[200] nach RAM[100]?",
     "a": "Wert lesen, in D zwischenspeichern, Ziel wählen, schreiben.",
     "q": "Lecture 4, S. 39–40",
     "acode": "@200\nD=M\n@100\nM=D"
    },
    {
     "f": "Wie springst du unbedingt zu Befehl 7?",
     "a": "@7, dann 0;JMP. Das 0; ist nötig, weil jeder C-Befehl eine comp-Rechnung braucht.",
     "q": "Lecture 4, S. 57"
    },
    {
     "f": "Die sechs bedingten Sprünge?",
     "a": "JGT (> 0), JGE (≥ 0), JLT (< 0), JLE (≤ 0), JEQ (= 0), JNE (≠ 0). Verglichen wird das comp-Ergebnis mit 0.",
     "q": "Lecture 4, S. 59"
    },
    {
     "f": "Wie übersetzt du if (RAM[3] < 100) goto 12?",
     "a": "D = RAM[3] − 100 berechnen, dann bei D < 0 springen.",
     "q": "Lecture 4, S. 65",
     "acode": "@3\nD=M\n@100\nD=D-A\n@12\nD;JLT"
    },
    {
     "f": "Welche Adressen bekommen R0–R15 und neue Variablen?",
     "a": "R0–R15 sind die Adressen 0–15. Neue Variablen bekommen der Reihe nach 16, 17, 18, …",
     "q": "Lecture 4, S. 69 und 72"
    },
    {
     "f": "Was bedeutet eine Zeile (LOOP)?",
     "a": "Ein Label. Der Assembler bindet LOOP an die Adresse des nächsten echten Befehls. Die Zeile selbst ist kein Befehl.",
     "q": "Lecture 4, S. 75"
    },
    {
     "f": "Warum endet ein Hack-Programm mit einer Endlosschleife?",
     "a": "Der Speicher ist nie leer. Ohne Schleife würde die CPU die zufälligen Bitmuster nach dem Programm als Befehle ausführen.",
     "q": "Lecture 4, S. 80–83",
     "acode": "(END)\n@END\n0;JMP"
    },
    {
     "f": "Wie liest du RAM[RAM[R0]] nach D?",
     "a": "Über A als Zeiger: A=M setzt A auf den Inhalt von R0.",
     "q": "Lecture 4, S. 91",
     "acode": "@R0\nA=M\nD=M"
    },
    {
     "f": "Wie greifst du auf arr[j] zu?",
     "a": "A = arr + j berechnen, dann ist M = arr[j].",
     "q": "Lecture 4, S. 110–112",
     "acode": "@arr\nD=M\n@j\nA=D+M"
    },
    {
     "f": "Binärformat von A- und C-Befehl?",
     "a": "A-Befehl: 0 und 15 Bit Wert. C-Befehl: 111 a c1…c6 d1 d2 d3 j1 j2 j3. a wählt A oder M, c = ALU-Steuerbits, d = Ziele A D M, j = Sprung bei <0, =0, >0.",
     "q": "computer_architecture.pdf, Abschnitt 5.2"
    },
    {
     "f": "Wo liegen Bildschirm und Tastatur im Hack-Speicher?",
     "a": "SCREEN ab 16384 (0x4000), 8K Wörter, 32 Wörter pro Zeile. KBD bei 24576 (0x6000), 0 wenn keine Taste gedrückt.",
     "q": "computer_architecture.pdf, Abschnitt 5.2"
    },
    {
     "f": "Gibt es den Hack-Befehl D=D+5?",
     "a": "Nein. Im C-Befehl sind nur die Konstanten 0, 1 und −1 erlaubt. Richtig: @5, D=D+A.",
     "q": "Lecture 4, S. 30"
    }
   ],
   "quiz": [
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat D nach diesem Code?",
     "loesung": 12,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "@5 und D=A: D = 5. @7: A = 7. D=D+A: D = 5 + 7 = 12.",
     "q": "Eigene Übung",
     "code": "@5\nD=A\n@7\nD=D+A"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat A nach diesem Code?",
     "loesung": 7,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Der letzte A-Befehl war @7. D=D+A ändert A nicht.",
     "q": "Eigene Übung",
     "code": "@5\nD=A\n@7\nD=D+A"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat D nach diesem Code?",
     "loesung": 8,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = 10, dann zweimal D−1: 9, dann 8.",
     "q": "Eigene Übung",
     "code": "@10\nD=A\nD=D-1\nD=D-1"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat RAM[20] nach diesem Code?",
     "loesung": 4,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = 3. @20 wählt RAM[20]. M=D schreibt 3. M=M+1 macht daraus 4.",
     "q": "Eigene Übung",
     "code": "@3\nD=A\n@20\nM=D\nM=M+1"
    },
    {
     "typ": "zahl",
     "frage": "In welche RAM-Adresse wird geschrieben?",
     "loesung": 99,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = 100. A=D-1 setzt A = 99. M=D schreibt also nach RAM[99] (den Wert 100).",
     "q": "Eigene Übung",
     "code": "@100\nD=A\nA=D-1\nM=D"
    },
    {
     "typ": "zahl",
     "frage": "Vorher gilt RAM[0] = 4 und RAM[1] = 9. Welchen Wert hat RAM[2] danach?",
     "loesung": -5,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = RAM[0] = 4. D = D − RAM[1] = 4 − 9 = −5. RAM[2] = −5.",
     "q": "Eigene Übung",
     "code": "@R0\nD=M\n@R1\nD=D-M\n@R2\nM=D"
    },
    {
     "typ": "zahl",
     "frage": "Welche RAM-Adresse bekommt die Variable y?",
     "loesung": 17,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x tritt zuerst auf und bekommt 16, y als zweites neues Symbol 17.",
     "q": "Lecture 4, S. 69",
     "code": "@x\nM=1\n@y\nM=-1\n@y\nD=M\n@x\nD=D+M"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat D am Ende?",
     "loesung": 0,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "x = 1, y = −1. D = y = −1. D = D + x = −1 + 1 = 0.",
     "q": "Eigene Übung",
     "code": "@x\nM=1\n@y\nM=-1\n@y\nD=M\n@x\nD=D+M"
    },
    {
     "typ": "zahl",
     "frage": "Vorher gilt RAM[0] = 50 und RAM[50] = 8. Welchen Wert hat D danach?",
     "loesung": 8,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "@R0 wählt RAM[0]. A=M setzt A = 50. D=M liest RAM[50] = 8.",
     "q": "Lecture 4, S. 91",
     "code": "@R0\nA=M\nD=M"
    },
    {
     "typ": "zahl",
     "frage": "Zu welcher ROM-Adresse springt das Programm (oder welche Adresse hat der nächste Befehl, wenn nicht gesprungen wird)?",
     "loesung": 10,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = 2 − 3 = −1. @10 wählt das Ziel. D;JLT: −1 < 0, also Sprung zu 10.",
     "q": "Eigene Übung",
     "code": "@2\nD=A\n@3\nD=D-A\n@10\nD;JLT"
    },
    {
     "typ": "zahl",
     "frage": "Welche Nummer hat der Befehl, der nach D;JNE ausgeführt wird?",
     "loesung": 4,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "D = 0. JNE springt nur bei D ≠ 0. Also kein Sprung, weiter mit Befehl 4 (die Befehle 0 bis 3 sind @0, D=A, @8, D;JNE).",
     "q": "Eigene Übung",
     "code": "@0\nD=A\n@8\nD;JNE"
    },
    {
     "typ": "zahl",
     "frage": "Welchen Wert hat i (RAM[16]), wenn das Programm in der Endlosschleife angekommen ist?",
     "loesung": 3,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "i startet bei 0. Schleife: i = 1, D = 1 − 3 = −2 < 0, zurück. i = 2, D = −1, zurück. i = 3, D = 0, kein Sprung. Ende mit i = 3.",
     "q": "Eigene Übung",
     "code": "   @i\n   M=0\n(LOOP)\n   @i\n   M=M+1\n   D=M\n   @3\n   D=D-A\n   @LOOP\n   D;JLT\n(END)\n   @END\n   0;JMP"
    },
    {
     "typ": "zahl",
     "frage": "Welche Adresse bekommt das Label END?",
     "loesung": 9,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "Befehle zählen ab 0, Label-Zeilen zählen nicht. 0 @i, 1 M=0, dann LOOP = 2. Weiter: 2 @i, 3 M=M+1, 4 D=M, 5 @3, 6 D=D-A, 7 @LOOP, 8 D;JLT. Der nächste Befehl nach (END) ist @END mit der Nummer 9, also END = 9.",
     "q": "Lecture 4, S. 75",
     "code": "   @i\n   M=0\n(LOOP)\n   @i\n   M=M+1\n   D=M\n   @3\n   D=D-A\n   @LOOP\n   D;JLT\n(END)\n   @END\n   0;JMP"
    },
    {
     "typ": "zahl",
     "frage": "Vorher gilt RAM[1] = 30. Welche RAM-Zelle wird durch M=0 auf 0 gesetzt?",
     "loesung": 31,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "AM=M+1 berechnet RAM[1] + 1 = 31 und schreibt das in A und in RAM[1]. Danach zeigt A auf 31, M=0 setzt RAM[31] = 0. Achtung: Das M im Ziel benutzt noch die alte Adresse 1.",
     "q": "Eigene Übung",
     "code": "@R1\nAM=M+1\nM=0"
    },
    {
     "typ": "mc",
     "frage": "Welcher Befehl ist in Hack gültig?",
     "optionen": [
      "D=D+5",
      "M=D+M",
      "D=A+M",
      "M=2"
     ],
     "richtig": 1,
     "erklaerung": "comp darf nur Ausdrücke aus der ALU-Tabelle sein. D+M ist erlaubt. D+5 und 2 sind keine erlaubten Konstanten, A+M kann die ALU nicht (sie hat nur einen Eingang für A oder M).",
     "q": "Lecture 4, S. 30"
    },
    {
     "typ": "mc",
     "frage": "Was bewirkt @R5?",
     "optionen": [
      "D = 5",
      "A = 5",
      "RAM[5] = 0",
      "Sprung zu Befehl 5"
     ],
     "richtig": 1,
     "erklaerung": "R5 ist das vordefinierte Symbol für 5. Der A-Befehl setzt A = 5 und wählt damit RAM[5] als M.",
     "q": "Lecture 4, S. 72"
    },
    {
     "typ": "mc",
     "frage": "Mit welchem Befehlspaar springst du, wenn D ≤ 0 ist, zum Label END?",
     "optionen": [
      "@END und D;JLE",
      "@END und D;JLT",
      "@END und 0;JMP",
      "@D und END;JLE"
     ],
     "richtig": 0,
     "erklaerung": "Ziel mit @END wählen, dann D;JLE (less or equal). JLT wäre nur < 0.",
     "q": "Lecture 4, S. 59"
    },
    {
     "typ": "text",
     "frage": "Entschlüssle den C-Befehl 1110110000010000.",
     "loesung": [
      "D=A"
     ],
     "erklaerung": "111 | a = 0 | c = 110000 (Zeile „y“ der ALU-Tabelle, also A) | d = 010 (D) | j = 000. Ergebnis D=A.",
     "q": "computer_architecture.pdf, Abschnitt 5.2"
    },
    {
     "typ": "text",
     "frage": "Wie lautet der A-Befehl @37 als 16-Bit-Muster?",
     "loesung": [
      "0000000000100101"
     ],
     "erklaerung": "Erstes Bit 0, dann 37 in 15 Bit: 37 = 32 + 4 + 1 = 100101, links mit Nullen aufgefüllt.",
     "q": "computer_architecture.pdf, Abschnitt 5.2"
    },
    {
     "typ": "zahl",
     "frage": "In welchem RAM-Wort liegt das Pixel in Zeile 10, Spalte 37?",
     "loesung": 16706,
     "toleranz": 0,
     "einheit": "",
     "erklaerung": "SCREEN + 32 · r + c / 16 = 16384 + 320 + 2 = 16706 (37 / 16 = 2, ganzzahlig).",
     "q": "computer_architecture.pdf, Diagramm 5.4"
    }
   ],
   "formeln": [
    {
     "name": "A-Befehl",
     "code": "@wert      // A = wert   (0 ... 32767)\n@symbol    // A = Adresse des Symbols",
     "text": "Setzt A, wählt RAM[A] und ROM[A].",
     "q": "Lecture 4, S. 29 und 67"
    },
    {
     "name": "C-Befehl",
     "code": "dest = comp ; jump\n\ncomp: 0 1 -1 D A !D !A -D -A D+1 A+1 D-1 A-1\n      D+A D-A A-D D&A D|A\n      (A überall durch M ersetzbar)\ndest: A D M MD AM AD AMD\njump: JGT JEQ JGE JLT JNE JLE JMP",
     "text": "dest und jump optional.",
     "q": "Lecture 4, S. 30"
    },
    {
     "name": "Typische Muster",
     "code": "D = 17:          @17   D=A\nD = RAM[5]:      @5    D=M\nRAM[5] = D:      @5    M=D\nRAM[5] = 0:      @5    M=0\nRAM[5]++:        @5    M=M+1\nRAM[a] = RAM[b]: @b D=M @a M=D",
     "text": "Konstante, Speicher lesen und schreiben.",
     "q": "Lecture 4, S. 31–43"
    },
    {
     "name": "Sprünge",
     "code": "goto L:            @L  0;JMP\nif D > 0 goto L:   @L  D;JGT\nif x < y goto L:   (D = x - y)  @L  D;JLT\nProgrammende:      (END) @END 0;JMP",
     "text": "Ziel wählen, dann Bedingung.",
     "q": "Lecture 4, S. 57–59"
    },
    {
     "name": "Symbole",
     "code": "R0 ... R15  = 0 ... 15\nSCREEN      = 16384\nKBD         = 24576\nVariablen   = 16, 17, 18, ... (Reihenfolge des Auftretens)\n(LABEL)     = Adresse des nächsten Befehls",
     "text": "Vom Assembler ersetzt.",
     "q": "Lecture 4, S. 69–75; computer_architecture.pdf"
    },
    {
     "name": "Zeiger und Arrays",
     "code": "RAM[RAM[R0]] = -1:   @R0  A=M  M=-1\nD = arr[j]:          @arr D=M @j A=D+M D=M",
     "text": "A per C-Befehl setzen.",
     "q": "Lecture 4, S. 90–112"
    },
    {
     "name": "Binärformat",
     "code": "A-Befehl: 0 vvv vvvv vvvv vvvv\nC-Befehl: 111 a cccccc ddd jjj\n  a = 0: A, a = 1: M\n  c = zx nx zy ny f no\n  d = A D M\n  j = (<0) (=0) (>0)",
     "text": "16 Bit pro Befehl.",
     "q": "computer_architecture.pdf, Abschnitt 5.2"
    },
    {
     "name": "Schleife Sum1ToN",
     "code": "// Sum1ToN: R1 = 1 + 2 + ... + R0\n   @i\n   M=1        // i = 1\n   @sum\n   M=0        // sum = 0\n(LOOP)\n   @i\n   D=M\n   @R0\n   D=D-M      // D = i - R0\n   @STOP\n   D;JGT      // if (i > R0) goto STOP\n   @sum\n   D=M\n   @i\n   D=D+M      // D = sum + i\n   @sum\n   M=D        // sum = sum + i\n   @i\n   M=M+1      // i = i + 1\n   @LOOP\n   0;JMP      // goto LOOP\n(STOP)\n   @sum\n   D=M\n   @R1\n   M=D        // R1 = sum\n(END)\n   @END\n   0;JMP",
     "text": "Vollständiges, geprüftes Programm (Lecture 4, S. 87–88).",
     "q": "Lecture 4, S. 87–88"
    },
    {
     "name": "PointerDemo",
     "code": "// PointerDemo: setzt RAM[R0] bis RAM[R0 + R1 - 1] auf -1\n   @i\n   M=0        // i = 0\n(LOOP)\n   @i\n   D=M\n   @R1\n   D=D-M\n   @END\n   D;JEQ      // if (i == R1) goto END\n   @R0\n   D=M\n   @i\n   A=D+M      // A = R0 + i\n   M=-1       // RAM[R0 + i] = -1\n   @i\n   M=M+1      // i = i + 1\n   @LOOP\n   0;JMP\n(END)\n   @END\n   0;JMP",
     "text": "Setzt RAM[R0 … R0+R1−1] auf −1 (Lecture 4, S. 106–107).",
     "q": "Lecture 4, S. 106–107"
    }
   ],
   "aufgaben": [
    {
     "titel": "Vorlesung, Program example 3: Max",
     "q": "Lecture 4, S. 85 („You do it“)",
     "text": "Schreibe ein Hack-Programm, das R2 = max(R0, R1) berechnet. Beginne mit Pseudocode: if (R0 > R1) then R2 = R0, else R2 = R1.",
     "loesung": [
      "Pseudocode: D = R0 − R1. if (D > 0) goto R0GREATER. R2 = R1. goto END. R0GREATER: R2 = R0. END: Endlosschleife.",
      "R0 − R1 > 0 heißt R0 > R1. Dafür D = R0 − R1 und D;JGT.",
      "Im else-Fall R1 nach R2 kopieren und mit @END 0;JMP den then-Teil überspringen.",
      "Getestet (Python-Simulator) mit (3, 9) → 9, (9, 3) → 9, (5, 5) → 5, (−4, 2) → 2, (0, −7) → 0."
     ],
     "loesungCode": "// Max: R2 = max(R0, R1)\n   @R0\n   D=M\n   @R1\n   D=D-M      // D = R0 - R1\n   @R0GREATER\n   D;JGT      // if (R0 > R1) goto R0GREATER\n   @R1\n   D=M\n   @R2\n   M=D        // R2 = R1\n   @END\n   0;JMP\n(R0GREATER)\n   @R0\n   D=M\n   @R2\n   M=D        // R2 = R0\n(END)\n   @END\n   0;JMP"
    },
    {
     "titel": "Eigene Übung: Zwei Speicherzellen tauschen",
     "q": "Eigene Übung",
     "text": "Tausche die Inhalte von RAM[0] und RAM[1]. Benutze eine Hilfsvariable tmp.",
     "loesung": [
      "Mit nur einem Datenregister D braucht man einen Zwischenspeicher, sonst wird ein Wert überschrieben.",
      "tmp = R0, dann R0 = R1, dann R1 = tmp. Jede Zuweisung ist ein Lese-Paar (@quelle, D=M) und ein Schreib-Paar (@ziel, M=D).",
      "tmp ist ein neues Symbol und bekommt Adresse 16.",
      "Getestet mit R0 = 4, R1 = 9: danach R0 = 9, R1 = 4."
     ],
     "loesungCode": "// Tausche RAM[0] und RAM[1]\n   @R0\n   D=M\n   @tmp\n   M=D        // tmp = R0\n   @R1\n   D=M\n   @R0\n   M=D        // R0 = R1\n   @tmp\n   D=M\n   @R1\n   M=D        // R1 = tmp\n(END)\n   @END\n   0;JMP"
    },
    {
     "titel": "Eigene Übung: Multiplikation durch wiederholte Addition",
     "q": "Eigene Übung",
     "text": "Hack kann nicht multiplizieren. Schreibe ein Programm, das R2 = R0 · R1 berechnet (R0, R1 ≥ 0), indem es R1-mal R0 addiert.",
     "loesung": [
      "Pseudocode: R2 = 0. n = R1. LOOP: if (n == 0) goto END. R2 = R2 + R0. n = n − 1. goto LOOP.",
      "Warum eine Kopie n statt R1 direkt? So bleibt die Eingabe R1 unverändert.",
      "R2 = R2 + R0 geht in zwei Schritten: @R0 D=M, dann @R2 M=D+M.",
      "Getestet mit (3, 4) → 12, (0, 5) → 0, (7, 0) → 0, (6, 6) → 36, (12, 11) → 132."
     ],
     "loesungCode": "// Mult: R2 = R0 * R1 (R0, R1 >= 0)\n   @R2\n   M=0        // R2 = 0\n   @R1\n   D=M\n   @n\n   M=D        // n = R1\n(LOOP)\n   @n\n   D=M\n   @END\n   D;JEQ      // if (n == 0) goto END\n   @R0\n   D=M\n   @R2\n   M=D+M      // R2 = R2 + R0\n   @n\n   M=M-1      // n = n - 1\n   @LOOP\n   0;JMP\n(END)\n   @END\n   0;JMP"
    },
    {
     "titel": "Eigene Übung: Ablauf verfolgen",
     "q": "Eigene Übung",
     "text": "Führe Sum1ToN (siehe Spickzettel) mit R0 = 2 von Hand aus. Führe eine Tabelle mit A, D, RAM[16] (i), RAM[17] (sum) und RAM[1]. Wie oft wird D;JGT ausgeführt, und welchen Wert hat R1 am Ende?",
     "loesung": [
      "Start: i = 1, sum = 0.",
      "1. Durchlauf: D = i − R0 = 1 − 2 = −1, kein Sprung. sum = 1, i = 2.",
      "2. Durchlauf: D = 2 − 2 = 0, kein Sprung (JGT braucht > 0). sum = 3, i = 3.",
      "3. Test: D = 3 − 2 = 1 > 0, Sprung zu STOP. D;JGT wurde also dreimal ausgeführt.",
      "R1 = sum = 3. Die komplette Ablauftabelle steht in der Lektion „Schleifen“."
     ]
    }
   ]
  }
 ]
});
