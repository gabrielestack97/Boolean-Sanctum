# Project Requirement Document (PRD) & Comprehensive Project Brief
## Progetto: Sanctum — Il tuo diario di salute e benessere

---

### 1. Executive Summary & Visione di Prodotto
**Sanctum** è un'applicazione mobile innovativa creata per semplificare e unificare il monitoraggio quotidiano di salute, nutrizione, idratazione e aderenza terapeutica. 
Fondata sui principi del **Calm Design** e dell'estetica **Comfy / Kawaii organico**, Sanctum elimina l'asetticità e l'ansia tipica delle interfacce mediche convenzionali, trasformando la registrazione dei dati sanitari in un rituale accogliente, caloroso e rassicurante.

- **Prodotto:** Sanctum
- **Tagline:** *Il tuo diario di salute e benessere*
- **Form Factor:** Mobile nativo (390×844 px, single-screen experience senza bottom navigation)
- **Lingua primaria:** Italiano
- **Target Release:** iOS & Android (PWA / Native)

---

### 2. Obiettivi Chiave & Value Proposition
1. **Zero-Cognitive Overload:** L'intera routine quotidiana (farmaci, pasti, acqua, pianificazione) è accessibile in un'unica schermata fluida, senza sottomenu dispersivi.
2. **Logging ultra-rapido (< 5s):** Barre di input intelligenti con supporto linguaggio naturale per cibi, liquidi e farmaci.
3. **Aderenza Terapeutica senza stress:** Promemoria chiari, visibili e con azione di conferma a tocco singolo ("Conferma assunzione"), prevenendo il drop-out terapeutico.
4. **Armonia Olistica:** Monitoraggio simultaneo di calorie consumate vs target, equilibrio idrico e piano pasti.
5. **Micro-Educazione Clinica:** Sezione contestuale *"Sapevi che..."* con perle informative validate dalla redazione medica.

---

### 3. User Personas & Casi d'Uso

#### Persona A — "Il Paziente Terapeutico" (es. Marco, 54 anni)
- **Profilo:** Assume farmaci salvavita e integratori su prescrizione a orari fissi (mattina/sera).
- **Pain Point:** Le tradizionali app medicali sembrano cartelle cliniche ospedaliere, fredde e ansiogene.
- **Soluzione Sanctum:** Un'interfaccia protettiva e calda ("panaro per funghi / comfy shelter"), feedback chiaro sulle pillole residue giornaliere (es. *2/3 assunte*) e conferma istantanea a orario prefissato.

#### Persona B — "La Ricerca dell'Equilibrio" (es. Elena, 28 anni)
- **Profilo:** Segue una dieta bilanciata, pratica sport, monitora l'idratazione (obiettivo 2,5L) e assume integratori stagionali (magnesio, vitamina D).
- **Pain Point:** Dover saltare tra 3 app diverse (contacalorie, water tracker, app promemoria).
- **Soluzione Sanctum:** Calcolo immediato delle calorie da testo descrittivo (*"100g riso integrale, 1 mela"*), quick-add liquidi (*+250ml*) e pillole in un solo colpo d'occhio.

---

### 4. Architettura Funzionale (Single-Screen Architecture)

