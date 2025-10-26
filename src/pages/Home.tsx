import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-sage/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Find your next great<br />read at our online<br />book store
              </h1>
              <div className="flex gap-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8" asChild>
                  <Link to="/shop">Explore</Link>
                </Button>
                <Button variant="outline" className="rounded-full px-8" asChild>
                  <Link to="/auth">Sign up</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sage/50 aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="/images/Book1.webp" 
                  alt="Featured Book" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-sage/70 aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="/images/Book2.webp" 
                  alt="Featured Book" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-background rounded-full inline-flex items-center px-6 py-2 text-sm">
            <span className="font-medium">REVIEW</span>
            <div className="flex ml-4 gap-2">
              <div className="w-8 h-8 rounded-full bg-sage"></div>
              <div className="w-8 h-8 rounded-full bg-sage-dark"></div>
              <div className="w-8 h-8 rounded-full bg-sage"></div>
            </div>
          </div>
          
          <p className="mt-4 text-sm max-w-2xl">
            "The bookstore is an awesome resource for readers seeking a variety of fiction and non-fiction. Their curated collection stands out, and customer service team is knowledgeable and friendly."
          </p>
        </div>
      </section>

      {/* Bookstore Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted aspect-square rounded-lg overflow-hidden">
                <img src="/images/Photo1.jpg" alt="Bookstore" className="w-full h-full object-cover" />
              </div>
              <div className="bg-muted aspect-square rounded-lg mt-8 overflow-hidden">
                <img src="/images/Photo2.jpg" alt="Bookstore" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Introducing Our Bookstore<br />and Community
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our bookstore curates a diverse collection of thought-provoking reads, 
                from bestsellers to hidden gems. We believe that books empower personal 
                growth and foster community, creating a space where readers can discover 
                stories that inspire and transform.
              </p>
              <Button variant="outline" className="rounded-full">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link to="/collection/fiction" className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/images/Fiction.jpg" alt="Fiction" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-medium text-white">FICTION</span>
              </div>
            </Link>
            <Link to="/collection/mystery" className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/images/mystry.jpg" alt="Mystery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-medium text-white">MYSTERY</span>
              </div>
            </Link>
            <Link to="/collection/romance" className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/images/romance.jpg" alt="Romance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-medium text-white">ROMANCE</span>
              </div>
            </Link>
            <Link to="/collection/self-help" className="relative aspect-video rounded-lg overflow-hidden">
              <img src="/images/Self Help.jpg" alt="Self Help" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-medium text-white">SELF HELP</span>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Button variant="outline" className="rounded-full">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold">Popular Books</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/Book1.webp" alt="Book 1" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Featured Book 1</h3>
              <p className="text-sm text-muted-foreground">$ 6.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/Book2.webp" alt="Book 2" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Featured Book 2</h3>
              <p className="text-sm text-muted-foreground">$ 7.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/The Garden Of Words.jpg" alt="The Garden Of Words" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">The Garden Of Words</h3>
              <p className="text-sm text-muted-foreground">$ 5.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/The Dragon Princess.jpg" alt="The Dragon Princess" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">The Dragon Princess</h3>
              <p className="text-sm text-muted-foreground">$ 8.99 USD</p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/shop">
                See all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-sage/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-sm border border-foreground rounded-full px-4 py-1">
                Latest Additions
              </span>
              <h2 className="text-3xl font-serif font-bold mt-4">New Arrival Books</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/Fiction.jpg" alt="Fiction Book" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Fiction Bestseller</h3>
              <p className="text-sm text-muted-foreground">$ 9.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/mystry.jpg" alt="Mystery Book" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Mystery Thriller</h3>
              <p className="text-sm text-muted-foreground">$ 8.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/romance.jpg" alt="Romance Book" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Romance Novel</h3>
              <p className="text-sm text-muted-foreground">$ 7.99 USD</p>
            </div>
            <div>
              <div className="aspect-[2/3] rounded-lg mb-3 overflow-hidden">
                <img src="/images/Self Help.jpg" alt="Self Help Book" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium mb-1">Self Help Guide</h3>
              <p className="text-sm text-muted-foreground">$ 10.99 USD</p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" className="rounded-full">
              See all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Start Your Reading<br />Journey Now!
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover stories that inspire, educate, and entertain. Join our community of readers today.
            </p>
            <div className="flex gap-4">
              <Button className="bg-foreground text-background rounded-full" asChild>
                <Link to="/shop">Get Started</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/auth">Sign Up</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <div className="w-32 h-32 rounded-full bg-sage"></div>
            <div className="w-24 h-24 rounded-full bg-sage-dark mt-8"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
