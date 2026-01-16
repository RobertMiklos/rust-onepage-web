// Proměnný

const headingSpace = document.getElementById("headingSpace")
const mainSpace = document.getElementById("mainSpace")
const logoBtn = document.getElementById("logoBtn")
const navAboutBtn = document.getElementById("aboutBtn")
const navCommandsBtn = document.getElementById("commandBtn")


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

    // commandsObj.commands.forEach(i => {
    //     const li = document.createElement("li")
    //     const cmdSpan = document.createElement("span")
    //     li.textContent = i.command

    //     const descText = document.createTextNode(` - ${i.description}`)
    //     li.appendChild(cmdSpan)
    //     li.appendChild(descText)
    //     ul.appendChild(li)
    // })

    

    mainSpace.appendChild(ul)
} 

async function startCommandsPage() {
    clearSpace()
    const data = await loadCommandsPageData()
    pasteCommandsPageData(data)
}