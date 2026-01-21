# User Registration API Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint is used to **register a new user** in the system.  
It validates user input, hashes the password, stores the user in the database, and returns a **JWT authentication token** upon successful registration.

---

## Request Body
The request must be sent in **JSON format**.

### Required Fields
| Field | Type | Description |
|------|------|-------------|
| fullname.firstname | String | User's first name (minimum 3 characters) |
| fullname.lastname | String | User's last name (optional, minimum 3 characters if provided) |
| email | String | Valid and unique email address |
| password | String | Password (minimum 6 characters) |

### Example Request
```json
{
  "fullname": {
    "firstname": "Mohammad",
    "lastname": "Jannishar"
  },
  "email": "mdjannishar@gmail.com",
  "password": "securePassword123"
}

```




# User Login API Documentation

## Endpoint
`POST /users/login`

## Description
This endpoint is used to **authenticate an existing user**.  
It validates the email and password, verifies the credentials from the database, and returns a **JWT authentication token** upon successful login.

---

## Request Body
The request must be sent in **JSON format**.

### Required Fields
| Field | Type | Description |
|------|------|-------------|
| email | String | Registered and valid email address |
| password | String | Password (minimum 6 characters) |

### Example Request
```json
{
  "email": "mdjannishar@gmail.com",
  "password": "securePassword123"
}

