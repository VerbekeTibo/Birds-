"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.birdProviders = void 0;
const bird_entity_1 = require("../entities/bird.entity");
exports.birdProviders = [
    {
        provide: 'BIRD_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(bird_entity_1.Bird),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=bird.provider.js.map