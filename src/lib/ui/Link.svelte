<script lang="ts">
    export let link: string = "https://www.google.com";
</script>

<a href="{link}" class="font-bold underline text-indigo-600 hover:text-fuchsia-600
transition-colors focus:text-fuchsia-600 dark:text-indigo-300
dark:hover:text-fuchsia-400 dark:focus:text-fuchsia-400">
    <slot/>
</a>