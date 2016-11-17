'use strict';
var nodemailer = require('nodemailer');

describe('magia', function () {
    var transporter = nodemailer.createTransport('smtps://luxofttest1002%40gmail.com:b55rkrgb13@smtp.gmail.com');
   it('go go little girl', function () {
      browser.ignoreSynchronization = true;
      browser.get('http://seleniumcamp.com/registration/');
      var prom = $('div.row>div:nth-child(1)>div>div.stage-left').getText();
       var mailOptions1 = {
           from: 'luxofttest1002@gmail.com', // sender address
           to: 'luxofttest1001@gmail.com', // list of receivers
           subject: 'Hello ✔', // Subject line
           text: 'Hello world ?', // plaintext body
           html: '<b>Hello world ?</b>' // html body
       };

       var mailOptions2 = {
           from: 'luxofttest1002@gmail.com', // sender address
           to: 'luxofttest1002@gmail.com', // list of receivers
           subject: 'Hello ✔', // Subject line
           text: 'Hello world ?', // plaintext body
           html: '<b>Hello world ?</b>' // html body
       };

       transporter.sendMail(mailOptions1, function(error, info){
           if(error){
               return console.log(error);
           }
           console.log('Message sent: ' + info.response);
       });

      var text = prom.then(function(text) {
          transporter.sendMail(mailOptions1, function(error, info){
              if(error){
                  return console.log(error);
              }
              console.log('Message sent: ' + info.response);
          });
          console.log(text);
         // if (text === '0 left'){
         //     transporter.sendMail(mailOptions1, function(error, info){
         //         if(error){
         //             return console.log(error);
         //         }
         //         console.log('Message sent: ' + info.response);
         //     });
         // }
         // else {
         //     transporter.sendMail(mailOptions2, function(error, info){
         //         if(error){
         //             return console.log(error);
         //         }
         //         console.log('Message sent: ' + info.response);
         //     });
         // }
      });
      console.log(text === '1 left');
      // if (text === '1 left'){
      //    console.log('true')
      // }
      // else {
      //    console.log('false')
      // }
   })
});