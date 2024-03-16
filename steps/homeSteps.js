const homeSteps = [
  {
    id: 'welcome1',
    message: 'Hello Champion of Sustainability. How can I help you today?',
    trigger: 'optionsq1',
  },
  {
    id: 'optionsq1',
    message: "select an option below.",
    trigger: 'options1'
  },
  {
    id: 'options1',
    options: [
      { value: 1, label: '1. Show me the Product Features', trigger: '1' },
      { value: 2, label: '2. Book a Product Demo', trigger: '2' },
      { value: 3, label: '3. Explore Synergy/Partnership', trigger: '3' },
      { value: 4, label: '4. Join Sustally Team', trigger: '4' },
    ],  
  },
  {
    id: '1',
    message: 'Sure thing! What best describes you?',
    trigger: '1.r'
  }, {
    id: '1.r',
    component: <div><a href="/product">🔗Go to Product Page</a></div>,
    asMessage: true,
    trigger: 'productOp2'
  },
  {
    id: 'productOp2',
    options: [
      { value: 1, label: "1. I represent a large company", trigger: '1.1' },
      { value: 2, label: '2. I am a consultant', trigger: '1.2' },
      { value: 3, label: "3. I am a startup ecosystem enablen", trigger: '1.3' },
      { value: 4, label: '4. I represent a NGO/Government organization', trigger: '1.4' },
    ],
  },
  {
    id: '1.1',
    message: 'Sustally makes impact measurement across supply chain a breeze.',
    trigger: '2'
  },
  {
    id: '1.2',
    message: "Take your client's impact measurement to the next level.",
    trigger: '2'
  },
  {
    id: '1.3',
    message: 'Make startups join the bigger league through impact reports.',
    trigger: '2'
  },
  {
    id: '1.4',
    message: 'Adopt tech and narrate your projects output through numbers.',
    trigger: '2'
  },
  {
    id: '2',
    message: 'We love to! Feel free to book a time slot at your earliest s convenience.',
    trigger: '2.c'
  },
  {
    id: '2.c',
    component: <div><a href="https://calendly.com/sustally_team/product_demo" target="blank">🔗Book a call</a></div>,
    asMessage: true,
    trigger: '2.1'
  },

  {
    id: '2.1',
    message: 'Thanks. Please check your email for meeting details. For any issues, send us an email ally@sustally.com',
    trigger: 'back'
  },
  {
    id: 'back',
    options: [
      { value: 1, label: "Back", trigger: 'productOp2' },
      { value: 22, label: "Home", trigger: 'options1' },
    ]
  },
  {
    id: '3',
    message: 'Glad you liked our work! Can you share these details.',
    trigger: 'comform'
  },
  {
    id:'comform',
    component:<div></div>,
    asMessage:true,
    trigger:'3.1'
  },
  {
    id:'form',
    message:'Enter your Name',
    trigger:'name'
  },
  {
    id:'name',
    user:true,
    trigger:'form2'
  },
  {
    id:'form2',
    message:'Enter your Email',
    trigger:'email'
  },
  {
    id:'email',
    user:true,
    trigger:'form4'
  },
  {
    id:'form4',
    message:'Enter your mobile number',
    trigger:'number'
  },
  {
    id:'number',
    user:true,
    trigger:'form6'
  },
  {
    id:'form6',
    message:'About your organization/idea',
    trigger:'about'
  },
  {
    id:'about',
    user:true,
    trigger:'3.1'
  },
  {
    id: '3.1',
    message: 'Thanks for sharing these details. We will reach out to you very soon.',
    trigger: '3.back'
  },
  {
    id:'3.back',
    options:[
      { value: 1, label: "Home", trigger: 'options1' }
    ],
  },

  {
    id: '4',
    message: 'Yes! Join the tribe. What best describes you?',
    trigger: '4.link'
  },
  {
    id:'4.link',
    component:<div><a href="/career">🔗 career page</a></div>,
    asMessage:true,
    trigger:'4op'
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
     trigger: '3.back'
  },


  {
    id: '4.2',
    message: "Please mention the internship duration and send your profile to ally@sustally.com",
    trigger: '3.back'
  },

];


export default homeSteps
