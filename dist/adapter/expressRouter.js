"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapt = void 0;
const adapt = (controller) => {
    return (req, res) => {
        const request = {};
        request.body = req.body;
        request.params = req.params;
        request.query = req.query;
        const response = controller.handle(request);
        res.status(response.status).json(response.body);
    };
};
exports.adapt = adapt;
