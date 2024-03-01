import { useEffect, useState } from "react";
import Table from "../Table";
import { Posts } from "../../types";
import Loader from "../Loader";
import http from "../../utils/api";
import toast from "react-hot-toast";
import Pagination from "../Pagination";

export default function PostList() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Posts>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const params = {
          _page: currentPage,
          _limit: pageSize,
        };
        const res = await http("GET", undefined, params);

        setTotalPages(Math.ceil(res.headers["x-total-count"] / pageSize));
        if (res.data) {
          setPosts(res.data);
        }
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-dark-900">All Post</h4>
          {loading && <Loader />}
        </div>
        <Table posts={posts} />

        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
