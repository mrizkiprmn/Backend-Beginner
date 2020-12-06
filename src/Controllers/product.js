const product = {};
const model = require("../Models/product");
const response = require("../Helpers/response");


product.get = async (req, res) => {
   try  {
        const result = await model.get();
        return response(res, 200, result);
   } catch (error) {
     return response(res, 500, error);
   }
}

product.getName = async (req, res) =>{
     try {
          const result = await model.getName(req.params.name);
          return response(res, 200, result);
     } catch (error) {
          return response(res, 401, error);
     }
}


product.add = async (req, res) =>{
     try {
          const result = await model.add(req.body);
          return response(res, 201, result);
     } catch(error) {
          return response(res, 500, error);
     }
}


product.update = async (req, res) => {
     try {
          const result = await model.update(req.body);
          return response(res, 200, result);
     } catch(error) {
          return response(res, 500, error);
     }

}
product.del = async (req, res) =>{
     try {
          const result = await model.del(req.params.idfood);
         return response(res, 200, result);
     } catch (error) {
          return response(res, 404, error);
     }
}




module.exports = product;