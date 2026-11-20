// Investition und Finanzierung (Prof. Hirth), WiSe 2026/27
// Gegliedert nach Wochen: Vorlesung + Tutorium + freiwillige Hausaufgabe (FHA) + passende Altklausuraufgaben.
// Stand: 18.11.2026. Alle Rechenergebnisse mit Python nachgerechnet und, wo vorhanden,
// mit den offiziellen Lösungen (FHA, Klausurensammlung) und der Tutoriumsmitschrift abgeglichen.
// Formeln in KaTeX zwischen $...$ (Backslashes doppelt).
// Quellen-Kürzel: s = Skriptseite, q = andere Quelle als Text.

window.FAECHER = window.FAECHER || [];
window.FAECHER.push({
  id: "iuf",
  name: "Investition und Finanzierung",
  kurz: "IuF",
  klausur: { datum: "2027-02-25T14:00:00", text: "Do 25.02.2027, 14:00 bis 15:30" },
  quelle: "VL-Skript, Tutorien, FHA, Klausurensammlung",
  anleitung: [
    "Arbeite die Wochen der Reihe nach ab. Jede Woche baut auf der vorigen auf, vor allem Woche 1 (Auf- und Abzinsen) auf alles Weitere.",
    "Lies im Lernblatt zuerst den Teil „Schritt für Schritt“. Rechne jedes Beispiel selbst mit dem Taschenrechner nach, bevor du die Ausgabe anschaust. Erst wenn deine Zahl stimmt, gehst du zur nächsten Lektion.",
    "Danach lernst du die Karten der Woche. Sag die Antwort laut oder schreib sie auf, bevor du sie aufdeckst, und bewerte dich ehrlich.",
    "Löse dann die Aufgaben aus Tutorium, FHA und Altklausuren selbst auf Papier. Klapp die Lösung erst auf, wenn du ein eigenes Ergebnis hast, auch wenn es falsch ist.",
    "Mach zum Schluss das Quiz der Woche. Ziel sind mindestens 80 %. Lies bei jedem Fehler die Erklärung, geh zur passenden Lektion zurück und wiederhole das Quiz später.",
    "Wiederhole jeden Tag die fälligen Karten, auch an Tagen ohne neuen Stoff. Ein paar Minuten täglich bringen mehr als ein langer Abend vor der Klausur."
  ],
  kapitel: [
    // ==================================================================
    {
      id: "w1",
      titel: "Woche 1: Zinsrechnung",
      abschnitt: "Tutorium ab 02.11.2026",
      seiten: "Skript Kap. 1 bis 5.2, S. 1 bis 35",
      lektionen: [
        {
          "titel": "Zahlungsstrom: Was ist eine Investition, was eine Finanzierung?",
          "text": [
            "In diesem Fach schauen wir nicht auf Maschinen oder Verträge selbst, sondern nur auf das Geld, das fließt. Eine Einzahlung ist Geld, das bei dir ankommt (z. B. Umsatz). Eine Auszahlung ist Geld, das du ausgibst (z. B. Kaufpreis).",
            "Ein Zahlungsstrom ist die Liste aller Ein- und Auszahlungen eines Vorhabens, sortiert nach Zeitpunkten. Wir schreiben ihn in Klammern: zuerst der Betrag heute (Zeitpunkt $t = 0$), dann am Ende von Jahr 1 ($t = 1$), dann am Ende von Jahr 2 usw. Auszahlungen bekommen ein Minus.",
            "Beispiel: Der Laden kauft ein Lastenrad für 2.000 € und spart dadurch drei Jahre lang je 800 € Lieferkosten. Der Zahlungsstrom ist (−2.000; 800; 800; 800).",
            "Eine Investition ist ein Zahlungsstrom durch Mittelverwendung: Du gibst erst Geld aus und hoffst auf spätere Rückflüsse. Sie beginnt normalerweise mit einer Auszahlung und bindet Geld langfristig. Eine Finanzierung ist das Spiegelbild, ein Zahlungsstrom durch Mittelbeschaffung: Du bekommst erst Geld (z. B. einen Kredit) und zahlst später zurück. Sie beginnt normalerweise mit einer Einzahlung.",
            "Realinvestitionen kaufen Dinge, die erst durch ihren Einsatz Geld bringen (Lastenrad, Maschine, Gebäude, Patent). Finanzinvestitionen kaufen direkt Ansprüche auf Zahlungen (Aktie, Anleihe, Beteiligung)."
          ],
          "code": "t:            0        1        2        3\nLastenrad:  −2.000      800      800      800    (Investition)\nKredit:     +2.000  −720,70  −720,70  −720,70    (Finanzierung, 4 % Zins)",
          "merke": "Ein Zahlungsstrom ist die nach Zeitpunkten sortierte Liste aller Ein- und Auszahlungen; Investitionen beginnen meist mit einer Auszahlung, Finanzierungen mit einer Einzahlung."
        },
        {
          "titel": "Wie sicher sind die Zahlen? Vier Arten von Erwartungen",
          "text": [
            "Künftige Zahlungen kennt niemand genau. Die Vorlesung unterscheidet, wie man mit dieser Unsicherheit umgeht.",
            "Sicherheit: Nur eine Entwicklung ist vorstellbar (der Sparbuchzins ist fest vereinbart). Quasi-Sicherheit: Mehrere Entwicklungen sind denkbar, man rechnet aber bewusst nur mit einer, z. B. der wahrscheinlichsten. Risiko: Mehrere Entwicklungen sind denkbar und man kennt ihre Wahrscheinlichkeiten (Würfel, Wetterbericht mit 70 % Regen). Ungewissheit: Mehrere Entwicklungen sind denkbar, Wahrscheinlichkeiten kennt man nicht (geht eine Firma in 50 Jahren pleite?).",
            "In den ersten Wochen rechnen wir der Einfachheit halber mit Sicherheit. Dann bleibt nur ein Problem übrig: Die Zahlungen kommen zu verschiedenen Zeitpunkten. Wie man sie trotzdem vergleicht, zeigen die nächsten Lektionen."
          ],
          "merke": "Risiko heißt: Wahrscheinlichkeiten bekannt; Ungewissheit heißt: Wahrscheinlichkeiten unbekannt."
        },
        {
          "titel": "Zins und Zinseszins: Wie Geld wächst",
          "text": [
            "Ein Zins ist der Preis für geliehenes Geld. Legst du 100 € aufs Sparbuch, leihst du der Bank Geld, und sie zahlt dir dafür nach einem Jahr etwas dazu. Der Zinssatz $i$ sagt, wie viel Prozent das pro Jahr sind. Bei $i = 4\\,\\%$ (als Dezimalzahl 0,04) bekommst du $100 \\cdot 0{,}04 = 4$ € Zinsen, hast also $100 + 4 = 100 \\cdot 1{,}04 = 104$ €.",
            "Der Trick mit dem Faktor $1+i$: Statt „Betrag plus Zinsen“ zu rechnen, multiplizierst du einfach mit $1{,}04$. Das spart einen Schritt.",
            "Zinseszins heißt: Im zweiten Jahr bekommst du auch Zinsen auf die Zinsen des ersten Jahres, weil sie mit auf dem Konto liegen. Deshalb multipliziert man jedes Jahr erneut mit $1+i$. Nach $t$ Jahren ist aus einem Betrag $z_0$ geworden: $B_t = z_0 \\cdot (1+i)^t$.",
            "Symbole: $z_0$ ist die Zahlung heute, $i$ der Jahreszins als Dezimalzahl, $t$ die Zahl der Jahre, $B_t$ der Wert zum Zeitpunkt $t$. Diesen Vorgang nennt man Aufzinsen. Den Wert am Ende des Planungszeitraums nennt man Endwert.",
            "Beispiel (Tutorium 1, Aufgabe 1a): 2.000 € für 3 Jahre zu 4 %."
          ],
          "code": "2.000,00 € · 1,04 = 2.080,00 €   (nach Jahr 1)\n2.080,00 € · 1,04 = 2.163,20 €   (nach Jahr 2)\n2.163,20 € · 1,04 = 2.249,73 €   (nach Jahr 3)\nkurz: 2.000 · 1,04^3 = 2.249,73 €",
          "ausgabe": "Endwert nach 3 Jahren: 2.249,73 €. Ohne Zinseszins wären es nur 2.000 + 3 · 80 = 2.240 €.",
          "merke": "Aufzinsen heißt: pro Jahr einmal mit (1+i) malnehmen, also insgesamt mit (1+i) hoch t."
        },
        {
          "titel": "Abzinsen und Barwert: Was ist künftiges Geld heute wert?",
          "text": [
            "Jetzt die umgekehrte Frage: Wie viel musst du heute anlegen, damit in 7 Jahren bei 4 % genau 10.000 € da sind? Du drehst das Aufzinsen um und teilst durch $(1+i)^t$ statt malzunehmen. Das heißt Abzinsen oder Diskontieren.",
            "Formel: $B_0 = \\dfrac{z_t}{(1+i)^t} = z_t \\cdot (1+i)^{-t}$. Dabei ist $z_t$ die Zahlung im Zeitpunkt $t$, und $B_0$ ihr Wert heute. Diesen Wert heute nennt man Barwert. Das hoch minus $t$ ist nur eine andere Schreibweise für „durch $(1+i)^t$ teilen“.",
            "Warum ist das fair? Die Vorlesung erklärt es mit einem Kredit: Der Barwert ist der Kredit, den du heute aufnehmen kannst, wenn die spätere Zahlung $z_t$ genau reicht, um ihn samt Zinsen und Zinseszinsen zurückzuzahlen. Umgekehrt: Legst du den Barwert heute an, wächst er genau auf $z_t$ an.",
            "Beispiel (Tutorium 1, Aufgabe 1b): 10.000 € in 7 Jahren, Zins 4 %."
          ],
          "code": "1,04^7 = 1,3159318\n10.000 € / 1,3159318 = 7.599,18 €\nProbe: 7.599,18 € · 1,04^7 = 10.000,00 €",
          "ausgabe": "Barwert: 7.599,18 €. So viel sind 10.000 € in 7 Jahren heute wert.",
          "merke": "Der Barwert ist der heutige Wert einer künftigen Zahlung: durch (1+i) hoch t teilen."
        },
        {
          "titel": "Zahlungen zu verschiedenen Zeitpunkten vergleichen",
          "text": [
            "100 € heute und 120 € in zwei Jahren kann man nicht direkt vergleichen. Man muss beide auf denselben Zeitpunkt bringen, entweder alles in die Zukunft (aufzinsen) oder alles nach heute (abzinsen).",
            "Skript-Beispiel: $z_0 = 100$ oder $z_2 = 120$? Bei 8 % ergibt Aufzinsen $100 \\cdot 1{,}08^2 = 116{,}64 < 120$, also ist $z_2$ besser. Abzinsen ergibt dasselbe Ergebnis: $120 / 1{,}08^2 = 102{,}88 > 100$. Bei 10 % kippt die Entscheidung: $100 \\cdot 1{,}1^2 = 121 > 120$, also ist $z_0$ besser.",
            "Die Entscheidung hängt also vom Zins ab. Bei einem einheitlichen Zins ist es aber egal, ob man auf- oder abzinst. Beide Wege führen zur selben Antwort.",
            "Die allgemeine Formel bringt eine Zahlung $z_t$ an einen beliebigen Zeitpunkt $t^*$: $B_{t^*} = z_t \\cdot (1+i)^{t^*-t}$. Ist $t^*$ später als $t$, ist der Exponent positiv (aufzinsen). Ist $t^*$ früher, ist er negativ (abzinsen). $t^* = 0$ liefert den Barwert, $t^* = T$ den Endwert."
          ],
          "code": "i = 10 %, Zielzeitpunkt t* = 2\nz0 = 10:  10 · 1,1^(2−0) = 10 · 1,21 = 12,10\nz4 = 10:  10 · 1,1^(2−4) = 10 / 1,21 =  8,26",
          "merke": "Vergleichen kann man Zahlungen nur, wenn sie vorher auf denselben Zeitpunkt auf- oder abgezinst wurden."
        },
        {
          "titel": "Sollzins und Habenzins: Der vollkommene und der echte Kapitalmarkt",
          "text": [
            "Der Habenzins ist der Zins, den du für angelegtes Geld bekommst (Sparbuch). Der Sollzins ist der Zins, den du für geliehenes Geld zahlst (Dispo, Kredit). In der Realität ist der Sollzins höher, weil die Bank Kosten hat: Kunden prüfen, Verträge machen, Rückzahlung überwachen. Diese Transaktionskosten deckt sie über die Zinsdifferenz.",
            "Der vollkommene Kapitalmarkt ist ein Gedankenmodell ohne solche Kosten, ohne Steuern und ohne Grenzen beim Anlegen und Leihen. Dort gilt Sollzins = Habenzins. Viele Formeln der Vorlesung setzen das voraus.",
            "Bei gespaltenem Zins (Soll ≠ Haben) gilt: Aufzinsen, also heutiges Geld in die Zukunft bringen, geht über Anlegen, darum mit dem Habenzins. Abzinsen, also künftiges Geld nach heute holen, geht über einen Kredit, darum mit dem Sollzins.",
            "Beispiel (Tutorium 1, Aufgabe 3b), Soll 8 %, Haben 6 %: 30.000 € heute oder 43.000 € in 5 Jahren? Aufgezinst: $30000 \\cdot 1{,}06^5 = 40.146{,}77 < 43.000$, spricht für später. Abgezinst: $43000 / 1{,}08^5 = 29.265{,}08 < 30.000$, spricht für heute. Die Rechnungen widersprechen sich.",
            "Dann entscheidet die Zeitpräferenz: wie sehr eine Person Konsum heute gegenüber Konsum später bevorzugt. Man misst sie mit einer Nutzenfunktion $U$, die jedem Konsumplan eine Zahl zuordnet (höher = lieber). Im Tutorium: $U(30000; 0) = 30000^{0{,}6} = 485{,}59$ gegenüber $U(0; 43000) = 43000^{0{,}5} = 207{,}36$, also nimmt dieser Investor das Geld heute."
          ],
          "merke": "Aufzinsen mit dem Habenzins, abzinsen mit dem Sollzins; widersprechen sich die Ergebnisse, entscheidet die persönliche Zeitpräferenz."
        },
        {
          "titel": "Zins und Laufzeit zurückrechnen",
          "text": [
            "Manchmal kennst du Anfangs- und Endbetrag und suchst den Zins. Aus $z_0 (1+i)^t = B_t$ folgt $(1+i)^t = B_t / z_0$ und damit $i = \\sqrt[t]{B_t / z_0} - 1$. Die $t$-te Wurzel macht das „hoch $t$“ rückgängig.",
            "Beispiel (Tutorium 1, Aufgabe 1c): 7.600 € heute, 9.026,42 € in 5 Jahren. $9026{,}42 / 7600 = 1{,}18769$, die 5. Wurzel davon ist $1{,}035$, also $i = 3{,}5\\,\\%$. Das ist weniger als der Marktzins von 4 %, also kein gutes Geschäft.",
            "Suchst du die Laufzeit $t$, steht sie im Exponenten. Den holt der natürliche Logarithmus ln herunter, denn es gilt $\\ln(a^t) = t \\cdot \\ln a$. Aus $(1+i)^t = 2$ wird $t \\cdot \\ln(1+i) = \\ln 2$, also $t = \\ln 2 / \\ln(1+i)$. Am Taschenrechner ist das die Taste „ln“."
          ],
          "code": "Verdopplung bei 4 % (Tutorium 1, Aufgabe 1d):\nln 2    = 0,693147\nln 1,04 = 0,039221\nT = 0,693147 / 0,039221 = 17,67 Jahre\nProbe: 1,04^17 = 1,948 (noch nicht 2), 1,04^18 = 2,026",
          "ausgabe": "Bei 4 % verdoppelt sich Geld in 17,67 Jahren.",
          "merke": "Zins zurückrechnen mit der t-ten Wurzel, Laufzeit zurückrechnen mit dem Logarithmus."
        },
        {
          "titel": "Unterjährige Zinsen: der konforme Monats- oder Quartalszins",
          "text": [
            "Viele Zahlungen laufen monatlich (Miete, Handyvertrag, Sparplan). Dann braucht man einen Monatszins, der genau zum Jahreszins passt. „Passt“ heißt: Wer 12 Monate lang mit Zinseszins den Monatszins bekommt, landet beim selben Ergebnis wie mit einem Jahr Jahreszins.",
            "Bedingung: $(1+r)^{12} = 1+i$, also $r = (1+i)^{1/12} - 1$. Allgemein bei $m$ Teilperioden pro Jahr (12 für Monate, 4 für Quartale): $r = (1+i)^{1/m} - 1$. Diesen Zins nennt man konform.",
            "Warum nicht einfach $i/12$? Weil dann der Zinseszins innerhalb des Jahres dazukäme und man am Ende mehr als $i$ hätte. Bei 5 % ergäbe $5\\,\\% / 12$ über 12 Monate 5,116 % statt 5 %.",
            "Beispiel (Tutorium 1, Aufgabe 2a): konformer Quartalszins zu 7 %."
          ],
          "code": "r = 1,07^(1/4) − 1 = 0,017059 = 1,706 %\nProbe: 1,017059^4 = 1,0700\nZum Vergleich 7 % / 4 = 1,75 %: 1,0175^4 = 1,0719 (zu viel)",
          "ausgabe": "Konformer Quartalszins: 1,706 %. Er ist etwas kleiner als 7 % / 4.",
          "merke": "Konformer Zins: r = (1+i) hoch (1/m) minus 1; er ist kleiner als i/m, weil er den Zinseszins im Jahr mitrechnet."
        },
        {
          "titel": "Anleihen: Stückzinsen, Dirty Price und Clean Price",
          "text": [
            "Eine Anleihe ist ein handelbarer Kredit an einen Staat oder eine Firma. Der Nennwert (z. B. 1.000 €) ist der Betrag, der am Ende zurückgezahlt wird. Der Kupon ist der feste Jahreszins darauf, z. B. 7 % = 70 € pro Jahr, gezahlt an einem festen Tag.",
            "Verkauft jemand die Anleihe mitten im Jahr, hat er die Zinsen seit dem letzten Zinstermin „verdient“, aber der Käufer kassiert am Zinstermin den ganzen Kupon. Deshalb zahlt der Käufer dem Verkäufer diesen Anteil aus. Das sind die Stückzinsen. In der Praxis werden sie vereinfacht zeitanteilig berechnet: $\\text{Kupon} \\cdot d/365$, $d$ = Tage seit dem letzten Zinstermin. Das ist ohne Zinseszins und darum etwas mehr als der korrekte konforme Anteil.",
            "Der Dirty Price ist der Barwert der Anleihe, in dem die aufgelaufenen Zinsen schon drinstecken. Der Clean Price ist der Kurs ohne Stückzinsen: $CP = DP - \\text{Stückzinsen}$. Der Käufer zahlt dann Clean Price plus Stückzinsen.",
            "Beispiel (Tutorium 1, Aufgabe 2b): Nennwert 1.000 €, Kupon 7 % am 31.12., Kauf am 30.09., Marktzins 7 %. Am 31.12. fließen 1.000 + 70 = 1.070 €. Bis dahin ist noch 1/4 Jahr, seit dem letzten Zinstermin sind 3/4 Jahr vergangen."
          ],
          "code": "Stückzinsen (zeitanteilig): 70 · 3/4             =    52,50 €\nkonformer Anteil:          1.000 · (1,07^0,75 − 1) =    52,05 €\nDirty Price: 1.070 · 1,07^(−1/4) = 1.070 / 1,01706 = 1.052,05 €\nClean Price: 1.052,05 − 52,50                     =   999,55 €",
          "ausgabe": "Dirty Price 1.052,05 €, Clean Price 999,55 €.",
          "merke": "Dirty Price = Barwert inklusive aufgelaufener Zinsen; Clean Price = Dirty Price minus Stückzinsen."
        },
        {
          "titel": "Stetige Verzinsung: Zinsen in jedem Augenblick",
          "text": [
            "Teilt man das Jahr in immer kleinere Stücke (Monate, Tage, Sekunden) und verzinst jedes Stück mit Zinseszins, landet man im Grenzfall bei der stetigen Verzinsung. Das Geld wächst ohne Pause. Dabei taucht die Eulersche Zahl $e \\approx 2{,}71828$ auf.",
            "Formel: $B_t = B_0 \\cdot e^{r t}$. $B_0$ ist das Startkapital, $r$ die stetige Zinsrate pro Jahr, $t$ die Zeit in Jahren. Der Faktor $e^{r t}$ spielt dieselbe Rolle wie $(1+i)^t$.",
            "Welches $r$ passt zu einem Jahreszins $i$? Nach einem Jahr soll dasselbe herauskommen: $e^r = 1+i$, also $r = \\ln(1+i)$. Weil das Geld unterjährig schon Zinseszins bringt, reicht eine kleinere Rate: bei 5 % ist $r = \\ln 1{,}05 = 4{,}879\\,\\%$.",
            "Beispiel (Tutorium 1, Aufgabe 2c): 200 € für 3 Jahre, Jahreszins 7 %. Tipp: Mit dem ungerundeten $r$ weiterrechnen. Mit gerundeten 6,77 % kämen 245,04 € heraus."
          ],
          "code": "r = ln 1,07 = 0,067659 = 6,77 %\ne^(3 · 0,067659) = e^0,202976 = 1,225043  (= 1,07^3)\n200 € · 1,225043 = 245,01 €",
          "ausgabe": "Endwert: 245,01 €, genau so viel wie 200 · 1,07^3.",
          "merke": "Stetige Rate r = ln(1+i); sie ist immer etwas kleiner als der Jahreszins i."
        }
      ],
      quellen: [
        { name: "Vorlesung: Skript S. 1 bis 35", pfad: null },
        { name: "Tutorium 1: Mitschrift (Di 8–10)", pfad: "material/IuF/Tutorien/Tutorium 1 (Mitschrift Di 8-10).pdf" },
        { name: "Tutorium 1: Aufgabenblatt", pfad: "material/IuF/Tutorien-Aufgaben/Tutorium #1_Zinsrechnung_Aufgaben.pdf" },
        { name: "FHA #1 mit Lösungen", pfad: "material/IuF/Freiwillige Hausaufgaben/FHA #1.pdf" },
        { name: "Klausurensammlung", pfad: "material/IuF/Altklausuren/Klausurensammlung.pdf" }
      ],
      zusammenfassung: [
        "Investition: Zahlungsstrom durch Mittelverwendung, beginnt mit einer Auszahlung, langfristig. Finanzierung: durch Mittelbeschaffung, beginnt mit einer Einzahlung, kurz- bis langfristig.",
        "Realinvestition (Maschinen, Gebäude, Patente) vs. Finanzinvestition (Wertpapiere, Beteiligungen). Bruttoinvestition = Netto- + Ersatzinvestition (Nettoinvestition vergrößert den Bestand, z. B. neue Bahnstrecken; Ersatzinvestition erhält ihn, z. B. Instandhaltung alter Strecken).",
        "Erwartungen: sicher (nur eine Entwicklung), quasi-sicher (eine wird angenommen), Risiko (Wahrscheinlichkeiten bekannt), Ungewissheit (Wahrscheinlichkeiten unbekannt).",
        "Vollkommener Kapitalmarkt: keine Transaktionskosten, Steuern oder Friktionen, unbeschränkte Anlage und Aufnahme, vollständige Konkurrenz. Dann Soll = Haben. Real: Sollzins > Habenzins, weil Banken ihre Transaktionskosten über die Zinsdifferenz decken.",
        "Zahlungen vergleichen: objektiv durch Auf-/Abzinsen, also alle Zahlungen auf denselben Zeitpunkt bringen ($B_{t^*} = z_t (1+i)^{t^*-t}$) oder subjektiv über eine Nutzenfunktion.",
        "Gespaltener Zins: Aufzinsen mit dem Habenzins (heutiges Geld wird angelegt), Abzinsen mit dem Sollzins (künftiges Geld wird per Kredit vorgezogen). Können sich die Ergebnisse widersprechen, entscheidet die Zeitpräferenz.",
        "Konformer unterjähriger Zins: $r = (1+i)^{1/m} - 1$, berücksichtigt Zinseszins (m-mal mit r verzinst ergibt genau den Jahreszins i). Stückzins: zeitanteilig $i \\cdot d/365$, ohne Zinseszins, daher etwas höher.",
        "Stetiger Zins: $r = \\ln(1+i)$, $B_t = B_0 e^{rt}$; r ist etwas kleiner als i, weil in jedem Augenblick schon Zinseszins anfällt. Dirty Price = Barwert inkl. Stückzinsen, Clean Price = Dirty Price − Stückzinsen."
      ],
      aufgaben: [
        { titel: "Tutorium 1, Aufgabe 1 a–d", q: "Tutorium 1",
          text: "Marktzins 4 % p. a. a) 2.000 € für 3 Jahre anlegen: Auszahlung? b) Welcher Betrag heute ergibt in 7 Jahren 10.000 €? c) 7.600 € heute, 9.026,42 € in 5 Jahren: welche Verzinsung, gutes Geschäft? d) Wie lange dauert die Verdopplung?",
          loesung: [
            "a) $2000 \\cdot 1{,}04^3 = 2.249{,}73$ €",
            "b) $10000 \\cdot 1{,}04^{-7} = 7.599{,}18$ €",
            "c) $\\sqrt[5]{9026{,}42 / 7600} - 1 = 3{,}5\\,\\%$. Das liegt unter dem Marktzins von 4 %, also kein gutes Geschäft.",
            "d) $1{,}04^T = 2 \\Rightarrow T = \\ln 2 / \\ln 1{,}04 = 17{,}67$ Jahre, also deutlich unter 25 Jahren."
          ] },
        { titel: "Tutorium 1, Aufgabe 2: Anleihe", q: "Tutorium 1, Mitschrift S. 18 bis 21",
          text: "Kauf am 30.09., Anleihe fällig am 31.12., Nennwert 1.000 €, Kupon 7 % jährlich am 31.12. a) Konformer Quartalszins bei 7 %? b) Stückzinsen und konformer Zinsanteil? Barwert am 30.09.? Dirty und Clean Price? c) Stetige Rate zu 7 % und Endwert von 200 € nach 3 Jahren?",
          loesung: [
            "a) $r_Q = 1{,}07^{1/4} - 1 = 1{,}706\\,\\%$",
            "b) Seit dem 31.12. sind 9 Monate = 3/4 Jahr vergangen. Stückzinsen: $1000 \\cdot 0{,}07 \\cdot \\tfrac{3}{4} = 52{,}50$ €. Konform: $1000 \\cdot (1{,}07^{3/4} - 1) = 52{,}05$ €.",
            "Barwert am 30.09.: $1070 \\cdot 1{,}07^{-1/4} = 1.052{,}05$ € = Dirty Price. Clean Price $= 1.052{,}05 - 52{,}50 = 999{,}55$ €.",
            "c) $r = \\ln 1{,}07 = 6{,}77\\,\\%$. Endwert $200 \\cdot e^{3r} = 200 \\cdot 1{,}07^3 = 245{,}01$ €."
          ] },
        { titel: "Tutorium 1, Aufgabe 3: Soll 8 %, Haben 6 %", q: "Tutorium 1, Mitschrift S. 25 bis 27",
          text: "a) 5.000 € heute oder 5.850 € in 2 Jahren? b) 30.000 € heute oder 43.000 € in 5 Jahren? c) Welche Alternative aus b) wählt ein Investor mit $U(c_0, c_5) = c_0^{0,6} + c_5^{0,5}$ ohne Kapitalmarkt?",
          loesung: [
            "a) Aufzinsen mit Haben: $5000 \\cdot 1{,}06^2 = 5.618 < 5.850$. Abzinsen mit Soll: $5850 / 1{,}08^2 = 5.015{,}43 > 5.000$. Beide sagen: 5.850 € in 2 Jahren.",
            "b) Aufzinsen: $30000 \\cdot 1{,}06^5 = 40.146{,}77 < 43.000$, spricht für später. Abzinsen: $43000 / 1{,}08^5 = 29.265{,}08 < 30.000$, spricht für heute. Kein eindeutiges Ergebnis.",
            "c) $U(30000; 0) = 30000^{0,6} = 485{,}59$, $U(0; 43000) = 43000^{0,5} = 207{,}36$. Der Investor nimmt die 30.000 € heute."
          ] },
        { titel: "FHA #1, Rechenteil", q: "FHA #1 (offizielle Lösung)",
          text: "1) 250.000 € Festgeld, monatlicher Zins 0,73 %. a) Konformer Jahreszins? b) Wie viele Monate für 10.000 € Zinsen? 2) Soll 4 %, Haben 3 %: 20.000 € heute oder 22.000 € in 2 Jahren?",
          loesung: [
            "1a) $1{,}0073^{12} - 1 = 9{,}12\\,\\%$",
            "1b) $250000 \\cdot 1{,}0073^T = 260000 \\Rightarrow T = \\ln(1{,}04)/\\ln(1{,}0073) = 5{,}39$. Also 6 Monate (dann 11.151,79 € Zinsen).",
            "2) $20000 \\cdot 1{,}03^2 = 21.218 < 22.000$. Abzinsen mit Soll: $22000/1{,}04^2 = 20.340{,}24 > 20.000$. Eindeutig: 22.000 € in 2 Jahren."
          ] },
        { titel: "Altklausur: Investition mit Einzahlung zuerst", q: "Klausurensammlung, Klausur 2, Aufgabe 1a (Musterlösung)",
          text: "Nennen Sie je ein Beispiel für eine Investition, die mit einer Einzahlung beginnt, und eine Finanzierung, die mit einer Auszahlung beginnt.",
          loesung: [
            "Musterlösung: Investition mit Einzahlung zuerst, z. B. Kauf einer Maschine mit Zahlung auf Ziel (erst Erlöse, später die Zahlung). Finanzierung mit Auszahlung zuerst, z. B. Kreditaufnahme mit Vorabgebühr.",
            "Hintergrund: Investitionen beginnen nur „normalerweise“ mit einer Auszahlung (Skript S. 11). Entscheidend ist der Zweck: Mittelverwendung bzw. Mittelbeschaffung."
          ] }
      ],
      karten: [
        { f: "Im Erbschaftsbeispiel: Warum ist Alternative A3 (vermieten) ineffizient?",
          a: "A3 wird von A2 dominiert. Gleiche Auszahlung an den Bruder (−200.000) und gleicher Endwert (450.000), aber A3 kostet jährlich 5.000 statt 4.000.", s: 6 },
        { f: "Warum ist der Sollzins in der Regel höher als der Habenzins?",
          a: "Auf unvollkommenen Märkten gibt es Transaktionskosten (Anbahnung, Verhandlung, Überwachung, Durchsetzung). Die Bank deckt sie über die Zinsdifferenz.", s: 8 },
        { f: "Welche Voraussetzungen hat ein vollkommener Kapitalmarkt?",
          a: "Zinssätze unabhängig von der Transaktionsgröße, unbeschränkte Anlage und Aufnahme, keine Transaktionskosten, Steuern oder Friktionen, vollständige Konkurrenz und Transparenz. Dann gilt Sollzins = Habenzins.", q: "FHA #1, Theorie 1" },
        { f: "Gewinn: 50 % Wahrscheinlichkeit, Verlust 30 %, Kostendeckung 20 %. Welche Erwartung?",
          a: "Risiko, weil die Wahrscheinlichkeiten bekannt sind. „Unklar, wie es sich entwickelt“ wäre Ungewissheit, „es wird angenommen, dass Verlust kommt“ quasi-sicher, „in jedem Fall Verlust“ sicher.", q: "FHA #1, Theorie 2" },
        { f: "Was ist Quasi-Sicherheit?",
          a: "Mehrere Entwicklungen sind vorstellbar, aber man legt nur eine zugrunde, z. B. die wahrscheinlichste oder die gefährlichste.", s: 9 },
        { f: "Investition vs. Finanzierung: Zahlungsstrom, erste Zahlung, Fristigkeit?",
          a: "Investition: durch Mittelverwendung, beginnt mit Auszahlung, langfristig. Finanzierung: durch Mittelbeschaffung, beginnt mit Einzahlung, kurz- bis langfristig.", q: "Tutorium 1, S. 5" },
        { f: "Realinvestition vs. Finanzinvestition?",
          a: "Realinvestition: güterwirtschaftliche Objekte (Maschinen, Gebäude, Patente), erst deren Einsatz bringt Rückflüsse. Finanzinvestition: Kauf von Zahlungsansprüchen (Wertpapiere, Beteiligungen).", s: 12 },
        { f: "Wie hängen Brutto-, Netto- und Ersatzinvestition zusammen?",
          a: "Bruttoinvestition = Nettoinvestition (Mehrung der Substanz, z. B. neue Bahnstrecken) + Ersatzinvestition (Erhaltung, z. B. Instandhaltung alter Strecken).", s: 12 },
        { f: "Was ist bei vorhandenen Eigenmitteln die Unterlassensalternative?",
          a: "Eine Finanzanlage, denn das eigene Geld läge sonst nicht ungenutzt herum. Was man dort bekommen hätte, sind die Opportunitätskosten der Investition.", s: 14 },
        { f: "Gespaltener Zins: Womit wird auf-, womit abgezinst?",
          a: "Aufzinsen (heutiges Geld anlegen) mit dem Habenzins. Abzinsen (künftiges Geld durch Kredit vorziehen) mit dem Sollzins. Widersprechen sich die Ergebnisse, entscheidet die Zeitpräferenz.", q: "Tutorium 1, Aufgabe 3" },
        { f: "Konformer Zins vs. Stückzins vs. stetiger Zins?",
          a: "Konform: $(1+i)^{1/m}-1$, mit Zinseszins. Stückzins: zeitanteilig $i \\cdot d/365$, ohne Zinseszins, daher etwas höher. Stetig: $r = \\ln(1+i)$, Verzinsung in unendlich kleinen Intervallen, daher am kleinsten.", q: "FHA #1, Theorie 5" },
        { f: "Clean Price vs. Dirty Price?",
          a: "Dirty Price: Barwert der Anleihe, Stückzinsen sind im Kurs enthalten. Clean Price = Dirty Price − Stückzinsen, der Käufer zahlt die Stückzinsen zusätzlich.", q: "Tutorium 1, S. 20" },
        { f: "Was bedeutet eine steilere Indifferenzkurve im (c₀, c₁)-Diagramm?",
          a: "Stärkere Neigung zu Konsum heute, also eine höhere individuelle Diskontrate. Wer auf einen Euro heute verzichtet, verlangt dafür viele Euro später.", s: 35 }
      ],
      quiz: [
        { typ: "mc", s: 9, frage: "Welche Aussage beschreibt „Risiko“ im Sinne der Vorlesung?",
          optionen: ["Nur eine künftige Entwicklung ist vorstellbar.", "Mehrere Entwicklungen sind denkbar, ihre Wahrscheinlichkeiten werden berücksichtigt.", "Mehrere Entwicklungen sind denkbar, man legt nur die wahrscheinlichste zugrunde.", "Mehrere Entwicklungen sind denkbar, Wahrscheinlichkeiten werden nicht berücksichtigt."],
          richtig: 1, erklaerung: "Option 1 ist Sicherheit, Option 3 Quasi-Sicherheit, Option 4 Ungewissheit." },
        { typ: "mc", q: "FHA #1, Theorie 2", frage: "„Das Projekt wird in jedem Fall einen Verlust generieren.“ Welche Art von Erwartung ist das?",
          optionen: ["Risiko", "Ungewissheit", "Quasi-sichere Erwartung", "Sichere Erwartung"],
          richtig: 3, erklaerung: "„In jedem Fall“ heißt: nur eine Entwicklung ist vorstellbar. „Es wird angenommen, dass …“ wäre quasi-sicher." },
        { typ: "mc", s: 8, frage: "Womit erklärt die Vorlesung, dass der Kreditzins meist über dem Anlagezins liegt?",
          optionen: ["Mit der Inflation", "Mit Transaktionskosten auf unvollkommenen Märkten", "Mit der Geldpolitik der Zentralbank", "Mit der Gegenwartspräferenz der Haushalte"],
          richtig: 1, erklaerung: "Kosten für Anbahnung, Verhandlung, Überwachung und Durchsetzung werden über die Zinsdifferenz gedeckt." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 1a", frage: "Marktzins 4 %. Du legst 2.000 € für 3 Jahre an. Wie viel bekommst du ausgezahlt?",
          loesung: 2249.73, toleranz: 0.01, einheit: "€", erklaerung: "Aufzinsen: jedes Jahr einmal mit 1,04 malnehmen, also $2000 \\cdot 1{,}04^3 = 2.249{,}73$." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 1b", frage: "Marktzins 4 %. Wie viel musst du heute anlegen, um in 7 Jahren 10.000 € zu haben?",
          loesung: 7599.18, toleranz: 0.01, einheit: "€", erklaerung: "Abzinsen: durch 1,04 hoch 7 teilen, also $10000 \\cdot 1{,}04^{-7} = 7.599{,}18$. Probe: 7.599,18 · 1,04^7 = 10.000." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 1c", frage: "Heute 7.600 € gezahlt, in 5 Jahren 9.026,42 € zurück. Welche jährliche Verzinsung (in %, eine Nachkommastelle)?",
          loesung: 3.5, toleranz: 0.05, einheit: "%", erklaerung: "$\\sqrt[5]{9026{,}42/7600} - 1 = 3{,}5\\,\\%$, weniger als der Marktzins von 4 %." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 1d", frage: "Marktzins 4 %. Nach wie vielen Jahren hat sich das Kapital verdoppelt (zwei Nachkommastellen)?",
          loesung: 17.67, toleranz: 0.01, einheit: "Jahre", erklaerung: "Aus $1{,}04^T = 2$ holt der Logarithmus den Exponenten herunter: $T = \\ln 2 / \\ln 1{,}04 = 17{,}67$." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 2a", frage: "Konformer Quartalszins bei 7 % Jahreszins (in %, drei Nachkommastellen)?",
          loesung: 1.706, toleranz: 0.001, einheit: "%", erklaerung: "Viermal mit Zinseszins verzinst muss 1,07 herauskommen: $1{,}07^{1/4} - 1 = 0{,}01706$. Einfach 7 %/4 = 1,75 % wäre zu viel." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 2b", frage: "Anleihe: Nennwert 1.000 €, Kupon 7 % am 31.12., Kauf am 30.09. Wie hoch ist der Clean Price?",
          loesung: 999.55, toleranz: 0.01, einheit: "€", erklaerung: "Dirty Price $= 1070 \\cdot 1{,}07^{-1/4} = 1.052{,}05$. Stückzinsen $= 70 \\cdot 3/4 = 52{,}50$. Clean Price $= 999{,}55$." },
        { typ: "zahl", q: "Tutorium 1, Aufgabe 2c", frage: "Endwert von 200 € nach 3 Jahren bei stetiger Verzinsung, die 7 % p. a. entspricht?",
          loesung: 245.01, toleranz: 0.01, einheit: "€", erklaerung: "$r = \\ln 1{,}07$, also $200 \\cdot e^{3r} = 200 \\cdot 1{,}07^3 = 245{,}01$" },
        { typ: "mc", q: "Tutorium 1, Aufgabe 3b", frage: "Soll 8 %, Haben 6 %. 30.000 € heute oder 43.000 € in 5 Jahren?",
          optionen: ["Eindeutig 30.000 € heute", "Eindeutig 43.000 € in 5 Jahren", "Kein eindeutiges Ergebnis: aufgezinst spricht es für später, abgezinst für heute", "Beide sind gleich viel wert"],
          richtig: 2, erklaerung: "$30000 \\cdot 1{,}06^5 = 40.146{,}77 < 43.000$, aber $43000/1{,}08^5 = 29.265{,}08 < 30.000$." },
        { typ: "zahl", q: "FHA #1, Aufgabe 1a", frage: "Monatlicher Zins 0,73 %. Wie hoch ist der konforme Jahreszins (in %, zwei Nachkommastellen)?",
          loesung: 9.12, toleranz: 0.005, einheit: "%", erklaerung: "Zwölfmal den Monatszins mit Zinseszins: $1{,}0073^{12} - 1 = 9{,}12\\,\\%$, also mehr als 12 · 0,73 % = 8,76 %." },
        { typ: "zahl", q: "FHA #1, Aufgabe 1b", frage: "250.000 € zu 0,73 % pro Monat. Nach wie vielen vollen Monaten hast du mindestens 10.000 € Zinsen?",
          loesung: 6, toleranz: 0, einheit: "Monate", erklaerung: "$T = \\ln(1{,}04)/\\ln(1{,}0073) = 5{,}39$, also 6 volle Monate." },
        { typ: "zahl", s: 28, frage: "Welche stetige Zinsrate entspricht 5 % Jahreszins (in %, drei Nachkommastellen)?",
          loesung: 4.879, toleranz: 0.002, einheit: "%", erklaerung: "Nach einem Jahr soll dasselbe herauskommen: $e^r = 1{,}05$, also $r = \\ln(1{,}05) = 4{,}879\\,\\%$." }
      ],
      formeln: [
        { name: "Auf- und Abzinsen", tex: "B_{t^*} = z_t \\cdot (1+i)^{t^*-t}", text: "t* > t: aufzinsen, t* < t: abzinsen. t* = 0: Barwert, t* = T: Endwert.", s: 21 },
        { name: "Konformer unterjähriger Zins", tex: "r = (1+i)^{1/m} - 1 \\qquad r_{konform} = (1+i)^{d/360} - 1", text: "m Teilperioden pro Jahr (12 = Monat, 4 = Quartal), bzw. d Tage.", s: 23, bsp: "i = 7 %: Quartal 1,706 %" },
        { name: "Stückzinsen", tex: "\\text{Stückzins} = \\dfrac{d}{365} \\cdot \\text{Kuponzins}", text: "Zeitanteilig, ohne Zinseszins.", q: "Tutorium 1, S. 16" },
        { name: "Dirty und Clean Price", tex: "DP = B_0, \\qquad CP = DP - \\text{Stückzinsen}", text: "DP: Stückzinsen im Kurs enthalten. CP: Käufer zahlt sie extra.", q: "Tutorium 1, S. 20" },
        { name: "Stetige Verzinsung", tex: "B_t = B_0 \\cdot e^{r t}, \\qquad r = \\ln(1+i)", text: "r: stetige Zinsrate pro Jahr.", s: 26, bsp: "i = 7 %: r = 6,77 %" }
      ]
    },
    // ==================================================================
    {
      id: "w2",
      titel: "Woche 2: Statische und dynamische Investitionsrechnung",
      abschnitt: "Tutorium ab 09.11.2026",
      seiten: "Skript Kap. 5.3 und 6.1.1, S. 36 bis 51",
      lektionen: [
        {
          "titel": "Worum es geht: Lohnt sich ein Projekt, und welches ist das beste?",
          "text": [
            "Eine Investitionsrechnung beantwortet zwei Fragen. Absolute Vorteilhaftigkeit: Lohnt sich das Projekt überhaupt, verglichen mit dem Nichtstun? Relative Vorteilhaftigkeit: Welches von mehreren Projekten ist das beste (Rangfolge)?",
            "Nichtstun heißt dabei fast nie, das Geld unter das Kopfkissen zu legen. Wer eigenes Geld hat, könnte es stattdessen anlegen. Diese Unterlassensalternative ist eine Finanzanlage. Was dir dort entgeht, nennt man Opportunitätskosten: der Ertrag der nächstbesten Möglichkeit, auf die du verzichtest.",
            "Der Kalkulationszins $i$ ist der Zins, mit dem du rechnest. Er steht für genau diese Opportunitätskosten: was das Geld am Kapitalmarkt bringen würde, oder was ein Kredit kostet. Auf dem vollkommenen Kapitalmarkt sind beide gleich, darum ist es dort egal, ob du mit eigenem oder geliehenem Geld investierst.",
            "Es gibt zwei Familien von Verfahren. Statische Verfahren schauen meist nur auf eine typische Periode und ignorieren, wann genau Geld fließt. Dynamische Verfahren erfassen die ganze Laufzeit und zinsen alle Zahlungen ab (Woche 1)."
          ],
          "merke": "Der Kalkulationszins misst, was das Geld anderswo bringen würde; ein Projekt muss mindestens das verdienen."
        },
        {
          "titel": "Gewinn- und Kostenvergleich: einfach, aber mit Fallen",
          "text": [
            "Gewinnvergleichsrechnung: Wähle das Projekt mit dem größten Gewinn einer typischen (oder durchschnittlichen) Periode und verzichte auf Projekte mit Verlust. Gewinn ist Ertrag minus Kosten in Euro.",
            "Das klappt nur, wenn die Projekte vergleichbar sind. Gleiche Nutzungsdauer: 2 Mio. € Gewinn pro Jahr für 2 Jahre (zusammen 4 Mio.) wirkt besser als 1 Mio. € pro Jahr für 10 Jahre (zusammen 10 Mio.), ist es aber nicht. Gleicher Kapitaleinsatz: 1 Mio. € Gewinn mit 10 € Einsatz ist etwas anderes als mit 1 Mrd. € Einsatz. Konstante Gewinne: (1; 2; 3) und (3; 2; 1) haben denselben Durchschnitt, aber der frühe Gewinn ist mehr wert.",
            "Kostenvergleichsrechnung: Die Regel „nimm das Projekt mit den geringsten Kosten“ wäre unsinnig, denn dann wäre gar nichts produzieren am billigsten. Sinnvoll ist nur: geringste Kosten bei gleichen Erträgen. Dann ist sie dasselbe wie der Gewinnvergleich."
          ],
          "merke": "Gewinn- und Kostenvergleich funktionieren nur bei gleicher Laufzeit, gleichem Kapitaleinsatz (bzw. gleichen Erträgen) und konstanten Periodengewinnen."
        },
        {
          "titel": "Rendite: Gewinn pro eingesetztem Euro",
          "text": [
            "Die Rendite (Return on Investment, RoI) setzt den Gewinn ins Verhältnis zum eingesetzten Kapital: $\\text{RoI} = \\dfrac{\\text{Gewinn vor Zinsen}}{\\text{eingesetztes Kapital}}$. Der Gewinn ist eine absolute Größe in Euro, die Rendite eine relative in Prozent.",
            "„Vor Zinsen“, weil man die Rendite mit einer Mindestverzinsung (z. B. dem Kalkulationszins) vergleicht. Würde man die Zinsen vorher abziehen, zählten sie doppelt. Fließt schon während der Periode Geld zurück, nimmt man das durchschnittlich gebundene Kapital.",
            "Beispiel: Projekt A bringt 10.000 € Gewinn bei 100.000 € Kapital, Projekt B 15.000 € bei 200.000 €. B hat mehr Gewinn, A die höhere Rendite.",
            "Regel: Wähle die höchste Rendite, solange sie über der Mindestverzinsung liegt. Bei gleichem Kapitaleinsatz entscheidet die Rendite wie der Gewinnvergleich und hat dieselben Schwächen."
          ],
          "code": "RoI A = 10.000 / 100.000 = 0,100 = 10,0 %\nRoI B = 15.000 / 200.000 = 0,075 =  7,5 %",
          "merke": "Gewinn ist absolut (Euro), Rendite ist relativ (Prozent vom eingesetzten Kapital)."
        },
        {
          "titel": "Statische Amortisationsrechnung: Wann ist das Geld wieder drin?",
          "text": [
            "Amortisieren heißt: Die Auszahlungen sind durch Einzahlungen wieder hereingeholt. Die Amortisationsdauer ist die Zeit, bis das geschafft ist. Man addiert die Zahlungen Jahr für Jahr (kumuliert) und schaut, wann die Summe nicht mehr negativ ist.",
            "Kommt später noch eine Auszahlung, muss auch sie gedeckt sein. Die Summe muss also ab dem Zeitpunkt dauerhaft ≥ 0 bleiben. Skript-Beispiel (−100; 80; 80; −70; 40; 20): kumuliert −100, −20, 60, −10, 30, 50. In $t = 2$ ist die Summe kurz positiv, fällt aber wieder. Amortisationsdauer: 4 Perioden.",
            "Schwächen: Alles nach dem Amortisationszeitpunkt wird ignoriert, ebenso wann innerhalb der Dauer gezahlt wird (keine Abzinsung). Die Methode sagt eher etwas über das Risiko (je schneller, desto weniger unsicher) als über den Gewinn.",
            "Beispiel aus dem Skript (S. 40): (−100.000; 30.000; 50.000; 40.000; 20.000)."
          ],
          "code": "t        0         1         2         3        4\ne_t  −100.000   30.000    50.000   40.000   20.000\nSumme −100.000  −70.000  −20.000   20.000   40.000",
          "ausgabe": "Ab t = 3 ist die Summe positiv: Amortisationsdauer 3 Perioden.",
          "merke": "Statische Amortisationsdauer: erster Zeitpunkt, ab dem die aufsummierten Zahlungen dauerhaft nicht mehr negativ sind."
        },
        {
          "titel": "Der Kapitalwert: alle Zahlungen auf heute bringen",
          "text": [
            "Jetzt kommt das wichtigste Verfahren des Fachs. Idee: Jede Zahlung des Projekts wird auf heute abgezinst (Woche 1), dann werden alle Barwerte addiert, auch die Anfangsauszahlung. Das Ergebnis heißt Kapitalwert $K$.",
            "Formel: $K = \\sum_{t=0}^{T} e_t\\,(1+i)^{-t} = e_0 + \\dfrac{e_1}{(1+i)} + \\dfrac{e_2}{(1+i)^2} + \\dots + \\dfrac{e_T}{(1+i)^T}$.",
            "Symbole: $e_t$ ist der Einzahlungsüberschuss im Zeitpunkt $t$, also Einzahlungen minus Auszahlungen in diesem Jahr. $e_0 = -A_0$ ist die Anfangsauszahlung mit Minus. $i$ ist der Kalkulationszins, $T$ das letzte Jahr. Das Summenzeichen $\\sum$ heißt nur: für jedes $t$ von 0 bis $T$ ausrechnen und addieren.",
            "Entscheidung: $K > 0$ heißt, das Projekt bringt mehr als die Geldanlage zum Zins $i$, es lohnt sich. $K < 0$ heißt, es verdient nicht einmal seine Zinskosten. Zwischen Projekten gewinnt das mit dem größten $K$.",
            "Skript-Beispiel: (−100; 50; 40; 30; 20; 10), $i = 10\\,\\%$."
          ],
          "code": "t=0: −100 / 1,1^0 = −100 / 1,0000 = −100,00\nt=1:   50 / 1,1^1 =   50 / 1,1000 =   45,45\nt=2:   40 / 1,1^2 =   40 / 1,2100 =   33,06\nt=3:   30 / 1,1^3 =   30 / 1,3310 =   22,54\nt=4:   20 / 1,1^4 =   20 / 1,4641 =   13,66\nt=5:   10 / 1,1^5 =   10 / 1,6105 =    6,21\nSumme K                          =   20,92",
          "ausgabe": "K = 20,92 > 0: Das Projekt lohnt sich.",
          "merke": "Kapitalwert = Summe aller abgezinsten Zahlungen inklusive Anfangsauszahlung; lohnend, wenn K > 0."
        },
        {
          "titel": "Was der Kapitalwert bedeutet: der Finanzplan",
          "text": [
            "Der Kapitalwert ist kein abstrakter Rechenwert. Er ist der Betrag, den du heute zusätzlich ausgeben (entnehmen) kannst, wenn das Projekt samt Zinsen alles zurückzahlt.",
            "Probe mit einem Finanzplan: Du nimmst in $t = 0$ einen Kredit von $100 + 20{,}92 = 120{,}92$ auf, steckst 100 ins Projekt und gibst 20,92 sofort aus. Jedes Jahr zahlst du mit dem Rückfluss $e_t$ erst die Zinsen $i \\cdot KB_{t-1}$, der Rest tilgt den Kredit.",
            "Kapitalbindung $KB_t$ ist das Geld samt Zinsen, das noch im Projekt steckt und noch nicht zurückgeflossen ist. Bei Kreditfinanzierung ist das genau der Kreditstand. Kapitalfreisetzung ist ihre Verringerung, bei einem Kredit also die Tilgung: $e_t - c_t - i \\cdot KB_{t-1}$, wobei $c_t$ eine Entnahme ist.",
            "Geht der Kredit in $T$ genau auf 0 auf, war die Entnahme genau richtig. (Im Skript stehen durch Rundung in $t = 3$ und $t = 4$ die Werte 26,44 und 9,08.)"
          ],
          "code": "t   Rückfluss  Zinsen 10 %  Tilgung  Kreditstand KB\n0      −100        –          –       120,92\n1        50      12,09      37,91      83,01\n2        40       8,30      31,70      51,31\n3        30       5,13      24,87      26,45\n4        20       2,64      17,36       9,09\n5        10       0,91       9,09       0,00",
          "ausgabe": "Der Kredit ist in t = 5 genau getilgt: 20,92 heute zu entnehmen war möglich.",
          "merke": "Der Kapitalwert ist der Betrag, den man heute zusätzlich entnehmen kann, wenn das Projekt den Kredit samt Zinsen zurückzahlt."
        },
        {
          "titel": "Kapitalwert in der Praxis: zwei Projekte vergleichen",
          "text": [
            "Tutorium 2, Aufgabe 4: A = (−100; 50; 60; 80) und B = (−100; 60; −20; 80) bei $i = 10\\,\\%$. Jede Zahlung wird durch $1{,}1^t$ geteilt, auch die negative von B in $t = 2$.",
            "Achte auf die Begriffe: Barwert ist der heutige Wert einer einzelnen künftigen Zahlung (oder nur der Rückflüsse). Kapitalwert ist der Barwert des ganzen Zahlungsstroms inklusive Anfangsauszahlung."
          ],
          "code": "A: −100 + 50/1,1 + 60/1,21 + 80/1,331\n   = −100 + 45,45 + 49,59 + 60,11 = 55,15\nB: −100 + 60/1,1 − 20/1,21 + 80/1,331\n   = −100 + 54,55 − 16,53 + 60,11 = −1,88",
          "ausgabe": "A lohnt sich (K = 55,15), B nicht (K = −1,88).",
          "merke": "Auch negative Zahlungen in späteren Jahren werden einfach mit Minus abgezinst und mitaddiert."
        },
        {
          "titel": "Endwert: dieselbe Entscheidung, nur am Ende gemessen",
          "text": [
            "Statt alles nach heute zu holen, kann man alles auf das letzte Jahr $T$ aufzinsen. Das ergibt den Endwert $B_T = \\sum_{t=0}^{T} e_t (1+i)^{T-t}$. Er ist der Betrag, den du am Ende zusätzlich entnehmen kannst, nach Abzug des eingesetzten Geldes und seiner Zinskosten.",
            "Weil jede Zahlung nur um denselben Faktor $(1+i)^T$ weiter verschoben wird, gilt einfach $B_T = K \\cdot (1+i)^T$. Deshalb führt der Endwert immer zur selben Entscheidung wie der Kapitalwert. Vergleichen darf man Endwerte aber nur, wenn sie sich auf dasselbe $T$ beziehen.",
            "Den Endwert (zum Kapitalwert) nicht mit dem Vermögensendwert verwechseln: Der Vermögensendwert ist das gesamte Endvermögen, nicht nur der Zuwachs.",
            "Entnimmt man nicht am Anfang oder Ende, sondern dazwischen, verschiebt man $K$ einfach auf diesen Zeitpunkt. Tutorium 2, Aufgabe 5: (−400; 150; 140; 180) bei 5 % hat $K = 25{,}33$, in $t = 2$ kann man $25{,}33 \\cdot 1{,}05^2 = 27{,}93$ entnehmen."
          ],
          "code": "Skript-Beispiel (−100; 50; 40; 30; 20; 10), i = 10 %:\n1,1^5 = 1,61051\nB_5 = 20,92 · 1,61051 = 33,69",
          "ausgabe": "Endwert 33,69: so viel kann man in t = 5 zusätzlich entnehmen.",
          "merke": "Endwert = Kapitalwert mal (1+i) hoch T; er führt immer zur selben Entscheidung wie der Kapitalwert."
        },
        {
          "titel": "Dynamische Amortisationsdauer: wie statisch, nur abgezinst",
          "text": [
            "Die dynamische Amortisationsdauer ist der erste Zeitpunkt, ab dem der Kapitalwert der bisherigen Zahlungen dauerhaft ≥ 0 ist. Man rechnet also wie bei der statischen Variante, addiert aber Barwerte statt der nackten Zahlungen.",
            "Weil späte Einzahlungen abgezinst weniger wert sind, dauert die dynamische Amortisation meist länger.",
            "Tutorium 2, Aufgabe 6: (−10; −110; 0; 90; 60; 0; 10) bei 10 %. Statisch kumuliert: −10, −120, −120, −30, +30, +30, +40, also 4 Jahre."
          ],
          "code": "t   e_t   Barwert e_t/1,1^t   Summe der Barwerte\n0   −10      −10,00              −10,00\n1  −110     −100,00             −110,00\n2     0        0,00             −110,00\n3    90       67,62              −42,38\n4    60       40,98               −1,40\n5     0        0,00               −1,40\n6    10        5,64                4,24",
          "ausgabe": "Erst in t = 6 wird die Summe positiv: dynamische Amortisationsdauer 6 Jahre (statisch 4).",
          "merke": "Dynamische Amortisationsdauer: erster Zeitpunkt, ab dem die Summe der Barwerte dauerhaft nicht mehr negativ ist."
        }
      ],
      quellen: [
        { name: "Vorlesung: Skript S. 36 bis 51", pfad: null },
        { name: "Tutorium 2: Mitschrift (Di 8–10)", pfad: "material/IuF/Tutorien/Tutorium 2 (Mitschrift Di 8-10).pdf" },
        { name: "Tutorium 2: Aufgabenblatt", pfad: "material/IuF/Tutorien-Aufgaben/Tutorium #2_statische  dynamische Investitionsrechnung_Aufgaben.pdf" },
        { name: "FHA #2 mit Lösungen", pfad: "material/IuF/Freiwillige Hausaufgaben/FHA #2.pdf" },
        { name: "Klausurensammlung", pfad: "material/IuF/Altklausuren/Klausurensammlung.pdf" }
      ],
      zusammenfassung: [
        "Statische Verfahren: Gewinn-, Kosten-, Renditevergleich, Amortisationsrechnung. Meist nur eine repräsentative Periode, Zeitpunkte der Zahlungen zählen nicht.",
        "Gewinn- und Kostenvergleich sind nur unproblematisch bei gleicher Nutzungsdauer, gleichem Kapitaleinsatz bzw. gleichen Erträgen und konstanten Periodengewinnen.",
        "Rendite (RoI) = Gewinn vor Zinsen / eingesetztes Kapital, also eine relative Größe. Der Gewinn ist absolut.",
        "Statische Amortisationsdauer: Wann sind alle Auszahlungen durch Einzahlungen gedeckt? Dynamische: Wann wird der Kapitalwert erstmals dauerhaft ≥ 0?",
        "Dynamische Verfahren: Kapitalwert, Endwert, Annuität, interner Zins, Kapitalwertrate. Sie erfassen die ganze Laufzeit und diskontieren, d. h. sie zinsen jede Zahlung auf einen gemeinsamen Zeitpunkt ab.",
        "Kapitalwert $K = \\sum e_t (1+i)^{-t}$: heutiger Vermögenszuwachs (so viel kann man heute zusätzlich entnehmen, wenn das Projekt alles samt Zinsen zurückzahlt). Endwert $B_T = K (1+i)^T$: gleiche Entscheidung, aber auf T bezogen.",
        "Barwert bezieht sich auf eine einzelne Zahlung oder nur Rückflüsse, der Kapitalwert auf den ganzen Zahlungsstrom inkl. Anfangsauszahlung. Analog Endwert vs. Vermögensendwert.",
        "Finanzplan: Zinsen $= i \\cdot KB_{t-1}$, Tilgung (Kapitalfreisetzung) $= e_t - c_t - \\text{Zinsen}$, $KB_t = KB_{t-1} - \\text{Tilgung}$. Am Ende muss KB = 0 sein."
      ],
      aufgaben: [
        { titel: "Tutorium 2, Aufgabe 4: Kapital- und Endwert", q: "Tutorium 2",
          text: "A = (−100; 50; 60; 80), B = (−100; 60; −20; 80), i = 10 %. Kapital- und Endwert berechnen und deuten.",
          loesung: [
            "$K_A = -100 + \\frac{50}{1{,}1} + \\frac{60}{1{,}1^2} + \\frac{80}{1{,}1^3} = 55{,}15$, Endwert $B_3 = 55{,}15 \\cdot 1{,}1^3 = 73{,}40$.",
            "$K_B = -100 + \\frac{60}{1{,}1} - \\frac{20}{1{,}1^2} + \\frac{80}{1{,}1^3} = -1{,}88$, Endwert $= -2{,}50$.",
            "A erhöht das Vermögen heute um 55,15 (bzw. 73,40 in t = 3). B lohnt sich nicht: Es verdient seine Zinskosten nicht."
          ] },
        { titel: "Tutorium 2, Aufgabe 5: Entnahme und Finanzplan", q: "Tutorium 2",
          text: "Projekt (−400; 150; 140; 180), Kontokorrentkredit zu 5 %. a) Maximale Entnahme in t = 2? b) Finanzplan.",
          loesung: [
            "a) $K = -400 + \\frac{150}{1{,}05} + \\frac{140}{1{,}05^2} + \\frac{180}{1{,}05^3} = 25{,}33$. Entnahme in t = 2: $25{,}33 \\cdot 1{,}05^2 = 27{,}93$.",
            "b) t = 1: Zinsen 20,00, Tilgung 130,00, KB 270,00. t = 2: Zinsen 13,50, Entnahme 27,93, Tilgung 98,57, KB 171,43. t = 3: Zinsen 8,57, Tilgung 171,43, KB 0. Das Projekt trägt sich genau."
          ] },
        { titel: "Tutorium 2, Aufgabe 6: Amortisationsdauer", q: "Tutorium 2",
          text: "Zahlungsstrom (−10; −110; 0; 90; 60; 0; 10). b) Statische Amortisationsdauer? c) Dynamische bei i = 10 %?",
          loesung: [
            "b) Kumuliert: −10, −120, −120, −30, +30, +30, +40. Statische Amortisationsdauer: 4 Jahre.",
            "c) Kapitalwert bis t: −10, −110, −110, −42,38, −1,40, −1,40, +4,24. Dynamische Amortisationsdauer: 6 Jahre.",
            "Die dynamische Dauer ist länger, weil späte Einzahlungen weniger wert sind."
          ] },
        { titel: "FHA #2, Rechenteil", q: "FHA #2 (offizielle Lösung)",
          text: "Zahlungsstrom (−10; 0; 0; 90; 60; −110; 10). a) Statische Amortisationsdauer? b) Dynamische bei 10 %?",
          loesung: [
            "a) Alle Auszahlungen: −10 − 110 = −120. Bis t = 4 kommen 90 + 60 = 150 rein, das deckt sie. Statisch: 4 Jahre.",
            "b) Barwert aller Auszahlungen: $-10 - 110/1{,}1^5 = -78{,}30$. Bis t = 3: $-78{,}30 + 90/1{,}1^3 = -10{,}68$. Bis t = 4: $+60/1{,}1^4 \\Rightarrow 30{,}30 > 0$. Dynamisch: 4 Jahre.",
            "Wichtig: Auch die spätere Auszahlung in t = 5 muss gedeckt sein (Skript S. 42)."
          ] },
        { titel: "Altklausur: Grenzen der Amortisationsrechnung", q: "Klausurensammlung, Klausur 5, Aufgabe 1a",
          text: "Warum eignet sich die statische Amortisationsrechnung nicht als alleiniges Vorteilhaftigkeitskriterium?",
          loesung: [
            "Sie ignoriert alle Zahlungen nach dem Amortisationszeitpunkt und die zeitliche Verteilung innerhalb der Amortisationsdauer (keine Diskontierung).",
            "Sie sagt nur etwas über das Risiko bis zur Amortisation, nicht über den Gewinn. Ein Projekt kann sich schnell amortisieren und trotzdem einen kleineren Kapitalwert haben (Skript S. 41)."
          ] }
      ],
      karten: [
        { f: "Welche vier statischen Verfahren gibt es?", a: "Gewinnvergleichs-, Kostenvergleichs-, Renditevergleichs- und Amortisationsrechnung. Statisch heißt: meist nur eine typische Periode, keine Abzinsung.", s: 36 },
        { f: "Wann ist die Gewinnvergleichsrechnung unproblematisch?", a: "Gleiche Nutzungsdauer, gleicher Kapitaleinsatz (falls Kapitalkosten nicht im Gewinn), konstante Periodengewinne. Sonst vergleicht man Ungleiches, z. B. 2 Mio. für 2 Jahre mit 1 Mio. für 10 Jahre.", s: 37 },
        { f: "Wann führt die Kostenvergleichsrechnung immer zu unproblematischen Empfehlungen?", a: "Bei identischer Nutzungsdauer, identischen Erträgen und konstanten Kosten bzw. Gewinnen pro Periode. Ohne gleiche Erträge wäre „gar nicht produzieren“ am billigsten.", q: "FHA #2, Theorie 1" },
        { f: "Rendite vs. Gewinn: der konzeptionelle Unterschied?", a: "Der Gewinn ist eine absolute Größe in Euro. Die Rendite setzt ihn ins Verhältnis zum eingesetzten Kapital, ist also relativ.", q: "FHA #2, Theorie 2" },
        { f: "Statische vs. dynamische Amortisationsdauer?", a: "Statisch: Zeitpunkt, ab dem alle Auszahlungen durch Einzahlungen gedeckt sind. Dynamisch: Zeitpunkt, ab dem der Kapitalwert erstmals ≥ 0 ist (mit Diskontierung).", q: "Tutorium 2, S. 16 und 18" },
        { f: "Schwächen der Amortisationsrechnung?", a: "Ignoriert Zahlungen nach der Amortisation und die Zeitstruktur davor. Eher zur Risikoabschätzung geeignet: Je schneller das Geld zurück ist, desto weniger hängt an unsicheren fernen Prognosen.", s: 41 },
        { f: "Was gilt für spätere Auszahlungen bei der Amortisationsrechnung?", a: "Sie müssen sich ebenfalls amortisieren. (−100; 80; 80; −70; 40; 20): 4 Perioden, nicht 2.", s: 42 },
        { f: "Wie ist der Kapitalwert definiert und was bedeutet er?", a: "$K = \\sum_{t=0}^{T} e_t (1+i)^{-t}$. Der Betrag, den man heute zusätzlich entnehmen kann, wenn alles samt Zinsen zurückfließt.", s: 45 },
        { f: "Barwert vs. Kapitalwert, Endwert vs. Vermögensendwert?", a: "Barwert: heutiger Wert einzelner (künftiger) Zahlungen. Kapitalwert: Barwert des ganzen Zahlungsstroms inkl. Anfangsauszahlung. Analog bezieht sich der Endwert auf den Kapitalwert, der Vermögensendwert auf das gesamte Endvermögen.", q: "FHA #2, Theorie 5" },
        { f: "Führen Endwert und Kapitalwert zur selben Entscheidung?", a: "Ja, $B_T = (1+i)^T K$. Der Endwert ist nur der mit einem positiven Faktor aufgezinste Kapitalwert, Vorzeichen und Reihenfolge bleiben gleich. Aber Endwerte nur bei gleichem T vergleichen.", s: 50 },
        { f: "Was ist Kapitalbindung, was Kapitalfreisetzung?", a: "Kapitalbindung: eingesetztes Kapital samt Zinsen, das noch nicht zurückgeflossen ist (= Kreditbestand bei Fremdfinanzierung). Kapitalfreisetzung: deren Verringerung, $e_t - c_t - i \\cdot KB_{t-1}$ (= Tilgung).", s: 48 }
      ],
      quiz: [
        { typ: "zahl", q: "Tutorium 2, Aufgabe 4", frage: "A = (−100; 50; 60; 80), i = 10 %. Kapitalwert?",
          loesung: 55.15, toleranz: 0.01, einheit: "", erklaerung: "Jede Zahlung durch $1{,}1^t$ teilen und addieren: $-100 + 45{,}45 + 49{,}59 + 60{,}11 = 55{,}15$." },
        { typ: "zahl", q: "Tutorium 2, Aufgabe 4", frage: "A = (−100; 50; 60; 80), i = 10 %. Endwert in t = 3?",
          loesung: 73.40, toleranz: 0.01, einheit: "", erklaerung: "Endwert = Kapitalwert auf t = 3 aufgezinst: $55{,}15 \\cdot 1{,}1^3 = 73{,}40$." },
        { typ: "zahl", q: "Tutorium 2, Aufgabe 4", frage: "B = (−100; 60; −20; 80), i = 10 %. Kapitalwert?",
          loesung: -1.88, toleranz: 0.01, einheit: "", erklaerung: "$-100 + 54{,}55 - 16{,}53 + 60{,}11 = -1{,}88$. B lohnt sich nicht." },
        { typ: "zahl", q: "Tutorium 2, Aufgabe 5a", frage: "Projekt (−400; 150; 140; 180), Kredit zu 5 %. Wie viel kannst du in t = 2 maximal entnehmen?",
          loesung: 27.93, toleranz: 0.01, einheit: "", erklaerung: "Der Kapitalwert ist die mögliche Entnahme heute. Verschiebt man sie auf t = 2, wird sie aufgezinst: $K = 25{,}33$, Entnahme $= 25{,}33 \\cdot 1{,}05^2 = 27{,}93$." },
        { typ: "zahl", q: "Tutorium 2, Aufgabe 6c", frage: "(−10; −110; 0; 90; 60; 0; 10), i = 10 %. Dynamische Amortisationsdauer in Jahren?",
          loesung: 6, toleranz: 0, einheit: "Jahre", erklaerung: "Kapitalwert bis t = 4 und 5: −1,40, erst bis t = 6: +4,24." },
        { typ: "zahl", q: "FHA #2, Aufgabe 1b", frage: "(−10; 0; 0; 90; 60; −110; 10), i = 10 %. Barwert aller Auszahlungen?",
          loesung: -78.30, toleranz: 0.01, einheit: "", erklaerung: "$-10 - 110/1{,}1^5 = -78{,}30$" },
        { typ: "zahl", s: 46, frage: "(−100; 50; 40; 30; 20; 10), i = 10 %. Kapitalwert?",
          loesung: 20.92, toleranz: 0.01, einheit: "", erklaerung: "$-100 + 45{,}45 + 33{,}06 + 22{,}54 + 13{,}66 + 6{,}21 = 20{,}92$ (Skriptbeispiel S. 46)." },
        { typ: "zahl", s: 40, frage: "(−100.000; 30.000; 50.000; 40.000; 20.000). Statische Amortisationsdauer in Perioden?",
          loesung: 3, toleranz: 0, einheit: "Perioden", erklaerung: "Kumuliert: −100, −70, −20, +20 (Tsd.)." },
        { typ: "mc", s: 37, frage: "Wann führt die Gewinnvergleichsrechnung nicht zu Problemen?",
          optionen: ["Wenn die Projekte unterschiedlich lange laufen", "Bei gleicher Nutzungsdauer, gleichem Kapitaleinsatz und konstanten Periodengewinnen", "Wenn der Kalkulationszins bekannt ist", "Immer, wenn alle Projekte Gewinne machen"],
          richtig: 1, erklaerung: "Sonst vergleicht man Projekte verschiedener Dauer oder Größe. Gegenbeispiele im Skript: 2 Mio. für 2 Jahre vs. 1 Mio. für 10 Jahre." },
        { typ: "mc", q: "Klausur 5, Aufgabe 1a", frage: "Warum taugt die statische Amortisationsrechnung nicht als alleiniges Kriterium?",
          optionen: ["Weil sie zu kompliziert ist", "Weil sie Zahlungen nach der Amortisation und die Zeitstruktur ignoriert", "Weil sie nur für Finanzinvestitionen gilt", "Weil sie den Kalkulationszins doppelt zählt"],
          richtig: 1, erklaerung: "Sie misst eher das Risiko bis zur Amortisation, nicht den Erfolg." }
      ],
      formeln: [
        { name: "Rendite (Return on Investment)", tex: "\\text{RoI} = \\dfrac{\\text{Gewinn (vor Zinsen)}}{\\text{eingesetztes Kapital}}", text: "Bei Rückflüssen während der Periode: durchschnittlich eingesetztes Kapital.", s: 39 },
        { name: "Kapitalwert", tex: "K = \\sum_{t=0}^{T} e_t\\,(1+i)^{-t}", text: "Lohnend, wenn K > 0.", s: 45, bsp: "(−100; 50; 60; 80), i = 10 %: K = 55,15" },
        { name: "Endwert", tex: "B_T = \\sum_{t=0}^{T} e_t\\,(1+i)^{T-t} = (1+i)^T \\cdot K", text: "Gleiche Entscheidung wie K bei gleichem T.", s: 49 },
        { name: "Finanzplan", tex: "Z_t = i \\cdot KB_{t-1}, \\quad \\text{Tilgung}_t = e_t - c_t - Z_t, \\quad KB_t = KB_{t-1} - \\text{Tilgung}_t", text: "cₜ: Entnahme. KB₀ = A₀ (+ Entnahme in t = 0). Am Ende KB_T = 0.", s: 47 },
        { name: "Dynamische Amortisationsdauer", tex: "\\min\\{\\tau : \\sum_{t=0}^{\\tau} e_t (1+i)^{-t} \\ge 0 \\text{ dauerhaft}\\}", text: "Erster Zeitpunkt, ab dem der Kapitalwert der bisherigen Zahlungen nicht mehr negativ wird.", q: "Tutorium 2, S. 18" }
      ]
    },
    // ==================================================================
    {
      id: "w3",
      titel: "Woche 3: Annuitätenrechnung",
      abschnitt: "Tutorium ab 16.11.2026",
      seiten: "Skript Kap. 6.1.2, S. 52 bis 56",
      lektionen: [
        {
          "titel": "Was ist eine Annuität?",
          "text": [
            "Eine Annuität ist eine Reihe gleich hoher Zahlungen in festen Abständen. Aus dem Alltag kennst du das als Kreditrate, als Handyvertrag mit fester Monatsgebühr oder als Rente.",
            "In der Investitionsrechnung bedeutet Annuität $g$: die größte gleich hohe Summe, die du aus einem Projekt in jeder Periode von $t = 1$ bis $T$ entnehmen kannst. Statt den ganzen Gewinn heute (Kapitalwert) oder am Ende (Endwert) zu nehmen, verteilst du ihn gleichmäßig.",
            "Dafür muss gelten: Barwert aller Entnahmen = Kapitalwert des Projekts. In Formeln: $\\sum_{t=1}^{T} g \\cdot (1+i)^{-t} = K$.",
            "Nachschüssig heißt: Die erste Zahlung kommt am Ende der ersten Periode, in $t = 1$ (wie bei den meisten Krediten). Vorschüssig heißt: Die erste Zahlung kommt sofort, in $t = 0$ (wie Miete, die man am Monatsanfang zahlt). Ohne Zusatz ist in der Vorlesung immer nachschüssig gemeint."
          ],
          "merke": "Die Annuität ist die konstante Zahlung pro Periode, deren Barwert genau dem Kapitalwert entspricht."
        },
        {
          "titel": "Der Rentenbarwertfaktor: viele gleiche Zahlungen auf einmal abzinsen",
          "text": [
            "Wie viel sind 100 € pro Jahr, drei Jahre lang, heute wert (10 %)? Man kann jede Zahlung einzeln abzinsen. Weil die Zahlung immer gleich ist, kann man die 100 aber ausklammern: $100 \\cdot (1{,}1^{-1} + 1{,}1^{-2} + 1{,}1^{-3})$. Die Klammer hängt nur von $i$ und $T$ ab.",
            "Diese Klammer heißt Rentenbarwertfaktor: $RBF(i; T) = \\dfrac{1-(1+i)^{-T}}{i}$. Er sagt, was 1 € pro Periode über $T$ Perioden heute wert ist.",
            "Warum diese Formel? Rechentrick aus dem Skript: Nenne die Summe $N = q^{-1} + q^{-2} + \\dots + q^{-T}$ mit $q = 1+i$. Dann ist $q \\cdot N = 1 + q^{-1} + \\dots + q^{-(T-1)}$. Zieht man beides ab, fällt fast alles weg: $(q-1) \\cdot N = 1 - q^{-T}$. Mit $q - 1 = i$ folgt die Formel.",
            "Intuition: $(1+i)^{-T}$ ist der Barwert von 1 € in $T$. Der Zähler $1 - (1+i)^{-T}$ ist also „1 € heute minus 1 € in $T$, auf heute bezogen“. Das sind genau die Zinsen, die 1 € in der Zwischenzeit verdienen könnte, verteilt auf je $i$ pro Jahr."
          ],
          "code": "einzeln: 100/1,1 + 100/1,21 + 100/1,331\n       = 90,91 + 82,64 + 75,13 = 248,69\nmit RBF: 1,1^(−3) = 0,751315\n       RBF = (1 − 0,751315) / 0,1 = 2,4869\n       100 · 2,4869 = 248,69",
          "ausgabe": "Barwert der drei Zahlungen: 248,69 €. Beide Wege liefern dasselbe.",
          "merke": "Barwert einer nachschüssigen Rente = Rate mal Rentenbarwertfaktor (1 − (1+i) hoch −T) / i."
        },
        {
          "titel": "Von der Rate zum Kapitalwert: gleiche Rückflüsse",
          "text": [
            "Hat ein Projekt nach der Anfangsauszahlung lauter gleiche Rückflüsse, ist der Kapitalwert schnell gerechnet: $K = -A_0 + e \\cdot RBF(i; T)$.",
            "Tutorium 3, Aufgabe 7: (−500; acht Mal 130) bei 10 %."
          ],
          "code": "1,1^(−8) = 0,466507\nRBF(10 %; 8) = (1 − 0,466507) / 0,1 = 5,3349\nK = −500 + 130 · 5,3349 = −500 + 693,54 = 193,54",
          "ausgabe": "K = 193,54 > 0, das Projekt lohnt sich.",
          "merke": "Gleiche Rückflüsse: Kapitalwert = −Anfangsauszahlung + Rate mal RBF."
        },
        {
          "titel": "Vom Kapitalwert zur Rate: der Annuitätenfaktor",
          "text": [
            "Jetzt umgekehrt: Man kennt den Barwert und sucht die gleich hohe Rate. Aus $g \\cdot RBF = K$ folgt $g = K / RBF = K \\cdot RWF$.",
            "$RWF = \\dfrac{i}{1-(1+i)^{-T}}$ ist der Kehrwert des RBF. Er heißt Rentenwiedergewinnungsfaktor oder Annuitätenfaktor. Genau so rechnet eine Bank die Rate eines Kredits aus: Kreditbetrag mal Annuitätenfaktor.",
            "Tutorium 3, Aufgabe 8: Lutz erbt 50.000 € und will 10 Jahre lang jährlich nachschüssig gleich viel bekommen, Zins 10 %.",
            "Skript-Beispiel: Das Projekt (−100; 50; 40; 30; 20; 10) hatte bei 10 % den Kapitalwert 20,92. Mit $RBF(10\\,\\%; 5) = 3{,}7908$ ergibt sich $g = 20{,}92 / 3{,}7908 = 20{,}92 \\cdot 0{,}2638 = 5{,}52$. Man kann also fünf Jahre lang je 5,52 entnehmen."
          ],
          "code": "1,1^(−10) = 0,385543\nRBF = (1 − 0,385543) / 0,1 = 6,144567\nRWF = 1 / 6,144567 = 0,1627454\ng = 50.000 · 0,1627454 = 8.137,27 €",
          "ausgabe": "Lutz bekommt 10 Jahre lang je 8.137,27 €.",
          "merke": "Annuität g = Kapitalwert mal Annuitätenfaktor; der Annuitätenfaktor ist 1 / RBF."
        },
        {
          "titel": "Annuität als Entscheidungsregel und ihre Grenze",
          "text": [
            "Weil $g = K \\cdot RWF$ und RWF positiv ist, gilt: $g > 0$ genau dann, wenn $K > 0$. Für die Frage „lohnt es sich?“ sind beide gleich gut.",
            "Beim Vergleich zweier Projekte gilt das nur bei gleicher Laufzeit. Läuft ein Projekt kürzer, wird sein Kapitalwert auf weniger Jahre verteilt, die Rate wirkt dadurch größer. Bei verschiedenen Laufzeiten entscheidet darum der Kapitalwert.",
            "Tutorium 3, Aufgabe 9 bei 4 %: A = (−500; 180; 120; 230; 90; 120) hat $K_A = 164{,}06$ über 5 Jahre, also $g_A = 164{,}06 / 4{,}4518 = 36{,}85$. C = (−500; 240; 220; 130; 120) hat $K_C = 152{,}32$ über 4 Jahre, also $g_C = 152{,}32 / 3{,}6299 = 41{,}96$."
          ],
          "code": "           K        T    RBF(4 %; T)    g\nA       164,06      5      4,4518     36,85\nC       152,32      4      3,6299     41,96",
          "ausgabe": "Annuität spricht für C, Kapitalwert für A. Richtig ist A, weil die Laufzeiten verschieden sind.",
          "merke": "Annuitäten nur bei gleicher Laufzeit vergleichen; sonst entscheidet der Kapitalwert."
        },
        {
          "titel": "Vorschüssige und ewige Renten",
          "text": [
            "Vorschüssig: Jede Zahlung kommt eine Periode früher als nachschüssig. Jede ist darum um den Faktor $(1+i)$ mehr wert: $B_0^{vor} = g \\cdot RBF \\cdot (1+i)$. Beispiel 3 × 100 € bei 10 %, vorschüssig: $100 + 100/1{,}1 + 100/1{,}21 = 273{,}55$, und $248{,}69 \\cdot 1{,}1 = 273{,}55$.",
            "Ewige Rente: Die Zahlung läuft unendlich lange. Dann wird $(1+i)^{-T}$ beliebig klein, und der RBF wird zu $1/i$. Barwert $B_0 = g / i$.",
            "Intuition: Legst du $g/i$ an, bekommst du jedes Jahr genau $i \\cdot g/i = g$ Zinsen, ohne das Kapital anzutasten. Beispiel: 1.000 € pro Jahr für immer bei 5 % sind heute $1000 / 0{,}05 = 20.000$ € wert.",
            "Umgekehrt ist die Annuität eines Kapitalwerts bei unendlicher Laufzeit $g = i \\cdot K$."
          ],
          "merke": "Vorschüssig: nachschüssigen Barwert mal (1+i); ewige Rente: Barwert = g / i."
        },
        {
          "titel": "Monatliche Zahlungen und Sparen auf einen Endbetrag",
          "text": [
            "Bei monatlichen Raten und Jahreszins $i$ nimmt man den konformen Monatszins aus Woche 1, $r = (1+i)^{1/12} - 1$, und zählt $T$ in Monaten. Alle Formeln bleiben gleich. Beispiel: ewige Monatsrente 500 € bei 3 % p. a. hat $r = 1{,}03^{1/12} - 1 = 0{,}2466\\,\\%$ und den Barwert $500 / r = 202.735{,}32$ € (mit ungerundetem $r$ rechnen).",
            "Oft will man nicht einen Barwert verteilen, sondern auf einen Endbetrag sparen. Gleiche Raten, nachschüssig eingezahlt, wachsen bis $T$ auf $g \\cdot \\dfrac{(1+i)^T - 1}{i}$. Die erste Rate wird $T-1$ Jahre verzinst, die letzte gar nicht.",
            "Umgestellt nach der Rate: $g = B_T \\cdot \\dfrac{i}{(1+i)^T - 1}$. Beispiel: Du willst in 5 Jahren 10.000 € haben, Zins 4 %."
          ],
          "code": "Probe klein: 3 × 100 € bei 5 %\n100 · 1,05^2 + 100 · 1,05 + 100 = 110,25 + 105 + 100 = 315,25\n(1,05^3 − 1) / 0,05 = 3,1525  ->  100 · 3,1525 = 315,25\n\nZiel 10.000 € in 5 Jahren, 4 %:\n(1,04^5 − 1) / 0,04 = 5,416323\ng = 10.000 / 5,416323 = 1.846,27 €",
          "ausgabe": "Sparrate: 1.846,27 € pro Jahr.",
          "merke": "Sparrate für einen Endbetrag: g = Endbetrag mal i / ((1+i) hoch T minus 1)."
        },
        {
          "titel": "Alles zusammen: die Altersvorsorge-Aufgabe",
          "text": [
            "Tutorium 3, Aufgabe 10: Frau Vorsicht (22) spart monatlich nachschüssig bei 4 % p. a. Ab 65 will sie 25 Jahre lang 1.000 € pro Monat nachschüssig bekommen. Wie hoch ist die Sparrate?",
            "Schritt 1: Monatszins bestimmen. Schritt 2: Die Rente auf den Rentenbeginn abzinsen. Das ist der Betrag, der mit 65 auf dem Konto liegen muss. Schritt 3: Diesen Betrag als Endbetrag ansparen, über $(65-22) \\cdot 12 = 516$ Monate."
          ],
          "code": "1) r = 1,04^(1/12) − 1 = 0,0032737 = 0,32737 %\n2) RBF(r; 300) = 190,8775\n   Barwert mit 65: 1.000 · 190,8775 = 190.877,48 €\n3) (1 + r)^516 = 5,40050\n   Endwertfaktor ((1+r)^516 − 1) / r = 1.344,18\n   g = 190.877,48 / 1.344,18 = 142,00 €",
          "ausgabe": "Frau Vorsicht muss 516 Monate lang 142,00 € pro Monat sparen.",
          "merke": "Rentenaufgaben: erst die Rente auf den Rentenbeginn abzinsen, dann diesen Betrag in Sparraten umrechnen."
        }
      ],
      quellen: [
        { name: "Vorlesung: Skript S. 52 bis 56", pfad: null },
        { name: "Tutorium 3: Mitschrift (Di 8–10)", pfad: "material/IuF/Tutorien/Tutorium 3 (Mitschrift Di 8-10).pdf" },
        { name: "Tutorium 3: Aufgabenblatt", pfad: "material/IuF/Tutorien-Aufgaben/Tutorium #3_Annuitaetenrechnung_Aufgaben.pdf" },
        { name: "FHA #3 mit Lösungen", pfad: "material/IuF/Freiwillige Hausaufgaben/FHA #3.pdf" },
        { name: "Klausurensammlung", pfad: "material/IuF/Altklausuren/Klausurensammlung.pdf" }
      ],
      zusammenfassung: [
        "Annuität g: maximale konstante Entnahme in jeder Periode bis T. Ihr Barwert entspricht dem Kapitalwert.",
        "Nachschüssig: erste Zahlung in t = 1. Vorschüssig: erste Zahlung in t = 0 (Barwert mal (1+i), weil jede Zahlung eine Periode früher kommt).",
        "Rentenbarwertfaktor $RBF = \\frac{1-(1+i)^{-T}}{i}$, Rentenwiedergewinnungsfaktor (Annuitätenfaktor) $RWF = 1/RBF$.",
        "$g = K \\cdot RWF$. Gleiche Laufzeit: g und K reihen gleich. Verschiedene Laufzeit: g kann täuschen, weil ein kürzeres Projekt seinen Kapitalwert auf weniger Jahre verteilt; dann den Kapitalwert nehmen.",
        "Ewige Rente: $K = g/i$ (wer g/i anlegt, bekommt jedes Jahr genau g Zinsen). Monatliche Renten: konformen Monatszins $r = (1+i)^{1/12}-1$ verwenden.",
        "Rentenaufgaben (Altersvorsorge): Rente auf den Rentenbeginn abzinsen, dann in Sparraten umrechnen."
      ],
      aufgaben: [
        { titel: "Tutorium 3, Aufgabe 7 und 8", q: "Tutorium 3",
          text: "7) Kapitalwert von (−500; 8 × 130) bei 10 %? 8) Lutz erbt 50.000 € und lässt sich 10 Jahre lang jährlich nachschüssig auszahlen, Zins 10 %. Wie viel pro Jahr?",
          loesung: [
            "7) $K = -500 + 130 \\cdot RBF(10\\,\\%; 8) = -500 + 130 \\cdot 5{,}3349 = 193{,}54$",
            "8) $g = 50000 \\cdot \\frac{0{,}1}{1-1{,}1^{-10}} = 50000 \\cdot 0{,}16275 = 8.137{,}27$ € pro Jahr"
          ] },
        { titel: "Tutorium 3, Aufgabe 9: Auswahl mit Annuität", q: "Tutorium 3",
          text: "Marktzins 4 %. A = (−500; 180; 120; 230; 90; 120), B = (−500; 150; 190; 80; 180; 100). a) Welches bei Ausschluss? b) Programm, wenn beide gehen? d) C = (−500; 240; 220; 130; 120): besser als A?",
          loesung: [
            "$K_A = 164{,}06$, $g_A = 36{,}85$. $K_B = 127{,}07$, $g_B = 28{,}54$. a) A, gleiche Laufzeit (T = 5).",
            "b) Beide haben g > 0, also beide durchführen. Gemeinsame Annuität $36{,}85 + 28{,}54 = 65{,}40$.",
            "d) $K_C = 152{,}32$ (T = 4), $g_C = 41{,}96$. Nach Annuität wäre C besser (41,96 > 36,85), nach Kapitalwert A (164,06 > 152,32).",
            "Bei verschiedenen Laufzeiten gilt der Kapitalwert, also A. Die Annuität verteilt K auf verschieden viele Jahre und ist dann nicht vergleichbar."
          ] },
        { titel: "Tutorium 3, Aufgabe 10: Altersvorsorge", q: "Tutorium 3",
          text: "Frau Vorsicht, 22 Jahre, spart monatlich nachschüssig zu 4 % p. a. Ab 65 will sie 25 Jahre lang 1.000 € pro Monat nachschüssig. Sparrate?",
          loesung: [
            "Monatszins: $r = 1{,}04^{1/12} - 1 = 0{,}32737\\,\\%$",
            "Barwert der Rente am 65. Geburtstag: $1000 \\cdot RBF(r; 300) = 190.877{,}48$ €",
            "Sparrate über 516 Monate (Endwert-Annuität): $g = 190877{,}48 \\cdot \\frac{r}{(1+r)^{516} - 1} = 142{,}00$ € pro Monat"
          ] },
        { titel: "FHA #3, Rechenteil", q: "FHA #3 (offizielle Lösung)",
          text: "1a) Monatlich 10.000 €, Zins 4 % p. a., Barwert 1 Mio.: wie lange? 1b) Ewige Monatsrente 500 € bei 3 %? 1c) Arno (25) will ab 60 für 25 Jahre 10.000 € jährlich, spart 8 Jahre monatlich vorschüssig, 5 %. 2) Firmenwagen: Miete 925 €/Monat vorschüssig oder Kauf 67.500 €, Restwert 39.375 € in t = 5, Kosten 1.350 €/Jahr, 6 %. 3) 200.000 € Erbe, 2 Jahre monatlich entnehmen, Jahr 2 um 20 % höher, 3 %.",
          loesung: [
            "1a) $r = 1{,}04^{1/12}-1$, $T = -\\ln(1-100r)/\\ln(1+r) = 121{,}33$, also 122 Monate.",
            "1b) $r = 1{,}03^{1/12}-1 = 0{,}2466\\,\\%$, Barwert $= 500/r = 202.735{,}32$ €.",
            "1c) Rente mit 60: $10000 \\cdot RBF(5\\,\\%; 25) = 140.939{,}45$, auf heute: $\\cdot 1{,}05^{-35} = 25.550{,}95$. Monatlich vorschüssig über 96 Monate: 320,82 €.",
            "2) $K_{Kauf} = -67500 - 1350 \\cdot RBF(6\\,\\%; 5) + 39375 \\cdot 1{,}06^{-5} = -43.763{,}40$. $K_{Miete} = -48.263{,}32$. Kauf ist günstiger.",
            "3) $g_1 = 7.822{,}02$ € pro Monat im ersten Jahr, $g_2 = 9.386{,}42$ € im zweiten."
          ] },
        { titel: "Altklausur: Rentenbarwertfaktor", q: "Klausurensammlung, Klausur 4, Aufgabe 3a",
          text: "Berechnen Sie den Rentenbarwertfaktor für eine nachschüssige, jährliche Rente mit 20 Jahren Laufzeit bei 5 % p. a.",
          loesung: [ "$RBF = \\frac{1 - 1{,}05^{-20}}{0{,}05} = 12{,}4622$" ] }
      ],
      karten: [
        { f: "Was ist die Annuität?", a: "Die maximale konstante Entnahme g in jeder Periode bis T. Ihr Barwert entspricht genau dem Kapitalwert.", s: 52 },
        { f: "Nachschüssige vs. vorschüssige Annuität?", a: "Nachschüssig: erste Zahlung in t = 1. Vorschüssig: erste Zahlung in t = 0. Der vorschüssige Barwert ist um den Faktor (1+i) höher.", q: "Tutorium 3, S. 8" },
        { f: "Wie hängen RBF und RWF zusammen?", a: "$RBF = \\frac{1-(1+i)^{-T}}{i}$, $RWF = \\frac{i}{1-(1+i)^{-T}} = 1/RBF$. Der RBF macht aus einer Rate den Barwert, der RWF aus dem Barwert die Rate.", q: "FHA #3, Theorie 4" },
        { f: "Kann K_A > K_B gelten, aber g_A < g_B?", a: "Ja, bei verschiedenen Laufzeiten: Das kürzere Projekt verteilt seinen Kapitalwert auf weniger Jahre, seine Rate wirkt dadurch größer. Bei gleicher Laufzeit reihen K und g gleich.", s: 54 },
        { f: "g_A ≥ g_B und T_A = T_B: eindeutige Aussage?", a: "Ja, dann ist A mindestens so gut wie B. Bei verschiedenen Laufzeiten ist nur eindeutig, wenn das Projekt mit höherer Annuität auch länger läuft.", q: "FHA #3, Theorie 5" },
        { f: "Annuität einer ewigen Rente?", a: "$g = i \\cdot K$, bzw. Barwert $K = g / i$. Wer K anlegt, bekommt jedes Jahr i · K Zinsen, ohne das Kapital anzutasten.", s: 54 },
        { f: "Wie rechnet man eine monatliche Rente bei Jahreszins i?", a: "Mit dem konformen Monatszins $r = (1+i)^{1/12} - 1$ und T in Monaten.", q: "FHA #3" },
        { f: "Was zeigen die drei Finanzpläne (K, B_T, g)?", a: "Ein Entnahmestrom mit festem Kapitalwert lässt sich beliebig auf die Zeitpunkte verteilen.", s: 56 }
      ],
      quiz: [
        { typ: "zahl", q: "Tutorium 3, Aufgabe 7", frage: "(−500; 130; 130; 130; 130; 130; 130; 130; 130), i = 10 %. Kapitalwert?",
          loesung: 193.54, toleranz: 0.01, einheit: "", erklaerung: "Gleiche Rückflüsse: Rate mal Rentenbarwertfaktor $RBF(10\\,\\%; 8) = 5{,}3349$, also $-500 + 130 \\cdot 5{,}3349 = 193{,}54$." },
        { typ: "zahl", q: "Tutorium 3, Aufgabe 8", frage: "50.000 € Erbe, 10 Jahre nachschüssig zu 10 %. Jährliche Auszahlung?",
          loesung: 8137.27, toleranz: 0.01, einheit: "€", erklaerung: "Barwert mal Annuitätenfaktor: $50000 \\cdot 0{,}1/(1-1{,}1^{-10}) = 8.137{,}27$." },
        { typ: "zahl", q: "Tutorium 3, Aufgabe 9a", frage: "A = (−500; 180; 120; 230; 90; 120), i = 4 %. Annuität?",
          loesung: 36.85, toleranz: 0.01, einheit: "", erklaerung: "$K_A = 164{,}06$, $g_A = 164{,}06 \\cdot 0{,}04/(1-1{,}04^{-5}) = 36{,}85$" },
        { typ: "mc", q: "Tutorium 3, Aufgabe 9d", frage: "K_A = 164,06 (T = 5, g_A = 36,85), K_C = 152,32 (T = 4, g_C = 41,96). Was ist richtig?",
          optionen: ["C, weil die Annuität höher ist", "A, weil bei verschiedenen Laufzeiten der Kapitalwert entscheidet", "Beide gleich gut", "Keines lohnt sich"],
          richtig: 1, erklaerung: "Die Annuität verteilt K auf verschieden viele Jahre. Bei T_A ≠ T_C ist der Kapitalwert maßgeblich." },
        { typ: "zahl", q: "Tutorium 3, Aufgabe 10", frage: "Frau Vorsicht: 516 Monate sparen, dann 300 Monate 1.000 € Rente, 4 % p. a. Monatliche Sparrate?",
          loesung: 142.00, toleranz: 0.02, einheit: "€", erklaerung: "Barwert Rente mit 65: 190.877,48 €. Sparrate $= 190877{,}48 \\cdot r/((1+r)^{516}-1) = 142{,}00$." },
        { typ: "zahl", q: "FHA #3, Aufgabe 1b", frage: "Ewige nachschüssige Monatsrente 500 €, Marktzins 3 % p. a. Barwert?",
          loesung: 202735.32, toleranz: 0.02, einheit: "€", erklaerung: "$r = 1{,}03^{1/12}-1$, Barwert $= 500/r = 202.735{,}32$" },
        { typ: "zahl", q: "FHA #3, Aufgabe 1a", frage: "Monatlich 10.000 € nachschüssig, 4 % p. a., Barwert 1 Mio. €. Wie viele volle Monate?",
          loesung: 122, toleranz: 0, einheit: "Monate", erklaerung: "Rechnerisch 121,33 Monate, also 122." },
        { typ: "mc", q: "FHA #3, Aufgabe 2", frage: "Firmenwagen: K(Kauf) = −43.763,40 €, K(Miete) = −48.263,32 €. Was ist besser?",
          optionen: ["Miete, weil keine Anfangsauszahlung", "Kauf, weil der Kapitalwert weniger negativ ist", "Gleich gut", "Nicht entscheidbar"],
          richtig: 1, erklaerung: "Beide sind Kosten. Der Kauf belastet das Vermögen heute um 4.499,92 € weniger." },
        { typ: "zahl", q: "Klausur 4, Aufgabe 3a", frage: "Rentenbarwertfaktor, nachschüssig, 20 Jahre, 5 % (vier Nachkommastellen)?",
          loesung: 12.4622, toleranz: 0.0002, einheit: "", erklaerung: "$(1-1{,}05^{-20})/0{,}05 = 12{,}4622$" },
        { typ: "zahl", s: 54, frage: "(−100; 50; 40; 30; 20; 10), i = 10 %, K = 20,92. Annuität?",
          loesung: 5.52, toleranz: 0.01, einheit: "", erklaerung: "Annuitätenfaktor $0{,}1/(1-1{,}1^{-5}) = 0{,}2638$, also $g = 20{,}92 \\cdot 0{,}2638 = 5{,}52$." }
      ],
      formeln: [
        { name: "Annuität", tex: "g = K \\cdot \\dfrac{i}{1-(1+i)^{-T}} = K \\cdot RWF", text: "Nachschüssig. Bei gleicher Laufzeit gleiche Reihung wie K.", s: 53, bsp: "50.000 €, 10 %, 10 J.: 8.137,27 €" },
        { name: "Rentenbarwertfaktor", tex: "RBF = \\dfrac{1-(1+i)^{-T}}{i} = \\dfrac{1}{RWF}", text: "Barwert einer nachschüssigen Rente von 1 über T Perioden.", s: 53, bsp: "20 J., 5 %: 12,4622" },
        { name: "Vorschüssige Rente", tex: "B_0^{vor} = g \\cdot RBF \\cdot (1+i)", text: "Erste Zahlung in t = 0.", q: "Tutorium 3, S. 8" },
        { name: "Ewige Rente", tex: "B_0 = \\dfrac{g}{i} \\qquad g = i \\cdot K", text: "Grenzfall T → ∞.", s: 54, bsp: "500 €/Monat, 3 % p. a.: 202.735,32 €" },
        { name: "Sparrate für Endbetrag", tex: "g = B_T \\cdot \\dfrac{i}{(1+i)^T - 1}", text: "Nachschüssige Rate, die in T Perioden auf B_T anwächst.", q: "Tutorium 3, Aufgabe 10" }
      ]
    },
    // ==================================================================
    {
      id: "w4",
      titel: "Woche 4: Interner Zinssatz",
      abschnitt: "Vorlesung schon da, Tutorium 4 ab 23.11.2026",
      seiten: "Skript Kap. 6.1.3, S. 56 bis 82",
      lektionen: [
        {
          "titel": "Die Kapitalwertkurve: Was passiert, wenn der Zins steigt?",
          "text": [
            "Bisher war der Kalkulationszins $i$ fest. Jetzt rechnen wir den Kapitalwert desselben Projekts für viele verschiedene Zinssätze aus. Das Ergebnis ist eine Kurve $K(i)$.",
            "Je höher der Zins, desto stärker werden die späteren Rückflüsse abgezinst, die Anfangsauszahlung in $t = 0$ aber gar nicht. Darum fällt der Kapitalwert mit steigendem Zins. Irgendwo schneidet die Kurve die Null.",
            "Skript-Beispiel (−100; 50; 40; 30; 20; 10). Bei $i = 0$ wird nichts abgezinst, $K$ ist einfach die Summe aller Zahlungen."
          ],
          "code": "i       0 %    5 %    10 %   15 %   20 %   25 %    30 %\nK(i)  50,00  34,10  20,92   9,86   0,47  −7,57  −14,52",
          "ausgabe": "Zwischen 20 % und 25 % wechselt K das Vorzeichen. Dort liegt der interne Zins.",
          "merke": "Bei einem typischen Projekt fällt der Kapitalwert, wenn der Zins steigt."
        },
        {
          "titel": "Der interne Zins: die Rendite des Projekts",
          "text": [
            "Der interne Zinssatz $i^*$ ist der Zins, bei dem der Kapitalwert genau null ist: $\\sum_{t=0}^{T} e_t (1+i^*)^{-t} = 0$.",
            "Deutung: Das Projekt verkraftet einen Kreditzins bis $i^*$. Finanzierst du es mit einem Kredit zu genau $i^*$, zahlt es den Kredit samt Zinsen gerade zurück, und es bleibt nichts übrig. $i^*$ ist damit die Rendite auf das im Projekt gebundene Kapital. Im Alltag kennst du das als Effektivzins eines Kredits oder als Rendite eines Sparplans.",
            "Entscheidungsregel: Das Projekt lohnt sich, wenn der Kalkulationszins kleiner ist als der interne Zins, also $i < i^*$. Dann bringt es mehr, als das Geld am Kapitalmarkt bringen würde.",
            "Einfachster Fall, eine Periode: (−100; 110). Aus $-100 + 110/(1+i^*) = 0$ folgt $1 + i^* = 110/100$, also $i^* = 10\\,\\%$. Allgemein bei einer Periode: $i^* = e_1 / A_0 - 1$."
          ],
          "merke": "Interner Zins i*: der Zins, bei dem K = 0 ist; lohnend, wenn der Kalkulationszins i kleiner als i* ist."
        },
        {
          "titel": "Zwei Perioden: interner Zins mit der p-q-Formel",
          "text": [
            "Um die Gleichung $K = 0$ lesbarer zu machen, ersetzt man $1+i$ durch $q$. Für zwei Perioden: $e_0 + e_1/q + e_2/q^2 = 0$. Multipliziert man mit $q^2$, entsteht eine quadratische Gleichung: $e_0 q^2 + e_1 q + e_2 = 0$.",
            "Teilt man durch $e_0$, hat sie die Form $q^2 + p q + r = 0$, und die p-q-Formel aus der Schule liefert $q = -\\tfrac{p}{2} \\pm \\sqrt{(\\tfrac{p}{2})^2 - r}$. Danach $i^* = q - 1$. Ein negatives $q$ ist ökonomisch sinnlos und wird verworfen.",
            "Klausur 11, Aufgabe 3b: B = (−120; −48; 198)."
          ],
          "code": "−120 q^2 − 48 q + 198 = 0      | : (−120)\nq^2 + 0,4 q − 1,65 = 0         p = 0,4, r = −1,65\nq = −0,2 ± Wurzel(0,04 + 1,65) = −0,2 ± 1,3\nq1 = 1,1    q2 = −1,5 (sinnlos)\ni* = 1,1 − 1 = 10 %",
          "ausgabe": "Interner Zins von B: 10 %.",
          "merke": "Bei zwei Perioden q = 1 + i einsetzen, mit q² malnehmen und die p-q-Formel anwenden."
        },
        {
          "titel": "Mehr Perioden: das Newton-Verfahren",
          "text": [
            "Ab drei Perioden gibt es keine bequeme Formel mehr. Man nähert sich der Nullstelle schrittweise. Das Newton-Verfahren legt an der aktuellen Stelle eine Tangente an die Kapitalwertkurve und nimmt deren Nullstelle als nächsten Versuch.",
            "Formel: $q_{n+1} = q_n - \\dfrac{K(q_n)}{K'(q_n)}$. $K(q_n)$ ist der Kapitalwert beim aktuellen Versuch, $K'(q_n)$ die Steigung der Kurve dort (Ableitung). Ist $K$ positiv und die Kurve fällt ($K' < 0$), wird $q$ größer, also geht es nach rechts zur Nullstelle hin.",
            "Ableitung: Jeder Summand ist $e_t \\cdot q^{-t}$. Nach der Potenzregel wird daraus $-t \\cdot e_t \\cdot q^{-t-1}$. Also $K'(q) = \\sum_{t=1}^{T} -t\\, e_t\\, q^{-t-1}$. Der Summand für $t = 0$ fällt weg, weil er nicht von $q$ abhängt.",
            "Skript-Beispiel (−100; 50; 40; 30; 20; 10), Start bei 15 %, also $q_0 = 1{,}15$: $K(q) = -100 + 50q^{-1} + 40q^{-2} + 30q^{-3} + 20q^{-4} + 10q^{-5}$ und $K'(q) = -50q^{-2} - 80q^{-3} - 90q^{-4} - 80q^{-5} - 50q^{-6}$."
          ],
          "code": "Schritt 1: K(1,15) = 9,86    K'(1,15) = −203,26\n           q1 = 1,15 − 9,86 / (−203,26) = 1,15 + 0,0485 = 1,1985\nSchritt 2: K(1,1985) = 0,73  K'(1,1985) = −174,13\n           q2 = 1,1985 + 0,73 / 174,13 = 1,2027\nProbe:     K(1,2027) = 0,003  (fast null)",
          "ausgabe": "Interner Zins etwa 20,27 %. (Das Skript gibt K(1,15) gerundet mit 9,85 an.)",
          "merke": "Newton-Schritt: neues q = altes q minus Kapitalwert geteilt durch Ableitung; wiederholen, bis K fast null ist."
        },
        {
          "titel": "Normalinvestition: wann es genau einen internen Zins gibt",
          "text": [
            "Eine Normalinvestition hat erst nur Auszahlungsüberschüsse und danach nur Einzahlungsüberschüsse. Das Vorzeichen im Zahlungsstrom wechselt genau einmal von minus zu plus. Beispiel: (−50; −30; 40; 60; 20).",
            "Für Normalinvestitionen gilt: Es gibt genau einen internen Zins (im sinnvollen Bereich $q \\ge 0$). Dann ist die Regel $i < i^*$ gleichbedeutend mit $K > 0$.",
            "Keine Normalinvestition ist zum Beispiel (−100; 60; −20; 100): minus, plus, minus, plus ergibt drei Vorzeichenwechsel. Dann kann es mehrere oder gar keine internen Zinsen geben, siehe nächste Lektion."
          ],
          "merke": "Normalinvestition: genau ein Vorzeichenwechsel von minus zu plus, dann gibt es genau einen internen Zins."
        },
        {
          "titel": "Wenn es schiefgeht: mehrere oder gar keine Lösung",
          "text": [
            "Mehrere Lösungen: (−100; 235; −138) hat zwei Vorzeichenwechsel. Mit $q$: $-100q^2 + 235q - 138 = 0$, also $q^2 - 2{,}35q + 1{,}38 = 0$ und $q = 1{,}175 \\pm \\sqrt{1{,}175^2 - 1{,}38} = 1{,}175 \\pm 0{,}025$. Beide Zinsen 15 % und 20 % machen $K = 0$. Welcher ist „die Rendite“? Keiner eindeutig. Die Kurve ist hier wie ein Hügel: $K(0) = -3$, $K(17{,}5\\,\\%) = +0{,}045$, $K(25\\,\\%) = -0{,}32$.",
            "Keine Lösung: (−200; 10; −100) führt auf $q^2 - \\tfrac{1}{20}q + \\tfrac{1}{2} = 0$. Unter der Wurzel steht $(\\tfrac{1}{40})^2 - \\tfrac12 < 0$, es gibt keine reelle Lösung. Der Kapitalwert ist bei jedem Zins negativ, das Projekt lohnt sich nie."
          ],
          "merke": "Bei mehreren Vorzeichenwechseln kann es mehrere oder keinen internen Zins geben; dann taugt i* als Kriterium nicht."
        },
        {
          "titel": "Kapitalbindung und Wiederanlageprämisse",
          "text": [
            "Ein Finanzplan zum Zins $i^*$ zeigt, was der interne Zins eigentlich unterstellt. Man verzinst das gebundene Kapital mit $i^*$ und zieht die Rückflüsse ab, wie in Woche 2.",
            "Bei (−100; 50; 40; 30; 20; 10) mit $i^* = 20{,}27\\,\\%$ bleibt die Kapitalbindung immer positiv: 100, 70,27, 44,52, 23,54, 8,31, 0. Das Projekt schuldet dir stets Geld, und $i^*$ ist sauber die Verzinsung dieses gebundenen Kapitals.",
            "Bei (−100; 235; −138) mit $i^* = 20\\,\\%$: $KB_1 = 100 + 20 - 235 = -115$. Die Kapitalbindung ist negativ, du hast also ein Guthaben. Damit die Rechnung aufgeht, muss dieses Guthaben auch 20 % Zinsen bringen ($-115 \\cdot 1{,}2 = -138$). Diese Annahme heißt Wiederanlageprämisse: Guthaben lassen sich zum internen Zins anlegen. Das ist meist unrealistisch.",
            "Folgerung: Der interne Zins ist nur sinnvoll, wenn die Kapitalbindung immer positiv ist. Bei Normalinvestitionen ist das immer so, aber es kann auch bei anderen Projekten klappen (Klausur 2: (−100; 60; −20; 100) mit $i^* = 16{,}51\\,\\%$ hat die Kapitalbindung 100, 56,51, 85,83, 0)."
          ],
          "code": "(−100; 235; −138), Finanzplan mit 20 %:\nt=1: KB = 100 · 1,2 − 235 = −115   (Guthaben!)\nt=2: KB = −115 · 1,2 + 138 = 0      (Guthaben bringt 20 % Zinsen)",
          "merke": "Der interne Zins ist nur sinnvoll, wenn die Kapitalbindung stets positiv ist; sonst steckt die Wiederanlageprämisse dahinter."
        },
        {
          "titel": "Auswahl zwischen Projekten: höherer interner Zins heißt nicht besser",
          "text": [
            "Naheliegend wäre: Das Projekt mit dem höheren $i^*$ ist besser. Das stimmt nur, wenn seine Kapitalwertkurve überall über der anderen liegt. Kreuzen sich die Kurven, kann es falsch sein.",
            "Skript-Beispiel: A = (−150; 90; 82,5) mit $i_A^* = 10\\,\\%$ und B = (−80; 49,6; 44,8) mit $i_B^* = 12\\,\\%$. Bei $i = 6\\,\\%$ ist trotzdem $K_A = 8{,}33 > K_B = 6{,}66$. A bindet mehr Kapital und verdient darauf weniger Prozent, aber mehr Euro.",
            "Lösung über die Differenzinvestition: Man bildet A − B, also die Mehrzahlungen der großen Investition: (−150 + 80; 90 − 49,6; 82,5 − 44,8) = (−70; 40,4; 37,7). Sie beschreibt den Schritt von B zu A. Ist sie eine Normalinvestition mit $i^*_{A-B} > i$, lohnt dieser Schritt, und A ist besser.",
            "Hier: $-70q^2 + 40{,}4q + 37{,}7 = 0$ ergibt $q = 1{,}077$, also $i^*_{A-B} = 7{,}7\\,\\%$. Das ist genau der Zins, bei dem sich die Kurven schneiden. Bei 6 % ist $7{,}7\\,\\% > 6\\,\\%$, also A."
          ],
          "code": "                 t=0     t=1    t=2    i*     K bei 6 %\nA               −150     90     82,5   10 %     8,33\nB                −80     49,6   44,8   12 %     6,66\nA − B            −70     40,4   37,7   7,7 %    1,67",
          "ausgabe": "Bei 6 % ist A besser, obwohl B den höheren internen Zins hat.",
          "merke": "Zwischen Projekten nicht nach i* auswählen, sondern über die Differenzinvestition oder gleich über den Kapitalwert."
        }
      ],
      quellen: [
        { name: "Vorlesung: Skript S. 56 bis 82", pfad: null },
        { name: "Tutorium 4: Aufgabenblatt (Mitschrift folgt)", pfad: "material/IuF/Tutorien-Aufgaben/Tutorium #4_Interner Zins_Aufgaben.pdf" },
        { name: "FHA #4 mit Lösungen", pfad: "material/IuF/Freiwillige Hausaufgaben/FHA #4.pdf" },
        { name: "Klausurensammlung", pfad: "material/IuF/Altklausuren/Klausurensammlung.pdf" }
      ],
      zusammenfassung: [
        "Interner Zins i*: der Zins, bei dem K = 0 ist, also die Rendite des Projekts. Lohnend, wenn i < i*, denn dann verdient es mehr als den Kalkulationszins.",
        "Nullstelle eines Polynoms T-ten Grades. Für T = 2 mit der p-q-Formel, sonst numerisch mit Newton: $q_{n+1} = q_n - K(q_n)/K'(q_n)$.",
        "Normalinvestition: genau ein Vorzeichenwechsel (erst Aus-, dann Einzahlungen). Sie hat genau einen internen Zins.",
        "Sonst: mehrere oder keine Lösung möglich. Sinnvoll nur, wenn die Kapitalbindung stets positiv ist, sonst greift die Wiederanlageprämisse (Guthaben würden unterstellt zum internen Zins angelegt).",
        "Auswahl: höherer i* heißt nicht höherer K. Über die Differenzinvestition entscheiden: Ist $i^*_{A-B} > i$, lohnt die große Investition A."
      ],
      aufgaben: [
        { titel: "Altklausur: Newton-Verfahren", q: "Klausurensammlung, Klausur 2, Aufgabe 3a (Musterlösung: 16,51 %)",
          text: "Bestimmen Sie den internen Zins von (−100; 60; −20; 100) mit zwei Newton-Schritten ab 15 %.",
          loesung: [
            "$K(q) = -100 + 60 q^{-1} - 20 q^{-2} + 100 q^{-3}$, $K'(q) = -60 q^{-2} + 40 q^{-3} - 300 q^{-4}$",
            "$q_1 = 1{,}1647$, $q_2 = 1{,}16506$. Also $i^* \\approx 16{,}51\\,\\%$.",
            "Keine Normalinvestition (drei Vorzeichenwechsel: −, +, −, +), aber die Kapitalbindung bleibt positiv, daher ist i* ökonomisch sinnvoll."
          ] },
        { titel: "Altklausur: Normalinvestition und p-q-Formel", q: "Klausurensammlung, Klausur 11, Aufgabe 3 a–b",
          text: "A = (−100; 67; 55,2) mit $i_A^* = 15\\,\\%$, B = (−120; −48; 198). a) Normalinvestitionen? b) Interner Zins von B?",
          loesung: [
            "a) Beide ja: Auf Auszahlungen folgen nur Einzahlungen.",
            "b) $-120q^2 - 48q + 198 = 0 \\Leftrightarrow q^2 + 0{,}4q - 1{,}65 = 0 \\Rightarrow q = -0{,}2 \\pm \\sqrt{0{,}04 + 1{,}65}$",
            "$q_1 = 1{,}1 \\Rightarrow i^* = 10\\,\\%$. $q_2 = -1{,}5$ ist ökonomisch unsinnig."
          ] },
        { titel: "Altklausur: Newton bei Nicht-Normalinvestition", q: "Klausurensammlung, Klausur 6, Aufgabe 3 a–b",
          text: "I = (−400; 0; 1000; 1060; −1775). a) Normalinvestition? b) Zwei Newton-Schritte ab 10 %.",
          loesung: [
            "a) Nein, zwei Vorzeichenwechsel (−, +, −).",
            "b) $K(1{,}1) = 10{,}49$, $K'(1{,}1) = 733{,}93 \\Rightarrow q_1 = 1{,}0857$. $K(q_1) = -0{,}86 \\Rightarrow q_2 = 1{,}0867$, also $i^* \\approx 8{,}67\\,\\%$."
          ] },
        { titel: "Altklausur: Differenzinvestition", q: "Klausurensammlung, Klausur 10, Aufgabe 1e",
          text: "Normalinvestitionen mit $i_A^* = 17\\,\\%$, $i_B^* = 18\\,\\%$. Die Differenzinvestition A − B ist normal mit 15 %. Welche ist bei 14 % besser?",
          loesung: [
            "Der Wechsel von B zu A lohnt, wenn $i^*_{A-B} > i$. Hier 15 % > 14 %, also ist A besser, obwohl $i_A^* < i_B^*$.",
            "Im Diagramm schneiden sich die Kapitalwertkurven bei î = 15 %. Links davon liegt K_A über K_B."
          ] }
      ],
      karten: [
        { f: "Wie ist der interne Zinssatz definiert?", a: "Der Zins i*, bei dem K(i*) = 0. Er ist die Rendite auf das gebundene Kapital. Kriterium: lohnend, wenn i < i*.", s: 56 },
        { f: "Welche Probleme hat der interne Zinssatz?", a: "Polynom T-ten Grades (geschlossen nur bis T = 4). Mehrere, keine reelle oder keine positive Lösung möglich.", s: 57 },
        { f: "Was ist eine Normalinvestition?", a: "Erst nur Aus-, dann nur Einzahlungsüberschüsse, genau ein Vorzeichenwechsel. Genau ein interner Zins für q ≥ 0.", s: 66 },
        { f: "Wie lautet ein Newton-Schritt?", a: "$q_1 = q_0 - \\frac{K(q_0)}{K'(q_0)}$ mit q = 1 + i. Man folgt der Tangente bis zur Nullstelle und wiederholt das, bis K fast 0 ist.", s: 61 },
        { f: "Was ist die Wiederanlageprämisse?", a: "Bei negativer Kapitalbindung wird unterstellt, dass Guthaben zu i* angelegt werden kann. Das ist meist unrealistisch, darum sagt i* dann wenig aus.", s: 74 },
        { f: "Wann ist der interne Zins ökonomisch sinnvoll?", a: "Wenn die Kapitalbindung stets positiv ist. Bei Normalinvestitionen immer, aber auch bei anderen möglich (Klausur 2, Aufgabe 3b).", s: 76 },
        { f: "Ist das Projekt mit höherem i* immer besser?", a: "Nein. Nur wenn K_A(i) > K_B(i) für alle i. Ein kleines Projekt kann prozentual mehr, aber in Euro weniger verdienen. Sonst über die Differenzinvestition entscheiden.", s: 77 },
        { f: "Wie entscheidet man mit der Differenzinvestition?", a: "e_A − e_B bilden. Ist sie normal und $i^*_{A-B} > i$, lohnt die große Investition A.", s: 81 }
      ],
      quiz: [
        { typ: "zahl", s: 65, frage: "(−100; 50; 40; 30; 20; 10). Interner Zins (in %, zwei Nachkommastellen)?",
          loesung: 20.27, toleranz: 0.02, einheit: "%", erklaerung: "Newton ab 15 %: 1,1985, dann 1,2027. Bei q = 1,2027 ist K fast 0, also $i^* \\approx 20{,}27\\,\\%$." },
        { typ: "zahl", q: "Klausur 2, Aufgabe 3a", frage: "(−100; 60; −20; 100). Interner Zins (in %, zwei Nachkommastellen)?",
          loesung: 16.51, toleranz: 0.02, einheit: "%", erklaerung: "Newton ab 15 %: $q_1 = 1{,}1647$, $q_2 = 1{,}1651$." },
        { typ: "zahl", q: "Klausur 11, Aufgabe 3b", frage: "B = (−120; −48; 198). Interner Zins in %?",
          loesung: 10, toleranz: 0.01, einheit: "%", erklaerung: "Mit $q^2$ malnehmen und durch −120 teilen: $q^2 + 0{,}4q - 1{,}65 = 0 \\Rightarrow q = 1{,}1$, also $i^* = 10\\,\\%$ (die zweite Lösung −1,5 ist sinnlos)." },
        { typ: "zahl", q: "Klausur 6, Aufgabe 3b", frage: "(−400; 0; 1000; 1060; −1775), ein Newton-Schritt ab q₀ = 1,1 mit K = 10,49 und K' = 733,93. q₁ (vier Nachkommastellen)?",
          loesung: 1.0857, toleranz: 0.0002, einheit: "", erklaerung: "$1{,}1 - 10{,}49/733{,}93 = 1{,}0857$" },
        { typ: "mc", s: 72, frage: "Wie viele interne Zinssätze hat (−100; 235; −138)?",
          optionen: ["Keinen", "Genau einen", "Zwei: 15 % und 20 %", "Unendlich viele"],
          richtig: 2, erklaerung: "Zwei Vorzeichenwechsel. $q = 1{,}175 \\pm 0{,}025$." },
        { typ: "mc", s: 66, frage: "Welche Zahlungsreihe ist eine Normalinvestition?",
          optionen: ["(−100; 235; −138)", "(−50; −30; 40; 60; 20)", "(200; −10; 100)", "(−400; 0; 1000; 1060; −1775)"],
          richtig: 1, erklaerung: "Nur hier wechselt das Vorzeichen genau einmal von minus zu plus." },
        { typ: "mc", q: "Klausur 10, Aufgabe 1e", frage: "i*_A = 17 %, i*_B = 18 %, i*_(A−B) = 15 % (normal), Marktzins 14 %. Welche ist besser?",
          optionen: ["B, weil der interne Zins höher ist", "A, weil i*_(A−B) = 15 % > 14 %", "Beide gleich", "Keine lohnt sich"],
          richtig: 1, erklaerung: "Der Übergang zur großen Investition A lohnt, solange der Marktzins unter 15 % liegt." },
        { typ: "zahl", s: 81, frage: "e_A = (−150; 90; 82,5), e_B = (−80; 49,6; 44,8). Interner Zins von A − B (in %, eine Nachkommastelle)?",
          loesung: 7.7, toleranz: 0.06, einheit: "%", erklaerung: "e_(A−B) = (−70; 40,4; 37,7), i* = 7,7 %." },
        { typ: "mc", s: 74, frage: "Was unterstellt der interne Zins bei negativer Kapitalbindung?",
          optionen: ["Anlage zum Kalkulationszins", "Anlage zu i* (Wiederanlageprämisse)", "Keine Zinsen", "Projektabbruch"],
          richtig: 1, erklaerung: "Bei (−100; 235; −138) mit 20 % entsteht in t = 1 ein Guthaben von 115. Damit K = 0 aufgeht, muss es ebenfalls 20 % bringen (Skript S. 74)." }
      ],
      formeln: [
        { name: "Interner Zinssatz", tex: "\\sum_{t=0}^{T} e_t\\,(1+i^*)^{-t} = 0", text: "Lohnend, wenn i < i*.", s: 57 },
        { name: "Newton-Verfahren", tex: "q_{n+1} = q_n - \\dfrac{K(q_n)}{K'(q_n)}, \\qquad K'(q) = \\sum_{t=1}^{T} -t\\,e_t\\,q^{-t-1}", text: "q = 1 + i. Wiederholen, bis K ≈ 0.", s: 61 },
        { name: "p-q-Formel (T = 2)", tex: "q^2 + p q + r = 0 \\;\\Rightarrow\\; q = -\\tfrac{p}{2} \\pm \\sqrt{\\left(\\tfrac{p}{2}\\right)^2 - r}", text: "Nach Multiplikation von K = 0 mit q² und Division durch e₀.", q: "Klausur 11, Aufgabe 3b" }
      ]
    },
    // ==================================================================
    {
      id: "w5",
      titel: "Woche 5: Kapitalwertrate",
      abschnitt: "Vorlesung schon da, Tutorium 5 ab 30.11.2026",
      seiten: "Skript Kap. 6.1.4, S. 83 bis 89",
      lektionen: [
        {
          "titel": "Das Problem: Das Budget ist begrenzt",
          "text": [
            "Bisher galt: Jedes Projekt mit $K > 0$ wird gemacht, Geld kann man sich am Kapitalmarkt unbegrenzt leihen. In der Praxis hat eine Firma oft ein festes Budget. Dann verdrängen sich Projekte gegenseitig: Was in Projekt A steckt, fehlt für Projekt B.",
            "Alltagsvergleich: Du hast 100 € für Geschenke. Ein Geschenk für 100 € macht 30 Punkte Freude, zwei Geschenke für je 50 € machen zusammen 40 Punkte. Das einzelne teure Geschenk ist das „größte“, die beiden kleinen zusammen sind trotzdem besser. Entscheidend ist, wie viel Freude pro Euro herauskommt.",
            "Der Kapitalwert allein reicht dafür nicht. Er berücksichtigt das eingesetzte Kapital nur über die Zinskosten, nicht darüber, dass es knapp ist."
          ],
          "merke": "Bei festem Budget zählt nicht der größte Kapitalwert eines Projekts, sondern der größte Kapitalwert aller gewählten Projekte zusammen."
        },
        {
          "titel": "Die Kapitalwertrate: Kapitalwert pro eingesetztem Euro",
          "text": [
            "Die Kapitalwertrate ist $\\text{KWR} = \\dfrac{K}{A_0}$. $K$ ist der Kapitalwert, $A_0$ die Anfangsauszahlung (als positive Zahl). Sie sagt, wie viel heutigen Vermögenszuwachs jeder eingesetzte Euro bringt.",
            "Annahme: Das Projekt hat nur in $t = 0$ eine Auszahlung, danach nur Einzahlungen. Sonst wäre $A_0$ nicht das ganze eingesetzte Kapital.",
            "Skript-Beispiel, $i = 10\\,\\%$, Beträge in Mio. €: C = (−4; 1; 5)."
          ],
          "code": "K_C = −4 + 1/1,1 + 5/1,21 = −4 + 0,909 + 4,132 = 1,041\nKWR_C = 1,041 / 4 = 0,26 = 26 %",
          "ausgabe": "Jeder in C eingesetzte Euro bringt 26 Cent Kapitalwert.",
          "merke": "KWR = Kapitalwert geteilt durch Anfangsauszahlung."
        },
        {
          "titel": "Budget nach Kapitalwertrate verteilen",
          "text": [
            "Vorgehen: Alle Projekte mit $K > 0$ nach der KWR ordnen, die höchste zuerst. Dann von oben das Budget auffüllen, bis es aufgebraucht ist.",
            "Skript-Beispiel: Budget 10 Mio. €, $i = 10\\,\\%$, Projekte weder teilbar noch mehrfach machbar. A = (−10; 2; 12), B = (−6; 7; 1), C = (−4; 1; 5).",
            "A hat den größten Kapitalwert, schluckt aber das ganze Budget. C und B zusammen kosten auch 10 Mio. und bringen mehr."
          ],
          "code": "      K (Mio.)   A0    KWR     Rang KWR\nA       1,74     10    17 %       3\nB       1,19      6    20 %       2\nC       1,04      4    26 %       1\n\nnach KWR: C (4) + B (6) = 10 Mio.  ->  K = 1,04 + 1,19 = 2,23\nnur A:                     10 Mio.  ->  K = 1,74",
          "ausgabe": "Wahl: C und B mit zusammen 2,23 Mio. € Kapitalwert.",
          "merke": "Bei knappem Budget die Projekte nach KWR ordnen und von oben auffüllen."
        },
        {
          "titel": "Wenn die Reihung versagt: unteilbare Projekte",
          "text": [
            "Die KWR-Reihung ist nur sicher optimal, wenn das Budget genau aufgeht oder Projekte teilbar sind. Bleibt bei unteilbaren Projekten Geld übrig, kann eine andere Kombination besser sein. Übriges Geld geht an den Kapitalmarkt und bringt dort $K = 0$ (es verdient genau den Kalkulationszins, nicht mehr).",
            "Klausur 12, Aufgabe 2: Budget 80 Tsd. €, $i = 5\\,\\%$. A = (−45; 35; 25; 15), B = (−35; 20; 10; 30), C = (−40; 23; 23; 23), in Tsd. €. Für C kann man den RBF aus Woche 3 nehmen: $23 \\cdot RBF(5\\,\\%; 3) = 23 \\cdot 2{,}72325 = 62{,}635$ Tsd., minus 40 ergibt 22,635 Tsd.",
            "Nach KWR wären C und B dran (75 Tsd.), 5 Tsd. bleiben übrig. A und C zusammen kosten 85 Tsd., zu viel. A und B kosten genau 80 Tsd."
          ],
          "code": "        K (€)       A0 (€)    KWR\nA     23.966,63    45.000    0,5326\nB     19.033,04    35.000    0,5438\nC     22.634,70    40.000    0,5659\n\nC + B (nach KWR): 22.634,70 + 19.033,04 = 41.667,74 €\nA + B:            23.966,63 + 19.033,04 = 42.999,67 €",
          "ausgabe": "A + B ist besser, obwohl A die schlechteste KWR hat. Bei Unteilbarkeit alle zulässigen Kombinationen über den Kapitalwert vergleichen.",
          "merke": "Bei unteilbaren Projekten und Restbudget kann die KWR-Reihung danebenliegen; dann die Kombinationen per Kapitalwert vergleichen."
        },
        {
          "titel": "Drei Kriterien, drei Rangfolgen",
          "text": [
            "Im Skript-Beispiel ergeben Kapitalwert, Kapitalwertrate und interner Zins jeweils eine andere Reihenfolge. Welche richtig ist, hängt von der Situation ab: Ohne Budgetgrenze zählt der Kapitalwert, bei knappem Budget die KWR.",
            "Der interne Zins ist hier kein gutes Kriterium. Er rechnet mit der Wiederanlageprämisse (Woche 4) und beachtet weder die Größe des Projekts noch die Budgetgrenze."
          ],
          "code": "     Kapitalwert     KWR         interner Zins\nA    1,74 Mio. (1)   17 % (3)    20 % (3)\nB    1,19 Mio. (2)   20 % (2)    30 % (1)\nC    1,04 Mio. (3)   26 % (1)    25 % (2)",
          "merke": "Ohne Budgetgrenze entscheidet der Kapitalwert, mit Budgetgrenze die Kapitalwertrate."
        },
        {
          "titel": "Eine Periode: KWR und interner Zins hängen zusammen",
          "text": [
            "Hat ein Projekt nur eine Periode, (−A₀; e₁), dann reihen KWR und interner Zins gleich.",
            "Herleitung: Interner Zins $i^* = e_1/A_0 - 1$, also $q^* = 1 + i^* = e_1 / A_0$. Kapitalwertrate $\\text{KWR} = \\dfrac{-A_0 + e_1/q}{A_0} = \\dfrac{e_1}{A_0 q} - 1$, also $q_{KWR} = 1 + \\text{KWR} = \\dfrac{e_1}{A_0 q}$. Vergleicht man beide, folgt $q^* = q_{KWR} \\cdot q$, wobei $q = 1 + i$ der Kalkulationszins ist.",
            "Weil $q$ für alle Projekte gleich ist, hat das Projekt mit der höheren KWR auch den höheren internen Zins.",
            "Beispiel (−100; 121) bei $i = 10\\,\\%$."
          ],
          "code": "K   = −100 + 121 / 1,1 = −100 + 110 = 10\nKWR = 10 / 100 = 0,10     ->  q_KWR = 1,10\ni*  = 121 / 100 − 1 = 21 % ->  q*    = 1,21\nProbe: q_KWR · q = 1,10 · 1,10 = 1,21 = q*",
          "merke": "Bei einer Periode gilt q* = q_KWR · q, darum reihen KWR und interner Zins dort gleich."
        }
      ],
      quellen: [
        { name: "Vorlesung: Skript S. 83 bis 89", pfad: null },
        { name: "Tutorium 5: Aufgabenblatt (Mitschrift folgt)", pfad: "material/IuF/Tutorien-Aufgaben/Tutorium #5_Kapitalwertrate (KWR)_Aufgaben.pdf" },
        { name: "FHA #5 mit Lösungen", pfad: "material/IuF/Freiwillige Hausaufgaben/FHA #5.pdf" },
        { name: "Klausurensammlung", pfad: "material/IuF/Altklausuren/Klausurensammlung.pdf" }
      ],
      zusammenfassung: [
        "KWR = K / A₀: Kapitalwert pro eingesetztem Euro. Annahme: negative Zahlung nur in t = 0.",
        "Einsatz bei begrenztem Budget: Projekte nach KWR reihen und von oben auffüllen.",
        "Bei unteilbaren Projekten kann das schiefgehen: Kleine, rentable Projekte verdrängen große. Dann Kombinationen per Kapitalwert vergleichen.",
        "Eine Periode: interner Zins und KWR reihen gleich, $q^* = q_{KWR} \\cdot q$, denn q = 1 + Kalkulationszins ist für alle Projekte gleich."
      ],
      aufgaben: [
        { titel: "Altklausur: Budget von 80 Tsd. €", q: "Klausurensammlung, Klausur 12, Aufgabe 2 (Musterlösung)",
          text: "Herr Schubert hat 80 Tsd. €. Unteilbare Projekte in Tsd. €: A = (−45; 35; 25; 15), B = (−35; 20; 10; 30), C = (−40; 23; 23; 23), i = 5 %. a) KWR und Auswahl? b) Optimal?",
          loesung: [
            "$K_A = 23.966{,}63$ €, $K_B = 19.033{,}04$ €, $K_C = 22.634{,}70$ €.",
            "KWR: A 0,5326, B 0,5438, C 0,5659. Nach KWR: C und B, 5 Tsd. € am Kapitalmarkt (K = 0). Summe: 41.667,74 €.",
            "b) A + B kostet genau 80 Tsd. € und bringt 42.999,67 €, also mehr. Die KWR-Reihung ist hier nicht optimal, weil C die größere Investition A verdrängt."
          ] },
        { titel: "Skript-Beispiel: Budget 10 Mio. €", q: "Skript S. 84 bis 86",
          text: "A = (−10; 2; 12), B = (−6; 7; 1), C = (−4; 1; 5) in Mio. €, i = 10 %, Budget 10 Mio.",
          loesung: [
            "K: A 1,74, B 1,19, C 1,04. KWR: A 17 %, B 20 %, C 26 %.",
            "Nach KWR: C und B, Budget voll. $K = 2{,}23 > 1{,}74$ (nur A)."
          ] }
      ],
      karten: [
        { f: "Wie ist die Kapitalwertrate definiert?", a: "KWR = K / A₀, Kapitalwert pro eingesetztem Euro. Beispiel: K = 1,04 Mio. bei 4 Mio. Einsatz ergibt 26 %.", s: 83 },
        { f: "Wann nutzt man die Kapitalwertrate?", a: "Bei begrenztem Budget, wenn sich Projekte gegenseitig verdrängen.", s: 84 },
        { f: "Warum reicht der Kapitalwert bei festem Budget nicht?", a: "Er berücksichtigt das Kapital nur über die Zinskosten, nicht über die Knappheit. Er sieht nicht, dass ein großes Projekt mehrere kleine verdrängt.", s: 87 },
        { f: "Wann führt die KWR-Reihung nicht zum Optimum?", a: "Bei unteilbaren Projekten, wenn Budget übrig bleibt. Dann kann eine andere Kombination mehr Kapitalwert bringen (Klausur 12: A + B statt C + B).", q: "Klausur 12, Aufgabe 2b" },
        { f: "Zusammenhang interner Zins und KWR bei einer Periode?", a: "$q^* = q_{KWR} \\cdot q$. Gleiche Reihung, weil q für alle Projekte gleich ist.", s: 89 }
      ],
      quiz: [
        { typ: "zahl", q: "Klausur 12, Aufgabe 2a", frage: "C = (−40; 23; 23; 23) Tsd. €, i = 5 %. KWR (vier Nachkommastellen)?",
          loesung: 0.5659, toleranz: 0.0002, einheit: "", erklaerung: "$K_C = 22.634{,}70$ €, KWR $= 22634{,}70/40000 = 0{,}5659$" },
        { typ: "mc", q: "Klausur 12, Aufgabe 2b", frage: "Budget 80: K_A = 23,97 (45), K_B = 19,03 (35), K_C = 22,63 (40). Beste Kombination?",
          optionen: ["C + B (nach KWR)", "A + B", "A + C", "Nur A"],
          richtig: 1, erklaerung: "A + C kostet 85, zu viel. A + B = 43,00 > C + B = 41,67." },
        { typ: "zahl", s: 85, frage: "C = (−4 Mio.; 1 Mio.; 5 Mio.), i = 10 %. KWR in % (ganze Zahl)?",
          loesung: 26, toleranz: 0.5, einheit: "%", erklaerung: "$K = 1{,}041$ Mio., $1{,}041/4 = 26\\,\\%$" },
        { typ: "mc", s: 86, frage: "Budget 10 Mio., i = 10 %: A = (−10; 2; 12), B = (−6; 7; 1), C = (−4; 1; 5). Auswahl?",
          optionen: ["Nur A", "B und C", "Nur B", "A und C"], richtig: 1,
          erklaerung: "KWR: C 26 %, B 20 %, A 17 %. B + C: K = 2,23 > 1,74." }
      ],
      formeln: [
        { name: "Kapitalwertrate", tex: "\\text{KWR} = \\dfrac{K}{A_0}", text: "Rangkriterium bei begrenztem Budget.", s: 83, bsp: "C (Klausur 12): 22.634,70 / 40.000 = 0,5659" },
        { name: "Einperiodiger Fall", tex: "q^* = q_{KWR} \\cdot q", text: "Interner Zins und KWR reihen gleich.", s: 89 }
      ]
    }
  ]
});
