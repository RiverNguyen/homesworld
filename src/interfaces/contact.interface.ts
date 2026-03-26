export interface AcfResponse {
  acf: Acf;
}

export interface Acf {
  contact: Contact;
}

// ================== CONTACT ==================
export interface Contact {
  title: string;
  opening_hours: string;
  location: Location;
  social_links: SocialLinks;
}

// ================== LOCATION ==================
export interface Location {
  address: string;
  link_google_map: string;
}

// ================== SOCIAL ==================
export interface SocialLinks {
  follow_us_title: string;
  social: SocialItem[];
}

export interface SocialItem {
  icon: string;
  image: string;
  link: Link;
}

export interface Link {
  title: string;
  url: string;
  target: '_self' | '_blank' | string;
}