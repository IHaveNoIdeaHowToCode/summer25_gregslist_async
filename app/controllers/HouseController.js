import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    console.log("House Controller is here!");
    AppState.on('houses', this.drawHouses)
    AppState.on('identity', this.drawHouses)
    AppState.on('identity', this.drawHouseForm)
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

  drawHouseForm() {
    let houseFormElem = document.getElementById('house-form')
    houseFormElem.querySelector('h2').classList.add('d-none')
    houseFormElem.querySelector('form').classList.remove('d-none')
  }

  async submitHouse() {
    try {
      event.preventDefault()
      const formElem = event.target
      const houseFormData = getFormData(formElem)
      console.log('Submitted House DATA', houseFormData);
      await houseService.createHouse(houseFormData)
    } catch (error) {
      Pop.error(error, 'WOOPS', 'Failed to create House Listing')
      console.error('createHouse failed', error);
    }
  }

  async deleteHouseConfirm(houseId) {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'It will be gone forever', 'Yes I am sure', 'Nevermind!')

    if (!confirmed) {
      return
    }

    try {
      await houseService.deleteHouse(houseId)
    } catch (error) {
      Pop.error(error, 'ERROR', 'Could not delete house!')
      console.error('deleteHouse failed', error);

    }
  }
}

// function querySelector(arg0) {
//   throw new Error("Function not implemented.");

