import { RootState } from '../store';

export const configSelector = (reduxState: RootState) => reduxState.tmdb;
