export const routes = {
  home: "/",
  following: "/following",
  profile: "/@:nickname",
  profileLink: (nickname) => `/@${nickname}`,
  live: "/live",
  upload: "/upload",
  search: "/search",
  messages: "/messages",
  login: "/login",
  register: "/register",
  video: "/@:nickname/videos/:id",
  videoLink: (content) => `/@${content.user.nickname}/videos/${content.id}`,
  comment: "/videos/:id/comments",
};

