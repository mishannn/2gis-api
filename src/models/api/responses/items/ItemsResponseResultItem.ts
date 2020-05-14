import AdmDivItem from '../../../dgis/items/AdmDivItem';
import BuildingItem from '../../../dgis/items/BuildingItem';
import GateItem from '../../../dgis/items/GateItem';
import ProjectItem from '../../../dgis/items/ProjectItem';
import StationEntranceItem from '../../../dgis/items/StationEntranceItem';
import StreetItem from '../../../dgis/items/StreetItem';
import AttractionItem from '../../../dgis/items/AttractionItem';
import CoordinatesItem from '../../../dgis/items/CoordinatesItem';
import ParkingItem from '../../../dgis/items/ParkingItem';
import RoadItem from '../../../dgis/items/RoadItem';
import StationPlatformItem from '../../../dgis/items/StationPlatformItem';
import RouteItem from '../../../dgis/items/RouteItem';
import PoiItem from '../../../dgis/items/PoiItem';
import CrossRoadItem from '../../../dgis/items/CrossRoadItem';
import StationItem from '../../../dgis/items/StationItem';
import BranchItem from '../../../dgis/items/BranchItem';

type ItemsResponseResultItem =
  | AdmDivItem
  | BuildingItem
  | GateItem
  | ProjectItem
  | StationEntranceItem
  | StreetItem
  | AttractionItem
  | CoordinatesItem
  | ParkingItem
  | RoadItem
  | StationItem
  | BranchItem
  | CrossRoadItem
  | PoiItem
  | RouteItem
  | StationPlatformItem;

export default ItemsResponseResultItem;
