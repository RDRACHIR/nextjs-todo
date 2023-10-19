import Link from "next/link";

function NotFound() {
  return (
    <Link href="/">
      <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <div>
          <img
            className="object-center"
            width="64"
            height="64"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-error-404-mobile-app-development-flaticons-lineal-color-flat-icons-3.png"
            alt="external-error-404-mobile-app-development-flaticons-lineal-color-flat-icons-3"
          />
        </div>
      </section>
    </Link>
  );
}

export default NotFound;
