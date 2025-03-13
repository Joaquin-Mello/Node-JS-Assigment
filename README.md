# Node-JS-Assigment

## Task: Develop Node.js APIs for School Management

### Objective: 
Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

---

## Requirements:

### 1.Database Setup:
- **Description:** Create a `schools` table in MySQL with the following fields:
  - `id` (Primary Key)
  - `name` (VARCHAR)
  - `address` (VARCHAR)
  - `latitude` (FLOAT)
  - `longitude` (FLOAT)
---

### 2.API Development:
- **Add School API**:
  - `Endpoint`: /addSchool
  - `Method`: POST
  - `Payload`: Includes name, address, latitude, and longitude.
  - `Functionality`: Validates the input data and adds a new school to the schools table.
  - `Validation`: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).

- **List Schools API**:
  - `Endpoint`: /listSchools
  - `Method`: GET
  - `Parameters`: User's latitude and longitude.
  - `Functionality`: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
  - `Sorting Mechanism`: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.
---
### 3.Hosting and Testing:
  - `Hosting`: Deploy the APIs on a suitable hosting service.
  - `Postman Collection`:
    - Create a Postman collection for both APIs.
    - Include example requests and document expected responses.
    - Share the collection with stakeholders for testing purposes.
---

## Screenshot postman GET request   
<br>

![Captura de pantalla 2025-03-13 153749](https://github.com/user-attachments/assets/e6f7480e-a4ed-45fe-9d82-6b2b5a00c2b3)

---
## Screenshot postman POST request
<br>

![Captura de pantalla 2025-03-13 153707](https://github.com/user-attachments/assets/3fe8930e-6027-415a-918a-f8cf5d8b2056)


