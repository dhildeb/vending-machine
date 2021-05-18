import { ProxyState } from "../AppState.js"
import { vendingMachineService } from "../Services/VendingMachineService.js"


function _drawVendingMachine() {
  let template = ``

  Object.values(ProxyState.items).forEach(item => {
    template += `
    <div>
    <button class="btn btn-secondary m-3 p-3" onclick="app.vendingMachineController.buyItem('${item.name}')">
        ${item.name}
    </button>
    <span>$${item.cost.toFixed(2)}</span>
</div>
    `
  })
  document.getElementById("items").innerHTML = template
}

export class VendingMachineController {
  constructor() {
    ProxyState.on('items', _drawVendingMachine)
    _drawVendingMachine()
  }
  buyItem(product) {
    vendingMachineService.buyItem(product)
  }
}

