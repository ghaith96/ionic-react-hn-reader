export type Comment = {
    by: string;
    id: number;
    kids?: number[];
    parent: number;
    text: string;
    time: number;
    type: "comment",
};

export type Story = {
    by: string;
    descendants: number;
    id: number;
    kids?: number[];
    score: number;
    time: number;
    title: string;
    text?: string;
    url: string;
    type: string;
}
