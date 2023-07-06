export interface OrderRequest {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
  imageUrls: string[];
}

export interface Order {
  uid: string;
  created: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
  fileURLs: string[];
}


