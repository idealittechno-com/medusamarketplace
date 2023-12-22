"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
var analytics_core_1 = require("@segment/analytics-core");
function validate(ctx) {
    var _a;
    var event = ctx.event;
    (0, analytics_core_1.assertEventExists)(event);
    (0, analytics_core_1.assertEventType)(event);
    if (event.type === 'track') {
        (0, analytics_core_1.assertTrackEventName)(event);
    }
    var props = (_a = event.properties) !== null && _a !== void 0 ? _a : event.traits;
    if (event.type !== 'alias' && !(0, analytics_core_1.isPlainObject)(props)) {
        throw new analytics_core_1.ValidationError('.properties', 'is not an object');
    }
    (0, analytics_core_1.assertUserIdentity)(event);
    return ctx;
}
exports.validation = {
    name: 'Event Validation',
    type: 'before',
    version: '1.0.0',
    isLoaded: function () { return true; },
    load: function () { return Promise.resolve(); },
    track: validate,
    identify: validate,
    page: validate,
    alias: validate,
    group: validate,
    screen: validate,
};
//# sourceMappingURL=index.js.map