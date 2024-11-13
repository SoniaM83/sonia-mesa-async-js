/*const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");
  */
/*
//CHAINING PROMISES
  const fetchPromise = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise.then((response) =>{
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[0].name);
  });
});
    //"baked beans"
*/
/*
const fetchPromise = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].name);
    });
    //"baked beans"
    */
/*
    const fetchPromise = fetch (
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    fetchPromise
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[0].name);
      });
      //"baked beans"
      */
/*
//CATCHING ERRORS
const fetchPromise = fetch (
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!Response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
    //"Could not get products: TypeError: fetch failed"
  */
/*
  //COMBINING MULTIPLE PROMISES
const fetchPromise1 = fetch (
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch (
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch (
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch:${error}`);
  });
  */

  const fetchPromise1 = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch (
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch (
    "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch:${error}`);
    });