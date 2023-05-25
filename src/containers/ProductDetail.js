import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  cleanupProduct,
  fetchProduct,
  setProduct,
} from "../redux/actions/productAction";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCartShopping } from "@fortawesome/fontawesome-free-solid";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, id, category, image, price, description } = product;

  useEffect(() => {
    dispatch(fetchProduct(productId));
    return () => {
      dispatch(cleanupProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        // <div className="ui placeholder segment">
        //   <div className="ui two column stackable center aligned grid">
        //     <div className="ui vertical divider"> </div>
        //     <div className="middle aligned row">
        //       <div className="column lp">
        //         <img className="ui fluid image" src={image} />
        //       </div>
        //       <div className="column rp">
        //         <h1>{title}</h1>
        //         <h2>
        //           <a className="ui teal tag label">${price}</a>
        //         </h2>
        //         <h3 className="ui brown block header">{category}</h3>
        //         <p>{description}</p>
        //         <div className="ui vertical animated button" tabIndex="0">
        //           <div className="hidden content">
        //             <i className="shop icon"></i>
        //           </div>
        //           <div className="visible content">Add to Cart</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <Stack direction="horizontal" gap={1}>
          <div className="style-image">
            <img src={image} style={{ height: "550px" }} />
          </div>
          <div>
            <h1>{title}</h1>
            <h2>
              <a className="placeholder-glow">${price}</a>
            </h2>
            <h3>{category}</h3>
            <p>{description}</p>

            <Button variant="success">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ paddingRight: "10px" }}
              />
              Add to Cart
            </Button>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default ProductDetail;
