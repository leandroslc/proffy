import axios from 'axios';
import { CreateClass } from '../models';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const service = {
  connections: {
    getTotal: () => api.get('connections'),
  },
  classes: {
    create: (createClass: CreateClass) => api.post('classes', createClass),
  },
};

export default service;
