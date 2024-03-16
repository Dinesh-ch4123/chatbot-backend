
const careersSteps = [
  {
    id: 'welcome1',
    message: 'Hello Champion of Sustainability. How can I help you today?',
    trigger: '4',
  },

  {
    id: '4',
    message: 'Join the tribe. What best describes you?',
    trigger: '4op'
  },
  {
    id: '4op',
    options: [
      { value: 1, label: "1. I am searching for job opportunity with Sustally", trigger: '4.1' },
      { value: 2, label: '2. I need an internship with Sustally', trigger: '4.2' },
    ],
  },

  {
    id: '4.1',
    component:<div> Check out the current Job opportunities in our Linkedin page here <a href="https://www.linkedin.com/company/sustally/" style={{color:'blue'}}>Click here</a>. If you don't find anything suitable, feel free to shoot your resume to ally@sustally.com and we will revert suitably</div>,
    asMessage:true,
     trigger: ''
  },


  {
    id: '4.2',
    message: "Please mention the internship duration and send your profile to ally@sustally.com",
    trigger: ''
  },

];


export default careersSteps
