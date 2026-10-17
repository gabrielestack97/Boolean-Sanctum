/* ==========================================================================
   /* === 1. STATO DELL'APPLICAZIONE (DATI E VARIABILI) ===
   ========================================================================== */

// Livello di idratazione (in millilitri)
let waterCurrent = 1750;
const waterTarget = 2500;

// Stato delle pillole assunte (inizialmente 2 su 3)
let pillsTaken = 2;
const pillsTotal = 3;

// Stato rispetto della dieta (Funzionalità 1)
let isDietRespected = false;

// Stadio di crescita della pianta nel giardino (da 0 a 4)
// 0 = Semino, 1 = Germoglio, 2 = Piantina, 3 = Fiorita, 4 = Albero maestoso
let currentPlantStage = 0;

// Array didattico con i testi descrittivi per ciascuno stadio di crescita
const plantStagesData = [
  {
    dayLabel: "Giorno 1 di 5",
    title: "Stadio 1: Semino nel vaso",
    description: "Hai piantato il semino delle buone abitudini. Innaffialo ogni giorno con costanza!",
    svgId: "svgStageSeed"
  },
  {
    dayLabel: "Giorno 2 di 5",
    title: "Stadio 2: Primo Germoglio",
    description: "Complimenti! Spunta il primo tenero germoglio verde dalla terra.",
    svgId: "svgStageSprout"
  },
  {
    dayLabel: "Giorno 3 di 5",
    title: "Stadio 3: Piantina in Crescita",
    description: "La piantina cresce con un fusto sano e foglie vigorose grazie alla tua cura.",
    svgId: "svgStagePlant"
  },
  {
    dayLabel: "Giorno 4 di 5",
    title: "Stadio 4: Pianta Fiorita",
    description: "Che meraviglia! La pianta è ricca di foglie e boccioli. Manca poco al traguardo!",
    svgId: "svgStageBush"
  },
  {
    dayLabel: "Obiettivo Raggiunto! 🎉",
    title: "Stadio 5: Albero Maestoso",
    description: "Straordinario! Il semino è diventato un grande albero rigoglioso. Obiettivi completati!",
    svgId: "svgStageTree"
  }
];

// Archivio di perle scientifiche per il blocco "Sapevi che..."
const healthFacts = [
  "Bere un bicchiere d'acqua 15 minuti prima dei pasti favorisce una corretta assimilazione dei nutrienti e aiuta a calcolare meglio il senso di sazietà naturale.",
  "Un riposo regolare di almeno 7-8 ore a notte riduce l'infiammazione sistemica e stabilizza i picchi di glicemia mattutini.",
  "Assumere il magnesio la sera favorisce il rilassamento della muscolatura striata e predispone ad una fase REM più profonda.",
  "Camminare per soli 10 minuti dopo pranzo e cena aiuta a velocizzare lo svuotamento gastrico e a regolarizzare i valori pressori."
];
let currentFactIndex = 0;


/* ==========================================================================
   /* === 2. GESTIONE GIARDINO: SEMINO, CRESCITA E RESET ===
   ========================================================================== */

