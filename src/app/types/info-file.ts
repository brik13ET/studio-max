export type InfoFileEntry = {
    video: string,
    description: string,
    type: number[]
}

export type VideoType  = {
    [id: number]: string
};


export type InfoFile = 
    {
        defaultTypeIndex: number,
        videos: InfoFileEntry[],
        types: VideoType
    }
