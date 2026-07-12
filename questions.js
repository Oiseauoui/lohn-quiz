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
    }
];
