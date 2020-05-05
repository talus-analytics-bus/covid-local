
import "core-js";
require('intersection-observer');
// const tippy = require('tippy.js');
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


// Automatically add expand buttons where necessary
const expandButton = '<button aria-label="Expand Details" class="expand-button"></button>'
document.querySelectorAll('.expanding-boxes section').forEach(section => {
    if (section.querySelectorAll('.expand-hider').length > 0) {
        section.children[0].innerHTML += expandButton;
    };
});

// Toggle expanding sections
const animDuration = 500;
document.querySelectorAll('.expand-hider, .read-more-hider').forEach(element => {
    element.style.transition = `${animDuration}ms ease`;
});


let animEnd = undefined;
const toggleExpandHider = (hider, button) => {
    const content = hider.children[0];
    clearTimeout(animEnd);

    if (button.getAttribute('aria-label') === "Expand Details") {

        button.setAttribute('aria-label', 'Collapse Details');
        hider.hidden = false;
        hider.style.height = content.offsetHeight + 'px';

        animEnd = setTimeout(() => {
            hider.style.height = 'auto';
        }, animDuration);

    } else {
        button.setAttribute('aria-label', 'Expand Details');
        hider.style.height = content.offsetHeight + 'px';

        // setTimeout zero to kick it to the end of the callback queue...
        // I feel like requestAnimationFrame should be enough here?
        setTimeout(() => {
            // window.requestAnimationFrame(() => {
                hider.style.height = '0px';
            // });
        }, 0);

        animEnd = setTimeout(() => {
            hider.hidden = true;
        }, animDuration);
    };
};

// Hide / show the sticky nav... this needs to be improved
const toggleDocumentNav = () => {
    const documentNav = document.querySelector('.document-nav');

    documentNav.style.height === '0px'
        ? documentNav.style.height = '5rem'
        : documentNav.style.height = '0px';	
};

// Update sticky navbar
const updateDocumentNav = (number) => {
    const documentNav = document.querySelector('.document-nav');

    if (number) {
        documentNav.innerHTML = 
            `<div class="nav-squish">
                <div class="number">${number}</div>
                <h1>KEY OBJECTIVE #${number}</h1>
            </div>`
    } else {
        documentNav.innerHTML = 
            `<div class="nav-squish">
                <div class="no-number"></div>
                <h1>INDICATORS OF PROGRESS</h1>
            </div>`
    };
};


// Expand button click handler
document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();

        const button = event.target;
        const hider = button.parentElement.parentElement.children[1];

        toggleExpandHider(hider, button)
    })
});


// first section click handler
document.querySelectorAll('.first-section').forEach(section => {
    section.addEventListener('click', event => {
        const hider = event.target.parentElement.querySelector('.expand-hider')
            ? event.target.parentElement.querySelector('.expand-hider')
            : event.target.parentElement.parentElement.querySelector('.expand-hider');

        const button = hider.parentElement.querySelector('.expand-button');

        toggleExpandHider(hider, button)
    })
});


// Read More button click handler
document.querySelectorAll('.read-more-button').forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();

        const button = event.target;
        const hider = button.parentElement.children[1];

        toggleExpandHider(hider, button);
    })
});



// Expand correct section when toc link is clicked
document.querySelectorAll('a[href^="#action"]').forEach(link => {
    link.addEventListener('click', event => {

        const anchorID = event.target.getAttribute('href')
            ? event.target.getAttribute('href')
            : event.target.parentElement.getAttribute('href');

        const section = document.querySelector(anchorID).parentElement;
        const button = section.querySelector('.expand-button');
        const hider = section.parentElement.querySelector('.expand-hider');

        // Not using the toggle handler so to skip the animation
        hider.style.height = 'auto';
        hider.hidden = false;
        button.setAttribute('aria-label', 'Collapse Details');

        // This is a horrible horrible hack to deal with 
        // the intersectionObserver only using the top of 
        // the window, not the top of the nav...
        setTimeout(() => {
            const sectionNumber = anchorID.split('-')[1]
            if (sectionNumber > 0) {
                updateDocumentNav(sectionNumber);
            } else {
                updateDocumentNav();
            }
        }, 100);
    });
});


