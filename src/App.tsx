import React, { useState } from 'react';

interface addCartProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [srcImage, setSrcImage] = useState<string>(
    'images/image-product-1.jpg'
  );
  const [count, setCount] = useState<number>(0);
  const [cart, setCart] = useState<Array<{}>>([]);

  const handleAddToCart = () => {
    const newProduct: addCartProps = {
      image: srcImage,
      name: 'product 1',
      price: 100,
      quantity: count,
    };
    console.log(cart);
    setCart([...cart, newProduct]);
  };
  const handleChangeImage = (e: any): void => {
    setSrcImage(e.target.srcset);
  };
  const handlePlus = (): void => {
    setCount(count + 1);
  };
  const handleMinus = (): void => {
    setCount(count - 1);
  };

  console.log(cart);
  return (
    <div className="font-kumbh bg-white px-24">
      <header className="mb-5">
        <nav className="flex justify-between items-center py-8  border-b-2 border-gravish-blue">
          <section className="links flex items-center justify-center ">
            <picture className="mx-2">
              <img src="/images/logo.svg" alt="" />
            </picture>
            <ul className="flex items-center justify-center text-dark-gravish-blue">
              <li className="mx-3">
                <a href="#">collections</a>
              </li>
              <li className="mx-3">
                <a href="#">Men</a>
              </li>
              <li className="mx-3">
                <a href="#">Women</a>
              </li>
              <li className="mx-3">
                <a href="#">About</a>
              </li>
              <li className="mx-3">
                <a href="#">Contact</a>
              </li>
            </ul>
          </section>
          <section className="profile flex items-center justify-center">
            <picture className="cart">
              <img src="/images/icon-cart.svg" alt="" />
            </picture>
            <picture className="w-8 ml-6">
              <img src="/images/image-avatar.png" alt="" />
            </picture>
          </section>
        </nav>
      </header>
      <main className="m-16 flex justify-around items-center">
        <section className="images">
          <picture className="renderImg ">
            <img src={srcImage} alt="" className="w-96 rounded-3xl" />
          </picture>
          <picture>
            <button onClick={handleChangeImage} className="w-24 mr-4 ">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt=""
                srcSet="/images/image-product-1.jpg"
                className="rounded-3xl m-2"
              />
            </button>
            <button onClick={handleChangeImage} className="w-24 mr-4 ">
              <img
                src="/images/image-product-2-thumbnail.jpg"
                alt=""
                srcSet="/images/image-product-2.jpg"
                className="rounded-3xl m-2"
              />
            </button>
            <button onClick={handleChangeImage} className="w-24 mr-4">
              <img
                src="/images/image-product-3-thumbnail.jpg"
                alt=""
                srcSet="/images/image-product-3.jpg"
                className="rounded-3xl m-2"
              />
            </button>
            <button onClick={handleChangeImage} className="w-24 mr-4 ">
              <img
                src="/images/image-product-4-thumbnail.jpg"
                alt=""
                srcSet="/images/image-product-4.jpg"
                className="rounded-3xl m-2"
              />
            </button>
          </picture>
        </section>
        <section className="info">
          <header className="my-5">
            <strong className="text-primary-orange uppercase space-x-3 my-3">
              {' '}
              sneaker company
            </strong>
            <h1 className="text-3xl font-bold">
              Fall Limited Edition Sneakers
            </h1>
          </header>
          <main>
            <p className="w-fit max-w-fit text-dark-gravish-blue">
              these low-profile sneakears are you perfect casual wear companion.
              featuring a durable rubber outer sole. they`ll whitstand
              everything the weather can offer.
            </p>
            <p className="flex items-center justify-start my-4">
              <strong>$125.00</strong>
              <span className="text-primary-orange bg-pale-orange rounded-3xl text-sm ml-8 p-2">
                50%
              </span>
            </p>
            <span className="text-gravish-blue">
              <em>
                <del>$250.00</del>
              </em>
            </span>
          </main>
          <footer className="flex items-center justify-center">
            <button onClick={handlePlus}>
              <img src="/images/icon-plus.svg" alt="" className="w-5" />
            </button>
            <button className="mx-20 w-8 max-w-min">{count}</button>
            <button onClick={handleMinus}>
              <img src="/images/icon-minus.svg" alt="" className="w-5" />
            </button>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center p-4 mx-6 bg-primary-orange rounded-3xl text-white "
            >
              <img src="/images/icon-cart.svg" alt="" className="w-5 " />
              <span>Add to cart</span>
            </button>
          </footer>
        </section>
        <section className="info"></section>
      </main>
      {/* <footer>
        {cart.length > 0 &&
          cart.map((product: any) => {
            return (
              <section className="flex justify-between items-center bg-dark-gravish-blue m-4 rounded-3xl p-3 w-96 ">
                <img src={product.image} alt="" className="w-10" />
                <span>{product.quantity}</span>
                <p>{product.price}</p>
              </section>
            );
          })}
      </footer> */}
    </div>
  );
}

export default App;
