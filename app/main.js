
import { SnackController } from "./Controllers/SnacksController.js";
import { TransactionController } from "./Controllers/TransactionController.js";


class App {
  // valuesController = new ValuesController();
  snackController = new SnackController()
  transactionController = new TransactionController()

}

window["app"] = new App();
