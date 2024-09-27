# Project Title

## Description

A boilerplate project that provides a foundational structure for building web applications using Node.js and TypeScript. It includes essential tools and libraries to streamline development and ensure code quality.

## Package Used

-   **NVM**: Node Version Manager for managing Node.js versions.
-   **TypeScript**: A superset of JavaScript that adds static types.
-   **Prettier**: An opinionated code formatter for consistent code style.
-   **ESLint**: A tool for identifying and fixing problems in JavaScript code.
-   **Git Hooks (int-staged)**: A tool to run linters on pre-commit hooks.
-   **Express**: A web application framework for Node.js.
-   **Logger**: A logging utility for tracking application events.
-   **Global Error Handler**: A centralized error handling mechanism.
-   **Automated Testing**: Using Jest and Supertest for unit and integration tests.
-   **Docker**: A platform for developing, shipping, and running applications in containers. This project includes Docker configurations to simplify the setup and deployment process. You can run the application in a containerized environment using the provided Docker commands.

## Installation

1. Clone the repository.
2. Install NVM and use it to install the required Node.js version.
3. Run `npm install` to install dependencies.

## Docker

1. Build image `docker build -t auth-service:dev -f .\docker\dev\Dockerfile .  `
2. Run container `docker run --rm -it -v "projectfolder:/usr/src/app" -v "/usr/src/app/node_modules" --env-file "projectfolder\.env" -p 5501:5501 -e NODE_ENV=development auth-service:dev`
