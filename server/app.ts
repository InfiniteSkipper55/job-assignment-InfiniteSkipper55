import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectDB from './db';
import stateRoutes from './routes/stateRoutes';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api', stateRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
