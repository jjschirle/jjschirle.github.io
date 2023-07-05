import React from 'react';
import Hero from "../components/Hero"
//import Socials from "../components/Socials";
import {my_name} from '../GlobalConsts'


export default function Home() {
    React.useEffect(
      function () {
        document.title = `${my_name} | Portfolio`;
      },
    );
  
    return (
      <>
        <Hero />
        <main>
        </main>
      </>
    );
  }
