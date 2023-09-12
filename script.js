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


var itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'purple';

console.log(itemList.parentNode.parentNode.parentNode);


console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor='yellow';

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello'

console.log(itemList.lastChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='pink';

var itemList = document.querySelector('#items');
console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling);

console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

itemList.previousElementSibling.style.backgroundColor='red';


var newDiv = document.createElement('div');

newDiv.id='hello1';
newDiv.className = 'hello';
newDiv.setAttribute('title','hello');
var divText = document.createTextNode('Hello');
newDiv.appendChild(divText);
console.log(newDiv);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);


var container2 = document.querySelector('.list-group');

let li = document.createElement('li');
li.className = 'list-group-item';
li.innerText = 'Hello';
container2.insertBefore(li,container2.firstChild);
//container2.appendChild(li);
var form = document.getElementById("addForm");

var itemList = document.getElementById('items');

var item = document.getElementById('item');

var form = document.getElementById("addForm");

var itemList = document.getElementById('items');

var item = document.getElementById('item');
var item1 = document.getElementById('item1');

form.addEventListener('submit', addItem);

function addItem(e){
	e.preventDefault();
	console.log(1);
	var item = document.getElementById('item');
	var item1 = document.getElementById('item1');
	
	var li = document.createElement('li');

	li.className='list-group-item';
	li.appendChild(document.createTextNode(item.value+" "+item1.value));
	
	
	//delete button 
	var delbutton  = document.createElement('button');
	delbutton.className= 'btn btn-danger btn-sm float-right delete';
	//now add x for the delete button
	delbutton.appendChild(document.createTextNode('x'));
	li.appendChild(delbutton);

	var editButton = document.createElement('button');
	editButton.className='btn  btn-sm float-right edit mr-3';
	editButton.appendChild(document.createTextNode('EDIT'));
	li.appendChild(editButton);

	itemList.appendChild(li);
}

itemList.addEventListener('click',removeItem);

function removeItem(e){
	e.preventDefault();

	if(e.target.classList.contains('delete')){
		var li = e.target.parentElement;
		itemList.removeChild(li);
	}
}


//filter

var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

function filterItems(e){
	e.preventDefault();

	var text = e.target.value.toLowerCase();
	console.log(text);

	var items = itemList.getElementsByTagName('li');

	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		
		if(itemName.toLowerCase().indexOf(text)!=-1 ){
			item.style.display='block;'
		}
		else{
			item.style.display='none';
		}
	})
}
