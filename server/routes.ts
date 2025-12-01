import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ error: "Invalid form data", details: result.error });
      }

      const contactData = result.data;
      
      await storage.saveContactSubmission(contactData);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER || "wright.way.lawn.service@gmail.com",
        subject: `New Contact Form Submission - ${contactData.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          <p><strong>Service:</strong> ${contactData.service}</p>
          <p><strong>Message:</strong> ${contactData.message || "No message provided"}</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }

      return res.status(200).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
