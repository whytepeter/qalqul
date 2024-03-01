import { Link } from "react-router-dom";
import { Posts } from "../types";

type TableProps = {
  posts: Posts;
};

export default function Table({ posts }: TableProps) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full text-sm bg-background grid grid-cols-8 items-center gap-2 px-3 py-2">
          <div className="col-span-1 w-12">ID</div>
          <div className="col-span-6 md:col-span-2">Name</div>
          <div className="col-span-2 hidden md:block">Email</div>
          <div className="col-span-2 hidden md:block">Phone</div>
          <div className="col-span-1 "></div>
        </div>

        <div className="max-h-[480px] overflow-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full grid grid-cols-8 items-center text-sm gap-2 px-3 py-2 text-left border-b border-dark-100"
            >
              <div className="col-span-1 w-12">{post.id}</div>
              <div className="col-span-6 md:col-span-2">{post.name}</div>
              <div className="col-span-2 hidden md:block ">{post.email}</div>
              <div className="col-span-2 hidden md:block">{post.phone}</div>
              <div className="col-span-1 flex items-center justify-end">
                <Link
                  to={`${post.id}`}
                  className="transition-all duration-300 px-4 py-2 bg-primary hover:bg-primary-300 text-white rounded-full"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
