"use client";

import DarkMode from "@/components/ui/darkmode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-5xl">ShadCN portfolio</h1>
     <Button variant='default'>This is a button</Button>
     <DarkMode  />
    </main>
  );
}
