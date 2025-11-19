<script lang="ts">
	import type { Gojuuon } from '$lib/types/gojuuon';

	type Props = {
		selectedGojuuon?: Set<Gojuuon>;
		showKatakana?: boolean;
	};

	// vowels
	type Boin = Extract<Gojuuon, 'a' | 'i' | 'u' | 'e' | 'o'>;

	const HIRAGANA_CHARACTERS: Record<Gojuuon, string> = {
		a: 'あ',
		i: 'い',
		u: 'う',
		e: 'え',
		o: 'お',
		ka: 'か',
		ki: 'き',
		ku: 'く',
		ke: 'け',
		ko: 'こ',
		sa: 'さ',
		shi: 'し',
		su: 'す',
		se: 'せ',
		so: 'そ',
		ta: 'た',
		chi: 'ち',
		tsu: 'つ',
		te: 'て',
		to: 'と',
		na: 'な',
		ni: 'に',
		nu: 'ぬ',
		ne: 'ね',
		no: 'の',
		ha: 'は',
		hi: 'ひ',
		fu: 'ふ',
		he: 'へ',
		ho: 'ほ',
		ma: 'ま',
		mi: 'み',
		mu: 'む',
		me: 'め',
		mo: 'も',
		ya: 'や',
		yu: 'ゆ',
		yo: 'よ',
		ra: 'ら',
		ri: 'り',
		ru: 'る',
		re: 'れ',
		ro: 'ろ',
		wa: 'わ',
		wo: 'を',
		n: 'ん'
	};

	const KATAKANA_CHARACTERS: Record<Gojuuon, string> = {
		a: 'ア',
		i: 'イ',
		u: 'ウ',
		e: 'エ',
		o: 'オ',
		ka: 'カ',
		ki: 'キ',
		ku: 'ク',
		ke: 'ケ',
		ko: 'コ',
		sa: 'サ',
		shi: 'シ',
		su: 'ス',
		se: 'セ',
		so: 'ソ',
		ta: 'タ',
		chi: 'チ',
		tsu: 'ツ',
		te: 'テ',
		to: 'ト',
		na: 'ナ',
		ni: 'ニ',
		nu: 'ヌ',
		ne: 'ネ',
		no: 'ノ',
		ha: 'ハ',
		hi: 'ヒ',
		fu: 'フ',
		he: 'ヘ',
		ho: 'ホ',
		ma: 'マ',
		mi: 'ミ',
		mu: 'ム',
		me: 'メ',
		mo: 'モ',
		ya: 'ヤ',
		yu: 'ユ',
		yo: 'ヨ',
		ra: 'ラ',
		ri: 'リ',
		ru: 'ル',
		re: 'レ',
		ro: 'ロ',
		wa: 'ワ',
		wo: 'ヲ',
		n: 'ン'
	};

	const ROMAJI_READINGS: Record<Gojuuon, string> = {
		a: 'a',
		i: 'i',
		u: 'u',
		e: 'e',
		o: 'o',
		ka: 'ka',
		ki: 'ki',
		ku: 'ku',
		ke: 'ke',
		ko: 'ko',
		sa: 'sa',
		shi: 'shi',
		su: 'su',
		se: 'se',
		so: 'so',
		ta: 'ta',
		chi: 'chi',
		tsu: 'tsu',
		te: 'te',
		to: 'to',
		na: 'na',
		ni: 'ni',
		nu: 'nu',
		ne: 'ne',
		no: 'no',
		ha: 'ha',
		hi: 'hi',
		fu: 'fu',
		he: 'he',
		ho: 'ho',
		ma: 'ma',
		mi: 'mi',
		mu: 'mu',
		me: 'me',
		mo: 'mo',
		ya: 'ya',
		yu: 'yu',
		yo: 'yo',
		ra: 'ra',
		ri: 'ri',
		ru: 'ru',
		re: 're',
		ro: 'ro',
		wa: 'wa',
		wo: 'wo',
		n: 'n'
	};

	const TABLE_LAYOUT = [
		['a', 'i', 'u', 'e', 'o'],
		['ka', 'ki', 'ku', 'ke', 'ko'],
		['sa', 'shi', 'su', 'se', 'so'],
		['ta', 'chi', 'tsu', 'te', 'to'],
		['na', 'ni', 'nu', 'ne', 'no'],
		['ha', 'hi', 'fu', 'he', 'ho'],
		['ma', 'mi', 'mu', 'me', 'mo'],
		['ya', '', 'yu', '', 'yo'],
		['ra', 'ri', 'ru', 're', 'ro'],
		['wa', '', '', '', 'wo'],
		['n', '', '', '', '']
	] as (Gojuuon | '')[][];

	const COLUMNS = ['a', 'i', 'u', 'e', 'o'] as Boin[];

	let { selectedGojuuon = $bindable(new Set()), showKatakana = false }: Props = $props();

	function toggleSelected(kana: Set<Gojuuon>): void {
		if (selectedGojuuon.isDisjointFrom(kana)) {
			selectedGojuuon = selectedGojuuon.union(kana);
		} else {
			selectedGojuuon = selectedGojuuon.difference(kana);
		}
	}

	function toggleAll(): void {
		toggleSelected(new Set(TABLE_LAYOUT.flat().filter((e) => e !== '')));
	}

	function toggleColumn(boin: Boin): void {
		toggleSelected(
			new Set(TABLE_LAYOUT.flat().filter((e): e is Gojuuon => e !== '' && e.includes(boin)))
		);
	}

	function toggleRow(row: Gojuuon[]): void {
		toggleSelected(new Set(row));
	}
</script>

<div class="gojuuon-table">
	<table>
		<thead>
			<tr>
				<td>
					<button onclick={toggleAll}>All</button>
				</td>

				{#each COLUMNS as boin}
					<td>
						<button onclick={() => toggleColumn(boin)}>-{boin}</button>
					</td>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each TABLE_LAYOUT as row}
				<tr>
					<td>
						<button onclick={() => toggleRow(row.filter((e) => e !== ''))}>
							{#if row[0] === 'a'}
								∅
							{:else if row[0] === 'n'}
								*
							{:else}
								{row[0].charAt(0)}-
							{/if}
						</button>
					</td>

					{#each row as gojuuon}
						<td>
							{#if gojuuon !== ''}
								<button
									onclick={() => toggleSelected(new Set([gojuuon]))}
									class="gojuuon"
									class:selected={selectedGojuuon.has(gojuuon)}
								>
									<span class="character">
										{(showKatakana ? KATAKANA_CHARACTERS : HIRAGANA_CHARACTERS)[gojuuon]}
									</span>
									<span class="romaji-reading">{ROMAJI_READINGS[gojuuon]}</span>
								</button>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.gojuuon-table table {
		border-collapse: collapse;
	}

	.gojuuon-table td {
		border: 1px solid var(--color-border);
		overflow: hidden;
	}

	.gojuuon-table td:has(button.gojuuon.selected) {
		border-color: var(--color-border-highlight);
		color: var(--color-text-highlight);
	}

	.gojuuon-table button {
		width: 3em;
		height: 3em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.gojuuon-table button:not(.gojuuon) {
		background-color: var(--color-bg-alt);
	}

	.gojuuon-table button.gojuuon.selected {
		background-color: var(--color-highlight);
	}

	.gojuuon-table button.gojuuon .romaji-reading {
		color: var(--color-text-dimmed);
		font-size: 0.8em;
	}
</style>
