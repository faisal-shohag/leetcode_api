const query = `
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
`;
const variables = {
    username: "faisalshohagprog"
  };
  
exports.leet = (req, res) => {
    fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com'
        }, 
        body: JSON.stringify({query: query, variables: variables}),
    
    })
    .then(result => result.json())
    .then(data => {
     res.send(formatData(data.data));
    })
    .catch(err=>{
        console.error('Error', err);
        
    });
}

const formatData = (data) => {
    let sendData =  {
        totalSolved: data.matchedUser.submitStats.acSubmissionNum[0].count,
        totalSubmissions:  data.matchedUser.submitStats.totalSubmissionNum,
        totalQuestions: data.allQuestionsCount[0].count,
        easySolved: data.matchedUser.submitStats.acSubmissionNum[1].count,
        totalEasy: data.allQuestionsCount[1].count,
        mediumSolved: data.matchedUser.submitStats.acSubmissionNum[2].count,
        totalMedium: data.allQuestionsCount[2].count,
        hardSolved: data.matchedUser.submitStats.acSubmissionNum[3].count,
        totalHard: data.allQuestionsCount[3].count,
        ranking: data.matchedUser.profile.ranking,
        contributionPoint: data.matchedUser.contributions.points,
        reputation: data.matchedUser.profile.reputation,
        submissionCalendar: JSON.parse(data.matchedUser.submissionCalendar)
    }
    return sendData;
}

exports.leetcode = (req, res) => {
    let user = req.params.id;
    fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com'
        }, 
        body: JSON.stringify({query: query, variables: {username: user}}),
    
    })
    .then(result => result.json())
    .then(data => {
     res.send(formatData(data.data));
    })
    .catch(err=>{
        console.error('Error', err);
        throw new Error('Something Went Wrong!');
    });
}