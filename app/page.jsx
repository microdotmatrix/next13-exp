import Image from 'next/image'
import styles from './page.module.css'

import { ClientIcon } from '@util/clientIcon'

import Slider from '@comp/slider'


export default function Home() {
  return (
    <>
      <Slider />
  
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js 13!</a>
          </h1>
  
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>app/page.tsx</code>
          </p>

          

          <div className='float-left'>
            <ClientIcon icon="mdi:language-typescript" size="12rem" />
          </div>
          <p className='prose'>
            ...all right, so I edited <code className={styles.code}>app/page.tsx</code>, though mine is actually <code className={styles.code}>app/page.jsx</code> because... well, I'm not a fan of Typescript. Don't get me wrong, I <span className="italic">understand</span> and <span className="italic">appreciate</span> Typescript - types add important context to the syntax and allow your syntax to be more declarative and better scoped. It reduces the time you waste on chasing bugs, and the explicit types are essential for coding projects that are truly scalable, large web apps with complex data structures and context providers where that one critical function that isn't sure whether to be a string or a boolean within a mile and a half of transpiled minified code is going to set back your deployment for a week and cause at least three devs to be committed to the mental repository (see what I did there?)... but this is just a demo project that consists of half a dozen pages and a few dozen components. I'll take the time to declare all my type definitions when I'm actually working on a project that I'm getting paid for.
          </p>
  
          <div className={styles.grid}>
            <a href="https://beta.nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js 13</p>
            </a>
  
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Explore the Next.js 13 playground.</p>
            </a>
  
            <a
              href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </main>
      </div>
    </>
  )
}
