console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.all);
console.log(document.doctype);
console.log(document.links);
console.log(document.images);

const title = document.querySelector('#main-heading');

title.style.color='green';
title.style.fontWeight ='bold';
title.style.border = "thick solid black";

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
/*headerTitle.textContent="HII";
headerTitle.innerText="Hello";
*/
console.log(headerTitle.textContent)

var header = document.getElementById('main-header');
header.style.borderBottom='solid 3px black';

/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);*/

/*items[0].style.fontWeight ='bold';
items[1].style.fontWeight ='bold';
items[2].style.fontWeight ='bold';
items[3].style.fontWeight ='bold';*/



/*for(var i =0 ;i<items.length;i++){
	items[i].style.fontWeight ='bold';
	items[i].style.backgroundColor ='#f4f4f4';
}
items[2].style.backgroundColor='green';*/


var items = document.getElementsByTagName('li');
console.log(items);
for(var i =0 ;i<items.length;i++){
	items[i].style.fontWeight ='bold';
	items[i].style.backgroundColor ='#f4f4f4';
}


//QuerySelector

var header=document.querySelector('#main-header');
header.style.borderBottom='solid 3px red';


var input= document.querySelector('input');
input.value='Hello World';

var submit = document.querySelector('input[type=submit]');
submit.value='SEND';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.backgroundColor='blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].innerText='Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
	odd[i].style.background="#f4f4f4";
	even[i].style.background='#ccc';
}
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';
