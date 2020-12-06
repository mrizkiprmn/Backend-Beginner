const db = require("../Configs/db");
require("../Controllers/product");
const product = {};

product.get = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.product ORDER BY price DESC")
        .then((res) => {
         if (res.rows.length == 0) {
             resolve("Data is Empty");
         } else {
             resolve(res.rows);
         }
        })
        .catch((err) => {
            reject(err);
        })
    })
}

product.getName = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.product WHERE name LIKE '${data}%'`)
        .then((res) => {
            resolve(res.rows);
        })
        .catch((err) => {
            reject(err);
        })
    })
}


product.add = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.product(name, image, price, category) VALUES ('${data.name}', '${data.image}', ${data.price}, '${data.category}')`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

product.update = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.product SET name='${data.name}', image='${data.image}' , price=${data.price}, category='${data.category}' WHERE idfood=${data.idfood}`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

product.del= (data) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.product WHERE idfood=${data}`)
        .then((res) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
    })
}





module.exports = product;
