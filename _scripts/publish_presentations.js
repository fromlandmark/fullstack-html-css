const fs = require("fs");

const list = [];

const location = "http://localhost:3000";

fs.readdirSync("./presentations").forEach((file) => {
	if (file !== ".DS_Store") {
		const category = file.split("-")[0];
		const item = {
			href: `${location}/presentations/${file}`,
			label: file.split("-")[1],
			category,
		};
		list.push(item);
	}
});
console.table(list);

fs.writeFileSync("./_database/presentations.js", `const presentations = ${JSON.stringify(list)}; export default presentations`);
