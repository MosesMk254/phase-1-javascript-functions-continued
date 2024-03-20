// code your solution here
// function saturdayFun(
//   activity1,
//   activity = "This Saturday, I want to roller-skate!"
// ) {
//   if (activity1 === true) {
//     return ` This Saturday, I want to  ${activity1}`;
//   } else {
//     return activity;
//   }
// }

// function saturdayFun(msg = "This Saturday, I want to") {
//   const activity1 = function (msg, activity = "roller-skate") {
//     return `${msg} ${activity}!`;
//   };
//   return activity1('This Saturday, I want to', 'roller-skate')
// }
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = '*') {
  return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
  }
}