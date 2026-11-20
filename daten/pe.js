// Platform Economics (Prof. Dr. Timm Teubner, Übung Tim Sparholz), WiSe 2026/27
// Gegliedert nach Wochen: Vorlesung (Part A–D) + Tutorium mit offizieller Lösung.
// Stand: 18.11.2026. Alle Rechenergebnisse mit Python nachgerechnet und mit den Tutoriumslösungen abgeglichen.
// Klausur: auf Englisch, Antworten auf Deutsch oder Englisch erlaubt, 90 Punkte = 90 Minuten,
// 4 Blöcke, einer davon True/False. Taschenrechner mitbringen. Gastvorträge sind klausurrelevant.
// Deshalb: Fachbegriffe bleiben englisch, und jede Woche hat True/False-Fragen auf Englisch.
// Formeln in KaTeX zwischen $...$ (Backslashes doppelt). Quellen: q = Foliensatz und Folie bzw. Tutorium.

window.FAECHER = window.FAECHER || [];
window.FAECHER.push({
  id: "pe",
  name: "Platform Economics",
  kurz: "PE",
  klausur: { datum: "2027-02-23T09:30:00", text: "Di 23.02.2027, 09:30, EW 201 / MA 004 (2. Termin Do 25.03.2027)" },
  quelle: "Folien Part A–D, Tutorials 1–3 mit Lösungen (ISIS)",
  anleitung: [
    "Arbeite die Wochen der Reihe nach ab. Jede Woche baut auf der vorigen auf.",
    "Lies pro Woche zuerst „Schritt für Schritt“. Rechne jedes Beispiel im Kasten selbst mit dem Taschenrechner nach, bevor du weiterliest. Wenn du ein Symbol nicht mehr weißt, geh eine Lektion zurück.",
    "Dann die Karten: Antwort erst laut sagen, dann aufdecken. Fachbegriffe bleiben englisch, weil die Klausur englisch ist. Du musst sie aber auf Deutsch erklären können.",
    "Danach die Aufgaben aus dem Tutorium: erst selbst auf Papier lösen, dann die Lösung aufklappen und Schritt für Schritt vergleichen.",
    "Zum Schluss das Quiz der Woche. Ziel sind 80 Prozent. Die True/False-Fragen sind auf Englisch, so wie ein Block in der Klausur. Falsche Fragen nach einem Tag wiederholen.",
    "Vor der Klausur: Formeln der Woche abdecken und aus dem Kopf aufschreiben, dazu je ein Zahlenbeispiel."
  ],
  kapitel: [
    // ==================================================================
    {
      id: "w1",
      titel: "Woche 1–2: Plattformökonomie",
      abschnitt: "VL 15.10. und 22.10., Tutorium 1 am 29.10.2026",
      seiten: "Part A (Introduction) und Part B (Platform Economy)",
      quellen: [
        { name: "Vorlesung Part A: Introduction", pfad: "material/PE/Vorlesung/PE_Part_A_Introduction.pdf" },
        { name: "Vorlesung Part B: Platform Economy", pfad: "material/PE/Vorlesung/PE_Part_B_Platform_Economy.pdf" },
        { name: "Tutorial 1: Aufgaben", pfad: "material/PE/Tutorien/PE_Tutorial_1.pdf" },
        { name: "Tutorial 1: Lösung", pfad: "material/PE/Tutorien/PE_Tutorial_1_Solution.pdf" }
      ],
      lektionen: [
        { titel: "Pipeline: Wert entsteht in einer Kette",
          text: [
            "Fang mit einem Bäcker an. Er kauft Mehl, backt Brot und verkauft es im Laden. Der Wert entsteht Schritt für Schritt in einer Kette: Einkauf, Produktion, Verkauf. Ofen und Laden gehören ihm, alle Kosten trägt er selbst.",
            "So ein Unternehmen heißt in der Vorlesung Pipeline (englisch für Rohrleitung). Der Wert fließt in eine Richtung, vom Hersteller zum Kunden. Beispiele aus den Folien sind BMW und McFit: BMW baut seine Autos selbst, McFit betreibt eigene Studios mit eigenem Personal.",
            "Eine Pipeline wächst, indem sie mehr produziert. Mehr Mitglieder brauchen mehr Studios. Billiger pro Stück wird es nur, weil sich die Fixkosten (Fabrik, Maschinen) auf mehr Stück verteilen. Das nennt man Größenvorteile auf der Angebotsseite."
          ],
          merke: "Pipeline = das Unternehmen erstellt den Wert selbst entlang einer Kette (Produktion → Vertrieb) und besitzt die Ressourcen." },
        { titel: "Plattform: Wert entsteht zwischen anderen",
          text: [
            "Jetzt ein Wochenmarkt. Der Betreiber verkauft selbst kein Gemüse. Er stellt den Platz, macht Regeln (wer wann wo aufbaut) und sorgt dafür, dass Händler und Kunden sich finden. Der Wert entsteht beim Tausch zwischen Händlern und Kunden. Genau das ist die Idee einer Plattform.",
            "Eine Plattform bringt Anbieter und Konsumenten zusammen und übernimmt dabei Aufgaben (Part B, Folie 6): coordination (Abläufe abstimmen), standardization (gleiche Formate, z. B. jedes Inserat hat Fotos und Preis), matchmaking (die Passenden zusammenbringen, z. B. über die Suche), communication (Nachrichten), community (Gemeinschaft), trust and reputation (Bewertungen, damit man Fremden traut) und payment (Bezahlung abwickeln).",
            "Die Gruppen, die eine Plattform zusammenbringt, heißen Seiten (sides). Bei Uber sind das Fahrgäste und Fahrer, bei Booking.com Reisende und Unterkünfte. Uber besitzt keine Autos, Airbnb keine Wohnungen. Die Ressourcen gehören den Nutzern.",
            "Deshalb wächst eine Plattform schneller als eine Pipeline: Ein zusätzliches Zimmer auf Airbnb kostet Airbnb fast nichts, ein zusätzliches Hotelzimmer kostet eine Hotelkette einen Anbau."
          ],
          merke: "Plattform = ermöglicht wertschaffende Interaktionen zwischen Anbietern und Konsumenten und besitzt die Ressourcen meist nicht selbst." },
        { titel: "Netzwerkeffekte und die drei Shifts",
          text: [
            "Warum werden manche Plattformen so riesig? Wegen der network effects (Netzwerkeffekte): Ein Angebot wird für jeden Nutzer wertvoller, je mehr andere es nutzen. Ein Messenger, den nur du hast, ist wertlos. Nutzen ihn alle deine Freunde, willst du ihn nicht mehr hergeben.",
            "Die Folien nennen das auch demand-side economies of scale, also Größenvorteile auf der Nachfrageseite. Bei der Pipeline sinken mit der Größe die Kosten, bei der Plattform steigt mit der Größe der Nutzen für die Kunden. Das ist der Kern des Unterschieds.",
            "Zwei Arten kommen immer wieder vor. Direct (direkt): Mehr Nutzer derselben Gruppe nützen mir direkt, wie beim Telefon. Indirect (indirekt, auch cross-side): Mehr Nutzer auf der einen Seite machen die Plattform für die andere Seite wertvoller. Mehr Fahrer bei Uber heißt kürzere Wartezeit für Fahrgäste, mehr Fahrgäste heißt mehr Aufträge für Fahrer. Digitale Plattformen sind vor allem durch indirekte Netzwerkeffekte gekennzeichnet. Woche 3 und 4 vertiefen das.",
            "Choudary (2015) beschreibt den Wechsel von Pipeline zu Plattform mit drei Shifts. 1. Markets: from consumers to producers. Eine Plattform muss nicht nur Kunden gewinnen, sondern auch die Produzenten (Fahrer, Vermieter). 2. Competitive advantage: from resources to ecosystems. Der Vorsprung kommt nicht aus eigenen Fabriken, sondern aus dem Netzwerk der Teilnehmer. 3. Value creation: from processes to interactions. Der Wert entsteht nicht in internen Abläufen, sondern bei Suche, Buchung und Bewertung zwischen den Nutzern."
          ],
          code: "McFit (Pipeline) vs. Urban Sports Club (Plattform), Tutorial 1, Ex. 1b\n\nMarkets:            McFit verkauft an Mitglieder.\n                    USC muss Mitglieder UND Partnerstudios gewinnen.\nCompetitive adv.:   McFit hat eigene Studios und Personal.\n                    USC besitzt kein Studio und lebt vom Netzwerk.\nValue creation:     McFit betreibt Studios (Prozesse).\n                    USC verbindet Mitglieder und Studios (Interaktionen).",
          merke: "Network effects = demand-side economies of scale: Der Nutzen für jeden steigt mit der Zahl der Nutzer." },
        { titel: "Plattformtypen, Definition und warum gerade jetzt",
          text: [
            "Evans & Gawer (2015) unterscheiden drei Typen. Transaction platform: vermittelt Geschäfte zwischen Parteien, die sich sonst schwer finden oder einander nicht trauen würden (Booking.com, eBay). Innovation platform: stellt eine Technik bereit, auf der andere eigene Produkte bauen (AWS, Android). Integrated platform: beides zusammen (Apple mit iPhone und AppStore, WeChat).",
            "Eine Prüfhilfe: Lautet die Frage „Wer handelt hier mit wem?“, ist es transaction. Lautet sie „Wer baut hier etwas Eigenes darauf?“, ist es innovation. Passt beides, ist es integrated.",
            "Parkers Definition hat vier Teile: ein Geflecht aus Regeln und Architektur (wer darf was, wie funktioniert die Technik), offen für geregelte Teilnahme (jeder darf mitmachen, aber nach Regeln), fördert aktiv Interaktionen in einem mehrseitigen Markt (ein Markt mit mehreren Nutzergruppen) und skaliert schneller als eine Pipeline, weil sie die Produktionskosten nicht selbst trägt.",
            "Neu ist auch, dass Privatleute anbieten: crowd-based statt institution-based, also Airbnb-Gastgeber statt Hotel. Motive fürs Teilen sind Geld, Vielfalt, Einzigartigkeit, ein soziales Erlebnis und Nachhaltigkeit. Hemmnisse sind fehlendes Vertrauen in Fremde, Prozessrisiko (was, wenn etwas schiefgeht?) und Privatsphäre.",
            "Warum boomt das seit etwa 2012? Fünf Technologien senken Kosten, erhöhen das Tempo und erweitern Verbindungen: powerful chips (ein Computer in jeder Hosentasche), cloud services (Server mieten statt kaufen), pervasive Internet (überall online), large bandwidth (schnelle Leitungen) und programming languages (Software lässt sich schnell bauen)."
          ],
          merke: "Transaction = vermitteln, Innovation = Basis zum Weiterbauen, Integrated = beides." },
        { titel: "Die Airbnb Growth Formula verstehen",
          text: [
            "Wie viele Buchungen entstehen auf einer Plattform? Die Vorlesung nutzt dafür die Airbnb Growth Formula: $B = A \\cdot S^{\\gamma} \\cdot D^{\\alpha}$.",
            "B sind die Buchungen pro Zeitraum. S (supply) ist das Angebot, also die Zahl der Inserate. D (demand) ist die Nachfrage, also die Zahl der Suchen. A ist die Matching-Effizienz: wie gut die Plattform aus Angebot und Nachfrage Buchungen macht, etwa durch gute Suche, Ranking, faire Preise, Vertrauen und einen einfachen Buchungsprozess.",
            "$\\gamma$ (gamma) und $\\alpha$ (alpha) sind Elastizitäten. Eine Elastizität beantwortet die Frage: Um wie viel Prozent ändert sich das Ergebnis, wenn sich eine Ursache um 1 Prozent ändert? $\\gamma = 0{,}3$ heißt: 1 % mehr Angebot bringt etwa 0,3 % mehr Buchungen. $\\alpha = 0{,}5$ heißt: 1 % mehr Nachfrage bringt etwa 0,5 % mehr Buchungen.",
            "Warum stehen sie als Hochzahl? Eine Hochzahl unter 1 erzeugt genau dieses Verhalten: Die Kurve steigt, aber immer flacher. Das heißt abnehmende Erträge. Vergleich: Das erste Eiscafé in einer Straße zieht viele Gäste an, das fünfte kaum noch zusätzliche.",
            "Warum malnehmen statt addieren? Ohne Angebot gibt es keine Buchung, egal wie viele suchen. Mit S = 0 wird das ganze Produkt null. Das passt: Eine Plattform braucht beide Seiten."
          ],
          code: "Prozentwirkung (Tutorial 1, Ex. 2c). Alles andere bleibt gleich, deshalb:\nB_neu / B_alt = (1,1 · S)^0,3 / S^0,3 = 1,1^0,3\n\nAngebot +10 %:     1,1^0,3 = 1,029  ->  Buchungen +2,9 %\nNachfrage +10 %:   1,1^0,5 = 1,049  ->  Buchungen +4,9 %\nAngebot doppelt:   2^0,3   = 1,231  ->  nur +23 %\nNachfrage doppelt: 2^0,5   = 1,414  ->  nur +41 %",
          merke: "Elastizität = Prozent Änderung des Ergebnisses pro 1 Prozent Änderung der Ursache. Liegt sie unter 1, gibt es abnehmende Erträge." },
        { titel: "Rechnen mit der Formel: A bestimmen, Hebel vergleichen",
          text: [
            "In Tutorial 1 kennst du für Berlin S = 9.000, D = 8.000 und B = 824. Gesucht ist A. Dafür stellst du die Formel um: Beide Seiten durch $S^{0{,}3} \\cdot D^{0{,}5}$ teilen. Dann steht da $A = B / (S^{0{,}3} \\cdot D^{0{,}5})$.",
            "Mit A vergleichst du, wie gut eine Stadt matcht, unabhängig von ihrer Größe: Berlin 0,600, München 0,650, Hamburg 0,700. Hamburg ist der kleinste Markt, macht aber am meisten aus seinen Nutzern.",
            "Danach fragt die Aufgabe, wo 500 zusätzliche Inserate am meisten bringen. Der Weg: neues B mit S + 500 ausrechnen und das alte B abziehen. Das Ergebnis hängt davon ab, wie knapp eine Seite ist. München hat nur 3.500 Inserate, 500 mehr sind dort +14 %. In Berlin sind es nur +5,6 %. Darum bringt zusätzliches Angebot in München am meisten.",
            "Eine bessere Matching-Effizienz (A + 0,025) wirkt dagegen in Berlin am stärksten, weil $\\Delta B = 0{,}025 \\cdot S^{0{,}3} \\cdot D^{0{,}5}$ mit der Marktgröße wächst. $\\Delta$ (Delta) heißt einfach „Änderung von“."
          ],
          code: "Berlin: A bestimmen (Tutorial 1, Ex. 2a)\n\n1. 9000^0,3 = 15,36\n2. 8000^0,5 = Wurzel aus 8000 = 89,44\n3. Produkt   = 15,36 · 89,44 = 1373,5\n4. A = 824 / 1373,5 = 0,600\n\nBerlin: +500 Angebot (Ex. 2b, Rechenweg wie in der offiziellen Lösung)\n\n5. B_neu = 0,600 · 9500^0,3 · 8000^0,5 = 0,600 · 15,61 · 89,44 = 837,6\n6. Zusatzbuchungen = 837,6 - 824 = +13,6\n\nZum Vergleich München: 0,650 · 4000^0,3 · 7000^0,5 = 654,8  ->  654,8 - 629 = +25,8",
          merke: "A = B / (S^γ · D^α). Mehr Angebot lohnt dort, wo Angebot knapp ist. Besseres Matching lohnt im größten Markt." },
        { titel: "Henne-Ei-Problem, kritische Masse und Launch-Strategien",
          text: [
            "Eine neue Plattform hat ein Startproblem: Fahrer kommen nur, wenn es Fahrgäste gibt, und Fahrgäste nur, wenn es Fahrer gibt. Das ist das Henne-Ei-Problem.",
            "Die Zahl an Nutzern, ab der eine Plattform von selbst weiterwächst, heißt kritische Masse. Vergleich Lagerfeuer: Erst wenn genug Holz brennt, hält sich das Feuer allein. Woche 3 rechnet die kritische Masse genau aus.",
            "Stummer et al. (2018) nennen sechs Launch-Strategien, um die kritische Masse zu erreichen. Sie stehen im Kasten. Bei jeder Strategie solltest du sagen können, welches Problem sie löst."
          ],
          code: "Single Target Group     klein anfangen: eine Stadt oder ein Use Case (z. B. nur Fahrten zum BER).\n                        Dazu Marquee Users: bekannte Großkunden, die andere anziehen.\nPlatform Staging        erst selbst als Händler verkaufen (braucht keine kritische Masse),\n                        später für fremde Anbieter öffnen (Amazon, Zalando).\nSubsidizing             eine Seite mit Geld locken (Bonus für Fahrer, gratis für Leser).\nPlatform Envelopment    mit vorhandenen Nutzern in einen fremden Markt eindringen und\n                        eigene Funktionen bündeln.\nUser Data Portability   Nutzer bringen ihre Daten mit, z. B. ihre Uber-Bewertungen.\nSide Switching          Nutzer sind auf beiden Seiten aktiv (BlaBlaCar-Pendler fährt mal\n                        selbst, fährt mal mit). Jeder neue Nutzer stärkt beide Seiten.",
          merke: "Kritische Masse = Nutzerzahl, ab der die Plattform von allein wächst. Launch-Strategien helfen, sie zu erreichen." },
        { titel: "Multi-Homing: auf mehreren Plattformen gleichzeitig",
          text: [
            "Viele Fahrer haben Uber und eine zweite App gleichzeitig offen. Das heißt Multi-Homing (mehrere „Zuhause“). Wer nur eine Plattform nutzt, betreibt Single-Homing. Multi-Homing kostet etwas: mehrere Accounts pflegen, Aufträge koordinieren, und die Bewertungen verteilen sich auf zwei Plattformen.",
            "Nicht verwechseln mit switching costs (Wechselkosten). Die fallen an, wenn man eine Plattform verlässt und zu einer anderen geht, etwa weil man dort bei null Bewertungen neu anfängt.",
            "Sind Multi-Homing-Kosten hoch, bleiben alle bei der größten Plattform. Das fördert Marktkonzentration bis zum Monopol. Deshalb interessiert sich das Kartellrecht dafür.",
            "Tutorial 1 zeigt, wie ein Fahrer entscheidet: Er vergleicht seinen Nettoverdienst pro Stunde in jeder Variante. Netto heißt: was nach Abzug der Provision übrig bleibt. Die Provision ist der Anteil am Fahrpreis, den die Plattform einbehält."
          ],
          code: "Fahrpreis 12 €. Uber: 1,2 Anfragen/h, 25 % Provision. Ryde: 0,3 Anfragen/h, 15 %.\nMulti-Homing kostet 4 €/h. (Tutorial 1, Ex. 4)\n\n1. Netto pro Fahrt Uber: 12 · (1 - 0,25) = 12 · 0,75 = 9,00 €\n2. Netto pro Fahrt Ryde: 12 · (1 - 0,15) = 12 · 0,85 = 10,20 €\n3. Uber only: 1,2 · 9,00  = 10,80 €/h\n4. Ryde only: 0,3 · 10,20 =  3,06 €/h\n5. Beide:     10,80 + 3,06 - 4 = 9,86 €/h\n   Vergleich: 10,80 > 9,86 > 3,06  ->  nur Uber (Single-Homing)\n\nWelchen Bonus braucht Ryde, damit der Fahrer nur Ryde fährt?\n6. Ryde only + Bonus >= beste Alternative (Uber only)\n   3,06 + Bonus >= 10,80  ->  Bonus >= 7,74 €/h  (Strategie: Subsidizing)",
          merke: "Multi-Homing lohnt nur, wenn der Zusatzverdienst der zweiten Plattform größer ist als die Multi-Homing-Kosten." },
        { titel: "Wer zahlt? Monetarisierung und typische Fallen",
          text: [
            "Plattformen verlangen selten von beiden Seiten gleich viel. Das Standardbeispiel ist die Zeitung (Rochet & Tirole 2003): Leser zahlen wenig oder nichts, sie sind die subsidy side (die subventionierte Seite). Anzeigenkunden zahlen viel, sie sind die money side, weil sie für die Reichweite bei den Lesern bezahlen. Eine Seite finanziert also die andere mit. Das heißt Quersubventionierung.",
            "In unausgeglichenen Märkten ist eine Seite knapp. Bei Wohnungen in Berlin sind die Wohnungen knapp und die Suchenden zahlreich. Die knappe Seite hat die Macht, also kassiert die Plattform bei der schwächeren Seite, den Suchenden. Zwei weitere Bedürfnisse, mit denen Plattformen Geld verdienen: credibility (Glaubwürdigkeit, z. B. ImmoScout MieterPlus mit SCHUFA-Auskunft) und visibility (Sichtbarkeit, z. B. bezahlte Hervorhebung bei Kleinanzeigen).",
            "Tinder-Dilemma: Eine Dating-App ist erfolgreich, wenn zwei Menschen ein Paar werden. Dann löschen beide die App. KPIs (Key Performance Indicators, also Kennzahlen, an denen man Erfolg misst) sollten deshalb Ergebnisse zählen, etwa erfolgreiche Vermietungen, und nicht die Nutzungszeit.",
            "Platform leakage (auch Disintermediation): Nutzer lernen sich über die Plattform kennen und machen das nächste Geschäft direkt, ohne Provision. Beispiel: Die Reinigungskraft aus einer Vermittlungs-App wird beim zweiten Termin bar bezahlt. Treiber sind geringer Mehrwert der Plattform, wenig Vertrauensbedarf, hohe Provision, umständliche Bedienung, leichter direkter Kontakt und wiederholte Interaktionen."
          ],
          merke: "Die Plattform kassiert meist bei der Seite, die die andere dringender braucht, und subventioniert die Seite, die andere anzieht." }
      ],
      zusammenfassung: [
        "Pipeline-Firma: erstellt den Wert selbst entlang einer Kette (Produktion → Wertschöpfung → Vertrieb), z. B. BMW, McFit. Plattform-Firma: bringt Anbieter und Konsumenten zusammen und übernimmt Koordination, Standardisierung, Matchmaking, Kommunikation, Community, Trust & Reputation und Payment.",
        "Network effects = demand-side economies of scale: Der Nutzen für jeden steigt, je mehr andere mitmachen (Messenger). Bei Pipelines sinken mit der Größe nur die Kosten. Das unterscheidet Plattformen von Pipelines.",
        "Three shifts (Choudary 2015): 1. Markets: from consumers to producers. 2. Competitive advantage: from resources to ecosystems. 3. Value creation: from processes to interactions. Uber besitzt keine Autos, Airbnb keine Wohnungen.",
        "Platform types (Evans & Gawer 2015): Transaction platform (vermittelt Transaktionen zwischen Parteien, die sich sonst schwer finden oder vertrauen, z. B. Booking.com). Innovation platform (Technologie, auf der andere eigene Produkte bauen, z. B. AWS). Integrated platform (beides, z. B. WeChat, Apple mit AppStore).",
        "Definition (Parker): Eine Plattform ist ein Geflecht aus Regeln und Architektur, offen für geregelte Teilnahme, fördert aktiv Interaktionen in einem mehrseitigen Markt und skaliert schneller als eine Pipeline, weil sie die Kosten der Produktion nicht selbst trägt. Digitale Plattformen sind durch indirect network effects gekennzeichnet.",
        "Institution-based vs. crowd-based Angebote (z. B. Hotel vs. Airbnb). Motive fürs P2P-Sharing: finanzielle Vorteile, Vielfalt, Einzigartigkeit, soziales Erlebnis, Nachhaltigkeit; Hemmnisse: Vertrauen in andere, Prozessrisiko, Privatsphäre.",
        "Warum gerade jetzt (seit ca. 2012)? Fünf Technologien senken Kosten, erhöhen Tempo und erweitern Verbindungen: powerful chips, cloud services, pervasive Internet, large bandwidth, programming languages.",
        "Airbnb Growth Formula: $B = A \\cdot S^{\\gamma} \\cdot D^{\\alpha}$. A = Matching-Effizienz (Suche, Ranking, Preise, Vertrauen), $\\gamma$ und $\\alpha$ = Elastizitäten von Angebot und Nachfrage (< 1, also abnehmende Erträge).",
        "Platform launch strategies (Stummer et al. 2018): Single Target Group (eine Stadt/Use Case, Marquee Users), Platform Staging (erst Händler-Modell, dann Plattform, z. B. Amazon, Zalando; als Händler braucht man noch keine kritische Masse), Subsidizing (eine Seite subventionieren), Platform Envelopment (mit vorhandenen Nutzern in fremden Markt eindringen, eigene Funktionen bündeln), User Data Portability (Reputation importieren), Side Switching (zweiseitige Plattform einseitig machen, Nutzer auf beiden Seiten, z. B. BlaBlaCar).",
        "Multi-homing: Nutzer sind auf mehreren Plattformen gleichzeitig. Kosten: Accounts, Organisation, Koordination, Reputation. Nicht verwechseln mit switching costs (eine Plattform verlassen, eine andere annehmen). Hohe Multi-homing-Kosten fördern Konzentration und Monopole, weil dann alle bei der größten Plattform bleiben.",
        "Monetarisierung: In unausgeglichenen Märkten hat die knappe Seite die Macht, die Plattform kassiert bei der schwächeren Seite, weil die die andere dringender braucht (Wohnungssuche, Jobs, Dating). Außerdem: Bedarf an Credibility (ImmoScout MieterPlus mit SCHUFA-Check) und Visibility (Kleinanzeigen-Hervorhebung).",
        "Tinder-Dilemma: Erfolg auf der Plattform beendet die Beziehung zum Nutzer. Gute KPIs messen Ergebnisse (erfolgreiche Matches/Vermietungen), nicht Nutzungszeit.",
        "Platform leakage (Disintermediation): Nutzer wickeln am Ende ohne Plattform ab, um die Provision zu sparen. Treiber: geringer Mehrwert, wenig Vertrauensbedarf, hohe Provision, umständliche Bedienung, leichter direkter Kontakt, wiederholte Interaktionen."
      ],
      aufgaben: [
        { titel: "Tutorial 1, Exercise 1: Pipeline oder Plattform?", q: "Tutorial 1, Ex. 1",
          text: "a) Ordne Booking.com, AWS, BMW und WeChat als Pipeline oder Plattform ein. Für Plattformen: Seiten und Typ. b) McFit (Pipeline) vs. Urban Sports Club (Plattform) entlang der drei Shifts.",
          loesung: [
            "Booking.com: Plattform, Reisende + Unterkunftsanbieter, Transaction platform.",
            "AWS: Plattform, Entwickler/Firmen + Drittanbieter (Marketplace), Innovation platform. Pipeline geht auch, wenn begründet (Amazon verkauft eigene Rechenleistung).",
            "BMW: Pipeline. WeChat: Plattform, Nutzer + Händler + Mini-Program-Entwickler + Werbekunden, Integrated platform.",
            "Markets: McFit verkauft nur an Mitglieder, USC muss auch die Partnerstudios (Produzenten) gewinnen.",
            "Competitive advantage: McFit hat eigene Studios und Personal, USC besitzt kein Studio und lebt vom Netzwerk.",
            "Value creation: McFit betreibt Studios (Prozesse), USC verbindet Mitglieder und Studios (Interaktionen: Suche, Buchung, Check-in, Zahlung)."
          ] },
        { titel: "Tutorial 1, Exercise 2: Transaction Volume Estimation", q: "Tutorial 1, Ex. 2",
          text: "$B = A \\cdot S^{0{,}3} \\cdot D^{0{,}5}$. Berlin S = 9.000, D = 8.000, B = 824; München 3.500 / 7.000 / 629; Hamburg 4.500 / 4.500 / 586. a) A je Stadt? b) Wo bringt +500 Angebot, +500 Nachfrage, A + 0,025 die meisten Zusatzbuchungen? c) Wirkung von +10 % Angebot bzw. Nachfrage?",
          loesung: [
            "a) $A = B / (S^{0{,}3} D^{0{,}5})$: Berlin $824 / (15{,}36 \\cdot 89{,}44) = 0{,}600$, München 0,650, Hamburg 0,700. Hamburg matcht am besten, obwohl kleinster Markt.",
            "b) (i) Angebot +500: Berlin +13,6, München +25,8, Hamburg +18,5 → München (Angebot dort knapp).",
            "(ii) Nachfrage +500: Berlin +25,4, München +22,1, Hamburg +31,4 → Hamburg (Nachfrage dort knapp, gutes Matching).",
            "(iii) A + 0,025: Berlin +34,4, München +24,2, Hamburg +20,6 → Berlin, weil $\\Delta B = 0{,}025 \\cdot S^{0{,}3} D^{0{,}5}$ mit der Marktgröße wächst.",
            "c) $1{,}1^{0{,}3} = 1{,}029$ → +2,9 %; $1{,}1^{0{,}5} = 1{,}049$ → +4,9 %. Elastizität = % Änderung der Buchungen pro 1 % Änderung. Beide < 1: abnehmende Erträge (Verdopplung Angebot: +23 %, Nachfrage: +41 %)."
          ] },
        { titel: "Tutorial 1, Exercise 3: Monetarisierung ImmoScout24", q: "Tutorial 1, Ex. 3",
          text: "Bonus hängt an KPI (A) Kontaktanfragen/Tag, (B) Verweildauer, (C) Anzahl MieterPlus-Mitglieder. Welche nimmst du? Welche Seite ist knapp?",
          loesung: [
            "(A) belohnt Sichtbarkeit, aber in engen Märkten nur mehr Absagen und Aufwand. Anfragen sind keine Vermietungen.",
            "(B) belohnt Suchende festzuhalten, widerspricht ihrem Ziel, schnell eine Wohnung zu finden.",
            "(C) belohnt, die Gratisversion schlechter zu machen („pay to win“), Fairness-Problem.",
            "Keine KPI passt ganz (Tinder-Dilemma). Besser: erfolgreiche Vermietungen, Zeit bis zur Vermietung.",
            "Knapp: Wohnungen/Vermieter. Reichlich: Suchende. ImmoScout kassiert bei den Suchenden für Credibility (SCHUFA, Bewerbermappe) und Visibility (Anfrage oben, Vorabzugang)."
          ] },
        { titel: "Tutorial 1, Exercise 4: Ryde vs. Uber, Multi-Homing", q: "Tutorial 1, Ex. 4",
          text: "Fahrpreis 12 €. Uber: 1,2 Anfragen/h, 25 % Provision. Ryde: 0,3 Anfragen/h, 15 %. Multi-Homing kostet 4 €/h. a) Netto pro Stunde für Uber, Ryde, beide? b) Mindestbonus für Ryde-exklusiv? c) Zwei weitere Launch-Strategien.",
          loesung: [
            "Netto pro Fahrt: Uber $12 \\cdot 0{,}75 = 9{,}00$ €, Ryde $12 \\cdot 0{,}85 = 10{,}20$ €.",
            "Uber only: $1{,}2 \\cdot 9 = 10{,}80$ €/h. Ryde only: $0{,}3 \\cdot 10{,}20 = 3{,}06$ €/h. Beide: $10{,}80 + 3{,}06 - 4 = 9{,}86$ €/h.",
            "9,86 < 10,80 → Single-Homing auf Uber. Multi-Homing lohnt nur bei Kosten unter 3,06 €/h.",
            "b) Bonus mindestens $10{,}80 - 3{,}06 = 7{,}74$ €/h (bei genau 7,74 indifferent). Strategie: Subsidizing.",
            "c) z. B. Single Target Group (nur Flughafen BER), Platform Staging (erst eigene Flotte), User Data Portability (Uber-Bewertungen importieren)."
          ] }
      ],
      karten: [
        { f: "Was unterscheidet eine Pipeline-Firma von einer Plattform-Firma?", a: "Pipeline: erstellt Wert selbst in einer linearen Kette (Produktion → Vertrieb). Plattform: ermöglicht wertschaffende Interaktionen zwischen Anbietern und Konsumenten, besitzt die Ressourcen oft nicht selbst. Kern: network effects.", q: "Part A, Folie 13–15" },
        { f: "Welche Funktionen übernimmt eine Plattform zwischen Anbietern und Konsumenten?", a: "Coordination (Abläufe abstimmen), standardization (einheitliche Formate), matchmaking (Passende zusammenbringen), communication, community, trust and reputation (Bewertungen gegen das Risiko mit Fremden), payment (Bezahlung abwickeln).", q: "Part B, Folie 6" },
        { f: "Die drei Shifts von Pipeline zu Plattform (Choudary)?", a: "1. Markets: from consumers to producers (auch Anbieter wie Fahrer müssen gewonnen werden). 2. Competitive advantage: from resources to ecosystems (Vorsprung durchs Netzwerk statt eigene Fabriken). 3. Value creation: from processes to interactions (Wert entsteht zwischen den Nutzern).", q: "Part A, Folie 16" },
        { f: "Andere Bezeichnung für network effects?", a: "Demand-side economies of scale (Skaleneffekte auf der Nachfrageseite): Mit der Größe steigt nicht wie in der Fabrik die Kostenersparnis, sondern der Nutzen für jeden Kunden.", q: "Part A, Folie 15" },
        { f: "Transaction vs. innovation vs. integrated platform?", a: "Transaction: vermittelt Transaktionen zwischen Parteien, die sich sonst schwer finden/vertrauen (Booking.com, eBay). Innovation: Technologie als Basis für Produkte anderer (AWS, Android). Integrated: Kombination (WeChat, Apple iPhone + AppStore).", q: "Part B, Folie 24" },
        { f: "Parkers Plattform-Definition: vier Merkmale?", a: "Geflecht aus Regeln und Architektur; offen mit geregelter Teilnahme; fördert aktiv Interaktionen in einem mehrseitigen Markt; skaliert schneller als eine Pipeline, weil sie die Produktionskosten nicht trägt.", q: "Part B, Folie 26" },
        { f: "Welche Art Netzwerkeffekt kennzeichnet digitale Plattform-Geschäftsmodelle?", a: "Indirect network effects (Cross-side: mehr Anbieter machen die Plattform für Konsumenten wertvoller und umgekehrt).", q: "Part B, Folie 25" },
        { f: "Fünf Technologien, die Plattformen seit ca. 2012 begünstigen (Evans & Schmalensee)?", a: "Powerful chips, cloud services, pervasive Internet, large bandwidth, programming languages. Sie senken Kosten, erhöhen Tempo, erweitern Verbindungen.", q: "Part B, Folie 34" },
        { f: "Airbnb Growth Formula: Formel und Bedeutung von A?", a: "$B = A \\cdot S^{\\gamma} \\cdot D^{\\alpha}$. A = Matching-Effizienz: wie gut die Plattform Angebot und Nachfrage unabhängig von der Marktgröße in Buchungen umsetzt (Suche, Ranking, Preise, Vertrauen, einfacher Buchungsprozess).", q: "Part B, Folie 37; Tutorial 1" },
        { f: "Was bedeuten die Elastizitäten γ = 0,3 und α = 0,5?", a: "+1 % Angebot → +0,3 % Buchungen, +1 % Nachfrage → +0,5 % Buchungen. Beide < 1: abnehmende Erträge. Prozentual reagieren Buchungen stärker auf Nachfrage.", q: "Tutorial 1, Ex. 2c" },
        { f: "Die sechs Platform Launch Strategies?", a: "Single Target Group (klein anfangen), Platform Staging (erst Händler, dann Plattform), Subsidizing (eine Seite bezahlen), Platform Envelopment (mit eigenen Nutzern in fremden Markt), User Data Portability (Bewertungen mitnehmen), Side Switching (Nutzer auf beiden Seiten). Alle helfen, die kritische Masse zu erreichen.", q: "Part B, Folie 38" },
        { f: "Platform Staging: was ist das, Beispiel?", a: "Erst klassisches Händler-Modell (keine kritische Masse nötig), nach Erreichen der kritischen Masse Öffnung zur Plattform. Beispiele: Amazon, Zalando.", q: "Part B, Folie 38" },
        { f: "Side Switching?", a: "„Making a two-sided platform one-sided“: Fokus auf Nutzer, die auf beiden Seiten aktiv sind (private Airbnb-Gastgeber, die auch reisen; BlaBlaCar-Pendler). Jeder neue Nutzer erhöht Angebot und Nachfrage.", q: "Part B, Folie 38" },
        { f: "Multi-homing vs. switching costs?", a: "Multi-homing costs: Kosten, gleichzeitig auf mehreren Plattformen zu sein (Accounts, Organisation, Koordination, Reputation). Switching costs: Kosten, ein Netzwerk zu verlassen und ein anderes anzunehmen.", q: "Part B, Folie 39" },
        { f: "Folge hoher Multi-homing-Kosten für den Markt?", a: "Tendenz zu Marktkonzentration und Monopolen, weil Nutzer dann bei der größten Plattform bleiben, statt eine kleine zusätzlich zu nutzen. Wichtig für Kartellrecht. Schützt etablierte Plattformen (Uber vs. Ryde).", q: "Part B, Folie 39" },
        { f: "Zeitung als zweiseitiger Markt: welche Seite ist subsidy side, welche money side?", a: "Leser = subsidy side (billig/gratis), Anzeigenkunden = money side, weil sie für die Reichweite bei Lesern zahlen.", q: "Part B, Folie 40 (Rochet & Tirole 2003)" },
        { f: "Drei Wege, wie Plattformen Nutzerbedürfnisse monetarisieren?", a: "Unbalanced markets (schwächere Seite zahlt, z. B. Wohnungssuchende), need for credibility (SCHUFA-Check bei ImmoScout), need for visibility (Hervorhebung bei Kleinanzeigen).", q: "Part B, Folie 41–43" },
        { f: "Was treibt platform leakage?", a: "Geringer Mehrwert der Plattform, geringer Vertrauensbedarf, hohe Provisionen, umständliche Bedienung, leichte direkte Kommunikation, wiederholte Interaktionen. Gemeinsamer Kern: Die Nutzer sparen sich die Provision, wenn sie die Plattform nicht mehr brauchen.", q: "Part B, Folie 44" },
        { f: "Was ist das Tinder-Dilemma?", a: "Die Plattform ist erfolgreich, wenn sie sich überflüssig macht (Paar gefunden → Nutzer weg). KPI-Wahl (Matches, Nutzungszeit, Swipes) kollidiert mit dem Nutzerziel.", q: "Part A, Folie 18" }
      ],
      quiz: [
        { typ: "mc", q: "Part B, Folie 24", frage: "AWS stellt Rechenleistung bereit, auf der andere Firmen eigene Produkte bauen. Welcher Plattformtyp?",
          optionen: ["Transaction platform", "Innovation platform", "Integrated platform", "Pipeline ohne Plattformcharakter"],
          richtig: 1, erklaerung: "Innovation platforms liefern die Grundlage für Weiterentwicklungen anderer. Pipeline wäre nur mit Begründung akzeptiert." },
        { typ: "mc", q: "Tutorial 1, Ex. 1", frage: "WeChat: Nutzer, Händler (WeChat Pay) und Entwickler von Mini Programs. Welcher Typ?",
          optionen: ["Transaction platform", "Innovation platform", "Integrated platform", "Pipeline"],
          richtig: 2, erklaerung: "Mini Programs = Innovation, Zahlungen zwischen Nutzern und Händlern = Transaction. Beides zusammen: integrated." },
        { typ: "mc", q: "Part A, Folie 16", frage: "„Urban Sports Club besitzt kein Studio und lebt von tausenden Partnerstudios.“ Welcher Shift ist das?",
          optionen: ["From consumers to producers", "From resources to ecosystems", "From processes to interactions", "From products to services"],
          richtig: 1, erklaerung: "Wettbewerbsvorteil kommt nicht mehr aus eigenen Ressourcen, sondern aus dem Ökosystem." },
        { typ: "mc", q: "Part B, Folie 38", frage: "Eine neue Mitfahr-App startet nur für Fahrten zum Flughafen BER und gewinnt dafür große Firmen als Kunden. Welche Launch-Strategie?",
          optionen: ["Platform Staging", "Single Target Group", "Platform Envelopment", "Side Switching"],
          richtig: 1, erklaerung: "Ein Use Case/Ort verkleinert die nötige kritische Masse; große Firmen sind Marquee Users." },
        { typ: "mc", q: "Part B, Folie 38", frage: "Ryde lässt Fahrer ihre Uber-Bewertungen importieren. Welche Strategie, und was senkt sie?",
          optionen: ["Subsidizing, senkt die Provision", "User Data Portability, senkt den Reputationsteil der Wechsel-/Multi-homing-Kosten", "Platform Staging, senkt die kritische Masse", "Side Switching, senkt die Zahl der Seiten"],
          richtig: 1, erklaerung: "Reputation ist ein großer Teil der Homing-Kosten. Wer seine Sterne mitnehmen kann, wechselt leichter." },
        { typ: "zahl", q: "Tutorial 1, Ex. 2a", frage: "Berlin: S = 9.000, D = 8.000, B = 824, γ = 0,3, α = 0,5. Matching-Effizienz A (3 Nachkommastellen)?",
          loesung: 0.600, toleranz: 0.001, einheit: "", erklaerung: "$A = 824 / (9000^{0{,}3} \\cdot 8000^{0{,}5}) = 824 / (15{,}36 \\cdot 89{,}44) = 0{,}600$" },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Köln: A = 0,65, S = 4.000 Listings, D = 6.000 Suchen, γ = 0,3, α = 0,5. Wie viele Buchungen pro Woche (1 Nachkommastelle)?",
          loesung: 606.2, toleranz: 0.2, einheit: "Buchungen", erklaerung: "$B = 0{,}65 \\cdot 4000^{0{,}3} \\cdot 6000^{0{,}5} = 0{,}65 \\cdot 12{,}02 \\cdot 77{,}46 = 606{,}2$" },
        { typ: "zahl", q: "Tutorial 1, Ex. 2c", frage: "γ = 0,3. Um wie viel Prozent steigen die Buchungen, wenn sich das Angebot verdoppelt (gerundet auf ganze %)?",
          loesung: 23, toleranz: 0.5, einheit: "%", erklaerung: "$2^{0{,}3} = 1{,}231$ → +23 %. Bei der Nachfrage: $2^{0{,}5} = 1{,}414$ → +41 %." },
        { typ: "zahl", q: "Tutorial 1, Ex. 4a", frage: "Fahrpreis 12 €, Uber 1,2 Anfragen/h bei 25 % Provision, Ryde 0,3 Anfragen/h bei 15 %, Multi-Homing kostet 4 €/h. Netto pro Stunde bei Multi-Homing?",
          loesung: 9.86, toleranz: 0.01, einheit: "€/h", erklaerung: "$1{,}2 \\cdot 9{,}00 + 0{,}3 \\cdot 10{,}20 - 4 = 10{,}80 + 3{,}06 - 4 = 9{,}86$. Weniger als Uber allein (10,80)." },
        { typ: "zahl", q: "Tutorial 1, Ex. 4b", frage: "Gleiche Zahlen. Welchen Bonus pro Stunde muss Ryde mindestens zahlen, damit ein Fahrer nur für Ryde fährt?",
          loesung: 7.74, toleranz: 0.01, einheit: "€/h", erklaerung: "Beste Alternative Uber only 10,80 minus Ryde only 3,06 = 7,74 €/h. Launch-Strategie: Subsidizing." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Wie Tutorial 1, aber Ryde hat jetzt 0,5 Anfragen/h, 10 % Provision, Multi-Homing kostet 3 €/h. Netto bei Multi-Homing?",
          loesung: 13.20, toleranz: 0.01, einheit: "€/h", erklaerung: "Ryde netto pro Fahrt $12 \\cdot 0{,}9 = 10{,}80$, pro Stunde $0{,}5 \\cdot 10{,}80 = 5{,}40$. Beide: $10{,}80 + 5{,}40 - 3 = 13{,}20$ > 10,80. Jetzt lohnt Multi-Homing." },
        { typ: "mc", q: "Part B, Folie 39", optionen: ["True", "False"], frage: "True or false? „High multi-homing costs foster market concentration and monopoly tendencies.“",
          richtig: 0, erklaerung: "True. Wer nur schwer auf zwei Plattformen gleichzeitig sein kann, bleibt bei der größten." },
        { typ: "mc", q: "Part B, Folie 39", optionen: ["True", "False"], frage: "True or false? „Multi-homing costs and switching costs are the same thing.“",
          richtig: 1, erklaerung: "False. Multi-homing = gleichzeitig mehreren angehören. Switching = eine verlassen und eine andere annehmen." },
        { typ: "mc", q: "Part B, Folie 40", optionen: ["True", "False"], frage: "True or false? „In the newspaper example, advertisers are the subsidy side.“",
          richtig: 1, erklaerung: "False. Leser sind die subsidy side, Werbekunden die money side." },
        { typ: "mc", q: "Part B, Folie 44", frage: "Was fördert platform leakage NICHT?",
          optionen: ["Hohe Provisionen", "Wiederholte Interaktionen derselben Partner", "Hoher Vertrauensbedarf, den die Plattform absichert", "Einfache direkte Kommunikation zwischen Nutzern"],
          richtig: 2, erklaerung: "Geringer Vertrauensbedarf fördert Leakage. Wenn die Plattform Vertrauen schafft (Bewertungen, Versicherung), bleiben Nutzer eher." }
      ],
      formeln: [
        { name: "Airbnb Growth Formula", tex: "B = A \\cdot S^{\\gamma} \\cdot D^{\\alpha}", text: "B Buchungen, A Matching-Effizienz, S Angebot (Listings), D Nachfrage (Suchen), γ, α Elastizitäten.", q: "Part B, Folie 37", bsp: "Berlin: 0,600 · 9000^0,3 · 8000^0,5 = 824" },
        { name: "Matching-Effizienz", tex: "A = \\dfrac{B}{S^{\\gamma} \\cdot D^{\\alpha}}", text: "Umgestellte Growth Formula.", q: "Tutorial 1, Ex. 2a" },
        { name: "Prozentuale Wirkung", tex: "\\dfrac{B_{neu}}{B} = (1+x)^{\\gamma}", text: "Angebot steigt um x (z. B. 0,1), Rest gleich. Für Nachfrage mit α.", q: "Tutorial 1, Ex. 2c", bsp: "1,1^0,3 = 1,029 → +2,9 %" },
        { name: "Fahrer-Netto pro Stunde", tex: "\\text{Netto} = \\text{Anfragen/h} \\cdot \\text{Preis} \\cdot (1 - \\text{Provision}) \\; [- \\text{Multi-homing-Kosten}]", text: "Multi-Homing lohnt, wenn Zusatzverdienst der zweiten Plattform > Multi-homing-Kosten.", q: "Tutorial 1, Ex. 4" }
      ]
    },
    // ==================================================================
    {
      id: "w2",
      titel: "Woche 3: Netzwerkeffekte I",
      abschnitt: "VL 29.10., Tutorium 2 am 05.11.2026",
      seiten: "Part C, Folie 5–28 und 35–43",
      quellen: [
        { name: "Vorlesung Part C: Network Effects", pfad: "material/PE/Vorlesung/PE_Part_C_Network_Effects.pdf" },
        { name: "Tutorial 2: Aufgaben", pfad: "material/PE/Tutorien/PE_Tutorial_2.pdf" },
        { name: "Tutorial 2: Lösung", pfad: "material/PE/Tutorien/PE_Tutorial_2_Solution.pdf" }
      ],
      lektionen: [
        { titel: "Was ein Netzwerkeffekt ist und was nicht",
          text: [
            "Ein externer Effekt entsteht, wenn das Handeln einer Person andere betrifft, ohne dass dafür bezahlt wird. Dein Nachbar pflanzt einen schönen Garten, du freust dich mit und zahlst nichts. Ein Netzwerkeffekt ist ein Spezialfall davon (network externality): Wer einem Netzwerk beitritt, macht es für alle anderen wertvoller, ohne dafür Geld zu bekommen.",
            "Definition aus Part C: Ein Produkt wird für seine Nutzer wertvoller, je mehr Leute es nutzen. Standardbeispiel ist das Telefon. Ein einziges Telefon ist nutzlos, mit jedem weiteren Anschluss kannst du mehr Menschen erreichen.",
            "Vorsicht, Folie 9 (Lime) sagt: „Network effect ≠ product value due to market size“. Wenn ein E-Scooter-Verleih in einer großen Stadt gut läuft, nur weil dort viele Menschen wohnen, ist das noch kein Netzwerkeffekt. Der liegt erst vor, wenn mein Nutzen steigt, weil andere das Produkt ebenfalls nutzen.",
            "Meist gilt abnehmender Grenznutzen. Grenznutzen ist der Zusatznutzen der nächsten Einheit. Der zehnte Freund im Messenger bringt dir viel, der zehntausendste Fremde kaum etwas. Die Nutzenkurve ist deshalb konkav: Sie steigt, aber immer flacher.",
            "Es gibt auch negative Netzwerkeffekte: Statusgüter (eine Luxustasche verliert ihren Reiz, wenn alle sie haben), Stau (jedes weitere Auto auf der Autobahn bremst alle) und Dilemma-Güter, für die die Folie Waffen nennt."
          ],
          merke: "Netzwerkeffekt = mein Nutzen steigt, weil andere dasselbe Produkt nutzen. Ein großer Markt allein ist noch keiner." },
        { titel: "Direkte und indirekte Netzwerkeffekte",
          text: [
            "Direct network effect: Der Wert entsteht durch direkte Interaktion mit anderen Nutzern. Mehr Leute bei WhatsApp heißt, ich kann mehr Leuten schreiben. Beispiele der Folie: Telefon, Fax, soziale Netzwerke.",
            "Indirect network effect: Der Wert entsteht über einen Umweg. Mehr Nutzer locken mehr Anbieter von Komplementen an. Komplemente sind Ergänzungsprodukte, die man zusätzlich braucht, so wie Spiele zur Konsole. Mehr Nutzer eines Dateiformats führen zu mehr Programmen, die es lesen können. Beispiele der Folie: Standards, OpenOffice, LaTeX.",
            "Prüffrage für die Klausur: Habe ich etwas davon, dass ich mit den anderen Nutzern direkt in Kontakt trete? Dann direkt. Habe ich etwas davon, weil wegen der vielen Nutzer mehr Ergänzungen entstehen? Dann indirekt. Bei zweiseitigen Plattformen heißt der indirekte Effekt auch cross-side effect (Woche 4)."
          ],
          merke: "Direkt = Wert durch die anderen Nutzer selbst. Indirekt = Wert durch mehr Komplemente, die wegen der vielen Nutzer entstehen." },
        { titel: "Zahlungsbereitschaft hängt von der Netzgröße ab",
          text: [
            "Die Zahlungsbereitschaft (willingness to pay, WTP) ist der höchste Preis, den eine Person gerade noch zahlen würde. Liegt der Preis darunter, kauft sie.",
            "Im normalen Markt hat jeder eine feste WTP. Sortiert man alle Käufer, entsteht die fallende Preis-Absatz-Funktion: Je niedriger der Preis, desto mehr kaufen.",
            "Im Netzwerkmarkt hängt die WTP zusätzlich davon ab, wie viele mitmachen. Die Vorlesung schreibt $WTP_i = a_i \\cdot n$. Der Index i steht für Person Nummer i. $a_i$ ist ihre a-priori-Bewertung, also wie sehr sie das Produkt an sich mag. n ist die Zahl der Nutzer.",
            "Das Problem: Beim Kauf weiß niemand, wie viele am Ende mitmachen. Jeder entscheidet nach seiner Erwartung. Darum geht es in den nächsten Lektionen."
          ],
          code: "Beispiel mit eigenen Zahlen: a_i = 0,5 €, Preis 4 €\n\nErwartet n = 6:   WTP = 0,5 · 6  = 3 €  -> kleiner als 4 €, kein Kauf\nErwartet n = 10:  WTP = 0,5 · 10 = 5 €  -> größer als 4 €, Kauf\n\nDieselbe Person, dasselbe Produkt. Nur die Erwartung ist anders.",
          merke: "Im Netzwerkmarkt kauft man nach erwarteter Nutzerzahl: WTP = a-priori-Bewertung mal Netzgröße." },
        { titel: "Demand-Demand-Funktion und die Gleichgewichte L, C, H",
          text: [
            "Die Demand-Demand-Funktion zeigt: Wenn alle eine Nachfrage $Q^X$ erwarten, wie viele kaufen dann tatsächlich (Q)? Auf der x-Achse steht die erwartete, auf der y-Achse die tatsächliche Nachfrage.",
            "Ein Gleichgewicht liegt dort, wo Erwartung und Wirklichkeit übereinstimmen, also $Q = Q^X$. Im Bild sind das die Schnittpunkte mit der 45°-Linie. Die 45°-Linie ist einfach die Linie, auf der x und y gleich sind. Unter $Q_{min}$ kauft niemand.",
            "Typisch gibt es drei Schnittpunkte: L (low, meist null Nutzer), C (critical) und H (high).",
            "Stabil heißt: Nach einer kleinen Störung läuft die Nachfrage von selbst zurück. Bild dazu: Eine Kugel in einer Mulde rollt zurück (stabil). Eine Kugel auf einer Hügelkuppe rollt bei der kleinsten Störung weg (instabil). L und H sind Mulden, C ist die Kuppe.",
            "Daraus folgt: Startet die Erwartung zwischen L und C, schrumpft die Nachfrage nach L. Zwischen C und H wächst sie nach H. Über H fällt sie zurück nach H. C ist deshalb die kritische Masse: Wer sie überschreitet, wächst von selbst."
          ],
          merke: "Gleichgewicht = Schnittpunkt mit der 45°-Linie. L und H stabil, C instabil. C ist die kritische Masse." },
        { titel: "Durchgerechnet: DuelUp (Tutorial 2, Ex. 2)",
          text: [
            "Acht mögliche Nutzer, Person i hat $WTP_i = \\sqrt{i \\cdot (n-1)}$. Das n − 1 steht da, weil man sich selbst nicht als Gegner zählt. Der Preis ist 3 €. Gekauft wird, wenn WTP ≥ 3.",
            "Statt Wurzeln zu ziehen, quadrierst du beide Seiten: $\\sqrt{i(n-1)} \\ge 3$ heißt $i \\cdot (n-1) \\ge 9$. Für jedes erwartete n zählst du, wie viele i das erfüllen.",
            "Für die stetige kritische Masse verbindest du die Punkte (2 | 0) und (3 | 4) mit einer Geraden. Steigung = (4 − 0) / (3 − 2) = 4. Die Gerade durch (2 | 0) ist y = 4(x − 2) = 4x − 8. Schnitt mit der 45°-Linie y = x: x = 4x − 8, also 3x = 8, x = 8/3 = 2,67."
          ],
          code: "Bedingung: i · (n-1) >= 9\n\nerwartet n | n-1 | kaufen alle i mit ... | tatsächlich\n    1      |  0  | keiner               | 0\n    2      |  1  | i >= 9 (gibt es nicht)| 0\n    3      |  2  | i >= 4,5 -> i = 5..8 | 4\n    4      |  3  | i >= 3   -> i = 3..8 | 6\n    5      |  4  | i >= 2,25 -> 3..8    | 6\n    6      |  5  | i >= 1,8 -> 2..8     | 7\n    7      |  6  | i >= 1,5 -> 2..8     | 7\n    8      |  7  | i >= 1,29 -> 2..8    | 7\n\nGleichgewicht = tatsächlich gleich erwartet: H = 7 (Zeile n = 7) und L = 0 (wer niemanden erwartet, kauft nicht).\nBei n = 8 kaufen nur 7, die Nachfrage fällt zurück auf H.\nAb 3 erwarteten Nutzern springt die Nachfrage auf 4 und läuft nach H.\nKritische Masse ganzzahlig: 3, stetig: 8/3 = 2,67.",
          merke: "Vorgehen: für jedes erwartete n die tatsächlichen Käufer zählen, dann die Stellen suchen, an denen beide gleich sind." },
        { titel: "Preis-Absatz-Funktion, Folgen und die Rechnung mit Marketingkosten",
          text: [
            "Für jeden Preis gibt es eine eigene Demand-Demand-Funktion. Ein höherer Preis senkt die tatsächliche Nachfrage. Trägt man für jeden Preis die Gleichgewichte C und H ein, entsteht ein umgekehrtes U (Rohlfs 1974). Der linke, steigende Ast kommt aus den instabilen C-Punkten, der rechte, fallende Ast aus den stabilen H-Punkten.",
            "Warum ein U? In kleinen Netzen ist der Nutzen gering, deshalb ist auch der mögliche Preis gering. In großen Netzen muss der Preis so niedrig sein, dass auch Leute mit niedriger a-priori-Bewertung kaufen.",
            "Folgen für den Markt: Es gibt eine kritische Masse, der Gewinner bekommt fast alles (winner-takes-all), Märkte driften zum Monopol, und Nutzer stecken fest (Lock-in). Strategien für den Start: unter Herstellkosten verkaufen, massives Marketing, lokal starten, Aktivität erzeugen, kaufen oder simulieren. Beispiel: Blu-ray setzte sich gegen HD-DVD durch.",
            "Tutorial 2, Ex. 3 rechnet das als Entscheidung: Bis zur kritischen Masse C muss die Firma jeden Nutzer mit x € Marketing gewinnen, danach wächst die Nachfrage von selbst bis H. Gewinn = Preis · H − x · C."
          ],
          code: "p = 10: C = 4, H = 20 (Tsd. Nutzer).  p = 16: C = 8, H = 16.\n\na) x = 10:  Gewinn = 10 · 20 - 10 · 4 = 200 - 40 = 160 Tsd. €\n\nb) Für welches x sind beide Preise gleich gut?\n   Preis 10:  200 - 4x\n   Preis 16:  16 · 16 - 8x = 256 - 8x\n   gleichsetzen: 200 - 4x = 256 - 8x\n   +8x auf beiden Seiten: 200 + 4x = 256\n   -200: 4x = 56  ->  x = 14 €\n   Probe: 200 - 4 · 14 = 144 und 256 - 8 · 14 = 144\n\nBei x < 14 ist der hohe Preis besser, bei x > 14 der niedrige,\nweil seine kritische Masse kleiner ist.",
          merke: "Gewinn mit kritischer Masse: π = p · H − x · C. Teures Marketing spricht für den Preis mit der kleineren kritischen Masse." },
        { titel: "Bass-Modell: wie sich ein neues Produkt verbreitet",
          text: [
            "Das Bass Diffusion Model (Bass 1969) beschreibt, wie schnell ein neues Produkt den Markt erobert. Adopter sind Leute, die das Produkt übernehmen. F ist der Anteil des Marktes, der schon adoptiert hat (0 = niemand, 1 = alle). 1 − F ist der Rest, der noch fehlt.",
            "Es gibt zwei Gründe, neu einzusteigen. p ist der Innovationskoeffizient: Leute kaufen wegen äußerer Einflüsse wie Werbung, egal was andere tun. q ist der Imitationskoeffizient: Leute kaufen, weil sie es bei anderen sehen, also Mundpropaganda. Hier stecken die Netzwerkeffekte.",
            "Neue Adopter pro Periode $= (p + q F)(1 - F)$. Lies es so: Von denen, die noch fehlen (1 − F), steigt der Anteil p + qF ein. Je mehr schon dabei sind (großes F), desto stärker der Imitationsteil. Ausmultipliziert: $p(1-F) + q(F - F^2)$, erster Teil Innovatoren, zweiter Imitatoren.",
            "Kumuliert, also aufaddiert, ergibt das eine S-Kurve: erst langsam, dann schnell, dann flach, weil kaum noch jemand übrig ist."
          ],
          code: "Diskret rechnen mit p = 0,1, q = 0,2, Start F = 0 (Tutorial 2, Ex. 4a)\nRegel: F_neu = F_alt + (p + q · F_alt) · (1 - F_alt)\n\nPeriode 1: (0,1 + 0,2 · 0)     · (1 - 0)     = 0,1    · 1     = 0,100  -> F = 0,100\nPeriode 2: (0,1 + 0,2 · 0,1)   · (1 - 0,1)   = 0,12   · 0,9   = 0,108  -> F = 0,208\nPeriode 3: (0,1 + 0,2 · 0,208) · (1 - 0,208) = 0,1416 · 0,792 = 0,112  -> F = 0,320\n...\nweiter: 0,432; 0,538; 0,634; 0,717; 0,786; 0,841; 0,883; 0,916\n-> F >= 0,9 erstmals in Periode 11",
          merke: "p = Werbung und äußere Einflüsse, q = Nachahmung und Netzwerkeffekte. Neue Adopter = (p + qF)(1 − F)." },
        { titel: "Bass-Modell analytisch: nach t auflösen",
          text: [
            "Statt Periode für Periode zu rechnen, gibt es eine Formel für den Anteil zum Zeitpunkt t: $F(t) = \\dfrac{1 - e^{-(p+q)t}}{1 + \\frac{q}{p} e^{-(p+q)t}}$. e ist die Eulersche Zahl (etwa 2,718). $e^{-(p+q)t}$ wird mit der Zeit immer kleiner, deshalb geht F gegen 1.",
            "Gefragt ist meist: Wann ist ein bestimmter Anteil erreicht? Dann setzt du F ein und löst nach t auf. Trick: Schreib für $e^{-(p+q)t}$ kurz E. Dann ist es eine einfache Gleichung in E.",
            "Zum Schluss brauchst du den natürlichen Logarithmus ln. ln ist die Umkehrung von e hoch: Aus $e^{y} = x$ folgt $y = \\ln x$.",
            "Grenzen des Modells (Folie 43): Die Parameter sind statisch, äußere Faktoren wie Wettbewerb oder Marketing fehlen, es setzt eine feste Marktgröße voraus, es kennt keine Netzwerkstruktur (wer kennt wen), betrachtet nur ein Produkt und bildet schnelle Technologiewechsel nicht ab."
          ],
          code: "p = 0,1, q = 0,2, gesucht t mit F = 0,9 (Tutorial 2, Ex. 4b)\np + q = 0,3, q/p = 2, Abkürzung E = e^(-0,3t)\n\n1. 0,9 = (1 - E) / (1 + 2E)\n2. mal Nenner:      0,9 · (1 + 2E) = 1 - E\n3. ausmultiplizieren: 0,9 + 1,8E = 1 - E\n4. E nach links, Zahlen nach rechts: 1,8E + E = 1 - 0,9  ->  2,8E = 0,1\n5. E = 0,1 / 2,8 = 0,0357\n6. e^(-0,3t) = 0,0357  ->  -0,3t = ln(0,0357) = -3,332\n7. t = -3,332 / -0,3 = 11,1 Perioden\n\nProbe: diskret war F in Periode 11 erstmals über 0,9. Passt.",
          merke: "Analytisch: F einsetzen, e-Term als E abkürzen, nach E lösen, dann ln nehmen." }
      ],
      zusammenfassung: [
        "Network effect: Ein Produkt wird für jeden Nutzer wertvoller, je mehr Leute es nutzen. Spezialfall externer Effekte. Nicht verwechseln mit „Produkt ist gut, weil Markt groß“ (Lime-Beispiel).",
        "Positive Netzwerkeffekte haben meist abnehmenden Grenznutzen (konkav). Negative: Status-/Luxusgüter, Stau (Autobahn, Internet), Dilemma-Güter (Waffen).",
        "Direct network effects: Wert durch direkte Interaktion mit anderen Nutzern (Telefon, Fax, Social Media). Indirect: mehr Nutzer → mehr Komplemente → höherer Wert (Standards, OpenOffice, LaTeX).",
        "Standardmarkt: Preis-Absatz-Funktion fällt. Netzwerkmarkt: Zahlungsbereitschaft hängt von der Nutzerzahl n ab, z. B. $WTP_i = a_i \\cdot n$ (a priori Bewertung mal Netzwerkgröße).",
        "Demand-Demand-Funktion: tatsächliche Nachfrage Q in Abhängigkeit von der erwarteten Nachfrage $Q^X$. Gleichgewichte, wo sie die 45°-Linie schneidet: L (low), C (critical), H (high). Unter $Q_{min}$ keine Nachfrage.",
        "Stabilität: Start zwischen L und C → Konvergenz nach L. Zwischen C und H → nach H. Über H → zurück nach H. L und H stabil, C instabil. C = kritische Masse.",
        "Preis-Absatz-Funktion im Netzwerkmarkt: umgekehrtes U. Linker Ast aus den instabilen C-Punkten, rechter Ast aus den stabilen H-Punkten. Kleine Netze: Netzwerkfaktor drückt den Preis. Große Netze: Preis muss den Nutzern mit niedriger a-priori-WTP folgen.",
        "Konsequenzen: kritische Masse, Winner-takes-all, Drift zum Monopol, Lock-in. Strategien in der Frühphase: unter Kosten verkaufen, massives Marketing, lokal starten, Aktivität erzeugen/kaufen/simulieren. Blu-ray vs. HD-DVD als Beispiel.",
        "Bass Diffusion Model (Bass 1969): Neue Adopter pro Periode $= (p + q F)(1 - F) = p(1-F) + q(F - F^2)$. p = Innovationskoeffizient (externe Einflüsse, Werbung), q = Imitationskoeffizient (Mundpropaganda, hier wirken Netzwerkeffekte). Kumulativ: S-Kurve.",
        "Grenzen des Bass-Modells: statische Parameter, keine externen Faktoren (Wettbewerb, Marketing), Sättigungsannahme, keine Netzwerkstruktur, nur ein Produkt, schnelle Technologiewechsel nicht abbildbar."
      ],
      aufgaben: [
        { titel: "Tutorial 2, Exercise 2: DuelUp, erwartete und tatsächliche Nachfrage", q: "Tutorial 2, Ex. 2",
          text: "8 potenzielle Nutzer, $WTP_i = \\sqrt{i \\cdot (n-1)}$, Preis p = 3 €. Kauf, wenn WTP ≥ 3. a) Tatsächliche Nachfrage je erwartetem n, Gleichgewichte. b) Kritische Masse (ganzzahlig). c) Kritische Masse C (stetig).",
          loesung: [
            "Für jedes erwartete n zählen, wie viele i eine WTP ≥ 3 haben, also $i \\cdot (n-1) \\ge 9$.",
            "n = 1: 0 | n = 2: 0 (höchste WTP $\\sqrt{8} = 2{,}83$) | n = 3: 4 (i ≥ 5) | n = 4: 6 (i ≥ 3) | n = 5: 6 | n = 6: 7 | n = 7: 7 | n = 8: 7.",
            "Stabile Gleichgewichte: L = 0, H = 7 (dort ist tatsächlich = erwartet).",
            "b) Ab 3 erwarteten Nutzern springt die Nachfrage auf 4 und läuft nach H. Kritische Masse: 3.",
            "c) Zwischen n = 2 (Nachfrage 0) und n = 3 (Nachfrage 4) Gerade $y = 4x - 8$. Schnitt mit 45°-Linie: $x = 4x - 8 \\Rightarrow x = 8/3 = 2{,}67$."
          ] },
        { titel: "Tutorial 2, Exercise 3: Kritische Masse und Marketing", q: "Tutorial 2, Ex. 3",
          text: "Aus der Grafik: bei p = 10 liegt C bei 4 und H bei 20 (Tsd. Nutzer), bei p = 16 liegt C bei 8 und H bei 16. Marketing kostet x € pro Nutzer bis zur kritischen Masse. a) Gewinn bei x = 10, p = 10? b) Für welches x sind beide Preise gleich gut?",
          loesung: [
            "Gewinn = Preis · H − x · C.",
            "a) $10 \\cdot 20 - 10 \\cdot 4 = 200 - 40 = 160$ → 160.000 €.",
            "b) $200 - 4x = 256 - 8x \\Rightarrow 4x = 56 \\Rightarrow x = 14$. Gewinn $200 - 56 = 144$ → 144.000 €.",
            "Bei x < 14 ist der hohe Preis besser, bei x > 14 der niedrige (weil die kritische Masse dort kleiner ist)."
          ] },
        { titel: "Tutorial 2, Exercise 4: Bass-Modell, 90 % Sättigung", q: "Tutorial 2, Ex. 4",
          text: "p = 0,1, q = 0,2. a) Wann ist F ≥ 0,9 (numerisch)? b) Analytisch mit $F(t) = \\dfrac{1 - e^{-(p+q)t}}{1 + \\frac{q}{p} e^{-(p+q)t}}$. c) Interpretation von p und q.",
          loesung: [
            "a) Iteration $F_t = F_{t-1} + (p + q F_{t-1})(1 - F_{t-1})$: 0,100; 0,208; 0,320; 0,432; 0,538; 0,634; 0,717; 0,786; 0,841; 0,883; 0,916 → in Periode 11.",
            "b) $0{,}9(1 + 2e^{-0{,}3t}) = 1 - e^{-0{,}3t} \\Rightarrow 2{,}8 e^{-0{,}3t} = 0{,}1 \\Rightarrow e^{-0{,}3t} = 0{,}0357$.",
            "$t = \\ln(0{,}0357) / (-0{,}3) = 11{,}1$.",
            "c) p: Adoption durch externe Einflüsse (Werbung), unabhängig von anderen. q: Adoption durch Kontakt mit Nutzern (Mundpropaganda). Hier stecken die Netzwerkeffekte: höheres q → steilere S-Kurve, schnellere Sättigung."
          ] }
      ],
      karten: [
        { f: "Definition network effect?", a: "Ein Produkt/Service wird für seine Nutzer wertvoller, je mehr Leute es nutzen. Spezialfall externer Effekte (network externalities): Wer beitritt, nützt allen anderen, ohne dafür bezahlt zu werden.", q: "Part C, Folie 5, 13" },
        { f: "Direct vs. indirect network effects mit Beispielen?", a: "Direct: Wert durch direkte Interaktion mit anderen Nutzern (Telefon, Fax, Social Networks). Indirect: mehr Nutzer → mehr Komplemente → mehr Wert (Standards, OpenOffice, LaTeX, AppStore).", q: "Part C, Folie 27" },
        { f: "Nenne Produkte mit negativen Netzwerkeffekten.", a: "Luxus-/Statusgüter (conspicuous consumption), Stau-Märkte (Autobahn, Internet), Dilemma-Güter (Waffen).", q: "Part C, Folie 28" },
        { f: "Typische Form des Nutzenzuwachses bei positiven Netzwerkeffekten?", a: "Abnehmender Grenznutzen (konkav): jeder weitere Nutzer bringt weniger zusätzlichen Wert, weil man mit fernen Nutzern kaum zu tun hat.", q: "Part C, Folie 13, 27" },
        { f: "Was zeigt die Demand-Demand-Funktion?", a: "Die tatsächliche Nachfrage Q in Abhängigkeit von der erwarteten Nachfrage $Q^X$. Gleichgewichte liegen auf der 45°-Linie (Q = $Q^X$).", q: "Part C, Folie 20–21" },
        { f: "Gleichgewichte L, C, H: welche sind stabil?", a: "L (low) und H (high) stabil: kleine Abweichungen laufen zurück, wie eine Kugel in der Mulde. C (critical) instabil: kleinste Abweichung führt nach L oder H, wie eine Kugel auf der Kuppe. C ist die kritische Masse.", q: "Part C, Folie 22" },
        { f: "Wohin konvergiert die Nachfrage bei Startwert zwischen C und H? Und über H?", a: "Zwischen C und H: nach H. Über H: zurück nach H. Zwischen L und C: nach L.", q: "Part C, Folie 22" },
        { f: "Was ändert eine robuste Grundnachfrage q1 an den Gleichgewichten?", a: "Weiter zwei stabile (L', H') und ein instabiles (C'), aber im niedrigen Gleichgewicht ist die Nachfrage jetzt positiv (q1 > 0).", q: "Part C, Folie 23" },
        { f: "Form der Preis-Absatz-Funktion im Netzwerkmarkt, und woher kommen ihre Äste?", a: "Umgekehrtes U. Linker Ast aus den instabilen C-Gleichgewichten, rechter Ast aus den stabilen H-Gleichgewichten (Rohlfs 1974). Höchster Preis irgendwo in der Mitte: Kleine Netze sind wenig wert, große müssen auch Leute mit niedriger Bewertung überzeugen.", q: "Part C, Folie 24–25" },
        { f: "Strategien, um in Netzwerkmärkten die kritische Masse zu erreichen?", a: "Unter Herstellkosten verkaufen, massives Marketing, lokal starten, Aktivität erzeugen/kaufen/simulieren. Scheitert man an der kritischen Masse, hält sich das Produkt nicht.", q: "Part C, Folie 28" },
        { f: "Key properties von Märkten mit Netzwerkeffekten?", a: "Kritische Masse, Winner-takes-it-all, natürliche Drift zum Monopol, wettbewerbsfeindliche Tendenzen, Lock-in (Nutzer stecken fest, weil ein Wechsel sie ihr Netzwerk kosten würde).", q: "Part C, Folie 10" },
        { f: "Bass-Modell: Was sind p und q?", a: "p = coefficient of innovation (externe Einflüsse, Werbung, unabhängig von anderen). q = coefficient of imitation (Mundpropaganda, Kontakt mit Nutzern). Beide > 0.", q: "Part C, Folie 35, 39" },
        { f: "Bass-Modell: Neue Adopter pro Periode?", a: "$(p + qF)(1 - F) = p(1-F) + q(F - F^2)$. Erster Teil: Innovatoren, zweiter: Imitatoren.", q: "Part C, Folie 40" },
        { f: "Welcher Bass-Parameter hängt mit Netzwerkeffekten zusammen, und wie?", a: "q. Je mehr schon nutzen, desto mehr Imitatoren kommen. Höheres q → steilere S-Kurve, schnellere Sättigung.", q: "Tutorial 2, Ex. 4c" },
        { f: "Vier Limitations des Bass-Modells?", a: "Statische Parameter; keine externen Faktoren (Wettbewerb, Marketing, Regulierung); Sättigungsannahme; keine Netzwerkstruktur; nur ein Produkt zur Zeit; schnelle Technologiewechsel.", q: "Part C, Folie 43" }
      ],
      quiz: [
        { typ: "mc", q: "Part C, Folie 22", frage: "Die erwartete Nachfrage liegt knapp unter dem kritischen Gleichgewicht C. Was passiert?",
          optionen: ["Sie konvergiert nach H", "Sie konvergiert nach L", "Sie bleibt bei C", "Sie schwankt dauerhaft"],
          richtig: 1, erklaerung: "Zwischen L und C fällt die Nachfrage nach L: Es kaufen weniger als erwartet, also sinkt die Erwartung weiter. C ist instabil." },
        { typ: "mc", q: "Part C, Folie 27", frage: "Mehr Nutzer eines Dateiformats führen zu mehr kompatibler Software. Welcher Effekt?",
          optionen: ["Direct network effect", "Indirect network effect", "Negative network effect", "Kein Netzwerkeffekt, nur Marktgröße"],
          richtig: 1, erklaerung: "Der Wert steigt über Komplemente (Software), nicht über direkte Interaktion." },
        { typ: "mc", q: "Part C, Folie 24", frage: "Woraus ergibt sich der linke (aufsteigende) Ast der umgekehrt-U-förmigen Preis-Absatz-Funktion?",
          optionen: ["Aus den stabilen Gleichgewichten H", "Aus den instabilen Gleichgewichten C", "Aus den Gleichgewichten L", "Aus der a-priori-Zahlungsbereitschaft allein"],
          richtig: 1, erklaerung: "Links C (instabil), rechts H (stabil)." },
        { typ: "zahl", q: "Tutorial 2, Ex. 2", frage: "DuelUp: $WTP_i = \\sqrt{i(n-1)}$, i = 1…8, Preis 3 €. Wie viele Nutzer kaufen tatsächlich, wenn alle n = 4 erwarten?",
          loesung: 6, toleranz: 0, einheit: "Nutzer", erklaerung: "$i \\cdot 3 \\ge 9 \\Rightarrow i \\ge 3$, also i = 3…8 = 6 Nutzer." },
        { typ: "zahl", q: "Tutorial 2, Ex. 2c", frage: "Gleiches Beispiel. Kritische Masse C bei stetiger Betrachtung (2 Nachkommastellen)?",
          loesung: 2.67, toleranz: 0.01, einheit: "Nutzer", erklaerung: "Gerade zwischen (2 | 0) und (3 | 4): $y = 4x - 8$. Mit $y = x$: $x = 8/3 = 2{,}67$." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "DuelUp senkt den Preis auf 2 €. Wie viele kaufen tatsächlich, wenn alle n = 2 erwarten?",
          loesung: 5, toleranz: 0, einheit: "Nutzer", erklaerung: "$\\sqrt{i \\cdot 1} \\ge 2 \\Rightarrow i \\ge 4$, also i = 4…8 = 5. Der niedrigere Preis senkt die kritische Masse." },
        { typ: "zahl", q: "Tutorial 2, Ex. 3a", frage: "p = 10: C = 4, H = 20 (Tsd. Nutzer). Marketing 10 € je Nutzer bis C. Gewinn in H (in Tsd. €)?",
          loesung: 160, toleranz: 0, einheit: "Tsd. €", erklaerung: "$10 \\cdot 20 - 10 \\cdot 4 = 160$" },
        { typ: "zahl", q: "Tutorial 2, Ex. 3b", frage: "p = 10 (C = 4, H = 20) vs. p = 16 (C = 8, H = 16). Bei welchen Marketingkosten x je Nutzer sind beide gleich gut?",
          loesung: 14, toleranz: 0, einheit: "€", erklaerung: "$200 - 4x = 256 - 8x \\Rightarrow x = 14$, Gewinn je 144 Tsd. €." },
        { typ: "zahl", q: "Tutorial 2, Ex. 4b", frage: "Bass: p = 0,1, q = 0,2. Nach wie vielen Perioden ist F = 0,9 (analytisch, 1 Nachkommastelle)?",
          loesung: 11.1, toleranz: 0.05, einheit: "Perioden", erklaerung: "$2{,}8 e^{-0{,}3t} = 0{,}1 \\Rightarrow t = \\ln(0{,}0357)/(-0{,}3) = 11{,}1$" },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Bass diskret: p = 0,05, q = 0,45, F(0) = 0. Wie groß ist F(2) (4 Nachkommastellen)?",
          loesung: 0.1189, toleranz: 0.0001, einheit: "", erklaerung: "F(1) = 0,05. Neu in Periode 2: $(0{,}05 + 0{,}45 \\cdot 0{,}05)(1 - 0{,}05) = 0{,}0725 \\cdot 0{,}95 = 0{,}0689$. F(2) = 0,1189." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Bass analytisch: p = 0,05, q = 0,45. Wann ist F = 0,5 (2 Nachkommastellen)?",
          loesung: 4.80, toleranz: 0.01, einheit: "Perioden", erklaerung: "q/p = 9: $0{,}5(1 + 9e^{-0{,}5t}) = 1 - e^{-0{,}5t} \\Rightarrow 5{,}5 e^{-0{,}5t} = 0{,}5 \\Rightarrow t = \\ln(11)/0{,}5 = 4{,}80$" },
        { typ: "mc", q: "Part C, Folie 22", optionen: ["True", "False"], frage: "True or false? „The critical equilibrium C is stable.“",
          richtig: 1, erklaerung: "False. C ist instabil, L und H sind stabil." },
        { typ: "mc", q: "Part C, Folie 28", optionen: ["True", "False"], frage: "True or false? „Luxury goods can exhibit negative network effects.“",
          richtig: 0, erklaerung: "True. Status sinkt, wenn jeder das Produkt hat (conspicuous consumption)." },
        { typ: "mc", q: "Tutorial 2, Ex. 4c", optionen: ["True", "False"], frage: "True or false? „In the Bass model, network effects are captured by the coefficient of innovation p.“",
          richtig: 1, erklaerung: "False. Netzwerkeffekte stecken in q (Imitation), p ist der externe Einfluss." }
      ],
      formeln: [
        { name: "WTP im Netzwerkmarkt (Vorlesung)", tex: "WTP_i = a_i \\cdot n", text: "a_i a-priori-Bewertung, n Zahl der Nutzer. Im Tutorium: $WTP_i = \\sqrt{i(n-1)}$.", q: "Part C, Folie 19; Tutorial 2" },
        { name: "Gleichgewicht Demand-Demand", tex: "Q(Q^X) = Q^X", text: "Schnittpunkte mit der 45°-Linie: L, C, H.", q: "Part C, Folie 21" },
        { name: "Bass: neue Adopter", tex: "\\Delta F_t = (p + q F_{t-1})(1 - F_{t-1})", text: "Diskret iterieren: $F_t = F_{t-1} + \\Delta F_t$. Mal Marktgröße m ergibt Personen.", q: "Part C, Folie 40; Tutorial 2, Ex. 4" },
        { name: "Bass: kumulativ (analytisch)", tex: "F(t) = \\dfrac{1 - e^{-(p+q)t}}{1 + \\frac{q}{p}\\, e^{-(p+q)t}}", text: "Nach t auflösen: $e^{-(p+q)t}$ isolieren, dann ln.", q: "Tutorial 2, Ex. 4b", bsp: "p = 0,1, q = 0,2, F = 0,9 → t = 11,1" },
        { name: "Gewinn mit kritischer Masse", tex: "\\pi = p \\cdot H - x \\cdot C", text: "x Marketingkosten je Nutzer bis zur kritischen Masse C, danach Konvergenz nach H.", q: "Tutorial 2, Ex. 3" }
      ]
    },
    // ==================================================================
    {
      id: "w3",
      titel: "Woche 4: Netzwerkeffekte II, zweiseitige Märkte",
      abschnitt: "Tutorium 3 am 12.11.2026",
      seiten: "Part C, Folie 13–16 und 29–34",
      quellen: [
        { name: "Vorlesung Part C: Network Effects", pfad: "material/PE/Vorlesung/PE_Part_C_Network_Effects.pdf" },
        { name: "Tutorial 3: Aufgaben", pfad: "material/PE/Tutorien/PE_Tutorial_3.pdf" },
        { name: "Tutorial 3: Lösung", pfad: "material/PE/Tutorien/PE_Tutorial_3_Solution.pdf" }
      ],
      lektionen: [
        { titel: "Wie viel ist ein Netzwerk wert? Sarnoff",
          text: [
            "Ab jetzt geht es darum, wie der Wert eines Netzes mit der Zahl der Nutzer n wächst. Dafür gibt es drei klassische Gesetze. Sie sind Faustregeln, keine Naturgesetze.",
            "Sarnoff: $V = n$. V ist der Wert (value). Das passt zu Rundfunk: Ein Sender, viele Empfänger. Jeder neue Hörer bringt gleich viel zusätzlichen Wert, die Zuhörer reden aber nicht miteinander. Der Wert wächst linear, also im gleichen Tempo wie n."
          ],
          merke: "Sarnoff: V = n. Linear, passt zu Rundfunk (einer sendet, alle empfangen)." },
        { titel: "Metcalfe: Verbindungen zählen",
          text: [
            "Beim Telefon kann jeder mit jedem reden. Metcalfe zählt deshalb die möglichen Verbindungen.",
            "Herleitung: Jede der n Personen kann n − 1 andere anrufen. Das sind $n(n-1)$. Dabei ist jede Verbindung doppelt gezählt (Anna–Ben und Ben–Anna ist dieselbe Leitung). Darum teilst du durch 2: $V = n(n-1)/2$.",
            "Für große n ist das ungefähr $n^2/2$, man schreibt $V \\propto n^2$ (∝ heißt „wächst proportional zu“). Wert je Nutzer ist V / n, also ungefähr proportional zu n: Jeder Einzelne hat mehr davon, je größer das Netz."
          ],
          code: "Telefone | Verbindungen n(n-1)/2\n    2    | 2 · 1 / 2  = 1\n    5    | 5 · 4 / 2  = 10\n   12    | 12 · 11 / 2 = 66\n   20    | 20 · 19 / 2 = 190\n   40    | 40 · 39 / 2 = 780\n\nVerdopplung 20 -> 40: 780 / 190 = 4,1  (Wert etwa vervierfacht)",
          merke: "Metcalfe: V = n(n−1)/2 ∝ n². Doppelt so viele Nutzer, etwa viermal so viel Wert." },
        { titel: "Reed und n · ln n: Gruppen und realistische Netze",
          text: [
            "Reed zählt nicht Paare, sondern mögliche Gruppen. Jede Person ist in einer Gruppe entweder drin oder nicht. Bei n Personen gibt es dafür $2^n$ Möglichkeiten. Davon ziehst du die leere Gruppe ab (1) und die n Gruppen mit nur einer Person, denn eine Gruppe braucht mindestens 2. Ergebnis: $V = 2^n - n - 1$.",
            "Reed wächst extrem schnell und überschätzt den Wert stark, weil die allermeisten Gruppen nie entstehen. Niemand ist in Millionen WhatsApp-Gruppen.",
            "Realistischer ist laut Folie 16: $n^2$ für kleine Netze und $n \\cdot \\ln n$ für große. ln ist der natürliche Logarithmus, er wächst sehr langsam (ln 20 = 3,0, ln 40 = 3,7). Der Grund: In großen Netzen redest du nur mit einem begrenzten Kreis. Ferne Nutzer bringen dir wenig.",
            "Für die Klausur wichtig ist der Vergleich: Was passiert bei Verdopplung von n?"
          ],
          code: "n = 4:  Reed 2^4 - 4 - 1 = 16 - 4 - 1 = 11   n ln n = 4 · 1,386 = 5,5\nn = 10: Reed 1024 - 10 - 1 = 1.013            n ln n = 10 · 2,303 = 23,0\n\nVerdopplung 20 -> 40 (Tutorial 3, Ex. 2b)\nSarnoff:   40 / 20 = 2\nMetcalfe:  780 / 190 = 4,1\nn ln n:    147,6 / 59,9 = 2,5\nReed:      etwa Faktor 1.000.000 (2^20 = 1.048.576)",
          merke: "Reed = 2^n − n − 1 überschätzt. Realistisch: n² für kleine, n · ln n für große Netze." },
        { titel: "Zweiseitige Märkte: cross-side und same-side",
          text: [
            "Ein zweiseitiger Markt hat zwei Nutzergruppen, die einander brauchen: Käufer und Verkäufer bei eBay, Fahrgäste und Fahrer bei Uber, Nutzer und App-Entwickler im AppStore.",
            "Cross-side effect (seitenübergreifend): Die Größe der einen Seite beeinflusst den Nutzen der anderen. Mehr Restaurants bei Lieferando heißt mehr Auswahl für Kunden, mehr Kunden heißt mehr Bestellungen für Restaurants. Das ist der indirekte Netzwerkeffekt aus Woche 1.",
            "Same-side effect (gleiche Seite): Die Größe einer Seite wirkt auf dieselbe Seite. Mehr Restaurants konkurrieren miteinander (negativ für Restaurants). Mehr Kunden schreiben mehr Bewertungen (positiv für Kunden).",
            "Mehrseitige Plattformen haben mehr als zwei Seiten. YouTube: Zuschauer, Creator, Werbekunden. Hier gibt es auch einen negativen cross-side effect: Mehr Werbekunden bedeuten mehr Werbung, und das stört die Zuschauer."
          ],
          merke: "Cross-side = eine Seite wirkt auf die andere. Same-side = eine Seite wirkt auf sich selbst. Beide können positiv oder negativ sein." },
        { titel: "Gleichgewicht zweier Seiten ausrechnen",
          text: [
            "Eine Reaktionsfunktion sagt, wie groß eine Seite ist, wenn die andere eine bestimmte Größe hat. b(s) heißt: Zahl der Käufer b, wenn es s Verkäufer gibt. s(b) umgekehrt.",
            "Im Gleichgewicht passen beide zusammen: Die Käufer passen zu den Verkäufern und die Verkäufer zu den Käufern. Rechnerisch: eine Funktion in die andere einsetzen und lösen.",
            "Wenn eine Wurzel vorkommt, quadrierst du. Achtung: Quadrieren kann Scheinlösungen erzeugen, weil aus −2 und +2 beim Quadrieren beide 4 werden. Darum jede Lösung in die Ausgangsgleichung einsetzen und prüfen.",
            "Ob der Markt dorthin findet, zeigt die Iteration: Startwert nehmen und abwechselnd s und b einsetzen."
          ],
          code: "b(s) = 4s, s(b) = 3 + Wurzel(b) (Tutorial 3, Ex. 3)\n\n1. aus b = 4s folgt s = 0,25b\n2. einsetzen: 0,25b = 3 + Wurzel(b)  ->  Wurzel(b) = 0,25b - 3\n3. quadrieren: b = (0,25b - 3)^2 = 0,0625b^2 - 1,5b + 9\n4. alles auf eine Seite, mal 16: b^2 - 40b + 144 = 0\n5. pq-Formel: b = 20 ± Wurzel(400 - 144) = 20 ± 16  ->  b = 36 oder b = 4\n6. Probe b = 4:  Wurzel(4) = 2, aber 0,25 · 4 - 3 = -2  -> Scheinlösung\n   Probe b = 36: Wurzel(36) = 6 und 0,25 · 36 - 3 = 6   -> passt\n7. Gleichgewicht: b = 36, s = 0,25 · 36 = 9\n\nIteration ab b = 4: s = 5 -> b = 20 -> s = 7,47 -> b = 29,89 -> s = 8,47 -> ... Richtung (36 | 9)",
          merke: "Gleichgewicht: einsetzen, lösen, nach dem Quadrieren jede Lösung in der Ausgangsgleichung prüfen." },
        { titel: "Erlös maximieren mit einer Seite: R = p · (80 − p)",
          text: [
            "Vor dem zweiseitigen Pricing brauchst du das Werkzeug für eine Seite. Im Street-Food-Markt aus Tutorial 3 mieten Händler Stände. Bei einer Standgebühr $p_s$ kommen $s = 80 - p_s$ Händler. Je teurer, desto weniger kommen.",
            "Erlös heißt Preis mal Menge: $R_s = p_s \\cdot (80 - p_s)$. Zu niedriger Preis bringt wenig pro Stand, zu hoher Preis vertreibt die Händler. Irgendwo dazwischen liegt das Optimum.",
            "Ausmultipliziert ist $R_s = 80p_s - p_s^2$. Das ist eine nach unten geöffnete Parabel, also ein Hügel. Den höchsten Punkt findest du mit der Ableitung. Die Ableitung gibt die Steigung an. Ganz oben auf dem Hügel ist die Steigung null.",
            "Ableitungsregeln, die du brauchst: Aus $80p$ wird 80, aus $p^2$ wird $2p$, Konstanten fallen weg. Also $R_s' = 80 - 2p_s$. Null setzen ergibt $p_s = 40$.",
            "Warum ein Maximum und kein Minimum? Die zweite Ableitung ist −2, also negativ, der Hügel ist nach unten gekrümmt. Einfacher: Probier Nachbarwerte aus (Kasten)."
          ],
          code: "R(p) = p · (80 - p)\n\n1. ausmultiplizieren:  R = 80p - p^2\n2. ableiten:           R' = 80 - 2p\n3. null setzen:        80 - 2p = 0  ->  2p = 80  ->  p = 40\n4. Menge:              s = 80 - 40 = 40 Händler\n5. Erlös:              R = 40 · 40 = 1.600 €\n\nProbe mit Nachbarwerten:\np = 30: 30 · 50 = 1.500\np = 39: 39 · 41 = 1.599\np = 40: 40 · 40 = 1.600   <- höchster Wert\np = 41: 41 · 39 = 1.599\np = 50: 50 · 30 = 1.500",
          merke: "Erlös = Preis · Menge. Ausmultiplizieren, ableiten, Ableitung null setzen. Bei linearer Nachfrage a − p liegt das Optimum bei p = a/2." },
        { titel: "Naives Pricing: jede Seite einzeln",
          text: [
            "Jetzt kommt die zweite Seite dazu, die Besucher. Ihre Zahl ist $b = 100 + 0{,}5s - p_b$. $p_b$ ist der Eintritt. Das $0{,}5s$ ist der cross-side effect: Jeder zusätzliche Händler lockt einen halben Besucher mehr an, weil es mehr Auswahl gibt.",
            "Naiv heißt: Die Plattform optimiert erst die Händler wie in der letzten Lektion ($p_s = 40$, also s = 40) und dann die Besucher bei festem s.",
            "Mit s = 40 wird $b = 100 + 20 - p_b = 120 - p_b$. Das ist dieselbe Form wie vorher, nur mit 120 statt 80. Also liegt das Optimum bei der Hälfte: $p_b = 60$."
          ],
          code: "Händler:  p_s = 40, s = 40, R_s = 1.600\nBesucher: b = 120 - p_b\n          R_b = p_b · (120 - p_b) = 120p_b - p_b^2\n          R_b' = 120 - 2p_b = 0  ->  p_b = 60, b = 60, R_b = 3.600\n\nGesamterlös naiv: 1.600 + 3.600 = 5.200 €",
          merke: "Naiv werden beide Preise getrennt optimiert. Dabei wird übersehen, dass die Standgebühr auch die Besucherzahl beeinflusst." },
        { titel: "Gemeinsam optimieren: Quersubventionierung mit Ableitungen",
          text: [
            "Besser ist es, beide Preise zugleich zu wählen. Der Gesamterlös hängt jetzt von zwei Preisen ab: $R = p_s \\cdot s + p_b \\cdot b$.",
            "Du setzt $s = 80 - p_s$ in b ein: $b = 100 + 0{,}5(80 - p_s) - p_b = 140 - 0{,}5p_s - p_b$. Dann alles ausmultiplizieren.",
            "Bei zwei Variablen bildest du partielle Ableitungen. Das klingt schwer, ist aber einfach: Du leitest nach einer Variablen ab und behandelst die andere wie eine feste Zahl. Beide Ableitungen null setzen ergibt zwei Gleichungen mit zwei Unbekannten (FOC, first order conditions).",
            "Das Ergebnis: Die Standgebühr sinkt von 40 auf 24 €. Dadurch kommen mehr Händler (56 statt 40), das lockt mehr Besucher an, und die zahlen sogar mehr Eintritt (64 statt 60 €). Die Händlerseite wird also billiger gemacht, damit die Besucherseite mehr bringt. Das ist Quersubventionierung, und der Gesamterlös steigt von 5.200 auf 5.440 €."
          ],
          code: "R = p_s · (80 - p_s) + p_b · (140 - 0,5p_s - p_b)\n  = 80p_s - p_s^2 + 140p_b - 0,5p_s·p_b - p_b^2\n\nAbleitung nach p_s (p_b gilt als Zahl): 80 - 2p_s - 0,5p_b = 0   (I)\nAbleitung nach p_b (p_s gilt als Zahl): 140 - 2p_b - 0,5p_s = 0  (II)\n\n(I) nach p_s umstellen:  p_s = 40 - 0,25p_b\nin (II) einsetzen:       140 - 2p_b - 0,5 · (40 - 0,25p_b) = 0\n                         140 - 2p_b - 20 + 0,125p_b = 0\n                         120 = 1,875p_b  ->  p_b = 64\nzurück in (I):           p_s = 40 - 0,25 · 64 = 24\n\nMengen: s = 80 - 24 = 56, b = 140 - 0,5 · 24 - 64 = 64\nErlös:  24 · 56 + 64 · 64 = 1.344 + 4.096 = 5.440 €  (naiv: 5.200 €)",
          merke: "Gemeinsam optimieren: R in beiden Preisen aufstellen, nach jedem Preis ableiten, beide null setzen, Gleichungssystem lösen." },
        { titel: "Einheitspreis und Surge Pricing",
          text: [
            "Was, wenn die Plattform von beiden Seiten denselben Preis p verlangen muss (Tutorial 3, Ex. 5a)? Dann kann sie keine Seite subventionieren.",
            "Mit $p_s = p_b = p$ wird $s = 80 - p$ und $b = 140 - 0{,}5p - p = 140 - 1{,}5p$. Erlös $R = p(80 - p) + p(140 - 1{,}5p) = 220p - 2{,}5p^2$.",
            "Das ist der schlechteste der drei Fälle, weil die Plattform die Seite mit dem starken Effekt auf die andere (hier die Händler) nicht billiger machen kann.",
            "Bei Uber zahlen Fahrgäste, und Fahrer erhalten Geld. Ist der Preis zu hoch, fahren wenige mit, Fahrer verdienen zu wenig und gehen. Ist er zu niedrig, lohnt sich Fahren nicht, Fahrer fehlen und Fahrgäste warten. Surge Pricing (Preisaufschlag bei hoher Nachfrage) gleicht das aus: Bei Regen oder nach Konzerten steigt der Preis, dadurch kommen mehr Fahrer auf die Straße."
          ],
          code: "R = 220p - 2,5p^2\nR' = 220 - 5p = 0  ->  p = 44\ns = 80 - 44 = 36, b = 140 - 1,5 · 44 = 74\nR = 44 · 36 + 44 · 74 = 1.584 + 3.256 = 4.840 €\n\nVergleich: gemeinsam 5.440 > naiv 5.200 > Einheitspreis 4.840",
          merke: "Ein Einheitspreis verschenkt Erlös, weil keine Seite quersubventioniert werden kann." }
      ],
      zusammenfassung: [
        "Netzwerkwert: Sarnoff $V = n$. Metcalfe $V \\propto n^2$, genauer Zahl der Verbindungen $n(n-1)/2$ (2 Telefone → 1, 5 → 10, 12 → 66), Wert je Nutzer ∝ n. Reed $V = 2^n - n - 1$ (mögliche Untergruppen). Realistisch: $n^2$ für kleine, $n \\ln n$ für große Netze.",
        "Bei großen Netzen wächst der Wert langsamer als $n^2$, weil man nicht mit allen kommuniziert, sondern mit einem begrenzten Kreis. Reed überschätzt stark, weil die meisten Untergruppen nie entstehen.",
        "Zweiseitiger Markt: Cross-side (indirect) effects: mehr Anbieter → mehr Wert für Konsumenten → mehr Konsumenten → mehr Wert für Anbieter. Dazu same-side effects (z. B. Konkurrenz unter Anbietern, negativ).",
        "Mehrseitige Plattformen: Lieferando (Restaurants, Kunden, Kuriere), YouTube (Zuschauer, Creator, Werbekunden; Werbung wirkt negativ auf Zuschauer).",
        "Gleichgewicht zweiseitiger Markt: Reaktionsfunktionen b(s) und s(b) (Größe einer Seite abhängig von der anderen) ineinander einsetzen. Konvergenz durch abwechselndes Einsetzen.",
        "Pricing: Naiv jede Seite einzeln optimieren ($p_A q_A(p_A) + p_B q_B(p_B)$). Besser gemeinsam optimieren (cross-subsidization): eine Seite billiger machen, damit die andere mehr zahlt. Gesamterlös steigt.",
        "Einheitspreis für beide Seiten ist schlechter, weil man nicht subventionieren kann. Bei Uber zahlen Fahrgäste und Fahrer erhalten: zu hoch → wenig Fahrgäste, Fahrer gehen; zu niedrig → Fahrer fehlen, Wartezeiten. Lösung: Surge Pricing (höherer Preis bei hoher Nachfrage lockt mehr Fahrer an)."
      ],
      aufgaben: [
        { titel: "Tutorial 3, Exercise 2: Netzwerkwert", q: "Tutorial 3, Ex. 2",
          text: "Sarnoff $V = n$, Metcalfe $V = n(n-1)/2$, Reed $V = 2^n - n - 1$, große Netze $V = n \\ln n$. a) Werte für n = 4, 10, 20, 40. b) Faktor bei Verdopplung 20 → 40? c) Welches Gesetz passt zu großen Plattformen?",
          loesung: [
            "Sarnoff: 4; 10; 20; 40. Metcalfe: 6; 45; 190; 780. Reed: 11; 1.013; 1.048.555; ≈ 1,1 · 10¹². n ln n: 5,5; 23,0; 59,9; 147,6.",
            "b) Sarnoff ×2 (Wert je Nutzer konstant). Metcalfe 780/190 ≈ 4,1 (Wert je Nutzer verdoppelt sich etwa). Reed ≈ ×1.000.000. n ln n: 147,6/59,9 ≈ 2,5 (Wert je Nutzer wächst nur mit ln n).",
            "c) n ln n: Nutzer reden mit einem begrenzten Kreis, entfernte Nutzer bringen wenig. Metcalfe passt zu kleinen Netzen, Reed überschätzt."
          ] },
        { titel: "Tutorial 3, Exercise 3: Gleichgewicht im zweiseitigen Markt", q: "Tutorial 3, Ex. 3",
          text: "$b(s) = 4s$, $s(b) = 3 + \\sqrt{b}$. b) Gleichgewicht? c) Start bei b = 4: fünf Schritte s, b, s, b, s.",
          loesung: [
            "b) $s = 0{,}25b$ einsetzen: $0{,}25b = 3 + \\sqrt{b} \\Rightarrow \\sqrt{b} = 0{,}25b - 3$. Quadrieren: $b^2 - 40b + 144 = 0 \\Rightarrow b = 20 \\pm 16$.",
            "b = 4 fällt weg ($\\sqrt{4} = 2 \\ne 0{,}25 \\cdot 4 - 3 = -2$, Scheinlösung durchs Quadrieren). Also b = 36, s = 9.",
            "c) b = 4 → s = 5 → b = 20 → s = 7,47 → b = 29,89 → s = 8,47. Läuft auf (36 | 9) zu."
          ] },
        { titel: "Tutorial 3, Exercise 4 und 5: Street-Food-Markt", q: "Tutorial 3, Ex. 4–5",
          text: "Händler $s(p_s) = 80 - p_s$, Besucher $b(p_b) = 100 + 0{,}5s - p_b$. a/b) Jede Seite einzeln optimieren. c/d) Gemeinsam optimieren. 5a) Ein Einheitspreis p für beide.",
          loesung: [
            "Einzeln: $R_s = p_s(80 - p_s)$ → $p_s = 40$, s = 40. Dann $R_b = p_b(120 - p_b)$ → $p_b = 60$, b = 60. Erlös $1.600 + 3.600 = 5.200$.",
            "Gemeinsam: $R = 80p_s - p_s^2 + 140p_b - 0{,}5p_s p_b - p_b^2$. Ableitungen: $80 - 2p_s - 0{,}5p_b = 0$ und $140 - 2p_b - 0{,}5p_s = 0$.",
            "Lösung: $p_s = 24$, $p_b = 64$. s = 56, b = 64. Erlös $1.344 + 4.096 = 5.440$ > 5.200: billigere Stände locken mehr Händler, das hebt die Zahlungsbereitschaft der Besucher (Quersubventionierung).",
            "Einheitspreis: $b = 140 - 1{,}5p$, $R = 220p - 2{,}5p^2$ → p = 44, s = 36, b = 74, R = 4.840. Am schlechtesten, weil keine Seite subventioniert werden kann."
          ] }
      ],
      karten: [
        { f: "Sarnoff, Metcalfe, Reed: was sagen die Gesetze?", a: "Sarnoff: Wert ∝ n (Rundfunk). Metcalfe: Wert ∝ n² (Zahl der Verbindungen n(n−1)/2). Reed: Wert ∝ 2ⁿ (mögliche Untergruppen, $2^n - n - 1$).", q: "Part C, Folie 14–15; Tutorial 3" },
        { f: "Metcalfe: Wie viele Verbindungen bei 2, 5 und 12 Telefonen?", a: "1, 10, 66. Formel $n(n-1)/2$. Wert je Nutzer ∝ n.", q: "Part C, Folie 14" },
        { f: "Welches Netzwerkwert-Gesetz ist für große Netze realistisch, und warum?", a: "$n^2$ für kleine, $n \\ln n$ für große Netze. Man kommuniziert nur mit einem begrenzten Kreis; zusätzliche ferne Nutzer bringen wenig (abnehmender Grenznutzen).", q: "Part C, Folie 16; Tutorial 3, Ex. 2c" },
        { f: "Cross-side vs. same-side network effects?", a: "Cross-side (seitenübergreifend): Wirkung einer Seite auf die andere (mehr Restaurants → mehr Wahl für Kunden). Same-side: innerhalb einer Seite (Restaurants konkurrieren, negativ; mehr Kunden → mehr Reviews, positiv).", q: "Part C, Folie 30–31; Tutorial 3, Ex. 1" },
        { f: "Beispiel für einen negativen cross-side effect?", a: "YouTube: mehr Werbekunden → mehr Werbung → weniger Nutzen für Zuschauer.", q: "Tutorial 3, Ex. 1" },
        { f: "Was profitiert wovon in einem two-sided market?", a: "Anbieter profitieren von vielen Konsumenten (Nachfrage), Konsumenten von vielen Anbietern (Angebot, Wettbewerb). Beispiele: eBay, Ride-Sharing, AppStore.", q: "Part C, Folie 31" },
        { f: "Naives vs. besseres Pricing im zweiseitigen Markt?", a: "Naiv: jede Seite mit ihrem eigenen optimalen Preis. Besser: beide Preise gemeinsam optimieren und eine Seite quersubventionieren (billiger machen, damit die andere mehr zahlt), weil die Nachfrage jeder Seite von der anderen abhängt (Parker & Van Alstyne 2005).", q: "Part C, Folie 32–33" },
        { f: "Wie findet man das Gleichgewicht bei b(s) und s(b)?", a: "Eine Funktion in die andere einsetzen und lösen. Nach Quadrieren Scheinlösungen prüfen! Konvergenz: abwechselnd s und b einsetzen.", q: "Tutorial 3, Ex. 3" },
        { f: "Warum bringt ein Einheitspreis für beide Seiten weniger Erlös?", a: "Weil die Plattform die Seite mit dem stärkeren Effekt auf die andere (z. B. Händler) nicht subventionieren kann. Street-Food: 4.840 statt 5.440.", q: "Tutorial 3, Ex. 5a" },
        { f: "Uber: was passiert bei zu hohem bzw. zu niedrigem Fahrpreis?", a: "Zu hoch: wenig Fahrgäste, Fahrer verdienen zu wenig und gehen, Wartezeiten steigen. Zu niedrig: Fahren lohnt nicht, Fahrer fehlen, Fahrgäste warten und gehen. Ausgleich: Surge Pricing.", q: "Tutorial 3, Ex. 5b" },
        { f: "Welche Seite subventioniert man bei mehrseitigen Plattformen?", a: "Die Seite, die die anderen Seiten anzieht und preissensibel ist. YouTube: Zuschauer gratis, Creator über Umsatzbeteiligung, Werbekunden zahlen.", q: "Tutorial 3, Ex. 1c" }
      ],
      quiz: [
        { typ: "zahl", q: "Tutorial 3, Ex. 2a", frage: "Metcalfe $V = n(n-1)/2$: Netzwerkwert bei n = 20?",
          loesung: 190, toleranz: 0, einheit: "", erklaerung: "$20 \\cdot 19 / 2 = 190$" },
        { typ: "zahl", q: "Tutorial 3, Ex. 2a", frage: "Reed $V = 2^n - n - 1$: Netzwerkwert bei n = 10?",
          loesung: 1013, toleranz: 0, einheit: "", erklaerung: "$1024 - 10 - 1 = 1.013$" },
        { typ: "zahl", q: "Tutorial 3, Ex. 2a", frage: "$V = n \\ln n$ bei n = 40 (1 Nachkommastelle)?",
          loesung: 147.6, toleranz: 0.05, einheit: "", erklaerung: "$40 \\cdot \\ln 40 = 40 \\cdot 3{,}689 = 147{,}6$" },
        { typ: "zahl", q: "Tutorial 3, Ex. 2b", frage: "Metcalfe: Um welchen Faktor steigt der Netzwerkwert von n = 20 auf n = 40 (1 Nachkommastelle)?",
          loesung: 4.1, toleranz: 0.05, einheit: "", erklaerung: "780 / 190 = 4,1. Der Wert je Nutzer verdoppelt sich etwa." },
        { typ: "zahl", q: "Tutorial 3, Ex. 3b", frage: "$b(s) = 4s$, $s(b) = 3 + \\sqrt{b}$. Wie viele Käufer b im Gleichgewicht?",
          loesung: 36, toleranz: 0, einheit: "Käufer", erklaerung: "$b^2 - 40b + 144 = 0 \\Rightarrow b = 36$ (b = 4 ist Scheinlösung). s = 9." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "$b(s) = 2s$, $s(b) = 2 + \\sqrt{b}$. Wie viele Käufer b im Gleichgewicht (2 Nachkommastellen)?",
          loesung: 10.47, toleranz: 0.01, einheit: "Käufer", erklaerung: "$0{,}5b = 2 + \\sqrt{b}$. Mit $x = \\sqrt{b}$: $0{,}5x^2 - x - 2 = 0 \\Rightarrow x = 1 + \\sqrt{5} = 3{,}236$. b = 10,47, s = 5,24." },
        { typ: "zahl", q: "Tutorial 3, Ex. 4c", frage: "Street-Food: $s = 80 - p_s$, $b = 100 + 0{,}5s - p_b$. Optimale Standgebühr $p_s$ bei gemeinsamer Optimierung?",
          loesung: 24, toleranz: 0, einheit: "€", erklaerung: "$80 - 2p_s - 0{,}5p_b = 0$ und $140 - 2p_b - 0{,}5p_s = 0$ → $p_s = 24$, $p_b = 64$." },
        { typ: "zahl", q: "Tutorial 3, Ex. 4d", frage: "Gleicher Markt, gemeinsam optimiert. Gesamterlös?",
          loesung: 5440, toleranz: 0, einheit: "€", erklaerung: "s = 56, b = 64: $24 \\cdot 56 + 64 \\cdot 64 = 1.344 + 4.096 = 5.440$ (einzeln nur 5.200)." },
        { typ: "zahl", q: "Tutorial 3, Ex. 5a", frage: "Gleicher Markt, ein Einheitspreis p für beide Seiten. Erlösmaximierendes p?",
          loesung: 44, toleranz: 0, einheit: "€", erklaerung: "$R = p(80-p) + p(140 - 1{,}5p) = 220p - 2{,}5p^2$ → p = 44, R = 4.840." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Flohmarkt: $s = 70 - p_s$, $b = 95 + 0{,}5s - p_b$. Optimales $p_b$ bei gemeinsamer Optimierung?",
          loesung: 60, toleranz: 0, einheit: "€", erklaerung: "$R = 70p_s - p_s^2 + 130p_b - 0{,}5p_s p_b - p_b^2$. FOC: $70 - 2p_s - 0{,}5p_b = 0$, $130 - 2p_b - 0{,}5p_s = 0$ → $p_s = 20$, $p_b = 60$. s = 50, b = 60, R = 4.600." },
        { typ: "zahl", q: "Eigene Übung (Zahlen neu)", frage: "Gleicher Flohmarkt, jede Seite einzeln optimiert. Gesamterlös (2 Nachkommastellen)?",
          loesung: 4389.06, toleranz: 0.01, einheit: "€", erklaerung: "$p_s = 35$, s = 35, $R_s = 1.225$. Besucher: $b = 112{,}5 - p_b$ → $p_b = 56{,}25$, $R_b = 3.164{,}06$. Summe 4.389,06 < 4.600." },
        { typ: "mc", q: "Tutorial 3, Ex. 3b", frage: "Beim Lösen von $\\sqrt{b} = 0{,}25b - 3$ erhältst du b = 36 und b = 4. Warum fällt b = 4 weg?",
          optionen: ["Weil b ganzzahlig sein muss", "Weil das Quadrieren eine Scheinlösung erzeugt: √4 = 2, aber 0,25·4 − 3 = −2", "Weil b kleiner als s wäre", "Weil das Gleichgewicht immer das größere ist"],
          richtig: 1, erklaerung: "Immer in die Ausgangsgleichung einsetzen und prüfen." },
        { typ: "mc", q: "Part C, Folie 16", optionen: ["True", "False"], frage: "True or false? „For large networks, n·log(n) is more realistic than Metcalfe’s n².“",
          richtig: 0, erklaerung: "True. n² für kleine, n log n für große Netze." },
        { typ: "mc", q: "Part C, Folie 33", optionen: ["True", "False"], frage: "True or false? „In two-sided markets, setting each side’s price separately always maximizes total revenue.“",
          richtig: 1, erklaerung: "False. Gemeinsame Optimierung mit Quersubventionierung bringt mehr (5.440 vs. 5.200)." }
      ],
      formeln: [
        { name: "Sarnoff", tex: "V(n) = n", text: "Rundfunk: Wert wächst linear.", q: "Part C, Folie 15" },
        { name: "Metcalfe", tex: "V(n) = \\dfrac{n(n-1)}{2} \\propto n^2", text: "Zahl der Verbindungen. Wert je Nutzer ∝ n.", q: "Part C, Folie 14", bsp: "n = 12: 66" },
        { name: "Reed", tex: "V(n) = 2^n - n - 1", text: "Mögliche Untergruppen mit mindestens 2 Mitgliedern.", q: "Part C, Folie 15; Tutorial 3" },
        { name: "Große Netze", tex: "V(n) = n \\cdot \\ln n", text: "Wert je Nutzer wächst nur mit ln n.", q: "Part C, Folie 16" },
        { name: "Zweiseitig: Gesamterlös", tex: "R = p_s \\cdot s(p_s) + p_b \\cdot b(p_b, s)", text: "Gemeinsam: partielle Ableitungen nach $p_s$ und $p_b$ null setzen, Gleichungssystem lösen.", q: "Part C, Folie 32–33; Tutorial 3, Ex. 4" },
        { name: "Gleichgewicht zweiseitig", tex: "b = b(s),\\; s = s(b) \\;\\Rightarrow\\; \\text{einsetzen und lösen}", text: "Nach Quadrieren Lösungen prüfen.", q: "Tutorial 3, Ex. 3" }
      ]
    },
    // ==================================================================
    {
      id: "w4",
      titel: "Woche 5: Trust and Reputation I",
      abschnitt: "VL 12.11.2026, Tutorium dazu am 03.12.2026",
      seiten: "Part D, Folie 1–34",
      quellen: [
        { name: "Vorlesung Part D: Trust and Reputation Systems I", pfad: "material/PE/Vorlesung/PE_Part_D_Trust_Reputation_I.pdf" }
      ],
      lektionen: [
        { titel: "Warum Plattformen Vertrauen brauchen",
          text: [
            "Auf Airbnb schläfst du in der Wohnung eines Fremden. Auf Kleinanzeigen überweist du Geld an jemanden, den du nie gesehen hast. Ohne Vertrauen findet keine dieser Transaktionen statt. Vertrauen ist deshalb die zentrale Voraussetzung für Online-Geschäfte zwischen Fremden.",
            "Die Definition von Mayer et al. (1995) hat drei Teile. Erstens: die Bereitschaft, sich verletzlich zu machen, also zu riskieren, dass man Schaden nimmt. Zweitens: in der Erwartung, dass der andere eine wichtige Handlung ausführt. Drittens: unabhängig davon, ob man ihn überwachen oder kontrollieren kann.",
            "Alltagsbeispiel: Du gibst deinen Wohnungsschlüssel einer Nachbarin, damit sie die Blumen gießt. Du machst dich verletzlich (sie könnte etwas mitnehmen), erwartest, dass sie gießt, und kannst nicht kontrollieren, was sie tut. Genau das ist Vertrauen. Könntest du alles kontrollieren, bräuchtest du keins."
          ],
          merke: "Trust = sich verletzlich machen in der Erwartung, dass der andere das Wichtige tut, ohne ihn kontrollieren zu können." },
        { titel: "Existing trust und required trust: die zwei Hebel",
          text: [
            "Stell dir eine Waage vor. Auf einer Seite liegt das vorhandene Vertrauen (existing trust), auf der anderen das nötige Vertrauen (required trust). Eine Transaktion klappt, wenn das vorhandene mindestens so groß ist wie das nötige.",
            "Eine Plattform hat deshalb zwei Hebel. Sie kann das vorhandene Vertrauen erhöhen: Reputationssysteme mit Bewertungen, aussagekräftige Profile, Background Checks (Hintergrundprüfungen). Oder sie kann das nötige Vertrauen senken: Versicherungen, Garantien, Erstattungsregeln.",
            "Beispiel: Airbnb führt eine Schadensversicherung für Gastgeber ein. Der Gastgeber muss dem Gast jetzt weniger vertrauen, weil ein Schaden ersetzt wird. Das senkt das required trust."
          ],
          merke: "Transaktion klappt, wenn existing trust ≥ required trust. Bewertungen erhöhen das eine, Versicherungen senken das andere." },
        { titel: "Vier Wege, wie Plattformen Vertrauen aufbauen",
          text: [
            "Teubner & Dann (2018) ordnen die Vertrauenssignale in vier Gruppen. Ein Signal ist eine Information, die etwas über eine Person verrät, das man sonst nicht sieht.",
            "Am Beispiel eines Airbnb-Profils, siehe Kasten. In der Klausur musst du ein Signal der richtigen Gruppe zuordnen können."
          ],
          code: "(1) Transaction-based       aus vergangenen Geschäften:\n                            Rating Score (4,8 Sterne), Text Reviews\n(2) Expressive user profile was die Person selbst über sich zeigt:\n                            Profilbild, Selbstbeschreibung\n(3) Identity verification   von der Plattform geprüft:\n                            E-Mail, Telefon, Ausweis, verknüpftes Social Network\n(4) Implicit information    fällt nebenbei an:\n                            „230 Transaktionen“, „Mitglied seit 2019“",
          merke: "Vier Kategorien: transaction-based, expressive profiles, identity verification, implicit information." },
        { titel: "Der Trust/Discrimination-Tradeoff",
          text: [
            "Ein Tradeoff ist ein Zielkonflikt: Mehr vom einen bedeutet weniger vom anderen.",
            "Profilfotos und persönliche Angaben schaffen Vertrauen, weil man sieht, mit wem man es zu tun hat. Dieselben Infos ermöglichen aber Diskriminierung, also Benachteiligung nach Aussehen, Herkunft oder Geschlecht. Ein Feldexperiment (Teubner 2022) hat das untersucht.",
            "Eine Plattform muss also abwägen: Wie viel persönliche Information zeigt sie und wann? Manche Plattformen zeigen das Foto erst nach der Buchungszusage."
          ],
          merke: "Persönliche Infos erhöhen Vertrauen und ermöglichen zugleich Diskriminierung." },
        { titel: "Reputation hat einen Preis: das hedonic pricing model",
          text: [
            "Wie viel Geld ist ein guter Ruf wert? Dafür nutzt die Forschung das hedonic pricing model (Lancaster 1966, Rosen 1974). Die Idee: Ein Preis ist eine Summe aus Beiträgen der Eigenschaften. Wie bei einer Pizza, deren Preis sich aus Grundpreis und Belägen zusammensetzt.",
            "Bei einer Wohnung sind die Beläge Lage, Größe, Etage und eben die Reputation. Man sammelt viele Angebote mit ihren Preisen und schätzt statistisch, wie viel jede Eigenschaft beiträgt. Dieser Beitrag heißt impliziter Preis der Eigenschaft.",
            "Annahme: Märkte sind effizient und im Gleichgewicht. Nur dann spiegelt sich der Wert jeder Eigenschaft im Preis wider.",
            "Grenzen: Das Modell braucht viele gute Daten. Fehlen wichtige Variablen oder ist die Funktionsform falsch, sind die Ergebnisse verzerrt (Fehlspezifikation). Die Annahmen (vollständige Konkurrenz, volle Information) sind unrealistisch. Eigenschaften, die nicht direkt gehandelt werden, etwa Umweltqualität, sind schwer zu bewerten. Dazu kommen Multikollinearität (Eigenschaften hängen untereinander zusammen) und Kausalität (macht der Ruf den Preis oder umgekehrt?).",
            "Auf Airbnb zeigt die Forschung, dass Preise von Bewertungen abhängen. Bewertungen haben zwei Dimensionen: valence (wie gut, also die Sternezahl) und volume (wie viele Bewertungen)."
          ],
          code: "Eigenes Rechenbeispiel, Zahlen erfunden, nur zur Veranschaulichung:\nPreis pro Nacht = 20 + 1,5 · m² + 12 · zentral (1 = ja, 0 = nein) + 5 · Sterne\n\nWohnung 40 m², zentral, 4,8 Sterne:\n20 + 1,5 · 40 + 12 · 1 + 5 · 4,8 = 20 + 60 + 12 + 24 = 116 €\nGleiche Wohnung, nicht zentral: 116 - 12 = 104 €\n\nLesart: Ein Stern mehr ist hier 5 € pro Nacht wert (impliziter Preis der Reputation).",
          merke: "Hedonic pricing zerlegt einen Preis in die Beiträge seiner Eigenschaften. So lässt sich der Geldwert von Reputation schätzen." },
        { titel: "Zu gut, um wahr zu sein: trust ~ v · C(v)",
          text: [
            "Man könnte meinen: Je besser das Rating, desto mehr Vertrauen. Die Daten zeigen aber, dass perfekte Bewertungen misstrauisch machen. Ein Hotel mit 5,0 Sternen aus 3 Bewertungen wirkt eher gekauft als eines mit 4,7 aus 300.",
            "Das Modell der Vorlesung: $\\text{trust} \\sim v \\cdot C(v)$. v ist die Valenz, also wie gut das Rating ist. C(v) ist die Glaubwürdigkeit (credibility), und die hängt selbst von v ab. Das Zeichen ∼ heißt „verhält sich wie“.",
            "Bis zu einer Schwelle $\\tau$ (tau) ist das Rating voll glaubwürdig. Darüber sinkt die Glaubwürdigkeit. Erste Version: Sie fällt auf null. Verfeinerte Version: Sie fällt linear bis auf ein Basisniveau b.",
            "Weil Vertrauen das Produkt aus Valenz und Glaubwürdigkeit ist, steigt es erst und fällt dann wieder. Das ist ein umgekehrtes U."
          ],
          code: "Eigenes Zahlenbeispiel (Werte frei gewählt):\nC = 1 bis zur Schwelle tau = 4,6; danach linear fallend bis Basis b = 0,6 bei v = 5,0\n\nv = 4,0:  C = 1,0  ->  trust ~ 4,0 · 1,0 = 4,00\nv = 4,5:  C = 1,0  ->  trust ~ 4,5 · 1,0 = 4,50\nv = 4,6:  C = 1,0  ->  trust ~ 4,6 · 1,0 = 4,60   <- höchstes Vertrauen\nv = 4,8:  C = 0,8  ->  trust ~ 4,8 · 0,8 = 3,84\nv = 5,0:  C = 0,6  ->  trust ~ 5,0 · 0,6 = 3,00\n\nC bei 4,8: halber Weg von 4,6 bis 5,0, also halber Abfall von 1,0 auf 0,6 = 0,8",
          merke: "Vertrauen = Valenz mal Glaubwürdigkeit. Über der Schwelle τ sinkt die Glaubwürdigkeit, darum ist Vertrauen ein umgekehrtes U." }
      ],
      zusammenfassung: [
        "Trust (Mayer et al. 1995): die Bereitschaft einer Partei, sich verletzlich gegenüber den Handlungen einer anderen zu machen, in der Erwartung, dass diese eine wichtige Handlung ausführt, unabhängig davon, ob man sie überwachen oder kontrollieren kann.",
        "Vertrauen ist zentrale Voraussetzung für Online-Transaktionen zwischen Fremden.",
        "Wie Plattformen Vertrauen aufbauen (Teubner & Dann 2018): (1) transaction-based (Rating Score, Text Reviews), (2) expressive user profiles (Profilbild, Selbstbeschreibung), (3) identity verification (E-Mail, Telefon, ID, Social Network), (4) implicit info (Anzahl Transaktionen, Mitglied seit).",
        "Zwei Hebel: Existing trust erhöhen (Reputationssysteme, aussagekräftige Profile, Background Checks) oder required trust senken (Versicherungen, Garantien, Erstattungsregeln).",
        "Trust/Discrimination-Tradeoff: Fotos und persönliche Infos schaffen Vertrauen, ermöglichen aber auch Diskriminierung (Feldexperiment Teubner 2022).",
        "Hedonic pricing model (Lancaster 1966, Rosen 1974): Preis eines Guts in den Wert seiner Eigenschaften zerlegen (Lage, Größe, Qualität, Reputation). Annahme: effiziente Märkte im Gleichgewicht. Grenzen: datenhungrig, Fehlspezifikation (fehlende Variablen), unrealistische Annahmen, Wahl der Funktionsform, schwer für nicht gehandelte Attribute.",
        "Reputation hat ökonomischen Wert: Auf Airbnb hängen Preise von Bewertungen ab. Zwei Dimensionen: valence (wie gut) und volume (wie viele).",
        "Ein Rating kann zu gut sein, um wahr zu sein. Modell: trust ~ v · C(v). Credibility C bleibt bis zu einer Schwelle τ hoch, fällt dann (linear bis zu einem Basisniveau b). Ergebnis: Vertrauen ist eine umgekehrte U-Funktion der Rating-Valenz.",
        "Agenda der Reihe (Teil II und III folgen): fake reviews, review inflation, signaling theory, Dimensionen von Vertrauen, Gesichter und Avatare, social reward."
      ],
      aufgaben: [],
      karten: [
        { f: "Trust-Definition nach Mayer et al. (1995)?", a: "Die Bereitschaft, sich gegenüber den Handlungen einer anderen Partei verletzlich zu machen, in der Erwartung, dass sie eine wichtige Handlung ausführt, unabhängig von Überwachung oder Kontrolle.", q: "Part D, Folie 6" },
        { f: "Vier Kategorien, wie Plattformen Vertrauen aufbauen?", a: "(1) Transaction-based: Rating Score, Text Reviews. (2) Expressive User Profiles: Profilbild, Selbstbeschreibung. (3) Identity Verification: E-Mail, Telefon, ID, Social Network. (4) Implicit Info: Anzahl Transaktionen, Mitglied seit.", q: "Part D, Folie 14" },
        { f: "Required trust vs. existing trust: zwei Hebel?", a: "Existing trust erhöhen (Reputationssysteme, Profile, Background Checks) oder required trust senken (Versicherungen, Garantien, Erstattung). Transaktion klappt, wenn existing ≥ required.", q: "Part D, Folie 17–18" },
        { f: "Was ist der Trust/Discrimination-Tradeoff?", a: "Persönliche Infos und Fotos erhöhen Vertrauen, weil man sieht, mit wem man es zu tun hat, ermöglichen aber Diskriminierung (z. B. nach Aussehen oder Herkunft).", q: "Part D, Folie 16" },
        { f: "Was macht das hedonic pricing model?", a: "Zerlegt den Preis eines Guts in den impliziten Wert seiner Eigenschaften (Lage, Größe, Etage, Reputation). Annahme: effiziente Märkte im Gleichgewicht. Basis: Lancaster 1966, Rosen 1974.", q: "Part D, Folie 20–22" },
        { f: "Limitations des hedonic pricing model?", a: "Datenhungrig, Fehlspezifikation durch fehlende Variablen oder falsche Funktionsform, unrealistische Annahmen (vollständige Konkurrenz, Gleichgewicht, volle Information), schwer für nicht gehandelte Attribute. Dazu Multikollinearität und Kausalität.", q: "Part D, Folie 20, 23" },
        { f: "Valence vs. volume von Bewertungen?", a: "Valence = Qualität, wie gut (Sternezahl). Volume = Quantität, wie viele Bewertungen. Beides zählt: 5,0 aus 3 Bewertungen überzeugt weniger als 4,7 aus 300.", q: "Part D, Folie 27–28" },
        { f: "Kann ein Rating zu gut sein? Modell?", a: "Ja. trust ~ v · C(v): Valenz gewichtet mit Credibility. C bleibt bis zur Schwelle τ hoch und fällt dann (linear bis Basisniveau b). Vertrauen ist eine umgekehrte U-Funktion der Valenz.", q: "Part D, Folie 31–34" }
      ],
      quiz: [
        { typ: "mc", q: "Part D, Folie 18", frage: "Airbnb führt eine Schadensversicherung für Gastgeber ein. Was passiert damit?",
          optionen: ["Existing trust steigt", "Required trust sinkt", "Rating-Valenz steigt", "Multi-homing-Kosten steigen"],
          richtig: 1, erklaerung: "Versicherungen und Garantien senken das nötige Vertrauen, weil ein Schaden ersetzt wird. Reputationssysteme erhöhen das vorhandene." },
        { typ: "mc", q: "Part D, Folie 14", frage: "„Mitglied seit 2019, 230 Transaktionen“ gehört zu welcher Kategorie?",
          optionen: ["Transaction-based", "Expressive user profile", "Identity verification", "Implicit information"],
          richtig: 3, erklaerung: "Implizite Infos. Rating Scores und Reviews wären transaction-based." },
        { typ: "mc", q: "Part D, Folie 33", frage: "Welche Form hat Vertrauen in Abhängigkeit von der Rating-Valenz im Credibility-Modell?",
          optionen: ["Linear steigend", "Konvex steigend", "Umgekehrtes U", "Konstant"],
          richtig: 2, erklaerung: "Über der Schwelle τ sinkt die Glaubwürdigkeit, das Produkt v · C(v) fällt wieder." },
        { typ: "mc", q: "Part D, Folie 20", frage: "Was ist die zentrale Annahme des hedonic pricing model?",
          optionen: ["Preise sind zufällig", "Märkte sind effizient und im Gleichgewicht, Eigenschaften spiegeln sich im Preis", "Nur die Marke bestimmt den Preis", "Käufer haben keine Information"],
          richtig: 1, erklaerung: "Nur dann lassen sich implizite Preise der Eigenschaften aus Marktpreisen schätzen." },
        { typ: "mc", q: "Part D, Folie 16", optionen: ["True", "False"], frage: "True or false? „Profile photos can increase trust but also enable discrimination.“",
          richtig: 0, erklaerung: "True. Das ist der Trust/Discrimination-Tradeoff." },
        { typ: "mc", q: "Part D, Folie 31", optionen: ["True", "False"], frage: "True or false? „A higher rating valence always increases trust.“",
          richtig: 1, erklaerung: "False. Zu gute Ratings verlieren Glaubwürdigkeit (too good to be true)." },
        { typ: "mc", q: "Part D, Folie 6", optionen: ["True", "False"], frage: "True or false? „According to Mayer et al., trust requires the ability to monitor the other party.“",
          richtig: 1, erklaerung: "False. Gerade unabhängig von Überwachung oder Kontrolle." }
      ],
      formeln: [
        { name: "Vertrauen und Glaubwürdigkeit", tex: "\\text{trust} \\sim v \\cdot C(v)", text: "v Rating-Valenz, C(v) Credibility: hoch bis Schwelle τ, danach fallend bis Basis b. Ergebnis: umgekehrtes U.", q: "Part D, Folie 32–33" },
        { name: "Hedonic pricing (Grundidee)", tex: "P = f(x_1, x_2, \\dots, x_k)", text: "Preis als Funktion der Eigenschaften x (Lage, m², Rating …). Implizite Preise = Beitrag jeder Eigenschaft.", q: "Part D, Folie 21" }
      ]
    }
    ,
    // ==================================================================
    {
      id: "w5",
      titel: "Woche 6: Trust and Reputation II (Fake Reviews, Review Inflation)",
      abschnitt: "VL 19.11.2026, Tutorium dazu am 03.12.2026",
      seiten: "Part D II, Folie 1–32",
      quellen: [
        { name: "Vorlesung Part D II: Trust and Reputation Systems", pfad: "material/PE/Vorlesung/PE_Part_D2_Trust_Reputation_II.pdf" }
      ],
      lektionen: [
        { titel: "Warum Bewertungen Geld wert sind",
          text: ["Erinnerung aus Woche 5: Auf Plattformen handeln Fremde miteinander. Bewertungen (reviews) ersetzen das Vertrauen, das man sonst nur zu Bekannten hat. Eine gute Bewertung bringt mehr Käufer und höhere Preise. Das ist der ökonomische Wert von Reputation (economic value of reputation).",
            "Wenn etwas Geld wert ist, entsteht ein Markt dafür. Genau das passiert mit Bewertungen: Man kann sie kaufen. Die Vorlesung zeigt Angebote für Twitter-Follower, App-Store-Bewertungen, Trustpilot-Sterne und Bewertungen auf Etsy, Lieferando oder Google. So etwas heißt Sekundärmarkt für Online-Reputation (secondary market for online reputation): Reputation wird nicht verdient, sondern gehandelt."],
          merke: "Was Geld wert ist, wird gefälscht. Bewertungen sind da keine Ausnahme." },
        { titel: "Fake Reviews: drei Formen der Manipulation",
          text: ["Eine Fake Review ist eine Bewertung, die nicht die echte Erfahrung eines echten Kunden wiedergibt. Laut Vorlesung manipulieren Firmen Bewertungen auf drei Arten:",
            "1. Positive Fake Reviews über sich selbst schreiben (lassen). 2. Negative Fake Reviews über Konkurrenten schreiben (lassen). Das heißt competitive downrating. 3. Eigene schlechte Bewertungen entfernen lassen. Das heißt suppression (Unterdrückung).",
            "Alltagsvergleich: Ein Restaurant lässt Freunde 5 Sterne geben (1), schickt Leute los, die beim Nachbarrestaurant 1 Stern geben (2), und meldet echte Kritik so lange als „unangemessen“, bis sie gelöscht ist (3)."],
          merke: "Manipulation: sich selbst hoch, Konkurrenz runter, Kritik weg." },
        { titel: "Gekaufte Bewertungen mit Gutschein",
          text: ["Ein häufiger Weg ist die Beilage im Paket: Eine Karte verspricht einen Gutschein (z. B. Amazon-Guthaben), wenn man eine 5-Sterne-Bewertung schreibt und einen Screenshot schickt. Die Folie nennt dazu Preise von etwa 10 € bzw. 30 € pro Bewertung.",
            "Für den Händler lohnt sich das, wenn eine bessere Bewertung mehr Umsatz bringt als die Gutscheine kosten. Für die Plattform und andere Käufer ist es schädlich: Die Sterne sagen nicht mehr, wie gut das Produkt wirklich ist. Bewertungen verlieren ihre Aufgabe als Signal für Qualität."],
          merke: "Incentivierte Bewertungen sind gekauft, auch wenn sie von echten Käufern stammen." },
        { titel: "Wie Plattformen Fake Reviews erkennen",
          text: ["Eine einzelne gefälschte Bewertung sieht oft echt aus. Verräterisch ist das Muster. Die Vorlesung zeigt dazu eine Tabelle: Für jedes Paar von Bewertern steht dort, wie viele Produkte beide bewertet haben. Normale Kunden haben fast nie viele Produkte gemeinsam. Haben zwei Konten aber z. B. 5 gleiche Produkte bewertet, ist das auffällig.",
            "Zeichnet man Bewerter und Produkte als Netzwerk (Graph), fallen solche Gruppen als dichte Klumpen auf: dieselben Konten bewerten immer wieder dieselben Produkte. So findet man Bewertungs-Ringe. Dienste wie ReviewMeta analysieren Bewertungen auf solche Auffälligkeiten.",
            "Neu ist das Problem der KI-generierten Bewertungen (AI-generated reviews): Texte, die ein Sprachmodell schreibt, klingen natürlich. Am Text allein sind sie schwer zu erkennen. Umso wichtiger wird das Muster im Netzwerk."],
          code: "Gemeinsam bewertete Produkte (Ausschnitt nach Folie 29)\n\n          Bewerter B  C  D\nBewerter A        2  1  2\nBewerter C           5  2   <- auffällig hoch\n\nNormal: 0 bis 2 gemeinsame Produkte\nRing:   viele gemeinsame Produkte, immer dieselben Konten",
          merke: "Fake Reviews findet man eher am Muster (wer bewertet was zusammen) als am einzelnen Text." },
        { titel: "Review Inflation: wenn alle Noten besser werden",
          text: ["Review Inflation heißt: Die durchschnittlichen Bewertungen auf einer Plattform steigen mit der Zeit, ohne dass die Qualität entsprechend steigt. Wie bei Schulnoten, wenn irgendwann fast alle eine 1 bekommen.",
            "Die Vorlesung zeigt das an einem Online-Arbeitsmarkt (Programmieren, Grafikdesign, Dateneingabe, Texte) nach Filippas, Horton und Golden (2017): Die durchschnittliche Bewertung von Freelancern stieg von 2007 bis 2016 deutlich. Auch Aussagen wie „würde wieder beauftragen“ wurden häufiger.",
            "Warum? Eine schlechte Bewertung hat Kosten für den, der sie gibt: Ärger, Gegenbewertung, schlechtes Gewissen. Wird es üblich, gut zu bewerten, wirkt eine normale Note plötzlich wie eine Kritik. Also geben alle noch bessere Noten. Folge: Fast alle haben Top-Werte, und die Bewertung unterscheidet kaum noch zwischen gut und schlecht."],
          merke: "Review Inflation: Durchschnitt steigt über die Zeit, die Bewertung verliert ihre Aussagekraft." },
        { titel: "Was das für Plattformen bedeutet",
          text: ["Bewertungen sind nur dann wertvoll, wenn sie glaubwürdig sind (Woche 5: trust ~ v · C(v)). Fake Reviews und Review Inflation senken genau diese Glaubwürdigkeit.",
            "Plattformen reagieren z. B. mit: Erkennung auffälliger Muster, Löschen gekaufter Bewertungen, nur verifizierten Käufern das Bewerten erlauben, und Darstellungen, die mehr zeigen als den Durchschnitt (Verteilung der Sterne, Anzahl der Bewertungen, Textinhalte).",
            "Für die Klausur kannst du die Kette so erklären: Reputation hat Wert, darum entsteht ein Markt für gefälschte Reputation, das senkt die Glaubwürdigkeit, und die Plattform muss dagegen etwas tun."],
          merke: "Wert, Fälschung, Glaubwürdigkeitsverlust, Gegenmaßnahmen: diese Kette musst du erklären können." }
      ],
      zusammenfassung: [
        "Reputation hat ökonomischen Wert. Darum gibt es Sekundärmärkte für Online-Reputation: gekaufte Follower, App-Store-Ratings, Trustpilot-Sterne, Bewertungen auf Google, Etsy, Lieferando.",
        "Fake Reviews: Bewertungen, die keine echte Erfahrung wiedergeben. Drei Manipulationen: positive Fake Reviews über sich, negative über Konkurrenten (competitive downrating), Entfernen eigener Kritik (suppression).",
        "Incentivierte Bewertungen: Gutscheinkarten im Paket für 5 Sterne, laut Folie etwa 10 € bis 30 € pro Bewertung.",
        "Erkennung über Muster: Bewerter-Paare mit vielen gemeinsam bewerteten Produkten, dichte Gruppen im Bewerter-Produkt-Netzwerk (Bewertungs-Ringe). Tools wie ReviewMeta.",
        "KI-generierte Bewertungen machen die Erkennung am Text schwerer.",
        "Review Inflation (Filippas, Horton & Golden 2017, Online-Arbeitsmarkt): Durchschnittsbewertungen steigen über die Jahre (2007–2016), Bewertungen unterscheiden kaum noch zwischen gut und schlecht.",
        "Ursache der Inflation: schlechte Bewertungen kosten den Bewertenden etwas, und was als „normal“ gilt, verschiebt sich nach oben."
      ],
      aufgaben: [],
      karten: [
        { f: "Was ist ein Sekundärmarkt für Online-Reputation?", a: "Ein Markt, auf dem Reputation gehandelt statt verdient wird: gekaufte Follower, Ratings, Sterne und Bewertungen. Er entsteht, weil Reputation Geld wert ist.", q: "Part D II, Folie 7–14" },
        { f: "Die drei Arten, wie Firmen Bewertungen manipulieren?", a: "Positive Fake Reviews über sich selbst, negative Fake Reviews über Konkurrenten (competitive downrating), eigene negative Bewertungen entfernen lassen (suppression).", q: "Part D II, Folie 15" },
        { f: "Was ist competitive downrating?", a: "Gezielt schlechte, gefälschte Bewertungen über Konkurrenten, um deren Reputation zu senken.", q: "Part D II, Folie 15" },
        { f: "Was ist suppression bei Bewertungen?", a: "Echte negative Bewertungen werden unterdrückt, also entfernt oder versteckt, damit der Schnitt besser aussieht.", q: "Part D II, Folie 15" },
        { f: "Was sind incentivierte Bewertungen? Beispiel?", a: "Bewertungen gegen Belohnung, z. B. eine Gutscheinkarte im Paket für eine 5-Sterne-Bewertung (laut Folie ca. 10 € bis 30 € pro Bewertung). Auch echte Käufer liefern so verzerrte Bewertungen.", q: "Part D II, Folie 6" },
        { f: "Woran erkennt man Bewertungs-Ringe?", a: "Am Muster: dieselben Konten bewerten auffällig viele gleiche Produkte. Im Netzwerk aus Bewertern und Produkten bilden sie dichte Gruppen.", q: "Part D II, Folie 29" },
        { f: "Warum sind KI-generierte Bewertungen ein Problem?", a: "Sie klingen natürlich und sind am Text kaum zu erkennen. Die Erkennung muss sich stärker auf Muster und Verhalten stützen.", q: "Part D II, Folie 21" },
        { f: "Was ist Review Inflation?", a: "Durchschnittliche Bewertungen steigen über die Zeit, ohne dass die Qualität entsprechend steigt. Bewertungen unterscheiden dann kaum noch zwischen gut und schlecht.", q: "Part D II, Folie 31–32" },
        { f: "Welche Studie zeigt Review Inflation, und wo?", a: "Filippas, Horton & Golden (2017), „Reputation in the long-run“: Online-Arbeitsmarkt (Programmieren, Design, Dateneingabe, Texte), steigende Bewertungen von 2007 bis 2016.", q: "Part D II, Folie 32" },
        { f: "Warum entsteht Review Inflation?", a: "Schlechte Bewertungen kosten den Bewertenden etwas (Ärger, Vergeltung, schlechtes Gewissen). Wenn gute Noten normal werden, wirkt eine mittlere Note wie Kritik, also bewerten alle noch besser.", q: "Part D II, Folie 32 (Erklärung ergänzt)" },
        { f: "Wie hängen Fake Reviews und Glaubwürdigkeit zusammen?", a: "Fake Reviews und Inflation senken die Glaubwürdigkeit (credibility) aller Bewertungen. Nach trust ~ v · C(v) sinkt damit das Vertrauen, auch in echte gute Bewertungen.", q: "Part D I/II" }
      ],
      quiz: [
        { typ: "mc", q: "Part D II, Folie 15", frage: "Ein Hotel lässt gezielt schlechte Bewertungen über das Hotel nebenan schreiben. Wie heißt das?",
          optionen: ["Suppression", "Competitive downrating", "Review Inflation", "Platform leakage"],
          richtig: 1, erklaerung: "Negative Fake Reviews über Konkurrenten heißen competitive downrating. Suppression wäre, eigene Kritik entfernen zu lassen." },
        { typ: "mc", q: "Part D II, Folie 29", frage: "Woran erkennt eine Plattform einen Bewertungs-Ring am ehesten?",
          optionen: ["An besonders langen Texten", "Daran, dass dieselben Konten auffällig viele gleiche Produkte bewerten", "An Bewertungen mit genau 3 Sternen", "An Bewertungen am Wochenende"],
          richtig: 1, erklaerung: "Normale Kunden teilen kaum Produkte. Viele gemeinsam bewertete Produkte bilden im Netzwerk dichte Gruppen." },
        { typ: "mc", q: "Part D II, Folie 32", frage: "Was beschreibt Review Inflation?",
          optionen: ["Bewertungen werden teurer", "Die Zahl der Bewertungen steigt", "Durchschnittsbewertungen steigen über die Zeit und verlieren Aussagekraft", "Bewertungen werden häufiger gelöscht"],
          richtig: 2, erklaerung: "Wie Noteninflation: fast alle bekommen Top-Werte, gut und schlecht sind kaum noch zu unterscheiden." },
        { typ: "mc", q: "Part D II, Folie 6", frage: "Eine Karte im Paket verspricht 10 € Gutschein für eine 5-Sterne-Bewertung. Was ist das Hauptproblem?",
          optionen: ["Der Käufer hat das Produkt nicht gekauft", "Die Bewertung ist durch die Belohnung verzerrt und sagt wenig über die Qualität", "Die Plattform verdient daran", "Das ist competitive downrating"],
          richtig: 1, erklaerung: "Auch echte Käufer bewerten dann besser als ihre Erfahrung. Die Sterne verlieren ihre Funktion als Qualitätssignal." },
        { typ: "mc", q: "Part D II, Folie 15", optionen: ["True", "False"], frage: "True or false? „Having one's own negative reviews removed is a form of review manipulation.“",
          richtig: 0, erklaerung: "True. Das ist suppression, die dritte Form neben positiven Fake Reviews über sich und negativen über Konkurrenten." },
        { typ: "mc", q: "Part D II, Folie 32", optionen: ["True", "False"], frage: "True or false? „Review inflation means that average ratings decrease over time.“",
          richtig: 1, erklaerung: "False. Die Durchschnittsbewertungen steigen über die Zeit." },
        { typ: "mc", q: "Part D II, Folie 7–14", optionen: ["True", "False"], frage: "True or false? „Because reputation has economic value, secondary markets for reputation emerge.“",
          richtig: 0, erklaerung: "True. Follower, Ratings und Sterne werden gehandelt." },
        { typ: "mc", q: "Part D II, Folie 21", optionen: ["True", "False"], frage: "True or false? „AI-generated reviews are easy to detect from their text alone.“",
          richtig: 1, erklaerung: "False. Sie klingen natürlich. Erkennung stützt sich stärker auf Muster und Verhalten." }
      ],
      formeln: []
    }
  ]
});
