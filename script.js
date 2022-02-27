// fetch 20 random user on page load
// filter user by gender
// filter user by name

const apiUrl = "https://randomuser.me/api/?";
const listElm = document.querySelector("#user-list");
const countElm = document.querySelector("#user-count");
let usrArgs = [];
// let count = 0;
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
            <h4 class = "text-center">${user.name.title} <span id="unique highlight"></span>${user.name.first} ${user.name.last}</h4>
          
             <div><span><i class="fa-solid fa-mobile-button"></i></span>${user.cell}</div>
             <div><span><i class="fa-solid fa-at"></i></span>${user.email}</div>
             <div><span><i class="fa-solid fa-location-pin"></i></span>${user.location.city}</div>
             
            
            </div>
          </div>
    </div>
    `;
  });
  listElm.innerHTML = str;
  countElm.innerHTML = users.length;
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
      usrArgs = data.results;

      displayUsers(usrArgs);
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

// on key

const handleOnSearch = (e) => {
  const str = e.value.toLowerCase();
  const filteredArgs = usrArgs.filter((item) => {
    const userFullName = (
      item.name.first +
      "" +
      item.name.last
    ).toLocaleLowerCase();
    if (userFullName.includes(str)) {
      return item;
    }
  });

  displayUsers(filteredArgs);
  let arr = document.querySelectorAll("h4");
  console.log(arr);
  //   arr.map((x) => x.classList.add("highlight"));
  arr.forEach((element) => {
    element.classList.add("highlight");
  });
};
