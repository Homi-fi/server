const { CronTime } = require('cron')
const { lamp1On, lamp1Off, lamp2On, lamp2Off } = require('../jobs/scheduler')

class CronController {
  static Lamp(req, res, next) {
    const { time } = req.params
    const hours = time.split(':')[0]
    const minutes = time.split(':')[1]
    const status = parseInt(time.split(':')[2])
    const name = decodeURI(time.split(':')[3])

    switch (name) {
      case 'Lamp 1-on':
        if (!!status) {
          lamp1On.stop()
          lamp1On.setTime(new CronTime(`${minutes} ${hours} * * *`))
          lamp1On.start()
          res.status(200).json({ message: 'Lamp 1-on cron started' })
        } else {
          lamp1On.stop()
          res.status(200).json({ message: 'Lamp 1-on cron stopped' })
        }
        break
      case 'Lamp 1-off':
        if (!!status) {
          lamp1Off.stop()
          lamp1Off.setTime(new CronTime(`${minutes} ${hours} * * *`))
          lamp1Off.start()
          res.status(200).json({ message: 'Lamp 1-off cron started' })
        } else {
          lamp1Off.stop()
          res.status(200).json({ message: 'Lamp 1-off cron stopped' })
        }
        break
      case 'Lamp 2-on':
        if (!!status) {
          lamp2On.stop()
          lamp2On.setTime(new CronTime(`${minutes} ${hours} * * *`))
          lamp2On.start()
          res.status(200).json({ message: 'Lamp 2-on cron started' })
        } else {
          lamp2On.stop()
          res.status(200).json({ message: 'Lamp 2-on cron stopped' })
        }
        break
      case 'Lamp 2-off':
        if (!!status) {
          lamp2Off.stop()
          lamp2Off.setTime(new CronTime(`${minutes} ${hours} * * *`))
          lamp2Off.start()
          res.status(200).json({ message: 'Lamp 2-off cron started' })
        } else {
          lamp2Off.stop()
          res.status(200).json({ message: 'Lamp 2-off cron stopped' })
        }
        break
    }
  }
}

module.exports = CronController