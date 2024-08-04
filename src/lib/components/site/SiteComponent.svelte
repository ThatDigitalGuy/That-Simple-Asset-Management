<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  export let siteName, siteDescription, siteId, companyName;
</script>

<Card.Root class="w-[350px] h-[150px]">
  <Card.Header>
    <Card.Title>{siteName}</Card.Title>
    <Card.Description>{siteDescription}</Card.Description>
  </Card.Header>
  <Card.Footer class="flex justify-between">
    <Button variant="outline">Settings</Button>
    <Button href={`/app/${companyName}/${siteId}/dashboard`}>Manage</Button>
  </Card.Footer>
</Card.Root>
