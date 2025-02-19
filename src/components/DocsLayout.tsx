import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">DevTool</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6">
              <Button variant="ghost">Documentation</Button>
              <Button variant="ghost">API</Button>
              <Button variant="ghost">Examples</Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1">
        <div className="grid grid-cols-[220px_1fr] gap-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-8">
            <ScrollArea className="h-full py-6">
              <div className="space-y-4">
                <div className="py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Getting Started
                  </h2>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      Introduction
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Installation
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Quick Start
                    </Button>
                  </div>
                </div>
                <div className="py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Core Concepts
                  </h2>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      Architecture
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Configuration
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Security
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </aside>

          {/* Main content */}
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="mx-auto w-full min-w-0">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}