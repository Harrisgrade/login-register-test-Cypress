import { use } from "chai";

export const pageData = {
  baseUrl: "http://localhost:3000/",
  signinUrl: "http://localhost:3000/login.html",
  signupUrl: "http://localhost:3000/reg.html",
  homepageUrl: "http://localhost:3000/",
  loginErrMsg: "Invalid Username/Password Combination",

  blankFieldMsgs: [
    "Name cannot be blank",
    "Username cannot be blank",
    "Email cannot be blank",
    "Password cannot be blank",
    "Password Confirm cannot be blank",
  ],
  successFieldMsgs: [
    "Success",
    "Success",
    "Valid Email",
    "Valid Password",
    "Passwords Match",
  ],
  homepageLinks: [
    "Home", 
    "About", 
    "Services", 
    "Portfolio", 
    "Team", 
    "Contact"],
};

export const validFormFill = {
  name: "Ash J. Williams",
  username: "the chosen one",
  email: "Klaatu@Barada.cough",
  password: "S-Mart",
  password_confirm: "S-Mart",
};

export const invalidFormFill = {
  email: "KlaatuBarada.cough",
  password: "SMart",
  password_confirm: "S-Mart",
};


  
   
  export const csvDataArray = [
    ["user", "user_email", "subscribed", "date", "source\r" ],
    ['sam spint', 'ssprint@outlook.com', 'TRUE', '6/1/2021', 'data_data.csv\r'],
    ['brandy bank', 'bbrandy@gmail.com', 'TRUE', '8/10/2020', 'data_data.csv\r'],
    ['harry homes', 'hhomes@aol.com', 'FALSE', '1/2/2023', 'data_data.csv\r'],
    ['tony tiger', 'ttiger@yahoo.com', 'FALSE', '7/9/2022', 'data_data.csv\r'],
    ['bruce bond', 'bbond@gmail.com', 'TRUE', '4/25/2020', 'data_data.csv\r'],
    ['luke luck', 'lluck@hotmailcom', 'TRUE', '8/9/2020', 'data_data.csv\r'],
    ['tom powers', 'tp@aol.com', 'FALSE', '9/12/2020', 'data_data.csv\r'],
    [""]
  ];
  

// export const csvDat = [
//   { user: "", user_email: "", subscribed: "", date: "", source: "" },  
//   { user: "sam spint", user_email: "ssprint@outlook.com", subscribed: "TRUE", date: "6/1/2021", source: "data_data.csv" },
//   { user: "brandy bank", user_email: "bbrandy@gmail.com", subscribed: "TRUE", date: "8/10/2020", source: "data_data.csv" },
//   { user: "harry homes", user_email: "hhomes@aol.com", subscribed: "FALSE", date: "1/2/2023", source: "data_data.csv" },
//   { user: "tony tiger", user_email: "ttiger@yahoo.com", subscribed: "FALSE", date: "7/9/2022", source: "data_data.csv" },
//   { user: "bruce bond", user_email: "bbond@gmail.com", subscribed: "TRUE", date: "4/25/2020", source: "data_data.csv" },
//   { user: "luke luck", user_email: "lluck@hotmailcom", subscribed: "TRUE", date: "8/9/2020", source: "data_data.csv" },
//   { user: "tom powers", user_email: "tp@aol.com", subscribed: "FALSE", date: "9/12/2020", source: "data_data.csv" }
// ];
