"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkRepository = void 0;
const core_1 = require("@mikro-orm/core");
const utils_1 = require("@medusajs/utils");
function getLinkRepository(model) {
    return class LinkRepository extends utils_1.MikroOrmAbstractBaseRepository {
        constructor({ manager, joinerConfig, }) {
            // @ts-ignore
            super(...arguments);
            this.manager_ = manager;
            this.model_ = model;
            this.joinerConfig_ = joinerConfig;
        }
        async find(findOptions = { where: {} }, context = {}) {
            const manager = this.getActiveManager(context);
            const findOptions_ = { ...findOptions };
            findOptions_.options ?? (findOptions_.options = {});
            Object.assign(findOptions_.options, {
                strategy: core_1.LoadStrategy.SELECT_IN,
            });
            return await manager.find(this.model_, findOptions_.where, findOptions_.options);
        }
        async findAndCount(findOptions = { where: {} }, context = {}) {
            const manager = this.getActiveManager(context);
            const findOptions_ = { ...findOptions };
            findOptions_.options ?? (findOptions_.options = {});
            Object.assign(findOptions_.options, {
                strategy: core_1.LoadStrategy.SELECT_IN,
            });
            return await manager.findAndCount(this.model_, findOptions_.where, findOptions_.options);
        }
        async delete(data, context = {}) {
            const filter = {};
            for (const key in data) {
                filter[key] = {
                    $in: Array.isArray(data[key]) ? data[key] : [data[key]],
                };
            }
            const manager = this.getActiveManager(context);
            await manager.nativeDelete(this.model_, data, {});
        }
        async create(data, context = {}) {
            const manager = this.getActiveManager(context);
            const links = data.map((link) => {
                link.id = (0, utils_1.generateEntityId)(link.id, this.joinerConfig_.databaseConfig?.idPrefix ?? "link");
                return manager.create(this.model_, link);
            });
            await manager.upsertMany(this.model_, links);
            return links;
        }
    };
}
exports.getLinkRepository = getLinkRepository;
