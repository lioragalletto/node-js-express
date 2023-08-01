import  express  from "express";
import cors from 'cors'
import morgan from "morgan";
import routes from './routes/index.js'

const PORT = 80;

var app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json())

app.use('/api' , routes)

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})  
  







// app.get('/book', function (req, res, next) {
  //   res.json({msg: 'This is CORS-enabled for only example.com.'})
  // })

 
  // app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  //   res.json({msg: 'This is CORS-enabled for only example.com.'})
  // })
  // var corsOptions = {
  //   origin: 'http://localhost',
  //   optionsSuccessStatus: 200 
  // }
   
 
//   console.log('CORS-enabled web server listening on port 80')
// app.get('/students', (req, res) => {
// res.send('Welcome to the homepage !');
// });
// app.get('/courses', (req, res) => {
//     res.send('Welcome to the page !');
//     });

//     app.get('*', (req, res) => {
//         res.status(404)
//         res.send('404 Page Not found.');
//         })
// app.listen(3000, () => {
// console.log('Server is up on port 3000.');
// });

    
