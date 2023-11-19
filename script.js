// Our first API request

const img = document.querySelector(`img`);
const search = document.getElementById("search");
const input = document.getElementById("input");

function getImage(input) {
  let URL = `https://api.giphy.com/v1/gifs/translate?api_key=1dYtDfVcAbsOe6Ipxa6Rc6cgtMy8tuk4&s=${input}`;
  console.log(`URL = ${URL}`);
  fetch(URL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
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

// written using an async function:
// This is does the same thing as our original function above. Only difference is we haven't added in edge case hamdlers.

async function getGiph(input) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=1dYtDfVcAbsOe6Ipxa6Rc6cgtMy8tuk4&s=${input}`,
    { mode: "cors" }
  );
  const apiData = await response.json();
  img.src = apiData.data.images.original.url;
}

getGiph(`trains`);

// ************************************************************************************************

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
  return server.getPeople().then((people) => {
    return people.find((person) => {
      return person.name === name;
    });
  });
}

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}

// ************************************************************************************************
// exercise: Rewrite the following function with async/await instead of .then/catch:

//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }

// My attempt:

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404
