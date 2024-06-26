const QRCode = require('qrcode')

QRCode.toString('我是上帝', {
    type: 'terminal'
}, function (err, data) {
    console.log(data)

})