import Image from "next/image";

export default function Furniture() {
  return (
    <section className="w-full py-16 md:py-24 px-4 font-poppins overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#3A3A3A] text-2xl md:text-3xl font-medium mb-2">
            Share your setup with
          </h2>
          <p className="text-[#616161] text-3xl md:text-4xl font-bold">
            #FuniroFurniture
          </p>
        </div>
        <div className="flex ">
          <Image
            src="/images/left-cutted.png"
            alt="left-cutted"
            width={50}
            height={380}
            quality={100}
            className="ml-5"
          />
          <Image
            src="/images/laptop.png"
            alt="laptop"
            width={450}
            height={312}
            quality={100}
            className="px-4 ml-4 mt-36"
          />

<Image
            src="/images/table1.png"
            alt="table1"
            width={300}
            height={242}
            quality={100}
            className="ml-8 py-10"
          />
       <div className="flex justify-end px-4 ml-2">
  <div className="relative w-[290px] h-[348px] mt-24">
    <Image
      src="/images/bed.png"
      alt="bed"
      layout="fill"
      objectFit="cover" // Ensures the image covers the area and maintains aspect ratio
      quality={100}
    />
  </div>
  <div className="relative w-[225px] h-[433px] ml-4">
    <Image
      src="/images/table2.png"
      alt="table2"
      layout="fill"
      objectFit="cover" // Ensures the image covers the area and maintains aspect ratio
      quality={100}
    />
  </div>
</div>

        </div>
        <div className="flex mb-4 w-full">
  {/* Left Aligned Images */}
  <div className="flex  mr-80 ">
    <Image
      src="/images/chair.png"
      alt="chair"
      width={135}
      height={380}
      quality={100}
      className="ml-5 py-4"
    />
    <Image
      src="/images/showpiece.png"
      alt="showpiece"
      width={380}
      height={242}
      quality={100}
      className="px-4 py-4 mb-16"
    />
  </div>

  {/* Right Aligned Images */}
  <div className="flex  ">
    <Image
      src="/images/artwall.png"
      alt="artwall"
      width={178}
      height={242}
      quality={100}
      className="ml-5 py-4"
    />
    <Image
      src="/images/kitchen.png"
      alt="kitchen"
      width={258}
      height={196}
      quality={100}
      className="px-4 py-4 mb-20"
    />
  </div>
</div>

        
      </div>
    </section>
  );
}
