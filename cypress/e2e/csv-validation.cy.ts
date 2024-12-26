import { homepageSelectors } from "../selectors/homepage-selectors";
import * as data from "../fixtures/pageData";

describe("homepage test cases", () => {
  beforeEach(() => {
    cy.visit(data.pageData.homepageUrl)
  });
  it("search input displays data correctly", () => {
    cy.get(homepageSelectors.getMockDataPage).scrollIntoView()
    cy.get(homepageSelectors.getMockDataBtn).click()
    cy.readFile('cypress/downloads/dummy.csv').then((fileContent) => {
        const csvDataArray = fileContent.split('\n').map(row => row.split(','));
            cy.wrap(csvDataArray).should('deep.equal', data.csvDataArray)
      
    });
  })
})
