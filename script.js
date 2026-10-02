/* ==========================================================================
   FIFA 4'LÜ LİG - SEZON YÖNETİM MERKEZİ
   FULL INTEGRATED FRONTEND APPLICATION ENGINE
   ========================================================================== */

const INITIAL_TEAMS = [
    { id: 1, name: "EMİR", owner: "Emir", budget: 100, debt: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, championships: 0, panicUsed: false },
    { id: 2, name: "DEMİR", owner: "Demir", budget: 100, debt: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, championships: 0, panicUsed: false },
    { id: 3, name: "TUĞRA", owner: "Tuğra", budget: 100, debt: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, championships: 0, panicUsed: false },
    { id: 4, name: "YİĞİT", owner: "Yiğit", budget: 140, debt: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, championships: 1, panicUsed: false }
];

const INITIAL_PLAYERS = [
    // DEMİR
    { id: 101, name: "Benzema", teamId: 2, overall: 89, value: 65, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 102, name: "Vela", teamId: 2, overall: 81, value: 25, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 103, name: "Ribéry", teamId: 2, overall: 84, value: 30, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 104, name: "Jorginho", teamId: 2, overall: 85, value: 40, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 105, name: "Banega", teamId: 2, overall: 82, value: 20, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 106, name: "Otamendi", teamId: 2, overall: 81, value: 18, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 107, name: "Sergio Ramos", teamId: 2, overall: 88, value: 50, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 108, name: "Chedjou", teamId: 2, overall: 77, value: 8, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 109, name: "Lichtsteiner", teamId: 2, overall: 79, value: 10, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 110, name: "Handanovic", teamId: 2, overall: 84, value: 25, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 111, name: "Fernandinho", teamId: 2, overall: 83, value: 22, goals: 0, assists: 0, cleanSheets: 0 },

    // YİĞİT
    { id: 201, name: "Agüero", teamId: 4, overall: 89, value: 70, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 202, name: "Yaya Touré", teamId: 4, overall: 86, value: 45, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 203, name: "Sterling", teamId: 4, overall: 87, value: 60, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 204, name: "Gabi", teamId: 4, overall: 82, value: 18, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 205, name: "Vitolo", teamId: 4, overall: 80, value: 15, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 206, name: "Busquets", teamId: 4, overall: 87, value: 50, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 207, name: "Gibbs", teamId: 4, overall: 77, value: 10, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 208, name: "Van Dijk", teamId: 4, overall: 89, value: 75, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 209, name: "Sagna", teamId: 4, overall: 79, value: 12, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 210, name: "Piszczek", teamId: 4, overall: 81, value: 15, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 211, name: "Lloris", teamId: 4, overall: 87, value: 40, goals: 0, assists: 0, cleanSheets: 0 },

    // TUĞRA
    { id: 301, name: "Ibrahimovic", teamId: 3, overall: 89, value: 60, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 302, name: "Salah", teamId: 3, overall: 89, value: 80, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 303, name: "Jonas", teamId: 3, overall: 82, value: 20, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 304, name: "Quaresma", teamId: 3, overall: 81, value: 18, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 305, name: "Matuidi", teamId: 3, overall: 84, value: 30, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 306, name: "Azpilicueta", teamId: 3, overall: 84, value: 35, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 307, name: "Filipe Luis", teamId: 3, overall: 84, value: 28, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 308, name: "Piqué", teamId: 3, overall: 86, value: 40, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 309, name: "Cech", teamId: 3, overall: 85, value: 25, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 310, name: "Juanfran", teamId: 3, overall: 81, value: 16, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 311, name: "Mascherano", teamId: 3, overall: 83, value: 22, goals: 0, assists: 0, cleanSheets: 0 },

    // EMİR
    { id: 401, name: "Bale", teamId: 1, overall: 89, value: 75, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 402, name: "Nani", teamId: 1, overall: 82, value: 22, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 403, name: "Aubameyang", teamId: 1, overall: 87, value: 65, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 404, name: "Srna", teamId: 1, overall: 80, value: 12, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 405, name: "Carrick", teamId: 1, overall: 80, value: 14, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 406, name: "Naldo", teamId: 1, overall: 82, value: 18, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 407, name: "David Luiz", teamId: 1, overall: 83, value: 30, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 408, name: "Adriano", teamId: 1, overall: 78, value: 10, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 409, name: "Dani Alves", teamId: 1, overall: 85, value: 35, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 410, name: "Rooney", teamId: 1, overall: 85, value: 45, goals: 0, assists: 0, cleanSheets: 0 },
    { id: 411, name: "Buffon", teamId: 1, overall: 88, value: 30, goals: 0, assists: 0, cleanSheets: 0 }
];

const DEFAULT_SETTINGS = {
    winReward: 2,
    drawReward: 1,
    champ1: 40,
    champ2: 25,
    champ3: 15,
    champ4: 10,
    topScorerReward: 10,
    topAssistReward: 10,
    bestDefReward: 10,
    maxDebt: 30,
    debtInterestRate: 20,
    panicRate: 125
};

const INITIAL_CHAMPIONS = [
    { season: 1, championId: 4, championName: "Yiğit" }
];

// Application State
let state = {
    season: 2,
    teams: [],
    players: [],
    transfers: [],
    matches: [],
    financeLogs: [],
    news: [],
    history: [],
    settings: { ...DEFAULT_SETTINGS }
};

let budgetChart = null;

/* ==========================================================================
   INITIALIZATION & DATA STORAGE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    initUI();
    renderAll();
});

function loadData() {
    const savedState = localStorage.getItem("fifa4_league_data");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
        } catch (e) {
            console.error("Storage parse error, resetting...", e);
            resetToDefaultState();
        }
    } else {
        resetToDefaultState();
    }
}

function resetToDefaultState() {
    state = {
        season: 2,
        teams: JSON.parse(JSON.stringify(INITIAL_TEAMS)),
        players: JSON.parse(JSON.stringify(INITIAL_PLAYERS)),
        transfers: [],
        matches: [],
        financeLogs: [
            { id: 1, teamId: 4, amount: 40, type: "income", reason: "Sezon 1 Şampiyonluk Ödülü", date: new Date().toLocaleDateString("tr-TR") }
        ],
        news: [
            { text: "🏆 Yiğit Sezon 1 Şampiyonu oldu ve 40M € ödül kazandı!", date: new Date().toLocaleDateString("tr-TR") },
            { text: "⚽ Sezon 2 heyecanı resmen başladı! Tüm takımlara başarılar.", date: new Date().toLocaleDateString("tr-TR") }
        ],
        history: JSON.parse(JSON.stringify(INITIAL_CHAMPIONS)),
        settings: { ...DEFAULT_SETTINGS }
    };
    saveData();
}

function saveData() {
    localStorage.setItem("fifa4_league_data", JSON.stringify(state));
    renderAll();
}

/* ==========================================================================
   NAVIGATION & UI EVENT LISTENERS
   ========================================================================== */

