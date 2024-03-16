const teamWallSteps = [
    {
      id: 'career1',
      message: 'Wanna join our team',
      trigger: 'career2',
    },
    {
      id:'career2',
      message:'See our Latest job post',
      trigger:'career3'
    },
    {
      id:'career3',
      component: <div> <a href="https://sustally.com/career">Click here to Discover new posts</a> </div>,
      end:true

    }
];


export default teamWallSteps
