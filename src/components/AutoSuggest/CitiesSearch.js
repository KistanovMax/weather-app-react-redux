import React, { Component } from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';

import PlacesAutocomplete from 'react-places-autocomplete';

import './CitiesSearch.css';

export class CitiesSearch extends Component {
  state = { city: '' };

  handleChange = (city) => {
    this.setState({ city });
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.city}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Enter city',
                  className: 'search',
                })}
              />
              <div className='autocomplete-box'>
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? {
                        backgroundColor: 'lightgrey',
                      }
                    : {};
                  return (
                    <div
                      key={suggestion.description}
                      className='input-suggestion'
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <SearchPanel city={this.state.city} />
      </div>
    );
  }
}

export default CitiesSearch;
