var superagent = require('superagent');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var app = require('../server.js').app;

describe('Player creator API', function() {
  var id;

  //testing the POST function of the JSON API
  it('can successfully create a new player', function(done) {
    superagent.post('http://localhost:3000/api/add-user')
      .send({
        username: 'Kyle',
        email: 'kyle@example.com',
        password: 'password'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body._id).to.not.be.eql(null);
        expect(res.body.username).to.be.eql('Kyle');
        expect(res.body.basic.email).to.be.eql('kyle@example.com');
        expect(res.body.basic.password).to.be.eql('password');
        id = res.body._id;

        done();
      })
  });

  //testing if we can see all the Player models in our standing
  it('can successfully show you players', function(done){
    superagent.get('http://localhost:3000/api/standings')
    .end(function(err, res){
        console.log(res.body);
        id = res.body[0]._id;
        expect(err).to.eql(null);
        expect(res.body[0]._id).to.be.eql(id);
        expect(res.body[0].username).to.be.eql('Kyle');
        expect(res.body[0].basic.email).to.be.eql('kyle@example.com');
        expect(res.body[0].basic.password).to.be.eql('password');
        done();
      })
  });
});