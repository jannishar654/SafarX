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


```

# User Profile API Documentation

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to **fetch the authenticated user's profile details**.  
It requires a valid **JWT authentication token** and returns the user information associated with the logged-in user.

---

## Authentication
This endpoint is **protected**.

### Authorization Header
```http
Authorization: Bearer <JWT_TOKEN>


```

# User Logout API Documentation

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to **log out the authenticated user**.  
It clears the authentication cookie and **invalidates the JWT token** by adding it to a blacklist to prevent further use.

---

## Authentication
This endpoint is **protected**.

### Authorization Header
```http
Authorization: Bearer <JWT_TOKEN>

```

# Captain Registration API Documentation

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to **register a new captain (driver)** in the system.  
It validates input data, checks if the captain already exists, hashes the password, stores captain and vehicle details, and returns a **JWT authentication token** upon successful registration.

---

## Request Body
The request must be sent in **JSON format**.

### Required Fields

| Field | Type | Description |
|------|------|-------------|
| fullname.firstname | String | Captain’s first name (minimum 3 characters) |
| fullname.lastname | String | Captain’s last name (optional, minimum 3 characters if provided) |
| email | String | Valid and unique email address |
| password | String | Password (minimum 6 characters) |
| vehicle.color | String | Vehicle color (minimum 3 characters) |
| vehicle.plate | String | Vehicle plate number (minimum 3 characters) |
| vehicle.capacity | Number | Vehicle seating capacity (minimum 1) |
| vehicle.vehicleType | String | Vehicle type (`car`, `motorcycle`, `auto`) |

---

### Example Request
```json
{
  "fullname": {
    "firstname": "Rahul",
    "lastname": "Kumar"
  },
  "email": "rahul.captain@gmail.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "White",
    "plate": "BR01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}

```
### Success Response

**Status Code:** `201 Created`

```json
{
  "token": "jwt_auth_token_here",
  "captain": {
    "_id": "64f1abc123...",
    "fullname": {
      "firstname": "Rahul",
      "lastname": "Kumar"
    },
    "email": "rahul.captain@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}


```
# Captain Profile API Documentation

## Endpoint
`GET /captains/profile`

## Description
This endpoint is used to **fetch the authenticated captain’s profile details**.  
It requires a valid **JWT authentication token** and returns the captain information associated with the logged-in captain.

---

## Authentication
This endpoint is **protected**.

### Authorization Header
```http
Authorization: Bearer <JWT_TOKEN>

```
### Example Response

**Status Code:** `200 OK`

```json
{
  "captain": {
    "_id": "64f1abc123...",
    "fullname": {
      "firstname": "Rahul",
      "lastname": "Kumar"
    },
    "email": "rahul.captain@gmail.com",
    "status": "inactive",
    "vehicle": {
      "color": "White",
      "plate": "BR01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

```

# Captain Logout API Documentation

## Endpoint
`GET /captains/logout`

## Description
This endpoint is used to **log out the authenticated captain**.  
It clears the authentication cookie and **invalidates the JWT token** by adding it to a blacklist to prevent further use.

---

## Authentication
This endpoint is **protected**.

### Authorization Header
```http
Authorization: Bearer <JWT_TOKEN>

```
### Example Response

**Status Code:** `200 OK`

```json
{
  "message": "Logged out successfully"
}
```
## `/maps/get-coordinates` Endpoint

### Description

Retrieves the coordinates (latitude and longitude) for a given address.

### HTTP Method

`GET`

### Request Parameters

- `address` (string, required): The address for which to retrieve coordinates.

### Example Request

GET `/maps/get-coordinates?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`

### Example Response

```json
{
  "ltd": 37.4224764,
  "lng": -122.0842499
}
```

### Error Response

- `400 Bad Request`: If the address parameter is missing or invalid.
- `404 Not Found`: If the coordinates for the given address could not be found.

```json
{
  "message": "Coordinates not found"
}
```

## `/maps/get-distance-time` Endpoint

### Description

Retrieves the distance and estimated travel time between two locations.

### HTTP Method

`GET`

### Request Parameters

- `origin` (string, required): The starting address or location.
- `destination` (string, required): The destination address or location.

### Example Request

```
GET /maps/get-distance-time?origin=New+York,NY&destination=Los+Angeles,CA
```

### Example Response

```json
{
  "distance": {
    "text": "2,789 miles",
    "value": 4486540
  },
  "duration": {
    "text": "1 day 18 hours",
    "value": 154800
  }
}
```

### Error Response

- `400 Bad Request`: If the origin or destination parameter is missing or invalid.
- `404 Not Found`: If the distance and time for the given locations could not be found.

```json
{
  "message": "No routes found"
}
```

## `/maps/get-suggestions` Endpoint

### Description

Retrieves autocomplete suggestions for a given input string.

### HTTP Method

`GET`

### Request Parameters

- `input` (string, required): The input string for which to retrieve suggestions.

### Example Request

```
GET /maps/get-suggestions?input=1600+Amphitheatre
```

### Example Response

```json
[
  "1600 Amphitheatre Parkway, Mountain View, CA, USA",
  "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
]
```

### Error Response

- `400 Bad Request`: If the input parameter is missing or invalid.
- `500 Internal Server Error`: If there is an error retrieving suggestions.

```json
{
  "message": "Unable to fetch suggestions"
}
```

## `/rides/create` Endpoint

### Description

Creates a new ride with the provided information.

### HTTP Method

`POST`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Request Body

The request body should be in JSON format and include the following fields:

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).
- `vehicleType` (string, required): The type of vehicle (must be 'auto', 'car', or 'moto').

### Example Response

- `ride` (object):
  - `user` (string): User ID.
  - `pickup` (string): Pickup address.
  - `destination` (string): Destination address.
  - `fare` (number): Fare amount.
  - `status` (string): Ride status.
  - `duration` (number): Duration in seconds.
  - `distance` (number): Distance in meters.
  - `otp` (string): OTP for the ride.

### Error Response

- `400 Bad Request`: If any required field is missing or invalid.
- `500 Internal Server Error`: If there is an error creating the ride.

```json
{
  "message": "Error message"
}
```


## `/rides/get-fare` Endpoint

### Description

Retrieves the fare estimate for a ride between the provided pickup and destination addresses.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization:

 Bear

er <token>`

### Request Parameters

- `pickup` (string, required): The pickup address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).

### Example Request

```
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway,+Mountain+View,+CA&destination=1+Infinite+Loop,+Cupertino,+CA
```

### Example Response

```json
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 40.0
}
```

### Error Response

- `400 Bad Request`: If any required parameter is missing or invalid.
- `500 Internal Server Error`: If there is an error calculating the fare.

```json
{
  "message": "Error message"
}
```











