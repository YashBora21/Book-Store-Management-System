import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">LOGO</h2>
            <p className="text-xl font-serif max-w-md">
              Start Your Empowering<br />Reading Adventure
            </p>
            <Button
              variant="outline"
              className="mt-6 border-background text-background hover:bg-background hover:text-foreground rounded-full"
              asChild
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
