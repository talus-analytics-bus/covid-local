import React from 'react'

import '../../styles/metrics/text.css'

import CovidActNowLabel from './CovidActNowLabel/CovidActNowLabel'

const InfectionText = () => (
  <>
    <CovidActNowLabel style={{ top: '26%', left: '33%' }} />
    <CovidActNowLabel style={{ top: '49.1%', left: '33%' }} />
    <CovidActNowLabel style={{ top: '68.7%', left: '33.5%' }} />

    <svg id="infectionText" x="0px" y="0px" viewBox="0 0 509.5 704.3">
      <line className="st0" x1="99.3" y1="450.3" x2="509.5" y2="450.3" />
      <line className="st0" x1="99.3" y1="487.5" x2="509.5" y2="487.5" />
      <line className="st1" x1="99.3" y1="326.3" x2="484" y2="326.3" />
      <line className="st8" x1="99.3" y1="144.5" x2="484" y2="144.5" />
      <g>
        <rect x="99.3" y="168.2" className="st2" width="296.9" height="31" />
        <text transform="matrix(1 0 0 1 99.3103 176.7517)">
          <tspan x="0" y="0" className="st3 st4 st5">
            Current estimate of &lt;1 case
          </tspan>
          <tspan x="0" y="14" className="st3 st4 st5">
            per 100,000 population per day
          </tspan>
        </text>
      </g>
      <g>
        <rect x="99.3" y="108.9" className="st2" width="296.9" height="20.6" />
        <text
          transform="matrix(1 0 0 1 99.3093 117.3874)"
          className="st3 st4 st5"
        >
          &lt;1% positive of tests conducted (daily)
        </text>
      </g>
      <line className="st1" x1="99.3" y1="285.4" x2="484" y2="285.4" />
      <rect x="99.3" y="257" className="st2" width="301.7" height="15.6" />
      <text
        transform="matrix(1 0 0 1 99.3101 265.4858)"
        className="st3 st4 st5"
      >
        Continued decline in daily cases
      </text>
      <rect x="99.3" y="301.5" className="st2" width="296.9" height="17.5" />
      <text
        transform="matrix(1 0 0 1 99.3093 309.9919)"
        className="st3 st4 st5"
      >
        &lt;3% positive of tests conducted (daily)
      </text>
      <rect x="99.3" y="341" className="st2" width="296.9" height="30.1" />
      <text transform="matrix(1 0 0 1 99.3103 349.5114)">
        <tspan x="0" y="0" className="st3 st4 st5">
          Current estimate of &lt;10 cases
        </tspan>
        <tspan x="0" y="14" className="st3 st4 st5">
          per 100,000 population per day
        </tspan>
      </text>
      <rect x="99.3" y="411.7" className="st2" width="301.7" height="27.1" />
      <text transform="matrix(1 0 0 1 99.3101 420.1881)">
        <tspan x="0" y="0" className="st3 st4 st5">
          Sustained decline in daily cases for 21 consecutive{' '}
        </tspan>
        <tspan x="0" y="14" className="st3 st4 st5">
          days, as reflected in the 5-day rolling average
        </tspan>
      </text>
      <rect x="99.3" y="464.4" className="st2" width="296.9" height="17.5" />
      <text
        transform="matrix(1 0 0 1 99.3093 472.9456)"
        className="st3 st4 st5"
      >
        &lt;10% positive of tests conducted (daily)
      </text>
      <rect x="99.3" y="496.8" className="st2" width="296.9" height="30.8" />
      <text transform="matrix(1 0 0 1 99.3103 505.2734)">
        <tspan x="0" y="0" className="st3 st4 st5">
          Current estimate of &lt;25 cases
        </tspan>
        <tspan x="0" y="14" className="st3 st4 st5">
          per 100,000 population per day
        </tspan>
      </text>
      <g>
        <rect x="20.9" y="18.1" className="st2" width="113.8" height="37.2" />
        <text transform="matrix(1 0 0 1 41.6768 26.9053)">
          <tspan x="0" y="0" className="st6 st7 st5">
            Rates &amp; New{' '}
          </tspan>
          <tspan x="-14.1" y="14" className="st6 st7 st5">
            Cases Decreasing
          </tspan>
        </text>
      </g>
      <g>
        <rect x="20.9" y="576.6" className="st2" width="113.8" height="37.2" />
        <text transform="matrix(1 0 0 1 41.6768 585.3799)">
          <tspan x="0" y="0" className="st6 st7 st5">
            Rates &amp; New{' '}
          </tspan>
          <tspan x="-11.4" y="14" className="st6 st7 st5">
            Cases Increasing
          </tspan>
        </text>
      </g>
    </svg>
  </>
)

export default InfectionText
