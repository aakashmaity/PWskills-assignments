// The XMLHttpRequest object is used in JavaScript to interact with servers. It allows you to retrieve data 
// from a URL without having to do a full page refresh. This enables a Web page to update just part of the 
// page without disrupting what the user is doing. 
//XMLHttpRequest is used heavily in AJAX programming.

const xhr = new XMLHttpRequest();
xhr.open('GET', 'your-api-url', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
