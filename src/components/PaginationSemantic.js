import React from "react";
import { Pagination, Icon } from "semantic-ui-react";

const PaginationSemantic = ({
  postsPerPage,
  totalPosts,
  // paginate,
  getAll,
  handlePaginationClick,
  currentPage,
  offset,
}) => {
  return (
    <Pagination
      defaultActivePage={1}
      ellipsisItem={{
        content: <Icon name="ellipsis horizontal" />,
        icon: true,
      }}
      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      totalPages={Math.ceil(totalPosts / postsPerPage)}
      onPageChange={(e) => {
        handlePaginationClick(e, currentPage);
        // paginate(currentPage);
      }}
    />
  );
};

export default PaginationSemantic;
