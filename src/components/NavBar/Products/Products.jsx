
export const productos = [
    {id: 1, name: 'Primer producto', descripcion: 'Este es el primer producto', precio: 200, stock: 10, category: '1'},
    {id: 2, name: 'Segundo producto', descripcion: 'Este es el segundo producto', precio: 200, stock: 5, category: '1'},
    {id: 3, name: 'Tercer producto', descripcion: 'Este es el tercer producto', precio: 200, stock: 15, category: '1'},
    {id: 4, name: 'Cuarto producto', descripcion: 'Este es el cuarto producto', precio: 200, stock: 20, category: '2'},
    {id: 5, name: 'Quinto producto', descripcion: 'Este es el quinto producto', precio: 200, stock: 5, category: '2'},
]

const categories = [
    {id: '1', description: 'Categoria 1'},
    {id: '2', description: 'Categoria 2'}
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}


export default productos;