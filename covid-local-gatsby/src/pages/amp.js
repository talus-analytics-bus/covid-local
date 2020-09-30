import React from 'react'
import { Helmet } from 'react-helmet'

import LandingPage from './index.js'

const AmpPage = () => {
  return (
    <>
      <Helmet title={`COVID-Amp: Analysis and Mapping of Policies`}>
        <meta
          name="description"
          content={
            'A tool for exploring, analyzing, and mapping COVID-19 policies enacted around the globe.'
          }
        />
        <meta
          name="image"
          content={'/assets/images/amp-screenshots/global-policy-maps.png'}
        />
        <meta
          property="og:title"
          content={'COVID-Amp: Analysis and Mapping of Policies'}
        />
        <meta
          property="og:description"
          content={
            'A tool for exploring, analyzing, and mapping COVID-19 policies enacted around the globe.'
          }
        />
        <meta
          property="og:image"
          content={'/assets/images/amp-screenshots/global-policy-maps.png'}
        />
      </Helmet>
      <LandingPage ampOpen={true} />
    </>
  )
}

export default AmpPage
