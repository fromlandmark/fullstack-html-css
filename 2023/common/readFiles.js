const fs = require("fs");

const list = []

fs.readdirSync("./examples").forEach((file) => {
	console.log(file);
    const item = {
        path: file,
        name: file
    }
    list.push(item);
});

fs.writeFileSync('./common/list.js', `const list = ${JSON.stringify(list)}`)