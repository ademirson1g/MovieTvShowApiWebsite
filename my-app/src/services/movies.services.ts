const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w200";

export async function discoverMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${movieApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=18efa1c884796c304e2b89592f48fa10`
    );
    const response = await res.json();
    return mapResult(response.results);
  } catch (_) {
    return [];
  }
}

export async function searchMovies(search: string): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${movieApiBaseUrl}/search/movie?query=${search}&api_key=18efa1c884796c304e2b89592f48fa10`
    );
    const response = await res.json();
    return mapResult(response.results);
  } catch (_) {
    return [];
  }
}


export async function top10Movies(): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${movieApiBaseUrl}/movie/top_rated?api_key=18efa1c884796c304e2b89592f48fa10`
    );
    const response = await res.json();
    return mapResult(response.results.slice(0, 10));
  } catch (_) {
    return [];
  }
}

function mapResult(res: any[]): Movie[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
      original_language,
    } = movie;

    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      language: original_language,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}

export interface Movie {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
  language: string;
}
