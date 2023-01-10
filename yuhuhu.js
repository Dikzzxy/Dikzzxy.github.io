// untuk mengakses suatu gambar
document.getElementById("file").addEventListener("click", function () {
  document.getElementById("image").src = "https://dikzzxy.com/image.jpg";
});

document.getElementById("link").addEventListener("click", function () {
  // Code for taking a photo or accessing an image file
  // ...

  var image = canvas.toDataURL("image/jpeg");
  var img = document.createElement("img");
  img.src = image;
  document.body.appendChild(img);
});

// untuk mengakses lokasi
document.getElementById("file").addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    document.getElementById("location").innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  });
});
//  kode yang ke 2
navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords.latitude, position.coords.longitude);
});
// **
navigator.geolocation.watchPosition(function (position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

// %%
navigator.permissions
  .requestPermission({ name: "geolocation" })
  .then(function (result) {
    if (result === "granted") {
      console.log("Izin diberikan");
    } else if (result === "denied") {
      console.log("Izin ditolak");
    } else {
      console.log("Izin tidak diberikan");
    }
  });

//   @@
navigator.permissions
  .requestPermission({ name: "geolocation" })
  .then(function (result) {
    if (result === "granted") {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Izin tidak diberikan");
    }
  });
// mengakses data basesnya
document.getElementById("link").addEventListener("click", function () {
  fetch("https://example.com/database")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
// $$
document.getElementById("link").addEventListener("click", function () {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "user" } })
    .then(function (stream) {
      var video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      document.body.appendChild(video);

      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      video.addEventListener("click", function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var image = canvas.toDataURL("image/jpeg");
        console.log(image);
      });
    });
});
// mengakses gambar ke galeri
document.getElementById("link").addEventListener("click", function () {
  document.getElementById("input").click();
});

document.getElementById("input").addEventListener("change", function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var image = event.target.result;
    console.log(image);
  };

  reader.readAsDataURL(file);
});
// mengakses video ke galeri
document.getElementById("link").addEventListener("click", function () {
  document.getElementById("input").click();
});

document.getElementById("input").addEventListener("change", function (event) {
  var file = event.target.files[0];
  var url = URL.createObjectURL(file);

  var video = document.createElement("video");
  video.src = url;
  video.play();

  document.body.appendChild(video);
});
// link aksesnya
document.getElementById("link").addEventListener("click", function (event) {
  event.preventDefault();
  this.href = "https://example.com";
});
