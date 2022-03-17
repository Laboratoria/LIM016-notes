import React from 'react';
import Principal from './Principal';
import Menu from './Menu';

export default function HomePages() {
  return (
    <section className="templatehome" >
      <Principal />
      <main>
        <Menu />
      </main>
    </section>
  )
}