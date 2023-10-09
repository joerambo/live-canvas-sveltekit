<script lang="ts">
	import '../app.css';
	import { MousePointer2, Hand } from 'lucide-svelte';

	$: tool = 'select' as 'select' | 'pan';

	let selectTool: HTMLElement;

	function handleHome(event: MouseEvent) {
		console.log('click: home');
	}

	function handleSelect(event: MouseEvent) {
		console.log('click: select');
		tool = 'select';
	}

	function handlePan(event: MouseEvent) {
		console.log('click: pan');
		tool = 'pan';
	}

	function handleEscape(e: KeyboardEvent) {
		console.log(`keypress: ${e.key}`);
		if (e.key === 'Escape') {
			selectTool.click();
			selectTool.focus();
		}
	}
</script>

<div class="flex flex-col h-full">
	<div class="bg-gray-900 h-12 px-2 items-center flex">
		<button
			class="text-white h-12 px-4 flex justify-center items-center hover:bg-gray-700 cursor-pointer select-none outline-none focus-visible:bg-gray-700"
			on:click={handleHome}
		>
			LC
		</button>
		<button
			bind:this={selectTool}
			class="text-white h-12 px-3 flex justify-center items-center hover:bg-gray-700 cursor-pointer select-none outline-none focus-visible:bg-gray-700 {tool ===
			'select'
				? 'bg-gray-700'
				: 'bg-transparent'}"
			on:click={handleSelect}
		>
			<MousePointer2 size={20} />
		</button>
		<button
			class="text-white h-12 px-3 flex justify-center items-center hover:bg-gray-700 cursor-pointer select-none outline-none focus-visible:bg-gray-700 {tool ===
			'pan'
				? 'bg-gray-700'
				: 'bg-transparent'}"
			on:click={handlePan}
		>
			<Hand size={18} />
		</button>
	</div>
	<slot />
</div>

<svelte:window on:keydown={handleEscape} />
