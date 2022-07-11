// message du console log
console.log('ludolpr console log');


// import module global

const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();


// config handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// route fichier static
app.use('/assets', express.static('public'))

// router
app.get('/', function (req,res) {
    res.render('home')
   
})
app.get('/calculatrice', function (req,res) {
    res.render('calculatrice')
});

app.get('/guestnumber', function (req,res) {
    res.render('guestnumber')
});

// run server
app.listen(2022);