import { VideoType } from "../enums/video-type"

export type InfoFileEntry = {
    video: string,
    description: string,
    type: VideoType
}

export type InfoFile = 
    {
        videos: [
            InfoFileEntry
        ]
    }
