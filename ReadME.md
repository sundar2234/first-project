Hi This is hem sundar. And this is my first project !!


The project is on google sign in using next OAuth.
if you have any suggestions feel free to conatct and any ideas on development please make pr ..
have a wonderful day. thanks for visiting😊.

# Google Sign-In with Next.js OAuth


- Google OAuth 2.0 Authentication
- Secure token management
- User session handling with Next.js
- Protected routes with server-side authentication
- Simple and clean UI for login/logout

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or later)
- A Google Cloud Platform (GCP) project with OAuth 2.0 credentials set up
- Basic knowledge of Next.js and OAuth

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
Install dependencies:

bash
Copy
Edit
npm install
Create a .env.local file in the root of your project and add the following variables:

env
Copy
Edit
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
Replace your-google-client-id and your-google-client-secret with the credentials from your GCP project.
Use a secure random string for NEXTAUTH_SECRET (you can generate one using openssl rand -base64 32).
Set up your Google Cloud project:

Go to the Google Cloud Console.
Create or select a project.
Enable the "OAuth Consent Screen" under APIs & Services.
Configure credentials and get your Client ID and Client Secret.
Running the App
Start the development server:

bash
Copy
Edit
npm run dev
Open your browser and navigate to http://localhost:3000.

Project Structure
/pages/api/auth/[...nextauth].js: Contains the NextAuth.js configuration for handling OAuth authentication.
/pages/index.js: The home page of the application with login/logout functionality.
/pages/protected.js: Example of a protected route that requires authentication.
/components: Contains reusable UI components.
Usage
Open the app in your browser.
Click the "Sign in with Google" button.
Authenticate with your Google account.
Access protected routes after successful login.
