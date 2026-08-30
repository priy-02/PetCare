# 🐾 PetCare — Pet Supplies & Appointment Platform

A modern frontend web application designed to provide pet owners with an easy and convenient platform to explore pet supplies, manage their pets, discover veterinarians, and book veterinary appointments.

The application is built using **React, Redux Toolkit, React Router, HTML, and CSS**, with a focus on reusable components, responsive design, and efficient state management.

---

## 🚀 Live Demo

### Live Application:

https://YOUR-DEPLOYMENT-LINK

### GitHub Repository:

https://github.com/priy-02/PetCare

---

## 📌 Project Overview

PetCare is a frontend-based pet-care platform that brings essential pet services and products together in one application.

The platform allows users to:

- 🐶 Manage their pet profiles
- 🛍️ Browse pet supplies
- 🔍 Search and filter products
- 🛒 Add products to cart
- ❤️ Manage favorite products
- 👨‍⚕️ Explore veterinarians
- 📅 Book veterinary appointments
- 📋 View upcoming appointments
- 📊 Monitor activities through a dashboard

---

## ✨ Features

### 🏠 Home

- PetCare introduction
- Hero section
- Featured products
- Pet-care services
- Veterinary appointment section
- Responsive navigation

### 🛍️ Pet Supplies

- Browse pet products
- Product categories
- Search products
- Filter products
- Product details
- Add to cart
- Remove from cart

### 🛒 Shopping Cart

- Add products
- Remove products
- Increase quantity
- Decrease quantity
- Clear cart
- Calculate total items
- Calculate total price

### 🐾 Pet Management

Users can manage their pets with information such as:

- Pet name
- Pet type
- Breed
- Age
- Gender
- Weight
- Profile image

### 👨‍⚕️ Veterinarians

Users can:

- View veterinarians
- View specialization
- View experience
- View consultation fee
- Select a veterinarian

### 📅 Appointment Booking

Users can:

- Select a pet
- Select a veterinarian
- Choose appointment date
- Choose appointment time
- Enter appointment reason
- Book an appointment
- View appointment details

### 📊 Dashboard

The dashboard provides:

- Total pets
- Cart items
- Upcoming appointments
- Recent activities

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### State Management

- Redux Toolkit
- React Redux

### Routing

- React Router DOM

### Build Tool

- Vite

### Development Tools

- Git
- GitHub
- Visual Studio Code

---

## 🔄 Redux Architecture

Redux Toolkit is used to manage global application state.

```text
                    Redux Store
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   Auth Slice       Cart Slice       Pet Slice
        │                │                │
        └────────────────┼────────────────┘
                         │
                  Appointment Slice
