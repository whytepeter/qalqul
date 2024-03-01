type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  //// Pagination dynamic styles
  const paginationStyles = (state: boolean): string => {
    let style = "cursor-pointer text-primary flex items-center gap-2";

    if (state) {
      style = style + " cursor-not-allowed opacity-50 pointer-events-none";
    }
    return style;
  };

  //Actions
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviewPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-base">
        <div className=" text-left md:my-4 text-dark-500">
          Page {currentPage} of {totalPages}
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="flex gap-4 items-center">
          <div
            onClick={handlePreviewPage}
            className={paginationStyles(currentPage === 1)}
          >
            <i className="pi pi-chevron-left text-xs" />
            Back
          </div>

          <div
            onClick={handleNextPage}
            className={paginationStyles(currentPage === totalPages)}
          >
            Next
            <i className="pi pi-chevron-right text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
