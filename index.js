const { bigCityOutput, smallCityOutput, mostCivil, lessCivil } = require("./function.js")
const { data } = require("./data.js")

console.log(bigCityOutput(data));
console.log(smallCityOutput(data));

console.log(mostCivil());
console.log(lessCivil());

