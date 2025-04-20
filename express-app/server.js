const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set Handlebars as view engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views/partials'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/imprint', (req, res) => {
  res.render('imprint', { title: 'Imprint' });
});
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});
// app.get('*', (req, res) => {
//     res.render('404', { title: '404' });
// });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
