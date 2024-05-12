import Search from '@/components/search/Search';

export default async function HomePage() {
  return (
    <section className="relative grid h-screen max-h-screen place-items-center bg-[#F6F3E9] bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container items-center pb-12 ">
        <div className="col-span-7">
          <h1 className="mx-auto my-4 text-center text-3xl font-bold lg:w-8/12 lg:text-5xl">
            Hotel for memorable moments rich in emotions
          </h1>
          <p className="my-2 text-center text-[#5f5e5e]">
            We have 459 rooms spread throuout Indonesia with room standards
            equivalent to 5 star hotels.
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
}
