export interface BitlyResponse {
    created_at:      string;
    id:              string;
    link:            string;
    custom_bitlinks: any[];
    long_url:        string;
    archived:        boolean;
    tags:            any[];
    deeplinks:       any[];
    references:      References;
}

export interface References {
    group: string;
}

export interface UrlShort {
    link: string;
    long_url: string;
}