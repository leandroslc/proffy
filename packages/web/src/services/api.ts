import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface CreateClass {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedules: Array<{
    weekDay: string;
    from: string;
    to: string;
  }>;
}

const service = {
  connections: {
    getTotal: () => api.get('connections'),
  },
  classes: {
    create: (createClass: CreateClass) => api.post('classes', createClass),
  },
};

export default service;
