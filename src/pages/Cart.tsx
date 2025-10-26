import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-serif font-bold">Your Cart</h1>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/shop">
                  <X className="h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Looks like you haven't added any books to your cart yet.</p>
                <Button className="rounded-full" asChild>
                  <Link to="/shop">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item._id} className="flex items-center gap-4 pb-4 border-b">
                      <div className="w-16 h-24 bg-muted rounded overflow-hidden">
                        {item.coverImage && (
                          <img 
                            src={item.coverImage} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">by {item.author}</p>
                        <p className="text-sm text-muted-foreground">$ {item.price.toFixed(2)} USD</p>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-sm underline hover:text-muted-foreground mt-1"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <span>-</span>
                        </Button>
                        <span className="text-xl font-bold w-6 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        >
                          <span>+</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center text-lg font-medium">
                    <span>Subtotal</span>
                    <span>$ {totalPrice.toFixed(2)} USD</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 rounded-full"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
