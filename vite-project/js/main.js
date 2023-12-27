import '../styles/style.css'
import { DOMselectors } from './domselectors';
//need to import domselectors 
const URL ="https://gsi.fly.dev/";

DOMselectors.container.addEventListener("")

function makecard (){
    let a = DOMselectors.name.value;
    let b = DOMselectors.rarity.value;
    let c = DOMselectors.vision.value;
    let d = DOMselectors.weapon.value;

    DOMselectors.card.insertAdjacentElement("beforeend",
    `<div class = "card">
    <h3> name: ${a}</h3>
    <h3> rarity: ${b}</h3>
    <h3> vision: ${c}</h3>
    <h3> weapon: ${d}</h3>
    </div>`);
}

// async function getData(URL) {
//     try {
//         const response = await fetch (URL);
//         //requesting a response REST API's 
//         if (response.status != 200) {
//             throw new Error (response.statusText);
//         }
//         const data = await response.json();
//         //converts response to JSON
//         document.querySelector("h1").textContent = data.content;
//     } catch (error) {
//         console.log(error, "gg")
//     }
//     //similar to ifelse
// }
// getData(URL);