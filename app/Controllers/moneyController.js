import { ProxyState } from "../AppState.js"

function _drawMoney() {
  document.getElementById("money").innerHTML = ProxyState.money.amount
}
export class MoneyController {

  constructor() {
    ProxyState.on('money', _drawMoney)
    _drawMoney()
  }
}