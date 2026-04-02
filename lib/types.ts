export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  spiceLevel?: string;
  dietary?: string[];
}

export interface MenuCategory {
  id?: string;
  label?: string;
  name?: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ReservationPayload {
  date: string;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}
