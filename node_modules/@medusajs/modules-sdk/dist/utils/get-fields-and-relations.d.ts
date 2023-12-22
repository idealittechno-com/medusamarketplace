import { GraphQLNamedType } from "graphql";
export declare function getFieldsAndRelations(schemaTypeMap: {
    [key: string]: GraphQLNamedType;
}, typeName: string, relations?: string[]): string[];
