/**
 * APEX MOTORS - Luxury Car Showroom Client Application
 * Handles vehicle inventory, filtering, color customizer,
 * hotspot feature exploration, lease calculator, and VIP bookings.
 */

// 1. CAR FLEET DATABASE
const CAR_DATABASE = [
  {
    id: "aetherius-nevera",
    name: "Aetherius Nevera Hypercar",
    tagline: "The Zenith of Quad-Motor Electric Domination",
    category: "hypercar",
    categoryLabel: "All-Electric Hypercar",
    price: 2450000,
    priceFormatted: "$2,450,000",
    leaseMonthly: 21500,
    hp: "1,914 HP",
    zeroSixty: "1.85s",
    topSpeed: "258 MPH",
    engine: "Quad Permanent-Magnet Electric Motors",
    transmission: "Independent Single-Speed per Wheel",
    drivetrain: "All-Wheel Torque Vectoring 2.0",
    weight: "2,150 kg",
    curatedImage: "assets/images/hero_supercar.jpg",
    colors: [
      { name: "Liquid Titanium", hex: "#71717a", image: "assets/images/hero_supercar.jpg" },
      { name: "Obsidian Carbon", hex: "#18181b", image: "assets/images/stealth_hypercar.jpg" },
      { name: "Monaco Sapphire", hex: "#2563eb", image: "assets/images/luxury_grand_tourer.jpg" }
    ],
    features: [
      "Bespoke Monocoque with bonded carbon roof",
      "Torque Vectoring with 100 calculations/second",
      "Dihedral Synchro-Helix opening doors",
      "Ultra-fast 500kW DC charging system"
    ],
    badge: "Limited Edition (1 of 25)",
    badgeColor: "gold"
  },
  {
    id: "ferrari-sf90",
    name: "Ferrari SF90 Stradale Assetto",
    tagline: "Championship Hybrid Performance Born in Maranello",
    category: "hypercar",
    categoryLabel: "Twin-Turbo Hybrid Hypercar",
    price: 648000,
    priceFormatted: "$648,000",
    leaseMonthly: 6200,
    hp: "986 HP",
    zeroSixty: "2.3s",
    topSpeed: "211 MPH",
    engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
    transmission: "8-Speed Dual-Clutch F1",
    drivetrain: "e4WD (Electric Front Axle)",
    weight: "1,570 kg",
    curatedImage: "assets/images/ferrari_sf90.jpg",
    colors: [
      { name: "Rosso Corsa Crimson", hex: "#dc2626", image: "assets/images/ferrari_sf90.jpg" },
      { name: "Nero Daytona Stealth", hex: "#171717", image: "assets/images/stealth_hypercar.jpg" },
      { name: "Verde Mantis", hex: "#16a34a", image: "assets/images/porsche_gt3rs.jpg" }
    ],
    features: [
      "Assetto Fiorano lightweight track package",
      "Multimatic DSSV racing shock absorbers",
      "High-downforce carbon fiber rear wing",
      "Full digital HUD with touch-capacitive controls"
    ],
    badge: "Immediate Delivery",
    badgeColor: "crimson"
  },
  {
    id: "porsche-gt3rs",
    name: "Porsche 911 GT3 RS Weissach",
    tagline: "Naturally Aspirated Motorsport Perfection",
    category: "track",
    categoryLabel: "Track Special",
    price: 385000,
    priceFormatted: "$385,000",
    leaseMonthly: 3950,
    hp: "518 HP",
    zeroSixty: "3.0s",
    topSpeed: "184 MPH",
    engine: "4.0L Naturally Aspirated Flat-Six (9,000 RPM)",
    transmission: "7-Speed Porsche Doppelkupplung (PDK)",
    drivetrain: "Rear-Wheel Drive with Rear-Axle Steer",
    weight: "1,450 kg",
    curatedImage: "assets/images/porsche_gt3rs.jpg",
    colors: [
      { name: "Python Green", hex: "#22c55e", image: "assets/images/porsche_gt3rs.jpg" },
      { name: "GT Silver Metallic", hex: "#94a3b8", image: "assets/images/hero_supercar.jpg" },
      { name: "Guards Red", hex: "#ef4444", image: "assets/images/ferrari_sf90.jpg" }
    ],
    features: [
      "Weissach Carbon Package & Magnesium Center-Locks",
      "DRS (Drag Reduction System) hydraulic rear wing",
      "Individual 4-dial steering wheel dampers/differential controls",
      "Carbon fiber reinforced plastic (CFRP) body panels"
    ],
    badge: "Weissach Package",
    badgeColor: "gold"
  },
  {
    id: "lamborghini-revuelto",
    name: "Lamborghini Revuelto V12 HPEV",
    tagline: "The First Electrified High Performance V12 Beast",
    category: "hypercar",
    categoryLabel: "V12 Hybrid Hypercar",
    price: 615000,
    priceFormatted: "$615,000",
    leaseMonthly: 5900,
    hp: "1,001 HP",
    zeroSixty: "2.5s",
    topSpeed: "217 MPH",
    engine: "6.5L Naturally Aspirated V12 + 3 Electric Motors",
    transmission: "8-Speed Transverse Dual-Clutch",
    drivetrain: "Torque Vectoring e-AWD",
    weight: "1,772 kg",
    curatedImage: "assets/images/lamborghini_revuelto.jpg",
    colors: [
      { name: "Nero Nemesis Matte", hex: "#0f172a", image: "assets/images/lamborghini_revuelto.jpg" },
      { name: "Arancio Borealis", hex: "#f97316", image: "assets/images/ferrari_sf90.jpg" },
      { name: "Blu Eleos", hex: "#1d4ed8", image: "assets/images/luxury_grand_tourer.jpg" }
    ],
    features: [
      "Monofuselage carbon structure",
      "Naturally aspirated 9,500 RPM V12 symphony",
      "Y-shape signature LED matrix lighting",
      "Active rear spoiler with three aero stages"
    ],
    badge: "V12 Hybrid",
    badgeColor: "gold"
  },
  {
    id: "aston-martin-dbs",
    name: "Aston Martin DBS Superleggera",
    tagline: "Pure British Grand Touring Elegance and Ferocity",
    category: "grand_tourer",
    categoryLabel: "Super Grand Tourer",
    price: 345000,
    priceFormatted: "$345,000",
    leaseMonthly: 3400,
    hp: "715 HP",
    zeroSixty: "3.2s",
    topSpeed: "211 MPH",
    engine: "5.2L Bi-Turbo V12",
    transmission: "ZF 8-Speed Automatic with Carbon Paddles",
    drivetrain: "Rear-Wheel Drive with Mechanical Limited-Slip",
    weight: "1,693 kg",
    curatedImage: "assets/images/luxury_grand_tourer.jpg",
    colors: [
      { name: "Royal Sapphire Blue", hex: "#1e40af", image: "assets/images/luxury_grand_tourer.jpg" },
      { name: "Magnetic Silver", hex: "#64748b", image: "assets/images/hero_supercar.jpg" },
      { name: "Onyx Black Metallic", hex: "#18181b", image: "assets/images/stealth_hypercar.jpg" }
    ],
    features: [
      "Aeroblade II aerodynamic downforce architecture",
      "Hand-stitched Bridge of Weir leather interior",
      "Bang & Olufsen BeoSound 13-speaker bespoke audio",
      "Carbon ceramic discs: 410mm front / 360mm rear"
    ],
    badge: "V12 Flagship",
    badgeColor: "gold"
  },
  {
    id: "apex-cockpit-edition",
    name: "Apex Bespoke Cockpit Edition",
    tagline: "Hand-Tailored Carbon Interior & Telemetry Suite",
    category: "grand_tourer",
    categoryLabel: "Bespoke Commission",
    price: 490000,
    priceFormatted: "$490,000",
    leaseMonthly: 4800,
    hp: "820 HP",
    zeroSixty: "2.7s",
    topSpeed: "220 MPH",
    engine: "Twin-Turbo Hybrid V8 with Active Kinetic Recovery",
    transmission: "Seamless Sequential Paddle Shift",
    drivetrain: "Adaptive Dynamic All-Wheel Drive",
    weight: "1,520 kg",
    curatedImage: "assets/images/luxury_cockpit.jpg",
    colors: [
      { name: "Cognac & Alcantara", hex: "#b45309", image: "assets/images/luxury_cockpit.jpg" },
      { name: "Monaco Charcoal", hex: "#334155", image: "assets/images/hero_supercar.jpg" },
      { name: "Crimson Accent", hex: "#991b1b", image: "assets/images/ferrari_sf90.jpg" }
    ],
    features: [
      "Integrated F1-style shift-light steering display",
      "High-resolution telemetry tracking for lap analysis",
      "Perforated Italian semi-aniline leather upholstery",
      "Acoustic noise cancellation with tuned titanium exhaust valve"
    ],
    badge: "Commission Only",
    badgeColor: "crimson"
  }
];