function initUI() {
    // Navigation
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".view-section").forEach(s => s.classList.remove("active"));

            btn.classList.add("active");
            const target = btn.getAttribute("data-target");
            document.getElementById(`view-${target}`).classList.add("active");
            document.getElementById("pageTitle").innerText = btn.innerText.trim();

            // Mobile Auto Close Sidebar
            document.getElementById("sidebar").classList.remove("open");
        });
    });

    // Mobile Sidebar Toggles
    document.getElementById("menuToggleBtn").addEventListener("click", () => {
        document.getElementById("sidebar").classList.add("open");
    });

    document.getElementById("closeSidebarBtn").addEventListener("click", () => {
        document.getElementById("sidebar").classList.remove("open");
    });
}

function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-exclamation text-red'}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

/* ==========================================================================
   RENDER ALL VIEWS
   ========================================================================== */

function renderAll() {
    renderDashboard();
    renderTeamsPage();
    renderTransfersPage();
    renderMarketPage();
    renderStandingsPage();
    renderMatchesPage();
    renderFinancePage();
    renderHistoryPage();
    renderSettingsPage();
    populateSelectOptions();
}

/* ==========================================================================
   1. DASHBOARD
   ========================================================================== */

function renderDashboard() {
    document.getElementById("currentSeasonText").innerText = `Sezon ${state.season} (Aktif)`;
    document.getElementById("statSeason").innerText = state.season;
    document.getElementById("statTeams").innerText = state.teams.length;
    document.getElementById("statPlayers").innerText = state.players.length;
    document.getElementById("statTransfers").innerText = state.transfers.length;

    const totalMoney = state.teams.reduce((acc, t) => acc + t.budget, 0);
    const totalDebt = state.teams.reduce((acc, t) => acc + t.debt, 0);

    document.getElementById("statTotalMoney").innerText = `${totalMoney}M €`;
    document.getElementById("statTotalDebt").innerText = `${totalDebt}M €`;

    // Last Champion
    const lastChamp = state.history.length > 0 ? state.history[state.history.length - 1].championName : "N/A";
    document.getElementById("statChampion").innerText = lastChamp;
    document.getElementById("champName").innerText = lastChamp.toUpperCase();

    // Teams Overview Cards
    const teamsGrid = document.getElementById("dashboardTeamCards");
    teamsGrid.innerHTML = "";

    state.teams.forEach(t => {
        const squadVal = getTeamSquadValue(t.id);
        const points = (t.wins * 3) + (t.draws * 1);
        const netBudget = t.budget - t.debt;

        teamsGrid.innerHTML += `
            <div class="team-card">
                <div class="team-card-header">
                    <div class="team-avatar" style="background-color: ${getTeamColor(t.id)}">${t.name.substring(0, 2)}</div>
                    <div class="team-title">
                        <h4>${t.name}</h4>
                        <span>Yönetici: ${t.owner}</span>
                    </div>
                </div>
                <div class="team-stats-list">
                    <div class="stat-row"><span>Bütçe:</span><span class="text-green">${t.budget}M €</span></div>
                    <div class="stat-row"><span>Borç:</span><span class="${t.debt > 0 ? 'text-red' : ''}">${t.debt}M €</span></div>
                    <div class="stat-row"><span>Net Bütçe:</span><span>${netBudget}M €</span></div>
                    <div class="stat-row"><span>Kadro Değeri:</span><span>${squadVal}M €</span></div>
                    <div class="stat-row"><span>Puan / O:</span><span class="highlight-gold">${points} P (${t.wins + t.draws + t.losses} Maç)</span></div>
                </div>
                <button class="btn btn-outline btn-sm full-width mt-15" onclick="viewSquad(${t.id})"><i class="fa-solid fa-users"></i> Kadroyu Gör</button>
            </div>
        `;
    });

    // News Feed
    const newsFeed = document.getElementById("dashboardNewsFeed");
    newsFeed.innerHTML = state.news.map(n => `
        <div class="news-item">
            <div>${n.text}</div>
            <span class="news-time"><i class="fa-regular fa-clock"></i> ${n.date}</span>
        </div>
    `).reverse().slice(0, 5).join('');

    // Recent Transfers
    const recentTransfers = document.getElementById("dashboardRecentTransfers");
    if (state.transfers.length === 0) {
        recentTransfers.innerHTML = "<p class='text-muted'>Henüz transfer yapılmadı.</p>";
    } else {
        recentTransfers.innerHTML = state.transfers.map(tr => {
            const p = getPlayerById(tr.playerId);
            const fromT = getTeamById(tr.fromTeam);
            const toT = getTeamById(tr.toTeam);
            return `
                <div class="news-item">
                    <strong>${p ? p.name : 'Oyuncu'}</strong>: ${fromT ? fromT.name : 'Serbest'} ➔ ${toT ? toT.name : 'Serbest'}
                    <div class="text-green mt-5">Bonservis: ${tr.price}M € (${tr.type})</div>
                </div>
            `;
        }).reverse().slice(0, 4).join('');
    }

    // Records
    renderLeagueRecords();

    // Render Chart
    renderChart();
}

function renderLeagueRecords() {
    const container = document.getElementById("leagueRecordsContainer");

    // Most Expensive Transfer
    let maxTransfer = state.transfers.length > 0 ? [...state.transfers].sort((a, b) => b.price - a.price)[0] : null;
    let maxTrText = "Yok";
    if (maxTransfer) {
        const p = getPlayerById(maxTransfer.playerId);
        maxTrText = `${p ? p.name : 'Oyuncu'} (${maxTransfer.price}M €)`;
    }

    // Most Expensive Player Market Value
    let maxValPlayer = [...state.players].sort((a, b) => b.value - a.value)[0];

    // Most Spending Team
    let teamSpent = {};
    state.transfers.forEach(tr => {
        if (tr.toTeam) teamSpent[tr.toTeam] = (teamSpent[tr.toTeam] || 0) + tr.price;
    });
    let topSpenderId = Object.keys(teamSpent).sort((a, b) => teamSpent[b] - teamSpent[a])[0];
    let topSpender = getTeamById(topSpenderId);

    container.innerHTML = `
        <div class="team-stats-list">
            <div class="stat-row"><span>🔥 En Pahalı Transfer:</span><span class="highlight-gold">${maxTrText}</span></div>
            <div class="stat-row"><span>💎 En Değerli Oyuncu:</span><span>${maxValPlayer.name} (${maxValPlayer.value}M €)</span></div>
            <div class="stat-row"><span>💰 En Çok Harcayan Takım:</span><span>${topSpender ? topSpender.name : 'Yok'}</span></div>
            <div class="stat-row"><span>🏆 Toplam Şampiyonluk:</span><span>Yiğit (1)</span></div>
        </div>
    `;
}

