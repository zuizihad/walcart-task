export interface CategoriesQueryResponse {
    getCategories: {
        result: {
            categories: {
                createdAt: number;
                inActiveNote: boolean;
                isActive: boolean;
                name: string;
                parent: {
                    name: string;
                    uid: number;
                };
                parents: {
                    name: string;
                    uid: number;
                }
                uid: number;
                updatedAt: number;
            }
        }
    }
}

export interface CreateCategoryResponse {
    createCategory: {
        message: string;
        statusCode: number;
        result: {
            name: string;
            isActive: boolean;
            inActiveNote: boolean;
            parent: {
                name: string;
                uid: number;
            }
            parents: {
                name: string;
                uid: number;
            }
            createdAt: number;
            updatedAt: number;
        }
    }
}

export interface CreateCategoryVariables {
    category: {
        name: string;
        parentCategoryUid: number;
    }
}