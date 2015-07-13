// GET /quizes/question
exports.question = function(req, res) {
   res.render('quizes/question', {pregunta: '5 + 2 = ?'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
   if (req.query.respuesta === '7'){
      res.render('quizes/answer', {respuesta: 'Correcto'});
   } else {
      res.render('quizes/answer', {respuesta: 'Incorrecto'});
   }
 };
