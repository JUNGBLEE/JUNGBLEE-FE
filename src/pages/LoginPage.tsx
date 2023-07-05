import { Login } from "../components/login";
import { SignBackground } from "../components/sign";
import { HStack } from "@chakra-ui/react";

export const LoginPage = () => {
  return (
    <HStack>
      <SignBackground message={"퀴즈를 통해 전문지식들을\n접해보아요."} />
      <Login />
    </HStack>
  );
};
