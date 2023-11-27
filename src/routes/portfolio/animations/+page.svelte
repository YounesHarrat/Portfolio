<script lang="ts">
	import { onMount } from 'svelte'
    import type { PageData } from './$types';
	import Mdpost from './mdpost.svelte'
    
    export let data: PageData;

    onMount(()=>{
        
    })

</script>


<Mdpost></Mdpost>

<div id="canvas"></div>
