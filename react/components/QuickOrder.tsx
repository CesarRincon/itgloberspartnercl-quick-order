import React, { useState } from 'react'
import { useLazyQuery, useMutation } from 'react-apollo';
import UPDATE_CART from "../graphql/updateCart.graphql";
import GET_PRODUCT from "../graphql/getProductBySku.graphql"
//@ts-ignore
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"

const QuickOrder = () => {
  const CSS_HANDLES = [
    'container_image',
    'container_info',
    'container_suggestion',
    'description',
    "form_container"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  const [inputText, setInputText] = useState("");


  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const producto = product?.product;

  const handleChange = (e: any) => {
    setInputText(e.target.value)
    getProductData({
      variables: {
        sku: e.target.value
      }
    })
  }

  const searchProduct = (e: any) => {
    e.preventDefault();
    if (!inputText) {
      alert("Introduce algo!!!!")
    } else if (product) {
      let skuId = parseInt(inputText);
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
        .then(() => {
          window.location.href = "/checkout"
        })
    }
  }

  return (
    <div className='pa4'>
      <div className="flex flex-column" style={{ alignItems: "center" }}>
        <h3>Haz una compra rápida</h3>
        <form onSubmit={searchProduct} className={handles["form_container"]}>
          <div>
            <label htmlFor="sku">Ingresa el numero de SKU: </label>
            <input id="sku" type="text" onChange={handleChange} />
          </div>
          <button type="submit">Añadir al carrito</button>
        </form>
      </div>
      {
        producto &&
        <div className={handles['container_suggestion']}>
          <div className={handles['container_image']}>
            <img src={producto?.items[0]?.images[0]?.imageUrl} width={250} alt="" />
            <div className={handles['container_info']}>
              <h3>{producto?.productName}</h3>
              <p className={handles['description']}>{producto?.description}</p>
              <h4>Precio: $ {producto?.priceRange.sellingPrice.highPrice}</h4>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default QuickOrder