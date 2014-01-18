
/*
 * GET home page.
 */

exports.index = function(req, res){
  var gpio = require("pi-gpio");
  gpio.open(7, "output", function(err) {
    gpio.write(7, 1, function() {   
      setTimeout(2000, function() {
        gpio.close(7);
      })
    });
  });
  res.render('index', { title: 'Express' });
};