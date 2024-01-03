import '../styles/style.css';
import { DOMselectors } from './domselectors';

const URL = 'https://genshinlist.com/api/characters';

async function getData(url) {
    try {
        const response = await fetch(URL);
        //requesting a response to REST API's 

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        //converts response to JSON 

        data.forEach(obj => {
            DOMselectors.cardcontainer.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                    <h2 class="name">${obj.name}</h2>
                    <h3 class="description">${obj.description}</h3>
                    <h3 class="vision">${obj.vision}</h3>
                    <h3 class="weapon">${obj.weapon}</h3>
                </div>`
            );
        });

    } catch (error) {
        console.log(error, "uhm idk dont ask me");
    }
}
//similar to an ifelse statement 

// Correct the function call to getData
getData(URL);

DOMselectors.changetheme.addEventListener("click", function () {
    if (document.body.classList.contains("greentheme")) {
        document.body.classList.add("whitetheme");
        document.body.classList.remove("greentheme");
    } else {
        document.body.classList.add("greentheme");
        document.body.classList.remove("whitetheme");
    }
});
