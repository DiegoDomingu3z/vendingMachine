import { ProxyState } from "../AppState.js";


class SnacksService{
    purchaseSnack(snackName){
        const foundSnack = ProxyState.snack.find(u => u.name == snackName)
let change = ProxyState.change
if (change> foundSnack.price) {
  change -= foundSnack.price
            console.log(foundSnack);
        }
        return foundSnack;
    }
}

export const snacksService = new SnacksService()


