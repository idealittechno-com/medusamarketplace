import { assertUserIdentity, isPlainObject, ValidationError, assertEventExists, assertEventType, assertTrackEventName, } from '@segment/analytics-core';
function validate(ctx) {
    var _a;
    var event = ctx.event;
    assertEventExists(event);
    assertEventType(event);
    if (event.type === 'track') {
        assertTrackEventName(event);
    }
    var props = (_a = event.properties) !== null && _a !== void 0 ? _a : event.traits;
    if (event.type !== 'alias' && !isPlainObject(props)) {
        throw new ValidationError('.properties', 'is not an object');
    }
    assertUserIdentity(event);
    return ctx;
}
export var validation = {
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