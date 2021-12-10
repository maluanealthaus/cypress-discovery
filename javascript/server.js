const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({message:'Hello World'})
})

app.get('/documents', function (req, res) {
  var documents = ['CNH', 'CPF', 'RG']
  return res.json({data: documents})
})
 
app.get('/cnh', function (req, res){
  const age = req.query.age

 if (!age) {
    res.json({message: 'Age is required'})
    return
}

var ageNum = parseInt(age)

if (ageNum >= 18 && ageNum < 70) {
  res.json({message: 'Ok, you can get your license.'})
} else if (ageNum > 5 && ageNum < 18) {
  res.json({message: 'Sorry, you may have to ride your bycicle.'})
} else if (ageNum >= 70) {
  res.json({message: 'Sorry, you are too old.'})
} else {
  res.json({message: 'You better drink milk.'})
}

  return res.json({test: age})
})

app.listen(3000)