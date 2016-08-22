// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach
//Break down forEach into myEach
function myEach(arr, callback) {
	//Print to console the function;
		console.log('myEach');
	//loop through the array starting at index[0] and iterating through each;
	for (var i=0; i<arr.length; i++) {
	//Take the three arguments needed to execute in the function for each element:
		callback(arr[i], i, arr);
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
