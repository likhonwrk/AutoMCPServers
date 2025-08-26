import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MountainIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DeployPage() {
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
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Deploy your MCP Server</h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Enter the URL of your GitHub repository to deploy your MCP server.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <Label htmlFor="github-url">GitHub Repository URL</Label>
              <Input
                id="github-url"
                placeholder="https://github.com/user/repo"
                required
                type="url"
              />
            </div>
            <Button className="w-full" type="submit">
              Deploy
            </Button>
          </form>
        </div>
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
