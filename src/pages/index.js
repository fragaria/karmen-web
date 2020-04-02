import React from "react"

import Testimonials from "../components/testimonials"
import MainPageWrap from "../components/main-page-wrap"

import printersListImg from "assets/img/karmen-printers-list.png"
import pillImg from "assets/img/karmen-pill.jpg"

const IndexPage = ({ data }) => {
    return (
        <MainPageWrap lang="cs">
            <section className="hero hero--vertical" role="banner">
                <h1 className="hero__headline">Řešení na vzdálenou správu 3D tiskáren</h1>
                <h2 className="hero__sub">Management, monitoring a distribuce tiskových souborů kdykoliv a odkudkoliv</h2>
                <p className="hero__sub">Karmen umožňuje monitoring a správu jedné nebo více 3D tiskáren přes lokální síť nebo internet. Z webového prohlížeče vašeho počítače, tabletu či telefonu můžete zadávat tiskové úlohy, sledovat průběh tisku vrstvu po vrstvě, distibuovat tisk mezi více tiskárnami apod. Díky použitému softwarovému řešení je Karmen kompatibilní s širokou škálou tiskáren a slicerů.</p>
                <p className="hero__sub" id="subscribe">
                    Ačkoliv oficiální spuštění proběhne v dubnu 2020, má Karmen již několik <a href="/#portfolio" className="anchor anchor--emphasized">uživatelů</a> z řad škol, coworkových dílen, firem a také jedna nemocnice.
                </p>
            </section>

            <section className="v-career-section career-teaser content-block__cover--mobile">
                <h1 className="career-teaser__headline">Informovat o Karmen novinkách</h1>
                <div className="career-teaser__contactbutton">
                    <form className="form" action="https://tech.us19.list-manage.com/subscribe/post?u=4dcf00156fa5e9a90c4bdda03&amp;id=b15800dd3b" method="POST" acceptCharset="UTF-8" target="_blank" novalidate>
                        <fieldset className="form__line">
                            <div className="form-control-wrapper form-control-wrapper--inline">
                                <input className="form-control" type="email" name="EMAIL" placeholder="E-mail" />
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4dcf00156fa5e9a90c4bdda03_b15800dd3b" tabindex="-1" value="" /></div>
                                <button className="button" type="submit">Odebírat</button>
                            </div>
                        </fieldset>
                    </form>
                    <span id="products"></span>
                </div>
            </section>

            <section className="v-home__portfolio">
                <h1 className="splitting-headline">
                    <span className="splitting-headline__fill">Produkty a služby</span>
                </h1>
                <p className="v-home__career-content">
                    Celá Karmen je navržena jako <a href="https://github.com/fragaria/karmen" className="anchor anchor--emphasized">open source</a>, přičemž některé její části vychází z aplikace Octoprint. S cílem okamžitě „připojit a tisknout“ nabízíme placené a podporované řešení tak, aby uživatel získal pravidelně aktualizovanou službu a kontroler, který jednoduše zapojí a integruje do svého provozu.
                </p>
                <div className="v-home__career-content article-typeset">
                    <article>
                        <h2>Karmen Pill</h2>
                        <p>
                            Kompaktní hardwarové zařízení Karmen Pill s integrovanou webovou kamerou, které se přes USB rozhraní připojí ke 3D tiskárně, zpřístupní ji do lokální sítě či internetu a zajistí tak její vzdálenou správu a obsluhu.
                        </p>
                        <figure className="figure content-block__cover--mobile ">
                            <img src={pillImg} className="figure__image" />
                        </figure>
                        <ul>
                            <li>Kompatibilita s nejrozšířenějšími slicery: Slic3r, PrusaSlicer, Ultimaker Cura apod.</li>
                            <li>Obraz z kamery ve webovém rozhraní</li>
                            <li>Uživatelské webové rozhraní pro monitoring: teplota senzorů, probíhající tisk, obraz z vestavěné kamery</li>
                            <li>Základní ovládání tiskárny: (po)zastavení/spuštění tisku apod.</li>
                            <li>Cena: 3.500,00 bez DPH</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Karmen</h2>
                        <p>
                            Cloudová služba Karmen navržená pro správu všech tiskáren v rámci jedné organizace, pod jedním uživatelským účtem na jednom místě. Opět se jedná o <a href="https://github.com/fragaria/karmen" className="anchor anchor--emphasized">open source</a> nástroj, v případě, že využijete naší hostované služby, máte provoz do určitého množství připojených tiskáren a objemu dat zdarma.
                        </p>

                        <figure className="figure content-block__cover--mobile ">
                            <img src={printersListImg} className="figure__image" />
                        </figure>

                        <p>S Karmen získáte:</p>
                        <ul>
                            <li>Uživatelské webové rozhraní pro monitoring a správu připojených tiskáren</li>
                            <li>Videopřenos v reálném čase</li>
                            <li>Vzdálené ovládání</li>
                            <li>Pokročilou správu uživatelů a tiskových souborů</li>
                            <li>Odeslání tiskových souborů na připojené tiskárny</li>
                            <li>Otevřenou vývojářskou dokumentaci a API pro snadnou integraci Karmen do jiných systémů</li>
                        </ul>
                    </article>
                    <span id="buy"></span>
                </div>
            </section>

            <section className="v-home__company">
                <h1 className="splitting-headline anchor-shift" id="get-in-touch">
                    <span className="splitting-headline__fill">Kde koupit</span>
                </h1>

                <meta itemProp="email" content="{{ site.company.email }}" />
                <meta itemProp="telephone" content="{{ site.company.phone }}" />

                <div className="v-home__career-content">
                    <article className="contact v-home__company-about">
                        <p>Oficiální spuštění a prodej plánujeme na duben 2020. Do té doby budeme rádi, <a href="/#subscribe" className="anchor anchor--emphasized">pokud nám zanecháte svůj e-mail</a>, abychom Vás mohli informovat o našich novinkách.</p>
                        <p>Zároveň je možné si rezervovat naše produkty přes jednoduchý formulář:</p>
                    </article>

                    <form className="v-home__company-contactform form" action={`"https://formspree.io/${data.site.siteMetadata.company.contactEmail}`} method="POST">
                        <input type="text" name="_gotcha" style={({display: 'none'})} />

                        <div className="form__line">
                            <label className="form-label" htmlFor="git-name">Jméno</label>
                            <div className="form-control-wrapper">
                                <input className="form-control" type="text" name="name" id="git-name" required />
                            </div>
                        </div>
                        <div className="form__line">
                            <label className="form-label" htmlFor="git-email">E-mail</label>
                            <div className="form-control-wrapper">
                                <input className="form-control" type="email" name="_replyto" id="git-email"  required />
                            </div>
                        </div>
                        <div className="form__line">
                            <label className="form-label" htmlFor="git-message">Vzkaz</label>
                            <div className="form-control-wrapper">
                                <textarea className="form-control" name="message" id="git-message"  required></textarea>
                            </div>
                        </div>
                        <div className="form__submit">
                            <input type="submit" className="button" value="Odeslat" />
                        </div>
                    </form>
                    <span id="beta"></span>
                </div>
            </section>


            <section className="v-home__company">
                <h1 className="splitting-headline">
                    <span className="splitting-headline__fill">Staň se beta testerem</span>
                </h1>
                <p className="v-home__career-content">
                    Hledáme 10 testerů, kteří nám pomohou otestovat nové verze řešení Karmen ještě předtím, než budou vydány. Pro zařazení do programu prosíme o <a href="https://docs.google.com/forms/d/1h9rOmHEMIMAtg0ho2dCA9ATb3zRQHaagtCYbDF9XWnE/" className="anchor anchor--emphasized">vyplnění krátkého dotazníku</a>.
                </p>
                <span id="portfolio"></span>
            </section>

            <section className="v-home__company">
                <h1 className="splitting-headline">
                    <span className="splitting-headline__fill">Reference</span>
                </h1>

                <div className="v-home__career-content">
                    <p>
                        Řešení Karmen se snaží cílit na jednotlivce s typicky jednou domácí 3D tiskárnou, stejně tak na firmy a organizace s více 3D tiskárnami.
                        Oproti konkurenčním řešením umožňuje Karmen připojení a spolupráci s více typy 3D tiskáren, tedy více tiskárnami od různých výrobců.
                    </p>

                    <Testimonials />
                </div>
            </section>
        </MainPageWrap>
    )
}

export default IndexPage

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
