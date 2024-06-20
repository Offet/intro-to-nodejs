import {program} from "commander"
import { mailTransport } from "./mailTransport.mjs";  // this was imported way later after the create and mail transports were cut off

// Note the createTransport and mailTransport have been commented out/cut because it is being moved to s differenct file
// import {createTransport} from "nodemailer"


// const mailTransport = createTransport({
//     host: "smtppro.zoho.com", //got this from zohomail.com
//     port: 465,
//     secure: true,
//     auth: {
//         user: "admin@shopa.life", //Michael's domain name shared
//         pass: "E2uJpsHeHZj4",
//     }
// })

program
.option("-s, --subject")
.option("-t, --to")
.option("-m, --message");

program.parse();

const options = program.opts();
const args = program.args;
// Doing a console.log for both options and args
console.log(options);
console.log(args);

if (options.subject && options.to && options.message) {
    // Write a message that says send email or message sent
    mailTransport.sendMail({
        from: "noreply@shopa.life",
        to: args[1],
        subject: args[0],
        text: args[2]
    })
    .then(console.log)
    .catch(console.log);
    // console.log("Message sent!");
} else {
    console.log("Some options are missing");
}