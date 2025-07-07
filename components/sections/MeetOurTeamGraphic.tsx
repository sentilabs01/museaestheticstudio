import Image from "next/image";

export default function MeetOurTeamGraphic() {
  return (
    <section
      id="meet-our-team"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 bg-white dark:bg-black rounded-xl shadow-xl p-8">
        <Image
          src="https://muse2025.s3.us-east-1.amazonaws.com/meet+our.png"
          alt="Meet Our Team"
          width={1200}
          height={400}
          className="w-full max-w-4xl h-auto rounded-lg object-contain bg-white dark:bg-black"
          priority
        />
      </div>
    </section>
  );
}
