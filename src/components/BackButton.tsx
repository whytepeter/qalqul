import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
      className="hover:shadow-sm cursor-pointer w-fit flex items-center gap-2 text-sm px-6 py-3 bg-white rounded-full text-dark-40"
    >
      <i className="pi pi-arrow-left text-dark-40" />
      <span>Back</span>
    </div>
  );
}
