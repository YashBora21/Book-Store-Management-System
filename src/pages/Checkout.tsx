import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out",
        variant: "destructive"
      });
      return;
    }
    
    // Validate form
    if (!formData.name || !formData.email || !formData.address) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Show payment options instead of immediately submitting
    setShowPaymentOptions(true);
  };
  
  const handlePaymentSubmit = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsSubmitting(true);
    
    // Here we would normally process the payment
    // For now, we'll simulate a successful payment
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      
      // Show success toast
      toast({
        title: "Payment successful",
        description: "Thank you for your purchase!",
      });
      
      // Navigate to payment confirmation page
      navigate("/payment-confirmation", { 
        state: { paymentMethod } 
      });
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <section className="py-16 flex-1 flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h1 className="text-3xl font-serif font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-muted-foreground mb-8">
              Your order has been placed and is being processed. You will receive an email confirmation shortly.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/")} className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90">
                Continue Shopping
              </Button>
              <Button onClick={() => navigate("/orders")} variant="outline" className="rounded-full px-8">
                View Orders
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-8 rounded-full" 
              onClick={() => navigate("/cart")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Button>
            
            <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-medium">Shipping Information</h2>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input 
                          id="state" 
                          name="state" 
                          value={formData.state} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                        <Input 
                          id="zipCode" 
                          name="zipCode" 
                          value={formData.zipCode} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input 
                          id="country" 
                          name="country" 
                          value={formData.country} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea 
                        id="notes" 
                        name="notes" 
                        value={formData.notes} 
                        onChange={handleChange} 
                        placeholder="Special instructions for delivery" 
                        className="h-24" 
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Proceed to Payment"}
                  </Button>
                  
                {showPaymentOptions && (
                  <div className="mt-8 p-6 border rounded-lg bg-muted/20">
                    <h3 className="text-xl font-medium mb-4">Select Payment Method</h3>
                    <div className="space-y-4">
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 ${selectedPaymentMethod === 'credit-card' ? 'border-foreground bg-foreground/5' : ''}`}
                        onClick={() => setSelectedPaymentMethod('credit-card')}
                      >
                        <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                        </div>
                        <div>Credit / Debit Card</div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 ${selectedPaymentMethod === 'upi' ? 'border-foreground bg-foreground/5' : ''}`}
                        onClick={() => setSelectedPaymentMethod('upi')}
                      >
                        <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"/><circle cx="18" cy="18" r="3"/><path d="m20.2 20.2-1.4-1.4"/></svg>
                        </div>
                        <div>UPI Payment</div>
                      </div>
                      
                      <div 
                        className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 ${selectedPaymentMethod === 'qr' ? 'border-foreground bg-foreground/5' : ''}`}
                        onClick={() => setSelectedPaymentMethod('qr')}
                      >
                        <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/></svg>
                        </div>
                        <div>Scan QR Code</div>
                      </div>
                      
                      <Button 
                        className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 mt-4"
                        disabled={!selectedPaymentMethod || isSubmitting}
                        onClick={() => selectedPaymentMethod && handlePaymentSubmit(selectedPaymentMethod)}
                      >
                        {isSubmitting ? "Processing Payment..." : "Pay Now"}
                      </Button>
                    </div>
                  </div>
                )}
                </form>
              </div>
              
              <div>
                <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">Order Summary</h3>
                {cartItems.length > 0 ? (
                  <>
                    <div className="space-y-3 mb-4">
                      {cartItems.map((item) => (
                        <div key={item._id} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.quantity} ×</span>
                            <span>{item.title}</span>
                          </div>
                          <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold mt-4">
                        <span>Total</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button 
                      variant="link" 
                      className="mt-2"
                      onClick={() => navigate("/")}
                    >
                      Continue shopping
                    </Button>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}