import Link from 'next/link'
import Image from "next/image"
import clsx from 'clsx'
import logoPlayStore from "@/Images/Banner/playstore.png"

export function PlayStoreLink() {
  return (
    <Link
      href="/"
    >
      <Image src={logoPlayStore} className=' w-36' alt={"Play Store Logo"} />
    </Link>
  )
}
