let catPhoto = document.getElementById('catPic');
let catPhoto1= document.getElementById('catPic1');
let clicks = document.getElementById('clicks');
let clicks1 = document.getElementById('clicks1');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let score = 0;
let score1 = 0;

catPhoto.addEventListener("click", function() {
  score++;
  clicks.innerHTML = score;
  name2.innerHTML = 'Toby';
})

catPhoto1.addEventListener("click", function() {
  score1++;
  clicks1.innerHTML = score1;
    name1.innerHTML = 'Ruby';
    console.log(clicks1.innerHTML);
})
