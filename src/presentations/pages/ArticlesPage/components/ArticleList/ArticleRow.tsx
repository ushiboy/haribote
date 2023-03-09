import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { Article } from "@/domains/models";

/**
 * 記事一覧行
 */
export const ArticleRow: React.FC<{
  row: Article;
  selected?: boolean;
  onClick: (row: Article) => void;
}> = ({ row, selected, onClick }) => {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.id}
      selected={selected}
      onClick={() => onClick(row)}
    >
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.title}</TableCell>
    </TableRow>
  );
};
