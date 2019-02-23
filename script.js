
let cats =  ['Ruby', 'Toby', 'Jinny', 'Max', 'Jack'];
let images = ['images/catPic.jpg', 'images/catPic1.jpg', 'images/catPic2.jpg', 'images/catPic3.jpg',
                'images/catPic4.jpg'];



for(var i = 0; i < cats.length; i++){

  let catList = document.getElementById('listOfCats');
  let name = document.getElementById('name');
  let catPics = document.getElementById('catPics');
  let clicks = document.getElementById('clicks1');
  let score = 0;
  let cat, image;

  cat = cats[i];
  image = images[i];

  //create cat catList
  let catNameList = document.createElement('li');
  catNameList.innerHTML = cat;
  catList.appendChild(catNameList);
  catNameList.classList.add('clickCat');

  //Display cat images
  catNameList.addEventListener("click",(function(e) {
      return function(e) {
        catPics.innerHTML = '';
        name.innerHTML = '';
        clicks.innerHTML = '';

        //Display cat name
        let catName = document.createElement('h6');
        catName.innerHTML = cat;
        catName.classList.add('catName');
        name.appendChild(catName);

        //Display cat images
        let catImage = document.createElement('img');
        catImage.src = image;
        catImage.classList.add('pic');
        catPics.appendChild(catImage);

        //counter functionality
        catImage.addEventListener("click", (function(e) {
          return function(e) {
            score++;
            clicks.innerHTML = score;
          }
        })(cat));

      }
  })(cat));


};
