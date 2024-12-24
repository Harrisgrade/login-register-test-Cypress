export const pageData = {
    baseUrl: 'http://localhost:3000/',
    signinUrl: 'http://localhost:3000/login.html',
    signupUrl: 'http://localhost:3000/reg.html',

    blankFieldMsgs: [
        'Name cannot be blank',
        'Username cannot be blank',
        'Email cannot be blank',
        'Password cannot be blank',
        'Password Confirm cannot be blank'
    ],
    successFieldMsgs: [
        'Success',
        'Success',
        'Valid Email',
        'Valid Password',
        'Passwords Match'
    ]
}

export const validFormFill = {
    name: 'Ash J. Williams',
    username: 'the chosen one',
    email: 'Klaatu@Barada.cough',
    password: 'S-Mart',
    password_confirm:'S-Mart'
};

export const invalidFormFill = {
    email: 'KlaatuBarada.cough',
    password: 'SMart',
    password_confirm:'S-Mart'
};

