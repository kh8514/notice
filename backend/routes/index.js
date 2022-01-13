const express = require('express');
const router = express.Router();
const conn = require('../mariaDBConn');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'SSAB' });
  /*
  conn.getUserNoticeList()
    .then((rows) => {
      console.log(rows);
      res.render('index',{rows:rows});
    }).catch((errMsg) => {
      console.log(errMsg)
      res.render('index',{errMsg:errMsg});
    })
    */
});

router.get('/getTest', async (req, res) =>{
  try {
    conn.getUserNoticeList()
      .then((rows) =>{
          console.log("rows :: ",rows[0]);
          res.send({dataList:rows[0]});
      }).catch((errMsg) =>{
          res.send(errMsg);
      })
  } catch (error) {
      res.send({error:"error db"})
  }
})

module.exports = router;
