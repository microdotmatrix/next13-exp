import '~/main.scss';

import { modularScale, size } from 'polished'

import Nav from '@comp/nav'
import Logo from '@comp/logo'
import SocialMedia from '@comp/social'

import headImg from '@pub/images/placeholder.jpg'


const icStyles = {
  ...size(modularScale(4))
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <section>
            <div className="site-logo">
              <Logo />
            </div>
            <div className="site-nav">
              <Nav />
            </div>
          </section>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div>
            <h4>&copy; JP 2022</h4>
          </div>
          <div>
            <SocialMedia />
          </div>
        </footer>
      </body>
    </html>
  )
}
