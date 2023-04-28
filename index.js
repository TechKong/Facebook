const bell = document.querySelector('.fa-bell');
const popUp = document.querySelector('.popup');
const StatusPics = document.querySelector('.status-pics');
const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
const notificationNumber = document.querySelector('#notification');
const popUpMsg = document.querySelector('.popup-msg');



bell.addEventListener('click', () =>{
    popUp.classList.toggle('open')
    notificationNumber.textContent = ''
    notificationNumber.style.display = 'none'
});

rightButton.addEventListener('click', () =>{
    StatusPics.scrollLeft += 120;
    StatusPics.style.scrollBehavior = 'smooth';
    console.log(StatusPics.scrollLeft)
});

leftButton.addEventListener('click', () =>{
    StatusPics.scrollLeft -= 120;
    StatusPics.style.scrollBehavior = 'smooth';
});

let notificationArray = [
    {
        img: '/img/ozil.jpg',
        time: '1 hour ago',
        username: 'Frank'
    },
    {
        img: '/img/chimpo.png',
        time: '2 hours ago',
        username: 'Emma'
    },
    {
        img: '/img/avatar.jpg',
        time: '3 hours ago',
        username: 'Gary'
    },
    {
        img: '/img/ozil.jpg',
        time: '1 hour ago',
        username: 'Frank'
    },
    {
        img: '/img/chimpo.png',
        time: '2 hours ago',
        username: 'Emma'
    },
    {
        img: '/img/avatar.jpg',
        time: '3 hours ago',
        username: 'Gary'
    }
]

notificationNumber.textContent = notificationArray.length

notificationArray.map(usernotification =>{
    let div = document.createElement('div')
    div.innerHTML = `
                        <img src="${usernotification.img}" alt="" class="popup-img">
                        <div style="line-height: 10px;">
                            <p>${usernotification.username} <span style="font-weight: 300;"> added to her story </span></p>
                            <p>${usernotification.time}</p>
                        </div>
    `
    div.classList.add('popup-inner')

    popUpMsg.append(div)
})

async function getCountries(){
    const resp = await fetch("https://restcountries.com/v3.1/all")
    const data = await resp.json()

    console.log(data)
}

getCountries()