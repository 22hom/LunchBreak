const content = document.querySelector('#feed');

function getMidTownMenu() {   //consider using async/await instead of promises
   fetch('http://localhost:8000/midtownMenu')
      .then(response => { return response.json() })
      .then(data => {
         data.forEach(item => {
            const menuItem = `<h3>${item.title}</h3><p>${item.description}</p>`
            content.insertAdjacentHTML('beforeend', menuItem)
         })
      })
      .catch(err => console.log(err))
}

getMidTownMenu();