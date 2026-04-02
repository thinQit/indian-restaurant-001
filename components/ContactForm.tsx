"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export function ContactForm({
  headline = "Reserve Your Throne",
  subheadline = "Join us for an evening of royal indulgence",
  contactInfo = [
    { icon: "📍", label: "Address", value: "102 Royal Palace Drive, London, W1 4NY" },
    { icon: "📞", label: "Phone", value: "+44 20 7946 2211" },
    { icon: "🕰️", label: "Hours", value: "Daily · 5:00 PM – 11:30 PM" },
  ],
}: ContactFormProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl italic font-bold tracking-tight text-[#af8d11]">{headline}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">{subheadline}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border-0 bg-card text-card-foreground">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest text-[#ff7722]">Full Name</Label>
                    <Input id="name" placeholder="Your Name" className="bg-transparent border-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-[#ff7722]">Email Address</Label>
                    <Input id="email" type="email" placeholder="email@example.com" className="bg-transparent border-input" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-xs uppercase tracking-widest text-[#ff7722]">Date</Label>
                    <Input id="date" type="date" className="bg-transparent border-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-xs uppercase tracking-widest text-[#ff7722]">Guests</Label>
                    <Input id="guests" placeholder="2 People" className="bg-transparent border-input" />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full text-lg rounded-xl py-6 text-[#552000] bg-[linear-gradient(135deg,#ffb4a8,#ff7722)] hover:opacity-90"
                >
                  Secure My Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map(function (info, i) {
              return (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
            })}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577070/site-images/restaurant/10636732.jpg"
                alt="Saffron Palace interior"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
