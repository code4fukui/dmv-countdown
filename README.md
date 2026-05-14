# dmv-countdown

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web application that displays a real-time countdown to the next departure for the Asa Coast Railway (阿佐海岸鉄道) Digital Mini Vehicle (DMV) service, which operates in Tokushima and Kochi prefectures, Japan.

## Demo

https://code4fukui.github.io/dmv-countdown/

## Features

-   Displays the countdown for the next 5 departures between selected stations.
-   Automatically updates the countdown every second.
-   Manually set a departure time by unchecking the "Now" (今) box.
-   Instantly swap departure and arrival stations with the "↕" button.
-   Share specific routes via URL hash.

## Usage

1.  Visit the [demo page](https://code4fukui.github.io/dmv-countdown/).
2.  Select your departure and arrival stations from the dropdown menus.
3.  The countdown to the next 5 departures will be displayed and updated in real-time.

## Data and Credits

This application uses GTFS-JP data for the Asa Coast Railway, provided by the Tokushima Prefecture open data portal.

-   **Data Source:** [阿佐海岸鉄道株式会社【DMV】（GTFS-JP) - Our Open Data](https://opendata.pref.tokushima.lg.jp/dataset/2652.html)
-   **Library:** [GTFS.js](https://github.com/code4fukui/GTFS/)
-   **Forked from:** [tsutsujibus-countdown](https://code4fukui.github.io/tsutsujibus-countdown/)

## License

MIT License — see [LICENSE](LICENSE).