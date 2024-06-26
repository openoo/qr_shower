const QRCode = require('qrcode')

QRCode.toString('我是你爸爸', {
    type: 'terminal'
}, function (err, data) {
    console.log(data)

})