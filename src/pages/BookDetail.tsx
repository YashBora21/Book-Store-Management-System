import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";

export default function BookDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "qr" | null>(null);

  const book = {
    title: "A Million To One",
    author: "Tony Faggioli",
    price: 6.99,
    originalPrice: 9.99,
    category: "Self Help",
    isbn: "978-9-390-16626-8",
    length: 252,
    published: "08 September 2020",
    description: `Some victories come at a high price. For Kyle Fasano, that price is a headlong fall into a hell he never truly believed in. Now, a living soul trapped in a land of death and terror, he desperately seeks escape, only to learn that the worst hell of all can be the one that lives inside us.

Meanwhile, the dedicated Gray Man, an agent of heaven, faces shock and defiance at the loss of his charge. In a million-to-one leap of faith, he goes after Kyle to save him, even though the effort is likely suicidal. As the Gray Man and his ally, Detective Napoleon Villa, descend into the depths, they discover horrors neither could have imagined.`,
  };

  const handleAddToCart = () => {
    setShowPaymentDialog(true);
  };

  const handlePaymentMethodClick = (method: "upi" | "qr") => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="bg-muted aspect-[2/3] max-w-md rounded-lg"></div>
            </div>
            
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">{book.title}</h1>
              <p className="text-muted-foreground mb-4">-{book.author}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {book.description.split('\n\n')[0]}
              </p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold">$ {book.price} USD</span>
                <span className="ml-3 text-muted-foreground line-through">$ {book.originalPrice} USD</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20 text-center"
                />
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </Button>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Author:</span> {book.author}</p>
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  <Link to="/collection/self-help" className="underline hover:text-muted-foreground">
                    {book.category}
                  </Link>
                </p>
                <p><span className="font-medium">Length:</span> {book.length}</p>
                <p><span className="font-medium">Published:</span> {book.published}</p>
                <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Description</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              {book.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <Button variant="outline" className="mt-8 rounded-full" asChild>
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
      </section>

      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="bg-background">
          {!paymentMethod ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center mb-6">
                  PAYMENT OPTION
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Button
                  className="w-full bg-sage hover:bg-sage-dark text-foreground rounded-full py-6 text-lg"
                  onClick={() => handlePaymentMethodClick("upi")}
                >
                  UPI
                </Button>
                <Button
                  className="w-full bg-sage hover:bg-sage-dark text-foreground rounded-full py-6 text-lg"
                  onClick={() => handlePaymentMethodClick("qr")}
                >
                  SCAN & PAY
                </Button>
              </div>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => setShowPaymentDialog(false)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </>
          ) : paymentMethod === "upi" ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center mb-6">
                  UPI ID
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <Input
                  placeholder="Enter UPI ID"
                  className="rounded-full bg-sage/20 border-sage"
                />
                <Button className="w-full bg-sage hover:bg-sage-dark text-foreground rounded-full py-6 text-lg">
                  Continue
                </Button>
              </div>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => setPaymentMethod(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center mb-6">
                  SCAN QR
                </DialogTitle>
              </DialogHeader>
              <div className="flex justify-center py-8">
                <div className="w-64 h-64 bg-foreground rounded-lg"></div>
              </div>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => setPaymentMethod(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
