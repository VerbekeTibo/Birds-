"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirdsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const birds_service_1 = require("./birds.service");
const birds_resolver_1 = require("./birds.resolver");
const bird_entity_1 = require("./entities/bird.entity");
let BirdsModule = class BirdsModule {
};
BirdsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bird_entity_1.Bird])],
        providers: [birds_resolver_1.BirdsResolver, birds_service_1.BirdsService],
    })
], BirdsModule);
exports.BirdsModule = BirdsModule;
//# sourceMappingURL=birds.module.js.map