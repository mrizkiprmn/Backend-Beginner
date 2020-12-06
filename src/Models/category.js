const db = require("../Configs/db");
require("../Controllers/category");
const category = {};

category.get = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.category ORDER BY idcategory ASC")
        .then((res) => {
         if (res.rows.length == 0) {
             resolve({msg: "Data is Empty"});
         } else {
             resolve(res.rows);
         }
        })
        .catch((err) => {
            reject(err);
        })
    })
}


category.add = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.category(category) VALUES ('${data.category}')`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

category.update = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.category SET category='${data.category}' WHERE idcategory=${data.idcategory}`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

category.del = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.category WHERE idcategory=${data}`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

module.exports = category;