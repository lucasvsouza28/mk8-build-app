import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const BasicStatsBars = styled.View`
    margin-bottom: 15px;
`;

export const Bar = styled.View`
    margin-bottom: 3px;
`;

export const BarTitle = styled.Text`
    margin-bottom: 3px;
`;

export const GrayBar = styled.View`
    height: 5px;
    width: ${props => props.size}%;
    border-radius: 1px;
    background-color: ${props => props.size > 0 ? '#ddd' : 'transparent'};
`;

export const SpeedBars = styled.View``;

export const GroundBar = styled.View`
    height: 5px;
    width: ${props => props.size}%;
    border-radius: 1px;
    background-color: ${props => props.size > 0 ? 'orange' : 'transparent'};
`;

export const WaterBar = styled.View`
    height: 5px;
    width: ${props => props.size}%;
    border-radius: 1px;
    background-color: ${props => props.size > 0 ? 'cyan' : 'transparent'};
`;

export const AirBar = styled.View`
    height: 5px;
    width: ${props => props.size}%;
    border-radius: 1px;
    background-color: ${props => props.size > 0 ? 'lightgreen' : 'transparent'};
`;

export const AntiGravityBar = styled.View`
    height: 5px;
    width: ${props => props.size}%;
    border-radius: 1px;
    background-color: ${props => props.size > 0 ? 'purple' : 'transparent'};
`;

export const HandlingBars = styled.View``;
