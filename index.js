// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function firstUpperCase(str) {
	// body...
	var arr, newArr=[];
	arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i][0].toUpperCase() + arr[i].substring(1));
	}
	return newArr.join(' ');
}
console.log(firstUpperCase(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var amount = money.split('￥');
console.log(amount[1]);
