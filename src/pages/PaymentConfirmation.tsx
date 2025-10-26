import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentMethod = location.state?.paymentMethod || "card";
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your payment has been processed successfully. We've sent a confirmation email with all the details.
          </p>
        </div>
        
        <div className="bg-muted/20 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-medium mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Number</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Method</span>
              <span className="font-medium capitalize">{paymentMethod.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Status</span>
              <span className="text-green-600">Paid</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate("/")} 
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
          >
            Continue Shopping
          </Button>
          <Button 
            onClick={() => navigate("/orders")} 
            variant="outline" 
            className="rounded-full px-8"
          >
            View Orders
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}