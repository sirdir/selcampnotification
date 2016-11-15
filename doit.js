'use strict';
var nodemailer = require('nodemailer');

describe('magia', function () {
   var transporter = nodemailer.createTransport(transport[, defaults])
   it('go go little girl', function () {
      browser.ignoreSynchronization = true;
      browser.get('http://seleniumcamp.com/registration/');
      var prom = $('div.row>div:nth-child(1)>div>div.stage-left').getText();
      var text = prom.then(function(text) {
         if (text === '0 left'){
            transporter.sendMail({from : 'timur@kubay.com', to: 'luxofttest1002@gmail.com', subject: 'go and buy'});
         }
         else {
            transporter.sendMail({from : 'timur@kubay.com', to: 'luxofttest1001@gmail.com', subject: 'go and buy'});
         }
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