import styled from 'styled-components/native';

export const Wrapper = styled.View`
`;

export const Item = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-top: 20px;
    background-color: #ddd;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    position: relative;
`;

export const Thumbnail = styled.Image.attrs({
    width: 100,
    height: 100,
})`
    width: 30px;
    height: 30px;
    align-self: center;
`;

export const DriftIndicator = styled.Image.attrs({
    width: 100,
    height: 100,
})`
    width: 10px;
    height: 10px;
    position: absolute;
    top: -5px;
    right: -5px;
`;