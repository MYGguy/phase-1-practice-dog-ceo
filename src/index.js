console.log('%c HI', 'color: green')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
    .then(res => res.json())
    .then(json => handleImages(json));

function handleImages(json) {
    json.message.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '200px';
        document.querySelector('#dog-image-container').appendChild(img);
    })
}

fetch(breedUrl)
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => handleDogList(json));

function handleDogList(json) {
    Object.keys(json.message).forEach(i => {
        // console.log(i);
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', () => {
            li.style.backgroundColor = 'rgb(30,30,200,.5)';
        })
        document.querySelector('#dog-breeds').appendChild(li);
    })
}