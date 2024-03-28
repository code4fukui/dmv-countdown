import { Time } from "https://js.sabae.cc/DateTime.js";

export class Timetable {
  constructor(data, info) {
    this.data = data;
    this.info = info;
  }
  getTrains(fromstation, tostation) {
    if (fromstation == tostation) return [];
    return this.data.filter(i => {
      const from = i[fromstation + "_発"];
      const to = i[tostation + "_着"] || i[tostation + "_発"];
      if (!from || !to) return false;
      if (from == "→" || to == "→") return false;
      if (from == "止" || to == "止") return false;
      const fromt = new Time(from);
      const tot = new Time(to);
      const d = tot.toMinutes() - fromt.toMinutes();
      //console.log(fromstation, tostation, d, i.ID, i.方向);
      return d >= 0 || d < -22 * 60;
    });
  }
  getNextTrains(fromstation, tostation, maxlen = 3, nowm) {
    const trs = this.getTrains(fromstation, tostation);
    console.log(fromstation, tostation, trs)  
    const now = (nowm || new Time()).quantizeMinutes().toMinutes();
    console.log("now", now);

    const res = trs.filter(i => {
      const from = i[fromstation + "_発"];
      const fromt = new Time(from);
      const d = now - fromt.toMinutes();
    console.log(d, now, fromt.toMinutes(), fromt);
      return d <= 0;
    });
    if (res.length > maxlen) res.length = maxlen;
    console.log(res)
    return res;
  }
  getStations() {
    const v = this.data[0];
    const res = new Set();
    for (const name in v) {
      if (name.endsWith("_発") || name.endsWith("_着")) {
        const st = name.substring(0, name.length - 2);
        res.add(st);
      }
    }
    return Array.from(res);
  }
  getStationInfo(name) {
    return this.info.find(i => i.name == name);
  }
};
