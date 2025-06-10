import { AppState } from "../AppState.js";
import { House } from "../models/HouseModel.js";
import { api } from "../utils/Axios.js";


class HouseService {
  async getHouses() {
    const response = await api.get(`api/houses`)
    console.log("GOT HOUSES", response.data);
  }
}

export const houseService = new HouseService()