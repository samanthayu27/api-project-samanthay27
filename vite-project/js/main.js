import '../styles/style.css'
import { DOMselectors } from './domselectors';

const URL =`https://genshinlist.com/api/characters`;
 async function getData(URL) {
     try {
         const response = await fetch (URL);
       //requesting a response REST API's 
         if (response.status !=200) {
            throw new Error (response.statusText);
         }
       const data = await response.json();
        //converts response to JSON
        function makeacard (arr) {
            arr.forEach((data) => {
                DOMselectors.cardcontainer.insertAdjacentHTML(
                    "beforeend"
                    `<div class = "card">
                    <h2 class = "name"> ${data.name}</h2>
                    <h3 class = "description"> ${data.description}</h3>
                    <h3 class = "vision"> ${data.vision}</h3>
                    <h3 class = "weapon"> ${data.weapon}</h3>
                    </div>
                    `
                )
            }) 
        }
        makeacard(data)
         document.querySelector("h1").textContent = data.content;
    } catch (error) {
         console.log(error, "gg")
     }
     //similar to ifelse
 }
 getData(URL);

DOMselectors.changetheme.addEventListener("click", function(){
    if(document.body.classList.contains("greentheme")){
        document.body.classList.add("whitetheme")
        document.body.classList.remove("greentheme")
    }
    else{
        document.body.classList.add("greentheme")
        document.body.classList.remove("whitetheme")
    }
})