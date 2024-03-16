const productSteps = [
  {
    id: '1',
    message: 'What best describes you?',
    trigger:'productOp2'
  },
  {
    id: 'productOp2',
    options: [
      { value: 1, label: "1.I represent a large company", trigger: '1.1' },
      { value: 2, label: '2.I am a consultant', trigger: '1.2' },
      { value: 3, label: "3.I am a startup ecosystem enablen", trigger: '1.3' },
      { value: 4, label: '4.I represent a NGO/Government organization', trigger: '1.4' },
    ],
  },
  {
    id: '1.1',
    message:'Sustally makes impact measurement across supply chain a breeze.',
    trigger: '2'
  },
  {
    id: '1.2',
    message:"Take your client's impact measurement to the next level.",
    trigger: '2'
  },
  {
    id: '1.3',
    message:'Make startups join the bigger league through impact reports.',
    trigger: '2'
  },
  {
    id: '1.4',
    message:'Adopt tech and narrate your projects output through numbers.',
    trigger: '2'
  },
  {
    id: '2',
    message:'We love to! Feel free to book a time slot at your earliest s convenience.',
    trigger: '2.c'
  },
  {
    id:'2.c',
    component:<div><a href="https://calendly.com/sustally_team/product_demo" target="blank">🔗Book a call</a></div>,
    asMessage:true,
    trigger:'2.1'
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
      { value: 22, label: "Home", trigger: '' },
    ]
  },
];


export default productSteps


