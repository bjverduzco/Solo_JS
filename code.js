//Solo JS 1
//Brian Verduzco
//6-21
var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//Question 1
var tempString;
for(var i =0; i < stringList.length; i++){
  if(i ===0){
    tempString = "Months listed are " + stringList[i] + ", ";
  }
  else if(i != (stringList.length -1)){
    tempString = tempString + stringList[i] + ", ";
  }
  else {
    console.log(tempString + stringList[i] + ".");
  }
}

//Question 2
console.log(numList[(numList.length - 1)]);

//Question 3
var tempString = [];
for(var i = 0; i < numList.length; i++){
  tempString += numList[i];
  if(i === (numList.length - 1)){
    console.log(tempString);
  }
}

//Question 4
var tempNum = 0;
for(var i = 0; i < numList.length; i++){
  tempNum += numList[i];
  if(i === (numList.length - 1)){
    console.log(tempNum);
  }
}

//Question 5
if(boolList[1] === true){
  console.log(numList[0] + numList[(numList.length - 1)]);
}
else {

  console.log(numList[1] * numList[1])
}

//Question 6
for(var i = 0; i < boolList.length; i++){
  if(boolList[i] === true){
    console.log(numList[i]);
  }
}

//Question 7
var tempArray = [];
tempArray = stringList.concat(numList.concat(boolList));
console.log(tempArray.reverse());


// for(var i = 0; i < 1; i++){
//   for(var j = 0; j < stringList.length; i++){
//     tempArray.push(stringList[j]);
//   }
//   for(var j = 0; j < numList.length; i++){
//     tempArray.push(numList[j]);
//   }
//   for(var j = 0; j < boolList.length; i++){
//     tempArray.push(boolList[j]);
//   }
//   console.log(tempArray.reverse());
// }
