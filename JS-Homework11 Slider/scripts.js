let data = [
    {
        id: 1,
        imageUrl: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-Color-HD-Wallpapers-For-Desktop.jpg ',
        title: 'First',
        url: 'https://fontawesome.com',
    },
    {
        id: 2,
        imageUrl: 'https://wallpaperaccess.com/full/1732235.jpg',
        title: 'Second',
        url: 'https://fontawesome.com',
    },
    {
        id: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDsM3CjMSzluzBCUmoHZtgus0Qly8bPb1kjM4xNDGPhradw2hVF20Dp5XueMQ8A2wZWE&usqp=CAU ',
        title: 'Third',
        url: 'https://fontawesome.com',
    },
    {
        id: 4,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7YI_Yb-VvFmoUHY8_7whXUkjUHKBkfiIQw&usqp=CAU',
        title: 'Fourth',
        url: 'https://fontawesome.com',
    },
]

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const sliderContent = document.getElementById('slider-content');

let sliderIndex = 0;

function createAtag(item) {
    const tag = document.createElement('a');
    tag.classList.add('slide');
    tag.setAttribute('href', item.url);

    return tag;
}

function createH2tag(item) {
    const h2Tag = document.createElement('h2');
    h2Tag.classList.add('slider-title');
    h2Tag.textContent = item.title;

    return h2Tag;
}

function creteImgtag(item) {
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.imageUrl);
    imgTag.setAttribute('alt', item.title);

    return imgTag;
}

function setSlide() {

    const slideItem = createAtag(data[sliderIndex]);
    const h2tagsave = createH2tag(data[sliderIndex]);
    const imgtagsave = creteImgtag(data[sliderIndex]);

    sliderContent.innerHTML = "";
    slideItem.appendChild(imgtagsave);
    slideItem.appendChild(h2tagsave);
    sliderContent.appendChild(slideItem);

    console.log(slideItem);
}

function leftclick() {
    if (sliderIndex == 0) {
        return;
    }
    sliderIndex--;
    setSlide();
}

function rightclick() {
    if (sliderIndex == data.lenght - 1) {
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', leftclick);
arrowRight.addEventListener('click', rightclick);
setInterval(() => {
    rightclick();
}, 2000)

setSlide();
