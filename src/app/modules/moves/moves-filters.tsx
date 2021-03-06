import * as React from 'react';
import { getGameTranslation, getUiTranslation } from '../../utils/translations';

import { IButtonProps } from '../../components/button';
import Buttons from '../../components/buttons';
import Field from '../forms/field';
import typesDropdown from '../pokedex/types-dropdown';

import { filtersEnabled } from '../../../constants/features';
import {
  MAX_ACCURACY_VALUE,
  MAX_POWER_VALUE,
  MAX_PP_VALUE,
  MIN_POWER_VALUE,
  MIN_PP_VALUE,
} from '../../../constants/moves/moves';
import { getMovesCategories } from '../../../constants/moves/moves-categories';
import { getMovesCategoryName } from '../../../constants/moves/moves-categories-names';

import { IDropdownOptions, IFieldOutput, IOption, IRangeOptions, ITextOptions } from '../forms/form.models';
import { IMovesFilters } from './moves.models';

interface IOwnProps {
  classNames: {
    form: string;
    formField: string;
  };
  movesList: IOption[];
  pokemonList: IOption[];
  filters: IMovesFilters;
  handleFilterChange: (field: IFieldOutput) => void;
  handleReset: () => void;
  handleSubmit: () => void;
}

const MovesFilters = ({
  classNames,
  movesList,
  pokemonList,
  filters,
  handleFilterChange,
  handleReset,
  handleSubmit,
}: IOwnProps) => {
  const fields = [
    {
      id: 'nameOrId',
      label: getUiTranslation('search-move'),
      onChange: handleFilterChange,
      options: movesList,
      placeholder: getUiTranslation('search-move'),
      type: 'text',
    } as ITextOptions,
    {
      defaultValue: filters.category,
      id: 'category',
      label: getGameTranslation('category'),
      onChange: handleFilterChange,
      options: getMovesCategories().map(category => ({
        id: category,
        label: getMovesCategoryName(category),
        value: category,
      })),
      placeholder: getGameTranslation('category'),
      type: 'dropdown',
    } as IDropdownOptions,
    {
      ...typesDropdown,
      defaultValue: filters.includedTypes,
      id: 'includedTypes',
      label: getUiTranslation('search-include-types'),
      onChange: handleFilterChange,
    } as IDropdownOptions,
    {
      ...typesDropdown,
      defaultValue: filters.excludedTypes,
      id: 'excludedTypes',
      label: getUiTranslation('search-exclude-types'),
      onChange: handleFilterChange,
    } as IDropdownOptions,
    {
      ...typesDropdown,
      defaultValue: filters.strongAgainst,
      id: 'strongAgainst',
      label: getUiTranslation('search-strong-against'),
      onChange: handleFilterChange,
    } as IDropdownOptions,
    {
      ...typesDropdown,
      defaultValue: filters.weakAgainst,
      id: 'weakAgainst',
      label: getUiTranslation('search-weak-against'),
      onChange: handleFilterChange,
    } as IDropdownOptions,
    {
      defaultValue: [],
      id: 'canBeLearntBy',
      label: getUiTranslation('search-can-be-learnt-by'),
      onChange: handleFilterChange,
      options: pokemonList,
      type: 'multi',
    } as IDropdownOptions,
    {
      defaultValue: [filters.accuracy[0], filters.accuracy[1]],
      id: 'accuracy',
      label: getGameTranslation('accuracy'),
      onChange: handleFilterChange,
      range: [0, MAX_ACCURACY_VALUE],
      type: 'range',
    } as IRangeOptions,
    {
      defaultValue: [filters.power[0], filters.power[1]],
      id: 'power',
      label: getGameTranslation('power'),
      onChange: handleFilterChange,
      range: [MIN_POWER_VALUE, MAX_POWER_VALUE],
      type: 'range',
    } as IRangeOptions,
    {
      defaultValue: [filters.pp[0], filters.pp[1]],
      id: 'pp',
      label: getGameTranslation('pp'),
      onChange: handleFilterChange,
      range: [MIN_PP_VALUE, MAX_PP_VALUE],
      type: 'range',
    } as IRangeOptions,
    {
      defaultValue: [filters.showTm],
      id: 'showTm',
      label: getUiTranslation('search-show-tm'),
      onChange: handleFilterChange,
      options: [
        {
          id: 'show-all',
          label: getUiTranslation('search-show-all'),
          value: 'show-all',
        },
        {
          id: 'hide',
          label: getUiTranslation('search-hide', getGameTranslation('tm')),
          value: 'hide',
        },
        {
          id: 'show-only',
          label: getUiTranslation('search-show-only', getGameTranslation('tm')),
          value: 'show-only',
        },
      ],
      type: 'dropdown',
    } as IDropdownOptions,
  ];
  const buttons: IButtonProps[] = [
    {
      id: 'submit',
      label: getUiTranslation('search-filters-apply'),
      onClick: () => {
        handleSubmit();
      },
      type: 'button',
    },
    {
      id: 'reset',
      label: getUiTranslation('search-filters-reset'),
      onClick: () => {
        handleReset();
      },
      type: 'button',
    },
  ];

  return (
    <form className={classNames.form} noValidate>
      {fields.map(field => (
        <Field key={field.id} className={classNames.formField} options={{ ...field, isDisabled: !filtersEnabled }} />
      ))}

      <Buttons options={buttons} />
    </form>
  );
};

export default MovesFilters;
