# Back-End Cinema Hub

This project is a back-end service for a cinema hub, built using Nest.js, Prisma, PostgreSQL, and Yarn. It provides various features for managing cinema-related data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Features

- User authentication and authorization with JWT.
- Database integration with Prisma and PostgreSQL.
- RESTful API for managing cinema data.
- Input validation using class-validator and class-transformer.
- File system utilities with fs-extra.
- Scheduling and time manipulation with dayjs.
- Integration with Yookassa for payment processing.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/back-end-cinema-hub.git
    cd back-end-cinema-hub
    ```

2. Install dependencies:

    ```sh
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

4. Generate Prisma client:

    ```sh
    yarn prisma generate
    ```

5. Run database migrations:

    ```sh
    yarn prisma migrate dev
    ```

## Usage

1. Start the development server:

    ```sh
    yarn start:dev
    ```

2. Build the project:

    ```sh
    yarn build
    ```

3. Start the production server:

    ```sh
    yarn start:prod
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

