<script>
    // your script goes here
    import { page } from "$app/stores";

    console.log($page.route)

    let currentPath = $page.route.id
</script>

<p>{currentPath}</p>