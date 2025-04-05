export type Review = {
    name: string;
    rating: number;
    comment: string;
    date: string;
    likes?: number;
    isLiked?: boolean;
};

export type FoodItem = {
    name: string;
    price: number;
    image?: string;
    desc?: string;
    type?: string;
};
