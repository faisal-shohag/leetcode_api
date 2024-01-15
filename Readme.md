# leetcode_api
**How it works:**<br>
LeetCode provides graphql query api. This is public api. But querying graphql little bit messy. So I have created this to easily get desired data.
Leet code graphql URL = https://leetcode.com/graphql
<br>Query used in this project is:
```
 query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submissionCalendar
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
```
Check the `leetcode.js` file to see how the data was fetched by fetch api.

**By the way**

**API URL** = [https://faisal-leetcode-api.cyclic.app/yourLeetcodeUsername](https://leetcode-api-faisalshohag.vercel.app/) <br>
Response is like this:
```
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
