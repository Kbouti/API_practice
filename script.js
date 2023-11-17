const img = document.querySelector(`img`);
const refresh = document.getElementById("refresh");

function getImage() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=1dYtDfVcAbsOe6Ipxa6Rc6cgtMy8tuk4&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      // A Promise!
      return response.json();
    })
    .then(function (response) {
      // Unwrapping another level of promise
      console.log(response);
      // Then getting the URL out of the object we have just returned^
      console.log(response.data.images.original.url);
      // Got it! Now let's set it as the image source:
      img.src = response.data.images.original.url;
    });
}

getImage();
refresh.addEventListener("click", () => {
  console.log(`clicked refresh`);
  getImage();
});
