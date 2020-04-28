import React from "react"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import BuyBlock from "components/page-blocks/buy"

import pillWCloudImg from "assets/img/pill-w-cloud.png"

const BuyPage = ({ location }) => {
  return (
    <Layout location={location} containerClass="v-buy">
      <SEOMetadata
        title="Buy Karmen"
        description="Buy Karmen and its companion Karmen Pill box and control all your 3D printers from anywhere in the world."
        img={pillWCloudImg}
        pathname="/en/buy/"
      />
      <SEOBusinessInfo />
      <BuyBlock />
    </Layout>
  )
}

export default BuyPage
