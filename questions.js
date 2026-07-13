const questions = [
    // === SV-BEITRÄGE, WER ZAHLT SIE? ===
    {
        "id": 1,
        "question": "Wer trägt die Kosten für die gesetzliche Krankenversicherung?",
        "options": ["A) Nur der Arbeitnehmer", "B) Nur der Arbeitgeber", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte (paritätisch)", "D) Der Staat"],
        "correct_letter": "C",
        "explanation": "Die Beiträge zur gesetzlichen Krankenversicherung werden paritätisch von Arbeitgeber und Arbeitnehmer getragen, jeweils zur Hälfte (§ 249 SGB V)."
    },
    {
        "id": 2,
        "question": "Wer trägt die Kosten für die gesetzliche Rentenversicherung?",
        "options": ["A) Nur der Arbeitnehmer", "B) Nur der Arbeitgeber", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte", "D) Der Staat"],
        "correct_letter": "C",
        "explanation": "Die Beiträge zur gesetzlichen Rentenversicherung werden paritätisch von Arbeitgeber und Arbeitnehmer getragen (§ 158 SGB VI)."
    },
    {
        "id": 3,
        "question": "Wer trägt die Kosten für die Arbeitslosenversicherung?",
        "options": ["A) Nur der Arbeitnehmer", "B) Nur der Arbeitgeber", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte", "D) Der Staat"],
        "correct_letter": "C",
        "explanation": "Die Beiträge zur Arbeitslosenversicherung werden paritätisch von Arbeitgeber und Arbeitnehmer getragen (je 1,3 %)."
    },
    {
        "id": 4,
        "question": "Wer trägt die Kosten für die gesetzliche Unfallversicherung?",
        "options": ["A) Der Arbeitnehmer allein", "B) Arbeitgeber und Arbeitnehmer je zur Hälfte", "C) Der Arbeitgeber allein", "D) Der Staat"],
        "correct_letter": "C",
        "explanation": "Die Beiträge zur gesetzlichen Unfallversicherung (Berufsgenossenschaft) werden ausschließlich vom Arbeitgeber getragen (§ 150 SGB VII)."
    },
    {
        "id": 5,
        "question": "Wer trägt den Zusatzbeitrag zur Krankenversicherung?",
        "options": ["A) Nur der Arbeitnehmer", "B) Nur der Arbeitgeber", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte", "D) Der Staat"],
        "correct_letter": "C",
        "explanation": "Der Zusatzbeitrag zur Krankenversicherung wird seit 2019 paritätisch von Arbeitgeber und Arbeitnehmer getragen (§ 249 SGB V)."
    },
    {
        "id": 6,
        "question": "Wer trägt den Kinderlosenzuschlag in der Pflegeversicherung?",
        "options": ["A) Der Arbeitgeber", "B) Der kinderlose Arbeitnehmer allein", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte", "D) Der Staat"],
        "correct_letter": "B",
        "explanation": "Der Kinderlosenzuschlag in der Pflegeversicherung wird vom kinderlosen Arbeitnehmer allein getragen (§ 55 Abs. 3 SGB XI)."
    },
    {
        "id": 7,
        "question": "Wer zahlt den Arbeitgeberzuschuss zum Mutterschaftsgeld?",
        "options": ["A) Die Krankenkasse", "B) Der Arbeitgeber (erstattet über U2)", "C) Der Staat", "D) Die Bundesagentur für Arbeit"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber zahlt den Zuschuss zum Mutterschaftsgeld und erhält diesen über das Umlageverfahren U2 zu 100 % erstattet."
    },
    {
        "id": 8,
        "question": "Wer trägt die Umlage U1 (Krankheit)?",
        "options": ["A) Der Arbeitnehmer", "B) Der Arbeitgeber (erhält Erstattung bei Krankheit)", "C) Der Staat", "D) Die Krankenkasse"],
        "correct_letter": "B",
        "explanation": "Die Umlage U1 wird vom Arbeitgeber gezahlt. Bei Krankheit erhält er einen Teil der Entgeltfortzahlungskosten erstattet."
    },
    {
        "id": 9,
        "question": "Wer trägt die Umlage U2 (Mutterschutz)?",
        "options": ["A) Der Arbeitnehmer", "B) Der Arbeitgeber (erhält 100 % Erstattung)", "C) Der Staat", "D) Die Krankenkasse"],
        "correct_letter": "B",
        "explanation": "Die Umlage U2 wird vom Arbeitgeber gezahlt. Alle Aufwendungen für Mutterschutz werden zu 100 % erstattet."
    },
    {
        "id": 10,
        "question": "Wer trägt die Beiträge zur Berufsgenossenschaft?",
        "options": ["A) Der Arbeitnehmer", "B) Der Arbeitgeber allein", "C) Arbeitgeber und Arbeitnehmer je zur Hälfte", "D) Der Staat"],
        "correct_letter": "B",
        "explanation": "Die Beiträge zur Berufsgenossenschaft (Unfallversicherung) werden ausschließlich vom Arbeitgeber getragen."
    },
    // === KINDERLOSENZUSCHLAG, ZUSATZBEITRAG ===
    {
        "id": 11,
        "question": "Wie hoch ist der Kinderlosenzuschlag in der Pflegeversicherung?",
        "options": ["A) 0,3 %", "B) 0,6 %", "C) 1,0 %", "D) 1,5 %"],
        "correct_letter": "B",
        "explanation": "Kinderlose ab 23 Jahren zahlen einen Zuschlag von 0,6 % zum PV-Beitragssatz, den sie allein tragen."
    },
    {
        "id": 12,
        "question": "Ab welchem Alter gilt der Kinderlosenzuschlag?",
        "options": ["A) Ab 18 Jahren", "B) Ab 23 Jahren", "C) Ab 25 Jahren", "D) Ab 30 Jahren"],
        "correct_letter": "B",
        "explanation": "Der Kinderlosenzuschlag gilt für Mitglieder der sozialen Pflegeversicherung nach Vollendung des 23. Lebensjahres (§ 55 Abs. 3 SGB XI)."
    },
    {
        "id": 13,
        "question": "Wer ist vom Kinderlosenzuschlag befreit?",
        "options": ["A) Alle Arbeitnehmer", "B) Personen mit mindestens einem Kind unter 25 Jahren", "C) Nur Rentner", "D) Niemand"],
        "correct_letter": "B",
        "explanation": "Vom Kinderlosenzuschlag sind Personen befreit, die mindestens ein Kind unter 25 Jahren haben."
    },
    {
        "id": 14,
        "question": "Wie wirkt sich die Anzahl der Kinder auf den PV-Beitrag aus?",
        "options": ["A) Keine Auswirkung", "B) Ab dem 2. Kind mindert sich der AN-Anteil um je 0,25 %", "C) Mehr Kinder = höherer Beitrag", "D) Nur bei 3 Kindern"],
        "correct_letter": "B",
        "explanation": "Ab dem 2. Kind bis zum 5. Kind mindert sich der Beitragssatz des Arbeitnehmers für jedes Kind unter 25 Jahren um 0,25 Prozentpunkte."
    },
    {
        "id": 15,
        "question": "Wie hoch ist der durchschnittliche Zusatzbeitrag zur KV 2026?",
        "options": ["A) 0,6 %", "B) 1,7 %", "C) 2,0 %", "D) 2,5 %"],
        "correct_letter": "B",
        "explanation": "Der durchschnittliche Zusatzbeitrag der Krankenkassen liegt 2026 bei ca. 1,7 %."
    },
    {
        "id": 16,
        "question": "Wie wird der Zusatzbeitrag getragen?",
        "options": ["A) Nur vom Arbeitnehmer", "B) Nur vom Arbeitgeber", "C) Paritätisch von AG und AN", "D) Vom Staat"],
        "correct_letter": "C",
        "explanation": "Der Zusatzbeitrag wird seit 2019 paritätisch (hälftig) von Arbeitgeber und Arbeitnehmer getragen."
    },
    {
        "id": 17,
        "question": "Kann der Zusatzbeitrag zwischen Krankenkassen variieren?",
        "options": ["A) Nein, einheitlich für alle", "B) Ja, kassenindividuell", "C) Nur nach Bundesland", "D) Nur nach Alter"],
        "correct_letter": "B",
        "explanation": "Der Zusatzbeitrag ist kassenindividuell und kann je nach Krankenkasse unterschiedlich hoch sein."
    },
    {
        "id": 18,
        "question": "Was ist der allgemeine KV-Beitragssatz ohne Zusatzbeitrag?",
        "options": ["A) 7,3 %", "B) 14,6 %", "C) 15,5 %", "D) 18,6 %"],
        "correct_letter": "B",
        "explanation": "Der allgemeine Beitragssatz zur KV beträgt 14,6 % (je 7,3 % AG/AN). Hinzu kommt der Zusatzbeitrag."
    },
    {
        "id": 19,
        "question": "Wie hoch ist der PV-Beitragssatz ohne Kinderlosenzuschlag?",
        "options": ["A) 1,7 %", "B) 2,3 %", "C) 3,4 %", "D) 4,0 %"],
        "correct_letter": "C",
        "explanation": "Der Gesamtbeitragssatz zur Pflegeversicherung beträgt 3,4 % (je 1,7 % AG/AN)."
    },
    {
        "id": 20,
        "question": "Was passiert bei Wechsel der Krankenkasse mit dem Zusatzbeitrag?",
        "options": ["A) Zusatzbeitrag bleibt gleich", "B) Zusatzbeitrag der neuen Kasse gilt", "C) Zusatzbeitrag entfällt", "D) Zusatzbeitrag verdoppelt sich"],
        "correct_letter": "B",
        "explanation": "Bei Wechsel der Krankenkasse gilt der Zusatzbeitragssatz der neuen Krankenkasse."
    },
    // === URLAUBSGESETZ ===
    {
        "id": 21,
        "question": "Wie viele Werktage Urlaub gewährt das BUrlG bei einer 6-Tage-Woche?",
        "options": ["A) 20 Tage", "B) 24 Tage", "C) 30 Tage", "D) 18 Tage"],
        "correct_letter": "B",
        "explanation": "Das Bundesurlaubsgesetz gewährt 24 Werktage Urlaub bei einer 6-Tage-Woche (§ 3 BUrlG)."
    },
    {
        "id": 22,
        "question": "Wie viele Arbeitstage Urlaub sind bei einer 5-Tage-Woche gesetzlich vorgesehen?",
        "options": ["A) 18 Tage", "B) 20 Tage", "C) 24 Tage", "D) 25 Tage"],
        "correct_letter": "B",
        "explanation": "Umgerechnet auf eine 5-Tage-Woche ergeben 24 Werktage 20 Arbeitstage gesetzlichen Mindesturlaubs."
    },
    {
        "id": 23,
        "question": "Wann entsteht der volle Urlaubsanspruch?",
        "options": ["A) Ab dem ersten Tag", "B) Nach 6 Monaten Wartezeit", "C) Nach 1 Jahr", "D) Nach der Probezeit"],
        "correct_letter": "B",
        "explanation": "Der volle Urlaubsanspruch entsteht nach einer Wartezeit von 6 Monaten (§ 4 BUrlG)."
    },
    {
        "id": 24,
        "question": "Wie wird der Urlaub bei unterjährigem Eintritt berechnet?",
        "options": ["A) Kein Urlaub", "B) Zwölftel des Jahresurlaubs für jeden vollen Monat", "C) Nur nach 6 Monaten", "D) Pauschal 10 Tage"],
        "correct_letter": "B",
        "explanation": "Bei unterjährigem Eintritt entsteht für jeden vollen Monat ein Zwölftel des Jahresurlaubs (§ 5 BUrlG)."
    },
    {
        "id": 25,
        "question": "Bis wann muss Urlaub im Kalenderjahr genommen werden?",
        "options": ["A) Bis 31. Oktober", "B) Bis 31. Dezember", "C) Bis 31. März des Folgejahres bei Übertragung", "D) Bis 30. Juni"],
        "correct_letter": "C",
        "explanation": "Urlaub soll im Kalenderjahr gewährt und genommen werden. Bei Übertragung verfällt er am 31. März des Folgejahres (§ 7 BUrlG)."
    },
    {
        "id": 26,
        "question": "Wann kann Urlaub übertragen werden?",
        "options": ["A) Immer", "B) Bei dringenden betrieblichen oder persönlichen Gründen", "C) Nur bei Krankheit", "D) Nie"],
        "correct_letter": "B",
        "explanation": "Eine Übertragung ist nur bei dringenden betrieblichen oder in der Person des Arbeitnehmers liegenden Gründen zulässig (§ 7 Abs. 3 BUrlG)."
    },
    {
        "id": 27,
        "question": "Was ist Urlaubsentgelt?",
        "options": ["A) Ein Bonus", "B) Die Lohnfortzahlung während des Urlaubs", "C) Urlaubsgeld", "D) Ein Geschenk"],
        "correct_letter": "B",
        "explanation": "Urlaubsentgelt ist die gesetzliche Lohnfortzahlung während des Urlaubs (§ 11 BUrlG)."
    },
    {
        "id": 28,
        "question": "Was ist Urlaubsgeld?",
        "options": ["A) Gesetzlich vorgeschrieben", "B) Eine freiwillige Zusatzleistung", "C) Das Urlaubsentgelt", "D) Ein Darlehen"],
        "correct_letter": "B",
        "explanation": "Urlaubsgeld ist eine freiwillige Zusatzleistung, die nur durch Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag vereinbart werden kann."
    },
    {
        "id": 29,
        "question": "Was passiert bei Krankheit im Urlaub?",
        "options": ["A) Urlaubstage sind verloren", "B) Nachgewiesene Krankheitstage werden nicht auf den Urlaub angerechnet", "C) Urlaub wird verlängert", "D) Mitarbeiter muss kündigen"],
        "correct_letter": "B",
        "explanation": "Erkrankt ein Arbeitnehmer im Urlaub, werden die durch ärztliches Zeugnis nachgewiesenen Tage nicht auf den Urlaub angerechnet (§ 9 BUrlG)."
    },
    {
        "id": 30,
        "question": "Wann ist eine Urlaubsabgeltung zulässig?",
        "options": ["A) Auf Wunsch", "B) Nur bei Beendigung des Arbeitsverhältnisses", "C) Immer", "D) Nie"],
        "correct_letter": "B",
        "explanation": "Urlaub kann nur dann in Geld abgegolten werden, wenn er wegen Beendigung des Arbeitsverhältnisses nicht genommen werden kann (§ 7 Abs. 4 BUrlG)."
    },
    // === ENTGELTFORTZAHLUNG ===
    {
        "id": 31,
        "question": "Wie lange dauert die Entgeltfortzahlung im Krankheitsfall?",
        "options": ["A) 2 Wochen", "B) Bis zu 6 Wochen pro Krankheitsfall", "C) 3 Monate", "D) Unbegrenzt"],
        "correct_letter": "B",
        "explanation": "Die Entgeltfortzahlung beträgt bis zu 6 Wochen (42 Kalendertage) pro Krankheitsfall (§ 3 EntgFG)."
    },
    {
        "id": 32,
        "question": "Wie hoch ist die Entgeltfortzahlung?",
        "options": ["A) 50 % des Gehalts", "B) 100 % des regelmäßigen Arbeitsentgelts", "C) 75 %", "D) 80 %"],
        "correct_letter": "B",
        "explanation": "Die Entgeltfortzahlung beträgt 100 % des regelmäßigen Arbeitsentgelts ohne Anrechnung von Zuschlägen (§ 4 EntgFG)."
    },
    {
        "id": 33,
        "question": "Werden Zuschläge bei der Entgeltfortzahlung berücksichtigt?",
        "options": ["A) Ja, alle", "B) Nein, keine Zuschläge", "C) Nur Schichtzulagen", "D) Nur Nachtzuschläge"],
        "correct_letter": "B",
        "explanation": "Bei der Entgeltfortzahlung werden keine Zuschläge (z.B. Nacht-, Sonn- oder Feiertagszuschläge) berücksichtigt (§ 4 Abs. 1a EntgFG)."
    },
    {
        "id": 34,
        "question": "Wann entsteht der Anspruch auf Entgeltfortzahlung?",
        "options": ["A) Ab dem ersten Tag", "B) Nach 4-wöchiger Wartezeit", "C) Nach 6 Monaten", "D) Nach der Probezeit"],
        "correct_letter": "B",
        "explanation": "Der Anspruch auf Entgeltfortzahlung entsteht erst nach vierwöchiger ununterbrochener Dauer des Arbeitsverhältnisses (§ 3 Abs. 3 EntgFG)."
    },
    {
        "id": 35,
        "question": "Was ist Krankengeld?",
        "options": ["A) Zahlung vom Arbeitgeber", "B) Leistung der Krankenkasse nach 6 Wochen Entgeltfortzahlung", "C) Zahlung vom Staat", "D) Rente"],
        "correct_letter": "B",
        "explanation": "Krankengeld ist die Leistung der gesetzlichen Krankenkasse nach Ablauf der 6-wöchigen Entgeltfortzahlung durch den Arbeitgeber."
    },
    {
        "id": 36,
        "question": "Wie hoch ist das Krankengeld?",
        "options": ["A) 50 %", "B) 70 % des regelmäßigen Bruttoentgelts", "C) 80 %", "D) 100 %"],
        "correct_letter": "B",
        "explanation": "Das Krankengeld beträgt in der Regel 70 % des regelmäßigen Bruttoentgelts, höchstens 90 % des Nettoentgelts (§ 47 SGB V)."
    },
    {
        "id": 37,
        "question": "Wie lange wird Krankengeld gezahlt?",
        "options": ["A) 6 Wochen", "B) Maximal 78 Wochen bei derselben Krankheit", "C) 1 Jahr", "D) Unbegrenzt"],
        "correct_letter": "B",
        "explanation": "Krankengeld wird für maximal 78 Wochen bei derselben Krankheit gezahlt (§ 48 SGB V)."
    },
    {
        "id": 38,
        "question": "Was ist das Umlageverfahren U1?",
        "options": ["A) Steuerumlage", "B) Erstattung von Entgeltfortzahlungskosten für kleine Arbeitgeber", "C) Rentenversicherung", "D) Arbeitslosenversicherung"],
        "correct_letter": "B",
        "explanation": "Das Umlageverfahren U1 erstattet kleinen Arbeitgebern (unter 30 MA) einen Teil der Entgeltfortzahlungskosten im Krankheitsfall."
    },
    {
        "id": 39,
        "question": "Welche Arbeitgeber nehmen am U1-Verfahren teil?",
        "options": ["A) Alle", "B) Arbeitgeber mit in der Regel nicht mehr als 30 Arbeitnehmern", "C) Nur große Firmen", "D) Keine"],
        "correct_letter": "B",
        "explanation": "Arbeitgeber mit in der Regel nicht mehr als 30 Arbeitnehmern nehmen zwingend am U1-Verfahren teil (§ 1 Abs. 2 AAG)."
    },
    {
        "id": 40,
        "question": "Was ist das Umlageverfahren U2?",
        "options": ["A) Krankheitserstattung", "B) Erstattung von Mutterschutzkosten", "C) Rentenerstattung", "D) Steuererstattung"],
        "correct_letter": "B",
        "explanation": "Das Umlageverfahren U2 erstattet allen Arbeitgebern die Aufwendungen für Mutterschutzlohn und den Arbeitgeberzuschuss zum Mutterschaftsgeld zu 100 %."
    },
    // === MINDESTLOHN ===
    {
        "id": 41,
        "question": "Wie hoch ist der gesetzliche Mindestlohn in Deutschland ab dem Jahr 2026?",
        "options": ["A) 12,00 Euro", "B) 12,41 Euro", "C) 13,00 Euro", "D) 14,00 Euro"],
        "correct_letter": "B",
        "explanation": "Der gesetzliche Mindestlohn wurde zum 1. Januar 2025 auf 12,41 Euro angehoben und gilt ab 2026 unverändert weiter."
    },
    {
        "id": 42,
        "question": "Gilt der Mindestlohn auch für Minijobber?",
        "options": ["A) Nein, Minijobber sind vom Mindestlohn ausgenommen", "B) Ja, auch Minijobber müssen mindestens den Mindestlohn erhalten", "C) Nur für Minijobber über 25 Jahren", "D) Nur in Vollzeitbetrieben"],
        "correct_letter": "B",
        "explanation": "Der gesetzliche Mindestlohn gilt auch für geringfügig Beschäftigte (Minijobber). Die Verdienstgrenze von 603 Euro (2026) ergibt sich aus der Multiplikation des Mindestlohns mit 50 Stunden."
    },
    {
        "id": 43,
        "question": "Welche Ausnahmen vom Mindestlohn gibt es?",
        "options": ["A) Keine Ausnahmen", "B) Auszubildende und Langzeitarbeitslose in den ersten 6 Monaten", "C) Nur für Beamte", "D) Nur für Unternehmen unter 10 Mitarbeitern"],
        "correct_letter": "B",
        "explanation": "Nach dem Mindestlohngesetz (MiLoG) gibt es Ausnahmen für Auszubildende sowie für Langzeitarbeitslose in den ersten sechs Monaten ihrer Beschäftigung."
    },
    {
        "id": 44,
        "question": "Wie wird der Mindestlohn bei Teilzeitbeschäftigten berechnet?",
        "options": ["A) Pro Monat pauschal", "B) Pro tatsächlich geleisteter Arbeitsstunde", "C) Pro Woche", "D) Pro Jahr"],
        "correct_letter": "B",
        "explanation": "Der Mindestlohn ist ein Stundenlohn. Bei Teilzeitbeschäftigten muss jede tatsächlich geleistete Arbeitsstunde mit mindestens dem gesetzlichen Mindestlohn vergütet werden."
    },
    {
        "id": 45,
        "question": "Was passiert, wenn ein Arbeitgeber weniger als den Mindestlohn zahlt?",
        "options": ["A) Das ist erlaubt bei schriftlicher Vereinbarung", "B) Der Arbeitgeber muss die Differenz nachzahlen und kann mit Bußgeld bestraft werden", "C) Der Arbeitnehmer muss kündigen", "D) Das Gewerbeamt entscheidet"],
        "correct_letter": "B",
        "explanation": "Bei Unterschreitung des Mindestlohns besteht ein Nachzahlungsanspruch. Zudem kann das Zollamt als Kontrollbehörde Bußgelder bis zu 500.000 Euro verhängen."
    },
    {
        "id": 46,
        "question": "Wer kontrolliert die Einhaltung des Mindestlohns?",
        "options": ["A) Die Gewerkschaften", "B) Der Zoll (Finanzkontrolle Schwarzarbeit)", "C) Das Finanzamt", "D) Die Bundesagentur für Arbeit"],
        "correct_letter": "B",
        "explanation": "Die Kontrolle der Einhaltung des Mindestlohns obliegt der Finanzkontrolle Schwarzarbeit beim Zoll (§ 16 MiLoG)."
    },
    {
        "id": 47,
        "question": "Dürfen Praktikanten unter dem Mindestlohn bezahlt werden?",
        "options": ["A) Ja, immer", "B) Nein, niemals", "C) Nur Pflichtpraktikanten im Rahmen von Ausbildung/Studium", "D) Nur im öffentlichen Dienst"],
        "correct_letter": "C",
        "explanation": "Pflichtpraktika im Rahmen einer schulischen Ausbildung oder eines Studiums sind vom Mindestlohn ausgenommen. Freiwillige Praktika über 3 Monate müssen hingegen mindestlohnpflichtig vergütet werden."
    },
    {
        "id": 48,
        "question": "Wie lange müssen Arbeitszeitnachweise für Mindestlohnkontrollen aufbewahrt werden?",
        "options": ["A) 1 Jahr", "B) 2 Jahre", "C) 3 Jahre", "D) 10 Jahre"],
        "correct_letter": "B",
        "explanation": "Arbeitgeber müssen Beginn, Ende und Dauer der täglichen Arbeitszeit aufzeichnen und diese Unterlagen mindestens 2 Jahre aufbewahren (§ 17 MiLoG)."
    },
    {
        "id": 49,
        "question": "Zählt Bereitschaftsdienst zum Mindestlohn?",
        "options": ["A) Nein, Bereitschaftsdienst ist immer freiwillig", "B) Ja, wenn der Arbeitnehmer sich am Betrieb aufhalten muss", "C) Nur die Hälfte", "D) Nur nachts"],
        "correct_letter": "B",
        "explanation": "Wenn der Bereitschaftsdienst am Arbeitsort stattfindet und der Arbeitnehmer seine Freizeit nicht frei disposieren kann, zählt die gesamte Zeit als Arbeitszeit und muss mindestlohnpflichtig vergütet werden."
    },
    {
        "id": 50,
        "question": "Wann wurde der Mindestlohn in Deutschland eingeführt?",
        "options": ["A) 2010", "B) 2015", "C) 2020", "D) 2022"],
        "correct_letter": "B",
        "explanation": "Der gesetzliche Mindestlohn wurde zum 1. Januar 2015 in Deutschland eingeführt und betrug damals 8,50 Euro pro Stunde."
    },
    // === LOHNSTEUERANMELDUNG ===
    {
        "id": 51,
        "question": "Wann muss die Lohnsteueranmeldung für den Monat Januar abgegeben werden?",
        "options": ["A) Bis 31. Januar", "B) Bis 10. Februar", "C) Bis 15. Februar", "D) Bis 28. Februar"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteueranmeldung ist spätestens am 10. Tag nach Ablauf des Anmeldezeitraums beim Finanzamt einzureichen (§ 41a EStG). Für Januar ist das der 10. Februar."
    },
    {
        "id": 52,
        "question": "In welchem Rhythmus muss die Lohnsteueranmeldung abgegeben werden?",
        "options": ["A) Immer monatlich", "B) Monatlich, vierteljährlich oder jährlich je nach Höhe der Lohnsteuer", "C) Nur jährlich", "D) Nur bei Kündigung"],
        "correct_letter": "B",
        "explanation": "Der Anmelderhythmus hängt von der Höhe der im Vorjahr abgeführten Lohnsteuer ab: über 5.000 € = monatlich, 1.080-5.000 € = vierteljährlich, unter 1.080 € = jährlich (§ 41a Abs. 1 EStG)."
    },
    {
        "id": 53,
        "question": "Wie muss die Lohnsteueranmeldung übermittelt werden?",
        "options": ["A) Per Post", "B) Per Fax", "C) Elektronisch über ELSTER", "D) Mündlich"],
        "correct_letter": "C",
        "explanation": "Die Lohnsteueranmeldung muss elektronisch über das ELSTER-Verfahren (Elektronische Steuererklärung) beim Finanzamt übermittelt werden (§ 41a Abs. 4 EStG)."
    },
    {
        "id": 54,
        "question": "Welche Daten enthält die Lohnsteueranmeldung?",
        "options": ["A) Nur das Nettogehalt", "B) Summe der Lohnsteuer, Kirchensteuer und Solidaritätszuschlag", "C) Nur die Arbeitsstunden", "D) Die Krankenkasse"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteueranmeldung enthält die Summe der einbehaltenen Lohnsteuer sowie der Kirchensteuer und des Solidaritätszuschlags für den Anmeldezeitraum."
    },
    {
        "id": 55,
        "question": "Wann ist die Lohnsteueranmeldung fällig bei vierteljährlicher Anmeldung?",
        "options": ["A) Immer am Monatsende", "B) Am 10. Tag nach Ablauf des Quartals", "C) Am 15. des Folgemonats", "D) Am Monatsanfang"],
        "correct_letter": "B",
        "explanation": "Bei vierteljährlicher Anmeldung ist die Frist der 10. Tag nach Ablauf des Kalendervierteljahres (10.4., 10.7., 10.10., 10.1.)."
    },
    {
        "id": 56,
        "question": "Was passiert bei verspäteter Abgabe der Lohnsteueranmeldung?",
        "options": ["A) Nichts", "B) Es können Verspätungszuschläge (0,25% pro angefangenem Monat) erhoben werden", "C) Die Firma wird geschlossen", "D) Der Chef muss ins Gefängnis"],
        "correct_letter": "B",
        "explanation": "Bei verspäteter Abgabe kann das Finanzamt Verspätungszuschläge in Höhe von 0,25% der festgesetzten Steuer pro angefangenem Monat erheben (§ 152 AO)."
    },
    {
        "id": 57,
        "question": "Kann die Lohnsteueranmeldung korrigiert werden?",
        "options": ["A) Nein, niemals", "B) Ja, durch eine berichtigende Anmeldung", "C) Nur im nächsten Jahr", "D) Nur mit Genehmigung"],
        "correct_letter": "B",
        "explanation": "Fehlerhafte Lohnsteueranmeldungen können durch eine berichtigende Anmeldung korrigiert werden. Dies sollte zeitnah erfolgen, um Verspätungszuschläge zu vermeiden."
    },
    {
        "id": 58,
        "question": "Wer ist für die Abgabe der Lohnsteueranmeldung verantwortlich?",
        "options": ["A) Der Arbeitnehmer", "B) Der Arbeitgeber", "C) Die Krankenkasse", "D) Der Steuerberater"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber ist gesetzlich verpflichtet, die Lohnsteueranmeldung abzugeben und die einbehaltenen Steuern an das Finanzamt abzuführen (§ 38 EStG)."
    },
    {
        "id": 59,
        "question": "Was ist der Unterschied zwischen Lohnsteueranmeldung und Lohnsteuerbescheinigung?",
        "options": ["A) Kein Unterschied", "B) Anmeldung = Steuerabführung an das Finanzamt, Bescheinigung = Dokument für den Arbeitnehmer", "C) Anmeldung ist für den Arbeitnehmer", "D) Bescheinigung ist für die Krankenkasse"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteueranmeldung dient der Abführung der Steuern an das Finanzamt. Die Lohnsteuerbescheinigung dokumentiert die Jahresdaten für den Arbeitnehmer zur Steuererklärung."
    },
    {
        "id": 60,
        "question": "Bis wann muss die Lohnsteueranmeldung für das gesamte Jahr bei jährlicher Anmeldung erfolgen?",
        "options": ["A) Bis 31. Dezember", "B) Bis 10. Januar des Folgejahres", "C) Bis 28. Februar des Folgejahres", "D) Bis 15. März"],
        "correct_letter": "B",
        "explanation": "Bei jährlicher Anmeldung muss die Lohnsteueranmeldung für das gesamte Kalenderjahr spätestens am 10. Januar des Folgejahres beim Finanzamt eingehen."
    },
    // === JAHRESLOHNSTEUERBESCHEINIGUNG ===
    {
        "id": 61,
        "question": "Bis wann muss die elektronische Lohnsteuerbescheinigung an das Finanzamt übermittelt werden?",
        "options": ["A) Bis 31. Januar", "B) Bis 28./29. Februar des Folgejahres", "C) Bis 31. März", "D) Bis 15. April"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss spätestens am letzten Tag des Monats Februar (28./29. Februar) des Folgejahres an das Finanzamt übermittelt werden (§ 41b Abs. 1 EStG)."
    },
    {
        "id": 62,
        "question": "Welche Daten enthält die Lohnsteuerbescheinigung?",
        "options": ["A) Nur das Bruttogehalt", "B) Brutto, Lohnsteuer, Kirchensteuer, Soli und SV-Beiträge", "C) Nur die Krankheitstage", "D) Nur die Überstunden"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteuerbescheinigung enthält alle steuerlich relevanten Jahresdaten: Bruttoarbeitslohn, einbehaltene Lohnsteuer, Kirchensteuer, Solidaritätszuschlag und die Arbeitnehmeranteile zur Sozialversicherung."
    },
    {
        "id": 63,
        "question": "Wann muss die Lohnsteuerbescheinigung bei unterjährigem Austritt erstellt werden?",
        "options": ["A) Nur am Jahresende", "B) Zeitnah nach dem Austritt", "C) Nie", "D) Nach 6 Monaten"],
        "correct_letter": "B",
        "explanation": "Endet das Dienstverhältnis unterjährig, ist die Lohnsteuerbescheinigung zeitnah zu übermitteln (§ 41b Abs. 1 Satz 2 EStG)."
    },
    {
        "id": 64,
        "question": "Wie erhält der Arbeitnehmer seine Lohnsteuerbescheinigung?",
        "options": ["A) Vom Finanzamt per Post", "B) Als Ausdruck oder PDF vom Arbeitgeber", "C) Von der Krankenkasse", "D) Vom Gewerbeamt"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber muss dem Arbeitnehmer einen Ausdruck der elektronischen Lohnsteuerbescheinigung aushändigen oder als PDF bereitstellen (§ 41b Abs. 3 EStG)."
    },
    {
        "id": 65,
        "question": "Was bedeutet der Großbuchstabe 'M' auf der Lohnsteuerbescheinigung?",
        "options": ["A) Mitarbeiter ist verheiratet", "B) Mahlzeiten wurden vom Arbeitgeber gestellt", "C) Mutterschaftsgeld bezogen", "D) Minijobber"],
        "correct_letter": "B",
        "explanation": "Der Großbuchstabe 'M' kennzeichnet, dass dem Arbeitnehmer steuerpflichtige Mahlzeiten im Rahmen einer Auswärtstätigkeit oder doppelten Haushaltsführung gewährt wurden."
    },
    {
        "id": 66,
        "question": "Kann die Lohnsteuerbescheinigung nach Übermittlung noch geändert werden?",
        "options": ["A) Ja, jederzeit", "B) Nein, nach Übermittlung ist das Lohnsteuerabzugsverfahren abgeschlossen", "C) Nur bis zum 31. März", "D) Nur mit Genehmigung"],
        "correct_letter": "B",
        "explanation": "Mit der Übermittlung der Lohnsteuerbescheinigung gilt das Lohnsteuerabzugsverfahren als abgeschlossen (§ 41c EStG). Änderungen sind dann nur noch über die Einkommensteuerveranlagung möglich."
    },
    {
        "id": 67,
        "question": "An welche Institution wird die Lohnsteuerbescheinigung gesendet?",
        "options": ["A) An die Krankenkasse", "B) An die Finanzverwaltung (BZSt/Finanzamt)", "C) An die Rentenversicherung", "D) An die Bundesagentur für Arbeit"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung wird über ELSTER direkt an die Finanzverwaltung (Bundeszentralamt für Steuern bzw. zuständiges Finanzamt) übermittelt."
    },
    {
        "id": 68,
        "question": "Ist die Lohnsteuerbescheinigung eine Sammel- oder Einzelmeldung?",
        "options": ["A) Sammelmeldung für alle Mitarbeiter", "B) Personengebundene Einzelmeldung pro Arbeitnehmer", "C) Nur für Führungskräfte", "D) Anonym"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteuerbescheinigung ist eine personengebundene Einzelmeldung, die unter der steuerlichen Identifikationsnummer (IdNr) des jeweiligen Arbeitnehmers übermittelt wird."
    },
    {
        "id": 69,
        "question": "Welche Kennzeichnung muss der Ausdruck der Lohnsteuerbescheinigung tragen?",
        "options": ["A) 'Original'", "B) 'Ausdruck der elektronischen Lohnsteuerbescheinigung'", "C) 'Kopie'", "D) 'Dokument'"],
        "correct_letter": "B",
        "explanation": "Der vom Arbeitgeber ausgehändigte Ausdruck muss die Kennzeichnung 'Ausdruck der elektronischen Lohnsteuerbescheinigung' tragen, um die Echtheit zu dokumentieren."
    },
    {
        "id": 70,
        "question": "Was passiert, wenn ein Arbeitnehmer keine Lohnsteuerbescheinigung erhält?",
        "options": ["A) Er muss keine Steuererklärung machen", "B) Er kann beim Arbeitgeber nachfragen oder das Finanzamt einschalten", "C) Er muss 100 Euro Strafe zahlen", "D) Das ist egal"],
        "correct_letter": "B",
        "explanation": "Der Arbeitnehmer hat Anspruch auf die Lohnsteuerbescheinigung. Bei Nichterhalt kann er den Arbeitgeber auffordern oder das Finanzamt um Unterstützung bitten."
    },
    // === AUFGABE DER BERUFSGENOSSENSCHAFT ===
    {
        "id": 71,
        "question": "Was ist die Hauptaufgabe der Berufsgenossenschaft?",
        "options": ["A) Zahlung von Arbeitslosengeld", "B) Prävention von Arbeitsunfällen und Berufskrankheiten sowie Entschädigung bei Unfällen", "C) Lohnabrechnung", "D) Steuerberatung"],
        "correct_letter": "B",
        "explanation": "Die Berufsgenossenschaft ist Träger der gesetzlichen Unfallversicherung. Ihre Aufgaben sind Unfallverhütung, Arbeitsschutz und Entschädigung bei Arbeitsunfällen und Berufskrankheiten (§ 1 SGB VII)."
    },
    {
        "id": 72,
        "question": "Wer trägt die Beiträge zur Berufsgenossenschaft?",
        "options": ["A) Der Arbeitnehmer allein", "B) Der Arbeitgeber allein", "C) Arbeitnehmer und Arbeitgeber je zur Hälfte", "D) Der Staat"],
        "correct_letter": "B",
        "explanation": "Die Beiträge zur gesetzlichen Unfallversicherung (Berufsgenossenschaft) werden ausschließlich vom Arbeitgeber getragen. Arbeitnehmer sind beitragsfrei unfallversichert (§ 150 SGB VII)."
    },
    {
        "id": 73,
        "question": "Wie werden die Beiträge zur Berufsgenossenschaft berechnet?",
        "options": ["A) Prozent vom Bruttogehalt", "B) Nach Gefahrtarif (Lohnsumme x Gefahrtarif)", "C) Pauschale pro Mitarbeiter", "D) Nach Arbeitsstunden"],
        "correct_letter": "B",
        "explanation": "Die Unfallversicherungsbeiträge werden nach der Lohnsumme des Unternehmens und dem branchenspezifischen Gefahrtarif berechnet."
    },
    {
        "id": 74,
        "question": "Wann muss der Lohnnachweis an die Berufsgenossenschaft übermittelt werden?",
        "options": ["A) Monatlich", "B) Jährlich bis zum 16. Februar", "C) Vierteljährlich", "D) Nur bei Unfällen"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis (UV-Meldeverfahren) muss jährlich bis zum 16. Februar des Folgejahres elektronisch an die Berufsgenossenschaft übermittelt werden."
    },
    {
        "id": 75,
        "question": "Was ist ein Arbeitsunfall im Sinne der Berufsgenossenschaft?",
        "options": ["A) Jeder Unfall", "B) Ein Unfall, der sich während der betrieblichen Tätigkeit ereignet", "C) Nur Unfälle im Betrieb", "D) Nur Verkehrsunfälle"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitsunfall ist ein Unfall, den ein Versicherter bei einer Tätigkeit, die für den Betrieb eine wesentliche Ursache darstellt, erleidet (§ 8 SGB VII)."
    },
    {
        "id": 76,
        "question": "Was leistet die Berufsgenossenschaft bei einem Arbeitsunfall?",
        "options": ["A) Nur Schmerzensgeld", "B) Behandlung, Rehabilitation und Entschädigung", "C) Nur Krankengeld", "D) Nur Lohnfortzahlung"],
        "correct_letter": "B",
        "explanation": "Die Berufsgenossenschaft übernimmt die Kosten für medizinische Behandlung, Rehabilitation und zahlt bei Dauerschäden eine Rente."
    },
    {
        "id": 77,
        "question": "Gilt der Unfallschutz auch auf dem Weg zur Arbeit?",
        "options": ["A) Nein", "B) Ja, auf dem direkten Weg zur Arbeit und zurück (Wegeunfall)", "C) Nur mit dem Auto", "D) Nur mit öffentlichen Verkehrsmitteln"],
        "correct_letter": "B",
        "explanation": "Der gesetzliche Unfallschutz umfasst auch Wegeunfälle auf dem direkten Weg zwischen Wohnung und Arbeitsstätte (§ 8 Abs. 2 SGB VII)."
    },
    {
        "id": 78,
        "question": "Was ist eine Berufskrankheit?",
        "options": ["A) Jede Krankheit", "B) Eine Krankheit, die durch berufliche Einwirkungen verursacht ist", "C) Nur Grippe", "D) Nur Rückenschmerzen"],
        "correct_letter": "B",
        "explanation": "Berufskrankheiten sind Krankheiten, die die Bundesregierung durch Rechtsverordnung als solche anerkennt und die durch bestimmte berufliche Einwirkungen verursacht werden können (§ 9 SGB VII)."
    },
    {
        "id": 79,
        "question": "Welche Präventionsaufgaben hat die Berufsgenossenschaft?",
        "options": ["A) Steuerberatung", "B) Sicherheitsunterweisungen, Betriebsbegehungen und Unfalluntersuchungen", "C) Lohnabrechnung", "D) Personalbeschaffung"],
        "correct_letter": "B",
        "explanation": "Die Berufsgenossenschaft führt Sicherheitsunterweisungen durch, führt Betriebsbegehungen durch und untersucht Arbeitsunfälle zur Prävention."
    },
    {
        "id": 80,
        "question": "Wie viele Berufsgenossenschaften gibt es in Deutschland?",
        "options": ["A) Eine", "B) Neun gewerbliche und zwei landwirtschaftliche", "C) 50", "D) 100"],
        "correct_letter": "B",
        "explanation": "Es gibt neun gewerbliche Berufsgenossenschaften (z.B. Bau, Handel, Verwaltung) sowie zwei landwirtschaftliche Berufsgenossenschaften."
    },
    // === WAS SIND GELDWERTE VORTEILE? ===
    {
        "id": 81,
        "question": "Was ist ein geldwerter Vorteil?",
        "options": ["A) Bargeld", "B) Sachbezüge und Vorteile, die als Arbeitslohn gelten", "C) Nur Geschenke", "D) Nur Prämien"],
        "correct_letter": "B",
        "explanation": "Geldwerte Vorteile sind Sachbezüge und Vorteile, die als Arbeitslohn gelten und steuerpflichtig sind (§ 8 Abs. 2 EStG)."
    },
    {
        "id": 82,
        "question": "Ist die private Nutzung eines Diensthandys ein geldwerter Vorteil?",
        "options": ["A) Ja, immer", "B) Nein, steuerfrei bei Überlassung zur privaten Nutzung", "C) Nur die Anrufe", "D) Nur das Internet"],
        "correct_letter": "B",
        "explanation": "Die private Nutzung eines Diensthandys ist steuerfrei, wenn dem Arbeitnehmer das Handy auch zur privaten Nutzung überlassen wird (§ 3 Nr. 45 EStG)."
    },
    {
        "id": 83,
        "question": "Bis zu welcher Höhe sind Sachbezüge steuerfrei?",
        "options": ["A) 44 Euro", "B) 50 Euro monatlich", "C) 60 Euro", "D) 100 Euro"],
        "correct_letter": "B",
        "explanation": "Sachbezüge sind bis zu 50 Euro monatlich steuer- und sozialversicherungsfrei (§ 8 Abs. 2 Satz 11 EStG)."
    },
    {
        "id": 84,
        "question": "Was ist eine Aufmerksamkeitszuwendung?",
        "options": ["A) Monatliche Prämie", "B) Persönliches Geschenk bis 60 Euro aus besonderem Anlass", "C) Weihnachtsgeld", "D) Urlaubsgeld"],
        "correct_letter": "B",
        "explanation": "Aufmerksamkeitszuwendungen sind persönliche Geschenke bis 60 Euro aus besonderem Anlass (Geburtstag, Hochzeit) und sind steuerfrei."
    },
    {
        "id": 85,
        "question": "Wie wird die private Nutzung eines Firmenwagens bewertet?",
        "options": ["A) Nicht bewertet", "B) 1 % vom Bruttolistenpreis monatlich (1%-Regelung)", "C) 500 Euro pauschal", "D) 10 % vom Listenpreis"],
        "correct_letter": "B",
        "explanation": "Die private Nutzung eines Firmenwagens wird mit 1 % der Bruttolistenpreises monatlich bewertet (1%-Regelung, § 6 Abs. 1 Nr. 4 EStG)."
    },
    {
        "id": 86,
        "question": "Was ist ein Jobticket?",
        "options": ["A) Ein Ticket für das Kino", "B) Ein vom Arbeitgeber subventioniertes Ticket für öffentliche Verkehrsmittel", "C) Ein Ticket für Events", "D) Ein Ticket für Flüge"],
        "correct_letter": "B",
        "explanation": "Ein Jobticket ist ein vom Arbeitgeber subventioniertes Ticket für öffentliche Verkehrsmittel zur Fahrt zur Arbeit."
    },
    {
        "id": 87,
        "question": "Bis zu welcher Höhe ist ein Jobticket steuerfrei?",
        "options": ["A) Unbegrenzt", "B) Bis zu 50 Euro monatlich", "C) Bis zu 1.500 Euro jährlich", "D) Bis zu 100 Euro monatlich"],
        "correct_letter": "B",
        "explanation": "Jobtickets können bis zu einem Betrag von 50 Euro monatlich steuer- und sozialversicherungsfrei gewährt werden (§ 3 Nr. 34 EStG)."
    },
    {
        "id": 88,
        "question": "Was ist ein Personalrabatt?",
        "options": ["A) Rabatt für alle Kunden", "B) Ermäßigung beim Kauf eigener Produkte des Arbeitgebers", "C) Rabatt für Freunde", "D) Rabatt für Lieferanten"],
        "correct_letter": "B",
        "explanation": "Personalrabatte sind Ermäßigungen, die Arbeitnehmer beim Kauf eigener Produkte des Arbeitgebers erhalten."
    },
    {
        "id": 89,
        "question": "Wie hoch ist der jährliche Freibetrag für Personalrabatte?",
        "options": ["A) 500 Euro", "B) 1.080 Euro", "C) 2.000 Euro", "D) 500 Euro"],
        "correct_letter": "B",
        "explanation": "Personalrabatte sind bis zu einem jährlichen Vorteil von 1.080 Euro steuerfrei (§ 8 Abs. 3 EStG)."
    },
    {
        "id": 90,
        "question": "Sind geldwerte Vorteile sozialversicherungspflichtig?",
        "options": ["A) Nein, immer steuerpflichtig aber SV-frei", "B) Ja, in der Regel steuer- und sozialversicherungspflichtig", "C) Nur steuerpflichtig", "D) Nur SV-pflichtig"],
        "correct_letter": "B",
        "explanation": "Geldwerte Vorteile sind in der Regel sowohl steuer- als auch sozialversicherungspflichtig, sofern keine Ausnahme greift."
    },
    // === BERECHNUNG SV-BEITRÄGE ===
    {
        "id": 91,
        "question": "Wie hoch ist der allgemeine Beitragssatz zur Krankenversicherung (KV) ohne Zusatzbeitrag?",
        "options": ["A) 7,3 %", "B) 14,6 %", "C) 15,5 %", "D) 18,6 %"],
        "correct_letter": "A",
        "explanation": "Der allgemeine Beitragssatz zur gesetzlichen Krankenversicherung ohne Zusatzbeitrag beträgt 14,6 %, wovon Arbeitgeber und Arbeitnehmer je 7,3 % tragen."
    },
    {
        "id": 92,
        "question": "Wie hoch ist der Beitragssatz zur Arbeitslosenversicherung (AV)?",
        "options": ["A) 1,3 %", "B) 2,6 %", "C) 3,0 %", "D) 6,5 %"],
        "correct_letter": "B",
        "explanation": "Der Beitragssatz zur Arbeitslosenversicherung beträgt 2,6 % und wird paritätisch von Arbeitgeber und Arbeitnehmer getragen (je 1,3 %)."
    },
    {
        "id": 93,
        "question": "Was ist die Beitragsbemessungsgrenze (BBG) in der Rentenversicherung 2026 West?",
        "options": ["A) 4.950 Euro", "B) 7.300 Euro", "C) 7.550 Euro", "D) 8.000 Euro"],
        "correct_letter": "C",
        "explanation": "Die BBG in der Rentenversicherung beträgt 2026 in den alten Bundesländern 7.550 Euro monatlich (West)."
    },
    {
        "id": 94,
        "question": "Was ist die BBG in der Krankenversicherung 2026?",
        "options": ["A) 4.950 Euro", "B) 5.175 Euro", "C) 5.350 Euro", "D) 6.000 Euro"],
        "correct_letter": "B",
        "explanation": "Die BBG in der Krankenversicherung beträgt 2026 5.175 Euro monatlich."
    },
    {
        "id": 95,
        "question": "Wie werden SV-Beiträge bei Überschreitung der BBG berechnet?",
        "options": ["A) Vom gesamten Einkommen", "B) Nur bis zur BBG, der Rest ist beitragsfrei", "C) Mit doppeltem Satz", "D) Mit halbem Satz"],
        "correct_letter": "B",
        "explanation": "Sozialversicherungsbeiträge werden nur bis zur BBG erhoben. Einkommensteile darüber sind beitragsfrei."
    },
    {
        "id": 96,
        "question": "Was gilt bei mehreren Arbeitsverhältnissen für die BBG?",
        "options": ["A) Jedes Arbeitsverhältnis hat eigene BBG", "B) Die BBG wird summiert", "C) Nur das Hauptverhältnis zählt", "D) Keine BBG"],
        "correct_letter": "A",
        "explanation": "Bei mehreren Arbeitsverhältnissen gilt die BBG für jedes Beschäftigungsverhältnis separat."
    },
    {
        "id": 97,
        "question": "Wie hoch ist der Zusatzbeitrag zur KV im Jahr 2026 (durchschnittlich)?",
        "options": ["A) 0,6 %", "B) 1,7 %", "C) 2,0 %", "D) 2,5 %"],
        "correct_letter": "B",
        "explanation": "Der durchschnittliche Zusatzbeitrag der Krankenkassen liegt bei ca. 1,7 %. Er wird paritätisch von Arbeitgeber und Arbeitnehmer getragen."
    },
    {
        "id": 98,
        "question": "Wie hoch ist der PV-Beitragssatz ohne Kinderlosenzuschlag?",
        "options": ["A) 1,7 %", "B) 2,3 %", "C) 3,4 %", "D) 4,0 %"],
        "correct_letter": "B",
        "explanation": "Der allgemeine Beitragssatz zur Pflegeversicherung beträgt 3,4 % (je 1,7 % AG/AN). Ohne Kinderlosenzuschlag zahlt der AN also 1,7 % + Zusatzbeitrag."
    },
    {
        "id": 99,
        "question": "Wie hoch ist der Kinderlosenzuschlag in der PV?",
        "options": ["A) 0,6 %", "B) 0,6 % des Gesamtbeitrags", "C) 0,6 % für den AN", "D) 1,2 %"],
        "correct_letter": "C",
        "explanation": "Kinderlose ab 23 Jahren zahlen einen Zuschlag von 0,6 % zum PV-Beitragssatz, den sie allein tragen."
    },
    {
        "id": 100,
        "question": "Wann werden SV-Beiträge fällig?",
        "options": ["A) Am Monatsanfang", "B) Am letzten Tag des Monats", "C) Am 3. des Folgemonats", "D) Am 15. des Folgemonats"],
        "correct_letter": "B",
        "explanation": "Sozialversicherungsbeiträge sind am letzten Tag des Monats fällig, für den sie berechnet werden."
    },
    // === BERECHNUNG MINIJOB ===
    {
        "id": 101,
        "question": "Wie hoch ist die Verdienstgrenze für einen Minijob im Jahr 2026?",
        "options": ["A) 520 Euro", "B) 538 Euro", "C) 603 Euro", "D) 650 Euro"],
        "correct_letter": "C",
        "explanation": "Die Verdienstgrenze für einen Minijob beträgt 2026 603 Euro monatlich (50 x Mindestlohn 12,41 Euro)."
    },
    {
        "id": 102,
        "question": "Wie hoch ist die pauschale Rentenversicherung für Minijobber?",
        "options": ["A) 3,6 %", "B) 15 %", "C) 18,6 %", "D) 20 %"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber zahlt für Minijobber einen pauschalen Beitrag von 15 % zur Rentenversicherung."
    },
    {
        "id": 103,
        "question": "Wie hoch ist der pauschale Krankenversicherungsbeitrag für Minijobber?",
        "options": ["A) 7,3 %", "B) 13 %", "C) 15 %", "D) 20 %"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber zahlt für Minijobber einen pauschalen Beitrag von 13 % zur Krankenversicherung (inklusive Zusatzbeitrag)."
    },
    {
        "id": 104,
        "question": "Wie hoch ist der Pauschalsteuersatz für Minijobber?",
        "options": ["A) 2 %", "B) 5 %", "C) 10 %", "D) 19 %"],
        "correct_letter": "A",
        "explanation": "Der Arbeitgeber kann für Minijobber die Lohnsteuer pauschal mit 2 % (inkl. Soli und KiSt) übernehmen (§ 40a Abs. 2 EStG)."
    },
    {
        "id": 105,
        "question": "Wie hoch ist der Eigenanteil zur RV für Minijobber ohne Befreiung?",
        "options": ["A) 0 %", "B) 3,6 %", "C) 9,3 %", "D) 18,6 %"],
        "correct_letter": "B",
        "explanation": "Ohne Befreiung von der RV-Pflicht zahlt der Minijobber 3,6 % Eigenanteil (Differenz zwischen 18,6 % und 15 % Pauschalbeitrag)."
    },
    {
        "id": 106,
        "question": "Wo werden Minijobber gemeldet?",
        "options": ["A) Bei der Krankenkasse", "B) Bei der Minijob-Zentrale der Deutschen Rentenversicherung", "C) Beim Finanzamt", "D) Bei der Agentur für Arbeit"],
        "correct_letter": "B",
        "explanation": "Minijobber werden zentral bei der Minijob-Zentrale der Deutschen Rentenversicherung Bund gemeldet."
    },
    {
        "id": 107,
        "question": "Wann muss ein Minijobber bei der Minijob-Zentrale angemeldet werden?",
        "options": ["A) Nach 6 Monaten", "B) Spätestens am ersten Tag der Beschäftigung", "C) Nur bei Kündigung", "D) Am Jahresende"],
        "correct_letter": "B",
        "explanation": "Die Anmeldung eines Minijobbers muss spätestens am ersten Tag der Beschäftigung bei der Minijob-Zentrale erfolgen."
    },
    {
        "id": 108,
        "question": "Kann ein Minijobber mehrere Minijobs haben?",
        "options": ["A) Nein, nur einen", "B) Ja, aber die Einkommen werden zusammengerechnet", "C) Ja, unbegrenzt", "D) Nur zwei"],
        "correct_letter": "B",
        "explanation": "Bei mehreren Minijobs werden die Einkommen zusammengerechnet. Überschreitet die Summe 603 Euro, gilt der Übergangsbereich."
    },
    {
        "id": 109,
        "question": "Was passiert bei Überschreitung der Minijob-Grenze?",
        "options": ["A) Kündigung", "B) Geltungsbereich des Übergangsbereichs (Midijob)", "C) Steuerpflicht", "D) Nichts"],
        "correct_letter": "B",
        "explanation": "Wird die Minijob-Grenze überschritten, greift der Übergangsbereich (Midijob) mit reduzierten SV-Beiträgen."
    },
    {
        "id": 110,
        "question": "Wie hoch ist die Obergrenze des Übergangsbereichs 2026?",
        "options": ["A) 1.000 Euro", "B) 1.600 Euro", "C) 2.000 Euro", "D) 2.500 Euro"],
        "correct_letter": "B",
        "explanation": "Der Übergangsbereich reicht von 603 Euro bis 1.600 Euro (2026)."
    },
    // === WEITERE FRAGEN 111-200 ===
    {
        "id": 111,
        "question": "Wie werden die Beiträge im Übergangsbereich berechnet?",
        "options": ["A) Pauschal", "B) Faktorverfahren mit reduzierten AN-Beiträgen", "C) Wie bei Normalbeschäftigten", "D) Keine Beiträge"],
        "correct_letter": "B",
        "explanation": "Im Übergangsbereich werden die AN-Beiträge nach einem Faktorverfahren reduziert berechnet, während der AG den vollen Beitrag zahlt."
    },
    {
        "id": 112,
        "question": "Was ist der RV-Beitragssatz?",
        "options": ["A) 14,6 %", "B) 18,6 %", "C) 20,0 %", "D) 22,0 %"],
        "correct_letter": "B",
        "explanation": "Der Beitragssatz zur gesetzlichen Rentenversicherung beträgt 18,6 % (je 9,3 % AG/AN)."
    },
    {
        "id": 113,
        "question": "Was ist die Jahresarbeitsentgeltgrenze (JAEG) 2026?",
        "options": ["A) 60.750 Euro", "B) 66.600 Euro", "C) 69.300 Euro", "D) 72.000 Euro"],
        "correct_letter": "B",
        "explanation": "Die Jahresarbeitsentgeltgrenze (Versicherungspflichtgrenze) beträgt 2026 66.600 Euro jährlich."
    },
    {
        "id": 114,
        "question": "Was regelt die JAEG?",
        "options": ["A) Die Obergrenze für Überstunden", "B) Ab welchem Einkommen KV-Versicherungsfreiheit und PKV-Wahl möglich ist", "C) Den Mindesturlaub", "D) Die Minijob-Grenze"],
        "correct_letter": "B",
        "explanation": "Die JAEG regelt, ab welchem Jahresarbeitsentgelt ein Arbeitnehmer in der gesetzlichen KV versicherungsfrei wird und in die PKV wechseln darf."
    },
    {
        "id": 115,
        "question": "Was ist der Solidaritätszuschlag?",
        "options": ["A) Kirchensteuer", "B) Zusatzsteuer zur Finanzierung der deutschen Einheit", "C) Rentenbeitrag", "D) Krankenkassenbeitrag"],
        "correct_letter": "B",
        "explanation": "Der Solidaritätszuschlag ist eine Zusatzsteuer zur Finanzierung der deutschen Einheit und der Kosten der Wiedervereinigung."
    },
    {
        "id": 116,
        "question": "Ist der Solidaritätszuschlag noch relevant?",
        "options": ["A) Ja, für alle", "B) Nein, vollständig abgeschafft", "C) Nur für hohe Einkommen", "D) Nur für Unternehmen"],
        "correct_letter": "C",
        "explanation": "Der Solidaritätszuschlag wurde 2021 für die meisten Steuerpflichtigen abgeschafft und gilt nur noch für sehr hohe Einkommen."
    },
    {
        "id": 117,
        "question": "Wie hoch ist der Kirchensteuersatz?",
        "options": ["A) Immer 9 %", "B) 8 % oder 9 % je nach Bundesland", "C) 10 %", "D) 5 %"],
        "correct_letter": "B",
        "explanation": "Der Kirchensteuersatz beträgt 8 % in Bayern und Baden-Württemberg, 9 % in allen anderen Bundesländern."
    },
    {
        "id": 118,
        "question": "Was sind Werbungskosten?",
        "options": ["A) Kosten für Werbung", "B) Aufwendungen zur Erwerbung, Sicherung und Erhaltung von Einkünften", "C) Kosten für Auto", "D) Reisekosten"],
        "correct_letter": "B",
        "explanation": "Werbungskosten sind Aufwendungen, die zur Erwerbung, Sicherung und Erhaltung von Einkünften anfallen (§ 9 EStG)."
    },
    {
        "id": 119,
        "question": "Wie hoch ist der Werbungskostenpauschbetrag?",
        "options": ["A) 1.000 Euro", "B) 1.230 Euro", "C) 2.000 Euro", "D) 500 Euro"],
        "correct_letter": "B",
        "explanation": "Der Werbungskostenpauschbetrag beträgt 1.230 Euro jährlich (§ 9a Satz 1 Nr. 1 EStG)."
    },
    {
        "id": 120,
        "question": "Was ist der Grundfreibetrag 2026?",
        "options": ["A) 9.408 Euro", "B) 11.604 Euro", "C) 12.000 Euro", "D) 10.347 Euro"],
        "correct_letter": "B",
        "explanation": "Der Grundfreibetrag beträgt 2026 11.604 Euro jährlich."
    },
    // === STEUERKLASSEN ===
    {
        "id": 121,
        "question": "Für wen gilt Steuerklasse I?",
        "options": ["A) Verheiratete", "B) Ledige, geschiedene oder verwitwete Arbeitnehmer", "C) Alleinerziehende", "D) Zweitjobber"],
        "correct_letter": "B",
        "explanation": "Steuerklasse I gilt für ledige, geschiedene oder verwitwete Arbeitnehmer (§ 38b Abs. 1 Nr. 1 EStG)."
    },
    {
        "id": 122,
        "question": "Für wen gilt Steuerklasse III?",
        "options": ["A) Ledige", "B) Verheiratete, wenn der Ehepartner in Steuerklasse V ist", "C) Alleinerziehende", "D) Zweitjobber"],
        "correct_letter": "B",
        "explanation": "Steuerklasse III gilt für verheiratete Arbeitnehmer, deren Ehepartner in Steuerklasse V eingestuft ist (§ 38b Abs. 1 Nr. 4 EStG)."
    },
    {
        "id": 123,
        "question": "Für wen gilt Steuerklasse IV?",
        "options": ["A) Ledige", "B) Verheiratete, die beide arbeiten und ähnlich verdienen", "C) Alleinerziehende", "D) Zweitjobber"],
        "correct_letter": "B",
        "explanation": "Steuerklasse IV gilt für verheiratete Arbeitnehmer, die beide arbeiten und ähnlich hohe Einkommen haben (§ 38b Abs. 1 Nr. 3 EStG)."
    },
    {
        "id": 124,
        "question": "Für wen gilt Steuerklasse V?",
        "options": ["A) Ledige", "B) Verheiratete, wenn der Ehepartner in Steuerklasse III ist", "C) Alleinerziehende", "D) Zweitjobber"],
        "correct_letter": "B",
        "explanation": "Steuerklasse V gilt für verheiratete Arbeitnehmer, deren Ehepartner in Steuerklasse III eingestuft ist (§ 38b Abs. 1 Nr. 5 EStG)."
    },
    {
        "id": 125,
        "question": "Kann die Steuerklasse gewechselt werden?",
        "options": ["A) Nein", "B) Ja, beim Finanzamt beantragen", "C) Nur jährlich", "D) Nur bei Heirat"],
        "correct_letter": "B",
        "explanation": "Die Steuerklasse kann beim Wechsel der Familienverhältnisse (Heirat, Scheidung) beim Finanzamt geändert werden."
    },
    {
        "id": 126,
        "question": "Was ist das Faktorverfahren?",
        "options": ["A) Steuerberechnung für Alleinstehende", "B) Verfahren zur gerechteren Verteilung der Steuerlast bei Ehegatten in Steuerklasse IV", "C) Berechnung des Mindestlohns", "D) Berechnung der SV-Beiträge"],
        "correct_letter": "B",
        "explanation": "Das Faktorverfahren ermöglicht es Ehegatten in Steuerklasse IV, die Steuerlast gerechter zu verteilen und Nachzahlungen zu minimieren."
    },
    {
        "id": 127,
        "question": "Was bewirkt der Kinderfreibetrag monatlich?",
        "options": ["A) Mindert die Lohnsteuer", "B) Mindert nur Kirchensteuer und Soli", "C) Erhöht das Netto", "D) Keine Wirkung"],
        "correct_letter": "B",
        "explanation": "Der Kinderfreibetrag mindert unterjährig nur den Solidaritätszuschlag und die Kirchensteuer, nicht die Lohnsteuer."
    },
    {
        "id": 128,
        "question": "Was ist ELStAM?",
        "options": ["A) Elektronische LohnSteuerAbzugsMerkmale", "B) Elektronische Steuererklärung", "C) Elektronische Lohnabrechnung", "D) Elektronische Krankmeldung"],
        "correct_letter": "A",
        "explanation": "ELStAM steht für Elektronische LohnSteuerAbzugsMerkmale, die elektronisch beim Finanzamt abgerufen werden."
    },
    {
        "id": 129,
        "question": "Was sind die ELStAM-Daten?",
        "options": ["A) Nur Steuerklasse", "B) Steuerklasse, Kirchensteuermerkmal, Kinderfreibeträge, Freibeträge", "C) Nur Einkommen", "D) Nur Adresse"],
        "correct_letter": "B",
        "explanation": "ELStAM enthalten Steuerklasse, Kirchensteuermerkmal, Kinderfreibeträge und eventuelle Freibeträge."
    },
    {
        "id": 130,
        "question": "Wann werden ELStAM abgerufen?",
        "options": ["A) Jährlich", "B) Bei erstmaliger Beschäftigung und bei Änderungen", "C) Monatlich", "D) Nur bei Kündigung"],
        "correct_letter": "B",
        "explanation": "ELStAM werden bei erstmaliger Beschäftigung und bei Änderungen der steuerlichen Verhältnisse abgerufen."
    },
    // === ARBEITSZEIT ===
    {
        "id": 131,
        "question": "Wie lang ist die gesetzliche Höchstarbeitszeit täglich?",
        "options": ["A) 10 Stunden", "B) 8 Stunden (Verlängerung auf 10 mit Ausgleich)", "C) 12 Stunden", "D) 6 Stunden"],
        "correct_letter": "B",
        "explanation": "Die werktägliche Arbeitszeit darf 8 Stunden nicht überschreiten. Sie kann auf bis zu 10 Stunden verlängert werden, wenn im Durchschnitt 8 Stunden eingehalten werden (§ 3 ArbZG)."
    },
    {
        "id": 132,
        "question": "Wie lang muss die Ruhepause bei 7 Stunden Arbeitszeit sein?",
        "options": ["A) 15 Minuten", "B) Mindestens 30 Minuten", "C) 45 Minuten", "D) Keine Pause"],
        "correct_letter": "B",
        "explanation": "Bei einer Arbeitszeit von mehr als 6 bis zu 9 Stunden muss eine Ruhepause von mindestens 30 Minuten eingehalten werden (§ 4 ArbZG)."
    },
    {
        "id": 133,
        "question": "Wie lang muss die Ruhezeit zwischen zwei Arbeitstagen sein?",
        "options": ["A) 8 Stunden", "B) Mindestens 11 Stunden ununterbrochen", "C) 12 Stunden", "D) 24 Stunden"],
        "correct_letter": "B",
        "explanation": "Nach Beendigung der täglichen Arbeitszeit muss eine ununterbrochene Ruhezeit von mindestens 11 Stunden liegen (§ 5 ArbZG)."
    },
    {
        "id": 134,
        "question": "Gilt ein Beschäftigungsverbot an Sonntagen?",
        "options": ["A) Nein", "B) Ja, grundsätzlich mit Ausnahmen", "C) Nur für Beamte", "D) Nur im Winter"],
        "correct_letter": "B",
        "explanation": "Es gilt ein grundsätzliches Beschäftigungsverbot an Sonntagen und Feiertagen, mit zahlreichen branchenspezifischen Ausnahmen (§ 9 ArbZG)."
    },
    {
        "id": 135,
        "question": "Was ist Rufbereitschaft?",
        "options": ["A) Arbeitszeit am Betrieb", "B) Bereitschaft, bei der der AN frei im Aufenthalt ist", "C) Nachtarbeit", "D) Überstunden"],
        "correct_letter": "B",
        "explanation": "Bei Rufbereitschaft kann sich der Arbeitnehmer frei aufhalten. Nur die tatsächliche Arbeitsaufnahme gilt als Arbeitszeit."
    },
    {
        "id": 136,
        "question": "Was ist Bereitschaftsdienst?",
        "options": ["A) Freiwillige Bereitschaft", "B) Bereitschaft am vom AG bestimmten Ort (zählt als Arbeitszeit)", "C) Rufbereitschaft", "D) Nachtarbeit"],
        "correct_letter": "B",
        "explanation": "Beim Bereitschaftsdienst muss sich der Arbeitnehmer an einem vom Arbeitgeber bestimmten Ort aufhalten. Die gesamte Zeit zählt als Arbeitszeit."
    },
    {
        "id": 137,
        "question": "Was ist Nachtarbeit?",
        "options": ["A) Arbeit nach 18 Uhr", "B) Arbeit zwischen 23 und 6 Uhr", "C) Arbeit nach 20 Uhr", "D) Arbeit nach 22 Uhr"],
        "correct_letter": "B",
        "explanation": "Nachtarbeit ist Arbeit zwischen 23 und 6 Uhr (§ 2 Abs. 3 ArbZG)."
    },
    {
        "id": 138,
        "question": "Was ist Gleitzeit?",
        "options": ["A) Feste Arbeitszeit", "B) Flexible Arbeitszeit mit Kernarbeitszeit", "C) Nachtarbeit", "D) Schichtarbeit"],
        "correct_letter": "B",
        "explanation": "Gleitzeit ist eine flexible Arbeitszeitgestaltung mit festen Kernarbeitszeiten und beweglichen Randzeiten."
    },
    {
        "id": 139,
        "question": "Was ist Schichtarbeit?",
        "options": ["A) Büroarbeit", "B) Arbeit nach einem Schichtplan", "C) Teilzeit", "D) Homeoffice"],
        "correct_letter": "B",
        "explanation": "Schichtarbeit ist Arbeit nach einem festen Schichtplan, der regelmäßige Arbeitszeitzuweisungen vorsieht."
    },
    {
        "id": 140,
        "question": "Was ist ein Arbeitszeitkonto?",
        "options": ["A) Bankkonto", "B) Konto für Plus-/Minusstunden zur flexiblen Arbeitszeit", "C) Lohnkonto", "D) Steuerkonto"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitszeitkonto erfasst Plus- und Minusstunden zur flexiblen Gestaltung der Arbeitszeit."
    },
    // === KÜNDIGUNGSSCHUTZ ===
    {
        "id": 141,
        "question": "Ab welcher Betriebsgröße gilt das Kündigungsschutzgesetz?",
        "options": ["A) Ab 1 Mitarbeiter", "B) Ab mehr als 10 Arbeitnehmern", "C) Ab 50 Mitarbeitern", "D) Ab 100 Mitarbeitern"],
        "correct_letter": "B",
        "explanation": "Das Kündigungsschutzgesetz gilt in Betrieben mit in der Regel mehr als 10 Arbeitnehmern (§ 23 KSchG)."
    },
    {
        "id": 142,
        "question": "Welche Kündigungsgründe sind ordentlich zulässig?",
        "options": ["A) Nur betriebsbedingt", "B) Personenbedingt, verhaltensbedingt, betriebsbedingt", "C) Nur verhaltensbedingt", "D) Keine"],
        "correct_letter": "B",
        "explanation": "Ordentliche Kündigungen sind aus personenbedingten, verhaltensbedingten oder betriebsbedingten Gründen möglich (§ 1 Abs. 2 KSchG)."
    },
    {
        "id": 143,
        "question": "Was ist eine Probezeitkündigung?",
        "options": ["A) Immer fristlos", "B) Kündigung ohne Angabe von Gründen innerhalb der Probezeit", "C) Nur nach 6 Monaten", "D) Unzulässig"],
        "correct_letter": "B",
        "explanation": "Während der Probezeit (max. 6 Monate) kann das Arbeitsverhältnis mit einer Frist von 2 Wochen ohne Angabe von Gründen gekündigt werden (§ 622 BGB)."
    },
    {
        "id": 144,
        "question": "Wie lang ist die Kündigungsfrist nach 4 Jahren Betriebszugehörigkeit?",
        "options": ["A) 1 Monat", "B) 2 Monate zum Monatsende", "C) 3 Monate", "D) 4 Monate"],
        "correct_letter": "B",
        "explanation": "Nach einer Betriebszugehörigkeit von 4 Jahren beträgt die Kündigungsfrist 2 Monate zum Monatsende (§ 622 BGB)."
    },
    {
        "id": 145,
        "question": "Was ist ein Aufhebungsvertrag?",
        "options": ["A) Kündigung durch den Arbeitgeber", "B) Einvernehmliche Beendigung des Arbeitsverhältnisses", "C) Befristung", "D) Abmahnung"],
        "correct_letter": "B",
        "explanation": "Ein Aufhebungsvertrag ist die einvernehmliche Vereinbarung zwischen Arbeitgeber und Arbeitnehmer zur Beendigung des Arbeitsverhältnisses."
    },
    {
        "id": 146,
        "question": "Was ist eine Abmahnung?",
        "options": ["A) Kündigung", "B) Vorläufige Ermahnung bei Fehlverhalten vor Kündigung", "C) Lohnkürzung", "D) Versetzung"],
        "correct_letter": "B",
        "explanation": "Eine Abmahnung ist eine formelle Ermahnung bei Fehlverhalten, die in der Regel einer verhaltensbedingten Kündigung vorausgehen muss."
    },
    {
        "id": 147,
        "question": "Was muss eine Abmahnung enthalten?",
        "options": ["A) Nur den Vorwurf", "B) Konkrete Beschreibung des Fehlverhaltens, Aufforderung zur Änderung und Androhung der Kündigung", "C) Nur die Drohung", "D) Nur das Datum"],
        "correct_letter": "B",
        "explanation": "Eine wirksame Abmahnung muss das Fehlverhalten konkret beschreiben, zur Verhaltensänderung auffordern und die Kündigung androhen."
    },
    {
        "id": 148,
        "question": "Was ist ein Zeugnis?",
        "options": ["A) Ein Geschenk", "B) Schriftliche Bewertung der Arbeitsleistung und -dauer", "C) Ein Arbeitsvertrag", "D) Eine Lohnabrechnung"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitszeugnis ist eine schriftliche Bewertung der Arbeitsleistung und -dauer, die der Arbeitnehmer bei Beendigung verlangen kann (§ 630 BGB)."
    },
    {
        "id": 149,
        "question": "Welche Arten von Zeugnissen gibt es?",
        "options": ["A) Nur einfache", "B) Einfaches und qualifiziertes Zeugnis", "C) Nur qualifiziertes", "D) Keine"],
        "correct_letter": "B",
        "explanation": "Es gibt einfache Zeugnisse (nur Daten) und qualifizierte Zeugnisse (mit Leistungs- und Verhaltensbeurteilung)."
    },
    {
        "id": 150,
        "question": "Wie lange muss ein Zeugnis erstellt werden?",
        "options": ["A) Sofort", "B) Innerhalb von 3 Wochen nach Beendigung", "C) Nach 3 Monaten", "D) Nach 1 Jahr"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber hat in der Regel 3 Wochen Zeit, ein Zeugnis zu erstellen."
    },
    // === MUTTERSCHUTZ / ELTERNZEIT ===
    {
        "id": 151,
        "question": "Wie lange dauert die Mutterschutzfrist vor der Entbindung?",
        "options": ["A) 4 Wochen", "B) 6 Wochen", "C) 8 Wochen", "D) 12 Wochen"],
        "correct_letter": "B",
        "explanation": "Die Schutzfrist beginnt 6 Wochen vor der voraussichtlichen Entbindung (§ 3 Abs. 1 MuSchG)."
    },
    {
        "id": 152,
        "question": "Wie lange dauert die Mutterschutzfrist nach der Entbindung?",
        "options": ["A) 6 Wochen", "B) 8 Wochen", "C) 12 Wochen", "D) 16 Wochen"],
        "correct_letter": "B",
        "explanation": "Die Schutzfrist nach der Entbindung beträgt regulär 8 Wochen, bei Früh- oder Mehrlingsgeburten 12 Wochen (§ 3 Abs. 2 MuSchG)."
    },
    {
        "id": 153,
        "question": "Was ist Mutterschaftsgeld?",
        "options": ["A) Lohnfortzahlung", "B) Leistung der Krankenkasse während der Mutterschutzfrist", "C) Elterngeld", "D) Kindergeld"],
        "correct_letter": "B",
        "explanation": "Mutterschaftsgeld ist eine Leistung der Krankenkasse, die das Nettoeinkommen während der Mutterschutzfrist ersetzt (§ 19 MuSchG)."
    },
    {
        "id": 154,
        "question": "Wer zahlt den Arbeitgeberzuschuss zum Mutterschaftsgeld?",
        "options": ["A) Die Krankenkasse", "B) Der Arbeitgeber (erstattet über U2)", "C) Der Staat", "D) Niemand"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber zahlt den Zuschuss zum Mutterschaftsgeld und bekommt diesen über das Umlageverfahren U2 zu 100 % erstattet."
    },
    {
        "id": 155,
        "question": "Wie lange kann Elternzeit genommen werden?",
        "options": ["A) 6 Monate", "B) Bis zu 3 Jahre pro Kind", "C) 1 Jahr", "D) 2 Jahre"],
        "correct_letter": "B",
        "explanation": "Elternzeit kann bis zu 3 Jahre pro Kind genommen werden, bis zum 8. Lebensjahr (§ 15 BEEG)."
    },
    {
        "id": 156,
        "question": "Wann muss Elternzeit angemeldet werden?",
        "options": ["A) 2 Wochen vorher", "B) Spätestens 7 Wochen vor Beginn", "C) 3 Monate vorher", "D) 1 Monat vorher"],
        "correct_letter": "B",
        "explanation": "Elternzeit muss spätestens 7 Wochen vor Beginn schriftlich beim Arbeitgeber angemeldet werden (§ 16 BEEG)."
    },
    {
        "id": 157,
        "question": "Gibt es Kündigungsschutz in der Elternzeit?",
        "options": ["A) Nein", "B) Ja, Kündigung ist grundsätzlich unzulässig", "C) Nur für Mütter", "D) Nur im ersten Jahr"],
        "correct_letter": "B",
        "explanation": "Während der Elternzeit ist eine Kündigung durch den Arbeitgeber grundsätzlich unzulässig (§ 18 BEEG)."
    },
    {
        "id": 158,
        "question": "Wie viele Stunden darf man in Elternzeit arbeiten?",
        "options": ["A) Gar nicht", "B) Bis zu 32 Stunden pro Woche", "C) Bis zu 40 Stunden", "D) Bis zu 20 Stunden"],
        "correct_letter": "B",
        "explanation": "In Elternzeit ist eine Teilzeittätigkeit von bis zu 32 Stunden pro Woche zulässig (§ 15 Abs. 4 BEEG)."
    },
    {
        "id": 159,
        "question": "Was ist Elterngeld?",
        "options": ["A) Lohnersatz", "B) Staatsleistung zur finanziellen Unterstützung bei Kindererziehung", "C) Kindergeld", "D) Mutterschaftsgeld"],
        "correct_letter": "B",
        "explanation": "Elterngeld ist eine staatliche Leistung zur finanziellen Unterstützung bei der Erziehung von Kindern."
    },
    {
        "id": 160,
        "question": "Wie lange wird Basiselterngeld gezahlt?",
        "options": ["A) 6 Monate", "B) 12 Monate", "C) 14 Monate", "D) 24 Monate"],
        "correct_letter": "B",
        "explanation": "Basiselterngeld wird für maximal 12 Monate gezahlt, bei Partnerschaftsbonus bis zu 14 Monate."
    },
    // === WEITERE THEMEN 201-300 ===
    {
        "id": 201,
        "question": "Was ist Kurzarbeit?",
        "options": ["A) Weniger arbeiten", "B) Vorübergehende Reduzierung der Arbeitszeit bei wirtschaftlichen Schwierigkeiten", "C) Teilzeit", "D) Minijob"],
        "correct_letter": "B",
        "explanation": "Kurzarbeit ist eine vorübergehende Reduzierung der Arbeitszeit bei wirtschaftlichen Schwierigkeiten, um Entlassungen zu vermeiden."
    },
    {
        "id": 202,
        "question": "Wer zahlt das Kurzarbeitergeld?",
        "options": ["A) Der Arbeitgeber", "B) Die Bundesagentur für Arbeit", "C) Die Krankenkasse", "D) Der Staat"],
        "correct_letter": "B",
        "explanation": "Das Kurzarbeitergeld wird von der Bundesagentur für Arbeit gezahlt (§ 169 SGB III)."
    },
    {
        "id": 203,
        "question": "Wie hoch ist das Kurzarbeitergeld?",
        "options": ["A) 50 %", "B) 60 % (67 % mit Kindern)", "C) 70 %", "D) 80 %"],
        "correct_letter": "B",
        "explanation": "Kurzarbeitergeld beträgt 60 % des Nettoentgeltverlusts, mit Kindern 67 %."
    },
    {
        "id": 202,
        "question": "Was ist Homeoffice?",
        "options": ["A) Arbeit im Büro", "B) Arbeit von zu Hause aus", "C) Arbeit im Ausland", "D) Arbeit im Betrieb"],
        "correct_letter": "B",
        "explanation": "Homeoffice ist das Arbeiten von zu Hause aus statt im Büro."
    },
    {
        "id": 203,
        "question": "Was ist ein Arbeitsvertrag?",
        "options": ["A) Ein Mietvertrag", "B) Vertrag über die Bedingungen eines Arbeitsverhältnisses", "C) Ein Kaufvertrag", "D) Ein Darlehensvertrag"],
        "correct_letter": "B",
        "explanation": "Der Arbeitsvertrag regelt die Bedingungen des Arbeitsverhältnisses zwischen Arbeitgeber und Arbeitnehmer (§ 611 BGB)."
    },
    {
        "id": 204,
        "question": "Was ist eine Befristung?",
        "options": ["A) Unbefristeter Vertrag", "B) Zeitlich begrenztes Arbeitsverhältnis", "C) Kündigung", "D) Abmahnung"],
        "correct_letter": "B",
        "explanation": "Eine Befristung ist ein zeitlich begrenztes Arbeitsverhältnis, das ohne Kündigung endet."
    },
    {
        "id": 205,
        "question": "Was ist ein sachlicher Grund für Befristung?",
        "options": ["A) Beliebig", "B) Vertretung, Saison, Projekt", "C) Nur Probezeit", "D) Keiner"],
        "correct_letter": "B",
        "explanation": "Sachliche Gründe für Befristung sind z.B. Vertretung, saisonale Arbeit oder Projektarbeit."
    },
    {
        "id": 206,
        "question": "Was ist eine Probezeit?",
        "options": ["A) Erste 6 Monate zur Erprobung", "B) Erste 3 Monate", "C) Erste 12 Monate", "D) Keine Probezeit"],
        "correct_letter": "A",
        "explanation": "Die Probezeit darf maximal 6 Monate betragen und dient der Erprobung des Arbeitnehmers."
    },
    {
        "id": 207,
        "question": "Was ist ein Lohnkonto?",
        "options": ["A) Bankkonto", "B) Aufzeichnung aller Lohnabrechnungen eines Kalenderjahres", "C) Steuerkonto", "D) SV-Konto"],
        "correct_letter": "B",
        "explanation": "Das Lohnkonto ist die Aufzeichnung aller Lohnabrechnungen eines Kalenderjahres für einen Arbeitnehmer (§ 41 Abs. 2 EStG)."
    },
    {
        "id": 208,
        "question": "Wie lange muss ein Lohnkonto aufbewahrt werden?",
        "options": ["A) 2 Jahre", "B) 6 Jahre", "C) 10 Jahre", "D) Unbegrenzt"],
        "correct_letter": "B",
        "explanation": "Lohnkonten müssen 6 Jahre aufbewahrt werden (§ 41 Abs. 1 EStG)."
    },
    {
        "id": 209,
        "question": "Was ist der Beitragsnachweis?",
        "options": ["A) Lohnabrechnung", "B) Meldung der SV-Beiträge an die Krankenkasse", "C) Steuererklärung", "D) Krankmeldung"],
        "correct_letter": "B",
        "explanation": "Der Beitragsnachweis ist die monatliche Meldung der Sozialversicherungsbeiträge an die Einzugsstelle (Krankenkasse)."
    },
    {
        "id": 210,
        "question": "Was ist das DEÜV-Verfahren?",
        "options": ["A) Steuererklärung", "B) Datenerfassungs- und übermittlungsverfahren für SV-Meldungen", "C) Lohnabrechnung", "D) Krankmeldung"],
        "correct_letter": "B",
        "explanation": "Das DEÜV-Verfahren regelt die elektronische Erfassung und Übermittlung von Sozialversicherungsmeldungen (DEÜV)."
    },
    {
        "id": 211,
        "question": "Was ist Meldegrund 10?",
        "options": ["A) Austritt", "B) Beginn einer Beschäftigung", "C) Krankheit", "D) Urlaub"],
        "correct_letter": "B",
        "explanation": "Meldegrund 10 kennzeichnet den Beginn einer sozialversicherungspflichtigen Beschäftigung."
    },
    {
        "id": 212,
        "question": "Was ist Meldegrund 30?",
        "options": ["A) Beginn", "B) Ende einer Beschäftigung", "C) Krankheit", "D) Urlaub"],
        "correct_letter": "B",
        "explanation": "Meldegrund 30 kennzeichnet das Ende einer Beschäftigung."
    },
    {
        "id": 213,
        "question": "Was ist Meldegrund 50?",
        "options": ["A) Beginn", "B) Ende", "C) Jahresmeldung", "D) Krankheit"],
        "correct_letter": "C",
        "explanation": "Meldegrund 50 wird für die Jahresmeldung an die Einzugsstelle verwendet."
    },
    {
        "id": 214,
        "question": "Was ist der Versicherungsausweis?",
        "options": ["A) Personalausweis", "B) Chipkarte der Krankenkasse", "C) Führerschein", "D) Reisepass"],
        "correct_letter": "B",
        "explanation": "Der Versicherungsausweis (Chipkarte) ist der Nachweis über die Mitgliedschaft in der gesetzlichen Krankenversicherung."
    },
    {
        "id": 215,
        "question": "Was ist die Sozialversicherungsausweisnummer?",
        "options": ["A) Steuer-ID", "B) Versicherungsnummer (Rentenversicherungsnummer)", "C) Personalnummer", "D) Kontonummer"],
        "correct_letter": "B",
        "explanation": "Die Sozialversicherungsausweisnummer ist die Versicherungsnummer, die auch als Rentenversicherungsnummer dient."
    },
    {
        "id": 216,
        "question": "Was ist der Gesundheitsfonds?",
        "options": ["A) Ein privater Fonds", "B) Zentraler Verteilungsmechanismus für KV-Beiträge", "C) Rentenversicherung", "D) Arbeitslosenversicherung"],
        "correct_letter": "B",
        "explanation": "Der Gesundheitsfonds ist der zentrale Verteilungsmechanismus für die Beiträge zur gesetzlichen Krankenversicherung (§ 271 SGB V)."
    },
    {
        "id": 217,
        "question": "Was ist der Risikostrukturausgleich?",
        "options": ["A) Risikoausgleich zwischen Kassen", "B) Risikoausgleich zwischen Arbeitgebern", "C) Risikoausgleich zwischen Arbeitnehmern", "D) Risikoausgleich mit dem Staat"],
        "correct_letter": "A",
        "explanation": "Der Risikostrukturausgleich gleicht unterschiedliche Kostenstrukturen zwischen den Krankenkassen aus (§ 266 SGB V)."
    },
    {
        "id": 218,
        "question": "Was ist der Morbi-RSA?",
        "options": ["A) Risikoausgleich nach Alter und Geschlecht", "B) Risikoausgleich nach Krankheiten", "C) Risikoausgleich nach Einkommen", "D) Risikoausgleich nach Region"],
        "correct_letter": "B",
        "explanation": "Der morbiditätsorientierte Risikostrukturausgleich (Morbi-RSA) gleicht Kosten für besonders kranke Versicherte zwischen den Kassen aus."
    },
    {
        "id": 219,
        "question": "Was ist eine Betriebsvereinbarung?",
        "options": ["A) Vertrag mit Kunden", "B) Vereinbarung zwischen Arbeitgeber und Betriebsrat", "C) Arbeitsvertrag", "D) Tarifvertrag"],
        "correct_letter": "B",
        "explanation": "Eine Betriebsvereinbarung ist eine Vereinbarung zwischen Arbeitgeber und Betriebsrat über betriebliche Fragen."
    },
    {
        "id": 220,
        "question": "Was ist ein Tarifvertrag?",
        "options": ["A) Vertrag mit Kunden", "B) Vertrag zwischen Gewerkschaft und Arbeitgeberverband", "C) Arbeitsvertrag", "D) Betriebsvereinbarung"],
        "correct_letter": "B",
        "explanation": "Ein Tarifvertrag ist ein Vertrag zwischen Gewerkschaft und Arbeitgeberverband über Arbeitsbedingungen."
    },
    // === WEITERE FRAGEN 221-300 ===
    {
        "id": 221,
        "question": "Was ist der Minijob-Zuschlag zur RV?",
        "options": ["A) 3,6 %", "B) 15 %", "C) 18,6 %", "D) 20 %"],
        "correct_letter": "B",
        "explanation": "Der Arbeitgeber zahlt für Minijobber einen pauschalen Beitrag von 15 % zur Rentenversicherung."
    },
    {
        "id": 222,
        "question": "Kann ein Minijobber von der RV befreit werden?",
        "options": ["A) Nein", "B) Ja, auf schriftlichen Antrag", "C) Nur nach 2 Jahren", "D) Nur über 50 Jahren"],
        "correct_letter": "B",
        "explanation": "Minijobber können sich auf schriftlichen Antrag von der Rentenversicherungspflicht befreien lassen."
    },
    {
        "id": 223,
        "question": "Was ist kurzfristige Beschäftigung?",
        "options": ["A) Minijob", "B) Zeitlich begrenzte Beschäftigung bis 3 Monate", "C) Teilzeit", "D) Vollzeit"],
        "correct_letter": "B",
        "explanation": "Kurzfristige Beschäftigung ist eine auf bis zu 3 Monate befristete Beschäftigung mit geringfügigem Umfang."
    },
    {
        "id": 224,
        "question": "Wie hoch ist die Verdienstgrenze für kurzfristige Beschäftigung?",
        "options": ["A) 603 Euro", "B) 538 Euro", "C) Keine feste Grenze", "D) 1.000 Euro"],
        "correct_letter": "B",
        "explanation": "Bei kurzfristiger Beschäftigung gilt eine Verdienstgrenze von 538 Euro im Jahr 2026."
    },
    {
        "id": 225,
        "question": "Sind kurzfristig Beschäftigte sozialversicherungspflichtig?",
        "options": ["A) Ja", "B) Nein, komplett versicherungsfrei", "C) Nur in der KV", "D) Nur in der RV"],
        "correct_letter": "B",
        "explanation": "Kurzfristig Beschäftigte sind komplett sozialversicherungsfrei."
    },
    {
        "id": 226,
        "question": "Was ist die Gleitzone?",
        "options": ["A) Urlaub", "B) Übergangsbereich zwischen Minijob und sozialversicherungspflichtiger Beschäftigung", "C) Krankheit", "D) Kündigung"],
        "correct_letter": "B",
        "explanation": "Die Gleitzone (Übergangsbereich) ist der Entgeltbereich zwischen 603 und 1.600 Euro mit reduzierten SV-Beiträgen."
    },
    {
        "id": 227,
        "question": "Wie hoch ist der RV-Beitragssatz im Übergangsbereich für den AN?",
        "options": ["A) 18,6 %", "B) Reduziert nach Faktor", "C) 15 %", "D) 0 %"],
        "correct_letter": "B",
        "explanation": "Im Übergangsbereich zahlt der AN einen reduzierten RV-Beitrag nach einem Faktorverfahren."
    },
    {
        "id": 228,
        "question": "Was ist die BBG in der AV?",
        "options": ["A) 7.550 Euro", "B) Keine BBG in der Arbeitslosenversicherung", "C) 5.175 Euro", "D) 6.000 Euro"],
        "correct_letter": "B",
        "explanation": "In der Arbeitslosenversicherung gibt es keine Beitragsbemessungsgrenze."
    },
    {
        "id": 229,
        "question": "Wie hoch ist der AV-Beitragssatz?",
        "options": ["A) 1,3 %", "B) 2,6 %", "C) 3,0 %", "D) 6,5 %"],
        "correct_letter": "B",
        "explanation": "Der Beitragssatz zur Arbeitslosenversicherung beträgt 2,6 % (je 1,3 % AG/AN)."
    },
    {
        "id": 230,
        "question": "Was ist Arbeitslosengeld?",
        "options": ["A) Lohnersatz bei Arbeitslosigkeit", "B) Krankengeld", "C) Rente", "D) Elterngeld"],
        "correct_letter": "A",
        "explanation": "Arbeitslosengeld ist eine Leistung der Bundesagentur für Arbeit bei Arbeitslosigkeit."
    },
    {
        "id": 231,
        "question": "Wie hoch ist das Arbeitslosengeld I?",
        "options": ["A) 50 %", "B) 60 % (67 % mit Kindern)", "C) 70 %", "D) 80 %"],
        "correct_letter": "B",
        "explanation": "Arbeitslosengeld I beträgt in der Regel 60 % des letzten Nettoeinkommens, mit Kindern 67 %."
    },
    {
        "id": 232,
        "question": "Wie lange wird Arbeitslosengeld I gezahlt?",
        "options": ["A) 6 Monate", "B) 12 Monate (abhängig von Alter und Versicherungsdauer)", "C) 24 Monate", "D) Unbegrenzt"],
        "correct_letter": "B",
        "explanation": "Die Dauer des Arbeitslosengeldes hängt vom Alter und der Versicherungsdauer ab, maximal 24 Monate."
    },
    {
        "id": 233,
        "question": "Was ist Bürgergeld?",
        "options": ["A) Arbeitslosengeld", "B) Grundsicherung für Arbeitsuchende", "C) Rente", "D) Kindergeld"],
        "correct_letter": "B",
        "explanation": "Bürgergeld ist die Grundsicherung für Arbeitsuchende und hat das Hartz IV abgelöst."
    },
    {
        "id": 234,
        "question": "Was ist Kindergeld?",
        "options": ["A) Elterngeld", "B) Monatliche Zahlung für Kinder", "C) Mutterschaftsgeld", "D) Krankengeld"],
        "correct_letter": "B",
        "explanation": "Kindergeld ist eine monatliche Zahlung für Kinder bis zum 18. Lebensjahr (bis 25 bei Ausbildung)."
    },
    {
        "id": 235,
        "question": "Wie hoch ist das Kindergeld 2026?",
        "options": ["A) 200 Euro", "B) 250 Euro", "C) 300 Euro", "D) 350 Euro"],
        "correct_letter": "B",
        "explanation": "Das Kindergeld beträgt 2026 250 Euro pro Kind für das erste und zweite Kind."
    },
    {
        "id": 236,
        "question": "Was ist Kinderzuschlag?",
        "options": ["A) Zusätzliches Kindergeld", "B) Zuschlag für Geringverdiener mit Kindern", "C) Elterngeld", "D) Mutterschaftsgeld"],
        "correct_letter": "B",
        "explanation": "Der Kinderzuschlag ist ein Zuschlag für Geringverdiener mit Kindern, der zusätzlich zum Kindergeld gezahlt wird."
    },
    {
        "id": 237,
        "question": "Was ist der Kinderfreibetrag?",
        "options": ["A) Monatliche Zahlung", "B) Freibetrag in der Steuererklärung", "C) Kindergeld", "D) Elterngeld"],
        "correct_letter": "B",
        "explanation": "Der Kinderfreibetrag ist ein Freibetrag in der Einkommensteuererklärung für Kinder."
    },
    {
        "id": 238,
        "question": "Wie hoch ist der Kinderfreibetrag pro Kind?",
        "options": ["A) 3.000 Euro", "B) 6.384 Euro", "C) 8.000 Euro", "D) 10.000 Euro"],
        "correct_letter": "B",
        "explanation": "Der Kinderfreibetrag beträgt 6.384 Euro pro Kind und Jahr (3.192 Euro pro Elternteil)."
    },
    {
        "id": 239,
        "question": "Was ist das Realsplitting?",
        "options": ["A) Steuerklasse IV-Faktor", "B) Gemeinsame Veranlagung von Ehegatten", "C) Steuerklasse III/V", "D) Einzelveranlagung"],
        "correct_letter": "B",
        "explanation": "Beim Realsplitting werden Ehegatten gemeinsam veranlagt, wenn dies günstiger ist als die getrennte Veranlagung."
    },
    {
        "id": 240,
        "question": "Was ist das Günstigerprüfung?",
        "options": ["A) Prüfung der Steuerklasse", "B) Vergleich zwischen Zusammenveranlagung und Einzelveranlagung", "C) Prüfung des Kindergelds", "D) Prüfung der SV-Beiträge"],
        "correct_letter": "B",
        "explanation": "Die Günstigerprüfung vergleicht die Zusammenveranlagung mit der Einzelveranlagung und wählt das günstigere Verfahren."
    },
    // === WEITERE FRAGEN 241-300 ===
    {
        "id": 241,
        "question": "Was ist eine betriebliche Altersvorsorge (bAV)?",
        "options": ["A) Private Rentenversicherung", "B) Vom Arbeitgeber finanzierte oder geförderte Altersvorsorge", "C) Sozialversicherung", "D) Lebensversicherung"],
        "correct_letter": "B",
        "explanation": "Die betriebliche Altersvorsorge ist eine vom Arbeitgeber finanzierte oder geförderte Form der Altersvorsorge."
    },
    {
        "id": 242,
        "question": "Bis zu welcher Höhe sind Beiträge zur Direktversicherung steuerfrei?",
        "options": ["A) 234 Euro monatlich (8% der BBG)", "B) 500 Euro monatlich", "C) 1.000 Euro monatlich", "D) 200 Euro monatlich"],
        "correct_letter": "A",
        "explanation": "Beiträge zur Direktversicherung sind bis zu 234 Euro monatlich (8 % der BBG) steuerfrei (§ 3 Nr. 63 EStG)."
    },
    {
        "id": 243,
        "question": "Was ist ein Pensionsfonds?",
        "options": ["A) Ein Sparbuch", "B) Ein Durchführungsweg der bAV", "C) Eine Aktie", "D) Ein Fonds"],
        "correct_letter": "B",
        "explanation": "Der Pensionsfonds ist einer der fünf Durchführungswege der betrieblichen Altersvorsorge."
    },
    {
        "id": 244,
        "question": "Was ist eine Direktzusage?",
        "options": ["A) Direkte Zahlung vom Arbeitgeber", "B) Versprechen des Arbeitgebers auf lebenslange Rentenzahlung", "C) Direktversicherung", "D) Pensionskasse"],
        "correct_letter": "B",
        "explanation": "Die Direktzusage ist ein direktes Versprechen des Arbeitgebers auf lebenslange Rentenzahlung."
    },
    {
        "id": 245,
        "question": "Was ist eine Pensionskasse?",
        "options": ["A) Eine Krankenversicherung", "B) Ein Durchführungsweg der bAV", "C) Eine Rentenversicherung", "D) Eine Lebensversicherung"],
        "correct_letter": "B",
        "explanation": "Die Pensionskasse ist ein Durchführungsweg der betrieblichen Altersvorsorge."
    },
    {
        "id": 246,
        "question": "Was ist ein Unterstützungskassen?",
        "options": ["A) Eine Krankenkasse", "B) Ein Durchführungsweg der bAV ohne Insolvenzschutz", "C) Eine Rentenkasse", "D) Eine Unfallkasse"],
        "correct_letter": "B",
        "explanation": "Die Unterstützungskasse ist ein Durchführungsweg der bAV ohne staatlichen Insolvenzschutz."
    },
    {
        "id": 247,
        "question": "Was ist der PscheR?",
        "options": ["A) Ein Gesetz", "B) Pensions-Sicherungs-Verein", "C) Eine Krankenkasse", "D) Eine Rentenkasse"],
        "correct_letter": "B",
        "explanation": "Der PscheR (Pensions-Sicherungs-Verein) sichert die Ansprüche aus der bAV bei Insolvenz des Arbeitgebers."
    },
    {
        "id": 248,
        "question": "Was ist die Entgeltumwandlung?",
        "options": ["A) Lohnerhöhung", "B) Umwandlung von Bruttogehalt in bAV-Beiträge", "C) Lohnkürzung", "D) Gehaltsumwandlung"],
        "correct_letter": "B",
        "explanation": "Die Entgeltumwandlung ist die Umwandlung von Bruttogehaltsteilen in Beiträge zur betrieblichen Altersvorsorge."
    },
    {
        "id": 249,
        "question": "Bis zu welcher Höhe ist Entgeltumwandlung möglich?",
        "options": ["A) Bis zu 4 % der BBG", "B) Bis zu 8 % der BBG", "C) Bis zu 10 % der BBG", "D) Unbegrenzt"],
        "correct_letter": "A",
        "explanation": "Die Entgeltumwandlung ist bis zu 4 % der BBG steuer- und soversicherungsfrei möglich."
    },
    {
        "id": 250,
        "question": "Was ist der Betriebsrat?",
        "options": ["A) Die Geschäftsführung", "B) Interessenvertretung der Arbeitnehmer", "C) Der Aufsichtsrat", "D) Die Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Der Betriebsrat ist die gesetzliche Interessenvertretung der Arbeitnehmer in einem Betrieb."
    },
    {
        "id": 251,
        "question": "Wann wird ein Betriebsrat gewählt?",
        "options": ["A) Alle 2 Jahre", "B) Alle 4 Jahre", "C) Alle 6 Jahre", "D) Nur bei Bedarf"],
        "correct_letter": "B",
        "explanation": "Der Betriebsrat wird alle 4 Jahre gewählt."
    },
    {
        "id": 252,
        "question": "Ab wie vielen Mitarbeitern kann ein Betriebsrat gewählt werden?",
        "options": ["A) Ab 1 Mitarbeiter", "B) Ab 5 Mitarbeitern", "C) Ab 10 Mitarbeitern", "D) Ab 20 Mitarbeitern"],
        "correct_letter": "B",
        "explanation": "In Betrieben mit mindestens 5 wahlberechtigten Arbeitnehmern kann ein Betriebsrat gewählt werden."
    },
    {
        "id": 253,
        "question": "Was ist der Aufsichtsrat?",
        "options": ["A) Betriebsrat", "B) Überwachungsorgan in größeren Unternehmen", "C) Geschäftsführung", "D) Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Der Aufsichtsrat ist das Überwachungsorgan in größeren Unternehmen, paritätisch besetzt mit Arbeitnehmer- und Arbeitgebervertretern."
    },
    {
        "id": 254,
        "question": "Ab wie vielen Mitarbeitern muss ein Aufsichtsrat gebildet werden?",
        "options": ["A) Ab 100", "B) Ab 500", "C) Ab 1.000", "D) Ab 2.000"],
        "correct_letter": "B",
        "explanation": "In Unternehmen mit mehr als 500 Mitarbeitern muss ein Aufsichtsrat gebildet werden."
    },
    {
        "id": 255,
        "question": "Was ist Mitbestimmung?",
        "options": ["A) Alleinentscheidung", "B) Beteiligung der Arbeitnehmer an betrieblichen Entscheidungen", "C) Kündigung", "D) Einstellung"],
        "correct_letter": "B",
        "explanation": "Mitbestimmung ist die Beteiligung der Arbeitnehmer an betrieblichen Entscheidungen durch den Betriebsrat."
    },
    {
        "id": 256,
        "question": "Was ist ein Wirtschaftsausschuss?",
        "options": ["A) Ein Ausschuss des Betriebsrats", "B) Ein Ausschuss der Geschäftsführung", "C) Ein externer Berater", "D) Ein Prüfer"],
        "correct_letter": "A",
        "explanation": "Der Wirtschaftsausschuss ist ein Ausschuss des Betriebsrats, der wirtschaftliche Angelegenheiten berät."
    },
    {
        "id": 257,
        "question": "Was ist eine Einigungsstelle?",
        "options": ["A) Ein Gericht", "B) Schlichtungsstelle bei Streit zwischen Arbeitgeber und Betriebsrat", "C) Ein Betriebsausschuss", "D) Eine Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Die Einigungsstelle ist eine Schlichtungsstelle bei Streitigkeiten zwischen Arbeitgeber und Betriebsrat."
    },
    {
        "id": 258,
        "question": "Was ist das Betriebsverfassungsgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über die Betriebsverfassung", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Das Betriebsverfassungsgesetz (BetrVG) regelt die Betriebsverfassung und die Mitbestimmungsrechte."
    },
    {
        "id": 259,
        "question": "Was ist eine Jugend- und Auszubildendenvertretung?",
        "options": ["A) Betriebsrat", "B) Interessenvertretung der jugendlichen Arbeitnehmer und Auszubildenden", "C) Gewerkschaft", "D) Aufsichtsrat"],
        "correct_letter": "B",
        "explanation": "Die JAV ist die Interessenvertretung der jugendlichen Arbeitnehmer und Auszubildenden."
    },
    {
        "id": 260,
        "question": "Was ist eine Schwerbehindertenvertretung?",
        "options": ["A) Betriebsrat", "B) Interessenvertretung schwerbehinderter Mitarbeiter", "C) Gewerkschaft", "D) Aufsichtsrat"],
        "correct_letter": "B",
        "explanation": "Die Schwerbehindertenvertretung vertritt die Interessen schwerbehinderter Mitarbeiter."
    },
    // === WEITERE FRAGEN 261-300 ===
    {
        "id": 261,
        "question": "Was ist der Gleichstellungsbegriff?",
        "options": ["A) Alle sind gleich", "B) Gleichbehandlung von Männern und Frauen", "C) Gleiches Gehalt", "D) Gleiche Arbeitszeit"],
        "correct_letter": "B",
        "explanation": "Der Gleichstellungsbegriff umfasst die rechtliche Gleichbehandlung von Männern und Frauen."
    },
    {
        "id": 262,
        "question": "Was ist das Entgelttransparenzgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zur Förderung der Entgelttransparenz zwischen Männern und Frauen", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Das Entgelttransparenzgesetz fördert die Transparenz der Entgeltstrukturen zwischen Männern und Frauen."
    },
    {
        "id": 263,
        "question": "Was ist das Allgemeine Gleichbehandlungsgesetz (AGG)?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zur Verhinderung von Diskriminierung", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Das AGG verbietet Diskriminierung aus Gründen der Rasse, ethnischen Herkunft, Geschlecht, Religion, Behinderung, Alter oder sexuellen Identität."
    },
    {
        "id": 264,
        "question": "Was ist eine Eingliederungsvereinbarung?",
        "options": ["A) Ein Arbeitsvertrag", "B) Vereinbarung zur Wiedereingliederung nach Krankheit", "C) Ein Aufhebungsvertrag", "D) Ein Zeugnis"],
        "correct_letter": "B",
        "explanation": "Die Eingliederungsvereinbarung regelt die schrittweise Wiedereingliederung nach langer Krankheit."
    },
    {
        "id": 265,
        "question": "Was ist das Hamburger Modell?",
        "options": ["A) Ein Arbeitszeitmodell", "B) Stufenweise Wiedereingliederung nach Krankheit", "C) Ein Lohnmodell", "D) Ein Rentenmodell"],
        "correct_letter": "B",
        "explanation": "Das Hamburger Modell ist die stufenweise Wiedereingliederung nach langer Krankheit bei weiterem Bezug von Krankengeld."
    },
    {
        "id": 266,
        "question": "Was ist Kinderkrankengeld?",
        "options": ["A) Kindergeld", "B) Leistung bei Pflege eines kranken Kindes", "C) Elterngeld", "D) Mutterschaftsgeld"],
        "correct_letter": "B",
        "explanation": "Kinderkrankengeld wird gewährt, wenn ein Arbeitnehmer sein krankes Kind pflegen muss."
    },
    {
        "id": 267,
        "question": "Wie lange wird Kinderkrankengeld gezahlt?",
        "options": ["A) 3 Tage", "B) Bis zu 10 Tage pro Kind und Jahr", "C) 4 Wochen", "D) 6 Monate"],
        "correct_letter": "B",
        "explanation": "Kinderkrankengeld wird bis zu 10 Tage pro Kind und Jahr (20 Tage bei alleinerziehenden) gezahlt."
    },
    {
        "id": 268,
        "question": "Was ist Pflegezeit?",
        "options": ["A) Urlaub", "B) Freistellung zur Pflege naher Angehöriger", "C) Krankheit", "D) Elternzeit"],
        "correct_letter": "B",
        "explanation": "Pflegezeit ist eine Freistellung von bis zu 10 Tagen zur Pflege naher Angehöriger."
    },
    {
        "id": 269,
        "question": "Was ist Familienpflegezeit?",
        "options": ["A) Kurzzeitige Pflege", "B) Freistellung bis zu 24 Monaten zur Pflege", "C) Elternzeit", "D) Pflegezeit"],
        "correct_letter": "B",
        "explanation": "Familienpflegezeit ist eine Freistellung von bis zu 24 Monaten zur Pflege naher Angehöriger."
    },
    {
        "id": 270,
        "question": "Was ist Pflegeunterstützungsgeld?",
        "options": ["A) Kindergeld", "B) Lohnersatz bei Pflegezeit", "C) Elterngeld", "D) Mutterschaftsgeld"],
        "correct_letter": "B",
        "explanation": "Pflegeunterstützungsgeld ist ein Lohnersatz während der Pflegezeit."
    },
    {
        "id": 271,
        "question": "Was ist das Nachweisgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über den Nachweis von Arbeitsbedingungen", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Das Nachweisgesetz verpflichtet Arbeitgeber, wesentliche Arbeitsbedingungen schriftlich nachzuweisen."
    },
    {
        "id": 272,
        "question": "Was muss der Arbeitsvertrag enthalten?",
        "options": ["A) Nur das Gehalt", "B) Name der Vertragsparteien, Beginn, Vergütung, Arbeitszeit, Urlaub", "C) Nur den Arbeitsort", "D) Nur die Kündigungsfrist"],
        "correct_letter": "B",
        "explanation": "Der Arbeitsvertrag muss Name der Parteien, Beginn, Vergütung, Arbeitszeit, Urlaub und Kündigungsfrist enthalten."
    },
    {
        "id": 273,
        "question": "Was ist ein schriftlicher Arbeitsvertrag?",
        "options": ["A) Mündliche Vereinbarung", "B) Schriftliche Vereinbarung über das Arbeitsverhältnis", "C) Ein Zeugnis", "D) Eine Abmahnung"],
        "correct_letter": "B",
        "explanation": "Ein schriftlicher Arbeitsvertrag ist eine schriftliche Vereinbarung über die Bedingungen des Arbeitsverhältnisses."
    },
    {
        "id": 274,
        "question": "Ist ein schriftlicher Arbeitsvertrag Pflicht?",
        "options": ["A) Ja, immer", "B) Nein, aber der Arbeitgeber muss die Bedingungen schriftlich nachweisen", "C) Nur bei Beamten", "D) Nur bei Führungskräften"],
        "correct_letter": "B",
        "explanation": "Ein schriftlicher Arbeitsvertrag ist nicht zwingend, aber der Arbeitgeber muss die Bedingungen spätestens einen Monat nach Beginn schriftlich nachweisen."
    },
    {
        "id": 275,
        "question": "Was ist ein Probearbeitsverhältnis?",
        "options": ["A) Ein befristetes Arbeitsverhältnis", "B) Ein Arbeitsverhältnis mit Probezeit", "C) Ein Minijob", "D) Ein Praktikum"],
        "correct_letter": "B",
        "explanation": "Ein Probearbeitsverhältnis ist ein Arbeitsverhältnis mit einer Probezeit von maximal 6 Monaten."
    },
    {
        "id": 276,
        "question": "Was ist ein Praktikum?",
        "options": ["A) Ein Arbeitsverhältnis", "B) Eine berufsorientierte Ausbildung", "C) Ein Minijob", "D) Eine Teilzeit"],
        "correct_letter": "B",
        "explanation": "Ein Praktikum ist eine berufsorientierte Ausbildung zur Orientierung."
    },
    {
        "id": 277,
        "question": "Was ist ein Pflichtpraktikum?",
        "options": ["A) Freiwilliges Praktikum", "B) Im Rahmen von Ausbildung oder Studium vorgeschrieben", "C) Ein Minijob", "D) Eine Teilzeit"],
        "correct_letter": "B",
        "explanation": "Ein Pflichtpraktikum ist im Rahmen einer schulischen Ausbildung oder eines Studiums vorgeschrieben."
    },
    {
        "id": 278,
        "question": "Was ist ein freiwilliges Praktikum?",
        "options": ["A) Pflichtpraktikum", "B) Nicht vorgeschriebenes Praktikum", "C) Minijob", "D) Teilzeit"],
        "correct_letter": "B",
        "explanation": "Ein freiwilliges Praktikum ist nicht vorgeschrieben und dient der beruflichen Orientierung."
    },
    {
        "id": 279,
        "question": "Wie lange darf ein freiwilliges Praktikum dauern?",
        "options": ["A) Unbegrenzt", "B) Maximal 3 Monate", "C) Maximal 6 Monate", "D) Maximal 12 Monate"],
        "correct_letter": "B",
        "explanation": "Ein freiwilliges Praktikum darf maximal 3 Monate dauern, danach muss Mindestlohn gezahlt werden."
    },
    {
        "id": 280,
        "question": "Was ist ein Werkstudent?",
        "options": ["A) Ein regulärer Student", "B) Ein Student, der neben dem Studium arbeitet", "C) Ein Auszubildender", "D) Ein Schüler"],
        "correct_letter": "B",
        "explanation": "Ein Werkstudent ist ein Student, der neben dem Studium arbeitet."
    },
    // === WEITERE FRAGEN 281-340 ===
    {
        "id": 281,
        "question": "Sind Werkstudenten sozialversicherungspflichtig?",
        "options": ["A) Ja, immer", "B) Nein, unter bestimmten Voraussetzungen (Werkstudentenprivileg)", "C) Nur in der KV", "D) Nur in der RV"],
        "correct_letter": "B",
        "explanation": "Werkstudenten sind unter bestimmten Voraussetzungen (max. 20 Stunden/Woche, Studium im Vordergrund) von der SV-Pflicht befreit."
    },
    {
        "id": 282,
        "question": "Was ist das Werkstudentenprivileg?",
        "options": ["A) Steuerfreiheit", "B) Befreiung von der Sozialversicherungspflicht", "C) Urlaubsanspruch", "D) Kündigungsschutz"],
        "correct_letter": "B",
        "explanation": "Das Werkstudentenprivileg befreit Studenten unter bestimmten Voraussetzungen von der Sozialversicherungspflicht."
    },
    {
        "id": 283,
        "question": "Was ist ein geringfügig Beschäftigter?",
        "options": ["A) Ein Teilzeitbeschäftigter", "B) Ein Minijobber mit Verdienst bis 603 Euro", "C) Ein Vollzeitbeschäftigter", "D) Ein Praktikant"],
        "correct_letter": "B",
        "explanation": "Ein geringfügig Beschäftigter (Minijobber) verdient bis zu 603 Euro monatlich."
    },
    {
        "id": 284,
        "question": "Was ist ein Midijobber?",
        "options": ["A) Ein Minijobber", "B) Ein Arbeitnehmer im Übergangsbereich (603-1.600 Euro)", "C) Ein Vollzeitbeschäftigter", "D) Ein Praktikant"],
        "correct_letter": "B",
        "explanation": "Ein Midijobber ist ein Arbeitnehmer im Übergangsbereich zwischen 603 und 1.600 Euro."
    },
    {
        "id": 285,
        "question": "Was ist ein 520-Euro-Job?",
        "options": ["A) Ein Minijob", "B) Ein Midijob", "C) Ein Vollzeitjob", "D) Ein Praktikum"],
        "correct_letter": "A",
        "explanation": "Ein 520-Euro-Job war die alte Bezeichnung für einen Minijob (heute 603 Euro)."
    },
    {
        "id": 286,
        "question": "Was ist ein 450-Euro-Job?",
        "options": ["A) Ein Minijob", "B) Ein Midijob", "C) Ein Vollzeitjob", "D) Ein Praktikum"],
        "correct_letter": "A",
        "explanation": "Ein 450-Euro-Job war die alte Bezeichnung für einen Minijob (heute 603 Euro)."
    },
    {
        "id": 287,
        "question": "Was ist ein Haushaltsscheck?",
        "options": ["A) Ein Lohnschein", "B) Ein Verfahren zur Registrierung von Minijobs im Privathaushalt", "C) Ein Bankcheck", "D) Ein Steuercheck"],
        "correct_letter": "B",
        "explanation": "Der Haushaltsscheck ist ein Verfahren zur Registrierung von Minijobs im Privathaushalt."
    },
    {
        "id": 288,
        "question": "Was ist ein Haushaltsscheckverfahren?",
        "options": ["A) Lohnabrechnung", "B) Vereinfachtes Meldeverfahren für Minijobs im Privathaushalt", "C) Steuererklärung", "D) Krankmeldung"],
        "correct_letter": "B",
        "explanation": "Das Haushaltsscheckverfahren ist ein vereinfachtes Meldeverfahren für Minijobs im Privathaushalt."
    },
    {
        "id": 289,
        "question": "Was ist ein Dienstleistungsscheck?",
        "options": ["A) Ein Lohnschein", "B) Ein Verfahren zur Registrierung von Minijobs", "C) Ein Bankcheck", "D) Ein Steuercheck"],
        "correct_letter": "B",
        "explanation": "Der Dienstleistungsscheck ist ein Verfahren zur Registrierung von Minijobs in Privathaushalten."
    },
    {
        "id": 290,
        "question": "Was ist ein Saisonarbeiter?",
        "options": ["A) Ein Vollzeitbeschäftigter", "B) Ein zeitlich begrenzt beschäftigter Arbeitnehmer in saisonabhängigen Branchen", "C) Ein Minijobber", "D) Ein Praktikant"],
        "correct_letter": "B",
        "explanation": "Ein Saisonarbeiter ist ein zeitlich begrenzt beschäftigter Arbeitnehmer in saisonabhängigen Branchen (z.B. Landwirtschaft, Tourismus)."
    },
    {
        "id": 291,
        "question": "Was ist ein Aushilfskraft?",
        "options": ["A) Ein Vollzeitbeschäftigter", "B) Ein vorübergehend beschäftigter Arbeitnehmer", "C) Ein Minijobber", "D) Ein Praktikant"],
        "correct_letter": "B",
        "explanation": "Eine Aushilfskraft ist ein vorübergehend beschäftigter Arbeitnehmer zur Unterstützung bei Spitzenbelastungen."
    },
    {
        "id": 292,
        "question": "Was ist ein Leiharbeitsverhältnis?",
        "options": ["A) Ein reguläres Arbeitsverhältnis", "B) Arbeitnehmer ist bei Verleihfirma angestellt, arbeitet aber bei Entleihfirma", "C) Ein Minijob", "D) Ein Praktikum"],
        "correct_letter": "B",
        "explanation": "Bei Leiharbeit ist der Arbeitnehmer bei einer Verleihfirma angestellt, arbeitet aber bei einer Entleihfirma."
    },
    {
        "id": 293,
        "question": "Was ist ein Zeitarbeitsunternehmen?",
        "options": ["A) Ein reguläres Unternehmen", "B) Eine Verleihfirma für Leiharbeitnehmer", "C) Ein Praktikumsgeber", "D) Ein Minijobber"],
        "correct_letter": "B",
        "explanation": "Ein Zeitarbeitsunternehmen ist eine Verleihfirma, die Arbeitnehmer an andere Unternehmen verleiht."
    },
    {
        "id": 294,
        "question": "Was ist equal pay?",
        "options": ["A) Gleiches Gehalt für alle", "B) Gleiches Entgelt für Leiharbeitnehmer wie Stammbelegschaft", "C) Gleiche Arbeitszeit", "D) Gleicher Urlaub"],
        "correct_letter": "B",
        "explanation": "Equal Pay bedeutet, dass Leiharbeitnehmer nach einer bestimmten Zeit das gleiche Entgelt wie vergleichbare Stammbelegschaft erhalten müssen."
    },
    {
        "id": 295,
        "question": "Was ist equal treatment?",
        "options": ["A) Gleiche Behandlung", "B) Gleichbehandlung von Leiharbeitnehmern in Arbeitsbedingungen", "C) Gleiches Gehalt", "D) Gleicher Urlaub"],
        "correct_letter": "B",
        "explanation": "Equal Treatment bedeutet die Gleichbehandlung von Leiharbeitnehmern in den Arbeitsbedingungen."
    },
    {
        "id": 296,
        "question": "Was ist ein Werkvertrag?",
        "options": ["A) Ein Arbeitsvertrag", "B) Vertrag über die Herstellung eines Werks", "C) Ein Mietvertrag", "D) Ein Kaufvertrag"],
        "correct_letter": "B",
        "explanation": "Ein Werkvertrag ist ein Vertrag über die Herstellung eines Werks gegen Zahlung einer Vergütung."
    },
    {
        "id": 297,
        "question": "Was ist ein Dienstvertrag?",
        "options": ["A) Ein Arbeitsvertrag", "B) Vertrag über die Erbringung einer Dienstleistung", "C) Ein Mietvertrag", "D) Ein Kaufvertrag"],
        "correct_letter": "B",
        "explanation": "Ein Dienstvertrag ist ein Vertrag über die Erbringung einer Dienstleistung gegen Vergütung."
    },
    {
        "id": 298,
        "question": "Was ist der Unterschied zwischen Werkvertrag und Dienstvertrag?",
        "options": ["A) Kein Unterschied", "B) Werkvertrag = Erfolg, Dienstvertrag = Tätigkeit", "C) Werkvertrag = Tätigkeit, Dienstvertrag = Erfolg", "D) Nur der Preis"],
        "correct_letter": "B",
        "explanation": "Beim Werkvertrag wird der Erfolg geschuldet, beim Dienstvertrag die Tätigkeit."
    },
    {
        "id": 299,
        "question": "Was ist Scheinselbständigkeit?",
        "options": ["A) Echte Selbstständigkeit", "B) Falsch als selbstständig deklarierte Arbeitnehmer", "C) Ein Minijob", "D) Ein Praktikum"],
        "correct_letter": "B",
        "explanation": "Scheinselbständigkeit liegt vor, wenn jemand als selbstständig tätig ist, aber tatsächlich wie ein Arbeitnehmer abhängig beschäftigt ist."
    },
    {
        "id": 300,
        "question": "Was ist eine Scheinwerkstatt?",
        "options": ["A) Eine echte Werkstatt", "B) Ein Unternehmen, das nur auf dem Papier existiert", "C) Ein Praktikumsbetrieb", "D) Ein Minijob"],
        "correct_letter": "B",
        "explanation": "Eine Scheinwerkstatt ist ein Unternehmen, das nur auf dem Papier existiert, um Schwarzarbeit zu verschleiern."
    },
    // === WEITERE FRAGEN 301-340 ===
    {
        "id": 301,
        "question": "Was ist Schwarzarbeit?",
        "options": ["A) Nachts arbeiten", "B) Nicht angemeldete Arbeit", "C) Überstunden", "D) Teilzeit"],
        "correct_letter": "B",
        "explanation": "Schwarzarbeit ist nicht angemeldete und versteuerte Arbeit."
    },
    {
        "id": 302,
        "question": "Wer kontrolliert Schwarzarbeit?",
        "options": ["A) Die Polizei", "B) Die Finanzkontrolle Schwarzarbeit beim Zoll", "C) Das Finanzamt", "D) Die Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Die Finanzkontrolle Schwarzarbeit beim Zoll kontrolliert Schwarzarbeit."
    },
    {
        "id": 303,
        "question": "Was ist eine Betriebsprüfung?",
        "options": ["A) Prüfung durch den Betriebsrat", "B) Prüfung durch die Finanzverwaltung", "C) Prüfung durch die Krankenkasse", "D) Prüfung durch die Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Eine Betriebsprüfung ist eine Prüfung durch die Finanzverwaltung zur Kontrolle der steuerlichen und sozialversicherungsrechtlichen Pflichten."
    },
    {
        "id": 304,
        "question": "Was ist eine Lohnsteuer-Außenprüfung?",
        "options": ["A) Prüfung durch den Arbeitgeber", "B) Prüfung der Lohnsteuer durch das Finanzamt", "C) Prüfung durch die Krankenkasse", "D) Prüfung durch die Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteuer-Außenprüfung ist eine Prüfung der Lohnsteuer durch das Finanzamt beim Arbeitgeber."
    },
    {
        "id": 305,
        "question": "Was ist eine Sozialversicherungsaudit?",
        "options": ["A) Prüfung durch den Arbeitgeber", "B) Prüfung der SV-Beiträge durch die Einzugsstelle", "C) Prüfung durch das Finanzamt", "D) Prüfung durch die Gewerkschaft"],
        "correct_letter": "B",
        "explanation": "Ein Sozialversicherungsaudit ist eine Prüfung der SV-Beiträge durch die Einzugsstelle."
    },
    {
        "id": 306,
        "question": "Was ist ein Lohnabrechnungsprogramm?",
        "options": ["A) Ein Textverarbeitungsprogramm", "B) Software zur Erstellung von Lohnabrechnungen", "C) Ein Tabellenkalkulationsprogramm", "D) Ein Grafikprogramm"],
        "correct_letter": "B",
        "explanation": "Ein Lohnabrechnungsprogramm ist eine Software zur automatisierten Erstellung von Lohnabrechnungen."
    },
    {
        "id": 307,
        "question": "Was muss ein Lohnabrechnungsprogramm können?",
        "options": ["A) Nur Text schreiben", "B) Lohnsteuer, SV-Beiträge, Netto berechnen", "C) Nur drucken", "D) Nur speichern"],
        "correct_letter": "B",
        "explanation": "Ein Lohnabrechnungsprogramm muss Lohnsteuer, SV-Beiträge und Nettogehalt korrekt berechnen können."
    },
    {
        "id": 308,
        "question": "Was ist ein ELSTER-Zertifikat?",
        "options": ["A) Ein Schulzeugnis", "B) Ein Zertifikat für die elektronische Kommunikation mit dem Finanzamt", "C) Ein SV-Zertifikat", "D) Ein Bankzertifikat"],
        "correct_letter": "B",
        "explanation": "Ein ELSTER-Zertifikat ist ein Zertifikat für die sichere elektronische Kommunikation mit dem Finanzamt."
    },
    {
        "id": 309,
        "question": "Was ist ein GKV-SV-Zertifikat?",
        "options": ["A) Ein Schulzeugnis", "B) Ein Zertifikat für die elektronische Kommunikation mit der Krankenkasse", "C) Ein ELSTER-Zertifikat", "D) Ein Bankzertifikat"],
        "correct_letter": "B",
        "explanation": "Ein GKV-SV-Zertifikat ist ein Zertifikat für die sichere elektronische Kommunikation mit der Krankenkasse."
    },
    {
        "id": 310,
        "question": "Was ist ein Datensatz?",
        "options": ["A) Ein Datenträger", "B) Eine strukturierte Menge von Daten", "C) Ein Programm", "D) Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Ein Datensatz ist eine strukturierte Menge von Daten zu einem bestimmten Thema."
    },
    {
        "id": 311,
        "question": "Was ist eine CSV-Datei?",
        "options": ["A) Ein Bild", "B) Eine Datei mit durch Kommas getrennten Werten", "C) Ein Programm", "D) Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Eine CSV-Datei (Comma Separated Values) ist eine Datei mit durch Kommas getrennten Werten."
    },
    {
        "id": 312,
        "question": "Was ist eine XML-Datei?",
        "options": ["A) Ein Bild", "B) Eine Datei mit strukturierten Daten in XML-Format", "C) Ein Programm", "D) Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Eine XML-Datei ist eine Datei mit strukturierten Daten im XML-Format."
    },
    {
        "id": 313,
        "question": "Was ist eine API?",
        "options": ["A) Ein Apfel", "B) Eine Programmierschnittstelle", "C) Ein Programm", "D) Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Eine API (Application Programming Interface) ist eine Programmierschnittstelle für den Datenaustausch."
    },
    {
        "id": 314,
        "question": "Was ist ein Web-Service?",
        "options": ["A) Ein Internetdienst", "B) Ein Dienst über das Internet", "C) Ein Programm", "D] Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Ein Web-Service ist ein Dienst, der über das Internet bereitgestellt wird."
    },
    {
        "id": 315,
        "question": "Was ist Cloud-Computing?",
        "options": ["A) Rechnen im Wolken", "B) Nutzung von IT-Ressourcen über das Internet", "C) Ein Programm", "D) Ein Dokument"],
        "correct_letter": "B",
        "explanation": "Cloud-Computing ist die Nutzung von IT-Ressourcen über das Internet."
    },
    {
        "id": 316,
        "question": "Was ist SaaS?",
        "options": ["A) Software as a Service", "B) Software as a System", "C) Software as a Solution", "D) Software as a Server"],
        "correct_letter": "A",
        "explanation": "SaaS (Software as a Service) ist die Bereitstellung von Software als Dienst über das Internet."
    },
    {
        "id": 317,
        "question": "Was ist eine Lohnabrechnung in der Cloud?",
        "options": ["A) Lohnabrechnung auf Papier", "B) Lohnabrechnung über Internet-Software", "C) Lohnabrechnung lokal", "D) Lohnabrechnung manuell"],
        "correct_letter": "B",
        "explanation": "Lohnabrechnung in der Cloud bedeutet die Nutzung von Internet-Software zur Lohnabrechnung."
    },
    {
        "id": 318,
        "question": "Was ist Datenschutz?",
        "options": ["A) Schutz von Daten", "B) Schutz personenbezogener Daten", "C) Schutz von Programmen", "D) Schutz von Dokumenten"],
        "correct_letter": "B",
        "explanation": "Datenschutz ist der Schutz personenbezogener Daten vor Missbrauch."
    },
    {
        "id": 319,
        "question": "Was ist die DSGVO?",
        "options": ["A) Ein Steuergesetz", "B) Datenschutz-Grundverordnung der EU", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Die DSGVO ist die Datenschutz-Grundverordnung der EU zum Schutz personenbezogener Daten."
    },
    {
        "id": 320,
        "question": "Was ist ein Betriebsgeheimnis?",
        "options": ["A) Ein öffentliches Geheimnis", "B) Eine geschützte Information des Unternehmens", "C) Ein öffentliches Dokument", "D) Ein Gesetz"],
        "correct_letter": "B",
        "explanation": "Ein Betriebsgeheimnis ist eine geschützte Information des Unternehmens vor Wettbewerbern."
    },
    // === WEITERE FRAGEN 321-400 ===
    {
        "id": 321,
        "question": "Was ist ein NDA?",
        "options": ["A) Ein Arbeitsvertrag", "B) Eine Geheimhaltungsvereinbarung", "C) Ein Mietvertrag", "D) Ein Kaufvertrag"],
        "correct_letter": "B",
        "explanation": "Ein NDA (Non-Disclosure Agreement) ist eine Geheimhaltungsvereinbarung."
    },
    {
        "id": 322,
        "question": "Was ist ein Arbeitszeitkonto?",
        "options": ["A) Bankkonto", "B) Konto für Arbeitszeit", "C) Lohnkonto", "D) Steuerkonto"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitszeitkonto erfasst die geleisteten Arbeitsstunden."
    },
    {
        "id": 323,
        "question": "Was ist ein Zeiterfassungssystem?",
        "options": ["A) Ein Lohnsystem", "B) Ein System zur Erfassung der Arbeitszeit", "C) Ein Steuersystem", "D) Ein SV-System"],
        "correct_letter": "B",
        "explanation": "Ein Zeiterfassungssystem erfasst die Arbeitszeit der Mitarbeiter."
    },
    {
        "id": 324,
        "question": "Was ist eine Stechuhr?",
        "options": ["A) Eine Uhr", "B) Ein Gerät zur Zeiterfassung", "C) Ein Wecker", "D) Eine Armbanduhr"],
        "correct_letter": "B",
        "explanation": "Eine Stechuhr ist ein Gerät zur Zeiterfassung der Arbeitszeit."
    },
    {
        "id": 325,
        "question": "Was ist biometrische Zeiterfassung?",
        "options": ["A) Zeiterfassung mit Stift", "B) Zeiterfassung mit biometrischen Merkmalen (Fingerabdruck, Gesicht)", "C) Zeiterfassung mit Karte", "D) Zeiterfassung mit PIN"],
        "correct_letter": "B",
        "explanation": "Biometrische Zeiterfassung verwendet biometrische Merkmale wie Fingerabdruck oder Gesichtserkennung."
    },
    {
        "id": 326,
        "question": "Was ist eine Zutrittskontrolle?",
        "options": ["A) Zeiterfassung", "B) Kontrolle des Zutritts zu Gebäuden/Räumen", "C) Lohnabrechnung", "D) Steuererklärung"],
        "correct_letter": "B",
        "explanation": "Eine Zutrittskontrolle regelt und überwacht den Zutritt zu Gebäuden und Räumen."
    },
    {
        "id": 327,
        "question": "Was ist ein Personalausweis?",
        "options": ["A) Ein Ausweis für Personal", "B) Ein amtlicher Identitätsnachweis", "C) Ein Lohnschein", "D) Ein SV-Ausweis"],
        "correct_letter": "B",
        "explanation": "Der Personalausweis ist der amtliche Identitätsnachweis in Deutschland."
    },
    {
        "id": 328,
        "question": "Was ist ein Aufenthaltstitel?",
        "options": ["A) Ein Personalausweis", "B) Eine Erlaubnis zum Aufenthalt in Deutschland", "C) Ein Lohnschein", "D) Ein SV-Ausweis"],
        "correct_letter": "B",
        "explanation": "Der Aufenthaltstitel ist die Erlaubnis für Ausländer, sich in Deutschland aufzuhalten."
    },
    {
        "id": 329,
        "question": "Was ist eine Arbeitserlaubnis?",
        "options": ["A) Eine Erlaubnis zu arbeiten", "B) Eine Erlaubnis zum Aufenthalt", "C) Ein Lohnschein", "D) Ein SV-Ausweis"],
        "correct_letter": "A",
        "explanation": "Die Arbeitserlaubnis ist die Erlaubnis für Ausländer, in Deutschland zu arbeiten."
    },
    {
        "id": 330,
        "question": "Was ist ein Blaue Karte EU?",
        "options": ["A) Eine blaue Karte", "B) Aufenthaltstitel für hochqualifizierte Nicht-EU-Bürger", "C) Ein Personalausweis", "D) Ein SV-Ausweis"],
        "correct_letter": "B",
        "explanation": "Die Blaue Karte EU ist ein Aufenthaltstitel für hochqualifizierte Nicht-EU-Bürger."
    },
    {
        "id": 331,
        "question": "Was ist ein Fachkräfteeinwanderungsgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zur Erleichterung der Einwanderung von Fachkräften", "C) Ein Arbeitszeitgesetz", "D) Ein Sozialversicherungsgesetz"],
        "correct_letter": "B",
        "explanation": "Das Fachkräfteeinwanderungsgesetz erleichtert die Einwanderung von Fachkräften nach Deutschland."
    },
    {
        "id": 332,
        "question": "Was ist ein Beschäftigungsverbot?",
        "options": ["A) Ein Kündigungsverbot", "B) Verbot der Beschäftigung in bestimmten Bereichen", "C) Ein Urlaubsverbot", "D) Ein Krankheitsverbot"],
        "correct_letter": "B",
        "explanation": "Ein Beschäftigungsverbot verbietet die Beschäftigung in bestimmten Bereichen (z.B. für Kinder und Jugendliche)."
    },
    {
        "id": 333,
        "question": "Was ist das Jugendarbeitsschutzgesetz?",
        "options": ["A) Ein Gesetz für Erwachsene", "B) Gesetz zum Schutz von Kindern und Jugendlichen bei der Arbeit", "C) Ein Steuergesetz", "D) Ein SV-Gesetz"],
        "correct_letter": "B",
        "explanation": "Das Jugendarbeitsschutzgesetz schützt Kinder und Jugendliche bei der Arbeit."
    },
    {
        "id": 334,
        "question": "Ab welchem Alter dürfen Kinder arbeiten?",
        "options": ["A) Ab 10 Jahren", "B) Ab 13 Jahren (mit Einschränkungen), ab 15 Jahren regulär", "C) Ab 16 Jahren", "D) Ab 18 Jahren"],
        "correct_letter": "B",
        "explanation": "Kinder dürfen ab 13 Jahren mit Einschränkungen arbeiten, regulär ab 15 Jahren."
    },
    {
        "id": 335,
        "question": "Was ist die Arbeitszeit für Jugendliche?",
        "options": ["A) Bis zu 40 Stunden", "B) Maximal 40 Stunden, 8 Stunden täglich", "C) Bis zu 48 Stunden", "D) Bis zu 35 Stunden"],
        "correct_letter": "B",
        "explanation": "Die Arbeitszeit für Jugendliche beträgt maximal 40 Stunden wöchentlich und 8 Stunden täglich."
    },
    {
        "id": 336,
        "question": "Was ist Nachtschichtverbot für Jugendliche?",
        "options": ["A) Kein Verbot", "B) Verbot der Nachtarbeit (20-6 Uhr)", "C) Nur erlaubt ab 16 Jahren", "D) Nur erlaubt ab 18 Jahren"],
        "correct_letter": "B",
        "explanation": "Für Jugendliche unter 18 Jahren ist Nachtarbeit (20-6 Uhr) verboten."
    },
    {
        "id": 337,
        "question": "Was ist das Schwerbehindertenrecht?",
        "options": ["A) Recht für alle", "B) Recht für schwerbehinderte Menschen", "C) Recht für Rentner", "D) Recht für Kinder"],
        "correct_letter": "B",
        "explanation": "Das Schwerbehindertenrecht regelt die Rechte schwerbehinderter Menschen im Arbeitsleben."
    },
    {
        "id": 338,
        "question": "Was ist der Grad der Behinderung (GdB)?",
        "options": ["A) Ein Notendurchschnitt", "B) Maß für die Schwere einer Behinderung (0-100)", "C) Ein Alter", "D) Ein Gehalt"],
        "correct_letter": "B",
        "explanation": "Der Grad der Behinderung (GdB) ist ein Maß für die Schwere einer Behinderung von 0 bis 100."
    },
    {
        "id": 339,
        "question": "Ab welchem GdB gilt man als schwerbehindert?",
        "options": ["A) Ab 30", "B) Ab 50", "C) Ab 70", "D) Ab 80"],
        "correct_letter": "B",
        "explanation": "Ab einem GdB von 50 gilt man als schwerbehindert."
    },
    {
        "id": 340,
        "question": "Was ist der Nachteilsausgleich?",
        "options": ["A) Nachteil", "B) Ausgleich von Nachteilen für schwerbehinderte Menschen", "C) Vorteil", "D] Lohn"],
        "correct_letter": "B",
        "explanation": "Der Nachteilsausgleich gleicht Nachteile für schwerbehinderte Menschen aus (z.B. zusätzlicher Urlaub)."
    },
    {
        "id": 341,
        "question": "Wie viel zusätzlicher Urlaub haben schwerbehinderte Menschen?",
        "options": ["A) Kein zusätzlicher", "B) 5 zusätzliche Urlaubstage", "C) 10 zusätzliche Urlaubstage", "D) 15 zusätzliche Urlaubstage"],
        "correct_letter": "B",
        "explanation": "Schwerbehinderte Menschen haben Anspruch auf 5 zusätzliche Urlaubstage."
    },
    {
        "id": 342,
        "question": "Was ist die Beschäftigungsquote für schwerbehinderte Menschen?",
        "options": ["A) 3 %", "B) 5 %", "C) 7 %", "D) 10 %"],
        "correct_letter": "B",
        "explanation": "Die Beschäftigungsquote für schwerbehinderte Menschen beträgt 5 %."
    },
    {
        "id": 343,
        "question": "Was ist die Ausgleichsabgabe?",
        "options": ["A) Eine Prämie", "B) Eine Abgabe bei Nichterfüllung der Beschäftigungsquote", "C) Ein Lohn", "D) Ein Zuschuss"],
        "correct_letter": "B",
        "explanation": "Die Ausgleichsabgabe ist eine Abgabe für Arbeitgeber, die die Beschäftigungsquote nicht erfüllen."
    },
    {
        "id": 344,
        "question": "Wie hoch ist die Ausgleichsabgabe?",
        "options": ["A) 100 Euro pro Platz", "B) 185 Euro pro unbesetztem Pflichtplatz", "C) 200 Euro pro Platz", "D) 250 Euro pro Platz"],
        "correct_letter": "B",
        "explanation": "Die Ausgleichsabgabe beträgt 185 Euro pro unbesetztem Pflichtplatz monatlich."
    },
    {
        "id": 345,
        "question": "Wann muss die Anzeige schwerbehinderter Menschen erfolgen?",
        "options": ["A) Jährlich am 31.12.", "B) Bis zum 31. März des Folgejahres", "C) Bis zum 30. Juni", "D) Bis zum 31. Januar"],
        "correct_letter": "B",
        "explanation": "Die Anzeige schwerbehinderter Menschen muss bis zum 31. März des Folgejahres erfolgen."
    },
    {
        "id": 346,
        "question": "Was ist das Integrationsamt?",
        "options": ["A) Ein Amt für alle", "B) Beratungsstelle für schwerbehinderte Menschen und Arbeitgeber", "C) Ein Finanzamt", "D) Ein Arbeitsamt"],
        "correct_letter": "B",
        "explanation": "Das Integrationsamt berät schwerbehinderte Menschen und Arbeitgeber."
    },
    {
        "id": 347,
        "question": "Was ist ein Inklusionsbetrieb?",
        "options": ["A) Ein regulärer Betrieb", "B) Ein Betrieb, der schwerbehinderte Menschen bevorzugt beschäftigt", "C) Ein Betrieb für Kinder", "D) Ein Betrieb für Rentner"],
        "correct_letter": "B",
        "explanation": "Ein Inklusionsbetrieb beschäftigt schwerbehinderte Menschen bevorzugt."
    },
    {
        "id": 348,
        "question": "Was ist eine Werkstatt für behinderte Menschen?",
        "options": ["A) Ein regulärer Betrieb", "B) Ein Betrieb für Menschen, die nicht auf dem allgemeinen Arbeitsmarkt beschäftigt werden können", "C) Ein Betrieb für Kinder", "D) Ein Betrieb für Rentner"],
        "correct_letter": "B",
        "explanation": "Eine Werkstatt für behinderte Menschen beschäftigt Menschen, die nicht auf dem allgemeinen Arbeitsmarkt arbeiten können."
    },
    {
        "id": 349,
        "question": "Was ist das Bundesteilhabegesetz (BTHG)?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zur Stärkung der Teilhabe von Menschen mit Behinderungen", "C) Ein Arbeitszeitgesetz", "D) Ein SV-Gesetz"],
        "correct_letter": "B",
        "explanation": "Das BTHG stärkt die Teilhabe von Menschen mit Behinderungen und reformiert das Behindertenrecht."
    },
    {
        "id": 350,
        "question": "Was ist ein Teilhabeplan?",
        "options": ["A) Ein Urlaubsplan", "B) Ein Plan zur Teilhabe von Menschen mit Behinderungen", "C) Ein Arbeitsplan", "D) Ein Lohnplan"],
        "correct_letter": "B",
        "explanation": "Ein Teilhabeplan regelt die Maßnahmen zur Teilhabe von Menschen mit Behinderungen."
    },
    // === ABSCHLUSSFRAGEN 351-400 ===
    {
        "id": 351,
        "question": "Was ist das Arbeitszeitgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zum Schutz der Arbeitnehmer", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Arbeitszeitgesetz (ArbZG) schützt Arbeitnehmer vor Überlastung und regelt Arbeits-, Ruhe- und Pausenzeiten."
    },
    {
        "id": 352,
        "question": "Was ist das Bundesurlaubsgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über den Erholungsurlaub", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Bundesurlaubsgesetz (BUrlG) regelt den gesetzlichen Mindesturlaub."
    },
    {
        "id": 353,
        "question": "Was ist das Entgeltfortzahlungsgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über die Lohnfortzahlung im Krankheitsfall", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Entgeltfortzahlungsgesetz (EntgFG) regelt die Lohnfortzahlung im Krankheitsfall."
    },
    {
        "id": 354,
        "question": "Was ist das Mutterschutzgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zum Schutz von Müttern", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Mutterschutzgesetz (MuSchG) schützt werdende Mütter und Mütter nach der Entbindung."
    },
    {
        "id": 355,
        "question": "Was ist das Bundeselterngeld- und Elternzeitgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über Elterngeld und Elternzeit", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das BEEG regelt Elterngeld und Elternzeit."
    },
    {
        "id": 356,
        "question": "Was ist das Kündigungsschutzgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz zum Schutz vor Kündigung", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Kündigungsschutzgesetz (KSchG) schützt Arbeitnehmer vor ungerechtfertigten Kündigungen."
    },
    {
        "id": 357,
        "question": "Was ist das Nachweisgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über den Nachweis von Arbeitsbedingungen", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Nachweisgesetz verpflichtet Arbeitgeber, wesentliche Arbeitsbedingungen schriftlich nachzuweisen."
    },
    {
        "id": 358,
        "question": "Was ist das Mindestlohngesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über den Mindestlohn", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Mindestlohngesetz (MiLoG) regelt den gesetzlichen Mindestlohn."
    },
    {
        "id": 359,
        "question": "Was ist das Aufwendungsausgleichsgesetz?",
        "options": ["A) Ein Steuergesetz", "B) Gesetz über die Umlageverfahren U1 und U2", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Aufwendungsausgleichsgesetz (AAG) regelt die Umlageverfahren U1 und U2."
    },
    {
        "id": 360,
        "question": "Was ist das Einkommensteuergesetz?",
        "options": ["A) Ein Arbeitszeitgesetz", "B) Gesetz über die Besteuerung des Einkommens", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Einkommensteuergesetz (EStG) regelt die Besteuerung des Einkommens."
    },
    {
        "id": 361,
        "question": "Was ist das Sozialgesetzbuch?",
        "options": ["A) Ein Steuerbuch", "B) Gesamtkodex des Sozialrechts", "C) Ein Arbeitsgesetzbuch", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Das Sozialgesetzbuch (SGB) ist der Gesamtkodex des deutschen Sozialrechts."
    },
    {
        "id": 362,
        "question": "Wie viele Bücher hat das SGB?",
        "options": ["A) 5 Bücher", "B) 12 Bücher", "C) 15 Bücher", "D) 20 Bücher"],
        "correct_letter": "B",
        "explanation": "Das SGB besteht aus 12 Büchern, die verschiedene Bereiche des Sozialrechts regeln."
    },
    {
        "id": 363,
        "question": "Was regelt SGB I?",
        "options": ["A) Krankenversicherung", "B) Allgemeine Vorschriften", "C) Rentenversicherung", "D) Arbeitslosenversicherung"],
        "correct_letter": "B",
        "explanation": "SGB I enthält allgemeine Vorschriften für das Sozialrecht."
    },
    {
        "id": 364,
        "question": "Was regelt SGB III?",
        "options": ["A) Krankenversicherung", "B) Arbeitslosenversicherung", "C) Rentenversicherung", "D) Unfallversicherung"],
        "correct_letter": "B",
        "explanation": "SGB III regelt die Arbeitslosenversicherung und Arbeitsförderung."
    },
    {
        "id": 365,
        "question": "Was regelt SGB V?",
        "options": ["A) Rentenversicherung", "B) Gesetzliche Krankenversicherung", "C) Arbeitslosenversicherung", "D) Unfallversicherung"],
        "correct_letter": "B",
        "explanation": "SGB V regelt die gesetzliche Krankenversicherung."
    },
    {
        "id": 366,
        "question": "Was regelt SGB VI?",
        "options": ["A) Krankenversicherung", "B) Gesetzliche Rentenversicherung", "C) Arbeitslosenversicherung", "D) Unfallversicherung"],
        "correct_letter": "B",
        "explanation": "SGB VI regelt die gesetzliche Rentenversicherung."
    },
    {
        "id": 367,
        "question": "Was regelt SGB VII?",
        "options": ["A) Krankenversicherung", "B) Gesetzliche Unfallversicherung", "C) Arbeitslosenversicherung", "D) Rentenversicherung"],
        "correct_letter": "B",
        "explanation": "SGB VII regelt die gesetzliche Unfallversicherung."
    },
    {
        "id": 368,
        "question": "Was regelt SGB XI?",
        "options": ["A) Krankenversicherung", "B) Soziale Pflegeversicherung", "C) Arbeitslosenversicherung", "D) Rentenversicherung"],
        "correct_letter": "B",
        "explanation": "SGB XI regelt die soziale Pflegeversicherung."
    },
    {
        "id": 369,
        "question": "Was ist die Abgabenordnung?",
        "options": ["A) Ein Arbeitsgesetz", "B) Das Verfahrensrecht der Finanzverwaltung", "C) Ein SV-Gesetz", "D) Ein Rentengesetz"],
        "correct_letter": "B",
        "explanation": "Die Abgabenordnung (AO) regelt das Verfahrensrecht der Finanzverwaltung."
    },
    {
        "id": 370,
        "question": "Was ist eine Steuernummer?",
        "options": ["A) Eine Telefonnummer", "B) Eine Nummer zur Identifikation beim Finanzamt", "C) Eine SV-Nummer", "D) Eine Rentennummer"],
        "correct_letter": "B",
        "explanation": "Die Steuernummer identifiziert einen Steuerpflichtigen beim Finanzamt."
    },
    {
        "id": 371,
        "question": "Was ist eine Steueridentifikationsnummer?",
        "options": ["A) Eine Steuernummer", "B) Eine bundesweit eindeutige Identifikationsnummer", "C) Eine SV-Nummer", "D) Eine Rentennummer"],
        "correct_letter": "B",
        "explanation": "Die Steueridentifikationsnummer (IdNr) ist eine bundesweit eindeutige Nummer für steuerliche Zwecke."
    },
    {
        "id": 372,
        "question": "Wie viele Ziffern hat die Steueridentifikationsnummer?",
        "options": ["A) 8 Ziffern", "B) 11 Ziffern", "C) 15 Ziffern", "D) 20 Ziffern"],
        "correct_letter": "B",
        "explanation": "Die Steueridentifikationsnummer hat 11 Ziffern."
    },
    {
        "id": 373,
        "question": "Was ist eine Einkommensteuererklärung?",
        "options": ["A) Eine Lohnabrechnung", "B) Eine Erklärung über das Einkommen gegenüber dem Finanzamt", "C) Eine SV-Meldung", "D) Eine Rentenmeldung"],
        "correct_letter": "B",
        "explanation": "Die Einkommensteuererklärung ist die Erklärung über das Einkommen gegenüber dem Finanzamt."
    },
    {
        "id": 374,
        "question": "Bis wann muss die Einkommensteuererklärung abgegeben werden?",
        "options": ["A) 31. März", "B) 31. Juli (bei Beratung: 31. Dezember)", "C) 30. September", "D) 31. Oktober"],
        "correct_letter": "B",
        "explanation": "Die Einkommensteuererklärung muss bis zum 31. Juli (mit Berater bis 31. Dezember) abgegeben werden."
    },
    {
        "id": 375,
        "question": "Was ist ein Steuerberater?",
        "options": ["A) Ein Arzt", "B) Ein Berater in steuerlichen Angelegenheiten", "C) Ein Anwalt", "D) Ein Richter"],
        "correct_letter": "B",
        "explanation": "Ein Steuerberater ist ein qualifizierter Berater in steuerlichen Angelegenheiten."
    },
    {
        "id": 376,
        "question": "Was ist eine Steuererstattung?",
        "options": ["A) Eine Nachzahlung", "B) Rückzahlung zu viel gezahlter Steuern", "C) Eine Strafe", "D) Ein Zuschuss"],
        "correct_letter": "B",
        "explanation": "Eine Steuererstattung ist die Rückzahlung zu viel gezahlter Steuern durch das Finanzamt."
    },
    {
        "id": 377,
        "question": "Was ist eine Steuernachzahlung?",
        "options": ["A) Eine Erstattung", "B) Nachzahlung zu wenig gezahlter Steuern", "C) Eine Strafe", "D) Ein Zuschuss"],
        "correct_letter": "B",
        "explanation": "Eine Steuernachzahlung ist die Zahlung zu wenig gezahlter Steuern an das Finanzamt."
    },
    {
        "id": 378,
        "question": "Was ist der Solidaritätszuschlag 2026?",
        "options": ["A) 5,5 %", "B) Für die meisten Steuerpflichtigen abgeschafft", "C) 2 %", "D) 1,5 %"],
        "correct_letter": "B",
        "explanation": "Der Solidaritätszuschlag wurde 2021 für die meisten Steuerpflichtigen abgeschafft und gilt nur noch für sehr hohe Einkommen."
    },
    {
        "id": 379,
        "question": "Was ist der Kirchensteuerhebesatz in Bayern und Baden-Württemberg?",
        "options": ["A) 7 %", "B) 8 %", "C) 9 %", "D) 10 %"],
        "correct_letter": "B",
        "explanation": "In Bayern und Baden-Württemberg beträgt der Kirchensteuerhebesatz 8 % der Lohnsteuer."
    },
    {
        "id": 380,
        "question": "Was ist der Kirchensteuerhebesatz in den anderen Bundesländern?",
        "options": ["A) 7 %", "B) 8 %", "C) 9 %", "D) 10 %"],
        "correct_letter": "C",
        "explanation": "In den anderen Bundesländern beträgt der Kirchensteuerhebesatz 9 % der Lohnsteuer."
    },
    {
        "id": 381,
        "question": "Was ist Kirchenaustritt?",
        "options": ["A) Austritt aus der Kirche", "B) Austritt aus dem Betrieb", "C) Austritt aus der Gewerkschaft", "D) Austritt aus der Partei"],
        "correct_letter": "A",
        "explanation": "Der Kirchenaustritt ist der formelle Austritt aus einer Kirche oder Religionsgemeinschaft."
    },
    {
        "id": 382,
        "question": "Was passiert bei Kirchenaustritt?",
        "options": ["A) Nichts", "B) Keine Kirchensteuer mehr", "C) Höhere Lohnsteuer", "D) Höhere SV-Beiträge"],
        "correct_letter": "B",
        "explanation": "Bei Kirchenaustritt wird keine Kirchensteuer mehr erhoben."
    },
    {
        "id": 383,
        "question": "Was ist eine Lohnabrechnung?",
        "options": ["A) Eine Steuererklärung", "B) Eine Berechnung des Brutto- und Nettogehalts", "C) Eine SV-Meldung", "D) Eine Rentenmeldung"],
        "correct_letter": "B",
        "explanation": "Die Lohnabrechnung ist die Berechnung des Brutto- und Nettogehalts eines Arbeitnehmers."
    },
    {
        "id": 384,
        "question": "Was muss eine Lohnabrechnung enthalten?",
        "options": ["A) Nur das Nettogehalt", "B) Brutto, Abzüge, Netto, Steuerklasse, SV-Daten", "C) Nur das Brutto", "D) Nur die Arbeitsstunden"],
        "correct_letter": "B",
        "explanation": "Eine Lohnabrechnung muss Brutto, alle Abzüge, Netto, Steuerklasse und SV-Daten enthalten."
    },
    {
        "id": 385,
        "question": "Wie oft muss eine Lohnabrechnung erstellt werden?",
        "options": ["A) Jährlich", "B) Monatlich (bei monatlicher Zahlung)", "C) Vierteljährlich", "D) Wöchentlich"],
        "correct_letter": "B",
        "explanation": "Die Lohnabrechnung muss bei monatlicher Zahlung monatlich erstellt werden."
    },
    {
        "id": 386,
        "question": "Was ist ein Bruttolohn?",
        "options": ["A) Das Nettogehalt", "B) Das Gehalt vor Abzügen", "C) Der Lohn nach Steuern", "D) Der Lohn nach SV"],
        "correct_letter": "B",
        "explanation": "Der Bruttolohn ist das Gehalt vor Abzug von Steuern und Sozialversicherungsbeiträgen."
    },
    {
        "id": 387,
        "question": "Was ist ein Nettolohn?",
        "options": ["A) Das Gehalt vor Abzügen", "B) Das Gehalt nach Abzügen", "C) Der Lohn vor Steuern", "D) Der Lohn vor SV"],
        "correct_letter": "B",
        "explanation": "Der Nettolohn ist das Gehalt nach Abzug von Steuern und Sozialversicherungsbeiträgen."
    },
    {
        "id": 388,
        "question": "Was ist ein Brutto-Netto-Rechner?",
        "options": ["A) Ein Taschenrechner", "B) Ein Tool zur Berechnung von Brutto und Netto", "C) Ein Lohnprogramm", "D) Ein Steuerprogramm"],
        "correct_letter": "B",
        "explanation": "Ein Brutto-Netto-Rechner ist ein Tool zur Berechnung von Brutto- und Nettogehalt."
    },
    {
        "id": 389,
        "question": "Was ist ein Lohnsteuerrechner?",
        "options": ["A) Ein Taschenrechner", "B) Ein Tool zur Berechnung der Lohnsteuer", "C) Ein Lohnprogramm", "D) Ein SV-Rechner"],
        "correct_letter": "B",
        "explanation": "Ein Lohnsteuerrechner ist ein Tool zur Berechnung der Lohnsteuer."
    },
    {
        "id": 390,
        "question": "Was ist ein SV-Beitragsrechner?",
        "options": ["A) Ein Taschenrechner", "B) Ein Tool zur Berechnung der SV-Beiträge", "C) Ein Lohnprogramm", "D] Ein Steuerrechner"],
        "correct_letter": "B",
        "explanation": "Ein SV-Beitragsrechner ist ein Tool zur Berechnung der Sozialversicherungsbeiträge."
    },
    {
        "id": 391,
        "question": "Was ist ein Minijob-Rechner?",
        "options": ["A) Ein Taschenrechner", "B) Ein Tool zur Berechnung von Minijob-Kosten", "C) Ein Lohnprogramm", "D) Ein Steuerrechner"],
        "correct_letter": "B",
        "explanation": "Ein Minijob-Rechner ist ein Tool zur Berechnung der Kosten eines Minijobs."
    },
    {
        "id": 392,
        "question": "Was ist ein Midijob-Rechner?",
        "options": ["A) Ein Taschenrechner", "B) Ein Tool zur Berechnung von Midijob-Kosten", "C) Ein Lohnprogramm", "D) Ein Steuerrechner"],
        "correct_letter": "B",
        "explanation": "Ein Midijob-Rechner ist ein Tool zur Berechnung der Kosten im Übergangsbereich."
    },
    {
        "id": 393,
        "question": "Was ist ein Firmenwagen-Rechner?",
        "options": ["A) Ein Autorechner", "B) Ein Tool zur Berechnung des geldwerten Vorteils", "C) Ein Lohnprogramm", "D) Ein Steuerrechner"],
        "correct_letter": "B",
        "explanation": "Ein Firmenwagen-Rechner berechnet den geldwerten Vorteil der privaten Nutzung."
    },
    {
        "id": 394,
        "question": "Was ist ein Reisekosten-Rechner?",
        "options": ["A] Ein Autorechner", "B) Ein Tool zur Berechnung von Reisekosten", "C) Ein Lohnprogramm", "D) Ein Steuerrechner"],
        "correct_letter": "B",
        "explanation": "Ein Reisekosten-Rechner berechnet die absetzbaren Reisekosten."
    },
    {
        "id": 395,
        "question": "Was sind Verpflegungsmehraufwendungen?",
        "options": ["A) Kosten für Verpflegung", "B) Pauschalen für Verpflegung bei Auswärtstätigkeit", "C) Kosten für Essen", "D) Kosten für Trinken"],
        "correct_letter": "B",
        "explanation": "Verpflegungsmehraufwendungen sind Pauschalen für Verpflegung bei Auswärtstätigkeit."
    },
    {
        "id": 396,
        "question": "Wie hoch ist die Verpflegungspauschale bei 24-stündiger Abwesenheit?",
        "options": ["A) 12 Euro", "B) 28 Euro", "C) 50 Euro", "D) 60 Euro"],
        "correct_letter": "B",
        "explanation": "Die Verpflegungspauschale bei 24-stündiger Abwesenheit beträgt 28 Euro."
    },
    {
        "id": 397,
        "question": "Was ist eine Doppelte Haushaltsführung?",
        "options": ["A) Zwei Wohnungen am gleichen Ort", "B) Zwei Wohnungen an unterschiedlichen Orten aus beruflichen Gründen", "C) Zwei Familien", "D) Zwei Häuser"],
        "correct_letter": "B",
        "explanation": "Eine doppelte Haushaltsführung liegt vor, wenn aus beruflichen Gründen zwei Wohnungen an unterschiedlichen Orten unterhalten werden."
    },
    {
        "id": 398,
        "question": "Was sind Fahrtkosten?",
        "options": ["A) Kosten für das Auto", "B) Kosten für Wege zwischen Wohnung und Arbeitsstätte", "C) Kosten für Reisen", "D) Kosten für Benzin"],
        "correct_letter": "B",
        "explanation": "Fahrtkosten sind die Kosten für Wege zwischen Wohnung und Arbeitsstätte (Werbungskosten)."
    },
    {
        "id": 399,
        "question": "Wie hoch ist die Kilometerpauschale?",
        "options": ["A) 0,20 Euro", "B) 0,30 Euro", "C) 0,35 Euro", "D) 0,40 Euro"],
        "correct_letter": "B",
        "explanation": "Die Kilometerpauschale beträgt 0,30 Euro pro Kilometer für Wege zwischen Wohnung und Arbeitsstätte."
    },
    {
        "id": 400,
        "question": "Was ist ein Arbeitszimmer?",
        "options": ["A) Ein Zimmer im Büro", "B) Ein häusliches Arbeitszimmer", "C) Ein Schlafzimmer", "D) Ein Wohnzimmer"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitszimmer ist ein häusliches Arbeitszimmer, das ausschließlich oder fast ausschließlich beruflich genutzt wird."
    },
    // === UMFASSENDER PRÜFUNGS- UND FRAGENKATALOG 2026 ===
    {
        "id": 401,
        "question": "Ein verheiratetes Paar wählt die Steuerklassenkombination IV/IV mit Faktor. Welches primäre Ziel wird mit dem Faktorverfahren verfolgt?",
        "options": ["A) Komplette Steuerbefreiung beider Gehälter", "B) Vermeidung von hohen Steuernachzahlungen bei ungleichen Einkommen unter Beibehaltung des Splittingvorteils unterm Jahr", "C) Erhöhung des Solidaritätszuschlags", "D) Reduzierung der Sozialversicherungsbeiträge"],
        "correct_letter": "B",
        "explanation": "Das Faktorverfahren sorgt dafür, dass die Lohnsteuerbelastung unter Berücksichtigung des Ehegattensplittings sehr präzise auf beide Partner verteilt wird."
    },
    {
        "id": 402,
        "question": "Welche grundlegende Voraussetzung muss erfüllt sein, damit einem Mitarbeiter die Steuerklasse II (Entlastungsbetrag für Alleinerziehende) zugewiesen werden kann?",
        "options": ["A) Der Mitarbeiter muss mindestens drei Kinder haben.", "B) Zum Haushalt muss mindestens ein minderjähriges oder in Ausbildung befindliches Kind gehören, für das Kindergeld gezahlt wird, und es darf keine andere volljährige Person mit im Haushalt leben.", "C) Der Mitarbeiter muss geschieden sein, ohne Kinder zu haben.", "D) Der Arbeitgeber muss den Zuschlag bar auszahlen."],
        "correct_letter": "B",
        "explanation": "Der Entlastungsbetrag für Alleinerziehende nach § 24b EStG setzt voraus, dass die Person alleinstehend ist und mindestens ein Kind im Haushalt lebt."
    },
    {
        "id": 403,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 165.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 14.85 €", "B) 13.20 €", "C) 0,00 €", "D) 215.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 165.00 € * 9% = 14.85 €."
    },
    {
        "id": 404,
        "question": "Wann muss ein Arbeitgeber ein Beschäftigungsverhältnis zwingend nach Steuerklasse VI abrechnen?",
        "options": ["A) Wenn der Arbeitnehmer verheiratet ist.", "B) Wenn es sich um das zweite oder ein weiteres Dienstverhältnis handelt oder die elektronischen Lohnsteuerabzugsmerkmale (ELStAM) schuldhaft nicht abgerufen werden können.", "C) Wenn der Mitarbeiter das 65. Lebensjahr vollendet hat.", "D) Bei jedem Minijob grundsätzlich."],
        "correct_letter": "B",
        "explanation": "Die Steuerklasse VI gilt für Nebenarbeitsverhältnisse ohne Grundfreibeträge oder wenn keine ELStAM-Daten bereitgestellt werden können."
    },
    {
        "id": 405,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 185.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 16.65 €", "B) 14.80 €", "C) 0,00 €", "D) 235.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 185.00 € * 9% = 16.65 €."
    },
    {
        "id": 406,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 205.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 18.45 €", "B) 16.40 €", "C) 0,00 €", "D) 255.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 205.00 € * 9% = 18.45 €."
    },
    {
        "id": 407,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 225.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 20.25 €", "B) 18.00 €", "C) 0,00 €", "D) 275.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 225.00 € * 9% = 20.25 €."
    },
    {
        "id": 408,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 245.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 22.05 €", "B) 19.60 €", "C) 0,00 €", "D) 295.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 245.00 € * 9% = 22.05 €."
    },
    {
        "id": 409,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 265.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 23.85 €", "B) 21.20 €", "C) 0,00 €", "D) 315.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 265.00 € * 9% = 23.85 €."
    },
    {
        "id": 410,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 285.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 25.65 €", "B) 22.80 €", "C) 0,00 €", "D) 335.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 285.00 € * 9% = 25.65 €."
    },
    {
        "id": 411,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 305.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 27.45 €", "B) 24.40 €", "C) 0,00 €", "D) 355.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 305.00 € * 9% = 27.45 €."
    },
    {
        "id": 412,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 325.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 29.25 €", "B) 26.00 €", "C) 0,00 €", "D) 375.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 325.00 € * 9% = 29.25 €."
    },
    {
        "id": 413,
        "question": "Ein Mitarbeiter (Steuerklasse I, kinderlos, konfessionell gebunden) arbeitet in NRW (Kirchensteuersatz 9 %). Die Lohnsteuer laut Tabelle beträgt exakt 345.00 €. Wie hoch ist der Kirchensteuerabzug?",
        "options": ["A) 31.05 €", "B) 27.60 €", "C) 0,00 €", "D) 395.00 €"],
        "correct_letter": "A",
        "explanation": "Die Kirchensteuer beträgt 9 % der Lohnsteuer. Berechnung: 345.00 € * 9% = 31.05 €."
    },
    {
        "id": 414,
        "question": "Wie werden die Beiträge zur gesetzlichen Rentenversicherung (RV) im Regelfall im Jahr 2026 zwischen Arbeitnehmer und Arbeitgeber aufgeteilt?",
        "options": ["A) Der Arbeitnehmer trägt 100 % alleine.", "B) Paritätisch zu gleichen Teilen (je 50 % des Gesamtbeitrags bzw. 9,3 % beim aktuellen Satz von 18,6 %).", "C) Der Arbeitgeber trägt 70 %, der Arbeitnehmer 30 %.", "D) Die Aufteilung ist frei verhandelbar."],
        "correct_letter": "B",
        "explanation": "Die Rentenversicherung wird paritätisch finanziert. Bei einem Gesamtsatz von 18,6 % zahlt jede Partei 9,3 %."
    },
    {
        "id": 415,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2420.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 198.44 €", "B) 396.88 €", "C) 99.22 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2420.00 € * 8,2% = 198.44 €."
    },
    {
        "id": 416,
        "question": "Welche Personengruppe muss den gesetzlichen Beitragszuschlag für Kinderlose in der Pflegeversicherung (PV) in Höhe von 0,6 % ab dem vollendeten 23. Lebensjahr allein tragen?",
        "options": ["A) Nur Väter mit mehr als 3 Kindern.", "B) Alle kinderlosen Arbeitnehmer nach Vollendung des 23. Lebensjahres, sofern sie nach dem 31.12.1939 geboren sind.", "C) Alle Auszubildenden generell.", "D) Nur Rentner."],
        "correct_letter": "B",
        "explanation": "Der Kinderlosenzuschlag zur Pflegeversicherung wird vom kinderlosen Arbeitnehmer ab Alter 23 allein getragen."
    },
    {
        "id": 417,
        "question": "Welcher Betrieb nimmt am gesetzlichen Umlageverfahren U1 (Erstattung bei Entgeltfortzahlung im Krankheitsfall) teil?",
        "options": ["A) Alle Betriebe in Deutschland ohne Ausnahme.", "B) Nur Betriebe, die regelmäßig nicht mehr als 30 Arbeitnehmer (exklusive Auszubildende) beschäftigen.", "C) Nur Konzerne mit über 1.000 Mitarbeitern.", "D) Ausschließlich der öffentliche Dienst."],
        "correct_letter": "B",
        "explanation": "Das U1-Verfahren ist eine Pflichtversicherung für kleinere Betriebe bis maximal 30 Mitarbeiter zur Absicherung von Lohnfortzahlungskosten."
    },
    {
        "id": 418,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2460.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 201.72 €", "B) 403.44 €", "C) 100.86 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2460.00 € * 8,2% = 201.72 €."
    },
    {
        "id": 419,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2500.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 205.00 €", "B) 410.00 €", "C) 102.50 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2500.00 € * 8,2% = 205.00 €."
    },
    {
        "id": 420,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2540.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 208.28 €", "B) 416.56 €", "C) 104.14 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2540.00 € * 8,2% = 208.28 €."
    },
    {
        "id": 421,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2580.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 211.56 €", "B) 423.12 €", "C) 105.78 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2580.00 € * 8,2% = 211.56 €."
    },
    {
        "id": 422,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2620.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 214.84 €", "B) 429.68 €", "C) 107.42 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2620.00 € * 8,2% = 214.84 €."
    },
    {
        "id": 423,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2660.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 218.12 €", "B) 436.24 €", "C) 109.06 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2660.00 € * 8,2% = 218.12 €."
    },
    {
        "id": 424,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2700.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 221.40 €", "B) 442.80 €", "C) 110.70 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2700.00 € * 8,2% = 221.40 €."
    },
    {
        "id": 425,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2740.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 224.68 €", "B) 449.36 €", "C) 112.34 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2740.00 € * 8,2% = 224.68 €."
    },
    {
        "id": 426,
        "question": "Ein Arbeitnehmer erzielt ein sozialversicherungspflichtiges Entgelt von 2780.00 €. Der KV-Gesamtsatz inklusive Zusatzbeitrag liegt bei 16,4 % (AN-Anteil = 8,2 %). Wie hoch ist der KV-Abzug des Arbeitnehmers?",
        "options": ["A) 227.96 €", "B) 455.92 €", "C) 113.98 €", "D) 0,00 €"],
        "correct_letter": "A",
        "explanation": "Der Arbeitnehmer trägt die Hälfte des Gesamtsatzes (8,2 %). Berechnung: 2780.00 € * 8,2% = 227.96 €."
    },
    {
        "id": 427,
        "question": "Was passiert mit den Sozialversicherungsbeiträgen eines Arbeitnehmers, dessen laufendes Bruttogehalt exakt auf die Beitragsbemessungsgrenze der gesetzlichen Krankenversicherung ansteigt?",
        "options": ["A) Die Beiträge fallen komplett weg.", "B) Sie erreichen für die Kranken- und Pflegeversicherung ihren Höchstwert und steigen bei einer weiteren Gehaltserhöhung in diesen Zweigen nicht weiter an.", "C) Sie verdoppeln sich automatisch.", "D) Der Arbeitnehmer wird automatisch privat versichert."],
        "correct_letter": "B",
        "explanation": "Die Beitragsbemessungsgrenze deckelt die Beitragsabführung für die jeweilige Versicherungssparte nach oben hin ab."
    },
    {
        "id": 428,
        "question": "Die monatliche Beitragsbemessungsgrenze (BBG) für die Rentenversicherung beträgt im Jahr 2026 exakt 8.450,00 € (101.400,00 € jährlich). Ein Manager verdient 9.500,00 € brutto im Monat. Wie hoch ist der RV-Beitrag des Arbeitnehmers (18,6 % Gesamtsatz)?",
        "options": ["A) 1.767,00 €", "B) 1.569,90 €", "C) 930,00 €", "D) 784,95 €"],
        "correct_letter": "D",
        "explanation": "Der Beitrag wird nur bis zur BBG berechnet: 8.450,00 € * 9,3 % = 785,85 €. Der Überschuss bleibt beitragsfrei."
    },
    {
        "id": 429,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 430,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 431,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 432,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 433,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 434,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 435,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 436,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 437,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 438,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 439,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 440,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 441,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 442,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 443,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 444,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 445,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 446,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 447,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 448,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 449,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 450,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 451,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 452,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 453,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 454,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 455,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 456,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 457,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 458,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 459,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 460,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 461,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 462,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 463,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 464,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 465,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 466,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 467,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 468,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 469,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 470,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 471,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 472,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 473,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 474,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 475,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 476,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 477,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 478,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 479,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 480,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 481,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 482,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 483,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 484,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 485,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 486,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 487,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 488,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 489,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 490,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 491,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 492,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 493,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 494,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 495,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 496,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 497,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 498,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 499,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 500,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 501,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 502,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 503,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 504,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 505,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 506,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 507,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 508,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 509,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 510,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 511,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 512,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 513,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 514,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 515,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 516,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 517,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 518,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 519,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 520,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 521,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 522,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 523,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 524,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 525,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 526,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 527,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 528,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 529,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 530,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 531,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 532,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 533,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 534,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 535,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 536,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 537,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 538,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 539,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 540,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 541,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 542,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 543,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 544,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 545,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 546,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 547,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 548,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 549,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 550,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 551,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 552,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 553,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 554,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 555,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 556,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 557,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 558,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 559,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 560,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 561,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 562,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 563,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 564,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 565,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 566,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 567,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 568,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 569,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 570,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 571,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 572,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 573,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 574,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 575,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 576,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 577,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 578,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 579,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 580,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 581,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 582,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 583,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 584,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 585,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 586,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 587,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 588,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 589,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 590,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 591,
        "question": "Wann wird ein sonstiger Bezug (z. B. Bonus für 2025, ausgezahlt im Februar 2026) steuerrechtlich erfasst?",
        "options": ["A) Im Jahr der Erarbeitung (2025).", "B) Im Monat des tatsächlichen Zuflusses (Februar 2026) gemäß § 11 Abs. 1 Satz 4 EStG.", "C) Gleichmäßig verteilt auf 12 Monate.", "D) Überhaupt nicht, er ist steuerfrei."],
        "correct_letter": "B",
        "explanation": "Für sonstige Bezüge gilt im Steuerrecht ohne Ausnahme das Zuflussprinzip im Kalenderjahr der Auszahlung."
    },
    {
        "id": 592,
        "question": "Welcher Wert dient als Berechnungsgrundlage für die Ermittlung des geldwerten Vorteils nach der 1%-Regelung bei der privaten Nutzung eines Dienstwagens?",
        "options": ["A) Der tatsächliche Kaufpreis des Gebrauchtwagens", "B) Der inländische Bruttolistenpreis (UVP) zum Zeitpunkt der Erstzulassung, aufgerundet auf volle 100 Euro, inklusive Umsatzsteuer und Sonderausstattung.", "C) Der Restwert laut Gutachten", "D) Die jährlichen Tankkosten"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung basiert gesetzlich immer auf dem gerundeten Bruttolistenpreis der Erstzulassung des Fahrzeugs."
    },
    {
        "id": 593,
        "question": "Ein Arbeitgeber organisiert eine Betriebsveranstaltung exklusiv für 3 Vorstandsmitglieder (Kosten pro Kopf: 110,00 €). Liegt eine steuerbegünstigte Betriebsveranstaltung vor?",
        "options": ["A) Ja, weil die 110-Euro-Grenze exakt eingehalten wurde.", "B) Nein, da eine Betriebsveranstaltung voraussetzt, dass der Teilnehmerkreis allen Mitarbeitern des Unternehmens oder eines Betriebsteils offensteht.", "C) Ja, Vorstände zählen doppelt.", "D) Nur wenn ein Protokoll geführt wird."],
        "correct_letter": "B",
        "explanation": "Exklusivveranstaltungen für ausgewählte Gruppen erfüllen nicht das Merkmal der Offenheit und führen ab dem ersten Cent zu regulärem Arbeitslohn."
    },
    {
        "id": 594,
        "question": "Wie wird ein monatlicher Tankgutschein im Wert von exakt 52,00 € abgerechnet, wenn keine Pauschalierung angewendet wird?",
        "options": ["A) Die ersten 50,00 € sind frei, 2,00 € sind steuerpflichtig.", "B) Der komplette Betrag (52,00 €) ist steuer- und sozialversicherungspflichtig, da es sich um eine Freigrenze und nicht um einen Freibetrag handelt.", "C) Der Gutschein ist immer steuerfrei.", "D) Es fällt nur Kirchensteuer an."],
        "correct_letter": "B",
        "explanation": "Wird eine Freigrenze auch nur um einen Cent überschritten, entfällt die Steuerbefreiung für den gesamten Betrag vollständig."
    },
    {
        "id": 595,
        "question": "Bis zu welchem gesetzlichen Termin muss die elektronische Lohnsteuerbescheinigung (LStB) für das abgelaufene Jahr spätestens an das Finanzamt übermittelt werden?",
        "options": ["A) Bis zum 31. Januar des Folgejahres", "B) Bis zum spätestens 28. Februar (bzw. 29. Februar in Schaltjahren) des Folgejahres (§ 41b Abs. 1 EStG)", "C) Bis zum 31. März des Folgejahres", "D) Bis zum 15. Februar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Die elektronische Lohnsteuerbescheinigung muss zwingend bis zum letzten Tag des Monats Februar des Folgejahres übermittelt sein."
    },
    {
        "id": 596,
        "question": "Wann muss eine Lohnsteueranmeldung (LStA) monatlich abgegeben werden?",
        "options": ["A) Wenn die abzuführende Lohnsteuer im Vorjahr mehr als 5.000,00 € betragen hat (§ 41a Abs. 1 EStG).", "B) Bei jeder Neugründung einer GmbH.", "C) Wenn Auszubildende im Betrieb sind.", "D) Das entscheidet das Lohnbüro flexibel."],
        "correct_letter": "A",
        "explanation": "Der Anmeldezeitraum richtet sich nach der Lohnsteuerzahllast des Vorjahres. Über 5.000,00 € verpflichtet zur monatlichen Abgabe bis zum 10. des Folgemonats."
    },
    {
        "id": 597,
        "question": "Bis zu welchem Termin muss der digitale Lohnnachweis für die Berufsgenossenschaft (gesetzliche Unfallversicherung) elektronisch übermittelt werden?",
        "options": ["A) 31. Dezember des laufenden Jahres", "B) 16. Februar des Folgejahres", "C) 31. März des Folgejahres", "D) 10. Januar des Folgejahres"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis zur Unfallversicherung ist bis zum 16. Februar des Folgejahres einzureichen."
    },
    {
        "id": 598,
        "question": "Mit welchem Meldegrund (Abgabegrund) wird die normale Jahresmeldung zur Sozialversicherung für einen durchgehend beschäftigten Mitarbeiter übermittelt?",
        "options": ["A) Meldegrund 10", "B) Meldegrund 30", "C) Meldegrund 50", "D) Meldegrund 57"],
        "correct_letter": "C",
        "explanation": "Die DEÜV-Jahresmeldung für einen über den Jahreswechsel hinaus beschäftigten Mitarbeiter trägt den Kennschlüssel 50."
    },
    {
        "id": 599,
        "question": "Welche Lohnart gilt abrechnungstechnisch als sonstiger Bezug?",
        "options": ["A) Laufendes Monatsgehalt", "B) Einmalig gezahltes Weihnachtsgeld oder Urlaubsgeld", "C) Monatliche Leistungszulage", "D) Fahrtkostenzuschuss (monatlich)"],
        "correct_letter": "B",
        "explanation": "Einmalige Zuwendungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden, sind steuerlich sonstige Bezüge."
    },
    {
        "id": 600,
        "question": "In welchem Zeitraum eines Kalenderjahres ist die sogenannte März-Klausel bei Einmalzahlungen in der Sozialversicherung zu prüfen?",
        "options": ["A) Vom 1. Oktober bis 31. Dezember", "B) Vom 1. Januar bis zum 31. März des Folgejahres (§ 23a Abs. 4 SGB IV)", "C) Nur im Monat März", "D) Ganzjährig bei jeder Abrechnung"],
        "correct_letter": "B",
        "explanation": "Einmalzahlungen zwischen dem 1. Januar und 31. März sind dem Vorjahr zuzurechnen, wenn bestimmte BBG-Kriterien erfüllt sind."
    },
    {
        "id": 601,
        "question": "Was ist der Zweck des elektronischen Lohnsteuerabzugsmerkmale (ELStAM)?",
        "options": ["A) Um den Arbeitgeber von der Lohnsteuer zu befreien.", "B) Um steuerrelevante Daten des Arbeitnehmers elektronisch an den Arbeitgeber zu übermitteln.", "C) Um die Kirchensteuer zu erhöhen.", "D) Um den Solidaritätszuschlag abzuschaffen."],
        "correct_letter": "B",
        "explanation": "ELStAM dienen der elektronischen Übermittlung der Steuerklasse, Kirchensteuermerkmale und Freibeträge an den Arbeitgeber."
    },
    {
        "id": 602,
        "question": "Welche Frist gilt für die Abgabe der monatlichen Lohnsteueranmeldung (LStA)?",
        "options": ["A) Bis zum 5. des Folgemonats", "B) Bis zum 10. des Folgemonats", "C) Bis zum 15. des Folgemonats", "D) Bis zum letzten Tag des Folgemonats"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteueranmeldung muss bis zum 10. des Folgemonats beim Finanzamt eingereicht werden."
    },
    {
        "id": 603,
        "question": "Was passiert bei Überschreitung der Beitragsbemessungsgrenze in der Krankenversicherung?",
        "options": ["A) Der Arbeitnehmer wird privat versichert.", "B) Die Beiträge werden nur bis zur BBG berechnet, darüber hinaus keine KV-Beiträge.", "C) Die Beiträge verdoppeln sich.", "D) Der Arbeitgeber zahlt alles."],
        "correct_letter": "B",
        "explanation": "Die Beitragsbemessungsgrenze deckelt die Beitragszahlung in der Krankenversicherung nach oben hin ab."
    },
    {
        "id": 604,
        "question": "Welche Besonderheit gilt für geringfügig Beschäftigte (Minijobber) in der Sozialversicherung?",
        "options": ["A) Sie zahlen vollen Sozialversicherungsbeitrag.", "B) Sie zahlen pauschale Beiträge des Arbeitgebers zur Rentenversicherung (13 %) und Krankenversicherung (ab 2025: 6 %).", "C) Sie sind komplett beitragsfrei.", "D) Sie zahlen nur Kirchensteuer."],
        "correct_letter": "B",
        "explanation": "Minijobber zahlen pauschale Beiträge des Arbeitgebers zur Rentenversicherung (13 %) und Krankenversicherung (ab 2025: 6 %)."
    },
    {
        "id": 605,
        "question": "Was ist das Faktorverfahren bei der Steuerklassenkombination IV/IV?",
        "options": ["A) Ein Verfahren zur Berechnung der Kirchensteuer", "B) Ein Verfahren zur genaueren Verteilung der Lohnsteuer bei Ehegatten mit ungleichen Einkommen", "C) Ein Verfahren zur Berechnung des Solidaritätszuschlags", "D) Ein Verfahren zur Berechnung der Sozialversicherungsbeiträge"],
        "correct_letter": "B",
        "explanation": "Das Faktorverfahren sorgt für eine präzisere Lohnsteuerbelastung unter Berücksichtigung des Ehegattensplittings."
    },
    {
        "id": 606,
        "question": "Welcher Freibetrag gilt für Alleinerziehende in der Steuerklasse II?",
        "options": ["A) 0 €", "B) 2.928 € jährlich (244 € monatlich)", "C) 5.000 € jährlich", "D) 10.000 € jährlich"],
        "correct_letter": "B",
        "explanation": "Der Entlastungsbetrag für Alleinerziehende beträgt 2.928 € jährlich."
    },
    {
        "id": 607,
        "question": "Wie hoch ist der allgemeine Grundfreibetrag im Einkommensteuergesetz für 2026?",
        "options": ["A) 10.347 €", "B) 11.604 €", "C) 12.000 €", "D) 9.408 €"],
        "correct_letter": "B",
        "explanation": "Der Grundfreibetrag wurde für 2026 auf 11.604 € angehoben."
    },
    {
        "id": 608,
        "question": "Was ist ein sonstiger Bezug im Lohnsteuerrecht?",
        "options": ["A) Das laufende Monatsgehalt", "B) Einmalige Zuwendungen wie Weihnachtsgeld, Urlaubsgeld oder Boni", "C) Die monatliche Zulage", "D) Der Fahrtkostenzuschuss"],
        "correct_letter": "B",
        "explanation": "Sonstige Bezüge sind einmalige Zahlungen, die nicht für einen einzelnen Lohnzahlungszeitraum gewährt werden."
    },
    {
        "id": 609,
        "question": "Wie wird der Kirchensteuersatz in Bayern und Baden-Württemberg berechnet?",
        "options": ["A) 9 % der Lohnsteuer", "B) 8 % der Lohnsteuer", "C) 10 % der Lohnsteuer", "D) 7 % der Lohnsteuer"],
        "correct_letter": "B",
        "explanation": "In Bayern und Baden-Württemberg beträgt der Kirchensteuersatz 8 % der Lohnsteuer."
    },
    {
        "id": 610,
        "question": "Was ist die Funktion des digitalen Lohnnachweises für die Berufsgenossenschaft?",
        "options": ["A) Um die Unfallversicherung zu kündigen", "B) Um die Löhne für die Berechnung der Unfallversicherungsbeiträge zu melden", "C) Um die Rentenversicherung zu berechnen", "D) Um die Krankenversicherung zu prüfen"],
        "correct_letter": "B",
        "explanation": "Der digitale Lohnnachweis dient der Meldung der Löhne zur Berechnung der Unfallversicherungsbeiträge."
    },
    {
        "id": 611,
        "question": "Welche Meldegrund-Kennzahl wird für die Jahresmeldung bei durchgehend beschäftigten Mitarbeitern verwendet?",
        "options": ["A) 10", "B) 30", "C) 50", "D) 57"],
        "correct_letter": "C",
        "explanation": "Die Kennzahl 50 kennzeichnet die reguläre Jahresmeldung für durchgehend beschäftigte Mitarbeiter."
    },
    {
        "id": 612,
        "question": "Was ist der Zweck der Umlage U1?",
        "options": ["A) Erstattung von Kosten bei Mutterschaft", "B) Erstattung von Kosten bei Entgeltfortzahlung im Krankheitsfall für kleine Betriebe", "C) Erstattung von Urlaubskosten", "D) Erstattung von Weihnachtsgeld"],
        "correct_letter": "B",
        "explanation": "Die Umlage U1 erstattet kleinen Betrieben einen Teil der Entgeltfortzahlungskosten bei Krankheit."
    },
    {
        "id": 613,
        "question": "Was ist der Zweck der Umlage U2?",
        "options": ["A) Erstattung von Kosten bei Krankheit", "B) Erstattung von Kosten bei Mutterschutz zu 100 %", "C) Erstattung von Urlaubskosten", "D) Erstattung von Weihnachtsgeld"],
        "correct_letter": "B",
        "explanation": "Die Umlage U2 erstattet dem Arbeitgeber alle Aufwendungen für Mutterschutz zu 100 %."
    },
    {
        "id": 614,
        "question": "Wie hoch ist der Beitragssatz zur Arbeitslosenversicherung (Gesamtsatz) im Jahr 2026?",
        "options": ["A) 1,3 %", "B) 2,6 %", "C) 3,0 %", "D) 2,0 %"],
        "correct_letter": "B",
        "explanation": "Der Gesamtsatz zur Arbeitslosenversicherung beträgt 2,6 %, je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen."
    },
    {
        "id": 615,
        "question": "Welcher Beitragssatz gilt für die gesetzliche Pflegeversicherung (ohne Kinderlosenzuschlag) im Jahr 2026?",
        "options": ["A) 2,3 %", "B) 3,4 %", "C) 4,0 %", "D) 2,5 %"],
        "correct_letter": "B",
        "explanation": "Der allgemeine Beitragssatz zur Pflegeversicherung beträgt 3,4 %."
    },
    {
        "id": 616,
        "question": "Wie hoch ist der Zusatzbeitrag zur Krankenversicherung im Jahr 2026?",
        "options": ["A) 1,0 %", "B) 1,7 %", "C) 2,0 %", "D) 1,5 %"],
        "correct_letter": "B",
        "explanation": "Der durchschnittliche Zusatzbeitrag zur Krankenversicherung liegt bei 1,7 %."
    },
    {
        "id": 617,
        "question": "Was ist die Beitragsbemessungsgrenze für die Rentenversicherung im Jahr 2026?",
        "options": ["A) 5.512,50 € monatlich", "B) 8.450,00 € monatlich", "C) 7.000,00 € monatlich", "D) 6.000,00 € monatlich"],
        "correct_letter": "B",
        "explanation": "Die BBG für die Rentenversicherung beträgt 2026 monatlich 8.450,00 €."
    },
    {
        "id": 618,
        "question": "Was ist die Beitragsbemessungsgrenze für die Krankenversicherung im Jahr 2026?",
        "options": ["A) 5.512,50 € monatlich", "B) 8.450,00 € monatlich", "C) 7.000,00 € monatlich", "D) 6.000,00 € monatlich"],
        "correct_letter": "A",
        "explanation": "Die BBG für die Krankenversicherung beträgt 2026 monatlich 5.512,50 €."
    },
    {
        "id": 619,
        "question": "Was bedeutet der Begriff 'paritätische Finanzierung' bei Sozialversicherungsbeiträgen?",
        "options": ["A) Der Staat zahlt alles.", "B) Arbeitgeber und Arbeitnehmer tragen je zur Hälfte.", "C) Der Arbeitnehmer zahlt alles.", "D) Der Arbeitgeber zahlt alles."],
        "correct_letter": "B",
        "explanation": "Paritätische Finanzierung bedeutet, dass Arbeitgeber und Arbeitnehmer je zur Hälfte die Beiträge tragen."
    },
    {
        "id": 620,
        "question": "Welche Steuerklasse gilt für unverheiratete Arbeitnehmer ohne Kinder?",
        "options": ["A) Steuerklasse I", "B) Steuerklasse II", "C) Steuerklasse III", "D) Steuerklasse V"],
        "correct_letter": "A",
        "explanation": "Unverheiratete Arbeitnehmer ohne Kinder werden in Steuerklasse I eingestuft."
    },
    {
        "id": 621,
        "question": "Welche Steuerklasse gilt für verheiratete Arbeitnehmer, deren Partner in Steuerklasse V eingestuft ist?",
        "options": ["A) Steuerklasse I", "B) Steuerklasse II", "C) Steuerklasse III", "D) Steuerklasse IV"],
        "correct_letter": "C",
        "explanation": "Wenn ein Ehegatte Steuerklasse V hat, wird der andere in Steuerklasse III eingestuft."
    },
    {
        "id": 622,
        "question": "Was ist der Solidaritätszuschlag im Jahr 2026?",
        "options": ["A) 5,5 % der Lohnsteuer für alle", "B) 0 % für die meisten Steuerpflichtigen, nur bei sehr hohen Einkommen relevant", "C) 10 % der Lohnsteuer", "D) Abgeschafft für alle"],
        "correct_letter": "B",
        "explanation": "Der Solidaritätszuschlag wurde weitgehend abgeschafft, nur bei sehr hohen Einkommen fällt er noch an."
    },
    {
        "id": 623,
        "question": "Was ist der Zweck des Entlastungsbetrags für Alleinerziehende?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für Alleinerziehende zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Entlastungsbetrag für Alleinerziehende verringert die steuerliche Belastung für diese Personengruppe."
    },
    {
        "id": 624,
        "question": "Wie wird der Kinderlosenzuschlag in der Pflegeversicherung berechnet?",
        "options": ["A) 0,3 % des Bruttogehalts", "B) 0,6 % des Pflegeversicherungsbeitrags", "C) 1,0 % des Bruttogehalts", "D) 0,5 % des Bruttogehalts"],
        "correct_letter": "B",
        "explanation": "Der Kinderlosenzuschlag beträgt 0,6 % des Pflegeversicherungsbeitrags."
    },
    {
        "id": 625,
        "question": "Ab welchem Alter müssen Arbeitnehmer den Kinderlosenzuschlag zahlen?",
        "options": ["A) Ab 18 Jahren", "B) Ab 23 Jahren", "C) Ab 25 Jahren", "D) Ab 30 Jahren"],
        "correct_letter": "B",
        "explanation": "Der Kinderlosenzuschlag gilt ab Vollendung des 23. Lebensjahres."
    },
    {
        "id": 626,
        "question": "Wer ist vom Kinderlosenzuschlag befreit?",
        "options": ["A) Alle Arbeitnehmer", "B) Personen mit mindestens einem Kind unter 25 Jahren", "C) Nur Rentner", "D) Niemand"],
        "correct_letter": "B",
        "explanation": "Personen mit mindestens einem Kind unter 25 Jahren sind vom Kinderlosenzuschlag befreit."
    },
    {
        "id": 627,
        "question": "Was ist die 1%-Regelung bei Dienstwagen?",
        "options": ["A) 1 % des Kaufpreises als monatlicher Vorteil", "B) 1 % des Bruttolistenpreises pro Monat als geldwerter Vorteil", "C) 1 % des Nettogehalts", "D) 1 % der Kilometerpauschale"],
        "correct_letter": "B",
        "explanation": "Die 1%-Regelung berechnet den geldwerten Vorteil mit 1 % des Bruttolistenpreises pro Monat."
    },
    {
        "id": 628,
        "question": "Was ist die 0,03%-Regel bei Dienstwagen?",
        "options": ["A) 0,03 % des Bruttolistenpreises pro Kilometer für Fahrten zwischen Wohnung und Arbeitsstätte", "B) 0,03 % des Nettogehalts", "C) 0,03 % des Kaufpreises", "D) 0,03 % der Kilometerpauschale"],
        "correct_letter": "A",
        "explanation": "Die 0,03%-Regel wird zusätzlich zur 1%-Regel für Fahrten zwischen Wohnung und Arbeitsstätte angewendet."
    },
    {
        "id": 629,
        "question": "Was ist ein häusliches Arbeitszimmer steuerlich?",
        "options": ["A) Ein Zimmer im Büro", "B) Ein Zimmer, das ausschließlich oder fast ausschließlich beruflich genutzt wird", "C) Ein Schlafzimmer", "D) Ein Wohnzimmer"],
        "correct_letter": "B",
        "explanation": "Ein häusliches Arbeitszimmer muss ausschließlich oder fast ausschließlich beruflich genutzt werden."
    },
    {
        "id": 630,
        "question": "Wie hoch ist die Kilometerpauschale für Wege zwischen Wohnung und Arbeitsstätte?",
        "options": ["A) 0,20 € pro Kilometer", "B) 0,30 € pro Kilometer", "C) 0,35 € pro Kilometer", "D) 0,40 € pro Kilometer"],
        "correct_letter": "B",
        "explanation": "Die Kilometerpauschale beträgt 0,30 € pro Kilometer für Wege zwischen Wohnung und Arbeitsstätte."
    },
    {
        "id": 631,
        "question": "Was ist der Zweck der Lohnsteuerbescheinigung?",
        "options": ["A) Um dem Arbeitgeber zu zeigen, wie viel Lohnsteuer gezahlt wurde", "B) Um dem Finanzamt die Lohnsteuerabzüge zu melden", "C) Um dem Arbeitnehmer die Lohnsteuerabzüge zu bestätigen", "D) Um die Krankenversicherung zu prüfen"],
        "correct_letter": "C",
        "explanation": "Die Lohnsteuerbescheinigung bestätigt dem Arbeitnehmer die Lohnsteuerabzüge für das Finanzamt."
    },
    {
        "id": 632,
        "question": "Bis wann muss die Lohnsteuerbescheinigung dem Arbeitnehmer zugegangen sein?",
        "options": ["A) Bis zum 31. Januar", "B) Bis zum 28. Februar", "C) Bis zum 31. März", "D) Bis zum 15. April"],
        "correct_letter": "C",
        "explanation": "Die Lohnsteuerbescheinigung muss dem Arbeitnehmer spätestens bis zum 31. März zugegangen sein."
    },
    {
        "id": 633,
        "question": "Was ist der Zweck der DEÜV-Meldungen?",
        "options": ["A) Um die Lohnsteuer zu berechnen", "B) Um sozialversicherungsrechtliche Daten an die Krankenkassen zu melden", "C) Um die Kirchensteuer zu berechnen", "D) Um den Solidaritätszuschlag zu berechnen"],
        "correct_letter": "B",
        "explanation": "DEÜV-Meldungen dienen der Meldung sozialversicherungsrechtlicher Daten an die Krankenkassen."
    },
    {
        "id": 634,
        "question": "Welcher Meldegrund wird bei Austritt eines Mitarbeiters verwendet?",
        "options": ["A) 10", "B) 30", "C) 50", "D) 57"],
        "correct_letter": "A",
        "explanation": "Meldegrund 10 kennzeichnet den Austritt eines Mitarbeiters aus dem Beschäftigungsverhältnis."
    },
    {
        "id": 635,
        "question": "Was ist ein Minijob?",
        "options": ["A) Ein Job mit 40 Stunden pro Woche", "B) Ein geringfügiges Beschäftigungsverhältnis mit einem Verdienst bis 538 € im Monat (2026)", "C) Ein Job ohne Sozialversicherung", "D) Ein Job mit hohem Gehalt"],
        "correct_letter": "B",
        "explanation": "Ein Minijob ist ein geringfügiges Beschäftigungsverhältnis mit einem Verdienst bis 538 € im Monat (2026)."
    },
    {
        "id": 636,
        "question": "Was ist ein Midijob?",
        "options": ["A) Ein Job bis 538 €", "B) Ein Job zwischen 538,01 € und 2.000 € im Monat (Gleitzone)", "C) Ein Job über 5.000 €", "D) Ein Job ohne Sozialversicherung"],
        "correct_letter": "B",
        "explanation": "Ein Midijob ist ein Beschäftigungsverhältnis in der Gleitzone zwischen 538,01 € und 2.000 €."
    },
    {
        "id": 637,
        "question": "Wie werden die Sozialversicherungsbeiträge in der Gleitzone berechnet?",
        "options": ["A) Volle Beiträge", "B) Reduzierte Beiträge mit einem Faktor", "C) Keine Beiträge", "D) Nur Arbeitgeberbeiträge"],
        "correct_letter": "B",
        "explanation": "In der Gleitzone werden die Beiträge mit einem Faktor reduziert berechnet."
    },
    {
        "id": 638,
        "question": "Was ist der Zweck der Gleitzone?",
        "options": ["A) Um Beiträge zu erhöhen", "B) Um den Übergang von Minijob zu sozialversicherungspflichtiger Beschäftigung gleitend zu gestalten", "C) Um die Kirchensteuer zu senken", "D) Um den Solidaritätszuschlag zu erhöhen"],
        "correct_letter": "B",
        "explanation": "Die Gleitzone soll den Übergang von Minijob zu sozialversicherungspflichtiger Beschäftigung gleitend gestalten."
    },
    {
        "id": 639,
        "question": "Wie hoch ist die Entgeltfortzahlung im Krankheitsfall?",
        "options": ["A) 50 % des Gehalts", "B) 100 % des Gehalts für bis zu 6 Wochen", "C) 75 % des Gehalts", "D) 80 % des Gehalts"],
        "correct_letter": "B",
        "explanation": "Die Entgeltfortzahlung beträgt 100 % des Gehalts für bis zu 6 Wochen."
    },
    {
        "id": 640,
        "question": "Was ist der Zweck des Mutterschaftsgeldes?",
        "options": ["A) Um den Arbeitgeber zu entlasten", "B) Um den Verdienstausfall während der Mutterschutzfrist auszugleichen", "C) Um die Kirchensteuer zu senken", "D) Um den Solidaritätszuschlag zu erhöhen"],
        "correct_letter": "B",
        "explanation": "Das Mutterschaftsgeld gleicht den Verdienstausfall während der Mutterschutzfrist aus."
    },
    {
        "id": 641,
        "question": "Wie lange dauert der Mutterschutz vor der Entbindung?",
        "options": ["A) 4 Wochen", "B) 6 Wochen", "C) 8 Wochen", "D) 12 Wochen"],
        "correct_letter": "B",
        "explanation": "Der Mutterschutz beginnt 6 Wochen vor der Entbindung."
    },
    {
        "id": 642,
        "question": "Wie lange dauert der Mutterschutz nach der Entbindung?",
        "options": ["A) 4 Wochen", "B) 8 Wochen", "C) 12 Wochen", "D) 16 Wochen"],
        "correct_letter": "B",
        "explanation": "Der Mutterschutz dauert 8 Wochen nach der Entbindung."
    },
    {
        "id": 643,
        "question": "Was ist der Zweck des Elterngeldes?",
        "options": ["A) Um den Arbeitgeber zu entlasten", "B) Um Eltern bei der Betreuung ihres Kindes zu unterstützen", "C) Um die Kirchensteuer zu senken", "D) Um den Solidaritätszuschlag zu erhöhen"],
        "correct_letter": "B",
        "explanation": "Das Elterngeld unterstützt Eltern bei der Betreuung ihres Kindes."
    },
    {
        "id": 644,
        "question": "Wie lange kann Elterngeld bezogen werden?",
        "options": ["A) 6 Monate", "B) Bis zu 14 Monate", "C) 18 Monate", "D) 24 Monate"],
        "correct_letter": "B",
        "explanation": "Elterngeld kann bis zu 14 Monate bezogen werden."
    },
    {
        "id": 645,
        "question": "Was ist der Zweck des Kindergeldes?",
        "options": ["A) Um den Arbeitgeber zu entlasten", "B) Um Familien mit Kindern finanziell zu unterstützen", "C) Um die Kirchensteuer zu senken", "D) Um den Solidaritätszuschlag zu erhöhen"],
        "correct_letter": "B",
        "explanation": "Das Kindergeld unterstützt Familien mit Kindern finanziell."
    },
    {
        "id": 646,
        "question": "Wie hoch ist das Kindergeld im Jahr 2026 pro Kind?",
        "options": ["A) 200 €", "B) 250 €", "C) 255 €", "D) 300 €"],
        "correct_letter": "C",
        "explanation": "Das Kindergeld beträgt 2026 255 € pro Kind."
    },
    {
        "id": 647,
        "question": "Bis zu welchem Alter wird Kindergeld gezahlt?",
        "options": ["A) Bis 16 Jahre", "B) Bis 18 Jahre", "C) Bis 25 Jahre", "D) Bis 30 Jahre"],
        "correct_letter": "C",
        "explanation": "Kindergeld wird bis zum 25. Lebensjahr gezahlt."
    },
    {
        "id": 648,
        "question": "Was ist der Kinderfreibetrag in der Steuererklärung?",
        "options": ["A) 0 €", "B) 6.384 € pro Kind (2026)", "C) 10.000 € pro Kind", "D) 5.000 € pro Kind"],
        "correct_letter": "B",
        "explanation": "Der Kinderfreibetrag beträgt 6.384 € pro Kind (2026)."
    },
    {
        "id": 649,
        "question": "Was ist der Zweck des Kinderfreibetrags?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für Familien mit Kindern zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Kinderfreibetrag verringert die steuerliche Belastung für Familien mit Kindern."
    },
    {
        "id": 650,
        "question": "Was ist der Unterschied zwischen Kindergeld und Kinderfreibetrag?",
        "options": ["A) Kein Unterschied", "B) Kindergeld wird monatlich gezahlt, Kinderfreibetrag wirkt in der Steuererklärung", "C) Kindergeld ist höher", "D) Kinderfreibetrag ist höher"],
        "correct_letter": "B",
        "explanation": "Kindergeld wird monatlich gezahlt, der Kinderfreibetrag wirkt in der Steuererklärung."
    },
    {
        "id": 651,
        "question": "Was ist der Zweck der Lohnsteuerkarte?",
        "options": ["A) Sie wurde durch ELStAM abgelöst", "B) Sie wird noch verwendet", "C) Sie ist für die Kirchensteuer", "D) Sie ist für den Solidaritätszuschlag"],
        "correct_letter": "A",
        "explanation": "Die Lohnsteuerkarte wurde durch die elektronischen Lohnsteuerabzugsmerkmale (ELStAM) abgelöst."
    },
    {
        "id": 652,
        "question": "Wie werden ELStAM abgerufen?",
        "options": ["A) Per Post", "B) Elektronisch über das ELStAM-Verfahren", "C) Per Fax", "D) Persönlich beim Finanzamt"],
        "correct_letter": "B",
        "explanation": "ELStAM werden elektronisch über das ELStAM-Verfahren abgerufen."
    },
    {
        "id": 653,
        "question": "Was passiert, wenn ELStAM nicht abgerufen werden können?",
        "options": ["A) Der Arbeitnehmer wird nicht bezahlt", "B) Die Steuerklasse VI wird angewendet", "C) Die Steuerklasse I wird angewendet", "D) Der Arbeitgeber zahlt alles"],
        "correct_letter": "B",
        "explanation": "Wenn ELStAM nicht abgerufen werden können, wird die Steuerklasse VI angewendet."
    },
    {
        "id": 654,
        "question": "Was ist der Zweck der Jahresarbeitszeitvergütung?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Schwankungen im Arbeitszeitkonto auszugleichen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Die Jahresarbeitszeitvergütung gleicht Schwankungen im Arbeitszeitkonto aus."
    },
    {
        "id": 655,
        "question": "Was ist ein Arbeitszeitkonto?",
        "options": ["A) Ein Konto für die Kirchensteuer", "B) Ein Konto zur Erfassung von Arbeitsstunden und Zeitguthaben", "C) Ein Konto für den Solidaritätszuschlag", "D) Ein Konto für die Sozialversicherungsbeiträge"],
        "correct_letter": "B",
        "explanation": "Ein Arbeitszeitkonto erfasst Arbeitsstunden und Zeitguthaben."
    },
    {
        "id": 656,
        "question": "Was ist der Zweck von Überstunden?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um zusätzliche Arbeitsleistung zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Überstunden vergüten zusätzliche Arbeitsleistung."
    },
    {
        "id": 657,
        "question": "Wie werden Überstunden vergütet?",
        "options": ["A) Immer mit Zuschlag", "B) Je nach Tarifvertrag oder Arbeitsvertrag", "C) Nie mit Zuschlag", "D) Immer doppelt"],
        "correct_letter": "B",
        "explanation": "Die Vergütung von Überstunden hängt vom Tarifvertrag oder Arbeitsvertrag ab."
    },
    {
        "id": 658,
        "question": "Was ist der Zweck von Nachtzuschlägen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Nachtarbeit zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Nachtzuschläge vergüten Nachtarbeit."
    },
    {
        "id": 659,
        "question": "Was ist der Zweck von Sonn- und Feiertagszuschlägen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Arbeit an Sonn- und Feiertagen zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Sonn- und Feiertagszuschläge vergüten Arbeit an Sonn- und Feiertagen."
    },
    {
        "id": 660,
        "question": "Was ist der Zweck von Schichtzuschlägen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Schichtarbeit zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Schichtzuschläge vergüten Schichtarbeit."
    },
    {
        "id": 661,
        "question": "Was ist der Zweck von Erschwerniszuschlägen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um besonders belastende Tätigkeiten zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Erschwerniszuschläge vergüten besonders belastende Tätigkeiten."
    },
    {
        "id": 662,
        "question": "Was ist der Zweck von Leistungszuschlägen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um besondere Leistungen zu vergüten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Leistungszuschläge vergüten besondere Leistungen."
    },
    {
        "id": 663,
        "question": "Was ist der Zweck von Tantiemen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um am Unternehmenserfolg zu beteiligen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Tantiemen beteiligen am Unternehmenserfolg."
    },
    {
        "id": 664,
        "question": "Was ist der Zweck von Provisionen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um erfolgsabhängige Vergütung zu leisten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Provisionen sind erfolgsabhängige Vergütungen."
    },
    {
        "id": 665,
        "question": "Was ist der Zweck von Boni?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um besondere Leistungen zu belohnen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Boni belohnen besondere Leistungen."
    },
    {
        "id": 666,
        "question": "Was ist der Zweck von Gratifikationen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um langjährige Betriebszugehörigkeit zu belohnen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Gratifikationen belohnen langjährige Betriebszugehörigkeit."
    },
    {
        "id": 667,
        "question": "Was ist der Zweck von Weihnachtsgeld?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um eine zusätzliche Zuwendung zum Weihnachtsfest zu leisten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Weihnachtsgeld ist eine zusätzliche Zuwendung zum Weihnachtsfest."
    },
    {
        "id": 668,
        "question": "Was ist der Zweck von Urlaubsgeld?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um eine zusätzliche Zuwendung zum Urlaub zu leisten", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Urlaubsgeld ist eine zusätzliche Zuwendung zum Urlaub."
    },
    {
        "id": 669,
        "question": "Was ist der Zweck von Jubiläumszahlungen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Betriebsjubiläen zu belohnen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Jubiläumszahlungen belohnen Betriebsjubiläen."
    },
    {
        "id": 670,
        "question": "Was ist der Zweck von Abfindungen?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um den Verlust des Arbeitsplatzes zu kompensieren", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Abfindungen kompensieren den Verlust des Arbeitsplatzes."
    },
    {
        "id": 671,
        "question": "Wie werden Abfindungen steuerlich behandelt?",
        "options": ["A) Immer steuerfrei", "B) Nach der Fünftelregelung möglich", "C) Immer voll steuerpflichtig", "D) Nur Kirchensteuer"],
        "correct_letter": "B",
        "explanation": "Abfindungen können nach der Fünftelregelung steuerlich begünstigt werden."
    },
    {
        "id": 672,
        "question": "Was ist die Fünftelregelung?",
        "options": ["A) Ein Fünftel ist steuerfrei", "B) Die Abfindung wird durch 5 geteilt und dann mit dem persönlichen Steuersatz besteuert", "C) Fünftel der Abfindung ist steuerpflichtig", "D) Keine Bedeutung"],
        "correct_letter": "B",
        "explanation": "Bei der Fünftelregelung wird die Abfindung durch 5 geteilt und dann mit dem persönlichen Steuersatz besteuert."
    },
    {
        "id": 673,
        "question": "Was ist der Zweck der Lohnsteuerermäßigung?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um außergewöhnliche Belastungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Die Lohnsteuerermäßigung berücksichtigt außergewöhnliche Belastungen steuerlich."
    },
    {
        "id": 674,
        "question": "Was ist eine außergewöhnliche Belastung?",
        "options": ["A) Normale Lebenshaltungskosten", "B) Aufwendungen, die zwangsläufig entstehen und die Lebensführung des Steuerpflichtigen wesentlich beeinträchtigen", "C) Urlaubskosten", "D) Freizeitkosten"],
        "correct_letter": "B",
        "explanation": "Außergewöhnliche Belastungen sind Aufwendungen, die zwangsläufig entstehen und die Lebensführung wesentlich beeinträchtigen."
    },
    {
        "id": 675,
        "question": "Was ist der Zweck der Werbungskosten?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um beruflich veranlasste Aufwendungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Werbungskosten berücksichtigen beruflich veranlasste Aufwendungen steuerlich."
    },
    {
        "id": 676,
        "question": "Was ist der Pauschbetrag für Werbungskosten?",
        "options": ["A) 1.000 €", "B) 1.230 € (2026)", "C) 1.500 €", "D) 2.000 €"],
        "correct_letter": "B",
        "explanation": "Der Pauschbetrag für Werbungskosten beträgt 1.230 € (2026)."
    },
    {
        "id": 677,
        "question": "Was ist der Zweck der Pendlerpauschale?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Wege zwischen Wohnung und Arbeitsstätte steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Die Pendlerpauschale berücksichtigt Wege zwischen Wohnung und Arbeitsstätte steuerlich."
    },
    {
        "id": 678,
        "question": "Wie hoch ist die Pendlerpauschale pro Kilometer?",
        "options": ["A) 0,20 €", "B) 0,30 €", "C) 0,35 €", "D) 0,40 €"],
        "correct_letter": "B",
        "explanation": "Die Pendlerpauschale beträgt 0,30 € pro Kilometer."
    },
    {
        "id": 679,
        "question": "Ab welchem Kilometer gibt es einen Zuschlag zur Pendlerpauschale?",
        "options": ["A) Ab 10 km", "B) Ab 20 km", "C) Ab 21 km", "D) Ab 30 km"],
        "correct_letter": "C",
        "explanation": "Ab dem 21. Kilometer gibt es einen Zuschlag zur Pendlerpauschale."
    },
    {
        "id": 680,
        "question": "Wie hoch ist der Zuschlag zur Pendlerpauschale ab dem 21. Kilometer?",
        "options": ["A) 0,05 €", "B) 0,10 €", "C) 0,15 €", "D) 0,20 €"],
        "correct_letter": "A",
        "explanation": "Der Zuschlag zur Pendlerpauschale beträgt ab dem 21. Kilometer 0,05 € pro Kilometer."
    },
    {
        "id": 681,
        "question": "Was ist der Zweck des Haushaltsfreibetrags?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für Steuerpflichtige mit Haushalt zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Haushaltsfreibetrag verringert die steuerliche Belastung für Steuerpflichtige mit Haushalt."
    },
    {
        "id": 682,
        "question": "Wie hoch ist der Haushaltsfreibetrag?",
        "options": ["A) 1.000 €", "B) 1.908 € (2026)", "C) 2.000 €", "D) 2.500 €"],
        "correct_letter": "B",
        "explanation": "Der Haushaltsfreibetrag beträgt 1.908 € (2026)."
    },
    {
        "id": 683,
        "question": "Was ist der Zweck des Behinderten-Pauschbetrags?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für behinderte Menschen zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Behinderten-Pauschbetrag verringert die steuerliche Belastung für behinderte Menschen."
    },
    {
        "id": 684,
        "question": "Wie hoch ist der Behinderten-Pauschbetrag bei einem Grad der Behinderung von 50?",
        "options": ["A) 1.000 €", "B) 2.840 € (2026)", "C) 3.000 €", "D) 3.500 €"],
        "correct_letter": "B",
        "explanation": "Der Behinderten-Pauschbetrag bei GdB 50 beträgt 2.840 € (2026)."
    },
    {
        "id": 685,
        "question": "Was ist der Zweck des Hinterbliebenen-Pauschbetrags?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für Hinterbliebene zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Hinterbliebenen-Pauschbetrag verringert die steuerliche Belastung für Hinterbliebene."
    },
    {
        "id": 686,
        "question": "Wie hoch ist der Hinterbliebenen-Pauschbetrag?",
        "options": ["A) 1.000 €", "B) 3.860 € (2026)", "C) 4.000 €", "D) 4.500 €"],
        "correct_letter": "B",
        "explanation": "Der Hinterbliebenen-Pauschbetrag beträgt 3.860 € (2026)."
    },
    {
        "id": 687,
        "question": "Was ist der Zweck des Pflege-Pauschbetrags?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um die steuerliche Belastung für Pflegepersonen zu verringern", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Pflege-Pauschbetrag verringert die steuerliche Belastung für Pflegepersonen."
    },
    {
        "id": 688,
        "question": "Wie hoch ist der Pflege-Pauschbetrag?",
        "options": ["A) 600 €", "B) 924 € (2026)", "C) 1.000 €", "D) 1.200 €"],
        "correct_letter": "B",
        "explanation": "Der Pflege-Pauschbetrag beträgt 924 € (2026)."
    },
    {
        "id": 689,
        "question": "Was ist der Zweck des Sonderausgabenabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um bestimmte Aufwendungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Sonderausgabenabzug berücksichtigt bestimmte Aufwendungen steuerlich."
    },
    {
        "id": 690,
        "question": "Was sind Sonderausgaben?",
        "options": ["A) Beruflich veranlasste Aufwendungen", "B) Aufwendungen wie Kirchensteuer, Spenden, Altersvorsorge", "C) Privat veranlasste Aufwendungen", "D) Urlaubskosten"],
        "correct_letter": "B",
        "explanation": "Sonderausgaben sind Aufwendungen wie Kirchensteuer, Spenden, Altersvorsorge."
    },
    {
        "id": 691,
        "question": "Was ist der Zweck des Vorsorgeaufwendungenabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Altersvorsorgeaufwendungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Vorsorgeaufwendungenabzug berücksichtigt Altersvorsorgeaufwendungen steuerlich."
    },
    {
        "id": 692,
        "question": "Was sind Vorsorgeaufwendungen?",
        "options": ["A) Beruflich veranlasste Aufwendungen", "B) Aufwendungen für Altersvorsorge, Krankenversicherung, Pflegeversicherung", "C) Privat veranlasste Aufwendungen", "D) Urlaubskosten"],
        "correct_letter": "B",
        "explanation": "Vorsorgeaufwendungen sind Aufwendungen für Altersvorsorge, Krankenversicherung, Pflegeversicherung."
    },
    {
        "id": 693,
        "question": "Was ist der Zweck des Kinderbetreuungskostenabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Kinderbetreuungskosten steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Kinderbetreuungskostenabzug berücksichtigt Kinderbetreuungskosten steuerlich."
    },
    {
        "id": 694,
        "question": "Wie hoch ist der Abzug für Kinderbetreuungskosten pro Kind?",
        "options": ["A) 1.000 €", "B) 6.000 € (2026)", "C) 8.000 €", "D) 10.000 €"],
        "correct_letter": "B",
        "explanation": "Der Abzug für Kinderbetreuungskosten beträgt 6.000 € pro Kind (2026)."
    },
    {
        "id": 695,
        "question": "Was ist der Zweck des haushaltsnahen Dienstleistungenabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um haushaltsnahe Dienstleistungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der haushaltsnahe Dienstleistungenabzug berücksichtigt haushaltsnahe Dienstleistungen steuerlich."
    },
    {
        "id": 696,
        "question": "Wie hoch ist der Abzug für haushaltsnahe Dienstleistungen?",
        "options": ["A) 1.000 €", "B) 6.000 € (2026)", "C) 8.000 €", "D) 10.000 €"],
        "correct_letter": "B",
        "explanation": "Der Abzug für haushaltsnahe Dienstleistungen beträgt 6.000 € (2026)."
    },
    {
        "id": 697,
        "question": "Was ist der Zweck des Handwerkerleistungsaufwandsabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Handwerkerleistungen steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Handwerkerleistungsaufwandsabzug berücksichtigt Handwerkerleistungen steuerlich."
    },
    {
        "id": 698,
        "question": "Wie hoch ist der Abzug für Handwerkerleistungen?",
        "options": ["A) 1.000 €", "B) 6.000 € (2026)", "C) 8.000 €", "D) 10.000 €"],
        "correct_letter": "B",
        "explanation": "Der Abzug für Handwerkerleistungen beträgt 6.000 € (2026)."
    },
    {
        "id": 699,
        "question": "Was ist der Zweck des Spendenabzugs?",
        "options": ["A) Um die Kirchensteuer zu senken", "B) Um Spenden steuerlich zu berücksichtigen", "C) Um den Solidaritätszuschlag zu erhöhen", "D) Um die Sozialversicherungsbeiträge zu senken"],
        "correct_letter": "B",
        "explanation": "Der Spendenabzug berücksichtigt Spenden steuerlich."
    },
    {
        "id": 700,
        "question": "Wie hoch ist der Abzug für Spenden?",
        "options": ["A) Bis zu 10 % der Einkünfte", "B) Bis zu 20 % der Einkünfte", "C) Bis zu 30 % der Einkünfte", "D) Unbegrenzt"],
        "correct_letter": "B",
        "explanation": "Der Abzug für Spenden beträgt bis zu 20 % der Einkünfte."
    }
];
