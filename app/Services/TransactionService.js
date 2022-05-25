import { ProxyState } from "../AppState.js";





// class TransactionService{
//     addMoney(){
//         ProxyState.change += .25
       
//     }
// }

// export const transactionService = new TransactionService()


class TransactionService {
    addMoney() {
      ProxyState.change += .25
     
    }
  }
  
  export const transactionService = new TransactionService()