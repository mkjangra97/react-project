# Vite React Sample Project

A modern web application built with **React** and **Vite**, featuring a robust infrastructure setup using **Terraform** on **AWS**. The application is containerized with **Docker** and served via **Nginx** for optimal performance.

## 🚀 Project Overview

This project enables a rapid development environment for React applications. It supports both local development with Vite's HMR and a production-grade setup where the static build is served by Nginx on port 80, deployed on an AWS EC2 instance.

## 🛠 Tech Stack

-   **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
-   **Server**: [Nginx](https://nginx.org/) (Production)
-   **Infrastructure**: [Terraform](https://www.terraform.io/), [AWS EC2](https://aws.amazon.com/ec2/)
-   **Containerization**: [Docker](https://www.docker.com/)
-   **Linting**: [ESLint](https://eslint.org/)

## 📋 Prerequisites

Ensure you have the following tools installed on your local machine:

-   **Node.js** (v18 or higher)
-   **npm** (v9 or higher)
-   **Terraform** (v1.0 or higher)
-   **AWS CLI** (configured with valid credentials)
-   **Docker** (optional, for local container testing)

## 💻 Getting Started (Local Development)

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd react-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

## 🐳 Docker & Nginx Setup

The project includes a `Dockerfile` that builds the React app and serves it using Nginx on port **80**.

1.  **Build the Docker image:**
    ```bash
    docker build -t react-app .
    ```

2.  **Run the container:**
    ```bash
    docker run -d -p 80:80 react-app
    ```

3.  **Access the application:**
    Open your browser and navigate to `http://localhost`. You should see your application running via Nginx.

## 🏗 Infrastructure Setup

This project uses Terraform to provision an AWS EC2 instance (Ubuntu 22.04), which automatically installs Docker and runs the application.

1.  **Navigate to the infrastructure directory:**
    ```bash
    cd terraform-ec2
    ```

2.  **Initialize Terraform:**
    ```bash
    terraform init
    ```

3.  **Preview the changes:**
    ```bash
    terraform plan
    ```

4.  **Apply the configuration:**
    ```bash
    terraform apply --auto-approve
    ```
    *This will provision an EC2 instance, a Security Group allowing SSH (22) and HTTP (80), and execute the `setup-ec2.sh` script to install Docker.*

## 📂 Project Structure

```text
react-project/
├── src/                # React source code (components, assets)
├── public/             # Static assets
├── terraform-ec2/      # Terraform infrastructure code
│   ├── main.tf         # Main Terraform configuration
│   └── setup-ec2.sh    # User-data script for EC2 setup
├── Dockerfile          # Multi-stage build for React + Nginx
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 📜 Scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the app for production (used by Docker).
-   `npm run lint`: Run ESLint to check for code quality issues.
-   `npm run preview`: Preview the production build locally.
