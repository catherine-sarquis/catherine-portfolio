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

//---------------- GET DATE REPO WAS LAST UPDATED ---------------------
function formatDate(timestamp) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return timestamp.toLocaleDateString("en-GB", options);
}

function displayDate(date) {
  const lastUpdatedElement = document.getElementById("last-updated");
  lastUpdatedElement.textContent = date;
}

async function getLastPush() {
  const url =
    "https://api.github.com/repos/catherine-sarquis/catherine-portfolio";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const timestamp = new Date(json.pushed_at);
    formattedDate = formatDate(timestamp);
    displayDate(formattedDate);
  } catch (error) {
    console.error(error.message);
  }
}

getLastPush();
