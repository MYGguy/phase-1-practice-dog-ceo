console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => document.querySelector('#dog-image-container').innerHTML = `<img src='${json.message[0]}'</img>`);