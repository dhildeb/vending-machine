import { ProxyState } from "../AppState.js"

function _drawInventory() {
  let template = ``

  Object.values(ProxyState.inventory).forEach(item => {
    template += `
    <div class="col-1">
    <img 
    src="${item.img}"
    >
</div>
    `
  })
  document.getElementById("inventory").innerHTML = template
}

export class InventoryController {

  constructor() {
    ProxyState.on('money', _drawInventory)
  }
}