import { sortBy } from '../../utils/arrays';
import {
  getExecutioners,
  getSortedStats,
  getVictims,
  strongAgainstProvidedTypes,
  weakAgainstProvidedTypes,
} from '../../utils/pokemon';

import {
  POKEDEX_CREATE,
  POKEDEX_FILTER,
  POKEDEX_LOAD_MORE,
  POKEDEX_RESET_FILTERS,
  POKEDEX_SORT,
  POKEDEX_UPDATE_RELATIONS,
} from '../../../constants/actionTypes';
import { paginationSize } from '../../../constants/features';
import { StatId } from '../../../constants/pokemon/pokemon-stats';

import { IPokedexAction, IPokedexState, IPokemon, pokedexInitialState } from './pokedex.models';

const reducer = (state = pokedexInitialState, action: IPokedexAction): IPokedexState => {
  switch (action.type) {
    case POKEDEX_CREATE:
      return {
        ...state,
        collection: action.payload.collection,
      };

    case POKEDEX_FILTER:
      const newFilters = {
        ...state.filters,
      };

      if (action.payload && action.payload.filters) {
        action.payload.filters.forEach((filter: { name: string; value: string | string[] | boolean }) => {
          // @ts-ignore
          newFilters[filter.name] = filter.value;
        });
      }

      return {
        ...state,
        filters: newFilters,
      };

    case POKEDEX_LOAD_MORE:
      return {
        ...state,
        pagination: {
          first: 0,
          last: state.pagination.last + paginationSize,
        },
      };

    case POKEDEX_RESET_FILTERS:
      return {
        ...state,
        filters: {
          ...pokedexInitialState.filters,
        },
      };

    case POKEDEX_SORT:
      return {
        ...state,
        sort: action.payload.sort,
      };

    case POKEDEX_UPDATE_RELATIONS:
      return {
        ...state,
        relations: action.payload.relations,
      };

    default:
      return state;
  }
};

