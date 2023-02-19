import { all } from 'redux-saga/effects';
import search from './search'

export default function* root() {
    yield all([
        search()
    ]);
}