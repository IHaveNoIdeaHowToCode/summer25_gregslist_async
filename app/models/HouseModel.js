import { AppState } from "../AppState.js"



export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture || 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get houseHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
          <div class="position-relative shadow house-card" style="border-color: black;">
            <img src="${this.imgUrl}" alt="pic of house" class="house-img">
            <span class="house-price d-inline-block px-3 py-1 bg-dark text-success fs-2">$${this.price.toLocaleString()}</span>
            <div class="p-3">
              <h2>${this.year}</h2>
              <p class="fs-4 fw-bold">${this.bedrooms} Bedrooms</p>
              <p class="fs-4 fw-bold">${this.bathrooms} Bathrooms</p>
              <p class="fs-4 fw-bold">${this.levels} Floors</p>
              <p>${this.description}</p>
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <img src="${this.creatorPicture}" alt="${this.creatorName.replace('<div>', '🍌')}" class="creator-img">
                  <p class="mb-0">${this.creatorName.replace('<div>', '🍌')}</p>
                </div>
                <small>${this.createdAt.toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
    `
  }
}