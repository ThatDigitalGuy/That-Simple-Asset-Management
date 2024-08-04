<script lang="ts">
    import Activity from "lucide-svelte/icons/activity";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import DollarSign from "lucide-svelte/icons/dollar-sign";
    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import Search from "lucide-svelte/icons/search";
    import Users from "lucide-svelte/icons/users";
  
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Table from "$lib/components/ui/table/index.js";

    import { page } from "$app/stores";

    $: currentCompany = $page.params.company;
    $: currentPath = $page.route.id;

    let linkActive = "text-foreground hover:text-foreground transition-colors"
    let linkDefault = "text-muted-foreground hover:text-foreground transition-colors"
  </script>
  
  <div class="flex min-h-screen w-full flex-col">
    <header class="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <a href={`/app/${currentCompany}/settings/company-profile`} class="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Package2 class="h-6 w-6" />
          <span class="sr-only">{currentCompany}</span>
        </a>
        <a href={`/app/${currentCompany}`} class={currentPath == `/app/[company]` ? linkActive : linkDefault}>
          Console
        </a>
        <a href={`/app/${currentCompany}/users`} class={currentPath == `/app/[company]/users` ? linkActive : linkDefault}>
          Users
        </a>
        <a href={`/app/${currentCompany}/reports`} class={currentPath == `/app/[company]/reports` ? linkActive : linkDefault}>
          Reports
        </a>
        <a href={`/app/${currentCompany}/settings`} class={currentPath == `/app/[company]/settings` ? linkActive : linkDefault}>
          Settings
        </a>
        <Button href={`/app/${currentCompany}/dashboard`}>
          Go to the application Dashboard
        </Button>
      </nav>
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="shrink-0 md:hidden"
            builders={[builder]}
          >
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <a href="##" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a href="##" class="hover:text-foreground"> Dashboard </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Orders </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Products </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Customers </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Analytics </a>
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              builders={[builder]}
              variant="secondary"
              size="icon"
              class="rounded-full"
            >
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {currentPath}
    </main>
  </div>
  