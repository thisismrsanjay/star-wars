var express = require('express');
var routes =  require('./routes/index');
var app = express();
var path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

//home
app.get('/',routes.home);
//movie_single
app.get('/star_wars_episode/:episode_number?',routes.movie_single)
app.get('*',routes.notFound)

app.listen(process.env.PORT|| 3000);
