function getUserInfo() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      const userList = document.getElementById('user-list');
      users.forEach(user => {
        console.log(user);
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } else {
      console.error("Error fetching data");
    }
  };

  xhr.onerror = function () {
    console.error("Request error");
  };

  xhr.send();
}
