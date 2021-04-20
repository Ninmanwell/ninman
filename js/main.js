// 1) შევქმნათ რიცხვითი ცვლადი x 
let x = 15;

// 2) შევქმნათ ფუნქცია რომელიც მოცემულ x ცვლადს გაზრდის ერთით ან გაამრავლებს თავის თავზე , მოცემული ფუნქცია უნდა აბრუნებედეს გაზრდილი ცვლადის მნიშვნელობას
// 3) ფუნცია უნდა გამოიტანოთ html ში 
function myfunction(x){
    x++;
    return (x);
}
let result = myfunction(x);
document.getElementById("x").innerHTML = result;

function myfunction1(x){
    return(x*x);
}
let results = myfunction1(x);
document.getElementById("x1").innerHTML = results;


// 4) შევქმნათ ფუნქცია რომელიც პარამეტრად მიიღებს ორ პარამეტრეს , ფუნქცია უნდა აბრუნებედეს
//  მიღებული პარამეტრების ნამრავლს ,
function tests(p1, p2){
    return (p1 * p2) ;
 }

 let main = tests(10, 10);
 document.getElementById("tests").innerHTML = main;

// 5) შევქმნათ სტრინგი რომელიც უნდა გამოვიტანოთ html ში , სტრინგი უნდა რენდერდებოდეს html 
// ტეგის სახით და ატრიბუტში  მნიშვნელობა უნდა გადაეცემოდეს  ცვლადიდან
let img ="img/Pulp-Fiction-Movie-Bucket-List.jpg";


let pic = `<img src="${img}" class="${img}">`;
document.getElementById("img").innerHTML = pic;


 
// -- 

// საშინაო დავალება

// 1) შევქმნათ ფუნქცია რომელიც მოძებნის სტრინგში კონკრეტულ  სიტყვას , ფუნქციამ უნდა დააბრუნოს ძებნის შედეგი


function finds(value){
    let match = mystr.search(value)
    if(match != -1){
        console.log("sityva moidzebna")

    }
    else{
        console.log("sityva ver moidzebna")
    }
}

let mystr = "Pulp fiction is wonderful movie";


// 2) შევქმნათ სტრინგი ამოვჭრათ მასში არსებული პირველი  და ბოლო სიტყვა 

console.log(mystr.slice(4, 25));

// 3) შევქმნათ სტრინგი ამოვჭრათ მასში არსებული ყველა სიტყვა გარდა შუა მდებარე  სიტყვისა
console.log(mystr.slice(15, 26));