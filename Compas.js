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
        { name: 'ポプ子&ピピ美', role: 'タンク'}, // Collab
        { name: 'めるーにゃ   { name: 'ヴィーナス ポロロッチョ', role: 'アタッカー' },
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
        { name: 'ポプ子&ピピ美', role: 'タンク'}, // Collab
        { name: 'メールニャ・ランチェルナ', role: 'ガンナー'},
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
    const resultWrapper = document.getElementById('result-wrapper');
    const redTeamResultDiv = document.getElementById('red-team-result');
    const blueTeamResultDiv = document.getElementById('blue-team-result');
    const noTeamResultDiv = document.getElementById('no-team-result');
    const playerCountSelect = document.getElementById('playerCount');
    const enableTeamSplitCheckbox = document.getElementById('enableTeamSplitCheckbox');
    const uniqueHeroesCheckbox = document.getElementById('uniqueHeroesCheckbox');
    const uniqueRolesCheckbox = document.getElementById('uniqueRolesCheckbox');
    const heroSelectionDiv = document.getElementById('hero-selection');
    const roleFilters = document.querySelectorAll('.role-filter');
    const cardSelectionDiv = document.getElementById('card-selection');
    const selectAllHeroesBtn = document.getElementById('selectAllHeroesBtn');
    const deselectAllHeroesBtn = document.getElementById('deselectAllHeroesBtn');
    const selectAllCardsBtn = document.getElementById('selectAllCardsBtn');
    const deselectAllCardsBtn = document.getElementById('deselectAllCardsBtn');
    const selectUrOnlyBtn = document.getElementById('selectUrOnlyBtn');
    const selectSrOnlyBtn = document.getElementById('selectSrOnlyBtn');

    // ========== ▼▼▼ 前回抜け落ちていた関数 ▼▼▼ ==========
    
    // ヒーロー選択チェックボックスを動的に生成
    function generateHeroCheckboxes() {
        heroSelectionDiv.innerHTML = '';
        allHeroes.forEach(hero => {
            const checkboxId = `hero-${hero.name}`;
            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.dataset.role = hero.role;
            label.innerHTML = `<input type="checkbox" id="${checkboxId}" class="hero-checkbox" value="${hero.name}" checked> ${hero.name}`;
            heroSelectionDiv.appendChild(label);
        });
    }

    // カードカテゴリ選択チェックボックスを動的に生成
    function generateCardCheckboxes() {
        cardSelectionDiv.innerHTML = '';
        allCards.forEach(cardCategory => {
            const checkboxId = `card-${cardCategory}`;
            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.innerHTML = `<input type="checkbox" id="${checkboxId}" class="card-checkbox" value="${cardCategory}" checked> ${cardCategory}`;
            cardSelectionDiv.appendChild(label);
        });
    }

    // ロール絞り込みが変更された時の処理
    function updateHeroVisibility() {
        const selectedRoles = Array.from(roleFilters)
            .filter(i => i.checked)
            .map(i => i.value);

        heroSelectionDiv.querySelectorAll('label').forEach(label => {
            if (selectedRoles.includes(label.dataset.role)) {
                label.style.display = 'flex';
            } else {
                label.style.display = 'none';
            }
        });
    }

    // ========== ▲▲▲ ここまで ▲▲▲ ==========

    // ヒーロー選出の補助関数
    function selectHeroesForTeam(teamSize, heroPool, isUniqueHeroes, isUniqueRoles) {
        if (isUniqueRoles) {
            const heroesByRole = {};
            heroPool.forEach(hero => {
                if (!heroesByRole[hero.role]) heroesByRole[hero.role] = [];
                heroesByRole[hero.role].push(hero.name);
            });
            const availableRoles = Object.keys(heroesByRole);
            if (availableRoles.length < teamSize) return null; // ロール不足

            const shuffledRoles = [...availableRoles].sort(() => 0.5 - Math.random());
            const selectedHeroes = [];
            for (let i = 0; i < teamSize; i++) {
                const role = shuffledRoles[i];
                const heroesInRole = heroesByRole[role];
                const randomIndex = Math.floor(Math.random() * heroesInRole.length);
                selectedHeroes.push(heroesInRole[randomIndex]);
            }
            return selectedHeroes;

        } else if (isUniqueHeroes) {
            if (heroPool.length < teamSize) return null; // ヒーロー不足
            const shuffledHeroes = [...heroPool.map(h => h.name)].sort(() => 0.5 - Math.random());
            return shuffledHeroes.slice(0, teamSize);

        } else {
            const selectedHeroes = [];
            const heroNames = heroPool.map(h => h.name);
            if (heroNames.length === 0) return null;
            for (let i = 0; i < teamSize; i++) {
                const randomIndex = Math.floor(Math.random() * heroNames.length);
                selectedHeroes.push(heroNames[randomIndex]);
            }
            return selectedHeroes;
        }
    }

    // ルーレット実行
    function runRoulette() {
        const playerCount = parseInt(playerCountSelect.value, 10);
        const isTeamSplitEnabled = enableTeamSplitCheckbox.checked;
        const isUniqueHeroes = uniqueHeroesCheckbox.checked;
        const isUniqueRoles = uniqueRolesCheckbox.checked;

        const availableHeroObjects = allHeroes.filter(hero => {
            const checkbox = document.getElementById(`hero-${hero.name}`);
            return checkbox && checkbox.checked && checkbox.closest('label').style.display !== 'none';
        });
        const availableCards = Array.from(document.querySelectorAll('.card-checkbox:checked')).map(cb => cb.value);

        if (availableCards.length === 0) {
            alert('カードカテゴリを1つ以上選択してください！');
            return;
        }

        redTeamResultDiv.innerHTML = '';
        blueTeamResultDiv.innerHTML = '';
        noTeamResultDiv.innerHTML = '';

        if (isTeamSplitEnabled && playerCount >= 4) {
            let redCount, blueCount;
            if (playerCount === 4) { redCount = 2; blueCount = 2; }
            else if (playerCount === 5) { [redCount, blueCount] = Math.random() < 0.5 ? [3, 2] : [2, 3]; }
            else if (playerCount === 6) { redCount = 3; blueCount = 3; }

            let redHeroes = selectHeroesForTeam(redCount, availableHeroObjects, isUniqueHeroes, isUniqueRoles);
            if (!redHeroes) {
                alert('赤チームのヒーロー選出条件が厳しすぎます！絞り込みを緩めてください。');
                return;
            }

            let remainingHeroes = availableHeroObjects;
            if (isUniqueHeroes) {
                remainingHeroes = availableHeroObjects.filter(hero => !redHeroes.includes(hero.name));
            }
            
            let blueHeroes = selectHeroesForTeam(blueCount, remainingHeroes, isUniqueHeroes, isUniqueRoles);
            if (!blueHeroes) {
                alert('青チームのヒーロー選出条件が厳しすぎます！絞り込みを緩めてください。');
                return;
            }

            redTeamResultDiv.innerHTML = '<h2>赤チーム</h2>';
            blueTeamResultDiv.innerHTML = '<h2>青チーム</h2>';

            [redHeroes, blueHeroes].forEach((teamHeroes, index) => {
                const teamDiv = (index === 0) ? redTeamResultDiv : blueTeamResultDiv;
                teamHeroes.forEach((hero, playerIndex) => {
                    const selectedCards = [];
                    for (let j = 0; j < 4; j++) {
                        const randomIndex = Math.floor(Math.random() * availableCards.length);
                        selectedCards.push(availableCards[randomIndex]);
                    }
                    const personResultHTML = `
                        <div class="person-result">
                            <h3>Player ${playerIndex + 1}</h3>
                            <div class="hero-name">${hero}</div>
                            ${selectedCards.map(card => `<p>${card}</p>`).join('')}
                        </div>`;
                    teamDiv.innerHTML += personResultHTML;
                });
            });

        } else {
            const selectedHeroes = selectHeroesForTeam(playerCount, availableHeroObjects, isUniqueHeroes, isUniqueRoles);
            if (!selectedHeroes) {
                alert('ヒーロー選出条件が厳しすぎます！絞り込みを緩めてください。');
                return;
            }

            selectedHeroes.forEach((hero, i) => {
                const selectedCards = [];
                for (let j = 0; j < 4; j++) {
                    const randomIndex = Math.floor(Math.random() * availableCards.length);
                    selectedCards.push(availableCards[randomIndex]);
                }
                const personResultHTML = `
                    <div class="person-result">
                        <h3>Player ${i + 1}</h3>
                        <div class="hero-name">${hero}</div>
                        ${selectedCards.map(card => `<p>${card}</p>`).join('')}
                    </div>`;
                noTeamResultDiv.innerHTML += personResultHTML;
            });
        }
    }

    // ========== イベントリスナーと初期化処理 ==========
    roleFilters.forEach(filter => filter.addEventListener('change', updateHeroVisibility));
    startButton.addEventListener('click', runRoulette);
    
    selectAllHeroesBtn.addEventListener('click', () => document.querySelectorAll('.hero-checkbox').forEach(c => c.checked = true));
    deselectAllHeroesBtn.addEventListener('click', () => document.querySelectorAll('.hero-checkbox').forEach(c => c.checked = false));
    selectAllCardsBtn.addEventListener('click', () => document.querySelectorAll('.card-checkbox').forEach(c => c.checked = true));
    deselectAllCardsBtn.addEventListener('click', () => document.querySelectorAll('.card-checkbox').forEach(c => c.checked = false));
    selectUrOnlyBtn.addEventListener('click', () => document.querySelectorAll('.card-checkbox').forEach(c => c.checked = !c.value.startsWith('SR')));
    selectSrOnlyBtn.addEventListener('click', () => document.querySelectorAll('.card-checkbox').forEach(c => c.checked = c.value.startsWith('SR')));
    
    generateHeroCheckboxes();
    generateCardCheckboxes();
   });



