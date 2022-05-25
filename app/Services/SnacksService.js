import { ProxyState } from "../AppState.js";


class SnacksService{
    purchaseSnack(snackName){
        const foundSnack = ProxyState.snack.find(s => s.name == snackName)
        let change = ProxyState.change
        if(change > foundSnack.price){
            change -= foundSnack.price
            console.log(foundSnack);
        }
        console.log(foundSnack)
        return foundSnack;
    }
}

export const snacksService = new SnacksService()