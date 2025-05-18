'use client'

export default function Products() {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#182D20] sm:text-4xl">
            Our Products
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-4xl h-auto rounded-lg shadow-xl"
          >
            <source src="https://muse2025.s3.us-east-1.amazonaws.com/product+slide+show.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
} 