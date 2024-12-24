import { homepageSelectors } from "../selectors/homepage-selectors";
import * as data from "../fixtures/pageData";
describe("Homepage test cases", () => {
    beforeEach(() => {
        cy.visit(data.pageData.homepageUrl);
        cy.viewport(1280, 720);
    });
    it("search input displays data correctly", () => {
        cy.get(homepageSelectors.getSearchInput)
        .type('loc').find('#popover > div').first().click();
        cy.get(homepageSelectors.getSearchInput)
        .find('#input-datalist').should('have.value', 'Locations');
        });
        it("search input displays data correctly", () => {
            // cy.get('.active').click();
            // cy.get('#about').should('be.visible');

            cy.get('.main').then(($container) => {
                const initialScrollTop = $container.scrollTop();
              
                // Click the button that triggers scrolling
                cy.get('#navmenu > ul > :nth-child(2) > a').click();
              
                // Assert that the container's scroll position has changed
                cy.get('#hero')
                  .invoke('scrollTop')
                  .should('be.greaterThan', initialScrollTop);
              });
              
        });
        
    });


