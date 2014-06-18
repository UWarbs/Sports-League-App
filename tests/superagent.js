var superagent = require('superagent');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();
var app = require('../server.js').app;

describe('Player creator API', function() {
  var id;

  //testing the POST function of the JSON API
  it('can successfully create a new note', function(done) {
    superagent.post('http://localhost:3000/api/add-user')
      .send({
        username: 'KillerKyle',
        wins: 3,
        losses: 4
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body._id).to.not.be.eql(null);
        expect(res.body.username).to.be.eql('KillerKyle');
        expect(res.body.wins).to.be.eql(3);
        expect(res.body.losses).to.be.eql(4);
        id = res.body._id;

        done();
      })
  });

  it('can successfully show you standings', function(done){
    superagent.get('http://localhost:3000/api/standings')
      .send({
        username: 'KillerKyle',
        wins: 3,
        losses: 4
      })
      .end(function(err, res){
        console.log(res.body);
        id = res.body._id;
        expect(err).to.eql(null);
        expect(res.body._id).to.be.eql(id);
        //expect(res.body.username).to.be.eql('KillerKyle');
        expect(res.body.wins).to.be.eql(3);
        expect(res.body.losses).to.be.eql(4);

        done();
      })
  });
});