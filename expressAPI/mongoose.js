let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV === 'test') {
    let Mockgoose = require('mockgoose').Mockgoose;
    let mockgoose = new Mockgoose(mongoose);
    //mockgoose.helper.setDbVersion("** your mongodb version **");
    mockgoose.prepareStorage().then(function() {
        mongoose.connect('mongodb://localhost:27017/myapp', {
            useNewUrlParser: true
        }).then(res => console.log('connected'))
            .catch(err => console.log(err));
        });

}
else {
    mongoose.connect('mongodb://localhost:27017/myapp', {
        useNewUrlParser: true
    }).then();
}

const db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});

db.once('open', function callback () {
    console.log("Connected to Local DB!");
});

/*setTimeout(()=>{
    if(process.env.NODE_ENV === 'test') {
        console.log('inside');
        mongoose.disconnect()
    }
},1000)*/

module.exports = mongoose;