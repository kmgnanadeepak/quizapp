export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizCategory {
  [key: string]: Question[];
}

export const quizData: Record<string, QuizCategory> = {
  sports: {
    football: [
        {
          "id": "f1",
          "question": "Which country won the FIFA World Cup in 2018?",
          "options": ["Brazil", "Germany", "France", "Argentina"],
          "correctAnswer": 2
        },
        {
          "id": "f2",
          "question": "How many players are on a football team on the field at one time?",
          "options": ["10", "11", "12", "9"],
          "correctAnswer": 1
        },
        {
          "id": "f3",
          "question": "Which player has won the most Ballon d'Or awards?",
          "options": ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
          "correctAnswer": 1
        },
        {
          "id": "f4",
          "question": "In which year was the first FIFA World Cup held?",
          "options": ["1926", "1930", "1934", "1928"],
          "correctAnswer": 1
        },
        {
          "id": "f5",
          "question": "Which club has won the most UEFA Champions League titles?",
          "options": ["Barcelona", "AC Milan", "Real Madrid", "Liverpool"],
          "correctAnswer": 2
        },
        {
          "id": "f6",
          "question": "What is the maximum duration of a football match including extra time?",
          "options": ["90 minutes", "120 minutes", "105 minutes", "110 minutes"],
          "correctAnswer": 1
        },
        {
          "id": "f7",
          "question": "Which country has won the most FIFA World Cups?",
          "options": ["Germany", "Brazil", "Argentina", "Italy"],
          "correctAnswer": 1
        },
        {
          "id": "f8",
          "question": "What is the penalty area also known as?",
          "options": ["Goal box", "18-yard box", "Penalty box", "All of the above"],
          "correctAnswer": 3
        },
        {
          "id": "f9",
          "question": "Who is the all-time top scorer in FIFA World Cup history?",
          "options": ["Pelé", "Miroslav Klose", "Ronaldo", "Gerd Müller"],
          "correctAnswer": 1
        },
        {
          "id": "f10",
          "question": "Which Premier League team is known as 'The Red Devils'?",
          "options": ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
          "correctAnswer": 2
        },
        {
          "id": "f11",
          "question": "In which city is the famous Wembley Stadium located?",
          "options": ["Manchester", "Liverpool", "Birmingham", "London"],
          "correctAnswer": 3
        },
        {
          "id": "f12",
          "question": "What is the standard size of a football goal?",
          "options": ["8 yards × 8 feet", "8 yards × 8 yards", "7 yards × 8 feet", "6 yards × 8 feet"],
          "correctAnswer": 0
        },
        {
          "id": "f13",
          "question": "Which footballer is known as 'CR7'?",
          "options": ["Cristiano Ronaldo", "Carlos Riquelme", "Christian Ramirez", "Claudio Reyna"],
          "correctAnswer": 0
        },
        {
          "id": "f14",
          "question": "How many substitutions are allowed in a football match?",
          "options": ["3", "5", "7", "Unlimited"],
          "correctAnswer": 1
        },
        {
          "id": "f15",
          "question": "Which club does Kylian Mbappé currently play for?",
          "options": ["Barcelona", "Real Madrid", "PSG", "Liverpool"],
          "correctAnswer": 1
        },
        {
          "id": "f16",
          "question": "What is the offside rule in football?",
          "options": ["Player must be behind the ball", "Player must be behind last defender", "Player must be behind second-last opponent", "No restrictions"],
          "correctAnswer": 2
        },
        {
          "id": "f17",
          "question": "Which tournament is considered the most prestigious in European club football?",
          "options": ["Europa League", "Champions League", "Super Cup", "Conference League"],
          "correctAnswer": 1
        },
        {
          "id": "f18",
          "question": "What color card does a referee show for a serious foul?",
          "options": ["Yellow", "Red", "Green", "Blue"],
          "correctAnswer": 1
        },
        {
          "id": "f19",
          "question": "Which country hosted the 2022 FIFA World Cup?",
          "options": ["Russia", "Brazil", "Qatar", "Germany"],
          "correctAnswer": 2
        },
        {
          "id": "f20",
          "question": "What is the maximum number of players a team can have on the field?",
          "options": ["10", "11", "12", "9"],
          "correctAnswer": 1
        }
      ],
      "cricket": [
        {
          "id": "c1",
          "question": "How many players are in a cricket team?",
          "options": ["10", "11", "12", "9"],
          "correctAnswer": 1
        },
        {
          "id": "c2",
          "question": "What is the maximum number of overs in a One Day International (ODI)?",
          "options": ["40", "45", "50", "60"],
          "correctAnswer": 2
        },
        {
          "id": "c3",
          "question": "Which country has won the most Cricket World Cups?",
          "options": ["India", "Australia", "England", "West Indies"],
          "correctAnswer": 1
        },
        {
          "id": "c4",
          "question": "What is the term for scoring 100 runs in cricket?",
          "options": ["Century", "Half-century", "Double", "Ton"],
          "correctAnswer": 0
        },
        {
          "id": "c5",
          "question": "Who holds the record for the highest individual score in Test cricket?",
          "options": ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Don Bradman"],
          "correctAnswer": 0
        },
        {
          "id": "c6",
          "question": "How many stumps are there in cricket?",
          "options": ["2", "3", "4", "6"],
          "correctAnswer": 1
        },
        {
          "id": "c7",
          "question": "What is the length of a cricket pitch?",
          "options": ["20 yards", "22 yards", "24 yards", "26 yards"],
          "correctAnswer": 1
        },
        {
          "id": "c8",
          "question": "Which format of cricket has 20 overs per side?",
          "options": ["Test", "ODI", "T20", "T10"],
          "correctAnswer": 2
        },
        {
          "id": "c9",
          "question": "What does LBW stand for in cricket?",
          "options": ["Leg Before Wicket", "Left Behind Wicket", "Low Ball Wicket", "Long Ball Wide"],
          "correctAnswer": 0
        },
        {
          "id": "c10",
          "question": "Which Indian cricketer is known as 'Captain Cool'?",
          "options": ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Sourav Ganguly"],
          "correctAnswer": 2
        },
        {
          "id": "c11",
          "question": "What is the maximum number of fielders allowed outside the 30-yard circle in ODI cricket?",
          "options": ["4", "5", "6", "7"],
          "correctAnswer": 1
        },
        {
          "id": "c12",
          "question": "Which country invented cricket?",
          "options": ["Australia", "India", "England", "South Africa"],
          "correctAnswer": 2
        },
        {
          "id": "c13",
          "question": "What is a hat-trick in cricket?",
          "options": ["3 runs in 3 balls", "3 wickets in 3 balls", "3 sixes in 3 balls", "3 catches in 3 balls"],
          "correctAnswer": 1
        },
        {
          "id": "c14",
          "question": "How many runs are awarded for hitting the ball over the boundary without bouncing?",
          "options": ["4", "5", "6", "8"],
          "correctAnswer": 2
        },
        {
          "id": "c15",
          "question": "Which Test series is contested between England and Australia?",
          "options": ["Border-Gavaskar Trophy", "The Ashes", "Trans-Tasman Trophy", "Pataudi Trophy"],
          "correctAnswer": 1
        },
        {
          "id": "c16",
          "question": "What is the term for a ball that passes the batsman without touching the bat or body?",
          "options": ["Wide", "No-ball", "Bye", "Leg-bye"],
          "correctAnswer": 2
        },
        {
          "id": "c17",
          "question": "Which Australian cricketer is known as 'The Don'?",
          "options": ["Steve Smith", "Ricky Ponting", "Don Bradman", "Allan Border"],
          "correctAnswer": 2
        },
        {
          "id": "c18",
          "question": "What is the powerplay in ODI cricket?",
          "options": ["First 10 overs", "First 15 overs", "Last 10 overs", "Middle 10 overs"],
          "correctAnswer": 0
        },
        {
          "id": "c19",
          "question": "Which format of cricket can last up to 5 days?",
          "options": ["ODI", "T20", "Test", "T10"],
          "correctAnswer": 2
        },
        {
          "id": "c20",
          "question": "What is the minimum number of overs to constitute a match in ODI cricket?",
          "options": ["20", "25", "30", "35"],
          "correctAnswer": 0
        }
      ],
      "tennis": [
        {
          "id": "t1",
          "question": "How many Grand Slam tournaments are there in tennis?",
          "options": ["3", "4", "5", "6"],
          "correctAnswer": 1
        },
        {
          "id": "t2",
          "question": "Who has won the most Grand Slam singles titles in men's tennis?",
          "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
          "correctAnswer": 2
        },
        {
          "id": "t3",
          "question": "What is the term for a score of 40-40 in tennis?",
          "options": ["Match point", "Deuce", "Advantage", "Break point"],
          "correctAnswer": 1
        },
        {
          "id": "t4",
          "question": "Which Grand Slam is played on clay courts?",
          "options": ["Wimbledon", "US Open", "French Open", "Australian Open"],
          "correctAnswer": 2
        },
        {
          "id": "t5",
          "question": "What is the maximum number of sets in a men's Grand Slam match?",
          "options": ["3", "4", "5", "6"],
          "correctAnswer": 2
        },
        {
          "id": "t6",
          "question": "What is the scoring system in tennis?",
          "options": ["0, 15, 30, 40", "1, 2, 3, 4", "0, 10, 20, 30", "5, 10, 15, 20"],
          "correctAnswer": 0
        },
        {
          "id": "t7",
          "question": "Which surface is Wimbledon played on?",
          "options": ["Clay", "Hard court", "Grass", "Carpet"],
          "correctAnswer": 2
        },
        {
          "id": "t8",
          "question": "Who holds the record for most Grand Slam singles titles in women's tennis?",
          "options": ["Serena Williams", "Steffi Graf", "Margaret Court", "Chris Evert"],
          "correctAnswer": 2
        },
        {
          "id": "t9",
          "question": "What is an ace in tennis?",
          "options": ["A perfect volley", "A serve that the opponent cannot return", "A winning backhand", "A double fault"],
          "correctAnswer": 1
        },
        {
          "id": "t10",
          "question": "How many games must a player win to take a set?",
          "options": ["4", "5", "6", "7"],
          "correctAnswer": 2
        },
        {
          "id": "t11",
          "question": "What is the height of a tennis net at the center?",
          "options": ["3 feet", "3.5 feet", "4 feet", "4.5 feet"],
          "correctAnswer": 0
        },
        {
          "id": "t12",
          "question": "Which player is known as 'The King of Clay'?",
          "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
          "correctAnswer": 1
        },
        {
          "id": "t13",
          "question": "What does ATP stand for in tennis?",
          "options": ["Association of Tennis Professionals", "American Tennis Players", "All Tennis Pros", "Advanced Tennis Program"],
          "correctAnswer": 0
        },
        {
          "id": "t14",
          "question": "How many points are needed to win a tiebreak?",
          "options": ["6", "7", "8", "9"],
          "correctAnswer": 1
        },
        {
          "id": "t15",
          "question": "Which Grand Slams are played on hard courts?",
          "options": ["Australian Open and US Open", "French Open and Wimbledon", "US Open only", "All four"],
          "correctAnswer": 0
        },
        {
          "id": "t16",
          "question": "What is a double fault in tennis?",
          "options": ["Missing two volleys", "Two consecutive service faults", "Hitting the net twice", "Double hitting the ball"],
          "correctAnswer": 1
        },
        {
          "id": "t17",
          "question": "Who was the youngest player to win a Grand Slam?",
          "options": ["Martina Hingis", "Monica Seles", "Steffi Graf", "Maria Sharapova"],
          "correctAnswer": 0
        },
        {
          "id": "t18",
          "question": "What is the Davis Cup in tennis?",
          "options": ["Women's team competition", "Men's team competition", "Mixed doubles tournament", "Junior championship"],
          "correctAnswer": 1
        },
        {
          "id": "t19",
          "question": "How long is a tennis court?",
          "options": ["78 feet", "84 feet", "90 feet", "96 feet"],
          "correctAnswer": 0
        },
        {
          "id": "t20",
          "question": "What is a bagel in tennis?",
          "options": ["A type of serve", "Winning a set 6-0", "A tennis snack", "A doubles strategy"],
          "correctAnswer": 1
        }
      ]
  },
  
  movies: {
    english: [
      {
        id: "e1",
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: 2
      },
      {
        id: "e2",
        question: "Who directed the movie 'Inception'?",
        options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
        correctAnswer: 1
      },
      {
        id: "e3",
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: 2
      },
      {
        id: "e4",
        question: "What is the highest-grossing film of all time (as of 2023)?",
        options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"],
        correctAnswer: 1
      },
      {
        id: "e5",
        question: "In which year was the first 'Star Wars' movie released?",
        options: ["1975", "1977", "1979", "1980"],
        correctAnswer: 1
      },
      {
        id: "e6",
        question: "Who played the Joker in 'The Dark Knight'?",
        options: ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"],
        correctAnswer: 1
      },
      {
        id: "e7",
        question: "Which movie features the quote 'May the Force be with you'?",
        options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"],
        correctAnswer: 1
      },
      {
        id: "e8",
        question: "Who directed 'Pulp Fiction'?",
        options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "David Fincher"],
        correctAnswer: 1
      },
      {
        id: "e9",
        question: "Which movie won the first Academy Award for Best Picture?",
        options: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"],
        correctAnswer: 0
      },
      {
        id: "e10",
        question: "Who played Forrest Gump in the movie of the same name?",
        options: ["Tom Cruise", "Tom Hanks", "Will Smith", "Brad Pitt"],
        correctAnswer: 1
      },
      {
        id: "e11",
        question: "Which movie features the song 'My Heart Will Go On'?",
        options: ["Ghost", "Dirty Dancing", "Titanic", "The Bodyguard"],
        correctAnswer: 2
      },
      {
        id: "e12",
        question: "Who directed 'Jaws'?",
        options: ["George Lucas", "Steven Spielberg", "Ridley Scott", "James Cameron"],
        correctAnswer: 1
      },
      {
        id: "e13",
        question: "Which actor played Neo in 'The Matrix'?",
        options: ["Keanu Reeves", "Brad Pitt", "Will Smith", "Tom Cruise"],
        correctAnswer: 0
      },
      {
        id: "e14",
        question: "What is the name of the hobbit in 'The Lord of the Rings'?",
        options: ["Bilbo", "Frodo", "Sam", "Merry"],
        correctAnswer: 1
      },
      {
        id: "e15",
        question: "Which movie features the character Hannibal Lecter?",
        options: ["Seven", "Zodiac", "The Silence of the Lambs", "Psycho"],
        correctAnswer: 2
      },
      {
        id: "e16",
        question: "Who directed 'Goodfellas'?",
        options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Michael Mann"],
        correctAnswer: 1
      },
      {
        id: "e17",
        question: "Which movie won the Academy Award for Best Picture in 2019?",
        options: ["Green Book", "Roma", "A Star Is Born", "Black Panther"],
        correctAnswer: 0
      },
      {
        id: "e18",
        question: "Who played Wolverine in the X-Men movies?",
        options: ["Ryan Reynolds", "Hugh Jackman", "Russell Crowe", "Christian Bale"],
        correctAnswer: 1
      },
      {
        id: "e19",
        question: "Which movie features the quote 'Here's looking at you, kid'?",
        options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Maltese Falcon"],
        correctAnswer: 1
      },
      {
        id: "e20",
        question: "Who directed 'E.T. the Extra-Terrestrial'?",
        options: ["George Lucas", "Steven Spielberg", "Ridley Scott", "James Cameron"],
        correctAnswer: 1
      }
    ],
    hindi: [
      {
        id: "h1",
        question: "Which actor is known as the 'King of Bollywood'?",
        options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Akshay Kumar"],
        correctAnswer: 2
      },
      {
        id: "h2",
        question: "Which movie featured the song 'Jai Ho'?",
        options: ["3 Idiots", "Slumdog Millionaire", "Dangal", "Lagaan"],
        correctAnswer: 1
      },
      {
        id: "h3",
        question: "Who directed the movie 'Sholay'?",
        options: ["Yash Chopra", "Ramesh Sippy", "Raj Kapoor", "Guru Dutt"],
        correctAnswer: 1
      },
      {
        id: "h4",
        question: "Which actress is known as the 'Queen of Bollywood'?",
        options: ["Deepika Padukone", "Priyanka Chopra", "Madhuri Dixit", "Kajol"],
        correctAnswer: 2
      },
      {
        id: "h5",
        question: "In which year was the movie 'Mughal-E-Azam' released?",
        options: ["1958", "1960", "1962", "1965"],
        correctAnswer: 1
      },
      {
        id: "h6",
        question: "Which movie is considered the first blockbuster of Indian cinema?",
        options: ["Mother India", "Mughal-E-Azam", "Sholay", "Awaara"],
        correctAnswer: 2
      },
      {
        id: "h7",
        question: "Who composed music for the movie 'Dilwale Dulhania Le Jayenge'?",
        options: ["A.R. Rahman", "Jatin-Lalit", "Laxmikant-Pyarelal", "R.D. Burman"],
        correctAnswer: 1
      },
      {
        id: "h8",
        question: "Which actress won the National Film Award for 'Queen'?",
        options: ["Kangana Ranaut", "Deepika Padukone", "Priyanka Chopra", "Alia Bhatt"],
        correctAnswer: 0
      },
      {
        id: "h9",
        question: "In which movie did Amitabh Bachchan play the role of 'Vijay'?",
        options: ["Sholay", "Deewaar", "Zanjeer", "All of the above"],
        correctAnswer: 3
      },
      {
        id: "h10",
        question: "Which movie features the famous dialogue 'Kitne aadmi the'?",
        options: ["Deewaar", "Sholay", "Don", "Trishul"],
        correctAnswer: 1
      },
      {
        id: "h11",
        question: "Who directed the movie '3 Idiots'?",
        options: ["Rajkumar Hirani", "Aamir Khan", "Vidhu Vinod Chopra", "Sanjay Leela Bhansali"],
        correctAnswer: 0
      },
      {
        id: "h12",
        question: "Which movie won the Academy Award for Best Foreign Language Film?",
        options: ["Lagaan", "Mother India", "Salaam Bombay", "None from India"],
        correctAnswer: 3
      },
      {
        id: "h13",
        question: "In which year was the movie 'Dangal' released?",
        options: ["2015", "2016", "2017", "2018"],
        correctAnswer: 1
      },
      {
        id: "h14",
        question: "Who played the lead role in 'PK'?",
        options: ["Shah Rukh Khan", "Aamir Khan", "Salman Khan", "Hrithik Roshan"],
        correctAnswer: 1
      },
      {
        id: "h15",
        question: "Which movie is based on the life of wrestler Mahavir Singh Phogat?",
        options: ["Sultan", "Dangal", "Bhaag Milkha Bhaag", "Mary Kom"],
        correctAnswer: 1
      },
      {
        id: "h16",
        question: "Who is known as the 'Tragedy King' of Bollywood?",
        options: ["Raj Kapoor", "Dilip Kumar", "Dev Anand", "Guru Dutt"],
        correctAnswer: 1
      },
      {
        id: "h17",
        question: "Which movie features the song 'Tere Liye'?",
        options: ["Veer-Zaara", "Fanaa", "Kabhi Khushi Kabhie Gham", "Kal Ho Naa Ho"],
        correctAnswer: 0
      },
      {
        id: "h18",
        question: "In which movie did Aishwarya Rai make her Bollywood debut?",
        options: ["Hum Dil De Chuke Sanam", "Taal", "Aur Pyaar Ho Gaya", "Iruvar"],
        correctAnswer: 2
      },
      {
        id: "h19",
        question: "Which director is known for movies like 'Black' and 'Devdas'?",
        options: ["Karan Johar", "Sanjay Leela Bhansali", "Yash Chopra", "Subhash Ghai"],
        correctAnswer: 1
      },
      {
        id: "h20",
        question: "Which movie features the character 'Mogambo'?",
        options: ["Mr. India", "Lamhe", "Chandni", "Darr"],
        correctAnswer: 0
      }
    ],
    tamil: [
      {
        id: "ta1",
        question: "Who is known as 'Thalaivar' in Tamil cinema?",
        options: ["Kamal Haasan", "Rajinikanth", "Vijay", "Ajith"],
        correctAnswer: 1
      },
      {
        id: "ta2",
        question: "Which Tamil film won Best Feature Film in Tamil at the 65th National Film Awards (2018)?",
        options: ["Aramm", "Mersal", "To Let", "Vivegam"],
        correctAnswer: 2
      },
      {
        id: "ta3",
        question: "Who composed music for the movie 'Roja'?",
        options: ["Ilaiyaraaja", "A.R. Rahman", "Harris Jayaraj", "Yuvan Shankar Raja"],
        correctAnswer: 1
      },
      {
        id: "ta4",
        question: "Which actor is known as 'Ulaganayagan'?",
        options: ["Rajinikanth", "Kamal Haasan", "Suriya", "Vikram"],
        correctAnswer: 1
      },
      {
        id: "ta5",
        question: "In which year was the movie 'Anbe Sivam' released?",
        options: ["2001", "2003", "2005", "2007"],
        correctAnswer: 1
      },
      {
        id: "ta6",
        question: "Which Indian film was India's official entry to the 95th Academy Awards (2023)?",
        options: ["RRR", "Chhello Show", "Kantara", "PS-1"],
        correctAnswer: 1
      },
      {
        id: "ta7",
        question: "Who directed the movie 'Baahubali'?",
        options: ["Mani Ratnam", "S.S. Rajamouli", "Shankar", "K.V. Anand"],
        correctAnswer: 1
      },
      {
        id: "ta8",
        question: "Which actress is known as the 'Lady Superstar' of Tamil cinema?",
        options: ["Nayanthara", "Trisha", "Samantha", "Jyothika"],
        correctAnswer: 0
      },
      {
        id: "ta9",
        question: "Who is the music director of the movie 'Enthiran'?",
        options: ["Ilaiyaraaja", "A.R. Rahman", "Harris Jayaraj", "Yuvan Shankar Raja"],
        correctAnswer: 1
      },
      {
        id: "ta10",
        question: "Which movie featured the famous dialogue 'Naanum oru thadava sonna nooru thadava sonna maadiri'?",
        options: ["Baasha", "Muthu", "Padayappa", "Sivaji"],
        correctAnswer: 0
      },
      {
        id: "ta11",
        question: "Who directed the movie 'Bombay'?",
        options: ["K. Balachander", "Mani Ratnam", "Bharathiraja", "Mahendran"],
        correctAnswer: 1
      },
      {
        id: "ta12",
        question: "Which Tamil actor is known as 'Ilaya Thalapathi'?",
        options: ["Suriya", "Karthi", "Vijay", "Dhanush"],
        correctAnswer: 2
      },
      {
        id: "ta13",
        question: "In which movie did Kamal Haasan play 10 different roles?",
        options: ["Dasavathaaram", "Indian", "Pushpak", "Mahanadi"],
        correctAnswer: 0
      },
      {
        id: "ta14",
        question: "Who composed music for the movie 'Iruvar'?",
        options: ["A.R. Rahman", "Ilaiyaraaja", "Harris Jayaraj", "Vidyasagar"],
        correctAnswer: 0
      },
      {
        id: "ta15",
        question: "Which movie is considered Rajinikanth's breakthrough film?",
        options: ["16 Vayathinile", "Baasha", "Mullum Malarum", "Apoorva Raagangal"],
        correctAnswer: 3
      },
      {
        id: "ta16",
        question: "Who directed the movie 'Nayagan'?",
        options: ["K. Balachander", "Mani Ratnam", "Bharathiraja", "Mahendran"],
        correctAnswer: 1
      },
      {
        id: "ta17",
        question: "Which Tamil movie was the highest-grossing film of 2022?",
        options: ["Beast", "Valimai", "Vikram", "Ponniyin Selvan"],
        correctAnswer: 2
      },
      {
        id: "ta18",
        question: "Who is known as the 'Makkal Thilagam' in Tamil cinema?",
        options: ["M.G. Ramachandran", "Sivaji Ganesan", "Rajinikanth", "Kamal Haasan"],
        correctAnswer: 0
      },
      {
        id: "ta19",
        question: "Which movie features the song 'Malare Ninne Kanathirunnal'?",
        options: ["Premam", "Charlie", "Bangalore Days", "Ustad Hotel"],
        correctAnswer: 0
      },
      {
        id: "ta20",
        question: "Who directed the movie 'Soorarai Pottru'?",
        options: ["Vetrimaaran", "Sudha Kongara", "Lokesh Kanagaraj", "Karthik Subbaraj"],
        correctAnswer: 1
      }
    ]
  },
  technical: {
    c: [
      {
        id: "c_1",
        question: "Who developed the C programming language?",
        options: ["Dennis Ritchie", "Brian Kernighan", "Ken Thompson", "Bjarne Stroustrup"],
        correctAnswer: 0
      },
      {
        id: "c_2",
        question: "Which header file is required for input/output operations in C?",
        options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
        correctAnswer: 1
      },
      {
        id: "c_3",
        question: "What is the size of an int in C (typically)?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
        correctAnswer: 3
      },
      {
        id: "c_4",
        question: "Which operator is used to access the value at a pointer in C?",
        options: ["&", "*", "->", "."],
        correctAnswer: 1
      },
      {
        id: "c_5",
        question: "What does 'malloc' function do in C?",
        options: ["Frees memory", "Allocates memory", "Copies memory", "Compares memory"],
        correctAnswer: 1
      },
      {
        id: "c_6",
        question: "What is the correct way to declare a pointer in C?",
        options: ["int ptr", "int *ptr", "ptr int", "*int ptr"],
        correctAnswer: 1
      },
      {
        id: "c_7",
        question: "Which function is used to free allocated memory in C?",
        options: ["free()", "delete()", "dealloc()", "remove()"],
        correctAnswer: 0
      },
      {
        id: "c_8",
        question: "What does 'sizeof' operator return in C?",
        options: ["Memory address", "Size in bytes", "Number of elements", "Variable type"],
        correctAnswer: 1
      },
      {
        id: "c_9",
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None"],
        correctAnswer: 2
      },
      {
        id: "c_10",
        question: "What is the range of char data type in C?",
        options: ["-127 to 128", "-128 to 127", "0 to 255", "Depends on system"],
        correctAnswer: 1
      },
      {
        id: "c_11",
        question: "Which operator has the highest precedence in C?",
        options: ["++", "*", "()", "+"],
        correctAnswer: 2
      },
      {
        id: "c_12",
        question: "What does 'static' keyword do in C?",
        options: ["Makes variable global", "Preserves variable value between function calls", "Makes variable constant", "Allocates memory"],
        correctAnswer: 1
      },
      {
        id: "c_13",
        question: "Which header file contains mathematical functions?",
        options: ["<stdio.h>", "<stdlib.h>", "<math.h>", "<string.h>"],
        correctAnswer: 2
      },
      {
        id: "c_14",
        question: "What is the default return type of main() function?",
        options: ["void", "int", "char", "float"],
        correctAnswer: 1
      },
      {
        id: "c_15",
        question: "Which operator is used for modulus operation?",
        options: ["%", "mod", "//", "\\"],
        correctAnswer: 0
      },
      {
        id: "c_16",
        question: "What does 'const' keyword do in C?",
        options: ["Creates constant", "Declares variable", "Allocates memory", "Frees memory"],
        correctAnswer: 0
      },
      {
        id: "c_17",
        question: "Which function is used to compare two strings?",
        options: ["compare()", "strcmp()", "strcomp()", "equals()"],
        correctAnswer: 1
      },
      {
        id: "c_18",
        question: "What is the size of 'double' data type?",
        options: ["4 bytes", "8 bytes", "16 bytes", "Depends on system"],
        correctAnswer: 1
      },
      {
        id: "c_19",
        question: "Which statement is used to terminate a loop?",
        options: ["break", "continue", "exit", "return"],
        correctAnswer: 0
      },
      {
        id: "c_20",
        question: "What does 'NULL' represent in C?",
        options: ["Zero", "Empty string", "Null pointer", "Undefined"],
        correctAnswer: 2
      }
    ],
    java: [
      {
        id: "j1",
        question: "Java was originally developed by which company?",
        options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
        correctAnswer: 1
      },
      {
        id: "j2",
        question: "Which keyword is used to define a constant in Java?",
        options: ["const", "final", "static", "immutable"],
        correctAnswer: 1
      },
      {
        id: "j3",
        question: "What is the extension of a Java source file?",
        options: [".java", ".class", ".jar", ".jav"],
        correctAnswer: 0
      },
      {
        id: "j4",
        question: "Which method is the entry point of a Java application?",
        options: ["start()", "main()", "run()", "execute()"],
        correctAnswer: 1
      },
      {
        id: "j5",
        question: "What does JVM stand for?",
        options: ["Java Virtual Machine", "Java Variable Method", "Java Version Manager", "Java Vector Model"],
        correctAnswer: 0
      },
      {
        id: "j6",
        question: "Which keyword is used for inheritance in Java?",
        options: ["implements", "extends", "inherits", "derived"],
        correctAnswer: 1
      },
      {
        id: "j7",
        question: "What is the size of int data type in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Platform dependent"],
        correctAnswer: 1
      },
      {
        id: "j8",
        question: "Which collection class allows duplicate elements?",
        options: ["Set", "Map", "List", "Queue"],
        correctAnswer: 2
      },
      {
        id: "j9",
        question: "What does 'static' keyword mean in Java?",
        options: ["Variable cannot be changed", "Belongs to class rather than instance", "Private access", "Protected access"],
        correctAnswer: 1
      },
      {
        id: "j10",
        question: "Which operator is used to create objects in Java?",
        options: ["create", "new", "object", "instance"],
        correctAnswer: 1
      },
      {
        id: "j11",
        question: "What is method overloading in Java?",
        options: ["Same method name with different parameters", "Different method names", "Inheritance concept", "Interface implementation"],
        correctAnswer: 0
      },
      {
        id: "j12",
        question: "Which keyword is used to prevent inheritance?",
        options: ["private", "protected", "final", "static"],
        correctAnswer: 2
      },
      {
        id: "j13",
        question: "What does 'this' keyword refer to?",
        options: ["Current class", "Parent class", "Current object", "Static members"],
        correctAnswer: 2
      },
      {
        id: "j14",
        question: "Which exception is thrown for array index out of bounds?",
        options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IndexException", "BoundsException"],
        correctAnswer: 1
      },
      {
        id: "j15",
        question: "What is the wrapper class for int?",
        options: ["Int", "Integer", "Number", "Numeric"],
        correctAnswer: 1
      },
      {
        id: "j16",
        question: "Which method is used to start a thread?",
        options: ["begin()", "start()", "run()", "execute()"],
        correctAnswer: 1
      },
      {
        id: "j17",
        question: "What does 'super' keyword do?",
        options: ["Calls parent constructor", "Creates object", "Defines variable", "Imports package"],
        correctAnswer: 0
      },
      {
        id: "j18",
        question: "Which access modifier provides the most restrictive access?",
        options: ["public", "protected", "default", "private"],
        correctAnswer: 3
      },
      {
        id: "j19",
        question: "What is the default value of boolean in Java?",
        options: ["true", "false", "0", "null"],
        correctAnswer: 1
      },
      {
        id: "j20",
        question: "Which keyword is used to implement multiple inheritance of type?",
        options: ["extends", "implements", "inherits", "derives"],
        correctAnswer: 1
      }
    ],
    python: [
      {
        id: "p1",
        question: "Who created Python?",
        options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
        correctAnswer: 0
      },
      {
        id: "p2",
        question: "Which of the following is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correctAnswer: 1
      },
      {
        id: "p3",
        question: "What is the correct way to create a list in Python?",
        options: ["list = ()", "list = []", "list = {}", "list = <>"],
        correctAnswer: 1
      },
      {
        id: "p4",
        question: "Which keyword is used for exception handling in Python?",
        options: ["catch", "except", "handle", "error"],
        correctAnswer: 1
      },
      {
        id: "p5",
        question: "What does 'pip' stand for in Python?",
        options: ["Python Installer Program", "Pip Installs Packages", "Python Index Package", "Package Installation Program"],
        correctAnswer: 1
      },
      {
        id: "p6",
        question: "What is the correct way to create a dictionary in Python?",
        options: ["dict = []", "dict = {}", "dict = ()", "dict = <>"],
        correctAnswer: 1
      },
      {
        id: "p7",
        question: "Which of the following is NOT a valid Python data type?",
        options: ["list", "tuple", "array", "set"],
        correctAnswer: 2
      },
      {
        id: "p8",
        question: "What does the 'len()' function do?",
        options: ["Returns length of object", "Creates list", "Defines function", "Imports module"],
        correctAnswer: 0
      },
      {
        id: "p9",
        question: "Which keyword is used to create a class in Python?",
        options: ["class", "def", "object", "create"],
        correctAnswer: 0
      },
      {
        id: "p10",
        question: "What is the output of print(type(5.0))?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        correctAnswer: 1
      },
      {
        id: "p11",
        question: "Which method is used to add an element to a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correctAnswer: 1
      },
      {
        id: "p12",
        question: "What does 'import' keyword do?",
        options: ["Creates variable", "Defines function", "Brings in external modules", "Starts program"],
        correctAnswer: 2
      },
      {
        id: "p13",
        question: "Which of these is the correct way to create a comment?",
        options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
        correctAnswer: 2
      },
      {
        id: "p14",
        question: "What is the result of 3 ** 2 in Python?",
        options: ["6", "9", "5", "Error"],
        correctAnswer: 1
      },
      {
        id: "p15",
        question: "Which keyword is used for loops in Python?",
        options: ["loop", "for", "repeat", "iterate"],
        correctAnswer: 1
      },
      {
        id: "p16",
        question: "What does 'self' refer to in Python classes?",
        options: ["Class name", "Current instance", "Parent class", "Global variable"],
        correctAnswer: 1
      },
      {
        id: "p17",
        question: "Which function is used to read user input?",
        options: ["input()", "read()", "get()", "scan()"],
        correctAnswer: 0
      },
      {
        id: "p18",
        question: "What is the correct syntax for if statement?",
        options: ["if x == 5:", "if(x == 5):", "if x = 5:", "if x equals 5:"],
        correctAnswer: 0
      },
      {
        id: "p19",
        question: "Which method converts string to lowercase?",
        options: ["toLower()", "lower()", "lowercase()", "downcase()"],
        correctAnswer: 1
      },
      {
        id: "p20",
        question: "What does 'None' represent in Python?",
        options: ["Zero", "Empty string", "Null value", "False"],
        correctAnswer: 2
      }
    ],
    cpp: [
      {
        id: "cpp1",
        question: "C++ was developed by whom?",
        options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
        correctAnswer: 1
      },
      {
        id: "cpp2",
        question: "Which operator is used for scope resolution in C++?",
        options: ["::", "->", ".", "&"],
        correctAnswer: 0
      },
      {
        id: "cpp3",
        question: "What is the standard namespace in C++?",
        options: ["standard", "std", "system", "main"],
        correctAnswer: 1
      },
      {
        id: "cpp4",
        question: "Which header file is required for input/output stream operations?",
        options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stream.h>"],
        correctAnswer: 1
      },
      {
        id: "cpp5",
        question: "What is the correct way to declare a pointer in C++?",
        options: ["int ptr", "int *ptr", "ptr int", "*int ptr"],
        correctAnswer: 1
      },
      {
        id: "cpp6",
        question: "What does 'new' operator do in C++?",
        options: ["Deletes memory", "Allocates memory", "Copies object", "Creates function"],
        correctAnswer: 1
      },
      {
        id: "cpp7",
        question: "Which access specifier is default for class members?",
        options: ["public", "private", "protected", "static"],
        correctAnswer: 1
      },
      {
        id: "cpp8",
        question: "What is method overriding in C++?",
        options: ["Same function name in derived class", "Multiple functions same name", "Virtual functions", "Function templates"],
        correctAnswer: 0
      },
      {
        id: "cpp9",
        question: "Which keyword is used for inheritance in C++?",
        options: ["inherits", "extends", ":", "derives"],
        correctAnswer: 2
      },
      {
        id: "cpp10",
        question: "What does 'virtual' keyword do?",
        options: ["Creates object", "Enables polymorphism", "Allocates memory", "Defines variable"],
        correctAnswer: 1
      },
      {
        id: "cpp11",
        question: "Which operator is used to access class members?",
        options: [".", "->", "::", "All of the above"],
        correctAnswer: 3
      },
      {
        id: "cpp12",
        question: "What is constructor in C++?",
        options: ["Destroys object", "Creates object", "Special member function", "Normal function"],
        correctAnswer: 2
      },
      {
        id: "cpp13",
        question: "Which of these is NOT a C++ data type?",
        options: ["int", "float", "boolean", "char"],
        correctAnswer: 2
      },
      {
        id: "cpp14",
        question: "What does 'delete' operator do?",
        options: ["Creates object", "Deallocates memory", "Copies object", "Modifies object"],
        correctAnswer: 1
      },
      {
        id: "cpp15",
        question: "Which loop executes at least once?",
        options: ["for", "while", "do-while", "None"],
        correctAnswer: 2
      },
      {
        id: "cpp16",
        question: "What is function overloading?",
        options: ["Same function different parameters", "Different functions", "Virtual functions", "Inline functions"],
        correctAnswer: 0
      },
      {
        id: "cpp17",
        question: "Which header file contains string class?",
        options: ["<string.h>", "<string>", "<cstring>", "<str>"],
        correctAnswer: 1
      },
      {
        id: "cpp18",
        question: "What does 'const' keyword do?",
        options: ["Makes variable constant", "Creates object", "Deletes memory", "Defines function"],
        correctAnswer: 0
      },
      {
        id: "cpp19",
        question: "Which of these is a reference operator?",
        options: ["*", "&", "->", "::"],
        correctAnswer: 1
      },
      {
        id: "cpp20",
        question: "What is destructor in C++?",
        options: ["Creates object", "Destroys object", "Copies object", "Modifies object"],
        correctAnswer: 1
      }
    ],
    javascript: [
      {
        id: "js1",
        question: "JavaScript was originally developed by which company?",
        options: ["Microsoft", "Netscape", "Sun Microsystems", "Oracle"],
        correctAnswer: 1
      },
      {
        id: "js2",
        question: "Which keyword is used to declare a variable in JavaScript (ES6)?",
        options: ["var", "let", "const", "Both let and const"],
        correctAnswer: 3
      },
      {
        id: "js3",
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correctAnswer: 2
      },
      {
        id: "js4",
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correctAnswer: 2
      },
      {
        id: "js5",
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        correctAnswer: 1
      },
      {
        id: "js6",
        question: "What does '===' operator do?",
        options: ["Assignment", "Equality", "Strict equality", "Not equal"],
        correctAnswer: 2
      },
      {
        id: "js7",
        question: "Which method adds elements to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correctAnswer: 0
      },
      {
        id: "js8",
        question: "What is the correct way to create a function?",
        options: ["function myFunc()", "create myFunc()", "def myFunc()", "func myFunc()"],
        correctAnswer: 0
      },
      {
        id: "js9",
        question: "Which method removes the last element from an array?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: 0
      },
      {
        id: "js10",
        question: "What does 'this' keyword refer to?",
        options: ["Current function", "Current object", "Global object", "Depends on context"],
        correctAnswer: 3
      },
      {
        id: "js11",
        question: "Which operator is used for string concatenation?",
        options: ["+", "&", ".", "concat"],
        correctAnswer: 0
      },
      {
        id: "js12",
        question: "What is a closure in JavaScript?",
        options: ["Function with preserved lexical scope", "Block scope", "Prototype chain", "Garbage collection"],
        correctAnswer: 0
      },
      {
        id: "js13",
        question: "Which method converts JSON string to object?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
        correctAnswer: 0
      },
      {
        id: "js14",
        question: "What does 'null' represent?",
        options: ["Undefined", "Empty string", "No value", "Zero"],
        correctAnswer: 2
      },
      {
        id: "js15",
        question: "Which loop iterates over object properties?",
        options: ["for", "while", "for...in", "forEach"],
        correctAnswer: 2
      },
      {
        id: "js16",
        question: "What is callback function?",
        options: ["Function passed as argument", "Recursive function", "Anonymous function", "Arrow function"],
        correctAnswer: 0
      },
      {
        id: "js17",
        question: "Which method finds element in array?",
        options: ["search()", "find()", "locate()", "get()"],
        correctAnswer: 1
      },
      {
        id: "js18",
        question: "What does 'typeof' operator return?",
        options: ["Value", "Type of variable", "Size", "Memory address"],
        correctAnswer: 1
      },
      {
        id: "js19",
        question: "Which statement handles exceptions?",
        options: ["try...catch", "if...else", "switch", "for"],
        correctAnswer: 0
      },
      {
        id: "js20",
        question: "What is promise in JavaScript?",
        options: ["Synchronous operation", "Asynchronous operation", "Loop structure", "Variable declaration"],
        correctAnswer: 1
      }
    ]
  },
  currentAffairs: {
    world: [
      {
        id: "ca1",
        question: "Who is the current Secretary-General of the United Nations (as of 2024)?",
        options: ["Ban Ki-moon", "António Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
        correctAnswer: 1
      },
      {
        id: "ca2",
        question: "Which country hosted the 2024 Summer Olympics?",
        options: ["Japan", "France", "USA", "Australia"],
        correctAnswer: 1
      },
      {
        id: "ca3",
        question: "What is the currency of the European Union?",
        options: ["Pound", "Dollar", "Euro", "Franc"],
        correctAnswer: 2
      },
      {
        id: "ca4",
        question: "Which organization was awarded the Nobel Peace Prize in 2020?",
        options: ["WHO", "UNICEF", "World Food Programme", "Red Cross"],
        correctAnswer: 2
      },
      {
        id: "ca5",
        question: "Which country left the European Union in 2020?",
        options: ["Norway", "Switzerland", "United Kingdom", "Iceland"],
        correctAnswer: 2
      }
    ]
  },
  technology: {
    general: [
      {
        id: "tech1",
        question: "What does 'AI' stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
        correctAnswer: 1
      },
      {
        id: "tech2",
        question: "Which company developed the iPhone?",
        options: ["Samsung", "Google", "Apple", "Microsoft"],
        correctAnswer: 2
      },
      {
        id: "tech3",
        question: "What does 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Resource Location", "Universal Reference Link"],
        correctAnswer: 0
      },
      {
        id: "tech4",
        question: "Which programming language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 2
      },
      {
        id: "tech5",
        question: "What does 'IoT' stand for?",
        options: ["Internet of Things", "Integration of Technology", "Intelligence of Things", "Interface of Technology"],
        correctAnswer: 0
      }
    ]
  }
};

export const getRandomizedQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.map(question => ({
    ...question,
    options: [...question.options].sort(() => Math.random() - 0.5)
  }));
};