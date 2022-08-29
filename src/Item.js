export default class Item {
    constructor(item) {

        const params = ['brand', 'title', 'description', 'descriptionFull', 'price', 'currency']
        
        params.forEach((i) => {
            if(!item.hasOwnProperty(i)) throw Error (`Объект должен содержать поле ${i}`)
            this[i] = item[i]
        })
    }
}
