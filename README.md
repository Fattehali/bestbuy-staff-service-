# BestBuy Staff Service

## Overview

The **Staff Service** is a microservice built to handle the management of staff data for BestBuy. This service enables the creation, retrieval, updating, and deletion (CRUD operations) of staff records. The staff service allows users to store and manage information such as staff name, role, contact details, and other essential data in an efficient and scalable manner. This service is part of a larger system used to manage the staff component of BestBuy's operations.

## Functionality

The **Staff Service** provides the following features:

- **Create** a new staff member.
- **Retrieve** a list of all staff members or a specific staff member by ID.
- **Update** staff member details.
- **Delete** a staff member record.

The service is implemented as a RESTful API, with each operation mapped to a specific HTTP verb (POST, GET, PUT, DELETE).

---

## API Endpoints

### 1. Create Staff
- **Endpoint:** `POST /api/staff`
- **Description:** Adds a new staff member to the database.
- **Request Body:**
    ```json
    {
      "name": "John Doe",
      "role": "Manager",
      "email": "john.doe@bestbuy.com",
      "phone": "123-456-7890"
    }
    ```
- **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "role": "Manager",
      "email": "john.doe@bestbuy.com",
      "phone": "123-456-7890"
    }
    ```

### 2. Get All Staff
- **Endpoint:** `GET /api/staff`
- **Description:** Retrieves a list of all staff members.
- **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "role": "Manager",
        "email": "john.doe@bestbuy.com",
        "phone": "123-456-7890"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "role": "Sales Associate",
        "email": "jane.smith@bestbuy.com",
        "phone": "987-654-3210"
      }
    ]
    ```

### 3. Get Staff by ID
- **Endpoint:** `GET /api/staff/{id}`
- **Description:** Retrieves a specific staff member by their unique ID.
- **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "role": "Manager",
      "email": "john.doe@bestbuy.com",
      "phone": "123-456-7890"
    }
    ```

### 4. Update Staff
- **Endpoint:** `PUT /api/staff/{id}`
- **Description:** Updates an existing staff member's details by ID.
- **Request Body:**
    ```json
    {
      "name": "John Doe",
      "role": "Senior Manager",
      "email": "john.doe@bestbuy.com",
      "phone": "123-456-7890"
    }
    ```
- **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "role": "Senior Manager",
      "email": "john.doe@bestbuy.com",
      "phone": "123-456-7890"
    }
    ```

### 5. Delete Staff
- **Endpoint:** `DELETE /api/staff/{id}`
- **Description:** Deletes a staff member by their unique ID.
- **Response:**
    ```json
    {
      "message": "Staff member deleted successfully"
    }
    ```

---

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/bestbuy-staff-service.git
   cd bestbuy-staff-service
   npm install
   npm run start

2. **Containerize the Service:**
















<img width="1440" alt="Screenshot 2024-12-13 at 6 56 30 PM" src="https://github.com/user-attachments/assets/28726733-a1ec-4b2a-b775-2dea8e2d10eb" />


<img width="1440" alt="Screenshot 2024-12-13 at 6 56 21 PM" src="https://github.com/user-attachments/assets/3109255b-378d-49a0-9244-45542b7dc280" />


<img width="1440" alt="Screenshot 2024-12-13 at 6 57 02 PM" src="https://github.com/user-attachments/assets/e69c1b0c-c304-4747-847d-9cf8e5298c6a" />








