import axios from 'axios';
import { CreateClass, SearchClass } from '../models';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const service = {
  connections: {
    getTotal: () => api.get('connections'),
    create: (userId: number) => api.post('connections', { userId }),
  },
  classes: {
    search: (searchClass: SearchClass) =>
      api.get('classes', { params: searchClass }),
    create: (createClass: CreateClass) => api.post('classes', createClass),
  },
};

export default service;
