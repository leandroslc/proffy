interface User {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface ClassInfo {
  id: number;
  subject: string;
  cost: number;
  user: User;
}
