import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    console.log("House Controller is here!");
    this.getHouses()
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      Pop.error('getHouses failed', error)
    }
  }
}