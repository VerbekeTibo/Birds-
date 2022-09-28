"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirdsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const bird_entity_1 = require("./entities/bird.entity");
const birds_service_1 = require("./birds.service");
const create_bird_input_1 = require("./dto/create-bird.input");
const update_bird_input_1 = require("./dto/update-bird.input");
let BirdsResolver = class BirdsResolver {
    constructor(birdsService) {
        this.birdsService = birdsService;
    }
    createBird(createBirdInput) {
        return this.birdsService.create(createBirdInput);
    }
    findAll() {
        return this.birdsService.findAll();
    }
    findOne(id) {
        return this.birdsService.findOne(id);
    }
    updateBird(updateBirdInput) {
        return this.birdsService.update(updateBirdInput);
    }
    removeBird(id) {
        this.birdsService.remove(id);
        return null;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => bird_entity_1.Bird, { description: 'Create a bird using the DTO.' }),
    __param(0, (0, graphql_1.Args)('createBirdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bird_input_1.CreateBirdInput]),
    __metadata("design:returntype", Promise)
], BirdsResolver.prototype, "createBird", null);
__decorate([
    (0, graphql_1.Query)(() => [bird_entity_1.Bird], { name: 'birds' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BirdsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => bird_entity_1.Bird, { name: 'bird' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BirdsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => bird_entity_1.Bird),
    __param(0, (0, graphql_1.Args)('updateBirdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_bird_input_1.UpdateBirdInput]),
    __metadata("design:returntype", Promise)
], BirdsResolver.prototype, "updateBird", null);
__decorate([
    (0, graphql_1.Mutation)(() => bird_entity_1.Bird),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BirdsResolver.prototype, "removeBird", null);
BirdsResolver = __decorate([
    (0, graphql_1.Resolver)(() => bird_entity_1.Bird),
    __metadata("design:paramtypes", [birds_service_1.BirdsService])
], BirdsResolver);
exports.BirdsResolver = BirdsResolver;
//# sourceMappingURL=birds.resolver.js.map