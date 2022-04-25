class ContenedorMemoria {
    constructor() {
        this.elementos = [{
            "id": 1,
            "title": "The Very Best of the Doors 2CD",
            "price": 13.07,
            "thumbnail": "https://m.media-amazon.com/images/I/91hrbype4aL._SY355_.jpg"
        },
        {
            "id": 2,
            "title": "Blood Sugar Sex Magik",
            "price": 9.99,
            "thumbnail": "https://m.media-amazon.com/images/I/81hS2wgxbhL._SY355_.jpg"
        },
        {
            "id": 3,
            "title": "Pearl Jam Completely Unplugged Limited Edition",
            "price": 49.77,
            "thumbnail": "https://m.media-amazon.com/images/I/81NDZb-JShL._SY355_.jpg"
        }
    ]
        this.id = 3
    }

    listar(id) {
        const elem = this.elementos.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    listarAll() {
        return [...this.elementos]
    }

    guardar(elem) {
        const newElem = { ...elem, id: ++this.id }
        this.elementos.push(newElem)
        return newElem
    }

    actualizar(elem, id) {
        const newElem = { id: Number(id), ...elem }
        const index = this.elementos.findIndex(p => p.id == id)
        if (index !== -1) {
            this.elementos[index] = newElem
            return newElem
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    borrar(id) {
        const index = this.elementos.findIndex(elem => elem.id == id)
        if (index !== -1) {
            return this.elementos.splice(index, 1)
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    borrarAll() {
        this.elementos = []
    }
}

module.exports = ContenedorMemoria
