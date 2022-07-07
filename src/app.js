
const midtownContent = document.querySelector('#midtown');
const campusContent = document.querySelector('#campus');

async function getMidTownMenu() {   //consider using async/await instead of promises
   fetch('http://localhost:8000/midtownMenu')
      .then(response => { return response.json() })
      .then(data => {
         data.forEach(item => {
            const menuItem = `<h3>${item.title}</h3><p>${item.description}</p>`
            midtownContent.insertAdjacentHTML('beforeend', menuItem)
         })
      })
      .catch(err => console.log(err))
}

async function getCampusMenu() {
   fetch('http://localhost:8000/campusMenu')
      .then(response => { return response.json() })
      .then(data => {
         data.forEach(item => {
            const menuItem = `<h3>${item.title}</h3><p>${item.description}</p>`
            campusContent.insertAdjacentHTML('beforeend', menuItem)
         })
      })
      .catch(err => console.log(err));
}

getMidTownMenu();
getCampusMenu();