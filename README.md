# Autopal

Autopal is a web application designed to automate workflows and connect with various services. It provides a user-friendly interface to create, manage, and monitor automated tasks.

## Features

- **Authentication:** Secure user authentication using Clerk.
- **Dashboard:** A central hub to view and manage all your workflows.
- **Workflow Management:** Create, edit, and delete workflows with a simple and intuitive UI.
- **Connections:** Connect to various services and applications to integrate them into your workflows.
- **Settings:** Customize your user and application settings.

## Tech Stack
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for validation.
- **File Uploads:** [Uploadcare](https://uploadcare.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm or yarn

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/your_username/autopal.git
   cd autopal
   ```
2. **Install NPM packages**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env.local` file in the root of the project and add the necessary environment variables. You will need to get API keys from Clerk and set up a database connection for Prisma.
   ```
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Prisma
   DATABASE_URL="your_database_connection_string"

   # Uploadcare
   NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=
   ```
4. **Run database migrations**
   ```sh
   npx prisma db push
   ```
5. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code.

## Project Structure

The project follows a standard Next.js `app` directory structure.

```
/src
|-- /app
|   |-- /(auth)       # Authentication pages (sign-in, sign-up)
|   |-- /(main)       # Main application pages (dashboard, workflows, etc.)
|   |-- /api          # API routes
|   |-- layout.tsx    # Root layout
|   |-- page.tsx      # Landing page
|-- /components     # Shared UI components
|-- /lib            # Helper functions and utilities
|-- /providers      # React context providers
|-- middleware.ts   # Next.js middleware
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
