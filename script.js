/*function moveImage(event) {
    var follower = document.getElementById("follower");
    var xPos = event.clientX - 10; // 이미지의 중심을 마우스 커서에 맞추기 위해 25를 뺍니다.
    var yPos = event.clientY - 10; // 이미지의 중심을 마우스 커서에 맞추기 위해 25를 뺍니다.
    follower.style.top = yPos + "px";
    follower.style.left = xPos + "px";
  }*/
  

  window.onload = function() {
    var sentences1 = ["우리가 보는것을.", "밑바닥 이미지는.", "변화시킨다.", "나", "머리를 돌려서.", "가까이 다가간다"];
    var sentences2 = ["나는 한다.", "from.", "변화시킨다.", "또 다시 이렇게", "머릿속으로 알던", "이미지와","닮았나"];
    var sentences3 = ["다시 한다.", "밑에서 내려보기를.", "지속한다.", "느낌을 준다"];
    var sentences4 = ["looking", "from", "the", "bottom", "with you"];
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var elem1 = document.getElementById("changing-text");
    var elem2 = document.getElementById("changing-text2");
    var elem3 = document.getElementById("changing-text3");
    var elem4 = document.getElementById("changing-text4");

    setInterval(function() {
        elem1.innerHTML = sentences1[counter1];
        elem1.style.fontSize = "1.5vw";
        elem2.innerHTML = sentences2[counter2];
        elem2.style.fontSize = "1vw";
        elem3.innerHTML = sentences3[counter3];
        elem3.style.fontSize = "100%";
        elem4.innerHTML = sentences4[counter4];
        elem4.style.fontSize = "1vw";
        counter1++;
        counter2++;
        counter3++;
        counter4++;
        if (counter1 >= sentences1.length) {
            counter1 = 0;
        }
        if (counter2 >= sentences2.length) {
            counter2 = 0;
        }
        if (counter3 >= sentences3.length) {
            counter3 = 0;
        }
        if (counter4 >= sentences4.length) {
            counter4 = 0;
        }
    }, 200);

    function getRandomGray() {
        var shades = Math.floor(Math.random() * 256);
        return 'rgb(' + shades + ',' + shades + ',' + shades + ')';
    }

    var images = ["ig/chair.jpeg", "ig/wash.jpeg", "ig/happyjj.jpeg", "ig/jjj.jpeg"];
    var counter = 0;
    var imageElem = document.getElementById("changing-image");

    setInterval(function() {
        imageElem.src = images[counter];
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
    }, 700);

    document.addEventListener("click", function(e) {
        var plant = document.createElement("img");
        plant.src = "img/liftonly.png";
        plant.classList.add("plant-image");
        plant.style.left = (e.pageX - 2) + "px";
        plant.style.top = (e.pageY - 2) + "px";
        document.body.appendChild(plant);
    });

    var element = document.querySelector(".element-class");
    element.style.overflow = "hidden";
};



function changeImage() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.style.backgroundImage = "url('img/Group17.png')";
}

function originalImage() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.style.backgroundImage = "url('img/Group 15.png')";
}

//마우스 이미지 변경//

function changeImage() {
    var image = document.getElementById('myImage');
    image.src = 'img/Group17.png';
}

function originalImage() {
    var image = document.getElementById('myImage');
    image.src = 'img/Group 15.png';
}


//마우스 이미지 따라다니기//
/*document.onmousemove = function(e){
    var follower = document.getElementById('follower');
    var xPos = e.clientX;
    var yPos = e.clientY;
    follower.style.top = yPos + 'px';
    follower.style.left = xPos + 'px';
  }*/











