import React from 'react';
import Product from '../Product'
import './productList.css'

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        },
        {
          product: {
            image: {
              src: "https://images.lider.cl/wmtcl?set=imageSize[medium],imageURL[file:/productos/2405a.jpg],options[progressive]&call=url[file:catalog/sizing.chain]&sink=format[jpg],options[progressive]",
              alt: "Arroz Grano Largo Ancho Grado 1",
              title: "Arroz Grano Largo Ancho Grado 1",
              reference_code: "(Ref: 477608)"
            },
            details: {
              product_name: "Miraflores",
              product_description: "Arroz Grano Largo Ancho Grado 1",
              price: {
                product_attribute: "1 Kg",
                price_sell: "$1.140",
                product_round: "$ Precio x Kg : $1.140"
              }
            }
          }
        }
      ]
    }
  }

  render() {
    return <div className="table-cell">
      {this.state.productList.map(element => (
        <Product key="id" product={element.product} />
      ))}

    </div>
  }
}

export default ProductList;