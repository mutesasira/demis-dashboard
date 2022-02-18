import { Indicator } from "../interfaces";

type func = (...args: any[]) => Indicator;

export const mainDashboard: { [key: string]: func } = {
  
  percentage_schools_reporting: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "HwcoAIH8yOC" },
            parent, 
      },
    };
  },
  isolated_students: (parent, startdate, enddate)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "rrvYimAHvV7", startdate, enddate},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9", startdate, enddate },
      }
    }
  },
  percentage_referred_for_testing: (parent, startdate, enddate)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "HwcoAIH8yOC", startdate, enddate},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9", startdate, enddate },
      }
    }
  },
  percentage_with_symptoms: (parent, startdate, enddate)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "l2CJ4fYySx9", startdate, enddate},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "PEn6nKhtnGg", startdate, enddate },
      }
    }
  },
  isolated_at_school_symptoms: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "l2CJ4fYySx9" },
            parent, startdate, enddate
      },
    };
  },

  total_schools : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: { parent, startdate, enddate },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  schools_reporting : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "gclV1q6K1yJ",
        parameters: { parent, startdate, enddate},
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  no_referred_testing : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent,startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  no_screened : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  screened_with_covid_symptoms : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  tested_covid19_positive : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  total_reported_positive: (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "mGk4R6i1tz9",
          part,
          parent,startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  total_schools_registered: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "uw6OMvjHWtB",
        parameters: {
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  managed_from_school : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "oC2I44e31Pu",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  number_tested_positive : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_isolated_at_school : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_vaccinated : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "BYgBxd5snmS",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_high_temperature : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "SQmXbWlj3yD",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_sore_throat_cough : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "v44UNoaMdFD",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_runny_nose : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "Ftf2tGyFcnJ",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_with_shortness_breathing : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "Ftf2tGyFcnJ",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  percentage_in_schoolbased_care: (parent)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "oC2I44e31Pu"},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "mGk4R6i1tz9" },
      }
    }
  },
  per_referred_for_testing: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "vYRnUFC53DK",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent,startdate, enddate
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, 
        dx: "l2CJ4fYySx9" },
      },
    };
  },
  per_tested_positive_of_referred_for_testing: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "vYRnUFC53DK",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, 
        dx: "HwcoAIH8yOC" },
      },
    };
  },

  screened_events: (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "PEn6nKhtnGg",
          part,
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  screened_with_covid_symptoms_map : (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent,
          part , startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  number_isolated_school: (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "N3JQAd7YW6g", 
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          part , startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  referred_for_testing_tested_positive: (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "JeJ4S1cIidZ", 
        parameters: {
          dx: "mGk4R6i1tz9",
          parent,
          part, startdate, enddate
        },
      },
      denominator: {
        
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  coverage: (parent , startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: { parent, dx: "rrvYimAHvV7", startdate, enddate},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9", startdate, enddate},
      },
    };
  },

  per_positives_in_school_based_care: (parent, part, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "N3JQAd7YW6g", 
        parameters: {
          dx: "l2CJ4fYySx9",
          parent,
          part, startdate, enddate
        },
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent,
          part, startdate, enddate
        },
      },
    };
  },
  reported_positive: (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "DXHyMRvjToM",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
  cases_manages_from_school : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "oC2I44e31Pu",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  no_isolated_at_school : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          startdate,
          enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  referred_for_testing : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu", 
        parameters: {},
      },
    }
  },
  screened : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent,startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  
  number_tested_for_covid : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  vaccinated : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "BYgBxd5snmS",
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },

  registered_reporters : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "nUudONuOHVi",
        parameters: {
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },

  users_at_school_level : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "nQcVI19bUv5",
        parameters: {
          parent, startdate, enddate
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",  
        parameters: {},
      },
    }
  },

  reporting_schools : (parent, startdate, enddate) => {
    return {
      numerator: {
        sqlView: "YXED52Olvko",
        parameters: { parent, startdate, enddate},
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  
};
