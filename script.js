// rockshox thru shaft service:
// https://www.youtube.com/watch?v=HjDDTVyV3DU



const img = document.querySelector(`img`);
const search = document.getElementById("search");
const input = document.getElementById("input");

function getImage(input) {
  let URL = `https://api.giphy.com/v1/gifs/translate?api_key=1dYtDfVcAbsOe6Ipxa6Rc6cgtMy8tuk4&s=${input}`;
  console.log(`URL = ${URL}`);
  fetch(URL, { mode: "cors" })
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

      let reponseData = response.data;
      if (reponseData == []) {
        console.log(`edge case error achieved?`);
        alert(`you searched for something that doesn't exist`);
      } else img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      alert(`Search failed, nothing in the search bar`);
      console.log(error);
    });
}

search.addEventListener("click", () => {
  console.log(`search term: ${input.value}`);
  let newInput = input.value;
  getImage(newInput);
});

getImage(`dogs`);



const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };





  function getPersonsInfo(name) {
    return server.getPeople().then(people => {
        return people.find(person => { return person.name === name });
    });
  }

  async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  }