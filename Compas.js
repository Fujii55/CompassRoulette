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

    // ========== HTML要素の取得 ==========
    const startButton = document.getElementById('startButton');
    const heroResultDiv = document.getElementById('heroResult');
    const cardResultDiv = document.getElementById('cardResult');
    const heroSelectionDiv = document.getElementById('hero-selection');
    const roleFilters = document.querySelectorAll('.role-filter');
    const cardSelectionDiv = document.getElementById('card-selection');
    
    // ヒーロープリセットボタン
    const selectAllHeroesBtn = document.getElementById('selectAllHeroesBtn');
    const deselectAllHeroesBtn = document.getElementById('deselectAllHeroesBtn');
    
    // カードプリセットボタン
    const selectAllCardsBtn = document.getElementById('selectAllCardsBtn');
    const deselectAllCardsBtn = document.getElementById('deselectAllCardsBtn');
    const selectUrOnlyBtn = document.getElementById('selectUrOnlyBtn');
    const selectSrOnlyBtn = document.getElementById('selectSrOnlyBtn');

    // ========== 機能の実装 ==========

    function generateHeroCheckboxes(){heroSelectionDiv.innerHTML="";allHeroes.forEach(hero=>{const e=`hero-${hero.name}`,t=document.createElement("label");t.htmlFor=e,t.dataset.role=hero.role,t.innerHTML=`<input type="checkbox" id="${e}" class="hero-checkbox" value="${hero.name}" checked> ${hero.name}`,heroSelectionDiv.appendChild(t)})}
    function generateCardCheckboxes(){cardSelectionDiv.innerHTML="";allCards.forEach(e=>{const t=`card-${e}`,l=document.createElement("label");l.htmlFor=t,l.innerHTML=`<input type="checkbox" id="${t}" class="card-checkbox" value="${e}" checked> ${e}`,cardSelectionDiv.appendChild(l)})}
    function updateHeroVisibility(){const e=Array.from(roleFilters).filter(e=>e.checked).map(e=>e.value);heroSelectionDiv.querySelectorAll("label").forEach(t=>{e.includes(t.dataset.role)?t.style.display="flex":t.style.display="none"})}
    
    // ルーレットを実行するメインの関数
    function runRoulette() {
        // --- ヒーロー選択処理 ---
        const selectedHeroCheckboxes = document.querySelectorAll('.hero-checkbox:checked');
        const availableHeroes = Array.from(selectedHeroCheckboxes)
            .filter(checkbox => checkbox.closest('label').style.display !== 'none')
            .map(checkbox => checkbox.value);

        if (availableHeroes.length === 0) {
            alert('対象のヒーローがいません！');
            return;
        }
        const randomHeroIndex = Math.floor(Math.random() * availableHeroes.length);
        const selectedHero = availableHeroes[randomHeroIndex];

        // --- カードカテゴリ選択処理 ---
        const selectedCardCheckboxes = document.querySelectorAll('.card-checkbox:checked');
        const availableCards = Array.from(selectedCardCheckboxes).map(checkbox => checkbox.value);

        if (availableCards.length === 0) {
            alert('カードカテゴリを1つ以上選択してください！');
            return;
        }

        // ▼▼▼ カードカテゴリを重複ありでランダムに4つ選出 ▼▼▼
        const selectedCards = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * availableCards.length);
            selectedCards.push(availableCards[randomIndex]);
        }
        // ▲▲▲ ここまで変更 ▲▲▲

        // --- 結果を表示 ---
        heroResultDiv.innerHTML = `<h3>${selectedHero}</h3>`;
        cardResultDiv.innerHTML = selectedCards.map(card => `<p>${card}</p>`).join('');
    }

    // ========== イベントリスナーと初期化処理 ==========
    roleFilters.forEach(filter => filter.addEventListener('change', updateHeroVisibility));
    startButton.addEventListener('click', runRoulette);
    
    // --- ヒーロープリセットボタンのイベントリスナー ---
    selectAllHeroesBtn.addEventListener('click', () => {
        document.querySelectorAll('.hero-checkbox').forEach(checkbox => {
            checkbox.checked = true;
        });
    });
    deselectAllHeroesBtn.addEventListener('click', () => {
        document.querySelectorAll('.hero-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
    });

    // --- カードプリセットボタンのイベントリスナー ---
    selectAllCardsBtn.addEventListener('click', () => {
        document.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.checked = true;
        });
    });
    deselectAllCardsBtn.addEventListener('click', () => {
        document.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
    });
    selectUrOnlyBtn.addEventListener('click', () => {
        document.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.checked = !checkbox.value.startsWith('SR');
        });
    });
    selectSrOnlyBtn.addEventListener('click', () => {
        document.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.checked = checkbox.value.startsWith('SR');
        });
    });
    
    generateHeroCheckboxes();
    generateCardCheckboxes();
});