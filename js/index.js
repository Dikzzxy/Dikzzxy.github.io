$(window).on("load", function () {
  gsap.to("#loader", 1, { y: "-100%" });
  gsap.to("#loader", 1, { opacity: 0 });
  gsap.to("#loader", 0, { display: "none", delay: 1 });
  gsap.to("#header", 0, { display: "block", delay: 1 });
  gsap.to("#navigation-content", 0, { display: "none" });
  gsap.to("#navigation-content", 0, { display: "flex", delay: 1 });
});
$(function () {
  $(".color-panel").on("click", function (e) {
    e.preventDefault();
    $(".color-changer").toggleClass("color-changer-active");
  });
  $(".colors a").on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $("head").append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
$(function () {
  $(".menubar").on("click", function () {
    gsap.to("#navigation-content", 0.6, { y: 0 });
  });
  $(".navigation-close").on("click", function () {
    gsap.to("#navigation-content", 0.6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
});
$(function () {
  $("#about-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#about", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#contact-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#contact", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#portfolio-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#portfolio", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#blog-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#blog", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#home-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
});
$(function () {
  var body = document.querySelector("body");
  var $cursor = $(".cursor");
  function cursormover(e) {
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002,
    });
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1,
    });
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 0.6,
    });
  }
  $(window).on("mousemove", cursormover);
  $(".menubar").hover(cursorhover, cursor);
  $("a").hover(cursorhover, cursor);
  $(".navigation-close").hover(cursorhover, cursor);
});

// membuat array untuk menyimpan informasi lagu (kode baru ditambahkan)
var songs = [
  { title: "strong ", artist: "Penyanyi 1", cover: "image/about3.jpg" },
  { title: "last child", artist: "Penyanyi 2", cover: "cover2.jpg" },
  { title: "Judul Lagu 3", artist: "Penyanyi 3", cover: "cover3.jpg" },
];

// membuat variabel untuk menyimpan index lagu saat ini
var currentSong = 0;

// mengambil elemen HTML
var songTitle = document.querySelector(".song-title");
var songArtist = document.querySelector(".song-artist");
var albumArt = document.querySelector(".album-art img");
var playPauseButton = document.querySelector(".play-pause");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");

// menampilkan informasi lagu pada elemen HTML
function displaySong() {
  songTitle.textContent = songs[currentSong].title;
  songArtist.textContent = songs[currentSong].artist;
  albumArt.src = songs[currentSong].cover;
}

// memutar lagu berikutnya
function playNext() {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  displaySong();
}

// memutar lagu sebelumnya
function playPrev() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }
  displaySong();
}

// memulai memutar lagu pertama pada saat halaman dimuat
displaySong();

// menambahkan event listener pada tombol next
nextButton.addEventListener("click", playNext);

// menambahkan event listener pada tombol prev
prevButton.addEventListener("click", playPrev);
