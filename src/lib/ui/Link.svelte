<script lang="ts">
    export let link: string = "https://www.google.com";
</script>

<a href="{link}" class="font-bold underline text-indigo-600 hover:text-fuchsia-600
transition-colors focus:text-fuchsia-600">
    <slot/>
</a>