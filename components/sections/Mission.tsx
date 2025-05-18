import Image from 'next/image'

export default function Mission() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#182D20] sm:text-4xl">
            Our Mission
          </h2>
        </div>
        <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto">
          <Image
            src="/Mission.png"
            alt="Our Mission"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
