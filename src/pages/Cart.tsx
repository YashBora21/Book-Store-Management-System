import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "The Psychology of Money", price: 6.99, quantity: 3, image: "/api/placeholder/100/140" },
    { id: 2, title: "The Richest Man In Babylon", price: 6.99, quantity: 3, image: "/api/placeholder/100/140" },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-serif font-bold">Your Cart</h1>
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                  <div className="w-16 h-24 bg-muted rounded"></div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">$ {item.price.toFixed(2)} USD</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm underline hover:text-muted-foreground mt-1"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-2xl font-bold">{item.quantity}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Subtotal</span>
                <span>$ {subtotal.toFixed(2)} USD</span>
              </div>
            </div>
            
            <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 rounded-full">
              Check Out
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
