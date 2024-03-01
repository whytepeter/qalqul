import loaderIcon from "@/assets/loader.svg";

export default function Loader() {
  return (
    <div className="">
      <img src={loaderIcon} alt="" className="animate-spin mx-auto w-6" />
    </div>
  );
}
