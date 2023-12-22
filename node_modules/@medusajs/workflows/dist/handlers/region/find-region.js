"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRegion = void 0;
const utils_1 = require("@medusajs/utils");
const medusa_core_utils_1 = require("medusa-core-utils");
var Aliases;
(function (Aliases) {
    Aliases["Region"] = "region";
})(Aliases || (Aliases = {}));
async function findRegion({ container, data, }) {
    const regionService = container.resolve("regionService");
    let regionId;
    const regionDTO = {};
    if ((0, medusa_core_utils_1.isDefined)(data[Aliases.Region].region_id)) {
        regionId = data[Aliases.Region].region_id;
    }
    else {
        const regions = await regionService.list({}, {});
        if (!regions?.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `A region is required to create a cart`);
        }
        regionId = regions[0].id;
    }
    regionDTO.region_id = regionId;
    return regionDTO;
}
exports.findRegion = findRegion;
findRegion.aliases = Aliases;
//# sourceMappingURL=find-region.js.map