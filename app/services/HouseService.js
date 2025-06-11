import { AppState } from "../AppState.js";
import { House } from "../models/HouseModel.js";
import { api } from "../utils/Axios.js";


class HouseService {
  async getHouses() {
    const response = await api.get(`api/houses`)
    console.log("GOT HOUSES", response.data);
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }

  async createHouse(houseFormData) {
    const response = await api.post('api/houses', houseFormData)
    console.log('CREATE HOUSE WOOOO', response.data);
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
}

export const houseService = new HouseService()