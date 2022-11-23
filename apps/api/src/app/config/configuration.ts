export default () => ({
    port: parseInt(process.env.PORT, 10) || 3333,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017
    }
  });