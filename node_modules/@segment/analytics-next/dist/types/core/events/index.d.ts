import { ID, User } from '../user';
import { Options, Integrations, EventProperties, Traits, SegmentEvent } from './interfaces';
import { PageContext } from '../page';
export * from './interfaces';
export declare class EventFactory {
    user: User;
    constructor(user: User);
    track(event: string, properties?: EventProperties, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    page(category: string | null, page: string | null, properties?: EventProperties, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    screen(category: string | null, screen: string | null, properties?: EventProperties, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    identify(userId: ID, traits?: Traits, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    group(groupId: ID, traits?: Traits, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    alias(to: string, from: string | null, options?: Options, globalIntegrations?: Integrations, pageCtx?: PageContext): SegmentEvent;
    private baseEvent;
    /**
     * Builds the context part of an event based on "foreign" keys that
     * are provided in the `Options` parameter for an Event
     */
    private context;
    normalize(event: SegmentEvent, pageCtx?: PageContext): SegmentEvent;
}
//# sourceMappingURL=index.d.ts.map