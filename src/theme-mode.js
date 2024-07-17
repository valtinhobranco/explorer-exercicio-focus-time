
import * as sounds from "./FocusTimer/sounds.js";
let darkMode = true

const buttonToggleTree = document.querySelector(".theme-tree")
const buttonToggleCloud = document.querySelector(".theme-cloud")
const buttonToggleStorefront = document.querySelector(".theme-storefront")
const buttonToggleFire = document.querySelector(".theme-fire")




buttonToggleTree.addEventListener('click', (event) => {

   
    //? add theme
    document.documentElement.classList.toggle('floresta')
    document.documentElement.classList.remove('chuva', 'cafeteria', 'lareira')
    
    //? active button theme
    buttonToggleTree.classList.toggle('active')

 
    
    //? remove active button theme
    buttonToggleCloud.classList.remove('active')
    buttonToggleStorefront.classList.remove('active')
    buttonToggleFire.classList.remove('active')

    buttonToggleTree.classList.contains('active') ? darkMode = true : darkMode = false 

    const mode = darkMode ? 'ativado' : 'desativado'
    event.currentTarget.querySelector('span').textContent = `Tema Floresta ${mode}!`;

  
    
})

buttonToggleCloud.addEventListener('click', (event) => {
    //? add theme
    document.documentElement.classList.toggle('chuva')
    document.documentElement.classList.remove('cafeteria', 'lareira', 'floresta')
   
    //? active button theme
    buttonToggleCloud.classList.toggle('active')
    
   //? remove active button theme
   buttonToggleTree.classList.remove('active')
   buttonToggleStorefront.classList.remove('active')
    buttonToggleFire.classList.remove('active')
    
    buttonToggleCloud.classList.contains('active') ? darkMode = true : darkMode = false 
  
    const mode = darkMode ? 'ativado' : 'desativado'
    event.currentTarget.querySelector('span').textContent = `Tema Chuva ${mode}!`;

    
})

buttonToggleStorefront.addEventListener('click', (event) => {
    //? add theme
    document.documentElement.classList.toggle('cafeteria')
    document.documentElement.classList.remove('chuva', 'lareira', 'floresta')
   
    //? active button theme
    buttonToggleStorefront.classList.toggle('active')
    
   //? remove active button theme
    buttonToggleTree.classList.remove('active')
    buttonToggleCloud.classList.remove('active')
    buttonToggleFire.classList.remove('active')


    buttonToggleStorefront.classList.contains('active') ? darkMode = true : darkMode = false 
    
   
    const mode = darkMode ? 'ativado' : 'desativado'
    event.currentTarget.querySelector('span').textContent = `Tema Cafeteria ${mode}!`;

   
})

buttonToggleFire.addEventListener('click', (event) => {
      //? add theme
      document.documentElement.classList.toggle('lareira')
      document.documentElement.classList.remove('chuva', 'cafeteria', 'floresta')
     
    //? active button theme
    buttonToggleFire.classList.toggle('active')
     
      
     //? remove active button theme
      buttonToggleTree.classList.remove('active')
    buttonToggleCloud.classList.remove('active')
    buttonToggleStorefront.classList.remove('active')
      
    buttonToggleFire.classList.contains('active') ? darkMode = true : darkMode = false 
    const mode = darkMode ? 'ativado' : 'desativado'
    event.currentTarget.querySelector('span').textContent = `Tema Fogo ${mode}!`;

    
})