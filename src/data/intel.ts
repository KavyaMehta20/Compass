export type ProfIntel = {
  profId: string;
  rating: number;
  traits: string[];
  reviews: { author: string; text: string; rating: number }[];
};

export const profIntelData: Record<string, ProfIntel> = {
  "ozcan-saritas": {
    "profId": "ozcan-saritas",
    "rating": 4,
    "traits": [
      "Group project heavy",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 441",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 941",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 980",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 232",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 904",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "jeyalatha-sivaramakrishnan": {
    "profId": "jeyalatha-sivaramakrishnan",
    "rating": 4.9,
    "traits": [
      "Tough grader",
      "Good grading",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 872",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 598",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 435",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 312",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 985",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "mohamad-mohd-nor": {
    "profId": "mohamad-mohd-nor",
    "rating": 4.8,
    "traits": [
      "No final exam",
      "Group project heavy",
      "Attendance mandatory",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 278",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 958",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 478",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 244",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "amir-klincar": {
    "profId": "amir-klincar",
    "rating": 3.4,
    "traits": [
      "Open book exams",
      "Tough grader",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 760",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 718",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 615",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 158",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 484",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "sabrina-al-bukhari": {
    "profId": "sabrina-al-bukhari",
    "rating": 3.9,
    "traits": [
      "Attendance mandatory",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 922",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 878",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 508",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 446",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "nadir-adam": {
    "profId": "nadir-adam",
    "rating": 4.4,
    "traits": [
      "Good grading",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 534",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 744",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 219",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 529",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 424",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "mohammed-al-ani": {
    "profId": "mohammed-al-ani",
    "rating": 3.1,
    "traits": [
      "Homework heavy",
      "Amazing lectures",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 352",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 317",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 547",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 689",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "ahmad-shubita": {
    "profId": "ahmad-shubita",
    "rating": 4.4,
    "traits": [
      "Caring professor",
      "Tough grader",
      "No final exam",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 802",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 409",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 964",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 662",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 401",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "rasha-bou-shakra": {
    "profId": "rasha-bou-shakra",
    "rating": 3.7,
    "traits": [
      "Group project heavy",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 359",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 569",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 126",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 796",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 930",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "haroon-moidu": {
    "profId": "haroon-moidu",
    "rating": 4.3,
    "traits": [
      "Curved exams",
      "No final exam",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 430",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 421",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 704",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 867",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "roula-mansour": {
    "profId": "roula-mansour",
    "rating": 4,
    "traits": [
      "Group project heavy",
      "Curved exams",
      "No final exam",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 886",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 222",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 540",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 998",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 328",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "leena-thomas": {
    "profId": "leena-thomas",
    "rating": 3.4,
    "traits": [
      "No final exam",
      "Good grading",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 466",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 499",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 659",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 731",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "gideon-bibu": {
    "profId": "gideon-bibu",
    "rating": 3.1,
    "traits": [
      "Homework heavy",
      "Good grading",
      "Amazing lectures",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 403",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 489",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 477",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 677",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "madiha-farman": {
    "profId": "madiha-farman",
    "rating": 3.6,
    "traits": [
      "Tough grader",
      "Amazing lectures",
      "Pop quizzes",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 286",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 989",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 276",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 796",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 711",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "qusai-hasan": {
    "profId": "qusai-hasan",
    "rating": 3.8,
    "traits": [
      "Amazing lectures",
      "Open book exams",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 587",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 449",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 253",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 261",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 239",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "dana-jarkas": {
    "profId": "dana-jarkas",
    "rating": 5,
    "traits": [
      "Pop quizzes",
      "Group project heavy",
      "Homework heavy",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 647",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 718",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 317",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 649",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "belal-alkhamaiseh": {
    "profId": "belal-alkhamaiseh",
    "rating": 4.7,
    "traits": [
      "Attendance mandatory",
      "Group project heavy",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 867",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 423",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 402",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 738",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 700",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "hassan-mustafa": {
    "profId": "hassan-mustafa",
    "rating": 3.2,
    "traits": [
      "Amazing lectures",
      "Lots of reading",
      "Homework heavy",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 968",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 502",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 596",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 583",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 966",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "jinane-mounsef": {
    "profId": "jinane-mounsef",
    "rating": 4.1,
    "traits": [
      "Caring professor",
      "Good grading",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 206",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 760",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 723",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 342",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "khalid-ezzeldeen": {
    "profId": "khalid-ezzeldeen",
    "rating": 4.8,
    "traits": [
      "Attendance mandatory",
      "Amazing lectures",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 441",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 129",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 638",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 425",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 480",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "manisha-daswani": {
    "profId": "manisha-daswani",
    "rating": 4.4,
    "traits": [
      "Curved exams",
      "Attendance mandatory",
      "Good grading",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 554",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 999",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 183",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 445",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "mohamed-abdelraheem": {
    "profId": "mohamed-abdelraheem",
    "rating": 4.9,
    "traits": [
      "Amazing lectures",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 495",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 607",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 981",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 464",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "abdul-kareem-yaseen": {
    "profId": "abdul-kareem-yaseen",
    "rating": 3.3,
    "traits": [
      "Good grading",
      "Curved exams",
      "No final exam",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 755",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 835",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 488",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 103",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "mohamed-samaha": {
    "profId": "mohamed-samaha",
    "rating": 5,
    "traits": [
      "Caring professor",
      "Amazing lectures",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 597",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 316",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 408",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 351",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 686",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "ebram-william": {
    "profId": "ebram-william",
    "rating": 4.2,
    "traits": [
      "Open book exams",
      "Group project heavy",
      "Curved exams",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 602",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 186",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 743",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 828",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 768",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "hana-dawud": {
    "profId": "hana-dawud",
    "rating": 4,
    "traits": [
      "Group project heavy",
      "Caring professor",
      "No final exam",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 438",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 542",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 488",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 441",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 939",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "muhieddin-amer": {
    "profId": "muhieddin-amer",
    "rating": 3.7,
    "traits": [
      "Good grading",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 327",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 893",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 554",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 996",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "panagiotis-kokkalis": {
    "profId": "panagiotis-kokkalis",
    "rating": 4.5,
    "traits": [
      "Tough grader",
      "Attendance mandatory",
      "Amazing lectures",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 833",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 948",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 643",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 787",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "juwaeriah-siddiqui": {
    "profId": "juwaeriah-siddiqui",
    "rating": 3.1,
    "traits": [
      "Caring professor",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 967",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 509",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 743",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 768",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "manisha-kankarej": {
    "profId": "manisha-kankarej",
    "rating": 4.1,
    "traits": [
      "Group project heavy",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 567",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 907",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 840",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 992",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 610",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "biju-itukkapparakkal": {
    "profId": "biju-itukkapparakkal",
    "rating": 4.1,
    "traits": [
      "Caring professor",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 256",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 638",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 395",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 744",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 609",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "pablo-izquierdo-lopez": {
    "profId": "pablo-izquierdo-lopez",
    "rating": 3.8,
    "traits": [
      "Open book exams",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 605",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 770",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 912",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 715",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 386",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "toka-khalil": {
    "profId": "toka-khalil",
    "rating": 3.5,
    "traits": [
      "Lots of reading",
      "Open book exams",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 615",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 282",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 913",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 606",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 322",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "wesam-almobaideen": {
    "profId": "wesam-almobaideen",
    "rating": 4.1,
    "traits": [
      "Lots of reading",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 622",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 628",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 697",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 719",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 975",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "yueting-cui": {
    "profId": "yueting-cui",
    "rating": 4.8,
    "traits": [
      "Amazing lectures",
      "Tough grader",
      "Pop quizzes",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 751",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 890",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 915",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 721",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 315",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "ayoub-hmaidi": {
    "profId": "ayoub-hmaidi",
    "rating": 4.3,
    "traits": [
      "Curved exams",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 198",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 421",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 884",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 369",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "louay-karadsheh": {
    "profId": "louay-karadsheh",
    "rating": 3.1,
    "traits": [
      "Amazing lectures",
      "No final exam",
      "Open book exams",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 579",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 613",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 812",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 120",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 591",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "riham-khafagy": {
    "profId": "riham-khafagy",
    "rating": 3.2,
    "traits": [
      "No final exam",
      "Attendance mandatory",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 566",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 290",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 386",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 782",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 216",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "marisela-becerra": {
    "profId": "marisela-becerra",
    "rating": 4.5,
    "traits": [
      "Tough grader",
      "Open book exams",
      "Good grading",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 300",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 208",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 101",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 883",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 521",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "ghida-moussa": {
    "profId": "ghida-moussa",
    "rating": 3.7,
    "traits": [
      "Open book exams",
      "Homework heavy",
      "Lots of reading",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 710",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 584",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 210",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 235",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 920",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "abdulla-ismail": {
    "profId": "abdulla-ismail",
    "rating": 3.9,
    "traits": [
      "Lots of reading",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 965",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 250",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 337",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 280",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 822",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "james-wade": {
    "profId": "james-wade",
    "rating": 4,
    "traits": [
      "Good grading",
      "Lots of reading",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 814",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 162",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 153",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 491",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 153",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "abilasha-singh": {
    "profId": "abilasha-singh",
    "rating": 3.7,
    "traits": [
      "Open book exams",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 864",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 658",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 548",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 565",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 164",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "haneen-abuzaid": {
    "profId": "haneen-abuzaid",
    "rating": 4.6,
    "traits": [
      "Attendance mandatory",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 880",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 741",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 523",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 159",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 805",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "dua-weraikat": {
    "profId": "dua-weraikat",
    "rating": 3.6,
    "traits": [
      "Curved exams",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 344",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 648",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 349",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 782",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 631",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "zeina-koleilat": {
    "profId": "zeina-koleilat",
    "rating": 4.8,
    "traits": [
      "Amazing lectures",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 163",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 813",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 583",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 996",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 561",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "leen-bou-nassereddine": {
    "profId": "leen-bou-nassereddine",
    "rating": 4,
    "traits": [
      "Tough grader",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 980",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 798",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 957",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 919",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "mustafa-hariri": {
    "profId": "mustafa-hariri",
    "rating": 4.8,
    "traits": [
      "Open book exams",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 161",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 356",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 229",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 199",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "salameh-ahmad": {
    "profId": "salameh-ahmad",
    "rating": 3.3,
    "traits": [
      "Good grading",
      "Group project heavy",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 881",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 501",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 300",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 223",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "ghinwa-al-ariss": {
    "profId": "ghinwa-al-ariss",
    "rating": 4.1,
    "traits": [
      "No final exam",
      "Tough grader",
      "Open book exams",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 498",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 203",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 738",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 496",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 141",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "umer-javed": {
    "profId": "umer-javed",
    "rating": 4.8,
    "traits": [
      "Pop quizzes",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 873",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 915",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 606",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 489",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "khalil-al-hussaeni": {
    "profId": "khalil-al-hussaeni",
    "rating": 3.8,
    "traits": [
      "Group project heavy",
      "Amazing lectures",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 752",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 596",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 465",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 841",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 889",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "kevser-ovaz-akpinar": {
    "profId": "kevser-ovaz-akpinar",
    "rating": 4.8,
    "traits": [
      "Good grading",
      "Homework heavy",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 249",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 957",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 919",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 774",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 741",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "ahmed-sherif": {
    "profId": "ahmed-sherif",
    "rating": 4.9,
    "traits": [
      "Amazing lectures",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 130",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 572",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 137",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 869",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "mehreen-shahid": {
    "profId": "mehreen-shahid",
    "rating": 3.5,
    "traits": [
      "Pop quizzes",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 305",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 281",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 486",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 853",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 393",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "wael-abdel-samad": {
    "profId": "wael-abdel-samad",
    "rating": 4.8,
    "traits": [
      "Group project heavy",
      "Amazing lectures",
      "Open book exams",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 291",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 886",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 672",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 550",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 406",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "nikeeta-barrow": {
    "profId": "nikeeta-barrow",
    "rating": 3.2,
    "traits": [
      "Good grading",
      "Tough grader",
      "Caring professor",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 941",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 723",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 421",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 666",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "mohammed-abdulrahman": {
    "profId": "mohammed-abdulrahman",
    "rating": 4,
    "traits": [
      "Caring professor",
      "No final exam",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 327",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 547",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 183",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 276",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "niki-hosseini-kamkar": {
    "profId": "niki-hosseini-kamkar",
    "rating": 3.9,
    "traits": [
      "Caring professor",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 497",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 353",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 691",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 364",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "ghulam-qadir": {
    "profId": "ghulam-qadir",
    "rating": 3.4,
    "traits": [
      "Good grading",
      "Curved exams",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 950",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 682",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 875",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 585",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 932",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "rupa-kalahasthi": {
    "profId": "rupa-kalahasthi",
    "rating": 4.7,
    "traits": [
      "Homework heavy",
      "Attendance mandatory",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 143",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 690",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 961",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 741",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "aamina-ajaz": {
    "profId": "aamina-ajaz",
    "rating": 3.2,
    "traits": [
      "Caring professor",
      "Tough grader",
      "Good grading",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 373",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 703",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 353",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 204",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "wafa-farid": {
    "profId": "wafa-farid",
    "rating": 3.7,
    "traits": [
      "Good grading",
      "Attendance mandatory",
      "Lots of reading",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 131",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 612",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 552",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 566",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 634",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "dina-nader": {
    "profId": "dina-nader",
    "rating": 4.7,
    "traits": [
      "Pop quizzes",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 742",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 384",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 602",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 511",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 625",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "salman-pervaiz": {
    "profId": "salman-pervaiz",
    "rating": 4.4,
    "traits": [
      "Lots of reading",
      "Curved exams",
      "Group project heavy",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 167",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 225",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 379",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 969",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 334",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "wardah-hassan": {
    "profId": "wardah-hassan",
    "rating": 3.9,
    "traits": [
      "Good grading",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 125",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 423",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 808",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 809",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "mai-sedkey": {
    "profId": "mai-sedkey",
    "rating": 3.1,
    "traits": [
      "Attendance mandatory",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 367",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 994",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 926",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 905",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 879",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "huzefa-vahora": {
    "profId": "huzefa-vahora",
    "rating": 4.5,
    "traits": [
      "No final exam",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 992",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 329",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 331",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 890",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 163",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "mohammed-wannous": {
    "profId": "mohammed-wannous",
    "rating": 3.7,
    "traits": [
      "Good grading",
      "Attendance mandatory",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 912",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 330",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 544",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 534",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "maria-kadi": {
    "profId": "maria-kadi",
    "rating": 3.7,
    "traits": [
      "Good grading",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 403",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 641",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 395",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 478",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 809",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "ioanna-karanikola": {
    "profId": "ioanna-karanikola",
    "rating": 4.7,
    "traits": [
      "Pop quizzes",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 572",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 327",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 914",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 773",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 254",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "nastaran-naghshineh": {
    "profId": "nastaran-naghshineh",
    "rating": 4.6,
    "traits": [
      "Group project heavy",
      "Curved exams",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 706",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 331",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 510",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 515",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "sonakshi-ruhela": {
    "profId": "sonakshi-ruhela",
    "rating": 4.9,
    "traits": [
      "Curved exams",
      "Amazing lectures",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 540",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 558",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 203",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 127",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "mohamad-abou-assali": {
    "profId": "mohamad-abou-assali",
    "rating": 4.8,
    "traits": [
      "Pop quizzes",
      "Good grading",
      "Tough grader",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 736",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 249",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 236",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 595",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 195",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "nasih-osmanovic": {
    "profId": "nasih-osmanovic",
    "rating": 3.2,
    "traits": [
      "Pop quizzes",
      "Homework heavy",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 147",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 583",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 414",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 126",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "natoya-thompson": {
    "profId": "natoya-thompson",
    "rating": 3.2,
    "traits": [
      "No final exam",
      "Open book exams",
      "Caring professor",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 960",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 360",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 317",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 905",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "samar-emara": {
    "profId": "samar-emara",
    "rating": 3.2,
    "traits": [
      "Group project heavy",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 619",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 195",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 772",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 885",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 422",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "deepika-bhagavatula": {
    "profId": "deepika-bhagavatula",
    "rating": 3.4,
    "traits": [
      "Group project heavy",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 150",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 169",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 734",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 965",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 781",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "amel-bettayeb": {
    "profId": "amel-bettayeb",
    "rating": 3.7,
    "traits": [
      "Tough grader",
      "Caring professor",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 609",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 511",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 944",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 564",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 383",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "zohreh-vaziry": {
    "profId": "zohreh-vaziry",
    "rating": 4.2,
    "traits": [
      "Curved exams",
      "Attendance mandatory",
      "No final exam",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 818",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 659",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 926",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 703",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 122",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "rouba-borghol": {
    "profId": "rouba-borghol",
    "rating": 4.6,
    "traits": [
      "Pop quizzes",
      "Group project heavy",
      "Homework heavy",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 740",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 140",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 360",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 622",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 732",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "amer-al-fadli": {
    "profId": "amer-al-fadli",
    "rating": 3.5,
    "traits": [
      "Lots of reading",
      "Tough grader",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 494",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 375",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 664",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 527",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 733",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "reem-razem": {
    "profId": "reem-razem",
    "rating": 4.6,
    "traits": [
      "Good grading",
      "Attendance mandatory",
      "Open book exams",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 375",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 632",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 563",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 527",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 739",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "fatimah-el-chediak": {
    "profId": "fatimah-el-chediak",
    "rating": 4,
    "traits": [
      "Tough grader",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 300",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 844",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 692",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 518",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 422",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "merwyn-strate": {
    "profId": "merwyn-strate",
    "rating": 4.8,
    "traits": [
      "Group project heavy",
      "Amazing lectures",
      "No final exam",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 147",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 869",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 256",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 307",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "zainab-al-zanbouri": {
    "profId": "zainab-al-zanbouri",
    "rating": 4.9,
    "traits": [
      "Lots of reading",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 199",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 890",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 503",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 740",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 997",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "jessica-saba": {
    "profId": "jessica-saba",
    "rating": 4.6,
    "traits": [
      "Attendance mandatory",
      "Group project heavy",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 414",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 292",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 366",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 328",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 967",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "omar-abdul-latif": {
    "profId": "omar-abdul-latif",
    "rating": 3.2,
    "traits": [
      "Pop quizzes",
      "Attendance mandatory",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 132",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 271",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 831",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 897",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "mohammad-arafah": {
    "profId": "mohammad-arafah",
    "rating": 4.9,
    "traits": [
      "Attendance mandatory",
      "Amazing lectures",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 722",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 770",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 457",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 931",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 302",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "wilma-serrao": {
    "profId": "wilma-serrao",
    "rating": 3.8,
    "traits": [
      "Tough grader",
      "Group project heavy",
      "Attendance mandatory",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 399",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 192",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 897",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 911",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 237",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "maaham-maswood": {
    "profId": "maaham-maswood",
    "rating": 4.6,
    "traits": [
      "No final exam",
      "Group project heavy",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 994",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 224",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 574",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 962",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "mehtab-khurshid": {
    "profId": "mehtab-khurshid",
    "rating": 4,
    "traits": [
      "Group project heavy",
      "Caring professor",
      "No final exam",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 600",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 858",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 832",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 250",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "yahya-haider": {
    "profId": "yahya-haider",
    "rating": 4.9,
    "traits": [
      "Attendance mandatory",
      "Lots of reading",
      "Homework heavy",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 257",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 316",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 106",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 761",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 404",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "mohamad-shamat": {
    "profId": "mohamad-shamat",
    "rating": 4.2,
    "traits": [
      "No final exam",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 827",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 818",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 420",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 744",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "shama-azad": {
    "profId": "shama-azad",
    "rating": 4.3,
    "traits": [
      "No final exam",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 228",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 190",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 183",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 678",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "rashed-alnuman": {
    "profId": "rashed-alnuman",
    "rating": 3.9,
    "traits": [
      "Curved exams",
      "No final exam",
      "Good grading",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 306",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 167",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 426",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 599",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 588",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "sanjay-modak": {
    "profId": "sanjay-modak",
    "rating": 3.1,
    "traits": [
      "No final exam",
      "Homework heavy",
      "Good grading",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 198",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 981",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 891",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 388",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "ali-assi": {
    "profId": "ali-assi",
    "rating": 3.2,
    "traits": [
      "Open book exams",
      "Curved exams",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 423",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 892",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 840",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 848",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 525",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "muhammad-jamil": {
    "profId": "muhammad-jamil",
    "rating": 4.5,
    "traits": [
      "Good grading",
      "Amazing lectures",
      "Open book exams",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 170",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 494",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 484",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 304",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "rizwan-tahir": {
    "profId": "rizwan-tahir",
    "rating": 3.9,
    "traits": [
      "Group project heavy",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 682",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 333",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 347",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 990",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "charu-banga": {
    "profId": "charu-banga",
    "rating": 3.9,
    "traits": [
      "Tough grader",
      "No final exam",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 942",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 660",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 780",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 419",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 496",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "danilo-kovacevic": {
    "profId": "danilo-kovacevic",
    "rating": 3.8,
    "traits": [
      "Attendance mandatory",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 162",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 545",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 745",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 270",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 987",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "rayya-parmeggiani": {
    "profId": "rayya-parmeggiani",
    "rating": 3,
    "traits": [
      "Group project heavy",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 544",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 427",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 915",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 548",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "carlos-montana-hoyos": {
    "profId": "carlos-montana-hoyos",
    "rating": 4,
    "traits": [
      "No final exam",
      "Attendance mandatory",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 987",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 186",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 721",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 198",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "ali-sayyad": {
    "profId": "ali-sayyad",
    "rating": 3.3,
    "traits": [
      "Lots of reading",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 934",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 423",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 506",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 898",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "ghalib-kahwaji": {
    "profId": "ghalib-kahwaji",
    "rating": 4.5,
    "traits": [
      "No final exam",
      "Open book exams",
      "Tough grader",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 548",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 693",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 567",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 434",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "mariam-basiouny": {
    "profId": "mariam-basiouny",
    "rating": 4.4,
    "traits": [
      "Good grading",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 174",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 193",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 827",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 481",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 115",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "raghad-mohamed": {
    "profId": "raghad-mohamed",
    "rating": 3.1,
    "traits": [
      "Lots of reading",
      "Tough grader"
    ],
    "reviews": [
      {
        "author": "Student 346",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 977",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 312",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 814",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "vidhya-sunil-bhaskarakurup": {
    "profId": "vidhya-sunil-bhaskarakurup",
    "rating": 3.3,
    "traits": [
      "Tough grader",
      "Attendance mandatory",
      "Open book exams",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 277",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 481",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 228",
        "rating": 2,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 116",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 686",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "soumya-gupta": {
    "profId": "soumya-gupta",
    "rating": 5,
    "traits": [
      "Group project heavy",
      "Lots of reading",
      "Tough grader",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 238",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 971",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 976",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 425",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 577",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "ahmad-alattar": {
    "profId": "ahmad-alattar",
    "rating": 4.1,
    "traits": [
      "Good grading",
      "Attendance mandatory",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 172",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 567",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 936",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 894",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "ahmed-mostafa": {
    "profId": "ahmed-mostafa",
    "rating": 3.5,
    "traits": [
      "No final exam",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 663",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 789",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 183",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 724",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "salma-ahmed": {
    "profId": "salma-ahmed",
    "rating": 4.7,
    "traits": [
      "Tough grader",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 873",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 132",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 122",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 729",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 379",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      }
    ]
  },
  "sarah-kandil": {
    "profId": "sarah-kandil",
    "rating": 4.1,
    "traits": [
      "Caring professor",
      "Attendance mandatory",
      "Amazing lectures",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 274",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 431",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 675",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 259",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "tonmoy-choudhury": {
    "profId": "tonmoy-choudhury",
    "rating": 4.2,
    "traits": [
      "Pop quizzes",
      "Homework heavy"
    ],
    "reviews": [
      {
        "author": "Student 101",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 387",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 540",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 860",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 357",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "boutheina-tlili": {
    "profId": "boutheina-tlili",
    "rating": 3.8,
    "traits": [
      "Good grading",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 718",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 549",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 595",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 274",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 620",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "faryal-waqar": {
    "profId": "faryal-waqar",
    "rating": 4.1,
    "traits": [
      "Pop quizzes",
      "No final exam",
      "Caring professor",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 181",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 627",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 408",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 798",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "greeshma-sreedharan": {
    "profId": "greeshma-sreedharan",
    "rating": 4.4,
    "traits": [
      "Good grading",
      "Homework heavy",
      "Caring professor",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 134",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 716",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 865",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 604",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "jim-otieno": {
    "profId": "jim-otieno",
    "rating": 4.1,
    "traits": [
      "Homework heavy",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 757",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 378",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 839",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 890",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 849",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "rawan-abusirdaneh": {
    "profId": "rawan-abusirdaneh",
    "rating": 3.3,
    "traits": [
      "Amazing lectures",
      "Attendance mandatory"
    ],
    "reviews": [
      {
        "author": "Student 678",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 666",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 305",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 239",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 864",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "abdelrahman-abuarqoub": {
    "profId": "abdelrahman-abuarqoub",
    "rating": 3.4,
    "traits": [
      "Pop quizzes",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 937",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 205",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 906",
        "rating": 2,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 979",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "jameel-maki": {
    "profId": "jameel-maki",
    "rating": 3,
    "traits": [
      "Good grading",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 967",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 280",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 280",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 193",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 734",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "dulmin-wijerathne": {
    "profId": "dulmin-wijerathne",
    "rating": 4.8,
    "traits": [
      "Amazing lectures",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 586",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 726",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 388",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 347",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "jihane-ghorayeb": {
    "profId": "jihane-ghorayeb",
    "rating": 4.2,
    "traits": [
      "Good grading",
      "Caring professor",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 477",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 985",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 566",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 821",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "jamaal-pitt": {
    "profId": "jamaal-pitt",
    "rating": 4.7,
    "traits": [
      "Pop quizzes",
      "Attendance mandatory",
      "Open book exams",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 669",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 697",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 163",
        "rating": 3,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 296",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "haleema-pk": {
    "profId": "haleema-pk",
    "rating": 3.3,
    "traits": [
      "Good grading",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 521",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 929",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 154",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 954",
        "rating": 2,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 497",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "kashif-farhat": {
    "profId": "kashif-farhat",
    "rating": 4.5,
    "traits": [
      "Tough grader",
      "Good grading",
      "Curved exams",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 887",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 340",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 898",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 612",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 716",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "mo-shaikh": {
    "profId": "mo-shaikh",
    "rating": 3.8,
    "traits": [
      "Amazing lectures",
      "Tough grader",
      "Pop quizzes",
      "No final exam"
    ],
    "reviews": [
      {
        "author": "Student 574",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 222",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 344",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 109",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 150",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "panteha-radmehr": {
    "profId": "panteha-radmehr",
    "rating": 4.9,
    "traits": [
      "Lots of reading",
      "Good grading",
      "Group project heavy"
    ],
    "reviews": [
      {
        "author": "Student 804",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 345",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 306",
        "rating": 3,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 972",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "mirosh-thomas": {
    "profId": "mirosh-thomas",
    "rating": 3.1,
    "traits": [
      "Good grading",
      "Curved exams",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 505",
        "rating": 4,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 827",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 177",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 130",
        "rating": 2,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "adrianne-calfo": {
    "profId": "adrianne-calfo",
    "rating": 4,
    "traits": [
      "Open book exams",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 341",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 578",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 179",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 817",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "muhannad-ali": {
    "profId": "muhannad-ali",
    "rating": 3.4,
    "traits": [
      "Group project heavy",
      "Curved exams",
      "No final exam",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 278",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 104",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 521",
        "rating": 4,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 634",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "joseph-nalloor": {
    "profId": "joseph-nalloor",
    "rating": 4.5,
    "traits": [
      "Homework heavy",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 546",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 557",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 379",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 346",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      }
    ]
  },
  "fuat-kosanoglu": {
    "profId": "fuat-kosanoglu",
    "rating": 4,
    "traits": [
      "Amazing lectures",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 853",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 199",
        "rating": 3,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 165",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 852",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "reem-rabea": {
    "profId": "reem-rabea",
    "rating": 4.6,
    "traits": [
      "Good grading",
      "Attendance mandatory",
      "Homework heavy",
      "Curved exams"
    ],
    "reviews": [
      {
        "author": "Student 616",
        "rating": 5,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 692",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 732",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 384",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 980",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "dali-francis": {
    "profId": "dali-francis",
    "rating": 3.1,
    "traits": [
      "Caring professor",
      "Attendance mandatory",
      "Amazing lectures"
    ],
    "reviews": [
      {
        "author": "Student 183",
        "rating": 4,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 360",
        "rating": 4,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 671",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 495",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 407",
        "rating": 2,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  },
  "abinta-mir": {
    "profId": "abinta-mir",
    "rating": 4.4,
    "traits": [
      "Caring professor",
      "No final exam",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 263",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 261",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 183",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 387",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      }
    ]
  },
  "swantaje-martach": {
    "profId": "swantaje-martach",
    "rating": 4.2,
    "traits": [
      "Curved exams",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 434",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 213",
        "rating": 3,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 511",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 988",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 175",
        "rating": 5,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "huda-saadeh": {
    "profId": "huda-saadeh",
    "rating": 3.5,
    "traits": [
      "Lots of reading",
      "Amazing lectures",
      "Good grading"
    ],
    "reviews": [
      {
        "author": "Student 204",
        "rating": 4,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 742",
        "rating": 4,
        "text": "One of the best classes I've taken at RIT."
      },
      {
        "author": "Student 861",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 402",
        "rating": 4,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 682",
        "rating": 4,
        "text": "Very theoretical, I wish there was more practical application."
      }
    ]
  },
  "subia-mojib": {
    "profId": "subia-mojib",
    "rating": 4.6,
    "traits": [
      "Amazing lectures",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 405",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 712",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 700",
        "rating": 3,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 539",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "basil-al-tanjy": {
    "profId": "basil-al-tanjy",
    "rating": 4.9,
    "traits": [
      "No final exam",
      "Open book exams",
      "Attendance mandatory",
      "Caring professor"
    ],
    "reviews": [
      {
        "author": "Student 881",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 594",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 251",
        "rating": 5,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 730",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 685",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      }
    ]
  },
  "rema-amawi": {
    "profId": "rema-amawi",
    "rating": 4.1,
    "traits": [
      "Amazing lectures",
      "Curved exams",
      "No final exam",
      "Open book exams"
    ],
    "reviews": [
      {
        "author": "Student 202",
        "rating": 3,
        "text": "Really enjoyed this class, but you have to put in the work."
      },
      {
        "author": "Student 810",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 973",
        "rating": 3,
        "text": "Very theoretical, I wish there was more practical application."
      },
      {
        "author": "Student 468",
        "rating": 5,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 470",
        "rating": 5,
        "text": "Attendance is super strict, don't skip class!"
      }
    ]
  },
  "naziya-begum": {
    "profId": "naziya-begum",
    "rating": 3.1,
    "traits": [
      "Tough grader",
      "No final exam",
      "Pop quizzes"
    ],
    "reviews": [
      {
        "author": "Student 982",
        "rating": 2,
        "text": "Attendance is super strict, don't skip class!"
      },
      {
        "author": "Student 909",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 929",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 850",
        "rating": 2,
        "text": "Easy A if you just do the homework and show up."
      },
      {
        "author": "Student 705",
        "rating": 2,
        "text": "One of the best classes I've taken at RIT."
      }
    ]
  },
  "jillian-pandor": {
    "profId": "jillian-pandor",
    "rating": 4.8,
    "traits": [
      "Pop quizzes",
      "Amazing lectures",
      "Lots of reading"
    ],
    "reviews": [
      {
        "author": "Student 693",
        "rating": 5,
        "text": "The professor is very knowledgeable and helpful during office hours."
      },
      {
        "author": "Student 687",
        "rating": 5,
        "text": "A lot of group work, which can be hit or miss depending on your team."
      },
      {
        "author": "Student 873",
        "rating": 3,
        "text": "Tough exams, but the curve saved my grade."
      },
      {
        "author": "Student 821",
        "rating": 5,
        "text": "Really enjoyed this class, but you have to put in the work."
      }
    ]
  }
};
