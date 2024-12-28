import { homepageSelectors } from "../selectors/homepage-selectors";
import * as data from "../fixtures/pageData";

// The parseCsv function processes a CSV string by normalizing line endings, 
// removing the header row, filtering out empty rows, and splitting each row into an array of cell values. 
// This results in a structured representation of the CSV data that can be easily manipulated or analyzed in subsequent code.

const parseCsv = (content: string) => {
  const normalize = (content: string) => content.replace(/\r\n/g, "\n");
  const rows = normalize(content).split("\n").slice(1);
  const filteredRows = rows.filter((row) => row.trim() !== "");
  return filteredRows.map((row) => row.split(","));
};

describe("csv test cases", () => {
  beforeEach(() => {
    cy.visit(data.pageData.homepageUrl);
    cy.get(homepageSelectors.getMockDataPage).scrollIntoView();
    cy.get(homepageSelectors.getMockDataBtn).click();
  });
  it("csv download and data validation", () => {
    cy.readFile("cypress/downloads/dummy.csv").then((fileContent) => {
      cy.wrap(parseCsv(fileContent)).should("deep.equal", data.csvDataArray);
    });
  });
  it("validate array rows ", () => {
    cy.readFile("cypress/downloads/dummy.csv").then((fileContent) => {
      const rows = parseCsv(fileContent);
      cy.wrap(rows).each((row) => {
        cy.wrap(row[0]).should("be.a", "string");
        cy.wrap(row[1])
          .should("be.a", "string")
          .and("match", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        cy.wrap(row[2]).should("match", /^(TRUE|FALSE)$/);
        cy.wrap(row[3]).should("match", /^\d{1,2}\/\d{1,2}\/\d{4}$/);
        cy.wrap(row[4]).should("match", /^data_data.csv$/);
      });
    });
  });
  it("validate header", () => {
    cy.readFile("cypress/downloads/dummy.csv").then((fileContent) => {
      const header = fileContent.replace(/\r/g, "").split("\n")[0].split(",");
      cy.wrap(header).should("deep.equal", [
        "user",
        "user_email",
        "subscribed",
        "date",
        "source",
      ]);
    });
  });
});