// Pokemon List
// Get a list of pokemon (already filtered)
export const getPokedex = (state: IPokedexState, isPaginated: boolean = true) => {
  const { collection, filters, pagination } = state;

  return collection
    .filter(pokemon => {
      // Filter list by name
      if (filters.nameOrNumber) {
        if (new RegExp(filters.nameOrNumber.toLowerCase()).test(pokemon.name.toLowerCase()) === false) {
          return false;
        }
      }

      // Filter list by included types
      if (filters.includedTypes.length) {
        let shouldShow = false;
        filters.includedTypes.forEach(type => {
          if (pokemon.types.ownTypes.findIndex(t => t === type) >= 0) {
            shouldShow = true;
          }
        });

        if (!shouldShow) {
          return false;
        }
      }

      // Filter list by excluded types
      if (filters.excludedTypes.length) {
        let shouldSkip = false;
        filters.excludedTypes.forEach(type => {
          if (pokemon.types.ownTypes.findIndex(t => t === type) >= 0) {
            shouldSkip = true;
          }
        });

        if (shouldSkip) {
          return false;
        }
      }

      // Filter list by strong against
      if (filters.strongAgainst.length) {
        const isStrongAgainstFilteredTypes = strongAgainstProvidedTypes(filters.strongAgainst, pokemon);

        if (!isStrongAgainstFilteredTypes) {
          return false;
        }
      }

      // Filter list by weak against
      if (filters.weakAgainst.length) {
        const isWeakAgainstFilteredTypes = weakAgainstProvidedTypes(filters.weakAgainst, pokemon);

        if (!isWeakAgainstFilteredTypes) {
          return false;
        }
      }

      // Filter list by the best stats
      if (filters.bestStats.length) {
        // @ts-ignore
        const parsedStats = Object.keys(pokemon.baseStats).map((name: StatId) => ({
          name,
          value: pokemon.baseStats[name],
        }));

        const orderedStats = getSortedStats(parsedStats);

        let statMatches = true;
        filters.bestStats.forEach((stat: StatId) => {
          if (orderedStats.slice(0, 3).findIndex(s => s === stat) < 0) {
            statMatches = false;
          }
        });

        if (!statMatches) {
          return false;
        }
      }

      // Filter list by the worst stats
      if (filters.worstStats.length) {
        // @ts-ignore
        const parsedStats = Object.keys(pokemon.baseStats).map((name: StatId) => ({
          name,
          value: pokemon.baseStats[name],
        }));

        const orderedStats = getSortedStats(parsedStats, 'asc');

        let statMatches = true;
        filters.worstStats.forEach((stat: StatId) => {
          if (orderedStats.slice(0, 3).findIndex(s => s === stat) < 0) {
            statMatches = false;
          }
        });

        if (!statMatches) {
          return false;
        }
      }

      // Filter list by learnable skills
      if (filters.canLearnMoves.length) {
        const relationsForThisPokemon = state.relations.find(r => r.pokemon === pokemon.id);

        if (!relationsForThisPokemon) {
          return false;
        }

        let shouldSkip = false;
        filters.canLearnMoves.forEach(move => {
          if (relationsForThisPokemon.moves.findIndex(m => m.id === move) < 0) {
            shouldSkip = true;
          }
        });

        if (shouldSkip) {
          return false;
        }
      }

      // Filter by base CP
      if (typeof filters.baseCP !== 'undefined') {
        if (pokemon.baseCP < filters.baseCP[0] || pokemon.baseCP > filters.baseCP[1]) {
          return false;
        }
      }

      // Filter mega evolutions
      switch (filters.showMegaevolutions) {
        case 'hide':
          if (pokemon.isMega) {
            return false;
          }
          break;

        case 'show-only':
          if (!pokemon.isMega) {
            return false;
          }
          break;

        case 'show-all':
        default:
          break;
      }

      // Filter alolan forms
      switch (filters.showAlolanForms) {
        case 'hide':
          if (pokemon.isAlolan) {
            return false;
          }
          break;

        case 'show-only':
          if (!pokemon.isAlolan) {
            return false;
          }
          break;

        case 'show-all':
        default:
      }

      return true;
    })
    .map(pokemon => {
      const executioners = getExecutioners(pokemon.types.ownTypes, collection).length;
      const victims = getVictims(pokemon.types.ownTypes, collection).length;
      const superiorityIndex = Math.round((victims / (executioners + victims)) * 100);

      return {
        ...pokemon,
        extra: {
          ...pokemon.extra,
          executioners,
          superiorityIndex,
          victims,
        },
      };
    })
    .sort(sortBy(state.sort.sortBy, state.sort.order))
    .slice(pagination.first, isPaginated ? pagination.last : state.collection.length);
};

// Get a complete list of pokemon (without paginate, order or filter)
export const getRawPokedex = (state: IPokedexState) => state.collection;

// Get pagination data for pokemon list
export const getPokedexPagination = (state: IPokedexState) => state.pagination;

// Get sorting options for pokemon list
export const getPokedexSortOptions = (state: IPokedexState) => state.sort;

// Returns all filters
export const getPokedexFilters = (state: IPokedexState) => state.filters;

// Pokemon Details
// Get details of selected pokemon
export const getSelectedPokemon = (state: IPokedexState) => (pokemonId: string) =>
  state.collection.find(pokemon => pokemon.id === pokemonId);

// Get pagination data for a particular pokemon (already filtered)
export const getPokemonPagination = (state: IPokedexState) => (pokemonId: string) => {
  const samePokemon = (pokemon: IPokemon) => pokemon.id === pokemonId;

  // Select filtered collection or complete collection
  const filteredCollection = getPokedex(state, false);
  const collection = filteredCollection.findIndex(samePokemon) >= 0 ? filteredCollection : state.collection;

  // Select pokemon position in that position
  const position = collection.findIndex(samePokemon);

  return {
    next: position < collection.length - 1 ? collection[position + 1] : collection[0],
    prev: position > 0 ? collection[position - 1] : collection[collection.length - 1],
  };
};

export default reducer;
