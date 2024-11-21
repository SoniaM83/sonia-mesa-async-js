async function fetchProducts() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        //CHECKS IF RESPONSE STATUS IS NOT OK(404 ERROR)
        if (!response.ok) {
            //THROWS BACK ERROR WITH HTTP STATUS IF NOT VALID
            throw new Error(`HTTP error: ${response.status}`);
        }
        //PARSE RESPONSE AS JSON
        const data = await response.json();
        //LOOP THROUGH USER OBJECTS IN THE DATA & LOGS EACH USER'S NAME
        data.forEach(user => console.log(user.name));
    }   catch (error) {
        //HANDLES ANY ERRORS THAT OCCUR DURING FETCH
        console.error(`Could not fetch products: ${error}`);
    }
}

fetchProducts();