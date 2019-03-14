export default {

    mysql: {
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_SCHEMA,
        password: process.env.DB_PASS
    },
    auth: {
        secret: process.env.SECRET
    },
    mailgun: {
        api_key: process.env.MAILGUN_API,
        domain: process.env.MAILGUN_DOMAIN
    },
    stripe: {
        sk_key: process.env.STRIPE_SK
    },
    weather: {
        api_key: process.env.WEATHER_API
    }
}