// 2. HOTSPOT DATA FOR THE FEATURE EXPLORER
const HOTSPOT_DATA = {
  steering: {
    title: "Formula 1 Steering & Digital Telemetry",
    category: "Cockpit Ergonomics",
    description: "Constructed from forged dry carbon with integrated LED shift lights, rotary drive-mode dials, and ultra-high refresh rate OLED gauge telemetry."
  },
  engine: {
    title: "1,914 HP Quad-Motor Powertrain",
    category: "Powertrain & Dynamics",
    description: "Four bespoke independent surface-mounted permanent-magnet electric motors powering each wheel individually with millisecond torque vectoring."
  },
  aero: {
    title: "Active Swan-Neck Aerodynamic Wing",
    category: "Aerodynamics",
    description: "Generates up to 860 kg of downforce at 285 km/h. Automatically shifts between High-Downforce mode and low-drag DRS mode in 0.2 seconds."
  },
  brakes: {
    title: "Carbon-Ceramic Matrix Braking System",
    category: "Braking Performance",
    description: "Huge 420mm front carbon-silicon carbide discs clamped by 6-piston monobloc Brembo calipers, dissipating heat up to 1,000°C without brake fade."
  },
  interior: {
    title: "Hand-Stitched Italian Alcantara & Forged Carbon",
    category: "Luxury Materials",
    description: "Finished by master craftsmen with double-stitched French seams, lightweight titanium hardware, and ambient fiber-optic illumination."
  }
};

