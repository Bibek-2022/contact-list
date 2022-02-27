// fetch 20 random user on page load
// filter user by gender
// filter user by name

const apiUrl = "https://randomuser.me/api/?";
const listElm = document.querySelector("#user-list");

// display User
const displayUsers = (users) => {
  let str = "";
  //   if (users.length > 0) {
  //     str = "No user to display";
  //     listElm.innerHTML = str;

  //     return;
  //   }
  users.map((user) => {
    str += `
    <div class = "card col-md-6 col-lg-3 py-2">
        <div class="card">
            <img src="${user.picture.medium}" class="card-img-top" alt="..." />
            <div class="card-body user-card">
            <h4 class = "text-center">${user.name.title} ${user.name.first} ${user.name.last}</h4>
          
             <div><span><i class="fa-solid fa-mobile-button"></i></span>${user.cell}</div>
             <div><span><i class="fa-solid fa-at"></i></span>${user.email}</div>
             <div><span><i class="fa-solid fa-location-pin"></i></span>${user.location.city}</div>
             
            
            </div>
          </div>
    </div>
    `;
  });
  listElm.innerHTML = str;
};

// Fetching the data
const fetchUser = (params = "results=20") => {
  // fetch from api
  fetch(apiUrl + params)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const users = data.results;

      displayUsers(users);
    })
    .catch(() => console.log(error));
};

fetchUser();

// for dropdown menu

const handleOnChange = (e) => {
  console.log(e.value);
  const params = `results=20&gender=${e.value}`;
  fetchUser(params);
};
