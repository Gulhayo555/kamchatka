let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.nav_list');


burger.addEventListener('click', function () {
  burger.classList.toggle('active')
  list.classList.toggle('active')
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    30: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
   
     540 : {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // 640: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
});
  
window.addEventListener('scroll',()=> {
  let content = document.querySelector('.trips_info');
  let contentPosition =content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
if(contentPosition < screenPosition){
   content.classList.add('active');
}else{
    content.classList.remove('active');
}   
})
const title = document.querySelector('.intro_inf_a')

let txt = title.innerHTML

title.innerHTML = ""
let i = 0
function typing() {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing()
        }, 100);
    }
}
setTimeout(() => {
    typing()
}, 1000);

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const boxes = document.querySelectorAll(".expected_box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}



