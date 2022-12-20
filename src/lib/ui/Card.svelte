<script lang="ts">
    export let styling: string = ""
</script>

<div class="bg-white shadow-2xl px-6 py-8 rounded-2xl w-full
max-w-[850px] flex flex-col gap-20 {styling}">
    <slot />
</div>