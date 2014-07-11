var superagent = require('superagent');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var app = require('../server.js').app;

var username;
var email;
var password;
var jwt_token;

describe('Player creator API', function() {
  var id;

  //testing the POST function of the JSON API
  it('can successfully create a new player', function(done) {
    username = "Kyle"+ parseInt(Math.random()*1000);
    email = "kyle"+ parseInt(Math.random()*1000)+ "@example.com";
    password = "password" + parseInt(Math.random()*1000)+"?";

    superagent.post('http://localhost:3000/api/add-user')
      .send({
        username: username,
        email: email,
        password: password,
        leagues: []
      })
      .end(function(err, res) {
        jwt_token = res.body.jwt_token;
        expect(err).to.be.null;
        expect(res.body.jwt_token).to.not.be.null;
        done();
      });    
  });

  //testing if we can see all the Player models in our standing
  it('can successfully show you players', function(done){
    superagent.get('http://localhost:3000/api/standings')
    .end(function(err, res){
        console.log(res.body);
        id = res.body[0]._id;
        expect(err).to.eql(null);
        expect(res.body[0]._id).to.be.eql(id);
        expect(res.body[0].username).to.not.be.null;
        expect(res.body[0].basic.email).to.not.be.null;
        expect(res.body[0].basic.password).to.not.be.null;
        done();
      })
  });
});