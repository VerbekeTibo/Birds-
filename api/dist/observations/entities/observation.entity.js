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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observation = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongodb_1 = require("mongodb");
const bird_entity_1 = require("../../birds/entities/bird.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
const typeorm_1 = require("typeorm");
let Observation = class Observation {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Observation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Observation.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Observation.prototype, "weather", void 0);
__decorate([
    (0, graphql_1.Field)(() => bird_entity_1.Bird),
    __metadata("design:type", bird_entity_1.Bird)
], Observation.prototype, "bird", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Observation.prototype, "birdId", void 0);
__decorate([
    (0, graphql_1.Field)(() => location_entity_1.Location),
    __metadata("design:type", location_entity_1.Location)
], Observation.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Observation.prototype, "locationId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Observation.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Observation.prototype, "active", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Observation.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Observation.prototype, "updatedAt", void 0);
Observation = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)({ description: 'observations' })
], Observation);
exports.Observation = Observation;
//# sourceMappingURL=observation.entity.js.map