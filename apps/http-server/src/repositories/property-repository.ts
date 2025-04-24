import { Property } from "../models";

export class PropertyRepository {
  constructor() {}

  async getProperty() {
    try {
      const response = await Property.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAllProperties(page: number, limit: number) {
    try {
      const skip = (page - 1) * limit;
      const [properties, totalItems] = await Promise.all([
        Property.find().skip(skip).limit(limit),
        Property.countDocuments()
      ]);
      const totalPages = Math.ceil(totalItems / limit);
      return { properties, totalItems, totalPages };
    } catch (error) {
      throw error;
    }
  }
}
