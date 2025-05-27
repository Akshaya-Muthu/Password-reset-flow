🔐 Password Reset Flow – Backend
This backend implements a secure password reset functionality via email using a token-based system. It consists of two main routes:

POST /api/auth/forgot-password – Send reset link via email.

POST /api/auth/reset-password/:token – Reset password using token.

📦 Technologies Used
Node.js

Express.js

MongoDB (Mongoose)

jsonwebtoken

bcryptjs

nodemailer

📁 API Endpoints
1. POST /api/auth/forgot-password
Description: Sends a password reset link to the user's email if it exists.

Request Body:

{
  "email": "user@example.com"
}
Response:

✅ 200 OK

{
  "message": "Password reset link sent to your email."
}
❌ 400 Bad Request

{
  "error": "User not found."
}
Process:

Check if the user exists.

Generate a secure JWT token (e.g., expires in 15 minutes).

Store token in DB (optional).

Send email with reset link: https://yourfrontend.com/reset-password/<token>

2. POST /api/auth/reset-password/:token
Description: Resets the user’s password using a valid token.

Request Body:

{
  "password": "newSecurePassword"
}
Response:

✅ 200 OK

{
  "message": "Password has been reset successfully."
}
❌ 400 Bad Request

{
  "error": "Invalid or expired token."
}
Process:

Verify the JWT token.

Find user by token (from payload or DB).

Hash the new password with bcrypt.

Update password in the database.

🔐 Example Flow
User clicks "Forgot Password".

Enters email → API sends email with token link.

User opens email → Clicks link → Navigates to /reset-password/:token.

Enters new password → API validates token and updates password.

 API DOCUMENTATION:

 https://documenter.getpostman.com/view/44994873/2sB2qdgL5B
