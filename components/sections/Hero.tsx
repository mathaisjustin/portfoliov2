import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
<div className="space-y-6">

  <h1 className="text-5xl md:text-6xl leading-tight max-w-xl">
    Hello, I’m Justin
  </h1>

  <p className="text-lg max-w-xl">
    A developer focused on building thoughtful and scalable digital experiences. 
  Through working on real-world projects, I’ve learned to think beyond just writing code, 
  focusing on solving problems, collaborating effectively, and creating systems that last.
  </p>

  <p className="max-w-xl">
    My journey has helped me become a better team player, communicate ideas clearly, and approach 
    challenges with a structured and practical mindset.
  </p>

<div className="flex gap-4 pt-6">
  
  {/* Primary */}
  <button className="px-6 py-3 rounded-full bg-[#1C1410] text-[#FAF7F2]">
    View Projects
  </button>

  {/* Secondary */}
  <button className="px-6 py-3 rounded-full border border-[#C8BAA6]">
    Contact Me
  </button>

</div>

</div>

          {/* RIGHT: Portrait Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/portfolio.png"
                alt="Justin Mathais"
                width={350} // adjust based on your image
                height={500} // maintain aspect ratio
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}