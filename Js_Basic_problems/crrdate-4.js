//Write a JavaScript program to get the current date.

var today=new Date();

var mm=today.getMonth();
var dd=today.getDay();
var yyyy=today.getFullYear();

if(dd<10){
    dd="0"+dd;
}

if(mm<10){
    mm="0"+mm;
}

today=`${mm}-${dd}-${yyyy}`;
console.log(today);

today=`${mm}/${dd}/${yyyy}`;
console.log(today);

today=`${dd}-${mm}-${yyyy}`;
console.log(today);

today=`${dd}+${mm}+${yyyy}`;
console.log(today);


