// [Reference] https://yogjin.tistory.com/121

const PHOTOS_KEYS = {
  all: ['photos'] as const,

  lists: () => [...PHOTOS_KEYS.all, 'list'] as const, // ["photos", "list"]
  list: (filters: object) => [...PHOTOS_KEYS.lists(), {filters}] as const, // ["photos", "list", "..."]

  details: () => [...PHOTOS_KEYS.all, 'detail'] as const, // ["photos", "detail"]
  detail: (id: string) => [...PHOTOS_KEYS.details(), id] as const, // ["photos", "detail", "id"]
};

export {PHOTOS_KEYS};
