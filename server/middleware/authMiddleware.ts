import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

// Middleware to check if the user is authenticated
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Middleware to check if the user has a specific role (if your application has role-based access control)
export const hasRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated() && req.user && (req.user as any).role === role) {
      return next();
    }
    res.status(403).json({ message: 'Forbidden' });
  };
};
