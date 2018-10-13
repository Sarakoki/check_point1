var job = require("../models/Job.js");

// Create a new job in the database
exports.createJob = function(job, callback) {
  // TODO
  job.createOne(
    { job: "job" },
    {
      function(err, data) {
        if (err) {
          console.log(err);
        } else {
          res.send(data);
        }
      }
    }
  );
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function(callback) {
  // TODO
  Job.find({ salary: { $gt: 50000 } }, callback);
};
