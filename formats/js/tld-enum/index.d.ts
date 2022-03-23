export interface Desc {
    [domain: string]: string;
}

export interface InfoItem {
    domain: string;
    description: string;
    type: string;
}

export interface Type {
    [domain: string]: string;
}

export interface tldEnum {
    desc: Desc;
    info: InfoItem[];
    list: string[];
    type: Type;
}

declare const tldEnum: tldEnum;
export default tldEnum;
