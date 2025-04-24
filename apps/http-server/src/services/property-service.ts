import { PropertyRepository } from "../repositories";

const propertyRepository = new PropertyRepository();
export class PropertyService {
    constructor() {}
  
    async getProperty() {
      try {
        const property = await propertyRepository.getProperty();
        return property;
      } catch (error) {
        console.log("Error", error);
      }
    }

    async getAllProperties(page: number, limit: number) {
      try {
        return await propertyRepository.getAllProperties(page, limit);
      } catch (error) {
        throw error;
      }
    }
}