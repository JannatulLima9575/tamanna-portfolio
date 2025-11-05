export default function Testimonials() {
  const list = [
    { img: '/t1.jpg', name: 'Marilyn' },
    { img: '/t2.jpg', name: 'Julia' },
    { img: '/t3.jpg', name: 'Aleksa' },
  ];

  return (
    <section id="testimonials" className="bg-[#d5fdf9] py-20 px-8">
      <h2 className="text-center text-6xl font-bold mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {list.map((t, i) => (
          <div
            key={i}
            className="bg-white border-2 border-white rounded-2xl text-center p-8 hover:border-[#007F73] hover:scale-105 transition"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-40 h-40 mx-auto rounded-full border-4 border-[#007F73] shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold">{t.name}</h3>
            <p className="text-yellow-500 text-xl">★★★★★</p>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
