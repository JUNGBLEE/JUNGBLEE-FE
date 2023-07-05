import Logo from "../../assets/logo.svg";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as _ from "./style";
import { useIsLoginStore } from "../../store/IsLoginStore";
import MyIcon from "../../assets/my.svg";

export const Header = () => {
  const { isLogin } = useIsLoginStore();

  return (
    <_.Container>
      <HStack>
        <Link to="/">
          <HStack>
            <img src={Logo} width={46} />
            <_.Name>JUNGBLEE</_.Name>
          </HStack>
        </Link>
        {isLogin && (
          <HStack gap={"20px"}>
            <Link to="/quiz">
              <_.Text>퀴즈</_.Text>
            </Link>
            <Link to="/communication">
              <_.Text>커뮤니케이션</_.Text>
            </Link>
          </HStack>
        )}
      </HStack>
      {isLogin ? (
        <Link to="/mypage">
          <img src={MyIcon} />
        </Link>
      ) : (
        <HStack gap={"20px"}>
          <Link to="/login">
            <Button colorScheme="gray" fontSize="lg" variant="solid">
              로그인
            </Button>
          </Link>
          <Link to="/signup">
            <_.SignUpButton colorScheme="gray" fontSize="lg" variant="outline">
              회원가입
            </_.SignUpButton>
          </Link>
        </HStack>
      )}
    </_.Container>
  );
};
