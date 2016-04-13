import expect from 'expect.js';
import Gun from 'gun-level';
import fs from 'fs-extra';


describe.only('gundb', function(){

  before(function(){
    // console.log('creating db');
    var db = new Gun({level: {path: 'db'}});
    // console.log('db created');
  });

  after(function(){
    
    // console.log('removing db');
    fs.remove('db', function (err) {
      if (err) {
        return console.error('database dir not deleted: ', err);
      } else {
        console.log('database dir deleted');
      }
    });
  });

  it.only('creates a database', function(done){
    
    fs.ensureDir('db', function(err){
      expect(err).not.to.be(true);
      done();
    });

  });

});