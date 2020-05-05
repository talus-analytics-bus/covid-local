import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import styles from '../styles/quickfacts.module.scss'

import quickfactsContents from '../quickfacts/quickfactsContents'

const Quickfacts = () => {
	// Questions can either be plain text or preformatted HTML
	const createQuestionElements = (question, index) => (
		<>
			{question.answer.__html ? (
				<div key={index} dangerouslySetInnerHTML={question.answer} />
			) : (
				<p key={index}>{question.answer.text}</p>
			)}
		</>
	)

	const questionsElements = quickfactsContents.map((question, index) => (
		<section key={index} className={styles.question}>
			<h1>{question.question}</h1>
			{createQuestionElements(question, index)}
			{question.subquestions.map(createQuestionElements)}
		</section>
	))

	return (
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

			<header className={styles.header}>
				<h1>Quickfacts</h1>
				<Link to="/contact/">Contact us</Link>
			</header>
			<section className={styles.main}>{questionsElements}</section>
		</Layout>
	)
}

export default Quickfacts
