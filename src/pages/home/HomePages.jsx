import React from 'react';
import Principal from "./Principal";

export default function HomePages() {
  return (
    <section className="templatehome" >
      <Principal />
      <main>
        <Aside />
      </main>
    </section>
  )
}