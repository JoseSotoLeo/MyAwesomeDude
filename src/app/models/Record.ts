export class Record {

    public artist: string;
    public title: string;
    public isrc: string;
    public duration: string;

    constructor(
        artist: string, title: string, isrc: string, duration: string
    ) {
        this.artist = artist;
        this.title = title;
        this.isrc = isrc;
        this.duration = duration;
    }
}