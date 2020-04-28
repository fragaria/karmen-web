import React from "react"

import Layout from "layouts/cs"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import BuyBlock from "components/page-blocks/buy"

import pillWCloudImg from "assets/img/pill-w-cloud.png"

const BuyPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-buy">
      <SEOMetadata
        title="Koupit Karmen"
        description="Kupte si Karmen a kontrolér Karmen Pill a ovládejte všechny svoje 3D tiskárny odkudkoliv na světě."
        lang="cs"
        img={pillWCloudImg}
        pathname="/cs/koupit/"
      />
      <SEOBusinessInfo />
      <BuyBlock />
    </Layout>
  )
}

export default BuyPage
