const axios = require('axios');
const cheerio = require('cheerio');
// const { response } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 8000;

app.get('/', function (req, res) {
   res.json('Hello from webscraper');
})

app.get('/midtownMenu', (req, res) => {
   axios(midtownSite)
      .then(response => {
         const midtownHtml = response.data
         const midtownMenu = cheerio.load(midtownHtml)
         const menuItemsArray = []

         midtownMenu('.menu-row.show-description.row', midtownHtml).each(function () {
            const title = midtownMenu(this).find('.element.title.col-md-12.col-xs-12').text().trim()
            const description = midtownMenu(this).find('.element.show-description.description.col-md-12.col-xs-12').text().trim()
            menuItemsArray.push({
               title,
               description
            })
         })

         res.json(menuItemsArray);
      }).catch(err => console.log(err));
})

const midtownSite = 'https://lego.isscatering.dk/midtown';
const campusSite = 'https://lego.isscatering.dk/aastvej';



// axios(campusMenu)
//    .then(response => {
//       const campusHtml = response.data
//       cheerio.load(campusHtml)
//       const 
//    })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));