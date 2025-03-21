export interface QuoteInterface {
    message: string;
    quote: {
        id: number;
        category: string;
        quote: string;
        author: string;
        description: string;
    };
}