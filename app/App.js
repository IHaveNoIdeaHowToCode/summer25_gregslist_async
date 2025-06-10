import { AuthController } from "./Auth/AuthController.js"
import { CarsController } from "./controllers/CarsController.js"
import { HouseController } from "./controllers/HouseController.js"

class App {
  // NOTE the spelling here is very important for the authController we are adding to the app class. Feel free to copy/paste this into your own app class
  authController = new AuthController()
  carsController = new CarsController()
  houseController = new HouseController()
}

window['app'] = new App()


