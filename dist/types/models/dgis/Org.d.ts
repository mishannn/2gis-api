export default interface Org {
    id: string;
    /**
     * Собственное имя организации.
     */
    name: string;
    /**
     * Количество филиалов данной организации.
     */
    branch_count?: number;
}
