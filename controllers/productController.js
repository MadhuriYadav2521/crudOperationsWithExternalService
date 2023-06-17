
export const addPrduct = (req, res) => {
    try {
        const { title, price, description, category, image, id, pin } = req.body;

        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                res.send(json)
            })

    } catch (error) {
        return res.send(error)
    }
}


export const getAllProducts = (req, res) => {
    try {

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            res.send(json)
        })

    } catch (error) {
        return res.send(error)
    }
}

export const getPoductById = (req, res) => {
    try {
        // const { title, price, description, category, image} = req.body;

        fetch('https://fakestoreapi.com/products/2')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            res.send(json)
        })
            
        

    } catch (error) {
        return res.send(error)
    }
}

export const getProductByLimit = (req, res) => {
    try {
        // const { title, price, description, category, image} = req.body;
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
        .then(json=>{console.log(json)
            res.send(json)
        })
            
        

    } catch (error) {
        return res.send(error)
    }
}

export const getAllCategories = (req, res) => {
    try {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{console.log(json)
            res.send(json)
        })

    } catch (error) {
        return res.send(error)
    }
}

export const deleteProduct = (req, res) => {
    try {
        fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>{console.log(json)
                res.send(json)
            })
    } catch (error) {
        return res.send(error)
    }
}









