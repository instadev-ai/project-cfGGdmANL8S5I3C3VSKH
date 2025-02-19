import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            DevTool Documentation
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn how to integrate and use our developer tools effectively.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Getting Started
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Welcome to the DevTool documentation. This guide will help you get started
            with our platform and show you how to make the most of our tools.
          </p>

          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-4 text-xl font-semibold">Quick Installation</h3>
            <div className="rounded-md bg-black p-4">
              <code className="text-sm font-mono text-white">
                npm install @devtool/core
              </code>
            </div>
          </div>

          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Key Features
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Fast and reliable development workflow</li>
            <li>Built-in security features</li>
            <li>Extensive API documentation</li>
            <li>Real-time collaboration tools</li>
          </ul>

          <div className="flex gap-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}