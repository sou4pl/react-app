const stringContains = (string, searchString) => {
  if (string.toLowerCase().includes(searchString.toLowerCase())){
    return true;
  }else{
    return false;
  }
};

export default stringContains;
