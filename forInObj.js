//8
let House={
    street:"Pennsylvania",
    city:"Washington D.C",
    country:"USA",
    number_of_rooms: 120,
    is_populated: true
}


function printValuesToScreen(obj1){
    for (const anyKey in obj1) {
        MAIN_EL.innerHTML+=`<p>${obj1[anyKey]}</p>`
    }
}

function printObjToScreen(obj1){
    for (const anyKey in obj1) {
        MAIN_EL.innerHTML+=`<p>${anyKey.replaceAll('_',' ')} : ${obj1[anyKey]}</p>`
    }

}

function printKeys(obj1){
    for (const anyKey in obj1) {
        console.log(anyKey)
    }
}
const MAIN_EL=document.getElementById("mainDiv")

// console.log(House)
// printKeys(House)
// printObjToScreen(House)

//9
const DOG_ARR=[
    {
        dogName: "Buddy",
        age: 3,
        species: "Golden Retriever"
    },
    {
        dogName: "Luna",
        age: 2,
        species: "German Shepherd"
    },
    {
        dogName: "Max",
        age: 5,
        species: "Labrador Retriever"
    }
]

function getObjStr(obj1,startText=""){
    let objectStr=""
    for (const anyKey in obj1) {
        objectStr+=` ,${anyKey.replaceAll('_',' ')} : ${obj1[anyKey]}`
    }
    return startText+objectStr.replace(',','')
}
DOG_ARR.forEach((dogObj,index) => {
    console.log(getObjStr(dogObj,`Dog ${index+1}: `));
});