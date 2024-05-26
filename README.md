# Real Estate Brochure Generator

This project is a Real Estate Brochure Generator that helps create professional brochures for real estate properties using Eden AI for text generation and Supabase for database management.

## How to Run

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```

2. **Backend Setup:**
    - Change directory to `backend`:
      ```sh
      cd backend
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - Create a `.env` file in the `backend` directory and add the following variables:
      ```
      SUPABASE_URL=<your-supabase-url>
      SUPABASE_ANON_KEY=<your-supabase-anon-key>
      EDEN_BEARER_TOKEN=<your-eden-bearer-token>
      PORT=<your-port>
      ```

3. **Frontend Setup:**
    - Change directory to `frontend`:
      ```sh
      cd frontend
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - Create a `.env` file in the `frontend` directory and add the following variable:
      ```
      VITE_BACKEND_URL=<your-backend-url>
      ```

4. **Start the Backend:**
    - Change directory to `backend`:
      ```sh
      cd backend
      ```
    - Start the backend server:
      ```sh
      npm run start
      ```

5. **Start the Frontend:**
    - Change directory to `frontend`:
      ```sh
      cd frontend
      ```
    - Start the frontend server:
      ```sh
      npm run dev
      ```

6. **You're ready to go!** Open your browser and navigate to the provided URL to start using the Real Estate Brochure Generator.

## API Routes

1. **Generate Brochure:**
   - **Endpoint:** `api/v1/generate`
   - **Method:** POST
   - **Description:** Generates the brochure using Eden AI.

2. **Insert Record:**
   - **Endpoint:** `api/v1/insert`
   - **Method:** POST
   - **Description:** Inserts the generated brochure record into the Supabase database.

3. **Regenerate Text:**
   - **Endpoint:** `api/v1/regenerate`
   - **Method:** POST
   - **Description:** Regenerates part of the generated text using Eden AI.

## Additional Notes

- Ensure your `.env` files are correctly configured with the necessary environment variables before starting the servers.

---

Happy brochure generating!
