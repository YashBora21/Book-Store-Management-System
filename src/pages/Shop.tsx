import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Shop() {
  const books = [
    { id: 1, title: "A Million To One", price: "6.99" },
    { id: 2, title: "Tales Under The Purple Sky", price: "6.99" },
    { id: 3, title: "The Garden Of Words", price: "6.99" },
    { id: 4, title: "Monster", price: "6.99" },
    { id: 5, title: "13 Days", price: "6.99" },
    { id: 6, title: "The Apothecary Diaries", price: "6.99" },
    { id: 7, title: "The Story of a Lonely Boy", price: "6.99" },
    { id: 8, title: "Friedrich Nietzsche", price: "6.99" },
    { id: 9, title: "The Dance of Destiny", price: "6.99" },
    { id: 10, title: "The Dragon Princess", price: "6.99" },
    { id: 11, title: "The Goldfinch", price: "6.99" },
    { id: 12, title: "When The Doves Disappeared", price: "6.99" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-sage/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Our Book Collection
            </h1>
            <p className="text-muted-foreground">
              Explore different collection and discover new perspectives, knowledge, and inspiration.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {books.map((book) => (
              <Link key={book.id} to={`/book/${book.id}`} className="group">
                <div className="bg-muted aspect-[2/3] rounded-lg mb-3 group-hover:shadow-lg transition-shadow"></div>
                <h3 className="font-medium mb-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground">$ {book.price} USD</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="rounded-full">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
