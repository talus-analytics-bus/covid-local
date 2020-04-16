import React from "react"
// import { Link } from "gatsby"

import Layout from '../components/Layout/Layout';

import '../globalStyles/global.css'

const IndexPage = () => (
  <Layout>
    <nav className="document-nav"></nav>
  <header className="introduction-header">
    <div className="introduction">
      <div className="left-col">
        <h1>A Frontline Guide for Local Decision-Makers</h1>
        <p>The COVID-19 pandemic is creating significant disruption to daily life in cities and communities around the world. This guide provides an initial strategic framework for state, city, and local leaders as they begin planning what will need to be done to reduce the impact of the outbreak in the near term. The guide and checklists were developed by <a href="https://www.covid-local.org/contributors.html">a team of deeply experienced experts and former public health officials</a>, in consultation with current state and local officials about the key issues they face. Our focus has been on providing information for both slowing and suppressing the spread of the virus, and also on supporting community needs. </p>
        <p>This guide is informed by existing guidance from U.S. and global authorities, public health research findings, and lessons observed from countries that have been battling COVID-19 since January 2020. <strong>It is intended to complement, but not in any way supplant, advice and guidance from global, federal and local public health and other authorities.</strong></p>
        <p><strong>NOTE: This is an initial version of the guide. Use the button to the right to send feedback to be incorporated as the COVID-19 pandemic continues.</strong></p>
      </div>
      <div className="right-col">
        <a href="#action-1" className="introduction-feedback">
          Click here for web tool
        </a>
        <a href="#action-0" className="introduction-feedback">
          Indicators of Progress
        </a>
        <a href="/assets/documents/COVID19 Frontline Guide for Local Decision Makers.pdf" className="introduction-feedback">
          Download the guide
        </a>
        <a href="mailto:bell@nti.org?subject=COVID-Local%20Site%20Feedback" className="introduction-feedback">
          Send us feedback
        </a>
      </div>
    </div>
    <div>
      <button aria-label="Expand Details" className="read-more-button">Read an introduction to the guide</button>
      <div className="read-more-hider" hidden>
        <div className="read-more-content overview">
          <div className="navbar-logo" style={{marginTop:'2rem',marginBottom:'-2em'}}></div><h2>The COVID-19 Pandemic</h2>
          <p>COVID-19, caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), can spread explosively if not rapidly addressed. Different cities will face differing risk profiles and require tailored mitigation strategies, depending on the trajectory of the outbreak in any given location. This guide is intended to provide leaders and public officials at any state, city, or local level with a support tool to assist in informed strategy and decision-making on how to combat the resulting disease, COVID-19, in your jurisdiction. It is NOT a prescriptive set of instructions; rather it provides context and advice on how to tailor principles of outbreak control strategy, disaster management, and evolving knowledge on COVID-19 dynamics to different local conditions.</p>
          <p>Battling a new virus pandemic is a unique public policy challenge: the human and economic costs of daily or weekly inaction grow exponentially. Early in an outbreak, when case counts are low, losing a week of potential action may not dramatically change outcomes. But as an outbreak begins to spread and accelerate, a 1-2-week delay can be the difference between cases in the thousands or cases in the tens of thousands. Research on the 1918-19 influenza pandemic in the United States has found that early, sustained application of measures like social distancing mitigated community-level impact of the outbreak. <span data-tippy-content="Markel H, Lipman HB, Navarro JA, et al. Nonpharmaceutical Interventions Implemented by US Cities During the 1918-1919 Influenza Pandemic. JAMA. 2007;298(6):644–654. doi:10.1001/jama.298.6.644 <a href='#read-more-endnotes'>view endnotes</a>">(1)</span> It is beneficial to apply strong measures early on rather than to wait, even if those measures feel intuitively premature at the time. Lessons from Singapore, Hong Kong, and Taiwan during the current pandemic likewise affirm that early and disciplined action can limit or prevent explosive spread. However, state and local leaders must also weigh the public health benefits of disruptive measures against the second-order impacts that those measures may have on the economy, vulnerable populations, and other local factors.</p>
          <p><strong>Given that this virus currently has no proven vaccines or treatments, the most important way to limit mortality in the near term is to avoid over-burdening the health system with a high volume of critical COVID-19 cases</strong> COVID-19 cases requiring medical intervention are in addition to the existing healthcare demand, and experience from China and Italy shows that unchecked spread of the virus has the potential to rapidly and abruptly overwhelm health systems. While the world’s understanding of COVID-19 remains imperfect, initial evidence from China showed that the mortality rate ranged between 7 to 58 times as fatal as seasonal flu, depending on the timing of the response and the burden placed on the hospital system. In the epicenter of Wuhan, where delayed action meant hospitals became overwhelmed, the World Health Organization estimated that average mortality was 5.8%, <span data-tippy-content="Report of the WHO-China Joint Mission on Coronavirus Disease 2019 (COVID-19). <a target='_blank' rel='noopener noreferrer' href='https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf'>https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a> <a href='#read-more-endnotes'>view endnotes</a>">(2)</span> while in other areas of China that had more warning and took drastic measures to suppress transmission, mortality was only 0.7% (seasonal flu mortality is roughly 0.1%). Evidence from China and elsewhere also shows that the disease is most dangerous to the elderly and to people with pre-existing medical complications; these high-risk groups died at much higher than average rates.</p>
          <figure>
            <img src="/assets/images/China Cases-min.svg" alt="Figure 1 The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020."/>
            <figcaption>
              <strong>Figure 1.</strong> The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020. <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">WHO-China joint mission report on Covid-19</a>
            </figcaption>
          </figure>
          <p><strong>All elements of an initial response strategy should connect to the overarching goal of limiting deaths by minimizing strain on the health system.</strong> Rapid and aggressive action can create a positive cycle, in which measures to slow spread will reduce the critical case volume, which will in turn limit pressures on intensive care units, delay peak case volume, and keep mortality under control. A slower infection rate means a less stressed health care system. Delayed action, in contrast, will allow the disease to spread widely, generating a sudden surge in critical cases and eroding care quality and worsening mortality rates. The difference between these scenarios may be as little as days or weeks; in the US at large, the daily new-case count increased ten-fold between March 12 and March 19.</p>
          <figure>
            <img src="/assets/images/Figure-2.png" alt="Figure 1 The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020." className="narrowimage"/>
            <figcaption>
              <strong>Figure 2.</strong> A conceptual overview of the impact of applied control measures in reducing the rate of spread of COVID-19, and how they can, hypothetically, limit the burden on the health system.
            </figcaption>
          </figure>
          <h2>Strategic Considerations for Managing COVID-19 in Your Community</h2>
          <p>A community’s strategic posture, trade-offs, and priorities will vary and evolve depending on the stage of the outbreak. Strategy and priorities will shift depending on where a city is in the course of the outbreak and the number of cases in your community. A community is likely to face several phases as the outbreak progresses, which may occur in quick succession and build on one another. Not all communities will experience each of these steps discretely but may experience them in rapid succession or “skip” steps in the process, especially early in the outbreak. A community may experience multiple waves of virus if control measures are relaxed prematurely.</p>
          <p>Different actions and approaches should be triggered as a city moves along these phases of transmission.  Knowing which phase a community is currently experiencing will be challenging early in an ongoing outbreak, especially if diagnostic testing is not widely available. Outbreaks develop quickly and information will be imperfect or incomplete. Decision-making may need to progress on a no-regrets basis before having clear evidence of which phase a community is experiencing. <strong>Given the growing evidence of widespread community transmission in the United States, all communities in this country should be preparing with the expectation that they will be at level 3 – large-scale community transmission – within the next month.</strong></p>
          <p>These phases are specific to this guide and not in reference to the Pandemic Intervals Framework issued by CDC in 2016.<span data-tippy-content="<a target='_blank' rel='noopener noreferrer' href='https://www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html'> www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html</a> <a href='#read-more-endnotes'>view endnotes</a>">(3)</span></p>
          <figure>
            <img src="/assets/images/image4-fs8.png" alt="Description of the progression of the outbreak in local communities, as marked by number of cases and burden on the healthcare system."/>
          </figure>
          <figcaption>
            <strong>Figure 3.</strong> Description of the progression of the outbreak in local communities, as marked by number of cases and burden on the healthcare system.
          </figcaption>
          <figure>
            <img src="/assets/images/epi_transparent-01-fs8.png" alt="Figure 1 The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020."/>
            <figcaption>
              <strong>Figure 4.</strong> Notional example describing relative spread and number of cases in a community, mapped roughly to the progression described in Figure 3 and roughly corresponding to the spread of COVID-19 as reported in China, shown in Figure 1.
            </figcaption>
          </figure>
          <div className="first-section-resources" style={{marginTop:'4rem'}}>
            <a id="read-more-endnotes" className="page-anchor" href='#read-more-endnotes'></a>
            <h4>RESOURCES</h4>
            <ol>
              <li>Markel H, Lipman HB, Navarro JA, et al. Nonpharmaceutical Interventions Implemented by US Cities During the 1918-1919 Influenza Pandemic. JAMA. 2007;298(6):644–654. doi:10.1001/jama.298.6.644</li>
              <li>Report of the WHO-China Joint Mission on Coronavirus Disease 2019 (COVID-19). <a target="_blank" rel="noopener noreferrer" href='https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf'>www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href='https://www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html'>www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </header>


  <article className="expanding-boxes">
    <section>
      <div className="first-section">
        <a id="action-0" className="page-anchor"></a>
        <div className="no-number"></div>
        <h2>INDICATORS OF PROGRESS</h2>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area" style={{border:'none'}}>
          <div className="implementation-metrics">
            <div className="header"><div className="number">1</div><p>Activation of an emergency operations center (EOC) with an incident command structure to manage local response efforts.</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Is there a clearly designated and empowered incident manager?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Are there clearly designated organizational units in the EOC aligned with principal operational priorities (e.g., testing, hospital capacity, crisis communication, protection of high-risk populations, etc)?</p></div></div>

            <div className="header"><div className="number">2</div><p>Availability and accessibility of COVID-19 testing throughout your community.</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Is COVID-19 testing in your community meeting medical demand?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Is COVID-19 testing in your community meeting wider public demand?</p></div></div>

            <div className="header"><div className="number">2</div><p>Existence of an accurate understanding of the COVID-19 transmission trend within your community.</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Do you have an accurate understanding of the level of COVID-19 transmission?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Does the general public in your community have an accurate understanding of the status of COVID-19 transmission through daily updates?</p></div></div>

            <div className="header"><div className="number">3</div><p>Infection, prevention, and control have been implemented to prevent disruptions in critical services, including:</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Food supply and distribution?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Critical Infrastructure?</p></div></div>
            <div className="radio"><div><div className="radio-li">c</div><p>Water supply?</p></div></div>
            <div className="radio"><div><div className="radio-li">d</div><p>Waste management?</p></div></div>
            <div className="radio"><div><div className="radio-li">e</div><p>Electricity?</p></div></div>

            <div className="header"><div className="number">4</div><p>Institute protective measures for facilities serving high-risk populations.</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Has a comprehensive list of facilities that house high-risk populations been compiled?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Have those facilities’ infection prevention and hygiene practices been assessed and verified?</p></div></div>
            <div className="radio"><div><div className="radio-li">c</div><p>Have all identified vulnerabilities at those facilities been addressed?</p></div></div>

            <div className="header"><div className="number">5</div><p>Availability of critical care/intensive care treatment capacity in your area.</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Are you able to project approximate anticipated bed needs over the next 2 weeks?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Are the hospitals in your community able to meet current and projected demand for critical care/intensive care unit capacity?</p></div></div>
            <div className="radio"><div><div className="radio-li">c</div><p>Are you implementing measures to expand critical care/intensive care unit capacity?</p></div></div>
            <div className="radio"><div><div className="radio-li">d</div><p>Are your local health care facilities separating intake for patients with COVID-19, or who may have COVID-19, from those needing other types of care?</p></div></div>

            <div className="header"><div className="number">5</div><p>Supply of personal protective equipment (PPE) is sufficient and available for the following priorities:</p></div>
            <div className="radio"><div><div className="radio-li">a</div><p>Critical care units?</p></div></div>
            <div className="radio"><div><div className="radio-li">b</div><p>Testing centers?</p></div></div>
            <div className="radio"><div><div className="radio-li">c</div><p>Assisted living centers and other facilities housing high-risk populations?</p></div></div>
            <div className="radio"><div><div className="radio-li">d</div><p>EMTs and other frontline responders?</p></div></div>

            <div className="header radio"><div className="number">6</div><p>Implementation of a crisis communication strategy, including scheduled updates and clear lines of communication with critical stakeholders.</p></div>

            <h3>Progress: 0%</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-1" className="page-anchor" href="#action-1"></a>
        <div className="number">1</div>
        <h2>KEY OBJECTIVE #1</h2>
        <h1>Activate an Emergency Operations Center and establish a whole-of-community incident management structure</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>Controlling a pandemic outbreak is a multi-disciplinary and whole-of-society endeavor, and the leadership and management structure must reflect that. Activating an Emergency Operations Center, as would occur in a natural disaster or other homeland security crisis, is a best practice used in previous large-scale novel outbreaks. The EOC should host a whole-of-community incident management structure, drawing on existing local emergency response plans and capacities where possible. Using an EOC enables a community to streamline communication, planning, decision-making, and operational coordination across a wide range of community leaders and stakeholders, including communication and alignment with higher-level (state/federal) EOC processes and decision cycles. The EOC should also have liaisons to, or representatives from, other levels of government, public health officials, civil society, religious leaders, the business community, academia, and others.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Activate local Emergency Operations Center and connect to state/federal EOCs</li>
                  <li>Designate an empowered Incident Manager</li>
                  <li>Organize EOC functional units/teams around major operational priorities</li>
                  <li>Establish liaisons to key government partners (state, federal) and community stakeholders</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li>Have you activated your Emergency Operations Center (EOC) and established a whole-of-community incident management structure?</li>
              <li>Have functional teams in the EOC been organized around defined operational priorities (such as the key actions identified in this document)?</li>
              <li className="header">Does the EOC have designated liaisons with all relevant government, community, and private sector stakeholders, including:
                <ol>
                  <li>Other state, local, and federal officials involved in the response?</li>
                  <li>Healthcare coalitions, including hospitals, public health, EMS and other key elements of the health and medical sector?</li>
                  <li>Civil society groups, religious institutions, and other community leaders?</li>
                  <li>Appropriate representation from all departments and agencies?</li>
                </ol>
              </li>
              <li>Has the EOC identified the critical workers/sectors in your community (healthcare, utilities, transport, food supply, etc.)?</li>
              <li className="header">Is there a process to maintain the health and wellbeing of personnel assigned to work in the EOC?
                <ol>
                  <li>As quarantines and self-isolation requirements expand, do you have a clear process for transitioning to a virtual EOC for non-essential personnel who still need to be engaged, as well as those who may be infected?</li>
                </ol>
              </li>
              <li className="header">Have you designated or appointed a response coordinator with the authority to:
                <ol>
                  <li>Bring issues directly to you for rapid resolution?</li>
                  <li>Links with scientific and health experts to provide guidance based on the latest research?</li>
                </ol>
              </li>
              <li>Do you have a Continuity of Government plan to ensure continued essential services? <a target="_blank" rel="noopener noreferrer" href="https://whitehouse.gov1.info/continuity-plan/">(Example Here)</a></li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Is there a clearly delineated process by which health and medical stakeholders advance resource requests to the jurisdictional EOC?</li>
                    <li>What key communications systems and technologies are needed in your EOC?</li>
                    <li>Is there a plan in place to build and maintain over a prolonged period a common operating picture to share situational awareness with all key partners?</li>
                    <li>What declarations or legal/regulatory guidance has been implemented and how do they impact the decisions that need to be made?</li>
                    <li>Is there a process in place to ensure that timely, accurate risk communications are available and coordinated with all jurisdictional agencies?</li>
                    <li>Are public health information specialists integrated into the Joint Information System?</li>
                    <li>Have key stakeholders shared their continuity/contingency plans with the EOC?</li>
                    <li>Do personnel need refresher training on Incident Command System (ICS) concepts?</li>
                    <li>Has the EOC planned for potential attrition of first responders by establishing a continuity of operations plan to replace and supplement critical personnel?</li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/emergency-operations-center-assessment-checklist" className="emph">Emergency Operations Center Assessment Checklist</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/media-library-data/1582825590194-2f000855d442fc3c9f18547d1468990d/NRF_FINALApproved_508_2011028v1040.pdf" className="emph">National Response Framework, Fourth Edition</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.phe.gov/Preparedness/planning/mscc/handbook/Pages/appendixb.aspx">"Incident Command System Primer for Public Health and Medical Professionals: Appendix B: Incident Command System Primer for Public Health and Medical Professionals"</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/media-library-data/1537787069093-33f58df52a992c566c62959208fcdd96/EOC_Skillset_Guide_20180918_FINAL.pdf">EOC Skill Sets User Guide (FEMA)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.phe.gov/Preparedness/planning/mscc/handbook/Pages/appendixc.aspx">What Is An Incident Action Plan? (DHHS)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://training.fema.gov/emiweb/is/icsresource/trainingmaterials.htm">National Incident Management System: ICS Resource Center (FEMA)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/lifelines">FEMA LifeLines (FEMA)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://journal.chestnet.org/article/S0012-3692(15)51988-0/fulltext">Surge Capacity Logistics</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.phe.gov/Preparedness/planning/hpp/reports/Documents/2017-2022-healthcare-pr-capablities.pdf">2017-2022 Health Care Preparedness and Response Capabilities (ASPR)</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-2" className="page-anchor" href="action-2" />>
        <div className="number">2</div>
        <h2>KEY OBJECTIVE #2</h2>
        <h1>Understand the real-time spread of COVID-19 in your community</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>A pandemic control strategy is grounded in understanding transmission risk in the community. This requires disease surveillance, diagnostic testing, and reporting systems that ensure up-to-date information on local spread is available to inform strategy-setting and daily tactical decision-making. This may be difficult where limited testing supplies and/or shortages of personal protective equipment prevent sufficient testing.  Scaling up local access to testing will be critical as additional laboratory capacity comes online. As a stop-gap, communities can enhance syndromic surveillance and other dynamic surveillance tools to gauge disease activity within the community.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Assess sufficiency of existing diagnostic testing capacity and initiate plans to expand</li>
                  <li>Consider analyzing data from influenza-like-illness (ILI) tracking as a proxy for COVID-19 incidence</li>
                  <li>Link COVID-19 testing and surveillance data to EOC</li>
                  <li>Assess current level and trajectory of COVID-19 spread in the community</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li className="header">Does your EOC have accurate real-time picture of the trajectory of the outbreak within the community for each of the following:
                <ol>
                  <li>New daily cases?</li>
                  <li>Proportion of new cases from beyond known contacts of existing cases? (this is a proxy for degree of community spread)</li>
                  <li>Total active cases being managed in the health system?</li>
                  <li>Number of people under isolation or quarantine?</li>

                </ol>
              </li>
              <li className="header">Are you conducting contact tracing and monitoring of close contacts for confirmed cases?
                <ol>
                  <li>Do you have a plan to transition to limited tracing if case volume surpasses a manageable threshold?</li>
                </ol>
              </li>
              <li className="header">How close is testing to fully meeting medical demand and wider public demand?
                <ol>
                  <li>Are sufficient test kits available?</li>
                  <li>Are health providers able to test all whom they think need diagnosis?</li>
                  <li>Are there localized trade-offs between using scarce PPE for testing vs treatment or other priorities?</li>
                  <li>Is it possible for those with symptoms to self-identify and safely access diagnostic tests without exposing others?</li>
                  <li>Is there an existing plan or timeline for expanding availability?</li>
                  <li>Does your testing strategy allow for detection of asymptomatic and/or mild cases?</li>
                </ol>
              </li>
              <li>Is there a lag time for receiving laboratory and clinical data? Have you identified and implemented actions that can be taken to reduce the lag?</li>
              <li>Are health care providers in your area analyzing data on Influenza-Like Illnesses as a proxy for COVID19?</li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Can the EOC receive notice of all cases tested in your community from both public and private health facilities?</li>
                    <li>Is disaggregated information about cases in vulnerable populations being provided?</li>
                    <li>Are public health personnel being redirected to highest yield interventions as test cases grow?</li>
                    <li>Is there a plan in place to assess the effectiveness of inbound traveler screening taking into account the resources required? </li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/csels/dsepd/ss1978/lesson6/section1.html" className="emph">Principles of Epidemiology in Public Health Practice, Third Edition An Introduction to Applied Epidemiology and Biostatistics. Lesson 6: Investigating an Outbreak (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance/surveillance-and-case-definitions">Surveillance Technical Guidance (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/docs/default-source/coronaviruse/who-ncov-crf.pdf?sfvrsn=84766e69_2">Global COVID-19 Clinical Characterization Case Record Form and new data platform for anonymized COVID-19 clinical data (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/community-mitigation-strategy.pdf">Implementation of Mitigation Strategies for Communities with Local COVID-19 Transmission (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.bnext.org/article/fever-screening-public-health-protection-or-security-theater/">Fever Screening</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-3" className="page-anchor"></a>
        <div className="number">3</div>
        <h2>KEY OBJECTIVE #3</h2>
        <h1>Slow and reduce transmission</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>Slowing and limiting transmission within a community is central to reducing the near-term human cost of the outbreak and ensuring that hospitals will be able to maintain lifesaving and life sustaining care. It can also be highly disruptive, as social distancing measures must become more aggressive in proportion to the exponential spread of the virus. Determinations on the best means of limiting transmission will depend on local factors, but in general should be calibrated to be more aggressive than what observable local conditions might intuitively suggest.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Clearly outline local social distancing guidelines to the community</li>
                  <li>Establish criteria for critical and non-critical activities</li>
                  <li>Assess and mitigate secondary impact of social distancing measures</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li>Does the community have defined thresholds for when to impose or lift measures for social distancing, shelter-in-place, mandatory/enforced quarantine?</li>
              <li>Has community leadership issued guidance on self-isolation and quarantine?</li>
              <li className="header">Have small businesses and corporations been engaged as partners in the response effort?
                <ol>
                  <li>Have you addressed concerns about providing paid sick leave and/or work from home policies to discourage disease spread?</li>
                  <li>Have you coordinated messaging with businesses in your area regarding measures to slow spread in your community?</li>
                </ol>
              </li>
              <li className="header">Has school leadership (public and private) been engaged on the following:
                <ol>
                  <li>Establishing clear criteria for when to recommend cancelling schools and for how long?</li>
                  <li>Maintaining clear and open lines of communication with school and district leadership?</li>
                  <li>Developing and testing remote teaching and learning methods in case they are needed?</li>
                  <li>Putting mechanisms in place to care for children who need additional resources and to incentivize all children to stay at home, if school is cancelled?</li>
                  <li>Providing low-income families with meals?</li>
                  <li>Addressing similar requirements for cancellations of aftercare and extracurricular activities provided by the school(s) or district(s)?</li>
                </ol>
              </li>
              <li className="header">Is there a plan to incentivize interventions that can slow community spread of disease?
                <ol>
                  <li>Do you have the legal authority to implement the interventions planned to slow transmission - social distancing, quarantine, isolation measures?</li>
                  <li>Is there a process in place for addressing noncompliance (e.g., fines, criminal charges, etc.)?</li>
                </ol>
              </li>
              <li className="header">Does the EOC have a list of all upcoming major conferences, sporting events, concerts, rallies, or other events where large numbers of people may gather?
                <ol>
                  <li>Has the community established guidance criteria or official limitations on gatherings consistent with current public health guidance (as of this date it is 10 people or above)?</li>
                  <li>Have health officials conducted a risk assessment for these events? </li>
                </ol>
              </li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Are key community, civil society, business, and religious leaders regularly engaged to promote active cooperation and incentivize compliance with social distancing measures?</li>
                    <li className="header">If a state of emergency has been declared, does the community have plans in place to enforce curfews, quarantines, goods rationing, and other measures while protecting the well-being of the public to the greatest extent possible?
                      <ol>
                        <li>Is there a specific mechanism for engaging public safety sector to assist, incentivize or enforce social distancing if necessary? </li>
                      </ol>
                    </li>
                    <li className="header">Does the community have plans in place to ensure essential services continue in the event of a large number of absences?
                      <ol>
                        <li>Have utility providers, transportation managers, waste management, and other critical infrastructure been engaged?</li>
                        <li>Have plans been put in place to ensure that other critical infrastructure continues to operate? </li>
                      </ol>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.paho.org/disasters/index.php?option=com_docman&view=download&category_slug=tools&alias=530-pandinflu-leadershipduring-tool-4&Itemid=1179&lang=en" className="emph">Non-Pharmaceutical Interventions (NPIs): Actions to Limit the Spread of the Pandemic in Your Municipality (PAHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="http://new.paho.org/hq/dmdocuments/2011/Community%20Mitigation%20Toolkit_Guide_Supplemental_docs.pdf ">Key Decisions: For Implementing Community Mitigation Measures During a Pandemic (PAHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="http://www.cidrap.umn.edu/sites/default/files/public/php/185/185_factsheet_social_distancing.pdf">Information about Social Distancing (SCVHHS Public Health Department)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/community-mitigation-strategy.pdf">Implementation of Mitigation Strategies for Communities with Local COVID-19 Transmission (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/docs/default-source/coronaviruse/20200307-responding-to-covid-19-communitytransmission-final.pdf">Responding to community spread of COVID-19 (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://apps.who.int/iris/bitstream/handle/10665/329438/9789241516839-eng.pdf?ua=1">Non-pharmaceutical public health measures for mitigating the risk and impact of epidemic and pandemic influenza (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/community-mitigation-strategy.pdf">Community Mitigation Framework (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/index.html">Guidance for School Settings (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/mass-gatherings-ready-for-covid-19.html">Get Your Mass Gatherings and Large Community Events Ready (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf">White House Guidelines  (As of 16 March 2020)</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-4" className="page-anchor"></a>
        <div className="number">4</div>
        <h2>KEY OBJECTIVE #4</h2>
        <h1>Focus protection on high-risk groups</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>COVID-19 poses extreme risks to older populations and those with complicating health conditions. Each local context is unique and each local EOC should create a commonly agreed upon and regularly reassessed list of particularly vulnerable populations and sites. Attention must be paid to the needs of these populations and the facilities where they may reside or gather. Reducing transmission among these groups through targeted support measures can help protect them, while also alleviating pressure on healthcare systems.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Establish a comprehensive list of facilities that house high-risk populations (assisted living facilities, seniors’ communities, prisons, detention centers, etc.)</li>
                  <li>Assess facilities’ infection prevention and hygiene practices</li>
                  <li>Address identified vulnerabilities (PPE, training, infection control practices, etc.)</li>
                  <li>Establish guidance to minimize exposure of high risk groups (such as limiting outside visit to high-risk facilities)</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li className="header">Has a comprehensive list been compiled of high-risk populations and sites where they congregate, including:
                <ol>
                  <li>Long-term care facilities?</li>
                  <li>Other elder homes and communities?</li>
                  <li>Prisons?</li>
                  <li>Shelters?</li>
                  <li>Undocumented populations?</li>
                  <li>Other high-density housing where high-risk populations may reside?</li>
                </ol>
              </li>
              <li>Have those facilities’ infection prevention and hygiene practices been assessed and verified?</li>
              <li className="header">Have high-risk facilities received guidance and site-visits to ensure compliance with policies for infection prevention, to include sufficient access to PPE?
                <ol>
                  <li>Have regulatory authorities been involved in the assessments of these facilities?</li>
                </ol>
              </li>
              <li>Has visitor access been restricted to facilities with high-risk groups?</li>
              <li>Are there additional strategies to protect the safety and well-being of high-risk and underserved populations?</li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Have you been in contact with regulatory authorities for these facilities?</li>
                    <li>Are high-risk populations able to access support while self-quarantined?</li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/Seattle_Community_Mitigation.pdf" className="emph">Guidance for Community Mitigation- Including information on nursing and long-term care facilities (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/community/homeless-shelters/plan-prepare-respond.html">Interim Guidance for Homeless Shelters (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/publications-detail/protocol-for-assessment-of-potential-risk-factors-for-2019-novel-coronavirus-(2019-ncov)-infection-among-health-care-workers-in-a-health-care-setting">Protocol for Assessment of Potential Risk Factors for COVID-19 Infection among Health Care workers in a Health Care Setting (WHO)</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-5" className="page-anchor"></a>
        <div className="number">5</div>
        <h2>KEY OBJECTIVE #5</h2>
        <h1>Reinforce and expand health system surge capacity to sustain healthcare operations and avoid high mortality</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>The mortality risk posed by COVID-19 can grow substantially if a health system becomes overwhelmed with critical cases. Identifying creative means of expanding critical care capacity will be urgent as case counts grow. Urgent action should be taken to minimize the risk of transmission within health settings (nosocomial transmission). Telehealth consultations, including the use of telemedicine oversight of critically ill patients in the emergency department and intensive care units, should be considered as an option to triage cases as well as manage patient care.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Track hospital occupancy rates (overall and critical care) in real time and project future occupancy requirements based on trend</li>
                  <li>Ensure hospitals have activated emergency plans and initiated measures to reduce elective or non-urgent medical activities</li>
                  <li>Track PPE availability at critical facilities in real time and identify alternate PPE sources</li>
                  <li>Initiate plans for surge expansion of critical treatment capacity</li>
                  <li>Initiate plans to separate screening and intake of potential COVID-19 cases from general health care intake</li>
                  <li>Track exposure and infections of health workers and assess impact on system capacity</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li className="header">Are healthcare facilities in the community able to provide care to all those who need it?
                <ol>
                  <li>Is there a process in place to continually assess the level of demand on hospitals and understand the risk of those facilities becoming overwhelmed?</li>
                  <li>Do your local healthcare facilities have a current emergency operations plans and has it been shared with the EOC?</li>
                  <li>Do healthcare and EMS providers in your area have sufficient PPE on hand to meet immediate needs? Projected needs?</li>
                  <li>Are telehealth capabilities available and supported by internet connections?</li>
                </ol>
              </li>
              <li>Where instances of exposure or infection of health care workers have been identified, have reviews of infection/prevention control protocols been conducted in the facility where the exposure occurred?</li>
              <li>Have alternate sites of care been established with surge capabilities for five to ten times the normal number of pneumonia and influenza admissions at peak flu season?</li>
              <li>Have facilities rescheduled and reprioritized non-emergency care?</li>
              <li>Have treatment centers established separate triage lines for patients with influenza-like illness and/or upper respiratory infection?</li>
              <li className="header">Are specific plans in place to:
                <ol>
                  <li>Expand critical care/ICU capacity, including providing additional ventilator capacity?</li>
                  <li>Provide prescription medications for two to three months for all patients, eliminating co-pay penalties and insurance restrictions?</li>
                  <li>Offer mail-order or other remote refill mechanisms?</li>
                  <li>Triage patients to preserve hospital resources for those most acutely ill?</li>
                  <li>Govern crisis standards of care plans focused on the decisions that will govern scarce resource allocation?</li>
                  <li>Surge healthcare workforce, including in the event that medical staff are infected?</li>
                  <li>Develop processes for emergency credentialing of providers (doctors and nurses)?</li>
                  <li>Provide rapid training to bolster medical surge capacity?</li>
                  <li>Sustain corpse management, avoid morgue overflow, and meet resource requirements, including medical examiner capacity?</li>
                  <li>Provide wellness and mental health support in times of crisis?</li>
                  <li>Provide family support resources to healthcare workers to avoid staff distraction?</li>
                </ol>
              </li>
              <li className="header">Are facilities continually reassessing:
                <ol>
                  <li>PPE supply and predicted usage rates?</li>
                  <li>Critical care capacity?</li>
                  <li>Ventilator and oxygen capacity?</li>
                  <li>Thresholds for triggering/expanding crisis standards of care plans?</li>
                </ol>
              </li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Do local triage and infection prevention/control protocols reflect the risk from COVID-19?</li>
                    <li>Have hospitals established relationships with state/local public health labs, commercial labs, and academic reference labs to establish testing protocols?</li>
                    <li>Have you determined whether facilities have developed plans to extend limits on existing PPE stocks?</li>
                    <li>Has your state established communication with federal medicare and medicaid authorities to establish waivers or other necessary protocols to extend care?</li>
                    <li className="header">Have facilities put into place measures for critical supplies including:
                      <ol>
                        <li>Arranging for alternate suppliers?</li>
                        <li>Expanding inventories, while avoiding excessive hoarding?</li>
                        <li>Using the conserve, reuse, recycle approach?</li>
                        <li>Engaging the private sector to assist in supply and logistics chain strengthening?</li>
                      </ol>
                    </li>
                    <li>Have additional staff been hired and trained (could include leveraging academic medical centers for training and reaching out to volunteer staff, non-practicing health care professionals, or advanced medical and nursing students)?</li>
                    <li>Have professionals been cross-trained for out-of-scope-practices (i.e. pharmacists, nurse practitioners, physicians who specialize in less relevant areas )?</li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://annals.org/aim/fullarticle/2763037/how-should-u-s-hospitals-prepare-coronavirus-disease-2019-covid" className="emph">How Should U.S. Hospitals Prepare for COVID-19? (AIM)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.nap.edu/catalog/18338/crisis-standards-of-care-a-toolkit-for-indicators-and-triggers" className="emph">Crisis Standards of Care</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-for-ems.html">Interim Guidance for Emergency Medical Services (EMS) Systems and 911 Public Safety Answering Points (PSAPs) for COVID-19 in the United States (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/infection-control/control-recommendations.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fhcp%2Finfection-control.html">Interim Infection Prevention and Control Recommendations for Patients with Confirmed Coronavirus Disease 2019 (COVID-19) or Persons Under Investigation for COVID-19 in Healthcare Settings (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/respirators-strategy/index.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fhcp%2Frespirator-supply-strategies.html">Strategies for Optimizing the Supply of N95 Respirators</a>
            <a target="_blank" rel="noopener noreferrer" href="https://openwho.org/courses/COVID-19-IPC-EN">Training for Infection Prevention and Control (IPC) for Novel Coronavirus (COVID-19) (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="http://www.centerforhealthsecurity.org/cbn/2020/cbnreport-02272020.html">What US Hospitals Should Do Now to Prepare for a COVID-19 Pandemic</a>
            <a target="_blank" rel="noopener noreferrer" href="https://asprtracie.hhs.gov/technical-resources/63/crisis-standards-of-care/0">Crisis Standards of Care (TRACIE)</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-6" className="page-anchor"></a>
        <div className="number">6</div>
        <h2>KEY OBJECTIVE #6</h2>
        <h1>Expand risk communication and community engagement</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>Public officials have an obligation to accurately and transparently relay risk information, even (or perhaps especially) when it is alarming. Community trust can make or break an outbreak response, because the effectiveness of social distancing and other interventions hinges on community compliance. Risk communication should follow best practices to mobilize informed action rather than inducing panic. A set of Critical Information Requirements (CIRs) for leaders/decision makers should be set by an EOC, updated daily, and help feed a set of Public Information Requirements (PIRs) that should be communicated to affected populations in a way that is easily accessible online.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Establish a regular briefing rhythm to inform community leaders and members</li>
                  <li>Provide balanced and measured information; explicitly communicate uncertainty; do not sugar-coat bad news or over-promise potential progress</li>
                  <li>Engage with community, business, religious, and other civil society leaders to equip them to be credible sources of information for their stakeholders</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li>Is community leadership regularly and effectively communicating with various sectors of your government and non-governmental organizations (policy, education, etc.) to discuss ongoing activities?</li>
              <li className="header">Is community leadership communicating with the people who live and work in your community on a routine basis?
                <ol>
                  <li>Have the most effective communication methods been identified?</li>
                  <li>Can critical communications reach everyone?</li>
                  <li>Is there an emergency alert systems in place and tested?</li>
                  <li>Is there an effective way to dispel disinformation or misinformation?</li>
                </ol>
              </li>
              <li>Have trusted spokespeople been identified and assigned to relay important, fact-based messages to the community?</li>
              <li>Have continuity of communications plans been reviewed for the EOC and first responders in the event that mobile communications are disrupted/crash?</li>
              <li>Has a set of critical information requirements for leaders and decision makers been established? Does it help feed public information requirements easily accessible online?</li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li>Are community engagement efforts specifically reaching peripheral or marginalized populations, including undocumented populations? Are there established and tailored messages and mechanisms for communicating with affected or at-risk populations?</li>
                    <li>Are materials available in multiple languages, including American Sign Language and braille-based, and accessible for all populations in your community?</li>
                    <li>Is there a strategy in place for designating sources of accurate/timely information, monitoring and addressing people’s perceptions, beliefs, and sources of misinformation or disinformation? </li>
                    <li>Have existing emergency coordination and emergency public information structures been activated?</li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/risk-communication/guidance/download/en/" className="emph">Communicating Risk in Public Health Emergencies</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/php/risk-assessment.html">Interim US Guidance for Risk Assessment and Public Health Management of Persons with Potential Coronavirus Disease 2019 (COVID-19) Exposures: Geographic Risk and Contacts of Laboratory-confirmed Cases (CDC)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://iris.wpro.who.int/handle/10665.1/14482">COVID-19 Risk Communication Package for Healthcare Facilities (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/docs/default-source/coronaviruse/covid19-stigma-guide.pdf">Guide for Preventing and Addressing Social Stigma Associated with COVID-19 (WHO)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/8944073_Best_Practices_in_Public_Health_Risk_and_Crisis_Communication">Best Practices in Public Health Risk and Crisis Communication</a>
            <a target="_blank" rel="noopener noreferrer" href="https://webcache.googleusercontent.com/search?q=cache:ap-7vvmGt_MJ:https://apps.who.int/iris/rest/bitstreams/1093088/retrieve+&cd=3&hl=en&ct=clnk&gl=us&lr=lang_en%7Clang_es%7Clang_fr">Communicating Risk in Public Health Emergencies</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tephinet.org/risk-communication-training-english">TEPHINET Risk Communication Training</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.who.int/ihr/publications/WHO_HSE_GCR_2015.5/en/">Public Health for Mass Gatherings: Key Considerations (WHO)</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="first-section">
        <a id="action-7" className="page-anchor"></a>
        <div className="number">7</div>
        <h2>KEY OBJECTIVE #7</h2>
        <h1>Mitigating economic and social consequences</h1>
      </div>
      <div className="expand-hider" hidden>
        <div className="expand-area">
          <p>Pandemic outbreaks can cause enormous social and economic disruption. These disruptions are damaging in their own right but can be particularly problematic if they create economic disincentives to cooperating with social distancing measures. Mitigating these disruptions can help to reduce the human cost of the outbreak, beyond the immediate toll of the disease itself. Leaders should also pay careful attention to the impact that both the outbreak itself, and the measures to control it, may have on vulnerable populations.</p>
          <ol>
            <div className="phase zero">
              <div className="primary-actions">
                <h3 className="primary-actions-header">PRIORITY ACTIONS</h3>
                <ul>
                  <li>Establish mechanisms to address impacts of the pandemic on vulnerable populations (e.g. food insecure families reliant on school lunch programs)</li>
                  <li>Assess and mitigate impact of social distancing measures on key workforce sectors (health care, public services, etc.)</li>
                  <li>Assess impact of business closures on local tax revenues and advocate for state/federal support to ensure continuity of government operations</li>
                  <li>Identify and work to mitigate economic disincentives to social distancing measures</li>
                </ul>
              </div>
              <h3>OPERATIONAL REQUIREMENTS</h3>
              <li>Do you have a strategy in place to ensure medications are available to those that need them?</li>
              <li>In the event of a stay-at-home social distancing order, are you able to provide the necessary resources (e.g., food, medical care, other necessities) to the affected populations?</li>
            </div>
            <div className="phase one">
              <div>
                <button aria-label="Expand Details" className="read-more-button">ADDITIONAL CONSIDERATIONS</button>
                <div className="read-more-hider" hidden>
                  <div className="read-more-content">
                    <li className="header">Are there mechanisms in place to support neighborhood food distribution and door-to-door service provision?
                      <ol>
                        <li>Are community maps accurate and updated?</li>
                        <li>Are there designated sub-sections for door-to-door distribution across the community? </li>
                      </ol>
                    </li>
                    <li>Are there mechanisms in place to support neighborhood food distribution and door-to-door service provision?</li>
                    <li>Is there a proactive plan for economic recovery following disruptions due to business closures and cancellation/postponements of events?</li>
                    <li>Are there plans or procedures to request assistance from other jurisdictions or levels of government to provision essential services if the normal departments become unable to?</li>
                    <li>Are mutual aid agreements in force?</li>
                    <li>Does the community have plans in place to ensure caregivers are allowed to take time off due to lack of child care if schools/daycares are cancelled, including by providing family care leave?</li>
                  </div>
                </div>
              </div>
            </div>
          </ol>
          <div className="resources">
            <h4>RESOURCES</h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/media-library-data/1582825590194-2f000855d442fc3c9f18547d1468990d/NRF_FINALApproved_508_2011028v1040.pdf" className="emph">U.S. National Response Framework (FEMA)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fema.gov/media-library-data/1520878493235-1b9685b2d01d811abfd23da960d45e4f/ContinuityGuidanceCircularMarch20
18.pdf">Continuity Guidance Circular, March 2018 (FEMA)</a>
          </div>
        </div>
      </div>
    </section>
  </article>
  <script src="/guide_original_js/main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
  </Layout>
)

export default IndexPage;
