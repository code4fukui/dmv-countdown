import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const url = "https://fukutetsu.jp/train/timetable_all.php";

const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);

const table2csv = (tbl) => {
  const res = [];
  const trs = tbl.querySelectorAll("tr");
  trs.forEach(tr => {
    const tds = tr.querySelectorAll("td, th");
    const line = [];
    tds.forEach(td => {
      const colspan = td.getAttribute("colspan") || 1;
      for (let i = 0; i < colspan; i++) {
        line.push(td.text);
      }
    });
    res.push(line);
  });
  return res;
};

const tbl = dom.querySelectorAll(".scroll table");
for (let i = 0; i < tbl.length; i++) {
  const csv = table2csv(tbl[i]);
  await Deno.writeTextFile(`fukutetsu-timetable-${["kudari", "nobori"][i]}.csv`, CSV.encode(csv));
}
