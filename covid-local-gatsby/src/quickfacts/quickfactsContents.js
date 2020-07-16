const quickfactsContents = [
  {
    question:
      'What do I, as a local leader, communicate to my community and how often?',
    subquestions: [],
    answer: {
      text:
        'Local leaders represent a trusted voice in their communities. During times of crisis crisis, the public wants to know what you know about the situation, what you are doing about it, and what they can or should do – and will look to you to provide a quick, sensitive and trustworthy response. As a local-leader, it is important that you involve and listen to your community, operate transparently, coordinate and collaborate with credible partners, deliver concise messages, and communicate early and frequently. ',
    },
    image: '',
    sources:
      'https://www.paho.org/en/documents/covid-19-guidelines-communicating-about-coronavirus-disease-2019-guide-leaders; https://www.researchgate.net/publication/8944073_Best_Practices_in_Public_Health_Risk_and_Crisis_Communication',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'How can I help? ',
    subquestions: [],
    answer: {
      text:
        'Currently, heeding guidance from health authorities is the most helpful activity for reducing the impact of COVID-19. For the most current guidance, please refer to information from the World Health Organization, the U.S. CDC, and local health departments.',
    },
    image: '',
    sources:
      'https://www.researchgate.net/publication/8944073_Best_Practices_in_Public_Health_Risk_and_Crisis_Communication; https://www.paho.org/en/documents/covid-19-guidelines-communicating-about-coronavirus-disease-2019-guide-leaders',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'What is "flatten the curve"?',
    subquestions: [],
    answer: {
      text:
        '"Flatten the curve" refers to a society-wide effort to slow down the spread of COVID-19 cases. Flattening the curve does not necessarily mean that fewer people get sick, but it does mean that people won’t all get sick at the same time, which will help to protect against overwhelming healthcare systems and the healthcare workforce. This will, in turn, result in better health outcomes (e.g., fewer deaths) for COVID-19 cases.',
    },
    image:
      'https://apps.npr.org/dailygraphics/graphics/covid-flattening-curve-20200313/',
    sources: 'https://www.lung.org/blog/update-covid-19',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'Are we overreacting?',
    subquestions: [],
    answer: {
      text:
        'While a huge disruption, the public health measures that are being implemented are our best bets for mitigating the consequences from the COVID-19 pandemic. If left unaddressed, the pandemic has the potential to infect millions of people in the United States, cost trillions of dollars in the short term, and trillions more in the long term.',
    },
    image:
      'https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf (Figure 1)',
    sources:
      'https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf; https://commentaries.cberdata.org/',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'How long does it last?',
    subquestions: [
      {
        question: 'What is the lifecycle?',
        answer: {
          text:
            'Because COVID-19 has only recently been discovered, the exact life cycle has yet to be determined. The incubation period (the time from exposure to the onset of symptoms) is thought to be between 2 and 14 days. Research suggests that, on average, most COVID-19 cases develop symptoms within 5 to 12 days of exposure to the virus. Current evidence suggests that once symptoms develop, their duration depends on the severity of the case. With mild COVID-19 cases, symptoms can last up to 14 days. More severe COVID-19 cases that require hospitalization may take longer. There may be additional time after resolution of symptoms when a patient still has active disease.',
        },
        sources:
          'https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center#COVID; https://www.nejm.org/doi/10.1056/NEJMoa2001316?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200www.ncbi.nlm.nih.gov; https://www.mdpi.com/2077-0383/9/2/538; https://www.technologyreview.com/s/615387/biggest-reader-questions-coronavirus-answers-covid-19/',
        dateAccessed: 'April 21, 2020',
      },
      {
        question:
          "If I stay separate for 14 days and I'm not sick, can I see at-risk family members?",
        answer: {
          __html:
            '<p>Currently, the CDC recommends that individuals with COVID-19 who have stayed home (are home isolated) can end isolation under specific conditions. If they will not have a test to determine if they are still contagious, they can leave home after three conditions are met:</p> <ol> <li>They have had no fever for at least 72 hours (without the use of medicines that reduce fever);</li> <li>Their symptoms have improved; and </li> <li>At least 7 days have passed since their symptoms first appeared.</li> </ol> <p>If they will be tested to determine if they are still contagious, they can leave home after these conditions are met:</p> <ol> <li>They no longer have a fever (without the use of medicines that reduce fever);</li> <li>Their symptoms have improved; and </li> <li>They have received two negative tests in a row, 24 hours apart.</li> </ol>',
        },
        sources:
          'https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/care-for-someone.html',
        dateAccessed: 'April 21, 2020',
      },
    ],
    answer: { text: '' },
    image: '',
    sources: '',
    dateAccessed: '',
  },
  {
    question: 'What percentage of people will get this? ',
    subquestions: [],
    answer: {
      text:
        "It is impossible to predict exactly how many people will get COVID-19, as this depends heavily on what public health interventions are implemented (and when), and efforts to develop vaccines and other medical therapeutics. In the absence of intervention, it is reasonable to believe that over the long term, a majority of the population will be infected with COVID-19. Other estimates suggest that in the absence of intervention, 25-50% of the world's population will become infected.",
      image: '',
    },
    sources:
      'https://academic.oup.com/cid/article/52/7/911/299077; https://www.who.int/docs/default-sources/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf; https://www.nature.com/articles/s41591-020-0822-7',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'When will this be over? ',
    subquestions: [],
    answer: {
      text:
        'The pandemic could end as soon as several months but could also last years. There is an inherent tradeoff between how quickly the pandemic ends and the health consequences. In the absence of intervention, COVID-19 would rapidly spread throughout human populations and quickly overwhelm healthcare systems – a situation that would incite panic and result in huge numbers of preventable sickness and death. However, if public health interventions are implemented that slow down the rate at which people get sick, while the outbreak would last longer, our systems and society will be less likely to be overrun and as a result, fewer deaths and less severe societal disruption.',
      image: '',
    },
    sources: '',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'Do young people need to worry about COVID-19?',
    subquestions: [],
    answer: {
      text:
        'According to recent CDC data, severe illness leading to hospitalization, including ICU admission and death, can occur in adults of any age with COVID-19. While the risk for serious disease and death in COVID-19 cases among persons in the United States increases with age, adults between the ages of 20 and 64 may still experience severe illness.  A CDC report shows that as of March 16, 2020, 508 people were hospitalized for COVID-19 in the U.S. Of these, 38% were between 20 and 54 years old. Half of those ending up in intensive care were younger than 65. Social distancing is recommended for all ages to slow the spread of the virus, protect the health care system, and help protect vulnerable older adults.',
      image: '',
    },
    sources:
      'https://www.cdc.gov/mmwr/volumes/69/wr/mm6912e2.htm?s_cid=mm6912e2_',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'How long can the virus survive on surfaces?',
    subquestions: [],
    answer: {
      text:
        'Research suggests that COVID-19 can stay suspended for about a half-hour and remain on certain surfaces for up to 72 hours. COVID-19 can survive on plastic and steel for up to 72 hours, on cardboard for 24 hours, and on copper for 4 hours. However, the amount of viable virus (that which can infect a person) decreases over this time.',
      image: '',
    },
    sources: 'https://www.nejm.org/doi/full/10.1056/NEJMc2004973',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'Which existing conditions make me most vulnerable? ',
    subquestions: [],
    answer: {
      text:
        'Preexisting medical conditions — including heart disease, high blood pressure, diabetes, kidney disease, and chronic lung disease – can increase the risk for severe COVID-19 illness. Individuals who are immunocompromised are also at higher risk for severe illness. To date, data on COVID-19 has not shown increased risk for people who are pregnant, but these individuals should be monitored since they are known to be at risk for severe disease with other viral illnesses.',
      image: '',
    },
    sources:
      'https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/people-at-higher-risk.html; https://www.lung.org/blog/update-covid-19; https://www.businessinsider.com/hypertension-diabetes-conditions-that-make-coronavirus-more-deadly-2020-3',
    dateAccessed: 'April 21, 2020',
  },
  {
    question:
      "Why have we decided to close schools if kids aren't getting sick? ",
    subquestions: [],
    answer: {
      text:
        'Children can develop COVID-19. While children tend to experience milder symptoms, some children have had severe complications. Children can also transmit COVID-19 to other populations, such as the elderly and immunocompromised, who are at greater risk for severe illness. It is for these reasons that closing schools is an important public health measure for controlling the spread of COVID-19.',
      image: '',
    },
    sources:
      'https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resources-center#COVID',
    dateAccessed: 'April 21, 2020',
  },
  {
    question: 'When can I travel again? ',
    subquestions: [],
    answer: {
      text:
        'At this time, the decision to travel is on a case-by-case basis. However, with increasing frequency, travel is being restricted as a means of curbing the spread of disease. Traveling through busy ports (e.g., airports, sea ports, etc.) can increase the risk of infection with COVID-19.',
      image: '',
    },
    sources:
      'https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-in-the-us.html',
    dateAccessed: 'April 21, 2020',
  },
  {
    question:
      "There is a lot of misinformation circulating now with the COVID-19 outbreak. What are some reliable sourcess of information where I can check the things I've heard?",
    subquestions: [],
    answer: {
      text:
        'As COVID-19 spreads around United States, half-truths, misinformation, and disinformation are also spreading. In a situation like a pandemic, it is important to rely on trusted news outlets and information sourcess. Some good sourcess for information related to COVID-19 include the World Health Organization, the U.S. CDC, local health departments. Other sourcess of information (like this one!) should link to their sourcess of information or reference which experts they talked to.',
      image: '',
    },
    sources: '',
    dateAccessed: 'April 21, 2020',
  },
]

export default quickfactsContents
