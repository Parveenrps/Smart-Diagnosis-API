# 🧠 Smart Diagnosis API

A backend system that analyzes user symptoms and returns possible medical conditions using AI, along with suggested next steps.

---

## 🚀 Features

* 🔍 Diagnose based on symptoms
* 🤖 AI-powered response generation
* 📊 Returns:

  * Possible conditions
  * Probability percentage
  * Suggested next steps (tests / doctors)
* 🗂️ Stores history in database
* 📜 Fetch past diagnosis records

---

## 🏗️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* OpenAI API

---

## 📡 API Endpoints

### 1. Diagnose

**POST /diagnose**

#### Request

```json
{
  "symptoms": "fever, cough, chest pain"
}
```

#### Response

```json
{
  "conditions": [
    {
      "name": "Flu",
      "probability": "70%",
      "next_steps": "Consult a general physician, get CBC test"
    },
    {
      "name": "Bronchitis",
      "probability": "50%",
      "next_steps": "Chest X-ray, consult pulmonologist"
    }
  ]
}
```

---

### 2. History

**GET /history**

#### Response

```json
[
  {
    "symptoms": "fever, cough",
    "result": [...],
    "createdAt": "2026-03-31T10:00:00Z"
  }
]
```

---

## 🧠 AI Integration

The system uses OpenAI API to generate structured medical suggestions.

### Prompt Strategy

* Provide symptoms clearly
* Ask AI to return:

  * Condition name
  * Probability
  * Next steps
* Force JSON output format

### Example Prompt

```
A patient has symptoms: fever, cough.

Suggest 2-3 possible conditions with:
- name
- probability (%)
- next steps (doctor or test)

Return ONLY valid JSON:
{
  "conditions": [
    {
      "name": "",
      "probability": "",
      "next_steps": ""
    }
  ]
}
```

### Why AgI?

* Improves flexibility over hardcoded rules
* Generates realistic and meaningful responses
* Handles varied symptom inputs

---

## ⚙️ System Design

### Backend Structure

```
controllers/
models/
routes/
services/
```

### Flow

1. User sends symptoms
2. Backend calls AI service
3. AI generates structured response
4. Data stored in MongoDB
5. Response returned to user

---

## 🧪 Error Handling

* Missing symptoms → 400 error
* Server/API failure → 500 error
* JSON parsing handled safely

---

## 🌟 Bonus (Hybrid Approach)

Basic rule-based logic can be added:

* Detect critical symptoms (e.g., chest pain)
* Prioritize serious conditions

This improves reliability alongside AI.

---

## 🚀 Deployment

The backend can be deployed using:

* Render

---

## ▶️ How to Run Locally

```bash
git clone <repo-url>
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_api_key
```

Run server:

```bash
npm run dev
```

---

## 📌 Notes

* This is not a real medical diagnosis tool
* Intended for learning and evaluation purposes only

---

## 👨‍💻 Author

Parveen Kumar
