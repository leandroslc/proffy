interface User {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface ClassInfo {
  id: number;
  subject: string;
  description: string;
  cost: number;
  user: User;
}
