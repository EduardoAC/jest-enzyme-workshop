# Jest enzyme workshop

This is a practical workshop which targets basic steps to start working with Jest and Enzyme libraries from existing libraries used within Beacon repositories. 

The main goal is to get a grasp on set of exercise design to learn the Jest+Enzyme tools to help you write tests. However, we won't cover in depth best practises in this session.

## Setting up your local environemnt for the workshop

### Pre=requisities

You have to have setup locally `node > 12.x.x` and `yarn`, if you don't have it please follow the next tutorials

- Setting up node: https://treehouse.github.io/installation-guides/mac/node-mac.html
- Setting up yarn: https://classic.yarnpkg.com/en/docs/install/#mac-stable

**Optionally**, you can setup node through `nvm` which will allow you to pick any version. Although, it presents a few more complexities. it will be useful if you plan to work with different NodeJS version - https://github.com/nvm-sh/nvm#install--update-script

### Setting up your project

1. Fork `jest-enzyme-testing` project using https://gitlab.com/eduardoac/jest-enzyme-testing/-/forks/new
2. Clone the repository to your local workspace by clicking on `clone` button on your forked project
3. Run `yarn install`
4. Run `yarn start` to see the visual components or run `yarn test` to run the tests locally


## Workshop agenda

This workshop wil be oriented to build your basic skill set to write tests for our current setup on `customer-tech` repositories, we won't cover best practises like TDD. However, there are few resources to at the end of this document if you are interested to learn more.

We will focus on the following testing aspects:
- Basic usage of jest for unit testing logic
- Testing a React Component using Jest + Enzyme
  - Using React Classes
  - Using React hooks
  - Managing current Dates using `jest-date-mocks` component changes

Additiomally we will look for find trade off and way to imprve readiblity when we are writing our tests

## Resources

### For testing best practises

- Testing strategies introductory article: https://devqa.io/agile-test-strategy-example-template/
- Best testing practises in agile environment: https://www.globalapptesting.com/the-ultimate-guide-to-agile-testing

### For learn more about testing with Jest + Enzyme

- Video workshop using TDD: https://www.youtube.com/watch?v=tX-gu6FWcsE
- Comprehensive login component testing with Hooks: https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a
- Testing custom React Hooks: https://kentcdodds.com/blog/how-to-test-custom-react-hooks
