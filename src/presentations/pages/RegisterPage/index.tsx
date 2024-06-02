import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

import * as S from "./style";

/**
 * 登録画面
 */
export const RegisterPage: React.FC = () => {
  return (
    <Container data-testid="registerPage" component="main" maxWidth="xs">
      <S.Root>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <S.Form
          noValidate
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <S.AcceptButton
            type="submit"
            fullWidth
            variant="contained"
            data-testid="submitButton"
          >
            Register
          </S.AcceptButton>
        </S.Form>
      </S.Root>
    </Container>
  );
};
