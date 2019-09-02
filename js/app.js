// changes page name
const storeName = 'MyStore';
document.title = `${storeName} Grocery Store`;
// -------------------------------------------

// getting elements
console.log('What is in document', document.all[24]);
// console.log('What is in document', document.all[24]); // can't have empty brackets

console.log(' tag element', document.getElementsByTagName('p'));
// ----------------------------------------------------


// two types of alert
// console.log(window.alert('alert!')); // or 
// alert('aleert too!');
// --------------------

// example of using a variable to store element info
let h1Header = document.getElementById('mainIntro');
console.log(`this is the h1 header`, h1Header);
// ----------------------------------------------

// uses variable from previous to assign/change a value in html ---overwrites existing html inindex
h1Header.innerHTML = 'welcome!';
// -------------------------------------

// using queryselectorall--------DOESN'T WORK!!
const getAllNavListClasses = document.querySelectorAll(".nav_list_item");
console.log(`querySelectorAll `,getAllNavListClasses);
getAllNavListClasses.innerHTML = 'this is a test';
//-------------------------
//--------------------------

// querySelector, getElementById --- Same result
const getIconsCredit = document.querySelector('#iconsCredit');
const testDifference = document.getElementById('iconsCredit');
console.log(getIconsCredit);
console.log(testDifference);
//----------------------------

//querySelector requires . and #
const example = document.querySelector('.nav_list_item');
console.log('test',example);

const getClasses = document.getElementsByClassName('nav_list_item');
console.log(`test 2`,getClasses);

// const iamgeExample = document.querySelector('img [alt="cherry-icon"]');
// console.log(iamgeExample);
const magicbutton = document.getElementById('magic');

magicbutton.addEventListener('click', () =>{
    magicbutton.className = 'myPoint';
});

// Works
magicbutton.addEventListener('keyup', () =>{
    console.log('im pressed');
});
//---------------------------

// works, but keycode doesn't 
document.addEventListener('keydown', () =>{
    console.log(event.keycode);
});
//--------------------
//--------------------------


//HOMEWORK

// converts farenheit to celcius
function F2C(Farenheit){
    return (Farenheit - 32)*5/9;
    // return cel;
};

//converts Celcius to Farenheit
function C2F(celcius){
    return (9/5)*celcius + 32;
};

//final displays html
let h3Header = document.getElementById('FtoC');

let numberToConvert = Number(prompt(`Enter a temperature:`));
let scale = confirm(`Is the number in farenheit? Press OK for yes.`);
console.log(scale);

let tempDisplayed = '';

if (scale == true){
    celcius = F2C(numberToConvert);
    console.log(`celsius is `, celcius);
    h3Header.innerHTML =  `${celcius} C`;
    tempDisplayed = 'celcius';
}else{
    Farenheit = C2F(numberToConvert);
    console.log(`this is the number in Farenheit`, Farenheit);
    h3Header.innerHTML =  `${Farenheit} F`;
    tempDisplayed = 'farenheit';
};

// changes the h3 header when clicked
h3Header.addEventListener('click', () =>{if (tempDisplayed == 'farenheit') {
    celcius = F2C(numberToConvert);
    console.log(`celsius is `, celcius);
    h3Header.innerHTML =  `${celcius} C`;
    tempDisplayed = 'celcius';
} else{
    Farenheit = C2F(numberToConvert);
    console.log(`this is the number in Farenheit`, Farenheit);
    h3Header.innerHTML =  `${Farenheit} F`;
    tempDisplayed = 'farenheit';
}});

