console.log("HelloWorld")
const p = new Promise((resolve, reject) => { reject() })

const p2 = p.then(
    () => {
        console.log("success")
        return 'return';
    },
    () => {
        console.log("err")
        return 'return';
    }).then(
    data => {
        console.log("success2", data)
    }, () => {
        console.log("err2")
    })