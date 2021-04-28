export default interface Stats {
    name: string;
    speedGnd: number | null;
    speedWtr: number | null;
    speedAir: number | null;
    speedGty: number | null;
    acceleration: number | null;
    weight: number | null;
    handlingGnd: number | null;
    handlingWtr: number | null;
    handlingAir: number | null;
    handlingGty: number | null;
    grip: number | null;
    miniturbo: number | null;
    insideDrift: boolean | null;
    imageUrl: string;
}