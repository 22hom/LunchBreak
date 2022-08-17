
const midtownContent = document.querySelector('#midtown-frame-container');
const campusContent = document.querySelector('#campus-frame-container');
const iconArray = ['../src/assets/icons/hot.png', '../src/assets/icons/diet.png', '../src/assets/icons/salad.png'];

async function getMidTownMenu() {   //consider using async/await instead of promises
   fetch('https://lego.isscatering.dk/?menu=m1029-front&l=da')
      .then(response => { return response.json() }) //return response.json()
      .then(data => {
         data.forEach(item => {
            const menuItem = `<h3>${item.title}</h3><p>${item.description}</p>`
            midtownContent.insertAdjacentHTML('beforeend', menuItem)
         })
      })
      .catch(err => console.log(err))
}

async function getCampusMenu() {
   fetch('https://lego.isscatering.dk/?menu=m1028-front&l=da')
      .then(response => { return response.json() })
      .then(data => {
         data.forEach(item => {
            const menuItem = `<div class="menuItem"><h3>${item.title}</h3><p>${item.description}</p></div>`
            campusContent.insertAdjacentHTML('beforeend', menuItem)
         })
      })
      .catch(err => console.log(err));
}

getMidTownMenu();
getCampusMenu();

if (midtownContent.childElementCount < 2) {
   const noMenuMsg = `<h2>Intet på menuen i dag!</h2>`
   midtownContent.insertAdjacentHTML('beforeend', noMenuMsg);
}
