import { MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <span className="text-primary-foreground/80 font-semibold tracking-wider uppercase text-sm" data-testid="text-contact-label">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" data-testid="text-contact-title">
                Let's Get Your Lawn Looking Great
              </h2>
              <p className="text-primary-foreground/90 mt-4 text-lg" data-testid="text-contact-description">
                Contact us today for a free, no-obligation quote. We are ready to help with all your lawn and garden needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="section-location-info">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold" data-testid="text-location-heading">Location</h4>
                  <p className="text-primary-foreground/90" data-testid="text-location-address">30 Coombes Pl, Orange NSW 2800</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="section-phone-info">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold" data-testid="text-phone-heading">Phone</h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:0402025585"
                      className="text-primary-foreground/90 font-semibold hover:text-primary-foreground"
                      data-testid="link-phone-1"
                    >
                      0402 025 585
                    </a>
                    <a
                      href="tel:0411110070"
                      className="text-primary-foreground/90 font-semibold hover:text-primary-foreground"
                      data-testid="link-phone-2"
                    >
                      0411 110 070
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="section-hours-info">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold" data-testid="text-hours-heading">Hours</h4>
                  <p className="text-primary-foreground/90" data-testid="text-hours-weekday">Mon - Fri: 7:30 AM - 5:00 PM</p>
                  <p className="text-primary-foreground/90 text-sm" data-testid="text-hours-weekend">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg" data-testid="section-google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2!2d149.0959!3d-33.2839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1388372fb04343%3A0xe41c17c7e9fac5c5!2s30%20Coombes%20Pl%2C%20Orange%20NSW%202800%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wright Way Lawn Service Location"
              />
            </div>
          </div>

          <div className="bg-background text-foreground p-8 rounded-2xl shadow-xl">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      data-testid="input-first-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    placeholder="123 Main St, Orange NSW 2800"
                    data-testid="input-address"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    data-testid="select-service"
                  >
                    <option value="Lawn Mowing" data-testid="select-option-lawn-mowing">Lawn Mowing</option>
                    <option value="Garden Maintenance" data-testid="select-option-garden-maintenance">Garden Maintenance</option>
                    <option value="Commercial Service" data-testid="select-option-commercial">Commercial Service</option>
                    <option value="Other" data-testid="select-option-other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your property..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  data-testid="button-submit-contact"
                >
                  Send Message
                </Button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
