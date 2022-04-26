import { v4 } from "uuid";

export const idGen = (): string => {
    return v4();
}