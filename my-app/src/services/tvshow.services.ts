const tvshowApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";


export async function discoverTvShows(): Promise<TvShow[]> {
  try {
    const res = await fetch(
      `${tvshowApiBaseUrl}/discover/tv?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const response = await res.json();
    return mapResult(response.results);
  } catch (_) {
    return [];
  }
}

export async function searchTvShow(search: string): Promise<TvShow[]> {
  try {
    const res = await fetch(
      `${tvshowApiBaseUrl}/search/tv?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const response = await res.json();
    return mapResult(response.results);
  } catch (_) {
    return [];
  }
}


export async function top10TvShow(): Promise<TvShow[]> {
  try {
    const res = await fetch(
      `${tvshowApiBaseUrl}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const response = await res.json();
    return mapResult(response.results.slice(0, 10));
  } catch (_) {
    return [];
  }
}

function mapResult(res: any[]): TvShow[] {
  return res.map((tvshow) => {
    const {
      id,
      name,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
      original_language,
    } = tvshow;

    return {
      id,
      name,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      language: original_language,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}

export interface TvShow {
  id: number;
  name: string;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
  language: string;
}