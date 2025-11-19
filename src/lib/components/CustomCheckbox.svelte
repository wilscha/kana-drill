<script lang="ts">
	type Props = { checked?: boolean; disabled?: boolean };

	let { checked = $bindable(false), disabled = false }: Props = $props();
</script>

<div class="custom-checkbox" class:checked>
	<span class="custom-checkmark">
		{#if checked}
			<div class="symbol"></div>
		{/if}
	</span>
	<input type="checkbox" bind:checked {disabled} />
</div>

<style>
	.custom-checkbox input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.custom-checkmark {
		width: 1.5em;
		height: 1.5em;
		border: 1px solid var(--color-border);
		background-color: var(--color-bg-alt);
		display: inline-block;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.symbol {
		width: 30%;
		height: 60%;
		border: solid var(--color-text);
		border-width: 0 1px 1px 0;
		rotate: 45deg;
		translate: 0 -1px;
	}

	.custom-checkbox.checked .custom-checkmark {
		background-color: var(--color-highlight);
		border-color: var(--color-border-highlight);
	}

	.custom-checkbox:has(input[type='checkbox']:disabled) .custom-checkmark {
		opacity: 0.5;
	}
</style>
