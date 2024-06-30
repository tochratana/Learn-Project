document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.querySelector(".search-result");

  let autocomplete = [
    "Learn code",
    "Create game",
    "Song sweet",
    "Web developer",
    "Mango game",
    "Rean code online",
    "Find debugging",
    "How to create website responsive",
    "What is the best browser to research",
    "Learn Python Programming - Full Course for Beginners",
    "JavaScript Crash Course for Beginners",
    "HTML & CSS Full Course - Beginner to Expert",
    "Learn Java in 12 Hours - Java Full Course",
    "C++ Programming for Beginners - Full Course",
    "SQL Tutorial for Beginners - Learn SQL in 1 Hour",
    "Introduction to React.js - Frontend Development",
    "Node.js Full Course - Learn Node in 6 Hours",
    "Complete Data Science Bootcamp - Python, SQL, and More",
    "Flutter Tutorial for Beginners - Build Android & iOS Apps",
    "Learn Ruby on Rails - Full Course",
    "Kotlin for Beginners - Full Course",
    "Learn C# in 10 Hours - C# Full Course",
    "Mastering Git and GitHub - Version Control Tutorial",
    "Django Full Course - Learn to Build Web Apps in Python",
    "Introduction to Machine Learning with Python - Full Course",
    "Angular Full Course - Learn Angular in 8 Hours",
    "Swift Programming for Beginners - Full Course",
    "Learn R Programming - Full Course for Beginners",
    "Vue.js Crash Course - Full Course",
    "PHP Full Course - Learn PHP in 6 Hours",
    "Bootstrap 5 Tutorial - Full Course for Beginners",
    "Rust Programming for Beginners - Full Course",
    "Go (Golang) Programming - Full Course for Beginners",
    "Complete Cyber Security Course - Network Security",
    "Docker Tutorial for Beginners - Full Course",
    "AWS Certified Solutions Architect - Full Course",
    "Unity Game Development - Full Course for Beginners",
    "Learn TensorFlow and Keras - Deep Learning for Beginners",
    "Selenium WebDriver Tutorial - Full Course for Beginners",
    "Learn TypeScript - Full Course for Beginners",
    "GraphQL Full Course - Beginners to Advanced",
    "MATLAB for Beginners - Full Course",
    "Arduino Programming - Full Course for Beginners",
    "Blockchain Development - Full Course for Beginners",
    "Elixir Programming - Full Course for Beginners",
    "ASP.NET Core Full Course - Learn to Build Web Apps",
    "Learn Redux - Full Course for Beginners",
    "Figma Tutorial for Beginners - Full Course",
    "Introduction to DevOps - Full Course for Beginners",
  ];

  searchInput.addEventListener("input", function () {
    let input = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (input) {
      let filteredResults = autocomplete.filter((keyword) =>
        keyword.toLowerCase().includes(input)
      );
      displayResults(filteredResults);
    }
  });

  function displayResults(results) {
    const ul = document.createElement("ul");
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      ul.appendChild(li);
    });
    searchResults.appendChild(ul);
  }
});

// eye for show password------

// document.getElementById("loginButton").addEventListener("click", function() {
//     window.location.href = "login.html";
// });
