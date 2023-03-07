import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import React from "react";

import { ArticleEditDialog } from "../ArticleEditDialog";

import { ArticleRow } from "./ArticleRow";
import { useArticleList } from "./hooks";
import * as S from "./style";

import { Article } from "@/domains/models";
import {
  EditButton,
  ReloadButton,
} from "@/presentations/sharedComponents/buttons";
import { LoadingMask } from "@/presentations/sharedComponents/utilities";

export const ArticleList: React.FC<{
  articles: Article[];
  isLoading: boolean;
  onReloadClick: () => void;
}> = ({ articles, isLoading, onReloadClick }) => {
  const { page, rowsPerPage, selected, ...handle } = useArticleList(articles);

  return (
    <Container>
      <S.Controll>
        <ReloadButton
          onClick={() => {
            handle.resetPage();
            onReloadClick();
          }}
        />
        <EditButton
          disabled={selected.size !== 1}
          onClick={() => handle.startEdit()}
        />
      </S.Controll>
      <S.TableWrap>
        <S.TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TITLE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handle.rows.map((r) => (
                <ArticleRow
                  key={r.id}
                  row={r}
                  selected={selected.has(r)}
                  onClick={() => handle.toggleSelect(r)}
                />
              ))}
            </TableBody>
          </Table>
        </S.TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={articles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, page) => handle.changePage(page)}
          onRowsPerPageChange={(e) =>
            handle.changeRowsPerPage(Number(e.target.value))
          }
        />
      </S.TableWrap>
      <LoadingMask show={isLoading} />
      {handle.isEditing && (
        <ArticleEditDialog
          article={Array.from(selected)[0]}
          onClose={() => handle.endEdit()}
        />
      )}
    </Container>
  );
};
