//console.log("Hello world");

const express = require('express')
const app = express()
const port = 3000

function get_day_of_week(date){
    var dateString = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Firday, Saturday "];
    switch(date.getDay()){
        case 0:
            dateString = "Sunday"
            break;
        case 1:
            dateString = "Monday"
            break;
        case 2:
            dateString = "Tuesday"
            break;
        case 3:
            dateString = "Wednesday"
            break;
        case 4:
            dateString = "Thursday"
            break;
        case 5:
            dateString = "Firday"
            break;
        case 5:
            dateString = "Saturday"
            break;
    }
    return dateString;
}

app.get('/today',(req,res) =>{
    var today = new Date();
    res.send(get_day_of_week(today));
})


//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))