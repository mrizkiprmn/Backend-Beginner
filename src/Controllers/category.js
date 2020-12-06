const category = {};
const model = require("../Models/category");
const response = require("../Helpers/response");


category.get = async (req, res) => {
    try  {
         const result = await model.get();
         return response(res, 200, result);
    } catch (error) {
      return response(res, 500, error);
    }
 }
 
 
 category.add = async (req, res) =>{
      try {
           const result = await model.add(req.body);
           return response(res, 201, result);
      } catch(error) {
           return response(res, 500, error);
      }
 }
 
 category.update = async (req, res) => {
    try {
         const result = await model.update(req.body);
         return response(res, 200, result);
    } catch(error) {
         return response(res, 500, error);
    }

}

 category.del = async (req, res) =>{
      try {
           const result = await model.del(req.params.idcategory);
           return response(res, 200, result);
      } catch (error) {
           return response(res, 404, error);
      }
 }

module.exports = category;