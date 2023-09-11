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

var items = document.getElementsByClassName('list-group');
console.log(items);