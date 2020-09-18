import { initialBlogState } from './blog/state';
import { NOTIFICATIONS_STATUS } from './constants';
import { initialDialogState } from './dialogs/state';
import { initialFeedbackState } from './feedback/state';
import { initialFiltersState } from './filters/state';
import { initialGalleryState } from './gallery/store';
import { initialTicketsState } from './tickets/state';
import { initialToastState } from './toast/state';
import { initialUiState } from './ui/state';
import { initialVideosState } from './videos/state';

export const initialState = {
  ui: initialUiState,
  routing: {
    route: 'home',
    subRoute: '',
  },
  dialogs: initialDialogState,
  tickets: initialTicketsState,
  videos: initialVideosState,
  feedback: initialFeedbackState,
  blog: initialBlogState,
  partners: {
    fetching: false,
    fetchingError: null,
    list: [],
    adding: false,
    addingError: false,
  },
  previousSpeakers: {
    fetching: false,
    fetchingError: null,
    list: [],
    obj: {},
  },
  speakers: {
    fetching: false,
    fetchingError: null,
    list: [],
    obj: {},
  },
  sessions: {
    fetching: false,
    fetchingError: null,
    list: [],
    obj: {},
    objBySpeaker: {},
    featured: {},
    featuredFetching: false,
    featuredError: null,
  },
  schedule: [],
  gallery: initialGalleryState,
  team: {
    fetching: false,
    fetchingError: null,
    list: [],
  },
  user: {
    signedIn: false,
  },
  subscribed: false,
  toast: initialToastState,
  notifications: {
    status: NOTIFICATIONS_STATUS.DEFAULT,
  },
  filters: initialFiltersState,
};
