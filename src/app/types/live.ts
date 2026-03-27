export interface User {
  id: string;
  username: string;
  avatar: string;
  coins: number;
  creditCard?: {
    lastFour: string;
    brand: string;
  };
}

export interface Gift {
  id: string;
  name: string;
  icon: string;
  price: number;
  description?: string;
}

export interface Performer {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  totalGifts: number;
  isVerified: boolean;
}

export interface LiveStream {
  id: string;
  title: string;
  performer: Performer;
  thumbnail: string;
  viewers: number;
  duration: string;
  status: 'live' | 'scheduled';
  scheduledTime?: string;
  tags: string[];
}

export interface Post {
  id: string;
  performerId: string;
  type: 'text' | 'image' | 'video';
  content?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  createdAt: string;
  likes: number;
  comments: number;
}