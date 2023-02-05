
var group = document.querySelectorAll('.skills__group');

group.forEach(item => {
   item.addEventListener('mouseover', () => {
      item.querySelector('.group__number').classList.add('fz');
   });
});
group.forEach(item => {
   item.addEventListener('mouseout', () => {
      item.querySelector('.group__number').classList.remove('fz');
   });
});

// next

var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {showImg(indexValue = e);}
function showImg(e) {
   var i;
   var img = document.querySelectorAll('.thogths__item');
   var sliders = document.querySelectorAll('.thogths__sliders span');
   if(e > img.length) {indexValue = 1;}
   if(e < 1) {indexValue = img.length;}
   for(i = 0; i < img.length; i++) {
      img[i].style.display = "none";
   }
   for(i = 0; i < sliders.length; i++) {
      sliders[i].style.background = "rgba(34, 34, 34, 0.4)";
   }
   img[indexValue - 1].style.display = "block";
   sliders[indexValue - 1].style.background = "#000";
}