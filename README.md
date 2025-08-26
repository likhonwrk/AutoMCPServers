# MCP Server Platform

This is a web application that allows users to turn their AI agents into MCP servers. It provides a platform to convert, deploy, and share MCP servers with the community.

## Features

-   **Convert**: Easily convert your AI agents into MCP servers.
-   **Deploy**: Deploy your MCP servers instantly with a Vercel-like experience.
-   **Discover**: Explore a universe of community-driven MCP servers.
-   **Modern UI**: Built with Next.js 15, TypeScript, and shadcn/ui for a beautiful and modern user experience.

## Getting Started

To get started with this project, you will need to have Node.js and npm (or another package manager) installed on your machine.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy to Vercel

This project includes a "Deploy to Vercel" button that allows you to deploy the application with a single click.

To configure the button, you will need to have your own GitHub repository with the code for this project.

1.  **Create a GitHub repository** and push the code to it.

2.  **Set the `NEXT_PUBLIC_VERCEL_DEPLOY_URL` environment variable** in your Vercel project settings. The value should be the URL for the "Deploy to Vercel" button, like this:

    ```
    https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fyour-repo-name.git
    ```

    Make sure to replace `your-username` and `your-repo-name` with your actual GitHub username and repository name.

## Technology Stack

**Note:** This project uses experimental versions of Next.js (v15) and React (v19). These versions are not yet stable and may have issues.

-   [Next.js 15](https://nextjs.org/)
-   [TypeScript 5](https://www.typescriptlang.org/)
-   [Tailwind CSS 4](https://tailwindcss.com/)
-   [shadcn/ui](https://ui.shadcn.com/)
-   [Geist Design System](https://vercel.com/geist/introduction)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
