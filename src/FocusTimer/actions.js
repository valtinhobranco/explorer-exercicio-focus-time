import * as elements from "./elements.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";


let minutes = Number(elements.minutes.textContent) 

  


const toggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
}

const reset = () => {
    state.isRunning = false
   document.documentElement.classList.remove('running')
   timer.updateDisplay()
  
}
const addMinutes = () => {
  
  
   if (minutes >= 60) {
      return
   }

   minutes+= 5
   timer.updateDisplay(minutes)
  
}
const removeMinutes = () => {
  
  
   minutes -= 5
   if (minutes < 0) {
      return
   }
   
   timer.updateDisplay(minutes)
}



const toggleFloresta = () => {
   const getTheme = document.documentElement.classList.contains('floresta')

   getTheme ? sounds.audioFloresta.play() :  sounds.audioFloresta.pause()
   
   
   sounds.audioChuva.pause()
   sounds.audioCafeteria.pause()
   sounds.audioLareira.pause()
  
  

}

const toggleChuva = () => {
   const getTheme = document.documentElement.classList.contains('chuva')

   getTheme ? sounds.audioChuva.play() : sounds.audioChuva.pause()
   
   
   sounds.audioFloresta.pause()
   sounds.audioCafeteria.pause()
   sounds.audioLareira.pause()
}

const toggleCafeteria = () => {
   const getTheme = document.documentElement.classList.contains('cafeteria')

   getTheme ? sounds.audioCafeteria.play() : sounds.audioCafeteria.pause()
   
   sounds.audioFloresta.pause()
   sounds.audioChuva.pause()
   sounds.audioLareira.pause()
}

const toggleLareira = () => {
   const getTheme = document.documentElement.classList.contains('lareira')

   getTheme ? sounds.audioLareira.play() : sounds.audioLareira.pause()
   
   sounds.audioFloresta.pause()
   sounds.audioChuva.pause()
   sounds.audioCafeteria.pause()
  
}



export { addMinutes, removeMinutes, reset, toggleRunning, toggleCafeteria, toggleFloresta, toggleChuva, toggleLareira };

