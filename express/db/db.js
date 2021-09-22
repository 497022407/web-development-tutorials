const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
const dbName = 'comment2';

// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', true);

mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const conn = mongoose.connection;
conn.on('error',err => {
    console.log(err);
})

module.exports = mongoose;