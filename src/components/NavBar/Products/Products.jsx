
export const productos = [
    {id: 1, imgUrl: './images/hombre1.jpg', name: 'Zapatillas Hombre 1', descripcion: 'Zapatillas de hombre color negro', precio: 5000, stock: 10, category: 'Hombre'},
    {id: 2, imgUrl:'./images/hombre2.jpg', name: 'Zapatillas Hombre 2', descripcion: 'Zapatillas de hombre color blanco', precio: 6000, stock: 5, category: 'Hombre'},
    {id: 3, imgUrl:'./images/mujer1.jpg', name: 'Zapatillas Mujer 1', descripcion: 'Zapatillas de mujer color blanco', precio: 8000, stock: 15, category: 'Mujer'},
    {id: 4, imgUrl:'./images/mujer2.jpg', name: 'Zapatillas Mujer 2', descripcion: 'Zapatillas de mujer color dorado', precio: 10000, stock: 20, category: 'Mujer'}
]

const categories = [
    {id: 'Hombre', description: 'Hombre'},
    {id: 'Mujer', description: 'Mujer'}
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}


export default productos;