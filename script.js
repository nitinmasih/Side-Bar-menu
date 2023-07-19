// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector(".sidebar_open");
const sidebarCloseBtn = document.querySelector("#sidebar_close");
const sidebarLockBtn = document.querySelector("#lock_icon");

// Function to toggle the lock state of the sidebar

const toogleLock = () => {
  sidebar.classList.toggle("locked");
  if (!sidebar.classList.contains("locked")) {
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    sidebar.classList.add("hoverable");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};
const hideSidebar = () => {
if (sidebar.classList.contains("hoverable")) {
  sidebar.classList.add("close"); }}


  const showSidebar= () => {
if (sidebar.classList.contains("hoverable")) {
  sidebar.classList.remove("close");
}}
// Function to show and hide the sidebar
function toggleSidebar() {
  sidebar.classList.toggle("close");
}
// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
 
}


sidebarLockBtn.addEventListener("click", toogleLock );
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
