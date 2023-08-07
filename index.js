// function toggleContent(box) {
//     box.classList.toggle("expanded");
//   }
  function toggleContent(box) {
    box.classList.toggle("expanded");

    // If the box is now expanded, add a global click event to detect clicks outside the box
    if (box.classList.contains("expanded")) {
      document.addEventListener("click", closeBoxOnOutsideClick);
    } else {
      document.removeEventListener("click", closeBoxOnOutsideClick);
    }
  }

  function closeBoxOnOutsideClick(event) {
    const box = document.querySelector(".box.expanded");
    if (box && !box.contains(event.target)) {
      toggleContent(box);
    }
  }