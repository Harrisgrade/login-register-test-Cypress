import { homepageSelectors } from "../selectors/homepage-selectors";
import * as data from "../fixtures/pageData";

describe("homepage test cases", () => {
  beforeEach(() => {
    cy.visit(data.pageData.homepageUrl);
  });
  it("csv download and data validation", () => {
    cy.get(homepageSelectors.getMockDataPage).scrollIntoView();
    cy.get(homepageSelectors.getMockDataBtn).click();
    
    cy.readFile("cypress/downloads/dummy.csv").then((fileContent) => {
        const normalize = (fileContent) => fileContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        cy.wrap(normalize(fileContent)).should("equal", normalize(data.csvDataArray.join('\n')));
    });
  });
});