// 3. APPLICATION STATE
const AppState = {
  currentFilter: "all",
  searchQuery: "",
  sortBy: "featured",
  favorites: JSON.parse(localStorage.getItem("apex_favorites") || "[]"),
  selectedCar: null
};

// 4. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initFleetGrid();
  initFilterControls();
  initHotspots();
  initLeaseCalculator();
  initModals();
  initMobileMenu();
  updateFavoritesCount();
  initHeroParticleCanvas();
  initScrollReveal();
  initStatsCounter();
});

// 5. RENDER FLEET CARDS
function initFleetGrid() {
  const container = document.getElementById("fleet-grid");
  if (!container) return;

  let filtered = [...CAR_DATABASE];

  // Category or favorites filter
  if (AppState.currentFilter === "favorites") {
    filtered = filtered.filter(car => AppState.favorites.includes(car.id));
  } else if (AppState.currentFilter !== "all") {
    filtered = filtered.filter(car => car.category === AppState.currentFilter);
  }

  // Search filter
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.toLowerCase();
    filtered = filtered.filter(car => 
      car.name.toLowerCase().includes(q) ||
      car.tagline.toLowerCase().includes(q) ||
      car.engine.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (AppState.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === "zero-sixty") {
    filtered.sort((a, b) => parseFloat(a.zeroSixty) - parseFloat(b.zeroSixty));
  } else if (AppState.sortBy === "horsepower") {
    filtered.sort((a, b) => parseInt(b.hp) - parseInt(a.hp));
  }

  // Render cards
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16">
        <p class="text-xl text-gray-400 font-semibold mb-2">No vehicles match your criteria</p>
        <button onclick="resetFilters()" class="btn-primary-luxury text-sm mt-4">Reset Showroom Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(car => {
    const isFav = AppState.favorites.includes(car.id);
    return `
      <div class="car-card flex flex-col justify-between relative" id="card-${car.id}">
        <div class="car-card-glare"></div>
        <div>
          <!-- Image container -->
          <div class="car-image-container relative">
            <img 
              src="${car.curatedImage}" 
              alt="${car.name}" 
              id="img-${car.id}"
              class="car-image"
              loading="lazy"
            />
            <!-- Top Badges Overlay -->
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span class="${car.badgeColor === 'gold' ? 'badge-gold' : 'badge-crimson'} shadow-lg backdrop-blur-md">
                ${car.badge}
              </span>
              <button 
                onclick="toggleFavorite('${car.id}')" 
                class="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:bg-black/80 ${isFav ? 'text-amber-400' : 'text-gray-300'}"
                title="${isFav ? 'Remove from Private Collection' : 'Save to Private Collection'}"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Content details -->
          <div class="p-6">
            <div class="flex items-center justify-between text-xs text-amber-500 font-semibold tracking-wider uppercase mb-1">
              <span>${car.categoryLabel}</span>
              <span>Available Now</span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-2 leading-tight">${car.name}</h3>
            <p class="text-sm text-gray-400 line-clamp-1 mb-4">${car.tagline}</p>

            <!-- Color Swatches -->
            <div class="flex items-center gap-2 mb-5">
              <span class="text-xs text-gray-400 font-medium mr-1">Exterior Finish:</span>
              ${car.colors.map((c, idx) => `
                <button 
                  onclick="changeCarColor('${car.id}', '${c.image}', '${c.name}', this)"
                  class="w-5 h-5 rounded-full border-2 transition-all ${idx === 0 ? 'border-amber-400 scale-110' : 'border-gray-600 hover:border-gray-400'}"
                  style="background-color: ${c.hex};"
                  title="${c.name}"
                ></button>
              `).join('')}
              <span id="color-name-${car.id}" class="text-xs text-gray-400 ml-1 italic truncate max-w-[120px]">${car.colors[0].name}</span>
            </div>

            <!-- Key Specs Strip -->
            <div class="grid grid-cols-3 gap-2 p-3 bg-black/40 rounded-xl border border-white/5 mb-5 text-center">
              <div>
                <span class="block text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Power</span>
                <span class="text-sm font-bold text-amber-400">${car.hp}</span>
              </div>
              <div class="border-x border-white/10">
                <span class="block text-[10px] text-gray-400 font-semibold uppercase tracking-wider">0-60 MPH</span>
                <span class="text-sm font-bold text-white">${car.zeroSixty}</span>
              </div>
              <div>
                <span class="block text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Top Speed</span>
                <span class="text-sm font-bold text-white">${car.topSpeed}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer / Pricing & Actions -->
        <div class="px-6 pb-6 pt-2 border-t border-white/5">
          <div class="flex items-baseline justify-between mb-4">
            <div>
              <span class="text-xs text-gray-400 block font-medium">Acquisition Price</span>
              <span class="text-2xl font-black tracking-tight text-white">${car.priceFormatted}</span>
            </div>
            <div class="text-right">
              <span class="text-xs text-gray-400 block font-medium">Est. Lease</span>
              <span class="text-sm font-bold text-amber-400">$${car.leaseMonthly.toLocaleString()}/mo</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button 
              onclick="openDetailModal('${car.id}')"
              class="btn-secondary-luxury text-xs py-2.5 px-3 w-full"
            >
              Full Specs
            </button>
            <button 
              onclick="openTestDriveModal('${car.id}')"
              class="btn-primary-luxury text-xs py-2.5 px-3 w-full"
            >
              Reserve / Test
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  attachCardTiltListeners();
}

// 6. FILTER AND SEARCH CONTROLS
function initFilterControls() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-amber-500", "text-black", "font-bold");
        b.classList.add("bg-white/5", "text-gray-300");
      });
      btn.classList.remove("bg-white/5", "text-gray-300");
      btn.classList.add("bg-amber-500", "text-black", "font-bold");
      AppState.currentFilter = btn.getAttribute("data-category");
      initFleetGrid();
    });
  });

  const searchInput = document.getElementById("fleet-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      initFleetGrid();
    });
  }

  const sortSelect = document.getElementById("fleet-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      initFleetGrid();
    });
  }
}

function resetFilters() {
  AppState.currentFilter = "all";
  AppState.searchQuery = "";
  AppState.sortBy = "featured";
  
  const searchInput = document.getElementById("fleet-search");
  if (searchInput) searchInput.value = "";
  
  const sortSelect = document.getElementById("fleet-sort");
  if (sortSelect) sortSelect.value = "featured";

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(b => {
    if (b.getAttribute("data-category") === "all") {
      b.classList.add("bg-amber-500", "text-black", "font-bold");
      b.classList.remove("bg-white/5", "text-gray-300");
    } else {
      b.classList.remove("bg-amber-500", "text-black", "font-bold");
      b.classList.add("bg-white/5", "text-gray-300");
    }
  });

  initFleetGrid();
}

// 7. COLOR VARIANT SWITCHER
function changeCarColor(carId, imgUrl, colorName, clickedButton) {
  const imgElement = document.getElementById(`img-${carId}`);
  if (imgElement) {
    imgElement.style.opacity = "0.4";
    setTimeout(() => {
      imgElement.src = imgUrl;
      imgElement.style.opacity = "1";
    }, 180);
  }

  const colorLabel = document.getElementById(`color-name-${carId}`);
  if (colorLabel) {
    colorLabel.textContent = colorName;
  }

  // Update button active rings
  const parent = clickedButton.parentElement;
  if (parent) {
    parent.querySelectorAll("button").forEach(b => {
      b.classList.remove("border-amber-400", "scale-110");
      b.classList.add("border-gray-600");
    });
    clickedButton.classList.remove("border-gray-600");
    clickedButton.classList.add("border-amber-400", "scale-110");
  }
}

// 8. FAVORITES / PRIVATE COLLECTION
function toggleFavorite(carId) {
  const index = AppState.favorites.indexOf(carId);
  const car = CAR_DATABASE.find(c => c.id === carId);
  
  if (index > -1) {
    AppState.favorites.splice(index, 1);
    showToast(`Removed ${car.name} from saved fleet`, "info");
  } else {
    AppState.favorites.push(carId);
    showToast(`Saved ${car.name} to your Private Portfolio!`, "success");
  }

  localStorage.setItem("apex_favorites", JSON.stringify(AppState.favorites));
  updateFavoritesCount();
  initFleetGrid();
}

function updateFavoritesCount() {
  const countBadge = document.getElementById("fav-count");
  if (countBadge) {
    countBadge.textContent = AppState.favorites.length;
    countBadge.style.display = AppState.favorites.length > 0 ? "inline-flex" : "none";
  }
}

function filterFavorites() {
  if (AppState.favorites.length === 0) {
    showToast("Your Private Portfolio is empty. Click the heart icon on any vehicle to save it.", "info");
    return;
  }

  if (AppState.currentFilter === "favorites") {
    resetFilters();
    showToast("Displaying all showroom vehicles", "info");
  } else {
    AppState.currentFilter = "favorites";
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(b => {
      b.classList.remove("bg-amber-500", "text-black", "font-bold");
      b.classList.add("bg-white/5", "text-gray-300");
    });
    initFleetGrid();
    showToast(`Viewing ${AppState.favorites.length} vehicle(s) in your Private Portfolio`, "success");
    const collectionElem = document.getElementById("collection");
    if (collectionElem) collectionElem.scrollIntoView({ behavior: "smooth" });
  }
}

// 9. HOTSPOT FEATURE EXPLORER
function initHotspots() {
  const hotspotDots = document.querySelectorAll(".hotspot-dot");
  const titleElem = document.getElementById("hotspot-title");
  const catElem = document.getElementById("hotspot-category");
  const descElem = document.getElementById("hotspot-desc");

  hotspotDots.forEach(dot => {
    dot.addEventListener("click", () => {
      hotspotDots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");

      const key = dot.getAttribute("data-hotspot");
      const data = HOTSPOT_DATA[key];
      if (data && titleElem && descElem) {
        titleElem.textContent = data.title;
        catElem.textContent = data.category;
        descElem.textContent = data.description;
      }
    });
  });
}

// 10. LEASE & FINANCING CALCULATOR
function initLeaseCalculator() {
  const priceInput = document.getElementById("calc-price");
  const priceDisplay = document.getElementById("calc-price-val");
  const downInput = document.getElementById("calc-down");
  const downDisplay = document.getElementById("calc-down-val");
  const termSelect = document.getElementById("calc-term");

  const monthlyDisplay = document.getElementById("calc-monthly");
  const totalFinanced = document.getElementById("calc-financed");
  const estInterest = document.getElementById("calc-interest");

  function recalculate() {
    const price = parseFloat(priceInput.value);
    const downPercent = parseFloat(downInput.value);
    const termMonths = parseInt(termSelect.value);

    const downAmount = price * (downPercent / 100);
    const principal = price - downAmount;
    
    // Luxury annual interest rate ~ 5.9%
    const annualRate = 0.059;
    const monthlyRate = annualRate / 12;

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
                           (Math.pow(1 + monthlyRate, termMonths) - 1);
    const totalPaid = (monthlyPayment * termMonths) + downAmount;
    const totalInt = totalPaid - price;

    if (priceDisplay) priceDisplay.textContent = `$${price.toLocaleString()}`;
    if (downDisplay) downDisplay.textContent = `${downPercent}% ($${Math.round(downAmount).toLocaleString()})`;
    if (monthlyDisplay) monthlyDisplay.textContent = `$${Math.round(monthlyPayment).toLocaleString()}`;
    if (totalFinanced) totalFinanced.textContent = `$${Math.round(principal).toLocaleString()}`;
    if (estInterest) estInterest.textContent = `$${Math.round(totalInt).toLocaleString()}`;
  }

  if (priceInput && downInput && termSelect) {
    priceInput.addEventListener("input", recalculate);
    downInput.addEventListener("input", recalculate);
    termSelect.addEventListener("change", recalculate);
    recalculate();
  }
}

// 11. SYNTHESIZED ENGINE SOUND GENERATOR (Web Audio API)
function playSupercarSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Fundamental engine frequency sweep
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc2.type = "triangle";

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(3200, ctx.currentTime + 1.2);
    filter.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 2.5);

    // Rev curve: idle -> roar -> decel
    osc.frequency.setValueAtTime(65, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 1.0);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 1.8);
    osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 2.4);
    osc.frequency.exponentialRampToValueAtTime(75, ctx.currentTime + 3.2);

    osc2.frequency.setValueAtTime(130, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(760, ctx.currentTime + 1.0);
    osc2.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 1.8);
    osc2.frequency.exponentialRampToValueAtTime(840, ctx.currentTime + 2.4);
    osc2.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 3.2);

    gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.4);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc2.start();
    osc.stop(ctx.currentTime + 3.5);
    osc2.stop(ctx.currentTime + 3.5);

    // Animate sound wave bars
    const bars = document.querySelectorAll(".sound-bar");
    bars.forEach(b => b.classList.add("playing"));
    setTimeout(() => {
      bars.forEach(b => b.classList.remove("playing"));
    }, 3500);

    showToast("V12 Bi-Turbo Acoustic Simulation Playing", "info");
  } catch (e) {
    console.error(e);
  }
}

// 12. MODAL CONTROLLERS
function openDetailModal(carId) {
  const car = CAR_DATABASE.find(c => c.id === carId);
  if (!car) return;

  AppState.selectedCar = car;
  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("detail-modal-body");

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative">
      <div class="h-80 w-full overflow-hidden rounded-t-2xl relative bg-black">
        <img src="${car.curatedImage}" alt="${car.name}" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#10131a] via-black/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <span class="badge-gold mb-2">${car.badge}</span>
            <h2 class="text-3xl font-black text-white">${car.name}</h2>
            <p class="text-sm text-gray-300">${car.tagline}</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400 block">Acquisition</span>
            <span class="text-2xl font-black text-amber-400">${car.priceFormatted}</span>
          </div>
        </div>
      </div>

      <div class="p-8">
        <!-- Audio Simulation Button with Equalizer Animation -->
        <div class="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-white">Exhaust Acoustic Experience</h4>
              <p class="text-xs text-gray-400">Synthesized acoustic valve exhaust profile</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <!-- Animated Sound Wave Visualizer Bars -->
            <div class="flex items-end gap-1 h-6 px-2.5 py-1 bg-black/60 rounded-lg border border-white/10">
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
              <div class="sound-bar"></div>
            </div>
            <button onclick="playSupercarSound()" class="btn-secondary-luxury text-xs py-2 px-4">
              Hear Engine Roar
            </button>
          </div>
        </div>

        <!-- Technical Telemetry Matrix -->
        <h4 class="text-sm font-bold tracking-wider uppercase text-gray-400 mb-4">Factory Technical Specifications</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
            <span class="text-xs text-gray-400 block font-medium">Power Output</span>
            <span class="text-lg font-black text-amber-400">${car.hp}</span>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
            <span class="text-xs text-gray-400 block font-medium">0-60 MPH</span>
            <span class="text-lg font-black text-white">${car.zeroSixty}</span>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
            <span class="text-xs text-gray-400 block font-medium">Top Velocity</span>
            <span class="text-lg font-black text-white">${car.topSpeed}</span>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
            <span class="text-xs text-gray-400 block font-medium">Curb Weight</span>
            <span class="text-lg font-black text-white">${car.weight}</span>
          </div>
        </div>

        <!-- Powertrain & Engineering Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-8">
          <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <div class="flex justify-between pb-2 border-b border-white/5">
              <span class="text-gray-400">Engine / Unit</span>
              <span class="font-semibold text-white text-right">${car.engine}</span>
            </div>
            <div class="flex justify-between pb-2 border-b border-white/5">
              <span class="text-gray-400">Transmission</span>
              <span class="font-semibold text-white text-right">${car.transmission}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Drivetrain</span>
              <span class="font-semibold text-white text-right">${car.drivetrain}</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-xs font-bold uppercase text-amber-400 block mb-2">Signature Engineering Highlights</span>
            <ul class="space-y-1.5 text-xs text-gray-300">
              ${car.features.map(f => `<li class="flex items-start gap-2"><span class="text-amber-400 mt-0.5">•</span> <span>${f}</span></li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
          <button 
            onclick="closeModals(); openTestDriveModal('${car.id}');"
            class="btn-primary-luxury flex-1 text-sm py-3"
          >
            Schedule VIP Test Drive for ${car.name}
          </button>
          <button 
            onclick="closeModals()"
            class="btn-secondary-luxury text-sm py-3 px-6"
          >
            Back to Showroom
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openTestDriveModal(carId) {
  const modal = document.getElementById("test-drive-modal");
  const carSelect = document.getElementById("booking-car");
  if (!modal) return;

  if (carSelect && carId) {
    carSelect.value = carId;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "auto";
}

function initModals() {
  // Populate car options in test drive modal
  const carSelect = document.getElementById("booking-car");
  if (carSelect) {
    carSelect.innerHTML = CAR_DATABASE.map(c => `
      <option value="${c.id}">${c.name} (${c.priceFormatted})</option>
    `).join('');
  }

  // Set default minimum date for test drive (tomorrow)
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split("T")[0];
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }

  // Close modals on backdrop click or ESC
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModals();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });

  // Handle VIP Test Drive Form Submission
  const bookingForm = document.getElementById("test-drive-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const carId = document.getElementById("booking-car").value;
      const showroom = document.getElementById("booking-showroom").value;
      const clientName = document.getElementById("booking-name").value;
      const date = document.getElementById("booking-date").value;
      const car = CAR_DATABASE.find(c => c.id === carId);

      closeModals();
      showToast(
        `VIP Viewing Confirmed for ${clientName}! Our ${showroom} Private Client Concierge has reserved the ${car.name} for ${date}.`,
        "success",
        6000
      );
      bookingForm.reset();
    });
  }

  // Handle Newsletter Submission
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletter-email").value;
      showToast(`Welcome to the Private Circle (${email}). Confidential allocations sent quarterly.`, "success");
      newsletterForm.reset();
    });
  }
}

