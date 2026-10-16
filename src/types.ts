export interface Room {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  capacity: string;
  size: string;
  price: number;
  images: string[];
  features: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'detail' | 'nature';
  caption: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  content: string;
  rating: number;
  roomName: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
}