// Funzione che aggiorna l'interfaccia visiva della pianta
function updatePlantUI() {
  const stageInfo = plantStagesData[currentPlantStage];

  // Aggiorna badge e testi informativi
  document.getElementById('plantBadge').innerText = stageInfo.dayLabel;
  document.getElementById('plantStageTitle').innerText = stageInfo.title;
  document.getElementById('plantStageDesc').innerText = stageInfo.description;

  // Mostra solo l'illustrazione SVG corrispondente allo stadio attuale
  const svgIds = ['svgStageSeed', 'svgStageSprout', 'svgStagePlant', 'svgStageBush', 'svgStageTree'];
  svgIds.forEach(function(id) {
    const svgElement = document.getElementById(id);
    if (svgElement) {
      svgElement.style.display = (id === stageInfo.svgId) ? 'block' : 'none';
    }
  });

  // Aggiorna lo stepper a 5 pallini
  const stepper = document.getElementById('plantStepper');
  const stepItems = stepper.querySelectorAll('.step-item');

  stepItems.forEach(function(item, index) {
    const dot = item.querySelector('.step-dot');
    const line = item.querySelector('.step-line');

    if (dot) {
      if (index <= currentPlantStage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }

    if (line) {
      if (index < currentPlantStage) {
        line.classList.add('active');
      } else {
        line.classList.remove('active');
      }
    }
  });

  // Se l'albero è al massimo, aggiorna il testo del pulsante
  const growBtnText = document.getElementById('growBtnText');
  if (currentPlantStage === plantStagesData.length - 1) {
    growBtnText.innerText = "Albero Completato! 🌟";
  } else {
    growBtnText.innerText = "Innaffia e Cresci (+1 Giorno)";
  }
}

// Funzione che fa crescere la pianta al giorno successivo (Funzionalità 2)
function growPlant() {
  if (currentPlantStage < plantStagesData.length - 1) {
    currentPlantStage = currentPlantStage + 1;
    updatePlantUI();
  } else {
    alert("🎉 Complimenti! Il tuo semino è già diventato un maestoso albero del benessere!");
  }
}

// Funzione che riparte da zero con il semino nel vaso (Funzionalità 3)
function resetPlant() {
  currentPlantStage = 0;
  updatePlantUI();
}


/* ==========================================================================
   /* === 3. GESTIONE DIETA: POLLICE IN SU E OBIETTIVO NUTRIZIONE ===
   ========================================================================== */

// Funzione che gestisce il rispetto della dieta e il pollice in su (Funzionalità 1)
function toggleDietCompliance() {
  isDietRespected = !isDietRespected;

  const dietBtn = document.getElementById('dietCheckBtn');
  const dietBtnText = document.getElementById('dietBtnText');
  const dietLabel = document.getElementById('dietStatusLabel');
  const celebrationBanner = document.getElementById('thumbCelebration');

  if (isDietRespected) {
    // Attiva lo stato "Rispettata" e mostra il banner con pollice in su
    dietBtn.classList.add('active');
    dietBtnText.innerText = "Dieta Rispettata 👍";
    dietLabel.innerText = "Dieta rispettata con successo!";
    celebrationBanner.classList.add('show');

    // Se il semino è ancora ai primi stadi, un'azione virtuosa lo aiuta a crescere
    if (currentPlantStage === 0) {
      growPlant();
    }
  } else {
    // Disattiva lo stato
    dietBtn.classList.remove('active');
    dietBtnText.innerText = "Rispetta Dieta";
    dietLabel.innerText = "Obiettivo dieta in corso";
    celebrationBanner.classList.remove('show');
  }
}

// Registrazione di un cibo inserito manualmente
function registerFoodItem() {
  const foodInput = document.getElementById('foodInput');
  const foodName = foodInput.value.trim();

  if (foodName !== '') {
    foodInput.value = '';
    // Mostra comunque il pollice in su se l'utente registra un pasto sano
    if (!isDietRespected) {
      toggleDietCompliance();
    }
  }
}


/* ==========================================================================
   /* === 4. GESTIONE IDRATAZIONE (ACQUA E LIQUIDI) ===
   ========================================================================== */

// Aggiorna l'interfaccia dell'idratazione (testo ml, percentuale e barra)
function updateWaterDisplay() {
  const percent = Math.min(100, Math.round((waterCurrent / waterTarget) * 100));
  document.getElementById('waterAmountText').innerText = waterCurrent.toLocaleString('it-IT') + ' ml';
  document.getElementById('waterPercentText').innerText = percent + '%';
  document.getElementById('waterProgressBar').style.width = percent + '%';
}

// Aggiunge una quantità di acqua in millilitri
function addWaterAmount(milliliters) {
  waterCurrent = waterCurrent + milliliters;
  updateWaterDisplay();
}

// Registra l'acqua inserita dal campo di testo
function registerWaterFromInput() {
  const waterInput = document.getElementById('waterInput');
  if (waterInput.value.trim() !== '') {
    addWaterAmount(250);
    waterInput.value = '';
  }
}


/* ==========================================================================
   /* === 5. GESTIONE PILLOLE E PROMEMORIA ===
   ========================================================================== */

// Registra una nuova pillola dal campo di inserimento rapido
function registerPillItem() {
  const pillInput = document.getElementById('pillInput');
  if (pillInput.value.trim() !== '') {
    pillsTaken = pillsTotal;
    document.getElementById('pillProgressText').innerText = 'Oggi: 3/3 assunte (Completato!)';
    const thirdDot = document.getElementById('pillDotThree');
    if (thirdDot) {
      thirdDot.classList.add('filled');
    }
    pillInput.value = '';
  }
}

// Conferma l'assunzione del farmaco nel promemoria serale
function confirmMedicationDose() {
  const confirmBtn = document.getElementById('confirmDoseBtn');
  const confirmIcon = document.getElementById('confirmDoseIcon');
  const confirmText = document.getElementById('confirmDoseText');
  const reminderRow = document.getElementById('pillReminderRow');

  confirmBtn.classList.add('confirmed');
  confirmIcon.innerText = 'done_all';
  confirmText.innerText = 'Assunta!';
  reminderRow.classList.add('completed');
}


/* ==========================================================================
   /* === 6. ROTAZIONE DEI CONSIGLI E SCROLL PIANIFICAZIONE ===
   ========================================================================== */

// Ruota i consigli di salute con un effetto di transizione
function rotateNextFact() {
  currentFactIndex = (currentFactIndex + 1) % healthFacts.length;
  const factParagraph = document.getElementById('factParagraph');

  factParagraph.style.opacity = '0';
  setTimeout(function() {
    factParagraph.innerText = healthFacts[currentFactIndex];
    factParagraph.style.opacity = '1';
  }, 180);
}

// Porta il cursore sulla pianificazione
function scrollToPlanningInput() {
  const input = document.getElementById('pillInput');
  input.focus();
  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


/* ==========================================================================
   /* === 7. COLLEGAMENTO EVENTI (addEventListener) ===
   ========================================================================== */

// Eventi Giardino: Crescita e Reset
document.getElementById('growPlantBtn').addEventListener('click', growPlant);
document.getElementById('resetPlantBtn').addEventListener('click', resetPlant);

// Eventi Dieta e Cibo (Pollice in su)
document.getElementById('dietCheckBtn').addEventListener('click', toggleDietCompliance);
document.getElementById('addFoodBtn').addEventListener('click', registerFoodItem);
document.getElementById('foodInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    registerFoodItem();
  }
});

// Eventi Idratazione
document.getElementById('quickWaterBtn').addEventListener('click', function() {
  addWaterAmount(250);
});
document.getElementById('addWaterBtn').addEventListener('click', registerWaterFromInput);
document.getElementById('waterInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    registerWaterFromInput();
  }
});

// Eventi Pillole e Promemoria
document.getElementById('addPillBtn').addEventListener('click', registerPillItem);
document.getElementById('pillInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    registerPillItem();
  }
});
document.getElementById('confirmDoseBtn').addEventListener('click', confirmMedicationDose);

// Evento Rotazione Consigli
document.getElementById('rotateFactBtn').addEventListener('click', rotateNextFact);

// Evento Pulsante Pianifica
document.getElementById('plannerBtn').addEventListener('click', scrollToPlanningInput);

// Inizializzazione iniziale dell'interfaccia
updatePlantUI();
updateWaterDisplay();