// 13. MOBILE MENU
function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    // Close on link click
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }
}

// 14. TOAST NOTIFICATION SYSTEM
function showToast(message, type = "info", duration = 4000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  
  const icon = type === "success" 
    ? `<svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `
    ${icon}
    <span class="text-sm font-medium text-white">${message}</span>
  `;

  container.appendChild(toast);
  
  // Slide in
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Slide out and remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// =========================================================================
// 15. CODE-DRIVEN ANIMATIONS & INTERACTIVITY
// =========================================================================

// 1. Interactive 3D Card Tilt with Dynamic Cursor Glare Reflection
function attachCardTiltListeners() {
  const cards = document.querySelectorAll('.car-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease-out';
    });
  });
}

// 2. Interactive Wind Tunnel Streamline & Amber Ember Particle Canvas in Hero
function initHeroParticleCanvas() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const particleCount = 42;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * (width || 1200),
      y: Math.random() * (height || 800),
      length: Math.random() * 90 + 30,
      speed: Math.random() * 2.2 + 0.8,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.45 + 0.1,
      isStreak: Math.random() > 0.6
    });
  }

  function render() {
    if (!ctx || !width || !height) {
      requestAnimationFrame(render);
      return;
    }
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x -= p.speed * 1.6;
      p.y -= p.speed * 0.15;

      if (p.x < -120) {
        p.x = width + 60;
        p.y = Math.random() * height;
      }
      if (p.y < -30) {
        p.y = height + 20;
      }

      if (p.isStreak) {
        const grad = ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y);
        grad.addColorStop(0, `rgba(245, 158, 11, ${p.opacity})`);
        grad.addColorStop(1, "rgba(245, 158, 11, 0)");
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = p.size;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length, p.y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity * 1.3})`;
        ctx.fill();
      }
    });

    requestAnimationFrame(render);
  }
  render();
}

// 3. Scroll-Triggered Reveal via IntersectionObserver
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}

// 4. Animated Numerical Counters for Performance Ticker
function initStatsCounter() {
  const statsContainer = document.getElementById("stats-ticker");
  if (!statsContainer) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateNumber("stat-accel", 0, 1.85, 1500, 2, "s");
        animateNumber("stat-hp", 0, 1914, 1800, 0, " HP");
        animateNumber("stat-speed", 0, 258, 1800, 0, " MPH");
        animateNumber("stat-salons", 0, 5, 1200, 0, " Salons");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsContainer);
}

function animateNumber(id, start, end, duration, decimals = 0, suffix = "") {
  const el = document.getElementById(id);
  if (!el) return;
  const startTime = performance.now();

  function update(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = start + (end - start) * easeProgress;
    el.textContent = current.toFixed(decimals) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = end.toFixed(decimals) + suffix;
    }
  }
  requestAnimationFrame(update);
}

