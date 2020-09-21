export const fetchGitHubRepos = () =>
  fetch("https://api.github.com/users/EduardoAC/repos").then((res) =>
    res.json()
  );
