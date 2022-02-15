// Make an AJAX request with the built in JS object 'fetch'
// fetch() works/retuns a Promise. 
// If the request was successfull, it returns a resolved Promise, otherwise it returns a rejected Promise
// http://codexplained.se/lorem_text.php
console.log('############## Fetch makes an AJAX request, that returns a Promise ##########');
fetch('http://codexplained.se/lorem_text.php') // Processing the AJAX request/promise
.then((response) => {                     // First .then-block, processess the response. I the request was recieved (Resolved)
    console.log(response);
    console.log(response.ok); // returns true, only if 200–299

    // if (response.ok === false) {
    //     throw new Error('Something whent wrong');
    // }
    console.log('First Promise resolved. Request/response was recieved, and another Promise is returned')

    return response.text();  // This is the second Promise, that will be handled in the coming block
})
.then((data) => {                           // Second then-block processes tge response data
    console.log('Second Promise resolved. Means we got access to the requested data')
    console.log(data);

    document.getElementById('text').innerHTML = data
})
.catch((error) => {
    // Only catches network errors. Meaning the request wasn-t recieved.
    // Other than that, it doesn't catch for instance 404 error, meaning the request was recieved, but the resource was not found.
    // In those cases we can force an error with "throw new Error()"
    console.log('Promise got rejected. Either the request OR the processing of the data, went wrong')
    console.log(error);
})
.finally(() => {
    console.log("The finally-block is used when something is needed to be done regardless of the outcome")
})