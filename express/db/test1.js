const { User } = require('./model');

!(async () => {
    // const zhangsan = await User.create({
    //     username: 'lisi',
    //     password: '123',
    //     age: 23,
    //     city: 'shanghai',
    // })
    // zhangsan.save();
    const userList = await User.remove(
        { username: 'lisi' },
    );
    console.log('result: ', userList);
})()