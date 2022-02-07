export const processSingleValue = (data: any) => {
    if (
      Number(data.numerators) !== NaN &&
      Number(data.denominators) !== NaN &&
      Number(data.denominators) !== 0
    ) {
      return Number(data.numerators) / Number(data.denominators);
    }
    return 0;
  };
  export function processBarData(data: any, dx: any[]): any[] {
    const x = dx.map((d: any) => {
      return d.label;
    });
  
    const vaccinated = {
      name: "Vaccinated",
      x,
      y: dx.map(({ value }: any) => data.numerators[value] || 0),
      type: "bar",
      textposition: "auto",
      texttemplate: "%{y}",
      // hoverinfo: "none",
    };
  
    const target = {
      name: "Target",
      x,
      y: dx.map(() => data.denominators / 3),
      type: "bar",
      textposition: "auto",
      texttemplate: "%{y}",
      // hoverinfo: "none",
    };
    return [vaccinated, target];
  }