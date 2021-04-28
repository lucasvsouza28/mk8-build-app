import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 100px;
`;

export const Wrapper = styled.View`
    margin-right: 20px;
`;

export const Header = styled.Text`
    font-weight: bold;
    font-size: 22px;
`;

export const ItemsContainer = styled.View`
`;

export const Footer = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #ccc;
    height: 300px;
    flex: 1;
    margin-bottom: -120px;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0px -10px 5px red;
`;