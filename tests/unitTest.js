describe('StandingController', function(){

  it('should create "players" model with 3 players', function() {
    var scope = {},
        ctrl = new StandingController(scope);

    expect(scope.players.length).toBe(3);
  });

});