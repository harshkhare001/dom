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
