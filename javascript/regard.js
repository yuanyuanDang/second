var content_1 = document.getElementById('content-1-1');
var content_2 = document.getElementById('content-1-2');
var content_3 = document.getElementById('content-1-3');
content_1.onclick = function () {
  content_1.style.backgroundColor =  'rgba(0,146,63,1)';
  content_1.style.borderRadius = '10px 10px 0 0';
  content_1.style.color = 'rgba(248,250,248,1)';
  content_2.style.backgroundColor =  '#fff';
  content_2.style.color = 'rgba(51,51,51,1)';
  content_3.style.backgroundColor =  '#fff';
  content_3.style.color = 'rgba(51,51,51,1)';
};
content_2.onclick = function () {
    content_2.style.backgroundColor =  'rgba(0,146,63,1)';
    content_2.style.color = 'rgba(248,250,248,1)';
    content_1.style.backgroundColor =  '#fff';
    content_1.style.color = 'rgba(51,51,51,1)';
    content_3.style.backgroundColor =  '#fff';
    content_3.style.color = 'rgba(51,51,51,1)';
};
content_3.onclick = function () {
    content_3.style.backgroundColor =  'rgba(0,146,63,1)';
    content_3.style.borderRadius = '0 0 10px 10px';
    content_3.style.color = 'rgba(248,250,248,1)';
    content_2.style.backgroundColor =  '#fff';
    content_2.style.color = 'rgba(51,51,51,1)';
    content_1.style.backgroundColor =  '#fff';
    content_1.style.color = 'rgba(51,51,51,1)';
};