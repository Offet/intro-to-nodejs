import {createTransport} from "nodemailer"

// in order to export it, add the keyword "export" to the const variable side
export const mailTransport = createTransport({
    host: "smtppro.zoho.com", //got this from zohomail.com
    port: 465,
    secure: true,
    auth: {
        user: "admin@shopa.life", //Michael's domain name shared
        pass: "E2uJpsHeHZj4",
    }
})