import LottieAnimation from "./LottieAnimation";

const items = [
  {
    title: "Title 1",
    animation: "/lotti-animations/simplicity.json",
  },
  {
    title: "Title 2",
    animation: "/lotti-animations/data-driven.json",
  },
  {
    title: "Title 2",
    animation: "/lotti-animations/build.json",
  },
];

function Strategies() {
  return (
    <section className="mx-auto rounded-t-xl bg-neutral-900 px-4 text-white selection:bg-white selection:text-black md:px-12">
      <div className="flex flex-col gap-2 pt-8">
        <div className="grid-col grid gap-4 pb-24 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="my-a flex flex-col gap-12 rounded-lg bg-[#141414] p-8"
            >
              <LottieAnimation src={item.animation} />

              <div className="my-auto flex w-2/3 flex-col gap-4 pb-12">
                <h3 className="text-2xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strategies;
