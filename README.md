Sure, here's a README for your NPM package that provides HTTP status code constants and custom error classes:

---

# HTTP Status Codes and Custom Errors

This NPM package provides HTTP status code constants and custom error classes for easy use in your Node.js applications. It simplifies the process of handling HTTP errors by allowing you to import predefined status codes and error classes.

## Installation

Install the package via npm:

```bash
npm install http-status-errors
```

## Usage

### Importing HTTP Status Codes

You can import the HTTP status codes from the package:

```javascript
import { status } from 'http-status-errors';

console.log(status.HTTP_BAD_REQUEST); // 400
console.log(status.HTTP_NOT_FOUND); // 404
```

### Importing Custom Error Classes

The package provides custom error classes for common HTTP errors:

```javascript
import {
  BadRequestError,
  InternalServerError,
  InvalidRequestError,
  NotFoundRequestError,
  UnauthorizedRequestError,
} from 'http-status-errors';

// Example usage
try {
  throw new BadRequestError('This is a bad request');
} catch (error) {
  console.error(error.statusCode); // 400
  console.error(error.message); // 'This is a bad request'
}
```

## API

### HTTP Status Codes

The following status codes are available:

- `HTTP_OK` (200)
- `HTTP_CREATED` (201)
- `HTTP_NO_CONTENT` (204)
- `HTTP_BAD_REQUEST` (400)
- `HTTP_BAD_REQUEST` (400)
- `HTTP_INTERNAL_SERVER_ERROR` (500)
- `HTTP_INVALID_REQUEST` (422)
- `HTTP_NOT_FOUND` (404)
- `HTTP_UNAUTHORIZED` (401)
- `HTTP_FORBIDDEN` (403)

### Custom Error Classes

#### `BadRequestError`

Represents a 400 Bad Request error.

```typescript
class BadRequestError extends InternalServerError {
  public statusCode: number;
  constructor(message: string);
}
```

#### `InternalServerError`

Represents a 500 Internal Server Error.

```typescript
class InternalServerError extends Error {
  public statusCode: number;
  constructor(message: string);
}
```

#### `InvalidRequestError`

Represents a 422 Unprocessable Entity error.

```typescript
class InvalidRequestError extends InternalServerError {
  public statusCode: number;
  constructor(message: string);
}
```

#### `NotFoundRequestError`

Represents a 404 Not Found error.

```typescript
class NotFoundRequestError extends InternalServerError {
  public statusCode: number;
  constructor(message: string);
}
```

#### `UnauthorizedRequestError`

Represents a 401 Unauthorized error.

```typescript
class UnauthorizedRequestError extends InternalServerError {
  public statusCode: number;
  constructor(message: string);
}
```

## Example

Here’s an example of how to use this package in an Express application:

```javascript
import express from 'express';
import { BadRequestError, NotFoundRequestError, status } from 'http-status-errors';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Return an HTTP error
app.get('/error', (req, res) => {
  try {
    throw new BadRequestError('This is a bad request');
  } catch (err) {
    res.status(err.statusCode).send(err.message)
  }
});

// Use error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof BadRequestError) {
    res.status(err.statusCode).send({ error: err.message });
  } else {
    res.status(status.HTTP_INTERNAL_SERVER_ERROR).send({ error: 'An unexpected error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

## License

This project is licensed under the MIT License.

---

This README provides an overview of the package, including installation instructions, usage examples, API documentation, and an example of how to use it in an Express application.