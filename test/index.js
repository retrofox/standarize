var standarize = require('../');

describe('standarize(string)', function(){
  it('should return a string equal to \'Hosip Radosevic\'', function(){
    standarize('Josip Radošević').should.be.equal('Josip Radosevic');
  });

  it('should return a string equal to \'aeiouAEIOU\'', function(){
    standarize('áéíóúÁÉÍÓÚ').should.be.equal('aeiouAEIOU');
  });
});
