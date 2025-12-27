const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const Product = require("./models/productmodel");
const Cart = require("./models/Shoppingmodel");
const order = require("./models/ordermodel");
const User = require("./models/usermodel");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; 
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
}

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// --- Login Route ---
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = generateToken(user);
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- Profile Route ---
app.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

// --- Logout Route ---
app.delete("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    }
    catch (err) {
        console.log('Error fetching products:', err);
        res.status(500).json({ message: err.message });
    }
})

app.get('/products/category/:category', async (req, res) => {
    const category = req.params.category;
    try {
        const products = await Product.find({ category });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found in this category' });
        }
        res.json(products);
    }
    catch (err) {
        console.log('Error fetching products by category:', err);
        res.status(500).json({ message: err.message });
    }
});

app.get("/featured", async (req, res) => {
    try {
        const featuredProducts = await Product.find({ featured: true });
        res.json(featuredProducts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.get('/cart',verifyToken, async (req,res) => {
    try {
        const cartItems = await Cart.find({ user: req.user.id });
        res.json(cartItems);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})
app.post('/cart',verifyToken, async (req, res) => {
    try {
        const { name, size, image, art, price } = req.body;
        const newItem = new Cart({user: req.user.id,name, price, image, size, art });
        if (!name || !price || !image || !size || !art) {
            return res.status(400).json({ message: "Missing product details" });
        }
        await newItem.save();
        res.status(201).json(newItem);
    }
    catch (err) {
        res.status(500).send('Server Error');
    }
});
app.delete('/cart/:id',verifyToken, async (req,res) => {
    const itemId = req.params.id;
    try {
    const deleted = await Cart.findOneAndDelete({ _id: itemId, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Item not found or unauthorized' });
    res.status(200).send('Item removed');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});
app.post('/order',verifyToken, async (req,res) => {

    const { name, price, image, size, art, qty, customer_name, address, contact_no, date } = req.body;
    const newOrder = new order({ user: req.user.id, name, price, image, size, art, qty, customer_name, address, contact_no, date });
    try {
        await newOrder.save();
        res.status(201).json({ message: "Order saved", order: newOrder });
    } catch (err) {
        res.status(500).send('Server Error');
    }
})
app.get('/order',verifyToken, async (req, res) => {
    try {
        const orders = await order.find({ user: req.user.id}).select('-customer_name -address -contact_no');
        res.json(orders);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})
app.put('/order/:id',verifyToken, async (req, res) => {
    const orderId = req.params.id;
   
    const { address, contact_no } = req.body;
    try {
        const updateOrder = await order.findOneAndUpdate(
            { _id: orderId},
            { user: req.user.id},
            { address, contact_no },
            { new: true }
        );
        if (!updateOrder) return res.status(404).json({ message: "Order not found" });
        res.json({ message: "Order updated successfully", order: updateOrder });
    }
    catch (err) {
        res.status(500).send('Server Error');
    }
})
app.delete("/order/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await order.findOneAndDelete({
      _id: req.params.id,        
      user: req.user.id,     
    });

    if (!deleted) {
      return res.status(404).json({ message: "Order not found or unauthorized" });
    }

    res.json({ message: "Order cancelled successfully" });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});