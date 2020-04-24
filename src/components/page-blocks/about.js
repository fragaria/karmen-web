import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import { BackgroundImage } from "components/image"

import strawberryImg from "assets/img/strawberry.svg"
import karmenLogo from "assets/img/karmen-logo-social-media.png"

const AboutBlock = props => {
  const data = useStaticQuery(graphql`
    query {
      martinBilek: file(relativePath: { eq: "martin-bilek.jpg" }) {
        ...fluidImage600_traced
      }
      martinBurian: file(relativePath: { eq: "martin-burian.jpg" }) {
        ...fluidImage600_traced
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  return (
    <article itemType="http://schema.org/Organization" itemScope>
      <span
        itemProp="logo"
        itemType="http://schema.org/ImageObject"
        itemScope
        className="hidden"
      >
        <meta itemProp="caption" content={data.site.siteMetadata.title} />
        <meta itemProp="url" content={karmenLogo} />
        <meta itemProp="width" content="1000" />
        <meta itemProp="height" content="1000" />
      </span>
      <meta itemProp="url" content={data.site.siteMetadata.siteUrl} />
      <section {...props}>
        <div className="about-hero">
          <div className="content-block about-hero__headline">
            <h1 className="about-hero__main sitenav__anchorpush">
              <span className="sitenav__anchor" id="about"></span>
              <FormattedMessage
                id="about-block.story_title"
                defaultMessage="The Karmen story"
              />
            </h1>
            <h2 className="about-hero__sub">
              <FormattedMessage
                id="about-block.story_motto"
                defaultMessage="All innovations come from laziness"
              />
            </h2>
          </div>
        </div>

        <div className="content-block content-block--narrower about-body">
          <h3>
            <FormattedMessage
              id="about-block.story_start"
              defaultMessage="It started with a gift"
            />
          </h3>
          <p>
            <FormattedMessage
              id="about-block.story_start_content"
              defaultMessage="We bought a 3D printer for our office in 2018 as a Christmas gift to thank our employees. We originally thought it would be used to print out parts for drones and other toys, like for special tracks for Legos. It was a lot of fun! But in addition to having fun, we also found out that our printer—like the vast majority of FFF printers—didn’t have a network connection, which meant we had to constantly walk over to it with an SD card. And this is where our aversion to doing unnecessary work comes in—as well as the programmers’ faith that there’s always a simpler way to do things."
            />
          </p>
          <h3>
            <FormattedMessage
              id="about-block.story_idea"
              defaultMessage="The idea came quickly"
            />
          </h3>
          <p>
            <FormattedMessage
              id="about-block.story_idea_content"
              defaultMessage="Right at the start of January 2019, we discovered OctoPrint. We set everything up in such a way as to optimize the number of steps through the office it would take to get to the printer. Unfortunately, not everything in OctoPrint is worked out ideally, so we agreed ourselves to help them improve it. We had some ideas about functions that would be useful, and at the same time we found out that a lot of companies and organisations would welcome the possibility to manage their printers in one place. OctoPrint couldn’t do that—it’s always tied to a single printer. We got the idea for an interesting product, and it just happened to be at a time when we wanted to invest in development. We weren’t held up with analyses of markets and competitors, cost-benefit calculations or product briefs. We just went into it with what we ourselves would find useful and which would be simply scalable to multiple printers. We called the product Karmen because it’s a name that’s easily pronounced. It’s also the name of a variety of strawberry. The strawberry—fragaria in expert terminology—had previously given our company its name."
            />
          </p>
          <h3>
            <FormattedMessage
              id="about-block.story_result"
              defaultMessage="The result"
            />
          </h3>
          <p>
            <FormattedMessage
              id="about-block.story_result_content"
              defaultMessage="The first Karmen prototypes fulfilled their purpose, but the product had to be properly developed and tested for real operation. We were greatly helped in this by <arenaLink>3D aréna</arenaLink> and <ikemLink>Prague’s Institute for Clinical and Experimental Medicine (IKEM)</ikemLink>, where they print real copies of transplanted organs. We also found out that Karmen has huge added value for schools and co-working spaces. It’s very popular in companies because it enables simple connections between departments where print materials are prepared and branches where the printer is physically present. These don’t have to be in the same building, or even on the same continent."
              values={{
                arenaLink: (...chunks) => (
                  <a
                    href="https://3darena.cz/"
                    className="anchor--default"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {chunks}
                  </a>
                ),
                ikemLink: (...chunks) => (
                  <a
                    href="https://www.ikem.cz/"
                    className="anchor--default"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </p>
        </div>
      </section>

      <section>
        <div className="content-block content-block--narrow">
          <h1 className="about-founders-headline sitenav__anchorpush">
            <span className="sitenav__anchor" id="team"></span>
            <FormattedMessage
              id="about-block.team_headline"
              defaultMessage="Founders"
            />
          </h1>
          <div className="about-founders">
            <div className="about-founders__founder">
              <BackgroundImage
                file={data.martinBurian}
                className="about-founders__founder-image"
              />
              <div className="about-founders__founder-body">
                <h2>Martin Burián</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.burian_sub"
                    defaultMessage="Founder and CEO, Fragaria"
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="about-block.burian_bio"
                    defaultMessage="Martin Burián loves to talk about project management and new ideas to make his employees’ work environment a better place. Because he was originally an auditor, he makes sure everything in the company works properly. In Fragaria, he’s in charge of HR, finance, economics and corporate infrastructure. He’s had his ups and downs in his 15 years as CEO, but he’s always been able to learn from his experiences. For Burián, as for the whole company, the Karmen project has become a labour of love, and it fills him with great expectations."
                  />
                </p>
              </div>
            </div>
            <div className="about-founders__founder">
              <BackgroundImage
                file={data.martinBilek}
                className="about-founders__founder-image"
              />
              <div className="about-founders__founder-body">
                <h2>Martin Bílek</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.bilek_sub"
                    defaultMessage="CTO of Fragaria, Chairman of Pyvec.org"
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="about-block.bilek_bio"
                    defaultMessage="Martin Bílek started programming in his childhood. At the time, his primary machine was a <didaktikLink>Didaktik Gama</didaktikLink>, which used audiocassettes instead of hard disks as storage. This is one of the reasons he’s keenly aware of how important it is to keep up with developments and to constantly seek out new and innovative solutions.  He considers open source software to be the best direction; it enables programs and solutions to be continuously developed and perfected – Karmen has been built on open source as well. Martin is also the chairman of <pyvecLink>Pyvec.org</pyvecLink>, the Czech community around the Python programming language."
                    values={{
                      didaktikLink: (...chunks) => (
                        <a
                          href="https://cs.wikipedia.org/wiki/Didaktik_Gama"
                          className="anchor--default"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {chunks}
                        </a>
                      ),
                      pyvecLink: (...chunks) => (
                        <a
                          href="https://pyvec.org/"
                          className="anchor--default"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {chunks}
                        </a>
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-founders__founder about-founders__founder--company">
              <div className="about-founders__founder-image">
                <img src={strawberryImg} alt="Fragaria" />
              </div>
              <div className="about-founders__founder-body">
                <h2>Fragaria</h2>
                <h3>
                  <FormattedMessage
                    id="about-block.devteam"
                    defaultMessage="Development team"
                  />
                </h3>
                <p>
                  <FormattedMessage
                    id="about-block.devteam_bio"
                    defaultMessage="Fragaria is a traditional Czech specialist in the area of custom IT solutions development with many years of experience in the areas of banking, e-commerce, media companies and startups. In its development projects, Fragaria emphasises agile development methodologies, prototyping and modern solutions, which bring clients maximum benefits and added value. In addition to custom development tailored to clients’ needs, Fragaria invests into the development of its own products. More information is available at <fragaLink>fragaria.cz</fragaLink>."
                    values={{
                      fragaLink: (...chunks) => (
                        <a
                          href="https://fragaria.cz"
                          className="anchor--default"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {chunks}
                        </a>
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default AboutBlock
