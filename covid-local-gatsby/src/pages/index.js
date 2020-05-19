import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import '../styles/guideStyle.css'

import guideHTML from '../components/GuideContent/GuideContent.html'
import initGuideScripts from '../components/GuideContent/guideScripts.global.js'

const HomePage = () => {
  const guideObject = { __html: guideHTML }
  React.useEffect(() => {
    initGuideScripts()
  }, [])
  //   React.useEffect(() => {
  //     // add js files
  //     const mainJS = document.createElement('script')
  //     mainJS.text = guideScripts
  //
  //     const cookieConsent = document.createElement('script')
  //     cookieConsent.src =
  //       'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js'
  //     const cookieScript = document.createElement('script')
  //     cookieScript.text = `
  //
  //     window.cookieconsent.initialise({
  //     "palette": {
  //       "popup": {
  //       "background": "#edeff5",
  //       "text": "#333333"
  //       },
  //       "button": {
  //       "background": "#33776b"
  //       }
  //     },
  //     "position": "bottom-right",
  //     "content": {
  //       "message": "COVID-Local uses cookies to ensure you get the best experience possible.",
  //       "dismiss": "OK"
  //     }
  //     });`
  //
  //     document.body.appendChild(mainJS)
  //     // document.body.appendChild(cookieConsent)
  //     // document.body.appendChild(cookieScript)
  //   }, [])

  return (
    <Layout>
      <Helmet
        title={`A Frontline Guide for Local Decision-Makers`}
        meta={[
          {
            name: 'description',
            content:
              'A Frontline Guide for Local Decision-Makers Facing The COVID-19 Pandemic',
          },
          {
            name: 'og:site_name',
            content: 'A Frontline Guide for Local Decision-Makers',
          },
        ]}
      />
      {/* The guide classname is used to scope the global CSS */}
      <main className="guide" dangerouslySetInnerHTML={guideObject}></main>
    </Layout>
  )
}

export default HomePage
