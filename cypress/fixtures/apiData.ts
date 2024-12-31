export const createUserRequest = 
{
  "id": 15392531,
  "username": "klaatu",
  "firstName": "Ash",
  "lastName": "Williams",
  "email": "valid email",
  "password": "valid password",
  "phone": "5555555555",
  "userStatus": -18882334
}

export const createUserSchema = 
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