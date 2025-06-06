'use client'

export default function Products() {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
            Featured Products
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-7xl h-[800px] rounded-lg shadow-xl dark:shadow-neutral-800 object-contain"
          >
            <source src="https://muse2025.s3.us-east-1.amazonaws.com/product+slide+show.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
} 