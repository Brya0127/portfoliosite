$(document).ready(function() { 







const projects = {
  Python: [
    {
      title: "Python Project 1",
      image: "https://via.placeholder.com/300x400",
      description: "Description of Python Project 1",
      type: "",
    },
    {
      title: "Python Project 2",
      image: "https://via.placeholder.com/300x400",
      description: "Description of Python Project 2",
      type: "",
    },
    {
      title: "Python Project 3",
      image: "https://via.placeholder.com/300x400",
      description: "Description of Python Project 3",
      type: "",
    },
  ],
  JavaScript: [
    {
      title: "Government Side Nav",
      image: "imgs/fesnav.png",
      description: "Description of JavaScript Project 1",
      type: "UI Design",
      // button: <button>View Project</button>,
    },
    {
      title: "JavaScript Project 2",
      image: "https://via.placeholder.com/300x400",
      description: "Description of JavaScript Project 2",
      type: "API Usage",
    },
    {
      title: "JavaScript Project 3",
      image: "https://via.placeholder.com/300x400",
      description: "Description of JavaScript Project 3",
      type: "Website",
    },
  ],
};


function updateCards(language) {
  const projectData = projects[language];

  $(".mtg-card").each(function (index) {
    const project = projectData[index];
    if (project) {
      $(this).find(".mtg-card-header").text(project.title);
      $(this).find(".mtg-card-image").css("background-image", `url('${project.image}')`);
      $(this).find(".mtg-card-text").text(project.description);
      $(this).find(".mtg-card-footer").html(`
        <h5>Project Type — ${project.type}</h5>
        <button class="viewpro btn btn-secondary">View Project</button>
      `);
    }
  });
}


// Add event listeners to buttons
$("#pybutton").on("click", function () {
  updateCards("Python");
});

$("#jsbutton").on("click", function () {
  updateCards("JavaScript");
});


}); // end ready

// animation test
// twas a bad idea