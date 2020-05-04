import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import styles from '../styles/about.module.scss'

const ContributorsPage = () => (
	<Layout>
		<Helmet
			title={`About The COVID Local Project, Authors, and Contributors`}
			meta={[
				{
					name: 'description',
					content: `The authors and contributors to the COVID Local guide and resource website helping local leaders handle the COVID-19 pandemic.`,
				},
			]}
		/>

		<section className={styles.header}>
			<h1>About us</h1>
			<Link to="/contact/">Contact us</Link>
		</section>
		<section className={styles.main}>
			<p>
				COVID-Local and the Frontline Guide are a joint project of the Global
				Biological Policy Program at the Nuclear Threat Initiative (NTI), the
				Center for Global Development, and the Georgetown University Center for
				Global Health Science and Security, in collaboration with Talus
				Analytics. The team is comprised of experienced experts in disease
				outbreak as well as former public health officials, and the tools were
				developed in response to calls from local governments for more
				information on how to protect their communities.
			</p>
		</section>
		<section className={styles.authorsSection}>
			<h1>Authors</h1>
			<div className={styles.authors}>
				<div className={styles.col}>
					<div className={styles.logo}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.nti.org/about/biosecurity/"
						>
							<img
								src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg"
								alt="Nuclear Threat Initiative"
								className="nti"
							/>
						</a>
					</div>
					<div className={styles.authorCol}>
						<div className={styles.bio}>
							<h3>Beth Cameron, PhD</h3>
							<p>Vice President,</p>
							<p>Global Biological Policy and Programs, NTI</p>
							<p>&nbsp;</p>
							<p>Vice President, Global</p>
							<p>Biological Policy and</p>
							<p>Programs, NTI, Former Senior</p>
							<p>Director for Global Health</p>
							<p>Security and Biodefense,</p>
							<p>National Security Council</p>
							<p>staff Directorate on Global</p>
							<p>Health Security and</p>
							<p>Biodefense</p>
						</div>
					</div>
					<div className={styles.authorCol}>
						<div className={styles.bio}>
							<h3>Jessica Bell, MS</h3>
							<p>Senior Program Officer,</p>
							<p>Global Biological Policy and Programs, NTI</p>
						</div>
						<div className={styles.bio}>
							<h3>Jacob Eckles, MPH</h3>
							<p>Program Officer,</p>
							<p>Global Biological Policy and Programs, NTI</p>
						</div>
						<div className={styles.bio}>
							<h3>Hayley Severance, MPH</h3>
							<p>Senior Program Officer,</p>
							<p>Global Biological Policy and Programs, NTI</p>
						</div>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.col}>
						<div className={styles.logo}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://talusanalytics.com/"
							>
								<img
									src="/assets/images/logos/talus-logo-01.png"
									alt="Talus Analytics"
								/>
							</a>
						</div>
						<div className={styles.bio}>
							<h3>Ellie Graeden, PhD</h3>
							<p>Chief Executive Officer,</p>
							<p>Talus Analytics</p>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.logo}>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.cgdev.org/"
							>
								<img
									src="/assets/images/logos/center-for-global-development.png"
									alt="Center for Global Development"
								/>
							</a>
						</div>
						<div className={styles.bio}>
							<h3>Jeremy Konyndyk, MSFS</h3>
							<p>Senior Policy Fellow,</p>
							<p>Center for Global Development;</p>
							<p>Former Director of Foreign </p>
							<p>Disaster Assistance, USAID</p>
						</div>
					</div>
					<div className={styles.logo}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://ghss.georgetown.edu/"
						>
							<img
								src="/assets/images/logos/Georgetown.png"
								alt="Georgetown University"
								className="georgetown"
							/>
						</a>
					</div>
					<div className={styles.authorCol}>
						<div className={styles.bio}>
							<h3>Rebecca Katz, PhD MPH</h3>
							<p>Professor and Director,</p>
							<p>Center for Global Health Science and Security</p>
							<p>Georgetown University</p>
						</div>
					</div>
					<div className={styles.authorCol}>
						<div className={styles.bio}>
							<h3>Matthew Boyce, MS</h3>
							<p>Senior Research Associate,</p>
							<p> Georgetown University</p>
							<p>Center for Global Health Science and Security</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/*  */}
		{/* 		<section className={styles.contributors}> */}
		{/* 			<h1>Authors</h1> */}
		{/* 			<div className={styles.contributorsContainer}> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://www.nti.org/about/biosecurity/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg" */}
		{/* 							alt="Nuclear Threat Initiative" */}
		{/* 							className="nti" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Jessica Bell, MS</h3> */}
		{/* 						<p>Senior Program Officer,</p> */}
		{/* 						<p>Global Biological Policy and Programs, NTI</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://ghss.georgetown.edu/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Georgetown.png" */}
		{/* 							alt="Georgetown University" */}
		{/* 							className="georgetown" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Matthew Boyce, MS</h3> */}
		{/* 						<p>Senior Research Associate,</p> */}
		{/* 						<p> Georgetown University</p> */}
		{/* 						<p>Center for Global Health Science and Security</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 			</div> */}
		{/* 			<div className={styles.contributorsContainer}> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://www.nti.org/about/biosecurity/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg" */}
		{/* 							alt="Nuclear Threat Initiative" */}
		{/* 							className="nti" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Beth Cameron, PhD</h3> */}
		{/* 						<p>Vice President,</p> */}
		{/* 						<p>Global Biological Policy and Programs, NTI</p> */}
		{/* 						<p>Former Senior Director, National Security Council staff</p> */}
		{/* 						<p>Directorate on Global Health Security and Biodefense</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://www.nti.org/about/biosecurity/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg" */}
		{/* 							alt="Nuclear Threat Initiative" */}
		{/* 							className="nti" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Jacob Eckles, MPH</h3> */}
		{/* 						<p>Program Officer,</p> */}
		{/* 						<p>Global Biological Policy and Programs, NTI</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 			</div> */}
		{/* 			<div className={styles.contributorsContainer}> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a href="http://talusanalytics.com/"> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/talus-logo-01.png" */}
		{/* 							alt="Talus Analytics" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Ellie Graeden, PhD</h3> */}
		{/* 						<p>Chief Executive Officer,</p> */}
		{/* 						<p>Talus Analytics</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://ghss.georgetown.edu/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Georgetown.png" */}
		{/* 							alt="Georgetown University" */}
		{/* 							className="georgetown" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Rebecca Katz, PhD MPH</h3> */}
		{/* 						<p>Professor and Director,</p> */}
		{/* 						<p>Center for Global Health Science and Security</p> */}
		{/* 						<p>Georgetown University</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 			</div> */}
		{/* 			<div className={styles.contributorsContainer}> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://www.cgdev.org/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/center-for-global-development.png" */}
		{/* 							alt="Center for Global Development" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Jeremy Konyndyk, MSFS</h3> */}
		{/* 						<p>Senior Policy Fellow,</p> */}
		{/* 						<p>Center for Global Development;</p> */}
		{/* 						<p>Former Director of Foreign Disaster Assistance, USAID</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 				<div className={styles.individual}> */}
		{/* 					<a */}
		{/* 						target="_blank" */}
		{/* 						rel="noopener noreferrer" */}
		{/* 						href="https://www.nti.org/about/biosecurity/" */}
		{/* 					> */}
		{/* 						<img */}
		{/* 							src="/assets/images/logos/Nuclear_Threat_Initiative_logo.svg" */}
		{/* 							alt="Nuclear Threat Initiative" */}
		{/* 							className="nti" */}
		{/* 						/> */}
		{/* 					</a> */}
		{/* 					<div className={styles.bio}> */}
		{/* 						<h3>Hayley Severance, MPH</h3> */}
		{/* 						<p>Senior Program Officer,</p> */}
		{/* 						<p>Global Biological Policy and Programs, NTI</p> */}
		{/* 					</div> */}
		{/* 				</div> */}
		{/* 			</div> */}
		{/* 		</section> */}

		<section className={styles.contributors}>
			<h1>Contributors</h1>
			<div className={styles.contributorsColumn}>
				<div className={styles.bio}>
					<h3>Paul D. Biddinger, MD, FACEP</h3>
					<p>MGH Endowed Chair in Emergency Preparedness Director,</p>
					<p>Center for Disaster Medicine and Vice Chairman for</p>
					<p>Emergency Preparedness, Department of Emergency</p>
					<p>Medicine, Massachusetts General Hospital, Medical</p>
					<p>Director for Emergency Preparedness, MGH and Partners</p>
					<p>Healthcare, Director, Harvard T.H. Chan School of Public</p>
					<p>Health Emergency Preparedness Research, Evaluation and</p>
					<p>Practice (EPREP) Program</p>
				</div>
				<div className={styles.bio}>
					<h3>Gabrielle Fitzgerald, MPA</h3>
					<p>Founder and CEO</p>
					<p>Panorama</p>
				</div>
				<div className={styles.bio}>
					<h3>Dylan George, PhD</h3>
					<p>Vice President Technical Staff,</p>
					<p>In-Q-Tel</p>
				</div>
				<div className={styles.bio}>
					<h3>Margaret Hamburg, MD</h3>
					<p>Chair, Board of the American Association for the</p>
					<p>Advancement of Science</p>
					<p>Former Commissioner of the U.S. Food and Drug</p>
					<p>Administration</p>
				</div>
				<div className={styles.bio}>
					<h3>Dan Hanfling, MD</h3>
					<p>Vice President Technical Staff</p>
					<p>In-Q-Tel</p>
				</div>
				<div className={styles.bio}>
					<h3>Ashish K. Jha, MD, MPH</h3>
					<p>Director, Harvard Global Health Institute,</p>
					<p>K. T. Li Professor of Global Health,</p>
					<p>Harvard T.H. Chan School of Public Health,</p>
					<p>Professor of Medicine, Harvard Medical School</p>
				</div>
				<div className={styles.bio}>
					<h3>Juliette Kayyem, JD</h3>
					<p>Faculty Chair,</p>
					<p>Security and Global Health Project,</p>
					<p>Harvard’s Kennedy School of Government</p>
				</div>
				<div className={styles.bio}>
					<h3>James Lawler, MD</h3>
					<p>Executive Director, International Programs & Innovation,</p>
					<p>Global Center for Health Security, and Associate</p>
					<p>Professor of Medicine, Division of Infectious Diseases,</p>
					<p>University of Nebraska Medical Center</p>
				</div>
				<div className={styles.bio}>
					<h3>Timothy Manning,</h3>
					<p>Director, Washington DC Operations,</p>
					<p>PDC Global; former Deputy Administrator, FEMA</p>
				</div>
				<div className={styles.bio}>
					<h3>Jennifer Nuzzo, DrPH, SM</h3>
					<p>Associate Professor,</p>
					<p>Johns Hopkins Bloomberg School of Public Health,</p>
					<p>Senior Scholar, Johns Hopkins Center for Health Security</p>
				</div>
				<div className={styles.bio}>
					<h3>David Polatty, MA</h3>
					<p>Professor,</p>
					<p>U.S. Naval War College Humanitarian Response Program</p>
				</div>
				<div className={styles.bio}>
					<h3>Nathaniel A. Raymond</h3>
					<p>Lecturer,</p>
					<p>Jackson Institute of Global Affairs, Yale University</p>
				</div>
				<div className={styles.bio}>
					<h3>Eric Toner, MD</h3>
					<p>Senior Scholar, Senior Scientist,</p>
					<p>Johns Hopkins Center for Health Security</p>
				</div>
				<div className={styles.bio}>
					<h3>Crystal Watson DrPH</h3>
					<p>Senior Scholar</p>
					<p>Johns Hopkins Center for Health Security</p>
					<p>
						Assistant Professor, Department of Environmental Health and
						Engineering
					</p>
				</div>
			</div>
			<p>
				*Note that institutional affiliations are listed for identification only
				and do not imply institutional endorsement.
			</p>
		</section>
	</Layout>
)

export default ContributorsPage
