'use client'

export default function Logo() {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-white dark:bg-black">
      <div className="w-full flex justify-center">
        {/* Light mode logo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-md h-auto block dark:hidden"
        >
          <source src="https://muse2025.s3.us-east-1.amazonaws.com/LOGOMP4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark mode logo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-md h-auto hidden dark:block"
        >
          <source src="https://muse2025.s3.us-east-1.amazonaws.com/Black+Logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
} 