<script lang="ts">
	import CustomCheckbox from '$lib/components/CustomCheckbox.svelte';
	import CustomSlider from '$lib/components/CustomSlider.svelte';
	import MonographTable from '$lib/components/MonographTable.svelte';
	import JLPT_N5_WORDS from '$lib/data/jlpt-n5-words.json';
	import { KANA } from '$lib/data/kana-characters';
	import type { Monograph } from '$lib/types/monograph';

	type CharacterOptions = {
		selectedMonographs: Set<Monograph>;
		katakana: boolean;
		diacritics: boolean;
		diagraphs: boolean;
	};

	type DrillOptions = {
		wordLength: number;
		realWords: boolean;
		promptRomaji: boolean;
	};

	let characterOptions: CharacterOptions = $state({
		selectedMonographs: new Set(['a', 'i', 'u', 'e', 'o']),
		katakana: false,
		diacritics: false,
		diagraphs: false
	});

	let drillOptions: DrillOptions = $state({
		wordLength: 3,
		realWords: false,
		promptRomaji: false
	});

	let showDrillScreen = $state(false);
	let prompt: { word: string; alt: string; extra?: string } = $state({
		word: '',
		alt: ''
	});
	let altRevealed = $state(false);
	let wordCount = $state(0);

	let selectedKana = $derived(
		KANA.filter((e) => {
			if (!characterOptions.selectedMonographs.has(e.monograph)) return false;

			if (e.kana !== (characterOptions.katakana ? 'katakana' : 'hiragana')) {
				return false;
			}

			if (!characterOptions.diacritics && e.diacritic) return false;

			if (!characterOptions.diagraphs && e.diagraph) return false;

			return true;
		}).map((e) => {
			return { character: e.character, reading: e.reading };
		})
	);

	let selectedCharacters = $derived(selectedKana.map((e) => e.character));

	// TODO: This is a little junky.
	let possibleWords = $derived(
		JLPT_N5_WORDS.filter((e) => {
			const EXCEPTIONS = ['(', ')', 'っ', 'ー', '。', '～', '/', 'ゃ', 'ゅ', 'ょ'];

			const hiragana = e.hiragana.split('\n')[0];

			for (let i = 0; i < hiragana.length; i++) {
				const character = hiragana.charAt(i);
				if (!selectedCharacters.includes(character) && !EXCEPTIONS.includes(character)) {
					return false;
				}
			}

			return true;
		})
	);

	let canStart = $derived(
		(drillOptions.realWords && possibleWords.length > 0) ||
			(!drillOptions.realWords && selectedCharacters.length > 0)
	);

	function startDrill(): void {
		showDrillScreen = true;

		showNextWord();
		wordCount = 0;
	}

	function quitDrill(): void {
		showDrillScreen = false;
	}

	// TODO: This function is a little junky.
	function asRomaji(kana: string): string {
		const getReading = (character: string) => KANA.find((e) => e.character === character)?.reading;

		const diagraphThings = ['ゃ', 'ゅ', 'ょ'];

		let romaji = '';
		for (let i = 0; i < kana.length; i++) {
			const character = kana.charAt(i);
			const nextCharacter = kana.charAt(i + 1);
			const reading = getReading(character);

			if (diagraphThings.includes(character) || character === 'ー') {
				continue;
			} else if (character === 'っ' && nextCharacter) {
				romaji += getReading(nextCharacter)?.charAt(0);
			} else if (nextCharacter && nextCharacter === 'ー') {
				romaji += reading;
				romaji += reading?.charAt(reading?.length - 1);
			} else if (nextCharacter && diagraphThings.includes(nextCharacter)) {
				romaji += getReading(character + nextCharacter);
			} else if (reading) {
				romaji += reading;
			}
		}

		return romaji;
	}

	function showNextWord(): void {
		let kana = '',
			romaji = '',
			extra = '';

		if (drillOptions.realWords) {
			const word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

			kana = word.hiragana;
			romaji = asRomaji(word.hiragana);

			if (word.examples) extra += `Meaning: "${word.examples.split('\n')[0]}"`;
		} else {
			let pickRandomKana = () => selectedKana[Math.floor(Math.random() * selectedKana.length)];

			for (let i = 1; i <= drillOptions.wordLength; i++) {
				const randomKana = pickRandomKana();

				kana += randomKana.character;
				romaji += randomKana.reading;
			}
		}

		if (drillOptions.promptRomaji) {
			prompt = { word: romaji, alt: kana, extra };
		} else {
			prompt = { word: kana, alt: romaji, extra };
		}

		altRevealed = false;
	}

	function nextWord(): void {
		showNextWord();
		wordCount++;
	}

	function skipWord(): void {
		showNextWord();
	}

	function revealAlt(): void {
		altRevealed = true;
	}
</script>

<svelte:head>
	<title>Japanese Kana Drill</title>
</svelte:head>

