import { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CartIcon from "./components/CartIcon";
import CartImg from "./components/CartImg";
import SubstractIcon from "./components/SubstactIcon";
import AddIcon from "./components/AddIcon";
import RemoveItemIcon from "./components/RemoveItemIcon";
import CarbonTreeIcon from "./components/CarbonTreeIcon";
import OrderModal from "./components/OrderModal";

function App() {
  const products = [
    {
      id: 1,
      name: "Waffle",
      price: "$6.50",
      image_mobile: "image-waffle-mobile",
      image_tablet: "image-waffle-tablet",
      image_desktop: "image-waffle-desktop",
      image_thumbnail: "image-waffle-thumbnail",
      phrase: "Waffle with Berries",
      alt: "waffle",
    },
    {
      id: 2,
      name: "Crème Brûlée",
      price: "$7.00",
      image_mobile: "image-creme-brulee-mobile",
      image_tablet: "image-creme-brulee-tablet",
      image_desktop: "image-creme-brulee-desktop",
      image_thumbnail: "image-creme-brulee-thumbnail",
      alt: "creme brulee",
      phrase: "Vanilla Bean Crème Brûlée",
    },
    {
      id: 3,
      name: "Macaron",
      price: "$8.00",
      image_mobile: "image-macaron-mobile",
      image_tablet: "image-macaron-tablet",
      image_desktop: "image-macaron-desktop",
      image_thumbnail: "image-macaron-thumbnail",
      alt: "macaron",
      phrase: "Macaron Mix of Five",
    },
    {
      id: 4,
      name: "Tiramisu",
      price: "$5.50",
      image_mobile: "image-tiramisu-mobile",
      image_tablet: "image-tiramisu-tablet",
      image_desktop: "image-tiramisu-desktop",
      image_thumbnail: "image-tiramisu-thumbnail",
      alt: "tiramisu",
      phrase: "Classic Tiramisu",
    },
    {
      id: 5,
      name: "Baklava",
      price: "$4.00",
      image_mobile: "image-baklava-mobile",
      image_tablet: "image-baklava-tablet",
      image_desktop: "image-baklava-desktop",
      image_thumbnail: "image-baklava-thumbnail",
      alt: "baklava",
      phrase: "Pistachio Baklava",
    },
    {
      id: 6,
      name: "Pie",
      price: "$5.00",
      image_mobile: "image-meringue-mobile",
      image_tablet: "image-meringue-tablet",
      image_desktop: "image-meringue-desktop",
      image_thumbnail: "image-meringue-thumbnail",
      alt: "meringue",
      phrase: "Lemon Meringue Pie",
    },
    {
      id: 7,
      name: "Cake",
      price: "$4.50",
      image_mobile: "image-cake-mobile",
      image_tablet: "image-cake-tablet",
      image_desktop: "image-cake-desktop",
      image_thumbnail: "image-cake-thumbnail",
      alt: "cake",
      phrase: "Red Velvet Cake",
    },
    {
      id: 8,
      name: "Brownie",
      price: "$5.50",
      image_mobile: "image-brownie-mobile",
      image_tablet: "image-brownie-tablet",
      image_desktop: "image-brownie-desktop",
      image_thumbnail: "image-brownie-thumbnail",
      alt: "brownie",
      phrase: "Salted Caramel Brownie",
    },
    {
      id: 9,
      name: "Panna Cotta",
      price: "$6.50",
      image_mobile: "image-panna-cotta-mobile",
      image_tablet: "image-panna-cotta-tablet",
      image_desktop: "image-panna-cotta-desktop",
      image_thumbnail: "image-panna-cotta-thumbnail",
      alt: "panna-cotta",
      phrase: "Vanilla Panna Cotta",
    },
  ];

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCart([]);
  };

  return (
    <main className="my-[88px] mx-6 md:mx-[40px] flex flex-col lg:flex-row gap-8">
      <div className="products">
        <h1 className="text-[40px] font-bold text-[#260F08] leading-12">
          Desserts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const isInCart = cart.find((item) => item.id === product.id);
            return (
              <motion.div
                key={product.id}
                className="flex flex-col mt-[40px] relative"
                role="region"
                aria-labelledby={`product-title-${product.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="img w-[100%] md:max-w-[250.66667px] h-[212px] md:h-[240px] rounded-[8px] active:border-[#C73B0F] cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={`/images/${
                      isMobile
                        ? product.image_mobile
                        : isTablet
                        ? product.image_desktop
                        : product.image_desktop
                    }.jpg`}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div
                  id={`product-title-${product.id}`}
                  className="text-[14px] text-[#87635A] mt-[38px]"
                >
                  {product.name}
                </div>
                <div className="text-[16px] text-[#260F08] font-semibold my-[4px]">
                  {product.phrase}
                </div>
                <div className="text-[16px] text-[#C73B0F] font-semibold">
                  {product.price}
                </div>
                <motion.button
                  className={`text-[14px] text-[#260F08] font-semibold mt-[24px] p-[12px] w-[160px] rounded-[999px] absolute top-[57%] md:top-[60%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] border border-[#AD8A85] ${
                    isInCart
                      ? "bg-[#F59E0B] text-[#FFFFFF]"
                      : "bg-[#FFFFFF] hover:bg-[#F59E0B] hover:text-[#FFFFFF]"
                  } transition-all duration-300 flex items-center justify-center gap-x-2`}
                  aria-label={`${
                    isInCart
                      ? `Remove ${product.name} from cart`
                      : `Add ${product.name} to cart`
                  }`}
                  onClick={() =>
                    isInCart
                      ? handleRemoveFromCart(product)
                      : handleAddToCart(product)
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isInCart ? (
                    <>
                      <SubstractIcon />
                      <span>{isInCart.quantity}</span>
                      <AddIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <CartIcon />
                      <p>Add to cart</p>
                    </>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="carts w-full lg:w-[384px] lg:min-w-[384px] h-fit rounded-xl p-6 text-[#C73B0F] font-bold text-2xl bg-white flex flex-col">
        <h2>
          Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </h2>
        <div className="flex flex-col gap-2 pt-4 items-center justify-center">
          {cart.length === 0 ? (
            <>
              <CartImg />
              <p className="text-[#87635A] font-semibold text-sm">
                Your added items will appear here
              </p>
            </>
          ) : (
            cart.map((item) => (
              <div className="flex flex-col w-full" key={item.id}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#260F08] text-sm font-semibold">
                      {item.name}
                    </p>
                    <div className="flex gap-2">
                      <span className="text-sm text-[#C73B0F] font-semibold">
                        {item.quantity}x
                      </span>
                      <span className="text-sm text-[#87635A] font-normal">
                        @ {item.price}
                      </span>
                      <span className="text-sm text-[#87635A] font-semibold">
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <RemoveItemIcon />
                  </button>
                </div>
                <div className="h-[1px] w-full bg-[#F5EEEC] mt-2" />
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <>
            <div className="flex justify-between items-center w-full mt-6">
              <span className="text-[#260F08] text-sm font-normal">Order Total</span>
              <span className="text-[#260F08] text-2xl font-bold">
                $
                {cart
                  .reduce(
                    (acc, item) =>
                      acc +
                      parseFloat(item.price.replace("$", "")) * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 bg-[#FCF8F6] p-4 rounded-lg">
              <CarbonTreeIcon />
              <span className="text-[#260F08] text-sm font-normal">
                This is a <span className="font-semibold">carbon-neutral</span> delivery
              </span>
            </div>
            <motion.button
              className="w-full bg-[#C73B0F] text-[#FFFFFF] rounded-[999px] p-[12px] mt-6 text-center text-[16px] font-semibold cursor-pointer"
              onClick={handleConfirmOrder}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirm Order
            </motion.button>
          </>
        )}
      </div>
      {isModalOpen && (
        <OrderModal cart={cart} products={products} onClose={handleCloseModal} />
      )}
    </main>
  );
}

export default App;
