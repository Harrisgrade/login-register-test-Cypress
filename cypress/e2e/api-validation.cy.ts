import { createUserRequest} from "../fixtures/apiData";
import Ajv from "ajv";
const ajv = new Ajv();

const createUserSchema = 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "code": {
      "type": "integer"
    },
    "type": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  },
  "required": [
    "code",
    "type",
    "message"
  ]
}


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
  });

