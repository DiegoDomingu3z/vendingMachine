import { Snack } from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  values = []

  change = 0

  vending = []

  snack = [new Snack("Takis", 1.25, './assets/img/takis.webp' ),
new Snack("Lays", 1.50, './assets/img/lays.webp'),
new Snack("Twix", 1.50, './assets/img/twix.webp'),
new Snack("Cheetos", 1.50, './assets/img/cheetos.webp'),
new Snack("Snickers", 1.00, './assets/img/snickers.jpeg'),
new Snack ("Sunchips", 1.50, './assets/img/sunchips.webp')
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
