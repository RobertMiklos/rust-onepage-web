// Proměnný

const headingSpace = document.getElementById("headingSpace")
const mainSpace = document.getElementById("mainSpace")
const logoBtn = document.getElementById("logoBtn")
const navAboutBtn = document.getElementById("aboutBtn")
const navCommandsBtn = document.getElementById("commandBtn")
const navMapBtn = document.getElementById("mapBtn")
const navStatBtn = document.getElementById("statBtn")


// Funkce na vyčištění místa v HTML

function clearSpace() {
    headingSpace.innerHTML = ""
    mainSpace.innerHTML = ""

    headingSpace.className = ""
    mainSpace.className = ""
}


// Home page

async function loadHomePageData() {
    try {
        const response = await fetch("../../data/home_page.json")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

function pasteHomePageData(data) {
    let dataHeading = data.find(i => i.heading)
    let dataContetnt = data.find(i => i.content)
    let dataBtn = data.find(i => i.btn)

    mainSpace.classList.add("homePageMainSpace")

    const h1 = document.createElement("h1")
    h1.classList.add("homePageHeading")
    h1.textContent = dataHeading.heading
    headingSpace.appendChild(h1)

    const p = document.createElement("p")
    p.classList.add("homePageParagraph")
    p.textContent = dataContetnt.content
    mainSpace.appendChild(p)

    const btn = document.createElement("button")
    btn.classList.add("homePageButton")
    btn.textContent = dataBtn.btn
    mainSpace.appendChild(btn)

    btn.addEventListener("click", () => {
        startAboutPage()
    })
}

async function startHomePage() {
    clearSpace()
    const data = await loadHomePageData()
    pasteHomePageData(data)
}


// Event listener pro záložky 

logoBtn.addEventListener("click", () => {
    startHomePage()
})

navAboutBtn.addEventListener("click", () => {
    startAboutPage()
})

navCommandsBtn.addEventListener("click", () => {
    startCommandsPage()
})

navMapBtn.addEventListener("click", () => {
    startMapPage()
})

navStatBtn.addEventListener("click", () => {
    startStatPage()
})

// Spuštění celého kodu

startHomePage()


// About page

async function loadAboutPageData() {
    try {
        const response = await fetch("../../data/about.json")
        return await response.json()
    } catch (error){
        console.error(error)
    }
}

function pasteAboutPageData(data) {
    let dataHeading = data.find(i => i.heading)
    let dataDescription = data.find(i => i.content.description)
    let dataFeatures = data.find(i => i.content.features)

    const h1 = document.createElement("h1")
    h1.classList.add("aboutPageHeading")
    h1.textContent = dataHeading.heading
    headingSpace.appendChild(h1)

    const p = document.createElement("p")
    p.classList.add("aboutPageParagraph")
    p.textContent = dataDescription.content.description
    mainSpace.append(p)

    const ul = document.createElement("ul")
    ul.classList.add("aboutPageList")
    dataFeatures.content.features.forEach(i => {
        let li = document.createElement("li")
        li.textContent = i
        ul.appendChild(li)
    })
    mainSpace.appendChild(ul)
}

async function startAboutPage() {
    clearSpace()
    const data = await loadAboutPageData()
    pasteAboutPageData(data)
}


// Commands page

async function loadCommandsPageData() {
    try {
        const response = await fetch("../../data/commands.json")
        return await response.json() 
    } catch (error) {
        console.error(error)
    }
}

function pasteCommandsPageData(data) {
    let commandsObj = data[0]

    const h1 = document.createElement("h1")
    h1.classList.add("commandsPageHeading")
    h1.textContent = commandsObj.heading
    headingSpace.appendChild(h1)

    const ul = document.createElement("ul")
    ul.classList.add("commandsPageList")

    commandsObj.commands.forEach(i => {
        const li = document.createElement("li")
        const cmdSpan = document.createElement("span")
        cmdSpan.classList.add("commandCode")
        cmdSpan.textContent = i.command

        const descDiv = document.createElement("div")
        descDiv.textContent = i.description
        li.appendChild(cmdSpan)
        li.appendChild(descDiv)
        ul.appendChild(li)
    })

    mainSpace.appendChild(ul)
} 

async function startCommandsPage() {
    clearSpace()
    const data = await loadCommandsPageData()
    pasteCommandsPageData(data)
}


// Map page

async function loadMapPageData() {
    try {
        const data =  await fetch("../../data/map.json")
        return await data.json()
    } catch  (error) {
        console.error(error)
    }
}

function pasteMapPageData(data) {
    let pageObj = data[0]
    
    const h1 = document.createElement("h1")
    h1.textContent = pageObj.heading
    headingSpace.appendChild(h1)

    const mapWrapper = document.createElement("div")
    mapWrapper.classList.add("mapWrapper")

    const mapImg = document.createElement("img")
    mapImg.src = pageObj.mapImage
    mapImg.classList.add("mapImage")
    mapWrapper.appendChild(mapImg)

    const infobox = document.createElement("div")
    infobox.id = "monumentInfo"
    infobox.innerHTML = "<p>Klikni na bod na mapě pro detaily monumentu.</p>"

    pageObj.locations.forEach(i => {
        const point = document.createElement("div")
        point.classList.add("mapPoint")

        point.style.left = i.posX + "%"
        point.style.top = i.posY + "%"

        point.addEventListener("click", () => {
            showMonumentDetails(i, infobox)
        })
        
        mapWrapper.appendChild(point)
    })
    
    mainSpace.appendChild(mapWrapper)
    mainSpace.appendChild(infobox)
}

function showMonumentDetails(loc, con) {
    const d = loc.details
    let requirementsHTML = d.requirements ? d.requirements.join(", ") : "Nic není potřeba"

    con.innerHTML = `
        <div class="detailCard">
            <h2>${loc.name}</h2>
            <table>
                <tr><td> Radiace:</td><td>${d.radProtection}</td></tr>
                <tr><td> Tier:</td><td>${d.tier}</td></tr>
                <tr><td> Keycard:</td><td>${d.hasKeycard ? "ANO" : "NE"}</td></tr>
                <tr><td> Potřebuješ:</td><td>${requirementsHTML}</td></tr>
            </table>
        </div>    
    `
}

async function startMapPage() {
    clearSpace()
    const data = await loadMapPageData()
    pasteMapPageData(data)
}

// Stat page

async function loadStatPage() {
    try {
        const data = await fetch("../../data/stats.json")
        return await data.json()
    } catch (error) {
        console.error(error)
    }
}

function pasteStatPageData(data) {
    const h1 = document.createElement("h1")
    h1.textContent = "Statistiky hráčů"
    headingSpace.appendChild(h1)

    const tableContainer = document.createElement("div")
    tableContainer.classList.add("statsTableWrapper")
    mainSpace.appendChild(tableContainer)

    function renderTable(stats) {
        tableContainer. innerHTML = ""
        const table = document.createElement("table")
        table.classList.add("statsTable")

        table.innerHTML = `
            <thead>
                <tr>
                    <th>Jméno</th>
                    <th class="sortable" data-sort="kills">Killy ↕</th>
                    <th class="sortable" data-sort="deaths">Smrti ↕</th>
                    <th class="sortable" data-sort="shots_hit">Zásahy ↕</th>
                    <th class="sortable" data-sort="headshots">Headshoty ↕</th>
                </tr>
            </thead>
            <tbody>
                ${stats.map(player => `
                    <tr>
                        <td>${player.name}</td>
                        <td>${player.kills.toLocaleString()}</td>
                        <td>${player.deaths.toLocaleString()}</td>
                        <td>${player.shots_hit.toLocaleString()}</td>
                        <td>${player.headshots.toLocaleString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        tableContainer.appendChild(table)

        table.querySelectorAll(".sortable").forEach(i => {
            i.addEventListener("click", () => {
                const sortBy = i.getAttribute("data-sort")
                const sortedData = [...stats].sort((a, b) => b[sortBy] - a[sortBy])

                renderTable(sortedData)
            })
        })
    }

    renderTable(data)
}

async function startStatPage() {
    clearSpace()
    const data = await loadStatPage()
    pasteStatPageData(data)
}