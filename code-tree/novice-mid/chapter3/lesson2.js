const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.

class News {
  constructor (date, day, weather){
    this.date = date;
    this.day = day;
    this.weather = weather;
  }
}

const news = [];

for(let i = 0; i < n; i++){
  const [date, day, weather] = forecasts[i];
  news.push(new News(date, day, weather));
}

let idx = -1;

for(let i = 0; i < n; i++){
  if(news[i].weather === 'Rain'){
    if(idx === -1) idx = i;
    if(news[idx].date > news[i].date) idx = i;
  }
}

console.log(`${news[idx].date} ${news[idx].day} ${news[idx].weather}`);