const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users_test');

before((done) =>{
  mongoose.connection
    .once('open',() => {done();})
    .on('error',(error) => {
      console.warn('Warning!',error);
  });
}
);



beforeEach((done)=> {
  mongoose.connection.collections.users.drop(()=>{
    done();
  });
});
