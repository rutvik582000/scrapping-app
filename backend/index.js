const express = require("express");
const app = express();
const scrapingbee = require("scrapingbee");
var cors = require('cors')

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
            "Published-date": "time",
          },
        },
      },
    },
  });
  return response;
}
let textFromURL = "";
get("https://www.scrapingbee.com/blog/")
  .then(function (response) {
    var decoder = new TextDecoder();
    textFromURL = decoder.decode(response.data);
  })
  .catch((e) => console.log("A problem occurs : " + e.response.data));

app.use("/", (req, res) => {
  res.send(textFromURL);
});

app.listen(8000, () => {
  console.log("listning");
});
