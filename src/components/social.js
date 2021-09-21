import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { defineMessages, useIntl } from "react-intl"

const messages = defineMessages({
  ghProfileTitle: {
    id: "footer.gh_profile_title",
    defaultMessage: "GitHub profile page",
  },
  twProfileTitle: {
    id: "footer.tw_profile_title",
    defaultMessage: "Twitter profile page",
  },
  fbProfileTitle: {
    id: "footer.fb_profile_title",
    defaultMessage: "Facebook profile page",
  },
  ytChannelTitle: {
    id: "footer.yt_channel_title",
    defaultMessage: "Karmen YouTube channel",
  },
  docsTitle: {
    id: "footer.docs_title",
    defaultMessage: "Karmen docs",
  },
})

const Social = props => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          company {
            social {
              github
              twitter
              facebook
              youtube
            }
          }
        }
      }
    }
  `)

  const intl = useIntl()

  return (
    <div className={`social ${props.class}`}>
      {data.site.siteMetadata.company.social.github && (
        <a
          href={
            "https://github.com/" + data.site.siteMetadata.company.social.github
          }
          className="icon--github social__icon"
          title={intl.formatMessage(messages.ghProfileTitle)}
        >
          <span>{intl.formatMessage(messages.ghProfileTitle)}</span>
        </a>
      )}
      {data.site.siteMetadata.company.social.twitter && (
        <a
          href={`https://twitter.com/${data.site.siteMetadata.company.social.twitter}`}
          className="icon--twitter social__icon"
          title={intl.formatMessage(messages.twProfileTitle)}
        >
          <span>{intl.formatMessage(messages.twProfileTitle)}</span>
        </a>
      )}
      {data.site.siteMetadata.company.social.facebook && (
        <a
          href={`https://facebook.com/${data.site.siteMetadata.company.social.facebook}`}
          className="icon--facebook social__icon"
          title={intl.formatMessage(messages.fbProfileTitle)}
        >
          <span>{intl.formatMessage(messages.fbProfileTitle)}</span>
        </a>
      )}
      {data.site.siteMetadata.company.social.youtube && (
        <a
          href={`https://www.youtube.com/channel/${data.site.siteMetadata.company.social.youtube}`}
          className="icon--youtube social__icon"
          title={intl.formatMessage(messages.ytChannelTitle)}
        >
          <span>{intl.formatMessage(messages.ytChannelTitle)}</span>
        </a>
      )}
    </div>
  )
}

export default Social
