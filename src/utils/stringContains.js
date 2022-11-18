const stringContains = (string, searchString) => {
  if (string.toLowerCase().includes(searchString)){
    return true;
  }else{
    return false;
  }
};

export default stringContains;
