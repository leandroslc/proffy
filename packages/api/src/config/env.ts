const envName = process.env.NODE_ENV?.toLowerCase() || 'development';

export default {
  name: envName,
};
