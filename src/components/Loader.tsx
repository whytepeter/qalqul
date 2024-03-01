import loaderIcon from "@/assets/loader.svg";

export default function Loader() {
  return (
    <div className="mx-auto">
      <img src={loaderIcon} alt="" className="animate-spin" />
    </div>
  );
}
