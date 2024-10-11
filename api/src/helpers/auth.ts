import { users } from "@constants/users";
import type { User } from "@constants/users.d";

export const getUserByUsernameAndPassword = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): User | undefined => (
  users.find(
    (user) => user.email === username && user.password === password
  )
);
