"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const graphQLConfig_1 = require("./bootstrap/graphQLConfig");
const typeORMConfig_1 = require("./bootstrap/typeORMConfig");
const birds_module_1 = require("./birds/birds.module");
const locations_module_1 = require("./locations/locations.module");
const observations_module_1 = require("./observations/observations.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeORMConfig_1.typeORMConfig),
            graphql_1.GraphQLModule.forRoot(graphQLConfig_1.graphqlConfig),
            birds_module_1.BirdsModule,
            locations_module_1.LocationsModule,
            observations_module_1.ObservationsModule,
            seed_module_1.DatabaseSeedModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map