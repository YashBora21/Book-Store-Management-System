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
              <div className="bg-sage/50 aspect-[3/4] rounded-lg flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground" />
              </div>
              <div className="bg-sage/70 aspect-[3/4] rounded-lg flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground" />
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
              <div className="bg-muted aspect-square rounded-lg"></div>
              <div className="bg-muted aspect-square rounded-lg mt-8"></div>
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
            {["FICTION", "MYSTERY", "ROMANCE", "HISTORY"].map((category) => (
              <div key={category} className="bg-sage/30 aspect-video rounded-lg flex items-center justify-center">
                <span className="font-medium">{category}</span>
              </div>
            ))}
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
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="bg-muted aspect-[2/3] rounded-lg mb-3"></div>
                <h3 className="font-medium mb-1">Book Title {i}</h3>
                <p className="text-sm text-muted-foreground">$ 6.99 USD</p>
              </div>
            ))}
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
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="bg-muted aspect-[2/3] rounded-lg mb-3"></div>
                <h3 className="font-medium mb-1">Book Title {i}</h3>
                <p className="text-sm text-muted-foreground">$ 6.99 USD</p>
              </div>
            ))}
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
