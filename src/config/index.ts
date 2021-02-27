import { Dimensions } from 'react-native';

export const API_URL = 'http://192.168.88.12:3000/graphql';
export const PAGINATION_TAKE = 5;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const ERROR_CONTEXT = (ctx: string): string => `use${ctx}Ctx cannot be used outside ${ctx}Provider`;
