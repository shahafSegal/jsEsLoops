//7
function getTextInTag(strTag, strText=""){
    return `<${strTag}>${strText}</${strTag}>`
}
function getTextInTagWithAtt(strTag, strAtt ,strText=""){
    return `<${strTag} ${strAtt}>${strText}</${strTag}>`
}
function cListToUpperCase() {
    for (const countryEl of COUNTRY_LIST_EL.getElementsByTagName("li")) {
        countryEl.innerText=countryEl.innerText.toLocaleUpperCase()
    }
}


const COUNTRY_ARR=["Bhutan", "Maldives", "Seychelles", "Eswatini", "Liechtenstein", "Luxembourg", "Mauritius", "Andorra", "Monaco", "San Marino"];

mainDiv.innerHTML+= getTextInTagWithAtt("ul","id='countryList'")

mainDiv.innerHTML+=getTextInTagWithAtt('button','id="changeCountryBtn"',"country to uppercase")

const COUNTRY_LIST_EL=document.querySelector('#countryList')
COUNTRY_ARR.forEach(country => {
    COUNTRY_LIST_EL.innerHTML+=getTextInTag("li",country)
});



const countryBtn=document.querySelector('#changeCountryBtn')
countryBtn.addEventListener('click',cListToUpperCase)
