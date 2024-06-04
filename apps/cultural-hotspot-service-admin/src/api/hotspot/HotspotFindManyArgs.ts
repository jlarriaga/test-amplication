import { HotspotWhereInput } from "./HotspotWhereInput";
import { HotspotOrderByInput } from "./HotspotOrderByInput";

export type HotspotFindManyArgs = {
  where?: HotspotWhereInput;
  orderBy?: Array<HotspotOrderByInput>;
  skip?: number;
  take?: number;
};
