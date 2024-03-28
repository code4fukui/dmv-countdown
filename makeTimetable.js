import { CSV } from "https://js.sabae.cc/CSV.js";
import { HankakuKana } from "https://code4fukui.github.io/mojikiban/HankakuKana.js";

const parse = async (fn, dir) => {
  console.log(fn);
  const data = await CSV.fetch(fn);
  console.log(data);
  const stations = [];
  for (let i = 2; i < data[0].length; i++) {
    stations.push(HankakuKana.toZen(data[0][i]) + "_" + data[1][i]);
  }
  console.log(stations);

  const res = [];
  for (let i = 2; i < data.length; i++) {
    const dt = data[i];
    let start = null;
    for (let j = 2; j < dt.length; j++) {
      if (dt[j]) {
        start = stations[j - 2];
        break;
      }
    }
    const d = {
      ID: dir + (i - 1) + "番目",
      種別: dt[1],
      方向: dir,
      始発駅: start,
      終着駅: dt[0],
    };
    for (let j = 2; j < dt.length; j++) {
      d[stations[j - 2]] = dt[j];
    }
    res.push(d);
    console.log(d);
  }
  return res;
};

const name = "fukutetsu";
const data = [
  ...await parse(name + "-timetable-kudari.csv", "下り"),
  ...await parse(name + "-timetable-nobori.csv", "上り"),
];
await Deno.writeTextFile(name + "-timetable.csv", CSV.stringify(data));
