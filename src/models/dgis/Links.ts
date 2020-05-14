import Entrance from './entrances/Entrance';
import DatabaseEntrance from './entrances/DatabaseEntrance';
import Branches from './Branches';
import Servicing from './Servicing';
import Providers from './Providers';
import Airports from './Airports';
import Parking from './parking/Parking';
import NearestStations from './NearestStations';
import RailwayTerminals from './RailwayTerminals';
import BusTerminals from './BusTerminals';
import Hotels from './Hotels';
import Riverports from './Riverports';
import Seaports from './Seaports';
import Attraction from './Attraction';
import Landmark from './Landmark';
import NearestParking from './parking/NearestParking';

export default interface Links {
  /**
   * Точки входа.
   */
  entrances?: Entrance[];
  database_entrances?: DatabaseEntrance[];
  /**
   * Организации.
   */
  branches?: Branches;
  /**
   * Обслуживающие организации.
   */
  servicing?: Servicing;
  /**
   * Провайдеры.
   */
  providers?: Providers;
  /**
   * Аэропорты.
   */
  airports?: Airports;
  /**
   * Парковки.
   */
  parking?: Parking[];
  /**
   * Ближайшие парковки
   */
  nearest_parking?: NearestParking[];
  /**
   * Ближайшие остановки.
   */
  nearest_stations?: NearestStations[];
  /**
   * Железнодорожные вокзалы.
   */
  railway_terminals?: RailwayTerminals;
  /**
   * Автовокзалы.
   */
  bus_terminals?: BusTerminals;
  /**
   * Отели.
   */
  hotels?: Hotels;
  /**
   * Речные порты.
   */
  river_ports?: Riverports;
  /**
   * Морские порты.
   */
  seaports?: Seaports;
  /**
   * Достопримечательности.
   */
  attractions?: Attraction[];
  /**
   * Ориентиры.
   */
  landmarks?: Landmark[];
}
