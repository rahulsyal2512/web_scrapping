const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStream = fs.createWriteStream("posts.csv");

//Headers
writeStream.write(`Title \n`);

const URL = "https://hackernoon.com/tagged/bitcoin"; //Just an example

request(URL, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(body);
    $(".story-card").each((i, el) => {
      const title = $(el)
        .find(".title")
        .children("a")
        .text();
      writeStream.write(`${title} \n`);
    });
    console.log("Scrapping done");
  }
});
