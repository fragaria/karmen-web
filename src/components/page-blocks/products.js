import React from "react"
import { FormattedMessage } from "react-intl"
import ProductsList from "components/page-blocks/products-list"

const ProductsBlock = (props) => {
  return (
      <section {...props}>
        <div className="products">
          <div className="products-circle"></div>
          <div className="content-block">
            <h1 className="products__title">
              <FormattedMessage
                id="products.headline"
                defaultMessage="Produkty Karmen"
              />
            </h1>
            <ProductsList />
          </div>
        </div>
      </section>
  )
}

export default ProductsBlock
