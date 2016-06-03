let json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// Your code here.
// let familyName, birthDay;
// [familyName, birthDay] = [json.name.family, json.birth.day];
// console.log(familyName);
// console.log(birthDay);

// single line solution
let { name: {family: familyName}, birth: {day: birthDay} } = json;
console.log(familyName);
console.log(birthDay);
