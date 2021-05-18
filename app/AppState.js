import { Items } from "./Models/Items.js"
import { Money } from "./Models/Money.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  items = {
    mtDew: new Items('mtDew', 2.5, "http://assets.stickpng.com/thumbs/587186d27b7f6103e35c6cc8.png"),
    cheetos: new Items('cheetos', 1.25, "https://www.tastyrewards.com/sites/default/files/2021-03/Cheetos%20Crunchy.png"),
    twix: new Items('twix', 2.25, "https://i.pinimg.com/originals/97/35/a5/9735a5bfe577e3340fa1864ffab306c2.png")
  }
  inventory = []
  money = new Money(Math.floor(Math.random() * 10) + 5)
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
