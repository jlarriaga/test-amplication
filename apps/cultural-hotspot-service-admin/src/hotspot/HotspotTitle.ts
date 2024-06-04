import { Hotspot as THotspot } from "../api/hotspot/Hotspot";

export const HOTSPOT_TITLE_FIELD = "id";

export const HotspotTitle = (record: THotspot): string => {
  return record.id?.toString() || String(record.id);
};
