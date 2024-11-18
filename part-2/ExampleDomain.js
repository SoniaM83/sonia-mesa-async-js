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

    //https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
      https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
      https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
  */
/*
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
      //"Failed to fetch: TypeError: Failed to fetch"
    */
/*
    const fetchPromise1 = fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    const fetchPromise2 = fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    );
    const fetchPromise3 = fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    );
    
    Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
      .then((response) => {
        console.log(`${response.url}: ${response.status}`);
      })
      .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
      });
        //"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200"
  */

  //ASYNC AND AWAIT
/*async function myFunction() {
  //this is an async function
}
*/
/*
async function fetchProducts() {
  try {
    //after this line, our function will wait for the `fetch()` call to be settled
    //the `fetch()` call will either return a Response of throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    //after this line, our function will wait for the `response.json()` call to be settled
    //the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get product: $(error)`);
  }
}

fetchProducts();
  //"baked beans"
  */
/*
  async function fetchProducts() {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  
  const promise = fetchProducts();
  promise
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
    //"baked beans"
    */

async function fetchData() {
    try {
      // using await outside an async function is only allowed in a module
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
      throw error;
    }
}

fetchData();
    //"baked beans"