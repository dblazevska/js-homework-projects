
//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

let x= 1;  
let y=5;  
let z=-2;  


if (x>y && x>z)  
{  
   if (y>z) {  
        console.log(x + ", " + y + ", " +z);  
    }  
   else {  
        console.log(x + ", " + z + ", " +y);  
    }  
}  
else if (y>x && y >z)  
{  
    if (x>z) {  
         console.log(y + ", " + x + ", " +z);  
    }  
    else {  
        console.log(y + ", " + z + ", " +x);  
     }  
}  
else if (z>x && z>y) {  
    if (x>y) {  
        console.log(z + ", " + x + ", " +y);  
    } else { 
            console.log(z + ", " + y + ", " +x);  
        }  
}     

//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

let a = 1
let b = 5
let c = 3 
let d = 4
let e = 5

if (a >= b && a >= c & a >= d && a >= e) {
    console.log (a)
} else if (b >= a && b >= c & b >= d && b >= e) {
    console.log (b)
} else if (c >= b && c >= a & c >= d && c >= e) {
    console.log (c)
} else if (d >= b && d >= c & d >= a && d >= e) {
    console.log (d)
} else if (e >= b && e >= c & e >= d && e >= a) {
    console.log (e)
}

    

/*3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
Student_Name	Marks
David	        80
Vinoth	        77
Divya	        88
Ishitha	        95
Thomas	        68
Range	Grade
<60	    F
<70	    D
<80	    C
<90	    B
<100	A 
<100	A
*/

let st1 = 80;
let st2 = 77;
let st3 = 88;
let st4 = 95;
let st5 = 68;

var average = (st1 + st2 + st3 + st4 + st5) / 5 ;

if ( st1 < 60 ) {
    console.log ('Davids grade is an F, with ' + st1 + ' points');
} else if (st1 < 70 ) {
    console.log ('Davids grade is a D, with ' + st1 + ' points');
} else if (st1 < 80 ) {
    console.log ('Davids grade is a c, with ' + st1 + ' points');
} else if (st1 < 90 ) {
    console.log ('Davids grade is a B, with ' + st1 + ' points');
} else if (st1 <= 100 ) {
    console.log ('Davids grade is an A, with ' + st1 + ' points');
}

if ( st2 < 60 ) {
    console.log ('Vinoth grade is an F, with ' + st2 + ' points');
} else if (st2 < 70 ) {
    console.log ('Vinoth grade is a D, with ' + st2 + ' points');
} else if (st2 < 80 ) {
    console.log ('Vinoth grade is a c, with ' + st2 + ' points');
} else if (st2 < 90 ) {
    console.log ('Vinoth grade is a B, with ' + st2 + ' points');
} else if (st2 <= 100 ) {
    console.log ('Vinoth grade is an A, with ' + st2 + ' points');
}

if ( st3 < 60 ) {
    console.log ('Divyas grade is an F, with ' + st3 + ' points');
} else if (st3 < 70 ) {
    console.log ('Divyas grade is a D, with ' + st3 + ' points');
} else if (st3 < 80 ) {
    console.log ('Divyas grade is a c, with ' + st3 + ' points');
} else if (st3 < 90 ) {
    console.log ('Divyas grade is a B, with ' + st3 + ' points');
} else if (st3 <= 100 ) {
    console.log ('Divyas grade is an A, with ' + st3 + ' points');
}

if ( st4 < 60 ) {
    console.log ('Ishithas grade is an F, with ' + st4 + ' points');
} else if (st4 < 70 ) {
    console.log ('Ishithas grade is a D, with ' + st4 + ' points');
} else if (st4 < 80 ) {
    console.log ('Ishithas grade is a c, with ' + st4 + ' points');
} else if (st4 < 90 ) {
    console.log ('Ishithas grade is a B, with ' + st4 + ' points');
} else if (st4 <= 100 ) {
    console.log ('Ishithas grade is an A, with ' + st4 + ' points');
}

if ( st5 < 60 ) {
    console.log ('Thomas grade is an F, with ' + st5 + ' points');
} else if (st5 < 70 ) {
    console.log ('Thomas grade is a D, with ' + st5 + ' points');
} else if (st5 < 80 ) {
    console.log ('Thomas grade is a c, with ' + st5 + ' points');
} else if (st5< 90 ) {
    console.log ('Thomas grade is a B, with ' + st5 + ' points');
} else if (st5 <= 100 ) {
    console.log ('Thomas grade is an A, with ' + st5 + ' points');
}

//4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

let hour = 20;
// let hour = 11; we get Good morning
// let hour = 15; we get Good afternoon

if (hour >= 6 && hour < 12) {
    console.log ('Good morning');
}

else if (hour >= 12 && hour < 18)
    console.log ('Good afternoon');

else 
    console.log ('Good evening');

//5. For a given day, print out whether it is a day of the work week or weekend.

let day = 2;

if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
    console.log ('Today is a day of the work week');
}
else if (day == 6 || day == 7) {
    console.log ('Today is a weekend day');
}


//6. For a given month, print out in which season it belongs. 

let month = 'January';

if (month == 'December' || month == 'January' || month == 'February' || month == 'March') {
    console.log ('Winter season');
}
if (month == 'April' || month == 'May'|| month == 'June') {
    console.log ('Spring season');
}
if (month == 'July' || month == 'August' || month == 'September') {
    console.log ('Summer season');
}
if (month == 'October' || month == 'November') {
    console.log ('Fall season');
}

