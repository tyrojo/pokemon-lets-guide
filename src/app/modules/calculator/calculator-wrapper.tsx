import { Stats } from 'pokelab';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getRichPokemon, getStatRatio } from '../../utils/pokemon';

import CalculatorView from './calculator-view';

import { getRawPokedex, getSelectedPokemon } from '../../root.reducer';

import { CALCULATOR } from '../../../constants/appRoutes';
import { PokemonNature } from '../../../constants/pokemon-natures';
import { findNature, getNatureModifier, INatureEffect } from '../../../constants/pokemon-natures-effects';
import {
  ATTACK_ID,
  DEFENSE_ID,
  MAX_STAT_VALUE,
  SPECIAL_ATTACK_ID,
  SPECIAL_DEFENSE_ID,
  SPEED_ID,
  StatId,
} from '../../../constants/pokemon-stats';

import { IRootState } from '../../root.models';
import { IOption } from '../forms/form.models';
import { IPokemonStats, IPokemonWithBaseCP, IRichPokemon } from '../pokedex/pokedex.models';

const defaultCandies = 0;
const defaultIVs = 16;
const defaultLevel = 50;
const defaultNatureEffects = {
  increases: undefined,
  reduces: undefined,
};

const getStatsRatio = (stats: IPokemonStats, max: number) => ({
  attack: getStatRatio(stats.attack, max),
  defense: getStatRatio(stats.defense, max),
  hp: getStatRatio(stats.hp, max),
  spAttack: getStatRatio(stats.spAttack, max),
  spDefense: getStatRatio(stats.spDefense, max),
  speed: getStatRatio(stats.speed, max),
});

interface IOwnProps {
  id?: string;
}

interface IStateProps {
  pokemon?: IRichPokemon;
  pokemonList: IPokemonWithBaseCP[];
}

type Props = IOwnProps & IStateProps;

interface IOwnState {
  candies: IPokemonStats;
  ivs: IPokemonStats;
  level: number;
  nature?: PokemonNature;
  natureEffects: INatureEffect;
  redirectTo: string;
}

class CalculatorWrapper extends React.Component<Props, IOwnState> {
  public state = {
    candies: {
      attack: defaultCandies,
      defense: defaultCandies,
      hp: defaultCandies,
      spAttack: defaultCandies,
      spDefense: defaultCandies,
      speed: defaultCandies,
    },
    ivs: {
      attack: defaultIVs,
      defense: defaultIVs,
      hp: defaultIVs,
      spAttack: defaultIVs,
      spDefense: defaultIVs,
      speed: defaultIVs,
    },
    level: defaultLevel,
    nature: undefined,
    natureEffects: defaultNatureEffects,
    redirectTo: '',
  };

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        redirectTo: '',
      });
    }
  }

  public handlePokemonSelect = (selectedOption: { id: string; value: IOption }) => {
    this.setState({
      redirectTo: CALCULATOR.replace(':id?', selectedOption.value.value),
    });
  };

  public handleLevelChange = (level: { id: string; value: string }) => {
    this.setState({
      level: parseInt(level.value, 10),
    });
  };

  public handleNatureChange = (natureEffects: { id: string; value?: StatId }) => {
    const nature = findNature({
      ...this.state.natureEffects,
      [natureEffects.id]: natureEffects.value,
    });

    this.setState({
      nature,
      natureEffects: {
        ...this.state.natureEffects,
        [natureEffects.id]: natureEffects.value,
      },
    });
  };

  public handleIVsChange = ({ stat, value }: { stat: StatId; value: string }) => {
    this.setState({
      ivs: {
        ...this.state.ivs,
        [stat]: parseInt(value, 10),
      },
    });
  };

  public handleCandiesChange = ({ stat, value }: { stat: StatId; value: string }) => {
    this.setState({
      candies: {
        ...this.state.candies,
        [stat]: parseInt(value, 10),
      },
    });
  };

  public render() {
    const { id, pokemon, pokemonList } = this.props;
    const { candies, ivs, level, nature, natureEffects, redirectTo } = this.state;
    const currentRoute = CALCULATOR.replace(':id?', id || '');

    if (redirectTo && redirectTo !== currentRoute) {
      return <Redirect to={{ pathname: redirectTo }} />;
    }

    const stats = pokemon
      ? {
          attack: Stats.getStat({
            awakeningValue: candies.attack,
            baseStat: pokemon.baseStats.attack,
            individualValue: ivs.attack,
            level,
            nature: getNatureModifier(ATTACK_ID, natureEffects),
            stat: Stats.Attack,
          }),
          defense: Stats.getStat({
            awakeningValue: candies.defense,
            baseStat: pokemon.baseStats.defense,
            individualValue: ivs.defense,
            level,
            nature: getNatureModifier(DEFENSE_ID, natureEffects),
            stat: Stats.Defense,
          }),
          hp: Stats.getStat({
            awakeningValue: candies.hp,
            baseStat: pokemon.baseStats.hp,
            individualValue: ivs.hp,
            level,
            stat: Stats.HP,
          }),
          spAttack: Stats.getStat({
            awakeningValue: candies.spAttack,
            baseStat: pokemon.baseStats.spAttack,
            individualValue: ivs.spAttack,
            level,
            nature: getNatureModifier(SPECIAL_ATTACK_ID, natureEffects),
            stat: Stats.SpecialAttack,
          }),
          spDefense: Stats.getStat({
            awakeningValue: candies.spDefense,
            baseStat: pokemon.baseStats.spDefense,
            individualValue: ivs.spDefense,
            level,
            nature: getNatureModifier(SPECIAL_DEFENSE_ID, natureEffects),
            stat: Stats.SpecialDefense,
          }),
          speed: Stats.getStat({
            awakeningValue: candies.speed,
            baseStat: pokemon.baseStats.speed,
            individualValue: ivs.speed,
            level,
            nature: getNatureModifier(SPEED_ID, natureEffects),
            stat: Stats.Speed,
          }),
        }
      : undefined;

    return (
      <CalculatorView
        pokemonList={pokemonList}
        pokemon={pokemon}
        handlePokemonSelect={e => {
          this.handlePokemonSelect(e);
        }}
        level={level.toString()}
        handleLevelChange={e => {
          this.handleLevelChange(e);
        }}
        nature={nature}
        natureEffects={natureEffects}
        handleNatureChange={e => {
          this.handleNatureChange(e);
        }}
        ivs={ivs}
        handleIVsChange={e => {
          this.handleIVsChange(e);
        }}
        candies={candies}
        handleCandiesChange={e => {
          this.handleCandiesChange(e);
        }}
        stats={stats ? getStatsRatio(stats, MAX_STAT_VALUE) : undefined}
      />
    );
  }
}

const mapStateToProps = (state: IRootState, { id }: Props) => {
  const selectedPokemon = id ? getSelectedPokemon(state)(id) : undefined;
  const pokemonList = getRawPokedex(state);

  return {
    pokemon: selectedPokemon ? getRichPokemon(selectedPokemon) : undefined,
    pokemonList,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorWrapper);
