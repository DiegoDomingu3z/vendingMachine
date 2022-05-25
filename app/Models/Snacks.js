




export class Snack{
    constructor(name, price, image){
        this.name = name
        this.price = price
        this.image = image
    }


    get Template(){
        return `
        <div class="col-6 border border-dark">
        <img class="snack-img" src="${this.image}" alt="">
        <div>${this.name}</div>
        <div>${this.price}</div>
        <button onclick="app.snackController.purchaseSnacks()">Buy</button>
      </div>
        `
    }
}