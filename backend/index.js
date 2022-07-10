const express = require("express");
const app = express();
const scrapingbee = require("scrapingbee");
var cors = require('cors')
var cheerio = require('cheerio')

app.use(cors())
app.use(express.json())

async function get(url) {
  var client = new scrapingbee.ScrapingBeeClient(
    "QWJR12FXB9A0WN0CKBG7XXACRHLC3E1E8KSV72UI0IJMRVADLG1DX5FSA4DFKD6D3VMC59IG27ZB797W"
  );
  var response = await client.get({
    url: url,
    params: {
      extract_rules: {
        Data: {
          selector: "a.shadow-card",
          type: "list",
          clean: true,
          output: {
            Title: "h4",
            description: "p",
            Author: "strong",
            Image: {
              selector: "img",
              output: "@src",
            },
            // "Type" :,
            URL: {
              selector: "a",
              output: "@href",
            },
            // "Locale" :,
            "PublishedDate": "time",
          },
        },
      },
    },
  });
  return response;
}

let textFromURL = "";
// localStorage.setItem('url','https://www.scrapingbee.com/blog/')
//localStorage.getItem(url)
get('https://www.scrapingbee.com/blog/')
  .then(function (response) {
    var decoder = new TextDecoder();
    textFromURL = decoder.decode(response.data);
  })
  .catch((e) => console.log("A problem occurs : " + e.response.data));

app.use("/", (req, res) => {
  res.send(textFromURL);
});
// const loadData = cheerio.load('<h2 class="title">Hello world</h2>');

// loadData('h2.title').text('Hello there!');
// loadData('h2').addClass('welcome');

// loadData.html();

app.listen(8000, () => {
  console.log("listning");
});
