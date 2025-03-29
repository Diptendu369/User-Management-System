# EmployWise Assignment - React User Management App

## Overview

This is a React application that integrates with the Reqres API to perform basic user management functions, including authentication, user listing, editing, and deletion.

## Hosted Link

🔗 [Live Demo](https://cosmic-starburst-862e48.netlify.app)

## Features

### Level 1: Authentication Screen

- Users can log in using credentials:
  - **Email:** [eve.holt@reqres.in](mailto\:eve.holt@reqres.in)
  - **Password:** cityslicka
- On successful login, the token is stored, and the user is redirected to the Users List page.

### Level 2: List All Users

- Fetches and displays a paginated list of users.
- Shows user details: First Name, Last Name, and Avatar.
- Implements pagination for navigation between pages.

### Level 3: Edit, Delete, and Update Users

- **Edit:** Users can update First Name, Last Name, and Email.
- **Delete:** Users can be removed from the list.
- Displays success/error messages based on API responses.

## Bonus Features

- Client-side search and filtering.
- React Router for page navigation.
- Hosted on Netlify.

## Tech Stack

- **Frontend:** React, React Router
- **State Management:** useState, useEffect
- **HTTP Requests:** Axios
- **Styling:** Bootstrap
- **Deployment:** Netlify

## API Endpoints

- **Login:** `POST /api/login`
- **Get Users:** `GET /api/users?page=1`
- **Edit User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employwise-react-app.git
   cd employwise-react-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

```
├── public/
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components (Login, User List, Edit User)
│   ├── services/    # API service functions
│   ├── App.js
│   ├── index.js
├── package.json
├── README.mdAssumptions & Considerations
```

- The token is stored in localStorage for session persistence.
- The application redirects unauthenticated users to the login page.
- Basic form validation is implemented for login and edit operations.

## Contribution

Feel free to fork and submit pull requests for improvements!

## License

This project is open-source under the MIT License.
