const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const morgan = require('morgan');
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => 
{res.sendFile(path.join(__dirname, 'public', 'index.html'));}
);
//app.listen(port, () => 
//{console.log(`Server is running at http://localhost:${port}/`);}
//);




const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Папка для сохранения загруженных файлов
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Сохраняем файл под оригинальным именем
  }
});
const upload = multer({ storage: storage });


const MongoClient = require('mongodb').MongoClient;
let db;
const url =  'mongodb://user:password@10.0.2.22:27017/databaseName';
// const url =  'mongodb://localhost:21017/databaseName';
MongoClient.connect(url, (err, database) => 
{
  if(err) {console.log('MongoDb connection ERR ', err);db=null;}
  else {db = database;}
  app.listen(port, () => 
  {
    console.log('listening on ', port);
  });
});
app.post('/clicked', upload.single('file'),(req, res) => 
{//ОЧЕНЬ ВАЖНО!! В upload.single указывается NAME ПОЛЯ-file
  const text = req.body.text; 
  const fileName = req.file ? req.file.originalname : null;
  const form = {clickTime: new Date(), text:text, fileName:fileName};
if (db)
{
  db.collection('clicks').save(form, (err, result) => 
{
    if (err) 
    {
      return console.log(err);
      res.sendStatus(202);
    }
    console.log('click added to db');
    res.sendStatus(201);
});
}

});






// Роутер-создает АПИ
//const mainApp = require('./main'); 
//app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/api', mainApp); // Подключаем роутер к /api

//router.js
//const express = require('express');
//const router = express.Router();
//router.get('/data', (req, res) => {
//  res.json({ message: 'Данные из API' });
//});
//router.post('/submit', (req, res) => {
//  console.log(req.body);
//  res.json({ message: 'Данные получены' });
//});
//module.exports = router;