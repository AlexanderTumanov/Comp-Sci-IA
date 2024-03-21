function SubmitEvent() {
  // Retrieve the submitted answers from index.html
  var q1ans = document.querySelector('input[name="q1"]:checked');
  var q2ans = document.querySelector('input[name="q2"]:checked');
  var q3ans = document.querySelector('input[name="q3"]:checked');
  var q4ans = document.querySelector('input[name="q4"]:checked');

  let experience = 0;
  let platform = null;
  let genre = null;
  let enjoyment = null;

  // experience values
  if (q1ans == q1a) {
    experience += 1;
  } else if (q1ans == q1b) {
    experience += 2;
  } else if (q1ans == q1c) {
    experience += 3;
  } else if (q1ans == q1d) {
    experience += 4;
  }

  // platform values
  if (q2ans == q2a) {
    platform = "PC";
  } else if (q2ans == q2b) {
    platform = "Console";
  } else if (q2ans == q2c) {
    platform = "Mobile";
  }

  // genre values
  if (q3ans == q3a) {
    genre = "FPS";
  } else if (q3ans == q3b) {
    genre = "Sandbox";
  } else if (q3ans == q3c) {
    genre = "Action";
  } else if (q3ans == q3d) {
    genre = "Fighting";
  } else if (q3ans == q3e) {
    genre = "Simulation";
  } else if (q3ans == q3f) {
    genre = "RPG";
  } else if (q3ans == q3g) {
    genre = "Platformer";
  } else if (q3ans == q3h) {
    genre = "Other";
  }

  // enjoyment values
  if (q4ans == q4a) {
    enjoyment = "Not at all";
  } else if (q4ans == q4b) {
    enjoyment = "A little";
  } else if (q4ans == q4c) {
    enjoyment = "A lot";
  } else if (q4ans == q4d) {
    enjoyment = "Loved it";
  } else if (q4ans == q4e) {
    enjoyment = "Never played before";
  }

  // Check if all questions have been answered
  if (
    experience == null ||
    platform == null ||
    genre == null ||
    enjoyment == null
  ) {
    alert("Please answer all questions before submitting");
  }

  // Analyze
  let result = document.getElementById("results");
  if (enjoyment == "Not at all") {
    result.innerHTML = "Try playing a different genre";
    return;
  }
  if (genre == "Platformer") {
    result.innerHTML = "Who even plays platformers lol";
    return;
  }
  if (platform == "PC" && genre == "FPS") {
    if (experience == 4) {
      result.innerHTML = "You should try playing Escape From Tarkov";
    } else if (experience == 3) {
      result.innerHTML = "You should try playing Valorant";
    } else if (experience <= 2) {
      result.innerHTML =
        "You should try playing Counter-Strike: Global Offensive";
    }
  }
  if (platform == "PC" && (genre == "Sandbox" || genre == "Simulation")) {
    if (experience == 4) {
      result.innerHTML = "You should try playing Terraria";
    } else {
      result.innerHTML = "You should try playing Minecraft";
    }
  }
  if (platform == "PC" && (genre == "Action" || genre == "Fighting")) {
    if (experience == 4 || experience == 3) {
      result.innerHTML = "You should try playing Street Fighter 6";
    } else if (experience == 2) {
      result.innerHTML = "You should try playing Mortal Kombat";
    } else {
      result.innerHTML = "You should try playing God of War";
    }
  }
  if (platform == "PC" && (genre == "RPG" || genre == "Other")) {
    if (experience == 4 || experience == 3) {
      result.innerHTML = "You should try playing Baldur's Gate 3";
    } else if (experience == 2) {
      result.innerHTML = "You should try playing Elden Ring";
    } else {
      result.innerHTML = "You should try playing Diablo or the Witcher";
    }
  }
  if (platform == "Console" && genre == "FPS") {
    if (experience == 4) {
      result.innerHTML = "You should try playing Call of Duty";
    } else if (experience == 3) {
      result.innerHTML = "You should try playing Battlefield";
    } else if (experience <= 2) {
      result.innerHTML = "You should try playing Halo";
    }
  }
  if (platform == "Console" && (genre == "Sandbox" || genre == "Simulation")) {
    if (experience == 4) {
      result.innerHTML = "You should try playing Animal Crossing";
    } else {
      result.innerHTML = "You should try playing Stardew Valley";
    }
  }
  if (platform == "Console" && (genre == "Action" || genre == "Fighting")) {
    if (experience == 4 || experience == 3) {
      result.innerHTML = "You should try playing Tekken";
    } else if (experience == 2) {
      result.innerHTML = "You should try playing Mortal Kombat";
    } else {
      result.innerHTML = "You should try playing God of War";
    }
  }
  if (platform == "Console" && (genre == "RPG" || genre == "Other")) {
    if (experience == 4 || experience == 3) {
      result.innerHTML = "You should try playing Final Fantasy";
    } else if (experience == 2) {
      result.innerHTML = "You should try playing Elden Ring";
    } else {
      result.innerHTML = "You should try playing Diablo or the Witcher";
    }
  }
  if (platform == "Mobile" && genre == "FPS") {
    if (experience == 4) {
      result.innerHTML = "You should try playing PUBG";
    } else if (experience == 3) {
      result.innerHTML = "You should try playing Call of Duty Mobile";
    } else if (experience <= 2) {
      result.innerHTML = "You should try playing Fortnite";
    }
  }
  if (platform == "Mobile" && (genre == "Sandbox" || genre == "Simulation")) {
    if (experience >= 3) {
      result.innerHTML = "You should try playing Terraria";
    } else {
      result.innerHTML = "You should try playing Minecraft";
    }
  }
  if (platform == "Mobile" && (genre == "Action" || genre == "Fighting")) {
    if (experience == 4 || experience == 3) {
      result.innerHTML = "You should try playing Mortal Kombat";
    } else if (experience == 2) {
      result.innerHTML = "You should try playing Tekken 7";
    } else {
      result.innerHTML = "You should try playing Shadow Fight 3";
    }
  }
  if (platform == "Mobile" && (genre == "RPG" || genre == "Other")) {
    if (experience >= 2) {
      result.innerHTML = "You should try playing Genshin Impact";
    } else {
      result.innerHTML = "You should try playing Stardew Valley";
    }
  }
}
