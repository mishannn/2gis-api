import FlagsBadge from './FlagsBadge';

export default interface Flags {
  /**
   * Есть ли для объекта фотографии.
   */
  photos?: boolean;
  /**
   * Список бейджей.
   */
  badges?: FlagsBadge[];
  /**
   * Заполняется только для type=city и принимает единственное значение true в случае, если город является главным городом текущего проекта (например Новосибирск)
   */
  is_default?: boolean;
  /**
   * Заполняется только для type=adm_div, subtype=city|settlement и принимает единственное значение true в случае, если населённый пункт является областным центром.
   */
  is_region_center?: boolean;
  /**
   * Заполняется только для type=adm_div, subtype=city|settlement и принимает единственное значение true в случае, если населённый пункт является районным центром.
   */
  is_district_area_center?: boolean;
  /**
   * Строка, наличие которой говорит о том, что филиал временно не работает. В строке выгружается код причины закрытия.
   */
  temporary_closed?: 'covid19';
}
