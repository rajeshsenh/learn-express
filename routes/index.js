var express = require('express');
var router = express.Router();
var mysql = require('mysql');

createDBConnection = () => {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '60141568',
		database: 'mytasks'
	});
}
/* GET home page. */
router.get('/', function (req, res) {

	var connection = createDBConnection();
	connection.connect(function (err) {
		if (err) {
			return console.error('error: ' + err.message);
		}
		console.log('Connected to the MySQL server.');
	});
	connection.query('SELECT * from mytasks', function (err, rows, fields) {
		if (err) throw err
		console.log(rows);
		res.send(rows);

	});
});

/*  Get task */
router.get( '/gettaskstodisplay' , ( req , res , next ) => {
  let data = null;
 
  let QUERY = 'SELECT * from mytasks';
   
  var connection = createDBConnection();
  
  connection.connect()

  connection.query( QUERY  , function (err, rows, fields) {
    if (err) throw err
    data = rows;  

    console.log(data);

    res.send(data);
  });
  
  connection.end();

});

/* Delete tasks*/
router.post( '/deletetaks' , ( req , res , next ) => {

  let QUERY = "DELETE FROM mytasks WHERE ID = '" + req.body.deleterecordid + "'";

  console.log(QUERY);

  var connection = createDBConnection();
  
  connection.connect();

  connection.query( QUERY  , function (err, rows, fields) {
    if (err) throw err
    console.log( rows );
  })
  
  connection.end();

  res.send('SUCCESS');
});

module.exports = router;
