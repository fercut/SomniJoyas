import 'dotenv/config';

const config = {
      port: process.env.PORT || 8080,
    app: {
        secretKey: process.env.SECRET_KEY,
        secretRoot: process.env.SECRET_ROOT,
    },
    database: {
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        cluster: process.env.MONGODB_CLUSTER,
        bbdd: process.env.MONGODB_BBDD,
    },
};

export default config;
