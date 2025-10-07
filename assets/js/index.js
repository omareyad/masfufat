// CDN Config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        tajwal: ["Tajawal", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#5A409B",
          light: "rgba(90, 64, 155, 0.2)",
          titleGroup: "rgba(34, 34, 34, 0.6)",
          dropdownHeader: "rgba(232, 227, 240, 1)",
          sidebarBG: "rgba(90, 64, 155, 0.05)",
          searchColor: "#818181",
          cardBG: "rgba(222, 217, 235, 1)",
          cardBgLight: "rgba(246, 245, 250, 1)",
          cardBgHover: "rgba(214, 209, 227, 1)",
          disabledBG: "rgba(239, 241, 248, 1)",
          deleteBG: "rgba(255, 0, 15, 1)",
        },
      },
    },
  },
};

// toggle collapse #
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#sidebar");
  const btn = document.querySelector("#collapseBtn");
  btn?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
  });
});

// toggle ddl #
const toggle = (btn, dropdown, other) => {
  btn.onclick = (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
    other.classList.remove("active");
    dropdown
      .querySelectorAll(".notification-item")
      .forEach((item, i) => (item.style.animationDelay = `${i * 0.05}s`));
  };
  dropdown.onclick = (e) => e.stopPropagation();
};
const noti = document.getElementById("notificationDropdown");
const notiMobile = document.getElementById("notificationDropdownMobile");
const store = document.getElementById("storeDropdown");
toggle(document.getElementById("notificationBtn"), noti, store, notiMobile);
toggle(
  document.getElementById("notificationMobileBtn"),
  notiMobile,
  noti,
  store
);
toggle(document.getElementById("storeBtn"), store, noti, notiMobile);
document.onclick = () =>
  [noti, store, notiMobile].forEach((d) => d.classList.remove("active"));

// // show/hide offcanvas sidebar
const mobileSideBtn = document.querySelector(".mobileSidebar");
const closeCollapse = document.querySelector("#closeCollapse");
const sidebar = document.querySelector("#sidebar");

mobileSideBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.add("active");
});
closeCollapse.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.remove("active");
});
document.addEventListener("click", (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnToggleButton = mobileSideBtn.contains(e.target);
  if (!isClickInsideSidebar && !isClickOnToggleButton) {
    sidebar.classList.remove("active");
  }
});
