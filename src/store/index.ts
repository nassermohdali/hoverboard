import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { TempAny } from '../temp-any';
import { blogReducer } from './blog/reducers';
import { dialogsReducer } from './dialogs/reducers';
import { feedbackReducer } from './feedback/reducers';
import { filtersReducer } from './filters/reducers';
import { galleryReducer } from './gallery/reducers';
import { notificationsReducer } from './notifications/reducers';
import { partnersReducer } from './partners/reducers';
import { previousSpeakersReducer } from './previous-speakers/reducers';
import { routingReducer } from './routing/reducers';
import { scheduleReducer } from './schedule/reducers';
import { sessionsReducer } from './sessions/reducers';
import { speakersReducer } from './speakers/reducers';
import { subscribeReducer } from './subscribe/reducers';
import { teamReducer } from './team/reducers';
import { ticketsReducer } from './tickets/reducers';
import { toastReducer } from './toast/reducers';
import { uiReducer } from './ui/reducers';
import { userReducer } from './user/reducers';
import { videosReducer } from './videos/reducers';

const devTools = (window as TempAny).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as TempAny).__REDUX_DEVTOOLS_EXTENSION__()
  : <F>(f: F) => f;

const rootReducer = combineReducers({
  blog: blogReducer,
  dialogs: dialogsReducer,
  feedback: feedbackReducer,
  filters: filtersReducer,
  gallery: galleryReducer,
  notifications: notificationsReducer,
  partners: partnersReducer,
  previousSpeakers: previousSpeakersReducer,
  routing: routingReducer,
  schedule: scheduleReducer,
  sessions: sessionsReducer,
  speakers: speakersReducer,
  subscribed: subscribeReducer,
  team: teamReducer,
  tickets: ticketsReducer,
  toast: toastReducer,
  ui: uiReducer,
  user: userReducer,
  videos: videosReducer,
});
type DispatchFunctionType = ThunkDispatch<RootState, undefined, AnyAction>;
const enhancers = compose(applyMiddleware<DispatchFunctionType, RootState>(thunk), devTools);

export const store = createStore(rootReducer, enhancers);
export type RootState = ReturnType<typeof rootReducer>;
