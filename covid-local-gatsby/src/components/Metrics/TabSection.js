import React, { useState } from 'react'
// import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import styles from '../../styles/metrics/metrics.module.scss'

// import '../styles/metrics/background.css'
// import '../styles/metrics/text.css'

import InfectionText from './InfectionText'
import TestingText from './TestingText'
import CaseText from './CaseText'
import HealthcareText from './HealthcareText'
import ProtectingText from './ProtectingText'
import phasesContent from './PhasesContent'

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('infection')

  return (
    <div className={styles.svgSwitcher}>
      <svg id="background" x="0px" y="0px" viewBox="0 0 970 819.3">
        <g id="Background">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="585.5156"
            y1="265.2415"
            x2="883.7994"
            y2="265.2415"
          >
            <stop offset="0" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="585.5"
            y="191"
            className="st0"
            width="298.3"
            height="148.6"
          />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="547.8638"
            y1="423.6818"
            x2="842.7365"
            y2="423.6818"
          >
            <stop offset="0" style={{ stopColor: '#FF7224' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="547.9"
            y="350.3"
            className="st1"
            width="294.9"
            height="146.8"
          />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="529.2267"
            y1="725.6631"
            x2="720.1325"
            y2="725.6631"
          >
            <stop offset="0" style={{ stopColor: '#7C003E' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="529.2"
            y="666.2"
            className="st2"
            width="190.9"
            height="118.8"
          />
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="534.0154"
            y1="581.6452"
            x2="809.1509"
            y2="581.6452"
          >
            <stop offset="0" style={{ stopColor: '#B51A34' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="534"
            y="508.5"
            className="st3"
            width="275.1"
            height="146.4"
          />
          <path
            className="st4"
            d="M923.3,497.3h-852V350.2h852c5.5,0,10,4.5,10,10v127.1C933.3,492.8,928.8,497.3,923.3,497.3z"
          />
          <path
            className="st5"
            d="M923.3,339.6h-852V191h852c5.5,0,10,4.5,10,10v128.5C933.3,335.1,928.8,339.6,923.3,339.6z"
          />
          <path
            className="st6"
            d="M923.3,654.9h-852V508.6h852c5.5,0,10,4.5,10,10v126.3C933.3,650.5,928.8,654.9,923.3,654.9z"
          />
          <path
            className="st7"
            d="M923.3,785.2H515.4V666.3h407.9c5.5,0,10,4.5,10,10v98.9C933.3,780.7,928.8,785.2,923.3,785.2z"
          />
          <rect x="70.8" y="349.7" className="st8" width="14" height="148" />
          <path
            className="st9"
            d="M70.8,190.6h14V340h-14V190.6z M77.8,162.7l-21.2,27.9H99L77.8,162.7z"
          />
          <path
            className="st10"
            d="M70.8,508.2h14v147.2h-14V508.2z M99,655.2H56.6l21.2,27.9L99,655.2z"
          />
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="493.2672"
            y1="725.7446"
            x2="538.0673"
            y2="725.7446"
          >
            <stop offset="0" style={{ stopColor: '#963365' }} />
            <stop offset="0.5" style={{ stopColor: '#7C003E' }} />
            <stop offset="1" style={{ stopColor: '#62003E' }} />
          </linearGradient>
          <path
            className="st11"
            d="M538.1,665.9c-2,25.3-3.3,72.5-4.1,91.1v0c-0.3,7.5-0.5,22.4-0.7,28.5h-35.2c-0.2-6.2-0.4-21.1-0.7-28.7v0
    c-0.8-18.5-2.1-65.7-4.1-90.9H538.1z"
          />
          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="475.8273"
            y1="581.84"
            x2="555.5173"
            y2="581.84"
          >
            <stop offset="0" style={{ stopColor: '#CB5F71' }} />
            <stop offset="0.3" style={{ stopColor: '#B51A34' }} />
            <stop offset="0.5" style={{ stopColor: '#B51A34' }} />
            <stop offset="1" style={{ stopColor: '#971A34' }} />
          </linearGradient>
          <path
            className="st12"
            d="M555.5,508.2c-7.6,52.2-13,103.4-16.6,147.3h-46.5c-3.6-43.9-9-95.1-16.6-147.3H555.5z"
          />
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="370.8473"
            y1="264.9099"
            x2="660.4872"
            y2="264.9099"
          >
            <stop offset="3.599446e-04" style={{ stopColor: '#FDDF89' }} />
            <stop offset="0.3" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="0.5" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="1" style={{ stopColor: '#E3A614' }} />
          </linearGradient>
          <path
            className="st13"
            d="M660.5,190.6c-29.7,25.6-53.2,81.2-71.5,148.7H442.3c-18.3-67.5-41.8-123.1-71.5-148.7H660.5z"
          />
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="445.0873"
            y1="423.7149"
            x2="586.2573"
            y2="423.7149"
          >
            <stop offset="0" style={{ stopColor: '#FFAA7C' }} />
            <stop offset="0.3" style={{ stopColor: '#FF7224' }} />
            <stop offset="0.5" style={{ stopColor: '#FF7224' }} />
            <stop offset="1" style={{ stopColor: '#F05024' }} />
          </linearGradient>
          <path
            className="st14"
            d="M586.3,349.7c-12,46.3-21.6,97.5-29.2,148.1h-82.8c-7.6-50.6-17.2-101.8-29.2-148.1H586.3z"
          />
          <path
            className="st15"
            d="M534,765L534,765c-0.3-0.6-0.6-1.1-1.2-1.5c-0.8-0.6-1.8-0.9-2.8-0.9c-0.4,0-0.9,0-1.3,0
    c-0.5,0-0.6,0-0.6-0.6v-3.5c0-6.2-4.6-11.5-10.8-12.4c-6.8-1-13.2,3.8-14.2,10.6c-0.2,1.7-0.1,3.4-0.1,5.1c0,0.8,0,0.8-0.8,0.8
    c-0.7,0-1.3,0-2,0.1c-1.3,0.2-2.3,1-2.9,2.1v0c-0.3,0.6-0.5,1.3-0.5,2c0,5.5,0,11.1,0,16.6c0,2,1.2,3.5,3.1,4.1
    c0.1,0,0.2,0.1,0.3,0.1H531c0.7-0.2,1.4-0.5,2-1c0.8-0.7,1.2-1.7,1.4-2.7v-17.6C534.3,765.8,534.1,765.4,534,765z M517.6,780.7
    c0,0.5,0,0.5-0.5,0.5c-1,0-2,0-3,0c-0.3,0-0.5-0.1-0.5-0.5c0-0.6,0-1.3,0-1.9c0-0.6,0-1.2,0-1.8c0-0.4-0.1-0.6-0.4-0.8
    c-1.4-1-2-2.7-1.6-4.3c0.4-1.7,1.8-2.9,3.5-3.1c1.8-0.2,3.6,0.8,4.3,2.5c0.7,1.7,0.2,3.7-1.3,4.8c-0.4,0.3-0.5,0.5-0.5,0.9
    C517.6,778.3,517.6,779.5,517.6,780.7z M509.4,758c0.1-2.8,2.5-5.3,5.3-5.7c3.2-0.4,6.4,1.7,7,5.1c0.1,0.7,0.1,1.3,0.1,2v2.6
    c0,0.5-0.1,0.5-0.5,0.5H510c-0.6,0-0.6,0-0.6-0.6C509.4,760.6,509.4,759.3,509.4,758z"
          />
          <g>
            <rect
              x="500.9"
              y="706.4"
              className="st16"
              width="29.5"
              height="30.1"
            />
            <text
              transform="matrix(1 0 0 1 510.4888 722.4442)"
              className="st17 st18 st19"
            >
              1
            </text>
          </g>
          <g>
            <rect
              x="503"
              y="572.8"
              className="st16"
              width="25.3"
              height="25.8"
            />
            <text
              transform="matrix(1 0 0 1 508.5331 591.8153)"
              className="st17 st18 st20"
            >
              2
            </text>
          </g>
          <g>
            <rect
              x="499.8"
              y="409.9"
              className="st16"
              width="31.8"
              height="32.4"
            />
            <text
              transform="matrix(1 0 0 1 507.7095 431.0648)"
              className="st17 st18 st21"
            >
              3
            </text>
          </g>
          <g>
            <rect
              x="497.2"
              y="253.3"
              className="st16"
              width="36.8"
              height="37.6"
            />
            <text
              transform="matrix(1 0 0 1 506.3647 277.392)"
              className="st17 st18 st22"
            >
              4
            </text>
          </g>
          <g>
            <rect
              x="455.8"
              y="794.4"
              className="st16"
              width="119.7"
              height="19.2"
            />
            <text
              transform="matrix(1 0 0 1 470.9255 805.3087)"
              className="st23 st18 st24"
            >
              Lockdown
            </text>
          </g>
          <g>
            <rect
              x="339.5"
              y="168.4"
              className="st16"
              width="352.4"
              height="18.6"
            />
            <text
              transform="matrix(1 0 0 1 351.3365 179.3785)"
              className="st25 st18 st24"
            >
              SOCIAL DISTANCING RESTRICTIONS OPEN UP
            </text>
          </g>
          <path
            className="st26"
            d="M969.5,115.3H0.5v687.5c0,8.8,7.2,16,16,16h937c8.8,0,16-7.2,16-16V115.3z"
          />
        </g>
        <g id="tabbar">
          <g
            id="testing"
            onClick={() => {
              setActiveTab('testing')
            }}
          >
            <path
              className={activeTab === 'testing' ? 'st25' : 'st27'}
              d="M372.1,0H205.3c-5,0-9,4-9,9v89.5h184.8V9C381.1,4,377.1,0,372.1,0z"
            />
            <g>
              <text transform="matrix(1 0 0 1 229.2604 68.3617)">
                <tspan
                  x="0"
                  y="0"
                  className={
                    activeTab === 'testing'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Viral Testing &amp;
                </tspan>
                <tspan
                  x="8.5"
                  y="19"
                  className={
                    activeTab === 'testing'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Surveillance
                </tspan>
              </text>
            </g>
            <path
              className={activeTab === 'testing' ? 'st17' : 'st25'}
              d="M280.4,30.3c0-6.1,4.4-11.2,10.4-12c6.7-0.9,12.8,3.5,13.8,10.2c0.5,3.4-0.3,6.6-2.4,9.3
      c-0.4,0.5-0.4,0.9,0,1.4c1.4,1.7,2.8,3.4,4.2,5.1c0.3,0.4,0.3,0.6-0.1,0.9c-0.6,0.5-1.3,1-1.9,1.5c-0.4,0.3-0.6,0.3-1-0.1
      c-1.4-1.7-2.8-3.4-4.2-5.1c-0.4-0.4-0.6-0.5-1.2-0.2c-7.3,3.8-16.4-0.8-17.6-8.9C280.4,31.6,280.4,30.9,280.4,30.3z M292.5,39
      c4.8,0.1,9.3-4.1,8.7-9.6c-0.4-4.4-4.2-7.9-8.6-7.9c-0.8,0-0.8,0-0.5,0.7c0.9,1.6,1.3,3.4,1.3,5.2c0,4.1-1.6,7.5-4.7,10.1
      c-0.5,0.5-0.3,0.6,0.1,0.8C290.1,38.8,291.3,39.1,292.5,39z M290.3,28.5c0-2.5-0.5-4.2-1.4-5.5c-0.3-0.4-0.5-0.4-0.9-0.2
      c-4.3,2.4-5.6,8.6-2.7,12.5c0.3,0.5,0.6,0.5,1,0.1C288.9,33.5,290.2,30.9,290.3,28.5z M288.6,17.3c-2.6-4.1-5.1-8.4-5.5-9.2
      c-0.2-0.4-0.5-0.9-0.9-0.9c-0.4,0-0.7,0.5-0.8,0.9c-0.5,1.1-4.4,8.1-8.1,13c-2,2.5-2.8,5.4-2.2,8.8c0.9,4.9,5.3,8.8,10.1,9
      c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0.1,0.4,0c-1.8-2.3-2.9-5.3-2.9-8.5C278.8,24.2,282.9,18.9,288.6,17.3z"
            />
          </g>
          <g
            id="infection"
            onClick={() => {
              setActiveTab('infection')
            }}
          >
            <path
              className={activeTab === 'infection' ? 'st25' : 'st27'}
              d="M175.8,0H9C4,0,0,4,0,9v89.5h184.8V9C184.8,4,180.7,0,175.8,0z"
            />
            <g>
              <text transform="matrix(1 0 0 1 56.0761 68.3617)">
                <tspan
                  x="0"
                  y="0"
                  className={
                    activeTab === 'infection'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Infection
                </tspan>
                <tspan
                  x="17.4"
                  y="19"
                  className={
                    activeTab === 'infection'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Rate
                </tspan>
              </text>
            </g>
            <path
              className={activeTab === 'infection' ? 'st17' : 'st25'}
              d="M104.7,26.8c0,6.8-5.5,12.3-12.3,12.3c-6.8,0-12.3-5.5-12.3-12.3s5.5-12.3,12.3-12.3
      C99.2,14.5,104.7,20,104.7,26.8z M92.4,8.2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S93.5,8.2,92.4,8.2z M92.4,41.9c-1.1,0-2,0.9-2,2
      c0,1.1,0.9,2,2,2s2-0.9,2-2C94.4,42.8,93.5,41.9,92.4,41.9z M93,11.3h-1.3v31.4H93V11.3z M83.3,11.2c-0.8,0.4-1,1.4-0.6,2.2
      c0.4,0.8,1.4,1,2.2,0.6c0.8-0.4,1-1.4,0.6-2.2C85,11,84,10.8,83.3,11.2z M99.9,40.1c-0.8,0.4-1,1.4-0.6,2.2c0.4,0.8,1.4,1,2.2,0.6
      s1-1.4,0.6-2.2C101.6,39.9,100.7,39.6,99.9,40.1z M85,13.1l-0.9,0.5l15.7,27.2l0.9-0.5L85,13.1z M74.2,27c0,0.9,0.7,1.6,1.6,1.6
      s1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6S74.2,26.1,74.2,27z M107.4,27c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6
      c0-0.9-0.7-1.6-1.6-1.6S107.4,26.1,107.4,27z M76.7,26.5v1h31.5v-1H76.7z M83.3,42.8c0.8,0.4,1.7,0.2,2.2-0.6
      c0.4-0.8,0.2-1.7-0.6-2.2s-1.7-0.2-2.2,0.6C82.3,41.4,82.5,42.4,83.3,42.8z M99.9,14c0.8,0.4,1.7,0.2,2.2-0.6
      c0.4-0.8,0.2-1.7-0.6-2.2s-1.7-0.2-2.2,0.6C98.9,12.6,99.2,13.5,99.9,14z M84.1,40.4l0.9,0.5l15.7-27.2l-0.9-0.5L84.1,40.4z
       M76.1,17.6c-0.5,0.9-0.2,2.2,0.7,2.7c0.9,0.5,2.2,0.2,2.7-0.7c0.5-0.9,0.2-2.2-0.7-2.7C77.8,16.3,76.6,16.7,76.1,17.6z
       M105.3,34.4c-0.5,0.9-0.2,2.2,0.7,2.7c0.9,0.5,2.2,0.2,2.7-0.7c0.5-0.9,0.2-2.2-0.7-2.7S105.8,33.5,105.3,34.4z M79.1,18.6
      l-0.6,1.1l27.2,15.7l0.6-1.1L79.1,18.6z M76.1,36.4c0.5,0.9,1.8,1.3,2.7,0.7s1.3-1.8,0.7-2.7c-0.5-0.9-1.8-1.3-2.7-0.7
      C75.9,34.3,75.5,35.5,76.1,36.4z M105.3,19.6c0.5,0.9,1.8,1.3,2.7,0.7c0.9-0.5,1.3-1.8,0.7-2.7c-0.5-0.9-1.8-1.3-2.7-0.7
      C105,17.4,104.7,18.6,105.3,19.6z M78.5,34.3l0.6,1.1l27.2-15.7l-0.6-1.1L78.5,34.3z"
            />
          </g>
          <g
            id="healthcare"
            onClick={() => {
              setActiveTab('healthcare')
            }}
          >
            <path
              className={activeTab === 'healthcare' ? 'st25' : 'st27'}
              d="M764.7,0H597.9c-5,0-9,4-9,9v89.5h184.8V9C773.7,4,769.7,0,764.7,0z"
            />
            <g>
              <text transform="matrix(1 0 0 1 635.8734 68.3637)">
                <tspan
                  x="0"
                  y="0"
                  className={
                    activeTab === 'healthcare'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Healthcare
                </tspan>
                <tspan
                  x="3.5"
                  y="19"
                  className={
                    activeTab === 'healthcare'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Readiness
                </tspan>
              </text>
            </g>
            <path
              className={activeTab === 'healthcare' ? 'st17' : 'st25'}
              d="M695.1,16.1v1.8c0,0.1-0.1,0.3-0.3,0.3h-2.1v2.1c0,0.1-0.1,0.3-0.3,0.3h-1.8c-0.1,0-0.3-0.1-0.3-0.3v-2.1
      h-2.1c-0.1,0-0.3-0.1-0.3-0.3v-1.8c0-0.1,0.1-0.3,0.3-0.3h2.1v-2.1c0-0.1,0.1-0.3,0.3-0.3h1.8c0.1,0,0.3,0.1,0.3,0.3v2.1h2.1
      C695,15.8,695.1,15.9,695.1,16.1z M681.4,41.1c4.7,0,9.5,0,14.2,0c0.3,0,0.5,0.1,0.4,0.4c0,0.4,0,0.9,0,1.4c0.1,0.6,0.6,1,1.2,1
      c0.6,0,1.1-0.4,1.2-1c0-0.2,0-0.4,0-0.6c0-2.8,0-5.5,0-8.3c0-1.1,0.1-2.2,0-3.2c-0.1-0.6-0.5-1.1-1.2-1.1c-0.7,0-1.2,0.4-1.3,1.1
      c-0.1,0.5,0,1.1,0,1.6c0,0.5,0,0.5-0.5,0.5c-7.5,0-15.1,0-22.6,0c-1.9,0-3.8,0-5.7,0c-0.3,0-0.4-0.1-0.4-0.4c0-0.4,0-0.8,0-1.2
      c0-1.6,0-3.2,0-4.8c0-0.8-0.5-1.3-1.3-1.3c-0.7,0-1.2,0.5-1.3,1.2c0,0.2,0,0.4,0,0.6c0,4.6,0,9.1,0,13.7c0,0.7-0.1,1.4,0,2.1
      c0.1,0.7,0.7,1.2,1.4,1.1c0.7,0,1.2-0.6,1.2-1.2c0-0.4,0-0.7,0-1.1c0-0.5,0-0.5,0.5-0.5C671.9,41.1,676.7,41.1,681.4,41.1
      C681.4,41.1,681.4,41.1,681.4,41.1z M695.6,35.5c0.5,0,0.5,0,0.5,0.5c0,0.7,0,1.3,0,2c0,0.3-0.1,0.4-0.4,0.4c-5,0-10,0-15.1,0
      c-4.4,0-8.9,0-13.3,0c-0.5,0-0.5,0-0.5-0.5c0-0.6,0-1.3,0-1.9c0-0.3,0.1-0.5,0.4-0.5c4.3,0,8.7,0,13,0c0.4,0,0.8,0,1.2,0
      C686.1,35.5,690.9,35.5,695.6,35.5z M685.2,31.4c3.1,0,6.2,0,9.3,0c0.3,0,0.4-0.1,0.4-0.4c-0.2-1.6-0.9-2.7-2.3-3.5
      c-0.9-0.5-1.9-0.5-2.8-0.5c-2-0.1-3.9,0-5.9-0.1c-2.1-0.1-4.2-0.1-6.3-0.1c-0.2,0-0.4-0.1-0.6-0.3c-0.4-0.5-0.9-1-1.3-1.6
      c-1.1-1.3-3-1.5-4.4-0.4c-0.3,0.2-0.5,0.4-0.8,0.6c-0.2,0.2-0.2,0.3,0,0.5c1.5,1.8,3,3.5,4.5,5.3c0.3,0.3,0.6,0.4,1,0.4
      C679.1,31.3,682.2,31.4,685.2,31.4C685.2,31.4,685.2,31.4,685.2,31.4z M691.3,10.2c-3.6,0.1-6.7,3.2-6.6,6.9c0,3.8,3.1,6.9,7,6.9
      c4,0,6.9-3.3,6.8-6.9C698.5,13.2,695.2,10.1,691.3,10.2z M696.7,17.1c0,2.9-2.2,5.1-5.1,5.1c-2.9,0-5.2-2.2-5.2-5.1
      c0-3.1,2.5-5.2,5.1-5.1C694.4,11.9,696.7,14.2,696.7,17.1z M672.7,20.9c0-1.8-1.4-3.2-3.2-3.2c-1.7,0-3.2,1.5-3.2,3.2
      c0,1.7,1.4,3.1,3.2,3.1C671.3,24,672.7,22.6,672.7,20.9z M668,28.5c0,0.9,0,1.7,0,2.6c0,0.2,0,0.4,0.3,0.4c1.6,0,3.2,0,4.8,0
      c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0-0.2-0.1-0.2c-0.2-0.3-0.5-0.5-0.7-0.8c-1.3-1.5-2.6-3.1-3.9-4.6c-0.1-0.1-0.2-0.3-0.4-0.2
      c-0.2,0.1-0.1,0.3-0.1,0.4C668,26.8,668,27.6,668,28.5C668,28.5,668,28.5,668,28.5z"
            />
          </g>
          <g
            id="protecting"
            onClick={() => {
              setActiveTab('protecting')
            }}
          >
            <path
              className={activeTab === 'protecting' ? 'st25' : 'st27'}
              d="M961,0H794.2c-5,0-9,4-9,9v89.5H970V9C970,4,966,0,961,0z"
            />
            <g>
              <text transform="matrix(1 0 0 1 834.7948 68.3637)">
                <tspan
                  x="0"
                  y="0"
                  className={
                    activeTab === 'protecting'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  Protecting
                </tspan>
                <tspan
                  x="-37.1"
                  y="19"
                  className={
                    activeTab === 'protecting'
                      ? 'st17 st28 st29'
                      : 'st25 st28 st29'
                  }
                >
                  At-Risk Populations
                </tspan>
              </text>
            </g>
            <path
              className={activeTab === 'protecting' ? 'st17' : 'st25'}
              d="M889.6,22.5c-0.9,0.9-1.6,1.6-2,2.1L875,23.4c0-0.1,0-0.2,0-0.3c0.2-1.3,0.5-2.7,0.9-4
      c0.3-0.9,0.6-1.7,1.2-2.5c0.5-0.6,1.1-1,1.9-0.9c0.3,0,0.5,0.1,0.8,0.3c1.5,1.4,3.5,1.4,5.1,0.1c0.4-0.4,0.9-0.4,1.4-0.3
      c0.7,0.1,1.1,0.6,1.5,1.1c0.5,0.8,0.9,1.6,1.1,2.5C889.2,20.4,889.4,21.4,889.6,22.5z M885.8,11.6c-0.2-1.3-0.8-2.4-1.9-3.2
      c-0.5-0.3-1.1-0.5-1.8-0.5c-0.8,0.1-1.5,0.4-2.1,1c-0.9,1-1.3,2.1-1.2,3.4c0.1,1.3,0.7,2.4,1.7,3.2c0.5,0.4,1.1,0.6,1.8,0.6
      c0.9,0,1.7-0.4,2.3-1.1c0.8-0.8,1.2-1.9,1.2-3C885.9,12,885.9,11.8,885.8,11.6z M898,20.7c-1.3-1.3-3.4-1.2-5,0.3
      c-1.2,1.1-2.3,2.3-3.4,3.4c-0.2,0.2-0.3,0.3-0.3,0.4c1.2,0.6,2.4,1.6,2.3,3.5c-0.1,1.7-1.5,3.4-2.9,3.5c-0.7,0.1-2.4,0.1-4.4,0.1
      c-3.7,0-8.3-0.1-8.6-0.1c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.1,0,10.7,0.2,12.8,0c0.7-0.1,1.6-1.1,1.7-2.3
      c0.1-1-0.6-1.9-1.8-2.4c-0.2-0.1-0.4-0.1-0.6-0.1c-5.2-0.4-10.4-0.9-15.6-1.3c-1-0.1-1.9,0.3-2.6,1c-2.3,2.3-4.6,4.5-6.9,6.8
      c-0.6,0.5-0.6,0.9,0,1.5c2.2,2.1,4.3,4.3,6.5,6.5c0.5,0.5,0.9,0.5,1.3,0c1.7-2.5,4.2-2.7,6.8-2.8c3.1-0.2,6.3-0.6,9.4-0.8
      c1.1-0.1,1.9-0.6,2.6-1.3c2.9-3.1,5.7-6.3,8.6-9.5C899.2,24,899.3,22,898,20.7z M865.9,46c1.2,0,3.1-1.5,3.5-2.5
      c0.4-1.1-0.1-1.9-0.9-2.6c-2.3-2.3-4.6-4.6-7-6.9c-1.3-1.3-2.3-1.3-3.6,0c-0.3,0.3-0.6,0.6-0.9,0.9c-0.8,0.9-0.9,2,0,2.9
      c2.6,2.6,5.2,5.2,7.7,7.7C865.1,45.8,865.6,46,865.9,46z"
            />
          </g>
          <g
            id="case"
            onClick={() => {
              setActiveTab('case')
            }}
          >
            <path
              className={activeTab === 'case' ? 'st25' : 'st27'}
              d="M568.4,0H401.6c-5,0-9,4-9,9v89.5h184.8V9C577.4,4,573.4,0,568.4,0z"
            />
            <g>
              <text transform="matrix(1 0 0 1 422.5375 68.3617)">
                <tspan
                  x="0"
                  y="0"
                  className={
                    activeTab === 'case' ? 'st17 st28 st29' : 'st25 st28 st29'
                  }
                >
                  Case &amp; Contact
                </tspan>
                <tspan
                  x="5.3"
                  y="19"
                  className={
                    activeTab === 'case' ? 'st17 st28 st29' : 'st25 st28 st29'
                  }
                >
                  Investigations
                </tspan>
              </text>
            </g>
            <path
              className={activeTab === 'case' ? 'st17' : 'st25'}
              d="M487.2,25.1c0,0.1,0,0.2,0,0.2c0,0,0,0.1,0,0.1c0,0.3,0,0.5-0.1,0.7c-0.1,0.4-0.3,0.8-0.7,1.2
      c0,0,0,0-0.1,0.1c-0.2,0.2-0.4,0.3-0.6,0.4c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.4,0
      c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.2c-0.4-0.3-0.6-0.8-0.7-1.3c0-0.2-0.1-0.3-0.1-0.5
      c0-0.1,0-0.2,0-0.3c0-0.7,0.3-1.3,0.8-1.9c0.3-0.3,0.7-0.5,1.1-0.6c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0.1,0.7,0.3
      C486.7,23.5,487.1,24.2,487.2,25.1z M484.3,11.5c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.2,1-0.4c0.3-0.4,0.5-0.8,0.5-1.3
      c0-0.1,0-0.1,0-0.2c-0.1-0.6-0.3-1-0.8-1.3c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4c-0.4,0.4-0.5,0.9-0.5,1.4
      C483.6,10.7,483.8,11.2,484.3,11.5z M485.7,40.4c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4c-0.4,0.4-0.5,0.9-0.5,1.4
      c0,0.6,0.3,1,0.7,1.3c0.2,0.2,0.5,0.3,0.8,0.2c0.4,0,0.7-0.2,1-0.4c0.3-0.4,0.5-0.8,0.5-1.3c0-0.1,0-0.1,0-0.2
      C486.4,41.1,486.2,40.7,485.7,40.4z M471.9,16.4c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4c-0.4,0.4-0.5,0.9-0.5,1.4
      c0,0.6,0.3,1,0.7,1.3c0.2,0.2,0.5,0.3,0.7,0.3c0.4,0,0.7-0.2,1-0.4c0.3-0.4,0.5-0.8,0.5-1.3c0-0.1,0-0.1,0-0.2
      C472.6,17.2,472.3,16.8,471.9,16.4z M503.4,35c0,1.2-0.5,2.4-1.4,3.3c-0.9,0.8-2,1.3-3.2,1.3c-1.2,0-2.3-0.5-3.2-1.3
      c-0.9-0.9-1.4-2-1.4-3.3c0-0.7,0.2-1.4,0.5-2l-4-2.3c-0.3,0.4-0.6,0.8-1,1.2c-1.2,1.2-2.7,1.9-4.4,1.9v4.6
      c2.4,0.2,4.3,2.2,4.3,4.6c0,1.2-0.5,2.4-1.4,3.3c-0.9,0.9-2,1.3-3.2,1.3c-1.2,0-2.3-0.5-3.2-1.3c-0.9-0.9-1.4-2-1.4-3.3
      c0-2.4,1.9-4.4,4.3-4.6v-4.6c-1.7-0.1-3.2-0.8-4.4-1.9c-0.4-0.4-0.7-0.8-1-1.2l-4,2.3c0.3,0.6,0.5,1.3,0.5,2
      c0,1.2-0.5,2.4-1.4,3.3c-0.9,0.8-2,1.3-3.2,1.3c-1.2,0-2.3-0.5-3.2-1.3c-0.9-0.9-1.4-2-1.4-3.3c0-2.5,2.1-4.6,4.6-4.6
      c1.6,0,3,0.8,3.8,2l4-2.3c-0.5-0.9-0.7-2-0.7-3.1c0-1.1,0.3-2.2,0.8-3.1l-4-2.3c-0.2,0.3-0.4,0.5-0.6,0.7c-0.9,0.8-2,1.3-3.2,1.3
      c-1.2,0-2.3-0.5-3.2-1.3c-0.9-0.9-1.4-2-1.4-3.3c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6c0,0.7-0.2,1.4-0.4,2v0l4,2.3
      c1.2-1.8,3.1-3,5.3-3.1v-4.6c-1.1-0.1-2.1-0.5-2.9-1.3c-0.9-0.9-1.4-2-1.4-3.3c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6
      c0,1.2-0.5,2.4-1.4,3.3c-0.8,0.8-1.8,1.2-2.9,1.3v4.6c2.2,0.1,4.2,1.3,5.3,3.1l4-2.3c-0.3-0.6-0.4-1.3-0.4-2
      c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6c0,1.2-0.5,2.4-1.4,3.3c-0.9,0.8-2,1.3-3.2,1.3c-1.2,0-2.3-0.5-3.2-1.3
      c-0.2-0.2-0.4-0.5-0.6-0.7l-4,2.3c0.5,0.9,0.8,2,0.8,3.1c0,1.1-0.3,2.1-0.7,3.1l4,2.3c0.8-1.2,2.2-2,3.8-2
      C501.4,30.4,503.4,32.5,503.4,35z M494.9,19c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.4,0.3-0.7,0.5-1
      c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1c0.3,0.1,0.5,0.2,0.6,0.5
      c0.2,0.3,0.4,0.7,0.5,1.1c0.1,0.2,0.1,0.4,0.2,0.6c0.7-0.7,1-1.6,1-2.6c0-2.2-1.8-3.9-3.9-3.9C496.7,15.1,494.9,16.9,494.9,19z
       M474.1,21.7c0.7-0.7,1-1.6,1-2.6c0-2.2-1.8-3.9-3.9-3.9c-2.2,0-3.9,1.8-3.9,3.9c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8
      c0.1-0.4,0.3-0.7,0.5-1c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1
      c0.3,0.1,0.5,0.2,0.6,0.5c0.2,0.3,0.4,0.7,0.5,1.1C474,21.2,474,21.5,474.1,21.7z M474.1,37.6c0.7-0.7,1-1.6,1-2.6
      c0-2.2-1.8-3.9-3.9-3.9c-2.2,0-3.9,1.8-3.9,3.9c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.4,0.3-0.7,0.5-1
      c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1c0.3,0.1,0.5,0.2,0.6,0.5
      c0.2,0.3,0.4,0.7,0.5,1.1C474,37.2,474,37.4,474.1,37.6z M489.4,31.2c0.3-0.3,0.5-0.6,0.7-0.9c0.1-0.2,0.2-0.4,0.3-0.6
      c0.4-0.8,0.6-1.8,0.6-2.7c0-1-0.2-1.9-0.7-2.8c-0.1-0.2-0.2-0.4-0.3-0.6c-1-1.6-2.8-2.6-4.8-2.7c-0.1,0-0.2,0-0.3,0
      c-0.1,0-0.2,0-0.3,0c-2,0.1-3.7,1.2-4.8,2.7c-0.1,0.2-0.2,0.4-0.3,0.6c-0.4,0.8-0.7,1.8-0.7,2.8c0,1,0.2,1.9,0.7,2.7
      c0.1,0.2,0.2,0.4,0.3,0.6c0.2,0.3,0.4,0.6,0.7,0.9c0.1-0.5,0.2-0.9,0.3-1.4c0,0,0-0.1,0-0.1c0.1-0.4,0.3-0.7,0.5-1
      c0.1-0.1,0.2-0.3,0.3-0.4c0.3-0.4,0.7-0.6,1.2-0.6c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.3,0.3
      c0.3,0.2,0.6,0.3,1,0.4c0.2,0,0.4,0,0.7,0c0.3-0.1,0.7-0.2,1-0.4c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.4-0.2
      c0.2,0,0.3,0,0.5,0c0.4,0.1,0.7,0.4,1,0.7c0.1,0.1,0.1,0.2,0.2,0.2c0.2,0.3,0.3,0.7,0.5,1c0,0.1,0.1,0.2,0.1,0.3
      C489.3,30.4,489.4,30.8,489.4,31.2z M481.1,11.1c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.4,0.3-0.7,0.5-1
      c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1c0.3,0.1,0.5,0.2,0.6,0.5
      c0.2,0.3,0.4,0.7,0.5,1.1c0.1,0.2,0.1,0.4,0.2,0.7c0.7-0.7,1-1.7,1-2.6c0-2.2-1.8-3.9-3.9-3.9C482.9,7.2,481.1,8.9,481.1,11.1z
       M487.9,45.6c0.7-0.7,1-1.7,1-2.6c0-2.2-1.8-3.9-3.9-3.9c-2.2,0-3.9,1.8-3.9,3.9c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8
      c0.1-0.4,0.3-0.7,0.5-1c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1
      c0.3,0.1,0.5,0.2,0.6,0.5c0.2,0.3,0.4,0.7,0.5,1.1C487.8,45.2,487.9,45.4,487.9,45.6z M501.7,37.6c0.7-0.7,1-1.6,1-2.6
      c0-2.2-1.8-3.9-3.9-3.9c-2.2,0-3.9,1.8-3.9,3.9c0,1,0.4,1.9,1,2.6c0.1-0.3,0.1-0.5,0.2-0.8c0.1-0.4,0.3-0.7,0.5-1
      c0.2-0.2,0.4-0.4,0.8-0.4c0.1,0,0.2,0,0.3,0.1c0.6,0.6,1.5,0.6,2.1,0c0.2-0.2,0.4-0.2,0.6-0.1c0.3,0.1,0.5,0.2,0.6,0.5
      c0.2,0.3,0.4,0.7,0.5,1.1C501.6,37.2,501.7,37.4,501.7,37.6z M499.5,32.4c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4
      c-0.4,0.4-0.6,0.9-0.5,1.4c0,0.6,0.3,1,0.7,1.3c0.2,0.2,0.5,0.3,0.8,0.2c0.4,0,0.7-0.2,1-0.4c0.3-0.4,0.5-0.8,0.5-1.3
      c0-0.1,0-0.1,0-0.2C500.2,33.2,500,32.7,499.5,32.4z M471.9,32.4c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4
      c-0.4,0.4-0.5,0.9-0.5,1.4c0,0.6,0.3,1,0.7,1.3c0.2,0.2,0.5,0.3,0.8,0.2c0.4,0,0.7-0.2,1-0.4c0.3-0.4,0.5-0.8,0.5-1.3
      c0-0.1,0-0.1,0-0.2C472.6,33.2,472.3,32.7,471.9,32.4z M498.1,19.5c0.2,0.2,0.5,0.3,0.8,0.3c0.4,0,0.7-0.2,1-0.4
      c0.3-0.4,0.5-0.8,0.5-1.3c0-0.1,0-0.1,0-0.2c-0.1-0.6-0.3-1-0.8-1.3c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3,0-0.6,0.2-0.9,0.4
      c-0.4,0.4-0.6,0.9-0.5,1.4C497.4,18.7,497.6,19.1,498.1,19.5z"
            />
          </g>
          <rect x="0.5" y="97.6" className="st30" width="969" height="18" />
        </g>
        <path
          className="st16"
          d="M924.5,197.3H677.5c-26.3,28.9-47.9,77.2-65.3,136h312.3V197.3z"
        />
        <text transform="matrix(1 0 0 1 663.1702 224.0872)">
          <tspan x="0" y="0" className="st31 st18 st32">
            Phase 4: New normal
          </tspan>
          <tspan x="-13.8" y="22" className="st31 st33 st34">
            • Maximal return to normalcy that is viable prior
          </tspan>
          <tspan x="225.4" y="22" className="st31 st33 st34 st35"></tspan>
          <tspan x="-20.9" y="36" className="st31 st33 st34">
            to herd immunity via widespread vaccination
          </tspan>
          <tspan x="-28.9" y="54" className="st31 st33 st34">
            • Community transmission is well monitored and
          </tspan>
          <tspan x="-34.6" y="68" className="st31 st33 st34">
            virus flare-ups are contained rapidly
          </tspan>
          <tspan x="-41.1" y="86" className="st31 st33 st34">
            • Most high-risk/low criticality functions can resume
          </tspan>
        </text>
        <path
          className="st16"
          d="M924.5,356.7H605.7c-11.1,41.9-20.3,88.2-27.7,136h346.6V356.7z"
        />
        <text transform="matrix(1 0 0 1 599.8167 388.4163)">
          <tspan x="0" y="0" className="st31 st18 st32">
            Phase 3: Economic recovery
          </tspan>
          <tspan x="-5.2" y="22" className="st31 st33 st34">
            • Widely re-opening economic and social functions
          </tspan>
          <tspan x="-8.2" y="36" className="st31 st33 st34">
            once transmission has declined and is suppressed
          </tspan>
          <tspan x="-11.8" y="54" className="st31 st33 st34">
            • Moderate-sized gatherings and activities in enclosed
          </tspan>
          <tspan x="-14.5" y="68" className="st31 st33 st34">
            spaces possible with appropriate mitigation
          </tspan>
          <tspan x="-17.7" y="86" className="st31 st33 st34">
            • Continue to prohibit large gatherings
          </tspan>
        </text>
        <path
          className="st16"
          d="M924.5,514.4H574.7c-6.5,45.2-11.4,91.3-15,136h364.9V514.4z"
        />
        <text transform="matrix(1 0 0 1 572.1487 541.1985)">
          <tspan x="0" y="0" className="st31 st18 st32">
            Phase 2: Initial re-opening
          </tspan>
          <tspan x="-2.9" y="22" className="st31 st33 st34">
            • Limited number of critically important activities open
          </tspan>
          <tspan x="-5.1" y="40" className="st31 st33 st34">
            • Continue to prohibit gatherings in enclosed spaces
          </tspan>
          <tspan x="-7" y="58" className="st31 st33 st34">
            • Some outdoor activities with appropriate distancing
          </tspan>
          <tspan x="-8.9" y="76" className="st31 st33 st34">
            • Telework should continue wherever feasible
          </tspan>
        </text>
        <path
          className="st16"
          d="M924.5,673H557.9c-3.5,48.5-5.3,94.9-5.7,136h372.4V673z"
        />
        <text transform="matrix(1 0 0 1 556.6917 699.7532)">
          <tspan x="0" y="0" className="st31 st18 st32">
            Phase 1: Maximum social-distancing
          </tspan>
          <tspan x="-1.3" y="22" className="st31 st33 st34">
            Tailored to each community, focus is on reducing
          </tspan>
          <tspan x="-2.1" y="36" className="st31 st33 st34">
            person-to-person transmission and decreasing the
          </tspan>
          <tspan x="-2.7" y="50" className="st31 st33 st34">
            burden on the healthcare system
          </tspan>
        </text>

        <Tippy
          content={phasesContent.phase_4}
          allowHTML={true}
          maxWidth={'30rem'}
          theme={'light'}
          placement={'bottom'}
          offset={[-30, 10]}
        >
          <text
            transform="matrix(1 0 0 1 822.8613 333.3355)"
            className={styles.hoverable}
          >
            <tspan x="0" y="0" className="st23 st18 st36">
              FUL
            </tspan>
            <tspan x="15.3" y="0" className="st23 st18 st36">
              L
            </tspan>
            <tspan x="19.8" y="0" className="st23 st18 st36">
              {' '}
              PH
            </tspan>
            <tspan x="32.7" y="0" className="st23 st18 st36">
              A
            </tspan>
            <tspan x="38" y="0" className="st23 st18 st36">
              SE D
            </tspan>
            <tspan x="55.4" y="0" className="st23 st18 st36">
              E
            </tspan>
            <tspan x="60.1" y="0" className="st23 st18 st36">
              SCRIPTION
            </tspan>
          </text>
        </Tippy>
        <Tippy
          content={phasesContent.phase_3}
          allowHTML={true}
          maxWidth={'30rem'}
          theme={'light'}
          placement={'bottom'}
          offset={[-30, 10]}
        >
          <text
            transform="matrix(1 0 0 1 822.8613 492.6644)"
            className={styles.hoverable}
          >
            <tspan x="0" y="0" className="st23 st18 st36">
              FUL
            </tspan>
            <tspan x="15.3" y="0" className="st23 st18 st36">
              L
            </tspan>
            <tspan x="19.8" y="0" className="st23 st18 st36">
              {' '}
              PH
            </tspan>
            <tspan x="32.7" y="0" className="st23 st18 st36">
              A
            </tspan>
            <tspan x="38" y="0" className="st23 st18 st36">
              SE D
            </tspan>
            <tspan x="55.4" y="0" className="st23 st18 st36">
              E
            </tspan>
            <tspan x="60.1" y="0" className="st23 st18 st36">
              SCRIPTION
            </tspan>
          </text>
        </Tippy>
        <Tippy
          content={phasesContent.phase_2}
          allowHTML={true}
          maxWidth={'30rem'}
          theme={'light'}
          placement={'bottom'}
          offset={[-30, 10]}
        >
          <text
            transform="matrix(1 0 0 1 822.8613 650.4467)"
            className={styles.hoverable}
          >
            <tspan x="0" y="0" className="st23 st18 st36">
              FUL
            </tspan>
            <tspan x="15.3" y="0" className="st23 st18 st36">
              L
            </tspan>
            <tspan x="19.8" y="0" className="st23 st18 st36">
              {' '}
              PH
            </tspan>
            <tspan x="32.7" y="0" className="st23 st18 st36">
              A
            </tspan>
            <tspan x="38" y="0" className="st23 st18 st36">
              SE D
            </tspan>
            <tspan x="55.4" y="0" className="st23 st18 st36">
              E
            </tspan>
            <tspan x="60.1" y="0" className="st23 st18 st36">
              SCRIPTION
            </tspan>
          </text>
        </Tippy>
        <Tippy
          content={phasesContent.phase_1}
          allowHTML={true}
          maxWidth={'30rem'}
          theme={'light'}
          placement={'bottom'}
          offset={[-30, 10]}
        >
          <text
            transform="matrix(1 0 0 1 822.8613 781.2004)"
            className={styles.hoverable}
          >
            <tspan x="0" y="0" className="st23 st18 st36">
              FUL
            </tspan>
            <tspan x="15.3" y="0" className="st23 st18 st36">
              L
            </tspan>
            <tspan x="19.8" y="0" className="st23 st18 st36">
              {' '}
              PH
            </tspan>
            <tspan x="32.7" y="0" className="st23 st18 st36">
              A
            </tspan>
            <tspan x="38" y="0" className="st23 st18 st36">
              SE D
            </tspan>
            <tspan x="55.4" y="0" className="st23 st18 st36">
              E
            </tspan>
            <tspan x="60.1" y="0" className="st23 st18 st36">
              SCRIPTION
            </tspan>
          </text>
        </Tippy>
      </svg>
      {/* The left-side text is its own svg, conditionally rendered */}
      {activeTab === 'infection' && <InfectionText />}
      {activeTab === 'testing' && <TestingText />}
      {activeTab === 'case' && <CaseText />}
      {activeTab === 'healthcare' && <HealthcareText />}
      {activeTab === 'protecting' && <ProtectingText />}
    </div>
  )
}

export default TabSection
