export default {

    mailgun: {
        api_key: process.env.MAILGUN_API,
        domain: process.env.MAILGUN_DOMAIN
    },
    stripe: {
        sk_key: process.env.STRIPE_SK
    },
}