const fs = require("fs");

const list = [];

fs.readdirSync("./presentations").forEach((file) => {
	console.log(file);
	const item = {
		path: `http://localhost:3000/presentations/${file}`,
		name: file,
	};
	list.push(item);
});
console.table(list);

//fs.writeFileSync("./common/list.js", `const list = ${JSON.stringify(list)}`);