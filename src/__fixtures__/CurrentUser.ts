import { CurrentUser } from "@/domains/models";

export const currentUser: CurrentUser = {
  email: "test@example.com",
  fullName: "test user",
  isAdmin: false,
};

export const adminUser: CurrentUser = {
  email: "admin@example.com",
  fullName: "admin user",
  isAdmin: true,
};
