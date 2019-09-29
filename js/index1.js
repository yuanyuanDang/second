
var list_1 = document.getElementById('list_1');
var list_2 = document.getElementById('list_2');

list_1.onclick = function () {

    list_2.style.display = 'block';
    list_1.style.color = '#31C27C';

};

list_2.onclick = function () {

    list_2.style.display = 'none';
    list_1.style.color = '#333333';

};