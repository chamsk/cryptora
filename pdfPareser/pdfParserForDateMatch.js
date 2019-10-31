const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('2019-08-30 13-02-10 Medent Document.pdf');
var re = /(Date:  \d+\/\d+\/\d+)/i;


//функция прибавляет нолик ко дню или к месяцу, если дата состоит из одной цифры
function yyyymmdd(x) {
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    return yyyymmdd;
}

pdf(dataBuffer).then(function(data) {
    var ss = data.text.match(re); 
    var date = new Date(ss[0].split("  ")[1]);
    console.log(yyyymmdd(date));
});
