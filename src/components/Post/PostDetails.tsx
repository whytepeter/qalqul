import { useSelector } from "react-redux";
import BackButton from "../BackButton";
import DisplayCard from "../DisplayCard";
import { RootState } from "../../redux/store";

export default function PostDetails() {
  const post = useSelector((state: RootState) => state.post.selectedPost);

  return (
    <div className="w-full max-w-3xl mx-auto bg-background p-4 md:p-6 rounded-3xl flex flex-col gap-5">
      <BackButton />

      <h4 className="font-medium text-dark-900">{post?.name}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisplayCard title="Username" value="johndoe22" />
        <DisplayCard title="Email" value="johndoe@gmail.com" />
        <DisplayCard title="Phone" value="1234567890" />
        <DisplayCard title="website" value="https://johndoe.com" />
      </div>
    </div>
  );
}
