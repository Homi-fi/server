/* istanbul ignore file */

const { CronJob } = require('cron')
const { Lamp } = require('../apis/firebase')

const lamp1On = new CronJob('* * * * * *', async function () {
  try {
    await Lamp.doc('zxkQKGrgpnOIPIfIhRg8').update({ status: true })
    console.log('cron on success')
  } catch (err) {
    console.log(err, 'masuk error cron on')
  }
}, null, false, 'Asia/Jakarta')

const lamp1Off = new CronJob('* * * * * *', async function () {
  try {
    await Lamp.doc('zxkQKGrgpnOIPIfIhRg8').update({ status: false })
    console.log('cron off success')
  } catch (err) {
    console.log(err, 'masuk error cron false')
  }
}, null, false, 'Asia/Jakarta')

const lamp2On = new CronJob('* * * * * *', async function () {
  try {
    await Lamp.doc('oIqgb45ze2fYsVeIiGIW').update({ status: true })
    console.log('cron on success')
  } catch (err) {
    console.log(err, 'masuk error cron on')
  }
}, null, false, 'Asia/Jakarta')

const lamp2Off = new CronJob('* * * * * *', async function () {
  try {
    await Lamp.doc('oIqgb45ze2fYsVeIiGIW').update({ status: false })
    console.log('cron off success')
  } catch (err) {
    console.log(err, 'masuk error cron false')
  }
}, null, false, 'Asia/Jakarta')

module.exports = { lamp1On, lamp1Off, lamp2On, lamp2Off }