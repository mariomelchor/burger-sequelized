var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./models');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

require('./controllers/burgers_controllers.js')(app);

db.sequelize.sync().then(function(){
  // Initiate the listener.
  app.listen(port, function(){
    console.log('Listening on port %s ', port);
  });
});