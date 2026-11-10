Shogo Matake webpage — 最終版

このフォルダ一式が、VS Codeで編集するソースとGitHubにアップロードするファイルです。
インストール・ビルドは不要です。HTML、CSS、JavaScript、JPEGだけで動作します。

【まず表示を確認する】
ZIPを展開し、このフォルダの index.html をブラウザで開いてください。
上部の Home / Publications / Talks から各ページへ移動できます。
画像・CSSなども必要なので、HTMLだけを別の場所に移動しないでください。

【VS Codeで編集する】
「ファイル → フォルダーを開く」で、index.html のあるフォルダを開きます。
保存したら、ブラウザを再読み込みして変更を確認します。

編集する場所：
  index.html          自己紹介、Research Interests、News、Contact
  publication.html    論文一覧
  talk.html           Invited Talks、Conference/Workshop
  assets/css/style.css  3ページ共通のデザイン、文字サイズ、余白
  assets/js/main.js      スマートフォンのメニュー開閉
  assets/images/home-port-tower.jpg         Homeの写真
  assets/images/publications-night-view.jpg Publicationsの写真
  assets/images/talks-sunset.jpg             Talksの写真

写真は、2026年11月10日に送付されたトリミング済みJPEGをそのまま使用しています。
再圧縮・追加トリミングはしていません。画面幅に合わせ、写真全体を表示します。

発表や論文を追加する場合は、対応するHTMLの一覧内の <li> ... </li> を
複製し、タイトル・日付・会議名などを編集します。
ヘッダーとフッターは各HTMLにあるため、共通表示を変える場合は3ファイルとも編集します。

【GitHubにアップロードする】
ZIPファイルそのものではなく、展開した中身をアップロードします。
公開対象のフォルダの直下に次の4点を置き、assets内のフォルダ構成を保ってください。
  index.html
  publication.html
  talk.html
  assets/
README.txt は公開に必須ではありません。
GitHub Pagesの公開設定を行ったあと、公開URLで3ページを確認してください。
このファイル一式の作成時点では、GitHubへのアップロード・公開は行っていません。

【注意】
チャットで別途お渡しする確認用HTMLには、表示用に画像・CSS・JavaScriptを
埋め込んでいます。以後の編集・GitHubへのアップロードには、このフォルダの
読みやすいHTMLと assets/ を使ってください。
