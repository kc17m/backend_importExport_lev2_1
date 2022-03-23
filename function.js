const { data } = require("./data.js")

console.log(data[0].population, data.length)



function bigCityOutput(arr) {
    let bigCity = [];
    let cities;
    console.log("will output big cities");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].population > 100000) {
            cities = arr[i].city;
            bigCity.push(cities)
        }

    } return (bigCity)

}

function smallCityOutput(arr) {
    let smallCity = [];
    let cities;
    console.log("will output small cities");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].population < 100000) {
            cities = arr[i].city;
            smallCity.push(cities)
        }

    } return (smallCity)


}

mostCivil = () => {
    return data.filter((civil) => civil.population > 100000)
}

lessCivil = () => {
    return data.filter((civil) => civil.population < 100000)
}




console.log(bigCityOutput(data))
console.log(smallCityOutput(data))
console.log(mostCivil());
console.log(lessCivil());



module.exports = { bigCityOutput, smallCityOutput, mostCivil, lessCivil }