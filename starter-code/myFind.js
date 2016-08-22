// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
function myFind(arr, callback) {
	//loop through each index of the array:
	for(var i=0; i<arr.length; i++){
		//if the index with the callback function returns as true for the critera
		if (callback(arr[i], i, arr)){
			//return that value arr[i]
			return arr[i];
			//otherwise, return as undefined
		}
	}

}

/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFind;
