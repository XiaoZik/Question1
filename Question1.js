//Declare variables
var value1 = [];
var value2 = [];
var value3 = [];
var value4 = [];
var value5 = [];
var zikri;
var numberString = '';


//Populate arrays
for(var i = 1; i<=10; i++){
    value1.push(i);
    value2.push(i+10);
    value3.push(i+20);
    value4.push(i+30);
    value5.push(i+40);
}
//Create object
zikri = {
    array1: value1,
    array2: value2,
    array3: value3,
    array4: value4,
    array5: value5
};

for(var i = 0; i<= Object.keys(zikri).length-1; i++){
    //Check whether the key is even or odd
    if(Object.keys(zikri)[i].replace(/[^0-9]/g,"") % 2 != 0){
        zikri[Object.keys(zikri)[i]].forEach(evenNumber);
    }
}
//display results
console.log(numberString);

//to check whether the value in the key is even or odd
function evenNumber (number){
    if(number%2 == 0){
        if(numberString == ''){
            numberString = number;
        }
        else{
            numberString = numberString+ ',' + number; 
        }
    }
}

