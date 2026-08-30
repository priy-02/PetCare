# 🐾 PetCare — Pet Supplies & Appointment Platform

PetCare is a modern **frontend web application** built with React and Redux Toolkit. It provides pet owners with a convenient platform to browse pet supplies, manage their pets, explore veterinarians, and book veterinary appointments.

The project is designed to demonstrate practical **React, Redux, React Router, HTML, and CSS concepts** through a real-world application.

---

## 🚀 Project Overview

PetCare brings essential pet-care services into one simple and user-friendly platform.

Users can:

- 🏠 Explore the PetCare home page
- 🛍️ Browse pet supplies
- 🔎 Search and filter products
- 🛒 Add products to cart
- ❤️ Manage favorite products
- 🐶 Add and manage pet profiles
- 👨‍⚕️ Browse veterinarians
- 📅 Book veterinary appointments
- 📋 View upcoming appointments
- 👤 Manage their user profile
- 📊 View a personalized dashboard

> **Note:** This is currently a **frontend-only project**. Product, pet, user, and appointment data are handled using local/mock data. No backend or database is used.

---

## 🛠️ Technologies Used

### Frontend

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### State Management

- **Redux Toolkit**
- **React Redux**

### Routing

- **React Router DOM**

### Development Tools

- **Vite**
- **Git**
- **GitHub**
- **VS Code**

---

## 📂 Project Structure

```text
petcare/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── PetCard.jsx
│   │   ├── AppointmentCard.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Doctors.jsx
│   │   ├── Appointments.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── Dashboard.jsx
│   │   ├── MyPets.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   │
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── cartSlice.js
│   │       ├── petSlice.js
│   │       └── appointmentSlice.js
│   │
│   ├── data/
│   │   ├── products.js
│   │   ├── doctors.js
│   │   └── pets.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md