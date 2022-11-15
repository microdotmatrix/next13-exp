import '~/main.scss';

import Link from 'next/link'

import Nav from '@comp/nav'
import Logo from '@comp/logo'
import SocialMedia from '@comp/social'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="site-header">
          <section>
            <div className="site-logo">
              <Logo />
            </div>
            <div className="nav-menu">
              <Nav />
            </div>
          </section>
          
        </header>
        <main className="page-content">
          {children}
        </main>
        <footer className="site-footer">
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
