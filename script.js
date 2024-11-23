import PLANETS from "./data.js"


// Task1: Generate all planets 

const planetsWrapper = document.querySelector(".planetsWrapper")
planetsWrapper.innerHTML = ``
for (let i = 0; i < PLANETS.length; i++) {

    planetsWrapper.innerHTML = planetsWrapper.innerHTML + `
    <div class="planet">
        <img src="./images/${PLANETS[i].name}.png" alt="">
        <table>
            <tr>
                <th>Name</th>
                <td>${PLANETS[i].name}</td>
            </tr>
            <tr>
                <th>Distance from Sun</th>
                <td>${PLANETS[i].distance} Million KM</td>
            </tr>
            <tr>
                <th>Orbital Period</th>
                <td>${PLANETS[i].orbital_period} Days</td>
            </tr>
            <tr>
                <th>Radius</th>
                <td>${PLANETS[i].radius} KM</td>
            </tr>
            <tr>
                <th>Length of Day</th>
                <td>${PLANETS[i].length_of_day}</td>
            </tr>
            <tr>
                <th>Gravity</th>
                <td>${PLANETS[i].gravity} m/s<sup>2</sup></td>
            </tr>
        </table>
                
    </div>
    
    `



}



// Task2: Planet Q/A
const accordionHeads = document.querySelectorAll(".accordionHead")
for (let i = 0; i < accordionHeads.length; i++) {
    const head = accordionHeads[i]
    const body = head.nextElementSibling
    head.addEventListener("click", () => {
        body.classList.toggle("showAccordion")
    })
}



// Task3: Sun Modal
const detailBtn = document.querySelector("#detailBtn")
detailBtn.addEventListener("click", () => {
    const sunModal = document.querySelector("#sunModal")
    sunModal.classList.remove("hideModal")

    const closeBtn = document.querySelector("#closeBtn")
    closeBtn.addEventListener("click", () => {
        sunModal.classList.add("hideModal")
    })


})