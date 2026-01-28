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
          <p>
            Rick Sanchez
          </p>
          <p>
            Humano
          </p>
          <span>
            Alive
          </span>
          <div className="personagem2">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>
            <p>
              Morty Smith
            </p>
            <p>
              Humano
            </p>
            <span>
              Alive
            </span>
            <div className="personagem3">
              <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"/>
              <p>
                Summer Smith
              </p>
              <p>
                Humano
              </p>
              <span>
                Alive
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};