// Parse #action- urls on page load so that people can send
// links to one another and the right section will open
if (window.location.hash.includes('action')) {

    const anchorID = window.location.hash;
    const anchor = document.querySelector(anchorID);
    const section = anchor.parentElement;
    const button = section.querySelector('.expand-button');
    const hider = section.parentElement.querySelector('.expand-hider');

    // Not using the toggle handler so that we skip the animation
    hider.style.height = 'auto';
    hider.hidden = false;
    button.setAttribute('aria-label', 'Collapse Details');

    // This is a horrible hack to deal with 
    // the intersectionObserver only using the top of 
    // the window, not the top of the nav
    setTimeout(() => {
        const sectionNumber = anchorID.split('-')[1]
        if (sectionNumber > 0) {
            updateDocumentNav(sectionNumber);
        } else {
            updateDocumentNav();
        }
        
        // This fixes the bug where you can get the navbar inverted
        // by refreshing a url with a has while scrolled to the top 
        // of the page.
        const expandBoxesRect = section.parentElement.parentElement.getBoundingClientRect()
        if (expandBoxesRect.top < 0) {
        toggleDocumentNav();
    }
    }, 100);
};

// fake "checkbox" click handler
document.querySelectorAll('.expand-area li').forEach(item => {
    item.addEventListener('click', event => {
        const rect = event.target.getBoundingClientRect();
        const elemX = event.clientX - rect.left;
        if (elemX < -20) {
            // need to add modal popup
            alert('To fill out the checklist, please '+ 
                'download the printable version at the '+
                'top of this page.')
                // 'download it here: (this alert is a '+
                // 'placeholder for a modal popup I will'+
                // ' build in a bit...)')
        };
    });
});


// calculate which sections are onscreen any time an intersection 
// event gets fired; I'm using intersectionObserver because it 
// produces only the events I need instead of listening to scroll 
// events, so this should be way more performant

// this needs to check whether the sections are open and only trigger
// the document nav when there are open sections on-screen
let onScreen = [];
const sectionObserver = new IntersectionObserver((entries, observer) => {

    const newOnScreen = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.querySelector('.number').innerHTML);

    const newOffScreen = entries
        .filter(entry => !entry.isIntersecting)
        .map(entry => entry.target.querySelector('.number').innerHTML);

    onScreen = onScreen
        .concat(newOnScreen)
        .filter(section => !newOffScreen.includes(section))
        .sort();

    updateDocumentNav(onScreen[0]);
});

document.querySelectorAll('.expanding-boxes section').forEach(section => { 
    sectionObserver.observe(section) 
});


// // This isn't safe, due to asychronous event handling...
// const allSectionsCollapsed = () => {
// 	return Array.from(document.querySelectorAll('.expand-button'))
// 		.filter(button => button
// 			.getAttribute('aria-label') === 'Collapse Details')
// 			.length < 1;
// };


// open the document nav after the first section has passed
const headerObserver = new IntersectionObserver((entries, observer) => {
    toggleDocumentNav();
});

headerObserver.observe(document.querySelector('.introduction-header'));


// Build radio buttons 
let radioCount = 0;
document.querySelectorAll('.implementation-metrics .radio').forEach(div => {
    radioCount += 1;
    div.innerHTML += 
        `<input type="radio" id="y${radioCount}" name="r${radioCount}">
        <label for="y${radioCount}">yes</label>
        <input type="radio" id="n${radioCount}" name="r${radioCount}">
        <label for="n${radioCount}">no</label>`;
});

// radio button event listener
document.querySelectorAll('.implementation-metrics input').forEach(input => {
    input.addEventListener('click', event => {

        const results = Array.from(document.querySelectorAll('.implementation-metrics input:first-of-type'));
        const sum = results.map(input => input.checked ? 1 : 0).reduce((a, b) => a + b);
        const percent = sum / results.length * 100;

        document.querySelector('.implementation-metrics h3')
            .innerHTML = `Progress: ${percent.toFixed()}%`;
    });
});

// This logic needs to match the functionality in the 
// Nav.js component; what does DRY stand for again?
document.querySelector('#menuButton')
    .addEventListener('click', event => {
        const navbarRight = document.querySelector('.navbarRight')
        const navbarRightHider = document.querySelector('.navbarRightHider')

        if (navbarRightHider.style.height === '0px') {
            navbarRightHider.style.height = navbarRight.offsetHeight + 30 + 'px';
            navbarRightHider.style.padding = '15px';
        } else {
            navbarRightHider.style.height = '0px';
            navbarRightHider.style.padding = '0 15px';
        }
    })


// Activate tooltip library
tippy('[data-tippy-content]', {
    allowHTML: true,
    maxWidth: '65rem',
    placement: 'bottom',
    interactive: true,
    offset: [0, -2]
});