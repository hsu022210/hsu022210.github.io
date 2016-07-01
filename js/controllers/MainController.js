app.controller('MainController', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {

    //vocab list appear/disappear
  $('.btnList').click(function() {
    $( '.list' ).slideToggle();
  });

  //detect the screen size, typing area focus/unfocus
  if ($(window).width() <= 1280) {
    //
    }else{
        $('.meaning').focus();
      }

    //hide the list at first
  $('.list').hide();

    //database of vocabs list
  data = {
    'ethnologist': '民族學者',
    'empathy': '移情作用的',
    'mundane': '世俗的',
    'subtle': '微妙的',
    'endure': '忍受',
    'ubiquitous':'遍在的',
    'fickle': '變換無常的',
    'immutable': '不變的',
    'evanescent': '逐漸消失的',
    'deplore': '悲悼',
    'naysayer': '反對者',
    'pushover': '易打倒的人',
    'braggart': '吹牛(的)',
    'perplex': '使困惑',
    'absorb': '吸收',
    'consolidate': '鞏固',
    'disperse': '分散(的)',
    'deploy': '展開',
    'forbid': '禁止',
    'bourgeois': '中產階級(的)',
    'capitulate': '有條件投降',
    'cliche': '陳腔濫調(的)',
    'genre': '類型',
    'discern': '辨別',
    'conform': '使一致(的)',
    'vantage': '優越的地位',
    'obscure': '晦澀的',
    'eminent': '傑出的',
    'reactionary': '反動主義(者)(的)',
    'egalitarian': '平等主義的',
    'unfathomable': '難測的',
    'exceptional': '例外的',
    'ambition': '野心',
    'colleague': '同事',
    'collaborator': '合作者',
    'discernible': '可分別的',
    'genteel': '優雅的',
    'affable': '和藹的',
    'vehement': '激烈的',
    'enervate': '衰弱(的)',
    'contour': '(畫)輪廓',
    'transgress': '違法',
    'exacerbate': '惡化',
    'discrepancy': '差異',
    'infelicity': '不幸',
    'perplex': '使困惑',
    'nuance': '細微差別',
    'inconsequential': '不合邏輯的',
    'unyielding': '不屈的',
    'dwarf': '矮子',
    'counterfait': '偽造品',
    'foe': '敵人',
    'emblematic': '象徵的',
    'reminiscent': '回憶的',
    'nostalgic': '鄉愁的',
    'obstruct': '設障礙',
    'negligible': '可忽略的',
    'imperceptible': '不能感知的',
    'pivotal': '樞紐的',
    'arbitrary': '任意的',
    'truncate': '切去頭端',
    'loquacious': '多嘴的',
    'discursive': '散漫的',
    'tendentious': '有傾向的',
    'oracular': '神論的',
    'pronouncement': '宣言',
    'unwilling': '不願意的',
    'empiricist': '經驗主義者',
    'voluminous': '很多的',
    'candor': '坦白',
    'strain': '拉緊',
    'whimsy': '怪念頭',
    'solipsism': '唯我論',
    'antidote': '解藥',
    'antithetical': '相反的',
    'immaterial': '非物質的',
    'endemic': '地方的',
    'stumbling': '障礙的',
    'infidelity': '無信仰',
    'reverence': '尊敬',
    'feckless': '沒精神的',
    'exemplary': '可仿效的',
    'idiosyncratic': '特質的',
    'irreconcilable': '不能和解的',
    'glacier': '冰河',
    'reflect': '反射',
    'supersede': '代替',
    'disparity': '不一致',
    'perpetuate': '使永恆',
    'fixate': '注視',
    'grip': '緊握',
    'disdainful': '輕蔑的',
    'derisive': '嘲笑的',
    'indebted': '負債的',
    'petrify': '使石化',
    'thorough': '徹底的',
    'cursory': '草率的',
    'controvert': '辯駁',
    'personify': '視為人',
    'eclipse': '日(月) 蝕',
    'epitomize': '摘要',
    'belie': '掩飾',
    'apathy': '冷漠',
    'imprudence': '不謹慎',
    'reckless': '不注意的',
    'mawkish': '令人作嘔的',
    'torpor': '麻木',
    'commonality': '公共',
    'ideology': '意識形態',
    'expurgate': '刪除',
    'foible': '弱點',
    'heir': '繼承人',
    'buoyant': '心情愉快的',
    'acerbic': '酸的',
    'premonitory': '預告的',
    'laudatory': '讚美的',
    'temperate': '適度的',
    'provincipal': '省的',
    'capricious': '反覆無常的',
    'obstinate': '頑固的',
    'abreast': '並肩地',
    'collate': '對照',
    'surpass': '超越',
    'snap': '咬',
    'spray': '水花',
    'irritant': '刺激的',
    'noxious': '有毒的',
    'resemble': '相似',
    'erratic': '古怪的人',
    'nonchalent': '漠不關心的',
    'unwelcome': '不受歡迎的',
    'assiduous': '勸勉的',
    'divert': '使改道',
    'stanch': '止住',
    'accentuate': '以重音念',
    'taciturnity': '沉默寡言',
    'alacrity': '輕快',
    'rhapsody': '敘事詩',
    'bureaucrat': '官僚',
    'commision': '傭金',
    'antirust': '抗鏽',
    'meddle': '干涉',
    'bugle': '(吹)號角',
    'resignation': '辭職',
    'shirk': '逃避',
    'devolve': '轉移',
    'misuse': '誤用',
    'orient': '東方的',
    'discipline': '紀律',
    'voyeur': '窺淫狂病人',
    'gaze': '注視',
    'fixate': '注視',
    'obsess': '迷住',
    'indifferent': '不關心的',
    'quandary': '困惑',
    'discrepancy': '差異',
    'predicament': '困局',
    'sediment': '沉澱物',
    'ode': '頌詩',
    'deleterious': '有害的',
    'detrimental': '有害的',
    'skeptic': '懷疑論者',
    'layperson': '門外漢',
    'hypocrite': '偽君子',
    'egotist': '自我中心主義者',
    'sycophant': '諂媚者',
    'adulator': '好奉承的人',
    'coward': '懦弱的人',
    'court': '法院',
    'rugged': '高低不平的',
    'modernism': '現代主義',
    'defy': '挑釁',
    'woo': '求愛',
    'sinister': '兇惡的',
    'commonplace': '常事',
    'propaganda': '宣傳',
    'scornful': '輕蔑的',
    'cope': '競爭',
    'irksome': '厭惡的',
    'playwright': '劇作家',
    'predilection': '偏愛',
    'recondite': '難解的',
    'morbid': '不健全的',
    'vertebrate': '有脊椎的',
    'invertebrate': '無脊椎的',
    'repetitious': '重覆的',
    'daunt': '威嚇',
    'impediment': '妨礙',
    'manipulate': '操縱',
    'startling': '令人吃驚的',
    'canonize': '聖徒化',
    'epitome': '摘要',
    'dynamism': '力本說',
    'punctilious': '精密細心的',
    'luminary': '發光體',
    'scintillate': '閃爍',
    'incendiary': '放火的',
    'veracious': '誠實的',
    'efflorescence': '風化',
    'seep': '滲出',
    'exact': '正確的',
    'dilemma': '進退兩難的局面',
    'clangorous': '響亮的',
    'tepid': '微溫的',
    'excise': '切除',
    'venture': '冒險',
    'erode': '腐蝕',
    'rejuvenate': '復原',
    'textile': '紡織品',
    'glaring': '閃耀的',
    'omission': '省略',
    'indices': 'index的複數',
    'disinterest': '不關心',
    'indictment': '起訴',
    'corroborate': '使堅固',
    'norm': '模範',
    'mitigate': '緩和',
    'dictate': '口述',
    'precocious': '早熟的',
    'impecunious': '身無分文的',
    'assiduous': '勸勉的',
    'feign': '假裝',
    'conspire': '陰謀',
    'fleeting': '飛逝的',
    'untapped': '未使用的',
    'abstruse': '難解的',
    'hortatory': '勸告的',
    'transgress': '違法',
    'trifle': '小事',
    'extant': '現存的',
    'heyday': '全盛期',
    'antagonistic': '反對的',
    'render': '使得',
    'obsolete': '荒廢的',
    'unwitting': '不知情的',
    'hierarchy': '階級組織',
    'penchant': '傾向',
    'distaste': '嫌惡',
    'indifference': '漠不關心',
    'aversion': '厭惡',
    'legitimize': '合法',
    'vitiate': '使腐敗',
    'venerate': '尊敬',
    'flout': '嘲笑',
    'presuppose': '預先假定',
    'exploit': '開發',
    'imitate': '模仿',
    'illuminate': '照明',
    'revile': '斥責',
    'vilify': '誹謗',
    'ville': '惡劣的',
    'ambivalent': '矛盾的',
    'complacent': '滿足的',
    'adulate': '諂媚',
    'constitution': '憲法',
    'ideological': '意識形態的',
    'impartial': '公平的',
    'tedious': '沉悶乏味的',
    'versatility': '多才多藝',
    'delicacy': '精緻',
    'virtue': '德行',
    'spurious': '偽造的',
    'speculate': '推測',
    'conjectural': '推測的',
    'fabricate': '製造',
    'implausible': '不像真實的',
    'scrutiny': '細看',
    'hostility': '敵對',
    'inimical': '抵觸的',
    'autocratic': '獨裁的',
    'symbiotic': '共生的',
    'apathetic': '缺乏感情的',
    'forethought': '先見',
    'prudence': '審慎',
    'opprobrium': '汙名',
    'disdain': '輕蔑',
    'outlet': '出口',
    'deflect': '打歪',
    'dissident': '意見不同的',
    'censor': '審查',
    'disseminate': '散播',
    'downplay': '不予重視',
    'minimize': '最小化',
    'relinquish': '放棄',
    'purport': '打算',
    'neutrality': '中立',
    'timeliness': '合時',
    'activism': '實踐主義',
    'immodest': '不謙虛的',
    'exalt': '提高',
    'transcendent': '卓越的',
    'aver': '主張',
    'avow': '聲明',
    'decry': '責難',
    'enamor': '使迷戀',
    'judicious': '賢明的',
    'unnerve': '使喪失勇氣',
    'untiring': '不疲倦的',
    'feminist': '男女平等主義者',
    'articulation': '關節',
    'foreshadow': '暗示',
    'precedent': '先例',
    'recession': '不景氣',
    'conspire': '陰謀',
    'rampant': '猖獗的',
    'slump': '暴跌',
    'spate': '洪水氾濫',
    'hearten': '激勵',
    'counterforce': '反作用力',
    'stimulant': '興奮性的',
    'concomitant': '伴隨的',
    'filibuster': '掠奪',
    'stall': '拖延',
    'frivolous': '輕佻的',
    'pit': '地窖',
    'invigorate': '賦予精神',
    'placate': '撫慰',
    'dispirit': '使沮喪',
    'fare': '車(船)費',
    'manifest': '表現',
    'blur': '模糊',
    'pertinent': '相關的',
    'pessimism': '悲觀主義',
    'unfounded': '無理由的',
    'conciliate': '調和',
    'indolent': '懶惰的',
    'banal': '平凡的',
    'lethargic': '遲鈍的',
    'austere': '嚴峻的',
    'dovish': '鴿派的',
    'apostle': '最初的傳道者',
    'anachronistic': '時代錯誤的',
    'exotic': '異國的',
    'emulate': '盡力趕上',
    'alienate': '挑撥',
    'radical': '激進的',
    'orthodoxy': '正統的',
    'draw': '拉',
    'novelty': '新奇的',
    'chunk': '大塊',
    'convention': '慣例',
    'dogmatism': '獨斷主義',
    'stigmatization': '使蒙上汙名',
    'lionization': '崇拜',
    'marginalize': '使邊緣化',
    'foreground': '前景',
    'transcend': '超越',
    'compel': '強迫',
    'dictate': '口述',
    'caprice': '反覆無常',
    'aesthetics': '美學',
    'methodology': '方法論',
    'unenlightened': '無知',
    'authoritarian': '獨裁的',
    'modicum': '少量',
    'dissent': '不同意',
    'demur': '反對',
    'schism': '分裂',
    'compliance': '順從',
    'shortsightedness': '近視',
    'avid': '熱望的',
    'didactic': '教訓的',
    'syntactical': '依照句法的',
    'sartorial': '裁縫的',
    'finesse': '機密技巧',
    'understatement': '輕描淡寫',
    'undemonstrative': '不露感情的',
    'panache': '炫耀',
    'gawkiness': '癡呆',
    'deflect': '打歪',
    'constrain': '強迫',
    'pious': '虔誠的',
    'quixotic': '過於理想化的',
    'brandish': '揮舞',
    'flout': '嘲笑',
    'profound': '深奧的',
    'cynicism': '憤世忌俗',
    'pragmatism': '實用主義',
    'aquifer': '地下水含水層',
    'innocuous': '無毒的',
    'feasible': '可行的',
    'minimal': '最小的',
    'remedial': '補救的',
    'antedate': '提早日期',
    'cloak': '掩護',
    'consensus': '一致',
    'disparate': '不同的',
    'divergent': '分歧的',
    'trite': '平庸的',
    'trivial': '日常的',
    'aria': '抒情調',
    'conductor': '領隊',
    'exacting': '嚴格的',
    'meticulous': '精確的',
    'thrill': '震顫',
    'elate': '使興高采烈',
    'invasive': '侵略性的',
    'conspicuous': '顯眼的',
    'robust': '強健的',
    'menace': '脅迫',
    'distinctive': '有特色的',
    'cutback': '減少',
    'lure': '誘惑',
    'enchant': '使著迷',
    'banish': '驅逐',
    'immure': '監禁',
    'sustain': '支撐',
    'distort': '扭曲',
    'comprehensive': '有理解力的',
    'redundant': '多餘的',
    'pithy': '有力的',
    'premature': '早熟的',
    'incessant': '不斷的',
    'reform': '重排格式',
    'requisite': '必需品',
    'agrarian': '有關土地的',
    'heed': '留心',
    'delineate': '描繪',
    'condone': '寬恕',
    'intransigent': '非妥協性的',
    'lax': '鬆懈的',
    'negligent': '疏忽的',
    'obsequious': '諂媚的',
    'resolute': '堅決的',
    'ironical': '諷刺的',
    'wary': '留心的',
    'probity': '正直',
    'extravagance': '奢侈',
    'disapprobation': '不答應',
    'acquisitive': '想獲得的',
    'illiberal': '無教養的',
    'profligate': '放蕩的',
    'fractious': '易怒的',
    'embrace': '擁抱',
    'erroneous': '錯誤的',
    'phylogeny': '發展史',
    'defy': '藐視',
    'replicate': '折疊',
    'innate': '天生的',
    'reconcile': '使和解',
    'evasive': '迴避的',
    'forthright': '直接的',
    'intrinsic': '本質的',
    'merit': '優點',
    'paradigm': '範例',
    'misnomer': '用詞不當',
    'profundity': '深奧',
    'anomaly': '異常的人或物',
    'underscore': '劃線於...下',
    'diffuse': '散播',
    'predominant': '優越的',
    'gratify': '使滿足',
    'peculiar': '奇特的',
    'pellucid': '透明的',
    'enigmatic': '高深莫測的',
    'malarial': '瘧疾的',
    'parasite': '寄生蟲',
    'populous': '人口多的',
    'malignant': '有惡意的',
    'ample': '充足的',
    'adequate': '適當的',
    'virulence': '毒性',
    'bifurcate': '分叉的',
    'utopian': '烏托邦的',
    'intuitive': '直覺的',
    'subversive': '破壞性的',
    'anarchic': '無政府狀態的',
    'pragmatic': '實際的',
    'accretive': '累積的',
    'exhaustive': '會耗盡的',
    'elitism': '菁英主義',
    'pugnacity': '好鬥',
    'vacillate': '躊躇',
    'petulant': '暴躁的',
    'conciliatory': '安撫的',
    'abet': '教唆',
    'repeal': '廢除',
    'humdrum': '平凡的',
    'dull': '呆滯的',
    'amend': '改善',
    'promulgate': '發佈',
    'diametrical': '直徑的',
    'adversary': '對手',
    'mercenary': '傭兵',
    'memoir': '傳記',
    'bravado': '虛張聲勢',
    'audacity': '大膽',
    'scrutiny': '仔細檢查',
    'introspection': '反省',
    'belittle': '輕視',
    'coagulation': '凝結',
    'thinning': '細線化',
    'clotting': '凝固',
    'nullify': '使無效',
    'obviate': '排除',
    'mask': '掩飾',
    'footnote': '腳註',
    'uneven': '不平均的',
    'primitive': '原始的',
    'narcissistic': '自戀',
    'conducive': '有助於...的',
    'rhetoric': '修辭',
    'hallmark': '品質證明',
    'forbearance': '忍耐',
    'exuberance': '茂盛',
    'obduracy': '頑固',
    'temper': '使緩和',
    'appraisal': '評價',
    'caustic': '腐蝕性的',
    'jab': '刺',
    'impeccable': '無懈可擊的',
    'engender': '產生',
    'deadlock': '僵局',
    'inert': '遲鈍的',
    'chimerical': '空想的',
    'ephemeral': '短暫的',
    'deprecate': '聲明不贊成',
    'unassuming': '謙遜的',
    'elicit': '引出',
    'hinder': '阻礙',
    'thwart': '阻礙',
    'shackle': '束縛',
    'stifle': '抑制',
    'posit': '安置',
    'preamble': '前言',
    'prelude': '序言',
    'preeminent': '優秀的',
    'prerogative': '特權的',
    'preclude': '預先排除',
    'precursor': '先驅者',
    'precipitous': '陡峭的',
    'prevaricate': '搪塞',
    'presage': '預兆',
    'precept': '教訓',
    'preposterous': '前後顛倒的',
    'extract': '萃取',
    'exculpate': '使無罪',
    'effervescent': '興奮的',
    'egregious': '惡名昭彰的',
    'exhume': '發掘',
    'elucidate': '闡明',
    'emancipate': '釋放',
    'expatriate': '逐出國外',
    'erudite': '博學者',
    'extemporaneous': '臨時的',
    'extort': '勒索',
    'eccentric': '古怪的',
    'expound': '解釋',
    'eclectic': '折衷的',
    'elusive': '難懂的',
    'exult': '歡喜',
    'egress': '外出',
    'eligible': '可以選的',
    'effusion': '流出物',
    'efface': '抹去',
    'elite': '精華',
    'exorbitant': '過度的',
    'evince': '表示',
    'evade': '逃避',
    'extol': '稱讚',
    'explicate': '解釋',
    'expunge': '刪掉',
    'expatiate': '詳述',
    'ebullient': '熱情的',
    'exhort': '勸誡',
    'exigency': '急迫',
    'exonerate': '解除',
    'extricate': '使解脫',
    'emanate': '散發',
    'efficacy': '功效',
    'effigy': '雕像',
    'exodus': '大批的離去',
    'exude': '流出',
    'excision': '刪除',
    'effrontery': '厚顏無恥',
    'extenuate': '企圖減輕罪行',
    'effete': '疲憊的',
    'extirpate': '消滅',
    'extradite': '引渡',
    'extrude': '擠出',
    'excoriate': '擦破皮膚',
    'expletive': '填補的',
    'effulgent': '光輝燦爛的',
    'perennial': '連續多年的',
    'permeate': '充滿',
    'pernicious': '有害的',
    'pertinacious': '頑固的',
    'perspicacious': '聰明的',
    'perjury': '偽證',
    'perspicuous': '明白的',
    'perfidy': '背信',
    };

    //let the list in view iterate vocabs by AngularJS
  $scope.dicts = data;

    //retrieve the word in data randomly
  function theWord() {
    dataLength = Object.keys(data).length;
    randomNumber = Math.floor(Math.random()*dataLength);
    i = Object.keys(data)[randomNumber];
   }

   theWord();

    //the question in view = key in data
  $scope.word = i;

    //the answer in view = value in data
  $scope.answer = data[i];

    // hide the answer at first
  $('.answer').hide();

    /* Below are nothing when loading page*/

    //change the quiz word
  function change(){
    theWord();
    $('.word').text(i);
    m = data[i];
    $('.answerWeb').text(m);
    $('.answerMobile').text(m);
  }

    //go to dictionary.com to explain the word in different way depends on the screen size
  $('.wordHover').click(function() {
    if ($(window).width() <= 1280) {
      window.location.assign('http://dictionary.reference.com/browse/'+i);
    }else{
        window.open('http://dictionary.reference.com/browse/'+i, '_blank');
      }
  });

    //show the answer and blur the focusing
  $('.btnAnswer').click(function() {
    $('.answer').show();
    $('.btnAnswer').blur();
  });

  //hide the answer and activate change function for next word
  $('.btnNext').click(function() {
    $('.answer').hide();
    change();

    //clean the value of meaning
    if ($(window).width() <= 1280) {
      $('.btnNext').blur();
    }else{
        $('.meaning').focus();
      }
    $('.meaning').val('');
  });

  //click enter = answer, + = next
  $(document).keyup(function(event) {
    if(event.which === 13) {
        $('.answer').show();
        $('.meaning').blur();
      }
      else if(event.which === 107) {
         $('.answer').hide();
         change();
         $('.meaning').val('');
         $('.meaning').focus();
        }
    });


/*  var ref = new Firebase('https://quizurself.firebaseio.com/bag/chinese');

  ref.on("value", function(snapshot) {
    $scope.test = (snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  var obj = $firebaseObject(ref);

  obj.$bindTo($scope, "tes");
*/


}]);
