// Proměnný

const headingSpace = document.getElementById("headingSpace")
const mainSpace = document.getElementById("mainSpace")
const logoBtn = document.getElementById("logoBtn")


// Funkce na vyčištění místa v HTML

function clearSpace() {
    headingSpace.innerHTML = ""
    mainSpace.innerHTML = ""
}


// Home page

    // Funkce na načtení dat

async function loadHomePageData() {
    try {
        const response = await fetch("../../data/home_page.json")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

    // Funkce na zvolení, vytvoření a přidání prvků do HTML

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

}

async function startHomePage() {
    clearSpace()
    const data = await loadHomePageData()
    pasteHomePageData(data)
}


// Event Listenery

logoBtn.addEventListener("click", () => {
    startHomePage()
})


startHomePage()