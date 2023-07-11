var nodemailer = require('nodemailer')
var jade = require('jade');

exports.sendMail = function (code, email) {

    console.log(email + " -- ", code, email);

    var transporter = nodemailer.createTransport({
        host: 'mail.gmail.com',
        port: 587,
        auth: {
            user: 'react.spineor@gmail.com',
            pass: 'Pandey@233'
        },
        authMethod: 'NTLM',
        secure: false,
        // here it goes
        tls: { rejectUnauthorized: false },
        debug: true
    });

    var mailOptions = {
        from: "react.spineor@gmail.com",
        to: email,
        subject: "Redeem your voucher before expiration date!",
        // text: "Your Verification code is" + code,
        html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redeem you voucher</title>
    </head>
    
    <body>
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
    
            <!-- START HEADER/BANNER -->
    
            <tbody>
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top"
                                        background="https://designmodo.com/demo/emailtemplate/images/header-background.jpg"
                                        bgcolor="#66809b" style="background-size:cover; background-position:top;height="
                                        400""="">
    
                                        <table class="col-600" width="600" height="200" border="0" align="center"
                                            cellpadding="0" cellspacing="0">
    
                                            <tbody>
                                                <tr>
                                                    <td height="40"></td>
                                                </tr>
    
    
                                                <tr>
                                                    <td align="center" style="line-height: 0px;">
                                                        <!-- 										<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/logo.png" width="109" height="103" alt="logo"> -->
                                                        <div style="width:400px">
                                                            <svg id="Layer_1" data-name="Layer 1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 551.94 86.17" aria-label="Plusmore.com">
                                                                <path
                                                                    d="M45.37,5A26.46,26.46,0,0,1,68,17.28,23.2,23.2,0,0,1,71.54,30a24,24,0,0,1-3.81,13.25,27.76,27.76,0,0,1-10.22,9.42,28.85,28.85,0,0,1-14,3.48H13V86.37H.3V5ZM42.55,44.07a16.21,16.21,0,0,0,7.8-1.92A15.35,15.35,0,0,0,56.05,37a12.44,12.44,0,0,0,2.11-7,10.75,10.75,0,0,0-2.11-6.5,15,15,0,0,0-5.7-4.65,17.57,17.57,0,0,0-7.8-1.75H13v27Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#1f569e">
                                                                </path>
                                                                <path d="M73.48,86.37V.37H85.57v86Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#1f569e">
                                                                </path>
                                                                <path
                                                                    d="M141.8,54.41V24.19h12.09v61H141.8V74.63q-3.28,4.53-10.21,8.13T114.8,86.37a25.73,25.73,0,0,1-13.73-3.61,24.67,24.67,0,0,1-9.22-10.34,36.12,36.12,0,0,1-3.34-16.15V24.19H100.6V52.08q0,10.94,4.52,16.8t14.61,5.86a24.83,24.83,0,0,0,11.09-2.44,19.18,19.18,0,0,0,11-17.89Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#1f569e">
                                                                </path>
                                                                <path
                                                                    d="M210.93,40.81a41.54,41.54,0,0,0-11.27-5.75,38.54,38.54,0,0,0-12.56-2.27,55.41,55.41,0,0,0-7.69.58,20.63,20.63,0,0,0-6.92,2.15,5,5,0,0,0-2.88,4.59,5.44,5.44,0,0,0,2.82,4.42,24,24,0,0,0,7.16,2.85q4.46,1.09,9.74,2t10.21,2.15a48.23,48.23,0,0,1,9.16,3.14,18.53,18.53,0,0,1,6.57,4.88,11,11,0,0,1,2.47,7.26,15.48,15.48,0,0,1-3.94,10.75,24.12,24.12,0,0,1-10.44,6.57A44.63,44.63,0,0,1,189,86.37a62.83,62.83,0,0,1-18.49-2.62,32.28,32.28,0,0,1-14.37-8.89l8.21-7.44A31.56,31.56,0,0,0,174.66,74,35.86,35.86,0,0,0,188,76.37a55.05,55.05,0,0,0,7.75-.58,18.88,18.88,0,0,0,7-2.27,5.3,5.3,0,0,0,2.88-4.82,4.74,4.74,0,0,0-2.82-4.24,28,28,0,0,0-7.45-2.61q-4.63-1.05-9.92-1.86-5.64-1.05-10.68-2.27a38.7,38.7,0,0,1-8.92-3.25,16.24,16.24,0,0,1-6.11-5.41,15.09,15.09,0,0,1-2.23-8.48,12.85,12.85,0,0,1,3.94-9.41,25.83,25.83,0,0,1,10.62-6.11A48.68,48.68,0,0,1,187,22.91a62.3,62.3,0,0,1,10.79,1A51,51,0,0,1,208.58,27a28.06,28.06,0,0,1,8.8,5.64Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#1f569e">
                                                                </path>
                                                                <path
                                                                    d="M231.62,5l33.57,43.23L298.88,5h12.2V86.37H298.41V52.08q0-7.55.29-14.29c.19-4.49.57-9,1.11-13.48L269,63H261.2l-30.64-38.7q.83,6.74,1.06,13.48t.24,14.29V86.37H219.18V5Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#d42d27">
                                                                </path>
                                                                <path
                                                                    d="M390.62,54.64a28,28,0,0,1-5,16.44A33.59,33.59,0,0,1,371.9,82.3a51.94,51.94,0,0,1-40.31,0A33.42,33.42,0,0,1,317.8,71.08a28,28,0,0,1-5-16.44,28,28,0,0,1,5-16.44A33.42,33.42,0,0,1,331.59,27a51.94,51.94,0,0,1,40.31,0A33.59,33.59,0,0,1,385.64,38.2,28,28,0,0,1,390.62,54.64Zm-12.32,0a17.09,17.09,0,0,0-3.4-10.86,23.17,23.17,0,0,0-9.57-7.33,33.88,33.88,0,0,0-13.56-2.61,34.3,34.3,0,0,0-13.61,2.61,23.11,23.11,0,0,0-9.63,7.33,17.09,17.09,0,0,0-3.4,10.86,16.93,16.93,0,0,0,3.4,10.75,23.46,23.46,0,0,0,9.63,7.38,33.63,33.63,0,0,0,13.61,2.67,33.22,33.22,0,0,0,13.56-2.67,23.52,23.52,0,0,0,9.57-7.38A16.93,16.93,0,0,0,378.3,54.64Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#d42d27">
                                                                </path>
                                                                <path
                                                                    d="M438.69,39.53A23.78,23.78,0,0,0,433,37.44a27.3,27.3,0,0,0-6.4-.81,21.78,21.78,0,0,0-18.72,9.88,16.31,16.31,0,0,0-2.76,8.94V86.37H392.91v-61h12.21V38.49a32,32,0,0,1,10.27-10.34,24.2,24.2,0,0,1,13.2-4.07,34.52,34.52,0,0,1,7.52.81,17.23,17.23,0,0,1,5.74,2.21Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#d42d27">
                                                                </path>
                                                                <path
                                                                    d="M506.82,77.18h-.11a45.16,45.16,0,0,1-8.34,4.48,60.12,60.12,0,0,1-11,3.43,58.44,58.44,0,0,1-12.21,1.28,50.69,50.69,0,0,1-20.83-4,34.21,34.21,0,0,1-14.09-11,26.55,26.55,0,0,1-5.1-16,29.46,29.46,0,0,1,3.11-13.72,30.4,30.4,0,0,1,8.51-10.22A39.18,39.18,0,0,1,459.17,25a49.57,49.57,0,0,1,14.91-2.21A41.74,41.74,0,0,1,492,26.57,32.33,32.33,0,0,1,504.77,37a25.79,25.79,0,0,1,4.75,15.45l-.12,6H447.55q1.63,7.8,9.68,12.27t20,4.47q8.91,0,14.67-2.44a90.27,90.27,0,0,0,9.38-4.53ZM474.08,33.84a39.78,39.78,0,0,0-17.14,3.43A16.46,16.46,0,0,0,447.67,49H497.2V47.2a11.51,11.51,0,0,0-4-7,24.21,24.21,0,0,0-8.45-4.71A33.64,33.64,0,0,0,474.08,33.84Z"
                                                                    transform="translate(-0.3 -0.19)" style="fill:#d42d27">
                                                                </path>
                                                                <path d="M521.3,16.83V2.66h-6V.19H530V2.66h-6.14V16.83Z"
                                                                    transform="translate(-0.3 -0.19)"></path>
                                                                <path
                                                                    d="M536.14.19,542.94,9,549.76.19h2.47V16.83h-2.57v-7c0-1,0-2,.06-2.92s.12-1.84.23-2.76l-6.25,7.91h-1.57l-6.21-7.91c.11.92.19,1.84.22,2.76s.05,1.89.05,2.92v7h-2.57V.19Z"
                                                                    transform="translate(-0.3 -0.19)"></path>
                                                            </svg>
                                                        </div>
                                                    </td>
                                                </tr>
    
                                                <tr>
                                                    <td align="center"
                                                        style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
                                                        Plus More, LLC owns and operates PlusMore.com.
                                                    </td>
                                                </tr>
    
    
                                                <tr>
                                                    <td height="50"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
    
    
                <!-- END HEADER/BANNER -->
    
    
                <!-- START 3 BOX SHOWCASE -->
    
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
                            <tbody>
                                <tr>
                                    <td height="10"></td>
                                </tr>
                                <tr>
                                    <td  align="center">
    
    
                                        <table  class="col3" width="183" border="0" align="center" cellpadding="0"
                                            cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td height="30"></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="insider" width="133" border="0" align="center"
                                                            cellpadding="0" cellspacing="0">
    
                                                            <tbody>
                                                                <tr align="center" style="line-height:0px;">
                                                                    <td>
                                                                        <img style="display:block; line-height:0px; font-size:0px; border:0px;"
                                                                            src="https://designmodo.com/demo/emailtemplate/images/icon-about.png"
                                                                            width="69" height="78" alt="icon">
                                                                    </td>
                                                                </tr>
    
    
                                                                <tr>
                                                                    <td height="15"></td>
                                                                </tr>
    
    
                                                                <tr align="center">
                                                                    <td
                                                                        style="font-family: 'Raleway', Arial, sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">
                                                                        About Us</td>
                                                                </tr>
    
    
                                                                <tr>
                                                                    <td height="10"></td>
                                                                </tr>
    
    
                                                                <tr align="center">
                                                                    <td
                                                                        style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
                                                                        We are a huge team working on to satisfied our cutomer need..</td>
                                                                </tr>
    
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="30"></td>
                                                </tr>
                                            </tbody>
                                        </table>
    
    
    
    
    
                                        <table width="1" height="20" border="0" cellpadding="0" cellspacing="0"
                                            align="left">
                                            <tbody>
                                                <tr>
                                                    <td height="20"
                                                        style="font-size: 0;line-height: 0;border-collapse: collapse;">
                                                        <p style="padding-left: 24px;">&nbsp;</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
    
    
    
                                        <table class="col3" width="183" border="0" align="center" cellpadding="0"
                                            cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td height="30"></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <table class="insider" width="133" border="0" align="center"
                                                            cellpadding="0" cellspacing="0">
    
                                                            <tbody>
                                                                <tr align="center" style="line-height:0px;">
                                                                    <td>
                                                                        <img style="display:block; line-height:0px; font-size:0px; border:0px;"
                                                                            src="https://designmodo.com/demo/emailtemplate/images/icon-team.png"
                                                                            width="69" height="78" alt="icon">
                                                                    </td>
                                                                </tr>
    
    
                                                                <tr>
                                                                    <td height="15"></td>
                                                                </tr>
    
    
                                                                <tr align="center">
                                                                    <td
                                                                        style="font-family: 'Raleway', sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">
                                                                        Our Team</td>
                                                                </tr>
    
    
                                                                <tr>
                                                                    <td height="10"></td>
                                                                </tr>
    
    
                                                                <tr align="center">
                                                                    <td
                                                                        style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
                                                                        Read more about our team from our site.</td>
                                                                </tr>
    
    
    
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="30"></td>
                                                </tr>
                                            </tbody>
                                        </table>
    
    
    
                                        <table width="1" height="20" border="0" cellpadding="0" cellspacing="0"
                                            align="left">
                                            <tbody>
                                                <tr>
                                                    <td height="20"
                                                        style="font-size: 0;line-height: 0;border-collapse: collapse;">
                                                        <p style="padding-left: 24px;">&nbsp;</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                        </table>
                    </td>
                </tr>
    
                <tr>
                    <td height="5"></td>
                </tr>
    
    
                <!-- END 3 BOX SHOWCASE -->
    
    
    
    
                <!-- START WHAT WE DO -->
    
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="margin-left:20px; margin-right:20px;">
    
    
    
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <table class="col-600" width="600" border="0" align="center" cellpadding="0"
                                            cellspacing="0"
                                            style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                                            <tbody>
                                                <tr>
                                                    <td height="50"></td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <div style="font-weight:bold; font-size:30px">Redeem your code<span
                                                                style="color:blue"> ${code}</span></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
    
    
                                <!-- END WHAT WE DO -->
    
    
    
    
    
    
                                <!-- START FOOTER -->
    
                                <tr>
                                    <td align="center">
                                        <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                                            <tbody>
                                                <tr>
                                                    <td height="50"></td>
                                                </tr>
                                                <tr>
                                                    <td align="center" bgcolor="#34495e"
                                                        background="https://designmodo.com/demo/emailtemplate/images/footer.jpg"
                                                        height="100">
                                                        <table class="col-600" width="600" border="0" align="center"
                                                            cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">
                                                                        Follow us for some cool stuffs</td>
                                                                </tr>
    
    
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
    
    
                                                            </tbody>
                                                        </table>
                                                        <table align="center" width="35%" border="0" cellspacing="0"
                                                            cellpadding="0">
                                                            <tbody style="padding-bottom:20px">
                                                                <tr>
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="https://www.facebook.com/plusmore"
                                                                            target="_blank"> <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" class="margin" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="https://twitter.com/plusmore"
                                                                            target="_blank"> <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="https://plus.google.com/plusmore/posts"
                                                                            target="_blank"> <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png">
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
    
    
    
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <!-- END FOOTER -->
            </tbody>
        </table>
    </body>
    </html>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("mail send error", error);
        } else {
            console.log("Email sent: " + info.response);
        }

    });


}
