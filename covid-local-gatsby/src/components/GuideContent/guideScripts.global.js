// import 'core-js'
// require('intersection-observer')
// const tippy = require('tippy.js');
import tippy from 'tippy.js'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/themes/light.css'

const initGuideScripts = () => {
  // Automatically add expand buttons where necessary
  const expandButton =
    '<button aria-label="Expand Details" class="expand-button"></button>'
  document.querySelectorAll('.expanding-boxes section').forEach(section => {
    if (section.querySelectorAll('.expand-hider').length > 0) {
      section.children[0].innerHTML += expandButton
    }
  })

  // Toggle expanding sections
  const animDuration = 500
  document
    .querySelectorAll('.expand-hider, .read-more-hider')
    .forEach(element => {
      element.style.transition = `${animDuration}ms ease`
    })

  let animEnd = undefined
  const toggleExpandHider = (hider, button) => {
    const content = hider.children[0]
    clearTimeout(animEnd)

    if (button.getAttribute('aria-label') === 'Expand Details') {
      button.setAttribute('aria-label', 'Collapse Details')
      hider.hidden = false
      hider.style.height = content.offsetHeight + 'px'

      animEnd = setTimeout(() => {
        hider.style.height = 'auto'
      }, animDuration)
    } else {
      button.setAttribute('aria-label', 'Expand Details')
      hider.style.height = content.offsetHeight + 'px'

      // setTimeout zero to kick it to the end of the callback queue...
      // I feel like requestAnimationFrame should be enough here?
      setTimeout(() => {
        // window.requestAnimationFrame(() => {
        hider.style.height = '0px'
        // });
      }, 0)

      animEnd = setTimeout(() => {
        hider.hidden = true
      }, animDuration)
    }
  }

  // Hide / show the sticky nav... this needs to be improved
  const toggleDocumentNav = () => {
    if (window.location.pathname === '/guide/') {
      const documentNav = document.querySelector('.document-nav')

      documentNav.style.height === '0px'
        ? (documentNav.style.height = '5rem')
        : (documentNav.style.height = '0px')
    }
  }

  // Update sticky navbar
  const updateDocumentNav = number => {
    const documentNav = document.querySelector('.document-nav')

    // console.log('updateDocumentNav: ' + number);

    if (number === '91') {
      documentNav.innerHTML = `<div class="nav-squish">
                <div class="no-number"></div>
                <h1>METRICS FOR PHASED RE‑OPENING</h1>
            </div>`
    } else if (number === '0') {
      documentNav.innerHTML = `<div class="nav-squish">
                <div class="no-number"></div>
                <h1>INDICATORS OF PROGRESS</h1>
            </div>`
    } else if (number) {
      documentNav.innerHTML = `<div class="nav-squish">
                <div class="number">${number}</div>
                <h1>KEY OBJECTIVE #${number}</h1>
            </div>`
    } else {
      documentNav.innerHTML = `<div class="nav-squish">
                <div class="no-number"></div>
            </div>`
    }
  }

  // Expand button click handler
  document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation()

      const button = event.target
      const hider = button.parentElement.parentElement.children[1]

      toggleExpandHider(hider, button)
    })
  })

  // first section click handler
  document.querySelectorAll('.first-section').forEach(section => {
    section.addEventListener('click', event => {
      const hider = event.target.parentElement.querySelector('.expand-hider')
        ? event.target.parentElement.querySelector('.expand-hider')
        : event.target.parentElement.parentElement.querySelector(
            '.expand-hider'
          )

      const button = hider.parentElement.querySelector('.expand-button')

      toggleExpandHider(hider, button)
    })
  })

  // Read More button click handler
  document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation()

      const button = event.target
      const hider = button.parentElement.children[1]

      toggleExpandHider(hider, button)
    })
  })

  // Expand correct section when toc link is clicked
  document.querySelectorAll('a[href^="#action"]').forEach(link => {
    link.addEventListener('click', event => {
      const anchorID = event.target.getAttribute('href')
        ? event.target.getAttribute('href')
        : event.target.parentElement.getAttribute('href')

      const section = document.querySelector(anchorID).parentElement
      const button = section.querySelector('.expand-button')
      const hider = section.parentElement.querySelector('.expand-hider')

      // Not using the toggle handler so to skip the animation
      hider.style.height = 'auto'
      hider.hidden = false
      button.setAttribute('aria-label', 'Collapse Details')

      // This is a horrible horrible hack to deal with
      // the intersectionObserver only using the top of
      // the window, not the top of the nav...
      setTimeout(() => {
        const sectionNumber = anchorID.split('-')[1]
        if (sectionNumber) {
          updateDocumentNav(sectionNumber)
        } else {
          updateDocumentNav()
        }
      }, 100)
    })
  })

  // Parse #action- urls on page load so that people can send
  // links to one another and the right section will open
  if (window.location.hash.includes('action')) {
    const anchorID = window.location.hash
    const anchor = document.querySelector(anchorID)
    const section = anchor.parentElement
    const button = section.querySelector('.expand-button')
    const hider = section.parentElement.querySelector('.expand-hider')

    // Not using the toggle handler so that we skip the animation
    hider.style.height = 'auto'
    hider.hidden = false
    button.setAttribute('aria-label', 'Collapse Details')

    // This is a horrible hack to deal with
    // the intersectionObserver only using the top of
    // the window, not the top of the nav
    setTimeout(() => {
      const sectionNumber = anchorID.split('-')[1]
      if (sectionNumber === '91') {
        updateDocumentNav('-1')
      } else if (sectionNumber > 0) {
        updateDocumentNav(sectionNumber)
      } else {
        updateDocumentNav()
      }

      // This fixes the bug where you can get the navbar inverted
      // by refreshing a url with a has while scrolled to the top
      // of the page.
      const expandBoxesRect = section.parentElement.parentElement.getBoundingClientRect()
      if (expandBoxesRect.top < 0) {
        toggleDocumentNav()
      }
    }, 100)
  }

  // fake "checkbox" click handler
  document.querySelectorAll('.expand-area li').forEach(item => {
    item.addEventListener('click', event => {
      const rect = event.target.getBoundingClientRect()
      const elemX = event.clientX - rect.left
      if (elemX < -20) {
        // need to add modal popup
        alert(
          'To fill out the checklist, please ' +
            'download the printable version at the ' +
            'top of this page.'
        )
        // 'download it here: (this alert is a '+
        // 'placeholder for a modal popup I will'+
        // ' build in a bit...)')
      }
    })
  })

  // calculate which sections are onscreen any time an intersection
  // event gets fired; I'm using intersectionObserver because it
  // produces only the events I need instead of listening to scroll
  // events, so this should be way more performant

  // this needs to check whether the sections are open and only trigger
  // the document nav when there are open sections on-screen
  let onScreen = []
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    if (window.location.pathname === '/guide/') {
      const newOnScreen = entries
        .filter(entry => entry.isIntersecting)
        .map(entry =>
          entry.target
            .querySelector('.number, .no-number')
            .getAttribute('data-number')
        )

      const newOffScreen = entries
        .filter(entry => !entry.isIntersecting)
        .map(entry =>
          entry.target
            .querySelector('.number, .no-number')
            .getAttribute('data-number')
        )

      onScreen = onScreen
        .concat(newOnScreen)
        .filter(section => !newOffScreen.includes(section))
        .sort()

      updateDocumentNav(onScreen[0])
    }
  })

  document.querySelectorAll('.expanding-boxes section').forEach(section => {
    sectionObserver.observe(section)
  })

  // // This isn't safe, due to asychronous event handling...
  // const allSectionsCollapsed = () => {
  //  return Array.from(document.querySelectorAll('.expand-button'))
  //      .filter(button => button
  //          .getAttribute('aria-label') === 'Collapse Details')
  //          .length < 1;
  // };

  // open the document nav after the first section has passed
  const headerObserver = new IntersectionObserver((entries, observer) => {
    toggleDocumentNav()
  })

  headerObserver.observe(document.querySelector('.introduction-header'))

  // Build radio buttons
  let radioCount = 0
  document
    .querySelectorAll('.implementation-metrics .radio, .criteria .radio')
    .forEach(div => {
      radioCount += 1
      div.innerHTML += `<input type="radio" id="y${radioCount}" name="r${radioCount}">
        <label for="y${radioCount}">yes</label>
        <input type="radio" id="n${radioCount}" name="r${radioCount}">
        <label for="n${radioCount}">no</label>`
    })

  // radio button event listener
  document.querySelectorAll('.implementation-metrics input').forEach(input => {
    input.addEventListener('click', event => {
      const results = Array.from(
        document.querySelectorAll('.implementation-metrics input:first-of-type')
      )
      const sum = results
        .map(input => (input.checked ? 1 : 0))
        .reduce((a, b) => a + b)
      const percent = (sum / results.length) * 100

      document.querySelector(
        '.implementation-metrics h3'
      ).innerHTML = `Progress: ${percent.toFixed()}%`
    })
  })

  // criteria radio button event listener
  document.querySelectorAll('.criteria input').forEach(input => {
    input.addEventListener('click', event => {
      const phaseTwo = Array.from(
        document.querySelectorAll(
          '.criteria [data-phase*="2"] input:first-of-type'
        )
      )
      const phaseThree = Array.from(
        document.querySelectorAll(
          '.criteria [data-phase*="3"] input:first-of-type'
        )
      )
      const phaseFour = Array.from(
        document.querySelectorAll(
          '.criteria [data-phase*="4"] input:first-of-type'
        )
      )

      const phaseTwoSum = phaseTwo
        .map(input => (input.checked ? 1 : 0))
        .reduce((a, b) => a + b)
      const phaseTwoPercent = (phaseTwoSum / phaseTwo.length) * 100

      const phaseThreeSum = phaseThree
        .map(input => (input.checked ? 1 : 0))
        .reduce((a, b) => a + b)
      const phaseThreePercent = (phaseThreeSum / phaseThree.length) * 100

      const phaseFourSum = phaseFour
        .map(input => (input.checked ? 1 : 0))
        .reduce((a, b) => a + b)
      const phaseFourPercent = (phaseFourSum / phaseFour.length) * 100

      const output = document.querySelectorAll('.criteria > h4')
      output[0].innerHTML = `Progress: &nbsp;&nbsp;&nbsp; <span style="font-weight: 400;">Phase 2:</span> ${phaseTwoPercent.toFixed()}%`
      output[1].innerHTML = `<span style="font-weight: 400;">Phase 3:</span> ${phaseThreePercent.toFixed()}%`
      output[2].innerHTML = `<span style="font-weight: 400;">Phase 4:</span> ${phaseFourPercent.toFixed()}%`
    })
  })
  //
  // This logic needs to match the functionality in the
  // Nav.js component; what does DRY stand for again?
  // document.querySelector('#menuButton').addEventListener('click', event => {
  //   const navbarRight = document.querySelector('.navbarRight')
  //   const navbarRightHider = document.querySelector('.navbarRightHider')
  //
  //   if (navbarRightHider.style.height === '0px') {
  //     navbarRightHider.style.height = navbarRight.offsetHeight + 30 + 'px'
  //     navbarRightHider.style.padding = '15px'
  //   } else {
  //     navbarRightHider.style.height = '0px'
  //     navbarRightHider.style.padding = '0 15px'
  //   }
  // })

  // Activate tooltip library
  tippy('[data-tippy-content]', {
    allowHTML: true,
    maxWidth: '65rem',
    placement: 'bottom',
    interactive: true,
    offset: [0, -2],
  })

  tippy('.tippy-phases', {
    content: `
            <p><strong>Phase Definitions for Incremental Implementation (and Relaxation) of Social Distancing Measures</strong></p>
            <p><br/><strong>Phase 1<br/> Maximum social-distancing measures are in place</strong> and tailored to the needs of the community to reduce widespread community transmission.  Focus is on reducing person-to-person transmission and decreasing the burden on the healthcare system while bolstering preparedness capabilities in anticipation of potential future increases in transmission. </p>
            <p><br/><strong>Phase 2<br/> Initial re-opening phase</strong> should focus on safely re-opening a limited number of critically important activities that are either low risk, or for which the criticality of the activity merits accepting a moderate degree of transmission risk (with appropriate mitigation).  In general, this phase should continue to prohibit gatherings, activities than entail prolonged close contact, and/or prolonged presence in enclosed spaces. Outdoor activities are potentially feasible with appropriate distancing. Telework should continue wherever feasible.</p>
            <p><br/><strong>Phase 3<br/> Economic recovery phase</strong> should focus on widely re-opening economic and social functions once ambient transmission has declined and is being effectively suppressed. Low levels of community transmission means that functions involving moderate gatherings are possible with appropriate mitigation. Large gatherings continue to pose an excessive risk. However, activities that entail prolonged contact or presence in enclosed spaces are feasible with appropriate mitigation. Telework should continue wherever feasible.</p>
            <p><br/><strong>Phase 4<br/> New normal phase</strong> represents the maximal return to normalcy that is viable prior to herd immunity via widespread vaccination. Community transmission is well monitored and negligible; virus flare-ups are contained rapidly. Most high-risk/low criticality functions can resume.</p>
            <p><strong>Decision makers must be willing to go backwards in phases, if the data and evidence demand.</strong></p>
        `,
    allowHTML: true,
    maxWidth: '65rem',
    theme: 'light',
    placement: 'bottom-start',
    offset: [-30, 10],
  })
}

export default initGuideScripts
