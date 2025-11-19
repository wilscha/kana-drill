import type { Gojuuon } from "$lib/types/gojuuon";

export const KANA = [
	{ character: 'あ', reading: 'a', dakuten: false, yoon: false, gojuuon: 'a', kana: "hiragana" },
	{ character: 'い', reading: 'i', dakuten: false, yoon: false, gojuuon: 'i', kana: "hiragana" },
	{ character: 'う', reading: 'u', dakuten: false, yoon: false, gojuuon: 'u', kana: "hiragana" },
	{ character: 'え', reading: 'e', dakuten: false, yoon: false, gojuuon: 'e', kana: "hiragana" },
	{ character: 'お', reading: 'o', dakuten: false, yoon: false, gojuuon: 'o', kana: "hiragana" },

	{ character: 'か', reading: 'ka', dakuten: false, yoon: false, gojuuon: 'ka', kana: "hiragana" },
	{ character: 'き', reading: 'ki', dakuten: false, yoon: false, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'く', reading: 'ku', dakuten: false, yoon: false, gojuuon: 'ku', kana: "hiragana" },
	{ character: 'け', reading: 'ke', dakuten: false, yoon: false, gojuuon: 'ke', kana: "hiragana" },
	{ character: 'こ', reading: 'ko', dakuten: false, yoon: false, gojuuon: 'ko', kana: "hiragana" },

	{ character: 'さ', reading: 'sa', dakuten: false, yoon: false, gojuuon: 'sa', kana: "hiragana" },
	{ character: 'し', reading: 'shi', dakuten: false, yoon: false, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'す', reading: 'su', dakuten: false, yoon: false, gojuuon: 'su', kana: "hiragana" },
	{ character: 'せ', reading: 'se', dakuten: false, yoon: false, gojuuon: 'se', kana: "hiragana" },
	{ character: 'そ', reading: 'so', dakuten: false, yoon: false, gojuuon: 'so', kana: "hiragana" },

	{ character: 'た', reading: 'ta', dakuten: false, yoon: false, gojuuon: 'ta', kana: "hiragana" },
	{ character: 'ち', reading: 'chi', dakuten: false, yoon: false, gojuuon: 'chi', kana: "hiragana" },
	{ character: 'つ', reading: 'tsu', dakuten: false, yoon: false, gojuuon: 'tsu', kana: "hiragana" },
	{ character: 'て', reading: 'te', dakuten: false, yoon: false, gojuuon: 'te', kana: "hiragana" },
	{ character: 'と', reading: 'to', dakuten: false, yoon: false, gojuuon: 'to', kana: "hiragana" },

	{ character: 'な', reading: 'na', dakuten: false, yoon: false, gojuuon: 'na', kana: "hiragana" },
	{ character: 'に', reading: 'ni', dakuten: false, yoon: false, gojuuon: 'ni', kana: "hiragana" },
	{ character: 'ぬ', reading: 'nu', dakuten: false, yoon: false, gojuuon: 'nu', kana: "hiragana" },
	{ character: 'ね', reading: 'ne', dakuten: false, yoon: false, gojuuon: 'ne', kana: "hiragana" },
	{ character: 'の', reading: 'no', dakuten: false, yoon: false, gojuuon: 'no', kana: "hiragana" },

	{ character: 'は', reading: 'ha', dakuten: false, yoon: false, gojuuon: 'ha', kana: "hiragana" },
	{ character: 'ひ', reading: 'hi', dakuten: false, yoon: false, gojuuon: 'hi', kana: "hiragana" },
	{ character: 'ふ', reading: 'fu', dakuten: false, yoon: false, gojuuon: 'fu', kana: "hiragana" },
	{ character: 'へ', reading: 'he', dakuten: false, yoon: false, gojuuon: 'he', kana: "hiragana" },
	{ character: 'ほ', reading: 'ho', dakuten: false, yoon: false, gojuuon: 'ho', kana: "hiragana" },

	{ character: 'ま', reading: 'ma', dakuten: false, yoon: false, gojuuon: 'ma', kana: "hiragana" },
	{ character: 'み', reading: 'mi', dakuten: false, yoon: false, gojuuon: 'mi', kana: "hiragana" },
	{ character: 'む', reading: 'mu', dakuten: false, yoon: false, gojuuon: 'mu', kana: "hiragana" },
	{ character: 'め', reading: 'me', dakuten: false, yoon: false, gojuuon: 'me', kana: "hiragana" },
	{ character: 'も', reading: 'mo', dakuten: false, yoon: false, gojuuon: 'mo', kana: "hiragana" },

	{ character: 'や', reading: 'ya', dakuten: false, yoon: false, gojuuon: 'ya', kana: "hiragana" },
	{ character: 'ゆ', reading: 'yu', dakuten: false, yoon: false, gojuuon: 'yu', kana: "hiragana" },
	{ character: 'よ', reading: 'yo', dakuten: false, yoon: false, gojuuon: 'yo', kana: "hiragana" },

	{ character: 'ら', reading: 'ra', dakuten: false, yoon: false, gojuuon: 'ra', kana: "hiragana" },
	{ character: 'り', reading: 'ri', dakuten: false, yoon: false, gojuuon: 'ri', kana: "hiragana" },
	{ character: 'る', reading: 'ru', dakuten: false, yoon: false, gojuuon: 'ru', kana: "hiragana" },
	{ character: 'れ', reading: 're', dakuten: false, yoon: false, gojuuon: 're', kana: "hiragana" },
	{ character: 'ろ', reading: 'ro', dakuten: false, yoon: false, gojuuon: 'ro', kana: "hiragana" },

	{ character: 'わ', reading: 'wa', dakuten: false, yoon: false, gojuuon: 'wa', kana: "hiragana" },
	{ character: 'を', reading: 'wo', dakuten: false, yoon: false, gojuuon: 'wo', kana: "hiragana" },
	{ character: 'ん', reading: 'n', dakuten: false, yoon: false, gojuuon: 'n', kana: "hiragana" },

	// dakuten (voiced) hiragana
	{ character: 'が', reading: 'ga', dakuten: true, yoon: false, gojuuon: 'ka', kana: "hiragana" },
	{ character: 'ぎ', reading: 'gi', dakuten: true, yoon: false, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'ぐ', reading: 'gu', dakuten: true, yoon: false, gojuuon: 'ku', kana: "hiragana" },
	{ character: 'げ', reading: 'ge', dakuten: true, yoon: false, gojuuon: 'ke', kana: "hiragana" },
	{ character: 'ご', reading: 'go', dakuten: true, yoon: false, gojuuon: 'ko', kana: "hiragana" },

	{ character: 'ざ', reading: 'za', dakuten: true, yoon: false, gojuuon: 'sa', kana: "hiragana" },
	{ character: 'じ', reading: 'ji', dakuten: true, yoon: false, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'ず', reading: 'zu', dakuten: true, yoon: false, gojuuon: 'su', kana: "hiragana" },
	{ character: 'ぜ', reading: 'ze', dakuten: true, yoon: false, gojuuon: 'se', kana: "hiragana" },
	{ character: 'ぞ', reading: 'zo', dakuten: true, yoon: false, gojuuon: 'so', kana: "hiragana" },

	{ character: 'だ', reading: 'da', dakuten: true, yoon: false, gojuuon: 'ta', kana: "hiragana" },
	// { character: 'ぢ', reading: 'ji', dakuten: true, yoon: false, gojuuon: 'chi', kana: "hiragana" }, // historically used
	// { character: 'づ', reading: 'zu', dakuten: true, yoon: false, gojuuon: 'tsu', kana: "hiragana" }, // historically used
	{ character: 'で', reading: 'de', dakuten: true, yoon: false, gojuuon: 'te', kana: "hiragana" },
	{ character: 'ど', reading: 'do', dakuten: true, yoon: false, gojuuon: 'to', kana: "hiragana" },

	{ character: 'ば', reading: 'ba', dakuten: true, yoon: false, gojuuon: 'ha', kana: "hiragana" },
	{ character: 'び', reading: 'bi', dakuten: true, yoon: false, gojuuon: 'hi', kana: "hiragana" },
	{ character: 'ぶ', reading: 'bu', dakuten: true, yoon: false, gojuuon: 'fu', kana: "hiragana" },
	{ character: 'べ', reading: 'be', dakuten: true, yoon: false, gojuuon: 'he', kana: "hiragana" },
	{ character: 'ぼ', reading: 'bo', dakuten: true, yoon: false, gojuuon: 'ho', kana: "hiragana" },

	// handakuten (p) hiragana
	{ character: 'ぱ', reading: 'pa', dakuten: true, yoon: false, gojuuon: 'ha', kana: "hiragana" },
	{ character: 'ぴ', reading: 'pi', dakuten: true, yoon: false, gojuuon: 'hi', kana: "hiragana" },
	{ character: 'ぷ', reading: 'pu', dakuten: true, yoon: false, gojuuon: 'fu', kana: "hiragana" },
	{ character: 'ぺ', reading: 'pe', dakuten: true, yoon: false, gojuuon: 'he', kana: "hiragana" },
	{ character: 'ぽ', reading: 'po', dakuten: true, yoon: false, gojuuon: 'ho', kana: "hiragana" },

	// yoon (digraphs) hiragana - unvoiced
	{ character: 'きゃ', reading: 'kya', dakuten: false, yoon: true, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'きゅ', reading: 'kyu', dakuten: false, yoon: true, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'きょ', reading: 'kyo', dakuten: false, yoon: true, gojuuon: 'ki', kana: "hiragana" },

	{ character: 'しゃ', reading: 'sha', dakuten: false, yoon: true, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'しゅ', reading: 'shu', dakuten: false, yoon: true, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'しょ', reading: 'sho', dakuten: false, yoon: true, gojuuon: 'shi', kana: "hiragana" },

	{ character: 'ちゃ', reading: 'cha', dakuten: false, yoon: true, gojuuon: 'chi', kana: "hiragana" },
	{ character: 'ちゅ', reading: 'chu', dakuten: false, yoon: true, gojuuon: 'chi', kana: "hiragana" },
	{ character: 'ちょ', reading: 'cho', dakuten: false, yoon: true, gojuuon: 'chi', kana: "hiragana" },

	{ character: 'にゃ', reading: 'nya', dakuten: false, yoon: true, gojuuon: 'ni', kana: "hiragana" },
	{ character: 'にゅ', reading: 'nyu', dakuten: false, yoon: true, gojuuon: 'ni', kana: "hiragana" },
	{ character: 'にょ', reading: 'nyo', dakuten: false, yoon: true, gojuuon: 'ni', kana: "hiragana" },

	{ character: 'ひゃ', reading: 'hya', dakuten: false, yoon: true, gojuuon: 'hi', kana: "hiragana" },
	{ character: 'ひゅ', reading: 'hyu', dakuten: false, yoon: true, gojuuon: 'hi', kana: "hiragana" },
	{ character: 'ひょ', reading: 'hyo', dakuten: false, yoon: true, gojuuon: 'hi', kana: "hiragana" },

	{ character: 'みゃ', reading: 'mya', dakuten: false, yoon: true, gojuuon: 'mi', kana: "hiragana" },
	{ character: 'みゅ', reading: 'myu', dakuten: false, yoon: true, gojuuon: 'mi', kana: "hiragana" },
	{ character: 'みょ', reading: 'myo', dakuten: false, yoon: true, gojuuon: 'mi', kana: "hiragana" },

	{ character: 'りゃ', reading: 'rya', dakuten: false, yoon: true, gojuuon: 'ri', kana: "hiragana" },
	{ character: 'りゅ', reading: 'ryu', dakuten: false, yoon: true, gojuuon: 'ri', kana: "hiragana" },
	{ character: 'りょ', reading: 'ryo', dakuten: false, yoon: true, gojuuon: 'ri', kana: "hiragana" },

	// yoon (digraphs) hiragana - voiced/handakuten
	{ character: 'ぎゃ', reading: 'gya', dakuten: true, yoon: true, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'ぎゅ', reading: 'gyu', dakuten: true, yoon: true, gojuuon: 'ki', kana: "hiragana" },
	{ character: 'ぎょ', reading: 'gyo', dakuten: true, yoon: true, gojuuon: 'ki', kana: "hiragana" },

	{ character: 'じゃ', reading: 'ja', dakuten: true, yoon: true, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'じゅ', reading: 'ju', dakuten: true, yoon: true, gojuuon: 'shi', kana: "hiragana" },
	{ character: 'じょ', reading: 'jo', dakuten: true, yoon: true, gojuuon: 'shi', kana: "hiragana" },

	//{ character: 'ぢゃ', reading: 'ja', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "hiragana" }, // rare
	//{ character: 'ぢゅ', reading: 'ju', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "hiragana" }, // rare
	//{ character: 'ぢょ', reading: 'jo', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "hiragana" }, // rare

	{ character: 'びゃ', reading: 'bya', dakuten: true, yoon: true, gojuuon: 'bi', kana: "hiragana" },
	{ character: 'びゅ', reading: 'byu', dakuten: true, yoon: true, gojuuon: 'bi', kana: "hiragana" },
	{ character: 'びょ', reading: 'byo', dakuten: true, yoon: true, gojuuon: 'bi', kana: "hiragana" },

	{ character: 'ぴゃ', reading: 'pya', dakuten: true, yoon: true, gojuuon: 'pi', kana: "hiragana" },
	{ character: 'ぴゅ', reading: 'pyu', dakuten: true, yoon: true, gojuuon: 'pi', kana: "hiragana" },
	{ character: 'ぴょ', reading: 'pyo', dakuten: true, yoon: true, gojuuon: 'pi', kana: "hiragana" },
	{ character: 'ア', reading: 'a', dakuten: false, yoon: false, gojuuon: 'a', kana: "katakana" },
	{ character: 'イ', reading: 'i', dakuten: false, yoon: false, gojuuon: 'i', kana: "katakana" },
	{ character: 'ウ', reading: 'u', dakuten: false, yoon: false, gojuuon: 'u', kana: "katakana" },
	{ character: 'エ', reading: 'e', dakuten: false, yoon: false, gojuuon: 'e', kana: "katakana" },
	{ character: 'オ', reading: 'o', dakuten: false, yoon: false, gojuuon: 'o', kana: "katakana" },

	{ character: 'カ', reading: 'ka', dakuten: false, yoon: false, gojuuon: 'ka', kana: "katakana" },
	{ character: 'キ', reading: 'ki', dakuten: false, yoon: false, gojuuon: 'ki', kana: "katakana" },
	{ character: 'ク', reading: 'ku', dakuten: false, yoon: false, gojuuon: 'ku', kana: "katakana" },
	{ character: 'ケ', reading: 'ke', dakuten: false, yoon: false, gojuuon: 'ke', kana: "katakana" },
	{ character: 'コ', reading: 'ko', dakuten: false, yoon: false, gojuuon: 'ko', kana: "katakana" },

	{ character: 'サ', reading: 'sa', dakuten: false, yoon: false, gojuuon: 'sa', kana: "katakana" },
	{ character: 'シ', reading: 'shi', dakuten: false, yoon: false, gojuuon: 'shi', kana: "katakana" },
	{ character: 'ス', reading: 'su', dakuten: false, yoon: false, gojuuon: 'su', kana: "katakana" },
	{ character: 'セ', reading: 'se', dakuten: false, yoon: false, gojuuon: 'se', kana: "katakana" },
	{ character: 'ソ', reading: 'so', dakuten: false, yoon: false, gojuuon: 'so', kana: "katakana" },

	{ character: 'タ', reading: 'ta', dakuten: false, yoon: false, gojuuon: 'ta', kana: "katakana" },
	{ character: 'チ', reading: 'chi', dakuten: false, yoon: false, gojuuon: 'chi', kana: "katakana" },
	{ character: 'ツ', reading: 'tsu', dakuten: false, yoon: false, gojuuon: 'tsu', kana: "katakana" },
	{ character: 'テ', reading: 'te', dakuten: false, yoon: false, gojuuon: 'te', kana: "katakana" },
	{ character: 'ト', reading: 'to', dakuten: false, yoon: false, gojuuon: 'to', kana: "katakana" },

	{ character: 'ナ', reading: 'na', dakuten: false, yoon: false, gojuuon: 'na', kana: "katakana" },
	{ character: 'ニ', reading: 'ni', dakuten: false, yoon: false, gojuuon: 'ni', kana: "katakana" },
	{ character: 'ヌ', reading: 'nu', dakuten: false, yoon: false, gojuuon: 'nu', kana: "katakana" },
	{ character: 'ネ', reading: 'ne', dakuten: false, yoon: false, gojuuon: 'ne', kana: "katakana" },
	{ character: 'ノ', reading: 'no', dakuten: false, yoon: false, gojuuon: 'no', kana: "katakana" },

	{ character: 'ハ', reading: 'ha', dakuten: false, yoon: false, gojuuon: 'ha', kana: "katakana" },
	{ character: 'ヒ', reading: 'hi', dakuten: false, yoon: false, gojuuon: 'hi', kana: "katakana" },
	{ character: 'フ', reading: 'fu', dakuten: false, yoon: false, gojuuon: 'fu', kana: "katakana" },
	{ character: 'ヘ', reading: 'he', dakuten: false, yoon: false, gojuuon: 'he', kana: "katakana" },
	{ character: 'ホ', reading: 'ho', dakuten: false, yoon: false, gojuuon: 'ho', kana: "katakana" },

	{ character: 'マ', reading: 'ma', dakuten: false, yoon: false, gojuuon: 'ma', kana: "katakana" },
	{ character: 'ミ', reading: 'mi', dakuten: false, yoon: false, gojuuon: 'mi', kana: "katakana" },
	{ character: 'ム', reading: 'mu', dakuten: false, yoon: false, gojuuon: 'mu', kana: "katakana" },
	{ character: 'メ', reading: 'me', dakuten: false, yoon: false, gojuuon: 'me', kana: "katakana" },
	{ character: 'モ', reading: 'mo', dakuten: false, yoon: false, gojuuon: 'mo', kana: "katakana" },

	{ character: 'ヤ', reading: 'ya', dakuten: false, yoon: false, gojuuon: 'ya', kana: "katakana" },
	{ character: 'ユ', reading: 'yu', dakuten: false, yoon: false, gojuuon: 'yu', kana: "katakana" },
	{ character: 'ヨ', reading: 'yo', dakuten: false, yoon: false, gojuuon: 'yo', kana: "katakana" },

	{ character: 'ラ', reading: 'ra', dakuten: false, yoon: false, gojuuon: 'ra', kana: "katakana" },
	{ character: 'リ', reading: 'ri', dakuten: false, yoon: false, gojuuon: 'ri', kana: "katakana" },
	{ character: 'ル', reading: 'ru', dakuten: false, yoon: false, gojuuon: 'ru', kana: "katakana" },
	{ character: 'レ', reading: 're', dakuten: false, yoon: false, gojuuon: 're', kana: "katakana" },
	{ character: 'ロ', reading: 'ro', dakuten: false, yoon: false, gojuuon: 'ro', kana: "katakana" },

	{ character: 'ワ', reading: 'wa', dakuten: false, yoon: false, gojuuon: 'wa', kana: "katakana" },
	{ character: 'ヲ', reading: 'wo', dakuten: false, yoon: false, gojuuon: 'wo', kana: "katakana" },
	{ character: 'ン', reading: 'n', dakuten: false, yoon: false, gojuuon: 'n', kana: "katakana" },

	// dakuten (voiced) katakana
	{ character: 'ガ', reading: 'ga', dakuten: true, yoon: false, gojuuon: 'ka', kana: "katakana" },
	{ character: 'ギ', reading: 'gi', dakuten: true, yoon: false, gojuuon: 'ki', kana: "katakana" },
	{ character: 'グ', reading: 'gu', dakuten: true, yoon: false, gojuuon: 'ku', kana: "katakana" },
	{ character: 'ゲ', reading: 'ge', dakuten: true, yoon: false, gojuuon: 'ke', kana: "katakana" },
	{ character: 'ゴ', reading: 'go', dakuten: true, yoon: false, gojuuon: 'ko', kana: "katakana" },

	{ character: 'ザ', reading: 'za', dakuten: true, yoon: false, gojuuon: 'sa', kana: "katakana" },
	{ character: 'ジ', reading: 'ji', dakuten: true, yoon: false, gojuuon: 'shi', kana: "katakana" },
	{ character: 'ズ', reading: 'zu', dakuten: true, yoon: false, gojuuon: 'su', kana: "katakana" },
	{ character: 'ゼ', reading: 'ze', dakuten: true, yoon: false, gojuuon: 'se', kana: "katakana" },
	{ character: 'ゾ', reading: 'zo', dakuten: true, yoon: false, gojuuon: 'so', kana: "katakana" },

	{ character: 'ダ', reading: 'da', dakuten: true, yoon: false, gojuuon: 'ta', kana: "katakana" },
	//{ character: 'ヂ', reading: 'ji', dakuten: true, yoon: false, gojuuon: 'chi', kana: "katakana" }, // rare
	//{ character: 'ヅ', reading: 'zu', dakuten: true, yoon: false, gojuuon: 'tsu', kana: "katakana" }, // rare
	{ character: 'デ', reading: 'de', dakuten: true, yoon: false, gojuuon: 'te', kana: "katakana" },
	{ character: 'ド', reading: 'do', dakuten: true, yoon: false, gojuuon: 'to', kana: "katakana" },

	{ character: 'バ', reading: 'ba', dakuten: true, yoon: false, gojuuon: 'ha', kana: "katakana" },
	{ character: 'ビ', reading: 'bi', dakuten: true, yoon: false, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ブ', reading: 'bu', dakuten: true, yoon: false, gojuuon: 'fu', kana: "katakana" },
	{ character: 'ベ', reading: 'be', dakuten: true, yoon: false, gojuuon: 'he', kana: "katakana" },
	{ character: 'ボ', reading: 'bo', dakuten: true, yoon: false, gojuuon: 'ho', kana: "katakana" },

	// handakuten (p) katakana
	{ character: 'パ', reading: 'pa', dakuten: true, yoon: false, gojuuon: 'ha', kana: "katakana" },
	{ character: 'ピ', reading: 'pi', dakuten: true, yoon: false, gojuuon: 'hi', kana: "katakana" },
	{ character: 'プ', reading: 'pu', dakuten: true, yoon: false, gojuuon: 'fu', kana: "katakana" },
	{ character: 'ペ', reading: 'pe', dakuten: true, yoon: false, gojuuon: 'he', kana: "katakana" },
	{ character: 'ポ', reading: 'po', dakuten: true, yoon: false, gojuuon: 'ho', kana: "katakana" },

	// yoon (digraphs) katakana - unvoiced
	{ character: 'キャ', reading: 'kya', dakuten: false, yoon: true, gojuuon: 'ki', kana: "katakana" },
	{ character: 'キュ', reading: 'kyu', dakuten: false, yoon: true, gojuuon: 'ki', kana: "katakana" },
	{ character: 'キョ', reading: 'kyo', dakuten: false, yoon: true, gojuuon: 'ki', kana: "katakana" },

	{ character: 'シャ', reading: 'sha', dakuten: false, yoon: true, gojuuon: 'shi', kana: "katakana" },
	{ character: 'シュ', reading: 'shu', dakuten: false, yoon: true, gojuuon: 'shi', kana: "katakana" },
	{ character: 'ショ', reading: 'sho', dakuten: false, yoon: true, gojuuon: 'shi', kana: "katakana" },

	{ character: 'チャ', reading: 'cha', dakuten: false, yoon: true, gojuuon: 'chi', kana: "katakana" },
	{ character: 'チュ', reading: 'chu', dakuten: false, yoon: true, gojuuon: 'chi', kana: "katakana" },
	{ character: 'チョ', reading: 'cho', dakuten: false, yoon: true, gojuuon: 'chi', kana: "katakana" },

	{ character: 'ニャ', reading: 'nya', dakuten: false, yoon: true, gojuuon: 'ni', kana: "katakana" },
	{ character: 'ニュ', reading: 'nyu', dakuten: false, yoon: true, gojuuon: 'ni', kana: "katakana" },
	{ character: 'ニョ', reading: 'nyo', dakuten: false, yoon: true, gojuuon: 'ni', kana: "katakana" },

	{ character: 'ヒャ', reading: 'hya', dakuten: false, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ヒュ', reading: 'hyu', dakuten: false, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ヒョ', reading: 'hyo', dakuten: false, yoon: true, gojuuon: 'hi', kana: "katakana" },

	{ character: 'ミャ', reading: 'mya', dakuten: false, yoon: true, gojuuon: 'mi', kana: "katakana" },
	{ character: 'ミュ', reading: 'myu', dakuten: false, yoon: true, gojuuon: 'mi', kana: "katakana" },
	{ character: 'ミョ', reading: 'myo', dakuten: false, yoon: true, gojuuon: 'mi', kana: "katakana" },

	{ character: 'リャ', reading: 'rya', dakuten: false, yoon: true, gojuuon: 'ri', kana: "katakana" },
	{ character: 'リュ', reading: 'ryu', dakuten: false, yoon: true, gojuuon: 'ri', kana: "katakana" },
	{ character: 'リョ', reading: 'ryo', dakuten: false, yoon: true, gojuuon: 'ri', kana: "katakana" },

	// yoon (digraphs) katakana - voiced/handakuten
	{ character: 'ギャ', reading: 'gya', dakuten: true, yoon: true, gojuuon: 'ki', kana: "katakana" },
	{ character: 'ギュ', reading: 'gyu', dakuten: true, yoon: true, gojuuon: 'ki', kana: "katakana" },
	{ character: 'ギョ', reading: 'gyo', dakuten: true, yoon: true, gojuuon: 'ki', kana: "katakana" },

	{ character: 'ジャ', reading: 'ja', dakuten: true, yoon: true, gojuuon: 'shi', kana: "katakana" },
	{ character: 'ジュ', reading: 'ju', dakuten: true, yoon: true, gojuuon: 'shi', kana: "katakana" },
	{ character: 'ジョ', reading: 'jo', dakuten: true, yoon: true, gojuuon: 'shi', kana: "katakana" },

	// { character: 'ヂャ', reading: 'ja', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "katakana" }, // rare
	// { character: 'ヂュ', reading: 'ju', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "katakana" }, // rare
	// { character: 'ヂョ', reading: 'jo', dakuten: true, yoon: true, gojuuon: 'chi',, kana: "katakana" }, // rare

	{ character: 'ビャ', reading: 'bya', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ビュ', reading: 'byu', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ビョ', reading: 'byo', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" },

	{ character: 'ピャ', reading: 'pya', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ピュ', reading: 'pyu', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" },
	{ character: 'ピョ', reading: 'pyo', dakuten: true, yoon: true, gojuuon: 'hi', kana: "katakana" }
] as {
	character: string;
	reading: string;
	dakuten: boolean;
	yoon: boolean;
	gojuuon: Gojuuon;
	kana: "hiragana" | "katakana";
}[];
