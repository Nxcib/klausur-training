# Übungsprojekt Programmieren 1

23 kleine Übungen zu den Kapiteln der Lernplattform (k0 Start bis k5 Fortgeschrittenes).
Jede Übung ist eine Java-Klasse mit Methoden, in denen `// TODO` steht. Du füllst die
Methoden aus, startest die Klasse, und die `main`-Methode prüft deine Lösung.

Keine der Übungen gleicht einem bewerteten Assignment. Sie sind nur zum Üben.

## In IntelliJ öffnen

1. IntelliJ starten, **File > Open**, diesen Ordner `Uebungsprojekt` auswählen, **Open**.
2. Links im Projektbaum Rechtsklick auf den Ordner `src` > **Mark Directory as > Sources Root**.
   Der Ordner wird blau.
3. Falls oben ein gelber Balken „Project JDK is not defined“ erscheint: **Setup SDK** klicken
   und dein installiertes JDK (25) wählen.
4. Den Ordner `loesungen` **nicht** als Sources Root markieren. Dort liegen Klassen mit
   denselben Namen, das würde sich beißen.

## Eine Übung starten

1. Öffne z. B. `src/k1/U1_Variablen.java`. Oben im Kommentar steht die Aufgabe.
2. Ersetze in den Methoden die Zeilen mit `// TODO` und den Platzhalter-`return` durch deinen Code.
   Die `main`-Methode und alles unter „Ab hier: Testcode“ musst du nicht ändern.
3. Klicke auf den grünen Pfeil neben `public static void main` > **Run**.

Unten in der Konsole steht dann zum Beispiel:

```
Test 1: richtig
Test 2: falsch (erwartet 2.0, bekommen 0.0)
...
5 von 6 Tests bestanden
```

- **richtig**: Deine Methode liefert für diesen Testfall genau das erwartete Ergebnis.
- **falsch (erwartet ..., bekommen ...)**: Links steht, was herauskommen müsste, rechts, was deine
  Methode geliefert hat. Strings stehen in Anführungszeichen. Steht dort `Exception ...`, ist
  deine Methode mit einem Fehler abgestürzt (z. B. `ArrayIndexOutOfBoundsException`).
- Am Ende: wie viele Tests insgesamt bestanden sind. Ziel: alle.

Vor dem Lösen sind fast alle Tests „falsch“. Das ist normal.

## Reihenfolge

| Ordner | Kapitel | Übungen |
|---|---|---|
| `k0` | Start | U1_Begruessung, U2_Verkettung, U3_Zeilen |
| `k1` | Grundlagen | U1_Variablen, U2_Modulo, U3_Casting, U4_Strings |
| `k2` | Imperatives Programmieren | U1_Verzweigungen, U2_Schleifen, U3_Arrays, U4_Methoden_Rekursion, U5_2DArrays |
| `k3` | Objektorientierung | U1_Konto, U2_Bruch, U3_Formen, U4_Interface_Equals |
| `k4` | Algorithmen und Datenstrukturen | U1_Suchen, U2_Sortieren, U3_Stack, U4_Collections |
| `k5` | Fortgeschrittenes | U1_Exceptions, U2_EigeneException, U3_Threads |

Innerhalb eines Kapitels steigt die Schwierigkeit. Mach die Übung erst, wenn du die Lektionen
des Kapitels auf der Lernplattform gelesen hast.

## Lösungen

Im Ordner `loesungen` liegt dieselbe Struktur mit fertigen Methoden. Alle Tests dort sind „richtig“.

**Erst selbst probieren.** Mindestens 20 Minuten pro Übung, auch wenn es zäh ist. Genau dabei
lernst du. In der Klausur schreibst du Code auf Papier, ohne IDE und ohne Lösung daneben.

Zum Vergleichen reicht es, die Lösungsdatei zu lesen. Wenn du sie ausführen willst:
`loesungen` als eigenes Projekt öffnen (File > Open > Ordner `loesungen`, dort den Ordner
`loesungen` selbst als Sources Root markieren).

## Tipps

- Inline Completion in IntelliJ ausschalten (Settings > Editor > General > Inline Completion),
  wie im Tutorium 0 verlangt. Tippe alles selbst.
- Rot unterstrichener Code kompiliert nicht. Fahr mit der Maus darüber, die Meldung sagt meist genau,
  was fehlt (z. B. `';' expected`).
- Wenn ein Test „falsch“ ist: Rechne den Testfall von Hand auf Papier durch, Zeile für Zeile, mit
  einer kleinen Tabelle für die Variablen. So läuft auch die Klausur.
