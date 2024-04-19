import { CircleBackground } from '@/components/CircleBackground'
import { PlayStoreLink } from "@/components/PlayStoreLink";

export function CallToAction() {
  return (
    <section
      id="calltoaction"
      className="relative overflow-hidden  bg-[#171717] py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Your Community at <br />Your Fingertips
          </h2>
          <p className="mt-4 text-sm md:px-0 px-4 md:text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and join your community.
          </p>
          <div className="mt-8 flex justify-center">
            <PlayStoreLink />
          </div>
        </div>
      </div>
    </section>
  )
}
