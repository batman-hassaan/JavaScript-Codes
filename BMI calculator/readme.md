# BMI Calculator

A simple, responsive Body Mass Index (BMI) calculator built using **HTML**, **Tailwind CSS**, and **JavaScript**. This project allows users to input their gender, weight, and height to compute their BMI and determine the corresponding health category.

## 🚀 Features

- 🧑‍⚕️ Gender selection
- ⚖️ Input for weight in kilograms
- 📏 Input for height in feet and inches
- 📊 Automatic BMI calculation with health category
- 🎨 Beautiful and responsive UI using Tailwind CSS
- 🌈 Color-coded BMI categories for easy understanding

## 🛠️ Technologies Used

- **HTML5**
- **Tailwind CSS** (via CDN)
- **JavaScript (Vanilla)**

## 📷 Preview

![BMI calculator](BMI calculator)

## 📂 Project Structure

/bmi-calculator/ │ ├── index.html # Main HTML file with structure and layout ├── bmi.js # JavaScript file handling BMI logic └── README.md # This documentation file

markdown
Copy
Edit

## 📐 BMI Categories

| BMI Range          | Category           |
|--------------------|--------------------|
| < 16               | Severe Thinness    |
| 16 - 16.9          | Moderate Thinness  |
| 17 - 18.4          | Mild Thinness      |
| 18.5 - 24.9        | Normal             |
| 25 - 29.9          | Overweight         |
| 30 - 34.9          | Obese Class I      |
| 35 - 39.9          | Obese Class II     |
| 40 and above       | Obese Class III    |

## 🎯 How to Use

1. Open the `index.html` file in any modern web browser.
2. Enter your:
   - Gender
   - Weight (in kg)
   - Height (in feet and inches)
3. Click **Calculate BMI**.
4. View your BMI result and category.

## 📌 Note

- Height is internally converted from feet and inches to meters for calculation.
- Basic validation is included for empty or invalid input fields.

## 🧾 License

This project is open source and free to use.

---

> Created with ❤️ using Tailwind CSS & JavaScript
