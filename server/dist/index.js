"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main = async () => {
    try {
        const app = (0, express_1.default)();
        const port = process.env.PORT || 5050;
        app.listen(port, () => {
            console.log("Server is running on port", port);
        });
        app.use(express_1.default.json());
    }
    catch (err) {
        console.log(err);
    }
};
main();
//# sourceMappingURL=index.js.map