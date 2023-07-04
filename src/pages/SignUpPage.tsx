import { HStack } from "@chakra-ui/react";
import { SignBackground } from "../components/sign";
import { SignUp } from "../components/signup";

export const SignUpPage = () => {
  return (
    <HStack alignItems="start" justifyContent="space-between">
      <SignUp />
      <SignBackground message={"다른 사람들과 함께 소통하며\n자신의 의견을 나눠보아요."} />
    </HStack>
  );
};
