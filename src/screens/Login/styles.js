import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #8FDAB0;
    align-items: center;
    padding: 50px;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${colors.primary || "#000"};
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #141568;
    margin: 40px 0;
`;