import React from 'react'
// import { Link } from 'gatsby'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import DropDownLink from '../components/DropDownLink/DropDownLink'

import styles from '../styles/usGuide.module.scss'
import '../styles/guideStyle.css'

import guideHTML from '../components/GuideContent/GuideContent.html'
import initGuideScripts from '../components/GuideContent/guideScripts.global.js'

const translations = [
  { language: 'Amharic', name: 'COVID-19 Frontline Guide Amharic.pdf' },
  { language: 'Arabic', name: 'COVID-19 Frontline Guide Arabic.pdf' },
  { language: 'French', name: 'COVID-19 Frontline Guide French.pdf' },
  { language: 'Hindi', name: 'COVID-19 Frontline Guide Hindi.pdf' },
  { language: 'Korean', name: 'COVID-19 Frontline Guide Korean.pdf' },
  { language: 'Kurdish', name: 'COVID-19 Frontline Guide Kurdish.pdf' },
  { language: 'Nepali', name: 'COVID-19 Frontline Guide Nepali.pdf' },
  {
    language: 'Simplified Chinese',
    name: 'COVID-19 Frontline Guide Simplified Chinese.pdf',
  },
  { language: 'Somali', name: 'COVID-19 Frontline Guide Somali.pdf' },
  { language: 'Spanish', name: 'COVID-19 Frontline Guide Spanish.pdf' },
  { language: 'Tagalog', name: 'COVID-19 Frontline Guide Tagalog.pdf' },
  { language: 'Urdu', name: 'COVID-19 Frontline Guide Urdu.pdf' },
  { language: 'Vietnamese', name: 'COVID-19 Frontline Guide Vietnamese.pdf' },
]

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

      <div className="guide">
        <nav className="document-nav"></nav>
        <header className="introduction-header">
          <div className="introduction">
            <div className="left-col">
              <svg
                className="clipboard-icon"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 204.5 204.5"
              >
                <circle
                  style={{ fill: '#409385' }}
                  cx="102.2"
                  cy="102.2"
                  r="102.2"
                />
                <g>
                  <path
                    style={{ fill: '#28334B' }}
                    d="M113.8,69.7c0-2.3-1.8-4.1-4.1-4.1h-4.1v-4.1h12.3l0,16.3h8.2V61.5c0-4.5-3.7-8.2-8.2-8.2h-12.3
            v-4.1c0-2.3-1.8-4.1-4.1-4.1H85.2c-2.3,0-4.1,1.8-4.1,4.1v4.1H68.9c-4.5,0-8.2,3.7-8.2,8.2v57.2c0,4.5,3.7,8.2,8.2,8.2h32.7v-8.2
            H68.9V61.5h12.3v4.1h-4.1c-2.3,0-4.1,1.8-4.1,4.1v40.9c0,2.3,1.8,4.1,4.1,4.1h24.5V77.9h12.3V69.7z M97.5,65.6h-8.2V53.3h8.2V65.6z
             M109.8,86v57.2h49V86H109.8z M146.5,131H122v-4.1h24.5V131z M146.5,118.7H122v-4.1h24.5V118.7z M146.5,106.4h-16.3v-4.1h16.3
            V106.4z"
                  />
                </g>
              </svg>
              <svg
                className="version-marker"
                x="0px"
                y="0px"
                viewBox="0 0 305.9 86.6"
              >
                <path
                  style={{ fill: '#409385' }}
                  d="M0,43.5L0,43.5C0,19.8,19.4,0.4,43.1,0.3L262.7,0c23.7,0,43.2,19.4,43.2,43.1v0
            c0,23.7-19.4,43.2-43.1,43.2L43.2,86.6C19.5,86.7,0,67.3,0,43.5z"
                />
                <g>
                  <ellipse
                    transform="matrix(0.187 -0.9824 0.9824 0.187 -6.7189 78.5231)"
                    style={{ fill: '#28334B' }}
                    cx="44.1"
                    cy="43.3"
                    rx="30.2"
                    ry="30.2"
                  />
                </g>
                <path
                  style={{ fill: '#CF1C31' }}
                  d="M58,21.1l-13.4,0l0-4C49.5,17.2,54.1,18.6,58,21.1z M63.2,25.3l-18.6,0l0,4.3l21.8,0
            C65.5,28.1,64.4,26.6,63.2,25.3z M68.6,33.9l-23.9,0l0,4.3l25.2,0C69.5,36.7,69.1,35.3,68.6,33.9z M70.3,42.4l-25.7,0l0,4.3l25.5,0
            c0.1-1.1,0.2-2.3,0.2-3.4C70.3,43,70.3,42.7,70.3,42.4z M20.7,55.3l46.7-0.1c0.7-1.4,1.3-2.8,1.7-4.3L19,51.1
            C19.5,52.6,20,54,20.7,55.3z M27.8,63.9l32.6,0c1.6-1.3,3-2.7,4.3-4.3l-41.2,0.1C24.8,61.2,26.2,62.6,27.8,63.9z M44.1,69.6
            c3,0,5.8-0.5,8.5-1.4l-17,0C38.3,69.1,41.1,69.6,44.1,69.6z"
                />
                <path
                  style={{ fill: '#FFFFFF' }}
                  d="M68.6,33.9l-23.9,0l0-4.3l21.8,0C67.3,31,68,32.4,68.6,33.9z M69.8,38.2l-25.2,0l0,4.3l25.7,0
            C70.3,41,70.1,39.6,69.8,38.2z M18.1,46.8c0.2,1.5,0.5,2.9,0.9,4.3L69.2,51c0.4-1.4,0.7-2.8,0.9-4.3l-25.5,0L18.1,46.8z M35.6,68.2
            l17,0c2.9-1,5.5-2.4,7.8-4.3l-32.6,0C30.1,65.7,32.8,67.2,35.6,68.2z M58,21.1l-13.4,0l0,4.3l18.6,0C61.6,23.7,59.9,22.3,58,21.1z
             M23.5,59.6l41.2-0.1c1-1.3,2-2.8,2.8-4.3l-46.7,0.1C21.5,56.9,22.5,58.3,23.5,59.6z M33,21.1L33,21.1L33,21.1l1-0.7l0.9,0.7
            l0.1,0.1l0-0.1L34.6,20l1-0.7l-1.2,0L34.3,19c-0.5,0.2-1,0.4-1.4,0.6l0.5,0.4L33,21.1z M40,21.1L40,21.1L40,21.1l1-0.7l0.9,0.7
            l0.1,0.1l0-0.1L41.6,20l1-0.7l-1.2,0L41,18.1l-0.4,1.2l-1.2,0l1,0.7L40,21.1z M29.5,24.2l1-0.7l1,0.7L31.1,23l1-0.7l-1.2,0l-0.4-1.2
            l0,0l0,0l-0.4,1.2l-1.2,0l1,0.7L29.5,24.2z M36.5,24.2l1-0.7l1,0.7L38.1,23l1-0.7l-1.2,0l-0.4-1.2l0,0l0,0l-0.4,1.2l-1.2,0l1,0.7
            L36.5,24.2z M26.4,26L26,27.2l1-0.7l1,0.7L27.6,26l0.8-0.6l0.2-0.1l-1.2,0L27,24.1l-0.4,1.2l-1.2,0l0.2,0.1L26.4,26z M33.4,26
            L33,27.2l1-0.7l1,0.7L34.6,26l0.8-0.6l0.2-0.1l-1.2,0L34,24.1l-0.4,1.2l-1.2,0l0.2,0.1L33.4,26z M40.4,26L40,27.2l1-0.7l1,0.7
            L41.6,26l0.8-0.6l0.2-0.1l-1.2,0L41,24.1l-0.4,1.2l-1.2,0l0.2,0.1L40.4,26z M22.7,29.7l-0.2,0.5l0.7-0.5l0.3-0.2l0.3,0.2l0.7,0.5
            l-0.2-0.5L24.2,29l1-0.7l-1.2,0l-0.4-1.2l-0.4,1.2l-0.6,0c-0.1,0.1-0.1,0.2-0.2,0.3l0.6,0.4L22.7,29.7z M31,28.3l-0.4-1.2l-0.4,1.2
            l-1.2,0l1,0.7l-0.2,0.7l-0.2,0.5l0.7-0.5l0.3-0.2l0.3,0.2l0.7,0.5l-0.2-0.5L31.2,29l1-0.7L31,28.3z M38,28.3l-0.4-1.2l-0.4,1.2
            l-1.2,0l1,0.7l-0.2,0.7l-0.2,0.5l0.7-0.5l0.3-0.2l0.3,0.2l0.7,0.5l-0.2-0.5L38.2,29l1-0.7L38,28.3z M20.7,32l1-0.7l-1,0
            c-0.2,0.4-0.4,0.8-0.6,1.2l0.9,0.7L20.7,32z M27.5,31.3l-0.4-1.2l-0.4,1.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7L27.7,32l1-0.7
            L27.5,31.3z M34.5,31.2l-0.4-1.2l-0.4,1.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7L34.7,32l1-0.7L34.5,31.2z M41.5,31.2l-0.4-1.2
            l-0.4,1.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7L41.7,32l1-0.7L41.5,31.2z M19.4,38.2l-0.3,0.9l1-0.7l1,0.7l-0.3-0.9l-0.1-0.3l1-0.7
            l-1.2,0L20.2,36l-0.4,1.2l-1.2,0c0,0,0,0,0,0l1,0.7L19.4,38.2z M27.6,37.2L27.2,36l-0.4,1.2l-1.2,0l1,0.7l-0.1,0.3l-0.3,0.9l1-0.7
            l1,0.7l-0.3-0.9l-0.1-0.3l1-0.7L27.6,37.2z M34.6,37.2L34.2,36l-0.4,1.2l-1.2,0l1,0.7l-0.1,0.3l-0.3,0.9l1-0.7l1,0.7l-0.3-0.9
            l-0.1-0.3l1-0.7L34.6,37.2z M41.6,37.2L41.2,36l-0.4,1.2l-1.2,0l1,0.7l-0.1,0.3l-0.3,0.9l1-0.7l1,0.7l-0.3-0.9l-0.1-0.3l1-0.7
            L41.6,37.2z M19.1,45.1l1-0.7l1,0.7l-0.4-1.2l1-0.7l-1.2,0l-0.2-0.7L20.1,42l-0.2,0.5l-0.2,0.7l-1.2,0l1,0.7L19.1,45.1z M27.5,43.2
            l-0.2-0.7L27.1,42l-0.2,0.5l-0.2,0.7l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L27.5,43.2z M34.5,43.1l-0.2-0.7L34.1,42
            l-0.2,0.5l-0.2,0.7l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L34.5,43.1z M41.5,43.1l-0.2-0.7L41.1,42l-0.2,0.5l-0.2,0.7
            l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L41.5,43.1z M22.6,36.1l1-0.7l1,0.7l-0.4-1.2l1-0.7l-1.2,0l-0.1-0.2L23.6,33
            l-0.3,0.9l-0.1,0.2l-1.2,0l1,0.7L22.6,36.1z M31,34.2l-0.1-0.2L30.6,33l-0.3,0.9l-0.1,0.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7
            l-0.4-1.2l1-0.7L31,34.2z M38,34.2l-0.1-0.2L37.6,33l-0.3,0.9l-0.1,0.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L38,34.2z
             M18,40.2c0,0,0,0.1,0,0.1l0.2-0.1L18,40.2z M22.6,42.1l1-0.7l1,0.7l-0.4-1.2l1-0.7l-1.2,0L23.6,39l-0.4,1.2l-1.2,0l1,0.7L22.6,42.1
            z M31,40.2L30.6,39l-0.4,1.2l-1.2,0l1,0.7l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L31,40.2z M38,40.1L37.6,39l-0.4,1.2l-1.2,0l1,0.7
            l-0.4,1.2l1-0.7l1,0.7l-0.4-1.2l1-0.7L38,40.1z"
                />
                <rect
                  x="103.1"
                  y="26.4"
                  transform="matrix(1 -1.462892e-03 1.462892e-03 1 -6.607763e-02 0.2616)"
                  style={{ fill: 'none' }}
                  width="151.3"
                  height="37.8"
                />

                <text
                  transform="matrix(1 -1.460000e-03 1.460000e-03 1 101.1444 56.338)"
                  style={{
                    fill: '#FFFFFF',
                    fontFamily: 'rawline',
                    fontSize: 39.2214,
                  }}
                >
                  US guide
                </text>
              </svg>

              <h1>A Frontline Guide for Local Decision-Makers</h1>
              <p>
                The COVID-19 pandemic continues to create significant disruption
                to daily life in cities and communities around the world. This
                guide, developed in Spring 2020, provides an initial strategic
                framework for state, city, and local leaders as they plan what
                will need to be done to reduce the impact of the outbreak in the
                near term. The guide and checklists were developed by{' '}
                <a href="/about/">
                  a team of deeply experienced experts and former public health
                  officials
                </a>
                , in consultation with current state and local officials about
                the key issues they face. Our focus has been on providing
                information for both slowing and suppressing the spread of the
                virus, and also on supporting community needs.{' '}
              </p>
              <p>
                This guide is informed by existing guidance from U.S. and global
                authorities, public health research findings, and lessons
                observed from countries that have been battling COVID-19 since
                January 2020.{' '}
                <strong>
                  It is intended to complement, but not in any way supplant,
                  advice and guidance from global, federal and local public
                  health and other authorities.
                </strong>
              </p>
            </div>
            <div className="right-col">
              <div>
                <a href="#action-91" className="introduction-criteria">
                  <span>Metrics for Phased Re&#8209;opening</span>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#273349' }}
                      d="M30.68,27.02c0,2.69-2.19,4.88-4.88,4.88c-2.69,0-4.88-2.19-4.88-4.88c0-2.69,2.19-4.88,4.88-4.88C28.49,22.14,30.68,24.33,30.68,27.02z M25.8,33.53c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,35.71,28.49,33.53,25.8,33.53z M25.8,44.91c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,47.1,28.49,44.91,25.8,44.91z M33.93,25.4v3.25h19.51V25.4H33.93zM33.93,40.03h19.51v-3.25H33.93V40.03z M33.93,51.41h19.51v-3.25H33.93V51.41z"
                    />
                  </svg>
                </a>
                <a href="#action-0" className="introduction-feedback">
                  <span>Indicators of Progress</span>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#409385' }}
                      d="M30.68,27.02c0,2.69-2.19,4.88-4.88,4.88c-2.69,0-4.88-2.19-4.88-4.88c0-2.69,2.19-4.88,4.88-4.88C28.49,22.14,30.68,24.33,30.68,27.02z M25.8,33.53c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,35.71,28.49,33.53,25.8,33.53z M25.8,44.91c-2.69,0-4.88,2.19-4.88,4.88c0,2.69,2.19,4.88,4.88,4.88c2.69,0,4.88-2.19,4.88-4.88C30.68,47.1,28.49,44.91,25.8,44.91z M33.93,25.4v3.25h19.51V25.4H33.93zM33.93,40.03h19.51v-3.25H33.93V40.03z M33.93,51.41h19.51v-3.25H33.93V51.41z"
                    />
                  </svg>
                </a>
                <a href="#action-1" className="introduction-feedback">
                  <span>Link to Key Objectives</span>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#409385' }}
                      d="M46.02,53c0.54,0.43,0.74,1.15,0.51,1.8c-0.23,0.65-0.84,1.08-1.52,1.08H28.84c-0.69,0-1.3-0.43-1.52-1.08c-0.23-0.65-0.02-1.37,0.51-1.8l2.46-1.97h13.26L46.02,53z M49.86,23.55H23.99c-1.78,0-3.23,1.45-3.23,3.23v19.4c0,1.78,1.45,3.23,3.23,3.23h25.86c1.78,0,3.23-1.45,3.23-3.23v-19.4C53.09,25,51.64,23.55,49.86,23.55z"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <DropDownLink
                  // target="_blank"
                  // href="/assets/documents/COVID16 International Guide for Local Decision-Makers.pdf"
                  className={
                    'introduction-download' + ' ' + styles.translationList
                  }
                  // onclick="ga('send', 'event', 'Document Download', 'Guide Download', 'Guide Download');"
                  onClick={() =>
                    trackCustomEvent({
                      category: 'Document Download',
                      action: 'Guide Download',
                      label: 'Guide Download',
                    })
                  }
                  style={{ backgroundColor: '#33776B' }}
                >
                  <>
                    <span>Download the guide (pdf)</span>
                    <svg x="0px" y="0px" viewBox="0 0 76.45 76.45">
                      <circle
                        style={{ fill: '#FFFFFF' }}
                        cx="38.23"
                        cy="38.23"
                        r="38.23"
                      />
                      <path
                        style={{ fill: '#273349' }}
                        d="M53.01,43.04v11.23H20.93V43.04h9.85c0.72,2.76,3.2,4.81,6.19,4.81c2.99,0,5.47-2.05,6.19-4.81H53.01z M42.25,32.29l-3.68,3.68V22.19h-3.21v13.77l-3.68-3.68l-2.27,2.27l7.55,7.55l7.55-7.55L42.25,32.29z"
                      />
                    </svg>
                  </>
                  <h4>Download English:</h4>
                  <ul>
                    <li>
                      <a href="/assets/documents/COVID19 Frontline Guide for Local Decision Makers.pdf">
                        English
                      </a>
                    </li>
                  </ul>

                  <h4>Choose Language:</h4>
                  <ul>
                    {translations.map(file => (
                      <li key={file.name}>
                        <a
                          href={`/assets/documents/translations/${file.name}`}
                          target="_blank"
                        >
                          {file.language}
                        </a>
                      </li>
                    ))}
                  </ul>
                </DropDownLink>
                <a href="/contact/" className="introduction-download">
                  <span>Send us feedback</span>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 76.45 76.45">
                    <circle
                      style={{ fill: '#FFFFFF' }}
                      cx="38.23"
                      cy="38.23"
                      r="38.23"
                    />
                    <path
                      style={{ fill: '#273349' }}
                      d="M52.13,19.95H24.97c-1.87,0-3.4,1.52-3.4,3.4v29.16c0,1.87,1.52,3.4,3.4,3.4h27.16c1.87,0,3.4-1.52,3.4-3.4V23.35C55.53,21.47,54,19.95,52.13,19.95z M43.64,45.42H28.36v-3.4h15.28V45.42z M48.73,38.63H28.36v-3.4h20.37V38.63z M48.73,31.84H28.36v-3.4h20.37V31.84z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <button aria-label="Expand Details" className="read-more-button">
              Read an introduction to the guide
            </button>
            <div className="read-more-hider" hidden>
              <div className="read-more-content overview">
                <div
                  className="navbar-logo"
                  style={{ marginTop: '2rem', marginBottom: '-2em' }}
                ></div>
                <h2>The COVID-19 Pandemic</h2>
                <p>
                  COVID-19, caused by severe acute respiratory syndrome
                  coronavirus 2 (SARS-CoV-2), can spread explosively if not
                  rapidly addressed. Different cities face differing risk
                  profiles and require tailored mitigation and control
                  strategies, depending on the trajectory of the outbreak in any
                  given location. This guide is intended to provide leaders and
                  public officials at any state, city, or local level with a
                  support tool to assist in informed strategy and
                  decision-making on how to combat the resulting disease,
                  COVID-19, in their jurisdiction. It is NOT a prescriptive set
                  of instructions; rather it provides context and advice on how
                  to tailor principles of outbreak control strategy, disaster
                  management, and evolving knowledge on COVID-19 dynamics to
                  different local conditions.
                </p>
                <p>
                  Battling a new virus pandemic is a unique public policy
                  challenge: the human and economic costs of daily or weekly
                  inaction grow exponentially. As an outbreak begins to spread
                  and accelerate, a 1-2-week delay can be the difference between
                  cases in the thousands or cases in the tens of thousands.
                  Research on the 1918-19 influenza pandemic in the United
                  States has found that early, sustained application of measures
                  like social distancing mitigated community-level impact of the
                  outbreak.{' '}
                  <span data-tippy-content="Markel H, Lipman HB, Navarro JA, et al. Nonpharmaceutical Interventions Implemented by US Cities During the 1918-1919 Influenza Pandemic. JAMA. 2007;298(6):644–654. doi:10.1001/jama.298.6.644 <a href='#read-more-endnotes'>view endnotes</a>">
                    (1)
                  </span>{' '}
                  It is beneficial to apply strong measures early on rather than
                  to wait, even if those measures feel intuitively premature at
                  the time. Lessons from Singapore, Hong Kong, and Taiwan during
                  the current pandemic likewise affirm that early and
                  disciplined action can limit or prevent explosive spread.
                  However, state and local leaders must also weigh the public
                  health benefits of disruptive measures against the
                  second-order impacts that those measures may have on the
                  economy, vulnerable populations, and other local factors.
                </p>
                <p>
                  <strong>
                    Given that this virus currently has no proven vaccines or
                    treatments, the most important way to limit mortality in the
                    near term is to reduce transmission and avoid over-burdening
                    the health system with a high volume of critical COVID-19
                    cases.
                  </strong>{' '}
                  COVID-19 cases requiring medical intervention are in addition
                  to the existing healthcare demand, and experience from New
                  York, China and Italy shows that unchecked spread of the virus
                  has the potential to rapidly and abruptly overwhelm health
                  systems. While the world’s understanding of COVID-19 is still
                  evolving, it is clear that the disease is many times more
                  dangerous than seasonal flu (which has a fatality rate of
                  approximately 0.1%). Recorded fatality rates in various
                  countries have ranged from more than 10% (Italy, United
                  Kingdom, Spain) to low single digits (China, US, Germany).
                  South Korea, which has the most extensive testing in the
                  world, has recorded a fatality rate of approximately 2%, or 20
                  times the lethality of seasonal flu.
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/images/China Cases-min.svg"
                    alt="Figure 1 The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020."
                  />
                  <figcaption>
                    <strong>Figure 1.</strong> The epidemiologic curve of
                    Covid-19 laboratory confirmed cases, by date of onset of
                    illness, reported in China, as of February 20, 2020.{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf"
                    >
                      WHO-China joint mission report on Covid-19
                    </a>
                  </figcaption>
                </figure>
                <p>
                  <strong>
                    During the early phase of a community’s COVID-19 outbreak,
                    all elements of an initial response strategy should connect
                    to the overarching goal of limiting deaths by reducing
                    overall transmission and minimizing strain on the health
                    system.
                  </strong>{' '}
                  Rapid and aggressive action can create a positive cycle, in
                  which measures to slow and reduce spread will reduce the
                  critical case volume, which will in turn limit pressures on
                  intensive care units, delay peak case volume, and keep
                  mortality under control. A slower infection rate means a less
                  stressed health care system. Delayed action, in contrast,
                  allows the disease to spread widely, generating a sudden surge
                  in critical cases and eroding care quality and worsening
                  mortality rates. The difference between these scenarios may be
                  as little as days or weeks.
                </p>
                <p>
                  Once transmission rates have been reduced and the burden on
                  the hospital system has stabilized or declined, it will
                  eventually become possible to consider incrementally relaxing
                  the range of distancing measures put in place to limit
                  transmission. Criteria that should be in place before relaxing
                  social distancing orders within the community are included
                  below along with definitions of progressive phases for
                  re-opening. More detailed advice and guidance for this
                  subsequent phase of the COVID-19 response will be more fully
                  addressed on the web version of this guide.
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/images/Figure-2-expanded.svg"
                    alt="FA conceptual overview of the impact of applied control measures in reducing the rate of spread of COVID-19, and how they can, hypothetically, limit the burden on the health system."
                  />
                  <figcaption>
                    <strong>Figure 2.</strong> A conceptual overview of the
                    impact of applied control measures in reducing the rate of
                    spread of COVID-19, and how they can, hypothetically, limit
                    the burden on the health system.
                  </figcaption>
                </figure>
                <h2>
                  Strategic Considerations for Managing COVID-19 in the
                  Community
                </h2>
                <p>
                  A community’s priorities will vary and evolve depending on the
                  stage of the outbreak. Strategy will shift, depending on where
                  a city is in the course of the outbreak and the number of
                  cases in the community. A community is likely to face several
                  stages as the outbreak progresses, which may occur in quick
                  succession and build on one another. Not all communities will
                  experience each of these steps discretely but may experience
                  them in rapid succession or “skip” steps in the process,
                  especially early in the outbreak.
                </p>
                <p>
                  It is important to understand that declines in transmission
                  are reversible, and a community may experience multiple waves
                  of cases. An initial plateauing or decline in cases is not
                  sufficient basis for relaxing social distancing and
                  shelter-in-place measures. Communities that are tracking a
                  decrease in cases may suddenly see an increase in reported
                  cases due to a variety of factors including, but not limited
                  to, an increase in testing or a change in reporting
                  requirements, a premature relaxation of control measures, and
                  importation of new cases.
                </p>
                <p>
                  Different actions and approaches should be triggered as a
                  community moves along these stages of the outbreak. Knowing
                  which stage a community is currently experiencing is
                  challenging early in an outbreak, especially if diagnostic
                  testing is not widely available. Outbreaks develop quickly and
                  information will be imperfect or incomplete. Decision-making
                  may need to progress on a no-regrets basis before having clear
                  evidence of which stage a community is experiencing.
                </p>
                <p>
                  These stages are specific to this guide and not in reference
                  to the Pandemic Intervals Framework issued by CDC in 2016.
                  <span data-tippy-content="<a target='_blank' rel='noopener noreferrer' href='https://www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html'> www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html</a> <a href='#read-more-endnotes'>view endnotes</a>">
                    (3)
                  </span>
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/images/Figure-3-expanded.svg"
                    alt="Description of the progression of the outbreak in local communities, as marked by number of cases and burden on the healthcare system."
                  />
                </figure>
                <figcaption>
                  <strong>Figure 3.</strong> Description of the progression of
                  the outbreak in local communities, as marked by number of
                  cases and burden on the healthcare system.
                </figcaption>
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/images/Figure-4-outlined.svg"
                    alt="Figure 1 The epidemiologic curve of Covid-19 laboratory confirmed cases, by date of onset of illness, reported in China, as of February 20, 2020."
                  />
                  <figcaption>
                    <strong>Figure 4.</strong> Notional example describing
                    relative spread and number of cases in a community, mapped
                    roughly to the progression described in Figure 3 and roughly
                    corresponding to the spread of COVID-19 as reported in
                    China, shown in Figure 1. *Please note that there may be
                    more than one curve in an outbreak, particularly during
                    suppression when cases may rise again as social distancing
                    or other measures are released. See text above for more
                    discussion.
                  </figcaption>
                </figure>
                <div
                  className="first-section-resources"
                  style={{ marginTop: '4rem' }}
                >
                  <a id="read-more-endnotes" className="page-anchor"></a>
                  <h4>RESOURCES</h4>
                  <ol>
                    <li>
                      Markel H, Lipman HB, Navarro JA, et al. Nonpharmaceutical
                      Interventions Implemented by US Cities During the
                      1918-1919 Influenza Pandemic. JAMA. 2007;298(6):644–654.
                      doi:10.1001/jama.298.6.644
                    </li>
                    <li>
                      Report of the WHO-China Joint Mission on Coronavirus
                      Disease 2019 (COVID-19).{' '}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf"
                      >
                        www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html"
                      >
                        www.cdc.gov/flu/pandemic-resources/national-strategy/intervals-framework.html
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* The guide classname is used to scope the global CSS */}
      <main className="guide" dangerouslySetInnerHTML={guideObject}></main>
    </Layout>
  )
}

export default HomePage
