"use client";

import {
  Card,
  ContainerScroll,
  Header,
} from "@/components/ui/container-scroll-animation";
import Nav from "@/components/ui/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <ContainerScroll />
      <Header />
      
    </div>
  );
}
