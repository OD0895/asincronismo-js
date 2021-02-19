const fetchData = require('../utils/fetchData');
//se define en mayusculas por que hace referencia a que no va cambiar su valor (es una constante)
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData( `${url_api}${data.results[0].id}` );
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.log(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')