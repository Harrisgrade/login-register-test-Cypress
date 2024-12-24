import { homepageSelectors } from "../selectors/homepage-selectors";
import * as data from "../fixtures/pageData";

describe("homepage test cases", () => {
  beforeEach(() => {
    cy.visit(data.pageData.homepageUrl)
      .scrollTo("top")
      .window()
      .its("scrollY")
      .should("equal", 0)
      .then(($scrollY) => {
        cy.wrap($scrollY).as("initialScrollY");
      });
  });
  it("search input displays data correctly", () => {
    cy.get(homepageSelectors.getSearchInput)
      .type("loc")
      .find("#popover > div")
      .first()
      .click();
    cy.get(homepageSelectors.getSearchInput)
      .find("#input-datalist")
      .should("have.value", "Locations")
      .and("be.visible");
  });
  it("mobile menu displays correctly", () => {
    cy.viewport("iphone-x");
    cy.get(homepageSelectors.getEllipsis).should("be.visible").click();
    cy.get("#navmenu").should("be.visible");
    cy.validateResults("#navmenu a", data.pageData.homepageLinks);
    cy.get("#input-datalist").should("have.attr", "placeholder", "Search")
    .and("be.visible");
  });
  it("sign in link work correctly", () => {
    cy.get(homepageSelectors.getSignInBtn).click();
    cy.url().should("eq", data.pageData.signinUrl);
    cy.title().should("eq", "Sign in");
  });
  it("sign up link work correctly", () => {
    cy.get(homepageSelectors.getSignUpBtn).click();
    cy.url().should("eq", data.pageData.signupUrl);
    cy.title().should("eq", "Sign up");
  });
  it("search input displays data correctly", () => {
    cy.get(homepageSelectors.getAboutBtn).click();
    cy.verifyScroll();
    cy.isScrolledTo("#about");
    cy.get(homepageSelectors.getScrollTopBtn).click();
    cy.get("@initialScrollY").should("equal", 0);
  });
  it("services section is displayed correctly", () => {
    cy.get(homepageSelectors.getServicesBtn).click();
    cy.verifyScroll();
    cy.isScrolledTo("#services");
    cy.get(homepageSelectors.getScrollTopBtn).click();
    cy.get("@initialScrollY").should("equal", 0);
  });
  it("portfilio section is displayed correctly", () => {
    cy.get(homepageSelectors.getServicesBtn).click();
    cy.verifyScroll();
    cy.isScrolledTo("#services");
    cy.get(homepageSelectors.getScrollTopBtn).click();
    cy.get("@initialScrollY").should("equal", 0);
  });
  it("team section is displayed correctly", () => {
    cy.get(homepageSelectors.getTeamBtn).click();
    cy.verifyScroll();
    cy.isScrolledTo("#team");
    cy.get(homepageSelectors.getScrollTopBtn).click();
    cy.get("@initialScrollY").should("equal", 0);
  });
  it("contact section is displayed correctly", () => {
    cy.get(homepageSelectors.getContactBtn).click();
    cy.verifyScroll();
    cy.isScrolledTo("#contact");
    cy.get(homepageSelectors.getScrollTopBtn).click();
    cy.get("@initialScrollY").should("equal", 0);
  });
});
