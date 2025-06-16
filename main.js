/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})

/*=============== chatgpt ===============*/

function openModal(planetName) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-title").innerText = planetName;

    const info = {
        Sun: {
            text: `
                <h3>Our solar system’s central star: the Sun</h3>
                <p>The Sun is the closest star to Earth, at a mean distance of 149.60 million kilometers (92.96 million miles).
                It is a huge sphere of mostly ionized gas, held together by gravitational attraction, and supports life on Earth
                by driving the seasons, ocean currents, weather, and climate.</p>
                
                <p>At the core, temperatures reach 15 million degrees Celsius, sustaining nuclear fusion that produces nearly all
                the heat and light we receive. The Sun has no solid surface; instead, it has layers including the core,
                radiative zone, convective zone, photosphere, chromosphere, and corona.</p>

                <h4>FAST FACTS</h4>
                <ul>
                    <li><strong>Spectral Type:</strong> G2V</li>
                    <li><strong>Age:</strong> 4.6 billion years</li>
                    <li><strong>Distance to Earth:</strong> 149.60 million km</li>
                    <li><strong>Rotation Period at Equator:</strong> 26.8 days</li>
                    <li><strong>Equatorial Radius:</strong> 695,500 km</li>
                    <li><strong>Mass:</strong> 1.989 × 10<sup>30</sup> kg</li>
                    <li><strong>Surface Temperature:</strong> 5,500 °C</li>
                    <li><strong>Composition:</strong> 92.1% hydrogen, 7.8% helium</li>
                    <li><strong>Luminosity:</strong> 3.83 × 10<sup>26</sup> watts</li>
                </ul>

                <h4>SIGNIFICANT DATES</h4>
                <ul>
                    <li><strong>150 CE:</strong> Ptolemy writes the Almagest (Earth-centered model).</li>
                    <li><strong>1543:</strong> Copernicus publishes heliocentric theory.</li>
                    <li><strong>1610:</strong> First telescopic observation of sunspots.</li>
                    <li><strong>1860:</strong> First recorded coronal mass ejection.</li>
                    <li><strong>2004–2011:</strong> NASA and ESA launch multiple solar observatories including STEREO and SDO.</li>
                </ul>

                <h4>ABOUT THE IMAGES</h4>
                <ol>
                    <li>Active regions spinning up bright loops above the Sun (SDO ultraviolet image).</li>
                    <li>Magnetic fields create huge coronal loops (TRACE image).</li>
                    <li>Solar wind pressure interacting with Earth’s magnetic field (not to scale).</li>
                    <li>SDO image of solar flare from June 7, 2011.</li>
                    <li>Large sunspots during 2003 (SOHO image).</li>
                </ol>

                <p style="font-size: 0.8rem;"><em>Source: NASA - solarsystem.nasa.gov/sun</em></p>
            `,
            images: [
                "assets/img/product 1.png"
            ]
        },

        Mercury: {
            text: `
                <h3>The Swiftest Planet: Mercury</h3>
                <p>Mercury is the smallest planet in our solar system and closest to the Sun. It's only slightly larger than Earth's Moon.</p>
                
                <p>From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth.</p>

                <h4>FAST FACTS</h4>
                <ul>
                    <li><strong>Diameter:</strong> 4,879 km</li>
                    <li><strong>Orbit Period:</strong> 88 Earth days</li>
                    <li><strong>Surface Temperature:</strong> -173 to 427°C</li>
                    <li><strong>Moons:</strong> None</li>
                </ul>
                <p style="font-size: 0.8rem;"><em>Source: NASA</em></p>
            `,
            images: [
                "assets/img/product 2.png"
            ]
        },

        Venus: {
            text: `
                <h3>The Mysterious Twin: Venus</h3>
                <p>Venus and Earth are similar in size, mass, density, composition, and gravity. However, Venus is covered by a thick, rapidly spinning atmosphere, creating a scorched world with surface temperatures higher than 470 degrees Celsius (880 degrees Fahrenheit).</p>
                <p>Its clouds reflect sunlight, making Venus appear as the brightest planet in the sky. Probes have shown Venus may be volcanically active today.</p>
                <p>Venus has no global magnetic field and rotates too slowly to generate one like Earth’s. It rotates “backwards” (retrograde) with hurricane-like winds reaching 360 km/h (224 mph).</p>

                <ul>
                    <li><strong>Atmosphere:</strong> Mostly carbon dioxide with clouds of sulfuric acid</li>
                    <li><strong>Surface:</strong> Mountain ranges, volcanoes, impact craters</li>
                    <li><strong>Mean Distance from Sun:</strong> 108.21 million km</li>
                    <li><strong>Orbital Period:</strong> 224.70 Earth days</li>
                    <li><strong>Rotation Period:</strong> 243.02 Earth days (retrograde)</li>
                    <li><strong>Radius:</strong> 6,052 km</li>
                    <li><strong>Gravity:</strong> 0.90 g</li>
                    <li><strong>Surface Temp:</strong> 470°C (880°F)</li>
                    <li><strong>Moons:</strong> 0</li>
                    <li><strong>Rings:</strong> 0</li>
                </ul>

                <h4>Significant Dates</h4>
                <ul>
                    <li>650 CE – Mayan astronomers observe Venus.</li>
                    <li>1761–1769 – Observations of Venus transits across the Sun.</li>
                    <li>1962 – NASA's Mariner 2 reaches Venus.</li>
                    <li>1990–1994 – NASA’s Magellan maps 98% of Venus’ surface.</li>
                    <li>2005 – ESA’s Venus Express launches.</li>
                    <li>2015 – Japan’s Akatsuki mission arrives at Venus.</li>
                </ul>
            `,
            images: [
                "assets/img/product 6.png"
            ]
        },

        Earth: {
            text: `
                <h3>Earth: Our Home Planet</h3>
                <p>Earth is the only planet in our solar system known to support life. It has a complex system of land, ocean, atmosphere, and magnetic field that work together to maintain balance.</p>

                <p>Earth’s surface is 70% water, with oceans averaging about 4 kilometers (2.5 miles) deep. Earth's tilted axis (23.45°) causes the seasons, while its atmosphere — 78% nitrogen and 21% oxygen — supports life and shields us from harmful radiation.</p>

                <p>The planet’s magnetic field, caused by a rotating, molten iron core, protects us from solar radiation and forms the aurora. Tectonic activity shapes the surface, and Earth’s biosphere is incredibly diverse.</p>

                <ul>
                    <li><strong>Mean Distance from the Sun:</strong> 149.60 million km</li>
                    <li><strong>Orbital Period:</strong> 365.26 days</li>
                    <li><strong>Rotation Period:</strong> 23.93 hours</li>
                    <li><strong>Radius:</strong> 6,378 km</li>
                    <li><strong>Mass:</strong> 5.97 × 10^24 kg</li>
                    <li><strong>Gravity:</strong> 9.8 m/s² (1.00 g)</li>
                    <li><strong>Surface Temp Range:</strong> -88 to 58°C (~-126 to 136°F)</li>
                    <li><strong>Atmosphere:</strong> Nitrogen, Oxygen</li>
                    <li><strong>Moons:</strong> 1</li>
                    <li><strong>Rings:</strong> 0</li>
                </ul>

                <h4>Significant Dates</h4>
                <ul>
                    <li>1960 – First weather satellite (TIROS).</li>
                    <li>1972 – Landsat 1 launched for Earth imaging.</li>
                    <li>1987 – Ozone hole studies begin.</li>
                    <li>1992 – TOPEX/Poseidon begins mapping sea surface height.</li>
                    <li>2002 – GRACE monitors mass variations on Earth.</li>
                    <li>2011 – Aquarius satellite launched to measure ocean salinity.</li>
                </ul>
            `,
            images: [
                "assets/img/product4.png",

            ]
        },

        Jupiter: {
            text: `
                <h3>The Giant of the Solar System: Jupiter</h3>
                <p>Jupiter is the largest and most massive planet in our solar system, containing more than twice the material of all other planets combined. It is a gas giant composed mostly of hydrogen and helium.</p>

                <p>Its colorful bands and massive storms, including the Great Red Spot, make it visually striking. The Great Red Spot is a storm larger than Earth that has been active for over 300 years.</p>

                <p>Jupiter has no solid surface, and its strong magnetic field creates a vast magnetosphere that traps radiation and charged particles. It has the largest ocean in the solar system — made of liquid hydrogen.</p>

                <p>Jupiter’s rapid rotation (just under 10 hours) creates intense weather patterns. Its powerful magnetic field and fast rotation drive electrical currents, resulting in auroras and strong radiation belts.</p>

                <ul>
                    <li><strong>Atmosphere:</strong> Mostly hydrogen and helium</li>
                    <li><strong>Surface:</strong> No solid surface; cloud bands and storms</li>
                    <li><strong>Mean Distance from Sun:</strong> 778.41 million km</li>
                    <li><strong>Orbital Period:</strong> 11.856 Earth years</li>
                    <li><strong>Rotation Period:</strong> 9.92 hours</li>
                    <li><strong>Radius:</strong> 71,492 km at equator</li>
                    <li><strong>Gravity:</strong> 2.53 g (25.9 m/s²)</li>
                    <li><strong>Effective Temp at 1 bar:</strong> –108°C (–163°F)</li>
                    <li><strong>Moons:</strong> 67 known (as of July 2013)</li>
                    <li><strong>Rings:</strong> 1 (three main components)</li>
                </ul>

                <h4>Significant Dates</h4>
                <ul>
                    <li>1610 – Galileo Galilei makes the first observations of Jupiter and its four largest moons.</li>
                    <li>1973 – Pioneer 10 becomes the first spacecraft to fly past Jupiter.</li>
                    <li>1979 – Voyager 1 and 2 discover rings and volcanic activity on Io.</li>
                    <li>1994 – Comet Shoemaker-Levy 9 impacts Jupiter.</li>
                    <li>1995–2003 – Galileo orbiter studies Jupiter and its moons.</li>
                    <li>2007 – New Horizons spacecraft captures new views of Jupiter’s storms and moons.</li>
                    <li>2009 – A comet or asteroid crashes into Jupiter creating a dark scar.</li>
                </ul>
            `,
            images: [
                "assets/img/product 3.png"
            ]
        },
        Mars: {
            text: `
                <h3>The Red Planet: Mars</h3>
                <p>Mars is about half the size of Earth and is known for its red color due to iron oxide on its surface. Although it appears barren and lifeless, Mars has a complex history and features that hint at a wetter, possibly habitable past.</p>
                
                <p>Mars has two small moons, Phobos and Deimos, believed to be captured asteroids. It experiences seasons like Earth due to its axial tilt, and its orbit is about 1.5 times farther from the Sun than Earth’s.</p>
                
                <p>It has the tallest volcano in the solar system, Olympus Mons, and a deep canyon system, Valles Marineris. Volcanism and climate change have shaped Mars over billions of years.</p>
        
                <p>Though Mars has no global magnetic field, localized magnetic regions exist. NASA missions have found signs that Mars once had flowing liquid water and possibly habitable environments. Recent rovers have detected hydrogen-rich minerals and ice beneath the surface.</p>
        
                <ul>
                    <li><strong>Atmosphere:</strong> Thin, mostly carbon dioxide with nitrogen and argon</li>
                    <li><strong>Surface:</strong> Volcanoes, valleys, deserts, polar ice caps</li>
                    <li><strong>Mean Distance from Sun:</strong> 227.94 million km</li>
                    <li><strong>Orbital Period:</strong> 1.8807 Earth years (686.98 Earth days)</li>
                    <li><strong>Rotation Period:</strong> 24.62 hr</li>
                    <li><strong>Radius:</strong> 3,397 km</li>
                    <li><strong>Gravity:</strong> 0.38 g</li>
                    <li><strong>Temperature Range:</strong> –87 to –5°C (–125 to 23°F)</li>
                    <li><strong>Moons:</strong> 2 (Phobos & Deimos)</li>
                    <li><strong>Rings:</strong> 0</li>
                </ul>
        
                <h4>Significant Dates</h4>
                <ul>
                    <li>1877 – Discovery of Mars' moons Phobos and Deimos.</li>
                    <li>1965 – Mariner 4 sends the first close-up images of another planet.</li>
                    <li>1976 – Viking 1 and 2 land on Mars.</li>
                    <li>1997 – Pathfinder and Sojourner rover land on Mars.</li>
                    <li>2004 – Rovers Spirit and Opportunity find evidence of past water.</li>
                    <li>2008 – Phoenix finds water ice and signs of possible habitability.</li>
                    <li>2012 – Curiosity rover finds conditions once suited for microbial life.</li>
                </ul>
            `,
            images: [
                "assets/img/product5.png",  // 1. Water-ice clouds and polar regions

            ]
        },
           
         Saturn: {
    text: `
        <h3>The Ringed Planet: Saturn</h3>
        <p>Saturn is the sixth planet from the Sun and was the most distant known to the ancients. In 1610, Galileo first observed it through a telescope, noting strange appendages—later understood to be rings. Its famous rings are mostly water ice and can span hundreds of thousands of kilometers, but are only about 10 meters thick.</p>

        <p>Like Jupiter, Saturn is a gas giant composed mainly of hydrogen and helium. It is 755 times the volume of Earth but far less dense. Winds on Saturn can reach speeds of 500 m/s (1,600 ft/s), far exceeding Earth's most powerful storms.</p>

        <p>Saturn’s magnetic field is smaller than Jupiter’s but still strong. The planet's core is made of rock, ice, and other elements, surrounded by layers of metallic hydrogen and gases.</p>

        <p>Saturn’s largest moon, Titan, is bigger than Mercury and has a thick atmosphere rich in nitrogen. Titan and other moons like Enceladus show promise for understanding the solar system and possibly harboring life.</p>

        <ul>
            <li><strong>Atmosphere:</strong> Hydrogen, helium</li>
            <li><strong>Surface:</strong> Gas giant – no solid surface</li>
            <li><strong>Mean Distance from Sun:</strong> 1,426,666 million km</li>
            <li><strong>Orbital Period:</strong> 29.4 Earth years</li>
            <li><strong>Rotation Period:</strong> 10.656 hours</li>
            <li><strong>Radius:</strong> 60,268 km</li>
            <li><strong>Density:</strong> 0.687 g/cm³</li>
            <li><strong>Gravity:</strong> 1.07 g (7.207 m/s²)</li>
            <li><strong>Temperature:</strong> ~ –178°C (–288°F)</li>
            <li><strong>Rings:</strong> 7 main rings (A, B, C, D, E, F, G)</li>
            <li><strong>Moons:</strong> 62+ (as of July 2013)</li>
        </ul>

        <h4>Significant Dates</h4>
        <ul>
            <li>1610 – Galileo observes Saturn’s rings (without knowing what they were).</li>
            <li>1979 – Pioneer 11 flies by Saturn, traveling through outer rings.</li>
            <li>1980–1981 – Voyager 1 and 2 study Saturn’s moons and rings.</li>
            <li>1994 – Hubble captures atmospheric features on Saturn.</li>
            <li>2004 – Cassini-Huygens enters Saturn orbit.</li>
            <li>2005 – Huygens probe lands on Titan, sending images and data.</li>
            <li>2005–2008 – Cassini continues sending detailed images and data.</li>
            <li>2009 – Cassini images Saturn’s equinox and ring shadows.</li>
            <li>2010–2017 – Cassini's mission is extended and ends with a final dive into Saturn.</li>
        </ul>
    `,
    images: [
        "assets/img/product 7.png",  // 1. True-color image from Cassini

    ]
         },
         Neptune: {
            text: `
                <h3>The Distant Ice Giant: Neptune</h3>
                <p>Neptune is the farthest known planet in the solar system and was the first discovered through mathematical predictions, not direct observation. It was found in 1846, and just 17 days later, its largest moon, Triton, was discovered.</p>
        
                <p>Orbiting the Sun every 164.79 Earth years at nearly 4.5 billion kilometers (2.8 billion miles) away, Neptune is invisible to the naked eye. The planet has a highly tilted magnetic field, 27 times stronger than Earth’s, and its rotation period is around 16 hours.</p>
        
                <p>Neptune’s atmosphere consists of hydrogen, helium, and methane, giving it a vivid blue color. It is the windiest planet in the solar system, with storms that can exceed 2,000 km/h (1,200 mph), including the famous “Great Dark Spot” captured by Voyager 2 in 1989.</p>
        
                <p>The planet has 6 narrow rings and 13 confirmed moons, including Triton, which orbits in the opposite direction of Neptune's rotation and is believed to be a captured object. Triton's surface is icy and cold, around –235°C (–391°F).</p>
        
                <ul>
                    <li><strong>Atmosphere:</strong> Hydrogen, helium, methane</li>
                    <li><strong>Surface:</strong> Ice giant with no solid surface</li>
                    <li><strong>Mean Distance from Sun:</strong> 4,498.25 million km</li>
                    <li><strong>Orbital Period:</strong> 164.79 Earth years</li>
                    <li><strong>Rotation Period:</strong> 16.11 hours</li>
                    <li><strong>Radius:</strong> 24,764 km</li>
                    <li><strong>Mass:</strong> 1.0174 × 10²⁶ kg</li>
                    <li><strong>Density:</strong> 1.64 g/cm³</li>
                    <li><strong>Gravity:</strong> 1.14 g (10.17 m/s²)</li>
                    <li><strong>Temperature:</strong> ~ –214°C (–353°F)</li>
                    <li><strong>Rings:</strong> 6 (Galle, Arago, Lassell, Le Verrier, unnamed ring, Adams)</li>
                    <li><strong>Moons:</strong> 13 known (as of July 2013)</li>
                </ul>
        
                <h4>Significant Dates</h4>
                <ul>
                    <li>1846 – Neptune is discovered using mathematical predictions.</li>
                    <li>1989 – Voyager 2 becomes the only spacecraft to visit Neptune.</li>
                    <li>1998 – Scientists image Neptune's rings and arcs from Earth.</li>
                    <li>2001 – Neptune completes its first full orbit since discovery.</li>
                    <li>2005 – Observatories discover new moons and ring degradation.</li>
                    <li>2013 – A 14th moon is discovered using archived Hubble data.</li>
                </ul>
            `,
            images: [
                "assets/img/product 8.png",  // 1. Voyager 2 image of Neptune

            ]
        },
        Uranus: {
            text: `
                <h3>The Tilted Ice Giant: Uranus</h3>
                <p>Uranus was discovered in 1781 by William Herschel with the aid of a telescope, making it the first planet found that way. Originally thought to be a comet or star, it was later confirmed as a planet. Uranus takes 84 Earth years to complete one orbit around the Sun.</p>
        
                <p>Unlike any other planet, Uranus rotates on its side — its axis is tilted about 98 degrees. This leads to extreme seasonal variations, with each pole getting about 42 years of continuous sunlight or darkness.</p>
        
                <p>Voyager 2, the only spacecraft to visit Uranus, imaged the planet in 1986. It found Uranus bland-looking, though more recent Hubble images reveal complex weather patterns, dynamic clouds, and even a possible Great Dark Spot.</p>
        
                <p>Uranus has a mostly hydrogen and helium atmosphere with methane that gives it a blue-green color. Methane absorbs red light and reflects blue. The planet’s core is small, while most of its mass is an icy fluid mix of water, ammonia, and methane.</p>
        
                <p>Uranus has at least 27 moons, many named after Shakespearean characters. The planet has 13 known rings, discovered in 1977, with more distant faint rings detected by Hubble in the 2000s.</p>
        
                <ul>
                    <li><strong>Atmosphere:</strong> Hydrogen, helium, methane</li>
                    <li><strong>Surface:</strong> Ice giant with no solid surface</li>
                    <li><strong>Mean Distance from Sun:</strong> 2,870.97 million km</li>
                    <li><strong>Orbital Period:</strong> 84.02 Earth years</li>
                    <li><strong>Rotation Period:</strong> 17.24 hours (retrograde)</li>
                    <li><strong>Radius:</strong> 25,559 km</li>
                    <li><strong>Mass:</strong> 8.681 × 10²⁵ kg</li>
                    <li><strong>Density:</strong> 1.27 g/cm³</li>
                    <li><strong>Gravity:</strong> 0.89 g (8.69 m/s²)</li>
                    <li><strong>Temperature:</strong> ~ –216°C (–357°F)</li>
                    <li><strong>Rings:</strong> 13 (Zeta, Six, Five, Four, Alpha, Beta, Eta, Gamma, Delta, Lambda, Epsilon, Nu, Mu)</li>
                    <li><strong>Moons:</strong> 27 known</li>
                </ul>
        
                <h4>Significant Dates</h4>
                <ul>
                    <li>1781 – Uranus discovered by William Herschel.</li>
                    <li>1977 – Rings of Uranus discovered.</li>
                    <li>1986 – Voyager 2 flies by Uranus.</li>
                    <li>2003–2005 – Hubble finds two more rings and two new moons.</li>
                    <li>2007 – Uranus reaches equinox.</li>
                </ul>
            `,
            images: [
                "assets/img/product 9.png",  // 1. Hubble image showing bands and a dark spot

            ]
        },
        Moon: {
            text: `
                <h3>Earth’s Companion: The Moon</h3>
                <p>Earth's only natural satellite, the Moon, has influenced calendars, tides, and mythology for millennia. It rotates on its axis at the same rate that it orbits Earth — resulting in the same side always facing us (synchronous rotation).</p>
        
                <p>The Moon’s surface features highlands and darker regions called maria, which are ancient impact basins filled with solidified lava. The contrast in light and dark areas reveals a history of impacts, volcanism, and geological activity.</p>
        
                <p>The leading theory of the Moon’s formation suggests it resulted from a giant impact between Earth and a Mars-sized body about 4.5 billion years ago. The debris formed the Moon, which was initially molten and gradually solidified into crust and mantle layers.</p>
        
                <p>The Moon has no atmosphere, so its surface remains largely unchanged. With no weather or erosion, its craters and features are preserved for billions of years. Its surface is covered in regolith: a powdery mix of dust and broken rock.</p>
        
                <p>NASA's Apollo missions landed 12 astronauts on the Moon between 1969 and 1972. They brought back 382 kilograms (842 pounds) of lunar rocks. Recent missions by various countries continue to study the Moon's surface, search for water ice, and map it in detail.</p>
        
                <ul>
                    <li><strong>Distance from Earth:</strong> 384,400 km</li>
                    <li><strong>Orbital Period:</strong> 27.32 Earth days</li>
                    <li><strong>Rotation Period:</strong> 27.32 Earth days</li>
                    <li><strong>Radius:</strong> 1,737.4 km</li>
                    <li><strong>Mass:</strong> 0.0123 of Earth’s mass</li>
                    <li><strong>Density:</strong> 3.341 g/cm³</li>
                    <li><strong>Gravity:</strong> 0.166 g (1.62 m/s²)</li>
                    <li><strong>Temperature Range:</strong> –248 to 123°C (–414 to 253°F)</li>
                </ul>
        
                <h4>Significant Dates</h4>
                <ul>
                    <li>1610 – Galileo uses a telescope to observe the Moon.</li>
                    <li>1959–1976 – U.S.S.R. and U.S. robotic missions study the Moon.</li>
                    <li>1969 – Neil Armstrong becomes the first person to walk on the Moon.</li>
                    <li>1994–1999 – Missions find signs of water near the lunar poles.</li>
                    <li>2009 – NASA’s LRO and LCROSS study lunar topography and water ice.</li>
                    <li>2011 – GRAIL mission maps the Moon’s gravity in high detail.</li>
                </ul>
            `,
            images: [
                "assets/img/product 10.png",  // 1. LRO wide-angle composite of the near side

            ]
        },
        
         Pluto: {
    text: `
        <h3>The Dwarf Planet: Pluto</h3>
        <p>Pluto was discovered in 1930 by Clyde Tombaugh. Initially considered the ninth planet, it was reclassified as a dwarf planet and a Kuiper Belt object due to its small size and irregular orbit.</p>

        <p>Pluto’s orbit is elliptical and tilted compared to the planets, taking it between 29.7 and 49.3 AU from the Sun over 248 Earth years. For a brief time during its orbit, it travels closer to the Sun than Neptune.</p>

        <p>Pluto is composed mostly of rock and ice. Its surface includes nitrogen, carbon monoxide, and methane frost. Though smaller than Earth’s Moon, Pluto has five known moons, the largest being Charon — nearly half its size.</p>

        <p>Pluto and Charon are sometimes considered a double dwarf planet system. Charon orbits Pluto every 6.4 Earth days, and the same side of Charon always faces Pluto due to tidal locking. Pluto itself rotates once every 6.4 days in a retrograde direction.</p>

        <p>Pluto’s thin atmosphere of nitrogen, methane, and carbon monoxide expands when it is close to the Sun and may freeze and fall to the surface as it moves farther away.</p>

        <p>NASA’s New Horizons spacecraft, launched in 2006, flew past Pluto in 2015, revealing a complex and dynamic world with mountains, plains, and possible ice volcanoes. The mission also discovered new small moons and clarified Pluto’s surface composition.</p>

        <ul>
            <li><strong>Distance from Sun:</strong> 5,906.38 million km</li>
            <li><strong>Orbital Period:</strong> 247.92 Earth years</li>
            <li><strong>Rotation Period:</strong> 6.387 Earth days</li>
            <li><strong>Radius:</strong> 1,180 km</li>
            <li><strong>Charon’s Radius:</strong> 600 km</li>
            <li><strong>Mass:</strong> 0.0022 of Earth’s</li>
            <li><strong>Gravity:</strong> 0.65 m/s²</li>
            <li><strong>Temperature Range:</strong> –233 to –223°C (–387 to –369°F)</li>
        </ul>

        <h4>Significant Dates</h4>
        <ul>
            <li>1930 – Clyde Tombaugh discovers Pluto.</li>
            <li>1978 – Charon, Pluto’s largest moon, is discovered.</li>
            <li>2006 – New Horizons is launched to study Pluto.</li>
            <li>2015 – New Horizons flies by Pluto, sending back detailed data.</li>
            <li>2011–2012 – Additional small moons are discovered, bringing the total to five.</li>
        </ul>
    `,
    images: [
        "assets/img/product 11.jpg",  // 1. Pluto and Charon with Nix and Hydra

    ]
         },
        
        Asteroids: {
    text: `
        <h3>Asteroids: The Rocky Remnants of the Solar System</h3>
        <p>Asteroids, often called minor planets, are rocky remnants from the early formation of the solar system around 4.6 billion years ago. Most orbit the Sun between Mars and Jupiter in the main asteroid belt, with sizes ranging from tiny rocks to bodies nearly 950 kilometers wide like Ceres.</p>

        <p>Asteroids come in various shapes, mostly irregular, and can rotate or even tumble through space. More than 150 asteroids are known to have small companion moons, with some forming binary or even triple systems.</p>

        <p>They are classified by composition into three broad types:
        <ul>
            <li><strong>C-type:</strong> Carbon-rich and very dark, among the oldest bodies in the solar system.</li>
            <li><strong>S-type:</strong> Silicate or “stony” asteroids, more reflective.</li>
            <li><strong>M-type:</strong> Metallic, mostly nickel-iron, believed to be cores of disrupted planetesimals.</li>
        </ul></p>

        <p>Jupiter’s gravity and interactions with Mars and other planets can disturb asteroid orbits, sending some toward Earth. These stray asteroids, called Near-Earth Objects (NEOs), are continuously monitored due to their potential impact hazard.</p>

        <p>NASA’s spacecraft, like NEAR, Galileo, Hayabusa, Rosetta, and Dawn, have visited various asteroids and returned valuable data. In 2015, Dawn became the first mission to orbit a dwarf planet (Ceres) and continued its exploration after studying Vesta.</p>

        <ul>
            <li><strong>Main Asteroid Belt:</strong> Between Mars and Jupiter</li>
            <li><strong>Largest Asteroid:</strong> Ceres (classified as a dwarf planet)</li>
            <li><strong>Typical Composition:</strong> Rock, metals, or carbon-rich material</li>
            <li><strong>Size Range:</strong> From a few meters to nearly 950 km</li>
        </ul>

        <h4>Significant Dates</h4>
        <ul>
            <li>1801 – Discovery of Ceres, the first and largest asteroid</li>
            <li>1991–1994 – Galileo spacecraft images asteroids Gaspra and Ida</li>
            <li>1997–2000 – NEAR Shoemaker studies Mathilde and lands on Eros</li>
            <li>2006 – Ceres classified as a dwarf planet</li>
            <li>2011–2012 – Dawn spacecraft studies Vesta, then Ceres</li>
        </ul>
    `,
    images: [
        "assets/img/product 12.jpg",  // 1. Dawn view of Vesta

    ]
         } ,

    };

    const planetInfo = info[planetName] || {
        text: "No info yet.",
        images: []
    };

    document.getElementById("modal-text").innerHTML = planetInfo.text;

    const imagesContainer = document.getElementById("modal-images");
    imagesContainer.innerHTML = planetInfo.images.map(img =>
        `<img src="${img}" alt="${planetName}">`
    ).join('');
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/*=============== solar system interaction ===============*/
const planets = document.querySelectorAll('.planet');
const infoBox = document.getElementById('infoBox');

planets.forEach(planet => {
  planet.addEventListener('click', () => {
    infoBox.textContent = planet.getAttribute('data-info');
    infoBox.style.display = 'block';
  });
});

document.body.addEventListener('click', (e) => {
  if (!e.target.classList.contains('planet')) {
    infoBox.style.display = 'none';
  }
});