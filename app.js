// --- Mock AI Database ---
const diagnoses = [
    {
        id: "healthy",
        title: "Healthy Plant",
        status: "Healthy",
        color: "green",
        overview: "Your plant looks vibrant and healthy! Keep up the good work.",
        fixSteps: ["Continue your current care routine.", "Wipe leaves to keep them dust-free."],
        weeklyCare: ["Water when topsoil is dry.", "Ensure indirect bright light."],
        prevention: ["Inspect regularly for pests.", "Rotate pot for even growth."]
    },
    {
        id: "overwatering",
        title: "Overwatering",
        status: "Critical",
        color: "red",
        overview: "The roots are suffocating due to excess water. Leaves may look yellow or wilted.",
        fixSteps: ["Stop watering immediately.", "Check drainage holes.", "Repot if soil smells rotten."],
        weeklyCare: ["Water only when soil is dry to touch.", "Use well-draining soil."],
        prevention: ["Use pots with drainage holes.", "Avoid watering on a schedule; check soil first."]
    },
    {
        id: "underwatering",
        title: "Underwatering",
        status: "Warning",
        color: "orange",
        overview: "The plant is dehydrated. Leaves are crispy, dry, or drooping.",
        fixSteps: ["Water thoroughly until it drains out.", "Mist the leaves if humidity is low."],
        weeklyCare: ["Check soil moisture daily.", "Water more frequently in summer."],
        prevention: ["Self-watering pots.", "Mulch soil to retain moisture."]
    },
    {
        id: "nitrogen_def",
        title: "Nitrogen Deficiency",
        status: "Deficiency",
        color: "orange",
        overview: "Old leaves are turning pale yellow while veins remain green.",
        fixSteps: ["Apply a high-nitrogen fertilizer.", "Add coffee grounds to soil."],
        weeklyCare: ["Fertilize every 2 weeks during growth season."],
        prevention: ["Refresh soil annually.", "Use balanced compost."]
    },
    {
        id: "potassium_def",
        title: "Potassium Deficiency",
        status: "Deficiency",
        color: "orange",
        overview: "Edges of leaves are turning brown or yellow (scorched look).",
        fixSteps: ["Use a potassium-rich fertilizer (potash).", "Bury banana peels in soil."],
        weeklyCare: ["Ensure soil pH is balanced (6.0-7.0)."],
        prevention: ["Avoid sandy soils that leach nutrients."]
    },
    {
        id: "phosphorus_def",
        title: "Phosphorus Deficiency",
        status: "Deficiency",
        color: "orange",
        overview: "Leaves look dark green, purple, or reddish. Growth is stunted.",
        fixSteps: ["Add bone meal to the soil.", "Use a bloom-booster fertilizer."],
        weeklyCare: ["Water with aquarium water (rich in phosphorus)."],
        prevention: ["Ensure soil temperature isn't too cold."]
    },
    {
        id: "sunlight_def",
        title: "Sunlight Deficiency",
        status: "Warning",
        color: "yellow",
        overview: "Stems are long and leggy (etiolation), reaching for light.",
        fixSteps: ["Move plant closer to a window.", "Rotate plant every few days."],
        weeklyCare: ["Provide 6-8 hours of indirect light."],
        prevention: ["Clean windows to maximize light entry."]
    },
    {
        id: "leaf_spot",
        title: "Leaf Spot Fungus",
        status: "Disease",
        color: "red",
        overview: "Brown or black spots with yellow halos on leaves.",
        fixSteps: ["Remove infected leaves immediately.", "Apply copper fungicide."],
        weeklyCare: ["Water at the base, not on leaves.", "Improve air circulation."],
        prevention: ["Avoid overcrowding plants."]
    },
    {
        id: "pest_attack",
        title: "Pest / Insect Attack",
        status: "Critical",
        color: "red",
        overview: "Visible bugs, sticky residue, or holes in leaves.",
        fixSteps: ["Spray with Neem Oil.", "Wipe leaves with soapy water."],
        weeklyCare: ["Inspect undersides of leaves weekly."],
        prevention: ["Quarantine new plants for 2 weeks."]
    },
    {
        id: "root_rot",
        title: "Root Rot",
        status: "Critical",
        color: "red",
        overview: "Roots are mushy and black. Plant is wilting despite wet soil.",
        fixSteps: ["Remove plant, trim dead roots.", "Repot in fresh, dry soil.", "Sterilize the pot."],
        weeklyCare: ["Drastically reduce watering."],
        prevention: ["Never let plant sit in standing water."]
    },
    {
        id: "wilting",
        title: "Wilting Leaves",
        status: "Warning",
        color: "orange",
        overview: "Leaves are drooping. Could be water stress or heat.",
        fixSteps: ["Check soil moisture (finger test).", "Move to a cooler spot if hot."],
        weeklyCare: ["Maintain consistent watering schedule."],
        prevention: ["Avoid sudden temperature changes."]
    },
    {
        id: "yellowing",
        title: "Yellowing Leaves",
        status: "Warning",
        color: "yellow",
        overview: "General chlorosis. Could be overwatering or aging.",
        fixSteps: ["Check soil moisture.", "Prune old yellow leaves."],
        weeklyCare: ["Ensure proper drainage."],
        prevention: ["Don't over-fertilize."]
    },
    {
        id: "brown_patch",
        title: "Brown Patch Infection",
        status: "Disease",
        color: "red",
        overview: "Irregular brown patches spreading on leaves.",
        fixSteps: ["Apply fungicide.", "Reduce humidity around plant."],
        weeklyCare: ["Water in the morning only."],
        prevention: ["Avoid wetting leaves in evening."]
    },
    {
        id: "magnesium_def",
        title: "Magnesium Deficiency",
        status: "Deficiency",
        color: "orange",
        overview: "Yellowing between veins (interveinal chlorosis) on older leaves.",
        fixSteps: ["Dissolve Epsom salts in water and apply.", "Add dolomite lime."],
        weeklyCare: ["Monitor soil pH."],
        prevention: ["Use balanced fertilizer with micronutrients."]
    },
    {
        id: "bacterial_blight",
        title: "Bacterial Leaf Blight",
        status: "Disease",
        color: "red",
        overview: "Water-soaked spots that turn brown and papery.",
        fixSteps: ["Remove affected parts.", "Avoid overhead watering.", "Use copper-based bactericide."],
        weeklyCare: ["Keep foliage dry."],
        prevention: ["Sanitize tools between plants."]
    },
    {
        id: "powdery_mildew",
        title: "White Powdery Mildew",
        status: "Disease",
        color: "orange",
        overview: "White dusty coating on leaves and stems.",
        fixSteps: ["Wipe off with damp cloth.", "Spray with milk/water mixture (1:10).", "Use fungicide."],
        weeklyCare: ["Increase air circulation."],
        prevention: ["Lower humidity if possible."]
    },
    {
        id: "aphids",
        title: "Aphid / Mealybug Infestation",
        status: "Critical",
        color: "red",
        overview: "Small soft-bodied insects sucking sap. Sticky honeydew present.",
        fixSteps: ["Blast with water stream.", "Use insecticidal soap.", "Introduce ladybugs."],
        weeklyCare: ["Check new growth tips."],
        prevention: ["Avoid excess nitrogen fertilizer."]
    },
    {
        id: "dry_soil",
        title: "Dry Soil Stress",
        status: "Warning",
        color: "orange",
        overview: "Soil is pulling away from pot edges. Hard and crusty.",
        fixSteps: ["Soak pot in a water basin for 30 mins.", "Aerate soil surface."],
        weeklyCare: ["Water before soil becomes rock hard."],
        prevention: ["Add organic matter to soil."]
    },
    {
        id: "heat_burn",
        title: "Heat Burn / Sun Damage",
        status: "Warning",
        color: "orange",
        overview: "Bleached, white, or crispy brown patches on leaves facing sun.",
        fixSteps: ["Move to shade immediately.", "Water to rehydrate."],
        weeklyCare: ["Provide filtered light."],
        prevention: ["Acclimatize plants slowly to sun."]
    },
    {
        id: "cold_shock",
        title: "Cold Weather Shock",
        status: "Warning",
        color: "blue",
        overview: "Leaves curling, turning black or mushy after cold snap.",
        fixSteps: ["Move to warmer area.", "Do not prune immediately (wait for recovery)."],
        weeklyCare: ["Keep away from drafts/AC vents."],
        prevention: ["Bring indoors when temp drops below 10°C."]
    }
];

