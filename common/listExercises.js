const fs = require("fs");

const list = [];

fs.readdirSync("./exercises").forEach((file) => {
	console.log(file);
	const category = file.toString()[0] === "0" ? "html" : "css";
	console.log(category)
	const item = {
		href: `http://localhost:3000/exercises/${file}`,
		name: file,
		category
	};
	list.push(item);
});
console.table(list)

fs.writeFileSync("./common/list.js", `const exercisesData = ${JSON.stringify(list)}; export default exercisesData`);
