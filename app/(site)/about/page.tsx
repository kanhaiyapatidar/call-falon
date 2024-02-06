import About from '@/components/About'
import React from 'react'


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About page ",
  // other metadata
};
function AboutPage() {
  return (
    <div>
      <About/>
    </div>
  )
}

export default AboutPage
