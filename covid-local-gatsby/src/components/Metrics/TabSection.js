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
      <svg id="background" x="0px" y="0px" viewBox="0 0 972 835">
        <g id="wayback">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="586.7969"
            y1="265.9194"
            x2="885.0807"
            y2="265.9194"
          >
            <stop offset="0" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="586.8"
            y="191.6"
            className="st0"
            width="298.3"
            height="148.6"
          />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="549.1451"
            y1="424.3596"
            x2="844.0177"
            y2="424.3596"
          >
            <stop offset="0" style={{ stopColor: '#FF7224' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="549.1"
            y="351"
            className="st1"
            width="294.9"
            height="146.8"
          />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="530.5079"
            y1="726.3409"
            x2="721.4138"
            y2="726.3409"
          >
            <stop offset="0" style={{ stopColor: '#7C003E' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="530.5"
            y="666.9"
            className="st2"
            width="190.9"
            height="118.8"
          />
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="535.2966"
            y1="582.3231"
            x2="810.4321"
            y2="582.3231"
          >
            <stop offset="0" style={{ stopColor: '#B51A34' }} />
            <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
          </linearGradient>
          <rect
            x="535.3"
            y="509.1"
            className="st3"
            width="275.1"
            height="146.4"
          />
          <path
            className="st4"
            d="M924.6,497.9h-852V350.9h852c5.5,0,10,4.5,10,10v127.1C934.6,493.5,930.1,497.9,924.6,497.9z"
          />
          <path
            className="st5"
            d="M924.6,340.3h-852V191.7h852c5.5,0,10,4.5,10,10v128.5C934.6,335.8,930.1,340.3,924.6,340.3z"
          />
          <path
            className="st6"
            d="M924.6,655.6h-852V509.3h852c5.5,0,10,4.5,10,10v126.3C934.6,651.1,930.1,655.6,924.6,655.6z"
          />
          <path
            className="st7"
            d="M924.6,785.9H516.7V667h407.9c5.5,0,10,4.5,10,10v98.9C934.6,781.4,930.1,785.9,924.6,785.9z"
          />
          <rect x="72.1" y="191.2" className="st8" width="14" height="149.5" />
          <rect x="72.1" y="350.4" className="st9" width="14" height="148" />
          <rect x="72.1" y="508.9" className="st10" width="14" height="147.2" />
          <polygon
            className="st8"
            points="79.1,163.4 57.9,191.3 100.3,191.3  "
          />
          <polygon
            className="st10"
            points="79.1,683.8 57.9,655.9 100.3,655.9   "
          />
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="494.5485"
            y1="726.4224"
            x2="539.3486"
            y2="726.4224"
          >
            <stop offset="0" style={{ stopColor: '#963365' }} />
            <stop offset="0.5" style={{ stopColor: '#7C003E' }} />
            <stop offset="1" style={{ stopColor: '#62003E' }} />
          </linearGradient>
          <path
            className="st11"
            d="M539.3,666.6c-2,25.3-3.3,72.5-4.1,91.1v0c-0.3,7.5-0.5,22.4-0.7,28.5h-35.2c-0.2-6.2-0.4-21.1-0.7-28.7v0
    c-0.8-18.5-2.1-65.7-4.1-90.9H539.3z"
          />
          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="477.1086"
            y1="582.5178"
            x2="556.7985"
            y2="582.5178"
          >
            <stop offset="0" style={{ stopColor: '#CB5F71' }} />
            <stop offset="0.3" style={{ stopColor: '#B51A34' }} />
            <stop offset="0.5" style={{ stopColor: '#B51A34' }} />
            <stop offset="1" style={{ stopColor: '#971A34' }} />
          </linearGradient>
          <path
            className="st12"
            d="M556.8,508.9c-7.6,52.2-13,103.4-16.6,147.3h-46.5c-3.6-43.9-9-95.1-16.6-147.3H556.8z"
          />
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="372.1286"
            y1="265.5877"
            x2="661.7685"
            y2="265.5877"
          >
            <stop offset="3.599446e-04" style={{ stopColor: '#FDDF89' }} />
            <stop offset="0.3" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="0.5" style={{ stopColor: '#FCCA3A' }} />
            <stop offset="1" style={{ stopColor: '#E3A614' }} />
          </linearGradient>
          <path
            className="st13"
            d="M661.8,191.3c-29.7,25.6-53.2,81.2-71.5,148.7H443.6c-18.3-67.5-41.8-123.1-71.5-148.7H661.8z"
          />
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="446.3686"
            y1="424.3928"
            x2="587.5385"
            y2="424.3928"
          >
            <stop offset="0" style={{ stopColor: '#FFAA7C' }} />
            <stop offset="0.3" style={{ stopColor: '#FF7224' }} />
            <stop offset="0.5" style={{ stopColor: '#FF7224' }} />
            <stop offset="1" style={{ stopColor: '#F05024' }} />
          </linearGradient>
          <path
            className="st14"
            d="M587.5,350.3c-12,46.3-21.6,97.5-29.2,148.1h-82.8c-7.6-50.6-17.2-101.8-29.2-148.1H587.5z"
          />
          <path
            className="st15"
            d="M535.2,765.6L535.2,765.6c-0.3-0.6-0.6-1.1-1.2-1.5c-0.8-0.6-1.8-0.9-2.8-0.9c-0.4,0-0.9,0-1.3,0
    c-0.5,0-0.6,0-0.6-0.6v-3.5c0-6.2-4.6-11.5-10.8-12.4c-6.8-1-13.2,3.8-14.2,10.6c-0.2,1.7-0.1,3.4-0.1,5.1c0,0.8,0,0.8-0.8,0.8
    c-0.7,0-1.3,0-2,0.1c-1.3,0.2-2.3,1-2.9,2.1v0c-0.3,0.6-0.5,1.3-0.5,2c0,5.5,0,11.1,0,16.6c0,2,1.2,3.5,3.1,4.1
    c0.1,0,0.2,0.1,0.3,0.1h30.7c0.7-0.2,1.4-0.5,2-1c0.8-0.7,1.2-1.7,1.4-2.7v-17.6C535.6,766.5,535.4,766,535.2,765.6z M519.4,776.9
    c-0.4,0.3-0.5,0.5-0.5,0.9c0,1.2,0,2.4,0,3.5c0,0.5,0,0.5-0.5,0.5c-1,0-2,0-3,0c-0.3,0-0.5-0.1-0.5-0.5c0-0.6,0-1.3,0-1.9
    c0-0.6,0-1.2,0-1.8c0-0.4-0.1-0.6-0.4-0.8c-1.4-1-2-2.7-1.6-4.3c0.4-1.7,1.8-2.9,3.5-3.1c1.8-0.2,3.6,0.8,4.3,2.5
    C521.4,773.8,520.9,775.8,519.4,776.9z M523.1,760.1v2.6c0,0.5-0.1,0.5-0.5,0.5h-11.2c-0.6,0-0.6,0-0.6-0.6c0-1.3,0-2.6,0-3.9
    c0.1-2.8,2.5-5.3,5.3-5.7c3.2-0.4,6.4,1.7,7,5.1C523.1,758.8,523,759.4,523.1,760.1z"
          />
          <g>
            <rect
              x="457.1"
              y="795"
              className="st16"
              width="119.7"
              height="19.2"
            />
            <text
              transform="matrix(1 0 0 1 472.2067 805.9866)"
              className="st17 st18 st19"
            >
              Lockdown
            </text>
          </g>
          <g>
            <rect
              x="502.2"
              y="707.1"
              className="st16"
              width="29.5"
              height="30.1"
            />
            <text
              transform="matrix(1 0 0 1 511.77 723.1221)"
              className="st20 st18 st21"
            >
              1
            </text>
          </g>
          <g>
            <rect
              x="498.5"
              y="254"
              className="st16"
              width="36.8"
              height="37.6"
            />
            <text
              transform="matrix(1 0 0 1 507.646 278.0698)"
              className="st20 st18 st22"
            >
              4
            </text>
          </g>
          <g>
            <rect
              x="500.7"
              y="410.2"
              className="st16"
              width="31.8"
              height="32.4"
            />
            <text
              transform="matrix(1 0 0 1 508.5847 431.4128)"
              className="st20 st18 st23"
            >
              3
            </text>
          </g>
          <g>
            <rect
              x="504.3"
              y="573.5"
              className="st16"
              width="25.3"
              height="25.8"
            />
            <text
              transform="matrix(1 0 0 1 509.8144 592.4932)"
              className="st20 st18 st24"
            >
              2
            </text>
          </g>
          <g>
            <rect
              x="340.8"
              y="169.1"
              className="st16"
              width="352.4"
              height="18.6"
            />
            <text
              transform="matrix(1 0 0 1 352.6178 180.0564) translate(70)"
              className="st25 st18 st19"
            >
              PHASES FOR RE-OPENING
            </text>
          </g>
          <g>
            <path
              className="st26"
              d="M963,97H9c-5,0-9-4-9-9l0-15h972v15C972,93,968,97,963,97z"
            />
          </g>
          <g>
            <path
              className="st26"
              d="M969.9,82.1v751.9H2.1V82.1H969.9 M971,81H1v754h970V81L971,81z"
            />
          </g>
          <path
            className="st16"
            d="M925.8,191.9H678.7c-26.3,28.9-47.9,77.2-65.3,136h312.3V191.9z"
          />
          <text transform="matrix(1 0 0 1 664.3916 218.6787)">
            <tspan x="0" y="0" className="st27 st18 st28">
              Phase 4: New normal{' '}
            </tspan>
            <tspan x="-13.8" y="22" className="st27 st29 st30">
              • Maximal return to normalcy that is viable prior{' '}
            </tspan>
            <tspan x="225.4" y="22" className="st27 st29 st30 st31">
              {' '}
            </tspan>
            <tspan x="-20.9" y="36" className="st27 st29 st30">
              {' '}
              to herd immunity via widespread vaccination
            </tspan>
            <tspan x="-28.9" y="54" className="st27 st29 st30">
              • Community transmission is well monitored and{' '}
            </tspan>
            <tspan x="-34.6" y="68" className="st27 st29 st30">
              {' '}
              virus flare-ups are contained rapidly{' '}
            </tspan>
            <tspan x="-41.1" y="86" className="st27 st29 st30">
              • Most high-risk/low criticality functions can resume
            </tspan>
          </text>
          <path
            className="st16"
            d="M928.8,339.2H609.9c-11.1,41.9-20.3,88.2-27.7,136h346.6V339.2z"
          />
          <text transform="matrix(1 0 0 1 604.0391 371.0068)">
            <tspan x="0" y="0" className="st27 st18 st28">
              {' '}
              Phase 3: Economic recovery{' '}
            </tspan>
            <tspan x="-5.2" y="22" className="st27 st29 st30">
              • Widely re-opening economic and social functions{' '}
            </tspan>
            <tspan x="-8.2" y="36" className="st27 st29 st30">
              {' '}
              once transmission has declined and is suppressed{' '}
            </tspan>
            <tspan x="-11.8" y="54" className="st27 st29 st30">
              • Moderate-sized gatherings and activities in enclosed{' '}
            </tspan>
            <tspan x="-14.5" y="68" className="st27 st29 st30">
              {' '}
              spaces possible with appropriate mitigation
            </tspan>
            <tspan x="-17.7" y="86" className="st27 st29 st30">
              • Continue to prohibit large gatherings
            </tspan>
            <tspan x="-20.6" y="104" className="st27 st29 st30">
              • Telework should continue wherever feasible
            </tspan>
          </text>
          <path
            className="st16"
            d="M925.8,509H575.9c-6.5,45.2-11.4,91.3-15,136h364.9V509z"
          />
          <text transform="matrix(1 0 0 1 573.3701 535.79)">
            <tspan x="0" y="0" className="st27 st18 st28">
              Phase 2: Initial re-opening{' '}
            </tspan>
            <tspan x="-2.9" y="22" className="st27 st29 st30">
              • Limited number of critically important activities open
            </tspan>
            <tspan x="-5.1" y="40" className="st27 st29 st30">
              • Continue to prohibit gatherings in enclosed spaces
            </tspan>
            <tspan x="-7" y="58" className="st27 st29 st30">
              • Some outdoor activities with appropriate distancing{' '}
            </tspan>
            <tspan x="-8.9" y="76" className="st27 st29 st30">
              • Telework should continue wherever feasible
            </tspan>
          </text>
          <path
            className="st16"
            d="M925.8,667.6H559.1c-3.5,48.5-5.3,94.9-5.7,136h372.4V667.6z"
          />
          <text transform="matrix(1 0 0 1 557.9131 694.3447)">
            <tspan x="0" y="0" className="st27 st18 st28">
              Phase 1: Maximum social-distancing{' '}
            </tspan>
            <tspan x="-1.3" y="22" className="st27 st29 st30">
              Tailored to each community, focus is on reducing{' '}
            </tspan>
            <tspan x="-2.1" y="36" className="st27 st29 st30">
              person-to-person transmission and decreasing the{' '}
            </tspan>
            <tspan x="-2.7" y="50" className="st27 st29 st30">
              burden on the healthcare system
            </tspan>
          </text>
        </g>
        <g id="phasehover">
          <rect
            x="795.9"
            y="324.6"
            className="st16"
            width="128.8"
            height="8.9"
          />
          <Tippy
            content={phasesContent.phase_4}
            allowHTML={true}
            maxWidth={'30rem'}
            theme={'light'}
            placement={'bottom'}
            offset={[-30, 10]}
          >
            <text
              transform="matrix(1 0 0 1 822.109 330.4775)"
              className={'st17 st18 st32 ' + styles.hoverable}
            >
              FULL PHASE DESCRIPTION
            </text>
          </Tippy>
          <rect
            x="795.9"
            y="482.5"
            className="st16"
            width="128.8"
            height="8.9"
          />
          <Tippy
            content={phasesContent.phase_3}
            allowHTML={true}
            maxWidth={'30rem'}
            theme={'light'}
            placement={'bottom'}
            offset={[-30, 10]}
          >
            <text
              transform="matrix(1 0 0 1 822.109 488.3611)"
              className={'st17 st18 st32 ' + styles.hoverable}
            >
              FULL PHASE DESCRIPTION
            </text>
          </Tippy>
          <rect
            x="795.9"
            y="640.2"
            className="st16"
            width="128.8"
            height="8.9"
          />
          <Tippy
            content={phasesContent.phase_2}
            allowHTML={true}
            maxWidth={'30rem'}
            theme={'light'}
            placement={'bottom'}
            offset={[-30, 10]}
          >
            <text
              transform="matrix(1 0 0 1 822.109 646.0449)"
              className={'st17 st18 st32 ' + styles.hoverable}
            >
              FULL PHASE DESCRIPTION
            </text>
          </Tippy>
          <rect
            x="795.9"
            y="770.7"
            className="st16"
            width="128.8"
            height="8.9"
          />
          <Tippy
            content={phasesContent.phase_1}
            allowHTML={true}
            maxWidth={'30rem'}
            theme={'light'}
            placement={'bottom'}
            offset={[-30, 10]}
          >
            <text
              transform="matrix(1 0 0 1 822.109 776.5244)"
              className={'st17 st18 st32 ' + styles.hoverable}
            >
              FULL PHASE DESCRIPTION
            </text>
          </Tippy>
        </g>
        <g
          id="protecting"
          onClick={() => {
            setActiveTab('protecting')
          }}
        >
          <path
            className={activeTab === 'protecting' ? 'st26' : 'st33'}
            d="M963,0H796c-5,0-9,4-9,9v64h185V9C972,4,968,0,963,0z"
          />
          <rect x="859.2" y="16.6" className="st16" width="94" height="48.4" />
          <text transform="matrix(1 0 0 1 859.2266 27.3433)">
            <tspan
              x="0"
              y="0"
              className={
                activeTab === 'protecting' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Protecting{' '}
            </tspan>
            <tspan
              x="0"
              y="16.4"
              className={
                activeTab === 'protecting' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              At-Risk{' '}
            </tspan>
            <tspan
              x="0"
              y="32.8"
              className={
                activeTab === 'protecting' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Populations
            </tspan>
          </text>
          <circle className="st20" cx="821.5" cy="36.5" r="25.5" />
          <path
            className="st34"
            d="M830.7,33c-0.7,0.7-1.2,1.3-1.5,1.6l-9.8-0.8c0-0.1,0-0.2,0-0.3c0.2-1,0.4-2.1,0.7-3.1
    c0.2-0.7,0.5-1.3,0.9-1.9c0.4-0.5,0.8-0.7,1.4-0.7c0.2,0,0.4,0.1,0.6,0.2c1.2,1.1,2.7,1.1,3.9,0c0.3-0.3,0.7-0.3,1.1-0.3
    c0.5,0.1,0.9,0.4,1.2,0.9c0.4,0.6,0.7,1.3,0.9,2C830.4,31.4,830.6,32.2,830.7,33z M827.8,24.6c-0.1-1-0.6-1.9-1.5-2.5
    c-0.4-0.3-0.9-0.4-1.4-0.4c-0.6,0.1-1.2,0.3-1.6,0.8c-0.7,0.7-1,1.7-0.9,2.7c0.1,1,0.5,1.9,1.4,2.5c0.4,0.3,0.9,0.5,1.4,0.5
    c0.7,0,1.3-0.3,1.8-0.8c0.6-0.7,0.9-1.5,0.9-2.4C827.8,24.8,827.8,24.7,827.8,24.6z M837.2,31.6c-1-1-2.7-1-3.9,0.2
    c-0.9,0.9-1.8,1.8-2.7,2.6c-0.1,0.1-0.2,0.2-0.3,0.3c0.9,0.5,1.8,1.3,1.8,2.7c-0.1,1.4-1.1,2.6-2.3,2.8c-0.6,0.1-1.9,0.1-3.4,0.1
    c-2.9,0-6.4-0.1-6.7-0.1c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.3-0.5,0.5-0.5c0.1,0,8.4,0.2,10,0c0.5-0.1,1.2-0.9,1.3-1.8
    c0-0.8-0.4-1.4-1.4-1.8c-0.1,0-0.3-0.1-0.5-0.1c-4-0.3-8.1-0.7-12.1-1c-0.8-0.1-1.5,0.2-2,0.7c-1.8,1.8-3.6,3.5-5.4,5.3
    c-0.4,0.4-0.5,0.7,0,1.2c1.7,1.7,3.4,3.3,5,5c0.4,0.4,0.7,0.4,1,0c1.3-1.9,3.3-2.1,5.3-2.2c2.5-0.2,4.9-0.4,7.3-0.7
    c0.8-0.1,1.5-0.5,2-1c2.2-2.5,4.5-4.9,6.7-7.4C838.2,34.2,838.3,32.6,837.2,31.6z M812.2,51.4c0.9,0,2.4-1.1,2.7-2
    c0.3-0.8-0.1-1.5-0.7-2c-1.8-1.8-3.6-3.6-5.4-5.4c-1-1-1.8-1-2.8,0c-0.2,0.2-0.5,0.5-0.7,0.7c-0.6,0.7-0.7,1.5,0,2.2c2,2,4,4,6,6
    C811.6,51.2,812,51.4,812.2,51.4z"
          />
        </g>
        <g
          id="healthcare"
          onClick={() => {
            setActiveTab('healthcare')
          }}
        >
          <path
            className={activeTab === 'healthcare' ? 'st26' : 'st33'}
            d="M766,0H599c-5,0-9,4-9,9v64h185V9C775,4,771,0,766,0z"
          />
          <text transform="matrix(1 0 0 1 664.7705 38.2539)">
            <tspan
              x="0"
              y="0"
              className={
                activeTab === 'healthcare' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Healthcare{' '}
            </tspan>
            <tspan
              x="0"
              y="16.4"
              className={
                activeTab === 'healthcare' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Readiness
            </tspan>
          </text>
          <circle className="st20" cx="625.5" cy="36.5" r="25.5" />
          <path
            className="st34"
            d="M639,26.2v1.5c0,0.1-0.1,0.2-0.2,0.2H637v1.8c0,0.1-0.1,0.2-0.2,0.2h-1.5c-0.1,0-0.2-0.1-0.2-0.2V28h-1.8
    c-0.1,0-0.2-0.1-0.2-0.2v-1.5c0-0.1,0.1-0.2,0.2-0.2h1.8v-1.8c0-0.1,0.1-0.2,0.2-0.2h1.5c0.1,0,0.2,0.1,0.2,0.2V26h1.8
    C638.9,26,639,26.1,639,26.2z M617.1,34.2c-0.3,0.3-0.1,0.4,0.9,1.2c1.2,0.9,2.1,2.1,2.8,3.5c0.3,0.6,0.6,0.8,1.2,0.8
    c2.7,0,5.4,0,8.1,0c0,0,0,0,0,0c2.7,0,5.5,0,8.2,0c0.2,0,0.4-0.2,0.4-0.4c-0.1-1.4-0.8-2.4-2-3.1c-0.8-0.4-1.6-0.4-2.5-0.5
    c-2.7-0.1-5.4,0.1-8.1-0.2c-0.8-0.1-1.6,0-2.4,0.1c-0.3,0-0.5,0-0.7-0.2c-0.4-0.4-0.8-0.9-1.1-1.3c-0.5-0.6-1.2-1-2-1.1
    C618.4,32.8,617.8,33.6,617.1,34.2z M629.6,27.1c0-3.3,2.7-6,5.8-6.1c3.4-0.1,6.3,2.7,6.3,6.1c0,3.2-2.5,6-6,6.1
    C632.3,33.2,629.6,30.5,629.6,27.1z M631.1,27.1c0,2.6,2.1,4.5,4.6,4.5c2.5,0,4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5
    C633.3,22.5,631.1,24.3,631.1,27.1z M614.9,37.1c0,0.8,0,1.5,0,2.3c0,0.2,0,0.3,0.3,0.3c1.4,0,2.8,0,4.2,0c0.1,0,0.2,0,0.2,0
    c0-0.1,0-0.1-0.1-0.2c-0.2-0.2-0.4-0.5-0.6-0.7c-1.2-1.4-2.3-2.7-3.5-4.1c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0.1-0.1,0.2-0.1,0.4
    C614.9,35.6,614.9,36.4,614.9,37.1C614.9,37.1,614.9,37.1,614.9,37.1z M616.2,33.2c1.5,0,2.8-1.2,2.8-2.8c0-1.6-1.2-2.8-2.8-2.8
    c-1.5,0-2.8,1.3-2.8,2.8C613.4,31.9,614.7,33.2,616.2,33.2z M641.6,42c0,2.3,0,4.7,0,7c0,0.2,0,0.3,0,0.5c-0.1,0.5-0.5,0.9-1,0.9
    c-0.5,0-0.9-0.3-1-0.9c-0.1-0.4-0.1-0.8,0-1.1c0-0.2-0.2-0.4-0.4-0.4c-4,0-8.1,0-12.1,0c0,0,0,0,0,0c-4,0-8,0-12.1,0
    c-0.4,0-0.4,0-0.4,0.4c0,0.3,0,0.6,0,0.9c0,0.6-0.5,1-1,1.1c-0.6,0-1.1-0.4-1.2-1c-0.1-0.6,0-1.2,0-1.8c0-3.9,0-7.8,0-11.7
    c0-0.2,0-0.4,0-0.5c0.1-0.6,0.6-1.1,1.1-1c0.6,0,1.1,0.5,1.1,1.1c0,1.4,0,2.7,0,4.1c0,0.3,0,0.7,0,1c0,0.2,0.1,0.4,0.4,0.4
    c1.6,0,3.2,0,4.9,0c6.4,0,12.9,0,19.3,0c0.4,0,0.4,0,0.4-0.4c0-0.5,0-0.9,0-1.4c0.1-0.6,0.5-0.9,1.1-0.9c0.5,0,0.9,0.4,1,0.9
    C641.7,40.1,641.6,41,641.6,42z M639.6,45.5c0-0.6,0-1.2,0-1.7c0-0.4,0-0.4-0.4-0.7l-12.5,0h-1c-3.8,0.3-7.7,0.3-11.5,0.3
    c-0.3,0-0.4,0.1-0.4,0.4c0,0.6,0,1.1,0,1.7c0,0.4,0,0.4,0.4,0.6h11.7c4.4-0.1,8.9-0.1,13.3-0.1C639.5,45.9,639.6,45.8,639.6,45.5z"
          />
        </g>
        <g
          id="case"
          onClick={() => {
            setActiveTab('case')
          }}
        >
          <path
            className={activeTab === 'case' ? 'st26' : 'st33'}
            d="M569,0H402c-5,0-9,4-9,9v64h185V9C578,4,574,0,569,0z"
          />
          <text transform="matrix(1 0 0 1 459.3008 26.3418)">
            <tspan
              x="0"
              y="0"
              className={
                activeTab === 'case' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Case &amp;{' '}
            </tspan>
            <tspan
              x="0"
              y="16.4"
              className={
                activeTab === 'case' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Contact{' '}
            </tspan>
            <tspan
              x="0"
              y="32.8"
              className={
                activeTab === 'case' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Investigations
            </tspan>
          </text>
          <circle className="st20" cx="429.5" cy="36.5" r="25.5" />
          <path
            className="st34"
            d="M429.7,32.1c-1.2,0-2.3-0.3-3.3-0.9c-1.8-1.1-2.9-3.1-2.9-5.2c0-3.4,2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2
    c0,2.1-1.1,4.1-2.9,5.2C432,31.7,430.8,32.1,429.7,32.1z M430,22c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2
    C432,22.9,431.1,22,430,22z M431.7,26l-4.2,0c-0.7,0-1.3,0.6-1.3,1.4l0.3,2.4c0.9,0.6,2,0.9,3.1,0.9c1.2,0,2.2-0.3,3.1-0.9l0.2-2.4
    C433,26.6,432.5,26,431.7,26z M425,33.6c-0.4-0.2-0.7-0.5-1-0.8l-1.3,1.9l-0.9-0.6L422,37l2.6-0.9l-0.9-0.6L425,33.6z M441.9,50.5
    c-1.2,0-2.3-0.3-3.3-0.9c-1.8-1.1-2.9-3.1-2.9-5.2c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2c0,2.1-1.1,4.1-2.9,5.2
    C444.2,50.2,443.1,50.5,441.9,50.5z M442,40c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C444,40.9,443.1,40,442,40z M444,45
    l-4.2,0c-0.7,0-1.3,0.6-1.3,1.4l0.3,2.4c0.9,0.6,2,0.9,3.1,0.9c1.2,0,2.2-0.3,3.1-0.9l0.2-2.4C445.3,45.6,444.7,45,444,45z
     M418,50.5c-1.2,0-2.3-0.3-3.3-0.9c-1.8-1.1-2.9-3.1-2.9-5.2c0-3.4,2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2c0,2.1-1.1,4.1-2.9,5.2
    C420.3,50.2,419.2,50.5,418,50.5z M418,40c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C420,40.9,419.1,40,418,40z M420.1,45
    l-4.2,0c-0.7,0-1.3,0.6-1.3,1.4l0.3,2.4c0.9,0.6,2,0.9,3.1,0.9c1.2,0,2.2-0.3,3.1-0.9l0.2-2.4C421.3,45.6,420.8,45,420.1,45z
     M435.2,35.7l-0.9,0.6l2.6,0.9l0.2-2.8l-0.9,0.6l-1.3-1.9c-0.3,0.3-0.6,0.6-1,0.8L435.2,35.7z"
          />
        </g>
        <g
          id="testing"
          onClick={() => {
            setActiveTab('testing')
          }}
        >
          <path
            className={activeTab === 'testing' ? 'st26' : 'st33'}
            d="M373,0H206c-5,0-9,4-9,9v64h185V9C382,4,378,0,373,0z"
          />
          <text transform="matrix(1 0 0 1 262.8232 25.3887)">
            <tspan
              x="0"
              y="0"
              className={
                activeTab === 'testing' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Diagnostic
            </tspan>
            <tspan
              x="0"
              y="16.4"
              className={
                activeTab === 'testing' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Testing &amp;{' '}
            </tspan>
            <tspan
              x="0"
              y="32.8"
              className={
                activeTab === 'testing' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Surveillance
            </tspan>
          </text>
          <circle className="st20" cx="227.5" cy="36.5" r="25.5" />
          <path
            className="st34"
            d="M244.1,50.7c-1-1.3-2.1-2.5-3.1-3.8c-0.3-0.4-0.3-0.6,0-1c1.6-2.1,2.2-4.4,1.8-7c-0.8-5-5.3-8.3-10.4-7.6
      c-4.5,0.6-7.8,4.4-7.8,9c0,0.5,0,1,0.1,1.4c0.9,6.1,7.8,9.5,13.2,6.7c0.4-0.2,0.6-0.2,0.9,0.2c1,1.3,2.1,2.6,3.1,3.9
      c0.3,0.3,0.4,0.3,0.7,0.1c0.5-0.4,0.9-0.8,1.4-1.1C244.4,51.2,244.4,51,244.1,50.7z M229.1,44.2c-0.3,0.2-0.5,0.2-0.8-0.1
      c-2.2-3-1.2-7.6,2-9.4c0.3-0.2,0.5-0.1,0.7,0.2c0.7,1,1,2.2,1,4.1C232,40.8,231.1,42.7,229.1,44.2z M233.8,46.9
      c-0.9,0-1.8-0.2-2.7-0.6c-0.3-0.1-0.5-0.2-0.1-0.6c2.3-2,3.5-4.5,3.5-7.5c0-1.4-0.3-2.7-1-3.9c-0.3-0.5-0.3-0.5,0.3-0.5
      c3.3,0,6.1,2.6,6.5,5.9C240.7,43.9,237.3,47,233.8,46.9z M223.5,40.4c0,2.4,0.8,4.6,2.2,6.3c-0.1,0-0.2,0-0.3,0
      c-0.1,0-0.1,0-0.2,0c-3.6-0.2-6.9-3.1-7.5-6.7c-0.5-2.5,0.1-4.7,1.6-6.6c2.8-3.7,5.7-8.9,6.1-9.7c0.1-0.3,0.4-0.6,0.6-0.6
      c0.3,0,0.5,0.3,0.7,0.6c0.3,0.6,2.2,3.8,4.1,6.9C226.6,31.9,223.5,35.8,223.5,40.4z"
          />
        </g>
        <g
          id="infection"
          onClick={() => {
            setActiveTab('infection')
          }}
        >
          <path
            className={activeTab === 'infection' ? 'st26' : 'st33'}
            d="M176,0H9C4,0,0,4,0,9l0,64h185V9C185,4,181,0,176,0z"
          />
          <text transform="matrix(1 0 0 1 76.313 32.0596)">
            <tspan
              x="0"
              y="0"
              className={
                activeTab === 'infection' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Infection{' '}
            </tspan>
            <tspan
              x="0"
              y="16.4"
              className={
                activeTab === 'infection' ? 'st20 st35 st36' : 'st34 st35 st36'
              }
            >
              Rate
            </tspan>
          </text>
          <circle className="st20" cx="41.5" cy="38.5" r="25.5" />
          <path
            className="st34"
            d="M54.5,39.2c0,0.6-0.5,1.1-1.1,1.1c-0.5,0-0.9-0.3-1.1-0.3h-2.1c-0.1,0.8-0.4,2.1-1,3.1l1.7,1
      c0.4-0.4,1.1-0.5,1.6-0.2c0.7,0.4,0.9,1.3,0.5,1.9c-0.4,0.7-1.3,0.9-1.9,0.5c-0.5-0.3-0.8-0.9-0.7-1.5l-1.7-1
      c-0.7,1-1.6,1.9-2.7,2.6l1.1,1.9c0.5-0.1,0.9,0.1,1.2,0.5c0.3,0.5,0.1,1.2-0.4,1.6s-1.2,0.1-1.6-0.4c-0.2-0.4-0.2-0.9,0.1-1.3
      l-1.1-1.9c-1.1,0.6-2.3,0.9-3.5,1v2.1c0.5,0.2,0.9,0.7,0.9,1.3c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4
      c0-0.6,0.4-1.1,0.9-1.3v-2.1c-1.2-0.1-2.4-0.4-3.5-1l-1.1,1.9c0.3,0.4,0.4,0.9,0.1,1.3c-0.3,0.5-1,0.7-1.6,0.4s-0.7-1-0.4-1.6
      c0.2-0.4,0.7-0.6,1.2-0.5l1.1-1.9c-1.1-0.7-2-1.5-2.7-2.6l-1.7,1c0.1,0.6-0.1,1.2-0.7,1.5c-0.7,0.4-1.5,0.2-1.9-0.5
      c-0.4-0.7-0.2-1.5,0.5-1.9c0.5-0.3,1.2-0.2,1.6,0.2l1.7-1c-0.6-1.1-0.9-2.3-1-3.1h-2.1c-0.2,0-0.6,0.3-1.1,0.3
      c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.5,0,0.9,0.3,1.1,1h2c0-1.5,0.4-2.7,0.9-3.8L32,34.2c-0.4,0.4-1.1,0.5-1.6,0.2
      c-0.7-0.4-0.9-1.3-0.5-1.9s1.3-0.9,1.9-0.5c0.5,0.3,0.8,0.9,0.7,1.5l1.6,0.9c0.7-1.1,1.6-2,2.7-2.7l-1-1.7
      c-0.5,0.1-0.9-0.1-1.2-0.5c-0.3-0.5-0.1-1.2,0.4-1.6c0.5-0.3,1.2-0.1,1.6,0.4c0.2,0.4,0.2,0.9-0.1,1.3l1,1.7
      c1.1-0.6,2.4-0.9,3.7-1v-1.8c-0.5-0.2-0.9-0.7-0.9-1.3c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4c0,0.6-0.4,1.1-0.9,1.3v1.8
      c1.3,0.1,2.5,0.4,3.6,1l1-1.7c-0.3-0.4-0.4-0.9-0.1-1.3c0.3-0.5,1-0.7,1.6-0.4c0.5,0.3,0.7,1,0.4,1.6c-0.2,0.4-0.7,0.6-1.2,0.5
      l-1,1.7c1.1,0.7,2,1.6,2.7,2.7l1.6-0.9c-0.1-0.6,0.1-1.2,0.7-1.5c0.7-0.4,1.5-0.2,1.9,0.5s0.2,1.5-0.5,1.9
      c-0.5,0.3-1.2,0.2-1.6-0.2l-1.6,0.9c0.5,1.1,0.9,2.3,0.9,3.8h2c0.2-0.6,0.6-1,1.1-1C54,38,54.5,38.6,54.5,39.2z"
          />
        </g>
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
