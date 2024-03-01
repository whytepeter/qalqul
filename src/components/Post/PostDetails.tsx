import { useSelector } from "react-redux";
import BackButton from "../BackButton";
import DisplayCard from "../DisplayCard";
import { RootState } from "../../redux/store";

export default function PostDetails() {
  // Use useSelector hook to access selectedPost state from redux store
  const post = useSelector((state: RootState) => state.post.selectedPost);

  return (
    <div className="w-full max-w-3xl mx-auto bg-background p-4 md:p-6 rounded-3xl flex flex-col gap-5">
      <BackButton />

      {!post && (
        <div className="text-center text-sm">Ops, no post available</div>
      )}

      {post && (
        <>
          <h4 className="font-medium text-dark-900">{post.name}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DisplayCard title="Username" value={post.username} />
            <DisplayCard title="Email" value={post.email} />
            <DisplayCard title="Phone" value={post.phone} />
            <DisplayCard title="website" value={post.website} />
          </div>
        </>
      )}
    </div>
  );
}
