import { SMTP_PASSWORD } from "../../../config";
export default function (req, res) {
    // console.log(req, "req is ");
    let nodemailer = require("nodemailer");
    // console.log("SMTP_PASSWORD", SMTP_PASSWORD);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "sridharreddypalle1@gmail.com",
            pass: SMTP_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: "thomas.webeqt@gmail.com",
        to: "t@webeqt.com",
        subject: req.body.contactState.name,
        text: req.body.contactState.message,
        html: `<p> <div><b>Name:</b> <span>${req.body.contactState.name}</span><br/><b>appInfo:</b>${req.body.contactState.appInfo}<br/><b>Info :</b>${req.body.contactState.info} <br/> Sent from: ${req.body.contactState.email}</div> </p>`,
    };
    try {
        transporter.sendMail(mailData, function (err, info) {
            if (err) {
                // console.log(err.message, "got and error ");
                res.status(400);
                res.send("Fail");
            } else {
                // console.log("SUCCESSfully sent", info);
                res.send("Success");
                res.status(200);
            }
        });
    } catch (e) {
        // console.log("error is ", e.message);
        res.status(400);
        res.send("Fail");
    }
    // console.log(req.body.contactState);
}
