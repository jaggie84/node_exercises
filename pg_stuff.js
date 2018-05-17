var pgp = require('pg-promise')({ });

var db = pgp({database: 'blog', user: 'postgres'});

db.query('SELECT * FROM post')
  .then(function (results) {
    results.forEach(function (r) {
      console.log(r.id, r.title, r.slug);
    });
  })
  .catch(function (error) {
    console.error(error);
  });
  
db.one('SELECT * FROM post WHERE id=1')
  .then(function (r) {
    console.log(r.id, r.title, r.slug);
  })
  .catch(function (error) {
    console.error(error);
  });
  
var attributes = {
  title: 'My Title',
  slug: 'slug3',
  body: 'body; DROP TABLE post; --'
};

var q = "INSERT INTO post VALUES (default, ${title}, ${slug}, ${body})";

db.result(q, attributes)
  .then(function (result) {
    console.log(result);
    //pgp.end();
  });
  
  
pgp.end();