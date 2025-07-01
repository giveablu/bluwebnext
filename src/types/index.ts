export interface Recipient {
  id: number;
  name: string;
  story: string;
  image?: string;
  amount_needed?: number;
  amount_raised?: number;
}

export interface Donation {
  id: number;
  recipient_id: number;
  recipient_name?: string;
  recipient?: Recipient;
  amount: number;
  created_at: string;
  date?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
} 