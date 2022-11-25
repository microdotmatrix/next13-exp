import '~/main.scss';

import { Saira } from '@next/font/google'

import { NavBar } from '@comp/nav'
import Logo from '@comp/logo'
import SocialMedia from '@comp/social'

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: 'variable',
})

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en" className={saira.className}>
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
              <NavBar />
            </div>
          </section>
          
        </header>
        <main className="content-container">
          {children}
        </main>
        <footer className="site-footer">
          <div className='colophon'>
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
