import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const purchases = [
    { id: 1, title: "The Psychology of Money", price: "6.99", quantity: 3 },
    { id: 2, title: "The Richest Man In Babylon", price: "6.99", quantity: 3 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted"></div>
            <h1 className="text-3xl font-serif font-bold mb-8">Sophie Martin</h1>
            
            <div className="bg-sage/20 rounded-lg p-6 mb-6">
              <p className="text-lg">
                47 Green Street, Camden Town, London NW1 0LG, UK
              </p>
            </div>
            
            <Button variant="outline" className="rounded-full bg-sage hover:bg-sage-dark">
              change address
            </Button>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6">My Purchases</h2>
            
            <div className="space-y-6">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="flex items-center gap-6 pb-6 border-b">
                  <div className="w-20 h-28 bg-muted rounded"></div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{purchase.title}</h3>
                    <p className="text-muted-foreground">$ {purchase.price} USD</p>
                  </div>
                  <div className="text-3xl font-bold">{purchase.quantity}</div>
                </div>
              ))}
            </div>
          </div>
          
          <Button variant="link" className="text-destructive hover:text-destructive/80">
            Log out
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
