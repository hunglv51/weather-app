export class WeatherInfo{
   coord:Coord;
   weather: ShortInfo[];
   base:string;
   main:MainInfo;
   visibility:number;
   wind:WindInfo;
   clouds:CloudInfo;
   dt:number;
   sys:SysInfo;
   id:number;
   name:string;
   cod:number;
}

class Coord{
    lon:number;
    lat: number;
}
class ShortInfo{
    id:number;
    main:string;
    description:string;
    icon:string;
}
class MainInfo{
    temp:number;
    pressure:number;
    humidity:number;
    temp_min:number;
    temp_max:number;
}
class WindInfo{
    speed:number;
    deg:number;
}
class CloudInfo{
    all:number;
}
class SysInfo{
    type:number;
    id:number;
    message:0.0053;
    country:string;
    sunrise:number;
    sunset:number;
}