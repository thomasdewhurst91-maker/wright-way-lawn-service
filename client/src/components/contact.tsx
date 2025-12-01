import { MapPin, Phone, Calendar, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "Lawn Mowing",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling us instead.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitMutation.mutate(data);
  };

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
                  <a
                    href="tel:0402025585"
                    className="text-primary-foreground/90 font-semibold hover:text-primary-foreground"
                    data-testid="link-phone"
                  >
                    0402 025 585
                  </a>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} data-testid="input-first-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} data-testid="input-last-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="0400 000 000" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Needed</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Lawn Mowing" data-testid="select-option-lawn-mowing">Lawn Mowing</SelectItem>
                          <SelectItem value="Garden Maintenance" data-testid="select-option-garden-maintenance">Garden Maintenance</SelectItem>
                          <SelectItem value="Commercial Service" data-testid="select-option-commercial">Commercial Service</SelectItem>
                          <SelectItem value="Other" data-testid="select-option-other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your property..."
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {submitMutation.isError && (
                  <p className="text-destructive text-sm" data-testid="text-form-error">
                    Failed to send message. Please try calling us instead.
                  </p>
                )}
                {submitMutation.isSuccess && (
                  <p className="text-primary text-sm font-medium" data-testid="text-form-success">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
