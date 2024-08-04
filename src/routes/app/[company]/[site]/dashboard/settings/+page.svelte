<script>
  // your script goes here
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div>
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Settings
  </h1>
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    Manage all the settings for this application from this page.
  </p>

  <Card.Root class="m-2">
    <Card.Header>
      <Card.Title>Company Details</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>Card Content</p>
    </Card.Content>
    <Card.Footer>
      <p>Card Footer</p>
    </Card.Footer>
  </Card.Root>
  <Card.Root class="m-2">
    <Card.Header>
      <Card.Title>Card Title</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>Card Content</p>
    </Card.Content>
    <Card.Footer>
      <p>Card Footer</p>
    </Card.Footer>
  </Card.Root>
</div>
