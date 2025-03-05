import React from "react";
import { motion } from "framer-motion";
import CheckMarkIcon from "./CheckMark";

const OrderModal = ({ cart, products, onClose }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <div className="w-full absolute inset-x-0 inset-y-0 top-[450%] h-[717px] md:inset-auto md:absolute md:top-[100%] lg:top-[60%] md:h-auto md:w-[688px] lg:w-[592px] lg:left-[27%]">
        <motion.div
          className="order-modal bg-white p-10 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <CheckMarkIcon className="" />
          <h2 className="text-[#260F08] text-[40px] font-bold mt-6">
            Order Confirmed
          </h2>
          <p className="text-[#87635A] text-base font-normal">
            We hope you enjoy your food!
          </p>
          <ul className="bg-[#F5EEEC] p-6 mt-8 rounded-lg">
            <>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <motion.li
                    key={item.id}
                    className="flex justify-between items-center mt-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex gap-2">
                      <img
                        src={`/images/${product.image_thumbnail}.jpg`}
                        alt={product.alt}
                        className="w-12 rounded"
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-[#260F08] text-sm font-semibold">
                          {product.phrase}
                        </p>
                        <div className="flex gap-2">
                          <p className="text-[#C73B0F] font-semibold text-sm">
                            {item.quantity}x
                          </p>
                          <span className="text-[#87635A] font-normal text-sm">
                            @ {product.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#260F08] text-base font-semibold">
                      $
                      {(
                        parseFloat(product.price.replace("$", "")) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </motion.li>
                );
              })}
              <div className="h-[2px] w-full bg-[#efddd8] mt-4" />
              <div className="total flex justify-between items-center w-full mt-6">
                <p className="text-[#260F08] text-sm font-normal">
                  Order total
                </p>
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
            </>
          </ul>
          <motion.button
            onClick={onClose}
            className="mt-8 bg-[#C73B0F] text-white w-full rounded-[999px] p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start New Order
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default OrderModal;
