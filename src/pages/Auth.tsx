import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate("/");
    } else {
      // Simulate registration
      toast({
        title: "Registration successful",
        description: "Your account has been created.",
      });
      navigate("/");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-sage/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-serif font-bold text-center mb-8">
          {isLogin ? "Login" : "Register"}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="rounded-full h-14 text-lg px-6 bg-background"
              required
            />
          )}
          
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-full h-14 text-lg px-6 bg-background"
            required
          />
          
          {!isLogin && (
            <>
              <Input
                type="tel"
                name="mobile"
                placeholder="Mo.No"
                value={formData.mobile}
                onChange={handleInputChange}
                className="rounded-full h-14 text-lg px-6 bg-background"
                required
              />
              
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="rounded-full h-14 text-lg px-6 bg-background"
                required
              />
            </>
          )}
          
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="rounded-full h-14 text-lg px-6 bg-background"
            required
          />
          
          <Button
            type="submit"
            className="w-full h-14 rounded-full text-lg bg-[#A8C686] hover:bg-[#98B676] text-foreground font-normal"
          >
            Submit
          </Button>
          
          <p className="text-center">
            {isLogin ? "create account" : "Already have a account ?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium underline hover:text-muted-foreground"
            >
              {isLogin ? "register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
