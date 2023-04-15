# Social Media Client - Workflow Course Assignment

[![Deploy static content to Pages](https://github.com/Gronnfrosk/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Gronnfrosk/social-media-client/actions/workflows/pages.yml)
[![Unit testing](https://github.com/Gronnfrosk/social-media-client/actions/workflows/autoJestTest.yml/badge.svg)](https://github.com/Gronnfrosk/social-media-client/actions/workflows/autoJestTest.yml)
[![Automated End to End (Cypress) Testing](https://github.com/Gronnfrosk/social-media-client/actions/workflows/autoCypressTest.yml/badge.svg)](https://github.com/Gronnfrosk/social-media-client/actions/workflows/autoCypressTest.yml)

### Application origin:
This project is forked from a social media application by noroff (https://github.com/NoroffFEU/social-media-client).

## 1. Getting Started

1. Clone the repo through github website or CLI command:
```
git clone https://github.com/Gronnfrosk/social-media-client.git
```
2. Run ```npm install``` to install all dependencies.
3. Run ```npm start``` to start the development server.

## 2. Prettier configurations
Prettier with default setting is installed and configured to run on commit.

## 3. ESLint configurations
ESLint is installed and configured to run on commit.
File configurations ```.eslintrc.json``` includes Jest Unit Testing and Cypress End-to-End testing.

## 4. Unit tests (Jest) 
Jest and babel is installed. Babel allows jest to use ES6 JavaScript syntax instead of ES5.
This project contains two test:
- Login function: The login function fetches and stores a token in browser storage.
- Logout function: The logout function clears the token from browser storage.

## 5. End to End tests (Cypress) 
Cypress  is installed and there are three tests:
- Login: The user can login and access their profile.
- Logout: The user can logout with the logout button.
- failed-login: The user cannot submit the login form with invalid credentials and is shown a message.

### Cypress testing setup:
1. Add a file `cypress.env.js` in your root folder.
2. Add user information like email and password as shown below:
 ```js
export const userEmail = "user-email"
export const userPassword = "valid-password-to-user"
```

## 6. Default Branch Protection
The default master branch is protected with the following rules:
- Require a pull request before merging.
- Require approvals.
- Dismiss stale pull request approvals when new commits are pushed.
- Require approval of the most recent reviewable push.

## 7. Github Actions Workflow
The project is configured to run actions like Jest and cypress tests on either by pull request or workflow dispatch. There will also build and deploy to pages on 'workflow' branch push.
