// The localStorage and sessionStorage APIs are part of the Web Storage API and are used to store data in the browser.

// localStorage:

    // Purpose: To store data with no expiration date. The data will persist even after the browser window is closed.
    // Usage: It’s used to store information that needs to be accessed across multiple sessions, such as user preferences or login status.

// sessionStorage:

    // Purpose: To store data for one session. The data is cleared when the page session ends (i.e., when the browser tab is closed).
    // Usage: It’s used for temporary data that should not persist across sessions, like data in a form that has not been submitted yet.



// Save data to localStorage
localStorage.setItem('username', 'JohnDoe');

// Get data
const username = localStorage.getItem('username');
console.log(username);   // JohnDoe

// Remove data
localStorage.removeItem('username');





// Save data to sessionStorage
sessionStorage.setItem('sessionName', 'Session1');

// Get data 
const sessionName = sessionStorage.getItem('sessionName');
console.log(sessionName); // Session1

// Remove data
sessionStorage.removeItem('sessionName');

