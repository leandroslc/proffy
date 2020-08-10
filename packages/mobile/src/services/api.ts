import Constants from 'expo-constants';
import axios from 'axios';
import { SearchClasses } from '../models';

const { manifest } = Constants;
const port = '3333';

let address: string | undefined = 'https://example.com';

if (typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev) {
  const ip = manifest.debuggerHost?.split(':').shift();

  address = `http://${ip}:${port}`;
}

const api = axios.create({
  baseURL: address,
});

const service = {
  connections: {
    getTotal: () => api.get('connections'),
    create: (userId: number) => api.post('connections', { userId }),
  },
  classes: {
    search: (searchClasses: SearchClasses) =>
      api.get('classes', { params: searchClasses }),
  },
};

export default service;
