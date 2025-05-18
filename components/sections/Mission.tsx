import Image from 'next/image'

export default function Mission() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#182D20] sm:text-5xl">
            Our Mission
          </h2>
        </div>
        <div className="relative w-full aspect-[16/9] max-w-7xl mx-auto h-[800px] rounded-lg overflow-hidden border-[0.5px] border-gray-100">
          <Image
            src="/Mission.png"
            alt="Our Mission"
            fill
            className="object-contain transition-all duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  )
}
