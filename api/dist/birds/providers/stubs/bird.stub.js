"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBird = exports.createBirdInputStub = void 0;
const create_bird_input_1 = require("../dto/create-bird.input");
const bird_entity_1 = require("../entities/bird.entity");
const mongodb_1 = require("mongodb");
const createBirdInputStub = () => {
    const b = new create_bird_input_1.CreateBirdInput();
    b.name = 'name';
    b.fullname = 'fullname';
    b.category = 'category';
    b.url = 'url';
    b.observations = 2;
    b.description = 'description';
    return b;
};
exports.createBirdInputStub = createBirdInputStub;
const createBird = () => {
    const b = new bird_entity_1.Bird();
    b.id = new mongodb_1.ObjectId('d89a0bA4cc619d347024f42e');
    b.name = 'name';
    b.fullname = 'fullname';
    b.category = 'category';
    b.url = 'url';
    b.observations = 2;
    b.description = 'description';
    return b;
};
exports.createBird = createBird;
//# sourceMappingURL=bird.stub.js.map