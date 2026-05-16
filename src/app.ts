import express from "express";

const app = express();

export function main() {
    const args = process.argv.slice(2);
    let port = 3000;
    let origin = "";

    if (parseInt(args[1]) > 0) {
        port = parseInt(args[1]);
    }

    if (args[3].length > 0) {
        origin = args[3];
    }

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main();