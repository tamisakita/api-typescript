"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserController {
    handle(request) {
        let { body } = request;
        let requiredFirelds = ['name', 'email', 'password', 'passwordConfirmation'];
        for (let field of requiredFirelds) {
            if (!body[field]) {
                return {
                    status: 400
                };
            }
        }
        let { password, passwordConfirmation } = body;
        if (password != passwordConfirmation) {
            return {
                status: 400
            };
        }
        return {
            status: 200
        };
    }
}
exports.default = CreateUserController;
