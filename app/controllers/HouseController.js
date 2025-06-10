import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    console.log("House Controller is here!");
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      Pop.error('getHouses failed', error)
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let housesContent = ''
    houses.forEach(house => housesContent += house.houseHTMLTemplate)
    const houseListingElem = document.getElementById('house-listings')
    houseListingElem.innerHTML = housesContent
  }
}