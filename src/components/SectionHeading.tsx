
{/* HIGHLIGHTS */}
<section className="bg-[#f5f1e9] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#98774c] sm:text-xs">
        Why Adepa Heights
      </p>

      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#243b2c] sm:text-4xl lg:text-5xl">
        A retreat designed for stillness
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#706b62] sm:text-base">
        Space to relax, reconnect and enjoy a different pace of life.
      </p>
    </div>

    <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {HIGHLIGHTS.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="flex items-center gap-4 rounded-xl border border-[#e7dfd2] bg-white p-5 text-left shadow-sm transition duration-300 hover:shadow-md sm:flex-col sm:items-center sm:p-6 sm:text-center lg:min-h-[245px] lg:justify-center lg:p-7"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d9ad51] text-[#292720] sm:h-14 sm:w-14">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.7} />
            </div>

            <div className="min-w-0 flex-1 sm:flex-none">
              <h3 className="font-serif text-xl leading-snug text-[#243b2c] sm:mt-4 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#706b62]">
                {item.desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>
