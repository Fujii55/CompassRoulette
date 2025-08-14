document.addEventListener('DOMContentLoaded', () => {

    // ========== データ定義 ==========
    // ヒーローリスト（ゲーム内での実装順に並び替え）
    const allHeroes = [
        // オリジナルヒーロー
        { name: '十文字 アタリ', role: 'スプリンター' },
        { name: 'ジャスティス ハンコック', role: 'タンク' },
        { name: 'リリカ', role: 'ガンナー' },
        { name: '双挽 乃保', role: 'アタッカー' },
        { name: '桜華 忠臣', role: 'アタッカー' },
        { name: 'ジャンヌ ダルク', role: 'タンク' },
        { name: 'マルコス\'55', role: 'アタッカー' },
        { name: 'ルチアーノ', role: 'ガンナー' },
        { name: 'Voidoll', role: 'スプリンター' },
        { name: '深川 まとい', role: 'ガンナー' },
        { name: 'ソル=バッドガイ', role: 'アタッカー' }, // Collab
        { name: 'ディズィー', role: 'ガンナー' }, // Collab
        { name: 'グスタフ ハイドリヒ', role: 'タンク' },
        { name: 'ニコラ テスラ', role: 'スプリンター' },
        { name: '初音ミク', role: 'スプリンター' }, // Collab
        { name: 'ヴィオレッタ ノワール', role: 'タンク' },
        { name: 'コクリコット ブランシュ', role: 'スプリンター' },    
        { name: 'リュウ', role: 'アタッカー' }, // Collab
        { name: '春麗', role: 'スプリンター' }, // Collab
        { name: 'マリア=S=レオンブルク', role: 'アタッカー' },
        { name: 'アダム=ユーリエフ', role: 'アタッカー' },
        { name: '13†サーティーン†', role: 'ガンナー' },
        { name: 'かけだし勇者', role: 'スプリンター' },
        { name: 'エミリア', role: 'ガンナー' }, // Collab
        { name: 'レム', role: 'アタッカー' }, // Collab
        { name: 'カイ=キスク', role: 'アタッカー' }, // Collab
        { name: 'メグメグ', role: 'ガンナー' },
        { name: '鏡音リン', role: 'ガンナー' }, // Collab
        { name: '鏡音レン', role: 'タンク' }, // Collab
        { name: 'イスタカ', role: 'ガンナー' },
        { name: 'ザック＆レイチェル', role: 'スプリンター' }, // Collab
        { name: '輝龍院 きらら', role: 'スプリンター' },
        { name: 'モノクマ', role: 'タンク' }, // Collab
        { name: 'ヴィーナス ポロロッチョ', role: 'アタッカー' },
        { name: 'アクア', role: 'スプリンター' }, // Collab
        { name: 'めぐみん', role: 'タンク' }, // Collab
        { name: 'ソーン=ユーリエフ', role: 'ガンナー' },
        { name: 'リヴァイ', role: 'アタッカー' }, // Collab
        { name: 'デルミン', role: 'アタッカー' },
        { name: 'トマス', role: 'タンク' },
        { name: '猫宮 ひなた', role: 'ガンナー' }, // Collab
        { name: '岡部 倫太郎', role: 'ガンナー' }, // Collab
        { name: '零夜', role: 'スプリンター' },
        { name: 'セイバーオルタ', role: 'アタッカー' }, // Collab
        { name: 'ギルガメッシュ', role: 'ガンナー' }, // Collab
        { name: 'ルルカ', role: 'アタッカー' },
        { name: 'ピエール 77世', role: 'スプリンター' },
        { name: '佐藤四郎兵衛忠信', role: 'タンク' }, // Collab
        { name: 'アイズ・ヴァレンシュタイン', role: 'アタッカー' }, // Collab
        { name: '狐ヶ咲 甘色', role: 'アタッカー' },
        { name: 'ノクティス', role: 'アタッカー' }, // Collab
        { name: 'HM-WA100 ニーズヘッグ', role: 'ガンナー' },
        { name: '中島 敦', role: 'スプリンター' }, // Collab
        { name: '芥川龍之介', role: 'ガンナー' }, // Collab
        { name: 'ゲームバズーカガール', role: 'ガンナー' },
        { name: 'ライザリン・シュタウト', role: 'ガンナー' }, // Collab
        { name: '青春 アリス', role: 'タンク' }, // Collab
        { name: 'ジョーカー', role: 'スプリンター' }, // Collab
        { name: 'イグニス＝ウィル＝ウィスプ', role: 'アタッカー' }, // Collab
        { name: 'アインズ・ウール・ゴウン', role: 'ガンナー' }, // Collab
        { name: '糸廻 輪廻', role: 'ガンナー' }, 
        { name: 'キリト', role: 'アタッカー' }, // Collab
        { name: 'アスナ', role: 'スプリンター' }, // Collab
        { name: 'Bugdoll', role: 'ガンナー' },
        { name: 'ステリア・ララ・シルワ', role: 'アタッカー' },
        { name: 'ラム', role: 'スプリンター' }, // Collab
        { name: '2B', role: 'アタッカー' }, // Collab
        { name: 'ラヴィ・シュシュマルシュ', role: 'タンク' },
        { name: 'リムル=テンペスト', role: 'アタッカー' }, // Collab
        { name: 'アル・ダハブ＝アルカティア', role: 'スプリンター' },
        { name: '御坂 美琴', role: 'アタッカー' }, // Collab
        { name: 'アクセラレータ', role: 'ガンナー' }, // Collab
        { name: 'ぶれいずどらごん', role: 'ガンナー' },
        { name: 'ベル・クラネル', role: 'スプリンター' }, // Collab
        { name: 'ロキシー・ミグルディア', role: 'ガンナー' }, // Collab
        { name: '某<なにがし>', role: 'スプリンター' },
        { name: 'ロックマン.EXE', role: 'ガンナー' }, // Collab
        { name: 'クー・シー', role: 'アタッカー' },
        { name: 'デンジ', role: 'アタッカー' }, // Collab
        { name: 'パワー', role: 'スプリンター' }, // Collab
        { name: 'アミスター＝バランディン', role: 'タンク' }, 
        { name: 'シノン', role: 'ガンナー' }, // Collab
        { name: 'ターニャ・デグレチャフ', role: 'アタッカー' }, // Collab
        { name: '鬼ヶ式 うら', role: 'タンク' },        
        { name: 'コラプス', role: 'アタッカー' },
        { name: 'ボンドルド', role: 'アタッカー' }, // Collab
        { name: 'みりぽゆ', role: 'ガンナー' }, 
        { name: 'ゴン＝フリークス', role: 'アタッカー' }, // Collab
        { name: 'キルア＝ゾルディック', role: 'スプリンター' }, // Collab
        { name: 'チーちゃん', role: 'スプリンター' },
        { name: '上条 当麻', role: 'スプリンター' }, // Collab
        { name: 'ーペルリニエ', role: 'スプリンター' },
        { name: 'シャドウ', role: 'アタッカー' }, // Collab
    ];

    // カードリスト
    const allCards = [
        '近距離','遠距離','連続','周囲',
        '回復','ガード','強化','弱体化',
        '移動','設置','カウンター','その他',
        '自由枠',
        'SR近距離','SR遠距離','SR連続','SR周囲',
        'SR回復','SRガード','SR強化','SR弱体化',
        'SR移動','SR設置','SRカウンター','SRその他',
        'SR自由枠',
    ];

   // ...（プリセットボタンの要素取得は省略）...

    // ========== 機能の実装 ==========

    function generateHeroCheckboxes(){ /* ...省略... */ }
    function generateCardCheckboxes(){ /* ...省略... */ }
    function updateHeroVisibility(){ /* ...省略... */ }
    
    // ▼▼▼ ルーレットを実行するメインの関数を修正 ▼▼▼
    function runRoulette() {
        // --- 人数と対象リストを取得 ---
        const playerCount = parseInt(playerCountSelect.value, 10);
        const isUnique = uniqueHeroesCheckbox.checked; // ★重複チェックの状態を取得

        const selectedHeroCheckboxes = document.querySelectorAll('.hero-checkbox:checked');
        const availableHeroes = Array.from(selectedHeroCheckboxes)
            .filter(checkbox => checkbox.closest('label').style.display !== 'none')
            .map(checkbox => checkbox.value);

        const selectedCardCheckboxes = document.querySelectorAll('.card-checkbox:checked');
        const availableCards = Array.from(selectedCardCheckboxes).map(checkbox => checkbox.value);

        // --- 事前チェック ---
        if (availableHeroes.length === 0) {
            alert('対象のヒーローがいません！');
            return;
        }
        // ★重複なしの場合のみ、人数が足りているかチェック
        if (isUnique && availableHeroes.length < playerCount) {
            alert(`選択されたヒーローが${playerCount}人未満です！ヒーローの重複を許可するか、選択範囲を広げてください。`);
            return;
        }
        if (availableCards.length === 0) {
            alert('カードカテゴリを1つ以上選択してください！');
            return;
        }

        // --- メイン処理 ---
        resultDiv.innerHTML = ''; // 前回の結果をリセット

        const selectedHeroes = [];
        if (isUnique) {
            // 【重複なしの場合】先にヒーローをシャッフルして、必要な人数分だけ取り出す
            const shuffledHeroes = [...availableHeroes].sort(() => 0.5 - Math.random());
            for (let i = 0; i < playerCount; i++) {
                selectedHeroes.push(shuffledHeroes[i]);
            }
        } else {
            // 【重複ありの場合】毎回ランダムにヒーローを選ぶ
            for (let i = 0; i < playerCount; i++) {
                const randomIndex = Math.floor(Math.random() * availableHeroes.length);
                selectedHeroes.push(availableHeroes[randomIndex]);
            }
        }
        
        // 選ばれた人数分、結果を生成
        for (let i = 0; i < playerCount; i++) {
            const selectedHero = selectedHeroes[i];

            // カードカテゴリを重複ありでランダムに4つ選出
            const selectedCards = [];
            for (let j = 0; j < 4; j++) {
                const randomIndex = Math.floor(Math.random() * availableCards.length);
                selectedCards.push(availableCards[randomIndex]);
            }
            
            // 1人分の結果表示HTMLを生成
            const personResultHTML = `
                <div class="person-result">
                    <h3>Player ${i + 1}</h3>
                    <div class="hero-name">${selectedHero}</div>
                    ${selectedCards.map(card => `<p>${card}</p>`).join('')}
                </div>
            `;
            
            // 結果表示エリアに追加
            resultDiv.innerHTML += personResultHTML;
        }
    }

    // ========== イベントリスナーと初期化処理 ==========
    // ...（ヒーローリスト、カードリスト、ボタンのイベントリスナーは長いため省略）...
    const selectAllHeroesBtn=document.getElementById("selectAllHeroesBtn"),deselectAllHeroesBtn=document.getElementById("deselectAllHeroesBtn"),selectAllCardsBtn=document.getElementById("selectAllCardsBtn"),deselectAllCardsBtn=document.getElementById("deselectAllCardsBtn"),selectUrOnlyBtn=document.getElementById("selectUrOnlyBtn"),selectSrOnlyBtn=document.getElementById("selectSrOnlyBtn");function generateHeroCheckboxes(){heroSelectionDiv.innerHTML="",allHeroes.forEach(e=>{const o=`hero-${e.name}`,t=document.createElement("label");t.htmlFor=o,t.dataset.role=e.role,t.innerHTML=`<input type="checkbox" id="${o}" class="hero-checkbox" value="${e.name}" checked> ${e.name}`,heroSelectionDiv.appendChild(t)})}function generateCardCheckboxes(){cardSelectionDiv.innerHTML="",allCards.forEach(e=>{const o=`card-${e}`,t=document.createElement("label");t.htmlFor=o,t.innerHTML=`<input type="checkbox" id="${o}" class="card-checkbox" value="${e}" checked> ${e}`,cardSelectionDiv.appendChild(t)})}function updateHeroVisibility(){const e=Array.from(roleFilters).filter(e=>e.checked).map(e=>e.value);heroSelectionDiv.querySelectorAll("label").forEach(o=>{e.includes(o.dataset.role)?o.style.display="flex":o.style.display="none"})}roleFilters.forEach(e=>e.addEventListener("change",updateHeroVisibility)),startButton.addEventListener("click",runRoulette),selectAllHeroesBtn.addEventListener("click",()=>document.querySelectorAll(".hero-checkbox").forEach(e=>e.checked=!0)),deselectAllHeroesBtn.addEventListener("click",()=>document.querySelectorAll(".hero-checkbox").forEach(e=>e.checked=!1)),selectAllCardsBtn.addEventListener("click",()=>document.querySelectorAll(".card-checkbox").forEach(e=>e.checked=!0)),deselectAllCardsBtn.addEventListener("click",()=>document.querySelectorAll(".card-checkbox").forEach(e=>e.checked=!1)),selectUrOnlyBtn.addEventListener("click",()=>document.querySelectorAll(".card-checkbox").forEach(e=>e.checked=!e.value.startsWith("SR"))),selectSrOnlyBtn.addEventListener("click",()=>document.querySelectorAll(".card-checkbox").forEach(e=>e.checked=e.value.startsWith("SR"))),generateHeroCheckboxes(),generateCardCheckboxes();
});
