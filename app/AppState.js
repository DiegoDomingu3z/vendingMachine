import { Snack } from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  values = []

  change = 0

  vending = []

  snack = [new Snack({name: "Takis", price: 1.25, image:'./assets/img/takis.webp'} ),
new Snack({name: "Lays", price: 1.50, image: './assets/img/lays.webp'}),
new Snack({name: "Twix",price: 1.50, image:'./assets/img/twix.webp'}),
new Snack({name: "Cheetos", price: 1.50,image: './assets/img/cheetos.webp'}),
new Snack({name: "Snickers",price: 1.00,image: './assets/img/snickers.jpeg'}),
new Snack ({name:"Sunchips", price: 1.50, image:  './assets/img/sunchips.webp'})
]
}





export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
