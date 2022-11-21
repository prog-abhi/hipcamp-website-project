window.onload = () => {
  // near-me button
  document
    .getElementById("near-me-button")
    .addEventListener("mouseover", (event) => {
      document.getElementById("near-me-menu").classList.remove("hide");
      document.getElementById("near-me-menu").classList.add("show");
    });

  document
    .getElementById("near-me-menu")
    .addEventListener("mouseover", (event) => {
      document.getElementById("near-me-menu").classList.remove("hide");
      document.getElementById("near-me-menu").classList.add("show");
    });


  document
    .getElementById("near-me-menu")
    .addEventListener("mouseout", (event) => {
      document.getElementById("near-me-menu").classList.remove("show");
      document.getElementById("near-me-menu").classList.add("hide");
    });

    // about button
    document
    .getElementById("about-button")
    .addEventListener("mouseover", (event) => {
      document.getElementById("about-menu").classList.remove("hide");
      document.getElementById("about-menu").classList.add("show");
      document.getElementById("near-me-menu").classList.remove("show");
      document.getElementById("near-me-menu").classList.add("hide");
    });

  document
    .getElementById("about-menu")
    .addEventListener("mouseover", (event) => {
      document.getElementById("about-menu").classList.remove("hide");
      document.getElementById("about-menu").classList.add("show");
    });


  document
    .getElementById("about-menu")
    .addEventListener("mouseout", (event) => {
      document.getElementById("about-menu").classList.remove("show");
      document.getElementById("about-menu").classList.add("hide");
    });

};
