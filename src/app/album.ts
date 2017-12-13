//also it should be IAlbum... per naming convention
import { Track } from './track';

export interface Album {
    artist: string;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[]
}
