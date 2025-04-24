import { PropertyService } from "../services";

const propertyService = new PropertyService();

const getAllProperties = async (req: any, res: any) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const response = await propertyService.getAllProperties(page, limit);
    
    return res.status(200).json({
      data: response.properties,
      pagination: {
        currentPage: page,
        totalPages: response.totalPages,
        totalItems: response.totalItems,
        itemsPerPage: limit
      },
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching properties",
      success: false,
      error: error
    });
  }
};

const getProperty = async (req: any, res:any) => {
  try {
    const response = await propertyService.getProperty();
    return res.status(200).json({
      data: response,
      scuccess: true,
    });
  } catch (error) {
    return res.status(400).json({
      Message: "propertiew can not Created Successfully#",
      success: false,
      error: error,
    });
  }
};

const filterProperties = async (req: any, res: any) => {
  try {
    const { location, type, transactionType } = req.query;
    console.log("KKKKKKKKKKK", location, type, transactionType)
    const filters = {
      ...(location && { location }),
      ...(type && { type }),
      ...(transactionType && { transactionType })
    };

    const response = await propertyService.filterProperties(filters);

    return res.status(200).json({
      data: response,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error filtering properties",
      success: false,
      error: error
    });
  }
};


export {
  getProperty,
  getAllProperties,
  filterProperties
};
