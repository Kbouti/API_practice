const img = document.querySelector(`img`);
const search = document.getElementById("search");
const input = document.getElementById("input");

function getImage(input) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=1dYtDfVcAbsOe6Ipxa6Rc6cgtMy8tuk4&s=${input}`,
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

search.addEventListener("click", () => {
  console.log(`search term: ${input.value}`);
  getImage(input.Value);
});

getImage(`dogs`);

