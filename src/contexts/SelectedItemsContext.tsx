import React, {
    FC,
    createContext,
    useState,
    useContext
} from "react";
import { SelectableStats } from "../pages/Home";

type StateType = {
    bodies: SelectableStats[];
    selectedBodyName: string;
    changeSelectedBodyName: (name: string) => void;
    changeBodies: (list: SelectableStats[]) => void;
    getSelectedBody: () => SelectableStats | null;

    drivers: SelectableStats[];
    selectedDriverName: string;
    changeDrivers: (list: SelectableStats[]) => void;
    changeSelectedDriverName: (name: string) => void;
    getSelectedDriver: () => SelectableStats | null;

    gliders: SelectableStats[];
    selectedGliderName: string;
    changeSelectedGliderName: (name: string) => void;
    changeGliders: (list: SelectableStats[]) => void;
    getSelectedGlider: () => SelectableStats | null;

    tires: SelectableStats[];
    selectedTireName: string;
    changeSelectedTireName: (name: string) => void;
    changeTires: (list: SelectableStats[]) => void;
    getSelectedTire: () => SelectableStats | null;
}

export const SelectedItemsContext = createContext({ } as StateType);

const SelectedItemsContextProvider: FC = ({ children }) =>{
    const [drivers, setDrivers] = useState<SelectableStats[]>([]);
    const [selectedDriverName, setSelectedDriverName] = useState<string>('');

    const [bodies, setBodies] = useState<SelectableStats[]>([]);
    const [selectedBodyName, setSelectedBodyName] = useState<string>('');
    
    const [gliders, setGliders] = useState<SelectableStats[]>([]);
    const [selectedGliderName, setSelectedGliderName] = useState<string>('');

    const [tires, setTires] = useState<SelectableStats[]>([]);
    const [selectedTireName, setSelectedTireName] = useState<string>('');

    function getSelectedBody(): SelectableStats | null {
        return bodies?.find(b => b.name === selectedBodyName) ?? null;
    }

    function getSelectedDriver(): SelectableStats | null {
        return drivers?.find(b => b.name === selectedDriverName) ?? null;
    }

    function getSelectedGlider(): SelectableStats | null {
        return gliders?.find(b => b.name === selectedGliderName) ?? null;
    }

    function getSelectedTire(): SelectableStats | null {
        return tires?.find(b => b.name === selectedTireName) ?? null;
    }

    const changeBodies = (list: SelectableStats[]) => {
        setBodies(list);
    };

    const changeDriversX = (list: SelectableStats[]) => {
        setDrivers(list);
    };

    const changeGliders = (list: SelectableStats[]) => {
        setGliders(list);
    };

    const changeTires = (list: SelectableStats[]) => {
        setTires(list);
    };

    function changeSelectedBodyName(name: string){
        setSelectedBodyName(name);
    };

    function changeSelectedDriverName(name: string){
        setSelectedDriverName(name);
    };

    function changeSelectedGliderName(name: string){
        setSelectedGliderName(name);
    };

    function changeSelectedTireName(name: string){
        setSelectedTireName(name);
    };

    return (
        <SelectedItemsContext.Provider value={{
            bodies,
            selectedBodyName,
            changeSelectedBodyName,
            changeBodies,
            getSelectedBody,

            drivers,
            selectedDriverName,
            changeSelectedDriverName,
            changeDrivers: changeDriversX,
            getSelectedDriver,

            gliders,
            selectedGliderName,
            changeSelectedGliderName,
            changeGliders,
            getSelectedGlider,

            tires,
            selectedTireName,
            changeSelectedTireName,
            changeTires,
            getSelectedTire,
        }}>
            {children}
        </SelectedItemsContext.Provider>
    );
}

export const useSelectedItems = () => useContext(SelectedItemsContext);

export default SelectedItemsContextProvider;