import React, { useEffect, useState } from 'react';
import {
    Text
} from 'react-native';

import { 
    useSelectedItems
} from '../../contexts/SelectedItemsContext';
import Stats from '../../entites/stats';

import {
    Container,
    BasicStatsBars,
    Bar,
    BarTitle,
    GrayBar,
    SpeedBars,
    GroundBar,
    WaterBar,
    AirBar,
    AntiGravityBar,
    HandlingBars,
} from './styles';

const BuildStats: React.FC = () => {
    const [build, setBuild] = useState<Stats>({
        acceleration: 0,
        weight: 0,
        grip: 0,
        miniturbo: 0,

        speedGnd: 0,
        speedWtr: 0,
        speedAir: 0,
        speedGty: 0,

        handlingGnd: 0,
        handlingWtr: 0,
        handlingAir: 0,
        handlingGty: 0,
    } as Stats);
    
    const {
        getSelectedBody,
        getSelectedDriver,
        getSelectedGlider,
        getSelectedTire
    } = useSelectedItems();

    const selectedBody = getSelectedBody();
    const selectedDriver = getSelectedDriver();
    const selectedGlider = getSelectedGlider();
    const selectedTire = getSelectedTire();

    useEffect(() => {
        const acceleration = getPercentage('acceleration');
        const weight = getPercentage('weight');
        const grip = getPercentage('grip');
        const miniturbo = getPercentage('miniturbo');

        const speedGnd = getPercentage('speedGnd');
        const speedWtr = getPercentage('speedWtr');
        const speedAir = getPercentage('speedAir');
        const speedGty = getPercentage('speedGty');

        const handlingGnd = getPercentage('handlingGnd');
        const handlingWtr = getPercentage('handlingWtr');
        const handlingAir = getPercentage('handlingAir');
        const handlingGty = getPercentage('handlingGty');

        const build = {
            acceleration,
            weight,
            grip,
            miniturbo,

            speedGnd,
            speedWtr,
            speedAir,
            speedGty,

            handlingGnd,
            handlingWtr,
            handlingAir,
            handlingGty,
        } as Stats;

        console.log('updated build', build);

        setBuild(build);

    }, [selectedBody, selectedDriver, selectedGlider, selectedTire]);
   
    const getPercentage = (prop: string): number => {
        const driver = selectedDriver?.name === 'Mario' ? {
            weight: 6,
            acceleration: 2,
            miniturbo: 2,		
            speedGnd: 6,		
            speedWtr: 6,		
            speedGty: 6,		
            speedAir: 6,		
            handlingGnd: 4,		
            handlingWtr: 4,		
            handlingGty: 4,		
            handlingAir: 4,
        } : selectedDriver;

        const driverProp = (driver && prop in driver ? (driver as any)[prop] : 0);
        const bodyProp = (selectedBody && prop in selectedBody ? ((selectedBody as any)[prop]) : 0);
        const tireProp = (selectedTire && prop in selectedTire ? ((selectedTire as any)[prop]) : 0);
        const gliderProp = (selectedGlider && prop in selectedGlider ? ((selectedGlider as any)[prop]) : 0);

        console.log('('+ prop +')' + 'pre-sum', driverProp, bodyProp, tireProp, gliderProp);

        const total = driverProp + bodyProp + tireProp + gliderProp;

        console.log('('+ prop +')' + 'total', total);

        const percentage = (total / 6 * 100);

        console.log('('+ prop +')' + 'percentage', percentage);

        return percentage;
    }

    return (
        <>
            {
                (selectedBody || selectedDriver || selectedGlider || selectedTire) ?
                    <Container>
                        <BasicStatsBars>
                            <Bar>
                                <BarTitle>Acceleration</BarTitle>
                                <GrayBar size={build.acceleration} />
                            </Bar>
                            <Bar>
                                <BarTitle>Weight</BarTitle>
                                <GrayBar size={build.weight} />
                            </Bar>
                            <Bar>
                                <BarTitle>Grip</BarTitle>
                                <GrayBar size={build.grip} />
                            </Bar>
                            <Bar>
                                <BarTitle>Mini Turbo</BarTitle>
                                <GrayBar size={build.miniturbo} />
                            </Bar>
                        </BasicStatsBars>
                        <SpeedBars>
                            <BarTitle>Speed (Ground, Water, Air, Anti-Gravity)</BarTitle>
                            <Bar>
                                <GroundBar size={build.speedGnd} />
                            </Bar>
                            <Bar>
                                <WaterBar size={build.speedWtr} />
                            </Bar>
                            <Bar>
                                <AirBar size={build.speedAir} />
                            </Bar>
                            <Bar>
                                <AntiGravityBar size={build.speedGty} />
                            </Bar>
                        </SpeedBars>
                        <HandlingBars>
                            <BarTitle>Handling (Ground, Water, Air, Anti-Gravity)</BarTitle>
                            <Bar>
                                <GroundBar size={build.handlingGnd} />
                            </Bar>
                            <Bar>
                                <WaterBar size={build.handlingWtr} />
                            </Bar>
                            <Bar>
                                <AirBar size={build.handlingAir} />
                            </Bar>
                            <Bar>
                                <AntiGravityBar size={build.handlingGty} />
                            </Bar>
                        </HandlingBars>
                    </Container>
                : <></>
            }
        </>
    );
}

export default BuildStats;