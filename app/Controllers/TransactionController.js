import { ProxyState } from "../AppState.js";
import {transactionService} from "../Services/TransactionService.js";


function _drawMoney(){
    document.getElementById('change').innerText = ProxyState.change.toString()
}


// export class TransactionController{
//     constructor(){
//         ProxyState.on('change', _drawMoney)
//         _drawMoney()
//     }
//     addMoney(){
//         transactionService.addMoney()
//     }
// }


  
  export class TransactionController {
    constructor() {
      ProxyState.on('change', _drawMoney)
      _drawMoney()
    }
    addMoney() {
      transactionService.addMoney()
    }
}