console.log('%c HI', 'color: green')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogList = [];

fetch(imgUrl)
    .then(res => res.json())
    .then(json => handleImages(json));

function handleImages(json) {
    json.message.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.style.width = '50px';
        document.querySelector('#dog-image-container').appendChild(img);
    })
}

fetch(breedUrl)
    .then(res => res.json())
    .then(json => handleDogList(json));

function handleDogList(json) {
    Object.keys(json.message).forEach(i => {
        dogList.push(i);
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', () => {
            li.style.backgroundColor = 'rgb(30,30,200,.5)';
        })
        document.querySelector('#dog-breeds').appendChild(li);
    });
    //run handledropdown right away
    // handleDropdown();
}




//dropdown

//delete dog list
function handleDropdown(letter) {
    document.querySelector('#dog-breeds').textContent = '';

    //add dogs with selected letter
    dogList.forEach(dog => {
        let firstLetter = dog.slice(0, 1);
        if (firstLetter == letter) {
            console.log(dog);
            const li = document.createElement('li');
            li.textContent = dog;
            li.addEventListener('click', () => {
                li.style.backgroundColor = 'rgb(30,30,200,.5)';
            })
            document.querySelector('#dog-breeds').appendChild(li);
        }
    })
};

document.querySelector('#breed-dropdown').addEventListener('change', event => {
    const selectedLetter = event.target.value;
    handleDropdown(selectedLetter);
})