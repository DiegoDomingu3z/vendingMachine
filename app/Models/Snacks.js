




export class Snack{
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.image = data.image
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