<script>
    // your script goes here
    import { page } from "$app/stores";
    
    let currentPath = $page.route.id
</script>

<p>{currentPath?.split("/")}</p>