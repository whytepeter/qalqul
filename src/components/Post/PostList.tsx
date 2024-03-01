import { useEffect, useState } from "react";
import Table from "../Table";
import { Posts } from "../../types";
import Loader from "../Loader";
import http from "../../utils/api";
import toast from "react-hot-toast";

export default function PostList() {
  const [posts, setPosts] = useState<Posts>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await http<Posts>("GET");
        setPosts(res);
      } catch (error: any) {
        toast.error(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-dark-900">All Post</h4>
          {loading && <Loader />}
        </div>

        <Table posts={posts} />
      </div>
    </>
  );
}
