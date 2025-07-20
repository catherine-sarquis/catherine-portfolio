//find which page the user is on and add "current" CSS class to the related nav link

function findTheCurrentPage(event) {
  const whatPageisThis = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("current");
    const destinationLink = new URL(link.href).pathname;
    let doTheLinksMatch = false;

    if (destinationLink === whatPageisThis) {
      doTheLinksMatch = true;
    }

    if (whatPageisThis === "/index.html" && destinationLink === "/") {
      doTheLinksMatch = true;
    }

    if (whatPageisThis === "/" && destinationLink === "/index.html") {
      doTheLinksMatch = true;
    }

    if (doTheLinksMatch === true) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
}

//make sure page has loaded first
document.addEventListener("DOMContentLoaded", findTheCurrentPage);
