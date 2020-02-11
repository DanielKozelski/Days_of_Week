//console.log("Hello world");
const port = 3000

const express = require('express')
const app = express()
app.set('view engine', 'ejs')

function get_day_of_week(date){
    var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    return days_of_week[date.getDay()];
}

app.get('/today',(req,res) =>{
    var today = new Date();
    //res.send(get_day_of_week(today));
    res.render("days_of_week",{
        date: today, 
        day_of_week: 
        get_day_of_week(today)
    });
})

app.get('/birthday',(req,res) =>{
    var birthday = new Date(2000, 11, 28);
    //res.send(get_day_of_week(today));
    res.render("days_of_week",{
        date: birthday, 
        day_of_week: 
        get_day_of_week(birthday)
    });
})


//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))