import { ProxyState } from "../AppState.js"




class VendingMachineService {

  buyItem(selection) {
    let product = ProxyState.items[selection]
    if (!product) {
      throw new error(selection + " not found")
    }
    if (ProxyState.money.amount > product.cost) {
      ProxyState.money.amount -= product.cost
      ProxyState.inventory.push(product)
      ProxyState.money = ProxyState.money
      console.log("you got a " + product.name)
    } else {
      console.log("not enough money")
    }
  }
}

export const vendingMachineService = new VendingMachineService()