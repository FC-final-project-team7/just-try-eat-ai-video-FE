import { emptySplitApiWithReauth } from '.';
// import { projectsApi } from '.';
// import { PROJECT_LIST_TAG } from './tags';

import { TVideoData } from '~/types/projects';

export const videoListApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<TVideoData[], void>({
      query: () => ({
        url: `/videos`,
      }),
    }),
  }),
});

export const { useGetVideosQuery } = videoListApi;
