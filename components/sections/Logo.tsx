'use client'

export default function Logo() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-md h-auto"
      >
        <source src="/LOGOMP4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
} 