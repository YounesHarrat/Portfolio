<script lang="ts">
	import * as config from '$lib/config'
	import Solers from "./contact/assets/solers.svelte"
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>

	
<div class="socials">

    <div class="box">
        <a href="https://www.linkedin.com/in/younesharrat/" target="_blank" rel="noopener noreferrer">
            <img src="src\routes\contact\assets\linkedin.png" alt="linkedin" class="icon">
        </a>
    </div>


    <div class="box">
        <a href="https://github.com/YounesHarrat" target="_blank" rel="noopener noreferrer">
            <img src="src\routes\contact\assets\github.png" alt="github" class="icon">
        </a>
    </div>

    <div class="box">
        <a href="https://app.solers.io/sharedProfile/p8vJEL" target="_blank" rel="noopener noreferrer">
            <!-- <img src="src\routes\contact\assets\github.png" alt="github" class="icon"> -->
            <Solers></Solers>
        </a>
    </div>

    <div class="box">
        <a href="https://www.youtube.com/@MrNejiraito" target="_blank" rel="noopener noreferrer">
            <img src="src\routes\contact\assets\youtube.png" alt="youtube" class="icon">
        </a>
    </div>
</div>





	<p class="right">
		Email me at YounesHarrat5896@gmail.com
	</p>
	
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	p {
		color: var(--text-2);
	}

	.right {

		right: 0px;
	}

    .icon {
        width: 50px;
        height: 50px;
    }

    .socials {
        display: flex;
        flex-direction: row;
        
        justify-content: space-between;
        align-items: center;
    }

	.box {
		margin-right: 25px;
	}
</style>