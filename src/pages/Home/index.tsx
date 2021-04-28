import React, {
    useEffect,
    useState,
} from 'react';
import {
    FlatList,
    ScrollView,
} from 'react-native';

import api, { baseUrl } from '../../services/api';

import {
    Container,
    Wrapper,
    Header,
    ItemsContainer,
    Footer
} from './styles.js';

import {
    useSelectedItems,
} from '../../contexts/SelectedItemsContext';

import SelectableItem from '../../components/SelectableItem';

import Stats from '../../entites/stats';
import BuildStats from '../../components/BuildStats';

export interface SelectableStats extends Stats {
    selected: boolean;
}

const Home: React.FC = () => {
    const {
        bodies,
        drivers,
        gliders,
        tires,

        changeBodies,
        changeDrivers,
        changeGliders,
        changeTires,

        getSelectedBody,
        getSelectedDriver,
        getSelectedGlider,
        getSelectedTire,
    } = useSelectedItems();

    const selectedBody = getSelectedBody();
    const selectedDriver = getSelectedDriver();
    const selectedGlider = getSelectedGlider();
    const selectedTire = getSelectedTire();
        
    const fetchItems = async (type: string, changeFn: (list: SelectableStats[]) => void) => {        
        try {
            const { data } = await api.get(`/${type}`);
            let items = [];

            if (data?.items) items = data.items;

            const sortedItems = items.sort((a: SelectableStats, b: SelectableStats) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

            changeFn(sortedItems);
        } catch (error) {
            console.log('there was an error fetching ' + type, error);
        }
    };

    useEffect(() => {
        (async function() {
            await fetchItems('bodies', changeBodies);
        })();
    }, []);

    useEffect(() => {
        (async function() {
            await fetchItems('drivers', changeDrivers);
        })();
    }, []);

    useEffect(() => {
        (async function() {
            await fetchItems('gliders', changeGliders);
        })();
    }, []);

    useEffect(() => {
        (async function() {
            await fetchItems('tires', changeTires);
        })();
    }, []);
    
    return (
        <Container>
            <ScrollView horizontal={true}>
                <Wrapper>
                    <Header>Bodies</Header>
                    <ItemsContainer>
                        <FlatList
                            data={bodies}
                            keyExtractor={(item, index) => `${item.name}_${index}`}
                            numColumns={5}
                            columnWrapperStyle={{ flexWrap: 'wrap' }}
                            renderItem={({ item }) => (
                                <SelectableItem
                                    item={item}
                                    baseUrl={baseUrl}
                                    type={'body'} />
                            )}
                        />
                    </ItemsContainer>
                </Wrapper>
                <Wrapper>
                    <Header>Drivers</Header>
                    <ItemsContainer>
                        <FlatList
                            data={drivers}
                            keyExtractor={(item, index) => `${item.name}_${index}`}
                            numColumns={5}
                            columnWrapperStyle={{ flexWrap: 'wrap' }}
                            renderItem={({ item }) => (
                                <SelectableItem
                                    item={item}
                                    baseUrl={baseUrl}
                                    type={'driver'} />
                            )}
                        />
                    </ItemsContainer>
                </Wrapper>
                <Wrapper>
                    <Header>Gliders</Header>
                    <ItemsContainer>
                        <FlatList
                            data={gliders}
                            keyExtractor={(item, index) => `${item.name}_${index}`}
                            numColumns={5}
                            columnWrapperStyle={{ flexWrap: 'wrap' }}
                            renderItem={({ item }) => (
                                <SelectableItem
                                    item={item}
                                    baseUrl={baseUrl}
                                    type={'glider'} />
                            )}
                        />
                    </ItemsContainer>
                </Wrapper>
                <Wrapper>
                    <Header>Tires</Header>
                    <ItemsContainer>
                        <FlatList
                            data={tires}
                            keyExtractor={(item, index) => `${item.name}_${index}`}
                            numColumns={5}
                            columnWrapperStyle={{ flexWrap: 'wrap' }}
                            renderItem={({ item }) => (
                                <SelectableItem
                                    item={item}
                                    baseUrl={baseUrl}
                                    type={'tire'} />
                            )}
                        />
                    </ItemsContainer>
                </Wrapper>
            </ScrollView>
            
            {
                (selectedBody ||
                selectedDriver ||
                selectedGlider ||
                selectedTire) ? (
                    <Footer>
                        <BuildStats />
                    </Footer>
                ) : (<></>) }
        </Container>
    );
}

export default Home;