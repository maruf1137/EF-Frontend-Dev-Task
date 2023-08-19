// Sidebar Functionality
const nav = document.querySelector(".nav");
const btnOpenSidebar = document.querySelector(".btn--bar");
const btnCloseSidebar = document.querySelector(".btn--close");

const openSidebar = () => {
  nav.classList.add("show-sidebar");
};

const closeSidebar = () => {
  nav.classList.remove("show-sidebar");
};

btnOpenSidebar.addEventListener("click", openSidebar);
btnCloseSidebar.addEventListener("click", closeSidebar);

// Popup Functionality
const allSearchBarItems = document.querySelectorAll(".searchBar__item");
const overlay = document.querySelector(".popup-overlay");

allSearchBarItems.forEach((item) => {
  // Insert popup markup
  const popupMarkup = `<div class="popup">
  <div class="popup__nav">
    <h5 class="heading">Platforms</h5>
    <button class="btn btn-all">View All</button>
  </div>
  <div class="popup__list">
    <a href="#" class="popup__item">
      <img src="img/popup-img-1.png" alt="" />
      <p class="text">Steam</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-2.png" alt="" />
      <p class="text">Ubisoft Connect</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-3.png" alt="" />
      <p class="text">EA App</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-4.png" alt="" />
      <p class="text">Battle.net</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-5.png" alt="" />
      <p class="text">Rockstar</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-6.png" alt="" />
      <p class="text">GOG.com</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-7.png" alt="" />
      <p class="text">Microsoft Store</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/popup-img-8.png" alt="" />
      <p class="text">Epic</p>
    </a>
  </div>
  <div class="popup__nav">
    <h5 class="heading">Prepaid Cards</h5>
    <button class="btn btn-all">View All</button>
  </div>
  <div class="popup__list prepaid-list">
    <a href="#" class="popup__item">
      <img src="img/prepaid-logo-1.svg" alt="" />
      <p class="text">Steam Gift Cards</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/prepaid-logo-2.png" alt="" />
      <p class="text">IG Gift Cards</p>
    </a>
    <a href="#" class="popup__item">
      <img src="img/prepaid-logo-3.png" alt="" />
      <p class="text">Blizzard Gift Cards</p>
    </a>
  </div>
</div>`;

  item.insertAdjacentHTML("beforeend", popupMarkup);

  // Handle popup display on item click
  item.addEventListener("click", (event) => {
    const clickedItem = event.currentTarget;
    overlay.classList.add("show-popup");

    // Hide other popups and adjust opacity
    allSearchBarItems.forEach((btn) => {
      btn.classList.remove("show-popup");
      btn.style.opacity = "0.6";
    });

    clickedItem.classList.toggle("show-popup");
  });
});

// Close popup on overlay click
overlay.addEventListener("click", () => {
  overlay.classList.remove("show-popup");
  allSearchBarItems.forEach((btn) => {
    btn.classList.remove("show-popup");
    btn.style.opacity = "1";
  });
});

// Advanced Search Box Functionality
const searchBox = document.querySelector(".form__wrapper");
const btnSearchBoxOpen = document.querySelector(".btn-search");
const btnSearchBoxClose = document.querySelector(".btn-close-searchBox");

btnSearchBoxOpen.addEventListener("click", () => {
  searchBox.classList.add("show-search-box");
});

btnSearchBoxClose.addEventListener("click", () => {
  searchBox.classList.remove("show-search-box");
});
