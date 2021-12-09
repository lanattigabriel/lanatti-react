const getProductsByCategory = () => {

    productos.filter((productos) => {
        return productos.category === categoryId
    }
)}