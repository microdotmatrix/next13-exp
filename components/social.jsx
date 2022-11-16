"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react'

const cfg = {
  icons: '64px'
}

export default function SocialMedia() {
  return (
    <>
      <ul className="social flex flex-row gap-3 lg:gap-4 xl:gap-5">
        <li>
          <Link href="">
            <Icon icon="simple-icons:github" className="social-link-icons" width={cfg.icons} />
          </Link>
        </li>
        <li>
          <Link href="">
            <Icon icon="simple-icons:codepen" className="social-link-icons" width={cfg.icons} />
          </Link>
        </li>
        <li>
          <Link href="">
            <Icon icon="simple-icons:linkedin" className="social-link-icons" width={cfg.icons} />
          </Link>
        </li>
        <li>
          <Link href="">
            <Icon icon="simple-icons:facebook" className="social-link-icons" width={cfg.icons} />
          </Link>
        </li>
        <li>
          <Link href="">
            <Icon icon="simple-icons:twitch" className="social-link-icons" width={cfg.icons} />
          </Link>
        </li>
      </ul>
    </>
  )
}