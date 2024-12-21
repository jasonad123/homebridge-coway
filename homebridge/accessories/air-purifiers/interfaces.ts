import {AccessoryInterface} from "../accessory";
import {FanSpeed, Mode, AirQuality} from "./enumerations";

export interface FilterInfo {
    filterName: string;
    filterCode: string;
    filterPercentage: number;
}

export interface IndoorAirQuality {
    pm25Density?: number;
    pm10Density?: number;
    vocDensity?: number;
}

export interface LightbulbControlInfo {
    on: boolean;
    brightness?: number;
}

export interface ControlInfo {
    on: boolean;
    airQuality: AirQuality;
    lightbulbInfo: LightbulbControlInfo;
    mode: Mode;
    fanSpeed: FanSpeed;
}

export interface MarvelAirPurifierInterface extends AccessoryInterface {
    filterInfos: FilterInfo[];
    indoorAirQuality: IndoorAirQuality;
    controlInfo: ControlInfo;
}