// --- App State & DOM Elements ---
const fileInput = document.getElementById('file-upload');
const homeSection = document.getElementById('home-section');
const resultSection = document.getElementById('result-section');
const historySection = document.getElementById('history-section');
const previewImage = document.getElementById('preview-image');
const scanOverlay = document.getElementById('scan-overlay');
const loadingIndicator = document.getElementById('loading-indicator');
const analysisResult = document.getElementById('analysis-result');
const navButtons = document.querySelectorAll('.nav-btn');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const saveResultBtn = document.getElementById('save-result-btn');

let currentAnalysis = null;

// --- Navigation Logic ---
function showSection(sectionId) {
    // Hide all sections
    [homeSection, resultSection, historySection].forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden-section');
    });

    // Show target section
    const target = document.getElementById(sectionId);
    target.classList.remove('hidden-section');
    target.classList.add('active-section');

    // Update Nav Buttons
    navButtons.forEach(btn => {
        if (btn.dataset.target === sectionId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (sectionId === 'history-section') {
        loadHistory();
    }
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showSection(btn.dataset.target);
    });
});

// --- Image Upload & Analysis ---
fileInput.addEventListener('change', function (e) {
    if (this.files && this.files[0]) {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            // Set preview
            previewImage.src = e.target.result;

            // Switch to result section
            showSection('result-section');

            // Start Analysis
            startAnalysis();
        }

        reader.readAsDataURL(file);
    }
});

