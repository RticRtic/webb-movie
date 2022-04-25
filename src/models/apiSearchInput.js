import { faTeeth } from "@fortawesome/free-solid-svg-icons"

const getSearchedApi = async (input) => {

//let url = "https://api.themoviedb.org/3/search/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=pt-EN&query={INPUT}"
let searchApi = [];

const respone = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=pt-EN&query=${input}`);
const data = await respone.json();
searchApi.push(data);
console.log(searchApi);

}

export {getSearchedApi}