| Modulo | Componenti Funzionali | Logica di Business & Interazione |
| :--- | :--- | :--- |
| **01. Brand Header** | Pill badge "Spazio Quotidiano", Wordmark SANCTUM, Payoff | Identità accogliente, orientamento immediato all'apertura dell'app. |
| **02. Terapia & Integratori** | Icona Pillola Crema, Badge orario (*Ore 20:00*), Campo input, Stepper assunzioni (*2/3 assunte*) | Autocompletamento farmaci/dosaggi; contatore visivo a pallini di stato (completate vs da assumere). |
| **03. Nutrizione & Calorie** | Icona Mela Rossa, Badge calorie residue (*-580 kcal*), Input NLP pasti, Progress bar (*1.420 / 2.000 kcal - 71%*) | Parser semantico alimenti; calcolo istantaneo del fabbisogno calorico residuo con riempimento progressivo. |
| **04. Equilibrio Idrico** | Icona Bottiglia Termica Minimalista, Quick-add chip (*+250ml*), Input testo liquidi, Progress bar idrica (*1.750 ml su 2.500 ml - 70%*) | Monitoraggio volumetrico; scorciatoie rapide per bicchieri/borracce d'acqua e bevande salutari. |
| **05. Quick Action** | Pulsante allineato a destra in Verde Salvia / Foresta (*"Pianifica Piano & Dieta"*) | Modale o cassetto a comparsa per programmare le assunzioni del giorno successivo o modificare la dieta. |
| **06. Promemoria & Timeline** | Card piano orario, slot prossimo farmaco (*Ore 20:30*), CTA *"Conferma assunzione"*, Slot cena consigliata | Sincronizzazione automatica tra orologio di sistema e piano terapeutico; validazione a un tap. |
| **07. Wellness Insight** | Card *"Sapevi che..."*, Suggerimento nutrizionale/medico, Tasto refresh *"Altro consiglio"*, Badge validazione redazione | Carosello algoritmico di pillole scientifiche contestuali all'ora e ai dati immessi. |

---

### 5. Design System & Direzione Visiva (High-Fidelity)

#### Palette Cromatica "Earthy Forage & Comfy Sanctuary"
- **Background Primario:** `#5a4130` / `#6d5341` (Marrone corteccia caldo, texture organica ispirata all'interno di un cesto in vimini/panaro per funghi).
- **Surface & Cards:** Crema vellutato (`#fff8f1` / `#fbf2e7`), bordi morbidi tono su tono (`#e1d9ce`).
- **Accenti Funzionali:**
  - *Terapia / Neutro caldo:* Crema e panna morbida (`#f4efe6`).
  - *Nutrizione:* Rosso mela pastello delicato (`#fca5a5` / `#f87171`).
  - *Idratazione:* Azzurro limpido sereno (`#8ec5d6` / `#38bdf8`).
  - *Pianificazione & Successo:* Verde salvia organico (`#4a7c59` / `#86efac`).

#### Tipografia
- **Display & Headings:** `Michroma` (geometrico, arrotondato, distintivo e tech-comfy per il titolo SANCTUM, contatori e intestazioni).
- **Body & Controls:** `Plus Jakarta Sans` / System Sans con pesi 400/500/600 per garantire massima leggibilità nei testi descrittivi e nei campi di inserimento.

#### Forma, Icone & Asset
- **Corner Radius:** `Rounded-3xl` per le card principali, `Rounded-full` (capsule style) per bottoni d'azione, chip e badge.
- **Icon Set:** Material Symbols Rounded con tratti morbidi ed elevazioni soffici anti-affaticamento.
- **Illustrazioni Personalizzate:**
  1. *Pillola bicolore panna e crema* con linea tratteggiata.
  2. *Mela rossa pastello* con fogliolina verde tenero.
  3. *Bottiglia scura moderna matte* con finestra di livello azzurro.

---

### 6. Indicatori Chiave di Prestazione (KPIs)
- **Tasso di Aderenza Farmacologica:** > 92% delle conferme registrate entro 15 minuti dal promemoria.
- **Tempo Medio di Inserimento (TTR):** < 4 secondi per la registrazione di acqua o pasti.
- **Indice di Riduzione dello Stress UX (Calm Index):** Valutazione CSAT > 4.8/5 sull'esperienza visiva e la chiarezza dell'informazione.
- **Ritenzione Utente a 30 Giorni (D30):** > 50% grazie all'atmosfera distensiva priva di notifiche aggressive.

---

### 7. Roadmap & Sviluppi Futuri
1. **Fase 1 (Attuale):** Schermata unica standalone ottimizzata con focus sul comfort visivo e zero-friction logging.
2. **Fase 2:** Integrazione sincronizzazione con Apple Health / Google Health Connect.
3. **Fase 3:** Sistema di esportazione report PDF mensile protetto per il medico curante o nutrizionista.