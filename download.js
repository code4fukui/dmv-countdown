import { fetchBin } from "https://js.sabae.cc/fetchBin.js";

// https://www.pref.fukui.lg.jp/doc/dx-suishin/opendata/gtfs_jp.html

const url = "https://www.pref.fukui.lg.jp/doc/dx-suishin/opendata/gtfs_jp_d/fil/gtfs_sabae.zip";

const bin = await fetchBin(url);
await Deno.writeFile("gtfs_sabae.zip", bin);

