import React from "react"

import Testimonials from "../components/testimonials"
import MainPageWrap from "../components/main-page-wrap"

import printersListImg from "assets/img/karmen-printers-list.png"
import pillImg from "assets/img/karmen-pill.jpg"

const IndexENPage = ({ data }) => {
    return (
        <MainPageWrap lang="en">
            <section className="hero hero--vertical" role="banner">
                <h1 className="hero__headline">Multiple 3D printer controller</h1>
                <h2 className="hero__sub">
                    Solution for remote 3D printer management and monitoring
                </h2>

                <p className="hero__sub">
                    Karmen makes monitoring and management of an arbitrary number of 3D printers a breeze. Simply connect printers either to your local network or to the internet and Karmen will take care of the rest. It allows you to enqueue print jobs, inspect the print progress layer by layer and distribute jobs among multiple printers simply using your web browser on any device. Karmen is compatible with a wide range of printers and slicers. It’s set to launch in April 2020.
                </p>
                <p className="hero__sub" id="subscribe">
                    Nevertheless, it has already been <a href="/#portfolio" className="anchor anchor--emphasized">deployed</a> in various workloads—schools, makerspaces, companies and even in a hospital—just to name a few.
                </p>
            </section>

            <section className="v-career-section career-teaser content-block__cover--mobile">
                <h1 className="career-teaser__headline">Subscribe to latest Karmen news</h1>
                <div className="career-teaser__contactbutton">
                    <form className="form" action="https://tech.us19.list-manage.com/subscribe/post?u=4dcf00156fa5e9a90c4bdda03&amp;id=b15800dd3b" method="POST" acceptCharset="UTF-8" target="_blank" novalidate>
                        <fieldset className="form__line">
                            <div className="form-control-wrapper form-control-wrapper--inline">
                                <input className="form-control" type="email" name="EMAIL" placeholder="E-mail" />
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4dcf00156fa5e9a90c4bdda03_b15800dd3b" tabindex="-1" value="" /></div>
                                <button className="button" type="submit">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <span id="products"></span>
            </section>

            <section className="v-home__portfolio">
                <h1 className="splitting-headline">
                    <span className="splitting-headline__fill">Products and Services</span>
                </h1>
                <p className="v-home__career-content">
                    Karmen is (and always will be) provided as an <a href="https://github.com/fragaria/karmen" className="anchor anchor--emphasized">open-source</a> software. Some of it’s magical powers are being handled by the well known Octoprint which Karmen builds upon under the scenes. If “plug-and-print” is what you’re after, we also offer a paid and fully supported option which comes up with regular updates and a genuine Karmen Pill controller to connect your printer effortlessly.
                </p>
                <div className="v-home__career-content article-typeset">
                    <article>
                        <h2>Karmen Pill</h2>
                        <p>
                            The Pill makes your printer smarter. It serves as a hardware bridge for remote management tasks and integrates a webcam at the same time in a single device with a tiny footprint. Printer connection is made using an USB interface.
                        </p>
                        <figure className="figure content-block__cover--mobile ">
                            <img src={pillImg} className="figure__image" />
                        </figure>
                        <ul>
                            <li>Compatible with most slicers: Slic3r, PrusaSlicer, Ultimaker Cura etc.</li>
                            <li>Monitoring at your fingertips: live video feed, temperature information, print progress</li>
                            <li>Basic printer controls: pause/continue/cancel</li>
                            <li>Price: 130 EUR</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Karmen</h2>
                        <p>
                            The Karmen cloud service is the brains behind the remote printer management. It integrates all of your printers in a single streamlined web interface which you can access from anywhere using your account. If you decide to go with our hosted option, you will be granted with a limited traffic and printer connections for free.
                        </p>

                        <figure className="figure content-block__cover--mobile ">
                            <img src={printersListImg} className="figure__image" />
                        </figure>

                        <p>Using Karmen, you will be able to:</p>
                        <ul>
                            <li>Monitor and manage connected printers using neat web interface</li>
                            <li>Visually inspect your printers in real time</li>
                            <li>Control your printers remotely</li>
                            <li>Manage users and print source files</li>
                            <li>Enqueue print jobs to connected printers</li>
                            <li>Integrate Karmen into other systems by using an open API and free developer documentation</li>
                        </ul>
                    </article>
                </div>
                <span id="buy"></span>
            </section>

            <section className="v-home__company">
                <h1 className="splitting-headline anchor-shift" id="get-in-touch">
                    <span className="splitting-headline__fill">Where to buy</span>
                </h1>

                <meta itemProp="email" content="{{ site.company.email }}" />
                <meta itemProp="telephone" content="{{ site.company.phone }}" />

                <div className="v-home__career-content">
                    <article className="contact v-home__company-about">
                        <p>
                            Karmen will launch officially in April 2020. We would love to keep you in touch with all the news until then — <a href="./#subscribe" className="anchor anchor--emphasized">please drop us your email</a>.
                        </p>
                        <p>You can also pre-order our products using this simple web form:</p>
                    </article>

                    <form className="v-home__company-contactform form" action={`"https://formspree.io/${data.site.siteMetadata.company.contactEmail}`} method="POST">
                    <input type="text" name="_gotcha" style={({display: 'none'})} />

                        <div className="form__line">
                            <label className="form-label" for="git-name">Name</label>
                            <div className="form-control-wrapper">
                                <input className="form-control" type="text" name="name" id="git-name" required />
                            </div>
                        </div>
                        <div className="form__line">
                            <label className="form-label" for="git-email">E-mail</label>
                            <div className="form-control-wrapper">
                                <input className="form-control" type="email" name="_replyto" id="git-email"  required />
                            </div>
                        </div>
                        <div className="form__line">
                            <label className="form-label" for="git-message">Your message</label>
                            <div className="form-control-wrapper">
                                <textarea className="form-control" name="message" id="git-message"  required></textarea>
                            </div>
                        </div>
                        <div className="form__submit">
                            <input type="submit" className="button" value="Send" />
                        </div>
                    </form>
                </div>
                <span id="portfolio"></span>
            </section>


            <section className="v-home__company">
                <h1 className="splitting-headline">
                    <span className="splitting-headline__fill">Testimonials</span>
                </h1>

                <div className="v-home__career-content">
                    <p>
                        Karmen does not pick sides: we aim to help both individuals with a single hobby 3D printer and companies and organizations with their 3D printer farms. And—contrary to other solutions—Karmen supports many different 3D printers brands.
                    </p>

                    <Testimonials />
                </div>
            </section>
        </MainPageWrap>
    )
}

export default IndexENPage

export const query = graphql`
    query {
        site {
            siteMetadata {
                company {
                    contactEmail
                    social {
                        twitter, github
                    }
                }
            }
        }
    }
`
