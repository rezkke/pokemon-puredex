/**
 * By modifying FIRST_FETCH_LIMIT you change amount
 * of fetched pokemons at first fetch,
 * same with NEXT_FETCH_LIMIT but you change amount
 * of next pokemon's sets.
 * The amounts should not be lower than what you found.
 */

export const FIRST_FETCH_LIMIT = 18;
export const FIRST_FETCH_OFFSET = 0;
export const NEXT_FETCH_LIMIT = 9;
export const INITIAL_RECENT_OFFSET = FIRST_FETCH_LIMIT - NEXT_FETCH_LIMIT;

/**
 * Do not modify anything below
 */

export const IDLE = "idle";
export const LOADING = "loading";
export const ERROR = "error";