function startAnalysis() {
    // Reset UI
    analysisResult.classList.add('hidden');
    loadingIndicator.classList.remove('hidden');
    scanOverlay.style.display = 'block';

    const loadingText = document.querySelector('#loading-indicator p');

    // Step 1: Check Image Quality (Simulated)
    loadingText.innerText = "Checking image quality...";

    setTimeout(() => {
        loadingText.innerText = "Verifying lighting conditions...";
    }, 800);

    setTimeout(() => {
        loadingText.innerText = "Analyzing focus and clarity...";
    }, 1600);

    setTimeout(() => {
        loadingText.innerText = "Identifying plant species...";
    }, 2400);

    // Step 2: Final Diagnosis
    setTimeout(() => {
        loadingText.innerText = "Diagnosing health issues...";

        setTimeout(() => {
            const diagnosis = analyzeImage_AI();
            displayResult(diagnosis);
            // Reset text for next time
            loadingText.innerText = "Analyzing plant health...";
        }, 1000);
    }, 3200);
}

function analyzeImage_AI() {
    // Randomly pick a diagnosis
    const randomIndex = Math.floor(Math.random() * diagnoses.length);
    const result = diagnoses[randomIndex];

    // Generate random confidence > 70%
    const confidence = Math.floor(Math.random() * (99 - 70 + 1)) + 70;

    return {
        ...result,
        confidence: confidence
    };
}

function displayResult(data) {
    currentAnalysis = data; // Store for saving

    // Hide loader, show result
    loadingIndicator.classList.add('hidden');
    scanOverlay.style.display = 'none';
    analysisResult.classList.remove('hidden');

    // Populate Data
    document.getElementById('issue-title').innerText = data.title;
    document.getElementById('status-badge').innerText = data.status;
    document.getElementById('confidence-score').innerText = data.confidence + "%";
    document.getElementById('meter-fill').style.width = data.confidence + "%";
    document.getElementById('issue-overview').innerText = data.overview;

    // Color coding badge
    const badge = document.getElementById('status-badge');
    badge.style.backgroundColor = data.color === 'red' ? '#ffebee' : (data.color === 'orange' ? '#fff3e0' : '#e8f5e9');
    badge.style.color = data.color === 'red' ? '#c62828' : (data.color === 'orange' ? '#ef6c00' : '#2e7d32');

    // Populate Lists
    fillList('fix-steps-list', data.fixSteps);
    fillList('weekly-care-list', data.weeklyCare);
    fillList('prevention-list', data.prevention);
}

function fillList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    });
}

// --- History & LocalStorage ---
saveResultBtn.addEventListener('click', () => {
    if (!currentAnalysis) return;

    const historyItem = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        image: previewImage.src,
        diagnosis: currentAnalysis
    };

    let history = JSON.parse(localStorage.getItem('plantAppHistory')) || [];
    history.unshift(historyItem); // Add to top
    localStorage.setItem('plantAppHistory', JSON.stringify(history));

    alert('Diagnosis saved to history!');
    saveResultBtn.innerText = "Saved ✓";
    setTimeout(() => saveResultBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i> Save to History', 2000);
});

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('plantAppHistory')) || [];
    historyList.innerHTML = '';

    if (history.length === 0) {
        historyList.innerHTML = '<div class="empty-state"><p>No scans yet. Go to Home to scan your first plant!</p></div>';
        return;
    }

    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <img src="${item.image}" class="history-thumb" alt="Plant">
            <div class="history-info">
                <h4>${item.diagnosis.title}</h4>
                <p class="history-date">${item.date} • Confidence: ${item.diagnosis.confidence}%</p>
            </div>
            <i class="fa-solid fa-chevron-right" style="color: #ccc;"></i>
        `;

        // Click to view details again
        div.addEventListener('click', () => {
            previewImage.src = item.image;
            displayResult(item.diagnosis);
            showSection('result-section');
        });
        historyList.appendChild(div);
    });
}

clearHistoryBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all history?')) {
        localStorage.removeItem('plantAppHistory');
        loadHistory();
    }
});
const tipModal = document.getElementById('tip-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

const tipContent = {
    lighting: {
        icon: 'fa-sun',
        title: 'Ensure Good Lighting',
        desc: 'Plants need natural light for accurate color detection. Avoid shadows or extreme darkness. Daylight is best!'
    },
    focus: {
        icon: 'fa-crop-simple',
        title: 'Focus on Affected Area',
        desc: 'Get close to the problem! If it\'s a leaf spot, fill the frame with the leaf. Don\'t take a photo of the whole garden.'
    },
    blur: {
        icon: 'fa-image',
        title: 'Avoid Blurry Images',
        desc: 'Hold your camera steady. Blurry images make it hard for the AI to see texture and patterns needed for diagnosis.'
    }
};

function showTipModal(type) {
    const content = tipContent[type];
    if (content) {
        modalIcon.className = `fa-solid ${content.icon} modal-icon`;
        modalTitle.innerText = content.title;
        modalDesc.innerText = content.desc;
        tipModal.classList.add('active');
    }
}

function closeTipModal() {
    tipModal.classList.remove('active');
}

// Close modal when clicking outside
tipModal.addEventListener('click', (e) => {
    if (e.target === tipModal) {
        closeTipModal();
    }
});
