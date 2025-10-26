import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center">Contact Us</h1>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input placeholder="Your name" className="rounded-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" className="rounded-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea placeholder="Your message" className="min-h-32" />
            </div>
            
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
