import Link from 'next/link'
import Image from "next/image"
import clsx from 'clsx'
import logoPlayStore from "@/images/SVG/google-play-badge.svg"

export function PlayStoreLink() {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.odyssey.meeting"
      aria-label="Download on the App Store"
      target="_blank"
    >
      <Image src={logoPlayStore} alt={"Play Store Logo"} />
    </Link>
  )
}