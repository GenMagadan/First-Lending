// alert('проверка');
document.getElementById('btn').addEventListener('click', showDivTrue);
let myDiv = true;
function showDivTrue() {
   let isShow1 = document.getElementById('true');
   let isShow2 = document.getElementById('false');
   let isShow3 = document.getElementById('box-1');
   let isShow4 = document.getElementById('box-2');
   let historiElement = document.querySelector('#histori');
   if (myDiv) {
      isShow1.style.display = 'none';
      isShow2.style.display = 'block';
      isShow2.style.display = 'grid';
      isShow3.style.display = 'none';
      isShow4.style.display = 'block';
      historiElement.style.background = 'brown';
      myDiv = false;
   } else {
      isShow1.style.display = 'block';
      isShow1.style.display = 'grid';
      isShow2.style.display = 'none';
      isShow3.style.display = 'block';
      isShow4.style.display = 'none';
      historiElement.style.background = 'red';
      myDiv = true;
   }
}


