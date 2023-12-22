import { Analytics } from '../../core/analytics';
import { LegacySettings } from '../../browser';
import { SegmentFacade } from '../../lib/to-facade';
import { SegmentioSettings } from './index';
export declare function normalize(analytics: Analytics, json: ReturnType<SegmentFacade['json']>, settings?: SegmentioSettings, integrations?: LegacySettings['integrations']): object;
//# sourceMappingURL=normalize.d.ts.map