
/*let prevX = -1;
let prevY = -1;

function createDot(event) {
  const container = document.querySelector('.container');
  const dot = document.createElement('div');
  dot.classList.add('dot');
  
  // 이전 점과의 거리를 계산하여 간격을 늘립니다
  if (Math.abs(event.clientX - prevX) > 10 || Math.abs(event.clientY - prevY) > 10) {
    const offsetX = 1; // X 좌표의 조정 값
    const offsetY = 1; // Y 좌표의 조정 값
    dot.style.left = event.clientX - offsetX + 'px';
    dot.style.top = event.clientY - offsetY + 'px';
    prevX = event.clientX - offsetX;
    prevY = event.clientY - offsetY;
    container.appendChild(dot);
  }
}*/


//텍스트 자동 변화//
/*window.onload = function() {
  var sentences1 = ["우리가 수업을 듣는 공간에서 가장 많이 볼 수 있는 테이블을 찍었다. 너무나 큰 크기에 파노라마를 이용했다.", "손을 씻기위해 손 세정제 같은 물질에 손을 올린다. 손이 바라본 풍경은 어떨까?", "변화시킨다.", "나"];
  
  var counter1 = 0;
  
  var elem1 = document.getElementById("changing-text");
  

  setInterval(function() {
      elem1.innerHTML = sentences1[counter1];
      elem1.style.fontSize = "1.8vw"; // 첫 번째 요소의 글꼴 크기를 20px로 설정합니다.
      
      counter1++;
     
      if (counter1 >= sentences1.length) {
          counter1 = 0;
      }
  }, 2000);
};
*/

window.onload = function() {
  var sentences1 = ["화장실을 갈때마다 사용하는 손세정제. 그 밑부분이 어떨지 한번도 생각해본 적이 없었던 것 같다. 바로 시도했다.",
   "시디과의 의자들은 멀쩡한 것을 찾기 어렵다. 그래서 의자를 만질 일이 많은데 그래서 대부분의 사람들이 의자의 밑바닥 이미지를 봤을 가능성이 매우 높다. ", 
  "D로 시작하는 카페의 딸기라떼. 엄청나게 커다란 유리컵이 특징이다. 이 컵은 무척 무거워서 떨어질까봐 걱정이 된다. 그런 걱정을 무릅쓰고 컵을 들어 밑바닥 사진을 찍었다.",
  "먼저 촬영해 협조해준 J씨에게 감사를 드린다. 사람을 밑에서 보는 건 어떨까? 앞써 얘기한 개미나 강아지의 시점에서 바라보는 방법을 사용했다. J씨를 모델처럼 서 있도록 했다. ",
  "손씻는 세면대 밑은 어떨까? 이건 평소에도 잘 알고 있는 이미지라서 별로 흥미가 끌리지 않았다. 다만 밑이미지 보기는 나와의 싸움이기 때문에 ‘밑이미지 보기’를 실행했다. 물을 틀은 상태에서 보면 밑 이미지가 달라지길 기대하면서", 
  "키운지 어느새 1년이 다되어가는 나의 식물들. 바닥에 거의 고정된 상태로 하루종일 보낸다. 고개를 젖히고 귀를 바닥에 붙였다. 사실 화분을 들어올려 유리판 위에 올려놓고 밑 이미지를 찾아내고 싶었지만 유리판이 없었다."];
  var sentences2 = ["결과는 나름 충격적이었다. 내 손이 매일 바라보는 장면이 이런 것이었다니 조금 불쌍하기도 했다. 생각보다 더러웠기 때문이다. 차라리 몰랐으면 좋았을걸… 후회한다.",
   "의자 밑은 나름 귀여운 이미지였다. 조금 둥글둥글 하기도 하고. 다만 이 여린 판때기와 철들이 내 무거운 엉덩이와 뭄뚱아리를 받히고 있었다니 조금 미안하다는 생각이 들었다. ",
    "유리의 겹침이 보이는 컵. 내가 상상한 것과 큰 차이가 없었다. 아무래도 안정적으로 컵을 지지하려면 원형의 안정적인 형상이 좋겠지. 같이 카페에 갔돈 동기들이 날 이상하게 바라봤다.고정되지 않은 물체지만 무거운 무게와 떨어뜨릴 위험 때문에 테이블에 고정된 듯한 역할을 수행하는 물체.",
    "요즘 밑에서 바라보는 구도를 활용한 화보를 많이 접한 것 같은데 그런 이미지와 비슷한 밑이미지가 나왔다. 얼굴 혹은 겉모습에 집착하는 우리, 밑에서 바라본 이미지도 신경써야 하지 않을까요?",
    "이런. 아쉽게도 이미지는 내가 생각한 그대로였다. 꼬불꼬불 섞인 배수관들 그 속에 갇힌 물들. 좀더 세부적인 구조와 형태를 기록하고자 비디오로 이미지를 담았다. 다만 용량 문제로 인해 웹에 업로드 하지는 못했다.", 
    "식물의 잎이 커다랗게 보였다. 잎들이 곧 내 얼굴로 떨어질 것 같을 정도의 가까움이었다. 같은 부분의 식물이라도 원근감에 따라 매우 다르게 느껴졌다. 잠시만 내 얼굴을 바닥에 대고 있었더니 조금 차가워졌다. ",
  ];

  var counter1 = 0;
  var counter2 = 0;

  var elem1 = document.getElementById("changing-text");
  var elem2 = document.getElementById("changing-text2");

  setInterval(function() {
      elem1.innerHTML = sentences1[counter1];
      elem1.style.fontSize = "1vw"; // 첫 번째 요소의 글꼴 크기를 20px로 설정합니다.
      counter1++;
      if (counter1 >= sentences1.length) {
          counter1 = 0;
      }
  }, 2000);

  setInterval(function() {
      elem2.innerHTML = sentences2[counter2];
      elem2.style.fontSize = "1vw"; // 첫 번째 요소의 글꼴 크기를 20px로 설정합니다.
      counter2++;
      if (counter2 >= sentences2.length) {
          counter2 = 0;
      }
  }, 2000);
};




