$(function () {
  $(".tv-video").each(function () {
    let image = $(this).attr("data-video");
    $(this).html(
      '<img alt="" src="https://i.ytimg.com/vi/' + image + '/hq720.jpg" />'
    );
  });
  $(".tv-video").click(function () {
    $(this).addClass("show");
    let video = $(this).attr("data-video");
    $(this).html(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        video +
        '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
});

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 55, duration: 3000 });
$("#number3").jQuerySimpleCounter({ end: 359, duration: 2000 });
$("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });

/* AUTHOR LINK */
$(".about-me-img").hover(
  function () {
    $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
  },
  function () {
    $(".authorWindowWrapper")
      .stop()
      .fadeOut("fast")
      .find("p")
      .removeClass("trans");
  }
);
