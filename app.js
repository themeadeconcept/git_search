/// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input Event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text (Whatever value is being typed in)
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert that user is not found
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Else, show the profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
