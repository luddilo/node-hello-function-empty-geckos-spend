"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// `data` is the data you encrypted and passed into `evervault.run` from your server. The Function
// automatically decrypts the data and maintains its structure so you can treat event exactly as
// you did when you passed it into `evervault.run`.
function handler(data, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if the data sent into the Function included the `name` key
        if (data.name && typeof data.name === "string") {
            console.debug(`A name of length ${data.name.length} has arrived into the Function.`);
            // Process the decrypted name value, and re-encrypt the original name using the encrypt function available in the context parameter.
            return {
                message: `Hello from a Typescript Function! It seems you have ${data.name.length} letters in your name`,
            };
        }
        else {
            console.debug("An empty name has arrived into the Function.");
            return {
                message: "Hello from a Function! Send an encrypted `name` parameter to show Function decryption in action",
            };
        }
    });
}
exports.default = handler;
