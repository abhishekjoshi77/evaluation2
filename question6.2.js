



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


{
  numYoungVotes: /* Number of young voters (aged 18-25) who voted */,
  numYoungPeople: /* Number of young people (aged 18-25) */,
  numMidVotesPeople: /* Number of middle-aged voters (aged 26-35) who voted */,
  numMidsPeople: /* Number of middle-aged people (aged 26-35) */,
  numOldVotesPeople: /* Number of older voters (aged 36 and above) who voted */,
  numOldsPeople: /* Number of older people (aged 36 and above) */
}
