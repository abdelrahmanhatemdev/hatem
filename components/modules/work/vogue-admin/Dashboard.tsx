import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="py-10 lg:py-32 px-3 md:px-6 w-full">
      <div className="bg-neutral-950/50">
        <div className="w-full grid grid-cols-1 md:grid-cols-[35%_65%] p-3 lg:p-28 gap-4">
          <div className="flex items-end grow-0 max-w-96 text-lg order-2 md:order-1">
            The Dashboard provides real-time insights with a clean, intuitive
            layout, keeping key metrics and trends easily accessible.
          </div>
          <div className="flex flex-col gap-24 order-1 md:order-2">
            <Image
              src={`/assets/media/work/vogue-admin/dashboard-light.webp`}
              alt="Vogue Admin Dashboard"
              className="max-w-full h-auto rounded-2xl"
              width={1000}
              height={620}
            />
            <p className="max-w-96 text-lg">
              With dynamic widgets and smooth navigation, it simplifies data
              analysis, empowering businesses to make quick, informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
