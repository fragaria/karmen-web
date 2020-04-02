
import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import karmenLogoImg from "assets/img/karmen-logo.svg"


// function siteMenu(rootElem) {
//     var toggles = rootElem.getElementsByClassName('js-sitenav-menu__toggle');
//     var links = rootElem.getElementsByClassName('js-sitenav__link');
//     var currentUrl = window.location.pathname;

//     forEachNode(toggles, function (index, toggle) {
//         toggle.addEventListener('click', function () {
//             rootElem.classList.remove('sitenav-wrapper--noanim');
//             rootElem.classList.toggle('sitenav-wrapper--show');

//             if (toggle.classList.contains('is-active')) {
//                 toggle.classList.remove('is-active');
//                 toggle.setAttribute('aria-expanded', 'false');
//                 document.body.classList.remove('noscroll');
//             } else {
//                 toggle.classList.add('is-active');
//                 toggle.setAttribute('aria-expanded', 'true');
//                 document.body.classList.add('noscroll');
//             }
//         });
//     });

//     forEachNode(links, function (index, link) {
//         link.addEventListener('click', function (evt) {
//             var targetAnchor = evt.target.closest('.js-sitenav-menu__anchor');

//             if (! targetAnchor) {
//                 console.warn('Could not found target anchor for current click evt.', evt);
//                 return;
//             }

//             var targetUrl = targetAnchor.getAttribute('href');
//             var targetSuffix = targetUrl.replace(currentUrl, '');

//             // id-based navigation on current page
//             if (targetSuffix.startsWith('#')) {
//                 evt.preventDefault();

//                 var sitenavWrap = rootElem;
//                 var sitenavMenu = rootElem.getElementsByClassName('js-sitenav-menu')[0];
//                 var sitenavMenuHeight = sitenavMenu.getBoundingClientRect().height;
//                 var targetId = targetSuffix.substring(1);
//                 var target = document.getElementById(targetId);
//                 window.scroll({top: target.offsetTop - 80, behavior: 'smooth'});
//                 history.pushState({}, evt.target.text, targetUrl);

//                 rootElem.classList.add('sitenav-wrapper--noanim');
//                 rootElem.classList.remove('sitenav-wrapper--show');
//                 document.body.classList.remove('noscroll');

//                 forEachNode(toggles, function (index, toggle) {
//                     toggle.classList.remove('is-active');
//                     toggle.setAttribute('aria-expanded', 'false');
//                 });
//             }
//         });
//     });
// }

const Sitenav = ({ lang, wrapperRef }) => {

    const data = useStaticQuery(graphql`
        query SitenavQuery {
            site {
                siteMetadata {
                    company {
                        officialName,
                        social {
                            github, readthedocs, twitter, facebook, youtube
                        }
                    }
                    nav {
                        cs { url, name }
                        en { url, name }
                    }
                }
            }
        }
    `)

    const [ isOpen, setIsOpen ] = useState(false)
    const [ isAnimated, setIsAnimated] = useState(true)

    const menuToggleClasses = classNames("sitenav__menutoggle hamburger hamburger--collapse", {
        "is-active": isOpen,
    })
    const rootClasses = classNames("sitenav js-sitenav", {
        "sitenav-wrapper--noanim": !isAnimated,
        "sitenav-wrapper--show": isOpen,
    })

    const toggle = () => {
        setIsAnimated(true)
        isOpen ? document.body.classList.remove('noscroll') : document.body.classList.add('noscroll')
        setIsOpen(!isOpen)
    }

    const navigate = (evt, url) => {
        const targetSuffix = url.replace(window.location.pathname, '');

        if (targetSuffix.startsWith('#')) {
            evt.preventDefault()
            const targetId = targetSuffix.substring(1)
            const target = document.getElementById(targetId)

            window.scroll({top: target.offsetTop - 80, behavior: 'smooth'})
            window.history.pushState({}, evt.target.text, targetSuffix)

            setIsAnimated(false)
            setIsOpen(false)

            document.body.classList.remove('noscroll')
        }
    }

    return (
        <nav id="js-sitenav" className={rootClasses} role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
            <div className="sitenav__container">
                <div className="content-block content-block__cover--mobile">
                    <div className="sitenav__menu js-sitenav-menu">
                        <a href="/" className="sitenav__company typeset__anchor--nounderline" itemProp="url"><span itemProp="name">Karmen</span></a>

                        <a className="sitenav__brand" href="/">
                            <img alt={data.site.siteMetadata.company.officialName} src={karmenLogoImg} />
                        </a>

                        {lang === "en" && <Link to="/" className="sitenav__switch flag czech-republic" title="Přepnout do češtiny"></Link>}
                        {lang !== "en" && <Link to="/en/" className="sitenav__switch flag united-kingdom" title="Switch to english"></Link>}

                        <button
                            className={menuToggleClasses}
                            type="button"
                            aria-label="Menu"
                            aria-controls="js-sitenav"
                            aria-expanded={isOpen}
                            onClick={toggle}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>

                    <ul className="sitenav__linkset">
                        {data.site.siteMetadata.nav[lang].map(item => (
                            <li key={item.url} className="sitenav__linkset-item js-sitenav__link">
                                <a onClick={(evt) => navigate(evt, item.url)} className="sitenav__link typeset__anchor--nounderline js-sitenav-menu__anchor" itemProp="url"><span itemProp="name">{item.name}</span></a>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Sitenav.props = {
    lang: PropTypes.string.isRequired,
    wrapperRef: PropTypes.object.isRequired,
}

export default Sitenav
