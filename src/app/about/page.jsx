function About() {
  return (
    <section className="container mx-auto bg-slate-800 p-3 my-52 rounded">
      <h3 className="text-4xl font-bold my-5 text-center">About this web</h3>
      <p className="text-center">
        This is an application to practice NextJs both frontend and some backend
        (crud api creation), Tailwinds for styling, Prisma for database.
      </p>
      <div
        className="flex
       justify-center items-center py-4"
      >
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/prisma-orm.png"
          alt="prisma-orm"
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/nextjs.png"
          alt="nextjs"
          className="mx-5"
        />
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/tailwind_css.png"
          alt="tailwind_css"
        />
      </div>
    </section>
  );
}

export default About;
