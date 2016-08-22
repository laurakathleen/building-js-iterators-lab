// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	//create a new array to hold new data:
	var newArr= [];
	//loop through the length of the original array:
	for (var i=0; i<arr.length; i++){
		//use the callback function of the current index, index, and array to push (to add) new data to your new array:
		 newArr.push(callback(arr[i], i, arr));
	}
	//return new array to see your new data:
	return newArr;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
