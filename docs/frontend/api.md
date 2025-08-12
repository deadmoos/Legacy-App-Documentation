# API Clients

All clients use Axios. Module-specific clients live under `src/api/<module>`.

## Global/Auth API (`src/api/api.js`)
- **Base URL:** `/api/auth`
- **withCredentials:** `true`
- **Headers:** `Content-Type: application/json`

### Functions
- `fetchUser()` → `GET /auth/dashboard`  
  Purpose: verify the current session for auth-guarded routes.

---

## Deal Calculator API (`src/api/deal-calc/dealCalcApi.js`)
- **Base URL:** `/api/deal-calc` (proxied and rewritten by Vite)
- Designed to hit Flask endpoints without the `/api/deal-calc` prefix after rewrite.

### Functions
- `submitDealData(formData)` → `POST /calculate`  
  Content-Type: `multipart/form-data`  
  Purpose: submit form data for investment calculations.

- `fetchSharedDeal(token)` → `GET /shared/:token`  
  Purpose: fetch shared, tokenized results.

- `emailInvestorLink({ email, token })` → `POST /send-link`  
  Purpose: email the investor link for results.

- `sendInvestorLink(email)` → `POST /send_investor_link`  
  Form data key: `investor_email`  
  Purpose: alternate path for investor link email.

---

## Email API (`src/api/email/emailApi.js`)
- **Base URL:** `/api/email`
- **withCredentials:** `true`
- Headers: `Content-Type: application/json`

> Endpoints will be listed as features in the Email module are added.
