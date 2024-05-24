# Dashboard Web Application

This is a React-based web application that includes a Counter component, User Data Form, Rich Text Editors, and additional features such as user authentication and dashboard visualization. The application uses Context API for state management, CSS for styling, routing, and various components.

## Hosted Link
https://dashboard-upliance-assign.vercel.app/

## User Interactions Guide

### Common Buttons
- **Generate User ID button**: Users can generate a unique User ID in the User Data Form by clicking this button.
- **Save button**: Users can save their input data to local storage by clicking this button.
- **Increment button**: Users can increase counter by clicking this button.
- **Decrement button**: Users can decrease counter by clicking this button.
- **Reset button**: Users can reset counter by clicking this button.

### Home Page
![dashboardpage](https://github.com/mansi2020/dashboard_upliance_assign/assets/57188328/94bc6be4-c493-4235-b331-4b580835129d)


### Authentication Page
![signup](https://github.com/mansi2020/dashboard_upliance_assign/assets/57188328/d0971b1c-cb8c-443e-ae9d-366d84497e9a)

![login](https://github.com/mansi2020/dashboard_upliance_assign/assets/57188328/66b2c090-b677-4c22-a23e-c4bb591a05dc)

- Users can sign in or sign up using Google authentication.



## Features

### Counter Component
- **Buttons**: Create buttons for increment, decrement, and reset.
- **Count Persistence**: Maintain count across re-renders.
- **Background Color**: The background color changes in a linear manner (preferably bezier curve) as the count increases.
- **Reset**: Reset the level of background color to 0 on reset.

### User Data Form
- **Form Design**: Form for user data (name, address, email, phone).
- **User ID Generation**: Autogenerate user ID and save data to local storage/RTK on form submission.
- **Unsaved Changes Alert**: Show unsaved changes pop-up if there are unsaved changes in the form when the user tries to close the browser.

### Rich Text Editors
- **Visualization**: Visualize user data in rich text editor.
- **Formatting Options**: Integrate editors with formatting options (bold, italic, underline, lists).
- **Data Persistence**: Ensure data persistence.

### Additional Features (Optional)
- **User Authentication**: Implement sign-in and sign-up, including secure public routes.


## Components and Routing

The website consists of multiple components and utilizes React Router for navigation:

- **Home Component (`Home.jsx`)**: Provides an overview and navigation to other sections.
- **Counter Component (`Counter.jsx`)**: Handles the counter functionality.
- **User Data Form Component (`UserdataForm.jsx`)**: Handles user data input and saving.
- **Rich Text Editors Component (`TextEditor.jsx`)**: Manages user data visualization in rich text editors.
- **Authentication Component (`SignIn.jsx & LogIn.jsx`)**: Handles user sign-in and sign-up.


## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd dashboard-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Technologies Used

- React.js
- Context API (for state management)
- nanoid (for generating unique IDs)
- react-toastify (for notifications)
- React Router (for routing)
- React Spring (for animations)
- React-quill (for rich TextEditor)
- CSS (for styling)
