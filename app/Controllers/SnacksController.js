import { ProxyState } from "../AppState.js";
import {snacksService} from "../Services/SnacksService.js"


function drawSnacks(){

    let snacks = ProxyState.snack;
    let template = ''
    snacks.forEach(s => template += s.Template)
    // console.log(template);

    document.getElementById('snacks').innerHTML = template
}




export class SnackController{
    constructor(){
        console.log('Snack controller has loaded')
        drawSnacks()
        
    }
    

    purchaseSnacks(snackName){
        
        let purchasedSnack = snacksService.purchaseSnack(snackName)
    }
    

}


