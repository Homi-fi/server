const { db } = require('../configs/firebase')

const Door = db.collection('door')
const Lamp = db.collection('lamps')
const Room = db.collection('rooms')
const Sensor = db.collection('sensor')

module.exports = { Door, Lamp, Room, Sensor }