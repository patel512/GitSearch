var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set('port', (process.env.PORT || 5000));

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

// set the home page route
app.get('/', function(request, response) {
  // Make sure index is in the right directory. 
  //In this case /app/index.html
  response.render('/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});