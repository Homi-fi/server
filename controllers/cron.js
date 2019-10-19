const { CronTime } = require('cron')
const QRCode = require('qrcode')
const { lamp1 } = require('../jobs/scheduler')

class CronController {
  static Lamp1(req, res, next) {
    const { time } = req.params
    const hour = time.split(':')[0]
    const minute = time.split(':')[1]
    const status = parseInt(time.split(':')[2])

    if (!!status) {
      lamp1.stop()
      lamp1.setTime(new CronTime(`${minute} ${hour} * * *`))
      lamp1.start()
      res.status(200).json({ message: 'Cron success' })
    } else {
      lamp1.stop()
      res.status(200).json({ message: 'Cron stopped' })
    }
  }

  static qr(req, res, next) {
    // QRCode.toDataURL('I am a pony!', function (err, url) {
    //   res.status(200).json({ message: url })
    // })

    QRCode.toString('I am a pony!', { type: 'terminal' }, function (err, url) {
      console.log(url)
    })
  }
}

module.exports = CronController