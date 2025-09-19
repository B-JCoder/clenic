import Link from "next/link"
import Image from "next/image"
import { Heart, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <>
      <section className="py-8" id="home">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="mx-auto text-center max-w-xl">
            <h1
              className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white after:absolute
              after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-teal-600 dark:after:bg-teal-400 after:w-4"
            >
              Serene Minds Wellness
            </h1>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
            <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white">
                Compassionate Psychiatric Care. Wherever You Are.
              </h1>
              <div className="text-gray-700 dark:text-gray-300 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                <p>
                  Holistic, patient-centered mental healthcare blending psychotherapy, medication management, and
                  support.
                </p>
                <p>Evidence-based psychiatric care serving ages 12-55 through secure telehealth across Florida.</p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="px-6 h-11 flex items-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm transition ease-linear"
                >
                  Book Appointment
                </Link>
              </div>
              <div className="grid grid-cols-3 w-full">
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">
                    5+ years
                  </h2>
                  <span className="text-gray-600">Experience</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">
                    500+
                  </h2>
                  <span className="text-gray-600">Patients Served</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-gray-800 dark:text-gray-200">
                    95%
                  </h2>
                  <span className="text-gray-600">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-full relative">
                <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04] bg-gradient-to-b from-teal-100 dark:from-teal-900/20" />
                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-teal-50 dark:bg-teal-900/10" />
                <Image
                  src="/professional-mental-health-therapist-in-modern-off.jpg"
                  width={300}
                  height={400}
                  alt="Mental health professional"
                  className="relative w-full h-auto max-h-96 lg:max-h-[26rem] rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                <span className="min-w-max text-teal-600 p-2 md:p-3 rounded-lg bg-teal-100 dark:bg-teal-900/20 border border-teal-200/70 dark:border-teal-800/70">
                  <Heart className="w-6 h-6" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">Evidence-Based Care</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Comprehensive psychiatric treatment using proven therapeutic approaches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                <span className="min-w-max text-teal-600 p-2 md:p-3 rounded-lg bg-teal-100 dark:bg-teal-900/20 border border-teal-200/70 dark:border-teal-800/70">
                  <Users className="w-6 h-6" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">Telehealth Access</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Convenient, secure online sessions from the comfort of your home
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                <span className="min-w-max text-teal-600 p-2 md:p-3 rounded-lg bg-teal-100 dark:bg-teal-900/20 border border-teal-200/70 dark:border-teal-800/70">
                  <Shield className="w-6 h-6" />
                </span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">Insurance Accepted</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Most major insurance plans accepted for accessible mental healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
