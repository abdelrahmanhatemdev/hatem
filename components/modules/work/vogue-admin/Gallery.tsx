import Image from "next/image";

const Gallery = () => {
  return (
    <section className="py-32 px-6 w-full">
      <div className="w-full flex justify-center">
        <Image
          src={`/assets/media/work/vogue-admin/vm.png`}
          alt="Vogue Admin Dashboard"
          className="max-w-full h-auto"
          width={1500}
          height={930}
        />
      </div>
    </section>
  );
};
export default Gallery;
