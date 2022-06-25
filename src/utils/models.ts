export interface ISearch {
    resultCount: number;
    results: ISearchResults[];
}

export interface ISearchResults {
    kind: string;
    artistId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
}