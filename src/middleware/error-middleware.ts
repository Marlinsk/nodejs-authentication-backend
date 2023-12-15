import { AppError } from "@errors/AppError";
import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  error: Error & Partial<AppError>,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";
  
  return response.status(statusCode).json({ error: { problem: message } });
}
