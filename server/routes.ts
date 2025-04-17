import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Your message has been received successfully." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
