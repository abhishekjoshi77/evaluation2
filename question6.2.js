//6.2 Analyzing Voter Participation

function analyzeVoterData(voters) {
    return voters.reduce(
        (stats,voter) => {
            const {age,voted} = voter ;
            if (age >= 18 && age <= 25) {
                stats.numYoungPeople++;
                if(voted) stats.numYoungVotes++;
            }else if (age >=26 && age <=35) {
                stats.numMidsPeople++;
                if(voted) stats.numMidVotesPeople++;
            }else if (age >=36) {
                stats.numOldPeople++;
                if(voted)stats.numOldVotedPeople++;
            }
            
            return stats;
            },
            
            
                {
  numYoungVotes:0/* Number of young voters (aged 18-25) who voted */,
  numYoungPeople:0 /* Number of young people (aged 18-25) */,
  numMidVotesPeople:0 /* Number of middle-aged voters (aged 26-35) who voted */,
  numMidsPeople: 0/* Number of middle-aged people (aged 26-35) */,
  numOldVotesPeople: 0/* Number of older voters (aged 36 and above) who voted */,
  numOldsPeople: 0/* Number of older people (aged 36 and above) */
}

            
            );
}



const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(analyzeVoterData(voters));
