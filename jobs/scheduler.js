const { CronJob } = require('cron')
const { Lamp } = require('../apis/firebase')

const lamp1 = new CronJob('* * * * * *', async function () {
  try {
    await Lamp.doc('zxkQKGrgpnOIPIfIhRg8').update({ status: true })
    console.log('cron success')
  } catch (err) {
    console.log(err, 'masuk error coy')
  }
}, null, false, 'Asia/Jakarta')


module.exports = { lamp1 }