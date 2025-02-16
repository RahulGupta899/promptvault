# PromptVault

PromptVault is a web application where users can log in, share, and explore useful prompts for developers, students, and creatives. Whether you're looking for coding prompts, study tips, or creative ideas, PromptVault is your go-to platform for inspiration and collaboration.

---

## **Technologies Used**
- **Node.js**: v20.10.0
- **Next.js**: v15.1.7
- **MongoDB**: Database for storing prompts and user data
- **NextAuth.js**: Authentication (Google OAuth)
- **Tailwind CSS**: Styling and responsive design

---

## **Features**
- **User Authentication**: Log in with Google OAuth.
- **Share Prompts**: Users can share useful prompts with the community.
- **Explore Prompts**: Browse and search for prompts shared by other users.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---

## **Installation Steps**

Follow these steps to set up and run PromptVault on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone <repoUrl>
2. **Navigate to the Project Directory**:
    ```bash
    cd promptvault
1. **Install Dependencies:**:
   ```bash
   npm install
1. **Create .env File**:
   ```bash
   touch .env
1. **Add Environment Variables:**:

   Open the .env file and add the following variables:
   ```bash
   GOOGLE_OAUTH_CLIENT_SECRET=#############
   GOOGLE_OAUTH_CLIENT_ID=#################
   MONGODB_URL=#################
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=##################
   ```
   Replace ############# with your actual credentials:
1. **Start the Application:**:

   Run the Application in development mode 
   ```bash
   npm run dev
![Application_Started](https://github.com/user-attachments/assets/ac81725a-fb53-4e1c-8bb6-bbf3cf968fd4)

![Application_working](https://github.com/user-attachments/assets/3877c719-4884-476e-bdd1-8a9f741a386b)
   
