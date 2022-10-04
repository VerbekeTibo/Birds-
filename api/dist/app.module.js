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
const birds_module_1 = require("./birds/birds.module");
const observations_module_1 = require("./observations/observations.module");
const locations_module_1 = require("./locations/locations.module");
const bootstrap_module_1 = require("./bootstrap/bootstrap.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bootstrap_module_1.BootstrapModule,
            birds_module_1.BirdsModule,
            observations_module_1.ObservationsModule,
            locations_module_1.LocationsModule,
            seed_module_1.DatabaseSeedModule,
        ],
        exports: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map