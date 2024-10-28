# LeetCode API
![alt text](https://github.com/faisal-shohag/leetcode_api/blob/master/public/Screenshot%202024-10-28%20235216.png?raw=true)
## Overview

This project provides a working Node.js API to interact with LeetCode's public GraphQL API, focusing on fetching submission calendars and other user statistics. The API simplifies querying LeetCode's data by providing structured endpoints.

## Features

- Fetch user profile information from LeetCode
- Retrieve submission statistics and calendar data
- Simplified GraphQL querying through a RESTful API

## Technologies Used

- **Node.js**
- **Express.js**
- **GraphQL**
- **Fetch API**

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/faisal-shohag/leetcode_api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd leetcode_api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    node index.js
    ```
2. Access the API at `http://localhost:3000/yourLeetcodeUsername`

## API Endpoint

- **GET /:username** - Fetches the LeetCode profile and submission data for the specified username.

### Example Response

```json
{
  "totalSolved": 43,
  "totalSubmissions": [
    {
      "difficulty": "All",
      "count": 58,
      "submissions": 116
    },
    {
      "difficulty": "Easy",
      "count": 15,
      "submissions": 34
    },
    {
      "difficulty": "Medium",
      "count": 33,
      "submissions": 54
    },
    {
      "difficulty": "Hard",
      "count": 10,
      "submissions": 27
    }
  ],
  "totalQuestions": 2738,
  "easySolved": 12,
  "totalEasy": 686,
  "mediumSolved": 21,
  "totalMedium": 1449,
  "hardSolved": 10,
  "totalHard": 603,
  "ranking": 1139392,
  "contributionPoint": 217,
  "reputation": 28067,
  "submissionCalendar": {
    "1664323200": 1,
    "1664496000": 1,
    "1664755200": 4,
    "1664841600": 5,
    "1667865600": 3,
    "1678060800": 1
  }
}
```
## Project Structure
- `index.js` -Main server file that sets up the Express server and API routes.
- `leetcode.js` -Contains the logic for interacting with LeetCode's GraphQL API.
- `package.json` - Project metadata and dependencies.

## Demo

You can view a live demo of the project [here](https://leetcode-api-faisalshohag.vercel.app/). *(Please note that it may take a few seconds for the server to wake up.)*

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** Faisal Shohag
- **Email:** faisalshohagprog@gmail.com
- **LinkedIn:** [faisal-shohag](http://linkedin.com/in/faisal-shohag)
- **GitHub:** [faisal-shohag](http://github.com/faisal-shohag)
