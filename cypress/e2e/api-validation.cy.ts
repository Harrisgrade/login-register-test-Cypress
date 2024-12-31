import { createUserRequest, createUserSchema } from "../fixtures/apiData";
import addFormats from "ajv-formats";
import AjvDraft04 from "ajv-draft-04";

const ajv = new AjvDraft04();
addFormats(ajv);
describe("user operations about user", () => {
  it("create user and validate", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user/", {
      body: {
        createUserRequest,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      const data = response.body;

      const validate = ajv.compile(createUserSchema);
      expect(validate(data)).to.be.true;
    });
  });
  it("get user by username", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user/", {
      body: {
        createUserRequest,
      },
    }).then((response) => {
      expect(response.body).to.deep.equal({
        code: 200,
        message: "0",
        type: "unknown",
      });
    });
  });
});
