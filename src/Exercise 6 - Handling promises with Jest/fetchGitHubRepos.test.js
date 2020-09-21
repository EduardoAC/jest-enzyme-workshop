import { fetchGitHubRepos } from "./fetchGitHubRepos";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn().mockReturnValue(["test"]),
  })
);

describe("fetchGitHubRepos - func", () => {
  it("mock fetch request", async () => {
    const repos = await fetchGitHubRepos();
    expect(repos).toEqual(["test"]);
  });
});
