
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