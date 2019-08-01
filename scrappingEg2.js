const request = require("request");
const cheerio = require("cheerio");

const URL = "https://hackernoon.com/tagged/bitcoin";

request(URL, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(body);
    $(".story-card").each((i, el) => {
      const title = $(el)
        .find(".title")
        .children("a")
        .text();
      console.log(title);
    });
  }
});
