
function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className="bg-[#E2DAD6] dark:bg-[#323232] duration-1000 min-h-screen lg:min-h-0 lg:h-screen px-5 md:px-8 xl:px-52 2xl:px-64 py-8 md:py-12 lg:py-8 2xl:py-24" id={id}>
      <section className="bg-[#F5EDED] dark:bg-neutral-900 duration-700 rounded-3xl display-font min-h-[80vh] lg:h-full py-4 xl:py-6 2xl:py-24 px-2 md:px-8 xl:px-12">
        {children}
      </section>
    </article>
  );
}

export default bg;
  