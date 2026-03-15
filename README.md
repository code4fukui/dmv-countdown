# dmv-countdown

One-sentence description: A web application that displays the countdown to the next departure times for the Digital Mini Vehicle (DMV) service in Fukui, Japan.

## Demo
https://code4fukui.github.io/dmv-countdown/

## Features
- Displays the next 5 departure times from a selected station to a selected destination
- Automatically updates the countdown every second when the "Now" checkbox is checked
- Allows swapping the selected stations using the "↕" button
- Provides a link to the source GTFS data

## Requirements
This project requires the GTFS.js library, which is imported from the URL `https://code4fukui.github.io/GTFS/GTFS.js`.

## Usage
1. Open the `index.html` file in a web browser.
2. Select the departure and arrival stations from the dropdown menus.
3. The countdown to the next 5 departures will be displayed.
4. Check the "Now" checkbox to automatically update the countdown every second.

## Data / API
This project uses GTFS data provided by the Fukui Prefecture government, which can be downloaded from the URL `https://www.pref.fukui.lg.jp/doc/dx-suishin/opendata/gtfs_jp.html`.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.