{#if showDrillScreen}
	<div class="drill-container">
		<div class="word-container">
			<span class="word">{prompt.word}</span>

			<span class="word-alt" class:hidden={!altRevealed}>{prompt.alt}</span>

			{#if prompt.extra}
				<span class="extra" class:hidden={!altRevealed}>
					{prompt.extra}
				</span>
			{/if}
		</div>

		<div class="drill-buttons-container">
			<button class="next" onclick={altRevealed ? nextWord : revealAlt}>
				{#if altRevealed}
					Next
				{:else}
					Reveal
				{/if}
			</button>

			<button class="skip" disabled={altRevealed} onclick={skipWord}>Skip</button>

			<button class="quit" onclick={quitDrill}>Quit</button>
		</div>

		<span class="drill-word-count">{wordCount} words</span>
	</div>
{:else}
	<div class="main-container">
		<h1>Japanese Kana Drill</h1>

		<div class="options-grid">
			<div class="table-section">
				<MonographTable
					bind:selectedMonograph={characterOptions.selectedMonographs}
					showKatakana={characterOptions.katakana}
				/>
			</div>

			<div class="options-section">
				<label>
					<CustomCheckbox bind:checked={characterOptions.katakana} />
					<span> Katakana </span>
				</label>

				<hr />

				<label>
					<CustomCheckbox bind:checked={characterOptions.diacritics} />
					<span>
						Dakuten/Handakuten<br />
						<span class="description">Diacritics e. g. 「が」 or 「ぷ」</span>
					</span>
				</label>

				<label>
					<CustomCheckbox bind:checked={characterOptions.diagraphs} />
					<span>
						Yōon<br />
						<span class="description">Diagraphs e. g. 「きゃ」 or 「しょ」</span>
					</span>
				</label>

				<hr />

				<label class="word-length" class:disabled={drillOptions.realWords}>
					<span>
						Word length: <b>{drillOptions.wordLength}</b><br />
						<span class="description"
							>If "Real words" is not selected, randomly generated strings of said length will be
							prompted.</span
						>
					</span>

					<CustomSlider
						disabled={drillOptions.realWords}
						bind:value={drillOptions.wordLength}
						min={1}
						max={10}
					/>
				</label>

				<label>
					<CustomCheckbox bind:checked={drillOptions.realWords} />
					<span>
						Real words<br />
						<span class="description">
							Words included in <a href="https://www.jlpt.jp/sp/e/about/levelsummary.html"
								>JLPT N5</a
							> will be prompted.
						</span>
					</span>
				</label>

				<label>
					<CustomCheckbox bind:checked={drillOptions.promptRomaji} />
					<span>
						Prompt Romaji<br />
						<span class="description"> e. g. "aki" instead of 「あき」 </span>
					</span>
				</label>
			</div>

			<div class="selected-characters-section">
				<h2>Selected Characters</h2>
				<span class="character-count">
					<b>{selectedCharacters.length}</b> character(s) selected<br />
					<b>{possibleWords.length}</b> real word(s) matched
				</span>

				<div class="selected-characters-container">
					{#each selectedCharacters as character}
						<div class="character">{character}</div>
					{/each}
				</div>
			</div>
		</div>

		<button class="start-drill" disabled={!canStart} onclick={startDrill}> Start </button>

		{#if !canStart}
			<span class="can-not-start-info">
				{#if selectedCharacters.length == 0}
					Please select characters to start.
				{:else}
					No words from <a href="https://www.jlpt.jp/sp/e/about/levelsummary.html">JLPT N5</a> matched
					the selected characters.
				{/if}
			</span>
		{/if}
	</div>
{/if}

<style>
	.main-container {
		width: 100%;
		max-width: 1300px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.options-grid {
		display: grid;
		grid-template-columns: auto auto 300px;
		gap: 20px;
	}

	@media only screen and (max-width: 1100px) {
		.options-grid {
			grid-template-columns: auto 1fr;
			width: 100%;
			max-width: 800px;
		}

		.selected-characters-section {
			grid-column: 1 / 3;
		}
	}

	@media only screen and (max-width: 700px) {
		.options-grid {
			grid-template-columns: 1fr;
			width: 100%;
			max-width: auto;
		}

		.selected-characters-section {
			grid-column: 1 / 2;
		}
	}

	span.description {
		color: var(--color-text-dimmed);
	}

	.table-section,
	.options-section,
	.selected-characters-section {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.options-section {
		max-width: 400px;
	}

	h1 {
		font-size: 2em;
		font-weight: bold;
		margin: 5px 0;
		text-align: center;
		margin-bottom: 50px;
	}

	h2 {
		font-size: 1.3em;
	}

	hr {
		width: 100%;
		border-top: 1px solid var(--color-border);
		margin: 10px 0;
	}

	label {
		display: flex;
		gap: 10px;
	}

	label.word-length {
		flex-direction: column;
		justify-content: space-between;
		margin: 10px 0;
		margin-bottom: 30px;
	}

	label.word-length.disabled {
		color: var(--color-text-dimmed);
	}

	.selected-characters-container {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	span.character-count {
		color: var(--color-text-dimmed);
	}

	b {
		font-weight: bold;
	}

	.character {
		font-size: 1em;
		padding: 2px 5px;
		background-color: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		cursor: default;
	}

	button.start-drill {
		background-color: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		padding: 7px 30px;
		font-size: 1.2em;
		margin: 20px 0;
		cursor: pointer;
	}

	button.start-drill:disabled {
		border-style: dashed;
		background-color: transparent;
		color: var(--color-text-dimmed);
		cursor: default;
	}

	/*----------DRILL SCREEN-----------*/

	.drill-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 50px;
		padding: 30px;
		height: 100vh;
		width: 100%;
	}

	.word-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	span.word {
		font-size: 3em;
	}

	span.word-alt {
		font-size: 1.75em;
		background-color: var(--color-highlight);
		border: 1px solid var(--color-border-highlight);
		padding: 5px 15px;
	}

	span.extra {
		color: var(--color-text-dimmed);
	}

	span.word-alt.hidden,
	span.extra.hidden {
		opacity: 0;
	}

	.drill-buttons-container {
		display: grid;
		max-width: 300px;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}

	button.next,
	button.skip,
	button.quit {
		background-color: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		padding: 7px 20px;
		cursor: pointer;
	}

	button.next {
		grid-column: 1 / 3;
	}

	button.skip:disabled {
		border-style: dashed;
		background-color: transparent;
		color: var(--color-text-dimmed);
		cursor: default;
	}

	span.drill-word-count {
		color: var(--color-text-dimmed);
	}
</style>
