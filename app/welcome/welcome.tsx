export function Welcome() {
  const titulo = "Hello Zelda!" 


  return (
    <>
      <div className="header">
        <h1>
          Rick and Morty
        </h1>
      </div>
      <div className="personagens">
        <div className="personagem">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
          <div className="detalhes">
          <p>
            Rick Sanchez
          </p>
          </div>
          <div className="especie">
          <p>
            Humano
          </p>
          </div>
          <span>
            Alive
          </span>
        </div>
        <div className="personagem">
          <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>
          <div className="detalhes">
          <p>
            Morty Smith
          </p>
          </div>
          <div className="especie">
          <p>
            Humano
          </p>
          </div>
          <span>
            Alive
          </span>
        </div>
        <div className="personagem">
          <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"/>
          <div className="detalhes">
          <p>
            Summer Smith
          </p>
          </div>
          <div className="especie">
          <p>
            Humano
          </p>
          </div>
          <span>
            Alive
          </span>
        </div>
      </div>
    </>
  );
};