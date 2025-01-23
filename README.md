# Blog-Scope

## Overview

Blog-Scope is a simple blog viewer application built with Next.js. This project demonstrates the use of routing, server and client components, dynamic routes, authentication, and data fetching. The application allows users to view a list of blog posts, navigate to detailed pages for each post, and access a protected profile page.

---

## Technologies Used

- **Next.js**: Framework for building the application.
- **Axios**: For handling API requests.
- **Tailwind CSS**: For responsive and clean styling.
- **Kinde Auth**: For authentication and protected routes.

---

## Features

- **Home Page**: Displays a list of blog posts fetched from a mock API, with links to detailed pages.
- **Dynamic Routes**: Each blog post has its own unique page.
- **Protected Profile Page**: Accessible only to authenticated users. Redirects unauthenticated users to the login page.
- **Header Navigation**: Includes links to the Home and Profile pages, with dynamic Login/Logout buttons based on authentication status.
- **Responsive Design**: Styled with Tailwind CSS to ensure a clean and adaptable layout.

---

## Live Site Link

[Visit Blog-Scope](https://blog-scope-iota.vercel.app)

---

## Installation

Follow these steps to run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MehediBytes/blog-scope
   cd blog-scope
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Visit the Application**: Open your browser and navigate to `http://localhost:3000`.


---

## Key Components

### Home Page

- Fetches and displays a list of blog post titles using `axios` from the mock API `https://jsonplaceholder.typicode.com/posts`.
- Each post title links to a dynamic route for detailed blog content.

### Blog Details Page

- Fetches detailed blog post information based on the dynamic `id` in the URL using the API `https://jsonplaceholder.typicode.com/posts/[id]`.
- Displays the title and content of the blog post.

### Profile Page

- A static route (`/profile`) that displays a message like "Welcome to your profile!".
- Protected by Kinde Auth, redirecting unauthenticated users to the login page.

### Navigation

- Header includes links to Home and Profile pages.
- Displays "Login" or "Logout" buttons based on the user's authentication status.

---

## API Endpoints

- **GET** `https://jsonplaceholder.typicode.com/posts`: Fetch all blog posts.
- **GET** `https://jsonplaceholder.typicode.com/posts/[id]`: Fetch a specific post by its ID.

---

## Authentication

- Kinde Auth is used to manage authentication.
- Unauthenticated users are redirected to the login page when attempting to access the profile page.

---

## Contribution

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

