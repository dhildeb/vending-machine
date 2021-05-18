import { VendingMachineController } from "../app/Controllers/vendingMachineController.js"
import { InventoryController } from "./Controllers/inventoryController.js";
import { MoneyController } from "./Controllers/moneyController.js";

class App {
  vendingMachineController = new VendingMachineController()
  moneyController = new MoneyController
  inventory = new InventoryController
}

window["app"] = new App();
