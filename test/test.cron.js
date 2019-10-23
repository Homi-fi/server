const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')
chai.use(chaiHttp)
chai.use(sinonChai)
const expect = chai.expect
chai.should()
const { lamp1Off, lamp1On, lamp2Off, lamp2On } = require('../jobs/scheduler')

// lamp 1 on
const spyL1OnStop = sinon.spy(lamp1On, 'stop')
const spyL1OnSetTime = sinon.spy(lamp1On, 'setTime')
const spyL1OnStart = sinon.spy(lamp1On, 'start')
// lamp 1 off
const spyL1OffStop = sinon.spy(lamp1Off, 'stop')
const spyL1OffSetTime = sinon.spy(lamp1Off, 'setTime')
const spyL1OffStart = sinon.spy(lamp1Off, 'start')
// lamp 2 on
const spyL2OnStop = sinon.spy(lamp2On, 'stop')
const spyL2OnSetTime = sinon.spy(lamp2On, 'setTime')
const spyL2OnStart = sinon.spy(lamp2On, 'start')
// lamp 2 off
const spyL2OffStop = sinon.spy(lamp2Off, 'stop')
const spyL2OffSetTime = sinon.spy(lamp2Off, 'setTime')
const spyL2OffStart = sinon.spy(lamp2Off, 'start')

describe('Cron Test', function () {
  describe('GET /cron', function () {
    it('should connect without fail', function (done) {
      chai.request(app).get('/cron').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          expect(res.body.message).to.equal('Cron route connected')
          done()
        }
      )
    })

    // lamp 1
    it('should call lamp1-on cron start', function (done) {
      chai.request(app).get('/cron/lamp/12:0:1:Lamp%201-on').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL1OnStop.should.have.been.called
          spyL1OnSetTime.should.have.been.calledAfter(spyL1OnStop)
          spyL1OnStart.should.have.been.calledAfter(spyL1OnSetTime)
          expect(res.body.message).to.equal('Lamp 1-on cron started')
          done()
        }
      )
    })

    it('should call lamp1-on cron stop', function (done) {
      chai.request(app).get('/cron/lamp/12:0:0:Lamp%201-on').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL1OnStop.should.have.been.called
          expect(res.body.message).to.equal('Lamp 1-on cron stopped')
          done()
        }
      )
    })

    it('should call lamp1-off cron start', function (done) {
      chai.request(app).get('/cron/lamp/12:0:1:Lamp%201-off').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL1OffStop.should.have.been.called
          spyL1OffSetTime.should.have.been.calledAfter(spyL1OffStop)
          spyL1OffStart.should.have.been.calledAfter(spyL1OffSetTime)
          expect(res.body.message).to.equal('Lamp 1-off cron started')
          done()
        }
      )
    })

    it('should call lamp1-off cron stop', function (done) {
      chai.request(app).get('/cron/lamp/12:0:0:Lamp%201-off').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL1OffStop.should.have.been.called
          expect(res.body.message).to.equal('Lamp 1-off cron stopped')
          done()
        }
      )
    })

    // lamp 2
    it('should call lamp2-on cron start', function (done) {
      chai.request(app).get('/cron/lamp/12:0:1:Lamp%202-on').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL2OnStop.should.have.been.called
          spyL2OnSetTime.should.have.been.calledAfter(spyL2OnStop)
          spyL2OnStart.should.have.been.calledAfter(spyL2OnSetTime)
          expect(res.body.message).to.equal('Lamp 2-on cron started')
          done()
        }
      )
    })

    it('should call lamp2-on cron stop', function (done) {
      chai.request(app).get('/cron/lamp/12:0:0:Lamp%202-on').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL2OnStop.should.have.been.called
          expect(res.body.message).to.equal('Lamp 2-on cron stopped')
          done()
        }
      )
    })

    it('should call lamp2-off cron start', function (done) {
      chai.request(app).get('/cron/lamp/12:0:1:Lamp%202-off').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL2OffStop.should.have.been.called
          spyL2OffSetTime.should.have.been.calledAfter(spyL2OffStop)
          spyL2OffStart.should.have.been.calledAfter(spyL2OffSetTime)
          expect(res.body.message).to.equal('Lamp 2-off cron started')
          done()
        }
      )
    })

    it('should call lamp2-off cron stop', function (done) {
      chai.request(app).get('/cron/lamp/12:0:0:Lamp%202-off').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          spyL2OffStop.should.have.been.called
          expect(res.body.message).to.equal('Lamp 2-off cron stopped')
          done()
        }
      )
    })

    it('should not calling any lamp', function (done) {
      chai.request(app).get('/cron/lamp/12:0:0:Lamp%203').end(
        function (err, res) {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body).to.have.property('message')
          expect(res.body.message).to.equal('No lamp has been found')
          done()
        })
    })
  })
})