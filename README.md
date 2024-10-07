# React Currency Viewer Challenge

## Objective

Develop a web application using React that enables users to view currency information fetched from the Alpha Vantage API. This application offers a search feature by currency code, the ability to select a date range for historical exchange rates against USD, and displays the results in a table. A key feature is caching these results to enhance performance on subsequent fetches.

## Requirements

1. **API Key**: Secure a free API key from [Alpha Vantage's documentation page](https://www.alphavantage.co/support/#api-key) to authenticate your requests.
2. **Search Functionality**: Implement a search bar allowing users to enter a currency code (e.g., USD, EUR). The application should fetch the latest exchange rate for the selected currency against USD using the Alpha Vantage API.
3. **Date Range Selection**: Provide two inputs for users to select a start date and an end date. Fetch and display the historical exchange rates for the selected currency against USD for this date range.

4. **Results Table**: Show the fetched currency data in a table, with each row displaying a different date within the selected range and its corresponding exchange rate.

5. **Caching Mechanism**: Implement caching to store the results of fetched data. If a user makes a subsequent request for the same currency and date range, the application should check the cache before making another API call. This will improve the application's performance by reducing load times and API requests.

6. **Error Handling**: Implement comprehensive error handling for scenarios such as invalid currency codes, failed API requests, or out-of-range dates.

7. **Styling**: Use [TailwindCSS](https://tailwindcss.com/) for the application's styling, aiming for a clean and user-friendly interface.

## Deliverables

- A React application fulfilling the above requirements, including caching.
- A README file with setup instructions, including environment variable configuration (e.g., API key).

## Installation

To run the Currency Viewer application locally, follow these steps:

1. **Clone the Repository**:

   git clone https://github.com/your-username/react-currency-viewer.git

2. **Navigate to the Project Directory**:

cd react-currency-viewer 3. **Install Dependencies:**

Make sure you have Node.js installed. Then, run:

npm install 4. **Set Up Environment Variables:**

Create a .env file in the root directory of the project and add your Alpha Vantage API key:

REACT_APP_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key 5. **Run the Application:**

Start the development server:

npm start 6. **Open in Your Browser:**

Navigate to http://localhost:3000 to view the application.

**Usage**

Enter a currency code in the search bar (e.g., EUR, GBP).
Select a start date and an end date.
Click on the "Fetch" button to retrieve historical exchange rates.
View the results displayed in a table.
**Evaluation Criteria**

Functionality: The app should be fully functional, addressing all stated requirements.
Code Quality: Code should be clean, well-organized, and adhere to best practices.
UI/UX Design: The app should be easy to use and visually appealing.
Error Handling: Errors should be gracefully handled and communicated to the user.
Caching Implementation: Effective caching that reduces API calls and improves performance.

API Key
The regular API key has a limit of 25 requests per day.
