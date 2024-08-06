import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { products } from "../../assets/products";

function Product() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));

  return (
    <>
      <NavBar />
      <div className="uk-container">
        {product ? (
          <div className="uk-card uk-grid-collapse uk-child-width-1-2@m uk-grid uk-margin">
            <div className="uk-card-media-left uk-cover-container">
              <img src={product.image} className="uk-align-center" />
            </div>
            <div>
              <div className="uk-card-body">
                <h1 className="uk-card-title">{product.name}</h1>
                <p>
                  Introducing our stylish and versatile cardigan—a perfect
                  addition to your wardrobe. Crafted with care and attention to
                  detail, this cardigan offers a blend of comfort, elegance, and
                  functionality that effortlessly complements various outfits
                  and styles.
                </p>
                <p>
                  Made from high-quality, soft fabrics, our cardigan provides a
                  cozy and luxurious feel against your skin. Its lightweight
                  design ensures year-round wearability, offering a layer of
                  warmth on chilly days and a breathable option for transitional
                  seasons.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1>Product Not Found</h1>
            <p>Sorry, we could not find what you were looking for.</p>
          </>
        )}
      </div>
    </>
  );
}

export default Product;
