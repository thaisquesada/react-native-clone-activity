import {
    Container,
    Logo,
    Title,
    PrimaryButton,
    TextButton,
    TextInfo,
    SpacingHeight,
    WrapperTextInfo,
  } from "./styles";
  import logo from "../../../assets/logo.png";
  import Input from "../../components/Input";
  import spacings from "../../theme/spacings";
  import { useNavigation } from "@react-navigation/native";
  
  const Login = () => {

    const navigation = useNavigation();

    function openScreen() {
      navigation.navigate('Recuperar Senha')
    }

    return (
      <Container>
        <Logo source={logo} />
        <Title>Login</Title>
        <Input placeholder={"Digite seu login"} />
        <SpacingHeight height={spacings.extraLarge} />
        <Input placeholder={"Digite sua senha"} />
        <WrapperTextInfo>
          <TextInfo>Esqueceu a senha? Cilque aqui!</TextInfo>
        </WrapperTextInfo>
        <PrimaryButton>
          <TextButton>Cilque aqui!</TextButton>
        </PrimaryButton>
        <WrapperTextInfo>
          <TextInfo>Não possui cadastro? Cadastre-se!</TextInfo>
        </WrapperTextInfo>
      </Container>
    );
  };
  
  export default Login;