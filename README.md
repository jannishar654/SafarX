# SafarX 🚖

**SafarX** is a full-stack ride-hailing application designed to connect users with captains (drivers) for seamless city commuting. Built with the **MERN stack** (MongoDB, Express, React, Node.js), it features real-time socket communication, interactive maps, and secure authentication for both passengers and drivers.

## 🚀 Features

### 👤 User (Passenger)
- **Secure Authentication:** User registration and login using JWT.
- **Ride Booking:** Search for locations, select vehicle type (Auto, Car, Moto), and book rides.
- **Fare Estimation:** Get estimated fares before confirming a ride.
- **Real-time Tracking:** Live ride updates using Socket.io.
- **Profile Management:** View user profile and logout securely.

### 👮 Captain (Driver)
- **Driver Onboarding:** Captain registration with vehicle details (Color, Plate, Capacity, Type).
- **Ride Management:** Accept incoming ride requests.
- **Status Updates:** Go online/offline to receive ride requests.
- **Secure Authentication:** Dedicated login system for captains.

### 🗺️ Maps & Location
- **Autocomplete:** Location search suggestions.
- **Distance & Time:** Calculate travel time and distance between pickup and destination.
- **Geocoding:** Convert addresses to coordinates.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** [React.js](https://react.dev/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [GSAP](https://gsap.com/)
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Maps:** `@react-google-maps/api`
- **Icons:** Remix Icon

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt
- **Real-time Communication:** Socket.io
- **Maps API:** Google Maps API integration (via Axios)
- **Validation:** Express-validator

---

## 📂 Project Structure

```bash
SafarX/
├── backend/                # Node.js & Express Server
│   ├── controllers/        # Request handlers (User, Captain, Maps, Ride)
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Routes
│   ├── services/           # Business logic
│   ├── db/                 # Database connection
│   ├── socket.js           # Socket.io configuration
│   └── server.js           # Entry point
│
└── frontend/               # React Vite Client
    ├── src/
    │   ├── pages/          # Full page components (Login, Home, Riding, etc.)
    │   ├── components/     # Reusable UI components
    │   ├── context/        # Context Providers (User, Captain, Socket)
    │   └── assets/         # Static assets
    └── package.json
```

---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally.

### 1. Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)
- Google Maps API Key

### 2. Clone the Repository
```bash
git clone [https://github.com/jannishar654/safarx.git](https://github.com/jannishar654/safarx.git)
cd safarx
```

### 3. Backend Setup
Navigate to the backend directory, install dependencies, and start the server.

```bash
cd backend
npm install
```

**Environment Variables:**
Create a `.env` file in the `backend` root and add the following:
```env
PORT=4000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_MAPS_API=your_google_maps_api_key
```

Start the server:
```bash
npm start
# OR for development
npm run dev
```

### 4. Frontend Setup
Open a new terminal, navigate to the frontend directory, and start the client.

```bash
cd frontend
npm install
npm run dev
```

The application should now be running at `http://localhost:5173`.

---

## 📡 API Documentation

### 👤 User Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/users/register` | Register a new user |
| `POST` | `/users/login` | Login user |
| `GET` | `/users/profile` | Get user profile (Protected) |
| `GET` | `/users/logout` | Logout user |

### 👮 Captain Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/captains/register` | Register a new captain |
| `POST` | `/captains/login` | Login captain |
| `GET` | `/captains/profile` | Get captain profile (Protected) |
| `GET` | `/captains/logout` | Logout captain |

### 🗺️ Maps Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/maps/get-coordinates` | Get Lat/Lng for an address |
| `GET` | `/maps/get-distance-time` | Get distance and time between two points |
| `GET` | `/maps/get-suggestions` | Get autocomplete suggestions |

### 🚖 Ride Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/rides/create` | Create a new ride request |
| `GET` | `/rides/get-fare` | Estimate fare for a ride |

---

## 🤝 Contributing

Contributions are welcome!
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**Author:** [Mohammad Jannishar](https://github.com/jannishar654)