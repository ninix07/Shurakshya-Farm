import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import freshVegetables from "@/assets/fresh-vegetables.jpg";
import greenhouse from "@/assets/greenhouse.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Organic Cherry Tomatoes",
      price: "$8.99",
      originalPrice: "$12.99",
      rating: 4.9,
      reviews: 128,
      image: freshVegetables,
      badge: "Best Seller",
      organic: true
    },
    {
      id: 2,
      name: "Fresh Mixed Lettuce",
      price: "$5.99",
      originalPrice: "$7.99",
      rating: 4.8,
      reviews: 95,
      image: greenhouse,
      badge: "New",
      organic: true
    },
    {
      id: 3,
      name: "Organic Rainbow Carrots",
      price: "$6.99",
      originalPrice: "$9.99",
      rating: 4.9,
      reviews: 156,
      image: freshVegetables,
      badge: "Popular",
      organic: true
    },
    {
      id: 4,
      name: "Farm Fresh Honey",
      price: "$15.99",
      originalPrice: "$19.99",
      rating: 5.0,
      reviews: 203,
      image: greenhouse,
      badge: "Premium",
      organic: true
    },
    {
      id: 5,
      name: "Organic Carrots",
      price: "$4.99",
      originalPrice: "$6.99",
      rating: 4.7,
      reviews: 87,
      image: freshVegetables,
      badge: "",
      organic: true
    },
    {
      id: 6,
      name: "Organic Strawberries",
      price: "$12.99",
      originalPrice: "$15.99",
      rating: 4.9,
      reviews: 174,
      image: greenhouse,
      badge: "Seasonal",
      organic: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Freshest Picks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked daily from our organic farms, delivered fresh to your table 
            with all the nutrients and flavor nature intended.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-organic transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.organic && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Organic
                      </Badge>
                    )}
                    {product.badge && (
                      <Badge variant="outline" className="bg-card/90 backdrop-blur-sm">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Quick Add Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="bg-card/90 backdrop-blur-sm">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-accent text-primary-foreground"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;