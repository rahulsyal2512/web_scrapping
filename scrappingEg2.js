const request = require("request");
const cheerio = require("cheerio");

const URL = "https://hackernoon.com/";

request(URL, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(body);
    let newsletter = $(".more");
    const gettingTitle = $(newsletter).find(".more-content");
    console.log(gettingTitle.html());
    //   .each((index, card) => {
    //     const title = $(card);
    //     console.log(title.html());
    //   });
  }
});
