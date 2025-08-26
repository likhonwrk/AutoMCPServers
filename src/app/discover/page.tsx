import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MountainIcon, SearchIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DiscoverPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">MCP Server Platform</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#contact"
          >
            Contact
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href={process.env.NEXT_PUBLIC_VERCEL_DEPLOY_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="sm">
              Deploy to Vercel
            </Button>
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover MCP Servers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore a universe of community-driven MCP servers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form>
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="pl-8"
                      placeholder="Search for servers..."
                      type="search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-start justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-3 lg:gap-10">
            <Card>
              <CardHeader>
                <CardTitle>Filesystem Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Allows AI models to read, write, search, and manage files and directories.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Playwright Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enables browser automation, allowing AI agents to interact with web pages.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Run Python Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Allows secure execution of arbitrary Python code in a sandbox.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>GitHub Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A wrapper around the GitHub API to automate repository-related tasks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrates WhatsApp messaging capabilities for programmatic messaging.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notion Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connects to Notion’s API to manage notes, to-do lists, and databases.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MCP Server Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
