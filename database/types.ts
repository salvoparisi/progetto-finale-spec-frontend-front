export type Smartphone = {
    title: string;
    category: "smartphone";
    brand: string;
    screenSize: number;
    batteryLife: number; 
    cameraMP: number; 
    imgUrl: string;
    price: number
};

export type Smartwatch = {
    title: string;
    category: "smartwatch";
    brand: string;
    batteryLife: number; 
    waterproof: boolean; 
    hasGPS: boolean; 
    imgUrl: string; 
    price: number
};

export type Tablet = {
    title: string;
    category: "tablet";
    brand: string;
    screenSize: number; 
    stylusSupport: boolean;
    storageGB: number; 
    imgUrl: string; 
    price: number
};