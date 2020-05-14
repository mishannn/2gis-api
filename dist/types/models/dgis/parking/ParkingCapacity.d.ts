import ParkingSpecialSpace from './ParkingSpecialSpace';
export default interface ParkingCapacity {
    total?: string;
    /**
     * Описание особых мест для парковки.
     */
    special_spaces?: ParkingSpecialSpace[];
}
