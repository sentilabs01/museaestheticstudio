export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-transparent to-gray-50 px-4 py-32 dark:to-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Brand
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
          Experience excellence in every service. We&apos;re dedicated to providing
          top-quality care and exceptional results for all our clients.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/booking"
            className="rounded-full bg-black px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Book Now
          </a>
          <a
            href="/treatments"
            className="rounded-full border border-black/10 px-8 py-3 text-lg font-medium transition-colors hover:bg-gray-100 dark:border-white/20 dark:hover:bg-gray-800"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
} 