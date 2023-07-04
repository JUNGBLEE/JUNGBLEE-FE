import Logo from "../../assets/logo.svg";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as _ from "./style";

export const Header = () => {
  return (
    <_.Container>
      <Link to="/">
        <HStack>
          <img src={Logo} width={46} />
          <_.Name>JUNGBLEE</_.Name>
        </HStack>
      </Link>
      <HStack gap={"20px"}>
        <Link to="/login">
          <Button colorScheme="gray" fontSize="lg" variant="solid">
            로그인
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="red" fontSize="lg" variant="solid">
            회원가입
          </Button>
        </Link>
      </HStack>
    </_.Container>
  );
};
