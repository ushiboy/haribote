import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

import { useLoginPage } from "./hooks";
import * as S from "./style";

import {
  ErrorMessage,
  LoadingMask,
} from "@/presentations/sharedComponents/utilities";

/**
 * ログインページ
 */
export const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const { login, error, isLoading, toMessageFromError } = useLoginPage();
  return (
    <Container component="main" maxWidth="xs">
      <S.Root>
        <S.LoginAvatar>
          <LockOutlinedIcon />
        </S.LoginAvatar>
        <Typography component="h1" variant="h5">
          {t("SignIn")}
        </Typography>
        <S.Form
          noValidate
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            login(new FormData(e.currentTarget));
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label={t("Email")}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("Password")}
            type="password"
            autoComplete="current-password"
          />
          {error && <ErrorMessage message={toMessageFromError(error)} />}
          <S.LoginButton type="submit" fullWidth variant="contained">
            {t("SignIn")}
          </S.LoginButton>
        </S.Form>
      </S.Root>
      <LoadingMask show={isLoading} />
    </Container>
  );
};
