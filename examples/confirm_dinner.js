//confirm function to verify if user wants to eat dinner

var reply = require('./../');

reply.confirm('Do you want to join us for dinner?', function(err, yes){
  if (!err && yes)
    console.log("Excellent, please grab a sit!");
  else
    console.log("May be next time!");
});
