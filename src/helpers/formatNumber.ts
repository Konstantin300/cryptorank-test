const formatNumber = (number: number) => {
    if(number < 1) {
        return number.toFixed(2);
    }
    const suffixes = ["", "K", "M", "B", "T"];
    const magnitude = Math.floor(Math.log10(number) / 3);
    const scaled = number / Math.pow(10, magnitude * 3);
    const suffix = suffixes[magnitude];
    return `${scaled.toFixed(2)}${suffix}`;
  }

export default formatNumber;