require("dotenv").config();
const mongoose = require("mongoose");
const  Product = require("./models/productmodel.js")

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo connection error:", err));

const products = [
  {
    name: "Linen Beach Towel",
    price: 10,
    image: "/Rectangle 6 (1).png",
    image2: "/Rectangle 31.png",
    art: "ART7282",
    color: "blue/ white",
    category: "Towel",
    description: "Lightweight linen beach towel.",
    featured: true
  },
  {
    name: "Large Clear Glassbox",
    price: 20,
    image: "/Rectangle 10.png",
    image2: "/Rectangle 28.png",
    art: "ART5161",
    color: "clear",
    category: "Glassbox",
    description: "Spacious clear glass box.",
    featured: false
  },
  {
    name: "Ceramic Plates",
    price: 15,
    image: "/Rectangle 8.png",
    image2: "/Rectangle 32.png",
    art: "ART3242",
    color: "white/ floral",
    category: "Plates",
    description: "Set of elegant ceramic plates set.",
    featured: true
  },
  {
    name: "Round Jute Placement",
    price: 25,
    image: "/Rectangle 11.png",
    image2: "/round_jute.avif",
    art: "ART1222",
    color: "natural",
    category: "Jute",
    description: "Eco-friendly round jute placemat.",
    featured: true
  },
  {
    name: "Metal Wire Basket",
    price: 30,
    image: "/Rectangle 12.png",
    image2: "/download.jpg",
    art: "ART5678",
    color: "black/ gray",
    category: "Basket",
    description: "Durable metal wire basket for storage.",
    featured: true
  },
  {
    name: "Square Clear Glassbox",
    price: 15,
    image: "/Rectangle 7.png",
    image2: "/51Hs-brCmZL._AC_UF1000,1000_QL80_.jpg",
    art: "ART4353",
    color: "clear",
    category: "Square-Glassbox",
    description: "Compact square clear glass box.",
    featured: false
  },
   {
    name: "Wooden Bag",
    price: 70,
    image: "/bag.jpg",
    image2: "/il_fullxfull.1806765546_hbuu.webp",
    art: "ART8392",
    color: "brown",
    category: "Bag",
    description: "Stylish handcrafted wooden bag.",
    featured: false
  },
  {
    name: "Tray",
    price: 20,
    image: "/tray.jpg",
    image2: "/tray2.jpg",
    art: "ART9303",
    color: "brown/ beige",
    category: "Tray",
    description: "Beautiful designed serving tray.",
    featured: false
  },
  {
    name: "Twill Cushion",
    price: 35,
    image: "/Rectangle 27.png",
    image2: "/Rectangle 75.png",
    art: "ART7644",
    color: "gray/ white",
    category: "Cushion",
    description: "Soft twill cushion cover.",
    featured: false
  },
  {
    name: "Fluted Bewerage Glass",
    price: 12,
    image: "/Rectangle 28.png",
    image2: "/realistic-watercolor-painting-glass-water-white-background_899449-8103.avif",
    art: "ART6515",
    color: "clear",
    category: "Beverage-Glass",
    description: "Elegant fluted beverage glass.",
    featured: false
  },
  {
    name: "Ceramic Cup",
    price: 15,
    image: "/Rectangle 30.png",
    image2: "/Rectangle 29.png",
    art: "ART3141",
    color: "white/ blue",
    category: "Cup",
    description: "Handcrafted ceramic cup.",
    featured: false
  },
  {
    name: "Pack of Napkins",
    price: 8,
    image: "/Rectangle 31.png",
    image2: "/natural-2_2000x.webp",
    art: "ART2135",
    color: "white/ beige",  
    category: "Napkins",
    description: "Set of soft cotton napkins.",
    featured: true
  },
  {
    name: "Ceramic Egg Cup",
    price: 10,
    image: "/Rectangle 29.png",
    image2: "/S_STWEGGAALI1612_1.webp",
    art: "ART7193",
    color: "white/ yellow",
    category: "Egg-cup",
    description: "Cute ceramic egg cup.",
    featured: false
  },
  {
    name: "Metal Cutlery Basket",
    price: 25,
    image: "/Rectangle 34.png",
    image2: "Iron-Basket..jpg",
    art: "ART8456",
    color: "silver/ black",
    category: "Cutlery-basket",
    description: "Sturdy metal cutlery basket.",
    featured: true
  },
  {
    name: "Bamboo Box",
    price: 40,
    image: "/Rectangle 33.png",
    image2: "/Bamboo_box.webp",
    art: "ART1121",
    color: "natural wood",
    category: "Box",
    description: "Eco-friendly bamboo storage box.",
    featured: true
  },
 {
    name: "Large Teracota Vase",
    price: 120,
    image: "/image 4.png",
    image2: "/image 4.png",
    art: "ART1424",
    color: "terracotta",
    category: "Vase",
    description: "Handcrafted large terracotta vase.",
    featured: false
  },
  {
    name: "H&M Home",
    price: 30,
    image: "/Rectangle83.png",
    image2: "/Rectangle 82.png",
    art: "ART9202",
    color: "cream/ white",
    category: "Handm",
    description: "Soft ribbed-wool throw.",
    featured: true
  },
 
  {
    name: "Vintage Chair",
    price: 250,
    image: "/image 3.png",
    image2: "/image 2.png",
    art: "ART1234",
    color: "wooden/ white",
    category: "Chair",
    description: "Elegan chair with wooden legs.",
    featured: true
  },
  {
    name: "Godrej Refrigerators",
    price: 600,
    image: "/ref2.png",
    image2: "/godfridgesingle.webp",
    art: "ART7181",
    color: "silver/ black",
    category: "Refrigerator",
    description: "Energy-efficient Godrej refrigerator.",
    featured: false
  },
  {
    name: "Prestige Pressure Cooker",
    price: 80,
    image: "/prestige6.jpg",
    image2: "/cooker.jpg",
    art: "ART5262",
    color: "silver/ black",
    category: "Prestige",
    description: "Durable Prestige pressure cooker.",
    featured: false
  },
  {
    name: "Curlon Curtains",
    price: 45,
    image: "/curlcurtains.jpg",
    image2: "/duck-cotton-printed-curtains-pack-of-2-and-100percent-cotton-trance-home-linen-13.webp",
    art: "ART9101",
    color: "beige/ white",
    category: "Curtains",
    description: "Light-blocking curlon curtains.",
    featured: true
  },
];

const importData = async () => {
  try {
    console.log("Product model check:", typeof Product.deleteMany); 
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Product Data Imported Successfully!");
    process.exit();
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
};

importData();
