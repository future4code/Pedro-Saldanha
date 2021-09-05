CREATE TABLE IF NOT EXISTS pokemon_go(
  pokedex_number INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL unique,
  generation INT NOT NULL,
  evolution_stage VARCHAR(255),
  family_id VARCHAR(11),
  type_1 VARCHAR(255) NOT NULL,
  type_2 VARCHAR(255),
  weather_1 VARCHAR(255) NOT NULL,
  weather_2 VARCHAR(255),
  stat_total INT NOT NULL,
  atk INT NOT NULL,
  def INT NOT NULL,
  sta INT NOT NULL
);