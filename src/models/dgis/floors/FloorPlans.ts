import FloorPlan from './FloorPlan';

export default interface FloorPlans {
  /**
   * Идентификатор этажа по умолчанию для отображения на карте при показе этажей здания.
   */
  default_plan_id: string;
  /**
   * Массив этажей здания. Сортировка: от нижних этажей к верхним.
   */
  plans: FloorPlan[];
}
