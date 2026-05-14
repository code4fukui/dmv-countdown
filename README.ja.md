# dmv-countdown

徳島県および高知県で運行されている阿佐海岸鉄道のDMV（Digital Mini Vehicle）の、次の発車時刻までのリアルタイムなカウントダウンを表示するWebアプリケーションです。

## デモ

https://code4fukui.github.io/dmv-countdown/

## 機能

- 選択した駅間の、次から5本先までの発車カウントダウンを表示します。
- カウントダウンは毎秒自動的に更新されます。
- 「今」のチェックボックスを外すことで、出発時刻を手動で設定できます。
- 「↕」ボタンで出発駅と到着駅を即座に入れ替えることができます。
- URLハッシュを使用して特定のルートを共有できます。

## 使い方

1. [デモページ](https://code4fukui.github.io/dmv-countdown/)にアクセスします。
2. ドロップダウンメニューから出発駅と到着駅を選択します。
3. 次から5本先までの発車カウントダウンがリアルタイムで表示・更新されます。

## データとクレジット

このアプリケーションは、徳島県オープンデータポータルが提供する阿佐海岸鉄道のGTFS-JPデータを使用しています。

- **データソース:** [阿佐海岸鉄道株式会社【DMV】（GTFS-JP) - Our Open Data](https://opendata.pref.tokushima.lg.jp/dataset/2652.html)
- **ライブラリ:** [GTFS.js](https://github.com/code4fukui/GTFS/)
- **フォーク元:** [tsutsujibus-countdown](https://code4fukui.github.io/tsutsujibus-countdown/)

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
