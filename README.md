#  Invoice Management System

##  Project Overview
The **Invoice Management System** is a full-stack web application that allows users to **register, log in, and manage invoices**.  
Users can create, view, update, delete, sort, and filter invoices through a clean and responsive interface.

This project demonstrates practical knowledge of **React.js**, **Express.js**, and **SQLite**, following real-world full-stack development practices.

---

##  Features

###  Authentication
- User Sign-Up (Name, Email, Password)
- User Login (Email, Password)
- Protected routes (login required)

###  Invoice Management
- Create Invoice
- View All Invoices
- Edit / Update Invoice (prefilled form)
- Delete Invoice (with confirmation popup)

###  Invoice Fields
- Invoice Number (Unique)
- Client Name
- Date
- Amount
- Status (Paid / Unpaid / Pending)

###  Bonus Features
- Filter invoices by **Status**
- Sort invoices by **Date** (Newest / Oldest)
- Auto-refresh invoice list after CRUD operations

---

##  Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- HTML5, CSS3

### Backend
- Node.js
- Express.js
- SQLite (sqlite3)

---

##  How to Run Locally

### 1. Clone the Repository
```bash
git clone <your-github-repository-url>
cd Invoice-Management-System
```

### 2. Install dependencies
``` bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 3. Run frontend and backend together
```bash
npm run dev
```

Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000

## Usage Flow
- Sign up with name, email, and password
- Login to access dashboard
- Create invoice
- View invoices
- Edit or delete invoices
- Filter and sort invoices

