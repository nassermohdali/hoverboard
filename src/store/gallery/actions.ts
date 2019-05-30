import { Dispatch } from 'redux';
import { FETCH_GALLERY, FETCH_GALLERY_FAILURE, FETCH_GALLERY_SUCCESS } from './types';
import { db } from '../db';
import { TempAny } from '../../../functions/src/temp-any';

export const fetchGallery = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_GALLERY,
  });

  return db()
    .collection('gallery')
    .get()
    .then((snaps) => {
      const list = snaps.docs
        .map<TempAny>((snap) => ({ ...snap.data(), ...{ id: snap.id } }))
        .sort((a, b) => a.order - b.order);

      dispatch({
        type: FETCH_GALLERY_SUCCESS,
        payload: { list },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_GALLERY_FAILURE,
        payload: { error },
      });
    });
};
