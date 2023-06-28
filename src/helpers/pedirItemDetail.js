import data from "../products.json"

export const pedirItemDetail = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((prod) => prod.id === id)

        if(item) {
            resolve(item)
        } else {
            reject({
                error: "no se encontro el producto"
            })
        }
    })
}