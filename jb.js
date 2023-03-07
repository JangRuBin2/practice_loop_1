
// JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
// var str = '{"test" : "value"}';

// var parsingData = JSON.parse(str);

// console.log(parsingData);


// JavaScript 값이나 객체를 JSON 문자열로 변환

// var json = {"test" : "value"}

// var incodingData = JSON.stringify(json);

// console.log(incodingData);



let merry = { race: "hobbit", name: "Merry Brandybuck" }
let pippin = {race: "hobbit", name: "Pippin Took", bestfriend: merry }
console.log(JSON.stringify(pippin.bestfriend.name));

