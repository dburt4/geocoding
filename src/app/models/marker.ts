
export class Marker {
    lat: number;
    lng: number;
    alpha: number;
    label: string;
    name: string;
    description: string; 
    hint: string; 
    size: string;
    placed: Date;
    activity: String;
    difficulty: number;

    constructor(lat: number, lng: number, alpha: number, label: string='', name: string='What an awesome geocache', 
    description: string='To find this geocache, you have to go around the bend, up the river, through the candy cane forest, through the sea of swirly gumdrops, and all that. ',
    hint: string='If you get stuck, poke your sword on the big tree knot', size: string='Small', placed: Date=new Date(),
    activity: string='Found on 6/1/2019', difficulty: number=70 ) {
        this.lat = lat;
        this.lng = lng;
        this.alpha = alpha;
        this.label = label;
        this.name = name;
        this.description = description;
        this.hint = hint;
        this.size = size;
        this.placed = placed;
        this.activity = activity;
        this.difficulty = difficulty;
    }
}