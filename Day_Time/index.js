const today = new Date();
const day = today.getDay();
const daylist = ["Sunday" ,"Monday" , "Tuesday" , "Wedneday" , "Thursday" , "Friday" , "Saturday"];
console.log(`Today is: ${daylist[day]}`);
let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
let prepand = (hours >= 12 )? "PM":"AM";
hours = (hours >= 12)? hours - 12 : hours;

if(hours === 0 && prepand === 'PM')
{
    if(miniutes === 0 && seconds === 0)
    {
        hours = 12;
        prepand = "Noon";
    }
    else{
        hours = 12;
        prepand = "PM";
    }
}
if(hours === 0 && prepand === 'AM')
{
    if(minutes === 0 && seconds === 0)
    {
        hours = 12;
        prepand = "Midnight";
    }
    else{
        hours = 12;
        prepand = "AM";
    }
}

console.log(`Current time : ${hours}${prepand} :${minutes} : ${seconds}`);