var args = require("minimist")(process.argv.slice(2));
const cheerio = require("cheerio");
console.log(args);

console.log("url is " + args.url);
console.log("selector is " + args.selector);

var $ = "";

async function getData() {
  try {
    const res = await fetch(args.url, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    if (!res.ok) throw new Error(`Response status : ${res.status}`);

    const textData = await res.text();
    $ = cheerio.load(textData);

    const text = $(args.selector).text();
    console.log(text);
  } catch (e) {
    console.log(e);
  }
}

getData();
