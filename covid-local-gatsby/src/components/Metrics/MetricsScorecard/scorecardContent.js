const scorecardContent = [
  {
    metric: 'Infection Rate',
    icon: 'infectionIcon',
    phases: [
      [
        {
          text:
            'Sustained decline in daily cases for 21 consecutive days, as reflected in the 5-day rolling average',
          checked: false,
        },
        { text: '<10% of tests conducted are positive', checked: false },
        {
          text:
            'Current estimate of less than 5 cases per 100,000 population per day',
          checked: false,
        },
      ],
      [
        { text: 'Continued decline in daily cases', checked: false },
        { text: '>3% of tests conducted are positive', checked: false },
        {
          text:
            'Current estimate of less than 1 case per 100,000 population per day',
          checked: false,
        },
      ],
      [
        { text: '>3% of tests conducted are positive', checked: false },
        {
          text:
            'Current estimate of less than 1 case per 100,000 population per week',
          checked: false,
        },
      ],
    ],
  },
  {
    metric: 'Diagnostic Testing & Surveillance',
    icon: 'infectionIcon',
    phases: [
      [
        {
          text:
            'All symptomatic people, all asymptomatic high-risk individuals or contacts can access testing',
          checked: false,
        },
        {
          text: 'Tests are readily available for all essential personnel',
          checked: false,
        },
        {
          text: 'Majority of test results are returned within 48 hours',
          checked: false,
        },
        { text: 'Increasing number of tests per day', checked: false },
      ],
      [
        {
          text:
            'All symptomatic people, all asymptomatic high-risk individuals or contacts can access testing',
          checked: false,
        },
        {
          text: 'Tests are readily available for all essential personnel',
          checked: false,
        },
        {
          text: 'Majority of test results are returned within 24 hours',
          checked: false,
        },
        {
          text: 'Increasing number of tests per day; nearing sufficiency',
          checked: false,
        },
      ],
      [
        {
          text:
            'All symptomatic people, all asymptomatic high-risk individuals or contacts, and anyone who requests a test/any physician who orders a test can access testing',
          checked: false,
        },
        {
          text: 'Tests are readily available for all essential personnel',
          checked: false,
        },
        {
          text: 'Majority of test results are returned within 24 hours',
          checked: false,
        },
        { text: 'Sufficient number of tests per day', checked: false },
      ],
    ],
  },
  {
    metric: 'Case & Contact Investigations',
    icon: 'infectionIcon',
    phases: [
      [
        {
          text:
            '75% of close contacts are elicited and located within 48 hours',
          checked: false,
        },
        {
          text:
            'At least 30 contact tracers per 100,000, as well as case managers, care resource coordinators, community health workers',
          checked: false,
        },
        { text: '>60% of new cases from identified contacts', checked: false },
      ],
      [
        {
          text:
            '90% of close contacts are elicited, located, tested within 24 hours',
          checked: false,
        },
        {
          text:
            'At least 30 contact tracers per 100,000, as well as case managers, care resource coordinators, community health workers',
          checked: false,
        },
        { text: '>80% of new cases from identified contacts', checked: false },
      ],
      [
        {
          text:
            '95% of close contacts are elicited, located, tested within 24 hours',
          checked: false,
        },
        {
          text:
            'At least 30 contact tracers per 100,000, as well as case managers, care resource coordinators, community health workers',
          checked: false,
        },
        { text: '>90% of new cases from identified contacts', checked: false },
      ],
    ],
  },
  {
    metric: 'Healthcare Readiness',
    icon: 'infectionIcon',
    phases: [
      [
        {
          text:
            'At least 15% of existing ICU capacity is available to accommodate a surge in COVID-19 patients without resorting to crisis standards of care',
          checked: false,
        },
        {
          text:
            'Sufficient PPE for majority healthcare facilities, at-risk facilities, essential personnel',
          checked: false,
        },
      ],
      [
        {
          text:
            'At least 30% of existing ICU capacity is available to accommodate a surge in COVID-19 patients without resorting to crisis standards of care',
          checked: false,
        },
        {
          text:
            'Sufficient PPE for majority healthcare facilities, at-risk facilities, essential personnel',
          checked: false,
        },
        { text: 'PPE reserve of at least 2-4 weeks', checked: false },
      ],
      [
        {
          text:
            'At least 30% of existing ICU capacity is available to accommodate a surge in COVID-19 patients without resorting to crisis standards of care',
          checked: false,
        },
        {
          text:
            'Sufficient PPE for majority healthcare facilities, at-risk facilities, essential personnel',
          checked: false,
        },
        { text: 'PPE reserve of at least 90 days', checked: false },
      ],
    ],
  },
  {
    metric: 'Protecting At-Risk Populations',
    icon: 'infectionIcon',
    phases: [
      [
        {
          text:
            'Sufficient testing, quarantine, isolation in long-term care facilities',
          checked: false,
        },
        {
          text:
            '% of cases reported from long-term care facilities <20% over last 28 days',
          checked: false,
        },
        {
          text:
            'Local rapid response teams are available to respond to outbreak hotspots within 24 hours with sufficient PPE',
          checked: false,
        },
      ],
      [
        {
          text:
            'Sufficient testing, quarantine, isolation in long-term care facilities',
          checked: false,
        },
        {
          text:
            '% of cases reported from long-term care facilities <10% over last 28 days',
          checked: false,
        },
        {
          text:
            'Local rapid response teams are available to respond to outbreak hotspots within 24 hours with sufficient PPE',
          checked: false,
        },
      ],
      [
        {
          text:
            'Sufficient testing, quarantine, isolation in long-term care facilities',
          checked: false,
        },
        {
          text:
            '% of cases reported from long-term care facilities <5% over last 28 days',
          checked: false,
        },
        {
          text:
            'Local rapid response teams are available to respond to outbreak hotspots within 24 hours with sufficient PPE',
          checked: false,
        },
      ],
    ],
  },
]

export default scorecardContent