var images = ["img/handsoapf.jpeg", "img/chairb.jpeg", "img/cupf.png", "img/jjf.jpeg", "img/handwashf.png", "img/plantf.jpeg"];
var counter1 = 0;
var imageElem = document.getElementById("changing-image");

setInterval(function() {
    imageElem.src = images[counter1];
    counter1++;
    if (counter1 >= images.length) {
        counter1 = 0;
    }
}, 2000);

var images3 = ["img/handsoapb.jpeg", "img/chairb2.jpeg", "img/cupb.png", "img/jjb2.png", "img/handwashb.jpeg", "img/plantb.jpeg"];
var counter3 = 0;
var image3Elem = document.getElementById("changing-image3");

setInterval(function() {
    image3Elem.src = images3[counter3];
    counter3++;
    if (counter3 >= images3.length) {
        counter3 = 0;
    }
}, 2000);

var images2 = ["img/num1.png", "img/num2.png", "img/num3.png", "img/num4.png"];
var counter2 = 0;
var image2Elem = document.getElementById("changing-image2");

setInterval(function() {
    image2Elem.src = images2[counter2];
    counter2++;
    if (counter2 >= images2.length) {
        counter2 = 0;
    }
}, 600);

var images4 = ["img/num1.png", "img/num2.png", "img/num3.png", "img/num4.png"];
var counter4 = 0;
var image4Elem = document.getElementById("changing-image4");

setInterval(function() {
    image4Elem.src = images4[counter4];
    counter4++;
    if (counter4 >= images4.length) {
        counter4 = 0;
    }
}, 1200);


/* 마우스 점 생성*/
/*let prevX = -1;
let prevY = -1;

function createDot(event) {
  const container = document.querySelector('.container');
  const dot = document.createElement('div');
  dot.classList.add('dot');
  
  // 이전 점과의 거리를 계산하여 간격을 늘립니다
  if (Math.abs(event.clientX - prevX) > 35 || Math.abs(event.clientY - prevY) > 35) {
    dot.style.left = event.clientX + 'px';
    dot.style.top = event.clientY + 'px';
    prevX = event.clientX;
    prevY = event.clientY;
    container.appendChild(dot);
  }
}*/

let prevX = -1;
        let prevY = -1;

        function createDot(event) {
            const container = document.querySelector('.container');
            const dot = document.createElement('div');
            dot.classList.add('dot');

            // 이전 점과의 거리를 계산하여 간격을 늘립니다
            if (Math.abs(event.clientX - prevX) > 100 || Math.abs(event.clientY - prevY) > 100) {
                dot.style.left = event.clientX + 'px';
                dot.style.top = event.clientY + 'px';
                prevX = event.clientX;
                prevY = event.clientY;
                container.appendChild(dot);
            }
        }

/*document.addEventListener('mousemove', function(e) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = (e.pageX - 2.5) + 'px';
  star.style.top = (e.pageY - 2.5) + 'px';
  document.body.appendChild(star);

  setTimeout(function() {
      document.body.removeChild(star);
  }, 1000); // 별이 사라지는 시간 설정 (밀리초 단위)
});*/



/*document.addEventListener('mousemove', function(e) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = (e.pageX - 2.5) + 'px';
  star.style.top = (e.pageY - 2.5) + 'px';
  document.body.appendChild(star);

  setTimeout(function() {
      document.body.removeChild(star);
  }, 2000); // 별이 사라지는 시간 설정 (밀리초 단위)
});

const clickableDiv = document.getElementById('box1');
clickableDiv.addEventListener('click', function() {
  window.location.href = '../index.html'; // 다른 페이지로 이동
});*/