function renderChart() {
    const ctx = document.getElementById("chartBudgetsHeight").getContext("2d");
    if (budgetChart) budgetChart.destroy();

    const labels = state.teams.map(t => t.name);
    const budgets = state.teams.map(t => t.budget);
    const squadVals = state.teams.map(t => getTeamSquadValue(t.id));

    budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: 'Kasa Bütçesi (M€)', data: budgets, backgroundColor: '#2ecc71' },
                { label: 'Kadro Değeri (M€)', data: squadVals, backgroundColor: '#e5b842' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { ticks: { color: '#8c98a9' }, grid: { color: '#262e3d' } },
                x: { ticks: { color: '#8c98a9' }, grid: { color: '#262e3d' } }
            },
            plugins: { legend: { labels: { color: '#f0f2f5' } } }
        }
    });
}

/* ==========================================================================
   2. TEAMS
   ========================================================================== */

function renderTeamsPage() {
    const container = document.getElementById("teamsListContainer");
    container.innerHTML = "";

    state.teams.forEach(t => {
        const squadVal = getTeamSquadValue(t.id);
        const points = (t.wins * 3) + (t.draws * 1);
        const netBudget = t.budget - t.debt;

        container.innerHTML += `
            <div class="card mb-20">
                <div class="card-header flex-between">
                    <div class="logo">
                        <div class="team-avatar" style="background-color: ${getTeamColor(t.id)}">${t.name.substring(0, 2)}</div>
                        <div>
                            <h3>${t.name} FC</h3>
                            <span style="font-size: 12px; color: var(--text-muted)">Menajer: ${t.owner} | Şampiyonluk: ${t.championships}</span>
                        </div>
                    </div>
                    <button class="btn btn-gold btn-sm" onclick="viewSquad(${t.id})"><i class="fa-solid fa-eye"></i> Kadroyu Gör</button>
                </div>
                <div class="card-body">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-info">
                                <span class="stat-label">Bütçe</span>
                                <h3 class="text-green">${t.budget}M €</h3>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-info">
                                <span class="stat-label">Borç</span>
                                <h3 class="${t.debt > 0 ? 'text-red' : ''}">${t.debt}M €</h3>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-info">
                                <span class="stat-label">Net Bütçe</span>
                                <h3>${netBudget}M €</h3>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-info">
                                <span class="stat-label">Kadro Değeri</span>
                                <h3>${squadVal}M €</h3>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-info">
                                <span class="stat-label">Lig Performansı</span>
                                <h3 class="highlight-gold">${points} P (G:${t.wins} B:${t.draws} M:${t.losses})</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function viewSquad(teamId) {
    const team = getTeamById(teamId);
    const players = state.players.filter(p => p.teamId === teamId);

    document.getElementById("squadModalTitle").innerText = `${team.name} FC Kadrosu (${players.length} Oyuncu)`;
    const tbody = document.getElementById("squadModalTableBody");

    if (players.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6' class='text-muted'>Bu takımda hiç oyuncu bulunmuyor.</td></tr>";
    } else {
        tbody.innerHTML = players.map(p => `
            <tr>
                <td><strong>${p.name}</strong></td>
                <td><span class="ovr-badge">${p.overall}</span></td>
                <td>${p.value}M €</td>
                <td>${p.goals}</td>
                <td>${p.assists}</td>
                <td>${p.cleanSheets}</td>
            </tr>
        `).join('');
    }

    openModal("squadModal");
}

/* ==========================================================================
   3. PLAYERS & MARKET
   ========================================================================== */

function renderMarketPage() {
    const searchName = document.getElementById("marketSearchName").value.toLowerCase();
    const filterTeam = document.getElementById("marketFilterTeam").value;
    const minOvr = parseInt(document.getElementById("marketMinOvr").value) || 0;
    const maxOvr = parseInt(document.getElementById("marketMaxOvr").value) || 100;
    const minValue = parseInt(document.getElementById("marketMinValue").value) || 0;
    const maxValue = parseInt(document.getElementById("marketMaxValue").value) || 999;

    const filtered = state.players.filter(p => {
        const matchesName = p.name.toLowerCase().includes(searchName);
        let matchesTeam = true;
        if (filterTeam === "free") matchesTeam = p.teamId === null;
        else if (filterTeam !== "all") matchesTeam = p.teamId === parseInt(filterTeam);

        const matchesOvr = p.overall >= minOvr && p.overall <= maxOvr;
        const matchesVal = p.value >= minValue && p.value <= maxValue;

        return matchesName && matchesTeam && matchesOvr && matchesVal;
    });

    const tbody = document.getElementById("marketPlayersTable");
    if (filtered.length === 0) {
        tbody.innerHTML = "<tr><td colspan='8' class='text-muted'>Aradığınız kriterlere uygun oyuncu bulunamadı.</td></tr>";
        return;
    }

    tbody.innerHTML = filtered.map(p => {
        const team = getTeamById(p.teamId);
        return `
            <tr>
                <td><strong>${p.name}</strong></td>
                <td><span class="ovr-badge">${p.overall}</span></td>
                <td>${team ? `<span class="badge badge-blue">${team.name}</span>` : '<span class="badge badge-gold">Serbest</span>'}</td>
                <td><strong>${p.value}M €</strong></td>
                <td>${p.goals}</td>
                <td>${p.assists}</td>
                <td>${p.cleanSheets}</td>
                <td>
                    <button class="btn btn-gold btn-sm" onclick="openTransferForPlayer(${p.id})"><i class="fa-solid fa-paper-plane"></i> Teklif Ver</button>
                </td>
            </tr>
        `;
    }).join('');
}

function openAddPlayerModal() {
    openModal("addPlayerModal");
}

function handleCreatePlayer(e) {
    e.preventDefault();
    const name = document.getElementById("newPlayerName").value.trim();
    const ovr = parseInt(document.getElementById("newPlayerOvr").value);
    const val = parseInt(document.getElementById("newPlayerValue").value);
    const teamVal = document.getElementById("newPlayerTeam").value;
    const teamId = teamVal === "free" ? null : parseInt(teamVal);

    const newPlayer = {
        id: Date.now(),
        name,
        overall: ovr,
        value: val,
        teamId: teamId,
        goals: 0,
        assists: 0,
        cleanSheets: 0
    };

    state.players.push(newPlayer);
    addNews(`🆕 Oyuncu pazarına yeni bir yetenek eklendi: ${name} (${ovr} OVR - ${val}M €)`);
    saveData();
    closeModal("addPlayerModal");
    showToast(`${name} başarıyla oyuncu pazarına eklendi!`);
}

/* ==========================================================================
   4. TRANSFERS & SYSTEM LOGIC
   ========================================================================== */

function renderTransfersPage() {
    const seasonFilter = document.getElementById("transferFilterSeason").value;
    const tbody = document.getElementById("transferHistoryTable");

    let list = state.transfers;
    if (seasonFilter !== "all") {
        list = list.filter(t => t.season === parseInt(seasonFilter));
    }

    if (list.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7' class='text-muted'>Henüz transfer kaydı bulunmuyor.</td></tr>";
        return;
    }

    tbody.innerHTML = list.map(tr => {
        const p = getPlayerById(tr.playerId);
        const fromT = getTeamById(tr.fromTeam);
        const toT = getTeamById(tr.toTeam);

        return `
            <tr>
                <td>${tr.date} (Sezon ${tr.season})</td>
                <td><strong>${p ? p.name : 'Bilinmiyor'}</strong></td>
                <td>${fromT ? fromT.name : 'Serbest'}</td>
                <td><strong>${toT ? toT.name : 'Serbest'}</strong></td>
                <td><span class="badge badge-purple">${tr.type}</span></td>
                <td class="text-green"><strong>${tr.price}M €</strong></td>
                <td>
                    <button class="btn btn-red-outline btn-sm" onclick="revertTransfer(${tr.id})"><i class="fa-solid fa-rotate-left"></i> Geri Al</button>
                </td>
            </tr>
        `;
    }).reverse().join('');
}

function openQuickTransferModal() {
    openTransferModal('normal');
}

function openTransferForPlayer(playerId) {
    openTransferModal('normal', playerId);
}

function openTransferModal(type, targetPlayerId = null) {
    const modalContent = document.getElementById("transferModalContent");
    const title = document.getElementById("transferModalTitle");

    let playerOptions = state.players.map(p => `<option value="${p.id}" ${p.id === targetPlayerId ? 'selected' : ''}>${p.name} (OVR: ${p.overall} - Değer: ${p.value}M € - ${getTeamName(p.teamId)})</option>`).join('');
    let teamOptions = state.teams.map(t => `<option value="${t.id}">${t.name} (Bütçe: ${t.budget}M €)</option>`).join('');

    if (type === 'normal') {
        title.innerText = "Normal Transfer İletişimi";
        modalContent.innerHTML = `
            <form onsubmit="handleNormalTransfer(event)">
                <div class="form-group">
                    <label>Oyuncu Seçin</label>
                    <select id="trPlayerId" required onchange="updateMinPriceNotice()">${playerOptions}</select>
                </div>
                <div class="form-group">
                    <label>Alıcı Takım</label>
                    <select id="trToTeamId" required>${teamOptions}</select>
                </div>
                <div class="form-group">
                    <label>Bonservis Teklifi (M€)</label>
                    <input type="number" id="trPrice" required>
                    <small id="minPriceNotice" class="text-muted mt-5"></small>
                </div>
                <button type="submit" class="btn btn-gold full-width mt-15">Transferi Onayla ve Tamamla</button>
            </form>
        `;
        updateMinPriceNotice();
    } else if (type === 'panic') {
        title.innerText = "Panik Transfer (%125 Zorunlu Fiyat)";
        modalContent.innerHTML = `
            <form onsubmit="handlePanicTransfer(event)">
                <div class="form-group">
                    <label>Oyuncu Seçin</label>
                    <select id="trPanicPlayerId" required onchange="updatePanicPriceNotice()">${playerOptions}</select>
                </div>
                <div class="form-group">
                    <label>Alıcı Takım (Panik Kullanacak)</label>
                    <select id="trPanicToTeamId" required>${teamOptions}</select>
                </div>
                <div class="form-group">
                    <label>Hesaplanan Panik Transfer Ücreti</label>
                    <input type="number" id="trPanicPrice" readonly>
                </div>
                <button type="submit" class="btn btn-gold full-width mt-15">Panik Hakkını Kullan & Transfer Et</button>
            </form>
        `;
        updatePanicPriceNotice();
    } else if (type === 'auction') {
        title.innerText = "Açık Artırma Usulü Satış";
        modalContent.innerHTML = `
            <form onsubmit="handleAuctionTransfer(event)">
                <div class="form-group">
                    <label>Satışa Çıkarılan Oyuncu</label>
                    <select id="trAuctionPlayerId" required>${playerOptions}</select>
                </div>
                <div class="form-group">
                    <label>Kazanan (En Yüksek Teklifi Veren Takım)</label>
                    <select id="trAuctionToTeamId" required>${teamOptions}</select>
                </div>
                <div class="form-group">
                    <label>Son İhale Tutarı (M€)</label>
                    <input type="number" id="trAuctionPrice" required>
                </div>
                <button type="submit" class="btn btn-gold full-width mt-15">Açık Artırma Sonucunu İşle</button>
            </form>
        `;
    } else if (type === 'swap') {
        title.innerText = "Oyuncu Takası";
        modalContent.innerHTML = `
            <form onsubmit="handleSwapTransfer(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>Takım A Oyuncusu</label>
                        <select id="swapPlayerA" required></select>
                    </div>
                    <div class="form-group">
                        <label>Takım B Oyuncusu</label>
                        <select id="swapPlayerB" required></select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Ek Para Veren Takım (Varsa)</label>
                    <select id="swapMoneyPayer">
                        <option value="none">Ek Para Yok</option>
                        ${teamOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label>Ek Para Miktarı (M€)</label>
                    <input type="number" id="swapMoneyAmount" value="0" min="0">
                </div>
                <button type="submit" class="btn btn-gold full-width mt-15">Takas İşlemini Gerçekleştir</button>
            </form>
        `;
        populateSwapPlayers();
    }

    openModal("transferModal");
}

function updateMinPriceNotice() {
    const pId = parseInt(document.getElementById("trPlayerId").value);
    const p = getPlayerById(pId);
    if (p) {
        document.getElementById("minPriceNotice").innerText = `⚠️ Kural Gereği Minimum Teklif: ${p.value}M € (Piyasa Değeri)`;
        document.getElementById("trPrice").min = p.value;
        document.getElementById("trPrice").value = p.value;
    }
}

function updatePanicPriceNotice() {
    const pId = parseInt(document.getElementById("trPanicPlayerId").value);
    const p = getPlayerById(pId);
    if (p) {
        const panicPrice = Math.ceil(p.value * (state.settings.panicRate / 100));
        document.getElementById("trPanicPrice").value = panicPrice;
    }
}

function populateSwapPlayers() {
    const selectA = document.getElementById("swapPlayerA");
    const selectB = document.getElementById("swapPlayerB");

    const options = state.players.filter(p => p.teamId !== null).map(p => `
        <option value="${p.id}">${p.name} (${getTeamName(p.teamId)} - Değer: ${p.value}M €)</option>
    `).join('');

    selectA.innerHTML = options;
    selectB.innerHTML = options;
}

/* TRANSFER LOGIC HANDLERS WITH STRICT VALIDATION */

function handleNormalTransfer(e) {
    e.preventDefault();
    const playerId = parseInt(document.getElementById("trPlayerId").value);
    const toTeamId = parseInt(document.getElementById("trToTeamId").value);
    const price = parseInt(document.getElementById("trPrice").value);

    executeTransfer(playerId, toTeamId, price, "Normal Transfer");
}

function handlePanicTransfer(e) {
    e.preventDefault();
    const playerId = parseInt(document.getElementById("trPanicPlayerId").value);
    const toTeamId = parseInt(document.getElementById("trPanicToTeamId").value);
    const price = parseInt(document.getElementById("trPanicPrice").value);

    const buyer = getTeamById(toTeamId);
    if (buyer.panicUsed) {
        showToast("HATA: Bu takım bu sezonki Panik Transfer hakkını zaten kullandı!", "error");
        return;
    }

    if (executeTransfer(playerId, toTeamId, price, "Panik Transfer")) {
        buyer.panicUsed = true;
    }
}

function handleAuctionTransfer(e) {
    e.preventDefault();
    const playerId = parseInt(document.getElementById("trAuctionPlayerId").value);
    const toTeamId = parseInt(document.getElementById("trAuctionToTeamId").value);
    const price = parseInt(document.getElementById("trAuctionPrice").value);

    executeTransfer(playerId, toTeamId, price, "Açık Artırma");
}

function handleSwapTransfer(e) {
    e.preventDefault();
    const playerAId = parseInt(document.getElementById("swapPlayerA").value);
    const playerBId = parseInt(document.getElementById("swapPlayerB").value);
    const payerVal = document.getElementById("swapMoneyPayer").value;
    const extraMoney = parseInt(document.getElementById("swapMoneyAmount").value) || 0;

    const playerA = getPlayerById(playerAId);
    const playerB = getPlayerById(playerBId);

    if (playerA.teamId === playerB.teamId) {
        showToast("HATA: Aynı takımın iki oyuncusu birbiriyle takas edilemez!", "error");
        return;
    }

    const teamA = getTeamById(playerA.teamId);
    const teamB = getTeamById(playerB.teamId);

    if (payerVal !== "none" && extraMoney > 0) {
        const payerId = parseInt(payerVal);
        const payerTeam = getTeamById(payerId);
        if (payerTeam.budget < extraMoney) {
            showToast(`HATA: ${payerTeam.name} takımının kasasında ${extraMoney}M € bulunmuyor!`, "error");
            return;
        }

        const receiverTeam = payerId === teamA.id ? teamB : teamA;
        payerTeam.budget -= extraMoney;
        receiverTeam.budget += extraMoney;
    }

    // Swap teams
    const tempTeam = playerA.teamId;
    playerA.teamId = playerB.teamId;
    playerB.teamId = tempTeam;

    // Record Transfers
    const transferRecord = {
        id: Date.now(),
        season: state.season,
        playerId: playerA.id,
        fromTeam: teamA.id,
        toTeam: teamB.id,
        price: extraMoney,
        type: "Takas",
        date: new Date().toLocaleDateString("tr-TR")
    };
    state.transfers.push(transferRecord);

    addNews(`🔄 TAKAS! ${teamA.name} ve ${teamB.name} takımları ${playerA.name} ile ${playerB.name} oyuncularını takas etti!`);
    saveData();
    closeModal("transferModal");
    showToast("Takas transferi başarıyla gerçekleşti!");
}

function executeTransfer(playerId, toTeamId, price, type) {
    const player = getPlayerById(playerId);
    const toTeam = getTeamById(toTeamId);

    if (!player || !toTeam) {
        showToast("HATA: Geçersiz oyuncu veya alıcı takım!", "error");
        return false;
    }

    if (player.teamId === toTeamId) {
        showToast("HATA: Oyuncu zaten bu takımda bulunuyor!", "error");
        return false;
    }

    if (type === "Normal Transfer" && price < player.value) {
        showToast(`HATA: Normal transferde minimum teklif oyuncu değeri (${player.value}M €) kadar olmalıdır!`, "error");
        return false;
    }

    if (toTeam.budget < price) {
        showToast(`HATA: ${toTeam.name} takımının bütçesi yetersiz! Kasa: ${toTeam.budget}M €, İstenen: ${price}M €`, "error");
        return false;
    }

    const fromTeam = getTeamById(player.teamId);

    // Bütçe Güncellemeleri
    toTeam.budget -= price;
    if (fromTeam) {
        fromTeam.budget += price;
    }

    // Oyuncunun Yeni Takımı
    player.teamId = toTeamId;

    // Transfer Kaydı
    const transferRecord = {
        id: Date.now(),
        season: state.season,
        playerId: player.id,
        fromTeam: fromTeam ? fromTeam.id : null,
        toTeam: toTeam.id,
        price: price,
        type: type,
        date: new Date().toLocaleDateString("tr-TR")
    };

    state.transfers.push(transferRecord);

    // Haber Ekle
    addNews(`🔥 TRANSFER BOMBASI! ${player.name}, ${fromTeam ? fromTeam.name : 'Serbest'} kulübünden ${toTeam.name} kulübüne ${price}M € bedelle transfer oldu! (${type})`);

    saveData();
    closeModal("transferModal");
    showToast(`${player.name} başarıyla ${toTeam.name} takımına transfer edildi!`);
    return true;
}

function revertTransfer(transferId) {
    const trIndex = state.transfers.findIndex(t => t.id === transferId);
    if (trIndex === -1) return;

    const tr = state.transfers[trIndex];
    const player = getPlayerById(tr.playerId);
    const fromTeam = getTeamById(tr.fromTeam);
    const toTeam = getTeamById(tr.toTeam);

    // Bütçeleri Eskiye Döndür
    if (toTeam) toTeam.budget += tr.price;
    if (fromTeam) fromTeam.budget -= tr.price;

    // Oyuncuyu Eski Takımına Ver
    if (player) player.teamId = tr.fromTeam;

    state.transfers.splice(trIndex, 1);
    addNews(`↩️ Transfer İptal Edildi: ${player ? player.name : 'Oyuncu'} eski takımına iade edildi.`);
    saveData();
    showToast("Transfer işlemi başarıyla geri alındı!");
}

/* ==========================================================================
   5. STANDINGS & MATCHES
   ========================================================================== */

function renderStandingsPage() {
    const tbody = document.getElementById("standingsTableBody");

    // Sort: Puan, Averaj, Atılan Gol
    const sortedTeams = [...state.teams].sort((a, b) => {
        const pA = (a.wins * 3) + a.draws;
        const pB = (b.wins * 3) + b.draws;
        if (pB !== pA) return pB - pA;

        const avA = a.goalsFor - a.goalsAgainst;
        const avB = b.goalsFor - b.goalsAgainst;
        if (avB !== avA) return avB - avA;

        return b.goalsFor - a.goalsFor;
    });

    tbody.innerHTML = sortedTeams.map((t, index) => {
        const played = t.wins + t.draws + t.losses;
        const points = (t.wins * 3) + t.draws;
        const av = t.goalsFor - t.goalsAgainst;

        return `
            <tr>
                <td><strong>${index + 1}</strong></td>
                <td><strong>${t.name} FC</strong></td>
                <td>${played}</td>
                <td>${t.wins}</td>
                <td>${t.draws}</td>
                <td>${t.losses}</td>
                <td>${t.goalsFor}</td>
                <td>${t.goalsAgainst}</td>
                <td>${av > 0 ? '+' + av : av}</td>
                <td><strong class="highlight-gold" style="font-size: 15px;">${points}</strong></td>
            </tr>
        `;
    }).join('');
}

function renderMatchesPage() {
    const tbody = document.getElementById("matchesTableBody");
    if (state.matches.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7' class='text-muted'>Henüz oynanmış maç bulunmuyor.</td></tr>";
        return;
    }

    tbody.innerHTML = state.matches.map(m => {
        const home = getTeamById(m.homeTeam);
        const away = getTeamById(m.awayTeam);

        return `
            <tr>
                <td>${m.date}</td>
                <td>Sezon ${m.season}</td>
                <td><strong>${home ? home.name : 'Bilinmiyor'}</strong></td>
                <td><span class="badge badge-gold" style="font-size: 14px;">${m.homeGoals} - ${m.awayGoals}</span></td>
                <td><strong>${away ? away.name : 'Bilinmiyor'}</strong></td>
                <td><span class="text-green">+${m.homeGoals > m.awayGoals ? state.settings.winReward : m.homeGoals === m.awayGoals ? state.settings.drawReward : 0}M € / +${m.awayGoals > m.homeGoals ? state.settings.winReward : m.homeGoals === m.awayGoals ? state.settings.drawReward : 0}M €</span></td>
                <td>
                    <button class="btn btn-red-outline btn-sm" onclick="deleteMatch(${m.id})"><i class="fa-solid fa-trash"></i> Sil</button>
                </td>
            </tr>
        `;
    }).reverse().join('');
}

function openAddMatchModal() {
    openModal("matchModal");
}

function handleAddMatch(e) {
    e.preventDefault();
    const homeId = parseInt(document.getElementById("matchHomeTeam").value);
    const awayId = parseInt(document.getElementById("matchAwayTeam").value);
    const homeGoals = parseInt(document.getElementById("matchHomeGoals").value);
    const awayGoals = parseInt(document.getElementById("matchAwayGoals").value);

    if (homeId === awayId) {
        showToast("HATA: Takım kendisiyle maç yapamaz!", "error");
        return;
    }

    const home = getTeamById(homeId);
    const away = getTeamById(awayId);

    // Gol ve Averaj Güncelleme
    home.goalsFor += homeGoals;
    home.goalsAgainst += awayGoals;
    away.goalsFor += awayGoals;
    away.goalsAgainst += homeGoals;

    // Galibiyet / Beraberlik / Bütçe Ödülü İşleme
    if (homeGoals > awayGoals) {
        home.wins += 1;
        away.losses += 1;
        home.budget += state.settings.winReward;
        addFinanceLog(home.id, state.settings.winReward, "income", `Maç Galibiyet Ödülü (${home.name} ${homeGoals}-${awayGoals} ${away.name})`);
    } else if (awayGoals > homeGoals) {
        away.wins += 1;
        home.losses += 1;
        away.budget += state.settings.winReward;
        addFinanceLog(away.id, state.settings.winReward, "income", `Maç Galibiyet Ödülü (${away.name} ${awayGoals}-${homeGoals} ${home.name})`);
    } else {
        home.draws += 1;
        away.draws += 1;
        home.budget += state.settings.drawReward;
        away.budget += state.settings.drawReward;
        addFinanceLog(home.id, state.settings.drawReward, "income", `Maç Beraberlik Ödülü (${home.name} ${homeGoals}-${awayGoals} ${away.name})`);
        addFinanceLog(away.id, state.settings.drawReward, "income", `Maç Beraberlik Ödülü (${away.name} ${awayGoals}-${homeGoals} ${home.name})`);
    }

    const matchRecord = {
        id: Date.now(),
        season: state.season,
        homeTeam: homeId,
        awayTeam: awayId,
        homeGoals: homeGoals,
        awayGoals: awayGoals,
        date: new Date().toLocaleDateString("tr-TR")
    };

    state.matches.push(matchRecord);
    addNews(`⚽ MAÇ SONUCU: ${home.name} ${homeGoals} - ${awayGoals} ${away.name}`);

    saveData();
    closeModal("matchModal");
    showToast("Maç sonucu başarıyla işlendi ve puan durumu güncellendi!");
}

function deleteMatch(matchId) {
    const idx = state.matches.findIndex(m => m.id === matchId);
    if (idx === -1) return;

    const m = state.matches[idx];
    const home = getTeamById(m.homeTeam);
    const away = getTeamById(m.awayTeam);

    // İstatistikleri Geri Al
    home.goalsFor -= m.homeGoals;
    home.goalsAgainst -= m.awayGoals;
    away.goalsFor -= m.awayGoals;
    away.goalsAgainst -= m.homeGoals;

    if (m.homeGoals > m.awayGoals) {
        home.wins -= 1;
        away.losses -= 1;
        home.budget -= state.settings.winReward;
    } else if (m.awayGoals > m.homeGoals) {
        away.wins -= 1;
        home.losses -= 1;
        away.budget -= state.settings.winReward;
    } else {
        home.draws -= 1;
        away.draws -= 1;
        home.budget -= state.settings.drawReward;
        away.budget -= state.settings.drawReward;
    }

    state.matches.splice(idx, 1);
    saveData();
    showToast("Maç silindi ve puan durumu/bütçeler geri revize edildi!");
}

/* ==========================================================================
   6. FINANCE
   ========================================================================== */

function renderFinancePage() {
    const grid = document.getElementById("financeTeamsGrid");
    grid.innerHTML = "";

    state.teams.forEach(t => {
        const netBudget = t.budget - t.debt;
        grid.innerHTML += `
            <div class="finance-card">
                <div class="finance-card-header">${t.name} FC Finans Özeti</div>
                <div class="team-stats-list">
                    <div class="stat-row"><span>Kasa Bütçesi:</span><span class="text-green">${t.budget}M €</span></div>
                    <div class="stat-row"><span>Toplam Borç:</span><span class="${t.debt > 0 ? 'text-red' : ''}">${t.debt}M €</span></div>
                    <div class="stat-row"><span>Net Bütçe:</span><span><strong>${netBudget}M €</strong></span></div>
                    <div class="stat-row"><span>Maksimum Borç Limiti:</span><span>${state.settings.maxDebt}M €</span></div>
                </div>
            </div>
        `;
    });

    const tbody = document.getElementById("financeLogsTableBody");
    if (state.financeLogs.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6' class='text-muted'>Henüz finans hareketi bulunmuyor.</td></tr>";
        return;
    }

    tbody.innerHTML = state.financeLogs.map(log => {
        const team = getTeamById(log.teamId);
        return `
            <tr>
                <td>${log.date}</td>
                <td><strong>${team ? team.name : 'Genel'}</strong></td>
                <td><span class="badge ${log.type === 'income' ? 'badge-green' : 'badge-gold'}">${log.type === 'income' ? 'Gelir / Ekleme' : 'Gider / Borç'}</span></td>
                <td class="${log.type === 'income' ? 'text-green' : 'text-red'}"><strong>${log.amount}M €</strong></td>
                <td>${log.reason}</td>
                <td>
                    <button class="btn btn-red-outline btn-sm" onclick="deleteFinanceLog(${log.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    }).reverse().join('');
}

function addFinanceLog(teamId, amount, type, reason) {
    state.financeLogs.push({
        id: Date.now(),
        teamId,
        amount,
        type,
        reason,
        date: new Date().toLocaleDateString("tr-TR")
    });
}

function deleteFinanceLog(logId) {
    const idx = state.financeLogs.findIndex(l => l.id === logId);
    if (idx !== -1) {
        state.financeLogs.splice(idx, 1);
        saveData();
        showToast("Finans kaydı silindi.");
    }
}

/* ==========================================================================
   7. HISTORY
   ========================================================================== */

function renderHistoryPage() {
    const champsList = document.getElementById("championsHistoryList");
    champsList.innerHTML = state.history.map(h => `
        <div class="news-item flex-between" style="border-left-color: var(--accent-gold); padding: 16px;">
            <div>
                <strong style="font-size: 16px; color: var(--accent-gold);">🏆 SEZON ${h.season} ŞAMPİYONU</strong>
                <h3 style="font-size: 22px; margin-top: 4px;">${h.championName.toUpperCase()}</h3>
            </div>
            <i class="fa-solid fa-trophy highlight-gold" style="font-size: 32px;"></i>
        </div>
    `).join('');
}

/* ==========================================================================
   8. ADMIN & SETTINGS
   ========================================================================== */

function renderSettingsPage() {
    document.getElementById("settingWinReward").value = state.settings.winReward;
    document.getElementById("settingDrawReward").value = state.settings.drawReward;
    document.getElementById("settingChamp1").value = state.settings.champ1;
    document.getElementById("settingChamp2").value = state.settings.champ2;
    document.getElementById("settingChamp3").value = state.settings.champ3;
    document.getElementById("settingChamp4").value = state.settings.champ4;
    document.getElementById("settingTopScorer").value = state.settings.topScorerReward;
    document.getElementById("settingTopAssist").value = state.settings.topAssistReward;
    document.getElementById("settingBestDef").value = state.settings.bestDefReward;
    document.getElementById("settingMaxDebt").value = state.settings.maxDebt;
    document.getElementById("settingDebtInterest").value = state.settings.debtInterestRate;
    document.getElementById("settingPanicRate").value = state.settings.panicRate;
}

function saveSettings(e) {
    e.preventDefault();
    state.settings.winReward = parseInt(document.getElementById("settingWinReward").value);
    state.settings.drawReward = parseInt(document.getElementById("settingDrawReward").value);
    state.settings.champ1 = parseInt(document.getElementById("settingChamp1").value);
    state.settings.champ2 = parseInt(document.getElementById("settingChamp2").value);
    state.settings.champ3 = parseInt(document.getElementById("settingChamp3").value);
    state.settings.champ4 = parseInt(document.getElementById("settingChamp4").value);
    state.settings.topScorerReward = parseInt(document.getElementById("settingTopScorer").value);
    state.settings.topAssistReward = parseInt(document.getElementById("settingTopAssist").value);
    state.settings.bestDefReward = parseInt(document.getElementById("settingBestDef").value);
    state.settings.maxDebt = parseInt(document.getElementById("settingMaxDebt").value);
    state.settings.debtInterestRate = parseInt(document.getElementById("settingDebtInterest").value);
    state.settings.panicRate = parseInt(document.getElementById("settingPanicRate").value);

    saveData();
    showToast("Lig ve ödül ayarları başarıyla güncellendi!");
}

/* ADMIN MODAL HANDLERS */

function openAdminBudgetModal() { openModal("adminBudgetModal"); }
function openAdminDebtModal() { openModal("adminDebtModal"); }
function openAdminStatsModal() { openModal("adminStatsModal"); }
function openAdminValueModal() { openModal("adminValueModal"); }
function openAdminPointsModal() { openModal("adminPointsModal"); }

function handleAdminBudget(e) {
    e.preventDefault();
    const teamId = parseInt(document.getElementById("adminBudgetTeam").value);
    const amount = parseInt(document.getElementById("adminBudgetAmount").value);
    const reason = document.getElementById("adminBudgetReason").value.trim();

    const team = getTeamById(teamId);
    team.budget += amount;

    addFinanceLog(teamId, Math.abs(amount), amount >= 0 ? "income" : "expense", `Admin Manuel: ${reason}`);
    addNews(`💰 Finans Düzenlemesi: ${team.name} kasasına ${amount >= 0 ? '+' + amount : amount}M € işlendi (${reason})`);

    saveData();
    closeModal("adminBudgetModal");
    showToast("Bütçe işlemi başarıyla gerçekleştirildi!");
}

function handleAdminDebt(e) {
    e.preventDefault();
    const teamId = parseInt(document.getElementById("adminDebtTeam").value);
    const type = document.getElementById("adminDebtType").value;
    const amount = parseInt(document.getElementById("adminDebtAmount").value);

    const team = getTeamById(teamId);

    if (type === "take") {
        if (team.debt + amount > state.settings.maxDebt) {
            showToast(`HATA: Takımın borcu maksimum borç limitini (${state.settings.maxDebt}M €) aşamaz! Mevcut Borç: ${team.debt}M €`, "error");
            return;
        }
        team.debt += amount;
        team.budget += amount;
        addFinanceLog(teamId, amount, "income", "Borç Alındı");
    } else {
        if (team.budget < amount) {
            showToast("HATA: Takım kasasında bu kadar borç ödeyecek bütçe yok!", "error");
            return;
        }
        if (amount > team.debt) {
            showToast("HATA: Ödenmek istenen miktar mevcut borçtan fazla olamaz!", "error");
            return;
        }
        team.debt -= amount;
        team.budget -= amount;
        addFinanceLog(teamId, amount, "expense", "Borç Geri Ödendi");
    }

    saveData();
    closeModal("adminDebtModal");
    showToast("Borç işlemi başarıyla tamamlandı!");
}

function handleAdminStats(e) {
    e.preventDefault();
    const pId = parseInt(document.getElementById("adminStatsPlayer").value);
    const player = getPlayerById(pId);

    player.goals = parseInt(document.getElementById("adminStatsGoals").value);
    player.assists = parseInt(document.getElementById("adminStatsAssists").value);
    player.cleanSheets = parseInt(document.getElementById("adminStatsCS").value);

    saveData();
    closeModal("adminStatsModal");
    showToast("Oyuncu istatistikleri güncellendi!");
}

function loadPlayerStatsToForm() {
    const pId = parseInt(document.getElementById("adminStatsPlayer").value);
    const p = getPlayerById(pId);
    if (p) {
        document.getElementById("adminStatsGoals").value = p.goals;
        document.getElementById("adminStatsAssists").value = p.assists;
        document.getElementById("adminStatsCS").value = p.cleanSheets;
    }
}

function handleAdminValue(e) {
    e.preventDefault();
    const pId = parseInt(document.getElementById("adminValuePlayer").value);
    const val = parseInt(document.getElementById("adminValueAmount").value);

    const player = getPlayerById(pId);
    const oldVal = player.value;
    player.value = val;

    addNews(`📈 Piyasa Değeri Güncellendi: ${player.name} (${oldVal}M € ➔ ${val}M €)`);
    saveData();
    closeModal("adminValueModal");
    showToast("Piyasa değeri güncellendi!");
}

function handleAdminPoints(e) {
    e.preventDefault();
    const teamId = parseInt(document.getElementById("adminPointsTeam").value);
    const team = getTeamById(teamId);

    team.wins = parseInt(document.getElementById("adminWins").value);
    team.draws = parseInt(document.getElementById("adminDraws").value);
    team.losses = parseInt(document.getElementById("adminLosses").value);
    team.goalsFor = parseInt(document.getElementById("adminGA").value);
    team.goalsAgainst = parseInt(document.getElementById("adminGS").value);

    saveData();
    closeModal("adminPointsModal");
    showToast("Puan durumu ve istatistikler güncellendi!");
}

function loadTeamPointsToForm() {
    const teamId = parseInt(document.getElementById("adminPointsTeam").value);
    const t = getTeamById(teamId);
    if (t) {
        document.getElementById("adminWins").value = t.wins;
        document.getElementById("adminDraws").value = t.draws;
        document.getElementById("adminLosses").value = t.losses;
        document.getElementById("adminGA").value = t.goalsFor;
        document.getElementById("adminGS").value = t.goalsAgainst;
    }
}

/* SEASON END SYSTEM */

function finishSeason() {
    if (!confirm(`Sezon ${state.season} tamamlanacak. Ödüller dağıtılacak ve borç faizleri uygulanacak. Emin misiniz?`)) return;

    // Rank teams by Points & GD
    const sortedTeams = [...state.teams].sort((a, b) => {
        const pA = (a.wins * 3) + a.draws;
        const pB = (b.wins * 3) + b.draws;
        if (pB !== pA) return pB - pA;
        return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
    });

    const champ = sortedTeams[0];
    const second = sortedTeams[1];
    const third = sortedTeams[2];
    const fourth = sortedTeams[3];

    // Award Prize Moneys
    champ.budget += state.settings.champ1;
    champ.championships += 1;
    second.budget += state.settings.champ2;
    third.budget += state.settings.champ3;
    fourth.budget += state.settings.champ4;

    // Apply Debt Interests (%20)
    state.teams.forEach(t => {
        if (t.debt > 0) {
            const interest = Math.ceil(t.debt * (state.settings.debtInterestRate / 100));
            t.debt += interest;
        }
        // Reset Panic Uses
        t.panicUsed = false;
        // Reset match records
        t.wins = 0;
        t.draws = 0;
        t.losses = 0;
        t.goalsFor = 0;
        t.goalsAgainst = 0;
    });

    // Record Champion in History
    state.history.push({
        season: state.season,
        championId: champ.id,
        championName: champ.name
    });

    addNews(`🏆 SEZON ${state.season} BİTTİ! ŞAMPİYON: ${champ.name.toUpperCase()} FC! 🎉`);

    // Increment Season
    state.season += 1;

    saveData();
    showToast(`Sezon başarıyla tamamlandı! Sezon ${state.season} başladı.`);
}

/* BACKUP & RESTORE */

function exportDataJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `fifa4_league_backup_season_${state.season}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importDataJSON(e) {
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
        try {
            const importedState = JSON.parse(event.target.result);
            state = importedState;
            saveData();
            showToast("Veriler JSON dosyasından başarıyla yüklendi!");
        } catch (err) {
            showToast("HATA: Geçersiz JSON dosyası!", "error");
        }
    };
    fileReader.readAsText(e.target.files[0]);
}

function resetAllData() {
    if (confirm("Tüm lig verileri silinecek ve başlangıç durumuna dönülecek. Onaylıyor musunuz?")) {
        resetToDefaultState();
        showToast("Sistem tamamen varsayılan verilere sıfırlandı!");
    }
}

/* ==========================================================================
   HELPERS & UTILS
   ========================================================================== */

function getTeamById(id) {
    return state.teams.find(t => t.id === parseInt(id));
}

function getPlayerById(id) {
    return state.players.find(p => p.id === parseInt(id));
}

function getTeamName(teamId) {
    const team = getTeamById(teamId);
    return team ? team.name : "Serbest";
}

function getTeamSquadValue(teamId) {
    return state.players.filter(p => p.teamId === teamId).reduce((acc, p) => acc + p.value, 0);
}

function getTeamColor(teamId) {
    const colors = { 1: "#e74c3c", 2: "#3498db", 3: "#9b59b6", 4: "#2ecc71" };
    return colors[teamId] || "#e5b842";
}

function addNews(text) {
    state.news.push({
        text,
        date: new Date().toLocaleDateString("tr-TR")
    });
}

function validateMatchTeams() {
    const home = document.getElementById("matchHomeTeam").value;
    const away = document.getElementById("matchAwayTeam").value;
    if (home === away) {
        showToast("Uyarı: Ev sahibi ve deplasman takımı aynı seçilemez!", "error");
    }
}

function populateSelectOptions() {
    const teamSelects = [
        "matchHomeTeam", "matchAwayTeam", "adminBudgetTeam",
        "adminDebtTeam", "adminPointsTeam"
    ];

    const teamOptionsHTML = state.teams.map(t => `<option value="${t.id}">${t.name} FC (${t.owner})</option>`).join('');

    teamSelects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = teamOptionsHTML;
    });

    const playerSelects = ["adminStatsPlayer", "adminValuePlayer"];
    const playerOptionsHTML = state.players.map(p => `<option value="${p.id}">${p.name} (${getTeamName(p.teamId)})</option>`).join('');

    playerSelects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = playerOptionsHTML;
    });

    loadPlayerStatsToForm();
    loadTeamPointsToForm();
}