var expect = require('chai').expect;
var mongoose = require('mongoose');
var contr = require('./jobController.js')

var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      // TODO: Seed database with some jobs to run tests against. 
    
    });
  });

  // TODO: Write your tests for jobController here
  it('should have a method that create job', function (done) {
    expext(contr.createJob().to.equal(job))
  });

  it('should have a method that Get all jobs that have a salary greater than $50,000', function (done) {
    expext(contr.getHighPayingJobs().to.be(done))
  }); 

});
