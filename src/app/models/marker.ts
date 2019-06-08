
export class Marker {
    lat: number;
    lng: number;
    alpha: number;
    label: string;

    constructor(lat: number, lng: number, alpha: number, label: string='') {
        this.lat = lat;
        this.lng = lng;
        this.alpha = alpha;
    }
}