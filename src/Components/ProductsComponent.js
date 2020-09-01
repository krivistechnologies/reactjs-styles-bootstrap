import "./products.css";
import React from "react";
function ProductsComponent() {
  return (
    <div>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row justify-content-center">
          <div class="col-md-10 col-sm-9">
            <div class="card">
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <div class="card card-1">
                    <div class="pr-3 row justify-content-end">
                      <div class="fa fa-heart like like-checked"></div>
                    </div>
                    <div class="product-pic">
                      <img class="pic1" src="https://i.imgur.com/EaNHGjT.png" />
                    </div>
                    <small class="category">Shoes</small>
                    <h5 class="product-name">Leather Men's Sneakers</h5>
                    <div class="row px-3 justify-content-between">
                      <p class="price">$45.99</p>
                      <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="card card-1">
                    <div class="pr-3 row justify-content-end">
                      <div class="fa fa-heart like"></div>
                    </div>
                    <div class="product-pic">
                      <img class="pic2" src="https://i.imgur.com/Yyi0L3k.jpg" />
                    </div>
                    <small class="category">Bags</small>
                    <h5 class="product-name">Swedish Backpack</h5>
                    <div class="row px-3 justify-content-between">
                      <p class="price">$68.45</p>
                      <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="card card-1">
                    <div class="pr-3 row justify-content-end">
                      <div class="fa fa-heart like"></div>
                    </div>
                    <div class="product-pic">
                      <img class="pic3" src="https://i.imgur.com/pZOAATT.jpg" />
                    </div>
                    <small class="category">Accessories</small>
                    <h5 class="product-name">Stainless Steel Watches</h5>
                    <div class="row px-3 justify-content-between">
                      <p class="price">$542.80</p>
                      <div class="stars">
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star star-active"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsComponent;
