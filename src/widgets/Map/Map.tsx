import { FC, useEffect, useState } from "react";
import styles from "./Map.module.scss";
import { Map as MapComponent, Marker } from "pigeon-maps";

// while I am searching for a map service it is hardcoded;
const defaultPoints: PointType[] = [
  {
    title: "п.Щельяюр",
    coordinates: [55.721159589316024, 37.73559595698206],
    zoom: 18,
  },
  {
    title: "д.Вертеп",
    coordinates: [55.72029836401168, 37.72827421489357],
    zoom: 16,
  },
  {
    title: "с.Краснобор",
    coordinates: [55.71739323412764, 37.73325944297705],
    zoom: 14,
  },
  {
    title: "д.Диюр",
    coordinates: [55.71644697437513, 37.72850122896825],
    zoom: 12,
  },
];

export type PointType = {
  title: string;
  coordinates: [number, number];
  zoom?: number;
};

interface IMap {
  points?: PointType[];
}

const Map: FC<IMap> = ({ points = defaultPoints }) => {
  const [activePoint, setActivePoint] = useState(0);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const [zoom, setZoom] = useState<number>(12);

  const changeActivePoint = (num: number): void => setActivePoint(num);

  const getSize = (windowSize: number) => {
    const size = {
      width: 1208,
      height: 354,
    }

    if(windowSize <= 1280){
      size.width = 600;
    }
    if(windowSize < 640){
      size.width = 450;
      size.height = 300;
    }
    if(windowSize <= 500){
      size.width = 300;
      size.height = 150;
    }
    if(windowSize <= 300){
      size.width = 250;
      size.height = 150;
    }


    return size
  }

  const getAnchorCoordinates = (num?: number): [number, number] =>
    points[num ?? activePoint].coordinates;
  const getAnchorZoom = (num?: number): number =>
    points[num ?? activePoint]?.zoom || 10;

  useEffect(() => {
    setCenter(getAnchorCoordinates());
    setZoom(getAnchorZoom());
  }, [activePoint]);

  return (
    <div className={styles.map}>
      <div className={styles.points}>
        {!!points.length &&
          points.map((point, index) => (
            <div
              onClick={() => changeActivePoint(index)}
              className={`${
                activePoint === index
                  ? styles.point__active
                  : styles.point__inactive
              }`}
              key={`map-point-${index}`}
            >
              {point.title}
            </div>
          ))}
      </div>
      <div className={styles.map__inner}>
        <MapComponent
          height={getSize(window.innerWidth).height}
          width={getSize(window.innerWidth).width}
          defaultCenter={[55.71995224222237, 37.72830766877284]}
          center={center}
          defaultZoom={zoom}
          zoom={zoom}
          animate
        >
          {!!points &&
            points.map((_, index) => {
              return <Marker width={50} anchor={getAnchorCoordinates(index)} />;
            })}
        </MapComponent>
      </div>
    </div>
  );
};

export default Map;
