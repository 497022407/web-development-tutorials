exports.connect = (MongoClient) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'comment1';
    MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err, client) => {
        if (err) {
            console.error('mongodb connection error', err);
            return;
        }
        console.log("mongodb connection successful");
        const db = client.db(dbName);

        const userCollection = db.collection('users');
        // userCollection.find().sort({_id:-1}).toArray((err, result) => {
        //     if (err) {
        //         console.error('mongodb find error', err);
        //         return;
        //     }
        //     console.log('result:', result);
        // })
        // userCollection.insertOne({
        //     username: 'Liudehua',
        //     password: 'abc',
        //     age: 30,
        //     city: 'Xianggang',
        // }, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     console.log('insert result:',result.insertedId);
        // })
        // userCollection.updateOne(
        //     { username: 'ZhangSan' },
        //     { $set: { age: 22, city: 'Guangzhou' } },
        //     (err, result) => {
        //         if (err) {
        //             console.log(err);
        //             return;
        //         }
        //         console.log('update result', result);
        //     }
        // )
        userCollection.deleteOne({ username: 'WangWu' }, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('delete result', result);
            }
        )

        // client.close();
    })
};