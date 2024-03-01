import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10 mt-28">
      <h2 className="text-2xl md:text-5xl">404</h2>
      <p className="text-dark-500">Opps, page not found</p>

      <Link to="/" className="text-primary">
        Home
      </Link>
    </div>
  );
}
