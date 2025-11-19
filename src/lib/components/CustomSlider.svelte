<script lang="ts">
	type Props = {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
	};

	let { value = $bindable(1), min = 1, max = 100, step = 1, disabled = false }: Props = $props();

	let fillPercentage = $derived(Math.floor(((value - min) / (max - min)) * 100));
</script>

<input
	class="custom-slider"
	type="range"
	style="--fill-percentage: {fillPercentage}%"
	{min}
	{max}
	{step}
	{disabled}
	bind:value
/>

<style>
	input[type='range'].custom-slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 3px;
		border-radius: 5px;
		background: linear-gradient(
			to right,
			var(--color-text) var(--fill-percentage),
			var(--color-bg-alt) var(--fill-percentage)
		);
		outline: none;
	}

	input[type='range'].custom-slider::-webkit-slider-thumb,
	input[type='range'].custom-slider::-moz-range-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 12px;
		border: none;
		background-color: var(--color-text);
	}

	input[type='range'].custom-slider:disabled {
		opacity: 0.5;
	}
</style>
