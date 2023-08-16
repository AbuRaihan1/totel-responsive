const generateYears = () => {
    const startYear = 2023;
    const endYear = 2060;
    const years = [];
  
    for (let year = startYear; year <= endYear; year++) {
      years.push({ label: year.toString(), value: year });
    }
  
    return years;
  };

export default generateYears;