const midtownContent = document.querySelector('#midtown-frame-container');
const campusContent = document.querySelector('#campus-frame-container');
const iconArray = ['../src/assets/icons/hot.png', '../src/assets/icons/diet.png', '../src/assets/icons/salad.png'];

async function getMidTownMenu() {   //consider using async/await instead of promises
   fetch('http://localhost:8000/midtownMenu')
      .then(response => { return response.json() }) //return response.json()
      .then(data => {
         console.log(data);   //check return type
         if (!data) {
            console.log('there is no data!');
            if (midtownContent.childElementCount < 2) {
               const noMenuMsg = `<div class="menuItem"><h2>Intet på menuen i dag</h2></div>`
               midtownContent.insertAdjacentHTML('beforeend', noMenuMsg);
            }
         } else {
            data.forEach(item => {
               const menuItem = `<div class="menuItem"><h3>${item.title}</h3><p>${item.description}</p></div>`
               midtownContent.insertAdjacentHTML('beforeend', menuItem)
            })
         }
      })
      .catch(err => console.log(err))
}

async function getCampusMenu() {
   fetch('http://localhost:8000/campusMenu')
      .then(response => { return response.json() })
      .then(data => {
         if (!data) {
            console.log('There is no data!');
            if (campusContent.childElementCount < 1) {
               const noMenuMsg = `<div class="menuItem"><h2>Intet på menuen i dag</h2></div>`
               campusContent.insertAdjacentHTML('beforeend', noMenuMsg);
            }
         } else {
            data.forEach(item => {
               const menuItem = `<div class="menuItem"><h3>${item.title}</h3><p>${item.description}</p></div>`
               campusContent.insertAdjacentHTML('beforeend', menuItem)
            })
         }
      })
      .catch(err => console.log(err));
}

getMidTownMenu();
getCampusMenu();

