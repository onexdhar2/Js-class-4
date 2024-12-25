let menuBtn = document.querySelector(".toggleBtn");
let sidebar = document.querySelector(".sidebar");
let cancelBtn = document.querySelector(".cancelBtn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

const closeSidebar = (event) => {
  if (
    event.target.classList.contains("sidebar") ||
    event.target.classList.contains("cancelBtn")
  ) {
    sidebar.classList.remove("active");
  }
};
cancelBtn.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", closeSidebar);