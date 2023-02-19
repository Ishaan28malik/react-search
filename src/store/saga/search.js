import { put, takeEvery } from "redux-saga/effects";
import server from "../../configs";
import { SEARCH_URL } from "../../configs/endUrls";
import { saveData } from "../actions";
import { loaderOff } from "../actions/SearchAction";
import { SEARCH_REPO } from "../actions/types";

function* getRepos(data) {
    try {
        const res = yield server.get(SEARCH_URL, { params: data.payload.params })
        if (res.status === 200 && (res.data.items)) {
            yield put(saveData(res.data.items))
        } else {
            yield put(saveData([]))
        }
    }
    catch (err) {
        console.log(err)
        yield put(loaderOff())
        alert("Something went wrong")
    }
}


export default function* root() {
    yield takeEvery(SEARCH_REPO, getRepos);
}
