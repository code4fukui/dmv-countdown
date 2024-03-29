import * as t from "https://deno.land/std/testing/asserts.ts";
import { Timetable } from "./Timetable.js";
import { Time } from "https://js.sabae.cc/DateTime.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const tt = new Timetable(await CSV.fetchJSON("fukutetsu-timetable.csv"));

Deno.test("all stations", async () => {
  const all = [
    "たけふ新",
    "北府",
    "スポーツ公園",
    "家久",
    "サンドーム西",
    "西鯖江",
    "西山公園",
    "水落",
    "神明",
    "鳥羽中",
    "三十八社",
    "泰澄の里",
    "浅水",
    "ハーモニーホール",
    "清明",
    "江端",
    "ベル前",
    "花堂",
    "赤十字前",
    "商工会議所前",
    "足羽山公園口",
    "福井城址大名町",
    "福井駅",
    "仁愛女子高校",
    "田原町",
    "福大前西福井",
    "日華化学前",
    "八ツ島",
    "新田塚",
    "鷲塚針原",
  ];
  t.assertEquals(tt.getStations(), all);
});
Deno.test("simple", async () => {
  const res = tt.getTrains("西鯖江", "福井駅");
  t.assertEquals(res.length, 29);
  t.assertEquals(res[0].ID, "下り1番目");
  t.assertEquals(res[0].たけふ新_発, "5:30");
});
Deno.test("reverse", async () => {
  const res = tt.getTrains("福井駅", "西鯖江");
  t.assertEquals(res.length, 31);
  //t.assertEquals(res[0], chk);
});
Deno.test("getNextTrain", async () => {
  const res = tt.getNextTrains("福井駅", "西鯖江", 3, new Time("07:30"));
  t.assertEquals(res.length, 3);
  //t.assertEquals(res[0], chk);
});
/*
Deno.test("tsuruga", async () => {
  const res = tt.getTrains("鯖江", "敦賀");
  t.assertEquals(res.length, 30);
});
Deno.test("tsuruga reverse", async () => {
  const res = tt.getTrains("敦賀", "鯖江");
  t.assertEquals(res.length, 29);
});
Deno.test("not yet", async () => {
  t.assertEquals(tt.getTrains("今庄", "福井"), []);
});
Deno.test("same", async () => {
  t.assertEquals(tt.getTrains("福井", "福井"), []);
});
Deno.test("getNextTrains", async () => {
  const chk = {
    "始発駅": "福井",
    "敦賀_発": "",
    "敦賀_着": "8:57",
    "方向": "上り",
    "武生_発": "8:27",
    "武生_着": "8:26",
    "福井_発": "8:06",
    "福井_着": "",
    "終着駅": "敦賀",
    "鯖江_発": "8:22",
    "鯖江_着": "8:21",
    ID: "1226M",
  };
  t.assertEquals(tt.getNextTrains("鯖江", "敦賀", 1, new Time("08:20").toMinutes()), [chk]);
});
Deno.test("info", async () => {
  const keys = [
    "id",
    "lat",
    "lng",
    "name",
    "kana",
    "previd",
    "nextid",
    "住所",
    "窓口営業時間",
    "券売機",
    "ＩＣ改札",
    "JRきっぷ販売",
    "多目的トイレ",
    "エレベーター",
    "コインロッカー",
    "駐車場",
    "時刻表URL",
    "出典URL",
  ];
  t.assertEquals(Object.keys(tt.getStationInfo("鯖江")), keys);
});
Deno.test("kana", async () => {
  t.assertEquals(tt.getStationInfo("鯖江").kana, "さばえ");
});
*/
