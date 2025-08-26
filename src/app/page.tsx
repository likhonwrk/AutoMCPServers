import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MountainIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">MCP Server Platform</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  MCP Server Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Turn any agents, tools or orchestrators into a MCP Server, in seconds. No complex infra. No lock-in. Just bring your agent and we do the rest.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-4 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Convert</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Bring your own agent and convert it to an MCP server in seconds.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Deploy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Deploy your MCP server instantly with our Vercel-like experience.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Plug your server into your favorite tools like Cursor or Claude Desktop.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Publish</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share and discover agents across the community.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
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
