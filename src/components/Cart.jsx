
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ShoppingBag } from "lucide-react";

export default function Cart({
  isOpen,
  onClose,
  items = [],
}) {
  // Disable page scrolling while cart is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">

          {/* DARK OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75"
          />

          {/* CART PANEL */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-[#eef6f9] shadow-2xl sm:w-[440px]"
          >

            {/* CART HEADER */}
            <div className="flex h-[74px] shrink-0 items-center justify-between border-b border-[#10272c]/40 px-7">
              <h2
                id="cart-title"
                className="text-[23px] font-semibold text-[#10272c]"
              >
                Your Cart
              </h2>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="rounded-full p-2 text-[#10272c] transition-all duration-300 hover:rotate-90 hover:bg-[#10272c]/10"
              >
                <X size={25} strokeWidth={2.5} />
              </button>
            </div>

            {/* CART CONTENT */}
            <div className="flex-1 overflow-y-auto">

              {items.length === 0 ? (

                // EMPTY CART
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex h-full items-center justify-center px-6"
                >
                  <p className="text-center text-[17px] font-medium text-[#888]">
                    No items found.
                  </p>
                </motion.div>

              ) : (

                // CART ITEMS
                <div className="space-y-4 p-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-20 w-20 rounded-md object-cover"
                        />
                      ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#eef6f9]">
                          <ShoppingBag size={25} />
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-[#10272c]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-[#3153e8]">
                          ${Number(item.price).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* CART FOOTER WHEN ITEMS EXIST */}
            {items.length > 0 && (
              <div className="border-t border-[#10272c]/20 bg-white p-6">
                <div className="mb-5 flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>
                    ${items
                      .reduce(
                        (total, item) =>
                          total + Number(item.price),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-md bg-[#10272c] px-6 py-4 font-semibold text-white transition hover:bg-[#3153e8]"
                >
                  Continue Shopping
                </button>
              </div>
            )}

          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
