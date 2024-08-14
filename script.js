const allSkillsBtn = document.getElementById("allSkillsBtn");
const skillsDisplay = document.querySelector(".all-skills-display");
const displayArea = document.querySelector(".projects-display");

// hide skillsDisplay by default
skillsDisplay.classList.add("hide");

// add an event listener to the button
allSkillsBtn.addEventListener("click", () => {
  toggleSkills();
  toggleBtnText();
});

// function to toggle the visibility of skillsDisplay
function toggleSkills() {
  skillsDisplay.classList.toggle("hide");
  if (!skillsDisplay.classList.contains("hide")) {
    displayArea.classList.add("hide");
    skillFilter.value = "";
  }
}

// function to toggle the button text
function toggleBtnText() {
  // check if skillsDisplay is hidden
  let isHidden = skillsDisplay.classList.contains("hide");

  // set the button text based on the visibility of skill categories
  if (isHidden) {
    allSkillsBtn.textContent = "view all skills";
  } else {
    allSkillsBtn.textContent = "hide skills";
  }
}

// DISPLAY PROJECTS THAT CONTAIN THE SELECTED SKILL
// Get the skill filter list
const skillFilter = document.querySelector(".skill-filter");

// apply an event listener to the skill-filter list
skillFilter.addEventListener("change", getProjectsBySkill);

// function to get the projects that contain the selected skill
async function getProjectsBySkill(selectedSkill) {
  try {
    const response = await fetch("projects.json");
    if (!response.ok) {
      throw new Error("HTTP-Error: " + response.status);
    }

    displayArea.textContent = ""; //clears previous content is this necessary?

    selectedSkill = selectedSkill.target.value;

    const projectsData = await response.json();

    const filteredProjects = filterProjectsBySkill(projectsData, selectedSkill);

    const formattedHTML = formatProjects(filteredProjects);

    displayArea.innerHTML = formattedHTML;

    // Show the projects display and hide the skills display
    displayArea.classList.remove("hide");
    skillsDisplay.classList.add("hide");
    allSkillsBtn.textContent = "View All Skills";
  } catch (error) {
    console.error("Error fetching or processing projects:", error);
    alert("An error occurred while fetching projects. Please try again later.");
  }
}

function filterProjectsBySkill(projectsData, selectedSkill) {
  const filteredProjects = [];

  console.log("Selected skill: " + selectedSkill);

  for (let i = 0; i < projectsData.length; i++) {
    let project = projectsData[i];

    let foundSkill = false;

    // Check each skill in this project's skills list
    for (let j = 0; j < project.skills.length; j++) {
      let skill = project.skills[j];
      let lowercaseSkill = skill.toLowerCase();

      if (lowercaseSkill === selectedSkill) {
        foundSkill = true; // found the skill!
        break;
      }
    }

    // add project of the found skill to the filtered list
    if (foundSkill) {
      filteredProjects.push(project);
    }
  }

  return filteredProjects; // Return the list of projects that have the selected skill
}

function formatProjects(filteredProjects) {
  let formattedHTML = "";
  filteredProjects.forEach(function (project) {
    let descriptionHTML = "";
    for (let i = 0; i < project.description.length; i++) {
      descriptionHTML += `<p>${project.description[i]}</p>`;
    }

    formattedHTML += `
      <div class="project">
        <img src="${project.logo}" alt="${
      project.name
    } logo" class="project-logo"/>
        <h3>${project.name}</h3>
        <div class="project-links">
        <p><a href="${project.projectLink}" target="_blank">${
      project.projectLink
    } </a></p>
     ${
       project.figmaLink
         ? `<p><a href="${project.figmaLink}" target="_blank">${project.figmaLink}</a></p>`
         : ""
     } </div>
   
        <img src="${project.screenshot}" alt="A screenshot of ${
      project.name
    }" class="screenshot" />
       
        <div class="projectText"> ${descriptionHTML}
        <p class="techStack">Tech Stack: ${project.skills.join(", ")}</p></div>
        
      </div>
    `;
  });
  return formattedHTML;
}
