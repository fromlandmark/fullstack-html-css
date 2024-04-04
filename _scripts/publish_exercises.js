const fs = require("fs");

const list = [];

const location = "http://localhost:3000";

fs.readdirSync("./exercises").forEach((file) => {
    if (file !== '.DS_Store') {
        const category = file.split('-')[0];
        const item = {
					href: `${location}/exercises/${file}`,
					label: file.split("-")[1],
					category,
                    hidden: true
				};
        list.push(item);
    }
});
console.table(list);

fs.writeFileSync("./_database/exercises.js", `const exercises = ${JSON.stringify(list)}; export default exercises`);
