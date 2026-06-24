(function () {
    const STORAGE_KEY = 'kk26-language';
    const DEFAULT_LANGUAGE = 'de';
    const LANGUAGES = ['de', 'en'];

    const TRANSLATIONS = {
        de: {
            'common.brand.backAria': 'Zurück zur Kultur Komitee Website',
            'common.footer.heading': 'Kontakt',
            'common.footer.kk': 'Fragen zum Kultur Komitee: <a href="mailto:info@kulturkomitee.win">info@kulturkomitee.win</a>',
            'common.footer.method': 'Fragen zur Methode: <a href="https://joshuacyang.com" target="_blank" rel="noopener noreferrer">Joshua C. Yang</a>',
            'common.footer.copyright': '© 2026 Kultur Komitee Winterthur',
            'common.language.switchText': 'EN',
            'common.language.switchAria': 'Sprache auf Englisch wechseln',
            'common.loading': 'Laden der Daten...',
            'common.nav.info': 'Info',
            'common.nav.outcomes': 'Tabelle',
            'common.nav.personal': 'Persönlich',
            'common.nav.projects': 'Projekte',

            'filters.all': 'ALLE',
            'filters.allGroups': 'ALLE GRUPPEN',
            'filters.allGroupsCount': 'Alle Gruppen ({count})',
            'filters.allResults': 'ALLE ERGEBNISSE',
            'filters.funded': 'FINANZIERT',
            'filters.unfunded': 'NICHT AUSGEWÄHLT',

            'receipts.title': 'KK26 Wähler:innen-Quittung',
            'receipts.h1': 'WÄHLER:INNEN-QUITTUNG',
            'receipts.help.summary': 'Lesehilfe: Die persönlichen Quittungen verstehen',
            'receipts.help.budget.title': 'Budget',
            'receipts.help.budget.body': 'Jede Person startete mit demselben <strong>Budget</strong> (z.B. 7&apos;000 CHF). Dieses Geld wird nur für Projekte ausgegeben, die Sie mit <strong>Ja</strong> oder <strong>Eher Ja</strong> unterstützt haben.',
            'receipts.help.amount.title': 'Betrag (Ihr Beitrag pro Projekt)',
            'receipts.help.amount.body': 'Der <strong>Betrag</strong> zeigt, wie viel Sie für jedes finanzierte Projekt bezahlt haben. Dieser Betrag zeigt <strong>nicht</strong>, wie sehr Sie ein Projekt mögen. Die Höhe hängt von der Berechnung ab: Sie zahlen <strong>weniger</strong>, wenn viele andere Personen das Projekt unterstützen. Sie zahlen <strong>mehr</strong>, wenn Sie eine:r der wenigen sind, die noch Budget übrig haben.',
            'receipts.help.vote.title': 'Stimme (Ihre Bewertung)',
            'receipts.help.vote.body': 'Die <strong>Stimme</strong> zeigt Ihre ursprüngliche Bewertung: <strong>Ja</strong> = 2 Punkte, <strong>Eher Ja</strong> = 1 Punkt. Dies ist das, was Sie tatsächlich gewählt haben, nicht der Betrag.',
            'receipts.help.funded.title': 'Projekte finanziert',
            'receipts.help.funded.body': 'Die Anzahl Ihrer unterstützten Projekte, die finanziert wurden. Nicht alle werden finanziert. Dies hängt davon ab, ob genug gemeinsames Budget da war.',
            'receipts.help.spent.title': 'Ausgegeben',
            'receipts.help.spent.body': 'Die Summe aller Beträge, die Sie für finanzierte Projekte bezahlt haben.',
            'receipts.help.unfunded.title': 'Nicht finanzierte Projekte',
            'receipts.help.unfunded.body': 'Projekte, die Sie unterstützt haben, die aber nicht finanziert wurden. Entweder reichte das gemeinsame Budget nicht aus, oder das Gruppenbudget war bereits aufgebraucht.',
            'receipts.help.more.title': 'Mehr erfahren',
            'receipts.help.more.body': 'Ausführliche Informationen zum Method of Equal Shares Verfahren finden Sie auf <a href="https://equalshares.net/de/explanation/" target="_blank" rel="noopener noreferrer">equalshares.net/de/explanation</a>.',
            'receipts.intro.philosophy': 'Die Method of Equal Shares ermöglicht es, «einfache» Entscheidungen frühzeitig zu erkennen und sicherzustellen, dass alle Beteiligten einen möglichst gleichwertigen Einfluss auf den Entscheidungsprozess haben. So bleibt am Entscheidungstag mehr Zeit, um die kritischen Projekte gemeinsam und im Dialog zu verhandeln.',
            'receipts.intro.stats': 'Hier sehen Sie die persönlichen Stimmzettel der Abstimmung des Kultur Komitees 2026. Insgesamt haben <strong>{totalVoters} Personen</strong> teilgenommen. Im Durchschnitt wurden pro Person <strong>{avgFunded} Projekte</strong> mit einem Betrag von <strong>CHF {avgSpent}</strong> finanziert. Über die verbleibenden Projekte wurde am Entscheidungstag in Person verhandelt.',
            'receipts.intro.privacy': 'Zum Schutz der Persönlichkeitsrechte wurden die Namen der Komiteemitglieder pseudonymisiert und die Projektnamen durch fiktive Bezeichnungen ersetzt.',
            'receipts.fundedNote': 'Bisher wurden insgesamt {count} Projekte mit einem Gesamtbudget von CHF {budget} finanziert.',
            'receipts.fundedNoteDefault': 'Die finanzierten Projekte wurden mit der Method of Equal Shares berechnet.',
            'receipts.group': 'Gruppe {group}',
            'receipts.section.funded': 'Finanzierte Projekte',
            'receipts.section.unfunded': 'Nicht finanzierte Projekte',
            'receipts.table.article': 'Artikel',
            'receipts.table.vote': 'Stimme',
            'receipts.table.amount': 'Betrag',
            'receipts.total.projectCount': 'Anzahl Projekte',
            'receipts.total.chf': 'Total CHF',
            'receipts.footer.foundation': 'Stiftung für Kunst, Kultur und Geschichte',
            'receipts.footer.thanks': 'Vielen Dank für Ihre Teilnahme!',
            'receipts.error.data': 'Fehler beim Laden der Daten. Bitte stellen Sie sicher, dass <code>assets/data/kk26.json</code> korrekt geladen wurde.',
            'receipts.error.publicData': 'Fehler beim Laden der öffentlichen Daten.',

            'projects.title': 'KK26 Projekt-Quittungen',
            'projects.h1': 'Projekt-Quittungen',
            'projects.help.summary': 'Lesehilfe: Die Projekt-Quittungen verstehen',
            'projects.help.rank.title': 'Rang (Position in der Prüfung)',
            'projects.help.rank.body': 'Der <strong>Rang</strong> zeigt die Reihenfolge, in der der MES-Algorithmus die Projekte geprüft hat. Niedrigerer Rang = früher betrachtet. Geförderte Projekte stehen immer vor nicht geförderten.',
            'projects.help.points.title': 'Punkte',
            'projects.help.points.body': 'Die <strong>Punkte</strong> zeigen die Summe aller Stimmen (Ja = 2 Punkte, Eher Ja = 1 Punkt). Je höher die Punktzahl, desto beliebter war das Projekt in der Gruppe.',
            'projects.help.perPerson.title': 'Pro Person (durchschnittliche Kosten)',
            'projects.help.perPerson.body': 'Diese Zahl zeigt, wie viel das Projekt pro Unterstützende/r kosten würde, wenn die <strong>Kosten</strong> gleichmässig aufgeteilt würden. Je niedriger, desto breiter verteilt sich die Last.',
            'projects.help.cost.title': 'Kosten (Gesamtbudget des Projekts)',
            'projects.help.cost.body': 'Die <strong>Kosten</strong> zeigen das beantragte Gesamtbudget in CHF. Bei geförderten Projekten wurde dieser Betrag bewilligt und von den Unterstützenden gemeinsam finanziert.',
            'projects.help.supporters.title': 'Unterstützer:innen & Beiträge',
            'projects.help.supporters.body': 'Die Tabelle listet alle Personen auf, die mit <strong>Ja</strong> oder <strong>Eher Ja</strong> gestimmt haben. Bei geförderten Projekten sehen Sie den individuellen <strong>Beitrag</strong> jeder Person – berechnet proportional zur Stimme und zum verfügbaren Budget.',
            'projects.help.shortfall.title': 'Fehlbetrag (bei nicht geförderten Projekten)',
            'projects.help.shortfall.body': 'Wenn ein Projekt <strong>NICHT FINANZIERT</strong> wurde, zeigt der <strong>Fehlbetrag</strong>, wie viel zusätzliches Budget die Unterstützenden gebraucht hätten. Das erklärt, warum das Projekt abgelehnt wurde.',
            'projects.help.more.title': 'Mehr erfahren',
            'projects.help.more.body': 'Ausführliche Informationen zum Method of Equal Shares Verfahren finden Sie auf <a href="https://equalshares.net/de/explanation/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline; font-weight: 700;">equalshares.net/de/explanation</a>.',
            'projects.intro.philosophy': 'Das MES-Verfahren hilft dabei, "einfache" Entscheidungen frühzeitig zu identifizieren. So bleibt am Diskussionstag mehr Zeit, um die komplexeren Projekte gemeinsam im Dialog zu klären.',
            'projects.intro.stats': 'Hier sehen Sie alle eingereichten Projekte. Die durchschnittlichen Projektkosten belaufen sich auf <strong>CHF {avgCost}</strong>. Bisher wurden insgesamt <strong>{totalFunded} Projekte</strong> mit einem Gesamtbudget von <strong>CHF {totalSpent}</strong> finanziert.',
            'projects.stats.fundedPerGroup': 'Geförderte Projekte pro Gruppe',
            'projects.stats.spentPerGroup': 'Bisher ausgegebenes Budget pro Gruppe',
            'projects.card.status.funded': 'FINANZIERT',
            'projects.card.status.unfunded': 'NICHT FINANZIERT',
            'projects.card.supporters': 'Unterstützer:innen ({count})',
            'projects.card.vote': 'Stimme',
            'projects.card.contribution': 'Beitrag',
            'projects.card.sum': 'Summe',
            'projects.card.points': 'Punkte',
            'projects.card.cost': 'Kosten',
            'projects.card.coverage': 'Budget-Abdeckung',
            'projects.card.pointsPerPerson': 'Punkte pro Person',
            'projects.card.pointsShort': 'Pnt',
            'projects.card.chfPerPoint': 'CHF pro Punkt',
            'projects.tooltip.vote': 'Stimme',
            'projects.tooltip.budget': 'Budget bei Betrachtung',
            'projects.tooltip.contribution': 'Beitrag',
            'projects.error.data': 'Fehler beim Laden der Projektdaten.',
            'projects.error.publicData': 'Fehler beim Laden der öffentlichen Projektdaten.',

            'outcomes.title': 'KK26 | Outcome-Tabelle',
            'outcomes.h1': 'Outcome-Tabelle',
            'outcomes.printTitle': 'Outcome-Tabelle',
            'outcomes.intro': 'Vollständige Übersicht aller Projekte, sortiert nach Beliebtheit. Das MES-Verfahren identifiziert "einfache" Entscheidungen automatisch, um am Diskussionstag Zeit für komplexe Fragen zu schaffen.',
            'outcomes.help.summary': 'Lesehilfe: So verstehen Sie die Tabelle',
            'outcomes.help.points.title': 'Punkte (je höher, desto besser)',
            'outcomes.help.points.body': 'Die <strong>Punkte</strong> sind die Summe aller Stimmen (Ja = 2 Punkte, Eher Ja = 1 Punkt). Je mehr Punkte ein Projekt hat, desto beliebter war es in der Gruppe. Die Projekte sind nach dieser Beliebtheit sortiert.',
            'outcomes.help.efficiency.title': 'CHF/PUNKT (je tiefer, desto besser)',
            'outcomes.help.efficiency.body': 'Die <strong>Effizienz</strong> zeigt die Kosten pro Punkt. Ein tieferer Wert bedeutet, dass das Projekt günstiger ist – ein besseres Kosten-Punkte-Verhältnis für die Community.',
            'outcomes.help.coverage.title': 'Abdeckung (Finanzierbarkeit)',
            'outcomes.help.coverage.body': 'Die <strong>Abdeckung</strong> zeigt, wie viel Prozent der Projektkosten durch das verfügbare Budget der Unterstützenden zum Zeitpunkt der Prüfung gedeckt werden konnten. 100% = vollständig finanzierbar. Bei nicht finanzierten Projekten war diese Abdeckung zu gering.',
            'outcomes.help.flow.title': 'Budget-Abfluss (Visualisierung)',
            'outcomes.help.flow.body': 'Die rechte Spalte zeigt, wie das Gesamtbudget der Gruppe schrittweise aufgebraucht wurde. Der farbige Balken wächst mit jedem finanzierten Projekt, und die Zahl "Übrig" zeigt das verbleibende Budget an.',
            'outcomes.help.algorithm.title': 'So funktioniert der MES-Algorithmus',
            'outcomes.help.algorithm.body': 'Der <strong>Method of Equal Shares (MES)</strong> Algorithmus prüft Projekte in Runden. In jeder Runde berechnet er einen "Preis pro Punkt" (Rho). Das Projekt mit dem tiefsten Rho wird finanziert, wenn seine Unterstützenden gemeinsam genug Budget haben. Dann zahlt jede Person anteilig aus ihrem restlichen Budget. Dieser Prozess wiederholt sich, bis keine Projekte mehr finanzierbar sind.',
            'outcomes.help.more.title': 'Mehr erfahren',
            'outcomes.help.more.body': 'Ausführliche Informationen zum Method of Equal Shares Verfahren finden Sie auf <a href="https://equalshares.net/de/explanation/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline; font-weight: 700;">equalshares.net/de/explanation</a>.',
            'outcomes.table.rank': 'RANG',
            'outcomes.table.project': 'PROJEKT',
            'outcomes.table.budget': 'BUDGET',
            'outcomes.table.points': 'PUNKTE',
            'outcomes.table.pointsPerPerson': 'PNT/PERSON',
            'outcomes.table.chfPerPoint': 'CHF/PUNKT',
            'outcomes.table.mes': 'MES',
            'outcomes.table.coverage': 'ABDECKUNG',
            'outcomes.table.budgetFlow': 'BUDGET-ABFLUSS',
            'outcomes.table.available': 'Verfügbar:',
            'outcomes.vote.yesShort': 'J',
            'outcomes.vote.ratherYesShort': 'E',
            'outcomes.status.fundedTitle': 'Vom MES finanziert',
            'outcomes.error.data': 'Fehler beim Laden der Daten.',
            'outcomes.error.publicData': 'Fehler beim Laden der öffentlichen Daten.',

            'info.title': 'KK26 | Info',
            'info.h1': 'Info',
            'info.intro': 'Diese Seite dokumentiert die Abstimmung des Kultur Komitees Winterthur 2026 und macht nachvollziehbar, wie die Method of Equal Shares aus Stimmen, Projektkosten und verfügbaren Budgets ein Ergebnis berechnet.',
            'info.what.title': 'Was Sie sehen',
            'info.what.body': 'Die persönlichen Quittungen zeigen, welche Projekte durch eine Person mitfinanziert wurden. Die Projekt-Quittungen zeigen die Perspektive jedes Projekts: Unterstützung, Beiträge, Kosten und MES-Status. Die Outcome-Tabelle fasst alle Projekte pro Gruppe in einer kompakten Rangliste zusammen.',
            'info.method.title': 'Methode',
            'info.method.body1': 'Die Wähler:innen-Quittung ist eine gestalterische Innovation: Sie nutzt die Bepreisbarkeit der Method of Equal Shares, um sichtbar zu machen, wie einzelne Stimmen in Beiträge übersetzt werden und dadurch ein kollektives Ergebnis erklärbar wird.',
            'info.method.body2': 'Die Method of Equal Shares verteilt ein gemeinsames Budget so, dass jede teilnehmende Person rechnerisch den gleichen Anteil am Budget erhält. Projekte werden nur dann finanziert, wenn ihre Unterstützer:innen zum Prüfzeitpunkt gemeinsam genug verbleibendes Budget haben.',
            'info.method.li1': 'Ja-Stimmen erzeugen mehr Unterstützung als Eher-Ja-Stimmen.',
            'info.method.li2': 'Teurere Projekte benötigen entsprechend breitere Unterstützung.',
            'info.method.li3': 'Das Verfahren stoppt, wenn kein weiteres Projekt finanzierbar ist.',
            'info.method.linkMes': 'MES erklären',
            'info.method.linkMesHref': 'https://equalshares.net/de/explanation/',
            'info.method.linkOutcome': 'Outcome ansehen',
            'info.implementation.title': 'Kultur Komitee 2026',
            'info.implementation.body1': 'Im März 2026 haben 23 Teilnehmende in drei Gruppen über die Vergabe von insgesamt 161\'000 CHF an Kulturprojekte in Winterthur abgestimmt. Für die MES-Berechnung wurden die positiven Bewertungen berücksichtigt: Eher Ja zählte als ein Punkt, Ja als zwei Punkte.',
            'info.implementation.imageAlt': 'Kultur Komitee Teilnehmende arbeiten am Entscheidungstag 2026 mit den Wähler:innen-Quittungen.',
            'info.implementation.imageCaption': 'Kultur Komitee 2026: Die Wähler:innen-Quittungen wurden am Entscheidungstag als gemeinsame Grundlage für die Diskussion genutzt.',
            'info.implementation.body2': 'Am Entscheidungstag nutzte das Komitee die Wähler:innen-Quittungen als gemeinsame Lesehilfe. Die Quittungen machten sichtbar, welche Projekte durch das Verfahren bereits finanzierbar waren, welche Projekte knapp scheiterten und wo persönliche Budgets schon ausgeschöpft waren.',
            'info.implementation.body3': 'So ersetzte die Berechnung nicht die Diskussion, sondern strukturierte sie: Einfache Fälle konnten schneller verstanden werden, während die Gruppe ihre Zeit auf Projekte richten konnte, bei denen noch Klärung, Abwägung oder Verhandlung nötig war.',
            'info.implementation.insightTitle': 'Was die Rückmeldungen zeigen',
            'info.implementation.insight1': 'Im Vergleich zu 2025 nahmen 2026 deutlich mehr Teilnehmende ihren Einfluss in Einzelabstimmung und Gruppendiskussion als gleichwertig wahr: Der Anteil stieg von 34.4% auf 62.5%. Gleichzeitig sank der Anteil der Personen, die der Gruppendiskussion mehr Einfluss zuschrieben, von 40.6% auf 18.8%. Das deutet darauf hin, dass die Quittungen – neben anderen Änderungen – den eigenen Beitrag konkreter und nachvollziehbarer gemacht haben könnten.',
            'info.implementation.insight2': 'Gleichzeitig wurde Gruppendiskussion nicht weniger wichtig. Im Gegenteil: Der Anteil der Personen, die mehr als die Hälfte des Entscheidungsgewichts bei der Gruppe sehen möchten, stieg von 21.9% im Jahr 2025 auf 62.5% im Jahr 2026. Die Rückmeldungen zeigen also beides: ein stärkeres Gefühl von gleichem Einfluss und eine grössere Wertschätzung gemeinsamer Diskussion.',
            'info.background.title': 'Hintergrund',
            'info.background.body1': 'Die Method of Equal Shares (MES) wurde im Kontext von partizipativen Budgets entwickelt. Sie sorgt dafür, dass nicht einfach die Mehrheit gewinnt, sondern alle Beteiligten möglichst gleich viel Einfluss auf das Ergebnis haben. Zudem werden in der Entscheidung auch die Kosten berücksichtigt: Je höher ein angefragter Betrag, desto mehr Zustimmung benötigt ein Projekt.',
            'info.background.body2': 'JOSHUA C. YANG ist Postdoktorand an der ETH Zürich. Er forscht zu der Frage, wie digitale Werkzeuge und KI demokratische Prozesse unterstützen können. Gemeinsam mit Fynn Bachmann (UZH) hat er die Entscheidungsprozesse des Kultur Komitees von 2024 – 2026 begleitet.',
            'info.privacy.title': 'Datenschutz',
            'info.privacy.body': 'Die Namen der Komiteemitglieder wurden pseudonymisiert. Projektnamen wurden durch fiktive Bezeichnungen ersetzt. Die Darstellung soll Transparenz über das Verfahren schaffen, ohne personenbezogene Abstimmungsdaten offenzulegen.',
            'vote.ja': 'Ja',
            'vote.eherJa': 'Eher Ja',
            'vote.eherNein': 'Eher Nein',
            'vote.nein': 'Nein'
        },
        en: {
            'common.brand.backAria': 'Back to the Kultur Komitee website',
            'common.footer.heading': 'Contact',
            'common.footer.kk': 'Questions about Kultur Komitee: <a href="mailto:info@kulturkomitee.win">info@kulturkomitee.win</a>',
            'common.footer.method': 'Questions about the method: <a href="https://joshuacyang.com" target="_blank" rel="noopener noreferrer">Joshua C. Yang</a>',
            'common.footer.copyright': '© 2026 Kultur Komitee Winterthur',
            'common.language.switchText': 'DE-CH',
            'common.language.switchAria': 'Switch language to German (Switzerland)',
            'common.loading': 'Loading data...',
            'common.nav.info': 'Info',
            'common.nav.outcomes': 'Table',
            'common.nav.personal': 'Personal',
            'common.nav.projects': 'Projects',

            'filters.all': 'ALL',
            'filters.allGroups': 'ALL GROUPS',
            'filters.allGroupsCount': 'All groups ({count})',
            'filters.allResults': 'ALL RESULTS',
            'filters.funded': 'FUNDED',
            'filters.unfunded': 'NOT SELECTED',

            'receipts.title': 'KK26 Voter Receipts',
            'receipts.h1': 'VOTER RECEIPTS',
            'receipts.help.summary': 'Reading guide: Understanding the personal receipts',
            'receipts.help.budget.title': 'Budget',
            'receipts.help.budget.body': 'Each person started with the same <strong>budget</strong> (for example CHF 7,000). This money is only spent on projects that the person supported with <strong>Yes</strong> or <strong>Rather yes</strong>.',
            'receipts.help.amount.title': 'Amount (your contribution per project)',
            'receipts.help.amount.body': 'The <strong>amount</strong> shows how much this voter paid for each funded project. It does <strong>not</strong> show how much they liked the project. The amount depends on the calculation: a person pays <strong>less</strong> when many others support the project, and <strong>more</strong> when they are one of the few supporters who still have budget left.',
            'receipts.help.vote.title': 'Vote (your rating)',
            'receipts.help.vote.body': 'The <strong>vote</strong> shows the original rating: <strong>Yes</strong> = 2 points, <strong>Rather yes</strong> = 1 point. This is what the person actually voted, not the contribution amount.',
            'receipts.help.funded.title': 'Projects funded',
            'receipts.help.funded.body': 'The number of supported projects that were funded. Not every supported project is funded; it depends on whether enough shared budget was still available.',
            'receipts.help.spent.title': 'Spent',
            'receipts.help.spent.body': 'The sum of all amounts this person contributed to funded projects.',
            'receipts.help.unfunded.title': 'Projects not funded',
            'receipts.help.unfunded.body': 'Projects that this person supported but that were not funded. Either the supporters did not have enough remaining budget together, or the group budget had already been used up.',
            'receipts.help.more.title': 'Learn more',
            'receipts.help.more.body': 'Detailed information about the Method of Equal Shares is available at <a href="https://equalshares.net/explanation/" target="_blank" rel="noopener noreferrer">equalshares.net/explanation</a>.',
            'receipts.intro.philosophy': 'The Method of Equal Shares helps identify “easy” decisions early and ensures that all participants have as equal an influence as possible on the decision process. This leaves more time on decision day to discuss the critical projects together.',
            'receipts.intro.stats': 'Here you can see the personal voting receipts from the Kultur Komitee 2026 vote. In total, <strong>{totalVoters} people</strong> took part. On average, each person helped fund <strong>{avgFunded} projects</strong> with a contribution of <strong>CHF {avgSpent}</strong>. The remaining projects were discussed in person on decision day.',
            'receipts.intro.privacy': 'To protect personal rights, committee member names were pseudonymized and project names were replaced with fictional public labels.',
            'receipts.fundedNote': 'So far, {count} projects have been funded with a total budget of CHF {budget}.',
            'receipts.fundedNoteDefault': 'The funded projects were calculated with the Method of Equal Shares.',
            'receipts.group': 'Group {group}',
            'receipts.section.funded': 'Funded projects',
            'receipts.section.unfunded': 'Projects not funded',
            'receipts.table.article': 'Item',
            'receipts.table.vote': 'Vote',
            'receipts.table.amount': 'Amount',
            'receipts.total.projectCount': 'Number of projects',
            'receipts.total.chf': 'Total CHF',
            'receipts.footer.foundation': 'Foundation for Art, Culture and History',
            'receipts.footer.thanks': 'Thank you for participating!',
            'receipts.error.data': 'Error loading the data. Please make sure <code>assets/data/kk26.json</code> was loaded correctly.',
            'receipts.error.publicData': 'Error loading the public data.',

            'projects.title': 'KK26 Project Receipts',
            'projects.h1': 'Project Receipts',
            'projects.help.summary': 'Reading guide: Understanding the project receipts',
            'projects.help.rank.title': 'Rank (position in the calculation)',
            'projects.help.rank.body': 'The <strong>rank</strong> shows the order in which the MES algorithm considered the projects. A lower rank means the project was considered earlier. Funded projects always appear before projects that were not funded.',
            'projects.help.points.title': 'Points',
            'projects.help.points.body': 'The <strong>points</strong> are the sum of all votes (Yes = 2 points, Rather yes = 1 point). The higher the score, the more popular the project was in its group.',
            'projects.help.perPerson.title': 'Per person (average cost)',
            'projects.help.perPerson.body': 'This number shows how much the project would cost per supporter if the <strong>costs</strong> were split evenly. The lower the value, the more broadly the burden is shared.',
            'projects.help.cost.title': 'Cost (total project budget)',
            'projects.help.cost.body': 'The <strong>cost</strong> is the total amount requested in CHF. For funded projects, this amount was approved and jointly financed by the supporters.',
            'projects.help.supporters.title': 'Supporters & contributions',
            'projects.help.supporters.body': 'The table lists everyone who voted <strong>Yes</strong> or <strong>Rather yes</strong>. For funded projects, it shows each person’s individual <strong>contribution</strong>, calculated in proportion to their vote and remaining budget.',
            'projects.help.shortfall.title': 'Shortfall (for projects not funded)',
            'projects.help.shortfall.body': 'When a project was <strong>NOT FUNDED</strong>, the <strong>shortfall</strong> shows how much additional budget the supporters would have needed. This explains why the project was rejected by the procedure.',
            'projects.help.more.title': 'Learn more',
            'projects.help.more.body': 'Detailed information about the Method of Equal Shares is available at <a href="https://equalshares.net/explanation/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline; font-weight: 700;">equalshares.net/explanation</a>.',
            'projects.intro.philosophy': 'The MES procedure helps identify “easy” decisions early. This leaves more time on decision day to discuss the more complex projects together.',
            'projects.intro.stats': 'Here you can see all submitted projects. The average funded project cost is <strong>CHF {avgCost}</strong>. So far, <strong>{totalFunded} projects</strong> have been funded with a total budget of <strong>CHF {totalSpent}</strong>.',
            'projects.stats.fundedPerGroup': 'Funded projects per group',
            'projects.stats.spentPerGroup': 'Budget spent so far per group',
            'projects.card.status.funded': 'FUNDED',
            'projects.card.status.unfunded': 'NOT FUNDED',
            'projects.card.supporters': 'Supporters ({count})',
            'projects.card.vote': 'Vote',
            'projects.card.contribution': 'Contribution',
            'projects.card.sum': 'Total',
            'projects.card.points': 'Points',
            'projects.card.cost': 'Cost',
            'projects.card.coverage': 'Budget coverage',
            'projects.card.pointsPerPerson': 'Points per person',
            'projects.card.pointsShort': 'Pts',
            'projects.card.chfPerPoint': 'CHF per point',
            'projects.tooltip.vote': 'Vote',
            'projects.tooltip.budget': 'Budget when considered',
            'projects.tooltip.contribution': 'Contribution',
            'projects.error.data': 'Error loading the project data.',
            'projects.error.publicData': 'Error loading the public project data.',

            'outcomes.title': 'KK26 | Outcome Table',
            'outcomes.h1': 'Outcome Table',
            'outcomes.printTitle': 'Outcome Table',
            'outcomes.intro': 'Complete overview of all projects, sorted by popularity. The MES procedure automatically identifies “easy” decisions so that more time remains on decision day for complex questions.',
            'outcomes.help.summary': 'Reading guide: Understanding the table',
            'outcomes.help.points.title': 'Points (higher is better)',
            'outcomes.help.points.body': 'The <strong>points</strong> are the sum of all votes (Yes = 2 points, Rather yes = 1 point). The more points a project has, the more popular it was in the group. Projects are sorted by this popularity.',
            'outcomes.help.efficiency.title': 'CHF/POINT (lower is better)',
            'outcomes.help.efficiency.body': '<strong>Efficiency</strong> shows the cost per point. A lower value means the project is cheaper, giving the community a better cost-to-points ratio.',
            'outcomes.help.coverage.title': 'Coverage (fundability)',
            'outcomes.help.coverage.body': '<strong>Coverage</strong> shows what percentage of the project cost could be covered by the supporters’ available budget at the moment the project was considered. 100% means fully fundable. For projects that were not funded, coverage was too low.',
            'outcomes.help.flow.title': 'Budget flow (visualization)',
            'outcomes.help.flow.body': 'The right column shows how the group budget was gradually used up. The colored bar grows with each funded project, and the number “available” shows the remaining budget.',
            'outcomes.help.algorithm.title': 'How the MES algorithm works',
            'outcomes.help.algorithm.body': 'The <strong>Method of Equal Shares (MES)</strong> algorithm considers projects in rounds. In each round, it calculates a “price per point” (rho). The project with the lowest rho is funded if its supporters together still have enough budget. Each person then pays proportionally from their remaining budget. This process repeats until no further project can be funded.',
            'outcomes.help.more.title': 'Learn more',
            'outcomes.help.more.body': 'Detailed information about the Method of Equal Shares is available at <a href="https://equalshares.net/explanation/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); text-decoration: underline; font-weight: 700;">equalshares.net/explanation</a>.',
            'outcomes.table.rank': 'RANK',
            'outcomes.table.project': 'PROJECT',
            'outcomes.table.budget': 'BUDGET',
            'outcomes.table.points': 'POINTS',
            'outcomes.table.pointsPerPerson': 'PTS/PERSON',
            'outcomes.table.chfPerPoint': 'CHF/POINT',
            'outcomes.table.mes': 'MES',
            'outcomes.table.coverage': 'COVERAGE',
            'outcomes.table.budgetFlow': 'BUDGET FLOW',
            'outcomes.table.available': 'Available:',
            'outcomes.vote.yesShort': 'Y',
            'outcomes.vote.ratherYesShort': 'RY',
            'outcomes.status.fundedTitle': 'Funded by MES',
            'outcomes.error.data': 'Error loading the data.',
            'outcomes.error.publicData': 'Error loading the public data.',

            'info.title': 'KK26 | Info',
            'info.h1': 'Info',
            'info.intro': 'This page documents the Kultur Komitee Winterthur 2026 vote and shows how the Method of Equal Shares turns votes, project costs, and available budgets into an outcome.',
            'info.what.title': 'What You See',
            'info.what.body': 'The personal receipts show which projects each person helped fund. The project receipts show each project’s perspective: support, contributions, costs, and MES status. The outcome table summarizes all projects per group in a compact ranking.',
            'info.method.title': 'Method',
            'info.method.body1': 'The voter receipt is a design innovation: it uses the priceability of the Method of Equal Shares to show how individual votes are translated into contributions, making the collective outcome explainable.',
            'info.method.body2': 'The Method of Equal Shares distributes a shared budget so that each participant receives the same notional budget share. Projects are funded only when their supporters still have enough remaining budget together at the time the project is considered.',
            'info.method.li1': 'Yes votes generate more support than Rather yes votes.',
            'info.method.li2': 'More expensive projects need broader support.',
            'info.method.li3': 'The procedure stops when no further project can be funded.',
            'info.method.linkMes': 'Explain MES',
            'info.method.linkMesHref': 'https://equalshares.net/explanation/',
            'info.method.linkOutcome': 'View outcome',
            'info.implementation.title': 'Kultur Komitee 2026 Implementation',
            'info.implementation.body1': 'In March 2026, 23 participants in three groups voted on the allocation of a total of CHF 161,000 to cultural projects in Winterthur. For the MES calculation, positive ratings were counted as points: Rather yes counted as one point, Yes as two points.',
            'info.implementation.imageAlt': 'Kultur Komitee participants working with the voter receipts on decision day 2026.',
            'info.implementation.imageCaption': 'Kultur Komitee 2026: the voter receipts were used on decision day as a shared basis for discussion.',
            'info.implementation.body2': 'On decision day, the committee used the voter receipts as a shared reading aid. The receipts showed which projects were already fundable through the procedure, which projects narrowly missed out, and where personal budgets had already been used up.',
            'info.implementation.body3': 'The calculation therefore did not replace discussion, but structured it: straightforward cases could be understood more quickly, while the group could spend its time on projects that still needed clarification, judgment, or negotiation.',
            'info.implementation.insightTitle': 'What the feedback suggests',
            'info.implementation.insight1': 'Compared with 2025, many more participants in 2026 felt that individual voting and group deliberation had equal influence: the share rose from 34.4% to 62.5%. At the same time, the share saying that group discussion had more influence fell from 40.6% to 18.8%. This suggests that the receipts, alongside other changes, may have made each person’s individual contribution feel more concrete and easier to understand.',
            'info.implementation.insight2': 'At the same time, group discussion did not become less important. On the contrary: the share of people who preferred more than half of the decision weight to sit with the group rose from 21.9% in 2025 to 62.5% in 2026. The feedback therefore shows both things: a stronger sense of equal influence and a greater appreciation for shared discussion.',
            'info.background.title': 'Background',
            'info.background.body1': 'The Method of Equal Shares (MES) was developed in the context of participatory budgeting. It ensures that the majority does not simply take everything, but that all participants have as equal an influence as possible on the outcome. Costs are also part of the decision: the higher the requested amount, the more support a project needs.',
            'info.background.body2': 'JOSHUA C. YANG is a postdoctoral researcher at ETH Zurich. His research asks how digital tools and AI can support democratic processes. Together with Fynn Bachmann (UZH), he accompanied the Kultur Komitee decision processes from 2024 to 2026.',
            'info.privacy.title': 'Privacy',
            'info.privacy.body': 'Committee member names were pseudonymized. Project names were replaced with fictional labels. The display is intended to make the procedure transparent without revealing personal voting data.',
            'vote.ja': 'Yes',
            'vote.eherJa': 'Rather yes',
            'vote.eherNein': 'Rather no',
            'vote.nein': 'No'
        }
    };

    function normalizeLanguage(lang) {
        return LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
    }

    function getLanguage() {
        return normalizeLanguage(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE);
    }

    function interpolate(text, values) {
        if (!values) return text;
        return text.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) => (
            values[key] === undefined ? `{${key}}` : String(values[key])
        ));
    }

    function t(key, values) {
        const lang = getLanguage();
        const text = TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS[DEFAULT_LANGUAGE]?.[key] ?? key;
        return interpolate(text, values);
    }

    function formatNumber(value, options = {}) {
        const locale = getLanguage() === 'en' ? 'en-CH' : 'de-CH';
        return Number(value || 0)
            .toLocaleString(locale, options)
            .replace(/’/g, "'");
    }

    function applyTranslations(root = document) {
        const lang = getLanguage();
        document.documentElement.lang = lang === 'en' ? 'en' : 'de-CH';

        if (document.body?.dataset.i18nTitle) {
            document.title = t(document.body.dataset.i18nTitle);
        }

        root.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });

        root.querySelectorAll('[data-i18n-html]').forEach(el => {
            el.innerHTML = t(el.dataset.i18nHtml);
        });

        root.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(',').forEach(pair => {
                const [attr, key] = pair.split(':').map(part => part.trim());
                if (attr && key) el.setAttribute(attr, t(key));
            });
        });

        root.querySelectorAll('[data-language-switch]').forEach(button => {
            button.textContent = t('common.language.switchText');
            button.setAttribute('aria-label', t('common.language.switchAria'));
            button.setAttribute('title', t('common.language.switchAria'));
        });
    }

    function setLanguage(lang, options = {}) {
        const nextLang = normalizeLanguage(lang);
        localStorage.setItem(STORAGE_KEY, nextLang);
        if (options.reload === false) {
            applyTranslations();
        } else {
            window.location.reload();
        }
    }

    document.addEventListener('click', event => {
        const button = event.target.closest('[data-language-switch]');
        if (!button) return;
        const nextLang = getLanguage() === 'en' ? 'de' : 'en';
        setLanguage(nextLang);
    });

    document.addEventListener('DOMContentLoaded', () => applyTranslations());

    window.KK26_I18N = {
        applyTranslations,
        formatNumber,
        getLanguage,
        setLanguage,
        t
    };
}());
