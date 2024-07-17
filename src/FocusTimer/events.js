import * as actions from "./actions.js";
import * as elements from "./elements.js";

function registerControls() {
 
    elements.controls.addEventListener('click', (event) => {
        //? buscando o data-action do html
        const action = event.target.dataset.action

        if (typeof actions[action] != "function") {
            return
        }
        
        actions[action]()
       

        
 })
    
}
function registerSounds() {
 
    elements.sounds.addEventListener('click', (event) => {
        //? buscando o data-action do html

        const actionSound = event.target.dataset.action
        if (typeof actions[actionSound] != "function") {
            return
        }

        actions[actionSound]()

        
 })
    
}

export { registerControls, registerSounds };

