import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to our online bookstore, where we believe in the transformative power of reading. 
              Our carefully curated collection spans multiple genres, from thought-provoking fiction to 
              empowering self-help books.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're more than just a bookstore – we're a community of readers passionate about discovering 
              new perspectives, gaining knowledge, and finding inspiration through the written word.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Join us on this empowering reading adventure and discover your next favorite book today.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
