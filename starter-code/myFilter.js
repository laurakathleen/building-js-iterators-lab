// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {
//create a new array to store your new filtered values within:
var newArr = [];
//loop through the original array to check the value at each index:
for (var i=0; i<arr.length; i++){
	//run the callback function on the indeces
	if (callback(arr[i], i, arr)){
		//If the indeces run through the function are true, add that to the new array;
		newArr.push(arr[i]);
	}
	return newArr;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/






// export this function (you can ignore this for now)
module.exports = myFilter;
