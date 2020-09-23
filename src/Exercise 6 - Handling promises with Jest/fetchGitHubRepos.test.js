import { fetchGitHubRepos } from "./fetchGitHubRepos";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn().mockReturnValue(["test"]),
  })
);

describe("fetchGitHubRepos - func", () => {
  it("mock fetch request", async () => {
    const repos = await fetchGitHubRepos();
    // How will you test that the content of the repos variable if the promise always return "test"
  });
});
