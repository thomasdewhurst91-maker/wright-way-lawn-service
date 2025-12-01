import { type ContactForm } from "@shared/schema";

export interface IStorage {
  saveContactSubmission(contact: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: ContactForm[];

  constructor() {
    this.contactSubmissions = [];
  }

  async saveContactSubmission(contact: ContactForm): Promise<void> {
    this.contactSubmissions.push(contact);
  }
}

export const storage = new MemStorage();
