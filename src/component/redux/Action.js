export const updateFilterData = (filteredData) => {
    return {
      type: 'UPDATE_FILTER_DATA',
      payload: filteredData,
    };
  };