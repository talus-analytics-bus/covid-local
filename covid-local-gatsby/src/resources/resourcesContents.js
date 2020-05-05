const resourcesContents = [
  {
    name: 'Rapid Urban Health Security Assessment (RUHSA) Tool',
    description:
      'This tool can help local leaders assess their current capacity for health security make good decisions as they help their communities prioritize and improve local capacity to respond to and prevent infectious disease threats. ',
    organization:
      'Georgetown University Center for Global Heath Science & Security',
    topic: 'Urban Security',
    phase: 'Preparedness; Response',
    image: 'RUHSA.png',
    link: 'https://georgetown.app.box.com/s/0sruh3cnji6txorqt2acgm0z9xx73ac1',
  },
  {
    name: "John's Hopkins COVID-19 Global Case Tracker",
    description:
      'This tracking tool shows a map of the global case counts, deaths, and recoveries from COVID-19. In the United States, it also shows state level data. It is regularly updated. ',
    organization: "John's Hopkins",
    topic: 'Caseload Mapping',
    phase: 'Response',
    image: 'Johns_Hopkins_Caseload_Tracker.png',
    link: 'https://coronavirus.jhu.edu/map.html',
  },
  {
    name: 'WHO Situational Reports',
    description:
      'The World Health Organizaiton develops and posts daily situational reports outlining global developments, including spread and research and development.',
    organization: 'WHO',
    topic: 'Public Health Response',
    phase: 'Preparedness; Response',
    image: 'WHO.png',
    link:
      'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports ',
  },
  {
    name: 'COVID Act Now: The U.S. Intervention Model',
    description:
      'This data platform helps project infections, hospitalizations, and deaths across the United States, helping decision makers understand when and how COVID will affect their communities. It also helps model how public health interventions contain the spread of COVID-19. ',
    organization: 'COVID Act Now',
    topic: 'Modeling',
    phase: 'Preparedness; Response',
    image: 'COVID_Act_Now.png',
    link: 'https://covidactnow.org/',
  },
  {
    name: 'COVID-19: What Mayors Need to Know',
    description:
      'This resource, developed by the US Conference of Mayors, details city guidelines and operational best practices, contains resources for fiscal tracking, reimbursements, and supplies.',
    organization: 'US Conference of Mayors',
    topic: 'Public Health Response',
    phase: 'Response',
    image: 'US Conference of Mayors.png',
    link: 'https://www.usmayors.org/issues/covid-19/',
  },
  {
    name: 'Disaster Response Program',
    description:
      'The ArcGIS Hub allows you to build a website to visualize and analyze the COVID-19 outbreak with your organization’s or community’s population and data. The tools is provided free of charge through a complimentary six-month subscription.',
    organization: 'ESRI',
    topic: 'Local Mapping ',
    phase: 'Response',
    image: 'ESRI.png',
    link: 'https://www.esri.com/en-us/disaster-response/overview',
  },
  {
    name: 'Emergency Operations Center Assessment Checklist',
    description:
      'This checklist outlines critical elements needed when state and local governments perform assessments of existing Emergency Operations Centers.',
    organization: 'FEMA',
    topic: 'Emergency Operations',
    phase: 'Planning; Response',
    image: 'FEMA EOC Operations.jpg',
    link:
      'https://www.fema.gov/emergency-operations-center-assessment-checklist',
  },
  {
    name:
      'Coronavirus Could Overwhelm U.S. Without Urgent Action, Estimates Say',
    description:
      'Data visualization showing how social distancing measures impact the speed and severity of an outbreak at the county level. The tool also compares the healthcare capacity by county. ',
    organization: 'New York Times ',
    topic: 'Modeling',
    phase: 'Response',
    image: 'New York Times County Modeling.png',
    link:
      'https://www.nytimes.com/interactive/2020/03/20/us/coronavirus-model-us-outbreak.html',
  },
  {
    name: 'Project N95',
    description:
      'This national resource helps connect healthcare providers with critical equipment, such as N95 masks.',
    organization: 'Project N95',
    topic: 'PPE',
    phase: 'Response',
    image: 'project N-95.png',
    link: 'https://www.projectn95.org/',
  },
  {
    name: 'Get Us PPE',
    description:
      'This national resouce helps connect healthcare providers with those who make or distribute critical Personal Protective Equipment.',
    organization: 'Get Us PPE',
    topic: 'PPE',
    phase: 'Response',
    image: 'GetUsPPE.png',
    link: 'https://getusppe.org/',
  },
  {
    name: 'Mask Match',
    description:
      'This resource helps connect healthcare workers with spare masks and assists coordinating pickup and dropoff.  ',
    organization: 'Mask Match',
    topic: 'PPE',
    phase: 'Response',
    image: 'Mask Match.jpg',
    link: 'https://www.mask-match.com/',
  },
  {
    name: 'Microsoft Power Platform for Emergency Response',
    description:
      'The Microsoft Power Platform helps manage communications across an organization during an emergency response. ',
    organization: 'Microsoft',
    topic: 'Emergency Operations',
    phase: 'Response; Recovery',
    image: 'Microsoft Powerapps.png',
    link:
      'https://powerapps.microsoft.com/en-us/blog/emergency-response-solution-a-microsoft-power-platform-solution-for-healthcare-emergency-response/',
  },
  {
    name:
      'Social distancing and mobility reductions have reduced COVID-19 transmission in King County, WA',
    description:
      'This report quantifies the impact of policies on reducing COVID-19 in King County, Washington.',
    organization: 'Institute for Disease Modeling',
    topic: 'Modeling',
    phase: 'Preparedness; Response',
    image: 'IDM Model.png',
    link:
      'https://covid.idmod.org/data/Social_distancing_mobility_reductions_reduced_COVID_Seattle.pdf',
  },
  {
    name: 'COVID-19 guidance and the latest research in the Americas',
    description:
      'This database provides access to technical guidance, scientific publications, and ongoing research protocols. It is developed by the Pan American Health Organization and is Focused on the Americas region of the world. Information obtained here may not necessarily align with U.S. guidance or information, but may be helpful regardless.',
    organization: 'PAHO',
    topic: 'Public Health Response',
    phase: 'Preparedness; Response; Recovery',
    image: 'PAHO.png',
    link: 'https://cOvid19-evidence.paho.org',
  },
  {
    name: 'Fiscal First Aid: Recovering from Financial Distress',
    description:
      'Disasters can cause significant financial distress for even the best-prepared local governments – resulting in a situation in which governments do not have sufficient resources to finance all of their responsibilities. This resource details 12 actions to help local-governments navigate the financial recovery process.',
    organization: 'Government Finance Officers Association',
    topic: 'Financing',
    phase: 'Recovery',
    image: 'FFA Logo_Blue.png',
    link: 'https://www.gfoa.org/fiscal-first-aid',
  },
  {
    name:
      'National Covid-19 Testing Action Plan: Pragmatic steps to reopen our workplaces and our communities',
    description:
      'With the first wave of infections from the Covid-19 pandemic cresting in much of the country, American political and business leaders rightly are considering plans to reopen the economy. This Action Plan is intended to serve as a resource guide for that allimportant project.',
    organization: 'The Rockefeller Foundation',
    topic: 'Reopening',
    phase: 'Recovery',
    image: 'Rockefeller Foundation.png',
    link:
      'https://www.rockefellerfoundation.org/wp-content/uploads/2020/04/TheRockefellerFoundation_WhitePaper_Covid19_4_22_2020.pdf',
  },
  {
    name: 'Roadmap to Recovery: A Public Health Guide for Governors',
    description:
      'The global pandemic of COVID-19 poses an unprecedented challenge to the health and well-being of every state and territory across the country. While there is significant evidence that social distancing is effective at blunting the full force of COVID-19, these actions have come with significant economic and social costs.With the paramount aim of keeping individuals and communities safe, governors are committed to reopening states in a manner that preserves public safety and confidence.',
    organization:
      'National Governors Association; Association of State and Territorial Health Officials',
    topic: 'Reopening',
    phase: 'Recovery',
    image: 'ASTHO Road Map.png',
    link: 'https://www.nga.org/wp-content/uploads/2020/04/NGA-Report.pdf',
  },
  {
    name: 'Personal Protective Equipment (PPE) Burn Rate Calculator',
    description:
      'The Personal Protective Equipment (PPE) Burn Rate Calculator is a spreadsheet-based model that will help healthcare facilities plan and optimize the use of PPE for response to coronavirus disease 2019 (COVID-19). Non-healthcare facilities such as correctional facilities may also find this tool useful.',
    organization: 'CDC',
    topic: 'PPE',
    phase: 'Response',
    image: 'PPE Calculator.png',
    link:
      'https://www.cdc.gov/coronavirus/2019-ncov/hcp/ppe-strategy/burn-calculator.html',
  },
  {
    name: 'Making Contact: A Training for COVID-19 Contact Tracers',
    description:
      'This is an introductory online course for entry-level COVID-19 contact tracers, for use by health agencies in rapid training of new contact tracers. The training will be augmented by state/local specific training required to orient individuals to jurisdiction-specific protocols. This training focuses on building knowledge for remote contact tracing; a subsequent release will include a module on field services.',
    organization:
      'Association of State and Territorial Health Officials; National Coalition of STD Directors',
    topic: 'Contact Tracing',
    phase: 'Response; Recovery',
    image: 'Astho Contact Tracer.png',
    link: 'https://learn.astho.org/p/ContactTracer',
  },
  {
    name: 'Re:Public COVID Log',
    description:
      'COVID Log is a web platofrom that was built to give community leaders a customizable map-based platform with data on healthcare facilities, key demographic data, and COVID-19 caseload trends, enhanced by custom notes to support informed decisions during the pandemic.',
    organization: 'Re:Public',
    topic: 'Local Mapping',
    phase: 'Planning; Response; Recovery',
    image: 'Re_Public_COVID_Log.png',
    link: 'https://covid.re-public.app/',
  },
  {
    name:
      'Strengthening Preparedness for COVID-19 in Cities and Urban Settings: Interim Guidance for Local Authorities',
    description:
      'Cities and other urban settlements are at risk of COVID-19. Many densely populated areas have experienced high case numbers and deaths, which reflects the ease of introduction and spread of the virus in such places. Urban settings face unique dynamics that have a direct impact on the achievement of preparedness for all types of health emergencies, including COVID-19. These dynamics shape the capacity of authorities to mount an effective response, which further underscores the need to learn from the experiences and best practices of others, implement appropriate measures for preparedness before a public health emergency occurs and to adjust them as necessary.',
    organization: 'WHO',
    topic: 'Local Guidance',
    phase: 'Planning; Response; Recovery',
    image: 'WHO Local Guidance.png',
    link:
      'https://apps.who.int/iris/bitstream/handle/10665/331896/WHO-2019-nCoV-Urban_preparedness-2020.1-eng.pdf',
  },
]

export default resourcesContents
