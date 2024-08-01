import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectDB from './db';
import stateRoutes from './routes/stateRoutes';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/states', stateRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
