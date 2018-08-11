
function deleteAtPosi(str, posi) {
	return str.slice(0, posi) + str.slice(posi+1); 
}

function superReducedString(s) {
	var arr = s.split('');
	
	for(var i=1; i<=arr.length-1; i++) {
		var currItem = arr[i];
		var prevItem = arr[i-1];
		var newStr = '';
	
		if(currItem == prevItem) {
			// YC, S1
			newStr = deleteAtPosi(s, i-1);
			newStr = deleteAtPosi(newStr, i-1);			

			arr = newStr.split(''); // reset 
			s = newStr; // reset 
			i=0; // if reset same here, will ++, so set 0 

		} else {

		}	
	}

	if(arr.length == 0)
		return 'Empty String';
	else 
		return arr.join('');
}

var s = 'baab';
//var s = 'aa';
//var s = 'ab';
//var s = 'abc';
//var s = 'aab';
//var s = 'aaabccddd';
var out = superReducedString(s);
console.log(out);
